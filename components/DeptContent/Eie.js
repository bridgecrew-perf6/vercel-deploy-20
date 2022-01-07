import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Eie({
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
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md  bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full ">
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
            <div className="font-heading text-lg">OVERVIEW</div> <br /> The
            department offers UG Programme with experienced faculties, well
            established laboratories and has active MoU with Mitsubishi Electric
            India Pvt Ltd. The department conducts the programme closer to
            present technology and practices in industry by training the
            students in the laboratory and theory courses.
            <div className="font-heading text-lg"> VISION</div> <br /> To become
            centre of excellence in the field of Electronics and Instrumentation
            Engineering for education and research.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br /> To
            empower and imbibe students with technical knowledge and practical
            skills in the field of Electronics and Instrumentation Engineering,
            enabling them to work as professionals in globally competitive
            environment and contribute to the society through research in higher
            studies.
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            {/* <p>
              The Department of Electronics and Communication Engineering (ECE)
              was established in the year 1975 to meet the needs of the emerging
              IT industry and research. The department has 33 teaching staff
              including HOD. The main focused areas of the department are Signal
              and Image Processing, Wireless Communication, VLSI Design and
              Embedded Systems, Antenna Theory and Design. The department was
              accredited by Nation Board of Accreditation (NBA). The department
              has MoUs with leading IT Industries.
            </p> */}
            <ul className="list-disc ml-7">
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
            </ul>
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
                Department of Instrumentation Technology was established in the
                year 1992 and renamed as Electronics and Instrumentation
                Engineering in the year 2014 by VTU. The department offers
                undergraduate programme in B.E and has started with research
                centre in the year 2014. The department is accredited by NBA in
                the year 2001, 2004, 2010 and 2016. The department has ISO
                9001:2008 Quality management system. The synergy of the
                progressive management, committed faculty, staff, and students
                are ensuring in excellent academic results year after year.
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
            Department of Electronics and Instrumentation Engineering offers one
            program that are affiliated to VTU – Belgaum and recognized by
            AICTE:
            <ul className="list-disc ml-7">
              <li>
                Bachelor of Engineering Degree in Electronics and
                Instrumentation Engineering.
              </li>
              <li>Research programme: M.Sc (Engg) by Research and Ph.D</li>
            </ul>
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !ug ? "hidden" : ""
            }`}
          >
            {/* <strong>Program Educational Objectives (PEOs):</strong> <br />
            Engineering Graduates will be able to:
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
            </ul> */}
            <strong>Program Outcomes (POs):</strong>
            <br />
            <ul className="list-disc ml-7">
              Engineering Graduates will be able to:
              <li>
                Engineering knowledge: Apply the knowledge of mathematics,
                science, engineering fundamentals, and an engineering
                specialization to the solution of complex engineering problems.
              </li>
              <li>
                Problem analysis: Identify, formulate, review research
                literature, and analyze complex engineering problems reaching
                substantiated conclusions using first principles of mathematics,
                natural sciences, and engineering sciences.
              </li>
              <li>
                Design/development of solutions: Design solutions for complex
                engineering problems and design system components or processes
                that meet the specified needs with appropriate consideration for
                the public health and safety, and the cultural, societal, and
                environmental considerations.
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
              </li>
            </ul>
            <strong>Program Specific Outcomes (PSOs):</strong> <br />
            On completion of the programme, the students will be able to:
            <ul className="list-disc ml-7">
              {/* The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to */}

              <li>
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
            </ul>
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
            <strong>Dr. M K Pushpa</strong> <br />
            <img
              src="https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/hod/pushpa_hod.png"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p className="text-justify mb-2">
              Dr. M K Pushpa, received her Ph.D in Computer Science and
              Information Science Engineering from Visvesvaraya Technological
              University(VTU), Belagavi in 2016. Received Fellow Institution of
              Engineers in 2020. She did her graduation B.E and M.Tech from
              SJCE, Mysore University. She has joined M.S.Ramaiah Institute of
              Technology, Bangalore in 1997. She has 26+ years of teaching
              experience with industry experience at Bharat Electronics,
              Bangalore and L&T Biomedicals, Mysore. Currently working in the
              area of Embedded Systems, Image Processing, Analog Electronics and
              Internet of Things (IoT). She is Life member for Indian Society of
              Technical Education(ISTE), Member IEEE, Member IEEE Signal
              Processing Society, Member IEEE Circuits and Systems Society, IEEE
              Biometrics Council, IEEE Council on RFID, IEEE Sensors Council,
              IEEE Council on Electronic Design Automation. She is a Certified
              Labview Associate Developer(CLAD) for National Instruments(NI)
              Academy. She was a Mentor for ReImagine Waste, a National level
              Hackathon event, executed in association with IIM and IISc
              Bangalore. She was also a Co-Investigator for a project “Face
              recognition for personal identification” funded by Govt. of India,
              BRNS, BARC, Mumbai. She has published several papers in
              International Conferences and Journals.
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
