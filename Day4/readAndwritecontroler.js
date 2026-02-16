import readFile from "./readAndwriteFile.js";

const readFileData = async(path) => {
    try{
        const fileData = await readFile(path);
        console.log(fileData);
    }
    catch(error){
        console.log("Error reading file:", error);
    }
}
readFileData("./students.json");