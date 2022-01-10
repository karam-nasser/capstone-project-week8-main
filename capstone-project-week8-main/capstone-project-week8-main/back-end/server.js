const express = require("express");
const cors = require("cors");
let links = require("./data");
const { instagram } = require("./data");

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get("/", (req, res) => {
  res.json("Server is running!");
});

app.get("/links", (req, res) => {
  res.json(links);
});

app.post("/links", (req, res) => {
  let { facebook, instagram, twitter, amazon } = req.body;

  if (!facebook) facebook = "n/a";
  if (!instagram) instagram = "n/a";
  if (!twitter) twitter = "n/a";
  if (!amazon) amazon = "n/a";
  links = {
    facebook,
    instagram,
    twitter,
    amazon,
  };
});

app.post("/phone", (req, res) => {
  res.send(
    `<b>Contact information submitted is:</b> 
      <ul> 
        <li>${links.facebook}</li>  
        <li> ${links.instagram}</li> 
        <li>${links.twitter} </li> 
        <li>${links.amazon} </li>
      </ul>`
  );
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
