"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>ASP.NET</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science Graduate</li>
        <li>University of Gondar</li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="p-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            🚀 Transformative Development Experience
          </h1>
          <p className="text-xl">Get ready for a transformative experience!</p>
        </header>
        <div className="shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">
            ✨ Here's what you'll receive:
          </h2>
          <ul className="mb-6 gap-2 text-lg">
            <li>
              ✔️ Fortified, impenetrable websites/apps ensuring total security
            </li>
            <li>
              ✔️ Lightning-fast loading speeds for boosted conversion rates
            </li>
            <li>
              ✔️ Seamlessly responsive, mobile-friendly products for all devices
            </li>
            <li>✔️ A 100% Guarantee of absolute satisfaction</li>
          </ul>
          <p className="mb-6">
            ⚒ Ready to elevate your online presence? Hire me for expert
            development of your online store or website, coupled with ongoing
            maintenance. I take immense pride in my craft and always honor the
            time and dedication invested in my work!
          </p>
        </div>
        <section className="shadow-md rounded-lg p-6 mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-center py-10">
            🏅 Skills Showcase 🏅
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Frontend &amp; Full-Stack
              </h3>
              <ul className="list-inside flex flex-col gap-2">
                <li>
                  ✅ **React**: Crafting dynamic and responsive web applications
                  with React.
                </li>
                <li>
                  ✅ **Next.js**: Crafting dynamic and responsive web
                  applications with Next.js.
                </li>
                <li>✅ **JavaScript**: Expert in JavaScript.</li>
                <li>
                  ✅ **TypeScript**: Harnessing the power of static typing for
                  robust codebases.
                </li>
                <li>
                  ✅ **Redux** and ** Redux-toolkit**: Mastering state
                  management for complex apps.
                </li>
                <li>
                  ✅ **Redux Form & Redux Thunk**: Seamless form handling and
                  asynchronous operations.
                </li>
                <li>
                  ✅**CSS & Sass**: Creating stunning and stylish user
                  interfaces.
                </li>
                <li>
                  ✅ **HTML5**: Structuring web content for maximum impact.
                </li>
                <li>
                  ✅ **React Bootstrap**: Enhancing UI/UX with responsive
                  design.
                </li>
                <li>
                  ✅ **JSX**: Transforming concepts into interactive components.
                </li>
                <li>
                  ✅ **SCSS**: Elevating the aesthetics of your applications.
                </li>
                <li>
                  ✅ **Node.js**: Building scalable server-side solutions.
                </li>
                <li>
                  ✅ **PostgreSQL**: Building scalable Database solutions.
                </li>
                <li>✅**Express.js**: Crafting fast and efficient APIs.</li>
                <li>
                  ✅ **Axios**: Reliable HTTP requests for seamless data
                  retrieval.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Component Library Mastery
              </h3>
              <ul className="list-inside flex flex-col gap-2">
                <li>
                  ✅ **Chakra UI**: Elevating aesthetics with this modern UI
                  framework.
                </li>
                <li>
                  ✅ **Material UI**: Bringing Google's design philosophy to
                  life.
                </li>
                <li>
                  ✅ **Tailwind**: Streamlining UI development with utility
                  classes.
                </li>
                <li>
                  ✅ **Ant Design**: Crafting beautiful and efficient UIs with
                  ease.
                </li>
                <li>
                  ✅ **Bootstrap**: The classic framework for sleek design.
                </li>
                <li>
                  ✅ **Semantic UI**: Creating intuitive and responsive
                  interfaces.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mt-3 flex flex-col gap-2">
                3rd Party Library Wizardry
              </h3>
              <ul className="list-inside">
                <li>
                  ✅ **Lodash**: Harnessing utility functions for streamlined
                  development.
                </li>
                <li>✅ **Moment.js**: Handling dates and times like a pro.</li>
                <li>
                  ✅ **RxJS**: Managing asynchronous data flows efficiently.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="shadow-md rounded-lg p-6 mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            🏅 Other Essential Tools 🏅
          </h2>
          <ul className="flex flex-col gap-2 list-inside mb-6  py-6 justify-start">
            <li>✅ **Postman**: Ensuring API functionality and reliability.</li>
            <li>
              ✅ **Git, Github, GitLab, Bitbucket**: Version control and
              collaboration expertise.
            </li>
          </ul>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            🏅 Other Essential Tech Stack for MERN 🏅
          </h2>
          <ul className="flex flex-col gap-2 list-inside py-6 justify-start">
            <li>➳ Custom WordPress Theme</li>
            <li>➳ Webflow development (websites and web apps)</li>
            <li>➳ Website development from scratch</li>
            <li>➳ Figma to WordPress</li>
            <li>➳ Figma to Next.js</li>
            <li>➳ Figma to React</li>
            <li>➳ Express.js</li>
            <li>➳ MongoDB</li>
            <li>➳ PostgreSQL</li>
            <li>➳ SaaS applications</li>
            <li>➳ NFT websites</li>
          </ul>
        </section>
        <section className="shadow-md rounded-lg p-6 mt-10">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            🎓 Education 🎓
          </h2>
          <ul className="flex flex-col gap-2 list-inside mb-6  py-6 justify-start">
            <li>🎓 Bachlor of Science (BSc) in Computer Science</li>
            <li>🎓 University of Gondar</li>
          </ul>
        </section>
        <footer className="text-center mt-10">
          <p className="text-lg">
            📩 Feel free to reach out and let's embark on this exciting journey
            together.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default AboutSection;
