#### Base URL
> http://localhost:5000/api

---

#### Lecturer Service APIs
> /api/lecturers

**Get All Lecturers**

> GET /api/lecturers


**Get Lecturer By ID**

> GET /api/lecturers/:id


**Create Lecturer**

> POST /api/lecturers

_{
  "name": "Dr. Silva",
  "department": "IT",
  "email": "silva@uni.edu"
}_


**Update Lecturer**

> PUT /api/lecturers/:id


**Delete Lecturer**

> DELETE /api/lecturers/:id


**Mark Attendance**

> POST /api/lecturers/:id/attendance

_{
  "status": "present"
}_


**Get Attendance Logs**

> GET /api/lecturers/:id/attendance

---


