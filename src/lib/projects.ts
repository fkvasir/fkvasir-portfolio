export type Project = {
  id: number;
  title: string;
  company?: string;
  role?: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: "software" | "ml-ai";
  period?: string;
  longDescription?: string;
  private?: boolean;
};

export const projects: Project[] = [
  {
    id: 10,
    title: "AI Daily Living Assistant & Personal Life OS",
    company: "Personal Project",
    role: "Full Stack Developer",
    description:
      "Full-stack AI productivity suite with eight modules across an AI daily-living toolkit and a Life OS. Features a Gemini-powered recipe generator, weekly meal planner, and weather-aware outfit recommender, plus a Notion-style wiki, goals/finance/health/habit dashboard, and job-application tracker.",
    image: "/ai-daily-assistant.png",
    tags: [
      "Next.js 16",
      "React 19",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Gemini API",
      "Open-Meteo API",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
      "Render",
      "Neon",
      "Docker",
      "Turborepo",
      "pnpm",
    ],
    demo: "https://ai-daily-assistant.vercel.app",
    category: "software",
    period: "May 2026",
    longDescription:
      "Developed and deployed a full-stack AI productivity suite using Next.js 16 (App Router, React 19), a NestJS 11 REST API, and PostgreSQL with Prisma in a Turborepo monorepo. Engineered JWT authentication in httpOnly cookies behind a Backend-for-Frontend proxy with role-based admin access and a user-management dashboard. Integrated the Google Gemini API to power a recipe generator, weekly meal planner, and weather-based outfit recommender (keyless Open-Meteo forecast and geocoding), all locale- and timezone-aware. Built a Life OS suite with a Notion-style markdown wiki, a goals/finance/health/habit dashboard, and a job-application tracker. Deployed to Vercel, Render, and Neon with automated Prisma migrations, per-user rate limiting, Dockerized local Postgres, and a polished shadcn/ui + Tailwind CSS interface.",
  },
  {
    id: 11,
    title: "Nutritionist Meal Plan System",
    company: "ChefMDRX",
    role: "Full Stack Developer",
    description:
      "Subscription-based nutritionist meal-planning platform where clients complete an assessment and book consultations, with an R&D staff workflow that confirms consultations, assigns meal plans, and dispatches them to the kitchen.",
    image: "/chefmdrx.png",
    tags: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Xendit",
      "Resend",
      "Vercel",
      "Railway",
      "Docker",
    ],
    demo: "https://chefmdrx-web.vercel.app",
    category: "software",
    period: "Apr 2026 – May 2026",
    longDescription:
      "Built a subscription-based nutritionist meal-planning platform on a Next.js, NestJS, and PostgreSQL stack where clients fill out an assessment form and book a consultation schedule. Developed the Research & Development staff workflow to confirm consultations, assign each client an appropriate meal plan, and dispatch it to the kitchen for cooking. Integrated Xendit for subscription payments and Resend for transactional email such as booking confirmations and status updates. Implemented free meal-delivery scheduling tied to active subscriptions and assigned meal plans. Deployed the backend on Railway and the frontend on Vercel.",
  },
  {
    id: 1,
    title: "Caregiver Booking & Recreational Activity Generator",
    company: "Geriatric Care Solutions",
    role: "Full Stack Developer",
    description:
      "Contributed to the development of a fullstack caregiver booking platform delivering personalized activities for elderly care.",
    image: "/geriatric-care-solution.png",
    tags: ["Next.js", "React", "Full Stack", "AI Integration", "Tailwind CSS"],
    demo: "https://www.geriatriccaresolution.com",
    category: "software",
    period: "May 2025 – Present",
    private: true,
  },
  {
    id: 2,
    title: "Matchderport E-commerce Website",
    company: "Matchderport",
    role: "Full Stack Developer",
    description:
      "Developed a fullstack e-commerce platform with booking, product pages, and user-community discussion features.",
    image: "/private-project-placeholder.png",
    tags: ["Next.js", "React", "Full Stack", "E-commerce", "Tailwind CSS"],
    category: "software",
    period: "Apr 2025 – Nov 2025",
    private: true,
  },
  {
    id: 3,
    title: "E-Referral for Hospitals",
    company: "Anura Innovations",
    role: "Full Stack Developer",
    description:
      "Developed a secure web-based system with login enabling healthcare personnel to manage hospital-to-hospital patient referrals.",
    image: "/e-referral.jpg",
    tags: [
      "Full Stack",
      "Authentication",
      "Healthcare",
      "MySQL",
      "Web Development",
    ],
    category: "software",
    period: "Feb 2025 – Jun 2025",
    private: true,
  },
  {
    id: 4,
    title: "Income & Expenses Tracker",
    company: "Self-Project",
    role: "Full Stack Developer",
    description:
      "Designed and implemented a user-friendly application to track income and expenses. Ensured secure data management with encryption and authentication features.",
    image: "/income-expense-tracker.png",
    tags: ["Full Stack", "Authentication", "Encryption", "MySQL"],
    demo: "https://fkvasir-income-expense-tracker.vercel.app",
    category: "software",
    period: "Nov 2024 – Jan 2025",
  },
  {
    id: 5,
    title: "Payment System",
    company: "Self-Project",
    role: "Frontend Developer",
    description:
      "Designed and developed an intuitive user interface for seamless payment processing, ensuring a responsive and user-friendly experience across devices. Implemented static payment status updates for design and user-experience.",
    image: "/payment-system.png",
    tags: ["React", "Frontend", "UI/UX", "Responsive Design", "Tailwind CSS"],
    category: "software",
    period: "Nov 2024",
  },
  {
    id: 6,
    title: "Rush Gym App",
    company: "Brite Studio Design and Automation",
    role: "Mobile Application Frontend Developer",
    description:
      "Implemented the Profile, Booking, and Wallet Screens for the Gym App using the React Native framework and Expo for production.",
    image: "/brite.jpg",
    tags: ["React Native", "Expo", "Mobile App", "Frontend"],
    category: "software",
    period: "Jun 2024 – Aug 2024",
    private: true,
  },
  {
    id: 7,
    title: "MSU-IIT Faculty Program System",
    company: "Software Engineering Project",
    role: "Full Stack Developer",
    description:
      "A university website project where I designed and developed the landing page feature and implemented backend MySQL databases for courses and sections, enabling faculty to enroll students to courses and assign sections to students.",
    image: "/private-project-placeholder.png",
    tags: ["Full Stack", "MySQL", "Backend", "HTML", "CSS"],
    category: "software",
    period: "Aug 2023 – Dec 2023",
    private: true,
  },
  {
    id: 8,
    title: "Malware Detection Using Machine Learning",
    description:
      "A machine learning-based system to identify malware applications with SMOTE for addressing class imbalance.",
    image: "/private-project-placeholder.png",
    tags: ["Python", "Random Forest", "SVM", "SMOTE", "Data Mining"],
    github:
      "https://github.com/fkvasir/Malware-Detection-Using-Machine-Learning",
    demo: "https://github.com/fkvasir/Malware-Detection-Using-Machine-Learning",
    category: "ml-ai",
    period: "October 2024 - December 2024",
    longDescription:
      "As part of my Data Mining and Analysis coursework, I developed a machine learning-based system to identify malware applications using a dataset from Kaggle. I compared various classification techniques, including Random Forest, Decision Trees, Gradient Boosting, and Support Vector Machines (SVM), to determine the most effective approach for malware detection. To address the issue of class imbalance, I implemented SMOTE (Synthetic Minority Over-sampling Technique), which helped generate synthetic data points for the underrepresented classes, improving model performance and accuracy. This project also involved feature engineering, data pre-processing, and model evaluation to ensure accurate predictions and minimize false positives.",
  },
  {
    id: 9,
    title: "Car Type Classification Using CNN",
    description:
      "Deep learning model using Convolutional Neural Networks to classify car types based on images with data augmentation.",
    image: "/private-project-placeholder.png",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision", "Deep Learning"],
    github: "https://github.com/fkvasir/CSC173_Intelligent-Systems/tree/main",
    demo: "https://github.com/fkvasir/CSC173_Intelligent-Systems/tree/main",
    category: "ml-ai",
    period: "September 2024 - December 2024",
    longDescription:
      "For my Intelligent Systems coursework, I developed a deep learning model using Convolutional Neural Networks (CNN) to classify car types based on images. I pre-processed images by applying data augmentation techniques, adjusted model hyperparameters such as learning rate and weight adjustments, and modified the algorithm to ignore blurry images for more accurate classification. This project deepened my knowledge of neural networks, computer vision, and model optimization for real-world applications.",
  },
];
