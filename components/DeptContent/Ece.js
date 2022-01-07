import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Ece({
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
            <div className="font-heading text-lg">OVERVIEW</div> <br />{" "}
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
            important academic bodies.
            <div className="font-heading text-lg"> VISION</div> <br /> To evolve
            into a department of national and international repute for
            excellence in education and cutting-edge research in the domain of
            Electronics and Communication Engineering.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            <ul className="list-disc ml-7">
              <li>
                Provide a world-class learning environment that caters to local
                and global technological and social requirements.
              </li>
              <li>
                Initiate research collaborations with academia and industries to
                perform cutting edge research leading to socio-technological
                innovations.
              </li>
              <li>
                Develop skills for pursuing innovation and entrepreneurial
                ventures for graduating engineers.
              </li>
            </ul>
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            <p>
              The Department of Electronics and Communication Engineering (ECE)
              was established in the year 1975 to meet the needs of the emerging
              IT industry and research. The department has 33 teaching staff
              including HOD. The main focused areas of the department are Signal
              and Image Processing, Wireless Communication, VLSI Design and
              Embedded Systems, Antenna Theory and Design. The department was
              accredited by Nation Board of Accreditation (NBA). The department
              has MoUs with leading IT Industries.
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
                The Department of Electronics & Communication Engineering was
                Establishment in the Year 1975 with initial intake of 60 for UG
                programme. In the year 2002, a PG programme in Digital
                Electronics & Communications and another PG programme in VLSI
                Design and Embedded Systems was started in 2013. Currently the
                UG programme has sanctioned intake of 120, PG programme in
                Digital Electronics & Communications has a sanctioned intake of
                30, and the PG programme in VLSI Design and Embedded Systems has
                a sanctioned intake of 18. The department is accredited by
                Nation Board of Accreditation (NBA) four times for the period of
                3 years each for UG and once for the period of 3 years for PG
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
            Department of Electronics & Communication Engineering offers five
            programs that are affiliated to VTU - Belgaum and recognized by
            AICTE:
            <ul className="list-disc ml-7">
              <li>
                Bachelor of Engineering Degree in Electronics & Communication
                Engineering.
              </li>
              <li>M. tech Degree in Digital Electronics & Communication.</li>
              <li>M. Tech Degree in VLSI Design and Embedded Systems.</li>
              <li>M. Sc (Engg) by Research.</li>
              <li>Ph.D. in Electronics and Communication Engineering.</li>
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
                PEO1: To train to be employed as successful professionals in a
                core area of their choice.
              </li>
              <li>
                PEO2: To participate in lifelong learning/ higher education
                efforts to emerge as expert researchers and technologists.
              </li>
              <li>
                PEO3: To develop skills in ethical, professional, and managerial
                domains.
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
                PSO1: Circuit Design Concepts: Apply basic and advanced
                electronics for implementing and evaluating various circuit
                configurations.
              </li>
              <li>
                PSO2: VLSI and Embedded Domain: Demonstrate technical competency
                in the design and analysis of components in VLSI and Embedded
                domains.
              </li>
              <li>
                PSO3: Communication Theory and Practice: Possess application
                level knowledge in theoretical and practical aspects required
                for the realization of complex communication systems.
              </li>
            </ul>
          </div>

          <div
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
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !hod ? "hidden" : ""
            }`}
          >
            <strong>Dr. Maya V Karki</strong> <br />
            <img
              src="https://msrit-bucket.s3-us-west-2.amazonaws.com/Departments/ECE/EC_HoD.png"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p className="text-justify mb-2">
              Dr Maya V Karki obtained B.E(Electronics and Communication in 1986
              from BVB Engineering College Hubli, M.E(Electronics in 1991 from
              UVCE Bangalore) and Ph.D (Electronics and Communication in 2013
              from VTU Belgum). Being very passionate, she has been in teaching
              profession at M S Ramaiah Institute of Technology since 1991. Her
              area of research interests are Computer vision, Video analytics
              and Artificial Intelligence. She is currently working in the area
              of biomedical signal processing in collaboration with Ramaiah
              Medical College. She is guiding 4 Ph. D. students under VTU. She
              has published 30 publications in referred International/National
              Journals & Conferences. She has also won national award in paper
              presentations and completed one AICTE research project. She is
              senior IEEE member and Life member ISTE.
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
