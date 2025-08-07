import express from "express";
import https from "https";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  console.log("API Key:", process.env.MOVIE_KEY);
  const options = {
    method: "GET",
    hostname: "imdb236.p.rapidapi.com",
    path: "/api/imdb/search?type=movie&genre=Drama&rows=25&sortOrder=ASC&sortField=id",
    headers: {
      "x-rapidapi-key": process.env.MOVIE_KEY,
      "x-rapidapi-host": "imdb236.p.rapidapi.com",
    },
  };

  const apiReq = https.request(options, function (apiRes) {
    const chunks = [];

    apiRes.on("data", function (chunk) {
      chunks.push(chunk);
    });

    apiRes.on("end", function () {
      const body = Buffer.concat(chunks);
      res.send(JSON.parse(body.toString()));
    });
  });

  apiReq.on("error", (e) => {
    res.status(500).send("Error fetching data: " + e.message);
  });

  apiReq.setTimeout(10000, () => {
    res.status(504).send("Upstream API timed out");
    apiReq.abort();
  });

  apiReq.end();
});

app.listen(3000, () => {
  console.log("I am listening to your request");
});
