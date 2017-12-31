export const Safehr: safehr[] = [
    {
        category: 'development',
        mainImage: 'safehr/main.png',
        title: 'SAFEHR Portal and App',
        year: '2017 - Present',
        company: 'B507: A Creative Media Mob',
        role: 'Front-end Developer',
        url: 'http://safehrapp.b507.net/',
        content: [
            {
                text: 'Perhaps the largest and most complex project I have been a part of, SAFEHR is a three-year old and currently running project that includes an EHR and a content management system meant for use in the simulation labs of the Minnesota State University, Mankato School of Nursing (Glenn taylor institute).',
            },
            {
                text: 'The SAFEHR App is meant for classroom assignment and simulation use. It includes an Electronic Health Record (EHR) system with a focus on the family aspect of the patient, including the Family Constructs, Genogram and Ecomap systems that tracks the families and emotional connections of the patient.',
            },
            {
                text: 'The SAFEHR Portal is for the Nursing Faculty to easily enter information of the scenarios for the simulations. They can also view more information relating to their courses and students, and assign specific patients to students to use in the classroom as an assignment.',
            },
            {
                text: 'The project currently has 6 developers and 1 project manager, where none of members have been around since the dawn of the project. Thus, we have had some hiccups relating to communication, coding, and scope creeps. Nevertheless, we were able to trek through all these issues and create a functioning and usable product.',
            },
        ],
        images: [
            {
                url: 'safehr/safehr-app-home.png',
                size: 'full'
            },
            {
                url: 'safehr/safehr-app-ehr.png',
                size: 'full'
            },
            {
                url: 'safehr/safehr-portal-scenarios.png',
                size: 'full'
            }
        ],
        tools: [
            {
                name: 'HTML & CSS (SCSS)'
            },
            {
                name: 'Javascript (SenchaTouch, JQery)'
            },
            {
                name: 'PHP (Laravel)'
            },
            {
                name: 'Git (Bitbucket)'
            },
            {
                name: 'Trello and Slack'
            }
        ],
        skills: [
            {
                description: 'Practice documentation on code'
            },
            {
                description: 'Follow Agile Scrums and Sprints'
            },
            {
                description: 'Learn new frameworks'
            },
            {
                description: 'Communicate through large team'
            }
        ]
    },
];

interface safehr {
    category: string;
    mainImage: string;
    title: string;
    year: string;
    company: string;
    role: string;
    url: string;
    content: eachContent[];
    images: eachImage[];
    tools: eachTool[];
    skills: eachSkill[];
}

interface eachContent {
    text: string;
}

interface eachImage {
    url: string;
    size: string;
}

interface eachTool {
    name: string;
}

interface eachSkill {
    description: string;
}