import { cn } from "@/lib/utils";

interface DecorativeGlowProps {
    /** Position preset or custom className */
    position?: "center" | "top-right" | "bottom-left" | "card-corner";
    /** Size of the glow */
    size?: "sm" | "md" | "lg" | "xl";
    /** Opacity level */
    opacity?: number;
    /** Whether to respond to parent group hover */
    hoverEffect?: boolean;
    /** Additional className */
    className?: string;
}

const positionStyles = {
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "top-right": "top-0 right-0 -mr-16 -mt-16",
    "bottom-left": "bottom-[-10%] left-[-10%]",
    "card-corner": "-bottom-6 -right-6",
};

const sizeStyles = {
    sm: "w-24 h-24 blur-2xl",
    md: "w-32 h-32 blur-3xl",
    lg: "w-[400px] h-[400px] blur-[100px]",
    xl: "w-[800px] h-[800px] blur-[120px]",
};

export function DecorativeGlow({
    position = "center",
    size = "md",
    opacity = 5,
    hoverEffect = false,
    className,
}: DecorativeGlowProps) {
    return (
        <div
            className={cn(
                "absolute rounded-full -z-10",
                `bg-primary/${opacity}`,
                positionStyles[position],
                sizeStyles[size],
                hoverEffect && `group-hover:bg-primary/${Math.min(opacity * 2, 20)} transition-colors duration-500`,
                className
            )}
            aria-hidden="true"
        />
    );
}
