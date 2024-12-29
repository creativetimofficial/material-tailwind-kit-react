// import { Home, Profile, SignIn, SignUp, Committee, AboutUs, MeetingNotes, Agenda } from "@/pages";
import { Home, AboutUs, MeetingNotes, Agenda } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  // {
  //   name: "profile",
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   name: "Sign SIn",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  // {
  //   name: "Sign Up",
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
  // {
  //   name: "Committee",
  //   path: "/committee",
  //   element: <Committee />,
  // },
  {
    name: "About Us",
    path: "/committee/about-us",
    element: <AboutUs />,
  },
  {
    name: "Meeting Notes",
    path: "/committee/meeting-notes",
    element: <MeetingNotes />,
  },
  {
    name: "Agenda",
    path: "/committee/agenda",
    element: <Agenda />,
  },
  {
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
