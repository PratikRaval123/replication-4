"use client";

import { useState } from "react";
import AnimatedContainer from "@/components/ui/AnimatedContainer";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function RSVP({ config }) {
  const { rsvp, media, couple } = config;
  const { lang } = useLanguage();
  const [name, setName] = useState("");
  const [attend, setAttend] = useState("yes");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          attend,
          lang,
          couple: `${couple.first} & ${couple.second}`,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-pad bg-white pb-8 pt-4">
      <AnimatedContainer className="mx-auto max-w-[340px]">
        <h2 className="text-center font-script text-[44px] leading-none text-[#3a3a3a]">
          <span className="lang-ru">{rsvp.title.ru}</span>
          <span className="lang-kz">{rsvp.title.kz}</span>
        </h2>
        <p className="mt-5 whitespace-pre-line text-center font-serif text-[16px] leading-[1.55] text-[#3a3a3a]">
          <span className="lang-ru">{rsvp.intro.ru}</span>
          <span className="lang-kz">{rsvp.intro.kz}</span>
        </p>

        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <label className="block">
            <span className="mb-2 block font-serif text-[15px]">
              <span className="lang-ru">{rsvp.nameLabel.ru}</span>
              <span className="lang-kz">{rsvp.nameLabel.kz}</span>
            </span>
            <input
              className="rsvp-input font-serif"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <fieldset>
            <legend className="mb-3 font-serif text-[15px]">
              <span className="lang-ru">{rsvp.attendLabel.ru}</span>
              <span className="lang-kz">{rsvp.attendLabel.kz}</span>
            </legend>
            <div className="space-y-3">
              {rsvp.options.map((opt) => (
                <label key={opt.value} className="radio-row font-serif text-[15px]">
                  <input
                    type="radio"
                    name="attend"
                    value={opt.value}
                    checked={attend === opt.value}
                    onChange={() => setAttend(opt.value)}
                  />
                  <span>
                    <span className="lang-ru">{opt.label.ru}</span>
                    <span className="lang-kz">{opt.label.kz}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="rsvp-submit font-serif text-[17px]"
            disabled={status === "loading"}
          >
            <span className="lang-ru">{rsvp.submit.ru}</span>
            <span className="lang-kz">{rsvp.submit.kz}</span>
          </button>

          {status === "success" && (
            <p className="text-center font-serif text-[14px] text-[#2f6b3a]">
              <span className="lang-ru">{rsvp.success.ru}</span>
              <span className="lang-kz">{rsvp.success.kz}</span>
            </p>
          )}
          {status === "error" && (
            <p className="text-center font-serif text-[14px] text-[#8b2e2e]">
              <span className="lang-ru">{rsvp.error.ru}</span>
              <span className="lang-kz">{rsvp.error.kz}</span>
            </p>
          )}
        </form>

        <img
          src={media.rsvpPhoto}
          alt=""
          className="mt-8 w-full rounded-t-[18px] object-cover"
        />
      </AnimatedContainer>
    </section>
  );
}
