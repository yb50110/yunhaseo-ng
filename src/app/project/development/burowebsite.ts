export const Burowebsite: burowebsite[] = [
    {
        category: 'development',
        mainImageUrl: 'buro-website/home.png',
        mainImageSize: 'contain',
        title: 'B302 & B507 Website Update',
        year: '2018',
        company: 'B507: A Creative Media Mob',
        role: 'Frontend Developer',
        url: 'https://www.b507.us/',
        content: [
            {
                text: 'As the father company of B507, B302 of the Netherlands has been working on an updated and stylistically in-trend design for a new website. As B302 and B507 share company branding and identity, it was deemed necessary that we present the same design on our individual websites. After many months of numerous iterations of designing and prototyping, the website finally took its official launch in the summer of 2018.'
            },
        ],
        images: [
            {
                url: 'buro-website/contact.png',
                size: 'full',
                imageHeight: '300px',
                backgroundSize: 'contain'
            },
            {
                url: 'buro-website/phones-1.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
            {
                url: 'buro-website/phones-2.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
        ],
        content2: [
            {
                text: 'Initially, the entire website was planned to be designed and developed at B302. However, due to staff shortage from influx of projects at the time, they reached out to B507 for help. Our IT Team Lead focused on the database and backend programming while I was in charge of the frontend programming. There were also two other Frontend Developers from B302; however, one developer was just starting his position and the other was only available to help out with animations.',
            },
            {
                text: 'The project files and the code I was given was reflecting the older version of the new website design. Thus, I updated the code to reflect the new version of the design. In addition, because the same website needed to be compatible with B302 and we wished to reduce redundancy as much as possible, we made sure to include translation files and environment values to identify whether the site should show B507 or B302 content.'
            }
        ],
        images2: [
            {
                url: 'buro-website/b507.png',
                size: 'full',
                imageHeight: '300px',
                backgroundSize: 'contain'
            },
            {
                url: 'buro-website/b302.png',
                size: 'full',
                imageHeight: '300px',
                backgroundSize: 'contain'
            },
        ],
        tools: [
            {
                name: 'HTML & CSS'
            },
            {
                name: 'Javascript'
            },
            {
                name: 'Laravel PHP 4.2 & 5+'
            }
        ],
        skills: [
            {
                description: 'Collaborated with B302'
            },
            {
                description: 'Wrapped up unfinished pieces'
            },
            {
                description: 'Overcame time zone differences'
            }
        ]
    },
];

interface burowebsite {
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