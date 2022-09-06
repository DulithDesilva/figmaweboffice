// import { TabPanelUnstyled } from "@mui/base";
// import { AppBar, Tab, Tabs } from "@mui/material";
// import { Box, color } from "@mui/system";
import { colors, Divider } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { width } from "@mui/system";
import React from "react";
import Projectcard from "../../components/cards/projectcards/Projectcard";
// import img1 from "../../../public/images/img1";
// import Sidenavbar from "../../components/Sidenavbar/Sidenavbar";
// import "./Homepage.css";
// import Sidenavbar from "../components/Sidenavbar/Sidenavbar";

// const heading ={
//   marginleft: '300px',
// }

function Homepage() {
  const featuredProjects = [
    {
      title: "Heath system",
      imageUrl: "/static/images/img3.jpg",
      description: "afwefawefwa",
    },
    {
      title: "renewble enagery",
      imageUrl: "/static/images/img.jpg",
      description: "afwefawefwa",
    },
    {
      title: "energy planet",
      imageUrl: "/static/images/img3.jpg",
      description: "afwefawefwa",
    },
    // {
    //   title: "amma budu wewa",
    //   imageUrl: "/static/images/img3.jpg",
    //   description: "afwefawefwa",
    // },
    // {
    //   title: "thaththa rajawewa",
    //   imageUrl: "/static/images/img3.jpg",
    //   description: "afwefawefwa",
    // },
  ];

  function Homepage() {}
  const freshprojects = [
    {
      title: "Heath system",
      imageUrl: "/static/images/img3.jpg",
      description: "afwefawefwa",
    },
    {
      title: "renewble enagery",
      imageUrl: "/static/images/img.jpg",
      description: "afwefawefwa",
    },
    {
      title: "energy planet",
      imageUrl: "/static/images/img3.jpg",
      description: "afwefawefwa",
    },
    // {
    //   title: "amma budu wewa",
    //   imageUrl: "/static/images/img3.jpg",
    //   description: "afwefawefwa",
    // },
    // {
    //   title: "thaththa rajawewa",
    //   imageUrl: "/static/images/img3.jpg",
    //   description: "afwefawefwa",
    // },
  ];

  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  //   { width: 850, itemsToShow: 3 },
  //   { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  //   { width: 1450, itemsToShow: 5 },
  //   { width: 1750, itemsToShow: 6 },
  // ];

  return (
    <>
      {/* <Sidenavbar /> */}
      <div className="mainhomepage">
        <div className="mainhomepageright">
          <div
            style={{ display: "flex", aligntem: "center", marginTop: "40px" }}
          >
            <h1 style={{ marginLeft: "40px" }}>Discover</h1>
            <h1 style={{ marginLeft: "10px", color: "#3498db" }}>projects</h1>
          </div>
          <div
            style={{ display: "flex", aligntem: "center", marginTop: "40px" }}
          >
            <h1
              style={{
                marginLeft: "250px",
                marginRight: "100px",
                color: lightBlue[300],
                fontWeight: "bold",
              }}
            >
              All projects
              {/* <u style={{ color: "#3742fa",paddingTop:"30px" }}>All projects</u> */}
            </h1>
            <h1
              style={{
                marginLeft: "10px",
                color: "#95a5a6",
                fontWeight: "lighter",
              }}
            >
              >50% Funded
            </h1>
          </div>
          <div>
            <img
              style={{ marginLeft: "200px", marginBottom: "50px" }}
              src="/static/images/img1.png"
              alt="img1"
              width={"900"}
            />
          </div>
        </div>
        <Divider variant="middle" />
        <div>
          <div
            style={{ display: "flex", aligntem: "center", marginTop: "40px" }}
          >
            <h1 style={{ marginLeft: "40px" }}>Featured</h1>
            <h1 style={{ marginLeft: "10px", color: "#3498db" }}>projects</h1>
          </div>
        </div>
        <div>
          {" "}
          <img
            style={{ marginLeft: "200px", marginBottom: "50px" }}
            src="/static/images/img2.png"
            alt="img1"
            width={"900"}
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            justifyContent: "center",
            alignContent: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "#f1f2f6",
              width: "900px",
              height: "150px",
              borderRadius: "10px",
            }}
          >
            <p style={{ paddingTop: "10px", color: "#57606f" }}>
              To successfully respond to the challenges that climate change
              poses to our communities, it’s crucial that we talk explicitly
              about it – and in a way that invites and welcomes into the
              conversation a broad spectrum of people. And this is the clincher
              – it can be tough enough to start conversations on this topic, but
              it can be all-too-easy to unwittingly alienate or switch others
              off, or cause them to deepen their commitment to their own,
              contrary perspectives – Kate Heath
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "50px",
            paddingTop: "70px",
            paddingBottom: "200px",
            paddingLeft:"130px"
          }}
        >
          {featuredProjects.map((project, index) => (
            <Projectcard key={index} title={project.title} />
          ))}
        </div>
        <Divider variant="middle" />
        <div>
          <div
            style={{ display: "flex", aligntem: "center", marginTop: "40px" }}
          >
            <h1 style={{ marginLeft: "40px" }}>Fresh</h1>
            <h1 style={{ marginLeft: "10px", color: "#3498db" }}>projects</h1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: "50px",
            paddingTop: "70px",
            paddingBottom: "200px",
            paddingLeft:"130px"
          }}
        >
          {freshprojects.map((project, index) => (
            <Projectcard key={index} title={project.title} />
          ))}
        </div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            aligntem: "center",
            backgroundColor: "#dcdde1",
            columnGap: "170px",
            fontWeight: "lighter",
            fontSize: "20px",
          }}
        >
          <h4
            style={{
              paddingLeft: "150px",
              fontWeight: "lighter",
              color: "#8395a7",
            }}
          >
            Trivity 2020
          </h4>
          <h4 style={{ fontWeight: "lighter", color: "#8395a7" }}>
            Trust & safty
          </h4>
          <h4 style={{ fontWeight: "lighter", color: "#8395a7" }}>
            Terms of use
          </h4>
          <h4 style={{ fontWeight: "lighter", color: "#8395a7" }}>
            Privte policy
          </h4>
        </div>
      </div>
    </>
  );
}

export default Homepage;
