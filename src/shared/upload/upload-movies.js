import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "./src/public/movies"),
  filename: (req, file, cb) => {
    const customeFileName = `${Date.now()}` + path.extname(file.originalname);
    cb(null, customeFileName);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedExtensions = [".jpg", ".jpeg", ".png"];
    const fileExtension = path.extname(file.originalname);

    if (allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
  limits: {
    files: 1,
    fileSize: 1024 * 1024 * 1024,
  },
}).single("image");

export default upload;
