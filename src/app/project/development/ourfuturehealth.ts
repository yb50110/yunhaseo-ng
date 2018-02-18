export const Ourfuturehealth: ourfuturehealth[] = [
    {
        category: 'development',
        mainImageUrl: 'ourfuturehealth/desktop-home.png',
        mainImageSize: 'contain',
        title: 'Our Future Health Site Update',
        year: '2016',
        company: 'B302: A Creative Media Mob',
        role: 'Frontend Developer',
        url: '',
        content: [
            {
                text: 'The Our Future Health Conference is a large-scale conference began in 2016 for domestic and international speakers and guests to gather to discuss future of health care and improving its sustainability and affordability for all patients. This site that I worked for was for the 2016 conference, and some updates have been made since to accommodate for the upcoming 2017 conference.'
            },
            {
                text: 'This update in the styling was successfully completed even without a design or a wireframe. Our client wanted the site to implement the new logo that was created and have to cleaned up to reduce clutter and improve readability. Because the conference was happening rather soon, I had to work under tight deadlines and mounting pressure.'
            }
        ],
        images: [
            {
                url: 'ourfuturehealth/desktop-apply.png',
                size: 'full',
                imageHeight: '',
                backgroundSize: 'contain'
            },
        ],
        content2: [
            {
                text: 'In addition, I have learned to work on projects with existing and functional code. This site was originally built on Wordpress and implemented a free template. Custom CSS was implemented to make small changes that added up to improve the aesthetics of the site greatly.',
            },
            {
                text: 'The following images show the changes that have been applied to the styling to make for a better viewing on the mobile home screen:'
            }
        ],
        images2: [
            {
                url: 'ourfuturehealth/mobile-home-old.png',
                size: 'half',
                imageHeight: '',
                backgroundSize: 'contain'
            },
            {
                url: 'ourfuturehealth/mobile-home-new.png',
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

interface ourfuturehealth {
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