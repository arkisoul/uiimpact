import {Admin} from '../models/users/admin'
import {Patient} from '../models/users/patient'
import {Physician} from '../models/users/physician'

class UserService {
    #admins: Admin[] = [];
    private patients: Patient[] = [];
    private physicians: Array<Physician> = [];

    public createAdmin(admin: Admin) {
        const newAdmin = new Admin(admin.title, admin.fname, admin.lname, admin.age, admin.gender, admin.height, admin.weight);
        this.#admins.push(newAdmin);
    }

    public createPatient(patient: Patient) {
        const newPatient = new Patient(
          patient.title,
          patient.fname,
          patient.lname,
          patient.age,
          patient.gender,
          patient.height,
          patient.weight,
          patient.allergies,
          patient.medications
        );
        this.patients.push(newPatient);
    }

    public createPhsician(physician: Physician) {
        const newPhysician = new Physician(
          physician.title,
          physician.fname,
          physician.lname,
          physician.age,
          physician.gender,
          physician.height,
          physician.weight,
          physician.qualification,
          physician.address
        );
        this.physicians.push(newPhysician);
    }

    public getAdmins(): Admin[] {
        return this.#admins;
    } 
    
    public getPatients(): Patient[] {
        return this.patients;
    } 
    
    public getPhysicians(): Physician[] {
        return this.physicians;
    } 
}

export const userService = new UserService();