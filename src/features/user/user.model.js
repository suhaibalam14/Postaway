import { ApplicationError } from "../../errorHandler/applicationError.js";

export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static addUser(name, email, password) {
    try {
      const newUser = new UserModel(users.length + 1, name, email, password)
      users.push(newUser)
      return newUser;
    } catch (error) {
      console.log(error)
      throw new ApplicationError('Something went wrong', 500);
    }
  }

  static isUserRegistered(email, password) {
    try {
      const user = users.find((u) => u.email == email && u.password == password);
      return user;
    } catch (error) {
      console.log(error)
      throw new ApplicationError('Something went wrong', 500);
    }

  }
}

export var users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    password: "Password123@",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@example.com",
    password: "Password123@",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    password: "Password123@",
  },
];
