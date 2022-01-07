import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Chy({
  data,
  syllabus,
  timetable,
  studymaterial,
  path,
  history,
}) {
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
            <div className="font-heading text-lg"> VISION</div> <br />{" "}
            Department strives for Development of curriculum viewing emerging
            trends in technology with a balanced approach towards Institute
            Industry interaction and academic excellence along with research in
            Basic Sciences.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            <p>
              Providing outstanding teaching and quality training in chemistry
              to all students at all levels and in all disciplines and also
              develop and maintain research programs of National and
              International relevance and serve the society through unique
              expertise and talent found in the department.
            </p>
            {/* <ul className="list-disc ml-7">
              <li>
                To provide a state of art environment and a rigorous academic
                program that train students to excel in fundamental sciences,
                chemical and allied engineering fields.
              </li>
              <li>
                To offer a program that inculcates creative thinking and
                lifelong learning contributing to the advancements in chemical
                sciences and its application.
              </li>
              <li>
                To foster principles of sustainability and promote
                environmentally benign technologies for the benefit of society.
              </li>
            </ul> */}
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            {/* <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br /> */}
            {/* <ul className="list-disc ml-7">
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
            </ul> */}
            {/* <p>
              The department was established in the year 1978 with the intake of
              40 students. In the year 2002 the intake was enhanced to 60
              students. Apart from B.E, the department is also offering M. Sc
              Engineering (Research) and Ph.D. The department has been approved
              as Research Centre by VTU in 2002. The department main research
              areas are – Water Treatment, Nano Composites, Catalysis and
              Bioremediation.
            </p> */}
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
                The Department of Chemistry was established in the year 1962 to
                preparing the students for careers in all the fields of
                engineering aspects and also carry out basic and applied
                research work. The department consists of nine well qualified
                and experienced faculty members; eight of them are Doctorate
                holders. The Department also has five non-teaching staff. The
                main activity of the department is to teach engineering
                chemistry theory and Laboratory courses to the under graduate
                engineering students of all disciplines. Department is also
                involved in teaching technical chemistry and Instrumental
                methods of analysis for III and IV semester BE chemical
                engineering students, along with respective laboratories. The
                Department is a recognized research center by VTU. All faculty
                members are actively engaged in research work and eighteen
                research scholars have registered for Ph.D. The department is
                constantly organizing conferences/ seminars and FDP programs.
                The department conducts annually International ‘Australian
                national chemistry quiz’ by The Royal Australian Chemical
                Institute, Australia.
              </li>
              {/* <li>
                The department has handled several projects sponsored by DRDO,
                VTU, IEI and KSCST. The department is approved as Research
                Center by VTU for acquiring higher qualification leading to M.Sc
                by Research and Ph.D degrees. The expertise of the faculty
                covers a wide range of disciplines and they are engaged in
                cutting edge technological research. The department offers
                excellent infrastructure.
              </li>
              <li>
                With the qualified, dedicated staff and committed students, the
                results are always good. The students are encouraged to
                participate in extra-curricular and co-curricular activities
                under the aegis of IIChE student chapter. The conducive
                professional atmosphere helps the students in their all-round
                development and to become dedicated to profession. Students have
                won various prestigious awards, international internships and
                high accolades for innovative projects.
              </li>
              <li>
                The department takes pride in its past achievements and has the
                dream and action plans to make it as one of the best Chemical
                Engineering Department.
              </li> */}
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
            The Chemistry department is devoted to teach Engineering chemistry
            to B.E first (All branches), second (Chemical Engineering) year and
            higher semester (Open elective) students. The department has been
            recognized as research center by VTU in 2008. All the faculty are
            involved in guiding to Ph D students.
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !ug ? "hidden" : ""
            }`}
          >
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                To make the students to understand the basic concepts of
                chemistry to develop futuristic materials for high-tech
                application in the area of engineering.
              </li>
              <li>
                Explore the economically viable technologies developed for
                utilizing water resources and recycle them. To provide basic
                skills in chemical and biological analysis of water and
                materials.
              </li>
              <li>
                Study of chemistry of portable energy storage devices like
                various conventional as well as modern batteries and their usage
                in different aspects of life.
              </li>
              <li>
                Gain the knowledge of corrosion science and anti corrosive
                techniques to protect faster corrosion and monitoring of
                corrosion.
              </li>
              <li>
                Understand various techniques involved in polymerization and
                application of polymer technology in the area of various
                engineering fields and manufacturing process of important
                metallurgical materials.
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <br />
            <ul className="list-disc ml-7">
              <li>
                Analyze the water samples and will have the knowledge to prepare
                potable water using different techniques.{" "}
              </li>
              <li>
                Have concept on rearing high octane fuels/good quality fuels.{" "}
              </li>
              <li>
                Apply different non-conventional sources of energy to generate
                power.{" "}
              </li>
              <li>
                Interpret the reasons of corrosion and will be monitor them by
                using the proper technique.
              </li>
              <li>
                Update the modern techniques, skills and advanced engineering
                tools essential for applications in Chemistry.{" "}
              </li>
              <li>
                Recognition of the need for, and an ability to engage in
                life-long learning.
              </li>
              {/* <li>
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
              </li> */}
            </ul>
            {/* <strong>Program Specific Outcomes (PSOs):</strong>
            <ul className="list-disc ml-7">
              The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to
              <li>
                Acquire in-depth knowledge of material and energy balances,
                thermodynamics, transport phenomena, chemical reaction
                engineering, continuous and stage-wise operations, process
                dynamics and control, economics, safety and environmental
                aspects required to work in traditional and emerging chemical
                engineering areas.
              </li>
              <li>
                Apply computational and simulation tools to solve chemical
                engineering problems, design and optimize chemical processes.
              </li>
              <li>
                Design and conduct experiments, prepare technical reports
                including business management modules and engineering economics
                and demonstrate professional engineering competence.
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
            <strong>Dr. Archna</strong> <br />
            <img
              src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/chemistry-hod.jpg"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p>
              Dr. B. M. Nagabhushana was awarded Ph. D on “Combustion synthesis,
              characterization and study of magnetic properties of alkaline
              substituted lanthanum manganites” from Bangalore University. He is
              actively involved in basic and applied research activities.
            </p>{" "}
            <br /> Dr. B. M. Nagabhushana current working on-{" "}
            <ul className="list-disc ml-7">
              <li>
                Preparation of nano- structured materials and their usage for
                fluoride removal.
              </li>
              <li>
                Green synthesis of metal oxide/metals nano materials and their
                applications.
              </li>
              <li>
                Preparation and characterization of: colossal magnetoresistance
                (CMR) materials, nanocatalysts, nanosensors, nanopigments, solid
                oxide fuel cell electrodes materials, nanoceramics, etc.
              </li>
              <li>
                Physical, chemical and biological analysis of water samples.
              </li>
              <li>
                Combustion synthesis, characterization, photoluminescence,
                thermo luminescence and EPR studies on nano-crystalline
                materials (oxides, silicates, oxy-sulphides etc).
              </li>
              <li>Removal of heavy metals/dyes using low-cost adsorbents.</li>
              <li>
                Synthesis of nano materials by wet chemical methods and their
                utilization in anti-bacterial activity.
              </li>
              Dr. B M Nagabhushana has published over 120 Research papers in
              peer reviewed international journals and has applied for 5 Indian
              patents. He is a life member of many scientific and professional
              bodies. As Vice-President of Luminescence Society of India:
              Karnataka Centre (LSIKC) regularly conducting a number of zero
              budget programs in the interest of researchers and society at
              large.
            </ul>
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
