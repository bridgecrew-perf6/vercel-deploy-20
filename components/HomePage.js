import Footer from "./Footer";
import logo from "/assets/images/Institute-of-Technology.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { EmblaCarousel } from "./Carousel";

function HomePage({ latestNews, latestEvents }) {
  const [lnState, setLnState] = useState([...latestNews]);
  const [leState, setLeState] = useState([...latestEvents]);
  const [newsIndex, setNewsIndex] = useState(0);
  const [eventsIndex, setEventsIndex] = useState(0);
  const [menuItemCLicked, setMenuItemClicked] = useState(false);
  const [faciltiesItemClicked, setFaciltiesItemClicked] = useState(false);
  const [aboutItemClicked, setAboutItemClicked] = useState(false);
  const [deptItemClicked, setDeptItemClicked] = useState(false);

  const [NewsItems, setNewsItems] = useState([
    "CHANGE OF BRANCH NOTIFICATION (III SEMESTER)",
    "Dept of Information Science and Engineering, RIT organizes Online Certification Course on Practical Approach of Deep Learning for Artificial Intelligence",
    "KSCST Student Project Programme - 2021 - Best Project of the Year Award",
  ]);
  const [EventItems, setEventItems] = useState([
    "International Conference on Innovative Interventions for Inclusive and Sustainable Business Landscape (IIISBL - 2021) organized by Department of Management Studies, RIT",
    "iot-deathon by Intel Developer Students Club, RIT",
    "My Story Session - A talk by Mr. Arvind Nadig, Co-founder & CEO at Li2 & Brahma3, Alumni of RIT",
  ]);
  const [NewsDates, setNewsDates] = useState([
    "08-Nov-2021",
    "27-Oct-2021",
    "10-Oct-2021",
  ]);
  const [EventDates, setEventDates] = useState([
    "02-Nov-2021",
    "22-Oct-2021",
    "06-Oct-2021",
  ]);
  const [newsItemURL, setNewsItemURL] = useState([
    "https://drive.google.com/file/d/1sgySy98SJ_fovyEnP7p9fquJYcu_bcAV/view?usp=sharing",
    "https://drive.google.com/file/d/1W20Vyr98KyHVo-m3srf78FurQDIC0Ah2/view?usp=sharing",
    "https://drive.google.com/file/d/1eJ_9WBtD9vDkCTcBpOEUjJYL5LNIu7Jn/view?usp=sharing",
  ]);
  const [eventItemURL, setEventItemURL] = useState([
    "https://drive.google.com/file/d/1RgPVsDEdcKi7fnYqoApSFUryveQ-L4Sk/view?usp=sharing",
    "https://drive.google.com/file/d/1FWHMQRLz6gn4NlXgkc7n8qkOWgQSuQA7/view?usp=sharing",
    "https://drive.google.com/file/d/1FHszh7JyBQc7JRrXP8UPdz0tX3DG1Lx9/view?usp=sharing",
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewsIndex((newsIndex + 1) % 3);
      setEventsIndex((eventsIndex + 1) % 3);
    }, 4000);
    return () => clearTimeout(intervalId);
  }, [newsIndex, eventsIndex]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setEventsIndex(eventsIndex + 1);
  //   }, 4000);
  // }, []);

  return (
    <div>
      {/* Home Page Module */}
      <main className="relative">
        {/* Header */}

        <div className="grid grid-cols-12 z-0">
          {/* left-half-div */}
          {/* <div className="col-span-6 bg-homeBanner bg-gray-100 bg-no-repeat bg-cover bg-top opacity-50 bg-blend-luminosity grid grid-rows-3">
            <div></div>
            <div></div>
            <div className="space-y-3 opacity-100 relative">
              
              <div className="h-40 bg-white shadow-2xl mx-auto w-[60%] z-10 before:h-auto before:w-auto before:-top-6 before:absolute before:rounded-t-lg before:text-white before:bg-orange-ramaiah before:z-0 before:content-['Latest_News'] ">
                <div className="p-2 ">
                  <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                    <p className="text-4xl font-extrabold inline-block">26</p>
                    <span>Aug 2021</span>
                  </div>
                  <div className="my-auto">
                    Exam Fee Notification for Supplementary Semester Offline
                    Examinations - B.E./B.Arch III to VIII Sem |
                    MBA/MCA/M.TECH/M.ARCH All Semesters (Theory & Practical) -
                    Sept / Oct 2021
                  </div>
                </div>
              </div>

              
              <div className="h-40 bg-white  shadow-2xl mx-auto w-[60%] ">
                <div className="p-2 ">
                  <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                    <p className="text-4xl font-extrabold inline-block">26</p>
                    <span>Aug 2021</span>
                  </div>
                  <div className="my-auto">
                    Five day Online FDP on "Mathematical Developments in
                    Cryptography and Data Science" by Dept. of Mathematics, RIT.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-span-6 bg-homeBanner bg-gray-homeBannerGray bg-no-repeat bg-cover bg-top bg-blend-luminosity flex flex-col h-[100vh]">
            <div className="h-[25%] flex-shrink"></div>
            <div className="h-[35%] flex-grow"></div>
            <div className="h-[40%] flex-grow">
              <div className="space-y-3 opacity-100 relative">
                {/* <div className="h-40 bg-white shadow-2xl mx-auto w-[60%] z-10 before:h-auto before:w-auto before:-top-6 before:absolute before:rounded-t-lg before:text-white before:bg-orange-ramaiah before:z-0 before:content-['Latest_News'] "> */}
                <div className="flex flex-col my-auto">
                  <div className="bg-blue-ramaiah text-white text-xl px-2 mx-auto text-center">
                    <a href="/latestnews">Latest News</a>
                  </div>
                  <div className="h-auto bg-white shadow-2xl mx-auto w-[60%] z-10">
                    <div className="p-2 ">
                      <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                        <p className="text-4xl font-extrabold inline-block">
                          <ReactTextTransition
                            // text={NewsDates[
                            //   newsIndex % NewsDates.length
                            // ].substr(0, 2)}
                            text={NewsDates[newsIndex].substr(0, 2)}
                            overflow
                            inline
                          />
                        </p>
                        <span>
                          <ReactTextTransition
                            // text={
                            //   NewsDates[newsIndex % NewsDates.length].substr(
                            //     3,
                            //     3
                            //   ) +
                            //   " " +
                            //   NewsDates[newsIndex % NewsDates.length].substr(
                            //     7,
                            //     4
                            //   )
                            // }
                            text={
                              NewsDates[newsIndex].substr(3, 3) +
                              " " +
                              NewsDates[newsIndex].substr(7, 4)
                            }
                            overflow
                            inline
                          />
                        </span>
                      </div>
                      <div className="my-auto">
                        {/* <a
                          href={newsItemURL[newsIndex % NewsDates.length]}
                          target="_blank"
                        >
                          <ReactTextTransition
                            text={NewsItems[newsIndex % NewsItems.length]}
                            overflow
                          />
                        </a> */}
                        <a href={newsItemURL[newsIndex]} target="_blank">
                          <ReactTextTransition
                            text={NewsItems[newsIndex]}
                            overflow
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col my-auto h-[50%]">
                  <div className="bg-blue-ramaiah text-white text-xl px-2 mx-auto text-center h-auto">
                    <a href="/latestevents"> Latest Events</a>
                  </div>

                  <div className="h-auto bg-white shadow-2xl mx-auto w-[60%] ">
                    <div className="p-2 ">
                      <div className=" bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah text-white text-center">
                        <p className="text-4xl font-extrabold inline-block">
                          <ReactTextTransition
                            text={EventDates[
                              eventsIndex % EventDates.length
                            ].substr(0, 2)}
                            overflow
                            inline
                          />
                        </p>
                        <span>
                          <ReactTextTransition
                            text={
                              EventDates[
                                eventsIndex % EventDates.length
                              ].substr(3, 3) +
                              " " +
                              EventDates[
                                eventsIndex % EventDates.length
                              ].substr(7, 4)
                            }
                            overflow
                            inline
                          />
                        </span>
                      </div>
                      <div className="my-auto">
                        <a
                          href={eventItemURL[eventsIndex % EventDates.length]}
                          target="_blank"
                        >
                          <ReactTextTransition
                            text={EventItems[eventsIndex % EventItems.length]}
                            overflow
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right-half-div */}
          {/* <div className="col-span-6 bg-blue-ramaiah grid grid-rows-3">
            <div></div>

            <div className="text-7xl text-white font-semibold leading-[1.125]">
              Open your world to{" "}
              <span className="text-orange-ramaiah border-orange-ramaiah border-b-[1px]">
                OPPORTUNITIES
              </span>{" "}
              <br />
              with us
            </div>

            <div className="space-y-3">
              <div className="flex flex-row justify-evenly flex-wrap border-[1px] border-gray-500">
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              </div>
              <div className="flex flex-row justify-evenly flex-wrap">
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
                <div className="h-40 w-40 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center"></div>
              </div>
            </div>
          </div> */}
          <div className="col-span-6 h-full">
            <EmblaCarousel />
            {/* <Carousel
              plugins={[
                "infinite",
                {
                  options: {
                    interval: 2000,
                  },
                },
              ]}
              animationSpeed={1000}
            >
              <img src="right-side.png" />
              <img src="home-page-banner-2.png" />
            </Carousel> */}

            {/* <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={101}
              totalSlides={2}
              className="max-h-full"
            >
              <Slider>
                <Slide index={0}>
                  <img src="right-side.png" className="h-full w-full" />
                </Slide>
                <Slide index={1}>
                  <img src="home-page-banner-2.png" className="h-full w-full" />
                </Slide>
              </Slider>
              <Dot slide={0}> . </Dot>
              <Dot slide={1}> . </Dot>
            </CarouselProvider> */}

            {/* <div className="h-[25%] flex-shrink"></div>
            <div className="h-[35%] flex-grow">
              <div className="text-7xl text-white font-semibold leading-[1.125]">
                Open your world to{" "}
                <span className="text-orange-ramaiah border-orange-ramaiah border-b-[1px]">
                 {
                    <Typical
                      steps={[
                        "OPPORTUNITIES",
                        10000,
                        "TECHNOLOGY",
                        10000,
                        "INNOVATION",
                        10000,
                      ]}
                      wrapper="p"
                      loop={Infinity}
                    />
                  } 
                </span>{" "}
                <br />
                with us
              </div>
            </div>
            <div className="h-[40%] flex-grow">
              <div className="space-y-5">
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-3">
                    <div className="text-5xl font-heading p-3">
                      65
                      <sup className="font-thin after:content-['th'] after:text-white after:text-3xl"></sup>
                    </div>
                    <div>
                      All India Rank <br />
                      (2021)
                    </div>
                  </div>
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-1">
                    <div className="text-5xl font-heading p-3">Best</div>
                    <div>
                      among VTU <br /> institutions
                    </div>
                  </div>
                  <div className="h-auto w-auto mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-2">
                    <div className="text-5xl font-heading p-3">46</div>
                    <div>
                      Industrial <br /> Collaborations
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-evenly flex-wrap">
                  <div className="h-auto w-auto bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center py-2">
                    <div className="text-5xl font-heading p-3">95%</div>
                    <div>
                      Placement <br /> Average
                    </div>
                  </div>
                  <div className="h-30 w-30 mr-12 bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah border-[1px] border-white rounded-lg text-white text-center p-2">
                    <div className="text-5xl font-heading p-3">350</div>
                    <div>
                      Avg. Publications <br />
                      per year
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <section className="min-w-[80%] flex items-center p-2 justify-between bg-transparent z-10 absolute top-0 left-[10%]">
          <div className="relative lg:w-[300px] lg:h-[100px]">
            <a href="/home">
              <img
                src="../Institute-of-Technology.png"
                alt="Logo"
                className="absolute h-full w-full"
              />
            </a>
          </div>
          <div className="text-white justify-end">
            <nav className="space-x-4 bg-gray-menu bg-opacity-50 p-2 box-border ">
              {/* <a
                className="p-2 border-b-2 border-orange-ramaiah text-blue-ramaiah font-bold"
                href="home"
              >
                Home
              </a> */}
              <div className="inline-block relative">
                <a
                  className="sm:hover:font-bold p-2 cursor-pointer"
                  onMouseOver={() => {
                    setFaciltiesItemClicked(false);
                    setMenuItemClicked(false);
                    setDeptItemClicked(false);
                    setAboutItemClicked(true);
                  }}
                  onClick={() => {
                    setFaciltiesItemClicked(false);
                    setMenuItemClicked(false);
                    setDeptItemClicked(false);
                    setAboutItemClicked(!aboutItemClicked);
                  }}
                >
                  About Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>

                <div
                  className={`lg:absolute lg:top-8 lg:-left-2 lg:drop-shadow-xl lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:w-[200px] lg:p-2 lg:pt-0 lg:z-[5] ${
                    !aboutItemClicked ? "lg:hidden" : "lg:flex"
                  }`}
                  onMouseOut={() => {
                    setFaciltiesItemClicked(false);
                    setMenuItemClicked(false);
                    setDeptItemClicked(false);
                    setAboutItemClicked(false);
                  }}
                >
                  <a
                    href="/about"
                    className="p-2  w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg    "
                    onMouseOver={() => {
                      setFaciltiesItemClicked(false);
                      setMenuItemClicked(false);
                      setDeptItemClicked(false);
                      setAboutItemClicked(true);
                    }}
                  >
                    Overview
                  </a>
                  <a
                    href="/about#evolution"
                    className="p-2 w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                    onMouseOver={() => {
                      setFaciltiesItemClicked(false);
                      setMenuItemClicked(false);
                      setDeptItemClicked(false);
                      setAboutItemClicked(true);
                    }}
                  >
                    Evolution
                  </a>
                  <a
                    href="/about/governance"
                    className="p-2 w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                    onMouseOver={() => {
                      setFaciltiesItemClicked(false);
                      setMenuItemClicked(false);
                      setDeptItemClicked(false);
                      setAboutItemClicked(true);
                    }}
                  >
                    Governance
                  </a>
                  {/* <a
                        href="/facilities/fitness-center"
                        className="p-2 w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                        onMouseOver={() => {
                          setDeptItemClicked(false);
                        }}
                      >
                       Board of Management
                      </a> */}
                  <a
                    href="/about/other-committees"
                    className="p-2 w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                    onMouseOver={() => {
                      setFaciltiesItemClicked(false);
                      setMenuItemClicked(false);
                      setDeptItemClicked(false);
                      setAboutItemClicked(true);
                    }}
                  >
                    Other Committees
                  </a>
                </div>
              </div>
              <a
                className="sm:hover:font-bold p-2"
                href="/admission"
                onMouseOver={() => {
                  setFaciltiesItemClicked(false);
                  setDeptItemClicked(false);
                  setMenuItemClicked(false);
                  setAboutItemClicked(false);
                }}
                onClick={() => {
                  setFaciltiesItemClicked(false);
                  setDeptItemClicked(false);
                  setMenuItemClicked(false);
                  setAboutItemClicked(false);
                }}
              >
                Admissions
              </a>
              <div className="inline-block relative">
                <a
                  className="sm:hover:font-bold p-2 cursor-pointer"
                  onMouseOver={() => {
                    setMenuItemClicked(!menuItemCLicked);
                    setDeptItemClicked(false);
                    setFaciltiesItemClicked(false);
                    setAboutItemClicked(false);
                  }}
                  onClick={() => {
                    setMenuItemClicked(!menuItemCLicked);
                    setFaciltiesItemClicked(false);
                    setDeptItemClicked(false);
                    setAboutItemClicked(false);
                  }}
                >
                  Academics
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>

                <div
                  className={`lg:absolute lg:top-8 lg:min-h-[100px] lg:bg-[#7c688d] lg:text-white lg:w-[205px] lg:p-2 lg:pt-0 lg:z-[5] ${
                    !menuItemCLicked ? "lg:hidden " : "lg:flex lg:flex-col"
                  }`}
                >
                  <div className="relative w-[180px]">
                    <div className="flex flex-row items-center mb-2 w-full">
                      <div className="w-full flex-grow inline-flex">
                        <a
                          className={`p-2 cursor-default min-w-full lg:hover:bg-gradient-to-r lg:hover:from-pink-ramaiah lg:hover:to-orange-ramaiah ${
                            deptItemClicked
                              ? "lg:rounded-lg lg:bg-gradient-to-r lg:from-pink-ramaiah "
                              : " "
                          } `}
                          onMouseOver={() => {
                            setFaciltiesItemClicked(false);
                            setDeptItemClicked(true);
                            setAboutItemClicked(false);
                          }}
                          onClick={() => {
                            setFaciltiesItemClicked(false);
                            setDeptItemClicked(!deptItemClicked);
                            setAboutItemClicked(false);
                          }}
                        >
                          Departments{" "}
                        </a>{" "}
                      </div>
                      <div className="ml-auto">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>{" "}
                        </span>
                      </div>
                      {/* </p> */}
                    </div>
                    <div
                      onMouseOver={() => {
                        setFaciltiesItemClicked(false);
                        setDeptItemClicked(true);
                        setAboutItemClicked(false);
                      }}
                      onMouseOut={() => {
                        setFaciltiesItemClicked(false);
                        setDeptItemClicked(false);
                        setAboutItemClicked(false);
                      }}
                      className={`lg:absolute lg:left-[104%] lg:top-0 lg:max-h-[300px] lg:overflow-y-scroll lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:min-w-[20vw] lg:p-2 lg:pt-0 lg:z-[5] ${
                        !deptItemClicked ? "lg:hidden" : "lg:flex"
                      }`}
                    >
                      {" "}
                      <div>
                        <a
                          className=" cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/ar"
                        >
                          Architecture
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="#"
                        >
                          Artificial Intelligence & Data Science
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="#"
                        >
                          Artificial Intelligence & Machine Learning
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/bt"
                        >
                          Biotechnology
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/ch"
                        >
                          Chemical Engineering
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/chy"
                        >
                          Chemistry
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/cv"
                        >
                          Civil Engineering
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/cse"
                        >
                          Computer Science & Engg.
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="#"
                        >
                          Computer Science & Engg. (AI & ML)
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="#"
                        >
                          Computer Science & Engg. (Cyber Security)
                        </a>{" "}
                        {/* </div>
                      <div className="min-w-1/2"> */}{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/eee"
                        >
                          Electrical & Electronics Engg.
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/ece"
                        >
                          {" "}
                          Electronics & Communications Engg.
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/eie"
                        >
                          {" "}
                          Electronics & Instrumentation Engg.
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/ete"
                        >
                          Electronics & Telecommunications Engg.
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/hss"
                        >
                          Humanities
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/iem"
                        >
                          Industrial Engineering & Mgmt
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/ise"
                        >
                          Information Science & Engg.
                        </a>{" "}
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/mat"
                        >
                          Mathematics
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/mech"
                        >
                          Mechanical Engineering
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/ml"
                        >
                          Medical Electronics Engg.
                        </a>
                        <a
                          className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                          href="/dept/phy"
                        >
                          Physics
                        </a>{" "}
                      </div>
                    </div>{" "}
                  </div>
                  <a
                    href=""
                    className="p-2 w-full leading-tight lg:hover:bg-gradient-to-r lg:hover:from-pink-ramaiah lg:hover:to-orange-ramaiah lg:hover:rounded-lg"
                    onMouseOver={() => {
                      setFaciltiesItemClicked(false);
                      setDeptItemClicked(false);
                      setAboutItemClicked(false);
                      setMenuItemClicked(true);
                    }}
                  >
                    Centres of Excellence
                  </a>
                  <a
                    href=""
                    className="p-2 w-full lg:hover:bg-gradient-to-r lg:hover:from-pink-ramaiah lg:hover:to-orange-ramaiah lg:hover:rounded-lg"
                    onMouseOver={() => {
                      setFaciltiesItemClicked(false);
                      setDeptItemClicked(false);
                      setAboutItemClicked(false);
                      setMenuItemClicked(true);
                    }}
                  >
                    Ph.D
                  </a>
                </div>
              </div>
              <div className="inline-block relative">
                <a
                  className="sm:hover:font-bold p-2 cursor-pointer"
                  onMouseOver={() => {
                    setFaciltiesItemClicked(!faciltiesItemClicked);
                    setMenuItemClicked(false);
                    setDeptItemClicked(false);
                    setAboutItemClicked(false);
                  }}
                  onClick={() => {
                    setFaciltiesItemClicked(!faciltiesItemClicked);
                    setMenuItemClicked(false);
                    setDeptItemClicked(false);
                    setAboutItemClicked(false);
                  }}
                >
                  Facilites
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>

                <div
                  className={`lg:absolute lg:top-8 lg:drop-shadow-xl lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:w-[200px] lg:p-2 lg:pt-0 lg:z-[5] ${
                    !faciltiesItemClicked ? "lg:hidden" : "lg:flex"
                  }`}
                >
                  <a
                    href="/facilities/library"
                    className="p-2  w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg    "
                    onMouseOver={() => {
                      setDeptItemClicked(false);
                      setAboutItemClicked(false);
                      setFaciltiesItemClicked(true);
                    }}
                  >
                    Library
                  </a>
                  <a
                    href="/facilities/hostel"
                    className="p-2 w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                    onMouseOver={() => {
                      setDeptItemClicked(false);
                      setAboutItemClicked(false);
                      setFaciltiesItemClicked(true);
                    }}
                  >
                    Hostel
                  </a>
                  <a
                    href="/facilities/internet"
                    className="p-2 w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                    onMouseOver={() => {
                      setDeptItemClicked(false);
                      setAboutItemClicked(false);
                      setFaciltiesItemClicked(true);
                    }}
                  >
                    Internet Center
                  </a>
                  <a
                    href="/facilities/fitness-center"
                    className="p-2 w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                    onMouseOver={() => {
                      setDeptItemClicked(false);
                      setAboutItemClicked(false);
                      setFaciltiesItemClicked(true);
                    }}
                  >
                    Fitness Center
                  </a>
                  <a
                    href="/facilities/others"
                    className="p-2 w-full hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                    onMouseOver={() => {
                      setDeptItemClicked(false);
                      setAboutItemClicked(false);
                      setFaciltiesItemClicked(true);
                    }}
                  >
                    Other Facilities
                  </a>
                </div>
              </div>
              <a
                className="sm:hover:font-bold p-2"
                href="/exam"
                onMouseOver={() => {
                  setFaciltiesItemClicked(false);
                  setDeptItemClicked(false);
                  setMenuItemClicked(false);
                  setAboutItemClicked(false);
                }}
              >
                Examination
              </a>
              <a
                className="sm:hover:font-bold p-2"
                href="/placement"
                onMouseOver={() => {
                  setFaciltiesItemClicked(false);
                  setDeptItemClicked(false);
                  setMenuItemClicked(false);
                  setAboutItemClicked(false);
                }}
              >
                Placement
              </a>
              <a
                className="sm:hover:font-bold p-2"
                href="http://msrit.edu/skill-labs.html"
                onMouseOver={() => {
                  setFaciltiesItemClicked(false);
                  setDeptItemClicked(false);
                  setMenuItemClicked(false);
                  setAboutItemClicked(false);
                }}
              >
                Skill Labs
              </a>
              <a
                className="sm:hover:font-bold p-2"
                href="/contact"
                onMouseOver={() => {
                  setFaciltiesItemClicked(false);
                  setDeptItemClicked(false);
                  setMenuItemClicked(false);
                  setAboutItemClicked(false);
                }}
              >
                Contact
              </a>
              {/* <div
                className={`lg:absolute lg:top-20 lg:left-4 lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:w-auto lg:p-2 lg:pt-0 lg:z-[5] ${
                  !menuItemCLicked ? "lg:hidden" : "lg:flex"
                }`}
              > */}
              {/* <div className="flex-grow w-full lg:border-t-8 lg:border-pink-ramaiah">
                  {" "}
                </div> */}

              {/* <div className="text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col">
                  <div className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded">
                    {" "}
                    Departments{" "}
                  </div>
                  <br />{" "}
                  <div className="flex flex-col border-t-2 flex-grow-0 text-sm">
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Architecture
                    </a>
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Artificial Intelligence & Machine Learning
                    </a>
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Artificial Intelligence & Data Science
                    </a>
                    <a
                      className="lg:hover:text-blue-ramaiah lg:cursor-pointer"
                      href="/"
                    >
                      Biotechnology
                    </a>{" "}
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Chemical Engineering
                    </a>
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Civil Engineering
                    </a>
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Computer Science & Engg.
                    </a>{" "}
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Computer Science & Engg. (AI & ML)
                    </a>
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Computer Science & Engg. (Cyber Security)
                    </a>
                  </div>{" "}
                </div>
                <div className="text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col">
                  {" "}
                  <div className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded">
                    {" "}
                    Departments{" "}
                  </div>
                  <br />{" "}
                  <div className="flex flex-col border-t-2 border-white text-sm">
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Electrical & Electronics Engg.
                    </a>{" "}
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      {" "}
                      Electronics & Communications Engg.
                    </a>{" "}
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Electronics & Instrumentation Engg.
                    </a>{" "}
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Electronics & Telecommunications Engg.
                    </a>{" "}
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Information Science & Engg.
                    </a>{" "}
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Industrial Engineering & Mgmt
                    </a>{" "}
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Mechanical Engineering
                    </a>
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Medical Electronics Engg.
                    </a>{" "}
                  </div>{" "}
                </div>
                <div className="text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col">
                  <div className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded">
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Centres of Excellence
                    </a>{" "}
                  </div>
                </div>
                <div className="text-base cursor-default w-1/2 border-[0.5px] text-center border-white rounded flex flex-col">
                  <div className="bg-gradient-to-r from-pink-ramaiah to-orange-ramaiah rounded">
                    <a className="lg:hover:text-blue-ramaiah lg:cursor-pointer">
                      Ph.D
                    </a>{" "}
                  </div>
                </div> */}
              {/* </div> */}
            </nav>
          </div>
        </section>

        {/* Virtual Tour Module */}
        <section className="bg-gray-homeSection h-[60vh] text-center ">
          <div className="text-blue-ramaiah underline capitalize font-heading text-4xl w-[65%] mx-auto h-full space-y-3 py-3">
            Virtual Tour
            <br />
            <iframe
              src="https://www.easytourz.com/BT-EmabedTour/all/87002a26d035a1f7"
              width="100%"
              height="90%"
              webkitallowfullscreen=""
              mozallowfullscreen=""
              allowFullScreen=""
            ></iframe>
          </div>
        </section>

        {/* Jnanam Vigyanam Module */}
        <div className="bg-homeBannerJnanam h-auto bg-no-repeat bg-cover bg-bottom space-y-3 py-3">
          <div className="mx-auto">
            <img src="sam-msr.png" className="mx-auto"></img>
          </div>
          <div className="flex w-full mx-auto justify-center space-x-8">
            <div className="">
              <img src="msr.png" className="rounded-full" />
            </div>
            <div className="text-white max-w-[30%] self-center space-y-10">
              <div className="italic text-5xl font-bold">
                A Tribute to Dr. M. S. Ramaiah{" "}
              </div>
              <div>
                “What we have done for ourselves alone dies with us. What we
                have done for others and the world remains and is immortal.”
              </div>
              <button className="bg-orange-ramaiah p-2 text-white text-lg">
                EXPLORE BOARD OF MANAGEMENT
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
