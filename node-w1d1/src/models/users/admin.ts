import { GENDER, TITLE, ROLE } from "../../interfaces/user";
import { User } from "./user";

export class Admin extends User {
  constructor(
    title: TITLE,
    fname: string,
    lname: string,
    age: number,
    gender: GENDER,
    height: number,
    weight: number,
    role: ROLE = ROLE.ADMIN
  ) {
    super(title, fname, lname, age, gender, height, weight, role);
  }
}
