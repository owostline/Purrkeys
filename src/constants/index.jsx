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
    company: "Keyboard Enthusiast",
    image: user1,
    text: "The PurrKeys keycaps completely transformed my keyboard. They're not only cute but also high-quality. I’m extremely satisfied with the designs!",
  },
  {
    user: "Jane Smith",
    company: "Custom Build Specialist",
    image: user2,
    text: "PurrKeys nailed it with their creative designs. The customization options were exactly what I needed to make my setup truly unique! The keycaps look amazing!",
  },
  {
    user: "David Johnson",
    company: "Tech Blogger",
    image: user3,
    text: "I love how PurrKeys combines style and functionality. Their keycaps are durable, and the attention to detail is impressive. I highly recommend them!",
  },
  {
    user: "Ronee Brown",
    company: "Mechanical Keyboard Enthusiast",
    image: user4,
    text: "PurrKeys keycaps made my keyboard stand out! The adorable designs are unmatched, and the quality exceeded my expectations.",
  },
  {
    user: "Michael Wilson",
    company: "Gamer",
    image: user5,
    text: "I’m blown away by the variety of keycaps available at PurrKeys. They’re perfect for adding a fun touch to my gaming setup. Highly recommended!",
  },
  {
    user: "Emily Davis",
    company: "Designer",
    image: user6,
    text: "PurrKeys took my keyboard design to the next level. The customization and vibrant colors were exactly what I was looking for. Absolutely love them!",
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
  { href: "#", text: "About Us" },
  { href: "#", text: "Shipping Information" },
  { href: "#", text: "Care Instructions" },
  { href: "#", text: "FAQ" },
  { href: "#", text: "Contact Support" },
];

export const platformLinks = [
  { href: "#", text: "Our Collections" },
  { href: "#", text: "New Arrivals" },
  { href: "#", text: "Limited Editions" },
  { href: "#", text: "Customization" },
  { href: "#", text: "Gift Cards" },
];

export const communityLinks = [
  { href: "#", text: "Instagram" },
  { href: "#", text: "Facebook" },
  { href: "#", text: "Twitter" },
  { href: "#", text: "Pinterest" },
  { href: "#", text: "Customer Reviews" },
];
