export const Yunhaseo: yunhaseo[] = [
    {
        category: 'design',
        mainImageUrl: 'yunhaseo/yunhaseo-desktop.png',
        mainImageSize: 'contain',
        title: 'Personal Branding',
        year: '2017',
        company: 'Personal Project',
        role: 'Graphic Designer',
        url: '',
        content: [
            {
                text: 'As I was creating my resume and writing my cover letters for various companies, I was driven by the want to have them both look consistent so that it was blatantly obvious the two documents were from the same person. Thus, I created a simple document template that boldly shows my name in order to help it become memorable and quick to identify (out of the potential piles/list of other resumes).',
            },
            {
                text: 'This lead to my exploration of personal identity and personality. I challenged myself to create a logo and a website that visually defines who I am and what I value.'
            },
        ],
        images: [
            {
                url: 'yunhaseo/letter.png',
                size: 'half',
                imageHeight: '210px',
                backgroundSize: 'contain'
            },
            {
                url: 'yunhaseo/cards.png',
                size: 'half',
                imageHeight: '210px',
                backgroundSize: 'contain'
            },
        ],
        content2: [
            {
                text: 'To represent my Korean background, I selected the colors black and red and a serif font as they are reminiscent of a traditional Asian stamp as well as the brushstroke of the Asian characters. The generous white spaces are perfect example for my preference for minimalism, simplicity, and lots of breathing room.'
            },
            {
                text: 'I began my logo creation by sketching numerous ideas, which wws then traced and modified on Adobe Illustrator. The logo represents a traditional Korean stamp; however, instead of the usual Chinese characters, I used Korean characters to write my name. As most of my audience would be American, by intentionally using Korean, I have made my logo more of a image rather than a text.'
            },
            {
                text: 'I later programmed my website design into this website using the Angular 5 Javascript framework along with SCSS.'
            }
        ],
        images2: [
            {
                url: 'yunhaseo/yunhaseo-phone.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
            {
                url: 'yunhaseo/yunhaseo-phone-2.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            }
        ],
        tools: [
            {
                name: 'Adobe Photoshop CC'
            },
            {
                name: 'Adobe Illustrator CC'
            },
            {
                name: 'Traditional Media (paper and pencil)'
            }
        ],
        skills: [
            {
                description: 'Maintained style consistency'
            },
            {
                description: 'Explored personal style'
            }
        ]
    }
];

interface yunhaseo {
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
