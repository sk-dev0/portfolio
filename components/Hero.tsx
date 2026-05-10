import Container from "./Container";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-green-900 via-green-700 to-green-500 py-24"
    >
      <Container>
        <p className="text-green-300 text-sm tracking-widest mt-3">
          慶応義塾大学　情報工学科
        </p>
        <h1 className="text-white text-5xl font-medium tracking-wide mt-3">
          木原祥太
        </h1>
        <div className="w-10 h-px bg-green-400 mt-3" />
        <p className="text-green-200 text-base leading-relaxed max-w-md mt-3">
          Web開発を主に学んでおり、エンジニアを目指している学生です
        </p>
      </Container>
    </section>
  );
}