import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "ThreeJs",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Solidity",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Network Intern",
        company_name: "Cisco",
        icon: starbucks,
        iconBg: "#62bebe",
        date: "March 2018 - August 2018",
        points: [
            "Analyzing network data to determine network usage and Identifyication of possible causes of networking problems.",
            "Configuring and defining parameters for installation or testing of local area network (LAN).",
            "Evaluating local area network (LAN) or wide area network (WAN) performance data to ensure sufficient availability or speed.",
            "Installation and configuration of wireless networking equipment, network software, including security or firewall software.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Definer",
        icon: tesla,
        iconBg: "#a2d2ff",
        date: "May 2021 - Jan 2022",
        points: [
            "Developing and maintaining Software applications using Python and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to maintain a decentralized platform.",
            "Implementing, building, maintaining, and securing the software infrastructure that powers the FIN token.",
            "Participating in Solidity code audits and providing constructive feedback to other Smart Contract developers.",
        ],
    },
    {
        title: "Web3 Graphics Illustrator",
        company_name: "OpenSea",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Mar 2022 - May 2023",
        points: [
            "Digital Art Conceptualization, creation of unique and appealing digital artwork suitable for the NFT market.",
            "Desiging and building NFT Tokenization and Minting Framework.",
            "Minting Site Management of minting processes on NFT marketplaces or dedicated platforms.",
            "Community Management, Engagement and Marketing.",
        ],
    },
    {
        title: "Solidity Developer",
        company_name: "VESQ",
        icon: meta,
        iconBg: "#2a2c36",
        date: "Jan 2023 - Present",
        points: [
            "Developing, designing, coding, and testing smart secure contracts on the blockchain.",
            "Building decentralized applications (DApps) using blockchain technology.",
            "Implementing and Integrating DApps and Smart Contracts using Moralis.",
            "Participating in Solidity code audits and providing constructive feedback to other Smart Contract developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Samso9th',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/samso9th',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'React Portfolio',
        description: 'Developed a fully functionalweb based Portfolio written with React and managed with Sanity Backend showcasing some of my works.',
        link: 'https://samso9th.github.io/portfolio/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-red',
        name: 'Samso9th DEX',
        description: 'A simple Web3 crypto project in React styled with TailwindCSS, enabled with a smart contract written in Solidity.',
        link: 'https://samso9th.github.io/samso9thdex/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-yellow',
        name: '3D React Portfolio ',
        description: 'This very website was made from scratch in react and threejs stlyled in TailwindCSS. Leveraging the power of threejs to manipulate and control real 3d models to appear responsive on a web.',
        link: 'https://github.com/Samso9th/3d_portfolio',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Chatbot',
        description: 'Built a A cmd tool in python that emulates a chatbot using openai API keys for nerds like myself who live and breathe CLI.',
        link: 'https://github.com/Samso9th/cmd_GPT_chatbot',
    }
];