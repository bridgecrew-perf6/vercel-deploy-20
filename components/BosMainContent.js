import SideBarSyllabus from "./SideBarSyllabus";

export default function BosMainContent({
  data,
  boe,
  syllabus,
  timetable,
  studymaterial,
}) {
  //   const [facultyData, setfacultyData] = useState(data[0].fa);
  //   const [mission, setMission] = useState(data[0].mission);
  //   const [profile, setProfile] = useState(data[0].profile);

  //console.log(data);

  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <div className="col-span-full h-8 bg-opacity-30 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
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
              className="sm:hover:font-bold lg:text-white lg:p-2 lg:m-2 lg:bg-gradient-to-r lg:from-pink-ramaiah lg:to-orange-ramaiah"
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
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-black border-gray-100 border-2 bg-white">
          <h2 className="text-2xl font-heading text-blue-ramaiah">
            BOS Members
          </h2>
          <br />
          <div className="w-full border-gray-400 flex bg-blue-ramaiah space-x-2 shadow-md p-4 place-items-start border-b-[1px] text-white">
            <div className="flex-grow-0 min-w-[15%] max-w-[15%] border-r-[1px] border-gray-deptHeader">
              Name
            </div>
            <div className="flex-grow-1 min-w-[75%] max-w-[75%] border-r-[1px] border-gray-deptHeader">
              Designation
            </div>
            <div className="flex-grow-0 min-w-[15%] max-w-[15%] border-r-[1px] border-gray-deptHeader">
              UG/PG
            </div>
          </div>
          {data.map((bos, i) => {
            return (
              <div
                key={bos.id}
                className="w-full border-gray-400 flex bg-gray-deptHeader space-x-2 shadow-md p-4 place-items-start border-[1px]"
              >
                <div className="flex-grow-0 min-w-[15%] max-w-[15%]">
                  {bos.name}
                </div>
                <div className="flex-grow-1 min-w-[75%] max-w-[75%]">
                  {bos.designation}
                </div>
                <div className="flex-grow-0 min-w-[12%] max-w-[12%] truncate">
                  {bos.ug_PG}
                </div>
              </div>
            );
          })}

          <br />

          <h2 className="text-2xl font-heading text-blue-ramaiah">
            BOE Members
          </h2>
          <br />
          <div className="w-full border-gray-400 flex bg-blue-ramaiah space-x-2 shadow-md p-4 place-items-start border-b-[1px] text-white">
            <div className="flex-grow-0 min-w-[15%] max-w-[15%] border-r-[1px] border-gray-deptHeader">
              Name
            </div>
            <div className="flex-grow-1 min-w-[75%] max-w-[75%] border-r-[1px] border-gray-deptHeader">
              Designation
            </div>
            <div className="flex-grow-0 min-w-[15%] max-w-[15%] border-r-[1px] border-gray-deptHeader">
              UG/PG
            </div>
          </div>
          {boe.map((item, i) => {
            return (
              <div
                key={item.id}
                className="w-full border-gray-400 flex bg-gray-deptHeader space-x-2 shadow-md p-4 place-items-start border-[1px]"
              >
                <div className="flex-grow-1 min-w-[15%] max-w-[15%]">
                  <p className="overflow-ellipsis">{item.name}</p>
                </div>
                <div className="flex-grow-1 min-w-[75%] max-w-[75%]">
                  {item.designation}
                </div>
                <div className="flex-grow-0 min-w-[15%] max-w-[15%] content-end">
                  {item.ug_PG}
                </div>
              </div>
            );
          })}
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
