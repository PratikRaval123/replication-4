import { weddingConfig } from "@/config/wedding";

const MUSIC_SRC = weddingConfig.media.music;

let audio = null;
let wantsPlay = false;
let unlockArmed = false;
const subscribers = new Set();

function getAudio() {
  if (typeof window === "undefined") return null;
  if (!audio) {
    audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.4;
    audio.setAttribute("playsinline", "true");
    audio.crossOrigin = "anonymous";
    audio.addEventListener("play", notify);
    audio.addEventListener("playing", notify);
    audio.addEventListener("pause", () => {
      notify();
      if (wantsPlay && audio.paused) armUnlock();
    });
  }
  return audio;
}

function notify() {
  const state = getMusicState();
  subscribers.forEach((fn) => fn(state));
}

function onUnlockGesture(event) {
  if (!wantsPlay) return;
  if (event?.target?.closest?.("[data-music-toggle]")) return;
  disarmUnlock();
  void playWeddingMusic();
}

function armUnlock() {
  if (typeof window === "undefined" || unlockArmed) return;
  unlockArmed = true;
  document.addEventListener("pointerdown", onUnlockGesture, true);
  document.addEventListener("keydown", onUnlockGesture, true);
  document.addEventListener("touchstart", onUnlockGesture, true);
}

function disarmUnlock() {
  if (!unlockArmed) return;
  unlockArmed = false;
  document.removeEventListener("pointerdown", onUnlockGesture, true);
  document.removeEventListener("keydown", onUnlockGesture, true);
  document.removeEventListener("touchstart", onUnlockGesture, true);
}

export function getMusicState() {
  const el = audio;
  return {
    playing: Boolean(el && !el.paused),
    wantsPlay,
  };
}

export function subscribeMusic(fn) {
  subscribers.add(fn);
  fn(getMusicState());
  return () => subscribers.delete(fn);
}

export async function playWeddingMusic({ restart = false } = {}) {
  wantsPlay = true;
  const el = getAudio();
  if (!el) return false;
  try {
    if (restart) el.currentTime = 0;
    await el.play();
    disarmUnlock();
    notify();
    return true;
  } catch {
    armUnlock();
    notify();
    return false;
  }
}

export function stopWeddingMusic() {
  wantsPlay = false;
  disarmUnlock();
  if (audio && !audio.paused) audio.pause();
  notify();
}

export async function toggleWeddingMusic() {
  const el = getAudio();
  if (!el) return getMusicState();
  if (!el.paused) {
    stopWeddingMusic();
    return getMusicState();
  }
  await playWeddingMusic();
  return getMusicState();
}
