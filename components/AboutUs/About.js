export default function About() {
  //   const [facultyData, setfacultyData] = useState(data[0].fa);
  //   const [mission, setMission] = useState(data[0].mission);
  //   const [profile, setProfile] = useState(data[0].profile);

  //console.log(st_achieve);

  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        {/* <div className="col-span-full h-8 lg:bg-blue-ramaiah  bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full lg:absolute">
          <div className="lg:w-full lg:flex lg:flex-col text-center">
            <a
              href="/"
              className="lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah active:bg-opacity-100 bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Overview
            </a>
            <a
              href="faculty"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Faculty
            </a>
            <a
              href="research"
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2
            >
              Research
            </a>
            <a
              href="bos"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              BOS|BOE
            </a>
            <a
              href="achievements"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Achievements
            </a>
            <a
              href="activities"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Activities
            </a>
          </div>
        </div> */}

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <div className="text-center font-bold text-xl">ABOUT US</div>
          <div className="grid grid-cols-1 gap-3 w-full">
            <div>
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  {/* <img
                    className="w-full h-32 md:h-[8.5rem] object-cover md:w-32 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt=""
                  /> */}
                  <div className="p-1 flex flex-col justify-start text-justify ">
                    {/* <h5 className="text-gray-900 text-xl font-medium mb-2">
                      VISION
                    </h5> */}
                    <p className="text-gray-700 text-base mb-4 p-1">
                      To be an Institution of International Eminence, renowned
                      for imparting quality technical education, cutting edge
                      research and innovation to meet global socio-economic
                      needs .
                    </p>
                  </div>
                  <div className="bg-gradient-to-br text-white text-xl from-orange-ramaiah to-pink-ramaiah rounded-t-lg md:rounded-none md:rounded-r-lg md:vertical md:text-center font-bold">
                    VISION
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  {/* <img
                    className=" w-full h-32 md:h-[8.5rem] object-cover md:w-32 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt=""
                  /> */}
                  <div className="p-1 flex flex-col justify-start text-justify">
                    <p className="text-gray-700 text-base mb-4 p-1">
                      M S Ramaiah Institute of Technology shall meet the global
                      socio-economic needs through <br />
                      1. Imparting quality technical education by nurturing a
                      conducive learning environment through continuous
                      improvement and customization. <br />
                      2. Establishing research clusters in emerging areas in
                      collaboration with globally reputed organizations. <br />
                      3. Establishing innovative skills development,
                      techno-entrepreneurial activities and consultancy for
                      socio-economic needs.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br text-white text-xl from-orange-ramaiah to-pink-ramaiah rounded-t-lg md:rounded-none md:rounded-r-lg md:vertical md:text-center font-bold">
                    MISSION
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  {/* <img
                    className=" w-full h-32 md:h-[8.5rem] object-cover md:w-32 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt=""
                  /> */}

                  <div className="p-1 flex flex-col justify-start">
                    <p className="text-gray-700 text-base mb-4 text-justify p-1">
                      We at M. S. Ramaiah Institute of Technology, Bangalore
                      strive to deliver comprehensive, continually enhanced,
                      global quality technical and management education through
                      an established Quality Management System complemented by
                      the synergistic interaction of the stake holders
                      concerned.We at M. S. Ramaiah Institute of Technology,
                      Bangalore strive to deliver comprehensive, continually
                      enhanced, global quality technical and management
                      education through an established Quality Management System
                      complemented by the synergistic interaction of the stake
                      holders concerned.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br text-white text-xl from-orange-ramaiah to-pink-ramaiah w-20 rounded-t-lg md:rounded-none md:rounded-r-lg md:vertical md:text-center font-bold">
                    QUALITY POLICY
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-8 mb-4 text-center font-bold text-2xl"
            id="evolution"
          >
            {" "}
            EVOLUTION{" "}
          </div>

          <div className="container relative mx-auto px-6 flex flex-col space-y-8">
            <div className="absolute z-0 w-[4px] h-full md:mx-auto md:left-0 md:right-0 bg-gradient-to-b from-orange-ramaiah to-pink-ramaiah shadow-md left-17 inset-0 xs:left-17 xs:-mx-0"></div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                alt=""
                className="timeline-img"
              />
              <div className="timeline-container">
                <div aria-hidden="true" className="timeline-pointer"></div>
                <div className="bg-white p-6 rounded-md shadow-md leading-normal text-justify">
                  <div className="uppercase text-orange-ramaiah font-bold text-2xl mb-2">
                    the beginning
                  </div>
                  <img src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/about-us/pooja.png" />
                  <p className="w-full whitespace-normal">
                    M S Ramaiah Institute of Technology (MSRIT) was started in
                    1962 by Late Dr. M S Ramaiah, our Founder Chairman who was a
                    renowned visionary, philanthropist, and a pioneer in
                    creating several landmark infrastructure projects in India.
                    Noticing the shortage of talented engineering professionals
                    required to build a modern India, Dr. M S Ramaiah envisioned
                    MSRIT as an institute of excellence imparting quality and
                    affordable education. Part of Gokula Education Foundation,
                    MSRIT has grown over the years with significant
                    contributions from various professionals in different
                    capacities, ably led by Dr. M S Ramaiah himself, whose
                    personal commitment has seen the institution through its
                    formative years. Today, MSRIT stands tall as one of India’s
                    finest names in Engineering Education and has produced
                    around 35,000 engineering professionals who occupy
                    responsible positions across the globe.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                alt=""
                className="timeline-img"
              />
              <div className="timeline-container">
                <div aria-hidden="true" className="timeline-pointer"></div>
                <div className="bg-white p-6 rounded-md shadow-md leading-normal text-justify">
                  <div className="uppercase text-orange-ramaiah font-bold text-2xl mb-2">
                    DECADE OF GROWTH
                  </div>
                  <img src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/about-us/it-ise-dept-inauguration.png" />
                  <ul className="list-disc ml-2">
                    <li>
                      {" "}
                      The journey of success continued with the addition of
                      Electronics & Communication Engineering department in
                      1975. The department made a difference by acquiring top
                      ranks at the University level and majority of the students
                      had gone abroad for higher studies and many reached
                      responsible positions in multinational companies.
                    </li>
                    <li>
                      In view of the Industrialization of Indian Economy, MSRIT
                      started on time the Industrial and Production Engineering
                      branch in the year 1979. With the addition of Metrology
                      Laboratory in 1982 and Industrial Engineering Laboratory
                      in 1983, the Institute of Engineers (India) recognized the
                      Industrial and Production Engineering course offered by
                      the Institute in 1989. Presently it is renamed as
                      Industrial Engineering and Management.
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                alt=""
                className="timeline-img"
              />
              <div className="timeline-container">
                <div aria-hidden="true" className="timeline-pointer"></div>
                <div className="bg-white p-6 rounded-md shadow-md leading-normal text-justify">
                  <div className="uppercase text-orange-ramaiah font-bold text-2xl mb-2">
                    DECADE OF CONSOLIDATION
                  </div>
                  <img src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/about-us/silver-jubilee.png" />
                  <ul className="list-disc ml-2">
                    <li>
                      {" "}
                      M. Tech in Structural Engineering was started in the Civil
                      department in the year 1983.
                    </li>
                    <li>
                      Computerization of the world led to starting new branches
                      like Computer Science and Engineering in the year 1984.
                    </li>
                    <li>
                      {" "}
                      Subsequently, Instrumentation Technology was started in
                      1992 and Information Science and Engineering in 1992.
                    </li>
                    <li>
                      In addition to these departments, to meet the growing
                      needs in the infra structural sector, Architecture
                      Department was started in 1992.
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                alt=""
                className="timeline-img"
              />
              <div className="timeline-container">
                <div aria-hidden="true" className="timeline-pointer"></div>
                <div className="bg-white p-6 rounded-md shadow-md leading-normal text-justify">
                  <div className="uppercase text-orange-ramaiah font-bold text-2xl mb-2">
                    DECADE OF EXPANSION
                  </div>
                  <img src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/about-us/decade-of-expansion.png" />
                  <ul className="list-disc ml-2">
                    <li>
                      {" "}
                      With the objective of imparting contemporary technologies
                      in the field of Telecommunication Engineering, MSRIT
                      started Department of Telecommunication Engineering in the
                      year 1997 affiliated to Bangalore University.
                    </li>
                    <li>
                      With the advancement in technologies and challenges faced
                      in health care sector, MSRIT with an intention of creating
                      skilled manpower and to explore the plethora of
                      opportunities started the Department of Medical
                      Electronics in 1996.
                    </li>
                    <li>
                      {" "}
                      With the objective of creating high quality professionals
                      to meet the global challenges in the field of Computer
                      Applications, Department of Master of Computer
                      Applications was established in 1997.
                    </li>
                    <li>
                      To enhance management skills MSRIT started Department of
                      Management Studies (MBA) in the year 1998 which is growing
                      from strength to strength day by day and within a short
                      time the department has carved a niche amongst the comity
                      of colleges offering MBA degree.
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                alt=""
                className="timeline-img"
              />
              <div className="timeline-container">
                <div aria-hidden="true" className="timeline-pointer"></div>
                <div className="bg-white p-6 rounded-md shadow-md leading-normal text-justify">
                  <div className="uppercase text-orange-ramaiah font-bold text-2xl mb-2">
                    DECADE OF EXCELLENCE
                  </div>
                  <img src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/about-us/pooja.png" />
                  <ul className="list-disc ml-2">
                    <li>
                      {" "}
                      In 2002, M. Tech in Digital Electronics and Communication
                      was started.
                    </li>
                    <li>
                      M. Tech Software Engineering was started in the year 2003.
                    </li>
                    <li>
                      The year 2004 witnessed starting of three M.Tech programs
                      namely Computer Applications in Industrial drives,
                      Computer Integrated Manufacturing and Digital
                      Communications.
                    </li>
                    <li>
                      ISO 9001 Certification was conferred on MSRIT in the year
                      2000 and re certifications were obtained in the years
                      2003, 2007 and 2010.
                    </li>
                    <li>
                      MSRIT voluntarily submitted applications to the NBA for
                      the accreditation of several of its major UG programs.
                      After assessment, in February 2001, NBA accorded
                      accreditation to all the major departments of the
                      Institute for their UG programs. Since then the Institute
                      has been consistently participating in the accreditation
                      process.
                    </li>
                    <li>
                      MSRIT participated in and successfully completed Phase I
                      of TEQIP, Technical Education Quality Improvement program,
                      an initiative of the Government of India with funding from
                      World Bank. MSRIT has been selected to participate in
                      Phase II of TEQIP also under sub – component 1.2 with
                      focus on PG Education and Research.
                    </li>
                    <li>
                      Visvesvaraya Technological University granted Autonomous
                      Status to MSRIT, for both UG and PG Programmes, in the
                      year 2007 and the same was approved by UGC also.
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1639930605762-6dbb721bd568?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
                alt=""
                className="timeline-img"
              />
              <div className="timeline-container">
                <div aria-hidden="true" className="timeline-pointer"></div>
                <div className="bg-white p-6 rounded-md shadow-md leading-normal text-justify">
                  <div className="uppercase text-orange-ramaiah font-bold text-2xl mb-2">
                    AUTONOMY JOURNEY
                  </div>
                  <img src="http://d2e9h3gjmozu47.cloudfront.net/Gallery/about-us/autonomus.png" />
                  <p className="w-full whitespace-normal">
                    We are very happy to record that Visvesvaraya Technological
                    University and UGC have granted the Institute academic
                    autonomy for all its Undergraduate and Postgraduate programs
                    starting from the academic year 2007 – 2008.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}
