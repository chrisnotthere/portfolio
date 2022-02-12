import Blog from './images/blog.jpg'
import FakebookLogin from './images/Fakebook-login.png'
import HTML from './images/html.png';
import CSS from './images/css.png';
import JavaScript from './images/javascript.png';
import React from './images/react.png';
import Pug from './images/pug.png';
import Node from './images/node.png';
import Express from './images/express.png';
import Mongoose from './images/mongoose.png';
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
import Mario from './images/mario-memory.png'
import Etch from './images/etch.png'
import TNW from './images/tnw.png'
import NWS from './images/nws.png'

export const projects = [
  {
    id: 1,
    name: 'Fakebook',
    image: FakebookLogin,
    description: 'FakeBook is a Facebook clone made with Node/Express, React, and MongoDB. Become friends by sending or accepting friend requests, make comments on and like posts, and more.',
    demoLink: 'https://chrisnotthere.github.io/fakebook/#/login',
    repoLink: 'https://github.com/chrisnotthere/fakebook',
    techUsed: [React, Node, MongoDB],
  },
  {
    id: 2,
    name: 'Mario Memory',
    image: Mario,
    description: 'A simple memory game created in React. Try and click on a different character each time and remember who you have already selected. The cards are "shuffled" each time to make things more difficult. Choose how many cards to display at once with the card slider. Your score and high score are shown on the scoreboard.',
    demoLink: 'https://chrisnotthere.github.io/memory-game/',
    repoLink: 'https://github.com/chrisnotthere/memory-game',
    techUsed: [HTML, CSS, React],
  },
  {
    id: 3,
    name: 'Etch-A-Sketch',
    image: Etch,
    description: 'A cross between a sketchpad and etch-a-sketch, made using HTML, CSS, and JavaScript.',
    demoLink: 'https://chrisnotthere.github.io/etch-a-sketch/',
    repoLink: 'https://github.com/chrisnotthere/etch-a-sketch',
    techUsed: [HTML, CSS, JavaScript],
  },
  {
    id: 4,
    name: 'thenextweb.com clone',
    image: TNW,
    description: 'A fully responsive clone of thenextweb.com. Made with just HTML and CSS. This responsive layout looks great on all screen sizes, thanks to many media screen breakpoints.',
    demoLink: 'https://chrisnotthere.github.io/thenextweb-clone',
    repoLink: 'https://github.com/chrisnotthere/thenextweb-clone',
    techUsed: [HTML, CSS],
  },
  // {
  //   id: 5,
  //   name: 'BBC News clone',
  //   image: Blog,
  //   description: 'This is a sample description for a project. This is a sample description for a project. This is a sample description for a project. This is a sample description for a project.',
  //   demoLink: 'https://chrisnotthere.github.io/',
  //   repoLink: 'https://github.com/chrisnotthere/',
  // },
  {
    id: 6,
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
    name: 'React',
    image: React,
  },
  {
    name: 'Pug/Jade',
    image: Pug,
  },
]

export const backend = [
  {
    name: 'Node',
    image: Node,
    category: 'Backend',
  },
  {
    name: 'Express',
    image: Express,
    category: 'Backend',
  },
  {
    name: 'Mongoose',
    image: Mongoose,
    category: 'Backend',
  },
  {
    name: 'MongoDB',
    image: MongoDB,
    category: 'Backend',
  },
  {
    name: 'MariaDB',
    image: mariaDB,
    category: 'Backend',
  },
  {
    name: 'Firebase',
    image: Firebase,
    category: 'Backend',
  },
  {
    name: 'PHP',
    image: PHP,
    category: 'Backend',
  },
  {
    name: 'C#',
    image: C,
    category: 'Backend',
  },
]

export const others = [
  {
    name: 'Git',
    image: Git,
  },
  {
    name: 'Linux CLI',
    image: Linux,
  },
  {
    name: 'VSCode',
    image: VSCode,
  },
  {
    name: 'NPM',
    image: NPM,
  },
  {
    name: 'Jest',
    image: Jest,
  },
]
