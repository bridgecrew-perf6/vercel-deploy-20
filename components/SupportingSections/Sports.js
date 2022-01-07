function Sports() {
  return (
    <>
      {/* Dept Nav Bar */}
      <div className="grid grid-cols-12 lg:bg-transparent lg:relative font-body">
        {/* <div className="col-span-full lg:sticky lg:top-10 place-self-start lg:rounded-lg lg:border-[1px] lg:border-blue-ramaiah  bg-opacity-30 text-blue-ramaiah space-x-3  lg:col-start-2 lg:col-end-4 lg:inline-flex lg:flex-col lg:w-full ">
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
                            className="lg:hover:font-bold lg:hover:text-white lg:hover:bg-gradient-to-r lg:hover:from-orange-ramaiah lg:to-pink-ramaiah bg-gray-deptHeader bg-opacity-75 lg:p-2 lg:m-2
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
                      </div> */}

        {/* Dept Main Content*/}
        <div className="col-span-full m-2 p-2 lg:col-start-4 lg:col-end-10 h-auto text-blue-ramaiah border-gray-100 border-2 bg-white">
          <div className="font-heading text-lg text-center mb-2" id="qip">
            {" "}
            SPORTS
          </div>{" "}
          <br />
          <div className="text-justify">
            {" "}
            <div className="font-heading text-lg"> VISION</div>
            <p>
              {" "}
              To embed students with life skills and prepare them to be fit and
              confident to take on the world MSRIT Sports Department offers to
              manage, serve, promote various games both indoor and outdoor at
              all levels of play, thereby making the students to be lifetime
              learners in the classroom and on the field. To develop them
              spiritually into humans of character and godliness.
            </p>
            <br />
            <div className="font-heading text-lg"> MISSION</div> ACHIEVEMENTS
            <p>
              {" "}
              RIT Sports Department offers to manage, serve, promote various
              games both indoor and outdoor at all levels of play, thereby
              making the students to be lifetime learners in the classroom and
              on the field. To develop them spiritually into humans of character
              and godliness.
            </p>
            <br />
            <div
              className="font-heading text-lg text-center font-bold"
              id="contact"
            >
              DIRECTOR OF PHYSICAL EDUCATION
            </div>{" "}
            <br />
            <div className="w-[97%] text-white font-bold rounded-[0.25rem] bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah p-4 mx-auto">
              <div className="flex flex-row">
                <div className="h-20 w-20 mr-2">
                  <img
                    className="h-full w-full rounded-full object-cover border-2 border-white"
                    src="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/KiranKumar_Profile.png"
                  />
                </div>

                <div>
                  <span className="text-xl">Dr. Kiran Kumar H K</span> <br />
                  M.P.Ed., M. Phil., Ph.D
                  <br />
                  Director of Physical Education
                </div>
              </div>
              <div className="text-right">
                Contact No: 080 23600822, Extn: 324
                <br />
                E-mail: chiefproctor[at]msrit[dot]edu
              </div>
            </div>{" "}
            <br />
            <div className="font-heading text-lg">
              {" "}
              SPORTS PROMOTIONAL EVENTS
            </div>
            <ul className="list-disc ml-7">
              <li>
                Dr. M S Ramaiah Memorial State Level Inter Engineering Colleges
                Cricket Tournament
              </li>

              <li>
                Dr. M S Ramaiah Memorial State Level Inter Engineering Colleges
                Basketball (Men & Women) Tournaments
              </li>

              <li>Conduction of VTU Tournaments</li>

              <li>Annual Athletic Meet</li>

              <li>Inter Branch Competitions (Men & Women)</li>

              <li>Inter Staff Competitions (Men & Women)</li>
              <li>
                Felicitation for Sports Achievers & out going Sportspersons
              </li>
            </ul>
            <br />
            {/* <div className="font-heading text-lg">
              {" "}
              MOTIVATING FACTORS FOR THE SPORTS PARTICIPANTS
            </div>
            <ul className="list-disc ml-7">
              <li>
                Free admissions given to the Top Sports Persons for the 1st Year
                BE / MBA under Management seats
              </li>

              <li>Transportation to take part in the tournaments</li>

              <li>Issue of Sports Colors for college teams</li>

              <li>Providing T.A & D.A for participants</li>

              <li>Attendance & Re-internals for the participants</li>

              <li>Financial assistance for top achievers</li>
              <li>
                Cash awards for the winners and runners and
                India/State/University representatives
              </li>
            </ul> */}
            <br />
            <div className="font-heading text-lg">
              {" "}
              MANAGEMENT OF THE SPORTS FACILITIES
            </div>
            <ul className="list-disc ml-7">
              <li>
                Refilling, resoling of the playfields with fine quality of red
                earth, marking and lining, as and when needed for the
                utilization to conduct the above events from time to time i.e.,
                Intramural and Extramural competitions for men and women
                students, teaching and non-teaching staff, selection trials and
                coaching etc.,
              </li>
            </ul>
            <br />
            <div className="font-heading text-lg text-center mb-2" id="qip">
              {" "}
              STAFF
            </div>{" "}
            <br />
            <div className="text-justify">
              <div className="w-[97%] text-white font-bold rounded-[0.25rem] bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah p-4 mx-auto">
                <div className="flex flex-row flex-wrap justify-evenly space-x-2">
                  <div className="max-w-[50%] flex flex-col flex-wrap justify-center">
                    <div className="h-20 w-20 mr-2">
                      <img
                        className="h-full w-full rounded-xl object-fit border-2 border-white "
                        src="https://d2e9h3gjmozu47.cloudfront.net/Supporting/Staff/s2.png"
                      />
                    </div>
                    <div>
                      Mr. B Byrappa
                      <br />
                      Instructor, Physical Education
                    </div>
                  </div>

                  <div className="max-w-[50%] flex flex-col flex-wrap justify-center">
                    <div className="h-20 w-20 mr-2">
                      <img
                        className="h-full w-full rounded-xl object-fit border-2 border-white"
                        src="https://d2e9h3gjmozu47.cloudfront.net/Supporting/Staff/s4.png"
                      />
                    </div>
                    <div>
                      Kiran Kumar .S
                      <br />
                      Groundsman Physical Education
                    </div>
                  </div>

                  <div className="max-w-[50%] flex flex-col flex-wrap justify-center">
                    <div className="h-20 w-20 mr-2">
                      <img
                        className="h-full w-full rounded-xl object-fit border-2 border-white"
                        src="https://d2e9h3gjmozu47.cloudfront.net/Supporting/Staff/s5.png"
                      />
                    </div>
                    <div>
                      Manu .H K
                      <br />
                      Groundsman, Physical Education
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="text-justify">
              <img
                className="w-full"
                src="https://s3-us-west-2.amazonaws.com/msrit-bucket/Supporting/Sports/coaches.PNG"
              />
            </div>{" "}
            <br />
            <div className="font-heading text-lg text-center mb-2" id="qip">
              {" "}
              SPORTS ENDORSEMENTS
            </div>{" "}
            <br />
            <ul className="list-disc ml-7">
              <li>
                Sports quota seats will be provided for the National and
                Inter-National level players from College Management seats.
              </li>

              <li>Transportation to take part in the tournaments</li>

              <li>Issue of Sports Colors for college teams</li>

              <li>Providing T.A & D.A for participants</li>

              <li>Attendance & Re-internals for the participants</li>

              <li>Financial assistance for top achievers</li>
              <li>
                Cash awards for the winners and runners and
                India/State/University representatives
              </li>
            </ul>
            <br />
            <div className="font-heading text-lg text-center mb-2" id="qip">
              {" "}
              COLLEGE TEAMS
            </div>{" "}
            <br />{" "}
            <div className="text-justify">
              <img className="w-full" src="../sports-teams.png"></img>
            </div>{" "}
            <br />
            <div className="font-heading text-lg text-center mb-2" id="qip">
              {" "}
              QUICK LINKS
            </div>{" "}
            <br />{" "}
            <div className="w-full">
              <div className="flex flex-row flex-wrap gap-3 w-full mx-auto justify-between">
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/Memorial+Tournaments_2019-2020.pdf"
                >
                  M S RAMAIAH MEMORIAL TOURNAMENTS
                </a>
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/Annual%2BAthletic%2BMeet-2019-2020.pdf"
                >
                  ANNUAL ATHLETIC MEET
                </a>
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/VTU+Tournaments.pdf"
                >
                  VTU TOURNAMENTS
                </a>
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/In%2BHouse%2BActivities_2019-2020.pdf"
                >
                  IN HOUSE ACTIVITIES
                </a>
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://s3-us-west-2.amazonaws.com/msrit-bucket/Supporting/Sports/1_Sports_Infrastructure.pdf"
                >
                  SPORTS INFRASTRUCTURE
                </a>
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/Outstanding+Sports+Achievers.pdf"
                >
                  OUTSTANDING SPORTS ACHIEVERS
                </a>
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/Sports_Achievements_2019-2020.pdf"
                >
                  SPORTS ACHIEVEMENTS 2019-2020
                </a>{" "}
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/Sports_Achievements_2018-2019.pdf"
                >
                  SPORTS ACHIEVEMENTS 2018-2019
                </a>
                <a
                  className="text-white p-2 w-1/3 rounded-[0.25rem] shadow-lg border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                  href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Sports/VTU+Achievements.pdf"
                >
                  VTU AND INVITATIONAL INTER-COLLEGIATE TOURNAMENTS ACHIEVEMENTS
                </a>
              </div>
            </div>
          </div>
          <br />
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default Sports;
