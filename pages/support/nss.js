import Head from "next/head";
import DeptBanner from "../../components/DeptBanner";
import Header from "../../components/Header";
import DeptStats from "../../components/DeptStats";
import Footer from "../../components/Footer";
import Nss from "../../components/SupportingSections/Nss";

function nss({ latestNews, latestEvents, deptStats }) {
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
          deptName={"NSS"}
        />
        <DeptStats stats={deptStats} />
        <Nss />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const iv = await fetch(
  //   "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/ind_visits/"
  // );
  // const ivJson = await iv.json();

  // const ssw = await fetch(
  //   "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/ssw_fdp/"
  // );
  // const sswJson = await ssw.json();

  // const seo = await fetch(
  //   "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/events_org/"
  // );
  // const seoJson = await seo.json();

  // const syl = await fetch(
  //   "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/syllabus/1"
  // );
  // const syllJson = await syl.json();

  // const t_t = await fetch(
  //   "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/timetable/1"
  // );
  // const t_tJson = await t_t.json();

  // const s_m = await fetch(
  //   "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/studymat/1"
  // );
  // const s_mJson = await s_m.json();

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

  //   const json = await res.json();
  //   console.log(res);

  return {
    props: {
      //   ind_visits: ivJson,
      //   ssw_fdp: sswJson,
      //   seo: seoJson,
      //   sy: syllJson,
      //   sm: s_mJson,
      //   tt: t_tJson,
      latestNews: l_nJson,
      latestEvents: l_eJson,
      deptStats: d_sJson,
    }, // will be passed to the page component as props
  };
}

export default nss;
