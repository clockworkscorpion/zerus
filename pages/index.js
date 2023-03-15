import Head from "next/head";
import {
  Hero,
  About,
} from "@/sections";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Zerus | Biosimilars R&D Company</title>
        <meta name="description" content="Zerus Life Sciences" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="relative">
        <div className="gradient-02 z-0" />
        <About />
        <div className="gradient-01 z-0" />
      </div>
    </div>
  );
}
