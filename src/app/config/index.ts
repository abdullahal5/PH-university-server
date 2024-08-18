import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_password: process.env.DEFAULT_PASS,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  NODE_ENV: process.env.NODE_ENV,
  Jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  Jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  Jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  Jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  Reset_pass_ui_link: process.env.RESET_PASSWORD_UI_LINk,
  Cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  Cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  Cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};
