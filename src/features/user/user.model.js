export default class UserModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
  static addUser(name, email, password) {
    const newUser = new UserModel(users.length + 1, name, email, password);
    users.push(newUser);
    return newUser;
  }

  static isUserRegistered(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
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
