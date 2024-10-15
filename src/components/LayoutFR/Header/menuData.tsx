import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "A Propos",
    path: "/apropos",
    newTab: false,
  },
  {
    id: 3,
    title: "Notre Expertise",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Audit",
        path: "/notreexpertise/audit",
        newTab: false,
      },
      {
        id: 42,
        title: "Intégration",
        path: "/notreexpertise/integration",
        newTab: false,
      },
      {
        id: 43,
        title: "Formation",
        path: "/notreexpertise/formations",
        newTab: false,
      },
    ],
  },
  {
    id: 44,
    title: "Espace Entreprise",
    path: "https://applicationweb.datalysconsulting.com/",
    newTab: false,
  },
  {
    id: 4,
    title: "Boutique",
    path: "/boutique",
    newTab: false,
  },
  {
    id: 5,
    title: "Evénements",
    path: "/evenements",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 5,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
