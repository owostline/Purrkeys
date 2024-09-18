import { Cat } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { BringToFront } from "lucide-react";
import { Hand } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Settings } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Products", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <Cat />,
    text: "Adorable Designs",
    description:
      "Transform your keyboard with cute and playful keycap designs, ranging from adorable cat faces to colorful paws.",
  },
  {
    icon: <ThumbsUp />,
    text: "Premium Quality",
    description:
      "Crafted with durable materials, each keycap is designed to withstand heavy typing and maintain its vibrant colors.",
  },
  {
    icon: <BringToFront />,
    text: "Universal Fit",
    description:
      "Compatible with most mechanical keyboards, ensuring that no matter your setup, PurrKeys can enhance your typing experience.",
  },
  {
    icon: <Hand />,
    text: "Easy to Install",
    description:
      "Swap out your old keycaps effortlessly with our easy-to-use keycap puller tool, included with every order.",
  },
  {
    icon: <LayoutGrid />,
    text: "Customizable Sets",
    description:
      "Mix and match keycap sets to create a unique, personalized look for your keyboard that matches your style.",
  },
  {
    icon: <Settings />,
    text: "Ergonomic Design",
    description:
      "Engineered for comfort, PurrKeys keycaps offer a smooth typing experience with every press.",
  },
];

export const checklistItems = [
  {
    title: "Cat Collection",
    description:
      "Add playful paws and cute whiskers to your keyboard with our cat-themed keycaps.",
  },
  {
    title: "Bunny Bonanza",
    description:
      "Hop into cuteness with bunny ear and fluffy tail keycaps.",
  },
  {
    title: "Doggie Delights",
    description:
      "Fetch fun dog-themed keycaps featuring pugs, corgis, and more.",
  },
  {
    title: "Ducky Days",
    description:
      "Quack up your keyboard with adorable duck face and webbed feet keycaps.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$3",
    features: [
      "1 Keycap Design",
      "Standard Plastic Material",
      "Basic Color Options",
      "No Customization",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "5 Keycap Designs",
      "Premium Plastic Material",
      "Wide Color Selection",
      "Basic Customization",
    ],
  },
  {
    title: "Collector's Edition",
    price: "$50",
    features: [
      "Unlimited Keycap Designs",
      "Premium Plastic Material",
      "Exclusive Color Options",
      "Limited Edition Packaging",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
