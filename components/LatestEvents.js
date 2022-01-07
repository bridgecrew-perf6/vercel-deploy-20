function LatestEvents({ data }) {
  function renderMonth(month) {
    //console.log(month);
    switch (month) {
      case "01":
        return "Jan";
      case "02":
        return "Feb";
      case "03":
        return "Mar";
      case "04":
        return "Apr";
      case "05":
        return "May";
      case "06":
        return "Jun";
      case "07":
        return "Jul";
      case "08":
        return "Aug";
      case "09":
        return "Sep";
      case "10":
        return "Oct";
      case "11":
        return "Nov";
      case "12":
        return "Dec";
      default:
        return null;
    }
  }
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
            LATEST EVENTS
          </div>{" "}
          <div className="text-justify">
            {data.map((item, i) => (
              <div
                key={i}
                className="w-full shadow-md rounded-md border-2 border-blue-ramaiah p-2 mb-2 flex space-x-2 items-start"
              >
                <div className="w-[15%] mr-2 bg-gradient-to-b from-orange-ramaiah to-pink-ramaiah text-white flex flex-col space-y-1  text-center rounded-md">
                  <div className="font-bold font-heading">
                    {item.eventStartDate?.substring(8, 10)}
                  </div>
                  <div className="">
                    {" "}
                    {renderMonth(item.eventStartDate?.substring(5, 7))}
                  </div>
                  <div className="">{item.eventStartDate?.substring(0, 4)}</div>
                </div>
                <div className="w-[83%]">
                  <a href={item.linkURL}> {item.title}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default LatestEvents;
