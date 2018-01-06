export const Spjikergoed: spijkergoed[] = [
    {
        category: 'design',
        mainImageUrl: 'spijkergoed/main.jpg',
        mainImageSize: 'cover',
        title: 'Spijkergoed Branding',
        year: '2016',
        company: 'B302: A Creative Media Mob',
        role: 'Graphic Designer',
        url: '',
        content: [
            {
                text: 'Our client was creating a clothing company aimed towards modern and minimalistic men fashion. The name Spijkergoed references the studs and buttons on the jeans, but “spijker” also means “nail”.',
            },
        ],
        images: [
            {
                url: 'spijkergoed/businesscards.jpg',
                size: 'full',
                imageHeight: '235px',
                backgroundSize: 'cover'
            },
        ],
        content2: [
            {
                text: 'Thus, the creative solution for their branding needs was to directly show the hape of a nail but allude to clothing through the sewn marks. Various marks and gaphical elements were created.',
            }
        ],
        images2: [
            {
                url: 'spijkergoed/shirt.jpg',
                size: 'full',
                imageHeight: '420px',
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
                description: 'Created product mock-ups'
            },
            {
                description: 'Assembled brand identity'
            },
            {
                description: 'Overcame language barriers'
            }
        ]
    },
];

interface spijkergoed {
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