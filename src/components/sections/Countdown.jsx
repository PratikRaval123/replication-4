"use client";

import { useEffect, useState } from "react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { useLanguage } from "@/components/ui/LanguageProvider";

function pad2(n) {
  return String(Math.max(0, n)).padStart(2, "0");
}

function getParts(targetIso) {
  const diff = new Date(targetIso).getTime() - Date.now();
  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return {
    days: pad2(days),
    hours: pad2(hours),
    minutes: pad2(minutes),
    seconds: pad2(seconds),
  };
}

function DigitPair({ value }) {
  return (
    <div className="flex gap-[3px]">
      {[...value].map((d, i) => (
        <span
          key={`${i}-${d}`}
          className="flip-digit inline-flex h-[42px] w-[30px] items-center justify-center text-[22px]"
        >
          {d}
        </span>
      ))}
    </div>
  );
}

export default function Countdown({ config }) {
  const { countdown, dateIso } = config;
  const { lang } = useLanguage();
  const [parts, setParts] = useState(() => getParts(dateIso));

  useEffect(() => {
    const id = setInterval(() => setParts(getParts(dateIso)), 1000);
    return () => clearInterval(id);
  }, [dateIso]);

  const units = [
    { key: "days", value: parts.days },
    { key: "hours", value: parts.hours },
    { key: "minutes", value: parts.minutes },
    { key: "seconds", value: parts.seconds },
  ];

  return (
    <section className="section-pad bg-white pb-10 pt-2 text-center">
      <AnimatedContainer className="mx-auto max-w-[360px]">
        <h2 className="font-script text-[40px] leading-none text-[#3a3a3a]">
          <span className="lang-ru">{countdown.titleScript.ru}</span>
          <span className="lang-kz">{countdown.titleScript.kz}</span>
        </h2>
        <p className="mt-2 font-sans text-[13px] text-[#6e6e6e]">
          <span className="lang-ru">{countdown.titleSerif.ru}</span>
          <span className="lang-kz">{countdown.titleSerif.kz}</span>
        </p>

        <div className="mt-6 flex items-end justify-center gap-2">
          {units.map((u, idx) => (
            <div key={u.key} className="flex items-end gap-2">
              <div className="flex flex-col items-center gap-1.5">
                <DigitPair value={u.value} />
                <span className="font-sans text-[10px] tracking-[0.04em] text-[#9a9a9a]">
                  {countdown.labels[u.key][lang]}
                </span>
              </div>
              {idx < units.length - 1 && (
                <span className="mb-7 font-sans text-[18px] text-[#c8a0a0]">:</span>
              )}
            </div>
          ))}
        </div>
      </AnimatedContainer>
    </section>
  );
}
