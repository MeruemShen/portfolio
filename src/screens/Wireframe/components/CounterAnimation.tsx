import React, {useEffect, useMemo, useRef, useState} from "react";
import { useInView } from "framer-motion";
import { animate } from "framer-motion";

export interface CounterAnimationProps {
    targetNumber: number;
    startNumber?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    duration?: number;
    ease?: [number, number, number, number];
    delay?: number;
    
    waitForWindowLoad?: boolean;
    preloadImages?: string[];
    afterImageDelayMs?: number;
}

const DEFAULT_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const CounterAnimation: React.FC<CounterAnimationProps> = ({
    targetNumber,
    startNumber = 1,
    prefix = "+",
    suffix = "",
    className = "",
    duration = 1.0,
    ease = DEFAULT_EASE,
    delay = 0,
    waitForWindowLoad = false,
    preloadImages = [],
    afterImageDelayMs = 0,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.3, once: true });
    const tightenPrefix = useMemo(() => String(targetNumber).startsWith("1"), [targetNumber]);

    const [fontReady, setFontReady] = useState(false);
    useEffect(() => {
        if ((document as any).fonts?.load) {
            (document as any).fonts.load("1rem 'Days One'").then(() => setFontReady(true)).catch(() => setFontReady(true));
        } else setFontReady(true);
    }, []);

    const [windowLoaded, setWindowLoaded] = useState<boolean>(
        waitForWindowLoad ? document.readyState === "complete" : true
    );
    useEffect(() => {
        if (!waitForWindowLoad) return;
        if (document.readyState === "complete") { setWindowLoaded(true); return; }
        const onLoad = () => setWindowLoaded(true);
        window.addEventListener("load", onLoad, { once: true });
        return () => window.removeEventListener("load", onLoad);
    }, [waitForWindowLoad]);

    const [imagesLoaded, setImagesLoaded] = useState<boolean>(preloadImages.length === 0);
    const [imageReadyAt, setImageReadyAt] = useState<number | null>(preloadImages.length === 0 ? Date.now() : null);
    useEffect(() => {
        if (preloadImages.length === 0) return;
        let cancelled = false;
        Promise.all(
            preloadImages.map(
                (src) =>
                    new Promise<void>((resolve) => {
                        const img = new Image();
                        img.onload = () => resolve();
                        img.onerror = () => resolve();
                        img.src = src;
                    })
            )
        ).then(() => {
            if (!cancelled) {
                setImagesLoaded(true);
                setImageReadyAt(Date.now());
            }
        });
        return () => { cancelled = true; };
    }, [preloadImages]);

    const measureRef = useRef<HTMLSpanElement>(null);
    const [lineH, setLineH] = useState<number | null>(null);
    useEffect(() => {
        if (!fontReady) return;
        const t = requestAnimationFrame(() => {
            const h = measureRef.current?.getBoundingClientRect().height || 0;
            setLineH(h || 0);
        });
        return () => cancelAnimationFrame(t);
    }, [fontReady]);

    const [value, setValue] = useState<number>(startNumber);
    const startedRef = useRef(false);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const assetsReady = fontReady && !!lineH && windowLoaded && imagesLoaded;
        if (!inView || !assetsReady || startedRef.current) return;
        startedRef.current = true;

        let extraAfterImage = 0;
        if (afterImageDelayMs > 0 && imageReadyAt) {
            const elapsed = Date.now() - imageReadyAt;
            extraAfterImage = Math.max(0, afterImageDelayMs - elapsed);
        }
        const effectiveDelay = Math.max(0, delay + extraAfterImage);

        const startAnim = () => {
            const controls = animate(startNumber, targetNumber, {
                duration,
                ease,
                onUpdate: (v) => {
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                    rafRef.current = requestAnimationFrame(() => setValue(v));
                },
            });
            return () => controls.stop();
        };

        const t = window.setTimeout(() => { startAnim(); }, effectiveDelay);
        return () => window.clearTimeout(t);
    }, [
        inView,
        fontReady,
        lineH,
        windowLoaded,
        imagesLoaded,
        imageReadyAt,
        afterImageDelayMs,
        startNumber,
        targetNumber,
        duration,
        ease,
        delay,
    ]);

    const clamped = Math.min(value, targetNumber);
    const base = Math.floor(clamped);
    const isFinal = base >= targetNumber;
    const next = isFinal ? base : base + 1;
    const frac = isFinal ? 0 : clamped - base;

    const minWidthCh = Math.max(1, String(targetNumber).length) + "ch";
    const translateY = (lineH ?? 0) * -frac;

    return (
        <div ref={ref} className={`counter-animation ${className}`}>
            <span
                ref={measureRef}
                style={{
                    position: "absolute",
                    visibility: "hidden",
                    pointerEvents: "none",
                    fontFamily: "'Days One', Helvetica, sans-serif",
                    lineHeight: 1,
                    whiteSpace: "pre",
                }}
            >
                0
            </span>

            <span
                style={{
                    fontFamily: "'Days One', Helvetica, sans-serif",
                    fontVariantNumeric: "tabular-nums",
                    display: "inline-flex",
                    alignItems: "center",
                    lineHeight: 1,
                    gap: 0,
                }}
            >
                {[
                    <span
                        key="p"
                        style={{
                            display: "inline-block",
                            marginRight: tightenPrefix ? "-0.10em" : 0.5,
                        }}
                    >
                        {prefix}
                    </span>,

                    <span
                        key="w"
                        style={{
                            position: "relative",
                            display: "inline-block",
                            height: lineH ? `${lineH}px` : "1em",
                            minWidth: minWidthCh,
                            overflow: "hidden",
                            verticalAlign: "bottom",
                        }}
                        aria-live="polite"
                    >
                        <span
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                transform: `translateY(${translateY}px)`,
                                willChange: "transform",
                                margin: 0,
                            }}
                        >
                            <span style={{ margin: 0 }}>{base}</span>
                            <span style={{ margin: 0 }}>{next}</span>
                        </span>
                    </span>,

                    suffix ? <span key="s" style={{ display: "inline-block" }}>{suffix}</span> : null,
                ]}
            </span>
        </div>
    );
};

export default CounterAnimation;