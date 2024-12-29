import { Home, AboutUs, MeetingNotes, Agenda } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Committee",
    dropdown: [
      {
        name: "About Us",
        path: "/committee/about-us",
      },
      {
        name: "Meeting Notes",
        path: "/committee/meeting-notes",
      },
      {
        name: "Agenda",
        path: "/committee/agenda",
      },
    ],
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;


// const routes = [
//   {
//     name: "Home",
//     path: "/home",
//   },
//   {
//     name: "Committee",
//     dropdown: [
//       {
//         name: "About Us",
//         path: "/about-us",
//       },
//       {
//         name: "Meeting Notes",
//         path: "/meeting-notes",
//       },
//       {
//         name: "Agenda",
//         path: "/agenda",
//       },
//     ],
//   },
//   {
//     name: "Docs",
//     path: "/docs",
//   },
// ];

// export default routes;