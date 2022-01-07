import Head from "next/head";
import HomePage from "../components/HomePage";

export default function Home({ latestNews, latestEvents }) {
  return (
    <>
      <Head>
        <title>Ramaiah Institute of Technology, Bengaluru - 54</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-body">
        <HomePage latestNews={latestNews} latestEvents={latestEvents} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const l_e = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/"
  );
  const l_eJson = await l_e.json();

  const l_n = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/"
  );
  const l_nJson = await l_n.json();

  return {
    props: {
      latestNews: l_nJson,
      latestEvents: l_eJson,
    }, // will be passed to the page component as props
  };
}
