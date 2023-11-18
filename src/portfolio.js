/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Retin P Kumar",
  title: "Hi all, I'm Retin",
  subTitle: emoji(
    "A passionate Machine Learning Engineer 🚀 having an experience in developing NLP and Data Science solutions and some other cool stuff."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1M8IwCCNbqDuZIbFVDl46O7VoTAzKbC81/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Retinpkumar",
  linkedin: "https://www.linkedin.com/in/retinpkumar/",
  gmail: "retinpkumar@gmail.com",
  medium: "https://retinpkumar.medium.com/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Aspiring AI Architect who likes to create, develop and deploy AI based solutions for businesses",
  skills: [
    emoji(
      "⚡ Create Machine Learning and Data driven solutions"
    ),
    emoji("⚡ Process data and provide deep insights"),
    emoji(
      "⚡ Scrape data at large scale for business requirements"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "NLP Engineer",
      company: "Firmable Pvt Ltd",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Nov 2022 – Present",
      desc: "Developing NLP and ML based business solutions from data collection to pipeline creation and model deployment",
    },
    {
      role: "Data Scientist",
      company: "Ngenux Solutions Pvt Ltd",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Develeoped recommendation system for helping the sales team with up-selling and cross-selling the products to customers and creating python packages and deployed in PyPi to be used internally by the Data Science team for text processing and data validation."
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Few ML based projects",
  projects: [
    {
      image: require("./assets/images/agri_n2o.gif"),
      projectName: "Agri N2O Flux Predictor",
      projectDesc: "This app predicts the Agricultural Nitrous Oxide flux released from intensively managed cropping systems.",
      footerLink: [
        {
          name: "Visit Code Repo",
          url: "https://github.com/Retinpkumar/Agricultural-N2O-Predictor-App"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/patient.gif"),
      projectName: "Patient Survival Predictor",
      projectDesc: "This app predicts whether an admitted patient has a high risk of mortality.",
      footerLink: [
        {
          name: "Visit Code Repo",
          url: "https://github.com/Retinpkumar/PatientSurvivalPrediction"
        }
        //  you can add extra buttons here.
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Kerala",
      logo: require("./assets/images/uok.png"),
      subHeader: "BE/B-Tech in Electrical and Electronics Engineering",
      duration: "September 2007 - April 2011"
    }
  ]
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Certifications related to Data Science and Machine Learning",

  achievementsCards: [
    {
      title: "Deep Learning Specialization",
      subtitle:
        "Deep learning certification comprising of courses completed on Convolutional Neural Networks, Structuring Machine Learning Projects, Neural Networks and Deep Learning, Sequence Models and Hyperparameter tuning, regularization and optimization.",
      image: require("./assets/images/deeplearningai.png"),
      imageAlt: "Deep Learning ai Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/WGSHMG8D3GLN"
        },
      ]
    },
    {
      title: "Fine Tune BERT for Text Classification with TensorFlow",
      subtitle:
        "Building Tensorflow input pipelines, tokenizing, preprocessing text data and fine-tuning BERT model for text classification.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Coursera Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/ARY44T274RTN"
        }
      ]
    },

    {
      title: "Machine Learning and Deep Learning Masters",
      subtitle: "Machine Learning and Deep Learning Masters Programme by iNeuron.ai",
      image: require("./assets/images/iNeuron.png"),
      imageAlt: "iNeuron.ai Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.ineuron.ai/certificate/f48c1893-3ed4-4f73-853d-e9ad75879af6"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Alongside developing cool stuff, I like to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.devgenius.io/implementing-k-nearest-neighbors-from-scratch-in-python-d5eaaf558d49",
      title: "Implementing KNN from scratch in Python",
      description:
        "KNearest Neighbors(KNN) is one of the simplest supervised machine learning algorithms. The algorithm was initially developed for classification tasks but was later extended for performing regression tasks as well."
    },
    {
      url: "https://medium.com/geekculture/i-analyzed-a-data-science-job-salaries-dataset-dca3c24081c0",
      title: "Data Science Job Salaries Analysis",
      description:
        "This dataset contains details regarding the salaries of different Data science professionals all over the world based on factors like employment type, company location, etc. for the year 2020."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "retinpkumar@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Retinpkumar", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable
};
