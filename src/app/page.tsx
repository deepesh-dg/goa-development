import Speakers from "@/components/Speakers/Speakers";
import Glimpse from "@/components/GlimpseSection/Glimse";
import Sponsors from "@/components/Sponsors/Sponsors";
import { BgCircleIcon } from "@/assets/Icons";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <BgCircleIcon className="absolute top-0" />
        <Speakers />
        <Glimpse />
        <Sponsors />
      </div>
    </>
  );
}
