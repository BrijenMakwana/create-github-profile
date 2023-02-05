import Introduction from "../components/Introduction";
import Skills from "../components/Skills";
import Socials from "../components/Socials";
import Support from "../components/Support";

const sectionData = [
  {
    heading: "Introduction",
    description: "Describe yourself. Describe your identity to visitors.",
  },
  {
    heading: "Skills",
    description:
      "Display the programming languages, frameworks, tools, and technology you employ.",
  },
  {
    heading: "Socials",
    description:
      "Linking to your social media will help you connect with your visitors.",
  },
  {
    heading: "Support",
    description:
      "Make it simple for users who use your products to donate or support you.",
  },
];

const editingComponents = [
  <Introduction />,
  <Skills />,
  <Socials />,
  <Support />,
];

// skills icons
const skillsIconData = {
  core: [
    {
      name: "C",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/c-colored.svg",
      iTag: "c",
      link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170",
      isSelected: false,
    },
    {
      name: "C++",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/cplusplus-colored.svg",
      iTag: "cplusplus",
      link: "https://docs.microsoft.com/en-us/cpp/?view=msvc-170",
      isSelected: false,
    },
    {
      name: "C#",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/csharp-colored.svg",
      iTag: "csharp",
      link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
      isSelected: false,
    },
    {
      name: "Coffeescript",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/coffeescript-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/coffeescript-colored-dark.svg",
      iTag: "coffeescript",
      link: "https://coffeescript.org/",
      isSelected: false,
    },
    {
      name: "Dart",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/dart-colored.svg",
      iTag: "dart",
      link: "https://dart.dev/",
      isSelected: false,
    },
    {
      name: "Go",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/go-colored.svg",
      iTag: "go",
      link: "https://go.dev/doc/",
      isSelected: false,
    },
    {
      name: "Java",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/java-colored.svg",
      iTag: "java",
      link: "https://www.oracle.com/java/",
      isSelected: false,
    },
    {
      name: "JavaScript",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/javascript-colored.svg",
      iTag: "javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      isSelected: false,
    },
    {
      name: "Kotlin",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/kotlin-colored.svg",
      iTag: "kotlin",
      link: "https://kotlinlang.org/",
      isSelected: false,
    },
    {
      name: "Perl",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/perl-colored.svg",
      iTag: "perl",
      link: "https://www.perl.org/",
      isSelected: false,
    },
    {
      name: "PHP",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/php-colored.svg",
      iTag: "php",
      link: "https://www.php.net/",
      isSelected: false,
    },
    {
      name: "Python",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/python-colored.svg",
      iTag: "python",
      link: "https://www.python.org/",
      isSelected: false,
    },
    {
      name: "rlang",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/rlang-colored.svg",
      iTag: "rlang",
      link: "https://www.r-project.org/",
      isSelected: false,
    },
    {
      name: "Ruby",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/ruby-colored.svg",
      iTag: "ruby",
      link: "https://www.ruby-lang.org/en/",
      isSelected: false,
    },
    {
      name: "Rust",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/rust-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/rust-colored-dark.svg",
      iTag: "rust",
      link: "https://www.rust-lang.org/",
      isSelected: false,
    },
    {
      name: "Swift",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/swift-colored.svg",
      iTag: "swift",
      link: "https://developer.apple.com/swift/",
      isSelected: false,
    },
    {
      name: "TypeScript",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/typescript-colored.svg",
      iTag: "typescript",
      link: "https://www.typescriptlang.org/",
      isSelected: false,
    },
  ],
  frontend: [
    {
      name: "HTML5",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/html5-colored.svg",
      iTag: "html5",
      link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
      isSelected: false,
    },
    {
      name: "React",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/react-colored.svg",
      iTag: "react",
      link: "https://reactjs.org/",
      isSelected: false,
    },
    {
      name: "NextJs",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/nextjs-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/nextjs-colored-dark.svg",
      iTag: "nextjs",
      link: "https://nextjs.org/docs",
      isSelected: false,
    },
    {
      name: "Vue",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/vuejs-colored.svg",
      iTag: "vuejs",
      link: "https://vuejs.org/",
      isSelected: false,
    },
    {
      name: "Nuxtjs",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/nuxtjs-colored.svg",
      iTag: "nuxtjs",
      link: "https://nuxtjs.org/",
      isSelected: false,
    },
    {
      name: "Gatsby",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/gatsby-colored.svg",
      iTag: "gatsby",
      link: "https://www.gatsbyjs.com/",
      isSelected: false,
    },
    {
      name: "Angular",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/angularjs-colored.svg",
      iTag: "angularjs",
      link: "https://angular.io/",
      isSelected: false,
    },
    {
      name: "JQuery",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/jquery-colored.svg",
      iTag: "jquery",
      link: "https://jquery.com/",
      isSelected: false,
    },
    {
      name: "CSS3",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/css3-colored.svg",
      iTag: "css3",
      link: "https://www.w3.org/TR/CSS/#css",
      isSelected: false,
    },
    {
      name: "Sass",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/sass-colored.svg",
      iTag: "sass",
      link: "https://sass-lang.com/",
      isSelected: false,
    },
    {
      name: "TailwindCSS",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/tailwindcss-colored.svg",
      iTag: "tailwindcss",
      link: "https://tailwindcss.com/",
      isSelected: false,
    },
    {
      name: "Bootstrap",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/bootstrap-colored.svg",
      iTag: "bootstrap",
      link: "https://getbootstrap.com/",
      isSelected: false,
    },
    {
      name: "Material UI",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/materialui-colored.svg",
      iTag: "materialui",
      link: "https://mui.com/",
      isSelected: false,
    },
    {
      name: "Redux",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/redux-colored.svg",
      iTag: "redux",
      link: "https://redux.js.org/",
      isSelected: false,
    },
    {
      name: "Webpack",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/webpack-colored.svg",
      iTag: "webpack",
      link: "https://webpack.js.org/",
      isSelected: false,
    },
    {
      name: "Babel",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/babel-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/babel-colored-dark.svg",
      iTag: "babel",
      link: "https://babeljs.io/",
      isSelected: false,
    },
    {
      name: "Svelte",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/svelte-colored.svg",
      iTag: "svelte",
      link: "https://svelte.dev/",
      isSelected: false,
    },
  ],
  backend: [
    {
      name: "NodeJS",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/nodejs-colored.svg",
      iTag: "nodejs",
      link: "https://nodejs.org/en/",
      isSelected: false,
    },
    {
      name: "Express",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/express-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/express-colored-dark.svg",
      iTag: "express",
      link: "https://expressjs.com/",
      isSelected: false,
    },
    {
      name: "Fast API",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/fastapi-colored.svg",
      iTag: "fastapi",
      link: "https://fastapi.tiangolo.com/",
      isSelected: false,
    },
    {
      name: "GraphQL",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/graphql-colored.svg",
      iTag: "graphql",
      link: "https://graphql.org/",
      isSelected: false,
    },
    {
      name: "Oracle",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/oracle-colored.svg",
      iTag: "oracle",
      link: "https://www.oracle.com/uk/index.html",
      isSelected: false,
    },
    {
      name: "NestJS",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/nestjs-colored.svg",
      iTag: "nestjs",
      link: "https://docs.nestjs.com/",
      isSelected: false,
    },
    {
      name: "MongoDB",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/mongodb-colored.svg",
      iTag: "mongodb",
      link: "https://www.mongodb.com/",
      isSelected: false,
    },
    {
      name: "MySQL",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/mysql-colored.svg",
      iTag: "mysql",
      link: "https://www.mysql.com/",
      isSelected: false,
    },
    {
      name: "PostgreSQL",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/postgresql-colored.svg",
      iTag: "postgresql",
      link: "https://www.postgresql.org/",
      isSelected: false,
    },
    {
      name: "Firebase",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/firebase-colored.svg",
      iTag: "firebase",
      link: "https://firebase.google.com/",
      isSelected: false,
    },
    {
      name: "Appwrite",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/appwrite-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/appwrite-colored-dark.svg",
      iTag: "appwrite",
      link: "https://appwrite.io/",
      isSelected: false,
    },
    {
      name: "Heroku",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/heroku-colored.svg",
      iTag: "heroku",
      link: "https://www.heroku.com/",
      isSelected: false,
    },
    {
      name: "Flask",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/flask-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/flask-colored-dark.svg",
      iTag: "flask",
      link: "https://flask.palletsprojects.com/en/2.0.x/",
      isSelected: false,
    },
    {
      name: "Supabase",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/supabase-colored.svg",
      iTag: "supabase",
      link: "https://supabase.io/",
      isSelected: false,
    },
  ],
  other: [
    {
      name: ".NET",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/dot-net-colored.svg",
      iTag: "dot-net",
      link: "https://dotnet.microsoft.com/en-us/",
      isSelected: false,
    },
    {
      name: "Django",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/django-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/django-colored-dark.svg",
      iTag: "django",
      link: "https://www.djangoproject.com/",
      isSelected: false,
    },
    {
      name: "Laravel",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/laravel-colored.svg",
      iTag: "laravel",
      link: "https://laravel.com/",
      isSelected: false,
    },
    {
      name: "Flutter",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/flutter-colored.svg",
      iTag: "flutter",
      link: "https://flutter.dev/",
      isSelected: false,
    },
  ],
  software: [
    {
      name: "Photoshop",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/photoshop-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/photoshop-colored-dark.svg",
      iTag: "photoshop",
      link: "https://www.adobe.com/uk/products/photoshop.html",
      isSelected: false,
    },
    {
      name: "Illustrator",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/illustrator-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/illustrator-colored-dark.svg",
      iTag: "illustrator",
      link: "adobe.com/uk/products/illustrator.html",
      isSelected: false,
    },
    {
      name: "After Effects",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/aftereffects-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/aftereffects-colored-dark.svg",
      iTag: "aftereffects",
      link: "https://www.adobe.com/uk/products/aftereffects.html",
      isSelected: false,
    },
    {
      name: "Premiere Pro",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/premierepro-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/premierepro-colored-dark.svg",
      iTag: "premierepro",
      link: "https://www.adobe.com/uk/products/premiere.html",
      isSelected: false,
    },
    {
      name: "XD",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/xd-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/xd-colored-dark.svg",
      iTag: "xd",
      link: "https://www.adobe.com/uk/products/xd.html",
      isSelected: false,
    },
    {
      name: "Figma",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/figma-colored.svg",
      iTag: "figma",
      link: "https://www.figma.com/",
      isSelected: false,
    },
    {
      name: "Sketch",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/sketch-colored.svg",
      iTag: "sketch",
      link: "https://www.sketch.com/",
      isSelected: false,
    },
  ],
  web3: [
    {
      name: "Uniswap",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/uniswap-colored.svg",
      iTag: "uniswap",
      link: "https://uniswap.org/",
      isSelected: false,
    },
    {
      name: "AAVE",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/aave-colored.svg",
      iTag: "aave",
      link: "https://aave.com/",
      isSelected: false,
    },
    {
      name: "Sushiswap",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/sushiswap-colored.svg",
      iTag: "sushiswap",
      link: "https://www.sushi.com/",
      isSelected: false,
    },
    {
      name: "MetaMask",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/metamask-colored.svg",
      iTag: "metamask",
      link: "https://metamask.io/",
      isSelected: false,
    },
    {
      name: "Argent",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/argent-colored.svg",
      iTag: "argent",
      link: "https://www.argent.xyz/",
      isSelected: false,
    },
    {
      name: "Nansen",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/nansen-colored.svg",
      iTag: "nansen",
      link: "https://www.nansen.ai/",
      isSelected: false,
    },
    {
      name: "Chainlink",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/chainlink-colored.svg",
      iTag: "chainlink",
      link: "https://chain.link/",
      isSelected: false,
    },
    {
      name: "The Graph",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/the-graph-colored.svg",
      iTag: "the-graph",
      link: "https://thegraph.com/en/",
      isSelected: false,
    },
    {
      name: "Ethers",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/ethers-colored.svg",
      iTag: "ethers",
      link: "https://ethers.io",
      isSelected: false,
    },
    {
      name: "Web3Js",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/web3js-colored.svg",
      iTag: "web3js",
      link: "https://web3js.readthedocs.io/en/v1.7.1/#",
      isSelected: false,
    },
    {
      name: "Alchemy",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/alchemy-colored.svg",
      iTag: "alchemy",
      link: "https://docs.alchemy.com/alchemy/documentation/alchemy-web3",
      isSelected: false,
    },
    {
      name: "Hardhat",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/hardhat-colored.svg",
      iTag: "hardhat",
      link: "https://hardhat.org/",
      isSelected: false,
    },
    {
      name: "Truffle",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/truffle-colored.svg",
      iTag: "truffle",
      link: "https://trufflesuite.com",
      isSelected: false,
    },
    {
      name: "IPFS",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/ipfs-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/ipfs-colored-dark.svg",
      iTag: "ipfs",
      link: "https://ipfs.io/",
      isSelected: false,
    },
    {
      name: "Filebase",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/filebase-colored.svg",
      iTag: "filebase",
      link: "https://filebase.com/",
      isSelected: false,
    },
    {
      name: "Arweave",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/arweave-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/arweave-colored-dark.svg",
      iTag: "arweave",
      link: "https://www.arweave.org/",
      isSelected: false,
    },
    {
      name: "Ethereum",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/ethereum-colored.svg",
      iTag: "ethereum",
      link: "https://ethereum.org/en/",
      isSelected: false,
    },
    {
      name: "Polygon",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/polygon-colored.svg",
      iTag: "polygon",
      link: "https://polygon.technology/",
      isSelected: false,
    },
    {
      name: "Arbitrum",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/arbitrum-colored.svg",
      iTag: "arbitrum",
      link: "https://portal.arbitrum.one/",
      isSelected: false,
    },
    {
      name: "Avalanche",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/avalanche-colored.svg",
      iTag: "avalanche",
      link: "https://www.avax.network/",
      isSelected: false,
    },
    {
      name: "Near",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/near-colored.svg",
      darkPath:
        "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/near-colored-dark.svg",
      iTag: "near",
      link: "https://near.academy/",
      isSelected: false,
    },
    {
      name: "Flow",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/flow-colored.svg",
      iTag: "flow",
      link: "https://www.onflow.org/",
      isSelected: false,
    },
    {
      name: "Solana",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/solana-colored.svg",
      iTag: "solana",
      link: "https://solana.com/",
      isSelected: false,
    },
    {
      name: "Terra",
      path: "https://raw.githubusercontent.com/BrijenMakwana/create-github-profile/main/public/assets/Icons/skills/terra-colored.svg",
      iTag: "terra",
      link: "https://www.terra.money/",
      isSelected: false,
    },
  ],
};

export { sectionData, editingComponents, skillsIconData };
