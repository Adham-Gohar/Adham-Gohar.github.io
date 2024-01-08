// gitprofile.config.js

const config = {
  github: {
    username: 'Adham-Gohar', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'adham-gohar',
    //twitter: '',
 //   facebook: '',
 //   instagram: '',
 //   youtube: '', // example: 'pewdiepie'
  //  dribbble: '',
  //  behance: '',
  //  medium: '',
 //   dev: '',
  //  stackoverflow: '', // example: '1/jeff-atwood'
  //  skype: '',
  //  telegram: '',
 //   website: '',
    phone: '+201211163974',
    email: 'agohar21@aucegypt.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/Adham-Gohar/Resume/raw/main/Internship_Resume_Adham_Gohar.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C', 'C++', 'Python', 'HTML',
  ],
//  experiences: [
  //  {
    //  company: 'Company Name',
    //  position: 'Position',
    //  from: 'September 2021',
    //  to: 'Present',
  //    companyLink: 'https://example.com',
  //  },
  //  {
   //   company: 'Company Name',
    //  position: 'Position',
   //   from: 'July 2019',
   //   to: 'August 2021',
   //   companyLink: 'https://example.com',
  //  },
 // ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'The American University in Cairo',
      degree: 'Bachelor\'s of Computer Science',
      from: '2022',
      to: '2026',
      Award: 'USAID-AUC Merit Award',
      coursework: 'AUC: Fundamentals of Computing I, Fundamentals of Computing II, Applied Data Structures, Discrete Mathematics,  Linear Algebra; Harvard: CS50 Introduction to Computer Science; MIT: Introduction to Computer Science and Programming Using Python, Mathematics for Computer Science, Introduction To Algorithms; UMich: Python for Everybody, Problem-Solving using Computational Thinking; UCSD: Mathematical Thinking in Computer Science'
 

    },

  ],

  // To hide the `My Projects` section, keep it empty.
 // externalProjects: [
   // {
     // title: 'Project Name',
     // description:
      //  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
     // imageUrl: 'https://via.placeholder.com/250x250',
    //  link: 'https://example.com',
   // },
   // {
    //  title: 'Project Name',
    //  description:
   //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
   //   imageUrl: 'https://via.placeholder.com/250x250',
    //  link: 'https://example.com',
 //   },
 // ],
  // Display blog posts from your medium or dev account. (Optional)
  //blog: {
   // source: 'dev', // medium | dev
  //  username: 'arifszn', // to hide blog section, keep it empty
   // limit: 2, // How many posts to display. Max is 10.
  //},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
   //   'cupcake',
    //  'bumblebee',
    //  'emerald',
    //  'corporate',
    //  'synthwave',
    //  'retro',
    //  'cyberpunk',
    //  'valentine',
    //  'halloween',
    //  'garden',
    //  'forest',
     // 'aqua',
    //  'lofi',
    //  'pastel',
    //  'fantasy',
     // 'wireframe',
     // 'black',
     // 'luxury',
    //  'dracula',
     // 'cmyk',
     // 'autumn',
    //  'business',
     // 'acid',
    //  'lemonade',
    //  'night',
    //  'coffee',
    //  'winter',
    //  'procyon',
    ],

    // Custom theme
   // customTheme: {
   //   primary: '#fc055b',
   //   secondary: '#219aaf',
    //  accent: '#e8d03a',
    //  neutral: '#2A2730',
    //  'base-100': '#E3E3ED',
    //  '--rounded-box': '3rem',
    //  '--rounded-btn': '3rem',
   // },
  },
};

export default config;
