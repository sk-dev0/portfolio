export default function SectionTitle({
    title,
    onTint = false,
}: {
    title: string;
    onTint?: boolean;
}) {
    return (
        <div className="relative mb-8">
            <p
                className={`text-7xl font-bold select-none ${
                    onTint
                        ? "text-[rgba(20,83,45,0.2)]"
                        : "text-[rgba(20,83,45,0.26)]"
                }`}
            >
                {title}
            </p>
            <p className="text-xl font-medium text-[#14532d] absolute bottom-2 left-0">
                {title}
            </p>
            <div className="w-8 h-0.5 bg-[#d4af37] mt-2" />
        </div>
    );
}