"use client";

import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { useLanguage } from "@/components/ui/LanguageProvider";

function buildMonthCells(year, monthIndex) {
  const first = new Date(year, monthIndex, 1);
  // JS: 0=Sun ... convert to Mon-start index
  const start = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < start; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function Calendar({ config }) {
  const { date, media } = config;
  const { lang } = useLanguage();
  const weekDays = date.weekDays[lang] || date.weekDays.ru;
  const cells = buildMonthCells(date.year, date.monthIndex);

  return (
    <section className="section-pad bg-white pb-8 pt-2">
      <AnimatedContainer className="mx-auto max-w-[340px] text-center">
        <h2 className="font-script text-[56px] leading-none text-[#3a3a3a]">
          <span className="lang-ru">{date.monthName.ru}</span>
          <span className="lang-kz">{date.monthName.kz}</span>
        </h2>

        <div className="calendar-grid mt-6 font-serif text-[15px] tracking-[0.02em] text-[#5a5450]">
          {weekDays.map((d) => (
            <div key={d} className="py-1">
              {d}
            </div>
          ))}
          {cells.map((day, i) => {
            const isWedding = day === date.day;
            return (
              <div
                key={`${day ?? "e"}-${i}`}
                className="relative flex h-9 items-center justify-center"
              >
                {day != null && (
                  <>
                    <span
                      className={
                        isWedding
                          ? "relative z-10 font-medium text-white"
                          : ""
                      }
                    >
                      {String(day).padStart(2, "0")}
                    </span>
                    {isWedding && (
                      <img
                        src={media.heartCalendar}
                        alt=""
                        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 object-contain opacity-90"
                      />
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </AnimatedContainer>
    </section>
  );
}
