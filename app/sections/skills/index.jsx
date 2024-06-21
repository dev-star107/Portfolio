import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ProjectCard from './ProjectCard';
import { LazyMotion, domAnimation } from 'framer-motion';

export function SkillsSection() {
  const [focused, setFocused] = useState(0);
  const [paused, setPaused] = useState(false);
  const projectsRef = useRef(null);
  const navigationRef = useRef(null);
  const projectData = [
    {
      title: "PassGen",
      subTitle:
        "You can easily generate secure and random passwords using this simple tool.",
      thumbnail: "/assets/img/projects-default.jpg",
      description:
        "PassGen is a Python CLI tool for generating secure, random passwords from the command line. It allows you to easily create strong and unique passwords for your accounts, with a variety of customization options. Simply enter a few commands and PassGen will do the rest, providing you with a secure password to use with confidence. Fast and efficient, PassGen is the perfect tool for anyone who needs to generate passwords on the fly.",
      techStack: ["Python"],
      srcURL: "https://github.com/LakshanRukantha/PassGen",
    },
    {
      title: "CutLink",
      subTitle: "Here you have full control over your links.",
      thumbnail: "/assets/img/thumbnails/cutlink-thumbnail.png",
      description:
        "CutLink is a modern and user-friendly web application built with React and Material UI. Our platform offers a complete solution for link shortening. With CutLink, you can create short, branded links that are easy to share. Try CutLink today and experience the power of a smarter link shortning platform!",
      techStack: ["React", "MUI"],
      srcURL: "https://cut-link.netlify.app/",
    },
    {
      title: "MindMate",
      subTitle:
        "Unlock the power of your mind with our AI-Driven mental health web application",
      thumbnail: "/assets/img/thumbnails/mindmate-thumbnail.png",
      description:
        "MindMate is a web application that provides mental health solutions using artificial intelligence powered by OpenAI. It is designed to help individuals struggling with mental health issues to improve their well-being and overall quality of life. The app provides personalized and confidential support to users by analyzing their symptoms, emotions, and behavior. MindMate uses advanced algorithms to identify patterns in user data and provide them with tailored recommendations for managing their mental health.",
      techStack: ["Next.js", "React", "Node.js"],
      srcURL: "https://mind-mate.vercel.app/",
    },
    {
      title: "GitTrack",
      subTitle: "Gain insights and strengthen your GitHub connections",
      thumbnail: "/assets/img/thumbnails/gittrack-thumbnail.png",
      description:
        "GitTrack - an innovative web application designed to empower GitHub users with powerful network analysis tools. With GitTrack, you can effortlessly track and analyze your followers, identifying those who are not reciprocating the follow. Take control of your GitHub presence, strengthen your connections, and optimize your network. Gain valuable insights and make informed decisions to build a strong and engaged community.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
      srcURL: "https://gittrack.vercel.app/",
    },
    {
      title: "My Battery",
      subTitle:
        "Simple website that display the battery status of your device and the charging status.",
      thumbnail: "/assets/img/thumbnails/my-battery-thumbnail.png",
      description:
        "My Battery is a simple and minimalistic web application that displays your battery percentage, charging status, and whether the battery is low or full. It's important to note that this is a website-based application.",
      techStack: ["JavaScript", "HTML", "Tailwind CSS", "CSS"],
      srcURL: "https://mybattery.vercel.app/",
    },
    {
      title: "SysInfo",
      subTitle: "Web based terminal emulator",
      thumbnail: "/assets/img/thumbnails/sys-info-thumbnail.png",
      description:
        "SysInfo is a web based terminal emulator which you can run basic commands like help, clear, battery, weather and etc.",
      techStack: ["JavaScript", "HTML", "CSS", "Tailwind CSS"],
      srcURL: "https://sys-info.vercel.app/",
    },
    {
      title: "Project Title",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima nobis quia et.",
      thumbnail: "/assets/img/projects-default.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi placeat magnam eveniet accusamus tenetur maxime aspernatur deleniti rerum praesentium ducimus minima facilis consectetur expedita, mollitia molestias qui dolorem quam laudantium. Repellendus sunt harum fugiat natus. dolor sit amet consectetur, adipisicing elit. Minima nobis quia et.",
      techStack: ["Stack"],
      srcURL: "",
    },
    {
      title: "Project Title",
      subTitle:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima nobis quia et.",
      thumbnail: "/assets/img/projects-default.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi placeat magnam eveniet accusamus tenetur maxime aspernatur deleniti rerum praesentium ducimus minima facilis consectetur expedita, mollitia molestias qui dolorem quam laudantium. Repellendus sunt harum fugiat natus. dolor sit amet consectetur, adipisicing elit. Minima nobis quia et.",
      techStack: ["Stack"],
      srcURL: "",
    },
    // Add more objects for additional projectData here
  ];

  useEffect(() => {
    let interval;
    if (!paused) {
      interval = setInterval(() => {
        setFocused((prevFocused) => (prevFocused + 1) % projectData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [paused, projectData.length]);

  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  const handlePreviousClick = () => {
    setFocused((prevFocused) => (prevFocused - 1 + projectData.length) % projectData.length);
  };

  const handleNextClick = () => {
    setFocused((prevFocused) => (prevFocused + 1) % projectData.length);
  };

  const getFocusedIndex = () => {
    return (focused + projectData.length) % projectData.length;
  };

  useEffect(() => {
    const rotationAmt = 360 / projectData.length;
    const radius = 400 / (2 * Math.sin(Math.PI / projectData.length));
    const distToEdge = Math.round(Math.sqrt(radius ** 2 - 200 ** 2) + 30);
    projectsRef.current.style.setProperty('--distance', distToEdge + 'px');

    gsap.to(projectsRef.current, {
      rotationY: -focused * rotationAmt,
      duration: 1,
    });

    const projects = projectsRef.current.children;
    const navDots = navigationRef.current.children;

    for (let i = 0; i < projects.length; i++) {
      if (getFocusedIndex() === i) {
        projects[i].classList.add('focused');
        navDots[i].classList.add('focused');
      } else {
        projects[i].classList.remove('focused');
        navDots[i].classList.remove('focused');
      }
    }
  }, [focused, projectData.length]);

  return (
    <LazyMotion features={domAnimation}>
    <section id="projects">
     
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <h6 className="section-title">Projects</h6>
        <div className="projects-section">
          <div className="project-data-wrapper">
            <div className="project-data" ref={projectsRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              {projectData.map((project, index) => (
                <ProjectCard
                  key={index}
                  thumbnail={project.thumbnail}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  srcURL={project.srcURL}
                  rotation={index * (360 / projectData.length)}
                />
              ))}
            </div>
            <div className="navigation" ref={navigationRef}>
              {projectData.map((_, index) => (
                <div
                  key={index}
                  className={`nav-dot ${index === getFocusedIndex() ? 'focused' : ''}`}
                  onClick={() => setFocused(index)}
                />
              ))}
            </div>
            <div className="arrow-left font-bold text-md hover:border-1 hover:opacity-80 hover:text-lg select-none" onClick={handlePreviousClick}>
              <i className="fa fa-chevron-left"/>{'<'}
            </div>
            <div className="arrow-right font-bold hover:border-1 hover:opacity-80 hover:bg-[#F00] font-bold select-none" onClick={handleNextClick}>
              <i className="fa fa-chevron-right" />{'>'}
            </div>
          </div>
        </div>
      </div>
    </section>
    </LazyMotion>
  );
};

