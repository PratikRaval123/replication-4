import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function Welcome({ config }) {
  const { welcome } = config;

  return (
    <section className="section-pad bg-white pb-10 pt-4 text-center">
      <AnimatedContainer className="mx-auto max-w-[340px]">
        <h2 className="font-script text-[44px] leading-none text-[#3a3a3a]">
          <span className="lang-ru">{welcome.greetingScript.ru}</span>
          <span className="lang-kz">{welcome.greetingScript.kz}</span>
        </h2>
        <p className="mt-2 font-serif text-[18px] text-[#c8c2b8]">
          <span className="lang-ru">{welcome.greetingSerif.ru}</span>
          <span className="lang-kz">{welcome.greetingSerif.kz}</span>
        </p>
        <p className="mt-5 font-serif text-[16px] leading-[1.65] text-[#b0aaa2]">
          <span className="lang-ru">{welcome.body.ru}</span>
          <span className="lang-kz">{welcome.body.kz}</span>
        </p>
        <p className="mt-7 font-script text-[28px] leading-[1.25] text-[#3a3a3a]">
          <span className="lang-ru">{welcome.cta.ru}</span>
          <span className="lang-kz">{welcome.cta.kz}</span>
        </p>
      </AnimatedContainer>
    </section>
  );
}
