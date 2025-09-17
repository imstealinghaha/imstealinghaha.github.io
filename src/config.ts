export const siteConfig = {
	name: "Hayden Gilbert",
	title: "Aspiring Software Engineer",
	description:
		"Portfolio website of Hayden Gilbert, Computer Engineering Technology student at Indiana State University, passionate about software development, AI, and interactive technologies.",
	accentColor: "#1d4ed8",
	social: {
		email: "haydencg2005@gmail.com",
		linkedin: "https://linkedin.com/in/haydengilbert1",
	},
	aboutMe:
		"I'm a Computer Engineering Technology student at Indiana State University with a strong interest in software development, AI, and creative technology. I enjoy building interactive applications, experimenting with game development in Godot, and exploring areas like AI, web development, and graphics programming. My projects range from full-stack web apps to particle systems and custom game mechanics, and I’m always looking for ways to apply my skills to solve real-world problems while learning new technologies.",
	skills: [
		"JavaScript",
		"React",
		"Node.js",
		"Python",
		"AWS",
		"Docker",
		"Godot",
		"C++",
		"p5.js",
		"Git",
	],
	projects: [
		{
			name: "AI Dev Roundup Newsletter",
			description:
				"One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples.",
			link: "https://aidevroundup.com/?ref=devportfolio",
			skills: ["React", "Node.js", "AWS"],
		},
		{
			name: "Chrome Extension Mastery",
			description:
				"Full-stack Chrome Extension development course teaching how to build production-ready extensions with React and Node.js.",
			link: "https://fullstackextensions.com/?ref=devportfolio",
			skills: ["React", "Node.js", "AWS"],
		},
		{
			name: "ExtensionKit",
			description:
				"Starter kit for Chrome extension projects with templates and examples to accelerate development.",
			link: "https://extensionkit.io/?ref=devportfolio",
			skills: ["React", "Node.js", "AWS"],
		},
		{
			name: "ASCII Vision",
			description:
				"A custom p5.js project that transforms uploaded images into dynamic ASCII art with customizable styles and effects. Users can adjust parameters like character sets, brightness mapping, resolution, and color modes to generate unique text-based artwork. The program also supports live previews and artistic filters, blending technical precision with creative expression",
			link: "https://editor.p5js.org/haycode/full/iNOqcSCzL", // placeholder until hosted
			skills: ["JavaScript", "p5.js", "Creative Coding"],
		},
		{
			name: "Godot 2D Game",
			description:
				"A top-down 2D game built in Godot featuring custom player controls, bullet mechanics, and enemy collision handling.",
			link: "#", // placeholder until hosted
			skills: ["Godot", "GDScript", "Game Design"],
		},
	],
	experience: [
		{
			company: "Independent Projects",
			title: "Software & Game Developer",
			dateRange: "2022 - Present",
			bullets: [
				"Developed interactive projects in Godot including player mechanics, shooting systems, and collision handling.",
				"Built creative coding projects with p5.js including particle systems and dynamic UI features.",
				"Explored AI applications, automation tools, and web app development as personal learning initiatives.",
			],
		},
		{
			company: "Freelance / Academic",
			title: "Student Developer",
			dateRange: "2020 - 2022",
			bullets: [
				"Created portfolio projects demonstrating proficiency in React, Node.js, and full-stack concepts.",
				"Practiced version control and collaborative coding through Git/GitHub workflows.",
				"Completed coursework and independent learning in full-stack web development.",
			],
		},
	],
	education: [
		{
			school: "Indiana State University",
			degree: "Bachelor of Science in Computer Engineering Technology",
			dateRange: "2024 - 2028",
			achievements: ["Dean's List all semesters"],
		},
		{
			school: "Self-Directed Learning",
			degree: "Projects & Online Courses",
			dateRange: "2019 - Present",
			achievements: [
				"Built 10+ personal and academic projects across web, game, and creative coding domains.",
				"Studied and applied modern frameworks like React, Node.js, and Godot.",
				"Explored AI, creative coding, and interactive design through independent learning.",
			],
		},
	],
};
