// import { LightBoxGallery, GalleryItem } from "react-magnific-popup";

function FacilitiesHostel() {
  //   const config = {
  //     delegate: "a",
  //     type: "image",
  //     tLoading: "Loading image #%curr%...",
  //     mainClass: "mfp-img-mobile",
  //     gallery: {
  //       enabled: true,
  //       navigateByImgClick: true,
  //       preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  //     },
  //     image: {
  //       tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  //       titleSrc: function (item) {
  //         return item.el.attr("title") + "<small>by Marsel Van Oosten</small>";
  //       },
  //     },
  //   };

  //   const images = [
  //     {
  //       original:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5170.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5171.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5172.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5175.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5631.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5633.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5635.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5638.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5639.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5642.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5643.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5644.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //     {
  //       original:
  //         "http://d2e9h3gjmozu47.cloudfront.net/Gallery/library/library-full/CO5B5645.jpg",
  //       thumbnail:
  //         "https://msrit-bucket.s3-us-west-2.amazonaws.com/Gallery/library/library-thumb/Chief+Librarian_Chamber_Dr_M_Ebenezer_Selva_Kumar.jpg",
  //     },
  //   ];

  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        <div className="col-span-full lg:sticky lg:top-10 place-self-start lg:rounded-lg lg:border-[1px] lg:border-blue-ramaiah  bg-opacity-30 text-blue-ramaiah space-x-3  lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:w-full ">
          <div className="lg:w-full lg:flex lg:flex-col text-center h-auto">
            <a
              href="#facilities"
              className="lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah active:bg-opacity-100 bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Facilites Provided
            </a>
            <a
              href="#rules"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Hostel Rules
            </a>
            <a
              href="#general"
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              General Guidelines
            </a>
            <a
              href="#mess"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Mess Rules
            </a>
            <a
              href="#charges"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Hostel Charges
            </a>
            <a
              href="#info"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              General Information
            </a>
            <a
              href="#links"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Important Links
            </a>
            <a
              href="#gallery"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Gallery
            </a>
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <div className="font-heading text-lg text-center" id="facilities">
            {" "}
            FACILITIES PROVIDED AT HOSTEL
          </div>{" "}
          <ul className="list-disc ml-7">
            <li>
              Well-appointed rooms for single/double/triple occupancy with
              attached/common bath rooms with hot water.
            </li>
            <li>Two spacious halls for comfortable dining.</li>
            <li>
              Breakfast, lunch, evening snacks and special dinner is provided by
              the mess comprising of both North and South Indian food items. The
              Mess Committee made up of student representatives from different
              parts of the country decide the mess menu on cost sharing.
            </li>
            <li>
              Eight heavy duty washing machines in the old block provide for
              free laundry services.
            </li>
            <li>Ironing of clothes at subsidized rates.</li>
            <li>
              Large recreation halls equipped with LED TV's, newspapers and
              magazines in each of the three hostel blocks.
            </li>
            <li>Indoor and outdoor games facilities.</li>
            <li>
              Availability of light refreshments from the canteen up to 12
              midnight.
            </li>
            <li>
              Health center with a senior doctor for consultation and treatment
              available from Monday to Saturday between 5 pm and 7 pm. Medicines
              are supplied free of cost.
            </li>
            <li>
              Round the clock security to all blocks. Additional security at
              blocks occupied by freshers.
            </li>
            <li>RO drinking water from the in-house plant.</li>
            <li>
              Guest rooms for visitors which are charged according to
              availability.
            </li>
            <li>Cabled/ Wi-Fi internet provided at nominal charges.</li>
          </ul>
          <br />
          <div className="font-heading text-lg text-center" id="rules">
            {" "}
            HOSTEL RULES
          </div>{" "}
          <br />
          <div className="text-justify">
            {" "}
            <ul className="list-disc ml-7">
              {" "}
              <li>
                Only bonafide students of MSRIT and others that are specially
                permitted by the Director or his nominees will be given
                accommodation in the hostel.{" "}
              </li>
              <li>
                The Gokula Education Foundation Trust manages the MSR Hostels
                (Engg) under the direction and control of the Principal of MSRIT
                through the Warden and the Officials appointed by him.{" "}
              </li>
              <li>
                Students who require hostel accommodation should pay the hostel
                and mess deposits, room rent and other hostel charges for the
                full term at the time of joining. All the payments and the
                deposits should be made in Vijaya Bank, MSRIT branch.
              </li>
              <li>
                The allotment of rooms will be made on a first come, first
                served basis. No change is permitted unless the concerned
                authorities are personally satisfied that such a change can be
                allowed. Permission is to be recorded in writing. In case of
                roommates wishing to continue in the same room with each other
                for the next term also, they have to remit the hostel deposits
                together on the same date before vacation starts. They should
                get the room allotted and occupy the room before commencement of
                the next term.
              </li>
              <li>
                All those admitted to the hostel should give an acknowledgment
                for the furniture and fittings handed over to their charge. At
                the time of leaving the hostel during or after completion of the
                course, they will be required to hand over the furniture and
                fittings to the hostel office and will be chargeable for any
                damages.
              </li>
              <li>
                No extra furniture or electrical fittings are allowed in the
                rooms without the written permission of the Warden. Fines will
                be levied if found damaging hostel property such as electrical
                and plumbing fittings, furniture etc. COOKING IN THE ROOMS IS
                STRICTLY PROHIBITED.
              </li>
              <li>
                Members are required to bring their own mattresses, mosquito
                nets and other necessary items. Though watch and ward
                arrangements are provided, the MSRIT shall not be responsible
                for any loss or damage to the resident's property or things.
              </li>
              <li>
                The occupants are requested to bring their own lock and key for
                locking their respective rooms and will be responsible for the
                safety of their belongings.
              </li>
              <li>
                Members who expect to be away from the hostel for short periods
                exceeding 24 hours shall inform the Warden of their absence
                along with the probable time of their return. Absence from the
                hostel without permission for more than a month may entail
                cancellation of the accommodation and the adjustment of the
                deposit towards dues.
              </li>
              <li>
                Notice of intention to vacate a room must be given in writing in
                the prescribed form kept in the hostel office. Change of room,
                except in cases where consent by authorities is given, is not
                permitted.
              </li>
              <li>
                Students who have been allotted new rooms will have to shift to
                the new accommodation within two days from the date of allotment
                and hand over the possession of old room or cancel the new
                allotment in writing.
              </li>
              <li>
                Keeping both rooms beyond the stipulated period (two days after
                allotment) will attract a penal fee at guest rates i.e., Rs.
                300/- per day till the possession of one of the rooms is handed
                over to the hostel authorities.
              </li>
              <li>
                The security deposit is refunded only at the end of the final
                year when the student leaves the hostel. This deposit is subject
                to deduction of cost of any loss / damage to the furniture &
                fittings.
              </li>
              <li>
                The maintenance charge collected will include reading /
                recreation room charges. The cost may be revised from time to
                time, if necessary.
              </li>
              <li>
                Students shall not keep any valuables or objectionable articles
                in the rooms.
              </li>
              <li>
                Students shall not write or display questionable slogans,
                posters, flags in his/her room or anywhere in the premises.
                Rooms/premises are to be kept clean.
              </li>
              <li>
                Residents will have to pay the hostel deposits / fees as
                applicable.
              </li>
              <li>
                Students shall vacate the hostel as soon as they complete their
                course.
              </li>
              <li>
                Their stay in the hostel after the stipulated time without prior
                permission from the Warden shall be treated as unauthorized stay
                and action will be taken to take possession of the seat/room in
                addition to charging rent of Rs.300/- per day.
              </li>
              <li>
                Consumption of alcoholic beverages, drugs, smoking of cigarettes
                etc., in the hostel premises is strictly banned. If found
                indulging in such activities, students will be expelled from the
                hostel and their deposits will be forfeited.
              </li>
            </ul>
          </div>
          <br /> <br />
          {/* CONTACT DETAILS CARD*/}
          <div
            className="font-heading text-lg text-center font-bold"
            id="general"
          >
            GENERAL GUIDELINES
          </div>{" "}
          <br />
          <div className="w-full">
            <ul className="list-disc ml-7">
              <li>
                Hostel members should use water and electricity economically.
              </li>
              <li>
                Heaters or similar electrical appliances are not allowed. They
                should not meddle with the fittings already in their rooms or
                make any additional connections.
              </li>
              <li>
                Smoking and consumption of alcoholic beverages in the hostel
                premises is an offence and will incur serious punishment.
              </li>
              <li>
                Members should avoid causing disturbances to other residents.
              </li>
              <li>
                Boarders should return to the hostel before 10.30 p.m. The
                hostel main gate, once closed at 10.30 p.m., will not be opened
                till 6.00 a.m. the next day. No resident will be allowed to
                enter the hostel during this period under any circumstances.
              </li>
              <li>
                If it is absolutely necessary to go out, he shall make an
                application in writing to the Warden stating the reason to
                obtain prior permission.
              </li>
              <li>
                It is important that absolute silence is maintained after 10.00
                p.m.
              </li>
              <li>
                Any type of loud talking, shouting, singing, playing musical
                instruments or indulging in activities that would affect the
                peaceful atmosphere required for studies is prohibited.
              </li>
              <li>
                Only student’s parents/guardian are permitted to stay in the
                hostel guest rooms for a period of not more than two days.
                Allotment shall be subject to availability.
              </li>
              <li>
                The key of the room should always be in the resident's
                possession. Handing over the key to any non-resident for the
                casual use of the room is strictly prohibited. Keeping the keys
                on the door or window frame is not advised.
              </li>
              <li>
                Guests/Parents are not allowed to stay in the rooms along with
                the students. They can be accommodated in the guest rooms on
                written permission from the Warden/Manager on prescribed guest
                charges.
              </li>
              <li>
                All Hostel and Mess staff work under the Council of Wardens.
                Discrepancies in service, if any, should be brought to the
                notice of the Council of Wardens.
              </li>
              <li>
                Three Committees, viz., Mess and Purchase Committee,
                Infrastructure and Maintenance Committee and Vigilance and
                Discipline Committee constituted by the Hostel Management for
                every academic year will assist the Council of Wardens to run
                and maintain the hostel and mess in an efficient and hospitable
                manner.
              </li>
            </ul>
            <br />
            <p className="text-justify">
              All the Committees will report directly to Council of Wardens for
              redressal of their problems. The term of the Committee shall be
              one academic year. In case of delay in formation of the new
              Committee, the Council of Wardens may request the Committee in
              office to continue till a new Committee is formed
            </p>
            <p className="text-justify">
              These Committees shall take active interest in general welfare of
              the students residing in the hostel and assist the Council of
              Wardens in maintaining the living standards and suggest
              improvements.
            </p>
            <p className="text-justify">
              Accommodation is provided in the hostel on the condition that the
              member shall put in complete attendance in the college and in the
              hostel and maintain good academic records.
            </p>
            <p className="text-justify">
              They will also report any unauthorized use of hostel and bring to
              the notice any untoward incidence occurring in the hostel
              premises.
            </p>{" "}
            <br />
            <p className="text-justify font-black">
              SUCH HOSTEL RESIDENTS WHO WISH TO VACATE THE HOSTEL EITHER IN THE
              BEGINNING OR DURING THE ACADEMIC SESSION IS ELIGIBLE FOR REFUNDS
              AS PER THE GUIDE LINES DETAILED BELOW:
            </p>{" "}
            <br />
            <ol className="list-decimal ml-7">
              <li>
                IN CASE OF GETTING TRANSFERRED TO A DIFFERENT COLLEGE AFTER
                REMITTING THE HOSTEL FEE. Admission fee of Rs.1000/- shall be
                deducted and balance will be refunded.
              </li>
              <li>
                STUDENTS VACATING THE HOSTEL WITHIN ONE MONTH FROM THE DATE OF
                ACTUAL OCCUPATION OF HOSTEL.75% of Rent and Maintenance charges
                and balance of Mess Advance shall be refunded.
              </li>
              <li>
                STUDENTS VACATING THE HOSTEL WITHIN THREE MONTHS FROM THE DATE
                OF ACTUAL OCCUPATION OF HOSTEL.50% of Rent and Maintenance
                charges and balance of Mess Advance shall be refunded.
              </li>
              <li>
                STUDENTS VACATING THE HOSTEL AFTER THREE MONTHS OF STAY
                INCLUDING LOSING ELIGIBILITY TO THE NEXT SEMESTER. Only balance
                of Mess Advance at their credit shall be refunded.
              </li>
              <li>
                Security Deposit, however, will be refunded only after
                completing the course or officially being relieved from MSRIT.
              </li>
            </ol>
          </div>
          <br /> <br />
          <div className="font-heading text-lg text-center font-bold" id="mess">
            MESS RULES
          </div>{" "}
          <br />
          <div className="w-full">
            <ul className="list-disc ml-7">
              <li>
                A vegetarian mess is being run on self-service and dividing
                system. Every student of the MSRIT is automatically a boarder at
                the time of admission to the hostel.
              </li>
              <li>
                Every boarder shall see to it that, congenial atmosphere is
                maintained in the dining hall to enable the staff to do their
                job effectively.
              </li>
              <li>
                No boarder shall enter into a quarrel or unnecessary discussion
                with staff or co-boarders.
              </li>
              <li>
                Outside food is not allowed into the dining hall/hostel premises
                except purchased from the stores situated within the premises.
              </li>
              <li>
                Service in the mess shall be as per the scheduled timings only.
              </li>
              <li>
                There shall be no service to the rooms and food will not be
                preserved for late comers.
              </li>
              <li>
                Mess Committee formed shall constitute representation from all
                semesters who will specify the Menu and quantity to be served
                and no boarder shall question the Committee's authority to do so
                or work at cross purposes.
              </li>
              <li>
                The menu so specified by the Mess Committee will be duly
                approved by the Warden, to have an effective control over the
                cost.
              </li>
              <li>
                The Mess Committee will act as an advisory body and report to
                the Warden about the quality of food and on the general
                cleanliness in and around the mess.
              </li>
              <li>
                The Committee will also bring to the notice about the quality of
                service being given by the Mess Staff.
              </li>
              <li>
                Rebates will be given only for absence from the mess for two
                consecutive days and more for which, due intimation is required
                one day in advance for recording the absence in the register
                kept for the purpose in the dining hall with the Mess
                Supervisor.
              </li>
              <li>
                No requests are entertained for the mess absence on the same
                day.
              </li>
              <li>
                Absence for more than 10 days in a month may be considered under
                extraordinary circumstances for which Warden's approval is
                mandatory
              </li>
              <li>
                The Manager with the assistance of Superintendent shall ensure
                that, the items being prepared are as per the menu finalized by
                the Mess Committee.
              </li>
            </ul>
            <br />
            <p className="text-justify">
              Any change in the menu shall be brought to the notice of the
              Warden for taking necessary action. In case of any disagreement,
              the decision given by the Warden shall be final and binding.
            </p>
            <br />
            <p className="text-justify">
              The mess will remain open normally during the following timings
              and will be closed after lunch on every Saturday.
            </p>
            <br />
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Monday to Saturday
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Timings
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="text-sm font-medium text-gray-900">
                                Breakfast (Mon - Sat)
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              7.30 A.M to 9.30 A.M
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="text-sm font-medium text-gray-900">
                                Lunch (Mon - Sat)
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              12.00 P.M to 2.15 P.M
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="text-sm font-medium text-gray-900">
                                Snacks & Tea (Mon - Fri)
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              4.30 P.M to 5.30 P.M
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="text-sm font-medium text-gray-900">
                                Dinner (Mon - Fri)
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              7.30 P.M to 9.30 P.M
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div class="flex flex-col">
              <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Sunday and Holidays
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Timings
                          </th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="text-sm font-medium text-gray-900">
                                Breakfast
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              8.00 A.M to 10.00 A.M
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="text-sm font-medium text-gray-900">
                                Lunch
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              12.30 P.M to 2.30 P.M
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="text-sm font-medium text-gray-900">
                                Snacks & Tea
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              4.30 P.M to 5.30 P.M
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="text-sm font-medium text-gray-900">
                                Dinner
                              </div>
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900">
                              7.30 P.M to 9.30 P.M
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="font-heading text-lg text-center font-bold"
            id="charges"
          >
            HOSTEL CHARGES
          </div>{" "}
          <br />
          <div className="w-full">
            <br />
            <p className="text-justify">
              The charges applicable vary for type of accommodation at various
              hostel blocks. At the time of admission to the hostel, the fees /
              deposit are to be paid under the following account heads:
            </p>
            <ol className="list-decimal ml-7">
              <li>Mess Advance Deposit</li>
              <li>Amenity Charges</li>
              <li>Hostel Maintenance Charges and Admission fees</li>
              <li>Refundable Security Deposit</li>
            </ol>
            <br />
            <p className="text-justify">
              Mess charges as per daily rate will be deducted from the Mess
              Deposit amount depending on the number of days of mess facility
              utilized by the student and the balance amount remaining will be
              notified every month. At the end of the term, balance amount, if
              any, will be carried over to the next term or refunded if the
              course is completed.{" "}
            </p>{" "}
            <br />{" "}
            <p className="text-justify">
              Mess accounting is done from 1st to the last day of a particular
              month.{" "}
            </p>{" "}
            <br />{" "}
            <p className="text-justify">
              {" "}
              It is mandatory for all the students to open a Bank Account at the
              Bank of Baroda, RIT Branch for smooth & early financial
              transactions.{" "}
            </p>
          </div>
          <br />
          <br />
          <div className="font-heading text-lg text-center font-bold" id="info">
            GENERAL INFORMATION
          </div>{" "}
          <br />
          <div className="w-full">
            <br />{" "}
            <ul className="list-disc ml-7">
              {" "}
              <li>
                Permission will be granted to boarders to possess a vehicle but
                at their own risk.
              </li>
              <li>No guests are permitted to stay with any boarder.</li>
              <li>
                In case of serious illness of a boarder, a male relative or a
                friend will be allowed to stay with him for a specific period at
                the discretion of the Warden / Manager.
              </li>
              <li>Room allotted is not transferable.</li>
              <li>
                If the boarder has a visitor, he may be entertained for a brief
                period in the room after entries are made by him in the log book
                maintained by the watch and ward.
              </li>
              <li>
                If any guest is found to be living in any room without the
                knowledge of the Warden/Manager, the residents of the room will
                be charged Rs.300/- per day. Repeated violation of this norm may
                invite severe penalties including expulsion from the hostel.
              </li>
              <li>
                Contributions of the boarders to any fund for any functions of
                sorts is not allowed. Dignitaries and invitees from other
                colleges are not allowed to lecture within the premises without
                the written permission of the Warden.
              </li>
              <li>
                Celebration of any festival, birthday parties or event of any
                provincial, national or international importance shall not be
                allowed without the knowledge or permission of the Warden. Such
                celebrations, if permitted by Warden, shall be confined to the
                hostel only and carried out in a manner so that the co-boarders,
                visitors or others in the locality are not affected.
              </li>
              <li>
                No ragging is permitted in the premises of the hostel. Anyone
                indulging in ragging will face stiff punishment and is liable to
                be expelled from the hostel.
              </li>
              <li>
                Unauthorized occupation of rooms, capturing rooms, sub-letting
                rooms and allowing any other student to live in their room will
                result in the cancellation of the student’s accommodation in the
                hostel.
              </li>
              <li>
                In such cases, the Principal / Warden may confiscate the
                student’s deposit, penalize the student for such acts and may be
                expelled from the hostel without notice.
              </li>
              <li>
                A boarder found to violate the rules and regulations or indulge
                in activities not conducive to maintaining the discipline of the
                hostel shall be liable for punishment as imposed by the
                Principal / Warden.
              </li>
              <li>
                A boarder may take grievances to the Warden who shall make
                efforts for redressal of those that are genuine.
              </li>
              <li>
                Additions or any modifications to these rules/regulations will
                be notified whenever necessary and they will be binding on the
                boarders.
              </li>
              <li>
                Health Care Center is being maintained in the hostel premises
                with a senior doctor available for consultation. Check-ups and
                medicines are provided free of cost.
              </li>{" "}
            </ul>
            <br />
            <p className="text-justify">
              The Health Care Center/Dispensary is functional from 5.00 p.m. to
              7.00 p.m. on all week days except on Sundays.
            </p>
          </div>
          <div
            className="font-heading text-lg text-center font-bold"
            id="links"
          >
            IMPORTANT LINKS
          </div>{" "}
          <br />
          <div className="w-full">
            <br />{" "}
            <div className="flex flex-row flex-wrap gap-3 w-full items-center">
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/hostel_2019_info.pdf"
              >
                HOSTEL INFO GUIDE
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Uploads/hostel_2019_manual.pdf"
              >
                HOSTEL MANUAL
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://d2e9h3gjmozu47.cloudfront.net/Infrastructure/Hostel/Letter-to-warden.pdf"
              >
                JOINING LETTER
              </a>
              <a
                className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://d2e9h3gjmozu47.cloudfront.net/Infrastructure/Hostel/RAGGING+IS+A+CRIME.pdf"
              >
                RAGGING IS A CRIME
              </a>
            </div>
          </div>{" "}
          <br />
          <div
            className="font-heading text-lg text-center font-bold"
            id="gallery"
          >
            GALLERY
          </div>{" "}
          <div>
            {/* Gallery } <ImageGallery items={images} />*/}
            {/* <LightBoxGallery className="popup-gallery" config={config}>
              <GalleryItem
                href="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg"
                title="The Cleaner"
              >
                <img
                  src="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg"
                  width="75"
                  height="75"
                />
              </GalleryItem>
              <GalleryItem
                href="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg"
                title="The Cleaner"
              >
                <img
                  src="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg"
                  width="75"
                  height="75"
                />
              </GalleryItem>
              <GalleryItem
                href="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg"
                title="The Uninvited Guest"
              >
                <img
                  src="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_s.jpg"
                  width="75"
                  height="75"
                />
              </GalleryItem>
              <GalleryItem
                href="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg"
                title="Oh no, not again!"
              >
                <img
                  src="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_s.jpg"
                  width="75"
                  height="75"
                />
              </GalleryItem>
              <GalleryItem
                href="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg"
                title="Swan Lake"
              >
                <img
                  src="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_s.jpg"
                  width="75"
                  height="75"
                />
              </GalleryItem>
              <GalleryItem
                href="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg"
                title="The Shake"
              >
                <img
                  src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg"
                  width="75"
                  height="75"
                />
              </GalleryItem>
              <GalleryItem
                href="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg"
                title="Who's that, mommy?"
              >
                <img
                  src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg"
                  width="75"
                  height="75"
                />
              </GalleryItem>
            </LightBoxGallery> */}
          </div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default FacilitiesHostel;
