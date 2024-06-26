"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ExpressJS-Dynamic-RBAC-role-based-access",
    description:
      "#There are many resources out there on creating a user account with role field in the user table. The limitation with this is that a user can only have one role at a time. Some software products such as management systems might require a user to share multiple roles and sometimes have direct permissions to perform an action.",
    image: "/images/projects/1.png",
    tag: ["All", "API"],
    gitUrl:
      "https://github.com/abrahamjo25/ExpressJS-Dynamic-RBAC-role-based-access",
    previewUrl:
      "https://github.com/abrahamjo25/ExpressJS-Dynamic-RBAC-role-based-access",
  },
  {
    id: 2,
    title: "Efficient File Exchange App for Ethiopian Airlines Group",
    description: "a file exchange application for Ethiopian Airlines Group that allows for the efficient parsing and exchange of files from Sabre. The application is designed to check all issued airline tickets and drop them into a local Filezilla file for easy access and management. This project required a deep understanding of airline ticketing systems and the ability to develop a robust and reliable application to meet the specific needs of Ethiopian Airlines Group. I am proud of the successful implementation of this project and the positive impact it has had on the operations of the airline.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 3,
    title:
      "Ethiopian Airlines Employee promotion and competative achievment Coaching Training System",
    description:
      "A project created for Ethiopian airlines Employees coaching training process for promotion and competitve achievement",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://ethiopianairlines.visualstudio.com/Corporate%20Coaching/_git/Coaching%20V2%20UI",
    previewUrl: "https://etgcoaching.ethiopianairlines.com/",
  },
  {
    id: 4,
    title: "Real Estate Sales and Rental Services",
    description:
      "Discover your dream home with our top-notch real estate services. Whether you're looking to buy, sell, or rent, we offer a wide range of properties to suit all needs and budgets. Explore listings, get expert advice, and find the perfect property today.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abrahamjo25/Real-Estate-Sales",
    previewUrl: "https://housebroker.vercel.app",
  },
  {
    id: 5,
    title: "Modern NextJS and Tailwind CSS Website Template",
    description:
      "Create a professional and visually appealing website with our NextJS and Tailwind CSS template. This template is perfect for businesses, agencies, portfolios, and more. The modern design is fully customizable to match your brand, and the responsive layout ensures your website looks great on all devices. The code is well-organized and easy to edit, making it simple to create a unique website that stands out from the competition. With integration with popular plugins and tools, this template offers everything you need to create a successful online presence. Upgrade your website today with our NextJS and Tailwind CSS template.",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abrahamjo25/Hubnox-nextJS-UI-Template",
    previewUrl: "https://hubnox.vercel.app/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Sample Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="API"
          isSelected={tag === "API"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
