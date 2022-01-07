import Head from "next/head";
import DeptBanner from "../../../components/DeptBanner";
import Header from "../../../components/Header";
import DeptStats from "../../../components/DeptStats";
import DeptMainContent from "../../../components/DeptMainContent";
import Footer from "../../../components/Footer";
import { useRouter } from "next/router";
import Ar from "../../../components/DeptContent/Ar";

export default function arIndex({
  visionData,
  latestNews,
  latestEvents,
  deptStats,
  sy,
  tt,
  sm,
  history,
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
          deptName={"SCHOOL OF ARCHITECTURE"}
          bkg="bg-arch bg-[#C0C0C0] bg-blend-overlay"
        />
        <DeptStats stats={deptStats} />
        <Ar
          data={visionData}
          syllabus={sy}
          timetable={tt}
          studymaterial={sm}
          history={history}
          path={router.pathname}
        />
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const res = await fetch(
  //   "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/vision_mission/"
  // );
  // const json = await res.json();

  const json = [
    {
      vision:
        "To achieve and propagate high standards of excellence in architectural education.",
      mission:
        "The school’s commitment is to prepare people to make a difference. To create an environment that shall foster the growth of intellectually capable, innovative and entrepreneurial professionals, who shall contribute to the growth of the society by adopting core values of learning exploration, rationality and enterprise.To contribute effectively by developing a sustainable technical education system to meet the changing technological needs incorporating relevant social concerns and to build an environment to create and propagate innovative designs and technologies.",
      profile:
        "The School of Architecture is now autonomous (affiliated to VTU) providing scope for further improvement. The focus has been towards fostering novel concepts and solutions in architectural design. The student’s response is very encouraging and the school recognises and appreciates such good students by awarding them. Many of the students after graduation have pursued higher studies in various universities in the country and abroad. There is a good demand for the school graduates in the industry and is developing initiatives towards co-branding of the industry and the institution school. Many have started their own enterprise and architectural practice as well.All this has been possible as a result of the efforts of the impeccable faculty of the school. The faculty is committed to the welfare and success of the students. The teachers of the school are also engaged in enhancing their knowledge and skills and many are engaged in research activities as well. The school has experts in specialized disciplines like Planning, Landscape Architecture and Interior Design. Faculties of the school also actively participate in National and International conferences and publish and present papers. The school as part of consultancy started off with the maiden project to redevelop the MSRIT engineering college campus and is now involved in various campus designs. The school is proud to have started the M.Arch programme in Landscape Architecture. This was started in the year 2011. The Master of Landscape Architecture is a 2 year full time postgraduate programme. The prescribed course is two years of full-time study. The course consists of areas of study ranging from community-scale landscape planning to the details of landscape construction technology, with an emphasis on sustainable practices in landscape architecture. The course covers a broad spectrum of topics from local to regional scale. Balancing theory with hands-on practice, design aspects of landscape architecture is given equal prominence to direct the students towards a holistic approach to Sustainable Landscape Architecture. The course is structured to analyze and respond to critical issues facing contemporary landscape architectural design and development. Thus the students have the opportunity to explore alternative, innovative, and experimental design. The course will enable design and construction professionals to enhance their understanding of the integral relationship between natural processes and human activity, and how sustainable design fits into everyday life, explore design options to address the same and examine policies, regulations, and standards in industry and government for implementation of the principles of sustainable design.",
    },
  ];

  const l_e = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/19"
  );
  const l_eJson = await l_e.json();

  const l_n = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/19"
  );
  const l_nJson = await l_n.json();

  const dep_stat = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/dept_stats/19"
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

  const his_json = [
    "The school of architecture, MSRIT, Bangalore, started in the year 1992. Since its establishment, the school has played a vital role in providing quality education. The Council of Architecture and AICTE has recognized this program.",
    "The mission of the school is to uphold MSRIT mission and thus provide quality education to the students and mould them to be excellent Architects with adequate management skills and noble human qualities.",
    "Full time faculty members having postgraduate qualification from prestigious institutions in India and abroad are teaching in this school. Experienced and well respected practicing architects are invited to provide their experiences as visiting faculty. New milestones are continually being set and achieved. The synergy of the progressive management, committed faculty and students are ensuring in excellent academic results year after year. This is reflected in the high number of University ranks that are secured.",
  ];

  return {
    props: {
      visionData: json,
      latestNews: l_nJson,
      latestEvents: l_eJson,
      deptStats: d_sJson,
      sy: syllJson,
      sm: s_mJson,
      tt: t_tJson,
      history: his_json,
    }, // will be passed to the page component as props
  };
}
