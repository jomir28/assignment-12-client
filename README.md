# Micro Tasking and Earning Platform

**Admin email-1:** programming@hero.com

**Admin password-1:** 123456

**Admin email-2:** david.lee@gmail.com

**Admin password-2:** 123456

**Front-end Live Site Link:** https://b9-a12.web.app/



**Server Side Github Repository Link:** https://github.com/rakibgithub21/Micro_Earn-server_site

---

## Overview
This repository contains the codebase for a Micro Tasking and Earning Platform developed using the MERN stack. The platform provides opportunities for users to complete small tasks and earn rewards. It accommodates three distinct roles: Worker, Task-Creator, and Admin, each tailored with specific functionalities.

## Features
1. **Role-based Authentication:** Secure authentication for Worker, Task-Creator, and Admin, ensuring appropriate permissions and access levels.
2. **Responsive Design:** Optimized for various devices, including mobile, tablet, and desktop views.
3. **Task Management:** Workers can view available tasks, submit completed tasks, and withdraw earnings. Task-Creators can create tasks, review submissions, and manage transactions.
4. **Google Login:** Quick authentication using Google accounts for registration and login.
5. **Payment System:** Task-Creators can purchase coins and pay workers for completed tasks, facilitated through a Stripe-based payment system.
6. **Notification System:** Alerts for task and user-related operations, enhancing user engagement and communication.
7. **Pagination:** Implemented for task submissions to manage large sets of data efficiently.
8. **Image Upload:** Integrated image uploading using imageBB for user registration and task creation.
9. **Task Review:** Task-Creators can review submissions, approve or reject them, and manage payments accordingly.
10. **Withdrawal System:** Workers can withdraw their earnings in dollars, with the system managing coin-to-dollar conversion.
11. **Admin Dashboard:** Comprehensive dashboard for admin to manage users, tasks, and overall platform operations.
12. **User Profile Management:** Users can update their profile information and view their activity history.
13. **Coin Purchase History:** Task-Creators can view their coin purchase history and transaction details.
14. **Submission History:** Workers can view their submission history and track the status of their tasks.
15. **Error Handling:** Custom error pages for authorization errors and invalid routes, enhancing user experience.
16. **Data Validation:** Input validation for forms to ensure data integrity and prevent errors.
17. **Secure Transactions:** Ensures secure financial transactions and storage of sensitive information.
18. **Role Management:** Admin can modify user roles, such as promoting workers to Task-Creators or Admins.
19. **Analytics and Reporting:** Admin can view platform analytics, including user activity, task completion rates, and financial transactions.
20. **Demo Video Integration:** A demo video link to help new users understand the platform's functionality.

## Setup Instructions
1. Clone the repository: `git clone [repository_url]`
2. Install dependencies: `npm install`
3. Set up environment variables for Firebase config keys and MongoDB credentials.
4. Start the server: `npm start`
5. Access the application via the provided front-end live site link.

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- Stripe
- Firebase
- imageBB

- ## Getting Started

### Prerequisites

```bash
git clone https://github.com/rakibgithub21/Volunteer_venue-client.git
cd Volunteer_venue-client
npm install
```


### Firebase Configuration

1. Obtain Firebase credentials (API key, project ID, etc.) from the Firebase console.
2. Create a `.env` file in the root directory of the project.
3. Add Firebase configuration details to `.env`:
```
REACT_APP_FIREBASE_API_KEY=<your-firebase-api-key>
REACT_APP_FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
REACT_APP_FIREBASE_PROJECT_ID=<your-firebase-project-id>
REACT_APP_FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
REACT_APP_FIREBASE_APP_ID=<your-firebase-app-id>
```
## Running the Project Locally

### Start the Development Server

npm run dev

This README provides an overview of the project, its features, setup instructions, and technologies used. For detailed documentation and codebase, please refer to the respective GitHub repositories linked above. Feel free to reach out for any queries or assistance. Thank you for your interest and contribution!
