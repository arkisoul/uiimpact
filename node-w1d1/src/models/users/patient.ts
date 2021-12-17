import { GENDER, TITLE, ROLE } from "../../interfaces/user";
import { User } from "./user";

export class Patient extends User {
  allergies: Array<string>;
  medications: Array<string>;
  
  constructor(
    title: TITLE,
    fname: string,
    lname: string,
    age: number,
    gender: GENDER,
    height: number,
    weight: number,
    allergies: Array<string>,
    medications: Array<string>,
    role: ROLE = ROLE.PATIENT,
  ) {
    super(title, fname, lname, age, gender, height, weight, role);
    this.allergies = allergies;
    this.medications = medications;
  }
}
