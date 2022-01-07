export default function NewsEventsBanner({ deptName }) {
  // function renderMonth(month) {
  //   //console.log(month);
  //   switch (month) {
  //     case "01":
  //       return "Jan";
  //     case "02":
  //       return "Feb";
  //     case "03":
  //       return "Mar";
  //     case "04":
  //       return "Apr";
  //     case "05":
  //       return "May";
  //     case "06":
  //       return "Jun";
  //     case "07":
  //       return "Jul";
  //     case "08":
  //       return "Aug";
  //     case "09":
  //       return "Sep";
  //     case "10":
  //       return "Oct";
  //     case "11":
  //       return "Nov";
  //     case "12":
  //       return "Dec";
  //     default:
  //       return null;
  //   }
  // }
  function dept(name) {
    this.name = name;
  }

  const dep1 = new dept(deptName);
  dept.prototype.toString = function deptToString() {
    return `${this.name}`;
  };

  return (
    <>
      <div className="grid gap-5 grid-cols-12 h-auto lg:h-auto">
        <div className="col-start-1 col-end-13 bg-gray-deptHeader min-h-full">
          <div className="grid gap-5 grid-cols-12 min-h-full">
            <div className="col-span-full lg:col-start-2 lg:col-end-7 bg-bt bg-cover text-center sm:text-2xl font-bold flex">
              <div className=" font-heading lg:text-3xl text-blue-ramaiah h-[100px] m-auto ">
                {dep1.toString().includes("DEPARTMENT") ? (
                  <>
                    {" "}
                    {dep1.toString().substring(0, 13)} <br />{" "}
                    {dep1.toString().substring(14)}{" "}
                  </>
                ) : (
                  dep1.toString()
                )}
              </div>
            </div>
            <div className="col-span-12 lg:col-start-7 lg:col-end-12 inline-flex text-center text-blue-ramaiah pb-2">
              <div className="w-1/2 lg:w-1/2 lg:mr-2">
                {/* <span className="text-xl font-heading ">LATEST NEWS</span>
                  <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white rounded-t-md">
                    {latestNews.map((newsItem, i) => {
                      return (
                        <>
                          <span key={i} className="font-heading lg:text-2xl">
                            {newsItem.publishedDate.substring(8, 10)}
                          </span>
                          <span>
                            {" "}
                            {renderMonth(newsItem.publishedDate.substring(5, 7)) +
                              " " +
                              newsItem.publishedDate.substring(0, 4)}{" "}
                          </span>
                        </>
                      );
                    })}
                  </div>
                  <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500 bg-white rounded-b-md ">
                    {latestNews.map((newsItem, i) => {
                      return (
                        <div key={i}>
                          <a href={newsItem.linkURL}> {newsItem.title}</a>
                        </div>
                      );
                    })}
                  </div> */}
              </div>
              <div className="w-1/2 lg:w-1/2">
                {/* <span className="text-xl font-heading">LATEST EVENTS</span>
                <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white rounded-t-md">
                  {latestEvents.map((eventItem, i) => {
                    return (
                      <>
                        <span key={i} className="font-heading lg:text-2xl">
                          {eventItem.eventStartDate.substring(8, 10)}
                        </span>
                        <span>
                          {" "}
                          {renderMonth(
                            eventItem.eventStartDate.substring(5, 7)
                          ) +
                            " " +
                            eventItem.eventStartDate.substring(0, 4)}{" "}
                        </span>
                        {/* <span> Nov 2021 </span> 
                      </>
                    );
                  })}
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500 bg-white rounded-b-md">
                  {latestEvents.map((eventItem, i) => {
                    return (
                      <div key={i}>
                        <a href={eventItem.linkURL}> {eventItem.title}</a>
                      </div>
                    );
                  })}
                </div> */}
              </div>
              {/* <div className="w-1/2 bg-gray-600">Latest Events</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
