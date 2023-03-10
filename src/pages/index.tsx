import Head from "next/head";
import { Container } from "@/components/Container";
import { SectionHero } from "@/components/SectionHero";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Robert Gil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <SectionHero />
      </Container>
    </Layout>
  );
}
