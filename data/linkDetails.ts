/*
href: URL of your profile
title: Name of the site
description: small description
*/

export interface CardProps {
  href: string;
  title: string;
  description: string;
}

// you can add more such data if you want to add
// if you don't want to use any of these then just delete that particular data

export const CardData: Array<CardProps> = [
  {
    href: "https://www.linkedin.com/in/krishna-gopal-rathi-a17018195/",
    title: "Linkedin",
    description: "Let's connect on LinkedIn",
  },
  {
    href: "https://www.instagram.com/rathi_krishna2000/?hl=en",
    title: "Instagram",
    description: "Get to know me Personally",
  },
  {
    href: "https://github.com/Krishrat",
    title: "Github",
    description: "Check out some of my projects",
  },
  {
    href: "https://wa.me/917487999183",
    title: "Whatsapp",
    description: "Let's talk on Whatsapp",
  },
  {
    href: "https://leetcode.com/Krishrat",
    title: "Leetcode",
    description: "See me grinding DSA daily",
  },
  {
    href: "https://codeforces.com/profile/Krishrat2000",
    title: "Codeforces",
    description: "My daily chill zone",
  },
  {
    href: "https://www.hackerrank.com/anantrathi2019",
    title: "HackerRank",
    description: "I practice programming here",
  },
];
