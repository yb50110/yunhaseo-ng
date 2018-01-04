export const Krake: krake[] = [
    {
        category: 'development',
        mainImageUrl: 'krake/main.png',
        mainImageSize: 'contain',
        title: 'Project Krake Wordpress Site',
        year: '2016',
        company: 'B302: A Creative Media Mob',
        role: 'Front-end Developer',
        url: 'https://project-krake.eu/',
        content: [
            {
                text: 'A small group situated in Nijmegen, Netherlands had partnered with a group in Germany to build a site that helps small communities between the border of the Netherlands and Germany to connect and become aware of the resources available to them. They also wanted these communities to find local events occurring near them.',
            },
            {
                text: 'Our solution was to build a simple Wordpress site with a custom theme to fit our client\'s needs. This site supported the Dutch and German languages for both group of visitors. It also contained a map with markers that showed the various community events in certain locations.'
            },
            {
                text: 'The following is the mobile landing page in Dutch and German:'
            }
        ],
        images: [
            {
                url: 'krake/krake-mobile.png',
                size: 'half',
                backgroundSize: 'contain'
            },
            {
                url: 'krake/krake-mobile-2.png',
                size: 'half',
                backgroundSize: 'contain'
            }
        ],
        tools: [
            {
                name: 'HTML & CSS'
            },
            {
                name: 'Javascript (JQery)'
            },
            {
                name: 'PHP (Laravel)'
            },
            {
                name: 'Git (Bitbucket)'
            }
        ],
        skills: [
            {
                description: 'Held multiple feedback moments'
            },
            {
                description: 'Worked with external project members'
            },
            {
                description: 'Created Wordpress themes'
            }
        ]
    },
];

interface krake {
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