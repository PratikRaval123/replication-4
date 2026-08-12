"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({
  lang: "ru",
  setLang: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageProvider({
  children,
  defaultLang = "ru",
  storageKey = "wedding-lang",
}) {
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === "ru" || saved === "kz") setLang(saved);
  }, [storageKey]);

  useEffect(() => {
    document.documentElement.lang = lang === "kz" ? "kk" : "ru";
    document.documentElement.dataset.lang = lang;
    window.localStorage.setItem(storageKey, lang);
  }, [lang, storageKey]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="site relative z-[1]" data-lang={lang}>
        <div
          className="fixed top-[max(16px,env(safe-area-inset-top))] right-[max(16px,env(safe-area-inset-right))] z-[120] flex gap-0.5 rounded-3xl border border-black/10 bg-[#111111a8] p-[3px] shadow-[0_5px_18px_#00000028] backdrop-blur-[10px]"
          role="group"
          aria-label="Language"
        >
          <button
            type="button"
            className={`h-[30px] w-[38px] rounded-[18px] border-0 p-0 font-sans text-[10px] font-bold tracking-[0.08em] transition-colors ${
              lang === "ru"
                ? "bg-[#fffaf2] text-[#1b1b1b]"
                : "bg-transparent text-white/60"
            }`}
            aria-pressed={lang === "ru"}
            onClick={() => setLang("ru")}
          >
            RU
          </button>
          <button
            type="button"
            className={`h-[30px] w-[38px] rounded-[18px] border-0 p-0 font-sans text-[10px] font-bold tracking-[0.08em] transition-colors ${
              lang === "kz"
                ? "bg-[#fffaf2] text-[#1b1b1b]"
                : "bg-transparent text-white/60"
            }`}
            aria-pressed={lang === "kz"}
            onClick={() => setLang("kz")}
          >
            KZ
          </button>
        </div>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}
