"use client";

import { motion } from "framer-motion";

export default function Hero({ config }) {
  const { couple, date, hero, media } = config;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      <img
        src={media.heroPhoto}
        alt={`${couple.first} & ${couple.second}`}
        className="absolute inset-0 h-full w-full object-cover object-[50%_40%] grayscale contrast-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <div className="hero-overlay-text relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[430px] flex-col px-4 pb-12 pt-7 sm:px-5">
        {/* SAVE The DATE */}
        <div className="mt-1 flex w-full items-end justify-between gap-2">
          <motion.p
            className="shrink-0 font-serif text-[clamp(32px,9.5vw,42px)] font-semibold tracking-[0.06em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="lang-ru">{hero.save.ru}</span>
            <span className="lang-kz">{hero.save.kz}</span>
          </motion.p>
          <motion.p
            className="pb-0.5 font-script text-[clamp(40px,11.5vw,52px)] leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <span className="lang-ru">{hero.the.ru}</span>
            <span className="lang-kz">{hero.the.kz}</span>
          </motion.p>
          <motion.p
            className="shrink-0 font-serif text-[clamp(32px,9.5vw,42px)] font-semibold tracking-[0.06em]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <span className="lang-ru">{hero.date.ru}</span>
            <span className="lang-kz">{hero.date.kz}</span>
          </motion.p>
        </div>

        {/* Center date */}
        <motion.p
          className="absolute left-1/2 top-[44%] w-[90%] -translate-x-1/2 -translate-y-1/2 text-center font-serif text-[clamp(28px,8vw,36px)] italic tracking-[0.04em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          {date.displayShort}
        </motion.p>

        {/* Stacked names — centered, responsive, no side overflow */}
        <motion.div
          className="mt-auto flex w-full flex-col items-center justify-end pb-8 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          <h1 className="max-w-full break-words font-script text-[clamp(48px,14.5vw,68px)] leading-[0.95]">
            {couple.first}
          </h1>
          <span className="my-0.5 font-script text-[clamp(42px,12.5vw,60px)] leading-none opacity-95">
            &
          </span>
          <h1 className="max-w-full break-words font-script text-[clamp(48px,14.5vw,68px)] leading-[0.95]">
            {couple.second}
          </h1>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          className="flex flex-col items-center text-white/90"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span className="text-[16px] leading-none">˅</span>
          <span className="-mt-1 text-[16px] leading-none">˅</span>
        </motion.div>
      </div>
    </section>
  );
}
