export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-green-800 flex flex-col justify-center px-16 py-32 gap-4"
    >
      <p className="text-green-300 text-sm tracking-widest uppercase">
        慶応義塾大学　情報工学科
      </p>
      <h1 className="text-white text-5xl font-medium tracking-wide">
        木原祥太
      </h1>
      <div className="w-10 h-px bg-green-400" />
      <p className="text-green-200 text-base leading-relaxed max-w-md">
        Web開発を主に学んでおり、エンジニアを目指している学生です
      </p>
    </section>
  );
}