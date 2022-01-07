function Admissions({}) {
  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
          <div className="lg:w-full lg:flex lg:flex-col text-center">
            <a
              href="#programs"
              className="lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah active:bg-opacity-100 bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Programs Offered & Eligibility
            </a>
            <a
              href="#research"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Research Programs
            </a>
            <a
              href="#application"
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Application Forms
            </a>
            <a
              href="#fee"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Fee Structure
            </a>
            <a
              href="#scholarship"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Scholarship Details
            </a>
            <a
              href="#contact"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Contact Details
            </a>
            <a
              href="#brochure"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Brochure
            </a>
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <div>
            {/* <div className="font-heading text-lg"> VISION</div> <br /> To be a
                leading Biotechnology Engineering department that imparts quality
                technical education with strong research component, to develop
                solutions in the field of food, health and environment. */}
            <div className="font-heading text-lg text-center" id="programs">
              {" "}
              PROGRAMS OFFERED & ELIGIBILITY
            </div>{" "}
            <br />
            <strong>A. Undergraduate Courses</strong> <br />
            1. Four Years Bachelor of Engineering programs in: <br />
            <br />
            <ul className="list-disc ml-7 pb-2">
              <li>
                Artificial Intelligence & Machine Learning{" "}
                <sup className="font-bold">*</sup>
              </li>
              <li>
                Artificial Intelligence & Data Science{" "}
                <sup className="font-bold">*</sup>
              </li>
              <li>Biotechnology</li>
              <li>Chemical Engineering</li>
              <li>Civil Engineering</li>
              <li>Computer Science & Engineering</li>
              <li>
                Computer Science & Engineering(Artificial Intelligence & Machine
                Learning) <sup className="font-bold">*</sup>
              </li>
              <li>
                Computer Science & Engineering(Cyber Security){" "}
                <sup className="font-bold">*</sup>
              </li>
              <li>Electrical & Electronics Engineering</li>
              <li>Electronics & Communications Engineering</li>
              <li>Electronics & Instrumentation Engineering</li>
              <li>Electronics & Telecommunications Engineering</li>
              <li>Industrial Engineering & Management</li>
              <li>Information Science & Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Medical Electronics Engineering</li>
            </ul>
            <sup className="font-bold">*</sup>
            <span className="font-bold">
              {" "}
              New courses from 2021-22{" "}
            </span> <br /> <br />
            2. Five Years Bachelor of Architecture <br /> <br />
            <span className="underline"> Eligibility (B.E) </span> <br />
            <p>
              &nbsp; &nbsp; &nbsp;A candidate who has passed 10 + 2 pattern of
              examination (equivalent to the two year Pre University in
              Karnataka) with Physics and Mathematics as compulsory subjects
              along with Chemistry/ Biotechnology/ Biology/ Computer Science/
              Electronics as optional subjects in the qualifying examination is
              eligible to pursue an undergraduate degree in engineering at RIT.
            </p>{" "}
            <br />
            <p>
              &nbsp; &nbsp; &nbsp; The eligibility for admission is 45% in case
              of General Category and 40% marks in the qualifying examination in
              case of SC/ST, Category-1 and OBC Category candidates. The marks
              obtained by the candidate in Biotechnology/ Biology/ Computer
              Science/ Electronics in the qualifying examination will be
              considered in the place of Chemistry in case the marks obtained in
              Chemistry is less for the required aggregate percentage for the
              purpose of determination of eligibility (and not for the purpose
              of determination of rank, in respect of engineering/technology
              courses).
            </p>{" "}
            <p>
              &nbsp; &nbsp; &nbsp;
              <span className="underline font-bold">Entrance Exam:</span> KEA /
              COMEDK
            </p>{" "}
            <br /> <br />
            <span className="underline"> Eligibility (B.Arch) </span> <br />
            <ul className="list-disc ml-7">
              <li>
                A candidate who has passed 10 + 2 pattern of examination
                (equivalent to the two year Pre-university in Karnataka).
              </li>
              <li>
                Admission to Five year B.Arch., Course with 50% marks in
                Physics, Chemistry and Mathematics and also 50% marks in
                aggregate at 10+2 level of examination and English is one of the
                Language.
              </li>
              <li>
                “No candidate shall be admitted to the architecture course
                unless he / she has passed an examination at the end of the 10 +
                2 scheme of examination with 50% marks in Physics, Chemistry and
                Mathematics and also 50% marks in aggregate of the 10 + 2 level
                examination”.
              </li>
              <li>
                This provided that the candidate should also appear and secure a
                minimum of 40% marks in NATA.(Including SC / ST, Category-1, and
                OBC Category candidates) conducted by the Council of
                Architecture. NATA TO BE HELD ON 14-April-2019 and 07-July-2019.
              </li>{" "}
            </ul>
            <br /> <br />
            <span className="underline">
              {" "}
              ELIGIBILITY CRITERIA FOR NRIs/FQ/PIO under Supernumerary Quota to
              B.E., Under Graduate Programs ONLY
            </span>{" "}
            <br />
            <p>
              10 + 2 pattern of education which is equivalent to Pre-university
              of Karnataka, India with Physics, Mathematics along with Chemistry
              / Biotechnology / Computer Science / Electronics / Biology as
              optional with English as one of the language of study and obtained
              a minimum 50% of marks in the optional subjects (as per VTU
              eligibility criteria for the year 2019-20).
            </p>
            <ul className="list-disc ml-7">
              <li>
                NRIs- Children of Indian Workers in the Gulf Countries are
                eligible for NRI Quota (as per The Gazette of India - 2004)
              </li>
              <li>
                Foreign Nationals – Citizens of all countries other than India.
                (as per The Gazette of India - 2004)
              </li>
              <li>
                PIO – Persons who are citizens of other countries (except
                Pakistan and Bangladesh) who at any time held an Indian
                Passport, or who or either of his parents or any of his grand
                parents was a citizen of India by virtue of the provisions of
                the Constitution of India (as per The Gazette of India - 2004)
              </li>
            </ul>{" "}
            <br /> <br />
            Documents Required For Booking <br /> <br />
            <ul className="list-disc ml-7">
              <li>
                Employment certificate of Father / Mother from the employer
                stating working from to till date (Minimum 5 year of service is
                compulsory) for students taking admission under NRI quota
              </li>
              <li>
                Valid pass port and Visa copies of parent and student (if
                student studying in India, passport and visa copy not required)
                Qualifying marks sheet of student
              </li>
              <li>10th standard +12th standard Marks Sheet</li>
              <li>Letter from Indian embassy in proof of NRI status</li>
              <li>RP (Residential Permit) for Foreign students.</li>
              <li>
                Demand Draft should be made in dollars in favor of M S Ramaiah
                Institute of Technology, Bangalore
              </li>
            </ul>{" "}
            <br />
            Contact Admission Section on 080-23607902 and e-mail
            admn[at]RIT[dot]edu for more details
            <br /> <br />
            &nbsp; &nbsp; &nbsp;International Student Forum -{" "}
            <span className="font-bold">
              <a
                href="https://RIT-bucket.s3-us-west-2.amazonaws.com/Admissions/RIT_International_Forum.pdf"
                target="_blank"
              >
                Download Prospectus here
              </a>
            </span>{" "}
            <br /> <br />
            <strong>B. Postgraduate Courses </strong> <br /> <br />
            1. Master of Business Administration (MBA) <br /> <br />
            <p>
              <span className="underline"> Eligibility</span> - We offer a
              2-year MBA program, open to candidates who have a 3-year
              bachelor’s degree from a recognized university with not less than
              50% of the marks in aggregate of all the years of the degree
              examination and 45% in case of candidates from Karnataka belonging
              to SC/ST and Category-1. [Entrance Exam: KMAT / CMAT / MAT/ PGCET
              – any one mandatory]
            </p>
            <br />
            2. Master of Computer Applications (MCA) <br /> <br />
            <p>
              <span className="underline">Eligibility</span> - We offer a 2-year
              MCA program, open to candidates who have passed a 3-year
              bachelor’s degree from a recognized university with not less than
              50% of the marks in aggregate of all the years of the degree
              examination with Mathematics/ Statistics/ Computer Science/
              Computer Programming/ Computer Applications/ Business Mathematics/
              Business Statistics as one of the optional subjects/ electives at
              degree level. In case of candidates from Karnataka belonging to
              SC/ST and Category-l the minimum aggregate is 45%. [Entrance Exam:
              KMAT or PGCET – any one mandatory]
            </p>
            <br />
            3. Master of Technology (M.Tech) Programs <br />
            <br />
            <ul className="list-disc ml-7">
              <li>Structural Engineering</li>
              <li>Manufacturing Science & Engineering</li>
              <li>Computer Integrated Manufacturing</li>
              <li>Computer Applications and Industrial Drives</li>
              <li>Digital Electronics & Communication</li>
              <li>VLSI Design & Embedded Systems</li>
              <li>Computer Science & Engineering</li>
              <li>Computer Network Engineering</li>
              <li>Industrial Engineering</li>
              <li>Software Engineering</li>
              <li>Digital Communication</li>
              <li>Biotechnology</li>
              <li>Master of Architecture (Landscape Architecture)</li>
            </ul>
            <br />
            <p>
              <span className="underline">Eligibility</span> - RIT offers the
              M.Tech programs for which candidates with a B.E/B.Tech degree in
              the relevant discipline with at least 50% marks in aggregate are
              eligible. The minimum aggregate marks required are 45% in case of
              candidates from Karnataka belonging to SC/ST & Category-l.
              [Entrance Exam: GATE Qualified or PGCET of Karnataka]{" "}
            </p>
            <br />
            <a
              href="https://d2e9h3gjmozu47.cloudfront.net/Admissions/MTECH+ELIGIBILITY.jpg"
              target="_blank"
            >
              CLICK HERE FOR M.TECH / M.ARCH- EQUIVALENCE{" "}
            </a>
            {/* 2 buttons here */}
            <div className="mt-5 flex flex-row gap-3">
              <a
                className="text-white p-3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah font-bold "
                href="https://msrit-bucket.s3.us-west-2.amazonaws.com/Admissions/CHECK+LIST+2021.pdf"
                target="_blank"
              >
                ADMISSION CHECKLIST
              </a>
              <a
                className="text-white p-3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah font-bold"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Admissions/CHECK+LIST+2020+A+BISEP.pdf"
                target="_blank"
              >
                ADMISSION CHECKLIST (BISEP)
              </a>
            </div>
            <br />
            <div className="font-heading text-lg text-center" id="research">
              {" "}
              RESEARCH PROGRAMS
            </div>{" "}
            <br />
            Research programs leading to Ph.D/M.Sc (Engg.) are available in the
            following departments. <br />
            <br />
            <ul className="list-disc ml-7">
              <li>Civil Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Electrical & Electronics Engineering</li>
              <li>lectronics & Communication Engineering</li>
              <li>Computer Science & Engineering</li>
              <li>Chemical Engineering</li>
              <li>Industrial Engineering & Management</li>
              <li>Electronics & Instrumentation Engineering</li>
              <li>Information Science & Engineering</li>
              <li>Electronics & Telecommunication Engineering</li>
              <li>Medical Electronics Engineering</li>
              <li>Biotechnology</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Mathematics</li>
              <li>MBA</li>
              <li>MCA</li>
            </ul>{" "}
            <br />
            <p>
              <span className="underline"> Eligibility</span> - Working
              professionals, faculty and others with a postgraduate
              qualification in the related discipline and in exceptional cases,
              Professionals with B.E. are eligible to apply for a Ph.D.
            </p>
            <p>
              The required qualification for M.Sc. (Engg) programs is a 4-year
              engineering degree program in the related discipline.
            </p>{" "}
            <br />
            <div
              className="font-heading font-bold text-lg text-center"
              id="application"
            >
              APPLICATION FORMS
            </div>{" "}
            <br />
            <div className="flex flex-row gap-2 mx-auto w-full">
              <a
                className="text-white p-3 rounded-[0.25rem] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah font-bold max-w-1/3 text-center shadow-lg"
                href="https://d2e9h3gjmozu47.cloudfront.net/Admissions/UG-Admission.pdf"
                target="_blank"
              >
                UG APPLICATION FORM
              </a>
              <a
                className="text-white p-3 rounded-[0.25rem] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah font-bold max-w-1/3 text-center shadow-lg"
                href="https://d2e9h3gjmozu47.cloudfront.net/Admissions/PG-Admission.pdf"
                target="_blank"
              >
                PG APPLICATION FORM
              </a>
              <a
                className="text-white p-3 rounded-[0.25rem] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah font-bold max-w-1/3 text-center shadow-lg"
                href="https://d2e9h3gjmozu47.cloudfront.net/Admissions/Admission_Form+AMMANNA-1MS15CS400+(1).pdf"
                target="_blank"
              >
                B.E DIPLOMA STUDENTS APPLICATION
              </a>
            </div>{" "}
            <br /> <br />
            <div
              className="font-heading text-lg text-center font-bold"
              id="fee"
            >
              {" "}
              FEE STRUCTURE
            </div>{" "}
            <br />
            <div className="w-full">
              <div className="flex flex-row flex-wrap gap-3 w-full mx-auto">
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  1ST YEAR BE / B.ARCH NRI STUDENTS FEES STRUCTURE 2020-2021
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  1ST YEAR B.E. / B. ARCH PMSSS(J&K), CSAB-NESUT STUDENTS
                  2020-2021
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  1ST YEAR MBA / MCA STUDENTS FEE STRUCTURE 2020-2021
                  (MANAGEMENT QUOTA)
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  1ST YEAR M.TECH / M.ARCH STUDENTS FEE STRUCTURE 2020-2021
                  (MANAGEMENT QUOTA)
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  2ND YEAR B.E. STUDENTS FEE STRUCTURE 2020-2021 (DCET)
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  1ST YEAR M.TECH / M.ARCH STUDENTS FEE STRUCTURE 2020-2021
                  (PGCET QUOTA)
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  1ST YEAR MBA / MCA STUDENTS FEE STRUCTURE 2020-2021 (PGCET
                  QUOTA)
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  HIGHER SEMESTER (UG & PG COURSES) FEES STRUCTURE 2021-22
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  HIGHER SEMESTER (UG & PG COURSES) FEES STRUCTURE 2021-22
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  HIGHER SEMESTER (UG & PG COURSES) FEES STRUCTURE 2021-22
                </a>
                <a
                  className="text-white p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href=""
                >
                  HIGHER SEMESTER (UG & PG COURSES) FEES STRUCTURE 2021-22
                </a>
              </div>
            </div>
            <br />
            <div
              className="font-heading text-lg text-center font-bold"
              id="scholarship"
            >
              SCHOLARSHIP DETAILS
            </div>{" "}
            <br />
            <p>
              Deserving students can avail several scholarships awarded by the
              Government of Karnataka. Here is a list of the scholarships and
              the corresponding applications that can be obtained from the
              Admission and Scholarship section during the month of September
              every year.
            </p>
            <ul className="list-disc ml-7 mb-2">
              <li>Post Metric Scholarship to SC/STs</li>
              <li>Fee-reimbursements to SC/STs</li>
              <li>Fee- concession to Category-l, II, and III</li>
              <li>
                Extra boarding and lodging allowance to Category-I, II, & III
              </li>
              <li>Defense Scholarship</li>
              <li>RIT Alumni Scholarship</li>
            </ul>
            <div className="flex flex-row gap-3 mb-2">
              <a
                className="text-white max-w-[33%] p-2 font-bold rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah"
                href=""
              >
                1ST YEAR BE / B.ARCH STUDENTS 2020-2021 (CET-REGULAR)
              </a>
              <a
                className="text-white max-w-[33%] font-bold p-2 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah"
                href=""
              >
                1ST YEAR B.E. / B. ARCH STUDENTS 2020-2021 (CET-SNQ)
              </a>
            </div>{" "}
            <br />
            {/* CONTACT DETAILS CARD*/}
            <div
              className="font-heading text-lg text-center font-bold"
              id="contact"
            >
              CONTACT DETAILS
            </div>{" "}
            <div className="w-[97%] text-white font-bold rounded-[0.25rem] bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah p-4 mx-auto">
              <div>
                <span className="text-xl">Admissions Section</span> <br />{" "}
                <br /> Ramaiah Institute of Technology <br /> MSR Nagar, MSRIT
                Post, Bangalore 560 054{" "}
              </div>
              <div className="text-right">
                Tel - 080 2360 7902 <br />
                Fax - 080 2360 3124 <br />
                Email - admn[at]msrit[dot]edu
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

export default Admissions;
