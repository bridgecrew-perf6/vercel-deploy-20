import SideBarSyllabus from "../SideBarSyllabus";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Cv({
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
            <div className="font-heading text-lg"> VISION</div> <br /> To become
            a premier Department by adopting state-of-the-art technical
            knowledge through effective learning processes with research
            ambience in producing global quality ethical civil engineers, for
            the development of sustainable society.
            {/* <div className="font-heading text-lg"> VISION</div> <br /> {vision} */}
            <br />
            <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            <ul className="list-disc ml-7">
              <li>
                To transform the young minds into employable professionals by
                providing contemporary technical knowledge and appropriate
                professional skills through suitable teaching learning process.
              </li>
              <li>
                To provide rigorous training, acquaint the students with
                necessary skills and leadership qualities along with ethical
                values to address the complex and multi-faceted civil
                engineering problems.
              </li>
              <li>
                To provide opportunity to develop their potential by fostering
                intellectual curiosity to promote them for pursuing higher
                studies and research through exposure to the modern engineering
                tools and techno innovative projects.
              </li>
            </ul>
            {/* <div className="font-heading pt-2 text-lg">MISSION</div> <br />{" "}
            {mission} */}
            <div className="font-heading pt-2 text-lg">DEPARTMENT PROFILE</div>
            <br />
            <p>
              The Civil Engineering Department was started in the year 1971.
              Master program M Tech in Structural Engineering was started in the
              year 1984. Another milestone was achieved in the year 1994; the
              department was recognized as Research Center. Over four decades
              the department has carved its niche in the areas of academics,
              research, consultancy, collaborative projects, and publications.
              The department was awarded distinction of 5 years of accreditation
              by NBA when it was evaluated for third time. Over 12 research
              scholars have been awarded PhD degree and more than 18 research
              scholars are pursuing Ph D and M Sc degree in Engineering. Over
              250 technical papers in the reputed journals and conferences are
              the outcome of active research of the department. The Department
              holds a patent for Total Replacement of Sand in Concrete by Pond
              Ash (Patent No 244063). The department has been actively involved
              in conducting conferences, workshops, FDP’s, Site Visits, Project
              Tours and several students related programs to provide a platform
              for sharing and spreading the latest developments in the field of
              Civil Engineering.
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
                The Civil Engineering Department was started in the year 1971.
                Master program M Tech in Structural Engineering was started in
                the year 1984. Another milestone was achieved in the year 1994;
                the department was recognized as Research Center. Over four
                decades the department has carved its niche in the areas of
                academics, research, consultancy, collaborative projects, and
                publications. The department was awarded distinction of 5 years
                of accreditation by NBA when it was evaluated for third time.
                Over 12 research scholars have been awarded Ph.D. degree and
                more than 18 research scholars are pursuing Ph.D. and M.Sc.
                degree in Civil Engineering. Over 250 technical papers in the
                reputed journals and conferences are the outcome of active
                research at the department. The Department holds a patent for
                Total Replacement of Sand in Concrete by Pond Ash (Patent No
                244063). The department has been actively involved in conducting
                conferences, workshops, FDP’s, Site Visits, Project Tours and
                several students related programs to provide a platform for
                sharing and spreading the latest developments in the field of
                Civil Engineering.
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
            Department of Civil Engineering offers two programs that are
            affiliated to VTU – Belgaum and recognized by AICTE:
            <ul className="list-disc ml-7">
              <li>Bachelor of Engineering Degree in Civil Engineering.</li>
              <li>M. Tech Degree in Structural Engineering.</li>
              {/* <li>M. Tech Degree in Computer Network Engineering.</li>
              <li>M. Sc (Engg) by Research.</li>
              <li>Ph.D. in Computer Science & Engineering.</li> */}
            </ul>
          </div>

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !ug ? "hidden" : ""
            }`}
          >
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              Bachelor of engineering graduates of Civil Engineering program of
              M S Ramaiah Institute of Technology shall attain the following
              PEO’s within three to four years of graduation:
              <li>
                PEO1: To produce graduates who will perform well in engineering
                profession as competent professionals using contemporary
                technical knowledge and professional skills.
              </li>
              <li>
                PEO2: To produce graduates who pursue higher education and show
                intellectual curiosity for life-long learning.
              </li>
              <li>
                PEO3: To produce graduates who can communicate effectively and
                work in multidisciplinary environments embedded with ethical
                values and social responsibilities.
              </li>
            </ul>
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
                including prediction and modeling to complex engineering
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
                preparation and ability to engage independent and life-long
                learning in the broadest context of technological change.
              </li>
            </ul>
            <strong>Program Specific Outcomes (PSOs):</strong>
            <ul className="list-disc ml-7">
              {/* The Programme outcomes are defined by National Board of
              Accreditation. The established PEO’s are in line with programme
              educational objectives. Engineering Graduates will be able to */}
              The Civil Engineering Graduates can:
              <li>
                Apply the knowledge of basic sciences, geology and environmental
                science along with the conceptual knowledge of engineering
                sciences to illustrate the process involved in planning,
                analysis and design of sustainable civil engineering systems.
              </li>
              <li>
                Conduct laboratory experiments/field investigations, and
                analyze/interpret the experimental results for appropriate
                conclusions and recommendations to a real-world civil
                engineering problem with a significant perspective of economy,
                society and environment.
              </li>
              <li>
                Demonstrate professional ethics and implement the principles of
                project management, business and public policy to lead the
                project execution as per the design requirement, with the
                state-of- the-art technology and contemporary skills.
              </li>
            </ul>
          </div>

          {/* <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 ${
              !pg ? "hidden" : ""
            }`}
          >
            <strong>COMPUTER SCIENCE & ENGINEERING (PG):</strong>
            <br />
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO1: Pursue a successful career in the field of Computer
                Science & Engineering or a related field utilizing his/her
                education and contribute to the profession as an excellent
                employee, or as an entrepreneur.
              </li>
              <li>
                PEO2: Be aware of the developments in the field of Computer
                Science & Engineering, continuously enhance their knowledge
                informally or by pursuing doctoral studies and engage in
                research and inquiry leading to new innovations and products.
              </li>
              <li>
                PEO3: Be able to work effectively in multidisciplinary and
                multicultural environments and Be responsible members and
                leaders of their communities.
              </li>
              <li>
                PEO4: Understand the human, social and environmental context of
                their profession and contribute positively to the needs of
                individuals and society at large.
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
                PO2: An ability to write and present a substantial technical
                report/document.
              </li>
              <li>
                PO3: Students should be able to demonstrate a degree of mastery
                over the area as per the specialization of the program. The
                mastery should be at a level higher than the requirements in the
                appropriate bachelor program.
              </li>
              <li>
                PO4: Acquire professional and intellectual integrity to stress
                upon the impact of computer engineering applications with
                respect to economic and environmental aspects.
              </li>
              <li>
                PO5: Acquire methods of engaging in life-long learning not only
                to predict and plan the projects of the future but also to groom
                others in the group.
              </li>
            </ul>
            <strong>COMPUTER NETWORKS & ENGINEERING (PG):</strong>
            <br />
            <strong>Program Educational Objectives (PEOs):</strong> <br />
            <ul className="list-disc ml-7">
              <li>
                PEO1: Pursue a successful career in the field of Computer
                Networks & Engineering or a related field utilizing his/her
                education and contribute to the profession as an excellent
                employee, or as an entrepreneur.
              </li>
              <li>
                PEO2: Be aware of the developments in the field of Computer
                Science & Engineering, continuously enhance their knowledge
                informally or by pursuing doctoral studies and engage in
                research and inquiry leading to new innovations and products
              </li>
              <li>
                PEO3: Be able to work effectively in multidisciplinary and
                multicultural environments and Be responsible members and
                leaders of their communities.
              </li>
              <li>
                PEO4: Understand the human, social and environmental context of
                their profession and contribute positively to the needs of
                individuals and society at large.
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
                PO2: An ability to write and present a substantial technical
                report/document.
              </li>
              <li>
                PO3: Students should be able to demonstrate a degree of mastery
                over the area as per the specialization of the program. The
                mastery should be at a level higher than the requirements in the
                appropriate bachelor program.
              </li>
              <li>
                PO4: Acquire professional and intellectual integrity to stress
                upon the impact of computer engineering applications with
                respect to economic and environmental aspects.
              </li>
              <li>
                PO5: Acquire methods of engaging in life-long learning not only
                to predict and plan the projects of the future but also to groom
                others in the group.
              </li>
            </ul>
          </div> */}

          <div
            className={`pt-2 bg-gray-deptHeader bg-opacity-50 border-gray-200 border-2 text-justify ${
              !hod ? "hidden" : ""
            }`}
          >
            <strong>Dr. M C Nataraja</strong> <br />
            <img
              src="https://msrit-bucket.s3-us-west-2.amazonaws.com/Departments/Civil/Civil_HoD.png"
              className="mx-auto text-center w-[200px] h-[200px]"
            />
            <p className="text-justify mb-2">
              Professor, Civil Engineering Department, Ramaiah Institute of
              Technology, Bangalore. Formerly Principal, Bapuji Institute of
              Engineering and Technology, Davanagere. Served as Professor of
              Civil Engineering for 33 years at Sri Jayachamarajendra College of
              Engineering (JSS S&T University), Mysore. He is the recipient of
              “ICI- Outstanding Concrete Technologist Award” for his
              contribution to Cement and Concrete Technology in India.
            </p>{" "}
            <p className="text-justify mb-2">
              Dr. Nataraja graduated in Civil Engineering from SJCE, University
              of Mysore in 1983 securing VIII rank, obtained his masters in
              Industrial Structures from National Institute of Technology,
              Surathkal in 1985 and obtained his Ph. D from Indian Institute of
              Technology, Kharagpur in 1999, in the area of fiber reinforced
              concrete. He has authored/coauthored more than 300 publications in
              journals and conferences at national and international level
              mainly in the area of special concretes and concrete technology.
              He has reviewed more than 150 technical papers to refereed
              national and international journals related to cement, concrete
              and composites. He has many awards and distinction to his credit
              by professional bodies which include best technical paper awards
              by Indian Concrete Institute (twice) and International council for
              fiber reinforced concrete, Best engineer award by IEI Mysore and
              best teacher and engineer award by Lion clubs of Mysore.
            </p>{" "}
            <p className="text-justify mb-2">
              Dr. M. C. Nataraja is one of the most distinguished concrete
              technologists known for his valuable contributions to research,
              consultancy and teaching in the area of concrete technology,
              analysis and design of structures. His contributions are related
              to sustainable concrete, utilization of industrial by-products,
              fiber reinforced concrete, self compacting concrete, high
              performance concrete, geopolymer concrete, soft computing tools in
              concrete technology and concrete mix design. He has 34 years of
              teaching, consultancy and research experience. He has guided about
              75 master’s thesis and three Ph. D theses on advanced concrete
              technology. He has reviewed and evaluated many Ph. D theses of
              reputed universities.
            </p>{" "}
            <p className="text-justify mb-2">
              Dr. Nataraja has delivered more than 300 technical talks to
              professionals from government departments, colleges and
              industries. He has visited Oxford, London, Japan, Kaulalampur and
              Dubai in connection with technical conferences and deliberations.
            </p>{" "}
            <p className="text-justify mb-2">
              Dr. Nataraja has served as subject expert for AICTE, UGC, VTU and
              NPTEL. He is the invited subject expert (5 subjects) for
              Educational Satellite programme of Visvesvaraya Technological
              University, Government of Karnataka. He has chaired technical
              sessions in many national and international conferences. He served
              as advisory and technical committee member for several conferences
              on concrete technology in India and abroad.He enjoys Google
              citations of 1561and Mandalay/SCI Citations of 1023 till date.
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
