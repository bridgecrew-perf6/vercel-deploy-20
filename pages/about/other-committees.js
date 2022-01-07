import Head from "next/head";
import DeptBanner from "../../components/DeptBanner";
import Header from "../../components/Header";
import DeptStats from "../../components/DeptStats";
import Footer from "../../components/Footer";
import OtherCommittees from "../../components/AboutUs/OtherCommittees";

function about({ latestNews, latestEvents, deptStats }) {
  return (
    <>
      <Head>
        <title>Ramaiah Institute of Technology, Bengaluru - 54</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-body">
        <Header />
        <DeptBanner
          latestNews={latestNews}
          latestEvents={latestEvents}
          deptName={"ABOUT US"}
        />
        <DeptStats stats={deptStats} />
        <OtherCommittees />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const l_e = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/100"
  );
  const l_eJson = await l_e.json();

  const l_n = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/100"
  );
  const l_nJson = await l_n.json();

  const dep_stat = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/dept_stats/100"
  );
  const d_sJson = await dep_stat.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: {
      latestNews: l_nJson,
      latestEvents: l_eJson,
      deptStats: d_sJson,
    }, // will be passed to the page component as props
  };
}

export default about;
