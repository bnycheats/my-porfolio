import Head from "next/head";
import { Container } from "@/components/Container";
import { SectionHero } from "@/components/SectionHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Robert Gil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <SectionHero />
      </Container>
    </>
  );
}
