"use client";

import { SineWaveDots } from "@/components/ui/sine-wave-dots";
import { Comparison } from "./comparison";

export function ComparisonDemoWrapper() {
    return (
        <div className="relative overflow-hidden">
            {/* Animated sine wave dots background spanning both sections */}
            <SineWaveDots
                className="opacity-50"
                dotColor="fill-neutral-400"
                gap={20}
                dotRadius={1.5}
                amplitude={25}
                frequency={0.015}
                speed={0.003}
            />

            <div className="relative z-10">
                <Comparison />
            </div>
        </div>
    );
}
