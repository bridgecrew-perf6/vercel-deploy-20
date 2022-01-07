import Head from "next/head";
import DeptBanner from "../../../components/DeptBanner";
import Header from "../../../components/Header";
import DeptStats from "../../../components/DeptStats";
import DeptMainContent from "../../../components/DeptMainContent";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";
import Bt from "../../../components/DeptContent/Bt";

export default function btIndex({
  visionData,
  latestNews,
  latestEvents,
  deptStats,
  sy,
  tt,
  sm,
}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ramaiah Institute of Technology, Bengaluru - 54</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script> */}
      </Head>
      <div className="font-body antialiased">
        <Header />
        <DeptBanner
          latestNews={latestNews}
          latestEvents={latestEvents}
          deptName={"DEPARTMENT OF BIOTECHNOLOGY"}
        />
        <DeptStats stats={deptStats} />
        <Bt
          data={visionData}
          syllabus={sy}
          timetable={tt}
          studymaterial={sm}
          path={router.pathname}
        />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/vision_mission/"
  );
  const json = await res.json();
  //const json = await res.json();
  //console.log(res);

  const l_e = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/1"
  );
  const l_eJson = await l_e.json();

  const l_n = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/1"
  );
  const l_nJson = await l_n.json();

  const dep_stat = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/dept_stats/1"
  );
  const d_sJson = await dep_stat.json();

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

  return {
    props: {
      visionData: json,
      latestNews: l_nJson,
      latestEvents: l_eJson,
      deptStats: d_sJson,
      sy: syllJson,
      sm: s_mJson,
      tt: t_tJson,
    }, // will be passed to the page component as props
  };
}
