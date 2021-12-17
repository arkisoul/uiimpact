import { GENDER, ROLE, TITLE } from "./src/interfaces/user";
import { userService } from "./src/services/user.service";

userService.createAdmin({title: TITLE.MR, fname: 'John', lname: 'Doe', gender: GENDER.MALE, age: 55, height: 168, weight: 66, role: ROLE.ADMIN})

userService.createPatient({
  title: TITLE.MR,
  fname: "Jonas",
  lname: "Doe",
  gender: GENDER.MALE,
  age: 25,
  height: 176,
  weight: 63,
  role: ROLE.PATIENT,
  allergies: ["dust", "pollen"],
  medications: ["paracetamol", "calpol"],
});

userService.createPatient({
  title: TITLE.MR,
  fname: "Jonas",
  lname: "Doe",
  gender: GENDER.MALE,
  age: 25,
  height: 176,
  weight: 63,
  role: ROLE.PATIENT,
  allergies: ["dust", "pollen"],
  medications: ["paracetamol", "calpol"],
});

userService.createPhsician({
  title: TITLE.MRS,
  fname: "Jane",
  lname: "Doe",
  gender: GENDER.FEMALE,
  age: 42,
  height: 172,
  weight: 58,
  role: ROLE.PHYSICIAN,
  qualification: 'MS Neurologist',
  address: {
      street: 'MG Road',
      city: 'Mumbai',
      pincode: 400021,
  },
});

console.log(userService.getAdmins());
console.log(userService.getPatients());
console.log(userService.getPhysicians());