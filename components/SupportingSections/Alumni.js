function Alumni() {
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
            ALUMNI
          </div>{" "}
          <br />
          <div className="text-justify">
            {" "}
            <p className="mb-2">
              {" "}
              The MSRIT Alumni Association (MSRITAA) was formally established in
              July 1998, owing to the painstaking efforts and initiative of our
              former principal, Prof. B Krishnappa. A seed committee was formed
              and Mr. Shankar Prasad became the first President of MSRITAA. The
              committee held a membership drive and the first ever alumni meet
              was organized in 2001.
            </p>
            <p className="mb-2">
              An executive committee consisting of the then Principal of MSRIT,
              Dr. K S Ramanatha, acting as the Rector and Shri Tallam Venkatesh
              as the President, along with two Vice Presidents, two Secretaries,
              one Treasurer, and eight other members was created to give this
              endeavor the inspiration and encouragement it needed.
            </p>
            <p className="mb-2">
              MSRIT local Chapters at Andhra Pradesh, Tamil Nadu, Cochin, Delhi,
              Patna, Dubai are conducting various activities which has succeeded
              in bringing most of the MSRITians of their region together. The
              main objectives MSRIT Alumni Association are:
            </p>
            <ul className="list-decimal ml-7">
              <li>
                To serve as a forum to promote and foster relationship among the
                alumni, the present students, the staff and the management of
                MSRIT.
              </li>
              <li>
                To help the Alma Mater in its effort to achieve excellence in
                technical and professional education.
              </li>
              <li>
                To actively and constructively participate in the well-being of
                the MSRIT, by utilizing the good-will, rich experience and
                services of the alumni who are a fraternity of professional
                engineers of various disciplines spread all over the world.
              </li>
              <li>
                To institute scholarships, revolving loan fund, prizes/medals
                etc., for the deserving students of MSRIT.
              </li>
              <li>
                To maintain continuous interaction between the past and present
                students by publishing a newsletter, holding periodical Alumni
                Day celebration or by any other means as decided by the
                association.
              </li>
              <li>
                To contribute towards improving entrepreneurship development
                activities, campus placements, library and centers of excellence
                at MSRIT.
              </li>
              <li>
                To arrange lectures by eminent alumni and other eminent
                personalities for the benefit of students and alumni.
              </li>
            </ul>{" "}
            <br />
            MSRIT has produced many illustrious alumni, whose contributions at
            national and international levels have been significant. Alumni of
            MSRIT in particular have excelled and acquired positions of eminence
            in every field imaginable-from engineering to finance to management
            to even arts. Renowned scientists, successful entrepreneurs and
            managers and leaders of society, our alumni have made us proud time
            and again.
            <br />
            <br />
            Link to the MSRIT alumni website <br />
            Website:{" "}
            <a
              className="hover:font-bold transition-all"
              href="http://www.msritalumni.com/"
            >
              http://www.msritalumni.com/
            </a>
          </div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default Alumni;
