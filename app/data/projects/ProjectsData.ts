import {
	faAndroid,
	faApple,
	faAppStoreIos,
	faGithub,
	faGolang,
	faGooglePlay,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBookmark,
	faBuilding,
	faCircleInfo,
	faCode,
	faCompass,
	faHotel,
	faLayerGroup,
	faPlane,
	faPlaneUp,
	faPlayCircle,
	faSchool,
	faSearch,
	faStar,
	faTrain,
	faUserGear,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
	{
		title: "bookingtogo",
		description: `A comprehensive React Native mobile application in the online travel industry, designed for booking flights, hotels, trains, tours, and even private jets.<br/>
		Primarily built for B2B operations, it includes exclusive features such as balance management, travel documents, sub-company accounts, and more.<br />
		bookingtogo empowers businesses to streamline their corporate travel needs through a single, efficient platform.`,
		src: "/images/btg.jpeg",
		url: "/projects/btg",
	},
	{
		title: "Kelas Pintar",
		description: `An education technology (EdTech) app developed with React Native, focusing on an advanced Learning Management System (LMS) that supports schools across all levels — from elementary to high school.<br/>
		As a B2B-focused product, Kelas Pintar collaborates with schools nationwide to enhance digital learning experiences.<br/>
		It also offers B2C features like GURU (teacher assistance), TANYA (question & answer), SOAL (practice tests), and PTN (university preparation), providing a holistic ecosystem for students and educators alike.`,
		src: "/images/kp.jpeg",
		url: "/projects/kp",
	},
	{
		title: "Scenebinge",
		description: `A movie discovery app built with React Native, powered by TMDB API and Firebase.<br/>
		Scenebinge allows users to explore movie recommendations, search for titles, view detailed information, and watch official trailers — all in one seamless, user-friendly interface.<br/>
		It’s a fun, visually engaging way for movie lovers to stay inspired and discover their next favorite film.`,
		src: "/images/scenebinge.jpeg",
		url: "/projects/scenebinge",
	},
	{
		title: "Nomie",
		description: `A food discovery and recipe app developed with React Native, Go (Golang) for the backend, and PostgreSQL for data management.<br />
		Integrated with TheMealDB API, Nomie helps users find meal ideas from around the world, filter recipes by ingredients or cuisines, and access detailed cooking instructions complete with video tutorials.<br/>
		It’s designed to make global culinary exploration simple, educational, and deliciously inspiring.`,
		src: "/images/nomie.jpeg",
		url: "/projects/nomie",
	},
];

const slugProjects = [
	{
		title: "bookingtogo",
		slug: "btg",
		description: `A comprehensive React Native mobile application in the online travel industry, designed for booking flights, hotels, trains, tours, and even private jets.<br/>
		Primarily built for B2B operations, it includes exclusive features such as balance management, travel documents, sub-company accounts, and more.<br />
		bookingtogo empowers businesses to streamline their corporate travel needs through a single, efficient platform.`,
		homeImage: "/images/home-btg.png",
		links: [
			{
				index: 0,
				show: false,
				type: "git",
				icon: faGithub,
				text: "View on Github",
				url: "",
			},
			{
				index: 1,
				show: true,
				type: "store",
				icon: faGooglePlay,
				text: "Google Play Store",
				url: "https://play.google.com/store/apps/details?id=com.bookingtogo&hl=en",
			},
			{
				index: 2,
				show: true,
				type: "store",
				icon: faAppStoreIos,
				text: "Apple App Store",
				url: "https://apps.apple.com/us/app/bookingtogo-tiket-hotel/id1516761656",
			},
		],
		listStack: [
			{
				index: 0,
				type: "fontawesome",
				icon: faAndroid,
				name: "Android",
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faApple,
				name: "iOS",
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faReact,
				name: "React Native",
			},
			{
				index: 3,
				type: "image",
				icon: "/images/typescript.svg",
				name: "Typescript",
			},
			{
				index: 4,
				type: "image",
				icon: "/images/redux.svg",
				name: "Redux",
			},
			{
				index: 5,
				type: "fontawesome",
				icon: faCode,
				name: "Axios",
			},
		],
		keyFeatures: [
			{
				index: 0,
				type: "fontawesome",
				icon: faPlane,
				name: "Flight Booking",
				description: `Book domestic and international flight tickets seamlessly from multiple airlines.<br/>
				The system supports real-time seat availability, dynamic pricing, and instant e-ticket generation for a smooth and reliable booking experience.`,
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faHotel,
				name: "Hotel Booking",
				description: `Search and book hotel rooms across various destinations with detailed hotel information, including photos, address, available facilities, and room listings.<br/>
					Designed to make accommodation booking quick, transparent, and convenient for travelers.`,
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faTrain,
				name: "Train Booking",
				description: `Integrated with Kereta Api Indonesia (KAI), this feature allows users to book Indonesian train tickets easily, check train schedules, and receive digital tickets instantly within the app.`,
			},
			{
				index: 3,
				type: "fontawesome",
				icon: faCompass,
				name: "Tour Packages",
				description: `Discover a variety of tour packages that cover both local and international destinations.<br/>
					Users can view package details, itineraries, and pricing, making it easy to plan group or family vacations with confidence.`,
			},
			{
				index: 4,
				type: "fontawesome",
				icon: faPlaneUp,
				name: "Private Jet Booking",
				description: `This feature allows users to book private jet flights for both personal and corporate travel needs.<br/>
					It offers fixed routes, flexible scheduling, and direct coordination to ensure a seamless and premium travel experience.`,
			},
			{
				index: 5,
				type: "fontawesome",
				icon: faBuilding,
				name: "Corporate Features",
				description: `Built for B2B clients, this module helps companies manage their travel operations efficiently. It includes balance management, travel document uploads, and multi-role access control for departments like Master, Booking, and Finance. A PIN verification system ensures secure balance-based payments, making corporate travel management simple, organized, and secure.`,
			},
		],
		projectVision: [
			"bookingtogo began as a platform primarily tailored for B2B clients—companies that needed a reliable system to manage their corporate travel needs. Over time, however, the company’s vision grew. Management wanted the product to evolve, not only to serve business partners but also to reach a broader audience with a fresher, more modern, and more user-friendly experience.",
			"This shift in direction sparked the decision to revamp the entire application. Rather than simply refining the old structure, we chose to rebuild it from the ground up. The previous version relied on React Native with JavaScript and class components, which had served its purpose for years. But to support future scalability, better performance, and cleaner architecture, the new version embraced React Native with TypeScript and functional components—bringing the project in line with modern development standards.",
			"From planning and UI restructuring to implementing new business logic and integrating all travel services, the revamp became a full end-to-end journey. I developed the project starting from a blank codebase all the way through release and continuous maintenance. Throughout the process, the goal remained clear: create a more intuitive, efficient, and forward-thinking application that supports the company’s growth and delivers a better experience for every user.",
		],
		challenge: [
			{
				index: 0,
				name: "Unstructured Codebase & No Strict Typing",
				description:
					"The previous version of the app was built using plain JavaScript, which lacked strict typing and made the overall codebase less predictable. Without enforced type definitions, data handling became error-prone, debugging took longer, and maintaining consistency across features was increasingly difficult as the project grew.",
			},
			{
				index: 1,
				name: "Large, Monolithic Files with Mixed Logic, UI, and Styles",
				description:
					"Before the revamp, many screens were structured as giant monolithic files that combined business logic, UI components, and styles in one place—often resulting in thousands of lines of code. This made the code difficult to read, hard to maintain, and slow to expand with new features.",
			},
			{
				index: 2,
				name: "Inconsistent UI/UX Across Screens",
				description:
					"The old version of the application lacked a unified design system, resulting in inconsistent spacing, styling, and component behavior across different pages. This inconsistency affected visual quality and slowed down development because components couldn’t be reused effectively.",
			},
			{
				index: 3,
				name: "Performance Issues on Complex Screens",
				description:
					"Pages with large datasets—such as flight results or hotel listings—suffered from sluggish rendering and unnecessary re-renders due to inefficient component structures. On lower-end devices, these issues became even more noticeable and significantly impacted user experience.",
			},
		],
		solution: [
			{
				index: 0,
				name: "Implementing TypeScript for Strong Typing",
				description:
					"In the revamp, I migrated the entire project to TypeScript to enforce strong and consistent type definitions across the codebase. This ensured safer data handling, reduced runtime errors, improved developer productivity, and made the code far more maintainable in the long term.",
			},
			{
				index: 1,
				name: "Clear Separation of Concerns with a Modular Architecture",
				description:
					"During the revamp, I introduced a cleaner architectural structure by separating logic, presentation, and styling. For example, logic was moved into dedicated hooks like useHomeScreen.ts, UI components remained in HomeScreen.tsx, and styles were isolated in styles.ts. This resulted in cleaner, more readable code that is significantly easier to manage and scale.",
			},
			{
				index: 2,
				name: "Establishing a Unified Design System & Reusable Components",
				description:
					"I introduced reusable UI components and consistent styling patterns built on top of a shared design system. This improved visual consistency, reduced duplicated code, and accelerated development since the same components could be used across multiple features.",
			},
			{
				index: 3,
				name: "Performance Optimization and Efficient Rendering",
				description:
					"To improve performance, I optimized component rendering, implemented memoization where needed, and refined list virtualization for heavy data-driven screens. These enhancements resulted in smoother scrolling, faster loading, and a more responsive experience across a wide range of devices.",
			},
		],
		keyLearning: [
			{
				index: 0,
				type: "fontawesome",
				icon: faCode,
				name: "The Value of Strong Typing & Code Predictability",
				description: [
					"Migrating from JavaScript to TypeScript significantly improved code reliability.",
					"Strong typing helped prevent unexpected data issues that previously caused hidden runtime bugs.",
					"With clearer type definitions, development became faster and debugging became easier.",
					"I learned that investing early in type safety creates long-term stability for large-scale apps.",
				],
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faLayerGroup,
				name: "The Importance of a Well-Structured Architecture",
				description: [
					"Revamping the project from scratch highlighted how crucial a clean and modular architecture is.",
					"By restructuring screens, components, and hooks, the app became far easier to maintain and scale.",
					"Clear separation of concerns reduced code duplication and simplified onboarding for future developers.",
				],
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faStar,
				name: "Building a Smooth and Consistent User Experience",
				description: [
					"I learned how UI/UX consistency significantly impacts user satisfaction in a consumer-focused app.",
					"Implementing reusable components and standardized design tokens ensured visual consistency across screens.",
					"The revamp process helped me understand how small UI details contribute to overall user trust and comfort.",
				],
			},
			{
				index: 3,
				type: "image",
				icon: "/images/redux.svg",
				name: "Managing Complex State Effectively",
				description: [
					"Handling features like flight search, hotel booking, and multi-step forms taught me the value of robust state management.",
					"I learned how Redux patterns, middleware, and proper slicing help maintain predictable data flow.",
					"This experience reinforced the importance of scalable state handling in applications with evolving business logic.",
				],
			},
		],
		projectShowcase: "/images/btg.jpeg",
		futureImprovements: [
			{
				index: 0,
				type: "fontawesome",
				icon: faCode,
				name: "Over-the-Air Updates with CodePush",
				description:
					"Implementing CodePush allows shipping UI updates, hotfixes, and small improvements instantly—without requiring users to download a full app update. This will speed up release cycles and make iteration significantly faster.",
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faCode,
				name: "Performance Optimization & Bundle Size Reduction",
				description:
					"Optimizing the JavaScript bundle, cleaning unused dependencies, and enabling Hermes can improve startup speed and runtime performance, especially on low-end devices frequently used in the target market.",
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faCode,
				name: "Advanced Error Monitoring & Crash Analytics",
				description:
					"Integrating deeper monitoring tools such as Sentry or Crashlytics will provide better visibility into crashes and unexpected behaviors, enabling faster debugging and more stable production releases.",
			},
			{
				index: 3,
				type: "fontawesome",
				icon: faCode,
				name: "Automated Testing & CI/CD Pipeline Enhancement",
				description:
					"Expanding the CI/CD pipeline with automated testing, lint checks, and build verification ensures safer deployments. Implementing tools like Detox or Jest helps maintain code quality and prevents regressions as the app scales.",
			},
		],
	},
	{
		title: "Kelas Pintar",
		slug: "kp",
		description: `An education technology (EdTech) app developed with React Native, focusing on an advanced Learning Management System (LMS) that supports schools across all levels — from elementary to high school.<br/>
		As a B2B-focused product, Kelas Pintar collaborates with schools nationwide to enhance digital learning experiences.<br/>
		It also offers B2C features like GURU (teacher assistance), TANYA (question & answer), SOAL (practice tests), and PTN (university preparation), providing a holistic ecosystem for students and educators alike.`,
		homeImage: "/images/home-kp.png",
		links: [
			{
				index: 0,
				show: false,
				type: "git",
				icon: faGithub,
				text: "View on Github",
				url: "",
			},
			{
				index: 1,
				show: true,
				type: "store",
				icon: faGooglePlay,
				text: "Google Play Store",
				url: "https://play.google.com/store/apps/details?id=id.extramarks.learningapp&hl=id",
			},
			{
				index: 2,
				show: true,
				type: "store",
				icon: faAppStoreIos,
				text: "Apple App Store",
				url: "https://apps.apple.com/id/app/kelas-pintar-aplikasi-belajar/id1469195409",
			},
		],
		listStack: [
			{
				index: 0,
				type: "fontawesome",
				icon: faAndroid,
				name: "Android",
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faApple,
				name: "iOS",
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faReact,
				name: "React Native",
			},
			{
				index: 3,
				type: "image",
				icon: "/images/typescript.svg",
				name: "Typescript",
			},
			{
				index: 4,
				type: "image",
				icon: "/images/redux.svg",
				name: "Redux",
			},
			{
				index: 5,
				type: "fontawesome",
				icon: faCode,
				name: "Axios",
			},
		],
		keyFeatures: [
			{
				index: 0,
				type: "fontawesome",
				icon: faSchool,
				name: "Learning Management System",
				description:
					"A complete digital learning ecosystem designed for elementary, middle, and high school students. The LMS includes interactive learning modules, practice questions, quizzes, exams, attendance tracking, and automated report card generation. All features are optimized to support daily teaching and learning activities in a structured and measurable way.",
			},
			{
				index: 1,
				type: "image",
				icon: "/images/soal-logo.svg",
				name: "SOAL",
				description:
					"A self-paced practice feature offering thousands of curated questions across various subjects and grade levels. Students can strengthen their understanding through structured exercises that follow the national curriculum and adapt to their learning progress.",
			},
			{
				index: 2,
				type: "image",
				icon: "/images/tanya-logo.svg",
				name: "TANYA",
				description:
					"A flexible question-and-answer feature that allows students to upload photos of problems they don't understand. Questions are answered by real certified tutors, providing personalized explanations and helping students overcome learning obstacles quickly.",
			},
			{
				index: 3,
				type: "image",
				icon: "/images/guru-logo.svg",
				name: "GURU",
				description:
					"A live teaching platform where students can join real-time online classes guided by professional tutors. This feature supports visual explanations, interactive sessions, and live Q&A, enabling students to learn more effectively with direct guidance.",
			},
			{
				index: 4,
				type: "image",
				icon: "/images/ptn-logo.svg",
				name: "PTN",
				description:
					"A comprehensive preparation program for students aiming to enter Indonesian public universities. It includes talent and interest assessments, extensive question banks, live teaching sessions, and national-level tryouts—helping students prepare confidently and strategically for admission tests.",
			},
			{
				index: 4,
				type: "fontawesome",
				icon: faUserGear,
				name: "Multi-Role Access",
				description:
					"Kelas Pintar supports multiple user roles—students, teachers, principals, and parents—each with tailored features. Students can study and complete assignments, teachers manage classes and assessments, principals monitor school-wide performance, and parents track their child’s progress. This role-based system ensures every user gets the tools they need in a clear and focused experience.",
			},
		],
		projectVision: [
			"Kelas Pintar is an education technology platform designed to enhance learning for students across Indonesia. What began as a multi-stack system—built separately with Swift Storyboard for iOS, Java for Android, and Flutter for specific modules—eventually became difficult to maintain. Each feature update required changes across multiple codebases, slowing development and leading to inconsistent user experiences.",
			"As the product continued to grow, so did the need for a more unified and scalable foundation. This led to the decision to fully revamp the application. Instead of patching the old architecture, we rebuilt it from scratch using React Native and TypeScript, aligning the platform with modern development standards while enabling faster iteration and cleaner, more structured code.",
			"The revamp consolidated all LMS and B2C features—ranging from learning modules, practice questions, quizzes, exams, and attendance to tutoring services like SOAL, TANYA, GURU, and PTN—into a single cohesive application. I contributed end-to-end throughout the rebuild: designing the architecture, implementing the core features, integrating services, optimizing performance, and supporting the release process.",
			"The result is a refreshed, scalable, and maintainable application that delivers a smoother and more consistent learning experience for students, teachers, and general users across the country.",
		],
		challenge: [
			{
				index: 0,
				name: "Fragmented Multi-Stack Codebase",
				description:
					"The old version used Swift, Java, and Flutter. Each update required changes in three separate codebases, causing inconsistent features, slower releases, and high maintenance overhead.",
			},
			{
				index: 1,
				name: "Outdated and Inconsistent UI/UX",
				description:
					"Different technologies resulted in inconsistent UI components and behaviors across iOS, Android, and Flutter. The visual design also felt outdated compared to modern EdTech apps.",
			},
			{
				index: 2,
				name: "Complex LMS Features That Were Hard to Scale",
				description:
					"Features like exams, attendance, question banks, and report cards required complex data flows. The previous architecture scattered logic across multiple native files, making scaling extremely difficult.",
			},
		],
		solution: [
			{
				index: 0,
				name: "Unified React Native + TypeScript Codebase",
				description:
					"Using React Native allowed us to consolidate everything into a single codebase for both platforms. This drastically improved development speed, consistency, and long-term maintainability.",
			},
			{
				index: 1,
				name: "Modernized UI with a Centralized Design System",
				description:
					"We redesigned the entire interface with modern components, consistent interactions, better animations, and a unified design system to ensure a smooth cross-platform experience.",
			},
			{
				index: 2,
				name: "Clean Architecture with Modular Feature Separation",
				description:
					"We implemented a clear structure separating logic, UI components, hooks, and styles. This improved readability, testability, and scaling for complex LMS features like exams and report generation.",
			},
		],
		keyLearning: [
			{
				index: 0,
				type: "fontawesome",
				icon: faCode,
				name: "Consolidating Multi-Tech Projects Dramatically Boosts Efficiency",
				description:
					"Migrating from three different technologies into a single cross-platform codebase showed how much faster and cleaner development can be. Collaboration improved, bugs decreased, and releases became smoother.",
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faCode,
				name: "Strong Typing Is Essential for Large-Scale Education Apps",
				description:
					"With complex LMS features and large datasets—exam answers, attendance logs, student progress, report cards—TypeScript provided reliability and prevented runtime errors that previously occurred due to loose data handling.",
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faCode,
				name: "EdTech Requires Intuitive and Accessible UX",
				description:
					"Designing for students of various ages and school levels taught me how important it is to create layouts that are simple, readable, and usable even on lower-end devices commonly used in Indonesia.",
			},
			{
				index: 3,
				type: "fontawesome",
				icon: faCode,
				name: "Proper Architecture Enables Feature Scalability",
				description:
					"Modular architecture made it possible to scale heavy features like exams, interactive learning content, and live classes without the codebase becoming chaotic.",
			},
		],
		projectShowcase: "/images/kp.jpeg",
		futureImprovements: [],
	},
	{
		title: "Scenebinge",
		slug: "scenebinge",
		description: `A movie discovery app built with React Native, powered by TMDB API and Firebase.<br/>
		Scenebinge allows users to explore movie recommendations, search for titles, view detailed information, and watch official trailers — all in one seamless, user-friendly interface.<br/>
		It’s a fun, visually engaging way for movie lovers to stay inspired and discover their next favorite film.`,
		src: "/images/scenebinge.jpeg",
		url: "/projects/scenebinge",
		homeImage: "/images/home-scenebinge.png",
		links: [
			{
				index: 0,
				show: true,
				type: "git",
				icon: faGithub,
				text: "View on Github",
				url: "https://github.com/JonathanTriC/scenebinge",
			},
			{
				index: 1,
				show: false,
				type: "store",
				icon: faGooglePlay,
				text: "Google Play Store",
				url: "",
			},
			{
				index: 2,
				show: false,
				type: "store",
				icon: faAppStoreIos,
				text: "Apple App Store",
				url: "",
			},
		],
		listStack: [
			{
				index: 0,
				type: "fontawesome",
				icon: faAndroid,
				name: "Android",
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faApple,
				name: "iOS",
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faReact,
				name: "React Native",
			},
			{
				index: 3,
				type: "image",
				icon: "/images/typescript.svg",
				name: "Typescript",
			},
			{
				index: 4,
				type: "fontawesome",
				icon: faCode,
				name: "TMDB API",
			},
			{
				index: 5,
				type: "fontawesome",
				icon: faCode,
				name: `Tanstack<br/>React Query`,
			},
		],
		keyFeatures: [
			{
				index: 0,
				type: "fontawesome",
				icon: faSearch,
				name: "Explore & Search Movies",
				description:
					"Discover a world of entertainment with powerful search and exploration tools. Scenebinge helps you find movies effortlessly—whether by title, genre, rating, or trending lists. Designed for speed and accuracy, the discovery system ensures you always find something worth watching.",
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faCircleInfo,
				name: "Movie Detail Insights",
				description:
					"Access rich, comprehensive movie information in one place. From synopses and cast lists to ratings, reviews, and release details—Scenebinge gives you deep insights to help you decide what to watch next. Every detail is presented beautifully for a premium browsing experience.",
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faPlayCircle,
				name: "Watch Videos & Trailers",
				description:
					"Experience high-quality trailers and video previews directly within the app. Whether you're evaluating a new release or revisiting a classic, Scenebinge’s video player delivers smooth playback and an immersive preview experience that brings every story to life.",
			},
			{
				index: 3,
				type: "fontawesome",
				icon: faBookmark,
				name: "Personal Watchlist",
				description:
					"Save movies you love—or plan to watch—into a personalized watchlist. Scenebinge keeps everything organized so you never lose track of your must-watch titles. Sync your preferences and build a collection that grows with your cinematic journey.",
			},
		],
		projectVision: [
			"Scenebinge began as a personal project driven by my interest in building a modern, user-focused movie discovery experience. With the vast catalog provided by the TMDB API, the idea was to create an application that not only showcases movies but also makes exploring them feel intuitive, enjoyable, and visually engaging.",
			"As the concept grew, so did the technical ambitions behind it. To ensure the app could deliver fast and reliable data updates, I implemented React Query and Axios as the foundation for data fetching and state synchronization. To expand its capabilities beyond simple browsing, I integrated Firebase to handle key features such as user authentication and database storage—allowing users to securely log in, save their favorite movies, and maintain a personalized watchlist across devices.",
			"From designing the architecture and crafting the UI, to structuring API handling, managing state, and implementing user-centric features, Scenebinge became a full end-to-end development journey. Built from scratch using modern React Native and TypeScript standards, the goal has always been consistent: create a smooth, scalable, and delightful movie-browsing experience that reflects both technical best practices and my personal passion for building polished, functional products.",
		],
		challenge: [],
		solution: [],
		keyLearning: [],
		projectShowcase: "/images/scenebinge.jpeg",
		futureImprovements: [],
	},
	{
		title: "Nomie",
		slug: "nomie",
		description: `A food discovery and recipe app developed with React Native, Go (Golang) for the backend, and PostgreSQL for data management.<br />
		Integrated with TheMealDB API, Nomie helps users find meal ideas from around the world, filter recipes by ingredients or cuisines, and access detailed cooking instructions complete with video tutorials.<br/>
		It’s designed to make global culinary exploration simple, educational, and deliciously inspiring.`,
		homeImage: "/images/home-nomie.png",
		links: [
			{
				index: 0,
				show: true,
				type: "git",
				icon: faGithub,
				text: "View Mobile Repo on Github",
				url: "https://github.com/JonathanTriC/nomie-app",
			},
			{
				index: 1,
				show: true,
				type: "git",
				icon: faGithub,
				text: "View Backend Repo on Github",
				url: "https://github.com/JonathanTriC/nomie-api",
			},
			{
				index: 2,
				show: false,
				type: "store",
				icon: faAppStoreIos,
				text: "Apple App Store",
				url: "",
			},
		],
		listStack: [
			{
				index: 0,
				type: "fontawesome",
				icon: faAndroid,
				name: "Android",
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faApple,
				name: "iOS",
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faReact,
				name: "React Native",
			},
			{
				index: 3,
				type: "image",
				icon: "/images/typescript.svg",
				name: "Typescript",
			},
			{
				index: 4,
				type: "fontawesome",
				icon: faGolang,
				name: "Golang",
			},
			{
				index: 5,
				type: "fontawesome",
				icon: faCode,
				name: "TheMealDB API",
			},
		],
		keyFeatures: [
			{
				index: 0,
				type: "fontawesome",
				icon: faSearch,
				name: "Discover & Search Meals",
				description:
					"Find meals effortlessly through a smooth and intuitive exploration experience. Browse curated categories or search instantly by name or ingredients—Nomie helps you uncover the perfect dish in seconds.",
			},
			{
				index: 1,
				type: "fontawesome",
				icon: faCircleInfo,
				name: "Detailed Meal Breakdown",
				description:
					"Access complete meal details including ingredients and cooking instructions. Every recipe is presented clearly to guide you from start to finish with confidence and ease.",
			},
			{
				index: 2,
				type: "fontawesome",
				icon: faPlayCircle,
				name: "Step-by-Step Video Tutorials",
				description:
					"Learn visually through embedded video tutorials that demonstrate cooking methods, techniques, and timing. Perfect for beginners and seasoned cooks who prefer guided, hands-on learning.",
			},
			{
				index: 3,
				type: "fontawesome",
				icon: faBookmark,
				name: "Save & Organize Favorites",
				description:
					"Build your personal collection of go-to meals by saving recipes you love. Nomie keeps your favorites neatly organized so you can easily return to them whenever inspiration strikes.",
			},
		],
		projectVision: [
			"Nomie was created as a personal project with a simple but meaningful purpose: to help people find cooking inspiration effortlessly. Whether users are exploring new dishes or searching for quick meal ideas, the goal was to build an application that makes discovering recipes feel intuitive, enjoyable, and accessible for everyone.",
			"To shape that vision into a reliable product, I began by leveraging TheMealDB API as the primary source for meal data. However, rather than consuming it directly on the front end, I built a custom backend using Golang. This backend processes, restructures, and optimizes the data, ensuring that it’s more organized, consistent, and easier for the mobile application to consume. Beyond data transformation, the Golang service also powers several core functionalities, including user authentication, protected endpoints, and favorite meal management.",
			"From designing the backend architecture to developing the app interface, Nomie became a full end-to-end development journey. I built the mobile application from scratch using modern tools and clean coding practices, ensuring a smooth and scalable experience for users. Throughout the process, the mission stayed the same: to create a simple, functional, and delightful platform that helps users discover great meals with ease and brings more joy to everyday cooking.",
		],
		challenge: [],
		solution: [],
		keyLearning: [],
		projectShowcase: "/images/nomie.jpeg",
		futureImprovements: [],
	},
];

export { projects, slugProjects };
