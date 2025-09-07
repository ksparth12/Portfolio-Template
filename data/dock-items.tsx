import React from "react";
import { FaUser, FaProjectDiagram, FaComments, FaEnvelope } from "react-icons/fa";

export const dockItems = [
  { title: "About", icon: <FaUser className="h-4 w-4" />, href: "#about" },
  { title: "Projects", icon: <FaProjectDiagram className="h-4 w-4" />, href: "#projects" },
  { title: "Testimonials", icon: <FaComments className="h-4 w-4" />, href: "#testimonials" },
  { title: "Contact", icon: <FaEnvelope className="h-4 w-4" />, href: "#contact" },
];
