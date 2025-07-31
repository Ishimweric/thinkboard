# 🧠 Thinkboard - A MERN Stack Note-Taking Application

**Thinkboard** is a minimalist, full-stack note-taking application built with the **MERN** (MongoDB, Express.js, React, Node.js) stack. It allows users to effortlessly create, view, and manage their thoughts and ideas within a clean, intuitive, and highly responsive interface.

---

## ✨ Features

- **Create Notes**: Quickly add new notes with a title and detailed content.
- **View Notes**: See all your notes displayed in a clean, card-based layout.
- **Rate Limiting**: Protects the API from excessive requests using Upstash Redis, ensuring fair usage and preventing abuse.
- **Responsive Design**: Optimized for seamless viewing and interaction across all devices (mobile, tablet, desktop).
- **Live Deployment**: Easily deployable to cloud platforms like Render. **You can visit the live application here: [https://thinkboard-frpj.onrender.com](https://thinkboard-frpj.onrender.com)**
- **CRUD Operations**: Full support for Create, Read (with future Update/Delete).

---

## 🚀 Technologies Used

### Frontend (Client-Side)

- **React** – Build dynamic and interactive UIs
- **Vite** – Lightning-fast development tooling
- **Tailwind CSS** – Utility-first styling
- **DaisyUI** – Pre-styled Tailwind components
- **React Router DOM** – Declarative routing
- **Axios** – HTTP client for API communication
- **React Hot Toast** – Beautiful toast notifications
- **Lucide React** – Open-source SVG icons

### Backend (Server-Side)

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB Atlas** – Cloud-based NoSQL database
- **Mongoose** – MongoDB object modeling
- **Upstash Redis** – Serverless Redis for rate limiting
- **Express Rate Limit** – API request throttling
- **Dotenv** – Manage environment variables
- **CORS** – Secure cross-origin resource sharing

---

## 🛠️ Getting Started

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (Node Package Manager, usually comes with Node.js) or [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/)

### 1. Clone the Repository

First, clone the project repository from GitHub to your local machine:

```bash
git clone <your-repository-url>
cd Thinkboard
```

### 2. Backend Setup

Navigate into the `backend` directory to set up the server:

```bash
cd backend
```

**Install Backend Dependencies:**

```bash
npm install
# or yarn install
```

**Configure Environment Variables:**

Create a file named `.env` in the `backend` directory (at the same level as `package.json`) and add the following environment variables. **Replace the placeholder values** with your actual credentials.

```dotenv
PORT=3500
MONGO_URI=<Your MongoDB Atlas Connection String>
UPSTASH_REDIS_REST_URL=<Your Upstash Redis REST URL>
UPSTASH_REDIS_REST_TOKEN=<Your Upstash Redis REST Token>
NODE_ENV=development # Set to 'production' for deployment
```

* **`MONGO_URI`**: Obtain this from your [MongoDB Atlas dashboard](https://cloud.mongodb.com/). Remember to **whitelist your current IP address** in your Atlas cluster's Network Access settings.
* **`UPSTASH_REDIS_REST_URL` & `UPSTASH_REDIS_REST_TOKEN`**: Get these from your [Upstash Redis dashboard](https://upstash.com/).

**Start the Backend Server (Development Mode):**

```bash
npm run dev
# or yarn dev
```

The backend server will typically run on `http://localhost:3500`. You should see a confirmation message in your terminal.

### 3. Frontend Setup

Open a **new terminal window** and navigate to the `frontend` directory:

```bash
cd frontend
```

**Install Frontend Dependencies:**

```bash
npm install
# or yarn install
```

**Start the Frontend Development Server:**

```bash
npm run dev
# or yarn dev
```

The frontend application will typically run on `http://localhost:5173` (or another port specified by Vite).

Your frontend should now automatically connect to your backend and display your notes.

---

## ☁️ Deployment to Render

This application is meticulously configured for seamless Continuous Deployment (CD) to Render.

### 1. Build Frontend for Production

Before deploying your backend, you must create a production-optimized build of your React frontend. In the `frontend` directory:

```bash
npm run build
# or yarn build
```
This command will create a `dist` folder (e.g., `frontend/dist`) containing the highly optimized and minified production assets of your React application.

### 2. Push to GitHub

Ensure all your local changes, including the newly generated `dist` folder (which **must be committed to Git** for Render to access it), are pushed to your GitHub repository.

```bash
git add .
git commit -m "feat: Ready for Render deployment"
git push origin main # Or your primary deployment branch (e.g., 'master')
```

### 3. Set up on Render

1.  **Create a New Web Service:**
    * Log in to your [Render dashboard](https://dashboard.render.com/).
    * Click "New" -> "Web Service".
2.  **Connect to GitHub:**
    * Select your GitHub repository where the Thinkboard code resides.
3.  **Configure Build & Start Commands:**
    * **Root Directory:** Set this to `backend`. This tells Render to execute commands from within your `backend` folder.
    * **Build Command:**
        ```bash
        cd ../frontend && npm install && npm run build && cd ../backend && npm install
        ```
        * *Explanation:* This comprehensive command first navigates to the `frontend` directory, installs its dependencies, builds the React app, then navigates back to the `backend` directory, and finally installs backend dependencies. This ensures your `dist` folder is prepared and all dependencies are ready.
    * **Start Command:**
        ```bash
        node src/server.js
        ```
4.  **Environment Variables:**
    * In Render's dashboard, go to the "Environment" section for your service.
    * Add your `MONGO_URI`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, and set `NODE_ENV` to `production`.
5.  **Deploy:**
    * Click "Create Web Service". Render will automatically initiate the build and deployment process. Monitor the logs in your Render dashboard.

### 4. Automatic Updates (Continuous Deployment)

Once successfully deployed, Render will automatically monitor your connected GitHub branch. Any subsequent `git push` to that branch will trigger a new build and redeployment on Render, ensuring your live site is always up-to-date with your latest code.

---

## 🤝 Contributing

Feel free to fork this repository, explore the code, make improvements, and submit pull requests. All contributions are welcome!
