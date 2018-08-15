export const B507MarketingHandout: b507marketinghandout[] = [
    {
        category: 'design',
        mainImageUrl: 'b507-marketing-handout/b507-handout.png',
        mainImageSize: 'contain',
        title: 'B507 Marketing Handout',
        year: '2017',
        company: 'B507: A Creative Media Mob',
        role: 'Graphic Designer',
        url: '',
        content: [
            {
                text: 'For special occasions such as campus fairs and guest visits, B507 needed a quick and effective way to advertise the services it can provide. Prior to this design, older flyers occupied two sides of the paper and displayed completed projects as examples of our services. However, due to its length and details, they were better suited for occasions of extended interactions such as official meetings with clients or top executives.'
            }
        ],
        images: [
            {
                url: 'b507-marketing-handout/IMG_2988.JPG',
                size: 'full',
                imageHeight: '350px',
                backgroundSize: 'cover'
            },
        ],
        content2: [
            {
                text: 'In contrast to the previous design, a one-page handout had been created, minimizing distraction to highlight the services listed. Because the entire content is shown in one side of the flyer, no information is hidden if this document is shown as a display in our office or during a campus fair.',
            },
            {
                text: 'The entire design reflects the brand identity of B507 and uses colors to distinguish one piece of the content from the other. Because B507 is a part of Minnesota State University, I made sure to include the university identity and required publication statement to meet our school’s marketing standards.'
            }
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
                description: 'Utilized B507 branding'
            },
            {
                description: 'Highlighted essential information'
            },
            {
                description: 'Reduced stylistic distraction'
            }
        ]
    },
];

interface b507marketinghandout {
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