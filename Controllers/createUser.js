// Endpoint to create a new User
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createNewUser = async (req, res) => {
  const { firstname, lastname, email, username, password } = req.body;

  if (
    !firstname ||
    !lastname ||
    !email ||
    !username ||
    !password
  ) {
    console.log("Please center all credentials");
      res.status(400).send({ error: "You have entered invaid Credentials" });
  }
  else {

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const newUser = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: username,
        password: hashedPassword
      },
    });
    return (
      console.log(newUser),
      res.status(201).send({ message: "User created sucessfully" })
    );
  } catch (error) {
      res.status(500).send({ error: "Internal Server Error" })
  }
}
};

module.exports = { createNewUser };
