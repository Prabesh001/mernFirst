import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import constant from "./constant.js";

cloudinary.config({
  cloud_name: constant.CLOUD_NAME,
  api_key: constant.API_KEY,
  api_secret: constant.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "image",
  },
});

const uploads = multer({ storage: storage });

export { uploads, cloudinary };
