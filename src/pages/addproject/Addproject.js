import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { lightBlue } from "@mui/material/colors";
import { database } from "../../FireBaseIntergrate";
import { push, ref, set } from "firebase/database";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Addproject() {
  const [projectname, setprojectname] = useState("");
  const [Solution, setSolution] = useState("");
  const [tagline, settagline] = useState("");
  const [Keyfeatures, setKeyfeatures] = useState("");
  const [profitabilit, setprofitabilit] = useState("");
  const [description, setdescription] = useState("");

  const addProject = () => {
    let projectData = {
      projectname: projectname,
      Solution: Solution,
      tagline: tagline,
      Keyfeatures: Keyfeatures,
      profitabilit: profitabilit,
      description: description,
    };

    push(ref(database, "projects"), projectData)
      .then(() => {
        alert("New project saved succesfuly");
      })
      .catch(() => {
        alert("Something went wrong please contact admin");
      });
  };

  return (
    <div className="Main">
      <div
        className="Blue tape"
        style={{ backgroundColor: "#0fbcf9", width: "100%", height: "100px" }}
      ></div>
      {/* <div
        className="Add project form"
        style={{ width: "100%", height: "800px", backgroundColor: "#dcdde1" }}
      ></div> */}
      <div>
        <h1 style={{ paddingLeft: "40px", color: "#4b4b4b" }}>
          Add new project
        </h1>
      </div>
      <div
        className="form wrap"
        style={{
          width: "80%",
          height: "1500px",
          backgroundColor: "#f1f2f6",
          margin: "auto",
        }}
      >
        <div
          className="form Q1"
          style={{ paddingLeft: "130px", paddingTop: "50px" }}
        >
          <h3>Project name</h3>
          <div className="Q1 text">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="projectname"
                label="Type project name here"
                variant="filled"
                value={projectname}
                onChange={(event) => {
                  setprojectname(event.target.value);
                }}
              />
            </Box>
          </div>
        </div>
        <div
          className="form Q2"
          style={{ paddingLeft: "130px", paddingTop: "50px" }}
        >
          <h3>Solution/Product name</h3>
          <div className="Q2 text">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="Solution"
                label="Type Solution/Product name here"
                variant="filled"
                value={Solution}
                onChange={(event) => {
                  setSolution(event.target.value);
                }}
              />
            </Box>
          </div>
        </div>
        <div
          className="form Q3"
          style={{ paddingLeft: "130px", paddingTop: "50px" }}
        >
          <h3>Tagline</h3>
          <div className="Q3 text">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="tagline"
                label="Type project tagline here"
                variant="filled"
                value={tagline}
                onChange={(event) => {
                  settagline(event.target.value);
                }}
              />
            </Box>
          </div>
        </div>
        <div
          className="form Q4"
          style={{ paddingLeft: "130px", paddingTop: "50px" }}
        >
          <h3>Key Features</h3>
          <div className="Q4 text">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="Keyfeatures"
                label="Provide few key features (Max 100 words)"
                variant="filled"
                value={Keyfeatures}
                onChange={(event) => {
                  setKeyfeatures(event.target.value);
                }}
              />
            </Box>
          </div>
        </div>
        <div
          className="form Q5"
          style={{ paddingLeft: "130px", paddingTop: "50px" }}
        >
          <h3>Profitability</h3>
          <div className="Q5 text">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="profitabilit"
                label="Inform the profitabilit of the product (Max 100 words) "
                variant="filled"
                value={profitabilit}
                onChange={(event) => {
                  setprofitabilit(event.target.value);
                }}
              />
            </Box>
          </div>
        </div>
        <div
          className="form Q6"
          style={{ paddingLeft: "130px", paddingTop: "50px" }}
        >
          <h3>Detail Description</h3>
          <div className="Q6 text">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "80ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="description"
                label="Discribe the project in details to inform the, inventors and other consulters."
                variant="filled"
                value={description}
                onChange={(event) => {
                  setdescription(event.target.value);
                }}
              />
            </Box>
          </div>
        </div>
        {/* <div
          style={{
            width: "600px",
            height: "300px",
            backgroundColor: "#dcdde1",
            margin: "auto",
            position: "relative",
          }}
        >
              <div
                style={{
                  position: "relative",
                  top: 80,
                  left: 250,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 80, color: lightBlue[300] }}
                />
                <div style={{}}>
                    <h4>Upload media files here to share your story</h4>
                </div>
              </div>
        </div> */}
        <div
          className="upload file wrap"
          style={{
            width: "720px",
            height: "370px",
            backgroundColor: "#dcdde1",
            paddingLeft: "290px",
          }}
        >
          <div
            className="upload file icon"
            style={{
              position: "relative",
              top: 100,
              left: 180,
              transform: "translate(-50,-50)",
            }}
          >
            <DriveFolderUploadIcon
              sx={{ fontSize: 80, color: lightBlue[300] }}
            />
          </div>
          <div className="add new card icon text">
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                paddingTop: "120px",
                fontSize: "20px",
                paddingLeft: "140px",
                paddingRight: "40px",
              }}
            >
              Create new project
            </Typography>
          </div>
        </div>
      </div>
      <div className="Sustainability commitment logos">
        <h1
          style={{ paddingLeft: "40px", color: "#4b4b4b", paddingTop: "30px" }}
        >
          Sustainability Commitments
        </h1>
        <h4 style={{ paddingLeft: "40px", color: "#4b4b4b" }}>
          Select the guidline that project has been audited
        </h4>
        <div
          className="Sustainability commitment logos pics"
          style={{
            display: "flex",
            aligntem: "center",
            paddingTop: "30px",
            paddingLeft: "100px",
            paddingBottom: "50px",
          }}
        >
          <Avatar
            // component={RouterLink}
            src={"/static/images/SASB2.png"}
            sx={{
              cursor: "pointer",
              width: 100,
              height: 100,
              borderRadius: "0px",
              paddingRight: "40px",
            }}
            // to="/app/account"
          />
          <Avatar
            // component={RouterLink}
            src={"/static/images/GRI.png"}
            sx={{
              cursor: "pointer",
              width: 100,
              height: 100,
              borderRadius: "0px",
              paddingRight: "40px",
            }}
            // to="/app/account"
          />
          <Avatar
            // component={RouterLink}
            src={"/static/images/TCFD.png"}
            sx={{
              cursor: "pointer",
              width: 100,
              height: 100,
              borderRadius: "0px",
              paddingRight: "40px",
            }}
            // to="/app/account"
          />
          <Avatar
            // component={RouterLink}
            src={"/static/images/greenhouse.png"}
            sx={{
              cursor: "pointer",
              width: 100,
              height: 100,
              borderRadius: "0px",
              paddingRight: "40px",
            }}
            // to="/app/account"
          />
          <Avatar
            // component={RouterLink}
            src={"/static/images/CDSB.png"}
            sx={{
              cursor: "pointer",
              width: 100,
              height: 100,
              borderRadius: "0px",
              paddingRight: "40px",
            }}
            // to="/app/account"
          />
        </div>
      </div>
      <div className="SDG's Application">
        <div>
          <h1
            style={{
              paddingLeft: "40px",
              color: "#4b4b4b",
              paddingTop: "30px",
            }}
          >
            SDG's of Application
          </h1>
          <h4 style={{ paddingLeft: "40px", color: "#4b4b4b" }}>
            Select SDG that applies
          </h4>
        </div>
        <div className="SDG's Application logo pics">
          <div
            className="SDG's Application logo pics row 01"
            style={{
              display: "flex",
              aligntem: "center",
              paddingTop: "30px",
              paddingLeft: "100px",
              paddingBottom: "50px",
            }}
          >
            <Avatar
              // component={RouterLink}
              src={"/static/images/img01.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img02.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img03.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img04.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img05.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img06.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
          </div>
          <div
            className="SDG's Application logo pics row 02"
            style={{
              display: "flex",
              aligntem: "center",
              paddingTop: "5px",
              paddingLeft: "100px",
              paddingBottom: "50px",
            }}
          >
            <Avatar
              // component={RouterLink}
              src={"/static/images/img07.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img08.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img09.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img10.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img11.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img12.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
          </div>
          <div
            className="SDG's Application logo pics row 02"
            style={{
              display: "flex",
              aligntem: "center",
              paddingTop: "5px",
              paddingLeft: "100px",
              paddingBottom: "50px",
            }}
          >
            <Avatar
              // component={RouterLink}
              src={"/static/images/img13.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img14.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img15.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img16.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
            <Avatar
              // component={RouterLink}
              src={"/static/images/img17.png"}
              sx={{
                cursor: "pointer",
                width: 100,
                height: 100,
                borderRadius: "0px",
                paddingRight: "40px",
              }}
              // to="/app/account"
            />
          </div>
        </div>
      </div>
      <div className="registrant Information">
        <div>
          <h1
            style={{
              paddingLeft: "40px",
              color: "#4b4b4b",
              paddingTop: "30px",
            }}
          >
            registrant Information
          </h1>
        </div>
        <div
          className="form wrap 2"
          style={{
            width: "80%",
            height: "700px",
            backgroundColor: "#f1f2f6",
            margin: "auto",
          }}
        >
          <div className="registrant Information quiz">
            <div
              className="form Q1"
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "50px",
                paddingTop: "40px",
                paddingBottom: "5px",
                paddingLeft: "40px",
              }}
            >
              <h3>Organization</h3>
              <div className="Q1 text" style={{ paddingLeft: "82px" }}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="filled-basic"
                    label="Organization name"
                    variant="filled"
                  />
                </Box>
              </div>
            </div>
            <div
              className="form Q2"
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "50px",
                paddingTop: "40px",
                paddingBottom: "5px",
                paddingLeft: "40px",
              }}
            >
              <h3>Registerd Address</h3>
              <div className="Q2 text">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "50px",
                    // paddingTop: "40px",
                    paddingBottom: "5px",
                    paddingLeft: "40px",
                  }}
                >
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="filled-basic"
                      label="select Country"
                      variant="filled"
                    />
                  </Box>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="filled-basic"
                      label="Type city or Town"
                      variant="filled"
                    />
                  </Box>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: "50px",
                    // paddingTop: "40px",
                    paddingBottom: "5px",
                    paddingLeft: "40px",
                  }}
                >
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="filled-basic"
                      label="Post code"
                      variant="filled"
                    />
                  </Box>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="filled-basic"
                      label="Unit and address street"
                      variant="filled"
                    />
                  </Box>
                </div>
              </div>
            </div>
            <div
              className="form Q3"
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "50px",
                paddingTop: "40px",
                paddingBottom: "5px",
                paddingLeft: "40px",
              }}
            >
              <h3>Project Impact Regions</h3>
              <div className="Q3 text">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="filled-basic"
                    label="Organization name"
                    variant="filled"
                  />
                </Box>
              </div>
            </div>
            <div
              className="form Q4"
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "50px",
                paddingTop: "40px",
                paddingBottom: "5px",
                paddingLeft: "40px",
              }}
            >
              <h3>Project Type</h3>
              <div className="Q4 text" style={{ paddingLeft: "90px" }}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="filled-basic"
                    label="Select project type"
                    variant="filled"
                  />
                </Box>
              </div>
            </div>
            <div
              className="form Q5"
              style={{
                display: "flex",
                flexDirection: "row",
                columnGap: "50px",
                paddingTop: "40px",
                paddingBottom: "5px",
                paddingLeft: "40px",
              }}
            >
              <h3>Accept Carbon credit</h3>
              <div
                className="Q5 text"
                style={{ paddingTop: "10px", paddingLeft: "30px" }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Yes"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="No"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Documentation Submission">
        <div>
          <h1
            style={{
              paddingLeft: "40px",
              color: "#4b4b4b",
              paddingTop: "30px",
            }}
          >
            Documentation Submission
          </h1>
          <h4 style={{ paddingLeft: "40px", color: "#4b4b4b" }}>
            Please submit the documentation for application
          </h4>
        </div>
        <div
          className="Documentation Submission row"
          style={{
            display: "flex",
            aligntem: "center",
            paddingTop: "40px",
            paddingLeft: "200px",
            paddingBottom: "50px",
          }}
        >
          <div style={{ paddingRight: "30px" }}>
            <div
              style={{
                width: "160px",
                height: "120px",
                backgroundColor: "#f5f6fa",
                display: "flex",
              }}
            >
              {/* <div
                style={{
                  position: "relative",
                  top: 20,
                  left: 50,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 60, color: lightBlue[300] }}
                />
              </div> */}
              <div
                className="Documentation upload file icon"
                style={{
                  position: "relative",
                  top: 20,
                  left: 50,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 60, color: lightBlue[300] }}
                />
              </div>
              <div className="Documentation upload file icon text">
                <Typography
                  variant="body2"
                  color="black"
                  style={{
                    paddingTop: "70px",
                    fontSize: "17px",
                    paddingLeft: "1px",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Letter
                </Typography>
              </div>
            </div>
          </div>
          <div style={{ paddingRight: "30px" }}>
            <div
              style={{
                width: "160px",
                height: "120px",
                backgroundColor: "#f5f6fa",
                display: "flex",
              }}
            >
              {/* <div
                style={{
                  position: "relative",
                  top: 20,
                  left: 50,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 60, color: lightBlue[300] }}
                />
              </div> */}
              <div
                className="Documentation upload file icon"
                style={{
                  position: "relative",
                  top: 20,
                  left: 50,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 60, color: lightBlue[300] }}
                />
              </div>
              <div className="Documentation upload file icon text">
                <Typography
                  variant="body2"
                  color="black"
                  style={{
                    paddingTop: "70px",
                    fontSize: "17px",
                    paddingLeft: "1px",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Letter
                </Typography>
              </div>
            </div>
          </div>
          <div style={{ paddingRight: "30px" }}>
            <div
              style={{
                width: "160px",
                height: "120px",
                backgroundColor: "#f5f6fa",
                display: "flex",
              }}
            >
              {/* <div
                style={{
                  position: "relative",
                  top: 20,
                  left: 50,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 60, color: lightBlue[300] }}
                />
              </div> */}
              <div
                className="Documentation upload file icon"
                style={{
                  position: "relative",
                  top: 20,
                  left: 50,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 60, color: lightBlue[300] }}
                />
              </div>
              <div className="Documentation upload file icon text">
                <Typography
                  variant="body2"
                  color="black"
                  style={{
                    paddingTop: "70px",
                    fontSize: "17px",
                    paddingLeft: "1px",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Letter
                </Typography>
              </div>
            </div>
          </div>
          <div style={{ paddingRight: "30px" }}>
            <div
              style={{
                width: "160px",
                height: "120px",
                backgroundColor: "#f5f6fa",
                display: "flex",
              }}
            >
              {/* <div
                style={{
                  position: "relative",
                  top: 20,
                  left: 50,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 60, color: lightBlue[300] }}
                />
              </div> */}
              <div
                className="Documentation upload file icon"
                style={{
                  position: "relative",
                  top: 20,
                  left: 50,
                  transform: "translate(-50,-50)",
                }}
              >
                <DriveFolderUploadIcon
                  sx={{ fontSize: 60, color: lightBlue[300] }}
                />
              </div>
              <div className="Documentation upload file icon text">
                <Typography
                  variant="body2"
                  color="black"
                  style={{
                    paddingTop: "70px",
                    fontSize: "17px",
                    paddingLeft: "1px",
                    paddingRight: "40px",
                    fontWeight: "bold",
                  }}
                >
                  Letter
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="Documentation Submission buttons">
          <div
            className="button main"
            style={{
              display: "flex",
              aligntem: "center",
              paddingTop: "60px",
              paddingLeft: "200px",
              paddingBottom: "100px",
            }}
          >
            <div className="save as button" style={{ paddingRight: "50px" }}>
              <Button variant="outlined" size="large">
                Save as draft
              </Button>
            </div>
            <div className="submit button">
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  console.log(projectname);
                  console.log(Solution);
                  console.log(tagline);
                  console.log(Keyfeatures);
                  console.log(profitabilit);
                  console.log(description);
                  addProject();
                }}
              >
                submit
              </Button>
            </div>
          </div>
        </div>
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
  );
}

export default Addproject;
