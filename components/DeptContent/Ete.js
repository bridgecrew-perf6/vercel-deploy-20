import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Ete({
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
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
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
            {/* <div className="font-heading text-lg">OVERVIEW</div> <br />{" "}
            Electronics and Communication Engineering is concerned with the
            design, development, manufacture and application of electronic
            devices, circuits and systems. Electronics and Communication
            Engineering lays greater emphasis on deep understanding of
            fundamental principles and state of the art knowledge about
            Electronic Devices and Circuits, Computer Architecture and
            Microprocessors, VLSI and Embedded systems, Electromagnetic Field
            Theory, Analog and Digital Communication, Digital Signal Processing,
            Microwave and Broadband Communications. The department has
            well-qualified and experienced faculty with a healthy student to
            staff ratio of 15:1. Out of which seven are Doctorates, sixteen are
            pursuing Ph.D and remaining are Post-Graduates. Faculty members have
            their credit in technical papers published in international and
            national journals and conferences. They are also members of several
            important academic bodies. */}
            <div className="font-heading text-lg"> VISION</div> <br /> To
            provide an ambience for the students to excel in studies, research
            and innovation, focusing on meeting global socio-economic needs from
            a Telecommunication Engineering perspective.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            <ul className="list-disc ml-7">
              <li>
                Providing high quality technical education to create world class
                Telecommunication engineers.
              </li>
              <li>
                Creating an ambience for skills development, research and
                entrepreneurial activities to meet socio-economic needs.
              </li>
              {/* <li>
                Develop skills for pursuing innovation and entrepreneurial
                ventures for graduating engineers.
              </li> */}
            </ul>
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            <p className="text-justify mb-2">
              The Department of Telecommunication Engineering was established in
              the year 1996.The Department offers undergraduate program in B.E
              with an intake of 60and M.Tech program in Digital Communication in
              the year 2004, with an intake of 18 students.The Department was
              renamed, Electronics and Telecommunication Engineering in the year
              2019 by VTU. The graduate engineering program is governed by a
              robust and dynamic Quality Management system that covers all
              academic and co-curricular activities including course revision,
              delivery, evaluation, laboratory assignments, and seminars. The
              department has state of the art laboratory, equipment resources,
              and committed faculty having the best of the academic and industry
              recognition. The U.G program is accredited by NBA in the year
              2004, 2010, 2016, and 2019 and valid for 3 years till 2022. The
              P.G program is accredited by NBA in the year 2019 and valid for 3
              years till 2022. The department is a recognized Research Centre by
              VTU, Belgaum, offering M.Sc (Engg.) by research and Ph.D.
              programs.
            </p>{" "}
            <p className="text-justify mb-2">
              The department has 15 faculty members, 09 faculties are Ph.D.
              holders and the others are M.Tech pursuing Ph.D. The faculty
              members have competence in Core areas of Digital Signal
              Processing, Image Processing, Control Systems, Mobile Adhoc
              Networks, Wireless Sensor Networks, Internet of Things, Embedded
              Systems, Wireless Networking, DSP Processors, RF Communication,
              Neural Networks, Fuzzy Logic, VLSI Design, Microstrip Antenna
              Design, Meta Material Structure analysis, MIMO Array antenna. The
              department research is focused on these core areas and funded by
              national and state funding agencies like DST, AICTE, VGST.
            </p>{" "}
            <p className="text-justify mb-2">
              Department has collaboration with some of the leading industries
              (eg, Nokia, Honeywell, Intel, ARM-Nuvoton, Samsung, Rohde –
              Schwarz, Techni Lab Instruments, NAL,LRDE, and Ericsson) and with
              leading national and international universities, enabling the
              department to focus on R & D, thus providing new avenues for PG/UG
              students for placement and higher studies.
            </p>
            <p className="text-justify mb-2">
              The department has publications in SCI and SCOPUS indexed
              journals. Faculties have published book chapters and presented
              their research work at National and International conferences. A
              sizeable number of students have pursued their higher education at
              various premier institutes in India and abroad after having
              qualified GATE, GRE & TOEFL exams. The students undergo
              internships at various premier institutes in India and abroad.
            </p>
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
                1996: B.E. Telecommunication Engineering program started under
                Visvesvaraya Technological University (VTU), Belgaum, with an
                intake of 35 students.
              </li>
              <li>2000: Student intake increased from 35 to 60.</li>
              <li>2004: UG Program accredited by NBA for 3 years</li>
              <li>
                2004: M.Tech in Digital Communication program started with an
                intake of 18 students.
              </li>{" "}
              <li>2007: Autonomous under VTU.</li>
              <li>
                2012: Recognized R&D center offering Ph.D. / M.Sc. (Engg.) under
                VTU.
              </li>
              <li>
                2016: NBA Accredited B.E-Telecommunication Engineering Programme
                for three years: (June 2016 - 2019)
              </li>
              <li>
                2019: NBA Accredited B.E-Telecommunication Engineering Programme
                for three years: (June 2019 - 2022)
              </li>{" "}
              <li>
                2019: NBA Accredited M.Tech.- Digital Communication Programme
                for three years (June 2019-2022)
              </li>
              <li>
                2019: The Department was renamed, Electronics and
                Telecommunication Engineering by VTU starting from the academic
                year 2019-2020.
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
            Department of Electronics and Telecommunication Engineering offers
            the following programs:
            <ul className="list-disc ml-7">
              <li>
                Bachelor of Engineering Degree in Electronics and
                Telecommunication Engineering.
              </li>
              <li>M.Tech Degree in Digital Communication.</li>

              <li>M. Sc (Engg) by Research.</li>
              <li>Ph.D.</li>
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
                PEO1: Graduates will excel in professional careers in Industry,
                Academia and Research to meet socio-economic needs.
              </li>
              <li>
                PEO2: Graduates will analyze problems specific to
                Telecommunication Engineering and multidisciplinary domains
                providing technically feasible solutions.
              </li>
              <li>
                PE03: Graduates will exhibit professional communication skills,
                teamwork, leadership qualities, ethical behavior and lifelong
                learning.
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <br />
            <ul className="list-disc ml-7">
              Engineering Graduates will be able to:
              <li>
                PO1: Engineering knowledge: Apply the knowledge of mathematics,
                science, engineering fundamentals, and an engineering
                specialization to the solution of complex engineering problems
              </li>
              <li>
                PO2: Design/development of solutions: Design solutions for
                complex engineering problems and design system components or
                processes that meet the specified needs with appropriate
                consideration for the public health and safety, and the
                cultural, societal, and environmental considerations
              </li>
              <li>
                PO3: Problem analysis: Identify, formulate, review research
                literature, and analyze complex engineering problems reaching
                substantiated conclusions using first principles of mathematics,
                natural sciences, and engineering sciences
              </li>
              <li>
                PO4: Conduct investigations of complex problems: Use
                research-based knowledge and research methods including design
                of experiments, analysis and interpretation of data, and
                synthesis of the information to provide valid conclusions
              </li>
              <li>
                PO5: Modern tool usage: Create, select, and apply appropriate
                techniques, resources, and modern engineering and IT tools
                including prediction and modeling to complex engineering
                activities with an understanding of the limitations
              </li>
              <li>
                PO6: The engineer and society: Apply reasoning informed by the
                contextual knowledge to assess societal, health, safety, legal
                and cultural issues and the consequent responsibilities relevant
                to the professional engineering practice
              </li>
              <li>
                PO7: Environment and sustainability: Understand the impact of
                the professional engineering solutions in societal and
                environmental contexts, and demonstrate the knowledge of, and
                need for sustainable development
              </li>
              <li>
                PO8: Ethics: Apply ethical principles and commit to professional
                ethics and responsibilities and norms of the engineering
                practice
              </li>
              <li>
                PO9: Individual and teamwork: Function effectively as an
                individual, and as a member or leader in diverse teams, and in
                multidisciplinary settings
              </li>
              <li>
                PO10: Communication: Communicate effectively on complex
                engineering activities with the engineering community and with
                society at large, such as, being able to comprehend and write
                effective reports and design documentation, make effective
                presentations, and give and receive clear instructions
              </li>
              <li>
                PO11: Project management and finance: Demonstrate knowledge and
                understanding of the engineering and management principles and
                apply these to one’s own work, as a member and leader in a team,
                to manage projects and in multidisciplinary environments
              </li>
              <li>
                PO12: Life-long learning: Recognize the need for, and have the
                preparation and ability to engage in independent and life-long
                learning in the broadest context of technological change
              </li>
            </ul>
            <strong>Program Specific Outcomes (PSOs):</strong>
            <ul className="list-disc ml-7">
              {/* The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to */}

              <li>
                PSO1: Identify,analyse,formulate,design and demonstrate
                applications relevant to telecommunication engineering using
                electronic devices.
              </li>
              <li>
                PSO2: Use current technology and modern tools to address
                solutions for telecommunication products by taking into account
                safety healthy environmental requirements.
              </li>
              <li>
                PSO3: Apply project management tools to solve Telecommunication
                systems by exhibiting teamwork, lifelong learning.
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
                PEO1: Post graduates will achieve excellence in Digital
                Communication Engineering to meet the Currentand future needs of
                industry and academia
              </li>
              <li>
                PEO2: Post graduates will be able to pursue research by applying
                modern tools to address real life Technological problems
              </li>
              <li>
                PEO3: Post graduates will develop technical skills in
                multidisciplinary domains, associated with ethical values and
                lifelong learning abilities
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <ul className="list-disc ml-7">
              <li>
                PO1: An ability to independently carry out research
                /investigations and development work to solve Practical problems
              </li>
              <li>
                PO2: Ability to write and present a substantial technical
                report/document
              </li>
              <li>
                PO3: Students should be able to demonstrate a degree of mastery
                over the area as per the specialization of the program. The
                mastery should be at a level higher than the requirements in the
                appropriate bachelor program
              </li>
              <li>
                PO4: Ability to learn and apply modern tools / techniques
                appropriate to the discipline to excel in the domain of digital
                communication engineering.
              </li>
              <li>
                PO5: Engage in lifelong learning to address the current and
                future needs of the society / industry individually and as a
                leader in diverse and multidisciplinary teams
              </li>
            </ul>
            <br />
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !hod ? "hidden" : ""
            }`}
          >
            <strong>Dr. B.K. Sujatha</strong> <br />
            <img
              src="https://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/te.jpg"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p className="text-justify mb-2">
              Dr.B.K Sujatha received B.E. degree in Electronics and
              Communication Engineering from S.J.C.E. Mysore, Mysore University,
              in 1987 Masters in Engg.in Electronics Engineering from UV.C.E.,
              Bangalore University in 1995 and Ph.D. in Electrical and
              Electronics Engineering Sciences from Visvesvaraya Technological
              University(VTU), Belgaum in 2010. She is a Fellow of IETE, India
              and Life Member of ISTE.
            </p>{" "}
            <p className="text-justify mb-2">
              Her research areas include speech & audio signal processing,
              statistical signal processing and modeling Image processing and
              multi-rate systems wireless communications under her guidance, 8
              research scholars have been conferred the degree of Doctor of
              Philosophy, out of which 5 from Jain University, Bangalore and 3
              from V.T.U. Belgaum.
            </p>{" "}
            <p className="text-justify mb-2">
              Currently she is guiding 03 research scholars registered under
              Visvesvaraya Technological University (VTU) Belgaum. She has
              published 14 papers in National Level Conference, 30 papers in
              international level conference which includes 17 IEEE papers and
              35 Journal papers at International Level with SCOPUS indexed, SJR
              indexed and h-indexed with many papers having citations.
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
