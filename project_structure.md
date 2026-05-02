# University Portal - Microservices Project Structure

## Root Structure

```
university-portal/
│
├── gateway/
├── services/
│   ├── lecturer-service/
│   ├── canteen-service/
│   └── library-service/
│
├── shared/            (optional but useful)
│   ├── utils/
│   ├── middleware/
│   └── constants/
│
├── docker-compose.yml (later)
└── README.md
```

---

## Gateway

```
gateway/
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── routes/
│   │   ├── lecturer.proxy.js
│   │   ├── canteen.proxy.js
│   │   └── library.proxy.js
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── rateLimit.middleware.js
│   │
│   └── config/
│       └── services.js   (URLs of services)
│
├── package.json
```

---

## Lecturer Service

```
services/lecturer-service/
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── routes/
│   │   └── lecturer.routes.js
│   │
│   ├── controllers/
│   │   └── lecturer.controller.js
│   │
│   ├── services/
│   │   └── lecturer.service.js
│   │
│   ├── models/
│   │   └── lecturer.model.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   └── middleware/
│       └── error.middleware.js
│
├── package.json
```

---

## Canteen Service

```
services/canteen-service/
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── routes/
│   │   └── canteen.routes.js
│   │
│   ├── controllers/
│   │   └── canteen.controller.js
│   │
│   ├── services/
│   │   └── canteen.service.js
│   │
│   ├── models/
│   │   ├── canteen.model.js
│   │   └── report.model.js
│   │
│   ├── utils/
│   │   └── queueCalculator.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   └── middleware/
│       └── rateLimit.middleware.js
│
├── package.json
```

---

## Library Service

```
services/library-service/
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── routes/
│   │   └── library.routes.js
│   │
│   ├── controllers/
│   │   └── library.controller.js
│   │
│   ├── services/
│   │   └── library.service.js
│   │
│   ├── models/
│   │   └── library.model.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   └── middleware/
│       └── error.middleware.js
│
├── package.json
```
