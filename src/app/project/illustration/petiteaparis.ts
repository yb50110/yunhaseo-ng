export const Petiteaparis: petiteaparis[] = [
    {
        category: 'illustration',
        mainImageUrl: 'petiteaparis/main.jpg',
        mainImageSize: 'contain',
        title: 'Petite a Paris',
        year: '2016',
        company: 'B302: A Creative Media Mob',
        role: 'Illustrator',
        url: '',
        content: [
            {
                text: 'A small, local clothing business of Velp, Netherlands was in need of an illustration that represented her clothing and that could be used throughout her store as a decorative element. She targeted women in their late 20’s and early 20’s and displayed a sense of elegance and modernism.',
            },
            {
                text: 'Through carefully observing her clothing, and after a few iterations of feedback, this illustration was selected as the final piece.',
            },
            {
                text: 'I visited her shop while at the Netherlands and was happy to see the illustration being used within her business cards and various goods around her shop.'
            }
        ],
        images: [
            {
                url: 'petiteaparis/sketch.jpg',
                size: 'full',
                backgroundSize: 'cover'
            },
            {
                url: 'petiteaparis/proof.png',
                size: 'full',
                backgroundSize: 'cover'
            }
        ],
        tools: [
            {
                name: 'Adobe Photoshop CC'
            }
        ],
        skills: [
            {
                description: 'Performed client research'
            },
            {
                description: 'Met goals while working remotely'
            }
        ]
    }
];

interface petiteaparis {
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
