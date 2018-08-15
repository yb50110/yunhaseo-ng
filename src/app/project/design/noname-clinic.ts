export const Nonameclinic: nonameclinic[] = [
    {
        category: 'design',
        mainImageUrl: 'noname-clinic/noname-logo.png',
        mainImageSize: 'contain',
        title: 'Untitled Clinic Logo',
        year: '2017',
        company: 'B507: A Creative Media Mob',
        role: 'Graphic Designer',
        url: '',
        content: [
            {
                text: 'A small local organization within Mankato had asked for a quick logo for a student-friendly clinic they were preparing to open. Although there was no final name decided by the client, it was very clear that this clinic had a strong focus on family and the community. The logo, therefore, needed to be approachable, friendly, and reflect the ideals of family and togetherness.'
            }
        ],
        images: [
            {
                url: 'noname-clinic/Untitled-clinic-sign.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'noname-clinic/sketch-collection.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            }
        ],
        content2: [
            {
                text: 'Through a number of short iterations and electronic conversations with the client, this concept evolved to its current version. This version best balanced the values of family and the human bond through its imagery and colors. The ribbon also greatly helped convey this message as it created a sense of security and connection as it brings the figures in the logo together.',
            },
        ],
        images2: [
            {
                url: 'noname-clinic/Untitled-clinic-business-cards.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'noname-clinic/Untitled-clinic-letter.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
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
                description: 'Worked in iterations'
            },
            {
                description: 'Received and implemented feedback'
            },
            {
                description: 'Progressed efficiently and quickly'
            },
        ]
    },
];

interface nonameclinic {
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