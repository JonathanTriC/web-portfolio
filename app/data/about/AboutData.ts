import {
	faLightbulb,
	faRocket,
	faStar,
} from "@fortawesome/free-solid-svg-icons";

const StoryData = [
	{
		index: 0,
		icon: faLightbulb,
		title: "The Beginning",
		description:
			"It all started during the pandemic — a time of uncertainty that sparked a new direction for me. With just a laptop and endless curiosity, I began teaching myself to code through online courses and countless YouTube tutorials. That’s where I discovered my love for building digital experiences that solve real problems.",
	},
	{
		index: 1,
		icon: faRocket,
		title: "The Growth",
		description:
			"What started as late-night experiments soon turned into a full-blown obsession. I dedicated myself to mastering mobile development — writing, failing, debugging, and learning every single day. In 2022, that dedication paid off when I landed my first professional role as a mobile developer.",
	},
	{
		index: 2,
		icon: faStar,
		title: "Today",
		description:
			"Now, I continue to grow by exploring new technologies, collaborating with passionate teams, and mentoring others along the way. I’m always seeking my next adventure — a challenging environment where creativity, innovation, and problem-solving come together to create something truly meaningful.",
	},
];

const ExperienceData = [
	{
		index: 0,
		title: "Mobile Application Developer",
		company: "PT Indo Teknologi Cemerlang (bookingtogo)",
		duration: "2024 - Present",
		desc:
			"Rebuilt the existing mobile application from React Native JavaScript to React Native TypeScript from scratch. Continuously enhance app performance, fix issues, and implement new features and tools to support business growth.",
		tools: ["React Native", "Javascript", "Typescript"],
	},
	{
		index: 1,
		title: "SPV Mobile Developer",
		company: "PT Extramarks Education Indonesia (Kelas Pintar)",
		duration: "2023 - 2024",
		desc:
			"Lead a team of mobile developers, overseeing code reviews and project management. Revamped the legacy application to React Native with TypeScript, improving performance, maintainability, and overall user experience.",
		tools: ["React Native", "Typescript"],
	},
	{
		index: 2,
		title: "Mobile Developer",
		company: "PT Extramarks Education Indonesia (Kelas Pintar)",
		duration: "2022 - 2023",
		desc:
			"Developed and maintained hybrid applications using Flutter and native Swift (iOS). Responsible for fixing issues, building new features, and maintaining legacy code to ensure app performance and stability.",
		tools: ["Flutter", "Swift"],
	},
];

const EducationData = [
	{
		index: 0,
		title: "System Information",
		school: "Bina Nusantara Online Learning University",
		duration: "2022-2026",
	},
	{
		index: 1,
		title: "Computer and Network Engineering",
		school: "SMKN 53 Jakarta",
		duration: "2018 - 2021",
	},
];

const CertificationData = [
	{
		index: 0,
		title: "Real Time Chat App (Swift 5 + Firebase)",
		school: "iOS Academy",
		duration: "Issued: Apr 2023",
	},
	{
		index: 1,
		title: "iOS & Swift - The Complete iOS App Development Bootcamp",
		school: "Udemy",
		duration: "Issued: Apr 2023",
	},
	{
		index: 2,
		title: "Mastering Flutter 2.0",
		school: "BuildWith Angga",
		duration: "Issued: Jan 2022",
	},
	{
		index: 3,
		title: "Mastering Flutter and Dart",
		school: "BuildWith Angga",
		duration: "Issued: Nov 2021",
	},
];

export { StoryData, ExperienceData, EducationData, CertificationData };
