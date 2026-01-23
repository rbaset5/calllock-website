"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LockIconProps {
    icon: LucideIcon;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const sizeConfig = {
    sm: {
        container: "w-12 h-12",
        shackle: "-top-2 w-8 h-6 border-[2px]",
        body: "rounded-xl",
        iconSize: 20,
        keyhole: "bottom-0.5 right-0.5 w-3 h-3",
        keyholeInner: "w-1 h-1.5",
    },
    md: {
        container: "w-16 h-16",
        shackle: "-top-3 w-10 h-8 border-[3px]",
        body: "rounded-2xl",
        iconSize: 30,
        keyhole: "bottom-1 right-1 w-4 h-4",
        keyholeInner: "w-1 h-2",
    },
    lg: {
        container: "w-20 h-20",
        shackle: "-top-4 w-12 h-10 border-[3.5px]",
        body: "rounded-[1.5rem]",
        iconSize: 36,
        keyhole: "bottom-1.5 right-1.5 w-5 h-5",
        keyholeInner: "w-1.5 h-2.5",
    },
};

export function LockIcon({ icon: Icon, size = "md", className }: LockIconProps) {
    const config = sizeConfig[size];

    return (
        <div
            className={cn(
                "relative transition-transform duration-500",
                config.container,
                className
            )}
            aria-hidden="true"
        >
            {/* Lock Shackle */}
            <div
                className={cn(
                    "absolute left-1/2 -translate-x-1/2 border-gold-medium/60 rounded-t-full -z-10",
                    config.shackle
                )}
            />

            {/* Lock Body */}
            <div
                className={cn(
                    "absolute inset-0 bg-linear-to-br from-gold-light via-gold-medium to-gold-dark shadow-lg shadow-primary/20 flex items-center justify-center overflow-hidden",
                    config.body
                )}
            >
                {/* Metallic Shine */}
                <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-transparent to-transparent opacity-50" />

                <Icon
                    size={config.iconSize}
                    className="text-white drop-shadow-lg relative z-10"
                    strokeWidth={size === "lg" ? 1.5 : 2}
                />

                {/* Shine Streak - hover triggered */}
                <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
            </div>

            {/* Keyhole Detail */}
            <div
                className={cn(
                    "absolute bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm",
                    config.keyhole
                )}
            >
                <div className={cn("bg-white/40 rounded-full", config.keyholeInner)} />
            </div>
        </div>
    );
}
