"use client";

import { useEffect, useState } from "react";
import {
  getMusicState,
  subscribeMusic,
  toggleWeddingMusic,
} from "@/lib/weddingMusic";

function MusicRing({ label, playing, pathId }) {
  const chars = `${label} · ${label} · `;
  return (
    <svg viewBox="0 0 72 72" className="music-ring h-[52px] w-[52px]">
      <defs>
        <path
          id={pathId}
          d="M36,36 m-26,0 a26,26 0 1,1 52,0 a26,26 0 1,1 -52,0"
        />
      </defs>
      <circle cx="36" cy="36" r="18" fill="#f0f0f0" stroke="#d0d0d0" strokeWidth="1" />
      {playing ? (
        <rect x="29" y="29" width="14" height="14" rx="1.5" fill="#222" />
      ) : (
        <polygon points="33,28 33,44 46,36" fill="#222" />
      )}
      <text>
        <textPath href={`#${pathId}`} startOffset="0%">
          {chars}
        </textPath>
      </text>
    </svg>
  );
}

export default function MusicBar({ config }) {
  const { hero } = config;
  const [playing, setPlaying] = useState(false);

  useEffect(() => subscribeMusic((s) => setPlaying(s.playing)), []);

  async function onClick() {
    const state = await toggleWeddingMusic();
    setPlaying(state.playing || getMusicState().playing);
  }

  return (
    <section className="section-pad flex justify-center bg-white py-5">
      <button
        type="button"
        data-music-toggle
        onClick={onClick}
        className="flex items-center gap-3 rounded-full border border-[#e5e5e5] bg-[#f7f7f7] py-1.5 pl-1.5 pr-5 shadow-[0_2px_10px_#0000000d]"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span className="lang-ru">
          <MusicRing label={hero.musicRing.ru} playing={playing} pathId="music-circle-ru" />
        </span>
        <span className="lang-kz">
          <MusicRing label={hero.musicRing.kz} playing={playing} pathId="music-circle-kz" />
        </span>
        <span className="font-serif text-[18px] font-medium uppercase tracking-[0.12em] text-[#8a8a8a]">
          <span className="lang-ru">{hero.musicPress.ru}</span>
          <span className="lang-kz">{hero.musicPress.kz}</span>
        </span>
      </button>
    </section>
  );
}
