import { readFile } from "fs/promises";

async function readMyFile() {
  try {
    const data = await readFile("./data.txt", "utf-8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

readMyFile();




import { writeFile } from "fs/promises";

async function writeMyFile() {
  try {
    await writeFile("./output.txt", "Hello World");
    console.log("File written!");
  } catch (err) {
    console.error(err);
  }
}

writeMyFile();




import { appendFile } from "fs/promises";

await appendFile("log.txt", "New entry...\n");
console.log("Appended!");




import { access } from "fs/promises";

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

console.log(await exists("log.txt")); // true / false





import { mkdir } from "fs/promises";

await mkdir("uploads", { recursive: true });
console.log("Folder created");



import { readdir } from "fs/promises";

const files = await readdir("./uploads");
console.log(files);


import { unlink } from "fs/promises";

await unlink("old.txt");
console.log("File deleted");


import { copyFile } from "fs/promises";

await copyFile("source.txt", "backup.txt");
console.log("Copied!");


import { rename } from "fs/promises";

await rename("oldname.txt", "newname.txt");
console.log("Renamed");

