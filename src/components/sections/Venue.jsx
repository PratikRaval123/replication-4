import AnimatedContainer from "@/components/ui/AnimatedContainer";

export default function Venue({ config }) {
  const { date, venue, media } = config;

  return (
    <section className="section-pad bg-white pb-12 pt-2">
      <AnimatedContainer className="mx-auto max-w-[340px]">
        <div className="venue-box text-center">
          <div className="mb-3 flex justify-center">
            <img
              src={media.calendarClock}
              alt=""
              className="h-[52px] w-auto object-contain"
            />
          </div>
          <p className="font-serif text-[clamp(17px,4.8vw,20px)] tracking-[0.02em] text-[#7a7a7a]">
            {date.displayWithTime}
          </p>
          <p className="mt-5 font-serif text-[18px] text-[#8a8a8a]">
            <span className="lang-ru">{venue.addressLabel.ru}</span>
            <span className="lang-kz">{venue.addressLabel.kz}</span>
          </p>
          <p className="mt-2 whitespace-pre-line font-serif text-[16px] leading-[1.55] text-[#9a9a9a]">
            <span className="lang-ru">{venue.address.ru}</span>
            <span className="lang-kz">{venue.address.kz}</span>
          </p>

          <div className="mt-5 flex items-center justify-center gap-8">
            <a
              href={venue.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="Open map"
            >
              <img src={media.mapIcon} alt="" className="h-12 w-12 object-contain" />
            </a>
            <a
              href={venue.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-80"
              aria-label="Venue Instagram"
            >
              <img
                src={media.venueInstagramIcon}
                alt=""
                className="h-12 w-12 object-contain"
              />
            </a>
          </div>
          <p className="mt-3 font-serif text-[12px] text-[#b5b5b5]">
            <span className="lang-ru">{venue.servicesHint.ru}</span>
            <span className="lang-kz">{venue.servicesHint.kz}</span>
          </p>
        </div>
      </AnimatedContainer>
    </section>
  );
}
