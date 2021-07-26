import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const subMenu = [
  {
    title: "Product",
    iconOpen: <FaAngleDown />,
    iconClose: <FaAngleUp />,
    subnav: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    title: "Company",
    iconOpen: <FaAngleDown />,
    iconClose: <FaAngleUp />,
    subnav: ["About", "Team", "Blog", "Careers"],
  },
  {
    title: "Connect",
    iconOpen: <FaAngleDown />,
    iconClose: <FaAngleUp />,
    subnav: ["Contact", "Newsletter", "Linkedin"],
  },
];
