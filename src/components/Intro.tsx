import React from "react";
import { Link } from "react-router-dom";

const introContent = {
  greeting: "Hi, I am Birehan!",
  description:
    "I am an ML/AI Engineer with a background in Software Engineering, specializing in Artificial Intelligence. With one year of work experience, I am dedicated to continuous learning and growth, striving to push boundaries and make a meaningful impact in the field.",
  cvText: "Check out my CV",
  cvLink: "/cv.pdf",
  sections: [
    {
      icon: "📂",
      title: "Portfolio",
      description: "My ML projects across various domains",
      link: "/portfolio",
    },
    {
      icon: "📚",
      title: "Paper Reviews & Replications",
      description: "Reading and replicating ML and AI research",
      link: "/papers",
    },
    {
      icon: "📝",
      title: "Blog",
      description: "Insights and articles on ML and AI",
      link: "/blogs",
    },
  ],
};

const Intro = () => {
  return (
    <div>
      <article className="relative isolate flex flex-col gap-4 lg:flex-row max-h-fit">
        <div className="hidden lg:flex relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-48 lg:shrink-0">
          <img
            alt="Birehan Zewde"
            src="assets/me.jpeg"
            className="absolute inset-0 h-full w-full rounded-lg bg-overlay-light object-cover"
          />
        </div>
        <div>
          <div className="group relative max-w-xl">
            <p className="text-high-emph">{introContent.greeting}</p>
            <p className="mt-2 text-sm text-high-emph">
              {introContent.description}
            </p>
            <p className="text-high-emph mt-2 ">
              <a
                href={introContent.cvLink}
                target="_blank"
                className="text-link-color underline"
              >
                {introContent.cvText}
              </a>{" "}
              and other sections:
            </p>
            <ul className="mt-2 space-y-1 text-high-emph">
              {introContent.sections.map((section, index) => (
                <li key={index}>
                  {section.icon}{" "}
                  <Link to={section.link} className="text-link-color underline">
                    {section.title}
                  </Link>{" "}
                  – {section.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Intro;
