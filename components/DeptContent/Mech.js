import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Mech({
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
  const [coe, setCoe] = useState(false);

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
            centre of International Repute in Mechanical Engineering and to
            create qualified human resources needed to meet the demanding
            challenges in different areas and emerging fields of Mechanical
            Engineering and allied sciences.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />
            {/* <ul className="list-disc ml-7 mb-2">
              <li>
                To provide a conducive environment that offers well balanced
                Information Technology education and research.
              </li>
              <li>
                To provide training and practical experience in fundamentals and
                emerging technologies.
              </li>
              <li>
                To nurture creativity for overall personality development.
              </li>
            </ul> */}
            <p className="text-justify">
              To impart quality technical education to meet the growing needs of
              the profession through conducive and creative learning
              environment, to produce qualified and skilled human resources,
              create R&D environment, to be a centre of excellence and to offer
              post graduate programmes in the emerging fields of Mechanical
              Engineering.
            </p>
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            {/* <p className="text-justify mb-2">
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
            <ul className="list-disc ml-7">
              <li>
                M. S. Ramaiah Institute of Technology (MSRIT) was started in
                1962 by the late Dr. M.S. Ramaiah, our Founder Chairman who was
                a renowned visionary, philanthropist, and a pioneer in creating
                several landmark infrastructure projects in India. Noticing the
                shortage of talented engineering professionals required to build
                a modern India, Dr. M.S. Ramaiah envisioned MSRIT as an
                institute of excellence imparting quality and affordable
                education. MSRIT, a part of the Gokula Education Foundation, has
                grown over the years with significant contributions from various
                professionals in different capacities, ably led by Dr. M.S.
                Ramaiah himself, whose personal commitment has seen the
                institution through its formative years. Today, MSRIT stands
                tall as one of India’s finest names in Engineering Education and
                has produced around 35,000 engineering professionals who occupy
                responsible positions across the globe.
              </li>
              <li>
                The department of Mechanical Engineering is a team of well
                qualified fifty teaching staff members. All the staff members
                have post graduate degrees and eighteen of the staff members are
                doctorates. The staff members of the Mechanical Engineering
                department have taken up a number of research projects funded by
                many external agencies like DRDO, DST, AICTE, and VTU and have
                received funding to the tune of Rs. 1 Crore. Faculty members
                from the department have published books in different domains of
                Mechanical Engineering and these books are recommended by the
                Visvesvaraya Technological University’s Board of Studies as
                reference text books. The department has also contributed in
                developing intellectual property for the institute by obtaining
                a patent and currently is in pursuit of three patents.
              </li>
              <li>
                The department received software grants from Autodesk, a leading
                Computer Aided Design multinational company, and has been using
                them in the curriculum. In view of the golden jubilee
                celebrations, the department conducted a national level project
                exhibition and an International Conference on “Challenges and
                Opportunities in Mechanical Engineering, Industrial Engineering
                and Management Studies” – ICCOMIM.
              </li>
              <li>
                The students from the department participate in various national
                and international competitions. In the year 2013 – AeRobusta – a
                four member student team from the department participated in SAE
                Aero Design competition and secured 18th position out of 64
                teams worldwide.
              </li>{" "}
              <li>
                The team AeRobusta stood FIRST among the ASIAN countries. The
                student project team – EDHITHA – carried out a project on
                Unmanned Air System and won the First Prize of 6900 in SUAS
                competition held at Maryland, USA in June 2015.
              </li>
              <li>
                Another team from the department also participated in the
                Unmanned Air Vehicle System conducted by U.S. Navy at Maryland,
                USA. The team secured 5th Place in the technical session out of
                36 participating teams from all over the world.
              </li>{" "}
              <li>
                A team of two students also participated in the CAD Design
                Competition conducted by Autodesk, a CAD multinational company,
                in association with IIT Madras and secured FIRST PLACE among the
                teams from all over India with a cash prize of Rs 1,20,000 and
                also received a free Trip to Autodesk University, held at Las
                Vegas, USA.
              </li>
              <li>
                AICTE- Funded Project: The Department received total grant of
                Rs. 2164706/- for conduct of project under Principal
                Investigator's of Dr. Sunith Babu, Project titled “Experimental
                investigation of low Velocity impact and Damage Studies of
                Hybrid Composite Inter / Intra layered with Glass Carbon Kevlar
                fibres for aerospace application” under Research Promotion
                Scheme (RPS) during the financial year 2020-2021, File No.
                8-127/FDC/RPS (Policy-1)/2019-2O20 from AICTE.
              </li>{" "}
              <li>
                DRDO-Funded Project: The Department received total grant of
                Rs.27,06,350/ for conduct of Project under Principal
                investigator(PI) of the project is Dr. Arunakumara P C and
                Co-Principal Investigator(CO-PI) is Dr.Rajeesh S. Project titled
                “Study of Fatigue Crack Growth of Al 6061-T6 Welds Obtained by
                Gas Metal Arc Welding Technique” sanctioned for 3 years by
                DRDO’s ARMAMENTS research board under GRANT-IN-AID Scheme of
                ARMREB.
              </li>
              <li>
                Indian PATENT Granted: Patent has been granted to the patentee
                Dr. Raji George, HOD and Dr. Sridhar B.S for an invention
                entitled “SYNTHESIS OF NANOTUBES REINFORCED BRAKE LINER
                MATERIAL” as disclosed in the above-mentioned application for
                the term of 20 years from the 15th day of February 2014 in
                accordance with the provisions of the Patents Act,1970. Dated
                10/12/2020. Patent Number 353384
              </li>{" "}
              <li>
                The international book entitled “Organized Networks of Carbon
                Nano Tubes” Published by CRS Press Taylor and Francis Group in
                the year 2020. Written by three authors Dr. K.R.V. Subramanian,
                Professor, Dr. Aravinda CL. Rao and Dr. Raji George, Head of the
                Department, Mechanical Engineering.
              </li>
              <li>
                SNAM ALLOYS Pvt. Ltd.-Consultancy Project: The Department
                received total grant of 8.25 Lakhs+ GST for conduct of Project
                under investigator of the project are Dr. Siddaraju C, Dr. Raji
                George and Dr. Sunith Babu L Project titled “Web Interface for
                Cloud Based Thermal Analysis System”. Ref: SNAM/R&d/ Work order
                P.41/2020-21. Dated 25 th July 2020.
              </li>{" "}
              <li>
                SNAM ALLOYS Pvt. Ltd.-Consultancy Project: The Department
                received total grant of 1.55 Lakhs+ GST for conduct of Project
                under investigator of the project are Dr. Siddaraju C and Dr.
                Vijayakumar Project titled “Development of Mathematical
                Alogorithms to identify key thermal parameters from cooling
                curves during solidification of cast iron melt” Letter dated 5
                th April 2019.
              </li>
              <li>
                SERB-Funded Project: The Department received total grant of Rs.
                29,80,296/- for conduct of Project under Principal investigator
                (PI) of the project is Dr. Prakrathi. S Project titled
                “Performance evaluation of biodegradable orthopedic implants
                under flow, load and biomolecules chelation” sanctioned for 3
                years by Science and Engineering Research Board (SERB) under
                GRANT-IN-AID General Scheme.
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
                The Department of Mechanical Engineering commenced in the year
                1962 with an intake of 60 students. The department has grown
                strong over the last 54 years with the intake rising to 180
                students educated by a teaching staff comprising 50 members. The
                department was affiliated to the Bangalore University for a
                period of 35 years starting from the year 1962 and then the
                affiliation changed to the Visvesvaraya Technological University
                (VTU) in the year 1997. The department was awarded the
                autonomous status by the VTU in the year 2007. A Master’s degree
                course in Manufacturing Science and Engineering was introduced
                in the year 1985 to create adequate opportunities to scholars
                with a desire to pursue career in research and education.
                Acknowledging the requirements of automation in Production
                Industries, the department introduced one more Master’s degree
                course with the title Computer Integrated Manufacturing in the
                year 2004. The Department also offers research programme which
                includes MSc Engineering by research and PhD degree from VTU and
                at present 24 researchers are pursuing PhD.
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
                setCoe(false);
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
                setCoe(false);
                setHod(false);
              }}
            >
              Objectives
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
                setCoe(false);
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
                setCoe(false);
                setHod(true);
              }}
            >
              HOD's Profile
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
                setHod(false);
                setCoe(true);
              }}
            >
              Centre of Excellence
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
            Department of Mechanical Engineering offers five programs that are
            affiliated to VTU – Belgaum and recognized by AICTE: <br />
            <ul className="list-disc ml-7">
              <li>Bachelor of Engineering Degree in Mechanical Engineering.</li>
              <li>Master’s Degree in Computer Integrated Manufacturing.</li>
              <li>M. Sc (Engg) by Research.</li>
              <li>Ph.D. in Mechanical Engineering.</li>
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
                PEO1: To produce engineers with sound basic theoretical
                knowledge along with required practical skills in various
                specialized fields of Mechanical Engineering.
              </li>
              <li>
                PEO2: To inculcate team work capabilities and communication
                skills among students through co-curricular activities.
              </li>
              <li>
                PEO3: To motivate students for higher studies in specialised
                areas of Mechanical Engineering and explore possible profession
                in R & D, academic and self-employment opportunities.
              </li>{" "}
              <li>
                PEO4: To bring in awareness on environmental issues and
                commitments towards Professional ethics, social responsibilities
                and need for lifelong learning
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
            <strong>Program Outcomes:</strong>
            <br />
            <ul className="list-disc ml-7">
              Engineering Graduates will be able to:
              <li>
                Engineering Knowledge: Apply the knowledge of mathematics,
                science, engineering fundamentals, and an engineering
                specialization to the solution of Complex engineering problems.
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
                that meet the needs with appropriate consideration for the
                public health and safety, and the cultural, Societal and
                environmental considerations.
              </li>
              <li>
                Conduct investigations on complex problems: Use research-based
                knowledge and research methods including design of experiments,
                analysis and interpretation of data, and synthesis of the
                information to provide valid conclusions.
              </li>
              <li>
                Modern tool usage: Create, select, and apply appropriate
                techniques, resources and modern engineering and IT tools
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
            </ul>{" "}
            <br />
            <strong>Program Specific Outcomes (PSOs):</strong> <br />
            {/* On completion of the programme, the students will be able to: */}
            <ul className="list-disc ml-7">
              {/* The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to */}
              <li>
                PSO1: Ability to apply their knowledge in engineering mechanics,
                materials science, design, thermal engineering, production,
                management, CAD/CAM, robotics - on an applied basis.
              </li>
              <li>
                PSO2: Ability to apply the learned principles to the analysis,
                design, development and implementation to advanced mechanical
                systems and processes, be prepared to work professionally in
                mechanical engineering domain.
              </li>
              {/* <li>
                PSO3: Communication and Entrepreneurship skills, ability to
                exchange knowledge and incubate ideas.
              </li> */}
            </ul>
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !pg ? "hidden" : ""
            }`}
          >
            <strong>
              M. TECH (MANUFACTURING SCIENCE & ENGINEERING) OBJECTIVES:
            </strong>
            <br />
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO1: Apply the technical skills gained to model and analyze
                real time projects in the field of manufacturing science and
                engineering.
              </li>
              <li>
                PEO2: Able to take up profession in R&D areas, management and
                teaching activity in the field of mechanical engineering.
              </li>
              <li>
                PEO3: Engage in industry institute interaction and lifelong
                learning by adhering to ethical and environmental conditions.
              </li>
            </ul>
            <strong>Program Outcomes (POs):</strong>
            <ul className="list-disc ml-7">
              <li>
                PO1: An ability to independently carry out
                research/investigation and development work to solve practical
                problems.
              </li>
              <li>
                PO2: An ability to write and present a substantial Technical
                report/document.
              </li>
              <li>
                PO3: Students should be able to demonstrate a degree of
                mastering over the area as per the specialization of the
                programme. The mastery should beat a level higher than the
                requirements in the appropriate bachelor program.
              </li>
              <li>
                PO4: Develop an ability to identify problems, explore
                opportunities, propose feasible solutions, and, nurture a
                culture of scientific temper, to transform into an accomplished
                MSE graduate.
              </li>
              <li>
                PO5: Ability to apply the learned principles to the analysis,
                development and implementation of manufacturing systems; to
                prepare oneself to work professionally in academic institutions
                and industries.
              </li>
            </ul>
            <br />
            <strong>
              M. TECH (COMPUTER INTEGRATED MANUFACTURING) OBJECTIVES:
            </strong>
            <br />
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO1: Apply the technical skills gained to model and analyze
                real time projects in the field of computer integrated
                manufacturing.
              </li>
              <li>
                PEO2: Able to take up profession in R&D areas, management and
                teaching activity in the field of mechanical engineering.
              </li>
              <li>
                PEO3: Engage in industry institute interaction and lifelong
                learning by adhering to ethical and environmental conditions.
              </li>
            </ul>
            <br />
            <strong>Program Outcomes (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PO1: An ability to independently carry out
                research/investigation and development work to solve practical
                problems.
              </li>
              <li>
                PO2: An ability to write and present a substantial Technical
                report/document.
              </li>
              <li>
                PO3: Be able to demonstrate a degree of mastering over the area
                as per the specialization of the programme. The mastery should
                be at a level higher than the requirements in the appropriate
                bachelor program.
              </li>
              <li>
                PO4: An ability to identify problems, explore opportunities,
                propose feasible solutions and adopt latest computer-integrated
                manufacturing tools, to transform into an accomplished CIM
                engineer.
              </li>
              <li>
                PO5: Ability to apply the learned principles to the analysis,
                development and implementation of the computer integrated
                manufacturing; to prepare oneself to work professionally in
                academic institutions and industries.
              </li>
            </ul>
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !hod ? "hidden" : ""
            }`}
          >
            <strong>Dr. Raji George</strong> <br />
            <img
              src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/hod/me-hod.jpg"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <ul className="text-justify list-disc ml-7">
              <li>
                Dr. Raji George graduated in Mechanical Engineering from the
                Mysore University in the year 1983. He pursued his M.Tech in
                Machine Design and secured the Master’s degree in the year 1989
                and obtained his Ph.D from the Visvesvaraya Technological
                University in the year 2008.
              </li>
              <li>
                Dr. Raji George has been serving the teaching profession with a
                great devotion for 32 long years. He started his career in the
                year 1985 as a Lecturer in Ramaiah Institute of Technology, and
                reached the post of Professor and Head in the same college in
                the year 2017.
              </li>
              <li>
                Dr. Raji George was conferred the Best Engineering Teacher Award
                in the year 2009 instituted by Sir. M. Visvesvaraya Memorial
                Foundation, Bangalore. He was also conferred the Scientific
                Award of Excellence in 2011 by American Biographical Institute.
                His list of achievements also includes nominations for
                Arunachala Mudhaliar award for the best innovative students’
                project by ISTE, New Delhi in 2005 and the best Ph.D thesis
                award by the Indian National Academy of Engineers (I.N.A.E) in
                2008. Dr. Raji George also holds a patent for developing an
                innovative material for brake lining and has applied for a
                patent related to four-wheel steering. In a career spanning over
                three decades in Ramaiah Institute of Technology, Dr. Raji
                George established Nano-Technology Laboratory and currently
                working on nano-materials, batteries and super-capacitors.
              </li>
              <li>
                Dr. Raji George, has a number of funded projects to a tune of 25
                Lakhs to his credit. He has published more than 40 research
                papers in both national and international journals and
                conferences. He has guided more than 60 undergraduate projects
                and has guided 4 Ph.D. candidates.
              </li>
            </ul>
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !coe ? "hidden" : ""
            }`}
          >
            <strong>CENTRE FOR ADVANCED MATERIALS TECHNOLOGY</strong> <br />
            This Centre of excellence is envisaged to conduct research into
            advanced materials, processes and nanomaterials withstate-of-the-art
            equipment’s. It is set up with generous funding from RIT and
            partially supported by Boeing.
            <br />
            <strong>Major Objectives:</strong>
            <br />
            <ul className="text-justify list-disc ml-7 mb-2">
              <li>To initiate collaborative research with BOEING.</li>
              <li>
                To set up high-end material characterization facilities for
                research and innovation in nanomaterials and processes.
              </li>
              <li>
                To attract young faculty, UG and PG students of the Institute to
                pursue research in nanomaterials.
              </li>
              <li>
                To foster research partnership with Industries and research
                organizations, leading to collaborative research and consultancy
                service.
              </li>
              <li>
                To encourage novel research in nanomaterials, composites, energy
                storage devices and coatings.
              </li>
              <li>
                To expand research in biomaterials for medical applications,
                specifically implants.
              </li>
              <li>
                To encourage faculties to seek funding from Government and
                Private organizations for their research.
              </li>
            </ul>
            <br />
            <strong>Departments using facilities under the centre:</strong>
            <br />
            <ul className="text-justify list-disc ml-7 mb-2">
              <li>Department of Mechanical Engineering</li>
              <li>Department of Chemical Engineering</li>
              <li>Department of Industrial Engineering and Management</li>
              <li>Department of Biotechnology</li>
              <li>Department of Electrical and Electronics Engineering</li>
              <li>Department of Mathematics</li>
              <li>Department of Chemistry</li>
              <li>Department of Physics</li>
            </ul>{" "}
            <br />
            <br />
            <strong>Thrust Research Areas of Centre:</strong>
            <br />
            <ul className="text-justify list-disc ml-7 mb-2">
              <li>Advanced Nanomaterials</li>
              <li>Nanocomposites for Energy Storage andConversion Devices</li>
              <li>Nano / Biomaterials</li>
              <li>Nano Coatings, Sensors and Actuators</li>
            </ul>{" "}
            <br />
            <strong>Facilities:</strong>
            <br />
            <ul className="text-justify list-disc ml-7 mb-2">
              <li>X-RAY Diffractometer (XRD)</li>
              <li>Simultaneous Thermal Analyzer – TGA/DSC</li>
              <li>Fourier-Transform Infrared Spectroscopy (FTIR)</li>
              <li>UV-Visible Spectrophotometer</li>
              <li>Universal Testing Machine (UTM) for Polymers</li>
              <li>Non-Destructive Testing (NDT)</li>
              <li>Coefficient of Thermal Expansion – Dilatometer, etc.</li>
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
