/* Minimal Web Vitals reporting without extra deps */
export type VitalMetric = {
  name: "LCP" | "CLS" | "FCP" | "INP";
  value: number;
};

export type VitalReporter = (metric: VitalMetric) => void;

export function reportWebVitals(report: VitalReporter = console.log): void {
  if (typeof window === "undefined" || typeof PerformanceObserver === "undefined") return;

  try {
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const last = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number };
      if (last) {
        const value = (last as any).renderTime || (last as any).loadTime || last.startTime;
        report({ name: "LCP", value });
      }
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true } as any);
  } catch {}

  try {
    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as any) {
        if (!entry.hadRecentInput) clsValue += entry.value;
      }
      report({ name: "CLS", value: clsValue });
    });
    clsObserver.observe({ type: "layout-shift", buffered: true } as any);
  } catch {}

  try {
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const fcp = entryList.getEntries().find((e) => (e as any).name === "first-contentful-paint");
      if (fcp) report({ name: "FCP", value: fcp.startTime });
    });
    fcpObserver.observe({ type: "paint", buffered: true } as any);
  } catch {}

  try {
    // Interaction to Next Paint (approx via Event Timing)
    const inpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries() as any) {
        const value = entry.duration; // duration approximates INP
        report({ name: "INP", value });
      }
    });
    inpObserver.observe({ type: "event", buffered: true } as any);
  } catch {}
}
