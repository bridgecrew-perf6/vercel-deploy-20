function OtherCommittees() {
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
            OTHER COMMITTEES
          </div>{" "}
          <br />
          <div className="text-justify w-full">
            {" "}
            <div className="font-heading text-center text-lg">
              {" "}
              GOVERNING BODY
            </div>{" "}
            <br />
            <img
              src="../../governing-body-main.png"
              className="w-full object-cover text-justify"
            />
            <br />
            <div className="font-heading text-lg"> FINANCE COMMITTEE</div>{" "}
            <br />
            <img src="../../finance-committee.png" />
            <br />
            <div className="font-heading text-lg"> ACADEMIC COUNCIL</div> <br />
            <img src="../../aca-council-int-main.png" />
            <br />
            <div className="font-heading text-lg">
              {" "}
              GRIEVANCE REDRESSAL COMMITTEE
            </div>{" "}
            <br />
            <img src="../../grievance-redressal-main.png" /> <br />
          </div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default OtherCommittees;
