import {
  BootstrapIcon,
  CssIcon,
  FacebookIcon,
  FigmaIcon,
  GitIcon,
  HtmlIcon,
  InstagramIcon,
  JsIcon,
  LinkedIcon,
  MuiIcon,
  ReactIcon,
  ViteIcon,
  VsCodeIcon,
} from "../components/CustIconSvg";

export const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "About",
  },
  {
    name: "Project",
    path: "Project",
  },
  {
    name: "Note",
    path: "Note",
  },
];

export const techStackIcons = [
  {
    isTop: true,
    icon: <HtmlIcon />,
  },
  {
    isTop: true,
    icon: <CssIcon />,
  },
  {
    isTop: true,
    icon: <BootstrapIcon />,
  },
  {
    isTop: true,
    icon: <ReactIcon />,
  },
  {
    isTop: true,
    icon: <MuiIcon />,
  },
  {
    isBottom: false,
    icon: <ViteIcon />,
  },
  {
    isBottom: false,
    icon: <FigmaIcon />,
  },
  {
    isBottom: false,
    icon: <VsCodeIcon />,
  },
  {
    isBottom: false,
    icon: <GitIcon />,
  },
  {
    isBottom: false,
    icon: <JsIcon />,
  },
];
export const socMedIcon = [
  {
    media: <FacebookIcon />,
  },
  {
    media: <InstagramIcon />,
  },
  {
    media: <LinkedIcon />,
  },
];

export const cardProject = [{}];
