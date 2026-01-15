import { cn } from "@/lib/utils";
import React from "react";

interface RadialGlowBackgroundProps {
    className?: string;
    glowColor?: string;
    glowSize?: string;
    glowPosition?: string;
    backgroundColor?: string;
    children?: React.ReactNode;
}

export const RadialGlowBackground = ({
    className,
    glowColor = "rgba(251,191,36,0.4)", // Gold default
    glowSize = "500px",
    glowPosition = "50% 100px",
    backgroundColor = "#020617",
    children,
}: RadialGlowBackgroundProps) => {
    return (
        <div
            className={cn("w-full relative overflow-hidden", className)}
            style={{ backgroundColor }}
        >
            {/* Radial Glow Background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle ${glowSize} at ${glowPosition}, ${glowColor}, transparent)`,
                }}
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};
