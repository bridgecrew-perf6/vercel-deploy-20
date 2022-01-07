import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Mca({
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
            {/* <div className="font-heading text-lg">OVERVIEW</div> <br /> The
            department offers UG Programme with experienced faculties, well
            established laboratories and has active MoU with Mitsubishi Electric
            India Pvt Ltd. The department conducts the programme closer to
            present technology and practices in industry by training the
            students in the laboratory and theory courses. */}
            <div className="font-heading text-lg"> VISION</div> <br /> To be a
            nationally prominent and internationally recognized department in
            academics and research activities with the aim of developing
            competitive software professionals to serve the society and ever
            changing industry.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />
            <ul className="list-disc ml-7 mb-2">
              <li>
                To enable the students to be knowledgeable and creative through
                state-of-the-art curriculum and innovative teaching
                methodologies.
              </li>
              <li>
                To provide training programs that bridges the gap between
                academia and industry to produce competitive software
                professionals.
              </li>
              <li>
                To inculcate ethical values in the students enabling them to
                become socially committed professionals.
              </li>
              <li>
                To enhance the research quality and productivity, by providing
                required facilities.
              </li>
            </ul>
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            {/* <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            <p className="text-justify mb-2">
              The department has been recognized as R&D center by VTU. The
              department has well equipped laboratories. Some of the
              laboratories have also been set up in collaboration with
              industries such as Intel, Apple, Honeywell, EMC2, Nokia, ARM and
              IBM (Add more). The department has highly qualified and motivated
              faculty members. All faculties are involved in research and
              technical paper publications in reputed technical journals,
              conferences across the world. The department is successfully
              conducting seminars & workshops for students and academicians in
              the emerging areas of Information technology. Department invites
              industry experts to deliver sessions related to syllabus to enable
              the students to get industry exposure.
            </p> */}
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
                The Department of Master of Computer Applications was
                established in 1997 with the objective of producing high quality
                professionals to meet the demands of the emerging field of
                Computer Applications. A team of experienced staff members are
                dedicated to teaching and developing academic activities in the
                department. The department got academic autonomy in the year
                2007 and is accredited by NBA. The Department of Master of
                Computer Applications is recognized as a Research Center under
                Visvesvaraya Technological University in 2012.
              </li>{" "}
              {/* <li>
                The department of Industrial Engineering and Management obtained
                the academic autonomous status in the year 2007 affiliated to
                VTU along with other departments of the institute. 6 batches
                under autonomous curriculum have already passed out and the 7th
                batch is about to complete. All the eligible students are
                successfully placed in prestigious organizations. The department
                was accredited by the NBA in the year 2001 and reaccredited in
                2004, 2010 and 2015.
              </li> */}
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
            Department of Master of Computer Applications offers two programs
            that are affiliated to VTU – Belgaum and recognized by AICTE: <br />
            <ul className="list-disc ml-7">
              <li>PG in Master of Computer Applications.</li>
              <li>Ph.D. (Research Center).</li>
            </ul>
            {/* <br />
            Exlusive Summary of UGC Projects:{" "}
            <a
              href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Departments/iEM/UGC+Project+Summary.pdf"
              target="_blank"
            >
              Click here
            </a> */}
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !ug ? "hidden" : ""
            }`}
          >
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            {/* Engineering Graduates will be able to: */}
            <ul className="list-disc ml-7">
              <li>
                PEO1: Excel in professional career in the field of Computer
                Applications and contribute to research and development
                activities.
              </li>
              <li>
                PEO2: Provide software solutions that are socially acceptable
                and adapt emerging technologies and tools.
              </li>
              <li>
                PEO3: Exhibit ethical and communication skills and engage in
                lifelong learning.
              </li>
              {/* <li>
                PEO4: Engage in continuing education and life-long learning to
                be competitive and enterprising.
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
              </li> */}
            </ul>
            <strong>Graduate Outcomes:</strong>
            <br />
            <ul className="list-disc ml-7">
              {/* The graduates of the programme will be able to: */}
              <li>
                PO1: Apply knowledge of mathematics and computing principles
                appropriately to develop conceptual model for real world
                problems.
              </li>
              <li>
                PO2: Identify and formulate problem definition for real world
                problems, analyze the literature of the domain and provide
                solutions using mathematics and computing.
              </li>
              <li>
                PO3: Design, develop and assess a software system, process,
                component, or program of varying complexity that meet specified
                needs with appropriate consideration for public health and
                safety and societal considerations.
              </li>
              <li>
                PO4: Use research based knowledge to analyze and interpret data
                and synthesize information to provide valid conclusions.
              </li>
              <li>
                PO5: Adapt to understand, select, use and create modern tools
                and technologies necessary for computing practices.
              </li>
              <li>
                PO6: Adopt professional ethics, principles of professional
                computing practices, cyber regulations and responsibilities.
              </li>
              <li>
                PO7: Recognize the need and engage in self-learning for
                continual development as a computing professional.
              </li>
              <li>
                PO8: Apply the management principles for managing projects as an
                individual, as a member and as a leader in a team under
                multidisciplinary environments.
              </li>
              <li>
                PO9: Communicate effectively about computing activities in both
                verbal and written form with the computing community and with
                society.
              </li>
              <li>
                PO10: Assess the local and global impact of software solutions
                on individuals, organizations and society.
              </li>
              <li>
                PO11: Perform effectively as an individual and as a member or
                leader in diverse teams and in multidisciplinary environments.
              </li>
              <li>
                PO12: Adopt standardized software engineering practices with
                innovative ideas to succeed as an employee or entrepreneur.
              </li>
            </ul>{" "}
            <br />
            {/* <strong>Program Specific Outcomes (PSOs):</strong> <br />
            On completion of the programme, the students will be able to:
            <ul className="list-disc ml-7"> */}
            {/* The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to */}
            {/* <li>
                PSO1: Problem Solving Skills, ability to understand and analyze
                the Information Technology problems and develop computer
                programs.
              </li>
              <li>
                PSO2: Applied Engineering Skills, ability to apply standard
                practices and strategies in Software Development.
              </li>
              <li>
                PSO3: Communication and Entrepreneurship skills, ability to
                exchange knowledge and incubate ideas.
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
            <strong>Dr. S Seema</strong> <br />
            <img
              src="https://msrit-bucket.s3.us-west-2.amazonaws.com/Gallery/hod/Seema-MCA.jpg"
              className="mx-auto text-center"
            />
            <p className="text-justify mb-2">
              Dr S Seema is a Professor and Head at the Department of Master of
              Computer Application, M S Ramaiah Institute of Technology,
              Bangalore, India. She obtained her Ph.D. from Visveswaraya
              Technological University, Belgaum. Her area of research is in
              Machine Learning and Bioinformatics. Her research interests
              include Machine Learning, Data Analytics, Virtual Reality and
              Augmented Reality. She is a member of ACM, and ISTE. She has
              published over 40 technical papers published in reputed Indian and
              International Conferences and Journals. She has many book chapters
              in her credit. She has reviewed papers of journals and the
              conferences. She was part of Technical Program committee and the
              Advisory committee of many conferences.
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
