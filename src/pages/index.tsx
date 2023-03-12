import Head from "next/head";
import { Container } from "@/components/Container";
import { Layout } from "@/components/Layout";

import { SectionHero } from "@/components/SectionHero";
import { SectionAboutMe } from "@/components/SectionAboutMe";
import { SectionSkills } from "@/components/SectionSkills";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Robert Gil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <SectionHero />
        <SectionAboutMe />
        <SectionSkills />
      </Container>
    </Layout>
  );
}
