// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Learn",
  },
  {
    icon: UilUsersAlt,
    heading: "Network Hub",
  },
  {
    icon: UilPackage,
    heading: 'Alumnis'
  },
  {
    icon: UilChart,
    heading: 'Achievements'
  },
  {
    icon: UilUsdSquare,
    heading: 'ExamTesting'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Jobs",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 50,
    value: "2000",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Applied",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 20,
    value: "100",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Shortlisted",
    color: {
      backGround:
        "linear-gradient(#50c611 -146.42%, #50c611 -46.42%)",
      boxShadow: "0px 10px 20px 0px",
    },
    barValue: 40,
    value: "40",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Aaditya Malani",
    noti: "was placed in XYZ company as a Data Scientist.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Advait Sankhe",
    noti: "has received an internship in XYZ company as a Web Developer.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Aryan Rajpurkar",
    noti: "has posted an immediate need for a ML Developer for XYZ company.",
    time: "2 hours ago",
  },
  {
    img: img1,
    name: "Swar Jagdale",
    noti: "has posted an immediate need for a ML Developer for XYZ company.",
    time: "2 hours ago",
  },
  
];
