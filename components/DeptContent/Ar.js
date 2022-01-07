import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Ar({ data, syllabus, timetable, studymaterial, path, history }) {
  const [vision, setVision] = useState(data[0].vision);
  const [mission, setMission] = useState(data[0].mission);
  const [profile, setProfile] = useState(data[0].profile);
  const [op, setOp] = useState(true);
  const [ug, setUg] = useState(false);
  const [pg, setPg] = useState(false);
  const [hod, setHod] = useState(false);

  // console.log(data);

  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
          <div className="lg:w-full lg:flex lg:flex-col text-center">
            <a
              href={path}
              className="lg:hover:text-white lg:text-white lg:p-2 lg:m-2 lg:bg-gradient-to-r lg:from-pink-ramaiah lg:to-orange-ramaiah"
            >
              {" "}
              Overview
            </a>
            <a
              href={path + "/faculty"}
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Faculty
            </a>
            <a
              href={path + "/research"}
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Research
            </a>
            <a
              href={path + "/bos"}
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              BOS|BOE
            </a>
            <a
              href={path + "/achievements"}
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Achievements
            </a>
            <a
              href={path + "/activities"}
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Activities
            </a>
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <div>
            <div className="font-heading text-lg"> VISION</div> <br /> To
            achieve and propagate high standards of excellence in architectural
            education.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            <ul className="list-disc ml-7">
              <li>
                The school’s commitment is to prepare people to make a
                difference.
              </li>
              <li>
                To create an environment that shall foster the growth of
                intellectually capable, innovative and entrepreneurial
                professionals, who shall contribute to the growth of the society
                by adopting core values of learning exploration, rationality and
                enterprise.
              </li>
              <li>
                To contribute effectively by developing a sustainable technical
                education system to meet the changing technological needs
                incorporating relevant social concerns and to build an
                environment to create and propagate innovative designs and
                technologies.
              </li>
            </ul>
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            <ul className="list-disc ml-7">
              <li>
                The School of Architecture is now autonomous (affiliated to VTU)
                providing scope for further improvement. The focus has been
                towards fostering novel concepts and solutions in architectural
                design. The student’s response is very encouraging and the
                school recognises and appreciates such good students by awarding
                them. Many of the students after graduation have pursued higher
                studies in various universities in the country and abroad. There
                is a good demand for the school graduates in the industry and is
                developing initiatives towards co-branding of the industry and
                the institution school. Many have started their own enterprise
                and architectural practice as well.
              </li>
              <li>
                All this has been possible as a result of the efforts of the
                impeccable faculty of the school. The faculty is committed to
                the welfare and success of the students. The teachers of the
                school are also engaged in enhancing their knowledge and skills
                and many are engaged in research activities as well. The school
                has experts in specialized disciplines like Planning, Landscape
                Architecture and Interior Design. Faculties of the school also
                actively participate in National and International conferences
                and publish and present papers.
              </li>
              <li>
                The school as part of consultancy started off with the maiden
                project to redevelop the MSRIT engineering college campus and is
                now involved in various campus designs.
              </li>
              <li>
                The school is proud to have started the M.Arch programme in
                Landscape Architecture. This was started in the year 2011. The
                Master of Landscape Architecture is a 2 year full time
                postgraduate programme. The prescribed course is two years of
                full-time study.
              </li>
              <li>
                The course consists of areas of study ranging from
                community-scale landscape planning to the details of landscape
                construction technology, with an emphasis on sustainable
                practices in landscape architecture. The course covers a broad
                spectrum of topics from local to regional scale. Balancing
                theory with hands-on practice, design aspects of landscape
                architecture is given equal prominence to direct the students
                towards a holistic approach to Sustainable Landscape
                Architecture. The course is structured to analyze and respond to
                critical issues facing contemporary landscape architectural
                design and development. Thus the students have the opportunity
                to explore alternative, innovative, and experimental design.
              </li>
              <li>
                The course will enable design and construction professionals to
                enhance their understanding of the integral relationship between
                natural processes and human activity, and how sustainable design
                fits into everyday life, explore design options to address the
                same and examine policies, regulations, and standards in
                industry and government for implementation of the principles of
                sustainable design.
              </li>
            </ul>
            {/* <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            {profile} */}
            <br />
            <div className="font-heading pt-2 text-lg">DEPARTMENT HISTORY</div>
            <br />
            <ul className="list-disc ml-7">
              {/* {history.map((item, i) => (
                <li key={i}>{item}</li>
              ))} */}
              <li>
                The school of architecture, MSRIT, Bangalore, started in the
                year 1992. Since its establishment, the school has played a
                vital role in providing quality education. The Council of
                Architecture and AICTE has recognized this program.
              </li>
              <li>
                The mission of the school is to uphold MSRIT mission and thus
                provide quality education to the students and mould them to be
                excellent Architects with adequate management skills and noble
                human qualities.
              </li>
              <li>
                Full time faculty members having postgraduate qualification from
                prestigious institutions in India and abroad are teaching in
                this school. Experienced and well respected practicing
                architects are invited to provide their experiences as visiting
                faculty. New milestones are continually being set and achieved.
                The synergy of the progressive management, committed faculty and
                students are ensuring in excellent academic results year after
                year. This is reflected in the high number of University ranks
                that are secured.
              </li>
            </ul>
          </div>

          <div className="lg:space-x-2 flex m-auto pt-6 flex-wrap">
            <button
              className={`bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none ${
                op
                  ? "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah"
                  : " "
              }`}
              onClick={() => {
                setOp(true);
                setUg(false);
                setPg(false);
                setHod(false);
              }}
            >
              Offered Programs
            </button>
            <button
              className={`bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none ${
                ug
                  ? "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah"
                  : " "
              }`}
              onClick={() => {
                setOp(false);
                setUg(true);
                setPg(false);
                setHod(false);
              }}
            >
              Objectives
            </button>
            {/* <button
              className={`bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none ${
                pg
                  ? "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah"
                  : " "
              }`}
              onClick={() => {
                setOp(false);
                setUg(false);
                setPg(true);
                setHod(false);
              }}
            >
              Objectives PG
            </button> */}
            <button
              className={`bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none ${
                hod
                  ? "bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah"
                  : " "
              }`}
              onClick={() => {
                setOp(false);
                setUg(false);
                setPg(false);
                setHod(true);
              }}
            >
              HOD's Profile
            </button>
            {/* <button className="bg-blue-ramaiah text-white p-2 rounded-t-md border-[1px] lg:border-none">
              Facilities
            </button> */}
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !op ? "hidden" : ""
            }`}
          >
            School of Architecture offers two programs that are affiliated to
            VTU – Belgaum and recognized by COA and AICTE:
            <ul className="list-disc ml-7">
              <li>
                Bachelor of Engineering Degree in Architecture Engineering.
              </li>
              <li>Master of Architecture - Landscape.</li>
            </ul>
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !ug ? "hidden" : ""
            }`}
          >
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO 1: Use the knowledge and skills of Architecture to analyse
                the real life problems and interpret the results.{" "}
              </li>
              <li>
                PEO 2: Effectively design, implement, improve and manage the
                integrated socio-technical and ethical values.{" "}
              </li>
              <li>
                PEO 3: Build and lead cross-functional teams, upholding the
                professional responsibilities and ethical values.{" "}
              </li>
              <li>
                PEO 4: To provide oppEngage in continuing education and
                life-long learning to be competitive and enterprising.{" "}
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <ul className="list-disc ml-7">
              The programme outcomes of the Bachelor degree in Architecture are:
              <li>
                Apply knowledge of skills of arts and sciences to the various
                architectural scenarios.{" "}
              </li>
              <li>
                Design and develop project based on function, form and analysis.{" "}
              </li>
              <li>
                Design and improve integrated systems of people, materials,
                information, facilities and technology.{" "}
              </li>
              <li>Function as a member of a multi-disciplinary team. </li>
              <li>
                Identify, formulate and solve industrial requirements ans
                problems.{" "}
              </li>
              <li>
                Understand and respect professional and ethical responsibility.
              </li>
              <li>Communicate effectively both orally and in writing.</li>
              <li>
                Understand the impact of design solutions on a global and
                societal context.
              </li>
              <li>
                Recognize the need for and an ability to engage in life-long
                learning.
              </li>
              <li>
                Have knowledge of contemporary issues in industrial and service
                sectors.
              </li>
              <li>
                Use updated techniques, skills and tools of architecture
                throughout their professional careers.
              </li>
              <li>
                Implement the concepts of project and construction management to
                satisfy customer expectations.
              </li>
            </ul>
            {/* <strong>Program Specific Outcomes (PSOs):</strong>
            <ul className="list-disc ml-7">
              <li>
                To have thorough grounding in Mathematics, Chemistry and
                Biology.
              </li>
              <li>
                To be proficient in the principles and practices of advanced
                biological sciences.
              </li>
              <li>
                To apply engineering principles to biological systems to solve
                Biotechnology problems.
              </li>
            </ul> */}
          </div>

          {/* <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !pg ? "hidden" : ""
            }`}
          >
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO 1: To produce postgraduates who can articulate technical
                developments in the field of biotechnology and apply relevant
                tools to solve problems in real life situations
              </li>
              <li>
                PEO 2: To enable postgraduates to have an ability to design and
                conduct research to meet desired needs within realistic
                economic, environmental, socio-political, ethical, health,
                safety & sustainability realms
              </li>
              <li>
                PEO 3: To prepare postgraduates to be successful professionals
                in the industry, academia, research, entrepreneurial pursuit and
                consulting firms
              </li>
              <li>
                PEO 4: To prepare students to enrich their knowledge & skills
                throughout their career
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            Engineering Graduates will be capable of:
            <ul className="list-disc ml-7">
              <li>
                PO1: An ability to independently carry out
                research/investigation & development work to solve the practical
                problem
              </li>
              <li>
                PO2: An ability to write & present a substantial technical
                report/document
              </li>
              <li>
                PO3: Students should be able to demonstrate a degree of mastery
                over the area as per the specialization of the programme. The
                mastery should be at a level higher than the requirements in the
                appropriate bachelor program
              </li>
              <li>
                PO4: Demonstrate the ability to design, conduct experiments and
                analyze data in the field of Biotechnology
              </li>
              <li>
                PO5: Able to employ Biotechnology tools in biological research.
              </li>
            </ul>
          </div> */}

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !hod ? "hidden" : ""
            }`}
          >
            <strong>Prof Pushpa Devanathan</strong> <br />
            <img
              src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/architecture.jpg"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p>
              Prof Pushpa Devanathan has obtained B.Arch (1978-1983) from MIT
              Manipal, PGD-Indology from Bangalore University (2000) and M.Arch,
              Habitat Design from BMSCE, VTU. She is a VTU Gold medalist for
              M.Arch (Habitat Design) and is the recipient of various ranks
              through her B.Arch course. PhD is in the process of submission.
            </p>{" "}
            <br />
            <p>
              Presently Professor and Head, School of Architecture, RIT. She has
              a total experience of 34 years in practice and academics.
            </p>{" "}
            <br />
            <p>
              Her first stint at teaching was at Morogoro Agriculture
              University, Tanzania. Prior to joining RIT, she served as a
              Professor for 22 years at BMSCE. She has been handling courses at
              both UG and PG level. Her professional experience encompasses both
              National and International areas of work.
            </p>
            <p>
              Her professional memberships include the following: <br />
              Registered with the Council of Architecture CA/88/11871
              <br />
              Fellow of the Indian Institute of Architects (F 6295)
              <br />
              Fellow of the Institution of Valuers (F 6081)
              <br />
              Member-ISTE (LM 40594)
              <br />
              Registered with the BMP
              <br />
              She has an international book publication by the title “Green
              Building with Concrete-Sustainable Design and Construction” .
            </p>
          </div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah">
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Syllabus
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <SideBarSyllabus syllabus={syllabus} />
            </div>
          </div>
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Timetable
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <SideBarSyllabus syllabus={timetable} />
            </div>
          </div>
          <div className=" text-center mb-5 w-[85%] m-auto lg:w-full">
            {/*syllabus*/}
            <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah rounded-t-xl text-white p-1 font-heading">
              Study Materials
            </div>
            <div className="lg:bg-gray-600 lg:bg-opacity-30 bg-white rounded-b-2xl">
              <SideBarSyllabus syllabus={studymaterial} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ar;
