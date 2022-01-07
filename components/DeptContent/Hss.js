import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Hss({
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
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-mdbg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
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
            {/* <div className="font-heading text-lg">OVERVIEW</div> <br /> The
            department offers UG Programme with experienced faculties, well
            established laboratories and has active MoU with Mitsubishi Electric
            India Pvt Ltd. The department conducts the programme closer to
            present technology and practices in industry by training the
            students in the laboratory and theory courses. */}
            <div className="font-heading text-lg"> VISION</div> <br /> The
            Department of Humanities, MSRIT aspires to achieve excellence in
            teaching and training the young engineering students in the areas of
            Humanities and Social Sciences through outcome based quality
            education and nurture them to emerge as professional leaders,
            lifelong learners and responsible citizens of global community.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br /> The
            mission of the department is to offer courses that aim to strengthen
            the students’ creative and critical thinking, problem solving
            abilities, Communication Skills and broaden intellectual
            perspectives, to understand and deal with social realities through
            continuous learning experiences.
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            <p className="text-justify mb-2">
              The Department of Humanities has six faculty members, with one
              awarded Ph.D. degree and two are pursuing. The department engages
              in teaching Professional Communication, Constitution of India,
              Kannada, Communication and Life skills for BE/B.Arch. students.
              Apart from this the department runs special classes/Bridge courses
              in Communicative English to train NRI and rural students in
              English language usage. The faculty members engage in
              teaching-learning activities, research publications and conducting
              workshops for students to build social skills and broaden critical
              and creative competencies. The department is also equipped with an
              English Language Lab located in LHC block. First Year BE students
              take this course as a part of the subject ‘Professional
              Communication and Life skills’. Building Vocabulary, Grammar,
              Listening, Speaking skills, Power Point Presentations and Group
              activities form integral part of the course.
            </p>
            {/* <ul className="list-disc ml-7">
              <li>
                The goal and objective of the department is to prepare the
                students Industry-ready by aligning Electronics and
                Instrumentation Engineering education program to the current
                technology and the best practices in the area of Embedded
                system, Sensor technology and Industrial Automation technologies
                in general and specially for deployment of these technologies in
                building Industrial Automation Systems with latest advances in
                Information, Communication and Networking.
              </li>
              <li>
                The department has one of best state of art PLC and SCADA
                laboratory with Allen Bradley PLCs and SCADA from Schneider
                Electric along with licensed RSLogix 5000 series - automation
                software tool. The department has a full-fledged embedded
                controller lab with 8051, MSP430 and ARM processors. Hence
                training on this provides good scope for students to get
                placement in core companies.
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
                The Department of Humanities came into existence in the year
                2008. It was established when MSRIT became an autonomous
                institution. The department consists of six faculty members,
                with one awarded Ph.D. degree and two are pursuing. The
                department engages in teaching Professional Communication,
                Constitution of India, Kannada, Communication skills for
                BE/B.Arch. students. Apart from this the department runs special
                classes/Bridge course in Communicative English to train NRI and
                rural students in English language usage.
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
            The Humanities department is devoted to teach Constitution of India,
            Professional Communication and Life skills, and Kannada Language to
            students of B.E/B.Arch. first-year all branches. Bridge Course in
            Communicative English for NRI and rural students.
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !ug ? "hidden" : ""
            }`}
          >
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            Engineering Graduates will be able to:
            <ul className="list-disc ml-7">
              <li>
                Learn the basic concepts of communication in English Language.
              </li>
              <li>
                Understand the various Cross cultural issues in communication.
              </li>
              <li>Recognize the importance of listening in communication.</li>
              <li>
                Enhance the learner’s creative and professional competences.
              </li>
              <li>
                Familiarize the evolution and growth about Indian Constitution.
              </li>
              <li>
                Provide understanding of fundamental rights as per the Indian
                Constitution.
              </li>
              <li>
                Understand the individual role and responsibility as a citizen
                of India and to understand the role of Human rights and
                implication.
              </li>
              <li>
                Understand the role and responsibility of different
                functionaries of the government.
              </li>
              <li>
                Understand the ethical responsibility towards the society.
              </li>
              <li>
                Make students aware of basic conversation skills in Kannada
                language.
              </li>
              <li>
                Familiarize students with spoken and written Skills Kannada.
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <br />
            <ul className="list-disc ml-7">
              Engineering Graduates will be able to:
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
                Life-long learning: Recognize the need for, and have the
                preparation and ability to engage in independent and life-long
                learning in the broadest context of technological change.
              </li>
              <li>
                Apply reasoning informed by the contextual knowledge to assess
                societal, health, safety, legal and cultural issues and the
                consequent responsibilities relevant to the professional
                engineering practice.
              </li>
              {/* <li>
                Modern tool usage: Create, select, and apply appropriate
                techniques, resources, and modern engineering and IT tools
                including prediction and modelling to complex engineering
                activities with an understanding of the limitations.
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
                multidisciplinary settings
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
            {/* <strong>Program Specific Outcomes (PSOs):</strong> <br />
            On completion of the programme, the students will be able to:
            <ul className="list-disc ml-7"> */}
            {/* The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to */}
            {/* <li>
                Identify, analyze, design and implement—problems in diverse and
                multidisciplinary background emphasizing control and industrial
                automation, using modern tools.
              </li>
              <li>
                Understand the impact of engineering solutions in societal,
                environmental context and manage the projects efficiently.
              </li>
              <li>
                Adhere to professional ethics, lifelong learning, team building
                skills and communicate effectively.
              </li>
            </ul> */}
          </div>

          {/* <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !pg ? "hidden" : ""
            }`}
          >
            <strong>
              M. TECH (DIGITAL ELECTRONICS AND COMMUNICATION) OBJECTIVES:
            </strong>
            <br />
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO1: Be successful practicing professionals or pursue doctoral
                studies in areas related to the program, contributing
                significantly to research and development activities.
              </li>
              <li>
                PEO2: Engage in professional development in their chosen area by
                adapting to new technology and career challenges.
              </li>
              <li>
                PEO3: Demonstrate professional, ethical, and social
                responsibilities of the engineering profession.
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <ul className="list-disc ml-7">
              <li>
                PO1: Development of Solutions: An ability to independently carry
                out research/investigation and development work to solve
                practical problems.
              </li>
              <li>
                PO2: Technical Presentation Skills: An ability to write and
                present a substantial technical report/document.
              </li>
              <li>
                PO3: Analyze Complex Systems: A practical ability and
                theoretical knowledge to design and analyze complex electronics
                based and/or communication systems.
              </li>
              <li>
                PO4: Develop Novel Designs: An ability to apply their in-depth
                knowledge in electronics and communications domain to evaluate,
                analyze and synthesize existing and novel designs.
              </li>
              <li>
                PO5: Team Work and Project Management: An ability to effectively
                participate as a team member and develop project management
                skills necessary for a professional environment.
              </li>
            </ul>
            <br />
            <strong>
              M. TECH (VLSI DESIGN AND EMBEDDED SYSTEMS) OBJECTIVES:
            </strong>
            <br />
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO1: Be successful practicing professionals or pursue doctoral
                studies in areas related to the program, contributing
                significantly to research and development activities.
              </li>
              <li>
                PEO2: Engage in professional development in their chosen area by
                adapting to new technology and career challenges.
              </li>
              <li>
                PEO3: Demonstrate professional, ethical, and social
                responsibilities of the engineering profession.
              </li>
            </ul>
            <br />
            <strong>Program Outcomes (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PO1: Development of Solutions: An ability to independently carry
                out research/investigation and development work to solve
                practical problems.
              </li>
              <li>
                PO2: Technical Presentation Skills: An ability to write and
                present a substantial technical report/document.
              </li>
              <li>
                PO3: Analyze Complex Systems: A practical ability and
                theoretical knowledge to design and analyze VLSI based and/or
                embedded systems.
              </li>
              <li>
                PO4: Develop Novel Designs: An ability to apply their in-depth
                knowledge in VLSI and embedded systems domain to evaluate,
                analyze and synthesize existing and novel designs.
              </li>
              <li>
                PO5: Team Work and Project Management: An ability to effectively
                participate as a team member and develop project management
                skills necessary for a professional environment.
              </li>
            </ul>
          </div> */}

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !hod ? "hidden" : ""
            }`}
          >
            <strong>Dr.N. L. Ramesh</strong> <br />
            <img
              src="https://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/maths.jpg"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p className="text-justify mb-2">
              Dr. N. L. Ramesh is currently the Head of the Department(incharge)
              of the Humanities department. Dr. N. L. Ramesh obtained his
              Bachelor’s and Master’s degrees from Bangalore University. He
              received his Ph.D in Mathematics from Bangalore University for the
              doctoral work on ‘Gauss–Jacob–Radau Quadratic schemes over
              triangular finite elements’ in the year 2005. He Joined MSRIT as a
              lecturer in the year 1988. Since then he has worked under various
              capacities and presently working as Professor and Head of the
              Department of Mathematics. He has published papers in National and
              International journals.
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
