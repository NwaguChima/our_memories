import React, { useState, useRef } from "react";
import { Typography, Textfield, Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState("");

  const handleClick = () => {};

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((comment, index) => (
            <Typography key={index} gutterBottom variant="subtitle1">
              comment {index}
            </Typography>
          ))}
        </div>
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant="h6">
            Write a Comment
          </Typography>
          <TextField
            fullWidth
            minRows={4}
            variant="outlined"
            label="Comment"
            multiline
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            fullWidth
            disabled={!comment}
            variant="contained"
            onClick={handleClick}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
