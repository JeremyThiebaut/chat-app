import { ChatCircleDots, Phone, Users } from "phosphor-react";
import { randFirstName, randImg, randText } from "@ngneat/falso";

const Profil_Menu = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const ChatList = [
  {
    id: 0,
    img: randImg(),
    name: randFirstName(),
    msg: randText(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: randImg(),
    name: randFirstName(),
    msg: randText(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: randImg(),
    name: randFirstName(),
    msg: randText(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: randImg(),
    name: randFirstName(),
    msg: randText(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: randImg(),
    name: randFirstName(),
    msg: randText(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: randImg(),
    name: randFirstName(),
    msg: randText(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: randImg(),
    name: randFirstName(),
    msg: randText(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: randImg(),
    name: randFirstName(),
    msg: randText(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

export { Profil_Menu, ChatList };
