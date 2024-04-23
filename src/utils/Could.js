import {v2 as cloudinary} from "cloudinary";
import { fS } from "fs";

cloudinary.config({ 
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
      api_key: process.env.CLOUDINARY_API_KEY, 
      api_secret: process.env.CLOUDINARY_API_SECRET 
    });


const uploadonCloudinary = async (localFilePath) => {
      try {
            if (!localFilePath) return null
            const res = await cloudinary.uploader.upload(localFilePath,{
                  resource_type:"auto"
            })
                // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url)
        fS.unlinkSync(localFilePath)
        return res
      } catch (error) {
            fS.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
            return null;
      }

}
export { uploadonCloudinary}