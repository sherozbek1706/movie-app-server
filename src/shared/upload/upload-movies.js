import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "./src/public/movies"),
  filename: (req, file, cb) => {
    const customeFileName = `${Date.now()}` + path.extname(file.originalname);
    cb(null, customeFileName);
  },
});

