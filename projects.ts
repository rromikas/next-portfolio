import Map from "images/map.svg";
import Movies from "images/movies.png";
import Admin from "images/admin.svg";
import Scheduler from "images/scheduler.svg";
import UcardElite from "images/ucard.png";
import Scheduler2 from "images/scheduler2.png";
import Celligence from "images/celligence.png";
import StudioImage from "images/studio.png";
import NextShopImage from "images/next-shop.png";
import PageTransitionShopImage from "images/ecommerce.png";
import FiverrChatsExtensionImage from "images/fiverr-extension.png";
import { Project } from "types";

export const projects: Project[] = [
  {
    image: FiverrChatsExtensionImage.src,
    color: "#1DBF73",
    title: "Fiverr Chats Extension",
    description:
      "Fiverr Chats allows you to securely share your Fiverr chats without sharing your account. Chats data are accessed in real time by the help of chrome extension which also is capable of sending messages. As you can understand, you will need to keep your browser open to continue to share chats.",
    technologies: ["React JS", "Chrome API"],
    links: {
      demo: "https://chrome.google.com/webstore/detail/fiverr-chats/cbhkjgjolleaohbpmkbinglohhgaclhc",
      code: "https://github.com/rromikas/fiverr-chats-extension",
    },
  },
  {
    image: StudioImage.src,
    color: "rebeccapurple",
    title: "Ads Studio",
    description:
      "Working for Sofiapulse I created powerfull tool to create customizable ad banners with multiple frames, where you can add images, videos, chats, swipable galleries, flippers and other cool components. Try it out!",
    technologies: ["Preact", "Typescript", "TailwindCSS"],
    links: {
      demo: "https://studio-editor.netlify.app",
      code: "https://github.com/rromikas/studio",
    },
  },
  {
    image: PageTransitionShopImage.src,
    color: "#F7088C",
    title: "Shoes Store Animated",
    description:
      "Inspired by design from dribbble. I added some page transitions which makes user experience more interesting and intuitive. Try to click on product or try to add it to cart.",
    technologies: ["Next JS", "React Flip Tookit"],
    links: {
      demo: "https://nextjs-ecommerce-zeta.vercel.app/",
      code: "https://github.com/rromikas/nextjs-ecommerce",
    },
  },
  {
    image: NextShopImage.src,
    color: "#FB743F",
    title: "Next Store [In progress]",
    description:
      "E Store built on Next JS, pages rendered at build time. Connected to shopify, products and collections can be customized. There are only Home and Product pages yet, but I plan to add Checkout, My Orders pages.",
    technologies: ["Next JS", "Typescript", "TailwindCSS", "Shopify"],
    links: {
      demo: "https://next-shop-peach.vercel.app/",
      code: "https://github.com/rromikas/next-shop",
    },
  },

  {
    image: Celligence.src,
    color: "#03C6E2",
    title: "Celligence landing page",
    description:
      "This is the Celligence company landing page with high quality video background. Super fast initial loading, responsiveness, scroll transitions. ",
    technologies: ["React", "Typescript", "TailwindCSS", "React-Messure"],
    links: {
      demo: "https://celligence.netlify.app/",
      code: "",
    },
  },
  {
    image: Scheduler2.src,
    color: "#BAC1D1",
    title: "Week Scheduler V2",
    description:
      "The second iteration of the week scheduler. Improved design, added labels. extended use cases: copying and moving time slots between rows, time slots splitting and merging, selecting multiple time slots.",
    technologies: ["React", "Bootstrap"],
    links: {
      demo: "https://schedulerr.netlify.app/",
      code: "",
    },
  },
  {
    image: UcardElite.src,
    color: "#343434",
    title: "Cards Service Dashboard",
    technologies: ["React", "TailwindCSS", "Firebase"],
    links: {
      demo: "https://sharp-heisenberg.netlify.app/admin",
      code: "https://github.com/rromikas/cards",
    },
    description:
      "Admin dashboard for website contents management. Dashboard is connected to firebase, administrator can register and manage website resources, such as metals for bank cards, borders, order discounts. Dashboard is fully responsive.",
  },
  {
    image: Scheduler.src,
    color: "#FFE0A5",
    title: "Week Scheduler",
    description:
      "Cross browser implementation of week scheduler using double range inputs. In the scheduler you can zoom, select, drag, stretch, copy and delete timeslots. Scheduler is responsive, you are able to scroll on dragging.",
    technologies: ["RC-Slider", "React", "Bootstrap"],
    links: {
      demo: "https://weekscheduler.netlify.app/",
      code: "https://github.com/rromikas/scheduler",
    },
  },
  {
    links: { demo: "https://svgmaptemp.netlify.app/", code: "private" },
    color: "#549FCD",
    image: Map.src,
    title: "Interactive Map Creator",
    description:
      "The app allows user to create interactive map of any country in the world. User can customize tooltips, add images or shapes as interactive points, change areas and borders colors and finally export interactive map as html code.",
    technologies: ["React", "Bootstrap", "D3"],
  },
  {
    links: { demo: "https://mowies.netlify.app/", code: "https://github.com/rromikas/mowies" },
    color: "#F6B6B6",
    image: Movies.src,
    title: "Movies Reviews Website",
    description:
      "Website where people can read and write reviews about movies. Also, here users can find the most popular movies in different genres, read their descriptions and watch trailers.",
    technologies: ["React", "Bootstrap", "Redux", "NodeJS"],
    apis: ["TMDB"],
  },
  {
    links: { demo: "https://internly.netlify.app/business", code: "private" },
    color: "#986DA7",
    image: Admin.src,
    title: "Students Dashboard",
    description:
      "Admin dashboard is made for Internly website where students can find internships in companies. Dashboard is meant to see website statistics, list of roles, student profile. In dashboard admin can make user shortlisted, create roles, generate diversity reports.",
    technologies: ["React", "Bootstrap"],
  },
];
