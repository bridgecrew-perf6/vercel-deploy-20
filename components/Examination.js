function Examination() {
  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <div className="col-span-full lg:sticky lg:top-10 place-self-start lg:rounded-lg lg:border-[1px] lg:border-blue-ramaiah  bg-opacity-30 text-blue-ramaiah space-x-3  lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:w-full ">
          <div className="lg:w-full lg:flex lg:flex-col text-center h-auto">
            <a
              href="#overview"
              className="lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah active:bg-opacity-100 bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Overview
            </a>
            <a
              href="#process"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              The Process
            </a>
            <a
              href="#circulars"
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Circulars & Results
            </a>
            <a
              href="#malpractice"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Malpractice
            </a>
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <div id="overview">
            <p className="text-justify">
              Ramaiah Institute of Technology is an autonomous institute,
              affiliated to Visvesvaraya Technological University, Belgaum. The
              institute formulates academic curriculum as per the needs of the
              industry and new developments in the various fields. The
              examination for the autonomous courses is conducted by the
              Institute.
            </p>{" "}
            <br />
            <p className="text-justify">
              The evaluation process is carried out in two stages. Continuous
              Internal Evaluation [CIE] during the progress of the semester and
              Semester End Examination [SEE] conducted at the end of the
              semester. The examination section conducts the Semester End
              Examination and the evaluation process in coordination with the
              departments. The entire examination process is based on a
              completely automated system. After the successful completion of a
              course, the institute recommends the student to Visvesvaraya
              Technological University, Belgaum, to award the degree in the
              respective branch. Controller of Examination and his team at
              examination section carry out the complete examination process in
              coordination with all departments.
            </p>{" "}
            <br />
            <span className="font-bold text-xl">
              {" "}
              CONTROLLER OF EXAMINATION
            </span>
            <br />
            <p className="text-justify">
              Dr G S Prakash is the Professor & Head of the Department of
              Industrial Engineering and Management, Controller of Examinations
              of the Institute and Warden for Engineering Boys Hostel. He has
              about 29 years of teaching and 12 years of research experience.
              His academic and research interest include Quality Assurance and
              Reliability, Operations Research and Operations Management. He has
              to his credit several national and international journal
              publications. He has served on several expert panels of
              Visvesvaraya Technological University, Belgaum, M S Ramaiah
              institute of Technology, Bangalore and other premier institutions.
              He has delivered lecture at various conferences / workshops and
              also at prestigious edusat program of VTU. Currently, he is
              guiding five research scholars. To his credit to bestowed with the
              prestigious fellow of the Institution of Engineers (India) &
              fellow of Indian Institution of Industrial Engineering. He is
              actively involved in the activities of Indian Institution of
              Industrial Engineering as the Council Member for Bengaluru
              chapter.
            </p>
            <br />
            <span className="font-bold text-xl">SECTION STAFF</span>
            <br />
            <strong>Dr. G. S. Prakash</strong> , Controller of Examinations{" "}
            <br />
            <strong>Prof. P. G. Kumaravelu</strong> , Deputy Controller of
            Examinations <br />
            <strong>V S Sharvani</strong>, Assistant Registrar <br /> <br />
            <span className="font-bold text-lg">Staff</span> <br />
            Basavaraj Patil, Instructor <br />
            M S Chandra, FDA <br />
            K Prema Kumari, SDA <br />
            R Narasimhaiah, SDA <br />
            Shankargouda A S, SDA <br />
            Sunil V, SDA <br /> <br />
            <span className="font-bold text-lg">Supporting Staff </span>
            <br />
            G Rajendra <br />
            Y Doddaiah <br />T Ramesh{" "}
          </div>{" "}
          <br />
          <div className="font-heading text-lg text-center" id="process">
            {" "}
            THE PROCESS
          </div>{" "}
          <br />
          <div className="w-full">
            <div className="flex flex-row flex-wrap gap-3 w-full mx-auto justify-between">
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://s3-us-west-2.amazonaws.com/msrit-bucket/Examinations/Examination-System.pptx"
              >
                EXAMINATION SYSTEM
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://d2e9h3gjmozu47.cloudfront.net/Examinations/contineo.pdf"
              >
                CONTINEO
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3.us-west-2.amazonaws.com/Uploads/Question+paper+Template+2022.docx"
              >
                INSTRUCTIONS & SCHEME FOR PAPER SETTER
              </a>
            </div>
          </div>
          <br /> <br />
          {/* CONTACT DETAILS CARD*/}
          <div
            className="font-heading text-lg text-center font-bold"
            id="circulars"
          >
            CIRCULARS & RESULTS
          </div>{" "}
          <br />
          <div className="w-full">
            <div className="flex flex-row flex-wrap gap-3 w-full items-center">
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Examinations/TIMETABLE+FINAL+YEAR-2020.pdf"
              >
                REVISED UG/PG FINAL SEMESTER ONLINE EXAM TIME TABLE - AUGUST
                2020
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Examinations/ONLINE+EXAMINATION+INSTRUCTIONS+FOR+STUDENTS.PDF"
              >
                ONLINE EXAMINATION INSTRUCTIONS FOR STUDENTS - AUGUST 2020
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Examinations/ON-LINE+MOCK+TEST+VIII+SEM+BE.pdf"
              >
                ONLINE MOCK TEST TIME TABLE - AUGUST 2020
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Examinations/Supple+Classes.PDF"
              >
                INFORMATION ON SUPPLEMENTARY CLASSES 2020
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="http://exam.msrit.edu/"
              >
                RESULTS
              </a>
            </div>
          </div>{" "}
          <br /> <br />
          <div
            className="font-heading text-lg text-center font-bold"
            id="malpractice"
          >
            MALPRACTICE
          </div>{" "}
          <br />
          <div className="w-full">
            <div className="flex flex-row flex-wrap gap-3 w-full mx-auto justify-evenly">
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://d2e9h3gjmozu47.cloudfront.net/Examinations/MALPRACTICE+MANUAL.pdf"
              >
                MALPRACTICE MANUAL
              </a>
            </div>
          </div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default Examination;
