"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView, motion } from "framer-motion";
import { WelcomeAnimation } from "./IntroAnimation";
import { useScrollTo } from "hooks";
import { useMediaQuery } from "utils";

export function WelcomeSection() {
	const ref = useRef(null);
	const introRef = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { scrollToEl } = useScrollTo();
	const isTabletUp = useMediaQuery("min-width: 768px");

	let [count, setCount] = useState(0);
	const [text] = useState([
		"build Flutter apps for Android/iOS",
		"convert design into modern UI",
		"build interactive UI using React",
		"develop websites using Next.js"
	]);

	const hoverVariants = {
		initial: {
		  color: 'gray',
		  display: 'inline-block',
		  scale: 1,
		},
		hover: {
		  color: '#3182ce',
		  scale: [1, 1.25, 0.75, 1.15, 1],
		  transition: {
			duration: 1,
			ease: [0.455, 0.03, 0.515, 0.955], // Easing function for rubber band effect
		  },
		},
	  };

	const onClick = (e) => scrollToEl(e);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1);

			if (count === 3) {
				setCount(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [count]);

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section" ref={introRef}>
				<div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
					<div className="py-5 md:py-10">
						<h1
							tabIndex="0"
							ref={ref}
							className="text-3xl md:text-5xl xl:text-6xl font-bold"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<p>
								Hi, I&apos;m <mark>Michael</mark> a <mark>passionate</mark> software developer.
							</p>
						</h1>

						<div className="mt-3 relative flex flex-col overflow-hidden">
							<p
								ref={ref}
								className="text-[17px] md:text-2xl transform-none opacity-100"
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								}}
							>
								I
								<span
									className="absolute flex flex-col transition-all duration-500 ease-in-expo"
									style={{
										top:
											count === 0
												? "0"
												: count === 1
												? "-100%"
												: count === 2
												? "-200%"
												: count === 3
												? "-300%"
												: "0",
										left: "13px"
									}}
								>
									{text.map((element) => (
										<TextElement key={element} element={element} />
									))}
								</span>
							</p>
						</div>
{/* 
						<p
							tabIndex="0"
							ref={ref}
							className="mt-3 mb-10 text-gray-500 text-xl"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							Stick around to see some of my work.
						</p> */}

						<p 
							ref={ref}
							className="mt-3 mb-10 text-xl"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							Welcome to my portfolio!
							<motion.span
								className="font-bold cursor-pointer mx-1"
								variants={hoverVariants}
								initial="initial"
								whileHover="hover"
							>
								Michael Hernandez
							</motion.span> is an
							<motion.span
								className="font-bold cursor-pointer mx-1"
								variants={hoverVariants}
								initial="initial"
								whileHover="hover"
							>
								Experienced</motion.span>
							<motion.span
								className="font-bold cursor-pointer mx-1"
								variants={hoverVariants}
								initial="initial"
								whileHover="hover"
							>
								Full Stack Developer</motion.span> a passion for
							creating
							<motion.span
								className="font-bold cursor-pointer mx-1"
								variants={hoverVariants}
								initial="initial"
								whileHover="hover"
							>
								visually stunning
							</motion.span> 
							and
							<motion.span
								className="font-bold cursor-pointer mx-1"
								variants={hoverVariants}
								initial="initial"
								whileHover="hover"
							>
								intuitive</motion.span> web experiences. With a
							<motion.span
								className="font-bold cursor-pointer mx-1"
								variants={hoverVariants}
								initial="initial"
								whileHover="hover"
							>
								unique</motion.span> blend of technical skills and
							creative flair, there's
							<motion.span
								className="font-bold cursor-pointer mx-1"
								variants={hoverVariants}
								initial="initial"
								whileHover="hover"
							>
								confidence</motion.span> in
							the ability to deliver
							<motion.span
								className="font-bold cursor-pointer mx-1"
								variants={hoverVariants}
								initial="initial"
								whileHover="hover"
							>
								custom solutions</motion.span> to various project
							requirements.
						</p>


						<div 
							className="intro-btns w-full"
							ref={ref}
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<a className="button btn btn-cv-download noselect w-64 m-2" href="#"><i className="fa-solid fa-cloud-arrow-down fa-lg" aria-hidden="true"></i>Resume</a>
							<a className="button btn btn-contact contact-btn hb-fill-right-bg m-2 w-64 noselect" onClick="toContact()"><i className="fa-regular fa-envelope fa-lg" aria-hidden="true"></i>
							<span>Contact Me</span></a>
						</div>

						{/* <div
							ref={ref}
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<Link
								href="#projects"
								onClick={onClick}
								tabIndex="0"
								className="btn"
								aria-label="Latest projects"
							>
								See my latest projects
							</Link>
						</div> */}
					</div>

					{isTabletUp && <WelcomeAnimation />}
				</div>
			</section>
		</LazyMotion>
	);
}

function TextElement({ element }) {
	const firstWord = <b>{element.split(" ").at(0)}</b>;
	const restWords = element.split(" ").slice(1).join(" ");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<span
			tabIndex="0"
			ref={ref}
			className="text-[17px] md:text-2xl"
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
		>
			{firstWord} {restWords}
		</span>
	);
}
