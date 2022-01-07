import Quote from "./utilities/blockquote";

function FacilitiesLibrary() {
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
              href="#membership"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Library Membership
            </a>
            <a
              href="#charging"
              className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Charging & Discharging
            </a>
            <a
              href="#rules"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Library Rules
            </a>
            <a
              href="#links"
              className="sm:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2"
            >
              Important Links
            </a>
            {/* <a
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
            </a> */}
          </div>
        </div>

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <div className="font-heading text-lg text-center" id="overview">
            {" "}
            LIBRARY
          </div>{" "}
          <br />
          <div className="w-full">
            <p className="text-justify mb-2">
              {" "}
              The Library began its existence in 1962. The library with its
              modern collection knowledge resources and innovative information
              services fills an essential role for students, faculty and the
              surrounding community in their intellectual pursuits. It is a
              centralized Air Conditioned fully automated library predominantly
              related to Engineering, Technology, Management and allied
              subjects. The collection comprises of 126548 volumes of Books with
              40665 Titles and 85 National printed Magazines. The Library
              subscribes to about 5750 full text E-journals from,IEL Online
              (IEEE Journals, Standards and Conf. Proceedings), Taylor &
              Francis, Elesvier Science Direct, Springer Nature, Emerald
              (Management), Proquest , Knimbus E- Library(5700 open access
              E-Journals) & 1700 Conference proceedings covers back files from
              2010 onwards. The E-Books Subscription package includes around
              23956 from Taylor & Francis-CRC Netbase & Springer Link &
              McGrawhill Education, Packt, Elesvier Science Direct, New Age
              International. In addition, there are 3720 Bound volumes of
              journals, 4404 CD’s &DVD’s, 75 Video Cassettes & 1421 IS
              Standards. All the operations of the Library are automated using
              Libsys 10 software.
            </p>

            <p className="text-justify mb-2">
              Library provides a Plagiarism Checking Tool “Turnitin” used to
              Check Plagiarism Originality Online and “NetAnalytiks-Sententia”
              in support of formal writing assistive tool for students and
              professionals. Scopus Abstract & Citation Database for check
              Citations and Publications.
            </p>

            <p className="text-justify mb-2">
              As per the fourth Law of Library Science, “Save the time of
              Reader”, the MSRIT Library has been scattered into 6 Locations
              spread across the campus with carpet area of 1762 Sq Mtrs. having
              state of art infrastructure facilities. The seating capacity of
              all Libraries is 1265. Library is an extremely important primary
              support service provided by MSRIT. The library and the associated
              facilities & services are indispensable in support of Learning,
              Teaching and Research. This basic necessity has been recognized
              and the methodology of developing and using the library and
              library-associated services is established in this Library. The
              main services are OPEN ACCESS TO RESOURCES, LENDING OF BOOKS,
              REFERENCE/REFERRAL SERVICE, INDIAN STANDARDS/PATENTS, WEB OPAC,
              SC/ST BOOK BANK SCHEME, MSRIT BOOK BANK SCHEME, ALUMNI BOOK BANK
              SCHEME, REPROGRAPHIC FACILITY, USER ORIENTATION PROGRAMME, AND
              INTER LIBRARY LOAN THROUGH INSTITUTIONAL MEMBERSHIP ETC. The
              Library is kept open from 8 am to 9 pm on all working days
              (Mon-Fri), 9 AM to 9 PM (Sat) and 9AM to 1 PM. During examination
              8 AM to 11 PM (Mon-Fri), 9AM to 9 PM (Sat & Sun). The Library has
              set up a model Digital Library to browse the net and access
              e-resources. It is well facilitated with 132 Computers connected
              to high bandwidth speed of 600 Mbps Leased Line internet. And
              “MSRIT INSTITUTIONAL REPOSITORY” has been developed using Dspace
              Software to access faculty publications, Previous year question
              papers, Lecture notes, Project abstracts etc.
            </p>

            <p className="text-justify mb-2">
              Remote access to e-resources has been facilitated by library
              through the services of M/s. K-NIMBUS. In order to promote
              e-learning the Library has purchased “Local Guru”, video content
              management software and hosted around 23000 NPTEL Video Courses on
              local server are being streamed across the campus 24 x 7
              uninterruptedly.
            </p>
            <p className="text-justify mb-2">
              To facilitate the library services, 11 committed library
              professional staff members are striving hard to meet the
              expectations of the user community. The library also provides One
              Month Internship Training Program to Post Graduate Library Science
              students from all over Karnataka State Universities every year.
              Library conducts National level Workshops, Conferences, Training
              programs, and Book Exhibitions etc.
            </p>

            <br />
            <Quote
              name="CHIEF LIBRARIAN Dr. M. EBENEZER SELVAKUMAR"
              quote="When you absolutely positively have to know, ask a Librarian"
            />
          </div>
          <br />
          <div className="font-heading text-lg text-center" id="membership">
            {" "}
            LIBRARY MEMBERSHIP
          </div>{" "}
          <br />
          <div className="text-justify">
            {" "}
            <p>
              All the students, faculty members and staff of MSRIT and Research
              scholars of VTU (Visvesvaraya Technological University, Belgaum),
              who are engaged in Research under the faculty of MSRIT are users.
              Constituent colleges of GEF (GOKULA EDUCATION FOUNDATION), a
              member of MSR Groups are eligible to become members of MSRIT
              library.
            </p>
            <br />
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            CATEGORY
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            DESCRIPTION
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Students (Under Graduate)
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">04</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Students (Under Graduate) BOOK BANK SCHEME
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">02</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Students (Post Graduate)
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">04</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Students (Post Graduate) BOOK BANK SCHEME
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">02</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Students (UG & PG ) SC/ST BOOKS
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">02</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Research Scholars
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">02</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Regular Faculty Members (All Departments)
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">10</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Probationary Faculty Members (All Departments)
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">05</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Visiting Professors
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">02</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Emeritus Professors
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">02</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                GEF (MSR) Group Colleges
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">10</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                Staff of MSRIT (Non Teaching)
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">02</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          {/* CONTACT DETAILS CARD*/}
          <div
            className="font-heading text-lg text-center font-bold"
            id="charging"
          >
            CHARGING AND DISCHARGING
          </div>{" "}
          <br />
          <div className="w-full">
            <p>
              The Issue, Renewal & Return of Books and other materials are
              automated completely by using Libsys (Library Management
              Software). All Books and Membership cards are Bar-coded. The
              circulation transactions are carried out using Bar-code Scanners.
            </p>
            <br />
            {/* table */}
            <div className="flex flex-col max-w-full">
              {/* <div className="-my-2 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  
                </div>
              </div> */}
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        MEMBERS
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        DESCRIPTION
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        DURATION OF LOAN OF BOOKS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            Students (UG&PG) - All Semesters
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Text Books</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          15 days with 2 Renewals
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            Students (UG&PG) - All Semesters
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          MSRIT BOOK BANK SCHEME
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          One semester
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            Students (UG&PG) - All Semesters
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">SC/ST BOOKS</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">6 Months</div>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            Research Scholars
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Text Books</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          One month with 2 Renewals
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            All Faculty and Staff of MSRIT
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Text Books</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          One Semester
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">
                            MSR Institutions
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">Text Books</div>
                      </td>
                      <td className="px-6 py-4 ">
                        <div className="text-sm text-gray-900">
                          One year (every year membership can be renewed)
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <br />
            <p className="text-justify mb-2">
              The Books may not be renewed, in case of any reservation for
              students. MSRIT BOOK BANK SCHEME Books once issued cannot be
              renewed. Faculty and Staff of MSRIT can return, get issued and get
              renewal of books at any time. SC/ST Books can be return, issue and
              renew any time during the circulation hours. Librarian may recall
              any book from any member at any time. A fine of Rs.1 per day will
              be levied after the specified due date. In case of any books lost,
              damaged, defaced borrower has to replace new copy with latest
              edition or has to pay triple of the present book cost. CD/DVD’s
              and Periodicals will be issued for overnight on demand.
            </p>
            <br />
            <p className="text-justify mb-2">
              Note: Library Membership Forms can be obtained from Main Library,
              ESB – II Block – IV Level.
            </p>
          </div>
          <br /> <br />
          <div
            className="font-heading text-lg text-center font-bold"
            id="rules"
          >
            LIBRARY RULES
          </div>{" "}
          <br />
          <div className="w-full">
            <ul className="list-disc ml-7">
              <li>
                {" "}
                All Faculty, Staff and bonafide Students are the members of the
                Library.{" "}
              </li>
              <li>
                {" "}
                Users shall have to produce the Identity Card on Demand and sign
                in the Gate Register without fail.{" "}
              </li>
              <li>
                Users shall maintain perfect order and Silence in the Library.{" "}
              </li>
              <li>
                Making noise, spitting, smoking and using electronic gadgets are
                strictly prohibited.{" "}
              </li>
              <li>
                Do not mutilate, disfigure, and deface by writing, underlining
                sentences or anything of that kind.{" "}
              </li>
              <li>Reference Books are meant for reading in library only. </li>
              <li>
                Leave the library books / Journals on the table after reading.{" "}
              </li>
              <li>
                Cases of inactivity on the part of the Library Staff or any
                fault in the Service should be reported to the Librarian.{" "}
              </li>
              <li>
                Comply with library rules, library membership card can be
                recalled at any time.{" "}
              </li>
              <li>
                Please check while borrowing the book for any damage and report
                it immediately.{" "}
              </li>
              <li>
                A fine of Rs.1 per day will be levied after the specified due
                date.{" "}
              </li>
              <li>
                In case of any books lost, damaged, defaced borrower has to
                replace new copy with latest edition or has to pay triple of the
                present book cost.{" "}
              </li>
              <li>
                CD/DVD’s and Periodicals will be issued for overnight on demand.{" "}
              </li>
              <li>
                Use of Mobile Phone is strictly prohibited within Library.{" "}
              </li>
              <li>
                Use of Pen drive is not allowed inside Library; however you can
                use pen drive at OPAC Systems.{" "}
              </li>
              <li>
                Digital Library should be used only for browsing and downloading
                e-learning resources and do not use & play computer games and
                for unwanted content.{" "}
              </li>
              <li>
                Do not keep Money purses, Valuable materials, Laptops and any
                kind of electronic gadgets in the Property Counter.{" "}
              </li>
              <li>
                Do make sure you know what library materials you have borrowed.
                Return them on time to avoid fines and as a courtesy to others.{" "}
              </li>
              <li>
                Do ask Library staff for help in any situation. Don’t hesitate!
                We’re for you.{" "}
              </li>
            </ul>
            <br />

            <br />

            <br />
          </div>
          <br />
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
                className="text-white leading-tight hover:font-black p-2 w-1/3 rounded-[0.25rem] shadow-lg transition-all hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Infrastructure/Library/Library+Staff.pdf"
              >
                LIBRARY STAFF
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Infrastructure/Library/Library-Services.pdf"
              >
                LIBRARY SERVICES
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msritb.new.knimbus.com/"
              >
                KNIMBUS REMOTE ACCESS
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Infrastructure/Library/E-Resources+Link.pdf"
              >
                E-RESOURCES
              </a>

              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://a.impartus.com/"
              >
                E-LEARNING MODULE @ RIT
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://ndl.iitkgp.ac.in/"
              >
                NATIONAL DIGITAL LIBRARY
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="http://172.1.20.21:8080/jspui/"
              >
                PREVIOUS QUESTION PAPERS UPTO 2013 (INSTITUTIONAL REPO)
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="http://172.1.22.9/collegevideos/"
              >
                PREVIOUS QUESTION PAPERS FROM 2014 TO TILL DATE
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="http://172.1.20.9/localguru2/"
              >
                E-LEARNING – NPTEL VIDEOS (LOCAL GURU)
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="http://172.1.22.20:8380/opac/"
                target="_blank"
              >
                WEB OPAC
              </a>
            </div>
          </div>{" "}
          <br />
          {/* <div
            className="font-heading text-lg text-center font-bold"
            id="gallery"
          >
            GALLERY
          </div>{" "} */}
          <div>{/* Gallery */}</div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default FacilitiesLibrary;
