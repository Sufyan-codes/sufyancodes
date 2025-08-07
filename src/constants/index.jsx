

import {
  RiBarChart2Line,
  RiSettings2Line,
  RiTeamLine,
  RiTwitchLine,
  RiYoutubeLine,
  RiCalendarLine,
} from "@remixicon/react";

export const HERO_CONTENT = {
  badgeText: "🚀Hi, im Abu safyan Yusuf!",
  mainHeading: "React Developer",
  subHeading:
    "I'm a passionate frontend developer who brings designs to life with precision and creativity. With a background in Mathematics, I combine technical expertise and an eye for detail to craft seamless digital experiences. I'm dedicated to exceeding client expectations and delivering user-centric solutions.",
  callToAction: {
    primary: "View Projects",
    secondary: "My Cv",
  },
  trustedByText: "Trusted by Leading Streaming Brands & Creators",
};



export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "About Me",
  sectionDescription:
    "Stream like a pro with our 6-step process. From setup to performance tracking, we've got everything you need to elevate your streaming experience.",
  steps: [
    {
      title: "Background",
      description:
        "I'm a Frontend Developer with a background in Electronics and Computer Engineering from Nnamdi Azikiwe University. My journey in tech has been driven by a passion for creating intuitive and impactful digital experiences. ",
      description1:"Currently, I'm expanding my skill set by studying Backend Web Development at Altschool, where I'm learning to build full-stack applications and robust server-side solutions.",
    },
    {
      title: "Education",
      header1:
        "Electronics and Computer Engineering",
      desc1:"federal University Dutse",
      header2: 'Backend Web Development',
      desc2:"Alx School of Software Engineering",
      
    },

  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Tech Stack",
  sectionDescription:
    "",
  features: [
    {
      id: 1,
      icon: <RiBarChart2Line className="w-8 h-8" />,
      title: "Real-Time Stream Analytics",
      description:
        "Track your audience engagement, viewer count, and performance in real-time.",
    },
    {
      id: 2,
      icon: <RiSettings2Line className="w-8 h-8" />,
      title: "Automated Stream Management",
      description:
        "Set up automated alerts, stream schedules, and more with ease.",
    },
    {
      id: 3,
      icon: <RiTeamLine className="w-8 h-8" />,
      title: "Audience Engagement Tools",
      description:
        "Interact with your audience through custom alerts, chat integrations, and giveaways.",
    },
    {
      id: 4,
      icon: <RiTwitchLine className="w-8 h-8" />,
      title: "Twitch Integration",
      description:
        "Seamlessly connect with Twitch to automate alerts, manage subscribers, and track donations.",
    },
    {
      id: 5,
      icon: <RiYoutubeLine className="w-8 h-8" />,
      title: "YouTube Streaming Support",
      description:
        "Go live on YouTube with built-in tools for managing chats, subscribers, and more.",
    },
    {
      id: 6,
      icon: <RiCalendarLine className="w-8 h-8" />,
      title: "Schedule Streams",
      description:
        "Plan and schedule your streams ahead of time, with reminders sent to your audience.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Projects",
  sectionDescription:
    "Explore my latest work and technical achievements",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Basic",
      price: "$9.99/month",
      description:
        "Perfect for beginners just starting their streaming journey.",
      features: [
        "Basic analytics",
        "Custom overlays",
        "Viewer engagement tools",
        "Stream up to 720p",
      ],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      description:
        "For streamers who want more advanced tools to grow their audience.",
      features: [
        "Advanced analytics",
        "Custom alerts & notifications",
        "HD streaming up to 1080p",
        "Real-time audience insights",
        "Unlimited support",
      ],
      popular: true,
    },
    {
      name: "Elite",
      price: "$49.99/month",
      description:
        "For professional streamers who need cutting-edge tools and insights.",
      features: [
        "Premium analytics & reporting",
        "4K Ultra HD streaming",
        "Dedicated account manager",
        "Full API access",
        "Custom branding & overlays",
      ],
    },
  ],
};



export const FOOTER_CONTENT = {
  sections: [
    {
      title: "SUFYANCODES",
      links: [
       
      ],
    },
    {
      title: "EXPLORE",
      links: [
        { text: "Home", url: "#" },
        { text: "About Me", url: "#" },
        { text: "Projects", url: "#" },
        { text: "Contact Me", url: "#" },
      
      ],
    },
 
    {
      title: "CONTACT ME",
      links: [
        { text: "Twitter", url: "https://twitter.com/SufyanDev" },
        { text: "Instagram", url: "https://www.instagram.com/sufyan_dev" },
        { text: "Github", url: "https://github.com/Sufyan-codes" },
        { text: "yusufabusufyan7@gmail.com", url: "" },
        
      ],
    },
  ],
  
  copyrightText: "© 2024 Abu safyan Yusuf,Built with React & Tailwind",
};
