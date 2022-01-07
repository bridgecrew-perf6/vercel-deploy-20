import SideBarSyllabus from "./SideBarSyllabus";

export default function ActivitiesContent({
  ivData,
  sswData,
  seoData,
  syllabus,
  timetable,
  studymaterial,
}) {
  //   const [facultyData, setfacultyData] = useState(data[0].fa);
  //   const [mission, setMission] = useState(data[0].mission);
  //   const [profile, setProfile] = useState(data[0].profile);

  //console.log(syllabus);

  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md  bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
          <div className="lg:w-full lg:flex lg:flex-col text-center">
            <a
              href="./"
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
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
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
              className="sm:hover:font-bold lg:text-white lg:p-2 lg:m-2 lg:bg-gradient-to-r lg:from-pink-ramaiah lg:to-orange-ramaiah"
            >
              Activities
            </a>
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-black border-gray-100 border-2 bg-white">
          <h2 className="text-2xl font-heading text-blue-ramaiah">
            Industry Visits
          </h2>
          <br />
          <div className="grid">
            {ivData.map((iv, i) => {
              return (
                <div
                  key={iv.id}
                  className="col-span-1 w-full bg-gray-deptHeader shadow-md flex p-4 border-b-[1px] border-pink-ramaiah"
                >
                  <div className="text-black text-lg flex-grow">
                    {iv.industry_visited}
                  </div>
                  <div className="text-right text-black place-self-end flex-shrink text-lg">
                    {iv.date?.substring(0, 10)}
                  </div>
                </div>
              );
            })}
          </div>{" "}
          <br />
          <h2 className="text-2xl font-heading text-blue-ramaiah">
            Seminars/Worskshops
          </h2>
          <br />
          <div className="grid">
            {sswData.map((ssw, i) => {
              return (
                <div
                  key={ssw.id}
                  className="col-span-full bg-gray-deptHeader shadow-md flex p-2 border-b-[1px] border-pink-ramaiah"
                >
                  <div className="lg:min-w-[15%] lg:max-w-[15%]">
                    {ssw.duration_from}
                  </div>
                  <div className="lg:min-w-[15%] lg:max-w-[15%]">
                    {ssw.duration_till}
                  </div>
                  <div className="lg:min-w-[38%] lg:max-w-[38%] flex-grow">
                    {ssw.title}
                  </div>
                  <div className="lg:min-w-[15%] lg:max-w-[15%] text-center">
                    {ssw.type}
                  </div>
                  <div className="lg:min-w-[17%] lg:max-w-[17%] text-right">
                    {ssw.broad_area}
                  </div>
                </div>
              );
            })}
          </div>
          <br />
          <h2 className="text-2xl font-heading text-blue-ramaiah">
            Invited Talks / Guest Lectures
          </h2>
          <br />
          <div className="grid">
            {seoData.map((seo, i) => {
              return (
                <div
                  key={seo.id}
                  className="col-span-full bg-gray-deptHeader shadow-md flex p-2 border-b-[1px] border-pink-ramaiah"
                >
                  <div className="lg:min-w-[15%] lg:max-w-[15%]">
                    {seo.date}
                  </div>
                  <div className="lg:min-w-[20%] lg:max-w-[20%]">
                    {seo.name_of_the_scholar}
                  </div>
                  <div className="lg:min-w-[30%] lg:max-w-[30%] text-center">
                    {seo.scholars_organization}
                  </div>
                  <div className="lg:min-w-[35%] lg:max-w-[35%] text-right">
                    {seo.title_of_the_lecture}
                  </div>
                </div>
              );
            })}
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
