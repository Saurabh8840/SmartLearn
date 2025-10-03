# SmartLearn – Full-Stack Learning Management System (LMS)

SmartLearn is a full-stack LMS platform built to streamline course creation, content management, authentication, and secure payment processing. It allows educators to manage and monetize educational content while offering students a smooth and responsive learning experience.

---

## 📸 Screenshots

### 🏠 Course Page
![Course Page](./assets/screenshots/coursepage.jpg)


### 🎓  Dashboard
![Dashboard](./assets/screenshots/dashboard.jpg)

### 💳 FirstPage Flow
![First Page](./assets/screenshots/firstpage.jpg)


## 🚀 Features
- Secure user authentication with Clerk
- Role-based access control (Admin, Instructor, Student)
- YouTube video integration
- Media uploads via Cloudinary
- Stripe payment gateway
- Responsive UI with Tailwind CSS
- Real-time course content rendering
- Instructor and student dashboards

---

## 🛠️ Tech Stack
**Frontend:** React, Next.js, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Auth & Payment:** Clerk, Stripe  
**Media:** Cloudinary, YouTube

---

## 🧩 Folder Structure
client/ → Frontend code (React + Next.js)
server/ → Backend code (Express, MongoDB)
.env files → Environment keys for Clerk, Stripe, DB, etc.



---

## ⚙️ Setup Instructions

Follow these steps to run SmartLearn locally:

### **1. Clone the repository**
```bash
git clone https://github.com/Saurabh8840/SmartLearn.git
cd SmartLearn





---



 Install dependencies
# Backend
cd server
npm install

# Frontend
cd ../client
npm install


Environment variables

Create .env files in both server/ and client/ directories:

server/.env

PORT=5000
MONGODB_URI=<Your MongoDB URI>
CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
CLOUDINARY_API_KEY=<Your Cloudinary API Key>
CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
CLERK_FRONTEND_API=<Your Clerk Frontend API>
CLERK_API_KEY=<Your Clerk Backend API Key>
STRIPE_SECRET_KEY=<Your Stripe Secret Key>
STRIPE_PUBLISHABLE_KEY=<Your Stripe Publishable Key>
STRIPE_WEBHOOK_SECRET=<Your Stripe Webhook Secret>


client/.env

NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<Your Stripe Publishable Key>

4. Run the backend
cd server
npm run dev


The backend will run at http://localhost:5000.

5. Run the frontend
cd client
npm run dev


The frontend will run at http://localhost:3000.

6. Setup Webhooks

Stripe: Use ngrok
 to expose your local server and get a public URL.

ngrok http 5000


Copy the HTTPS ngrok URL and set it as the webhook endpoint in Stripe:

<NGROK_URL>/stripe


Clerk: Set your webhook endpoint in Clerk dashboard:

<NGROK_URL>/clerk

💡 Notes

MongoDB must be running locally or via a cloud cluster.

Stripe and Clerk environment variables must be configured correctly.

You can create dummy users and courses to test the app.

---


## 🙋‍♂️ Author
**Saurabh Tripathi**  
📧 saurabhofficial8840@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/saurabhirt)  
🔗 [GitHub](https://github.com/Saurabh8840)

✅ This `.README.md` includes:

1. Correct screenshot paths (`./client/src/screenshots/...`)  
2. Full backend + frontend setup  
3. How to configure **Clerk and Stripe webhooks**  
4. Tech stack, folder structure, and features  



