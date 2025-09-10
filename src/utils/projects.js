export const PROJECT_DETAILS = [
  {
    slug: 'lenabni',
    title: 'Lenabni',
    cover: `${process.env.PUBLIC_URL}/images/lenabni-arabic-logo.png`,
    screenshots: [
      { src: `${process.env.PUBLIC_URL}/images/lenabni1.png`, caption: 'Homepage hero' },
      { src: `${process.env.PUBLIC_URL}/images/lenabni2.png`, caption: 'Homepage hero' },
      { src: `${process.env.PUBLIC_URL}/images/lenabni3.png`, caption: 'Latest Blogs' },
      { src: `${process.env.PUBLIC_URL}/images/lenabni4.png`, caption: 'Contact Us' },
      { src: `${process.env.PUBLIC_URL}/images/lenabni5.png`, caption: 'Responsive view' },
      { src: `${process.env.PUBLIC_URL}/images/lenabni6.png`, caption: 'Responsive view' },
      { src: `${process.env.PUBLIC_URL}/images/lenabni7.png`, caption: 'Responsive view' },
    ],
    summary: 'Elegant platform celebrating and empowering Syrian women.',
    description:
      'Lenabni is an elegant website dedicated to celebrating and empowering Syrian women. The platform highlights stories, culture, and creativity while providing a modern digital space that reflects resilience and identity.',
    role: 'Frontend Developer (WordPress customization, HTML/CSS)',
    technologies: ['WordPress', 'HTML', 'CSS'],
    liveUrl: 'https://lnabni.com/',
    repoUrl: null
  },
  {
    slug: 'athleticsdxb',
    title: 'AthleticsDXB',
    cover: `${process.env.PUBLIC_URL}/images/athletics-dxb.png`,
    screenshots: [
      { src: `${process.env.PUBLIC_URL}/images/athletics-dxb.png`, caption: 'AthleticsDXB' },
      { src: `${process.env.PUBLIC_URL}/images/athletics1.jpeg`, caption: 'View Submitted Assessment' },
      { src: `${process.env.PUBLIC_URL}/images/athletics2.jpeg`, caption: 'View Submitted Assessment' },
      { src: `${process.env.PUBLIC_URL}/images/athletics3.jpeg`, caption: 'Create New Assessment' },
      { src: `${process.env.PUBLIC_URL}/images/athletics4.jpeg`, caption: 'Create New Assessment' },
      { src: `${process.env.PUBLIC_URL}/images/athletics5.jpeg`, caption: 'View Assessment List' },
      { src: `${process.env.PUBLIC_URL}/images/athletics6.jpeg`, caption: 'View Players List' },
    ],
    summary: 'Athlete management system built with Flutter and ASP.NET Core.',
    description:
      'Designed and developed a full-featured athlete management system from the ground up using Flutter for the front end and ASP.NET Core for the back end.',
    role: 'Full-stack Developer (Flutter + ASP.NET Core)',
    technologies: ['Flutter', 'ASP.NET Core', 'REST APIs'],
    repoUrl: 'https://gitlab.com/fatora1/athleticsdxb-frontend',
  },
  {
    slug: 'alessandra-parisi',
    title: 'Alessandra Parisi Sito',
    cover: `${process.env.PUBLIC_URL}/images/church-image.jpg`,
    screenshots: [
      { src: `${process.env.PUBLIC_URL}/images/church-image.jpg`, caption: '' }
    ],
    summary: 'Responsive portfolio website using React.js.',
    description:
      'Developed a responsive portfolio website using React.js to showcase Alessandra Parisi’s collection of holy icons and religious artwork.',
    role: 'Frontend Developer (React)',
    technologies: ['React', 'CSS'],
    liveUrl: 'https://alessandraparisi.it',
    repoUrl: null
  },
  {
    slug: 'pierre4ad',
    title: 'Pierre4Ad',
    cover: `${process.env.PUBLIC_URL}/images/pierre4ad-logo.jpg`,
    screenshots: [
      { src: `${process.env.PUBLIC_URL}/images/pierre4ad-logo.jpg`, caption: '' }
    ],
    summary: 'Responsive web pages with HTML, CSS, and JavaScript.',
    description:
      'Contributed to a freelance project by building responsive web pages with HTML, CSS, and JavaScript, focusing on user-friendly design and functionality.',
    role: 'Frontend Developer (HTML/CSS/JS)',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://pierre4ad.com/',
    repoUrl: null
  },
  {
    slug: 'scanner',
    title: 'Passports-IDs Scanner',
    cover: `${process.env.PUBLIC_URL}/images/passport-image.jpg`,
    screenshots: [
      { src: `${process.env.PUBLIC_URL}/images/passport-image.jpg`, caption: 'To be added soon!' }
    ],
    summary: 'Document scanning app with MRZ and PDF417 in Flutter.',
    description:
      'Integrated a Flutter SDK to scan documents like Passports, IDs, and Driver\'s Licenses using MRZ decoding and PDF417, including document validity checks.',
    role: 'Mobile Developer (Flutter)',
    technologies: ['Flutter', 'Camera', 'SDK Integration'],
    liveUrl: 'https://gitlab.com/fatora1/Scanner-Flutter-App',
  },
  {
    slug: 'threejs-boat',
    title: '3D Boat Simulation',
    cover: `${process.env.PUBLIC_URL}/images/three.png`,
    screenshots: [
      { src: `${process.env.PUBLIC_URL}/images/three.png`, caption: 'To be added soon!' }
    ],
    summary: 'Interactive 3D boat simulation using Three.js.',
    description:
      'Created a 3D boat simulation using Three.js, handling physics and modeling independently. Demonstrates advanced 3D graphics and interactive simulation skills.',
    role: 'Frontend Developer (Three.js)',
    technologies: ['JavaScript', 'Three.js'],
    liveUrl: 'https://github.com/Nicholass206/Boat-3js',
  }
];

export const findProjectBySlug = (slug) =>
  PROJECT_DETAILS.find((p) => p.slug === slug);


