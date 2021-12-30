# Express - Assignment

### Problem statement
#### PATIENTS
- Create a collection name `patients` in your db.
- Route GET `/patients`
    Send all patients data
- Route POST `/patients`. Create a new patient. Either you can send the data in query params for the new patient or use static data.
- Route PUT `/patients/:patientId`. Update a patient document wrt patient id received in url param. Either you can send the data in query params for the new patient or use static data.
- Route DELETE `/patients/:patientId`. Delete a patient document wrt patient id received in url param.

#### PHYSICIANS
- Create a collection name `physicians` in your db.
- Route GET `/physicians`
    Send all physicians data
- Route POST `/physicians`. Create a new physician. Either you can send the data in query params for the new physician or use static data.
- Route PUT `/physicians/:physicianId`. Update a physician document wrt physician id received in url param. Either you can send the data in query params for the new physician or use static data.
- Route DELETE `/physicians/:physicianId`. Delete a physician document wrt physician id received in url param.


### Problem statement -- PART II
- Add profile image to patients document
    - Route PUT `/patients/profile-image`. Send image, save that image to a folder and save the path in database.
- Get patient details
    - Route GET `/patients/:patientId`. Return patient details by patient id

- Add profile image to physicians document
    - Route PUT `/physicians/profile-image`. Send image, save that image to a folder and save the path in database.
- Get physicians details
    - Route GET `/physicians/:physicianId`. Return physicians details by patient id

### Explore - Either using MongoDB driver or mongoose
    - How can we select some fields of a document at the of querying it? i.e. select and return only name, email, and phone fields from a patient.
    - How can we query and sort the data?
    - How can we query paginated data?

    Implement above concepts in some way in GET patients and GET physicians route