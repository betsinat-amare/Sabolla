import React from 'react';

interface SabollaPatternProps {
    className?: string;
}

const SabollaPattern: React.FC<SabollaPatternProps> = ({ className }) => {
    const gradientId = "logoGradient-" + Math.random().toString(36).substr(2, 9);
    const glowId = "logoGlow-" + Math.random().toString(36).substr(2, 9);

    return (
        <svg
            viewBox="0 0 110 175"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: 'visible' }}
        >
            <defs>
                <linearGradient id={gradientId} x1="55" y1="0" x2="55" y2="175" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="currentColor" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
                </linearGradient>

                <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="1.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* 
        Enhanced Sabolla 'A-S' Pattern:
        - Unified single path for seamless rendering.
        - Subtle vertical gradient for depth.
        - Delicate glow filter (soft edge) for a "premium" feel.
      */}
            <path
                d="M55 0 L105 95 H90 L55 48 L40 95 H55 C95 95 110 115 110 145 C110 165 95 170 55 170 H5 V150 H55 C75 150 85 145 85 138 C85 130 75 125 55 125 H10 L10 120 C10 100 20 100 5 125 L55 0 Z"
                fill={`url(#${gradientId})`}
                filter={`url(#${glowId})`}
                stroke="currentColor"
                strokeWidth="0.2"
            />
        </svg >
    );
};

export default SabollaPattern;
