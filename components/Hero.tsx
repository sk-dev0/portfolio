import Container from "./Container";

export default function Hero() {
    return (
        <section id="hero" className="bg-[#14532d] py-5 px-5">
            <div className="border border-[#d4af37]/55 py-20 px-12">
                <Container>
                    <p className="text-[#d4af37] text-xs tracking-[0.16em]">
                        慶應義塾大学　情報工学科
                    </p>
                    <h1 className="text-white text-3xl sm:text-5xl font-medium mt-3 leading-tight">
                        木原祥太
                    </h1>
                    <div className="w-10 h-px bg-[#d4af37] mt-5" />
                    <p className="text-white/80 text-base leading-relaxed max-w-md mt-6">
                        Web開発を主に学んでおり、エンジニアを目指している学生です
                    </p>
                </Container>
            </div>
        </section>
    );
}