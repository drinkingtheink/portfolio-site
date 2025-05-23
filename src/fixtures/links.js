const appList = [
    {
        name: 'A11y Color Combinator',
        desc: 'Fun with Accessible Color Combos Using Chroma.js',
        href: 'https://a11y-color-combo.jasonmharrison.info/',
        tech: ['Vue.js', 'Chroma.js', 'Color Math', 'Animation'],
        img: 'https://i.ibb.co/qCxtWfh/Screenshot-2024-01-29-at-8-40-32-PM.png',
    },
    {
        name: 'HSL Color Space Explorer',
        desc: 'Explore the HSL Color Space and compare colors in a variety of ways',
        href: 'https://hslmfao.jasonmharrison.info/',
        tech: ['Vue.js', 'Chroma.js', 'Color Math', 'Animation'],
        img: 'https://i.ibb.co/ZcxX3ks/hslmfao-teaser.png',
    },
    {
        name: 'Charts, Dashboards, Interfaces and Wireframes',
        desc: 'Professional work delivered to multiple Fortune 500 companies and millions of users',
        href: 'http://jasonmharrison.info/',
        tech: ['Vue.js', 'React', 'Animation', 'Prototyping'],
        img: '../../banners/non-public-banner.png',
    },
    {
        name: 'Austin FC Kit Creator',
        desc: 'Retro-style kit designer for true Verde ATXFC supporters',
        href: 'https://austin-fc-kit-creator.jasonmharrison.info/',
        tech: ['Vue.js', 'SVG', 'Animation'],
        img: 'https://i.ibb.co/sbXQ8my/Screen-Shot-2022-10-13-at-10-54-02-PM.png',
    },
    {
        name: 'Watchful Eye',
        desc: 'Visualizing near-Earth objects using NASA APIs',
        href: 'https://watchful-eye.jasonmharrison.info/',
        tech: ['Vue.js', 'APIs', 'SVG', 'Animation'],
        img: 'https://i.ibb.co/dJzKV02/Screen-Shot-2022-10-13-at-10-55-52-PM.png',
    },
    {
        name: 'Pixelphonic',
        desc: 'Visualizing Audio Into Configurable Artwork',
        href: 'https://pixelphonic.jasonmharrison.info/',
        tech: ['AI', 'Vue.js', 'Chroma.js', 'Animation'],
        img: 'https://i.ibb.co/m4nQ83S/cover-img.png',
    },
    {
        name: 'The Circler',
        desc: 'Generative art app that creates interactable "Circlescapes" using SVGs',
        href: 'https://circler.jasonmharrison.info/',
        tech: ['React', 'Chroma.js', 'Color Math', 'Animation'],
        img: 'https://i.ibb.co/gMH2zXkC/circler2.png',
    },
    {
        name: 'Dogtastic',
        desc: 'Name and Claim Your Own Cyber Kennel',
        href: 'https://dogtastic.jasonmharrison.info/',
        tech: ['Vue.js', 'APIs'],
        img: 'https://i.ibb.co/ZTgwnzg/Screen-Shot-2022-10-13-at-10-54-59-PM.png',
    },
    {
        name: 'Annihil·ipsum Generator',
        desc: 'Dummy text generator of the creepiest caliber',
        href: 'https://annihilipsum.jasonmharrison.info/',
        tech: ['Vue.js', 'Animation'],
        img: 'https://i.ibb.co/HttBmLT/Screen-Shot-2022-10-13-at-10-56-29-PM.png',
    },
    // {
    //     name: 'The Circler',
    //     desc: 'SVG-driven generative art - create your own Circlescapes',
    //     href: 'https://circler.netlify.com/',
    //     tech: ['React', 'SVG', 'Animation'],
    //     img: 'https://i.ibb.co/zPQXgGj/Screen-Shot-2022-10-14-at-4-11-59-PM.png',
    // },
    // {
    //     name: 'Quality of Life Report',
    //     desc: 'Exploring Quality of Life metrics for cities all over the world. How does yours rank?',
    //     href: 'https://qol-report.surge.sh/',
    //     tech: ['Vue', 'Animation', 'APIs'],
    //     img: '../../banners/qol-banner.png',
    // },
    {
        name: 'Grand Ephemeris Website',
        desc: 'Website for my band with a few FE Easter Eggs',
        href: 'https://grandephemeris.com/',
        tech: ['Vue', 'Animation', 'SVG'],
        img: '../../banners/ge-banner.png',
    },
    {
        name: 'Subbreddit Surfer',
        desc: 'Explore Reddit content via quick search and browse',
        href: 'https://subreddit-surfer.netlify.com/',
        tech: ['React', 'APIs'],
        img: 'https://i.ibb.co/v4djTBm/Screen-Shot-2022-10-14-at-4-13-56-PM.png',
    },
    {
        name: 'Configurable SVG Branding',
        desc: 'Explore options in allowing users to configure SVGs with brand elements',
        href: 'https://icon-playground.netlify.app/',
        tech: ['Ember.js', 'SVG', 'Prototyping'],
        img: '../../banners/svg-brand-banner.png',
    },
    {
        name: 'Colour with a YOU',
        desc: 'Exploring color combinations and mutations with Chroma.js',
        href: 'https://color-with-a-you.netlify.app/',
        tech: ['Vue.js', 'Color Math', 'APIs'],
        img: '../../banners/colour-banner.png',
    },
]

const social = [
    {
        name: 'github',
        href: 'https://github.com/drinkingtheink',
    },
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/jasonmharrison/',
    },
    {
        name: 'behance',
        href: 'https://www.behance.net/drinkingtheink',
    },
    {
        name: 'dribbble',
        href: 'https://dribbble.com/DrinkingtheInk',
    },
    {
        name: 'goodreads',
        href: 'https://www.goodreads.com/user/show/124215009-jason-harrison',
    },
    {
        name: 'twitter',
        href: 'https://twitter.com/DrinkingtheInk',
    },
    {
        name: 'my band',
        href: 'https://grandephemeris.com/',
    },
    {
        name: 'soundcloud',
        href: 'https://soundcloud.com/grandephemeris',
    },
    {
        name: 'spotify',
        href: 'https://open.spotify.com/artist/3f6p4SQJXhJGWdPHL8NoKF?si=e8MCRaubQxaSKKmNwiZjZA',
    },
    {
        name: 'youtube',
        href: 'https://www.youtube.com/channel/UCq4djdWj45kvLQKFduslQ4g/videos',
    }
]

const artList = [
    {
        name: 'Identity Design',
        desc: 'Branding and other ephemera for many different industries',
        href: 'https://www.behance.net/gallery/155058821/Identity-Design',
        img: '../../banners/branding-banner.png',
        tech: ['Digital', 'Illustration', 'Typography'],
    },
    {
        name: 'Album/Release Artwork',
        desc: 'Promotional artwork for musical releases of many genres',
        href: 'https://www.behance.net/gallery/153105507/ALBUM-EP-COVERS',
        img: '../../banners/music-banner.png',
        tech: ['Illustration', 'Digital', 'Printing', 'Typography'],
    },
    {
        name: 'The Circler',
        desc: 'Generative art app that creates interactable "Circlescapes" using SVGs',
        href: 'https://circler.jasonmharrison.info/',
        tech: ['React', 'Chroma.js', 'Color Math', 'Animation'],
        img: 'https://i.ibb.co/gMH2zXkC/circler2.png',
    },
    {
        name: 'Remote Viewers Club',
        desc: 'Gallery of metaphysical explorations, tests, and challenges accented by engaging animations',
        href: 'https://remote-viewers-club.netlify.app/',
        img: 'https://i.ibb.co/rHcMRYq/remote-viewers-club-preview.png',
        tech: ['Animation', 'Illustration', 'SVG'],
    },
    {
        name: 'Illustrations',
        desc: 'Character studies of some of my favorite people/things/entities',
        href: 'https://www.behance.net/gallery/155077365/Illustrations',
        img: '../../banners/illu-banner.png',
        tech: ['Hand Drawn', 'Analog', 'Old School'],
    },
    {
        name: 'Austin FC Matchday Poster Collection',
        desc: 'Bespoke ATXFC matchday posters paying homage to COMICS',
        href: 'https://www.behance.net/gallery/152850805/Austin-FC-Matchday-Poster-Gallery',
        img: '../../banners/atxfc-banner.png',
        tech: ['Digital', 'Animation', 'SVG'],
    },
    {
        name: 'Warpchitecture Digital Collages',
        desc: 'Digital photographic collage collection documenting my travels',
        href: 'https://www.behance.net/gallery/155075669/Warpchitecture-Digital-Collage-Collection',
        img: '../../banners/warp-banner.png',
        tech: ['Photography', 'Digital'],
    },
]

export { appList, social, artList };