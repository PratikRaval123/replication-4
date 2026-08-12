import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function Closing({ config }) {
  const { couple, closing, contacts, media } = config;

  return (
    <section className="section-pad bg-white pb-12 pt-6 text-center">
      <AnimatedContainer className="mx-auto max-w-[340px]">
        <p className="font-script text-[28px] leading-none text-[#7a7a7a]">
          <span className="lang-ru">{closing.respectfully.ru}</span>
          <span className="lang-kz">{closing.respectfully.kz}</span>
        </p>
        <p className="mt-3 font-script text-[36px] leading-none text-[#3a3a3a]">
          {couple.first} & {couple.second}
        </p>

        <img
          src={media.heartbeat}
          alt=""
          className="mx-auto mt-6 h-auto w-[min(280px,85%)] object-contain"
        />

        <p className="mt-8 font-serif text-[15px] text-[#3a3a3a]">
          <span className="lang-ru">{closing.siteLabel.ru}</span>
          <span className="lang-kz">{closing.siteLabel.kz}</span>
        </p>

        <div className="mt-4 flex items-start justify-center gap-10">
          <a
            href={contacts.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1.5"
          >
            <img
              src={media.instagramIcon}
              alt=""
              className="h-11 w-11 rounded-[10px] object-cover"
            />
            <span className="font-sans text-[12px]">{contacts.instagram.label}</span>
          </a>
          <a
            href={contacts.whatsapp.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1.5"
          >
            <img
              src={media.whatsappIcon}
              alt=""
              className="h-11 w-11 object-contain"
            />
            <span className="font-sans text-[12px]">{contacts.whatsapp.label}</span>
          </a>
        </div>
      </AnimatedContainer>
    </section>
  );
}
