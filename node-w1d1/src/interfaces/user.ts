export enum TITLE {
  MR = "Mr",
  MISS = "Miss",
  MRS = "Mrs",
}

export enum GENDER {
  MALE = "male",
  FEMALE = "female",
}

export enum ROLE {
  ADMIN = 'admin',
  PATIENT = 'patient',
  PHYSICIAN = 'physician'
}

export interface User {
  title: TITLE;
  fname: string;
  lname: string;
  age: number;
  gender: GENDER;
  height: number;
  weight: number;
}
