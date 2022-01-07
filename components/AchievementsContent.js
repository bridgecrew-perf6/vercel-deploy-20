import SideBarSyllabus from "./SideBarSyllabus";

export default function AchievementsContent({
  st_achieve,
  fa_achieve,
  pat,
  syllabus,
  timetable,
  studymaterial,
}) {
  //   const [facultyData, setfacultyData] = useState(data[0].fa);
  //   const [mission, setMission] = useState(data[0].mission);
  //   const [profile, setProfile] = useState(data[0].profile);

  //console.log(st_achieve);

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
              className="sm:hover:font-bold lg:text-white lg:p-2 lg:m-2 lg:bg-gradient-to-r lg:from-pink-ramaiah lg:to-orange-ramaiah"
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
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <h2 className="text-2xl font-heading">Students' Achievements</h2>
          <br />
          <div className="grid lg:grid-cols-3 gap-2">
            {st_achieve.map((stAchieve, i) => {
              return (
                <div
                  key={stAchieve.id}
                  className="col-span-1 w-full bg-gray-deptHeader shadow-md text-center"
                >
                  <div className="text-pink-ramaiah font-heading text-lg capitalize">
                    {stAchieve.title}
                  </div>
                  <div className="">
                    {stAchieve.date} / {stAchieve.place}
                  </div>
                  <div className="text-left p-2 text-gray-700">
                    {stAchieve.description}
                  </div>
                </div>
              );
            })}
          </div>{" "}
          <br />
          <h2 className="text-2xl font-heading">Faculty's Achievements</h2>
          <br />
          <div className="grid lg:grid-cols-3 gap-2">
            {fa_achieve.map((faAchieve, i) => {
              return (
                <div
                  key={faAchieve.id}
                  className="col-span-1 w-full bg-gray-deptHeader shadow-md text-center"
                >
                  <div className="text-pink-ramaiah font-heading text-lg">
                    {faAchieve.name}
                  </div>
                  <div className="">{faAchieve.duration}</div>
                  <div className="text-left p-2 text-gray-700">
                    {faAchieve.achievements}
                  </div>
                </div>
              );
            })}
            <br />
          </div>
          <h2 className="text-2xl font-heading">Patents</h2>
          <br />
          <div className="grid lg:grid-cols-3 gap-2">
            {pat.map((patent, i) => {
              return (
                <div
                  key={patent.id}
                  className="col-span-1 w-full bg-gray-deptHeader shadow-md text-center"
                >
                  <div className="text-pink-ramaiah font-heading text-lg">
                    {patent.owner_name}
                  </div>
                  <div className="">{patent.patent_number}</div>
                  <div className="text-left p-2 text-gray-700">
                    {patent.title}
                  </div>
                  <div className="">{patent.applied_year}</div>
                  <div className="">{patent.status_filed_granted}</div>
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
