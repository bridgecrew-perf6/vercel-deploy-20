import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Ch({
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
            <div className="font-heading text-lg"> VISION</div> <br /> To be a
            leading Chemical Engineering Department for imparting quality
            technical education and progressive research at global level.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            <ul className="list-disc ml-7">
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
            </ul>
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
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
            <p>
              The department was established in the year 1978 with the intake of
              40 students. In the year 2002 the intake was enhanced to 60
              students. Apart from B.E, the department is also offering M. Sc
              Engineering (Research) and Ph.D. The department has been approved
              as Research Centre by VTU in 2002. The department main research
              areas are – Water Treatment, Nano Composites, Catalysis and
              Bioremediation.
            </p>
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
                The Department of Chemical Engineering was the fifth department
                to be started in 1978 at MSRIT. The Department is certified
                thrice in succession by the National Board for Accreditation,
                certified with ‘A’ grade by NAAC and was ISO 9001:2000 certified
                till January 2016. Over 2000 students have graduated in 34
                batches. The Bangalore Regional Centre of the Indian Institute
                of Chemical Engineers is functioning from this department for
                almost a decade. The country’s most prestigious event in
                Chemical Engineering CHEMCON-2011 was organized at MSRIT.
              </li>
              <li>
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
            Department of Chemical Engineering offers three program that are
            affiliated to VTU – Belgaum and recognized by AICTE:
            <ul className="list-disc ml-7">
              <li>B. E in Chemical Engineering. M</li>
              <li>M.Sc (Engg) by Research.</li>
              <li>Ph.D. in Chemical Engineering.</li>
            </ul>
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !ug ? "hidden" : ""
            }`}
          >
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              The B.E. Chemical Engineering Program at Ramaiah Institute of
              Technology aims to provide a strong foundation of scientific and
              technical knowledge in a state of art learning ambience. It equips
              the graduates with problem solving abilities, teamwork, and
              communication skills necessary throughout their careers. They are
              consistent with the following Educational Objectives:
              <li>
                PEO1: Produce graduates with a strong foundation and
                understanding of the fundamental principles of mathematics,
                science, and engineering enabling graduates to pursue their
                careers as practicing chemical engineers in Chemical and Allied
                Engineering Industries.
              </li>
              <li>
                PEO2: Produce graduates who are prepared to pursue their
                post-graduation and research in the emerging and allied areas of
                Chemical Engineering and Business.
              </li>
              <li>
                PEO3: Produce graduates who possess skills with professional
                integrity and ethics to assume professional leadership roles and
                administrative positions.
              </li>
              <li>
                PEO4: Provide students with opportunities to integrate with
                multidisciplinary teams to develop & practice written and oral
                communication skills.{" "}
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <br />
            <ul className="list-disc ml-7">
              The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to
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
                information to provide valid conclusions.
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
            </ul>
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
              src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/chemical.jpg"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p>
              Dr. Archna received her Ph.D in Chemical Engineering from Punjab
              University in 2009. She has published 39 research papers in
              International Conferences and Journals. She has co-authored a book
              chapter on “Composites Based on Natural Polymers”. She has a
              Research Grant from Institution of Engineers India. She is a
              Fellow of Institution of Engineers, India and Life Member of
              Indian Institute of Chemical Engineers and Life Member of The
              Indian Society for Technical Education. She his guiding 07 Ph.D
              scholars. Her areas of interest are catalysis and water treatment.
            </p>{" "}
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
