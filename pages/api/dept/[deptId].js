export default function helloAPI(req, res) {
  const req1 = req.query;

  // const fetchedData = await fetch(
  //   "http://ec2-54-214-223-171.us-west-2.compute.amazonaws.com:8080/api/v1/vision_mission/",
  //   {
  //     method: "GET",
  //   }
  // );

  fetch(
    "http://ec2-54-214-223-171.us-west-2.compute.amazonaws.com:8080/api/v1/sideheadings/" +
      req1,
    {
      method: "GET",
    }
  ).then((data) => res.status(200).json(data));
}

// function DeptDetails({ eventData }) {
//   console.log(eventData);
//   return <div></div>;
// }

// export async function getStaticPaths() {
//   return {
//     fallback: true,
//     // paths: {
//     //   params: { eventId: "1" },
//     // },
//     paths: ["deptId", "1"],
//   };
// }

// export async function getStaticProps(context) {
//   const deptId = context.params.deptId;

//   const fetchedData = await fetch(
//     "http://ec2-54-214-223-171.us-west-2.compute.amazonaws.com:8080/api/v1/vision_mission/",
//     {
//       method: "GET",
//     }
//   );

//   return {
//     props: {
//       eventData: {
//         id: fetchedData.id,
//         mission: fetchedData.mission,
//         vision: fetchedData.vision,
//       },
//     },
//   };
// }

// export default DeptDetails;
