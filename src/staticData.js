//import static images for gallery_slider
import slide_1 from "./staticImages/gallery_slider/slide_1.png";
import slide_2 from "./staticImages/gallery_slider/slide_2.png";
import slide_3 from "./staticImages/gallery_slider/slide_3.png";
import slide_4 from "./staticImages/gallery_slider/slide_4.png";
import slide_5 from "./staticImages/gallery_slider/slide_5.png";

//import static images for about_us
import img_1 from "./staticImages/about_Us/aboutUs_1.png";
import img_2 from "./staticImages/about_Us/aboutUs_2.png";
import img_3 from "./staticImages/about_Us/aboutUs_3.png";

//import static images from top_silder
import slide_img_1 from "./staticImages/top_slider/img-1.png";
import slide_img_2 from "./staticImages/top_slider/img-2.png";
import slide_img_3 from "./staticImages/top_slider/img-3.png";
import slide_img_4 from "./staticImages/top_slider/img-4.png";
import slide_img_5 from "./staticImages/top_slider/img-5.png";

import chat_icon from "./staticImages/other/chat_icon.png";
import clock_icon from "./staticImages/other/clock_icon.png";
import phone_icon from "./staticImages/other/phone_icon.png";

export const testimonialsData = [
  {
    id: 1,
    image: img_1,
    name: "name-1",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    image: img_2,
    name: "name-2",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    image: img_3,
    name: "name-3",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export const aboutUsData = [
  {
    id: 1,
    image: img_1,
    title: "title-1",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    image: img_2,
    title: "title-2",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    image: img_3,
    title: "title-3",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export const gallerySliderStaticData = [
  {
    id: 1,
    image: slide_1,
  },
  {
    id: 2,
    image: slide_2,
  },
  {
    id: 3,
    image: slide_3,
  },
  {
    id: 4,
    image: slide_4,
  },
  {
    id: 5,
    image: slide_5,
  },
];

export const topSliderStaticData = [
  {
    id: 1,
    image: slide_img_1,
  },
  {
    id: 2,
    image: slide_img_2,
  },
  {
    id: 3,
    image: slide_img_3,
  },
  {
    id: 4,
    image: slide_img_4,
  },
  {
    id: 5,
    image: slide_img_5,
  },
];

export const menuStaticData = [
  {
    id: 1,
    position: 1,
    hasChildren: true,
    name: "menu-1",
    style: {
      background: "rgb(11,48,97)",
    },
    children: [
      {
        id: 7,
        position: 2,
        hasChildren: false,
        name: "menu-1-1",
        style: {
          background: "rgb(11,48,97)",
        },
        children: [],
      },
      {
        id: 8,
        position: 2,
        hasChildren: false,
        name: "menu-1-2",
        style: {
          background: "rgb(11,48,97)",
        },
        children: [],
      },
      {
        id: 9,
        position: 2,
        hasChildren: false,
        name: "menu-1-3",
        style: {
          background: "rgb(11,48,97)",
        },
        children: [],
      },
      {
        id: 10,
        position: 2,
        hasChildren: false,
        name: "menu-1-4",
        style: {
          background: "rgb(11,48,97)",
        },
        children: [],
      },
    ],
  },
  {
    id: 2,
    position: 1,
    hasChildren: false,
    name: "menu-2",
    style: {
      background: "rgb(31,79,143)",
    },
    children: [],
  },
  {
    id: 3,
    position: 1,
    hasChildren: true,
    name: "menu-3",
    style: {
      background: "rgb(48,108,190)",
    },
    children: [
      {
        id: 11,
        position: 2,
        hasChildren: false,
        name: "menu-3-1",
        style: {
          background: "rgb(48,108,190)",
        },
        children: [],
      },
      {
        id: 12,
        position: 2,
        hasChildren: false,
        name: "menu-3-2",
        style: {
          background: "rgb(48,108,190)",
        },
        children: [],
      },
      {
        id: 13,
        position: 2,
        hasChildren: false,
        name: "menu-3-3",
        style: {
          background: "rgb(48,108,190)",
        },
        children: [],
      },
      {
        id: 14,
        position: 2,
        hasChildren: false,
        name: "menu-4-4",
        style: {
          background: "rgb(48,108,190)",
        },
        children: [],
      },
    ],
  },
  {
    id: 4,
    position: 1,
    hasChildren: false,
    name: "menu-4",
    style: {
      background: "rgb(11,48,97)",
    },
    children: [],
  },
  {
    id: 5,
    position: 1,
    hasChildren: false,
    style: {
      background: "rgb(31,79,143)",
    },
    name: "menu-5",
  },
  {
    id: 6,
    position: 1,
    hasChildren: false,
    name: "menu-6",
    style: {
      background: "rgb(48,108,190)",
    },
    children: [],
  },
];

export const infoList = [
  {
    id: 1,
    name: "о нас",
    url: "#",
  },
  {
    id: 2,
    name: "каталог",
    url: "#",
  },
  {
    id: 3,
    name: "аккаунт",
    url: "#",
  },
];

export const contuctUsData = [
  {
    id: 1,
    icon: chat_icon,
    contuct: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 2,
    icon: phone_icon,
    contuct: "Lorem Ipsum is simply dummy text of the printing",
  },
  {
    id: 3,
    icon: clock_icon,
    contuct: "Lorem Ipsum is simply dummy text of the printing",
  },
];
