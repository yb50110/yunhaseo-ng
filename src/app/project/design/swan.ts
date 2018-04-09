export const Swan: swan[] = [
    {
        category: 'design',
        mainImageUrl: 'swan/main.png',
        mainImageSize: 'contain',
        title: 'Swan Logo and App Icon',
        year: '2016',
        company: 'Freelance Commission',
        role: 'Graphic Designer',
        url: '',
        content: [
            {
                text: 'This logo was created for a start-up described to be the "Uber of housekeeping," involving an app that would allow people to quickly connect and search for others who could clean and take care of their homes. As this app is called "Swan," the logo had been design to be clearly representative of a swan.' ,
            },
            {
                text: 'To create a unique and memorable icon, the "S" of "Swan" had been shaped similar to a swan. Because this service would involve other people to enter homes of the users, a sense of trustworthiness as well as openness must be established right away. Thus, the colors were selected with careful thought; the soft pink was used to form a sense of serenity and fanciness, while the contrasting dark blue creates a feeling of trustworthiness and solidity.',
            },
        ],
        images: [
            {
                url: 'swan/name-4.png',
                size: 'full',
                imageHeight: '120px',
                backgroundSize: 'contain'
            }
        ],
        content2: [
            {
                text: 'As this project was very fast-paced, communication with the client occurred frequently, freely, and digitally. All feedback moments took place via online services, where I had shared ideas and progresses, and was able to make sure I was on the right track.',
            }
        ],
        images2: [
            {
                url: '',
                size: '',
                imageHeight: '',
                backgroundSize: ''
            }
        ],
        tools: [
            {
                name: 'Adobe Illustrator CC'
            },
            {
                name: 'Adobe Photoshop CC'
            }
        ],
        skills: [
            {
                description: 'Worked with limited information'
            },
            {
                description: 'Communicated digitally with client'
            },
            {
                description: 'Delivered product in tight deadline'
            }
        ]
    },
];

interface swan {
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
    images2: eachImage[];
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