export const Pepoints: pepoints[] = [
    {
        category: 'development',
        mainImageUrl: 'pepoints/main.png',
        mainImageSize: 'contain',
        title: 'PE Points Web Application',
        year: '2016',
        company: 'B302: A Creative Media Mob',
        role: 'Front-end Developer',
        url: '',
        content: [
            {
                text: 'HAN University of Arnhem, Netherlands incorporates a point system that all students must fulfill before they graduate. Previously, the history of points were maintained in an outdated and not user-friendly system, which made it extremely difficult for the students as well as the school staff.',
            },
            {
                text: 'Our team, which consisted of a Graphic Designer, Front-end Developer, Back-end Developer, and a Project Manager, proposed a new design and built the application. There were numerous feedback sessions with the clients where we showcased our progress, reviewed new functions and features, and clarified assumptions and project goals.',
            },
            {
                text: 'As being one of the developers\' and designer\'s last major projects at B302, it went extremely smoothly - even with the initial hiccup of the project that occurred with the transition of a new Project Manager. Active communication took place between the designer and myself, as the Front-end Developer, to discuss what design choices were feasible with the schedule.',
            },
        ],
        images: [
            {
                url: 'pepoints/Frontal.png',
                size: 'half',
                backgroundSize: 'contain'
            },
            {
                url: 'pepoints/Frontal2.png',
                size: 'half',
                backgroundSize: 'contain'
            }
        ],
        tools: [
            {
                name: 'HTML & CSS (SCSS)'
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
                description: 'Held multiple feedback moments'
            },
            {
                description: 'Communicated cross-expertise'
            },
            {
                description: 'Practiced coding conventions'
            }
        ]
    },
];

interface pepoints {
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
    tools: eachTool[];
    skills: eachSkill[];
}

interface eachContent {
    text: string;
}

interface eachImage {
    url: string;
    size: string;
    backgroundSize: string;
}

interface eachTool {
    name: string;
}

interface eachSkill {
    description: string;
}