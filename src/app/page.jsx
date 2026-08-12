import LanguageProvider from "@/components/ui/LanguageProvider";
import Hero from "@/components/sections/Hero";
import MusicBar from "@/components/sections/MusicBar";
import Calendar from "@/components/sections/Calendar";
import Welcome from "@/components/sections/Welcome";
import Album from "@/components/sections/Album";
import Venue from "@/components/sections/Venue";
import Countdown from "@/components/sections/Countdown";
import RSVP from "@/components/sections/RSVP";
import Closing from "@/components/sections/Closing";
import { weddingConfig } from "@/config/wedding";

export default function Home() {
  const data = weddingConfig;

  return (
    <LanguageProvider defaultLang={data.defaultLang} storageKey={`wedding-lang-${data.templateId}`}>
      <main className="invite-shell">
        <Hero config={data} />
        <MusicBar config={data} />
        <Calendar config={data} />
        <Welcome config={data} />
        <Album config={data} />
        <Venue config={data} />
        <Countdown config={data} />
        <RSVP config={data} />
        <Closing config={data} />
      </main>
    </LanguageProvider>
  );
}
