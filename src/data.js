// import FakebookLogin from './images/Fakebook-login.png'
// import Mario from './images/mario-memory.png';
import HTML from './images/html.png';
import CSS from './images/css.png';
import JavaScript from './images/javascript.png';
import React from './images/react.png';
import Pug from './images/pug.png';
import Node from './images/node.png';
import Express from './images/express.png';
import ExpressSquare from './images/express-square.png';
import MongoDB from './images/mongodb.png';
import mariaDB from './images/mariadb.png';
import Firebase from './images/firebase.png';
import PHP from './images/php.png';
import C from './images/c.png';
import Git from './images/git.png';
import Linux from './images/linux.png';
import VSCode from './images/vscode.png';
import NPM from './images/npm.png';
import Jest from './images/jest.png';
import Etch from './images/etch.png';
import TNW from './images/tnw.gif';
import NWS from './images/nws.png';
import BlogHub from './images/bloghub2.png';
import MarioMemoryGame from './images/mario-memory-game.png';
import Redux from './images/redux.png';
import Typescript from './images/typescript.png';
import MySQL from './images/mysql.png';
import Bootstrap from './images/bootstrap.png';
import MaterialUI from './images/mui.png';
import Tailwind from './images/tailwind.png';
import StyledComponents from './images/styled-components.png';
import Responsive from './images/responsive.png';
import Cassandra from './images/cassandra.png';
import Python from './images/python.png';
import Cypress from './images/cypress.png';
import Shopify from './images/shopify.png';
import GitHub from './images/github.png';
import Bitbucket from './images/bitbucket.png';
import Jira from './images/jira.png';
import RESTful from './images/restapi.png';
import GraphQL from './images/graphql.png';
import AWS from './images/aws.png';

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
    techUsed: [React, Typescript, ExpressSquare, MySQL],
  },
  {
    id: '002',
    name: 'Mario Memory',
    image: MarioMemoryGame,
    description: `A memory card flip game created using using React, Redux, Typescript, MongoDB, and Express. The game's logic and state are managed using Redux, and the entire application is written in TypeScript. It features three difficulty levels, a highscore leaderboard, end-to-end testing with Cypress, and a mobile-friendly design.`,
    demoLink: 'https://chrisnotthere.github.io/mario-memory/',
    repoLink: 'https://github.com/chrisnotthere/mario-memory',
    techUsed: [React, Redux, Typescript, MongoDB, ExpressSquare],
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
    name: 'Styled Components',
    image: StyledComponents,
  },
  {
    name: 'Responsive Design',
    image: Responsive,
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
    image: mariaDB,
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
    name: 'Linux CLI',
    image: Linux,
  },
  // {
  //   name: 'VSCode',
  //   image: VSCode,
  // },
  {
    name: 'NPM',
    image: NPM,
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
    name: 'AWS',
    image: AWS,
  },
  {
    name: 'Jira',
    image: Jira,
  },
  {
    name: 'Shopify App',
    image: Shopify,
  }
]
