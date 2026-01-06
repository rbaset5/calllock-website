export function TrustBar() {
    const stats = [
        { label: "Answers in", value: "< 2 seconds" },
        { label: "Handles", value: "50+ calls" },
        { label: "Coverage", value: "24/7/365" },
        { label: "Live in under", value: "30 minutes" },
    ];

    return (
        <div className="w-full bg-foreground py-8 border-y border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center gap-8 md:gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col md:flex-row items-center gap-3">
                            <span className="text-primary font-bold text-2xl md:text-3xl tracking-tight">
                                {stat.value}
                            </span>
                            <span className="text-white/60 text-xs md:text-sm font-medium uppercase tracking-widest">
                                {stat.label}
                            </span>
                            {index < stats.length - 1 && (
                                <div className="hidden lg:block w-px h-8 bg-white/10 mx-8" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
