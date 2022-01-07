import Head from "next/head";
import DeptBanner from "../../../../components/DeptBanner";
import Header from "../../../../components/Header";
import DeptStats from "../../../../components/DeptStats";
import Footer from "../../../../components/Footer";
import FacultyDetails from "../../../../components/FacultyDetails";

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/fd_responses/dept/6"
  );
  const posts = await res.json();
  //   const deptIds = [
  //     { id: 1 },
  //     { id: 11 },
  //     { id: 100 },
  //     { id: 4 },
  //     { id: 11 },
  //     { id: 3 },
  //     { id: 7 },
  //     { id: 14 },
  //     { id: 13 },
  //     { id: 9 },
  //     { id: 2 },
  //     { id: 5 },
  //     { id: 6 },
  //     { id: 19 },
  //     { id: 8 },
  //     { id: 10 },
  //     { id: 6 },
  //     { id: 16 },
  //     { id: 17 },
  //     { id: 18 },
  //     { id: 19 },
  //     { id: 29 },
  //   ];

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((faculty) => ({
    params: { facultyId: faculty.id.toString() },
  }));

  //console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

// export async function getStaticProps({ params }) {
export async function getStaticProps({ params }) {
  // console.log(params);
  const id = params.facultyId;
  const idres = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/fd_responses/dept/6/" +
      id
  );
  const idFacultyData = await idres.json();

  // const result = await fetch(`https://.../posts/${params.id}`);
  // const postres = await result.json();

  // Pass post data to the page via props
  // console.log();

  //   const res = await fetch(
  //     "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/fd_responses/dept/35"
  //   );
  //   const json = await res.json();

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
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_events/6"
  );
  const l_eJson = await l_e.json();

  const l_n = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/latest_news/6"
  );
  const l_nJson = await l_n.json();

  const dep_stat = await fetch(
    "http://ec2-52-39-2-31.us-west-2.compute.amazonaws.com:8080/api/v1/dept_stats/6"
  );
  const d_sJson = await dep_stat.json();
  //const json = await res.json();
  //console.log(res);

  return {
    props: {
      //   facultyProfile: json,
      sy: syllJson,
      sm: s_mJson,
      tt: t_tJson,
      latestNews: l_nJson,
      latestEvents: l_eJson,
      deptStats: d_sJson,
      facultyData: idFacultyData,
    }, // will be passed to the page component as props
  };
}

function deptFaculty({
  //   facultyProfile,
  sy,
  tt,
  sm,
  latestNews,
  latestEvents,
  deptStats,
  facultyData,
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
          deptName="DEPARTMENT OF COMPUTER SCIENCE & ENGG."
        />
        <DeptStats stats={deptStats} />
        {/* <FacultyMainContent
          data={facultyProfile}
          syllabus={sy}
          timetable={tt}
          studymaterial={sm}
          deptName={"ARTIFICIAL INTELLIGENCE & DATA SCIENCE"}
        /> */}
        <FacultyDetails
          data={facultyData}
          syllabus={sy}
          timetable={tt}
          studymaterial={sm}
          deptName={"COMPUTER SCIENCE & ENGG."}
        />
        <Footer />
      </div>
    </>
  );
}

export default deptFaculty;
