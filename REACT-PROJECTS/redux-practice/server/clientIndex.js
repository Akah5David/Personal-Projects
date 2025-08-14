import express from "express";
import fs from "fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PULIC_PATH = path.join(__dirname, "..", "public");

app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const filePath = path.join(PULIC_PATH, "data", "client.json");
    const response = await fs.readFile(filePath, "utf-8");
    const data = await JSON.parse(response);

    console.log("data from me: ", data);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error reading JSON: ", error.messsage);
    return res.status(500).json({ error: "Could not read data file" });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const filePath = path.join(PULIC_PATH, "data", "client.json");
    const response = await fs.readFile(filePath, "utf-8"); //returns a string
    const datas = await JSON.parse(response);

    const selecteduserData = datas.find((data) => data.id === req.params.id);

    if (!selecteduserData) {
      console.log("no user is found");
      throw new Error("no user is found");
    }

    console.log("data from me: ", selecteduserData);
    return res.status(200).json(selecteduserData);
  } catch (error) {
    console.error("Error reading JSON: ", error.messsage);
    return res.status(500).json({ error: "Could not read data file" });
  }
});

app.post("/new-user", async (req, res) => {
  try {
    const filePath = path.join(PULIC_PATH, "data", "client.json");
    const newUser = req.body;
    console.log("i am the new user", newUser);

    const response = await fs.readFile(filePath, "utf-8");
    const AppendUsers = [...JSON.parse(response), newUser];

    await fs.writeFile(filePath, JSON.stringify(AppendUsers, null, 2), "utf-8");

    return res.status(200).json({ message: "successfully added a new user" });
  } catch (error) {
    console.error("Error reading JSON: ", error.message);
    return res.status(500).json({ error: "Could not read data file" });
  }
});

app.put("/:id/edit", async (req, res) => {
  try {
    const filePath = path.join(PULIC_PATH, "data", "client.json");
    const response = await fs.readFile(filePath, "utf-8"); //returns a string
    const datas = await JSON.parse(response);

    let selecteduserData = datas.find((data) => data.id === req.params.id);

    if (!selecteduserData) {
      console.log("no user is found");
      throw new Error("no user is found");
    }

    // Update user details with incoming data
    Object.assign(selecteduserData, req.body);

    await fs.writeFile(filePath, JSON.stringify(datas, null, 2), "utf-8");
    return res
      .status(200)
      .json({ message: "successfully updated user details" });
  } catch (error) {
    console.error("Error reading JSON: ", error.message);
    return res.status(500).json({ error: "Could not update data file" });
  }
});
app.post("/:id/favorite", async (req, res) => {
  try {
    const { favorite } = req.body;

    const filePath = path.join(PULIC_PATH, "data", "client.json");
    const response = await fs.readFile(filePath, "utf-8"); //returns a string
    const datas = await JSON.parse(response);

    let selecteduserData = datas.find((data) => data.id === req.params.id);

    if (!selecteduserData) {
      console.log("no user is found");
      throw new Error("no user is found");
    }

    // Update user favorite property with incoming data
    selecteduserData.favorite = favorite;

    await fs.writeFile(filePath, JSON.stringify(datas, null, 2), "utf-8");
    return res
      .status(200)
      .json({ message: "successfully updated user details" });
  } catch (error) {
    console.error("Error reading JSON: ", error.message);
    return res.status(500).json({ error: "Could not update data file" });
  }
});

app.delete("/:id/delete", async (req, res) => {
  try {
    const filePath = path.join(PULIC_PATH, "data", "client.json");
    const response = await fs.readFile(filePath, "utf-8"); //returns a string
    const datas = await JSON.parse(response);

    let filteredUsers = datas.filter((data) => data.id !== req.params.id);

    if (filteredUsers.length === datas.length) {
      console.log("no user is found");
      throw new Error("no user is found");
    }

    await fs.writeFile(
      filePath,
      JSON.stringify(filteredUsers, null, 2),
      "utf-8"
    );
    return res
      .status(200)
      .json({ message: "successfully deleted targeted user" });
  } catch (error) {
    console.error("Error reading JSON: ", error.message);
    return res.status(500).json({ error: "Could not delete user file" });
  }
});

const port = 3000;
app.listen(3000, () => {
  console.log("I am listening to ur request from port: ", port);
});
