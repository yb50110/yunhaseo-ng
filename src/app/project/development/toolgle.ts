export const Toolgle: toolgle[] = [
    {
        category: 'development',
        mainImageUrl: 'toolgle/main.png',
        mainImageSize: 'contain',
        title: 'Toolgle Site',
        year: '2016',
        company: 'B302: A Creative Media Mob',
        role: 'Frontend Developer',
        url: '',
        content: [
            {
                text: 'Toolgle is a website meant to allow builders and other technicians to search and share their tools. Users are able to upload their tools with some images, product information, and location of where it could be picked up. Sharing occurs by users directly communicating with one another.'
            },
            {
                text: 'I was put into this project midway and worked on it until majority of the frontend was completed. I was responsible for the frontend of desktop side, working with 2 Backend Developers, a Project Manager, and a Graphic Designer.'
            }
        ],
        images: [
            {
                url: 'toolgle/mobile1.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
            {
                url: 'toolgle/mobile2.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
        ],
        content2: [
            {
                text: 'As this was one of my first large-scale development projects working with team members of different backgrounds, I was able to practice communicating technical topics to different audience, adapting my explanations according to the listeners\' expertise.',
            },
            {
                text: 'I have also learned the great importance of coding legibly, following conventions, and reducing technical debt as I had to build on and debug another developer\'s.'
            }
        ],
        tools: [
            {
                name: 'HTML & CSS'
            },
            {
                name: 'Javascript (JQery)'
            },
            {
                name: 'PHP (Laravel)'
            },
            {
                name: 'Git (Bitbucket)'
            }
        ],
        skills: [
            {
                description: 'Picked up project mid-way'
            },
            {
                description: 'Worked with multiple developers'
            },
            {
                description: 'Followed convention and standard'
            }
        ]
    },
];

interface toolgle {
    category: string;
    mainImageUrl: string;
    mainImageSize: string;
    title: string;
    year: string;
    company: string;
    role: string;
    url: string;
    content: eachContent[];
    images: eachImage[];
    content2: eachContent[];
    tools: eachTool[];
    skills: eachSkill[];
}

interface eachContent {
    text: string;
}

interface eachImage {
    url: string;
    size: string;
    imageHeight: string;
    backgroundSize: string;
}

interface eachTool {
    name: string;
}

interface eachSkill {
    description: string;
}