import ActivitiesContent from "../../../components/ActivitiesContent";
import Head from "next/head";
import DeptBanner from "../../../components/DeptBanner";
import Header from "../../../components/Header";
import DeptStats from "../../../components/DeptStats";
import Footer from "../../../components/Footer";

function activities({
  ind_visits,
  ssw_fdp,
  seo,
  sy,
  tt,
  sm,
  latestNews,
  latestEvents,
  deptStats,
}) {
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
          deptName="DEPARTMENT OF HUMANITIES"
        />
        <DeptStats stats={deptStats} />
        <ActivitiesContent
          ivData={ind_visits}
          sswData={ssw_fdp}
          seoData={seo}
          syllabus={sy}
          timetable={tt}
          studymaterial={sm}
        />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const iv = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/ind_visits/17"
  );
  const ivJson = await iv.json();

  const ssw = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/ssw_fdp/17"
  );
  const sswJson = await ssw.json();

  const seo = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/events_org/17"
  );
  const seoJson = await seo.json();

  const syl = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/syllabus/1"
  );
  const syllJson = await syl.json();

  const t_t = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/timetable/1"
  );
  const t_tJson = await t_t.json();

  const s_m = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/studymat/1"
  );
  const s_mJson = await s_m.json();

  const l_e = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/17"
  );
  const l_eJson = await l_e.json();

  const l_n = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/17"
  );
  const l_nJson = await l_n.json();

  const dep_stat = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/dept_stats/17"
  );
  const d_sJson = await dep_stat.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: {
      ind_visits: ivJson,
      ssw_fdp: sswJson,
      seo: seoJson,
      sy: syllJson,
      sm: s_mJson,
      tt: t_tJson,
      latestNews: l_nJson,
      latestEvents: l_eJson,
      deptStats: d_sJson,
    }, // will be passed to the page component as props
  };
}

export default activities;
