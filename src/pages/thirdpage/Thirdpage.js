import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import { lightBlue } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";

const Thirdpage = () => {
  return (
    <div>
      <div>
        <div
          style={{ backgroundColor: "#0fbcf9", width: "100%", height: "100px" }}
        ></div>
        <div>
          <h1 style={{ paddingLeft: "40px", color: "#4b4b4b" }}>
            My Active projects
          </h1>
        </div>
      </div>
      <div
        className="Card row 01"
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "50px",
          paddingTop: "40px",
          paddingBottom: "200px",
          paddingLeft: "40px",
        }}
      >
        <div className="card01">
          <Card sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* {title} */}
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/img5.jpg"
                alt="green iguana"
              />
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "20px", fontSize: "20px" }}
              >
                dhsjs hsnnsgsj hsufjm hhsgsj jjhddhddh hhdnbdj hshsn jsjsjxu
                jdjdchh
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Details</Button>
              <Box style={{ paddingLeft: "20px" }}></Box>
            </CardActions>
          </Card>
        </div>
        <div className="card02">
          <Card sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* {title} */}
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/img5.jpg"
                alt="green iguana"
              />
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "20px", fontSize: "20px" }}
              >
                dhsjs hsnnsgsj hsufjm hhsgsj jjhddhddh hhdnbdj hshsn jsjsjxu
                jdjdchh
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Details</Button>
              <Box style={{ paddingLeft: "20px" }}></Box>
            </CardActions>
          </Card>
        </div>
        <div className="card03">
          <Card sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* {title} */}
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/img5.jpg"
                alt="green iguana"
              />
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "20px", fontSize: "20px" }}
              >
                dhsjs hsnnsgsj hsufjm hhsgsj jjhddhddh hhdnbdj hshsn jsjsjxu
                jdjdchh
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Details</Button>
              <Box style={{ paddingLeft: "20px" }}></Box>
            </CardActions>
          </Card>
        </div>
      </div>
      <div>
        <h1 style={{ paddingLeft: "40px", color: "#4b4b4b" }}>My Drafts</h1>
      </div>
      <div
        className="My drafts"
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: "50px",
          paddingTop: "40px",
          paddingBottom: "200px",
          paddingLeft: "40px",
        }}
      >
        <div className="card04">
          <Card sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* {title} */}
              </Typography>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/img5.jpg"
                alt="green iguana"
              />
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "20px", fontSize: "20px" }}
              >
                dhsjs hsnnsgsj hsufjm hhsgsj jjhddhddh hhdnbdj hshsn jsjsjxu
                jdjdchh
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Details</Button>
              <Box style={{ paddingLeft: "20px" }}></Box>
            </CardActions>
          </Card>
        </div>
        <div className="new project">
          {/* <Card sx={{ maxWidth: 250 }}>
            <CardActions>
            <div
                style={{
                  position: "relative",
                  top: 80,
                  left: 70,
                  transform: "translate(-50,-50)",
                }}
              >
                <AddIcon
                  sx={{ fontSize: 80, color: lightBlue[300] }}
                />
                <div style={{}}>
                    <h4>Upload media files here to share your story</h4>
                </div>
              </div>

            </CardActions>
          </Card> */}
          <div
            className="add new card wrap"
            style={{
              width: "350px",
              height: "370px",
              backgroundColor: "#f5f6fa",
            }}
          >
            <div
              className="add new card icon"
              style={{
                position: "relative",
                top: 100,
                left: 122,
                transform: "translate(-50,-50)",
              }}
            >
              <AddIcon sx={{ fontSize: 80, color: lightBlue[300] }} />
            </div>
            <div className="add new card icon text">
              <Typography
                variant="body2"
                color="text.secondary"
                style={{
                  paddingTop: "120px",
                  fontSize: "20px",
                  paddingLeft: "76px",
                  paddingRight: "40px",
                }}
              >
                Create new project
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 style={{ paddingLeft: "40px", color: "#4b4b4b" }}>
            Pending To be Publish
          </h1>
        </div>
        <div
          style={{
            paddingLeft: "40px",
            color: "#0fbcf9",
            fontWeight: "lighter",
          }}
        >
          <h4>No action requerd from your end</h4>
        </div>
        <div
          className="Pending To be Publish card"
          style={{
            paddingTop: "30px",
            paddingBottom: "40px",
            paddingLeft: "40px",
          }}
        >
          <Card sx={{ maxWidth: 250 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* {title} */}
              </Typography>
              <div
                className="pending badge full"
                style={{ paddingLeft: "165px" }}
              >
                <div
                  className="pending badge"
                  style={{
                    width: "80px",
                    height: "30px",
                    backgroundColor: "#FFC312",
                  }}
                >
                  <h4>Pending</h4>
                </div>
              </div>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/img5.jpg"
                alt="green iguana"
              />
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ paddingTop: "20px", fontSize: "20px" }}
              >
                dhsjs hsnnsgsj hsufjm hhsgsj jjhddhddh hhdnbdj hshsn jsjsjxu
                jdjdchh
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained">Details</Button>
              <Box style={{ paddingLeft: "20px" }}></Box>
            </CardActions>
          </Card>
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
};

export default Thirdpage;
