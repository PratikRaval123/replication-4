import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function Album({ config }) {
  const { album, media } = config;

  return (
    <section className="section-pad bg-white pb-10 pt-2 text-center">
      <AnimatedContainer className="mx-auto max-w-[340px]">
        <img
          src={media.albumPhoto}
          alt=""
          className="mx-auto w-full max-w-[280px] object-cover"
        />
        <p className="mt-6 font-serif text-[14px] leading-[1.6] text-[#b5b5b5]">
          <span className="lang-ru">{album.hint.ru}</span>
          <span className="lang-kz">{album.hint.kz}</span>
        </p>
        <div className="mt-4 flex flex-col items-center">
          <img
            src={media.arrowCurve}
            alt=""
            className="mb-1 h-10 w-16 object-contain opacity-80"
          />
          <a
            href={album.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex transition-opacity hover:opacity-70"
            aria-label="Telegram album"
          >
            <img
              src={media.plane}
              alt=""
              className="h-12 w-12 object-contain"
            />
          </a>
        </div>
      </AnimatedContainer>
    </section>
  );
}
