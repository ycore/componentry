import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
export function SpriteImage({ name, spritePath, manifestPath, lazy, className, alt }) {
    const [manifest, setManifest] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);
    useEffect(() => {
        // Lazy load manifest and image
        const loadData = async () => {
            const response = await fetch(manifestPath);
            const data = await response.json();
            setManifest(data);
            if (!lazy) {
                setIsLoaded(true);
            }
        };
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsLoaded(true);
                observer.disconnect();
            }
        });
        loadData();
        if (imgRef.current && lazy) {
            observer.observe(imgRef.current);
        }
        return () => observer.disconnect();
    }, [lazy, manifestPath]);
    if (!manifest || !isLoaded)
        return _jsx("div", { ref: imgRef, className: className });
    const imageData = manifest[name];
    const deviceScale = Math.min(2, Math.ceil(window.devicePixelRatio || 1));
    const scaleKey = `${deviceScale}x` in imageData ? `${deviceScale}x` : '1x';
    const { x, y, width, height } = imageData[scaleKey];
    return (_jsx("div", { ref: imgRef, className: className, style: {
            backgroundImage: `url(${spritePath})`,
            backgroundPosition: `-${x}px -${y}px`,
            backgroundSize: `${width * (deviceScale / Number.parseInt(scaleKey))}px auto`,
            width: `${width / deviceScale}px`,
            height: `${height / deviceScale}px`,
        }, role: "img", "aria-label": alt }));
}
