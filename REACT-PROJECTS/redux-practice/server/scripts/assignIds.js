import fs from "fs/promises";
import path from "node:path";
import process from "process";

function generateId() {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

async function assignIds() {
  const filePath = path.join(
    process.cwd(),
    "..",
    "..",
    "public",
    "data",
    "user.json"
  );
  const data = await fs.readFile(filePath, "utf-8");
  const users = JSON.parse(data);

  const updatedUsers = users.map((user) => ({
    ...user,
    id: user.id && user.id !== "" ? user.id : generateId(),
  }));

  await fs.writeFile(filePath, JSON.stringify(updatedUsers, null, 2), "utf-8");
  console.log("IDs assigned!");
}

async function assignFavorite() {
  const filePath = path.join(
    process.cwd(),
    "..",
    "..",
    "public",
    "data",
    "user.json"
  );
  const data = await fs.readFile(filePath, "utf-8");
  const users = JSON.parse(data);

  const updatedUsers = users.map((user) => ({
    ...user,
    favorite: user.favorite && user.favorite !== "" ? user.favorite : "empty",
  }));
  await fs.writeFile(filePath, JSON.stringify(updatedUsers, null, 2), "utf-8");
  console.log("IDs assigned!");
}

assignIds().catch(console.error);
assignFavorite().catch(console.error);
