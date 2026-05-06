## System Architecture

```mermaid
graph TD
    %% Class Definitions
    classDef userStyle fill:#333,stroke:#000,stroke-width:2px,color:#fff;
    classDef gatewayStyle fill:#E67E22,stroke:#D35400,stroke-width:2px,color:#fff;
    classDef serviceStyle fill:#2980B9,stroke:#1C5980,stroke-width:2px,color:#fff;
    classDef dbStyle fill:#27AE60,stroke:#1E8449,stroke-width:2px,color:#fff;
    classDef boundaryStyle fill:#ffffff,stroke:#7F8C8D,stroke-width:2px,stroke-dasharray: 5 5,color:#2C3E50;

    %% External User
    User((<b>User</b>)):::userStyle

    subgraph SystemBoundary ["<b>UniPortal System</b>"]
        
        subgraph Layer1 ["<b>Entry Point</b>"]
            Gateway["<b>Gateway Container</b><br>Bun.js - Elysia"]:::gatewayStyle
        end

        subgraph Layer2 ["<b>Service Layer</b>"]
            Auth["&nbsp;&nbsp;&nbsp;&nbsp;<b>Auth Service Container</b>&nbsp;&nbsp;&nbsp;&nbsp;<br>Node.js - Express"]:::serviceStyle
            Lecturer["&nbsp;&nbsp;&nbsp;&nbsp;<b>Lecturer Service Container</b>&nbsp;&nbsp;&nbsp;&nbsp;<br>Node.js - Express"]:::serviceStyle
            Canteen["&nbsp;&nbsp;&nbsp;&nbsp;<b>Canteen Service Container</b>&nbsp;&nbsp;&nbsp;&nbsp;<br>Node.js - Express"]:::serviceStyle
            Library["&nbsp;&nbsp;&nbsp;&nbsp;<b>Library Service Container</b>&nbsp;&nbsp;&nbsp;&nbsp;<br>Node.js - Express"]:::serviceStyle
        end

        subgraph Layer3 ["<b>Data Tier</b>"]
            DB[("<b>MongoDB Container</b>")]:::dbStyle
        end
    end

    %% Communication Flow
    User -- "Request" --> Gateway
    
    Gateway -- "Authenticates/Fetches" --> Auth
    Gateway -- "Fetches from" --> Lecturer
    Gateway -- "Fetches from" --> Canteen
    Gateway -- "Fetches from" --> Library

    Auth -- "Read/Write" --> DB
    Lecturer -- "Read/Write" --> DB
    Canteen -- "Read/Write" --> DB
    Library -- "Read/Write" --> DB

    %% Apply Style to Boundaries
    class SystemBoundary,Layer1,Layer2,Layer3 boundaryStyle

    %% FORCING ARROW VISIBILITY
    linkStyle default stroke:#555,stroke-width:2px;
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
  "name": "Dr. Kayanan",
  "department": "Physical Science",
  "email": "kayanan@vau.edu"
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

**Create Canteen**
> POST /api/canteens

**Update Menu**
> PATCH /api/canteens/:id/menu

```json
{
  "menu": ["rice", "thosai"]
}
```

**Report Queue Status**
> POST /api/canteens/:id/queue

```json
{
  "level": "high"
}
```

**Get Queue History**
> GET /api/canteens/:id/queue/logs

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