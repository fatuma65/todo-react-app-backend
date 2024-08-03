require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secretKey = process.env.SECRET_KEY;
const prisma = new PrismaClient();

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("You have entered the wrong credentials");
    res.status(400).json({ error: "You have entered the wrong credentials" });
  } else {
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!user) {
        console.log("User is not Found");
        res.status(404).send({ message: "User is not found" });
      } else {
        const ispassword = await bcrypt.compare(password, user.password);

        if (!ispassword) {
          console.log("The password you have entered is not correct");
          res
            .status(400)
            .json({ message: "The password you have entered is not correct" });
        } else {
          const token = jwt.sign(
            { userid: user.id, email: user.email },
            secretKey,
            { expiresIn: "1h" }
          );
          console.log(token);

          console.log("You are logged in successfully");
          res
            .status(200)
            .send({ message: "You are logged in successfully", token: token });
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  }
};

module.exports = { loginUser };
