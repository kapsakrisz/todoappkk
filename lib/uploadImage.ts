import {ID,storage} from "@/appwrite";



const uploadImage= async (file:File)=> {
    if(!file) return;
    const fileUploaded = await storage.createFile(
        "64763936db0529e8fe53",
        ID.unique(),
        file
    );


    return fileUploaded;
}


export default uploadImage;