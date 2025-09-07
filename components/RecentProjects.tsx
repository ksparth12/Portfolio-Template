"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import { projects } from "@/data";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";
import ProjectDetails from "@/components/ProjectDetails";

interface Tag {
  id: string | number;
  name: string;
  path: string;
}

interface ProjectProps {
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  image: string;
  tags: Tag[];
  setPreview: (img: string | null) => void;
}

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h2 className="heading mb-8">
        A small selection of <span className="text-purple">recent projects</span>
      </h2>
      <div className="mt-10">
        <ScrollStack 
          className="w-full"
          itemDistance={120}
          itemScale={0.06}
          itemStackDistance={40}
          stackPosition="30%"
          scaleEndPosition="15%"
          baseScale={0.95}
          rotationAmount={1}
          blurAmount={0.7}
        >
          {projects.map((item) => (
            <ScrollStackItem 
              key={item.id}
              itemClassName="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 shadow-2xl"
            >
              <Project 
                title={item.title}
                description={item.des}
                href={item.link}
                image={item.img}
                tags={item.iconLists.map((icon, index) => ({ id: index, name: icon.split('/').pop()?.replace('.svg','') || '', path: icon }))}
                setPreview={() => {}}
                subDescription={[]}
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
      <div className="flex justify-center mt-12">
        <a 
          href="https://github.com/ksparth12" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 animate-fadeIn"
          aria-label="Visit GitHub for More Projects"
        >
          <span className="relative z-10">Visit GitHub for More Projects</span>
          <FaLocationArrow className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out rounded-full"></div>
        </a>
      </div>
    </section>
  );
};

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-[#d6995c]">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover:-translate-y-1 duration-200"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={[]}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default RecentProjects;
