import {User as IUser, GENDER, TITLE, ROLE} from '../../interfaces/user';

export class User implements IUser {
    constructor(
        public title: TITLE,
        public fname: string,
        public lname: string,
        public age: number,
        public gender: GENDER,
        public height: number,
        public weight: number,
        public role: ROLE
    ) {
    }
}