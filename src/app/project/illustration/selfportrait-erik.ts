export const Selfportraiterik: selfportraiterik[] = [
    {
        category: 'illustration',
        mainImageUrl: 'selfportrait-erik/2.jpg',
        mainImageSize: 'cover',
        title: 'Self Portrait through a Model',
        year: '2017',
        company: 'Personal Project',
        role: 'Illustrator',
        url: '',
        content: [
            {
                text: 'This project was a personal project to help me reveal emotions of myself and my introversion through someone else. My introversion is often manifested with a lot of taking to my self; I enjoy having conversations with other people that my mind had recreated. Essentially, these people that I recreate are just reflections of myself.'
            },
            {
                text: 'By having these conversations, I can not only humor myself but also come to conclusions or solutions of problems that I am facing. Many people would jump right to thinking I am schizophrenic, but these projections are completely voluntary. It is my assumption that this occurs as I high spacial awareness and intelligence, so I am able to easily recreate settings and characters.'
            },
            {
                text: 'The model is a close acquaintance of mine. These shots were made by recording him and he and I had a conversation. I intently brought up controversial or thoughtful topics to help bring out those unique expressions. The following images are studies and progress shots:'
            }
        ],
        images: [
            {
                url: 'selfportrait-erik/study.jpg',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'selfportrait-erik/study2.jpg',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'selfportrait-erik/progress.jpg',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'selfportrait-erik/progress2.jpg',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'cover'
            },
        ],
        content2: [
            {
                text: 'This project has been very personal and I had faced many internal challenges. I had come to question how my artworks show who I am and my emotions. I also believed that my pieces were very emotionless, static, and rather boring.',
            },
            {
                text: 'However, I was able to discover that I was showing who I was by choosing not to show much of my emotions through my artwork - that was who I am. I still showed the uncontrolled side of my personality through my controlled mark-making in the shadings, which critics have noted that they are the interesting parts of my pieces as they reveal the other side of me.'
            },
            {
                text: 'All in all, this project was very successful. I was not only able to create four beautiful portraits of this model, but also in self discovery and consciousness of my style.'
            }
        ],
        images2: [
            {
                url: 'selfportrait-erik/1.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'selfportrait-erik/2.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'selfportrait-erik/3.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'selfportrait-erik/4.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'selfportrait-erik/setup.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            },
            {
                url: 'selfportrait-erik/entire-view.jpg',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'cover'
            }
        ],
        tools: [
            {
                name: 'Charcoal (vine, compressed, pencil)'
            },
            {
                name: 'Color pastels'
            },
            {
                name: 'Watercolor'
            },
            {
                name: 'Color pencils and graphite'
            }
        ],
        skills: [
            {
                description: 'Used tools to depict emotions'
            },
            {
                description: 'Talked with model for expressions'
            },
        ]
    },
];

interface selfportraiterik {
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