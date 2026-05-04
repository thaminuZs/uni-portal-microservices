## System Architecture

```mermaid
graph TD
    User((User)) --> Gateway

    subgraph SystemBoundary ["UniPortal Microservices System"]
        direction TB
        
        subgraph External ["Entry Point"]
            Gateway[("Gateway Container")]
        end

        subgraph LogicTier ["Service Layer"]
            Lecturer[("Lecturer Service")]
            Canteen[("Canteen Service")]
            Library[("Library Service")]
        end

        subgraph DataTier ["Storage"]
            DB[("MongoDB Container")]
        end
    end

    %% Communication Flow
    Gateway --> Lecturer
    Gateway --> Canteen
    Gateway --> Library

    Lecturer --> DB
    Canteen --> DB
    Library --> DB

    %% Enhanced Styling for Visibility
    style SystemBoundary fill:#fdfdfd,stroke:#999,stroke-dasharray: 5 5,color:#333
    style Gateway fill:#f96,stroke:#333,stroke-width:2px,color:#000
    style DB fill:#4db33d,stroke:#333,stroke-width:2px,color:#fff
    style Lecturer fill:#fff,stroke:#2496ed,stroke-width:2px,color:#000
    style Canteen fill:#fff,stroke:#2496ed,stroke-width:2px,color:#000
    style Library fill:#fff,stroke:#2496ed,stroke-width:2px,color:#000
```

---

## API Endpoints

### Base URL
> localhost:5000/api

---

### Lecturer Service APIs
> /api/lecturers

**Get All Lecturers**
> GET /api/lecturers

**Get Lecturer By ID**
> GET /api/lecturers/:id

**Create Lecturer**
> POST /api/lecturers

```json
{
  "name": "Dr. Silva",
  "department": "IT",
  "email": "silva@uni.edu"
}
```

**Update Lecturer**
> PUT /api/lecturers/:id

**Delete Lecturer**
> DELETE /api/lecturers/:id

**Mark Attendance**
> POST /api/lecturers/:id/attendance

```json
{
  "status": "present"
}
```

**Get Attendance Logs**
> GET /api/lecturers/:id/attendance

---

### Canteen Service APIs
> /api/canteens

**Get All Canteens**
> GET /api/canteens

**Get Single Canteen**
> GET /api/canteens/:id

**Create canteen**
> POST /api/canteens

**Report Queue Status**
> POST /api/canteens/:id/queue

```json
{
  "level": "high"
}
```

**Get Queue History**
> GET /api/canteens/:id/queue

---

### Library Service APIs
> /api/libraries

**Get All Libraries**
> GET /api/libraries

**Get Single Library**
> GET /api/libraries/:id

**Create Library**
> POST /api/libraries

**Update Occupancy**
> POST /api/libraries/:id/occupancy

```json
{
  "count": 320
}
```

**Get Current Occupancy**
> GET /api/libraries/:id/occupancy

**Get Occupancy Logs**
> GET /api/libraries/:id/occupancy/logs

---

### Gateway APIs

**Dashboard API**
> GET /api/dashboard

```json
{
  "lecturersPresent": 12,
  "canteens": [
    { "name": "Ammachchi", "queue": "high" }
  ],
  "libraries": [
    { "name": "Main", "status": "full" }
  ]
}
```

---