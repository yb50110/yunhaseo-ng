export const Lostcrayons: lostcrayons[] = [
    {
        category: 'illustration',
        mainImageUrl: 'lost-crayons/title.jpg',
        mainImageSize: 'cover',
        title: 'Lost-Crayons Comic',
        year: '2017',
        company: 'Personal Project',
        role: 'Illustrator & Author',
        url: 'https://www.webtoons.com/en/challenge/lost-crayons/list?title_no=79177',
        content: [
            {
                text: 'Although I created comics as early as 2015, it was during my study abroad period in 2016 that I began to regularly make pieces. In 2017, this became a course project to create a piece almost daily and compile it into a small booklet.'
            },
        ],
        images: [
            {
                url: 'lost-crayons/lost-cryons-3.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'lost-crayons/lost-cryons-inside.jpg',
                size: 'full',
                imageHeight: '300px',
                backgroundSize: 'cover'
            },
        ],
        content2: [
            {
                text: 'Each piece is an interpretation of a real-life event or an emotion that I have experienced. Although they are meant to be humorous, painful events have also been shared in light-hearted and relatable drawings. They are sketched and inked on paper and later scanned to be published on Naver Webtoons (online comic portal for both established and amateur authors).',
            },
        ],
        images2: [
            {
                url: 'lost-crayons/IMG_4485.JPG',
                size: 'half',
                imageHeight: '530px',
                backgroundSize: 'cover'
            },
            {
                url: 'lost-crayons/IMG_13872.jpg',
                size: 'half',
                imageHeight: '530px',
                backgroundSize: 'cover'
            },
            {
                url: 'lost-crayons/Yunha001.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
        ],
        tools: [
            {
                name: 'Pencil & ink'
            },
            {
                name: 'Watercolor'
            },
            {
                name: 'Adobe Photoshop CC'
            }
        ],
        skills: [
            {
                description: 'Illustrate snapshots of personal life'
            },
            {
                description: 'Express emotions through character'
            },
        ]
    },
];

interface lostcrayons {
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