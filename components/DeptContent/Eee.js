import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Eee({
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
            <div className="font-heading text-lg"> VISION</div> <br /> To excel
            in engineering education and research, inculcating professional
            ethics in students and emerge as leaders globally in the field of
            electrical & electronics engineering.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br /> The
            mission of the department is to produce graduates who will:
            <ul className="list-disc ml-7">
              <li>
                Be able to apply their knowledge to identify and solve problems
                arising in any domain.
              </li>
              <li>
                Be able to contribute to research and developmental activities
                in frontier areas.
              </li>
              <li>Master innovative skills to be entrepreneurs.</li>
            </ul>
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            <ul className="list-disc ml-7">
              {" "}
              <li>
                The fast changing technological scenario poses to the department
                a challenge of continuously updating its curriculum and faculty
                to be able to provide state-of-the-art education to the
                students.
              </li>{" "}
              <li>
                Faculty: The Department currently has eighteen faculty members,
                and one Professor Emeritus. Current areas of research can be
                broadly classified into the following categories: High Voltage
                Engineering, Electric Power Quality, Industrial Drives and
                Renewable Energy.
              </li>{" "}
              <li>
                Facilities: The Department has modern laboratories to serve the
                teaching and research needs of the students and faculty of the
                Department. All faculty members, all UG PG and Research scholars
                have sole access to computer and softwares. All systems are
                connected to the Departmental LAN which is a part of the
                Institute-wide area network.
              </li>{" "}
              <li>
                Relation with Industry: The Department has close interaction
                with number of industry and Government agencies. The main modes
                of interaction are faculty consultancy, sponsored projects and
                short-term courses. The Department also has Industrial Affiliate
                courses.
              </li>{" "}
            </ul>
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
                The department was started in the year 1962 with Under Graduate
                Program of sanctioned intake 60, along with the establishment of
                the college. In the year 2003, the department was recognised as
                a research centre by Visvesvaraya Technological University,
                Belgaum to offer PhD and M Sc (Engg. by Research) programs.
                Department also offers a post graduate program M.Tech in
                Computer Applications in Industrial Drives, since 2004. The
                department was accredited thrice by NBA, New Delhi and in 2015,
                the department has been accredited for five years by NBA. The
                department has set up a centre of excellence in Process
                Automation and Control in collaboration with Schneider Electric,
                Bangalore and established NI LabVIEW Academy in collaboration
                with NI and National MEMS Design Centre, supported by NPMASS,
                India. The department has 18 well qualified and experienced
                faculty members with specialization in High Voltage Engineering,
                Power systems, Power electronics, Illumination engineering,
                Control systems, Signal Processing and VLSI Design and Embedded
                systems. Ten faculty members of the department are doctorates,
                five faculty members are pursuing research in different
                disciplines at different Universities and the rest others are
                post graduates. Dr.Pradipkumar Dixit is specialized in High
                Voltage Engineering (Ph. D from VTU, Belgaum, 2009), Dr.
                Chandrashekhar Badachi holds doctoral degree with specialization
                in High Voltage Engineering(from Jain University, 2016), Dr.
                Kodeeswara Kumaran G. holds doctoral degree with specialization
                in Power Electronics and Renewable Energy(from NIT, Suratkal,
                2018), Dr. Shridhar S holds doctoral degree with specialization
                in Power Systems(from VTU, Belgaum 2018), Dr. S.Dawnee holds
                doctoral degree with specialization in Nanofabrication(from
                IISc, Bangalore 2020), Dr Janamejaya B C holds doctoral degree
                with specialization in fast charging (from, University of
                Ontario Institute of Technology (UOIT), Ontario, Canada, 2018),
                Dr. Ratna Rahul Tupakula holds doctoral degree with
                specialization in Control and Renewable Energy Systems (from NIT
                Warangal, 2019), Dr. Nagaraj C holds doctoral degree with
                specialization in Power Control (from NIT, Suratkal, 2020), Dr.
                Rakesh Kumar holds doctoral degree with specialization in Power
                Electronics and Drives (from IIT, Dhanbad, 2017), Dr. Rojalin
                Pradhan holds doctoral degree with specialization in Technology
                and Managment (from IIT, Delhi, 2019) and Dr. G. R.
                Nagabhushana, Formerly Chairman, Department of High Voltage
                Engineering, Indian Institute of Science, Bangalore is with the
                department as Professor Emeritus. In addition, Sri. K V Jayaram,
                Retired JM-DGM, Bokaro Steel Plant/SAIL has joined the
                department as Co-ordinator for Schneider Electric Centre of
                Excellence.
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
            Department of Electrical & Electronics Engineering offers four
            programs that are affiliated to VTU – Belgaum and recognized by
            AICTE:
            <ul className="list-disc ml-7">
              <li>
                Bachelor of Engineering Degree in Electrical & Electronics
                Engineering.
              </li>
              <li>M.Tech in Computer Applications in Industrial Drives</li>
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
            Programme Educational Objectives (PEOs) of the program Produce
            graduates who will:
            <ul className="list-disc ml-7">
              <li>
                PEO1: Produce graduates who will have the ability to apply the
                knowledge of basic sciences, engineering sciences and electrical
                engineering to excel in professional career.
              </li>
              <li>
                PEO2: Produce graduates who will continue to enhance their
                knowledge.
              </li>
              <li>
                PEO3: Produce graduates who are confident to take up diverse
                career paths.
              </li>
              <li>
                PEO4: Produce graduates who will provide leadership and
                demonstrate the importance of professional integrity.
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <br />
            PO’s of the program offered Engineering Graduates will be able to:{" "}
            <br />
            <ul className="list-disc ml-7">
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
                Design: Design solutions for complex engineering problems and
                design system components or processes that meet the specified
                needs with appropriate consideration for the public health and
                safety, and the cultural, societal, and environmental
                considerations.
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
                activities with an understanding of the limitations
              </li>
              <li>
                The engineer and society: Apply reasoning informed by the
                contextual knowledge to assess societal, health, safety, legal
                and cultural issues and the consequent responsibilities relevant
                to the professional engineering practice. Institute Vision and
                Mission Department Vision and Mission Programme Educational
                Objectives Programme Outcomes Graduate Attributes Professional
                bodies such as IIIE, NITIE Regulatory bodies such as
                UGC,AICTE,VTU Feedback Faculty Alumni Industry Student .
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
              {/* The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to */}

              <li>
                PSO1: Identify, formulate, analyze, design and
                implement—electrical and electronics circuits, control systems,
                drives, power systems and power electronic systems.
              </li>
              <li>
                PSO2: Use modern tools to solve problems in diverse and
                multidisciplinary environment.
              </li>
              <li>
                PSO3: Understand the impact of engineering solutions in societal
                and environmental context, commit to professional ethics,
                lifelong learning and communicate effectively.
              </li>
              <li>
                PSO4: Apply project management techniques to
                electrical/electronic(s) systems, exhibiting team
              </li>
            </ul>
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !pg ? "hidden" : ""
            }`}
          >
            <strong>M.TECH: COMPUTER APPLICATIONS IN INDUSTRIAL DRIVES</strong>
            <br />
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO1: Be knowledgeable to solve complex problems in Industrial
                drives.
              </li>
              <li>
                PEO2: Contribute to multidisciplinary scientific research
                through individual and team work.
              </li>
              <li>
                PEO3: Be leaders with managerial skill, demonstrating
                professional integrity
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <ul className="list-disc ml-7">
              At the end of the Program, the students should have
              <li>
                PO1: An ability to independently carry out research
                /investigation and development work to solve practical problems.
              </li>
              <li>
                PO2: An ability to write and present a substantial technical
                report/document.
              </li>
              <li>
                PO3: Students should be able to demonstrate a degree of mastery
                over the area of Computer Applications in Industrial Drives.
              </li>
              <li>
                PO4: An ability to apply the basic knowledge to identify, model
                and solve electrical drive problems.
              </li>
              <li>
                PO5: An ability to apply skills to design and develop hardware
                and/or software to solve real world problems.
              </li>
            </ul>
            <br />
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !hod ? "hidden" : ""
            }`}
          >
            <strong>Dr. Pradipkumar Dixit</strong> <br />
            <img
              src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/eee.png"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p className="text-justify mb-2">
              Dr. Pradipkumar Dixit obtained BE (Electrical & Electronics, 1989,
              Mysore University), M.Tech (Power & Energy Systems, 1995,
              NITK(formerly KREC), Surathkal) and PhD (High Voltage Engineering,
              2009, VTU, Belgaum). He has been in the teaching profession since
              February 1990 and joined M S Ramaiah Institute of Technology in
              June 2011.
            </p>{" "}
            <br />{" "}
            <ul className="list-disc ml-7">
              <li>Guided 07 PhDs and 01 M.Phil</li>
              <li>Guiding 06 PhD and 01 M.Sc(Engg.by research) candidates</li>
              <li>
                Published 70 publications in referred International/National
                Journals & Conferences
              </li>
              <li>
                Completed 08 Research and Consultancy projects in the area of
                High Voltage Engineering
              </li>
              <li>
                01 DST and 03 Defence consultancy projects are ongoing Senior
                member IEEE
              </li>
              <li>Fellow of Institution of Engineers (I)</li>
              <li>Chartered Engineer (I)</li>
              <li>Life member of ISTE</li>
            </ul>
            His research interests are High Voltage Engineering, Insulation
            Engineering, Outdoor Insulation, Lightning Protection,
            Electromagnetic Fields, Electrical Power Quality and Artificial
            Intelligence.
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
