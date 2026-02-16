import fs from "fs/promises";
const readFile = async (path) => {
    try{
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);
    }
    catch(error){
        return "unable to read file";
}
}
// readFile("./student.json")
// .then((data) => console.log(data))
// .catch((error) => console.log("Error reading file:", error));
export default readFile;