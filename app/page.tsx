import "./globals.css"
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Apps from "./components/Apps";
import International from "./components/International";
import Metrics from "./components/Metrics";
import Features from "./components/Features";
import JoinUs from "./components/JoinUs";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Tools />
      <Apps />
      <International />
      <Metrics />
      <Features />
      <JoinUs />
    </main>
  );
}
