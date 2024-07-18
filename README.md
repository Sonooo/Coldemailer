# Bulk Email Sender

This script allows you to send individual emails to a list of email addresses using Node.js and Nodemailer.

## Prerequisites

- Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

## Setup Instructions

### Step 1: Create SMTP Transport Credentials for Gmail

To use Gmail's SMTP server, you'll need to create an app-specific password if you have two-factor authentication enabled. Follow these steps:

1. Go to your [Google Account](https://myaccount.google.com/).
2. Navigate to the **Security** section.
3. Under **Signing in to Google**, select **App passwords**. (You might need to sign in again.)
4. At the bottom, choose **Select app** and choose **Mail**.
5. Choose **Select device** and choose **Other (Custom name)**, then enter a name (e.g., "Bulk Email Sender").
6. Select **Generate**.
7. Copy the 16-character app password.

### Step 2: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/bulk-email-sender.git
cd bulk-email-sender

```

### Step 3: Install Dependencies
```bash

npm install

```

### Step 4: Configure the Script
1) Open the sendEmails.js file.
2) Replace 'your-email@gmail.com' with your actual Gmail email address.
3) Replace 'your-email-password' with the app-specific password you generated in Step 1.
```
const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // replace with your email
    pass: 'your-email-password' // replace with your app-specific password
  }
});

```
### Step 5: Add Email Addresses
Add the email addresses you want to send emails to in the emails array in the sendEmails.js file.

```
const emails = [
  'example1@domain.com',
  'example2@domain.com',
  // Add more email addresses here
];

```

### Step 6: Modify the Email Template
Modify the email content as per your requirements in the sendEmails.js file.

```
const emailContent = {
  subject: 'Application for Full Stack Developer Role',
  text: `
    Dear Hiring Manager,

    I hope this email finds you well.

    My name is [Your Name], and I am writing to express my interest in the Full Stack Developer position. With 2.8 years of experience in software development at TCS, I have honed my skills in ReactJS, Node.js, Express.js, GraphQL, PostgreSQL, and AWS. My background includes crafting responsive user interfaces, building RESTful APIs, and implementing DevOps practices with Jenkins.

    I am confident that my expertise aligns well with the requirements of the role, and I am excited about the opportunity to contribute to your esteemed organization.

    Thank you for considering my application. I look forward to the possibility of discussing my application with you further.

    Best regards,
    [Your Name]
  `
};

```

### Step 7: Run the Script
Execute the script to send emails:
```
node sendEmails.js

```

