
# 🧑‍💼 Job Portal Backend API

This is a Node.js + MongoDB backend API for a simple job portal similar to Upwork. It includes features for user authentication, job posting, job applications, and saved jobs.

---

## 🚀 Features

- ✅ User Registration & Login (JWT)
- ✅ View & Update Profile
- ✅ Create, View, Filter Jobs
- ✅ Apply to Jobs
- ✅ View & Delete Job Applications
- ✅ Save & Unsave Jobs
- ✅ Get List of Saved Jobs

---

## 📦 Tech Stack

- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **JWT** for Authentication
- **bcryptjs** for Password Hashing
- **dotenv**, **cors**, **helmet**, **morgan**

---

## 🛠 Setup Instructions

### 1. Clone the repo and install dependencies

```bash
git clone https://your-repo-url
cd job-portal-backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file:

```
PORT=5001
MONGO_URI=mongodb://localhost:27017/job-portal
JWT_SECRET=your_jwt_secret
```

### 3. Run the Server

```bash
npm run dev  # if using nodemon
# or
node server.js
```

---

## 🌱 Seed Test Data

Seed users:

```bash
node seeder/seedUsers.js
```

Seed jobs:

```bash
node seeder/seedJobs.js
```

---

## 🧪 API Testing

Use the provided Postman collection:

📁 `job-portal-api.postman_collection.json`

You can import it into Postman or Thunder Client.

Set the following variables:

- `{{token}}` — JWT from login
- `{{jobId}}` — any job's `_id`
- `{{applicationId}}` — any application `_id`

---

## 📂 Folder Structure

```
/models            --> Mongoose schemas
/controllers       --> Route logic
/routes            --> API endpoints
/middleware        --> Auth & error handling
/seeder            --> Test data scripts
/config            --> DB connection
```

---

## 📬 API Endpoints Overview

| Method | Endpoint                     | Description                     |
|--------|------------------------------|---------------------------------|
| POST   | /api/auth/register           | Register a new user             |
| POST   | /api/auth/login              | Login and get JWT               |
| GET    | /api/auth/me                 | Get current user profile        |
| PUT    | /api/users/me                | Update user profile             |
| GET    | /api/users/me/saved          | Get saved jobs                  |
| GET    | /api/jobs                    | List all jobs                   |
| GET    | /api/jobs/:id                | Get single job                  |
| GET    | /api/jobs/filter             | Filter jobs                     |
| POST   | /api/jobs                    | Create a new job                |
| POST   | /api/jobs/:id/save           | Save a job                      |
| DELETE | /api/jobs/:id/save           | Unsave a job                    |
| POST   | /api/applications            | Apply to a job                  |
| GET    | /api/applications            | Get applied jobs                |
| DELETE | /api/applications/:id        | Delete an application           |

---

## 🧑‍💼 Author

Built by **Abenezer Kifle**  
Feel free to contribute or fork!

