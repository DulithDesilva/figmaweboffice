import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AttachmentIcon from "@mui/icons-material/Attachment";

function Secondpage() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#0fbcf9", width: "100%", height: "100px" }}
      ></div>
      <div>
        <h1 style={{ paddingLeft: "40px", color: "#4b4b4b" }}>
          KELP - Renewable Energy Research
        </h1>
      </div>
      <div
        className="card row 01"
        style={{
          display: "flex",
          aligntem: "center",
          marginTop: "40px",
          paddingTop: "30px",
        }}
      >
        <div
          className="Card01"
          style={{ paddingRight: "50px", paddingLeft: "90px" }}
        >
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/sola.png"
                alt="sola panels"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Project Details
                </Typography>
                <div style={{ display: "flex", aligntem: "center" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="lightblue"
                    paddingRight="30px"
                  >
                    Belo Horizonate
                  </Typography>
                  {/* <div style={{ display: "flex", aligntem: "center" }}> */}
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    color="lightblue"
                  >
                    Belo Horizonate
                  </Typography>
                  {/* </div> */}
                </div>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div class className="Card02">
          <Card sx={{ maxWidth: 400 }}>
            <CardContent>
              {/* <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography> */}
              {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/img5.jpg"
            alt="green iguana"
          /> */}
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="blue"
              >
                $ 10,000
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                funding Goal $ 60,000
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="blue"
              >
                KELP Pvt Ltd
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="div">
                initiator
              </Typography>
              <div>
                <Stack spacing={10} direction="row">
                  <Button variant="contained">Fund this project</Button>
                </Stack>
              </div>
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
              <Button variant="contained">Fund Project</Button>
              <Box style={{ paddingLeft: "20px" }}>
                <BookmarkBorderIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <AttachmentIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
              </Box>
            </CardActions>
          </Card>
        </div>
      </div>
      {/* <div style={{ display: "flex", aligntem: "center" }}>
        <h1>Key Features</h1>
        <h1>Key Features</h1>
      </div> */}
      <div
        className="card row 02"
        style={{
          display: "flex",
          aligntem: "center",
          marginTop: "40px",
          paddingTop: "30px",
        }}
      >
        <div
          className="Card03"
          style={{ paddingRight: "50px", paddingLeft: "90px" }}
        >
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Key Features
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bolder"
                >
                  <ul>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="Card04" style={{ backgroundColor: "#70a1ff" }}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Profitability
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bolder"
                >
                  <ul>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                    <li>
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <div
        style={{
          paddingTop: "70px",
          paddingBottom: "5px",
          paddingLeft: "40px",
          color: "#4b4b4b"
        }}
      >
        <h1>Sustainability Commitments</h1>
      </div>
      <div
        className="Sustainability Commitments logos"
        style={{
          display: "flex",
          aligntem: "center",
          paddingTop: "30px",
          paddingLeft: "100px",
        }}
      >
        <Avatar
          // component={RouterLink}
          src={"/static/images/GRI.png"}
          sx={{
            cursor: "pointer",
            width: 100,
            height: 100,
            borderRadius: "0px",
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
          }}
          // to="/app/account"
        />
        <Avatar
          // component={RouterLink}
          src={"/static/images/SASB.png"}
          sx={{
            cursor: "pointer",
            width: 100,
            height: 100,
            borderRadius: "0px",
          }}
          // to="/app/account"
        />
      </div>
      <div
        style={{
          paddingTop: "70px",
          paddingBottom: "5px",
          paddingLeft: "40px",
          color: "#4b4b4b"
        }}
      >
        <h1>SDG's of Application</h1>
      </div>
      <div
        className="SDG's of Application logos"
        style={{
          display: "flex",
          aligntem: "center",
          paddingTop: "30px",
          paddingLeft: "100px",
        }}
      >
        <Avatar
          // component={RouterLink}
          src={"/static/images/6clean.png"}
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
          src={"/static/images/8decent.png"}
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
          src={"/static/images/15life.png"}
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
          src={"/static/images/5gender.png"}
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
        style={{
          paddingTop: "70px",
          paddingLeft: "40px",
          color: "#4b4b4b"
        }}
      >
        <h1>Consultant</h1>
      </div>
      <div
        className="consultetnt row"
        style={{
          display: "flex",
          aligntem: "center",
          marginTop: "20px",
          paddingTop: "30px",
          paddingBottom:"40px"
        }}
      >
        <div className="consultetnt row boy" style={{ paddingLeft: "100px" }}>
          <Card sx={{ maxWidth: 180 }}>
            <CardActionArea>
              <Avatar
                // component={RouterLink}
                src={"/static/images/p2boy.png"}
                sx={{
                  cursor: "pointer",
                  width: 100,
                  height: 100,
                  borderRadius: "0px",
                  // paddingRight: "40px",
                  paddingLeft: "40px",
                }}
                // to="/app/account"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mecing & Co.
                </Typography>
                <div style={{ display: "flex", aligntem: "center" }}></div>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="consultetnt row girl" style={{ paddingLeft: "100px" }}>
          <Card sx={{ maxWidth: 180 }}>
            <CardActionArea>
              <Avatar
                // component={RouterLink}
                src={"/static/images/p2girl.png"}
                sx={{
                  cursor: "pointer",
                  width: 100,
                  height: 100,
                  borderRadius: "0px",
                  // paddingRight: "40px",
                  paddingLeft: "40px",
                }}
                // to="/app/account"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Nuni RDR
                </Typography>
                <div style={{ display: "flex", aligntem: "center" }}></div>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
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
        <h4 style={{ paddingLeft: "150px",fontWeight: "lighter",color:"#8395a7" }}>Trivity 2020</h4>
          <h4 style={{ fontWeight: "lighter",color:"#8395a7" }}>Trust & safty</h4>
          <h4 style={{ fontWeight: "lighter",color:"#8395a7" }}>Terms of use</h4>
          <h4 style={{ fontWeight: "lighter",color:"#8395a7" }}>Privte policy</h4>
      </div>
    </div>
  );
}

export default Secondpage;
