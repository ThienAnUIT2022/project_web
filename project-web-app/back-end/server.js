// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");
import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt, { decode } from "jsonwebtoken";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "backpackprj",
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authenticated" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not okey" });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", firstName: req.firstName });
});

app.post("/register", (req, res) => {
  const loginSql =
    "INSERT INTO login (`firstName`, `lastName`, `email`, `password`) VALUES (?)";
  const profileSql =
    "INSERT INTO profile (`firstName`, `lastName`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.password,
  ];
  db.query(loginSql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
  db.query(profileSql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      const email = data[0].email;
      const token = jwt.sign({ email }, "jwt-secret-key", { expiresIn: "1d" });
      res.cookie("token", token);
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

app.get("/userdata", verifyUser, (req, res) => {
  console.log("Request received with email:", req.email);
  const sql =
    "SELECT `firstName`, `lastName`, `phoneNumber`,  `birthDay`, `gender`, `address`, `email`, `password` FROM profile WHERE `email` = ?";
  db.query(sql, [req.email], (err, data) => {
    if (err) {
      return res.json({ Error: "Error fetching data" });
    }
    if (data.length > 0) {
      const userData = {
        firstName: data[0].firstName,
        lastName: data[0].lastName,
        phoneNumber: data[0].phoneNumber,
        birthDay: data[0].birthDay,
        gender: data[0].gender,
        address: data[0].address,
        email: data[0].email,
        password: data[0].password,
      };
      return res.json(userData);
    } else {
      return res.json({ Error: "User not found" });
    }
  });
});

app.post("/updateprofile", (req, res) => {
  const updateProfileSql =
    "UPDATE profile SET `phoneNumber` = ?, `birthDay` = ?, `gender` = ?, `address` = ? WHERE `email` = ?";
  db.query(
    updateProfileSql,
    [
      req.body.phoneNumber,
      req.body.birthDay,
      req.body.gender,
      req.body.address,
      req.body.email,
    ],
    (updateErr, updateData) => {
      if (updateErr) {
        return res.json("Error");
      }
      return res.json("Success");
    }
  );
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});

app.post("/upload", upload.single("imgAvatar"), (req, res) => {
  console.log(req.file);
  console.log(req.body.email);
  try {
    const imgAvatar = req.file.filename;
    const sql = "UPDATE profile SET imgAvatar = ? WHERE `email` = ?";
    db.query(sql, [imgAvatar, req.body.email], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ Message: "Error processing upload" });
      }
      return res.json({ Status: "Success" });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ Message: "Internal server error" });
  }
});

app.get("/uploadAvatar", verifyUser, (req, res) => {
  const sql = "SELECT `imgAvatar` FROM profile WHERE `email` = ?";
  db.query(sql, [req.email], (err, result) => {
    if (err) {
      return res.json({ Error: "Error" });
    }
    if (result.length > 0) {
      return res.json(result);
    } else {
      return res.json({ imgAvatar: null });
    }
  });
});

app.get("/verifyUser", verifyUser, (req, res) => {
  return res.json({ Status: "Success" });
});

app.listen(8081, () => {
  console.log("listening");
});
