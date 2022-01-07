import { useRef } from "react";

function Governance() {
  //   const modal = Document.getElementById("my-modal");

  //   const btn = Document.getElementById("open-btn");

  //   const button = Document.getElementById("ok-btn");

  const mrjRef = useRef(null);
  const mrsRef = useRef(null);
  const mrrRef = useRef(null);
  const ceRef = useRef(null);
  const nvrRef = useRef(null);
  const rajRef = useRef(null);

  //   btn.onclick = function () {
  //     modal.style.display = "block";
  //   };
  // We want the modal to close when the OK button is clicked
  //   button.onclick = function () {
  //     modal.style.display = "none";
  //   };

  //   window.onClick = function (event) {
  //     if (event.target == modalRef) {
  //       modalRef.current.style.display = "none";
  //     }
  //   };

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
          <div className="font-heading text-xl text-center mb-2" id="qip">
            {" "}
            GOVERNANCE AT RIT
          </div>{" "}
          <br />
          <div className="text-justify w-full">
            {" "}
            <div className="font-heading text-center text-lg">
              {" "}
              DR. M. S. RAMAIAH <br />
              <p className="font-lightBody text-gray-500">
                "A True Karma Yogi"
              </p>
            </div>{" "}
            <br />
            <img
              src="../../msr.png"
              className="mx-auto object-cover text-justify"
            />
            <br />
            <p>
              <span className="font-bold text-lg">
                FOUNDER OF M.S. RAMAIAH INSTITUTE OF TECHNOLOGY
              </span>{" "}
              <br />
              Dr. M.S. Ramaiah, a visionary, educationist, industrialist and
              philanthropist founded “Gokula Education Foundation (GEF)” in the
              year 1962 and under the aegis of this foundation was born “M.S.
              Ramaiah Institute of Technology (MSRIT)” in the same year. Dr.
              M.S. Ramaiah, a successful entrepreneur by the end of the first
              decade after independence, realized that the socio-political and
              economic edifice of this country must be built on the solid base
              of education. At that time, the opportunities for professional
              education, be it in Engineering field or in Medical field, were
              too limited to fulfill the aspirations of the large number of
              bright and talented students of this country. It was in this
              context that Dr. M.S. Ramaiah established the GEF and under its
              aegis MSRIT, a pioneering effort in the area of private,
              self-financed technical education system. His vision, ideals and
              goals, which were implicit in the functioning of GEF, are
              reflected in the articulation of the mission of GEF. Today
              eighteen institutions, including MSRIT, are successfully running
              under the umbrella of GEF.
            </p>{" "}
            <br />
            <div className="font-heading text-lg"> TRUSTEES</div> <br />
            <div className="flex flex-row flex-wrap space-x-3 justify-between">
              <div className="leading-tight">
                <img src="../../mrj.jpg" />
                <br />
                {/* <p className="italic font-bold">Dr. M. R. Jayaram</p> */}
                <button
                  id="mrj"
                  type="button"
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                  onClick={() => {
                    mrjRef.current.style.display = "block";
                  }}
                >
                  Dr. M. R. Jayaram
                </button>{" "}
                <p className="text-sm">Chairman</p>
                <p className="text-sm">Gokula Education Foundation</p>
              </div>

              <div className="leading-tight">
                <img src="../../mrs.jpg" />
                <br />
                {/* <p className="italic font-bold">Sri. M. R. Seetharam, MLC</p> */}
                <button
                  type="button"
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                  onClick={() => {
                    mrsRef.current.style.display = "block";
                  }}
                >
                  Sri. M. R. Seetharam, MLC
                </button>
                <p className="text-sm">Vice-Chairman, GEF and Director</p>
                <p className="text-sm">Ramaiah Institute of Technology</p>
              </div>

              <div className="leading-tight">
                <img src="../../mrr.jpg" />
                <br />
                {/* <p className="italic font-bold">Sri. M. R. Ramaiah</p> */}
                <button
                  type="button"
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                  onClick={() => {
                    mrrRef.current.style.display = "block";
                  }}
                >
                  Sri. M. R. Ramaiah
                </button>
                <p className="text-sm">Secretary, GEF and Director</p>
                <p className="text-sm">Ramaiah Institute of Technology</p>
              </div>
            </div>
            <br />
            <div className="font-heading text-lg"> LEADERSHIP</div> <br />
            <div className="flex flex-row flex-wrap space-x-8 justify-start">
              <div className="leading-tight">
                <img src="../../razdan.jpg" className="w-[250px] h-[180px]" />
                <br />
                {/* <p className="italic font-bold">Dr. N. V. R. Naidu</p> */}
                <button
                  type="button"
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                  onClick={() => {
                    rajRef.current.style.display = "block";
                  }}
                >
                  Dr. P. N. Razdan
                </button>
                <p className="text-sm">Principal Advisor</p>
                <p className="text-sm">
                  Quality Assurance & Excellence Cell, GEF{" "}
                </p>
              </div>
              <div className="leading-tight">
                <img src="../../new-ce.jpg" className="w-[250px] h-[180px]" />{" "}
                <br />
                {/* <p className="italic font-bold">Shri B. S. Ramaprasad</p> */}
                <button
                  type="button"
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                  onClick={() => {
                    ceRef.current.style.display = "block";
                  }}
                >
                  Shri B. S. Ramaprasad
                </button>
                <p className="text-sm">Chief Executive</p>
                <p className="text-sm">Gokula Education Foundation</p>
              </div>
              {/**/}
              <div className="leading-tight">
                <img src="../../nvr.jpg" className="w-[250px] h-[180px]" />
                <br />
                {/* <p className="italic font-bold">Dr. N. V. R. Naidu</p> */}
                <button
                  type="button"
                  className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                  onClick={() => {
                    nvrRef.current.style.display = "block";
                  }}
                >
                  Dr. N. V. R. Naidu
                </button>
                <p className="text-sm">Principal</p>
                <p className="text-sm">Ramaiah Institute of Technology</p>
              </div>
            </div>
            <br />
          </div>
        </div>

        <div
          class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
          ref={mrjRef}
        >
          <div className="relative top-10 mx-auto p-5 border w-[65%] shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              {/* <div className="items-end px-4 py-3">
                      <button
                        onClick={() => {
                          modalRef.current.style.display = "none";
                        }}
                        id="ok-btn"
                        className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                      >
                        OK
                      </button>
                    </div> */}
              <div className="bg-star bg-repeat">
                <div>
                  <p
                    className="text-right cursor-pointer"
                    onClick={() => {
                      mrjRef.current.style.display = "none";
                    }}
                  >
                    Close
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-center space-x-5">
                  <div>
                    <img src="../../mrj.jpg" />
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-left">
                      Dr. M.R Jayaram
                    </p>
                    <p className="text-sm text-left">Chairman</p>
                    <p className="text-sm text-left">
                      Gokula Education Foundation
                    </p>
                  </div>
                </div>{" "}
                <br />
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  Dr. M.R. Jayaram is the Chairman of Gokula Education
                  Foundation (GEF). He is the eldest son of Dr. M.S. Ramaiah one
                  of the legendary philanthropists & educationalists of
                  Karnataka. Born in 1947 Dr. Jayaram had his education in
                  Bangalore city and graduated in commerce. Since his young age
                  he showed lot of interest in managing the educational
                  institutions supporting his father in all the development
                  activities. In 1972, at the tender age of 25, Dr. Jayaram has
                  taken the responsibility of Chairman of the Governing Council
                  (now the GB) of M.S. Ramaiah Institute of Technology (MSRIT).
                  His acumen and managerial capabilities brought laurels to the
                  institute which has become widely known to be a premier
                  institute in engineering education. After seven years, in
                  1979, when M.S. Ramaiah Medical College (MSRMC) was
                  established, he assumed the office of the Chairman of
                  Governing council for this college also. He led these
                  institutions to become very strong in post graduate education
                  and research, apart from acquiring a great name in under
                  graduate education. Dr. M.R. Jayaram has been responsible for
                  placing these institutions as the premier institutions in this
                  country, finding a place in the top 25 institution in the
                  country in their respective fields. As on today GEF has
                  established 18 colleges/schools on its 85-acre Gnanagangothri
                  Campus. The Schools include engineering, medicine, nursing,
                  dental, law, management, etc., with more than 11,000 students
                  on the campus comprising of students from all over India and
                  abroad. It has been his determination and sustained effort
                  that has made each of these institutions as a ‘Centre of
                  Excellence’. After the demise of his father, he created a
                  superspeciality hospital in memory of his father, and this
                  hospital has become a pride of Bangalore today. The MSR School
                  of Advanced Studies is also his creation.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr. M.R. Jayaram is not only an educationist, but also a
                  businessman and industrialist of repute. Recently he
                  consolidated all his businesses and brought them under one
                  name called “Valdel Corporation”. Valdel is into Engineering
                  construction, engineering design, Retail, BPO and host of
                  other businesses. He is also into community development and
                  philanthropy. He is the Dharmadhikari (head) of Kaiwara
                  Kshetra, a centre for religious activities located around 60
                  km away from Bangalore. This Kshetra is into rejuvenation of
                  old temples in and around Kaiwara, providing health and
                  education to the villagers around Kaiwara, daily feeding the
                  poor and needy, conducts annual mass marriages and many such
                  socially relevant activities.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr. M.R. Jayaram is the Managing Trustee of M.S. Ramaiah
                  Charities Trust, which has a number of well defined social
                  objectives. The Trust awards scholarships annually to the
                  financially backward meritorious candidates for pursuing
                  higher education. He was also into politics for a short stint
                  and was elected Member of the Legislative Assembly of
                  Karnataka State. Dr. Jayaram is also associated with
                  professional associations. Presently, he is Honorary
                  Secretary, Karnataka Private Medical & Dental Colleges
                  Association; Honorary Secretary, Karnataka Unaided Private
                  Engineering Colleges Association; Vice Chairman, Consortium of
                  Medical, Engineering & Dental Colleges of Karnataka (COMED K).
                  In November 2006, Dr. M.R. Jayaram was awarded Honorary
                  Doctorate by Coventry University, UK for his contribution to
                  education and business.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
          ref={mrsRef}
        >
          <div className="relative top-10 mx-auto p-5 border w-[65%] shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              {/* <div className="items-end px-4 py-3">
                      <button
                        onClick={() => {
                          modalRef.current.style.display = "none";
                        }}
                        id="ok-btn"
                        className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                      >
                        OK
                      </button>
                    </div> */}
              <div className="bg-star bg-repeat">
                <div>
                  <p
                    className="text-right cursor-pointer"
                    onClick={() => {
                      mrsRef.current.style.display = "none";
                    }}
                  >
                    Close
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-center space-x-5">
                  <div>
                    <img src="../../mrs.jpg" />
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-left">
                      Sri. M. R. Seetharam, MLC
                    </p>
                    <p className="text-sm text-left">
                      Vice-Chairman, GEF and Director
                    </p>
                    <p className="text-sm text-left">
                      Ramaiah Institute of Technology
                    </p>
                    <p className="text-sm text-left">
                      Former Honourable Minister for Planning, Statistics,
                      Science & Technology,
                    </p>{" "}
                    <p className="text-sm text-left">Govt. of Katnataka.</p>
                  </div>
                </div>{" "}
                <br />
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  Sri M.R. Seetharam is the Vice Chairman of Gokula Education
                  Foundation (GEF). He is an illustrious son of Dr. M.S.
                  Ramaiah, a legendary philanthropist and educationist of
                  Karnataka. Born in 1956 Sri Seetharam had his education in
                  Bangalore city and graduated in Science. From an early age he
                  exhibited immense leadership potential and vibrant
                  entrepreneurial spirit. He imbibed the qualities of public
                  service, compassion, empathy with the disadvantaged etc from
                  his father.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  He is the Director of M.S. Ramaiah Institute of Technology,
                  M.S. Ramaiah Polytechnic and M.S. Ramaiah Hostels. He is also
                  the Chairman-Director, M.S. Ramaiah Hotels & Resorts (P) Ltd.,
                  Chairman-Managing Director, M.S. Ramaiah Developers & Builders
                  Pvt. Ltd.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  His devotion to public service made him keenly interested in
                  politics. He was elected twice to Legislative Assembly of
                  Karnataka, in the years 1999 and 2004, from the Malleswaram
                  constituency. He provided best possible civic amenities,
                  developed parks, worship centres etc. He implemented
                  Government Self Employment schemes like Antyodaya, Akshara
                  Dasoha, Yeshswini Co-operative Health Scheme.
                </p>
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  As Vice-Chairman of GEF, he is keenly involved in all the
                  activities of the Foundation and is providing valuable support
                  to Dr. M.R. Jayaram, Hon’ble Chairman of GEF in his efforts to
                  steer all the institutes under GEF on a path of continual
                  improvement. Under his dynamic leadership, MSRIT is
                  consolidating its position as a leading technology institute
                  of international reputation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
          ref={mrrRef}
        >
          <div className="relative top-10 mx-auto p-5 border w-[65%] shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              {/* <div className="items-end px-4 py-3">
                      <button
                        onClick={() => {
                          modalRef.current.style.display = "none";
                        }}
                        id="ok-btn"
                        className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                      >
                        OK
                      </button>
                    </div> */}
              <div className="bg-star bg-repeat">
                <div>
                  <p
                    className="text-right cursor-pointer"
                    onClick={() => {
                      mrrRef.current.style.display = "none";
                    }}
                  >
                    Close
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-center space-x-5">
                  <div>
                    <img src="../../mrr.jpg" />
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-left">
                      Sri. M. R. Ramaiah
                    </p>
                    <p className="text-sm text-left">
                      Secretary, GEF and Director
                    </p>
                    <p className="text-sm text-left">
                      Ramaiah Institute of Technology
                    </p>
                  </div>
                </div>{" "}
                <br />
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  Sri M.R. Ramaiah is the Secretary of Gokula Education
                  Foundation (GEF). He is an illustrious son-in-law of Dr. M.S.
                  Ramaiah, a legendary philanthropist and educationist of
                  Karnataka. Born in 1946 Sri M.R. Ramaiah had his education in
                  Bangalore city.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  He is the Director of M.S. Ramaiah Institute of Technology and
                  M.S. Ramaiah Polytechnic. He is also a Director of Valdel
                  Corporation. Earlier, he was the Managing Director of
                  Brindavan Alloy (P) Ltd.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  From an young age, Sri M.R. Ramaiah associated himself with
                  all the activities of Dr. M.S. Ramaiah. The rich experience
                  that he had in the execution of the construction projects of
                  Ramaiah Group gave him deep insights into complex issues
                  involved in the management of large projects, dealing with
                  people and interfacing with Government agencies. With this
                  background, Sri M.R. Ramaiah is providing valuable guidance in
                  the administration of M.S. Ramaiah Institute of Technology and
                  M.S. Ramaiah Polytechnic and other institutes being
                  administered by GEF.
                </p>
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Sri M.R. Ramaiah is a deeply religious person. He is closely
                  associated with all the activities of Kaiwara Kshetra, a
                  centre for Religious activities located around 60 kms away
                  from Bangalore, with Dr. M.R. Jayaram as Dharmadhikari. As the
                  Secretary of GEF, Sri M.R. Ramaiah is involved in all the
                  activities of the Foundation and is providing valuable support
                  to Dr. M.R. Jayaram, Hon’ble Chairman of GEF in his efforts to
                  steer all the institutes under GEF on a path of continual
                  improvement. Under his dynamic leadership, MSRIT is
                  consolidating its position as a leading technology institute
                  of international reputation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
          ref={ceRef}
        >
          <div className="relative top-10 mx-auto p-5 border w-[65%] shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              {/* <div className="items-end px-4 py-3">
                      <button
                        onClick={() => {
                          modalRef.current.style.display = "none";
                        }}
                        id="ok-btn"
                        className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                      >
                        OK
                      </button>
                    </div> */}
              <div className="bg-star bg-repeat">
                <div>
                  <p
                    className="text-right cursor-pointer"
                    onClick={() => {
                      ceRef.current.style.display = "none";
                    }}
                  >
                    Close
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-center space-x-5">
                  <div>
                    <img
                      src="../../new-ce.jpg"
                      className="w-[250px] h-[180px]"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-left">
                      Shri B. S. Ramaprasad
                    </p>
                    <p className="text-sm text-left">Chief Executive</p>
                    <p className="text-sm text-left">
                      Gokula Education Foundation
                    </p>
                  </div>
                </div>{" "}
                <br />
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  Sri Ramaprasad has had vast exposure and experience in dealing
                  with various issues in education sector as Registrar,
                  Mangalore University, Director Pre-university Education and
                  Special Officer, CET cell. As special officer CET, he had the
                  opportunity to implement a transparent, technology driven
                  selection process for professional courses in Karnataka. The
                  State, a pioneer, has the distinction of showcasing of a
                  credible, widely acclaimed system of merit and reservation
                  based selection of students for professional courses. During
                  his tenure as Project Director, Indo Norwegian Environment
                  Program, KSCST and Project Director, Jalasamvardhanyojane, he
                  has closely interacted with voluntary organizations of repute,
                  institutions of higher and technical education, eminent domain
                  experts and academicians and varied stake holders to achieve
                  project objectives and outcomes. As Secretary to Governor of
                  Karnataka, he has dealt with multifarious issues and processes
                  concerning higher education and university. He retired as
                  advisor, Special Investigation Team (Mines), Karnataka
                  Lokayukta in the year 2015 and post retirement he has been
                  working as advisor SIT, Lokayukta.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Positions held during his tenure in the Indian Administrative
                  Services,
                  <ul className="list-decimal ml-4">
                    <li>
                      Director Pre-university Education and Special Officer, CET
                      cell, Government of Karnataka
                    </li>
                    <li>Deputy Commissioner, Kolar district</li>
                    <li>
                      Secretary, Karnataka Public Service Commission, Bangalore
                    </li>
                    <li>
                      Project Director, Jalasamvardhanyojane, a world bank
                      assisted minor irrigation project
                    </li>
                    <li>
                      Special Commissioner, Bruth Bangalore Mahanagara Palike
                      (BBMP)
                    </li>
                    <li>
                      Secretary to Government, Industries and Commerce (mines,
                      SSI, textiles, sericulture and sugar)
                    </li>
                    <li>
                      Commissioner, Health and Family Welfare, Government of
                      Karnataka
                    </li>
                    <li>Secretary to His Excellency Governor of Karnataka</li>
                    <li>Advisor, Karnataka Lokayukta, SIT (mines)</li>
                  </ul>{" "}
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Positions held during his tenure in Karnataka Administrative
                  Services
                  <ul className="list-decimal ml-4">
                    <li>
                      Assistant Commissioner and Chairman, Land Tribunal,
                      Chikkodi, Belgaum district
                    </li>
                    <li>Assistant Commissioner, Land Reforms, Gadag</li>
                    <li>
                      Assistant Commissioner, Hospet subdivision, Bellary
                      district
                    </li>
                    <li>
                      District Manager, Food and Civil Supplies Corporation,
                      Bangalore
                    </li>
                    <li>
                      Private Secretary for the Minister for Labor, Government
                      of Karnataka
                    </li>
                    <li>
                      Revenue Member, Karnataka Land Reforms Appellate
                      Authority, Puttur, Dakshina Kannda district
                    </li>
                    <li>Commissioner, Mangalore City Corporation, Mangalore</li>
                    <li>Registrar, Mangalore University</li>
                    <li>
                      Managing Director, Karnataka Fisheries Federation, Mysore
                    </li>
                    <li>
                      Project Director, Indo-Norwegian Environment Program and
                      Executive Director, Karnataka State Council for Science
                      and Technology, Indian Institute of Science, Bangalore
                    </li>
                  </ul>{" "}
                </p>
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Education
                  <ul className="list-disc ml-4">
                    <li>
                      Bachelor of Science, Yuvaraja’s College, Mysore (1971 –
                      1974)
                    </li>
                    <li>
                      M. A in Education, Manasagangotri, Mysore University,
                      Mysore (1974 – 1976)
                    </li>
                    <li>KAS: 1980</li>
                    <li>IAS: 2000</li>
                  </ul>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
          ref={nvrRef}
        >
          <div className="relative top-10 mx-auto p-5 border w-[65%] shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              {/* <div className="items-end px-4 py-3">
                      <button
                        onClick={() => {
                          modalRef.current.style.display = "none";
                        }}
                        id="ok-btn"
                        className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                      >
                        OK
                      </button>
                    </div> */}
              <div className="bg-star bg-repeat">
                <div>
                  <p
                    className="text-right cursor-pointer"
                    onClick={() => {
                      nvrRef.current.style.display = "none";
                    }}
                  >
                    Close
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-center space-x-5">
                  <div>
                    <img src="../../nvr.jpg" className="w-[250px] h-[180px]" />
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-left">
                      Dr. N. V. R. Naidu
                    </p>
                    <p className="text-sm text-left">Principal</p>
                    <p className="text-sm text-left">
                      Ramaiah Institute of Technology
                    </p>
                  </div>
                </div>{" "}
                <br />
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  N V R Naidu graduated in Mechanical Engineering from Sri
                  Venkateswara University, Tirupathi in the year 1980. He
                  further pursued his M.Tech in Industrial Engineering in the
                  year 1982 and obtained his Ph.D from the same university.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr. NVR Naidu has been serving the teaching profession with a
                  great devotion for 36 long years. He started his career in
                  1982 as a Lecturer in the prestigious M.S. Ramaiah Institute
                  of Technology, Bangalore. He has grown to the level of
                  Principal serving the institution at various levels and
                  capacities. He was the HoD in the Department of IEM from June
                  2006 to February 2014, HoD in the Department of Mechanical
                  Engineering Jan 2014 to June 2014, Vice Principal from March
                  2012 to May 2014 and currently the Principal from June 2014.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr NVR Naidu is a recipient of Dr J Mahajan Award for the year
                  2008-09 awarded by Indian Institution of Industrial
                  Engineering for his outstanding contribution in the field of
                  education and research and also his name is listed in Marquis
                  Who is Who in the World, USA in the year 2011. He is also the
                  recipient of Prof. B.G. Raghavendra Memorial Award by ORSI,
                  Kolkata for the best technical paper in stream of Operations
                  Research.
                </p>
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr. NVR Naidu is well recognized for his research. He has
                  presented and published over 160 research papers in various
                  National and International referred Journals and conferences.
                  He is a reviewer for various reputed National and
                  International journals. He has presided over as session chair
                  in various National and International conferences. He has
                  authored nine textbooks in the fields of Management and
                  Entrepreneurship, Total Quality Management, Metrology and
                  Quality Control, Engineering Economy, Operations Research and
                  Production and Operations Management.
                </p>
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr.NVR Naidu is the adjudicator for Ph.D thesis for various
                  universities across India. He has produced 7 doctorates in the
                  areas of robust design, design and development of production
                  systems, supply chain network and design of experiments.
                </p>
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr. NVR Naidu has visited various countries including the USA,
                  Japan, Canada, Dubai and Sri Lanka to collaborate and enhance
                  the Industry-Institution interaction. He is credited with
                  executing a number of DST, AICTE and VTU funded programs. He
                  is an invited speaker for various seminars and workshops by
                  Industry and the Institutions across the country and abroad.
                  He has guided about 80 applied projects in the fields of
                  Production, Industrial Engineering and Management many of
                  which are successfully implemented.
                </p>
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  He is a fellow member of various professional bodies. He
                  provides thought leadership and guidance to various academic
                  bodies and is a board of studies member of many prestigious
                  academic and research institutions. He is a subject expert
                  member at various prestigious engineering educational
                  organizations.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Currently, Dr Naidu is the Principal of M S Ramaiah Institute
                  of Technology, Bangalore an institute of excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
          id="my-modal"
          ref={rajRef}
        >
          <div className="relative top-10 mx-auto p-5 border w-[65%] shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              {/* <div className="items-end px-4 py-3">
                      <button
                        onClick={() => {
                          modalRef.current.style.display = "none";
                        }}
                        id="ok-btn"
                        className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
                      >
                        OK
                      </button>
                    </div> */}
              <div className="bg-star bg-repeat">
                <div>
                  <p
                    className="text-right cursor-pointer"
                    onClick={() => {
                      rajRef.current.style.display = "none";
                    }}
                  >
                    Close
                  </p>
                </div>
                <div className="flex flex-row flex-wrap items-start justify-center space-x-5">
                  <div>
                    <img src="../../razdan.jpg" />
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-left">
                      Dr. P.N Razdan
                    </p>
                    <p className="text-sm text-left">Principal Advisor</p>
                    <p className="text-sm text-left">
                      Quality Assurance & Excellence Cell, GEF
                    </p>
                  </div>
                </div>{" "}
                <br />
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  Dr. Pushpati Nath Razdan was born at Srinagar on 25th Dec.
                  1948. He got his M. Sc degree from University of Kashmir in
                  1971 and PhD degree from University of Roorkee in 1975. He was
                  appointed as Assistant Professor at H.P. Agriculture
                  University Solan. Dr. Razdan joined Geological Survey of India
                  in 1983. He was appointed as Dy. Director General
                  (Geochemistry) in Feb.2005 and Sr. Dy. Director General in Feb
                  2008. As Deputy Director General and HOD NR, GSI, Ministry of
                  Mines, GOI, for more than three years, he looked after all the
                  geoscientific activities of Northern India.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr. Razdan joined All India Council for Technical Education as
                  Adviser-I in April 2001 and severed in AICTE up to Feb. 2005.
                  He looked after various Bureaus, before joining as Advisor
                  Quality Assurance (QA) and Member Secretary (NBA) in July
                  2002. As Member Secretary of NBA, he was responsible for
                  Awareness of accreditation throughout the country. His
                  contribution towards NBA becoming member of Washington accord/
                  INQQHAE / Asian Accord has been wide appreciated. Application
                  for membership of Washington accord was submitted by Dr.
                  Razdan at New Zeeland in 2004. He was main architect for
                  initial drafting of Regulations for "Entry & Operation of
                  Foreign University /Institutions intending/intend to impart
                  Technical Education in India. He was member of several
                  committees constituted by MHRD/UGC on different issues
                  concerning higher & technical education.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr. P. N. Razdan has published many research papers in various
                  Journals of International repute. He was visiting faculty at
                  Allahabad University and is also guest faculty at GSI Training
                  Institute. He was awarded H. K. Sen. Memorial Medal in 2006 by
                  Institution of Chemist. He was nominated as member of “High
                  Power Committee on GSI” constituted by GOI. Ministry of Human
                  Resource had appointed him as chairman of a Review Committee
                  for evaluating the Ministry’s Schemes of Sub-Mission on
                  Polytechnics.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr. Razdan was Pro Vice Chancellor of KIIT University
                  Bhubaneswar for about 2 Years, wherein he was overall
                  responsible for various activities in seven independent
                  Schools of Engineering. Dr P. N. Razdan joining Dr. D. Y.
                  Patil Vidyapeeth Pune as Vice-Chancellor in 2010 and
                  relinquished his assignment on 31th Dec 2018. He was
                  responsible for leading, directing, and managing day-to-day
                  academic and administrative operations of DPU along with
                  providing strategic planning and leadership to the Vidyapeeth.
                </p>{" "}
                <br />{" "}
                <p className="text-justify border-l-2 border-blue-ramaiah pl-2">
                  {" "}
                  Dr Pushpati Nath Razdan has joined Gokula Education
                  Foundation, Bangalore as Principal Advisor, Quality Assurance
                  and Excellence cell in January 2019 to look after total
                  quality management of the institutions for national and
                  international visibility, through accreditation, rating and
                  ranking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dept Right Sidebar */}
        <div className="col-span-full lg:col-start-10 lg:col-end-12 h-auto lg:absolute lg:w-full text-blue-ramaiah"></div>
      </div>
    </>
  );
}

export default Governance;
