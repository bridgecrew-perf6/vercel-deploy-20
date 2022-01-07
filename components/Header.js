import Image from "next/image";
import { useState } from "react";
import logo from "/assets/images/Institute-of-Technology-transparent-bkg.png";

export default function Header() {
  const [menuItemCLicked, setMenuItemClicked] = useState(false);
  const [faciltiesItemClicked, setFaciltiesItemClicked] = useState(false);
  const [aboutItemClicked, setAboutItemClicked] = useState(false);
  const [deptItemClicked, setDeptItemClicked] = useState(false);

  return (
    <>
      <div className="grid gap-5 grid-cols-12">
        <div className="col-start-1 col-end-13 bg-blue-ramaiah h-auto">
          <div className="grid gap-5 grid-cols-12 h-auto">
            <div className="col-start-2 col-end-12 bg-blue-ramaiah">
              <div className="flex flex-row justify-between items-center content-center">
                <div className="hidden lg:inline-block lg:h-5/6 lg:w-auto ">
                  <a href="/">
                    <img
                      src="/Institute-of-Technology-transparent-bkg.png"
                      alt="Logo"
                      layout="fixed"
                      className="h-[90px] py-2"
                    />
                  </a>
                </div>
                <div className="h-20 w-[10rem] lg:hidden relative">
                  <a href="/">
                    <Image
                      src={logo}
                      alt="Logo"
                      layout="fill"
                      className="absolute"
                    />
                  </a>
                </div>
                {/* <nav className="w-auto p-2 bg-gray-menu bg-opacity-50 space-x-4 text-base text-white hidden lg:inline-flex lg:relative"> */}
                <nav className="space-x-4 bg-gray-menu bg-opacity-50 p-2 box-border text-white  items-center hidden lg:inline-flex lg:relative ">
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
                      className={`lg:absolute lg:top-10 lg:-left-2 lg:drop-shadow-xl lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:w-[200px] lg:p-2 lg:pt-0 lg:z-[5] ${
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
                  {/* <a
                    className="sm:hover:font-bold p-2"
                    href="/about"
                    onMouseOver={() => {
                      setFaciltiesItemClicked(false);
                      setDeptItemClicked(false);
                      setMenuItemClicked(false);
                    }}
                    onClick={() => {
                      setFaciltiesItemClicked(false);
                      setDeptItemClicked(false);
                      setMenuItemClicked(false);
                    }}
                  >
                    About Us
                  </a> */}
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
                      className={`lg:absolute lg:top-[2.5rem] lg:min-h-[100px] lg:bg-[#7c688d] lg:text-white lg:w-[205px] lg:p-2 lg:pt-0 lg:z-[5] ${
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
                          className={`lg:absolute lg:left-[104%] lg:top-0 lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:min-w-[20vw] lg:p-2 lg:pt-0 lg:z-[5] ${
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
                              href="/dept/mech"
                            >
                              Mechanical Engineering
                            </a>
                            <a
                              className=" lg:cursor-pointer lg:block lg:p-2 hover:bg-gradient-to-r hover:from-pink-ramaiah hover:to-orange-ramaiah hover:rounded-lg"
                              href="/dept/ml"
                            >
                              Medical Electronics Engg.
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
                      className={`lg:absolute lg:top-10 lg:drop-shadow-xl lg:min-h-[100px] lg:bg-[#7c688d] lg:flex-wrap lg:text-white lg:w-[200px] lg:p-2 lg:pt-0 lg:z-[5] ${
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

                  {/* <a className="sm:hover:font-bold p-2" href="/contact">
                    Contact
                  </a> */}
                </nav>
                <nav className="text-xl text-white inline-flex lg:hidden cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
