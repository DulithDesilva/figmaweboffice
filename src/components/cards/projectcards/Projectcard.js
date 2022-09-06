import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AttachmentIcon from "@mui/icons-material/Attachment";

const Projectcard = ({ title }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
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
            dhsjs hsnnsgsj hsufjm hhsgsj jjhddhddh hhdnbdj hshsn jsjsjxu jdjdchh
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Fund Project</Button>
          <Box style={{ paddingLeft: "20px" }}>
            <BookmarkBorderIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <AttachmentIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          </Box>
        </CardActions>
      </Card>
    </div>
  );
};

export default Projectcard;
