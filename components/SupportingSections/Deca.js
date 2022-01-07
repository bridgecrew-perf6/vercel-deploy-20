function Deca() {
  const staff = [
    {
      name: "Dr. K.R.Phaneesh",
      desig: "Coordinator",
      qual: "Ph. D",
      resp: "Overall In-Charge, Responsible for identifying, nurturing and encouraging talent on campus. Mentor for DEBSOC, Quiz Club and 19A.",
      email: "krphaneesh[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_1.jpg",
    },
    {
      name: "Dr. Sanjay H S",
      desig: "Deputy Coordinator",
      qual: "M. Tech, Ph. D",
      resp: "Responsible for infrastructure, administration, accounting and documentation. Mentor for Nature club and the School Tree Project.",
      email: "sanjay[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_2.jpg",
    },
    {
      name: "Sri Bharath M R",
      desig: "Convener",
      qual: "M. Tech, MBA",
      resp: "Responsible for student-interface related activities. Mentor for Ramaiah talkies.",
      email: "bharathmr[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_3.jpg",
    },
    {
      name: "Dr. Dinesh P A",
      desig: "Member",
      qual: "Ph. D",
      resp: "Assisting in finance matters and on-stage activities. Mentor for Gaming club and Comedy Club.",
      email: "dinesh_maths[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_4.jpg",
    },
    {
      name: "Dr. Kiran Kumar H K",
      desig: "Member",
      qual: " M. Phil, Ph. D",
      resp: "In-Charge of discipline among students, Mentor of the D-Committee.",
      email: "Kiranmsrped[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_5.jpg",
    },
    {
      name: "Sri Chethan C V",
      desig: "Member",
      qual: "MCA, (Ph. D)",
      resp: "Mentor for Theatre Societies – Theatrix and Chiraranga.",
      email: "chethanv[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_6.jpg",
    },
    {
      name: "Sri Vijay Anand",
      desig: "Member",
      qual: "M. Tech, (Ph. D)",
      resp: "Responsible for discipline related activities. Mentor for D-committee and Fashion club.",
      email: "vijayanand[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_9.jpg",
    },
    {
      name: "Sri Rajegowda",
      desig: "Member",
      qual: "M. Tech, (Ph. D)",
      resp: "Responsible for event management and mentor for Indian Dance clubs.",
      email: "rajegowda[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_10.jpg",
    },
    {
      name: "Smt. Kusumika",
      desig: "Member",
      qual: "M. Tech, (Ph. D)",
      resp: "Responsible for on-stage activities. Mentor for the western dance clubs.",
      email: "kusumika[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_11.jpg",
    },
    {
      name: "Sri Manjunath C L",
      desig: "Member",
      qual: "M. Tech, (Ph. D)",
      resp: "Responsible for creativity based events and mentor for Art clubs.",
      email: "manjunathl[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_12.jpg",
    },
    {
      name: "Jyothi M. R.",
      desig: "Member",
      qual: "M.tech",
      resp: "Responsible for event related activities. Mentor for Western Dance clubs.",
      email: "jyothivenky29[at]gmail[dot]com",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_13.jpg",
    },
    {
      name: "Sagar J. S.",
      desig: "Member",
      qual: "M.tech",
      resp: "Responsible for disciplinary committee.",
      email: "sagar.shivaram[at]msrit[dot]edu",
      src: "https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/Staff/DECA/deca_14.jpg",
    },
  ];

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
            DEPARTMENT OF EXTRA-CURRICULAR ACTIVITIES
          </div>{" "}
          <br />
          <div className="text-justify">
            {" "}
            <p className="mb-2">
              {" "}
              At RIT we strongly believe in the holistic development of
              students, i.e, they develop in such a way that they evolve into
              full-fledged and confident professionals by the time they
              graduate. This is made possible by encouraging them to engage in
              various cultural activities such as music, theatre, literary,
              visual & fine arts, etc. apart from Sports, NSS, Entrepreneurship
              Cell and other similar pursuits.
            </p>
            <p className="mb-2">
              Cultural Activities is not just about entertainment; they help
              molding the personality of the students and help them in the
              following ways:
            </p>
            <ul className="list-disc ml-7">
              <li>
                Enhances soft skills such as communication skills, etiquette and
                confidence levels.
              </li>
              <li>
                Helps students in the areas of time management, emotion
                management, success (& failure) management, crisis management
                and more importantly people management.
              </li>
              <li>
                While good grades equip students to get their first jobs,
                extra-curricular activities help students to equip for their
                whole lives.
              </li>
              <li>
                They help inculcating in students values such as empathy, broad
                mindedness, team-spirit, self-control, ethics, acceptance of
                pluralities in society, corporate social responsibility, and so
                on.
              </li>
            </ul>
            <br />
            <p className="mb-2">
              Acknowledging the importance of Cultural Activities in the overall
              development of the Students, this Institution has created a
              separate department, known as the Department of Extra-Curricular
              Activities (DECA), to oversee all such activities of students on
              campus and off-campus throughout the year.
            </p>
            <p className="text-left">
              Visit our exclusive You Tube channel ‘DECA MSRIT’:
              <a href="https://www.youtube.com/channel/UCnerv1jMgFV7w5Y818eg03w/feed">
                https://www.youtube.com/channel/UCnerv1jMgFV7w5Y818eg03w/feed
              </a>
              <br />
              Also visit our facebook pages :
              <br />
              <a href="https://www.facebook.com/shoutoutmsrit/">
                https://www.facebook.com/shoutoutmsrit/
              </a>
              <br />
              <a href="https://www.facebook.com/rajyotsava.msrit/">
                https://www.facebook.com/rajyotsava.msrit/
              </a>
              <br />
              <a href="https://www.facebook.com/msritudbhav/">
                https://www.facebook.com/msritudbhav/
              </a>
            </p>
            <br />
            <div>
              <ul>
                {staff.map((st) => (
                  <li className="p-2 mb-2 border-b-[1px] border-orange-ramaiah flex flex-row items-start bg-gray-100 drop-shadow-md">
                    <div className="mr-[0.75rem] h-[120px]">
                      {" "}
                      <img
                        src={st.src}
                        className="rounded-lg border-2 object-cover border-white h-full w-full"
                      />
                    </div>
                    <div>
                      <span className="font-bold">Name:</span> {st.name}
                      &nbsp; <span className="font-bold">
                        Designation:
                      </span>{" "}
                      {st.desig} &nbsp;
                      <span className="font-bold">Qualification:</span>{" "}
                      {st.qual} <br />
                      <span className="font-bold">Responsibilities:</span>{" "}
                      {st.resp} <br />{" "}
                      <span className="font-bold">Email: </span> {st.email}{" "}
                      <br />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {" "}
              <div className="font-heading text-lg text-center mb-2" id="qip">
                {" "}
                STUDENT COUNCIL
              </div>{" "}
              <img src="../student-council.png" className="w-full" />
            </div>
            <br />
            <div className="font-heading text-lg text-center mb-2" id="qip">
              {" "}
              ACTIVITIES
            </div>{" "}
            <div className="w-full">
              <ul className="list-decimal ml-7">
                <li>
                  <p className="font-bold">
                    Ice-Breaker –Cultural Orientation for Freshers
                  </p>{" "}
                  <p>
                    {" "}
                    This is the first event for any given academic year. Here
                    the freshers are introduced to the seniors who are at the
                    helm of affairs. All the student-driven Clubs in various
                    genres of Cultural Activities are introduced to the
                    students. At the same time, a data base of talents present
                    in fresh students is prepared for further auditions and
                    promotions. A poster which details the post-icebreaker
                    activities of DECA is given below.{" "}
                  </p>
                </li>
                <li>
                  <p className="font-bold">
                    Dr. M. S. Ramaiah Memorial Parliamentary Debate
                  </p>{" "}
                  Dr. M. S. Ramaiah Memorial Parliamentary Debate, or MSRMPD as
                  it is commonly known, is the annual parliamentary debate
                  tournament held by the Literary and Debating Society under the
                  guidance of the Department of Extra-Curricular Activities. It
                  has seen six editions until now. The tournament has grown to
                  become one of the biggest debate tournaments in India and has
                  seen the highest participation in any debate tournament in
                  South India. Students from Institutions such as IIT Bombay,
                  NITK Surathkal, RVCE, BMSCE, PESIT, NLS Law College, VIT –
                  Vellore, etc., take part regularly in this prestigious
                  tournament.
                </li>
                <li>
                  <p className="font-bold">
                    Shoutout – The Intra-collegiate Theatre Fest
                  </p>
                  Shoutout is the annual intra-college theatre fest held by The
                  Theatre Society exclusively for the students of MSRIT. The
                  growing passion for theatre, acting, photography,
                  play-writing, movie-making, editing, scoring background music,
                  etc., all manifest in full measure during ShoutOut. Entries
                  are open for events in One Act Plays, Skits, Movies and Short
                  Ads. Professionals are invited as judges to select the best
                  and to give away prizes.
                </li>
                <li>
                  <p className="font-bold">Kannada Rajyotsava</p>
                  This has always been the most celebrated event during any
                  given odd semester. Held in the month of November, Kannada
                  Rajyotsava brings out the culture of the State in full fervour
                  and colour. Eminent litterateurs and well-known actors are
                  invited to our campus to add to the celebrations. Our
                  Institute takes pride in the fact that many non-Kannadiga
                  students come forward to work as volunteers and contribute to
                  the success of Rajyotsava. Many competitive events are held
                  and prizes are distributed on the final day.
                </li>
                <li>
                  <p className="font-bold">
                    UDBHAV – The Intercollegiate Cultural Extravaganza
                  </p>
                  Udbhav is the annual cultural extravaganza of MSRIT. Its size
                  and magnitude, has earned it a spot among the ten best college
                  fests in Karnataka, according to a survey by Deccan Herald.
                  With a footfall of approximately 15,000 people and
                  participants from over 35 colleges across Karnataka, Udbhav is
                  a melting pot of culture. It draws talented youth from across
                  the state to display their colossal talents. Spanning over 3
                  days, this fest provides a platform to its own students as
                  well as to various young aspirants across the state. The
                  events are categorized into intercollegiate and intra-college
                  to create an atmosphere of maximum exposure to the students.
                  Each year, we host 27 intra-colleges and 30 intercollegiate
                  events, which enable students to showcase their talents in the
                  fields of art, music, literature, dance and theatre, amongst
                  many others. This fest has created a niche for itself in the
                  hearts of the students, and we hope that it continues to do so
                  along with the ever enduring support from the college
                  management.
                </li>
                <li>
                  <p className="font-bold">VTU Annual Youth Festival</p>
                  Every year, VTU organizes one of the most widely participated
                  Cultural Spectacle in Karnataka, at different locations
                  depending on the host college which takes up the
                  responsibility. The finest talent available on campus, in
                  various categories such as Dance, Music, Fine Arts, Literary
                  and Theatre, are assembled before travelling together to the
                  VTU fest destination with the hope of becoming Champions every
                  year! In the 16 VTU Annual Youth Fests held so far, MSRIT has
                  been crowned Overall Champions 2 times and Runners-Up for a
                  whopping 10 times!! For sheer consistency, no other college is
                  yet to match MSRIT.
                </li>
                <li>
                  <p className="font-bold">Other Events on and off-Campus</p>
                  Apart from all other events listed above, there are many more
                  which happen throughout the academic year such as Freshers’
                  Quiz (and many other formal and informal quizzes right through
                  the year), Freshers’ Western Acoustic, Nature Walks and
                  Visits, Movie Screening, Photography Workshops & Photo Walks,
                  etc. Again, apart from these, the twenty-odd clubs in college
                  are free to take part in the fest of any other college
                  throughout India in their spare time. For more information,
                  look under Clubs – you may even contact them for any
                  interaction if you are an aspiring student!
                </li>
              </ul>
            </div>
            <br />
            <div className="font-heading text-lg text-center mb-2">
              STUDENT CLUBS{" "}
            </div>
            <img className="w-full" src="../student-clubs.png" />
          </div>
          <br />{" "}
          <div className="font-heading text-lg text-center mb-2">
            ACHIEVEMENTS{" "}
          </div>
          Over the years, students of MSRIT have participated and won prizes
          galore at the State, National and International levels. MSRIT has
          produced students who have achieved laurels in various forms of Art
          and Entertainment, upon completion of their graduation. Famous
          playback singer Hemanth, Bollywood film director and Improvmaster Saad
          Khan, stand-up artist Kanan Gill, Bollywood actress Komal Jha,
          Television anchors such as Pradyumna, playback singers and stage
          artists such as Raghupathi Jha, Aishwarya Kasinathan, Divya, Adithya
          Srinivasan etc. <br />
          Several individuals and teams from MSRIT who have participated and won
          in some prestigious tournaments and competitions are given below:{" "}
          <br /> <img className="w-full" src="../achievements-students.png" />
          <br />
          <div className="font-heading text-lg text-center mb-2">
            CLOSING REPORTS
          </div>{" "}
          <br />
          <div className="w-full">
            <br />{" "}
            <div className="flex flex-row flex-wrap gap-3 w-full items-center">
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/DECA/DECA_Closing_Report_2016-17.pdf"
              >
                2016-17
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/DECA/DECA_Closing_Report_2017-18.pdf"
              >
                2017-18
              </a>
              <a
                className="text-white leading-tight p-2 w-1/3 rounded-[0.25rem] shadow-lg hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/DECA/DECA_Closing_Report_2018-19.pdf"
              >
                2018-19
              </a>
              <a
                className="text-white leading-tight hover:font-black p-2 w-1/3 rounded-[0.25rem] shadow-lg transition-all hover:shadow-2xl border-[1px] lg:border-none bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah max-w-[30%]"
                href="https://msrit-bucket.s3-us-west-2.amazonaws.com/Supporting/DECA/INSIGNIA_CLOSING_REPORT.pdf"
              >
                STATE LEVEL ANNUAL CULTURAL YOUTH FESTIVAL (2019-20)
              </a>
            </div>
          </div>{" "}
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default Deca;
