function FacilitiesInternet() {
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
          <div
            className="font-heading text-lg text-center mb-2"
            id="facilities"
          >
            {" "}
            NETWORK & INTERNET CENTER
          </div>{" "}
          <div className="text-justify">
            {" "}
            <p className="">
              Network and Internet Center is where all the important servers are
              located in a safe and secure place. The data center is
              air-conditioned with adequate power backup. Internet Gateway is
              also located here. The institute has an Internet connection of
              1800Mbps at 1:1 compression on fiber handout. The internet
              connection is controlled and regulated by using a UTM device,
              contains an antivirus and antispam database. Some of the important
              servers in NIC are
            </p>
          </div>
          <ol className="list-decimal ml-7">
            <li>Web Servers </li>

            <li>Student Information System </li>

            <li>Biometric Attendance System </li>

            <li>DHCP Server </li>

            <li>DNS Server </li>

            <li>BBWT AMS </li>

            <li>LDAP Server </li>

            <li>Moodle/elearning server </li>
          </ol>
          <div className="text-right">
            <a
              className="sm:font-bold sm:hover:text-orange-ramaiah"
              href="https://d2e9h3gjmozu47.cloudfront.net/Infrastructure/Internet/NETWORK+AND+INTERNET+CENTER.pdf"
              target="_blank"
            >
              Read More >
            </a>
          </div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default FacilitiesInternet;
