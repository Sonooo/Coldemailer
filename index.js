const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "email@gmail.com",
      pass: "" // Use the app password, not your main password
    }
  });

// List of email recipients
const emailList = [
    'mail1@gmail.com',
    'mail2@gmail.com'
];

// Email options
const mailOptions = {
    from: 'sssanap218@gmail.com',
    subject: 'Experienced Full Stack Developer Seeking New Opportunities',
    html: `
        <p>Dear Hiring Manager,</p>
        <p>I hope this email finds you well.</p>
        <p>
            I am writing to express my interest in applying for the Full Stack, Frontend, or Backend Developer position. 
            With over 2 years and 9 months of professional experience in web development, I have honed my skills in various technologies and frameworks, making me a versatile and valuable addition to your team.
        </p>
        <h3>Profile Summary:</h3>
        <p>
            I am a dedicated software developer with expertise in building robust web solutions using the MERN stack (MongoDB, Express.js, React.js, Node.js). 
            My experience extends to cutting-edge technologies like Bun, generative AI, and low-code/no-code platforms, ensuring that I stay ahead of the curve. 
            My key competencies include:
        </p>
        <ul>
            <li><strong>MERN Stack Mastery:</strong> From ideation to launch, I create powerful and user-friendly applications.</li>
            <li><strong>API Development:</strong> Proficient in developing and integrating APIs using REST and GraphQL for seamless data flow.</li>
            <li><strong>AWS Proficiency:</strong> Experienced with AWS tools such as Lambdas, RDS, DynamoDB, ensuring scalable and reliable applications.</li>
            <li><strong>Innovative Solutions:</strong> Leveraging the latest AI and automation technologies to accelerate development and introduce next-gen solutions.</li>
        </ul>
        <h3>Work Experience:</h3>
        <p>
            <strong>Software Developer at Tata Consultancy Services (TCS)<br>
            January 2022 - Present</strong>
        </p>
        <ul>
            <li>Developed user interfaces for various client projects and proof of concepts (POCs).</li>
            <li>Created scalable backend APIs and microservices using Node.js, PostgreSQL, MongoDB, Express.js, GraphQL, and AWS services.</li>
            <li>Designed technical solutions based on business requirements and real-life problems.</li>
            <li>Debugged and enhanced existing code to improve functionality and fix issues.</li>
        </ul>
        <h3>Notable Projects:</h3>
        <ul>
            <li><strong>CDX CES (GE Healthcare's Customer Digital Experience):</strong> Worked on the cross-platform capabilities section, focusing on the notification engine, user management, and support. Utilized React.js, GraphQL, Sitecore CMS, Node.js, TypeScript, AWS Lambdas, SNS, SQS, and CloudWatch.</li>
            <li><strong>Text Transform Utility:</strong> Developed a web app in React.js for transforming text into various formats and performing actions like removing extra spaces and predicting reading time. Implemented a theme switcher for enhanced user experience.</li>
            <li><strong>Pulse (Project Management Tool for GE Vernova):</strong> Contributed to the development of multiple dashboards providing real-time insights and analytics for GE Power's Pulse platform. Technologies used include React.js, Node.js, Express.js, AWS, PostgreSQL, GraphQL, and Git.</li>
            <li><strong>Ecommerce Website in MERN Stack:</strong> Built an online t-shirt selling platform with Node.js, Express.js, MongoDB, JWT for authentication, Braintree for payment processing, and React.js for the frontend.</li>
            <li><strong>Portfolio Website:</strong> Developed and maintained a professional portfolio website showcasing my work and projects (GitHub | Portfolio).</li>
        </ul>
        <h3>Education and Certifications:</h3>
        <ul>
            <li>Bachelor of Computer Applications (BCA) from Sahakar Maharshi Bhausaheb Santuji Thorat College of Arts, Science, and Commerce, Sangamner.</li>
            <li>Certified in JavaScript Algorithms and Data Structures, Front-End Development Libraries, and Back-End Development and APIs.</li>
        </ul>
        <p>
            I am confident that my skills and experiences align well with the requirements of the developer role. I am eager to bring my expertise and passion for web development to your esteemed organization.
        </p>
        <p>Thank you for considering my application. I look forward to the possibility of discussing my application in more detail.</p>
        <p>Best regards,<br>
        Saurabh Sanap<br>
        Email: sssanap218@gmail.com<br>
        Mobile: (+91) 9579411158<br>
        Portfolio: <a href="https://mydigitalgarage.online">https://mydigitalgarage.online</a></p>
    `
};

// Function to send individual emails
const sendEmails = async () => {
    for (const email of emailList) {
        // Set the 'to' field for each recipient
        const options = { ...mailOptions, to: email };

        try {
            // Send the email
            const info = await transporter.sendMail(options);
            console.log(`Email sent to ${email}: ${info.response}`);
        } catch (error) {
            console.error(`Failed to send email to ${email}: ${error}`);
        }
    }
};

// Call the function to send emails
sendEmails();
