const { default: axios } = require("axios");
const express = require("express");

const app = express();
app.use(express.json());

app.post("/events", async (req, res) => {
  console.log("Received Event: ", req.body.type);
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Moderation Listening on 4003");
});
