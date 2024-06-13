import { getAllUsers, storeUsers } from "../models/userModel.js"; // pastikan menggunakan jalur relatif dan menyertakan ekstensi .js
// import { storeUsers } from "../models/userModel.js"; // pastikan menggunakan jalur relatif dan menyertakan ekstensi .js

export const getUsers = (req, res) => {
  getAllUsers((error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
};

export const createUsers = (req, res) => {
  storeUsers((error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
};