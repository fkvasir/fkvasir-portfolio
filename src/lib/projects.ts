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
    period: "May 2025 – May 2026",
    private: true,
  },
  {
    id: 2,
    title: "Matchderport E-commerce Website",
    company: "Matchderport",
    role: "Full Stack Developer",
    description:
      "Developed a fullstack e-commerce platform with booking, product pages, and user-community discussion features.",
    image: "/about-me_coding.jpg",
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
    image: "/coding-background.jpg",
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
    image: "/coding-background.jpg",
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
    image: "/about-me_coding.jpg",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision", "Deep Learning"],
    github: "https://github.com/fkvasir/CSC173_Intelligent-Systems/tree/main",
    demo: "https://github.com/fkvasir/CSC173_Intelligent-Systems/tree/main",
    category: "ml-ai",
    period: "September 2024 - December 2024",
    longDescription:
      "For my Intelligent Systems coursework, I developed a deep learning model using Convolutional Neural Networks (CNN) to classify car types based on images. I pre-processed images by applying data augmentation techniques, adjusted model hyperparameters such as learning rate and weight adjustments, and modified the algorithm to ignore blurry images for more accurate classification. This project deepened my knowledge of neural networks, computer vision, and model optimization for real-world applications.",
  },
];
