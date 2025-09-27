const mong= require("mongoose");
const connectDB = async () => {
  try {
    await mong.connect("mongodb://127.0.0.1:27017/todoDB");
    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
