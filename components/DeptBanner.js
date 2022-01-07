import { useState, useEffect } from "react";
import { extractProps } from "react-magnific-popup/lib/utils";
import ReactTextTransition, { presets } from "react-text-transition";

export default function DeptBanner({
  latestNews,
  latestEvents,
  deptName,
  bkg,
}) {
  const [latestNewsState, setLatestNewsState] = useState(latestNews);
  const [latestEventsState, setLatestEventsState] = useState(latestEvents);
  const [lnDatesState, setLnDatesState] = useState([]);
  const [lnUrlState, setLnUrlState] = useState([]);
  const [lnTextState, setLnTextState] = useState([]);
  const [leDatesState, setLeDatesState] = useState([]);
  const [leUrlState, setLeUrlState] = useState([]);
  const [leTextState, setLeTextState] = useState([]);
  const [newsIndex, setNewsIndex] = useState(0);
  const [eventsIndex, setEventsIndex] = useState(0);

  useEffect(() => {
    doLatestNews(latestNews);
    doLatestEvents(latestEvents);
    // timerInc();
    const intervalId = setInterval(() => {
      setNewsIndex((newsIndex) => (newsIndex + 1) % 3);
      setEventsIndex((eventsIndex) => (eventsIndex + 1) % 3);
    }, 4000);
    return () => clearTimeout(intervalId);
  }, []);
  //}, [newsIndex, eventsIndex]);

  // function timerInc() {
  //   setInterval(() => {
  //     let nni = newsIndex + 1;
  //     let nei = eventsIndex + 1;
  //     setNewsIndex(nni % 3);
  //     setEventsIndex(nei % 3);
  //   }, 4000);
  // }

  function doLatestNews(latestNewsObj) {
    setLnTextState([
      ...latestNewsObj?.map((newsItem, i) => {
        return newsItem.title;
      }),
    ]);

    setLnUrlState([
      ...latestNewsObj?.map((newsItem, i) => {
        return newsItem.linkURL;
      }),
    ]);
    setLnDatesState([
      ...latestNewsObj?.map((newsItem, i) => {
        const extractedContent = {
          date: newsItem.publishedDate.substring(8, 10),
          month: renderMonth(newsItem.publishedDate.substring(5, 7)),
          year: newsItem.publishedDate.substring(0, 4),
        };

        return {
          datesJoined:
            extractedContent.date.toString() +
            " " +
            extractedContent.month.toString() +
            " " +
            extractedContent.year.toString(),
        };
      }),
    ]);
    console.log(lnUrlState);
    // (
    //   <>
    //     <span key={i} className="font-heading lg:text-2xl">
    //       {newsItem.publishedDate.substring(8, 10)}
    //     </span>
    //     <span>
    //       {" "}
    //       {renderMonth(newsItem.publishedDate.substring(5, 7)) +
    //         " " +
    //         newsItem.publishedDate.substring(0, 4)}{" "}
    //     </span>
    //   </>
    // );
  }

  function doLatestEvents(latestEventsObj) {
    console.log(latestEventsObj);
    setLeTextState([
      ...latestEventsObj?.map((eventItem, i) => {
        return eventItem.title;
      }),
    ]);

    setLeUrlState([
      ...latestEventsObj?.map((eventItem, i) => {
        return eventItem.linkURL;
      }),
    ]);
    setLeDatesState([
      ...latestEventsObj.map((eventItem, i) => {
        const extractedContent = {
          date: eventItem.eventStartDate?.substring(8, 10),
          month: renderMonth(eventItem.eventStartDate?.substring(5, 7)),
          year: eventItem.eventStartDate?.substring(0, 4),
        };

        return {
          datesJoined:
            extractedContent.date?.toString() +
            " " +
            extractedContent.month?.toString() +
            " " +
            extractedContent.year?.toString(),
        };
      }),
    ]);
    console.log(leDatesState);
    // (
    //   <>
    //     <span key={i} className="font-heading lg:text-2xl">
    //       {newsItem.publishedDate.substring(8, 10)}
    //     </span>
    //     <span>
    //       {" "}
    //       {renderMonth(newsItem.publishedDate.substring(5, 7)) +
    //         " " +
    //         newsItem.publishedDate.substring(0, 4)}{" "}
    //     </span>
    //   </>
    // );
  }

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
            <div
              className={`col-span-full lg:col-start-2 lg:col-end-7 bg-cover text-center sm:text-2xl font-bold flex ${bkg} `}
            >
              <div className="m-auto font-heading lg:text-3xl text-blue-ramaiah">
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
                <span className="text-xl font-heading ">LATEST NEWS</span>
                <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white rounded-t-md">
                  {/* {latestNews?.map((newsItem, i) => {
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
                  })} */}
                  <p className="text-xl font-bold inline-block">
                    <ReactTextTransition
                      // text={NewsDates[
                      //   newsIndex % NewsDates.length
                      // ].substr(0, 2)}
                      text={
                        lnDatesState[newsIndex]
                          ? lnDatesState[newsIndex].datesJoined
                          : ""
                      }
                      overflow
                      inline
                    />
                  </p>
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500 bg-white rounded-b-md ">
                  {/* {latestNews?.map((newsItem, i) => {
                    return (
                      <div key={i}>
                        <a href={newsItem.linkURL}> {newsItem.title}</a>
                      </div>
                    );
                  })} */}
                  <div className="lg:h-[100px] truncate">
                    <a
                      href={lnUrlState[newsIndex] ? lnUrlState[newsIndex] : ""}
                      target="_blank"
                    >
                      <ReactTextTransition
                        text={
                          lnTextState[newsIndex] ? lnTextState[newsIndex] : ""
                        }
                        overflow
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/2">
                <span className="text-xl font-heading">LATEST EVENTS</span>
                <div className="bg-gradient-to-r to-orange-ramaiah from-pink-ramaiah text-white rounded-t-md">
                  {/* {latestEvents?.map((eventItem, i) => {
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
                       
                      </>
                    );
                  })} */}
                  <p className="text-xl font-bold inline-block">
                    <ReactTextTransition
                      // text={NewsDates[
                      //   newsIndex % NewsDates.length
                      // ].substr(0, 2)}
                      text={
                        leDatesState[eventsIndex]
                          ? leDatesState[eventsIndex].datesJoined
                          : ""
                      }
                      overflow
                      inline
                    />
                  </p>
                </div>
                <div className="border-b-[1px] border-l-[1px] border-r-[1px] border-gray-500 bg-white rounded-b-md">
                  {/* {latestEvents?.map((eventItem, i) => {
                    return (
                      <div key={i}>
                        <a href={eventItem.linkURL}> {eventItem.title}</a>
                      </div>
                    );
                  })} */}
                  <div className="h-[100px] truncate">
                    <a
                      href={
                        leUrlState[eventsIndex] ? leUrlState[eventsIndex] : ""
                      }
                      target="_blank"
                    >
                      <ReactTextTransition
                        text={
                          leTextState[eventsIndex]
                            ? leTextState[eventsIndex]
                            : ""
                        }
                        overflow
                        className=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="w-1/2 bg-gray-600">Latest Events</div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
