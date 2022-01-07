import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Mba({
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
            <div className="font-heading text-lg"> VISION</div> <br />
            To become a Globally trusted and influential management education
            institution that is equipped to, built on the twin pillars of theory
            and practice and designed to foster academic, research excellence
            and professional skill development through learning and knowledge
            sharing.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />
            The Department commits itself to achieve the above vision through
            <ul className="list-disc ml-7 mb-2">
              <li>
                Imparting a sustained Quality and Value based Management
                education by blending theory and practice in creative ways.
              </li>
              <li>
                Fostering a conducive environment for research and consultancy
                in Management domains.
              </li>
              <li>
                Promoting entrepreneurship and skill development activities for
                socio-economic needs.
              </li>
            </ul>
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
                The department offers a 2 year MBA degree course of Visvesvaraya
                Technological University (VTU). The department is a recognized
                Research Centre of VTU and, at present there are 11 Doctorates
                and 16 researchers are pursuing their Ph.D. under their
                guidance. Seven Researchers are already been awarded their
                doctoral degree from our VTU Research Centre.
              </li>
              <li>
                The faculty of the department are well experienced both in
                industry and in the academic field. Many of our faculty members
                have authored books and published papers in leading journals and
                they regularly attend national and international conferences and
                seminars for knowledge updation.
              </li>{" "}
              <li>
                The Department has professionals with ample industrial
                experience as Guest Faculty leading some of the significant and
                contemporary subjects. The department believes in continually
                enhancing the expertise of the faculty by deputing them to
                various workshops and faculty development programs.
              </li>
              <li>
                The department is committed to deliver quality management
                education. Facilitating this, processes like Teaching process,
                Proctor process, Quality Audit programs are in place. The
                department has conducted programmes and workshops for the
                benefit of teaching fraternity and students.
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
                The Department of Management Studies (MBA Programme) was
                established in 1998 with an objective of creating high quality
                professional managers to meet the emerging and ever growing
                demands and challenges of the industry in an ethical and
                responsible manner. Over the years, the Department has built a
                strong reputation for its program and graduating students are
                placed in reputed institutions and leading corporations.
                Recognizing the quality of management education imparted by our
                Institution, the department was the first in Bangalore Region to
                receive academic autonomy from VTU in the year 2007. The
                department is accredited by Nation Board of Accreditation (NBA)
                for the period of 3 years (2019-2022). The department has MoUs
                with leading industries like EY GSS and MCX.
              </li>{" "}
              <li>
                The department has well furnished class rooms, exclusive
                computer laboratory with internet facility, licensed software,
                modern teaching equipments like LCD projectors and well stacked
                professional library. The department conducts periodical
                industrial visits. The students Project work cum Internship in
                leading companies to get hands on experience in corporate.
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
            Department of Management Studies offers two program that are
            affiliated to VTU – Belgaum and recognized by AICTE: <br />
            Specializations offered:
            <ul className="list-disc ml-7">
              <li>Finance</li>
              <li>Marketing</li>
              <li>Human Resource</li>
              <li>Retail Management</li>
              <li>Banking and Insurance</li>
            </ul>
            Note: Student can opt for either Single specialization or Dual
            specialization.
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
                PEO1: Analyse, design, develop and manage integrated system of
                funds, people, information technology, material, equipment,
                methods and markets by taking into consideration economic,
                technical, social, legal, moral and ethical considerations.
              </li>
              <li>
                PEO2: Acquire necessary managerial skills for conducting
                business, entrepreneurship, research and higher education to
                provide service to community.
              </li>
              <li>
                PEO3: Engage in lifelong learning for professional enrichment
                and advancement.
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
              The Post Graduate Students will be able to:
              <li>
                Apply knowledge of management theories and practices to solve
                business problems.
              </li>
              <li>
                Foster analytical and critical thinking abilities for data-based
                decision making.
              </li>
              <li>Develop value based leadership abilities.</li>
              <li>
                Understand, analyse and communicate global, economic, legal and
                ethical aspects of business.
              </li>
              <li>
                Lead themselves and others in the achievement of organizational
                goals, contributing effectively to a team environment.
              </li>
              <li>
                Demonstrate ability to understand financial aspects of business
                enterprises and derive meaningful inferences about their
                performance.
              </li>
              <li>
                Identify customers’ needs and to participate in the process of
                developing products and services to meet their requirements.
              </li>
              <li>
                Develop confidence for self-education and ability for career
                planning and development.
              </li>
              {/* <li>
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
            <strong>Dr. M.R Shollapur</strong> <br />
            <img
              src="https://msrit-bucket.s3.us-west-2.amazonaws.com/Gallery/hod/mba.jpg"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p className="text-justify mb-2">
              Dr. M.R Shollapur, a graduate in B.Com, M.Com in Cost Accounting
              and PhD in Finance and Banking from Karnatak University, Dharwad.
              He has rendered 37 years of service as a full time
              faculty/administrator in premier institutions: Director of the
              Post Graduate Department of Management Studies and Research
              Centre, Siddaganga Institute of Technology, Tumakuru, Faculty
              Member at the Post- Graduate Department of Studies and Research in
              Commerce, Karnatak University, Dharwad, and Lewis College of
              Business (AACSB Accredited), Marshall University, Huntington
              (USA). Dr. Shollapur was invited as Visiting Professor of Finance
              in 2008 by Marshall University, Huntington (West Virginia) and
              taught Finance for MBA. He was a visiting research scholar to
              Indiana University of Pennsylvania, USA during October-November
              2015. He visited Oxford University, UK, in August 2016 for
              presenting paper in International Conference. He has visited a
              number of Universities in the US and UK Dr. Shollapur has guided
              eight Ph.Ds and 2 MPhils, and has published 73 papers and 11
              books. He has executed three funded research projects. He got the
              Best Paper Award by the Clute Institute of Business &amp;
              Economics Research, USA, in 2006, in the International Business
              and Economic Research Conference in Las Vegas. So far, he has
              earned three ‘Best Paper Awards’ in International Conferences. He
              is on the editorial board of Journals in Management and member of
              various committees constituted for framing statutes, curriculum
              designing, and syllabi revision at various levels. He is the
              member of Board of Studies, Academic Council, and the Governing
              Councils of various universities / institutes. The primary areas
              of teaching and research include Finance and Accounting.
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
