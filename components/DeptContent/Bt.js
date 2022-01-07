import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Bt({ data, syllabus, timetable, studymaterial, path, history }) {
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
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md  bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
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
            <div className="font-heading text-lg"> VISION</div> <br /> To be a
            leading Biotechnology Engineering department that imparts quality
            technical education with strong research component, to develop
            solutions in the field of food, health and environment.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br /> To
            provide quality technical education in a conducive learning
            environment to produce professionals, researchers with a zeal for
            lifelong learning and a commitment to society.
            <br />
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            {/* {profile} */}
            The department of Biotechnology established in 2002 offers a four
            year B.E. Biotechnology Program with an intake of 60 students and a
            two years PG Program, M.Tech in Biotechnology with an intake of 18
            students. The department is a recognized Research Centre by VTU,
            Belgaum, offering M.Sc (Engg.) by research and PhD programs. The
            Department also offers a Post Graduate Diploma in Biopharmaceutical
            Technology under the Biotechnology Skill Enhancement Programme
            (BiSEP), supported by the Department of IT &nbsp; BT, Government of
            Karnataka with a sanctioned budget of Rs. 162.5 Lakhs. <br />
            The department has 14 faculty members, of them 11 are Ph.D holders
            and the others are M.Tech pursuing Ph.D. The faculty members have
            competence in Core areas of Biotechnology viz. Food and Agricultural
            Biotechnology, Health and Medical Biotechnology &nbsp; Environmental
            Biotechnology and Bioprocess Engineering. The department research is
            focused towards these core areas and funded by national and state
            funding agencies like DST, KBITS, AICTE, VGST, VTU and RGUHS. <br />
            The department have publications in SCI and SCOPUS indexed journals.
            Faculties have published book chapters and presented their research
            work in National and International conferences. A sizeable number of
            students have pursued their higher education at various premier
            institutes in India and abroad after having qualified GATE, GRE
            &nbsp; TOEFL exams. The students undergo internships at various
            premier institutes in India and abroad. Several students receive the
            Indian Science Academies Summer Internship every year. The
            department has collaborations with some of the leading biotech
            industries like: Biocon, Hindustan Unilever Limited (HUL), Bristol
            Myers Squibb India Ltd, Novozymes South Asia Pvt Ltd, Himalaya Drug
            Company, Beckman Coulter, Sami Labs, Sartorius Stedim, Genotypic
            Technology, Aristogene Biosciences, GangaGen, Connexios Life
            Sciences, Acquity Labs &nbsp; Celest Pharma.
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            {/* {profile} */}
            <p className="mb-2">
              The department of Biotechnology established in 2002 offers a four
              year B.E. Biotechnology Program with an intake of 60 students and
              a two years PG Program, M.Tech in Biotechnology with an intake of
              18 students. The department is a recognized Research Centre by
              VTU, Belgaum, offering M.Sc (Engg.) by research and PhD programs.
              The Department also offers a Post Graduate Diploma in
              Biopharmaceutical Technology under the Biotechnology Skill
              Enhancement Programme (BiSEP), supported by the Department of IT &
              BT, Government of Karnataka with a sanctioned budget of Rs. 162.5
              Lakhs.
            </p>
            <br />
            <p className="mb-2">
              The department has 15 faculty members, of them 15 are Ph.D
              holders. The faculty members have competence in Core areas of
              Biotechnology viz. Food and Agricultural Biotechnology, Health and
              Medical Biotechnology & Environmental Biotechnology and Bioprocess
              Engineering. The department research is focused towards these core
              areas and funded by national and state funding agencies like DST,
              KBITS, AICTE, VGST, VTU and RGUHS.
            </p>
            <p className="mb-2">
              The department have publications in SCI and SCOPUS indexed
              journals. Faculties have published book chapters and presented
              their research work in National and International conferences. A
              sizeable number of students have pursued their higher education at
              various premier institutes in India and abroad after having
              qualified GATE, GRE & TOEFL exams. The students undergo
              internships at various premier institutes in India and abroad.
              Several students receive the Indian Science Academies Summer
              Internship every year. The department has collaborations with some
              of the leading biotech industries like: Biocon, Hindustan Unilever
              Limited (HUL), Bristol Myers Squibb India Ltd, Novozymes South
              Asia Pvt Ltd, Himalaya Drug Company, Beckman Coulter, Sami Labs,
              Sartorius Stedim, Genotypic Technology, Aristogene Biosciences,
              GangaGen, Connexios Life Sciences, Acquity Labs & Celest Pharma.
            </p>
            <br />
            <div className="font-heading pt-2 text-lg">DEPARTMENT HISTORY</div>
            <br />
            <ul className="list-disc ml-7">
              {/* {history.map((item, i) => (
                <li key={i}>{item}</li>
              ))} */}
              <li>
                2002 B.E. Biotechnology program started under Visvesvaraya
                Technological University (VTU), Belgaum, with an intake of 30
                students.
              </li>
              <li>2006 Student intake increased from 30 to 60. </li>
              <li>2007 Autonomous under VTU. </li>
              <li>
                2008 Recognized R&nbsp;D centre offering PhD / M.Sc. (Engg.) in
                Biotechnology under VTU.
              </li>
              <li>
                2009 NBA Accredited B.E-Biotechnology Programme for three years:
                (June 2010 - 2013)
              </li>
              <li> 2011 Outcome Based Education is implemented. </li>
              <li>
                2012 M. Tech in Biotechnology program started under autonomous
                scheme, with an intake of 18 students.
              </li>
              <li>
                2016 NBA Accredited B.E-Biotechnology Programme for three years:
                (June 2016 - 2019)
              </li>
              <li>
                2018 PG Diploma in Biopharmaceutical Technology started. This
                Program is supported by the Department of IT &nbsp; BT,
                Government of Karnataka.
              </li>
              <li>
                2019 NBA Accredited B.E-Biotechnology Programme for three years
                (June 2019-2022)
              </li>
              <li>
                2019 NBA Accredited M.Tech.- Biotechnology Programme for three
                years (June 2019-2022)
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
              Objectives UG
            </button>
            <button
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
            </button>
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
            Department of Biotechnology offers three programs that are
            affiliated to VTU – Belgaum and recognized by AICTE:
            <ul className="list-disc ml-7">
              <li>
                Bachelor of Engineering in Biotechnology with intake count of 60
              </li>
              <li>PG Diploma in Biopharmaceutical Technology (LINK HERE)</li>
              <li>
                Master of Technology in Biotechnology with intake count of 18
              </li>
              <li>M.Sc. (Engg) by Research with intake as per VTU norms</li>
              <li>Ph.D. with intake as per VTU norms </li>
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
                PEO 1: To impart a strong foundation in mathematics, basic and
                engineering sciences contributing to Biotechnology.{" "}
              </li>
              <li>
                PEO 2: To produce graduates who can pursue higher education and
                research in biotechnology and allied fields.{" "}
              </li>
              <li>
                PEO 3: To produce graduates with an ability to design, develop
                and implement research projects and apply to solve problems
                related to areas of biotechnology.{" "}
              </li>
              <li>
                PEO 4: To provide opportunities for students to work in
                multidisciplinary teams with professional ethics, good
                communication, leadership skills and commitment to society.{" "}
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <ul className="list-disc ml-7">
              Engineering Graduates will be capable of:
              <li>
                Engineering knowledge: Apply the knowledge of mathematics,
                science, engineering fundamentals, and an engineering
                specialization to the solution of complex engineering problems.{" "}
              </li>
              <li>
                Problem analysis: Identify, formulate, review research
                literature, and analyze complex engineering problems reaching
                substantiated conclusions using first principles of mathematics,
                natural sciences, and engineering sciences.{" "}
              </li>
              <li>
                Design/development of solutions: Design solutions for complex
                engineering problems and design system components or processes
                that meet the specified needs with appropriate consideration for
                the public health and safety, and the cultural, societal, and
                environmental considerations.{" "}
              </li>
              <li>
                Conduct investigations of complex problems: Use research-based
                knowledge and research methods including design of experiments,
                analysis and interpretation of data, and synthesis of the
                information to provide valid conclusions.{" "}
              </li>
              <li>
                Modern tool usage: Create, select, and apply appropriate
                techniques, resources, and modern engineering and IT tools
                including prediction and modeling to complex engineering
                activities with an understanding of the limitations.{" "}
              </li>
              <li>
                The engineer and society: Apply reasoning informed by the
                contextual knowledge to assess societal, health, safety, legal
                and cultural issues and the consequent responsibilities relevant
                to the professional engineering practice.
              </li>
              <li>
                Environment and sustainability: Understand the impact of the
                professional engineering solutions in societal and environmental
                contexts, and demonstrate the knowledge of, and need for
                sustainable development.
              </li>
              <li>
                Ethics: Apply ethical principles and commit to professional
                ethics and responsibilities and norms of the engineering
                practice.
              </li>
              <li>
                Individual and team work: Function effectively as an individual,
                and as a member or leader in diverse teams, and in
                multidisciplinary settings.
              </li>
              <li>
                Communication: Communicate effectively on complex engineering
                activities with the engineering community and with society at
                large, such as, being able to comprehend and write effective
                reports and design documentation, make effective presentations,
                and give and receive clear instructions.
              </li>
              <li>
                Project management and finance: Demonstrate knowledge and
                understanding of the engineering and management principles and
                apply these to one’s own work, as a member and leader in a team,
                to manage projects and in multidisciplinary environments.
              </li>
              <li>
                Life-long learning: Recognize the need for, and have the
                preparation and ability to engage in independent and life-long
                learning in the broadest context of technological change.
              </li>
            </ul>
            <strong>Program Specific Outcomes (PSOs):</strong>
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
            </ul>
          </div>

          <div
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
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !hod ? "hidden" : ""
            }`}
          >
            <strong>Dr. Chandra Prabha M N</strong> <br />
            <img
              src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/bt.jpg"
              className="mx-auto text-center"
            />
            <p>
              Dr. Chandra Prabha M N, completed her Bachelor’s degree in
              Chemical Engineering securing II rank at University level from
              M.S. Ramaiah Institute of Technology in 1997. She obtained her
              Masters in Engineering from Indian Institute of Science (IISc) in
              2001 and Ph.D. from Faculty of Engineering, IISc in 2007. She has
              received Fellowship from CEFIPRA- France, to undergo a high level
              scientific training at CNRS, Henry Poincare University, Nancy,
              France in 2003 and was a visiting scholar at Columbia University,
              USA under DST- NSF joint research program in 2004. She has
              presented her research in various International Scientific forums
              at South Korea (2012), Italy (2010), Argentina (2009), Germany
              (2007), Cape Town (2005).
            </p>{" "}
            <br />
            <p>
              Dr. Chandra Prabha M N joined Ramaiah Institute of Technology as
              faculty in 2007. Her research interest includes microbe-mineral
              interactions and application of nanomaterials/nanocomposites in
              environmental and health biotechnology. In particular, her
              research focuses on exploiting the functional properties of
              nanomaterials and bio-material interfaces for various engineering
              applications. She has received ~1.5 crore funding through several
              externally funded projects from DST, AICTE, VTU and VGST. She has
              published over 60 research papers in International journals,
              conference proceedings and 6 book chapters. She also serves as
              reviewer for several international journals. She has guided many
              research scholars for Ph.D. and M. Tech. research projects.
            </p>{" "}
            <br />
            <p>
              She is recipient of prestigious "Career Award for Young Teachers"
              by AICTE in 2010, a final shortlisted candidate for INAE Young
              Engineer Award in 2009, recipient of INSA Summer Fellowship in
              2009. She is also recipient of “Award for Excellence in Research -
              2019” from Ramaiah Institute of Technology
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

export default Bt;
