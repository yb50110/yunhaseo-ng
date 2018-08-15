export const Otp: otp[] = [
    {
        category: 'design',
        mainImageUrl: 'otp/otp-silver-main.png',
        mainImageSize: 'contain',
        title: 'Online Tutoring Portal Redesign',
        year: '2017',
        company: 'B507: A Creative Media Mob',
        role: 'Graphic Designer',
        url: '',
        content: [
            {
                text: 'Minnesota State University, Mankato, partnered with B507 to create a live tutoring session and recorded tutorial video search portal for all enrolled students regardless of their major or registered courses. This portal has been helping out students who have difficulty being physically present with a tutor due to travel distance, illness, or personal schedule.'
            }
        ],
        images: [
            {
                url: 'otp/otp-phones-1.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
            {
                url: 'otp/otp-phones-2.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            }
        ],
        content2: [
            {
                text: 'Although it has been up and running with the students, the interface and the general navigation of the site was deemed a need of improvement. Thus, I participated in the creation of wireframes and a redesign of the site, working with other developers to apply UI aspects from Google’s Material Design. As a team, we researched similar services, such as YouTube and TwitchTV, and how they approached the challenge.',
            },
        ],
        images2: [
            {
                url: '',
                size: '',
                imageHeight: '',
                backgroundSize: ''
            }
        ],
        tools: [
            {
                name: 'Adobe Photoshop CC'
            }
        ],
        skills: [
            {
                description: 'Utilized Google Material Design'
            },
            {
                description: 'Implemented MSU Branding'
            },
            {
                description: 'Researched designs of similar services'
            },
            {
                description: 'Worked in a team'
            },
        ]
    },
];

interface otp {
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