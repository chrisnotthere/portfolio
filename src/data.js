import Etch from './images/etch.png';
import TNW from './images/tnw.gif';
import NWS from './images/nws.png';
import BlogHub from './images/bloghub2.png';
import MarioMemoryGame from './images/mario-memory-game.png';
// import FakebookLogin from './images/Fakebook-login.png'
// import Mario from './images/mario-memory.png';

// icons
import AWS from './images/AWS-Light.svg';
import Bitbucket from './images/bitbucket.svg';
import Bootstrap from './images/Bootstrap.svg';
import C from './images/csharp.svg';
import Cassandra from './images/Cassandra.svg';
import Confluence from './images/confluence.svg';
import CSS from './images/CSS.svg';
import Cypress from './images/cypress.svg';
import Docker from './images/Docker.svg';
import Express from './images/Express.svg';
import Firebase from './images/Firebase.svg';
import Git from './images/Git.svg';
import GitHub from './images/Github.svg';
import GraphQL from './images/GraphQL.svg';
import HTML from './images/HTML.svg';
import JavaScript from './images/JavaScript.svg';
import Jest from './images/Jest.svg';
import Jira from './images/jira.svg';
import Linux from './images/Linux.svg';
import MariaDB from './images/mariadb.svg';
import MaterialUI from './images/MaterialUI.svg';
import MongoDB from './images/MongoDB.svg';
import Next from './images/NextJS.svg';
import MySQL from './images/MySQL.svg';
import Node from './images/NodeJS.svg';
import NPM from './images/npm.svg';
import PHP from './images/PHP.svg';
import Python from './images/Python.svg';
import React from './images/React.svg';
import Redux from './images/Redux.svg';
import RESTful from './images/RESTful.svg';
import Shopify from './images/shopify.svg';
import Tailwind from './images/TailwindCSS.svg';
import Typescript from './images/TypeScript.svg';

export const projects = [
  // {
  //   id: '001',
  //   name: 'Fakebook',
  //   image: FakebookLogin,
  //   description: 'FakeBook is a Facebook clone made with Node/Express, React, and MongoDB. Features include friend requests, posts, comments, likes, and more. Authentication is handled using JSON Web Tokens',
  //   demoLink: 'https://chrisnotthere.github.io/fakebook/#/login',
  //   repoLink: 'https://github.com/chrisnotthere/fakebook',
  //   techUsed: [React, Node, MongoDB],
  // },
  // {
  //   id: '002',
  //   name: 'Mario Memory',
  //   image: Mario,
  //   description: 'A simple memory game created in React. Try and click each character only once. The cards are "shuffled" each time to make things more difficult. Choose how many cards to display at once with the card slider. Can you get 18/18?',
  //   demoLink: 'https://chrisnotthere.github.io/memory-game/',
  //   repoLink: 'https://github.com/chrisnotthere/memory-game',
  //   techUsed: [HTML, CSS, React],
  // },
  {
    id: '001',
    name: 'BlogHub',
    image: BlogHub,
    description: 'BlogHub is a full-featured blog Content Management System (CMS) that empowers users to post, edit, rate, and engage with various blog content. Built with TypeScript, React, Node/Express, and MySQL, this project showcases modern web development practices and design patterns.',
    demoLink: 'https://chrisnotthere.github.io/BlogHub/',
    repoLink: 'https://github.com/chrisnotthere/BlogHub',
    techUsed: [React, Typescript, Express, MySQL],
  },
  {
    id: '002',
    name: 'Mario Memory',
    image: MarioMemoryGame,
    description: `A memory card flip game created using using React, Redux, Typescript, MongoDB, and Express. The game's logic and state are managed using Redux, and the entire application is written in TypeScript. It features three difficulty levels, a highscore leaderboard, end-to-end testing with Cypress, and a mobile-friendly design.`,
    demoLink: 'https://chrisnotthere.github.io/mario-memory/',
    repoLink: 'https://github.com/chrisnotthere/mario-memory',
    techUsed: [React, Redux, Typescript, MongoDB, Express],
  },
  {
    id: '003',
    name: 'thenextweb.com clone',
    image: TNW,
    description: 'A fully responsive clone of thenextweb.com. Made with just HTML and CSS. This responsive layout looks great on all screen sizes, thanks to many media screen breakpoints.',
    demoLink: 'https://chrisnotthere.github.io/thenextweb-clone',
    repoLink: 'https://github.com/chrisnotthere/thenextweb-clone',
    techUsed: [HTML, CSS],
  },
  {
    id: '004',
    name: 'Etch-A-Sketch',
    image: Etch,
    description: 'A cross between a sketchpad and etch-a-sketch, made using HTML, CSS, and JavaScript.',
    demoLink: 'https://chrisnotthere.github.io/etch-a-sketch/',
    repoLink: 'https://github.com/chrisnotthere/etch-a-sketch',
    techUsed: [HTML, CSS, JavaScript],
  },
  {
    id: '005',
    name: 'newscientist.com clone',
    image: NWS,
    description: 'A New Scientist article clone made with HTML and CSS (Flexbox and Grid).',
    demoLink: 'https://chrisnotthere.github.io/newscientist-clone',
    repoLink: 'https://github.com/chrisnotthere/newscientist-clone',
    techUsed: [HTML, CSS],
  },
];

export const frontend = [
  {
    name: 'HTML',
    image: HTML,
  },
  {
    name: 'CSS',
    image: CSS,
  },
  {
    name: 'JavaScript',
    image: JavaScript,
  },
  {
    name: 'TypeScript',
    image: Typescript,
  },
  {
    name: 'React',
    image: React,
  },
  {
    name: 'Redux',
    image: Redux,
  },
  {
    name: 'Next',
    image: Next,
  },
  {
    name: 'Bootstrap',
    image: Bootstrap,
  },
  {
    name: 'Material UI',
    image: MaterialUI,
  },
  {
    name: 'Tailwind',
    image: Tailwind,
  },
]

export const backend = [
  {
    name: 'Node',
    image: Node,
  },
  {
    name: 'Express',
    image: Express,
  },
  {
    name: 'MongoDB',
    image: MongoDB,
  },
  {
    name: 'MySQL',
    image: MySQL,
  },
  {
    name: 'MariaDB',
    image: MariaDB,
  },
  {
    name: 'CassandraDB',
    image: Cassandra,
  },
  {
    name: 'Firebase',
    image: Firebase,
  },
  {
    name: 'Python',
    image: Python,
  },
  {
    name: 'PHP',
    image: PHP,
  },
  {
    name: 'C#',
    image: C,
  },
]

export const others = [
  {
    name: 'NPM',
    image: NPM,
  },
  {
    name: 'Git',
    image: Git,
  },
  {
    name: 'GitHub',
    image: GitHub,
  },
  {
    name: 'Bitbucket',
    image: Bitbucket,
  },
  {
    name: 'Jira',
    image: Jira,
  },
  {
    name: 'Confluence',
    image: Confluence,
  },
  {
    name: 'Jest',
    image: Jest,
  },
  {
    name: 'Cypress',
    image: Cypress,
  },
  {
    name: 'RESTful API',
    image: RESTful,
  },
  {
    name: 'GraphQL',
    image: GraphQL,
  },
  {
    name: 'Linux CLI',
    image: Linux,
  },
  {
    name: 'Docker',
    image: Docker,
  },
  {
    name: 'AWS',
    image: AWS,
  },
  {
    name: 'Shopify App',
    image: Shopify,
  },
]
