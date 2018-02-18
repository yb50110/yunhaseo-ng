export const Beyondthegalaxy: beyondthegalaxy[] = [
    {
        category: 'development',
        mainImageUrl: 'beyondthegalaxy/desktop-home.png',
        mainImageSize: 'contain',
        title: 'Our Future Health Site Update',
        year: '2017',
        company: 'B507: A Creative Media Mob',
        role: 'Frontend Developer',
        url: '',
        content: [
            {
                text: 'Our client was an author who has published a new book and needed a website to help promote it. She wanted the site\'s design to reflect the overall theme and mood of the story and help give a sneak peek of what happens in it.'
            },
            {
                text: 'Our team\'s designer took the role to meet with the client and flesh out a concept and build it into the high-fidelity wireframe. However, he was an exchange student and had to return to the Netherlands as his contract period ended. I covered his role for the final client feedback meeting and applied minor design changes for the final design.'
            }
        ],
        images: [
            {
                url: 'beyondthegalaxy/desktop-synopsis.png',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'contain'
            },
        ],
        content2: [
            {
                text: 'I wrapped up the design and the front-end of the site by taking care of final edits, exporting of assets, and programming the HTML, CSS, and Javascript of this single-page site. All tasks were completed within the really tight budget and hours left for the project.',
            },
        ],
        images2: [
            {
                url: 'beyondthegalaxy/mobile-home.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
            {
                url: 'beyondthegalaxy/mobile-characters.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
        ],
        tools: [
            {
                name: 'HTML & CSS'
            },
            {
                name: 'Wordpress'
            },
            {
                name: 'FTP'
            }
        ],
        skills: [
            {
                description: 'Programmed carefully on old code'
            },
            {
                description: 'Worked under tight deadline'
            }
        ]
    },
];

interface beyondthegalaxy {
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