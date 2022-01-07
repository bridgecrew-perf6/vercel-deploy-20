import SideBarSyllabus from "./SideBarSyllabus";
import { useRouter } from "next/router";

export default function FacultyDetails({
  data,
  syllabus,
  timetable,
  studymaterial,
  deptName,
}) {
  //   const [facultyData, setfacultyData] = useState(data ? data[0]?.fa);
  //   const [mission, setMission] = useState(data ? data[0]?.mission);
  //   const [data ? data[0]?, setdata ? data[0]?] = useState(data ? data[0]?.data ? data[0]?);

  //console.log(data);
  const router = useRouter();

  return data ? (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <div className="col-span-full h-8 border-[1px] place-self-start lg:sticky lg:top-10 border-blue-ramaiah rounded-md  bg-opacity-30 text-blue-ramaiah space-x-3 mx-auto lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:h-auto lg:w-full">
          <div className="lg:w-full lg:flex lg:flex-col text-center">
            <a
              onClick={() => router.back()}
              className="lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah active:bg-opacity-100 bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2 hover:cursor-pointer"
            >
              Go back to Previous Page
            </a>
            <a
              href="../faculty"
              className="sm:hover:font-bold lg:text-white lg:p-2 lg:m-2 lg:bg-gradient-to-r lg:from-pink-ramaiah lg:to-orange-ramaiah"
            >
              Faculty
            </a>
            <a
              href="../research"
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Research
            </a>
            <a
              href="../bos"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              BOS|BOE
            </a>
            <a
              href="../achievements"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Achievements
            </a>
            <a
              href="../activities"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Activities
            </a>
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-black border-gray-100 border-2 bg-white">
          <h2 className="text-2xl font-heading text-blue-ramaiah text-center">
            Details of{" "}
            <span className="capitalize">
              {data ? data[0]?.faculty_Full_Name : null}
            </span>
            <br />
          </h2>
          <br />

          <div className="rounded-sm border-gray-400 bg-gray-deptHeader mb-6 shadow-md p-4">
            <div
              key={data ? data[0]?.id : null}
              className={"flex mb-6 items-start w-full" /* items-center*/}
            >
              <div className="mr-2 flex-grow w-[20%]">
                <img
                  className="border-white border-[1.5px] drop-shadow-2xl object-contain rounded-full w-full"
                  src={data ? data[0]?.profile_Pic_URL : null}
                />
              </div>

              <div className="flex-shrink w-[80%] bg-white rounded-md shadow-md p-2">
                <h2 className="font-heading text-pink-ramaiah pb-2 text-3xl self-start">
                  {data ? data[0]?.faculty_Full_Name : null}
                </h2>
                <hr className="border-gray-400 text-justify " />
                <div className="flex flex-row flex-wrap gap-4 justify-between">
                  <p className="leading-relaxed italic font-bold">
                    Email:{" "}
                    <span className="font-normal">
                      {data ? data[0]?.email_Address : null}
                    </span>
                  </p>
                  <p className="leading-relaxed italic font-bold">
                    Phone:{" "}
                    <span className="font-normal">
                      {data
                        ? data[0]?.phone_Number === "none"
                          ? "Not Provided"
                          : data[0].phone_Number
                        : null}
                    </span>
                  </p>
                </div>
                <hr className="border-gray-400 " />
                <p className="leading-relaxed text-justify italic mt-2">
                  {data ? data[0]?.short_Bio : null}
                </p>
              </div>
            </div>
            <div>
              <div className="font-heading text-2xl text-blue-ramaiah">
                Education Details
              </div>
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data
                ? data[0]?.do_you_have_educational_details_to_write ===
                    "Yes" && (
                    <div class="flex flex-col">
                      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                          <div class="overflow-x-auto rounded-md shadow-lg">
                            <table class="min-w-full">
                              <thead class="border-b bg-gradient-to-r from-orange-ramaiah to-pink-ramaiah text-white">
                                <tr>
                                  <th
                                    scope="col"
                                    class="text-sm font-medium  px-6 py-4 text-left"
                                  >
                                    Degree
                                  </th>
                                  <th
                                    scope="col"
                                    class="text-sm font-medium  px-6 py-4 text-left"
                                  >
                                    Year
                                  </th>
                                  <th
                                    scope="col"
                                    class="text-sm font-medium  px-6 py-4 text-left"
                                  >
                                    University
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {!(
                                  data[0]?.degree_1 == "None" ||
                                  data[0]?.degree_1 == "No" ||
                                  data[0]?.degree_1 == "NA" ||
                                  data[0]?.degree_1 == "na" ||
                                  data[0]?.degree_1 == "none"
                                ) && (
                                  <tr class="border-b bg-white">
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {data[0]?.degree_1}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {data[0]?.year_of_Completion_of_Degree_1}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {
                                        data[0]
                                          ?.university_from_which_Degree_1_was_obtained
                                      }
                                    </td>
                                  </tr>
                                )}
                                {!(
                                  data[0]?.degree_2 == "None" ||
                                  data[0]?.degree_2 == "No" ||
                                  data[0]?.degree_2 == "NA" ||
                                  data[0]?.degree_2 == "na" ||
                                  data[0]?.degree_2 == "none"
                                ) && (
                                  <tr class="bg-white border-b">
                                    <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                      {data[0]?.degree_2}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {data[0]?.year_of_Completion_of_Degree_2}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {
                                        data[0]
                                          ?.university_from_which_Degree_2_was_obtained
                                      }
                                    </td>
                                  </tr>
                                )}
                                {!(
                                  data[0]?.degree_3 == "None" ||
                                  data[0]?.degree_3 == "No" ||
                                  data[0]?.degree_3 == "NA" ||
                                  data[0]?.degree_3 == "na" ||
                                  data[0]?.degree_3 == "none"
                                ) && (
                                  <tr class="bg-white border-b">
                                    <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                      {data[0]?.degree_3}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {data[0]?.year_of_Completion_of_Degree_3}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {
                                        data[0]
                                          ?.university_from_which_Degree_3_was_obtained
                                      }
                                    </td>
                                  </tr>
                                )}
                                {!(
                                  data[0]?.degree_4 == "None" ||
                                  data[0]?.degree_4 == "No" ||
                                  data[0]?.degree_4 == "NA" ||
                                  data[0]?.degree_4 == "na" ||
                                  data[0]?.degree_4 == "none"
                                ) && (
                                  <tr class="bg-white border-b">
                                    <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                      {data[0]?.degree_4}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {data[0]?.year_of_Completion_of_Degree_4}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {
                                        data[0]
                                          ?.university_from_which_Degree_4_was_obtained
                                      }
                                    </td>
                                  </tr>
                                )}
                                {!(
                                  data[0]?.degree_5 == "None" ||
                                  data[0]?.degree_5 == "No" ||
                                  data[0]?.degree_5 == "NA" ||
                                  data[0]?.degree_5 == "na" ||
                                  data[0]?.degree_5 == "none"
                                ) && (
                                  <tr class="bg-white border-b">
                                    <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                      {data[0]?.degree_5}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {data[0]?.year_of_Completion_of_Degree_5}
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                      {
                                        data[0]
                                          ?.university_from_which_Degree_5_was_obtained
                                      }
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                : null}
            </div>
            <div className="mb-2">
              {" "}
              <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                Areas of Interest
              </div>
              {/* <hr className="border-gray-400 text-justify " />{" "} */}
              <div className="flex flex-row flex-wrap justify-evenly bg-white shadow-lg rounded-md p-2 space-x-1">
                {!(
                  data[0]?.areas_of_Interest_1 == "None" ||
                  data[0]?.areas_of_Interest_1 == "No" ||
                  data[0]?.areas_of_Interest_1 == "NA" ||
                  data[0]?.areas_of_Interest_1 == "na" ||
                  data[0]?.areas_of_Interest_1 == "none"
                ) && (
                  <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.areas_of_Interest_1 : null}
                  </div>
                )}
                {!(
                  data[0]?.areas_of_Interest_2 == "None" ||
                  data[0]?.areas_of_Interest_2 == "No" ||
                  data[0]?.areas_of_Interest_2 == "NA" ||
                  data[0]?.areas_of_Interest_2 == "na" ||
                  data[0]?.areas_of_Interest_2 == "none"
                ) && (
                  <div className="mb-2  border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.areas_of_Interest_2 : null}
                  </div>
                )}
                {!(
                  data[0]?.areas_of_Interest_3 == "None" ||
                  data[0]?.areas_of_Interest_3 == "No" ||
                  data[0]?.areas_of_Interest_3 == "NA" ||
                  data[0]?.areas_of_Interest_3 == "na" ||
                  data[0]?.areas_of_Interest_3 == "none"
                ) && (
                  <div className="mb-2  border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.areas_of_Interest_3 : null}
                  </div>
                )}
                {!(
                  data[0]?.areas_of_Interest_4 == "None" ||
                  data[0]?.areas_of_Interest_4 == "No" ||
                  data[0]?.areas_of_Interest_4 == "NA" ||
                  data[0]?.areas_of_Interest_4 == "na" ||
                  data[0]?.areas_of_Interest_4 == "none"
                ) && (
                  <div className="mb-2  border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.areas_of_Interest_4 : null}
                  </div>
                )}
                {!(
                  data[0]?.areas_of_Interest_5 == "None" ||
                  data[0]?.areas_of_Interest_5 == "No" ||
                  data[0]?.areas_of_Interest_5 == "NA" ||
                  data[0]?.areas_of_Interest_5 == "na" ||
                  data[0]?.areas_of_Interest_5 == "none"
                ) && (
                  <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.areas_of_Interest_5 : null}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-2">
              {" "}
              <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                Subjects Taught:
              </div>
              {/* <hr className="border-gray-400 text-justify " />{" "} */}
              <div className="flex flex-row flex-wrap justify-evenly bg-white rounded-md shadow-lg p-2 space-x-1">
                {!(
                  data[0]?.teaching_Subject_1 == "None" ||
                  data[0]?.teaching_Subject_1 == "No" ||
                  data[0]?.teaching_Subject_1 == "NA" ||
                  data[0]?.teaching_Subject_1 == "na" ||
                  data[0]?.teaching_Subject_1 == "none"
                ) && (
                  <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.teaching_Subject_1 : null}
                  </div>
                )}
                {!(
                  data[0]?.teaching_Subject_2 == "None" ||
                  data[0]?.teaching_Subject_2 == "No" ||
                  data[0]?.teaching_Subject_2 == "NA" ||
                  data[0]?.teaching_Subject_2 == "na" ||
                  data[0]?.teaching_Subject_2 == "none"
                ) && (
                  <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.teaching_Subject_2 : null}
                  </div>
                )}
                {!(
                  data[0]?.teaching_Subject_3 == "None" ||
                  data[0]?.teaching_Subject_3 == "No" ||
                  data[0]?.teaching_Subject_3 == "NA" ||
                  data[0]?.teaching_Subject_3 == "na" ||
                  data[0]?.teaching_Subject_3 == "none"
                ) && (
                  <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.teaching_Subject_3 : null}
                  </div>
                )}
                {!(
                  data[0]?.teaching_Subject_4 == "None" ||
                  data[0]?.teaching_Subject_4 == "No" ||
                  data[0]?.teaching_Subject_4 == "NA" ||
                  data[0]?.teaching_Subject_4 == "na" ||
                  data[0]?.teaching_Subject_4 == "none"
                ) && (
                  <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.teaching_Subject_4 : null}
                  </div>
                )}
                {!(
                  data[0]?.teaching_Subject_5 == "None" ||
                  data[0]?.teaching_Subject_5 == "No" ||
                  data[0]?.teaching_Subject_5 == "NA" ||
                  data[0]?.teaching_Subject_5 == "na" ||
                  data[0]?.teaching_Subject_5 == "none"
                ) && (
                  <div className="mb-2 border-[1px] border-blue-ramaiah rounded-md bg-gray-100 shadow-md p-2">
                    {data ? data[0]?.teaching_Subject_5 : null}
                  </div>
                )}
              </div>
            </div>
            <div className="mb-2">
              {" "}
              <div className="font-heading text-2xl text-blue-ramaiah">
                Professional Service
              </div>
              {/* <hr className="border-gray-400 text-justify " /> */}
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-x-auto rounded-md shadow-lg">
                      <table class="min-w-full">
                        <thead class="border-b bg-gradient-to-r from-orange-ramaiah to-pink-ramaiah text-white">
                          <tr>
                            <th
                              scope="col"
                              class="text-sm font-medium  px-6 py-4 text-left"
                            >
                              Designation
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium  px-6 py-4 text-left"
                            >
                              Place of Work
                            </th>
                            <th
                              scope="col"
                              class="text-sm font-medium  px-6 py-4 text-left"
                            >
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {!(
                            data[0]?.designation_1 == "None" ||
                            data[0]?.designation_1 == "No" ||
                            data[0]?.designation_1 == "NA" ||
                            data[0]?.designation_1 == "na" ||
                            data[0]?.designation_1 == "none"
                          ) && (
                            <tr class="border-b bg-white">
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data ? data[0]?.designation_1 : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.place_of_Work_of_Designation_1
                                  : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.duration_of_Designation_1
                                  : null}
                              </td>
                            </tr>
                          )}
                          {!(
                            data[0]?.designation_2 == "None" ||
                            data[0]?.designation_2 == "No" ||
                            data[0]?.designation_2 == "NA" ||
                            data[0]?.designation_2 == "na" ||
                            data[0]?.designation_2 == "none"
                          ) && (
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                {data ? data[0]?.designation_2 : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.place_of_Work_of_Designation_2
                                  : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.duration_of_Designation_2
                                  : null}
                              </td>
                            </tr>
                          )}
                          {!(
                            data[0]?.designation_3 == "None" ||
                            data[0]?.designation_3 == "No" ||
                            data[0]?.designation_3 == "NA" ||
                            data[0]?.designation_3 == "na" ||
                            data[0]?.designation_3 == "none"
                          ) && (
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                {data ? data[0]?.designation_3 : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.place_of_Work_of_Designation_3
                                  : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.duration_of_Designation_3
                                  : null}
                              </td>
                            </tr>
                          )}
                          {!(
                            data[0]?.designation_4 == "None" ||
                            data[0]?.designation_4 == "No" ||
                            data[0]?.designation_4 == "NA" ||
                            data[0]?.designation_4 == "na" ||
                            data[0]?.designation_4 == "none"
                          ) && (
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                {data ? data[0]?.designation_4 : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.place_of_Work_of_Designation_4
                                  : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.duration_of_Designation_4
                                  : null}
                              </td>
                            </tr>
                          )}
                          {!(
                            data[0]?.designation_5 == "None" ||
                            data[0]?.designation_5 == "No" ||
                            data[0]?.designation_5 == "NA" ||
                            data[0]?.designation_5 == "na" ||
                            data[0]?.designation_5 == "none"
                          ) && (
                            <tr class="bg-white border-b">
                              <td class="px-6 py-4  text-sm font-medium text-gray-900">
                                {data ? data[0]?.designation_5 : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.place_of_Work_of_Designation_5
                                  : null}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                {data
                                  ? data[0]?.duration_of_Designation_5
                                  : null}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* <div className="font-heading text-2xl text-blue-ramaiah">
                Funded Projects
              </div> */}
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data
                ? data[0]?.do_you_have_any_funded_projects === "Yes" && (
                    <>
                      <div className="font-heading text-2xl text-blue-ramaiah">
                        Funded Projects
                      </div>
                      <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-x-auto rounded-md shadow-lg">
                              <table class="min-w-full">
                                <thead class="border-b bg-gradient-to-r from-orange-ramaiah to-pink-ramaiah text-white">
                                  <tr>
                                    <th
                                      scope="col"
                                      class="text-sm font-medium  px-6 py-4 text-left"
                                    >
                                      Project Title
                                    </th>
                                    <th
                                      scope="col"
                                      class="text-sm font-medium  px-6 py-4 text-left"
                                    >
                                      Duration
                                    </th>
                                    <th
                                      scope="col"
                                      class="text-sm font-medium  px-6 py-4 text-left"
                                    >
                                      Funding Agency
                                    </th>
                                    <th
                                      scope="col"
                                      class="text-sm font-medium  px-6 py-4 text-left"
                                    >
                                      Funding Amount
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {!(
                                    data[0]?.title_of_the_Project_1 == "None" ||
                                    data[0]?.title_of_the_Project_1 == "No" ||
                                    data[0]?.title_of_the_Project_1 == "NA" ||
                                    data[0]?.title_of_the_Project_1 == "na" ||
                                    data[0]?.title_of_the_Project_1 == "none"
                                  ) && (
                                    <tr class="border-b bg-white">
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.title_of_the_Project_1
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.duration_of_Project_1
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Agency_for_Project_1
                                          : null}
                                      </td>{" "}
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Amount_for_Project_1
                                          : null}
                                      </td>
                                    </tr>
                                  )}
                                  {!(
                                    data[0]?.title_of_the_Project_2 == "None" ||
                                    data[0]?.title_of_the_Project_2 == "No" ||
                                    data[0]?.title_of_the_Project_2 == "NA" ||
                                    data[0]?.title_of_the_Project_2 == "na" ||
                                    data[0]?.title_of_the_Project_2 == "none"
                                  ) && (
                                    <tr class="bg-white border-b">
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.title_of_the_Project_2
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.duration_of_Project_2
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Agency_for_Project_2
                                          : null}
                                      </td>{" "}
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Amount_for_Project_2
                                          : null}
                                      </td>
                                    </tr>
                                  )}
                                  {!(
                                    data[0]?.title_of_the_Project_3 == "None" ||
                                    data[0]?.title_of_the_Project_3 == "No" ||
                                    data[0]?.title_of_the_Project_3 == "NA" ||
                                    data[0]?.title_of_the_Project_3 == "na" ||
                                    data[0]?.title_of_the_Project_3 == "none"
                                  ) && (
                                    <tr class="bg-white border-b">
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.title_of_the_Project_3
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.duration_of_Project_3
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Agency_for_Project_3
                                          : null}
                                      </td>{" "}
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Amount_for_Project_3
                                          : null}
                                      </td>
                                    </tr>
                                  )}
                                  {!(
                                    data[0]?.title_of_the_Project_4 == "None" ||
                                    data[0]?.title_of_the_Project_4 == "No" ||
                                    data[0]?.title_of_the_Project_4 == "NA" ||
                                    data[0]?.title_of_the_Project_4 == "na" ||
                                    data[0]?.title_of_the_Project_4 == "none"
                                  ) && (
                                    <tr class="bg-white border-b">
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.title_of_the_Project_4
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.duration_of_Project_4
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Agency_for_Project_4
                                          : null}
                                      </td>{" "}
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Amount_for_Project_4
                                          : null}
                                      </td>
                                    </tr>
                                  )}
                                  {!(
                                    data[0]?.title_of_the_Project_5 == "None" ||
                                    data[0]?.title_of_the_Project_5 == "No" ||
                                    data[0]?.title_of_the_Project_5 == "NA" ||
                                    data[0]?.title_of_the_Project_5 == "na" ||
                                    data[0]?.title_of_the_Project_5 == "none"
                                  ) && (
                                    <tr class="bg-white border-b">
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.title_of_the_Project_5
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]?.duration_of_Project_5
                                          : null}
                                      </td>
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Agency_for_Project_5
                                          : null}
                                      </td>{" "}
                                      <td class="text-sm text-gray-900 font-light px-6 py-4 ">
                                        {data
                                          ? data[0]
                                              ?.funding_Amount_for_Project_5
                                          : null}
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                : null}
            </div>
            <div>
              {" "}
              {/* <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                Honours & Achievements
              </div> */}
              {/* <hr className="border-blue-ramaiah text-justify " /> */}
              {data
                ? data[0]?.do_you_have_honors_awards_and_achievements ===
                    "Yes" && (
                    <>
                      <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                        Honours & Achievements
                      </div>
                      <div className="bg-white shadow-lg rounded-md">
                        {" "}
                        <ul className="list-decimal ml-7">
                          {!(
                            data[0]?.ha1 == "None" ||
                            data[0]?.ha1 == "No" ||
                            data[0]?.ha1 == "NA" ||
                            data[0]?.ha1 == "na" ||
                            data[0]?.ha1 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha1 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha2 == "None" ||
                            data[0]?.ha2 == "No" ||
                            data[0]?.ha2 == "NA" ||
                            data[0]?.ha2 == "na" ||
                            data[0]?.ha2 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha2 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha3 == "None" ||
                            data[0]?.ha3 == "No" ||
                            data[0]?.ha3 == "NA" ||
                            data[0]?.ha3 == "na" ||
                            data[0]?.ha3 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha3 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha4 == "None" ||
                            data[0]?.ha4 == "No" ||
                            data[0]?.ha4 == "NA" ||
                            data[0]?.ha4 == "na" ||
                            data[0]?.ha4 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha4 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha5 == "None" ||
                            data[0]?.ha5 == "No" ||
                            data[0]?.ha5 == "NA" ||
                            data[0]?.ha5 == "na" ||
                            data[0]?.ha5 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha5 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha6 == "None" ||
                            data[0]?.ha6 == "No" ||
                            data[0]?.ha6 == "NA" ||
                            data[0]?.ha6 == "na" ||
                            data[0]?.ha6 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha6 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha7 == "None" ||
                            data[0]?.ha7 == "No" ||
                            data[0]?.ha7 == "NA" ||
                            data[0]?.ha7 == "na" ||
                            data[0]?.ha7 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha7 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha8 == "None" ||
                            data[0]?.ha8 == "No" ||
                            data[0]?.ha8 == "NA" ||
                            data[0]?.ha8 == "na" ||
                            data[0]?.ha8 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha8 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha9 == "None" ||
                            data[0]?.ha9 == "No" ||
                            data[0]?.ha9 == "NA" ||
                            data[0]?.ha9 == "na" ||
                            data[0]?.ha9 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha9 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ha10 == "None" ||
                            data[0]?.ha10 == "No" ||
                            data[0]?.ha10 == "NA" ||
                            data[0]?.ha10 == "na" ||
                            data[0]?.ha10 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ha10 : null}
                            </li>
                          )}
                        </ul>{" "}
                      </div>
                    </>
                  )
                : null}
            </div>
            <div>
              {" "}
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data
                ? data[0]?.do_you_have_research_publications === "Yes" && (
                    <>
                      {" "}
                      <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                        Research Publications
                      </div>
                      <div className="bg-white shadow-lg rounded-md">
                        <ul className="list-decimal ml-7">
                          {!(
                            data[0]?.rp1 == "None" ||
                            data[0]?.rp1 == "No" ||
                            data[0]?.rp1 == "NA" ||
                            data[0]?.rp1 == "na" ||
                            data[0]?.rp1 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp1 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp2 == "None" ||
                            data[0]?.rp2 == "No" ||
                            data[0]?.rp2 == "NA" ||
                            data[0]?.rp2 == "na" ||
                            data[0]?.rp2 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp2 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp3 == "None" ||
                            data[0]?.rp3 == "No" ||
                            data[0]?.rp3 == "NA" ||
                            data[0]?.rp3 == "na" ||
                            data[0]?.rp3 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp3 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp4 == "None" ||
                            data[0]?.rp4 == "No" ||
                            data[0]?.rp4 == "NA" ||
                            data[0]?.rp4 == "na" ||
                            data[0]?.rp4 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp4 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp5 == "None" ||
                            data[0]?.rp5 == "No" ||
                            data[0]?.rp5 == "NA" ||
                            data[0]?.rp5 == "na" ||
                            data[0]?.rp5 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp5 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp6 == "None" ||
                            data[0]?.rp6 == "No" ||
                            data[0]?.rp6 == "NA" ||
                            data[0]?.rp6 == "na" ||
                            data[0]?.rp6 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp6 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp7 == "None" ||
                            data[0]?.rp7 == "No" ||
                            data[0]?.rp7 == "NA" ||
                            data[0]?.rp7 == "na" ||
                            data[0]?.rp7 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp7 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp8 == "None" ||
                            data[0]?.rp8 == "No" ||
                            data[0]?.rp8 == "NA" ||
                            data[0]?.rp8 == "na" ||
                            data[0]?.rp8 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp8 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp9 == "None" ||
                            data[0]?.rp9 == "No" ||
                            data[0]?.rp9 == "NA" ||
                            data[0]?.rp9 == "na" ||
                            data[0]?.rp9 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp9 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.rp10 == "None" ||
                            data[0]?.rp10 == "No" ||
                            data[0]?.rp10 == "NA" ||
                            data[0]?.rp10 == "na" ||
                            data[0]?.rp10 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.rp10 : null}
                            </li>
                          )}
                        </ul>
                      </div>
                    </>
                  )
                : null}
            </div>
            <div className="mb-2">
              {" "}
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data
                ? data[0]
                    ?.have_you_attended_any_workshops_or_delivered_guest_lectures ===
                    "Yes" && (
                    <>
                      {" "}
                      <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                        Workshops/FDPs Attended | Guest Lectures Delivered
                      </div>
                      <div className="bg-white shadow-lg rounded-md">
                        <ul className="list-decimal ml-7">
                          {!(
                            data[0]?.wg1 == "None" ||
                            data[0]?.wg1 == "No" ||
                            data[0]?.wg1 == "NA" ||
                            data[0]?.wg1 == "na" ||
                            data[0]?.wg1 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg1 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg2 == "None" ||
                            data[0]?.wg2 == "No" ||
                            data[0]?.wg2 == "NA" ||
                            data[0]?.wg2 == "na" ||
                            data[0]?.wg2 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg2 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg3 == "None" ||
                            data[0]?.wg3 == "No" ||
                            data[0]?.wg3 == "NA" ||
                            data[0]?.wg3 == "na" ||
                            data[0]?.wg3 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg3 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg4 == "None" ||
                            data[0]?.wg4 == "No" ||
                            data[0]?.wg4 == "NA" ||
                            data[0]?.wg4 == "na" ||
                            data[0]?.wg4 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg4 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg5 == "None" ||
                            data[0]?.wg5 == "No" ||
                            data[0]?.wg5 == "NA" ||
                            data[0]?.wg5 == "na" ||
                            data[0]?.wg5 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg5 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg6 == "None" ||
                            data[0]?.wg6 == "No" ||
                            data[0]?.wg6 == "NA" ||
                            data[0]?.wg6 == "na" ||
                            data[0]?.wg6 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg6 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg7 == "None" ||
                            data[0]?.wg7 == "No" ||
                            data[0]?.wg7 == "NA" ||
                            data[0]?.wg7 == "na" ||
                            data[0]?.wg7 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg7 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg8 == "None" ||
                            data[0]?.wg8 == "No" ||
                            data[0]?.wg8 == "NA" ||
                            data[0]?.wg8 == "na" ||
                            data[0]?.wg8 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg8 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg9 == "None" ||
                            data[0]?.wg9 == "No" ||
                            data[0]?.wg9 == "NA" ||
                            data[0]?.wg9 == "na" ||
                            data[0]?.wg9 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg9 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.wg10 == "None" ||
                            data[0]?.wg10 == "No" ||
                            data[0]?.wg10 == "NA" ||
                            data[0]?.wg10 == "na" ||
                            data[0]?.wg10 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.wg10 : null}
                            </li>
                          )}
                        </ul>
                      </div>
                    </>
                  )
                : null}
            </div>
            <div className="mb-2">
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data
                ? data[0]
                    ?.do_you_have_any_membership_of_professional_societies ===
                    "Yes" && (
                    <>
                      {" "}
                      <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                        Membership of Professional Societies
                      </div>
                      <div className="bg-white shadow-lg rounded-md">
                        <ul className="list-decimal ml-7">
                          {!(
                            data[0]?.ps1 == "None" ||
                            data[0]?.ps1 == "No" ||
                            data[0]?.ps1 == "NA" ||
                            data[0]?.ps1 == "na" ||
                            data[0]?.ps1 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps1 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps2 == "None" ||
                            data[0]?.ps2 == "No" ||
                            data[0]?.ps2 == "NA" ||
                            data[0]?.ps2 == "na" ||
                            data[0]?.ps2 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps2 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps3 == "None" ||
                            data[0]?.ps3 == "No" ||
                            data[0]?.ps3 == "NA" ||
                            data[0]?.ps3 == "na" ||
                            data[0]?.ps3 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps3 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps4 == "None" ||
                            data[0]?.ps4 == "No" ||
                            data[0]?.ps4 == "NA" ||
                            data[0]?.ps4 == "na" ||
                            data[0]?.ps4 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps4 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps5 == "None" ||
                            data[0]?.ps5 == "No" ||
                            data[0]?.ps5 == "NA" ||
                            data[0]?.ps5 == "na" ||
                            data[0]?.ps5 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps5 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps6 == "None" ||
                            data[0]?.ps6 == "No" ||
                            data[0]?.ps6 == "NA" ||
                            data[0]?.ps6 == "na" ||
                            data[0]?.ps6 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps6 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps7 == "None" ||
                            data[0]?.ps7 == "No" ||
                            data[0]?.ps7 == "NA" ||
                            data[0]?.ps7 == "na" ||
                            data[0]?.ps7 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps7 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps8 == "None" ||
                            data[0]?.ps8 == "No" ||
                            data[0]?.ps8 == "NA" ||
                            data[0]?.ps8 == "na" ||
                            data[0]?.ps8 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps8 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps9 == "None" ||
                            data[0]?.ps9 == "No" ||
                            data[0]?.ps9 == "NA" ||
                            data[0]?.ps9 == "na" ||
                            data[0]?.ps9 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps9 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.ps10 == "None" ||
                            data[0]?.ps10 == "No" ||
                            data[0]?.ps10 == "NA" ||
                            data[0]?.ps10 == "na" ||
                            data[0]?.ps10 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.ps10 : null}
                            </li>
                          )}
                        </ul>
                      </div>
                    </>
                  )
                : null}
            </div>
            <div className="mb-2">
              {/* <hr className="border-gray-400 text-justify " /> */}
              {data
                ? data[0]?.do_you_have_books_and_patents === "Yes" && (
                    <>
                      {" "}
                      <div className="font-heading text-2xl mb-2 text-blue-ramaiah">
                        Patents & Books
                      </div>
                      <div className="bg-white shadow-lg rounded-md">
                        <ul className="list-decimal ml-7">
                          {!(
                            data[0]?.bp1 == "None" ||
                            data[0]?.bp1 == "No" ||
                            data[0]?.bp1 == "NA" ||
                            data[0]?.bp1 == "na" ||
                            data[0]?.bp1 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp1 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp2 == "None" ||
                            data[0]?.bp2 == "No" ||
                            data[0]?.bp2 == "NA" ||
                            data[0]?.bp2 == "na" ||
                            data[0]?.bp2 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp2 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp3 == "None" ||
                            data[0]?.bp3 == "No" ||
                            data[0]?.bp3 == "NA" ||
                            data[0]?.bp3 == "na" ||
                            data[0]?.bp3 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp3 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp4 == "None" ||
                            data[0]?.bp4 == "No" ||
                            data[0]?.bp4 == "NA" ||
                            data[0]?.bp4 == "na" ||
                            data[0]?.bp4 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp4 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp5 == "None" ||
                            data[0]?.bp5 == "No" ||
                            data[0]?.bp5 == "NA" ||
                            data[0]?.bp5 == "na" ||
                            data[0]?.bp5 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp5 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp6 == "None" ||
                            data[0]?.bp6 == "No" ||
                            data[0]?.bp6 == "NA" ||
                            data[0]?.bp6 == "na" ||
                            data[0]?.bp6 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp6 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp7 == "None" ||
                            data[0]?.bp7 == "No" ||
                            data[0]?.bp7 == "NA" ||
                            data[0]?.bp7 == "na" ||
                            data[0]?.bp7 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp7 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp8 == "None" ||
                            data[0]?.bp8 == "No" ||
                            data[0]?.bp8 == "NA" ||
                            data[0]?.bp8 == "na" ||
                            data[0]?.bp8 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp8 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp9 == "None" ||
                            data[0]?.bp9 == "No" ||
                            data[0]?.bp9 == "NA" ||
                            data[0]?.bp9 == "na" ||
                            data[0]?.bp9 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp9 : null}
                            </li>
                          )}
                          {!(
                            data[0]?.bp10 == "None" ||
                            data[0]?.bp10 == "No" ||
                            data[0]?.bp10 == "NA" ||
                            data[0]?.bp10 == "na" ||
                            data[0]?.bp10 == "none"
                          ) && (
                            <li className="mb-3">
                              {data ? data[0]?.bp10 : null}
                            </li>
                          )}
                        </ul>
                      </div>
                    </>
                  )
                : null}
            </div>
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
  ) : null;
}
