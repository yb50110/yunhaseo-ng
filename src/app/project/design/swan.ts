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
                text: 'The client was creating an app called Swan that is aimed at finding a housekeeper quickly. Although not much information was revealed, he did mention that it was like an Uber for housekeeping and wanted the color pink to be a prominent color.',
            },
            {
                text: 'Through the tight deadline, there were two feedback moments. I provided the client with sketches and proceeded with the one with he felt would best fit his needs. Communication happened very freely and casually through online media.',
            }
        ],
        images: [
            {
                url: 'swan/name-4.png',
                size: 'full',
                backgroundSize: 'contain'
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