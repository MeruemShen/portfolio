import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { cn } from '../lib/utils';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

// Types
type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string, type?: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

// Create context
const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Provider component
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: ToastType = 'info', duration = 3000) => {
    // Check if a toast with the same message and type already exists
    setToasts(prev => {
      // If a similar toast already exists, don't add a new one
      if (prev.some(toast => toast.message === message && toast.type === type)) {
        return prev;
      }
      // Otherwise, add the new toast
      const id = Math.random().toString(36).substring(2, 9);
      return [...prev, { id, message, type, duration }];
    });
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

// Hook to use toast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Toast item component
const ToastItem: React.FC<{ toast: Toast; onClose: () => void }> = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast.duration) {
      const timer = setTimeout(() => {
        onClose();
      }, toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration, onClose]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-[#a265ff]" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-[#a265ff]" />;
    }
  };

  return (
    <div
      className={cn(
        'flex items-center justify-between p-4 mb-2 rounded-lg shadow-lg backdrop-blur-md animate-in fade-in slide-in-from-top-5 duration-300',
        toast.type === 'success' && 'bg-[#1c0e30] border border-[#a265ff]',
        toast.type === 'error' && 'bg-[#1c0e30] border border-red-500',
        toast.type === 'info' && 'bg-[#1c0e30] border border-[#a265ff]'
      )}
    >
      <div className="flex items-center">
        {getIcon()}
        <span className="ml-2 text-white [font-family:'Roboto',Helvetica]">{toast.message}</span>
      </div>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-300 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// Toast container component
const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 w-72 max-w-[calc(100vw-2rem)]">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
};