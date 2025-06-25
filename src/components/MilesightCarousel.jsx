// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import {
//   Box,
//   Button,
//   Container,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { FaChevronRight } from "react-icons/fa";

// const slides = [
//   {
//     key: 0,
//     title: "Smart Office",
//     description: "Boost productivity with intelligent automation.",
//     image: "https://source.unsplash.com/1600x800/?office,technology",
//   },
//   {
//     key: 1,
//     title: "Smart Restroom",
//     description: "Sensor-based hygiene and maintenance systems.",
//     image: "https://source.unsplash.com/1600x800/?restroom,sensor",
//   },
//   {
//     key: 2,
//     title: "Video Surveillance",
//     description: "24/7 AI-powered smart security.",
//     image: "https://source.unsplash.com/1600x800/?cctv,security",
//   },
//   {
//     key: 3,
//     title: "People Counting",
//     description: "Track and optimize movement patterns.",
//     image: "https://source.unsplash.com/1600x800/?crowd,people",
//   },
//   {
//     key: 4,
//     title: "Traffic Monitoring",
//     description: "Real-time traffic insights powered by AI.",
//     image: "https://source.unsplash.com/1600x800/?traffic,road",
//   },
//   {
//     key: 5,
//     title: "Smart Parking",
//     description: "Frictionless urban mobility with smart parking.",
//     image: "https://source.unsplash.com/1600x800/?parking,car",
//   },
// ];

// const MilesightCarousel = () => {
//   const theme = useTheme();

//   return (
//     <section style={{ width: "100%", overflow: "hidden" }}>
//       <Carousel
//         animation="fade"
//         autoPlay
//         duration={700}
//         interval={6000}
//         indicators={false}
//         navButtonsAlwaysVisible
//         navButtonsProps={{
//           style: {
//             backgroundColor: "rgba(0,0,0,0.5)",
//             borderRadius: "50%",
//             color: "#fff",
//             margin: "0 10px",
//           },
//         }}
//       >
//         {slides.map((item) => (
//           <Box
//             key={item.key}
//             sx={{
//               height: { xs: "80vh", md: "90vh" },
//               width: "100%",
//               backgroundImage: `url(${item.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               position: "relative",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 position: "absolute",
//                 inset: 0,
//                 background: "linear-gradient(to right, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.1))",
//               }}
//             />
//             <Container
//               maxWidth="lg"
//               sx={{
//                 position: "relative",
//                 zIndex: 2,
//                 textAlign: "left",
//                 color: "#fff",
//               }}
//             >
//               <Box sx={{ maxWidth: 600 }}>
//                 <Typography
//                   variant="h2"
//                   sx={{
//                     fontWeight: "bold",
//                     mb: 2,
//                     fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
//                   }}
//                 >
//                   {item.title}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   sx={{
//                     mb: 3,
//                     fontSize: { xs: "1rem", md: "1.25rem" },
//                     fontWeight: 400,
//                   }}
//                 >
//                   {item.description}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   size="large"
//                   color="secondary"
//                   endIcon={<FaChevronRight />}
//                   sx={{
//                     textTransform: "none",
//                     fontWeight: "bold",
//                     borderRadius: "30px",
//                     px: 4,
//                     py: 1.5,
//                   }}
//                 >
//                   Learn More
//                 </Button>
//               </Box>
//             </Container>
//           </Box>
//         ))}
//       </Carousel>
//     </section>
//   );
// };

// export default MilesightCarousel;
