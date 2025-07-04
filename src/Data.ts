import {Layers, LineChart, MessageCircle, Server, Settings, Smartphone as SmartphoneIcon, Terminal} from "lucide-react";
import {Education, Project, Skill, SkillCategory} from "./Types.ts";

const skillCategories: SkillCategory = {
    languages: {
        title: 'Languages',
        icon: Terminal,
        skills: [
            {
                name: 'Java',
                icon: '☕',
                category: 'Backend',
                description: 'Enterprise applications & Spring ecosystem',
                projects: 20,
                yearsExp: '3+ years',
                isCore: true
            },
            {
                name: 'Kotlin',
                icon: '🎯',
                category: 'Mobile',
                description: 'Android development & multiplatform',
                projects: 10,
                yearsExp: '2+ years',
                isCore: true
            },
            {
                name: 'JavaScript',
                icon: '⚡',
                category: 'Full-Stack',
                description: 'Node.js, React & modern frameworks',
                projects: 15,
                yearsExp: '2+ years'
            },
            {
                name: 'TypeScript',
                icon: '🔷',
                category: 'Full-Stack',
                description: 'Type-safe development & large codebases',
                projects: 8,
                yearsExp: '1.5+ years'
            },
            {
                name: 'Python',
                icon: '🐍',
                category: 'Backend',
                description: 'APIs, data processing & automation',
                projects: 10,
                yearsExp: '2+ years'
            },
            {
                name: 'Go',
                icon: '🚀',
                category: 'Backend',
                description: 'Microservices & high-performance APIs',
                projects: 4,
                yearsExp: '1+ year',
                isTrending: true
            },
            {
                name: 'C/C++',
                icon: '⚙️',
                category: 'System',
                description: 'System programming & performance optimization',
                projects: 5,
                yearsExp: '1+ year'
            },
            {
                name: 'SQL',
                icon: '🗃️',
                category: 'Database',
                description: 'Complex queries, optimization & design',
                projects: 40,
                yearsExp: '3+ years'
            },
            {
                name: 'PHP',
                icon: '🐘',
                category: 'Backend',
                description: 'APIs, data processing & automation',
                projects: 10,
                yearsExp: '2+ years'
            },
            {
                name: 'bash',
                icon: '>_',
                category: 'System',
                description: 'Shell scripting & automation',
                projects: 0,
                yearsExp: '2+ year'
            }
        ] as Skill[]
    },
    frameworks: {
        title: 'Frameworks',
        icon: Layers,
        skills: [
            {
                name: 'Spring Boot',
                icon: '🍃',
                category: 'Backend',
                description: 'Microservices, Security, Data JPA',
                projects: 12,
                yearsExp: '2+ years',
                isCore: true
            },
            {
                name: 'NestJS',
                icon: '🐈',
                category: 'Backend',
                description: 'TypeScript APIs, GraphQL, WebSockets',
                projects: 4,
                yearsExp: '1+ year',
                isTrending: true
            },
            {
                name: 'Django',
                icon: '🧩',
                category: 'Backend',
                description: 'REST APIs, ORM, Admin panels',
                projects: 1,
                yearsExp: '1+ year'
            },
            {
                name: 'Android SDK',
                icon: '🤖',
                category: 'Mobile',
                description: 'Native Android, Jetpack Compose',
                projects: 10,
                yearsExp: '2+ years',
                isCore: true
            },
            {
                name: 'Fiber',
                icon: '⚡',
                category: 'Backend',
                description: 'Go web framework, high performance',
                projects: 2,
                yearsExp: '8 months',
                isTrending: true
            },
            {
                name: 'Express.js',
                icon: '🚂',
                category: 'Backend',
                description: 'RESTFull APIs, middleware, routing',
                projects: 3,
                yearsExp: '1.5+ years'
            },
            {
                name: 'Hapi.js',
                icon: '☀️',
                category: 'Backend',
                description: 'RESTFull APIs, middleware, routing',
                projects: 1,
                yearsExp: '-1 years'
            },
        ]
    },
    tools: {
        title: 'Tools',
        icon: Settings,
        skills: [
            {
                name: 'IntelliJ IDEA',
                icon: '💡',
                category: 'IDE',
                description: 'Primary development environment',
                projects: 25,
                yearsExp: '3+ years'
            },
            {
                name: 'Android Studio',
                icon: '📱',
                category: 'IDE',
                description: 'Android development, debugging, profiling',
                projects: 8,
                yearsExp: '2+ years'
            },
            {
                name: 'Any Jetbrains IDE',
                icon: '📝',
                category: 'Editor & IDE',
                description: 'Webstorm, PyCharm, GoLand, etc.',
                projects: 15,
                yearsExp: '2+ years'
            },
            {
                name: 'Git',
                icon: '📚',
                category: 'VCS',
                description: 'Version control, branching strategies',
                projects: 30,
                yearsExp: '3+ years'
            },
            {
                name: 'Docker',
                icon: '🐳',
                category: 'DevOps',
                description: 'Multi-stage builds, orchestration',
                projects: 12,
                yearsExp: '1.5+ years',
                isCore: true
            },
            {
                name: 'PostgreSQL',
                icon: '🐘',
                category: 'Database',
                description: 'Advanced queries, indexing, performance tuning',
                projects: 15,
                yearsExp: '2+ years',
                isCore: true
            },
            {
                name: 'MongoDB',
                icon: '🍃',
                category: 'Database',
                description: 'Document storage, aggregation pipelines',
                projects: 8,
                yearsExp: '1.5+ years'
            },
            {
                name: 'Redis',
                icon: '🔴',
                category: 'Cache',
                description: 'Caching, sessions, pub/sub messaging',
                projects: 10,
                yearsExp: '1+ year'
            },
            {
                name: 'Google Cloud Platform',
                icon: '☁️',
                category: 'Cloud',
                description: 'Cloud infrastructure, deployment, monitoring',
                projects: 2,
                yearsExp: '1+ year'
            },
            {
                name: 'Postman',
                icon: '📮',
                category: 'API Testing',
                description: 'API testing, documentation, automation',
                projects: 20,
                yearsExp: '2+ years'
            },
            {
                name: 'Jira',
                icon: '📋',
                category: 'Project Management',
                description: 'Agile project management, issue tracking',
                projects: 1,
                yearsExp: '1.5+ years'
            },
            {
                name: 'Figma',
                icon: '🎨',
                category: 'Design',
                description: 'UI/UX design, prototyping, collaboration',
                projects: 6,
                yearsExp: '1+ year'
            }
        ]
    }
};

const education: Education[] = [
    {
        title: 'Bachelor\'s Degree in Computer Science',
        institution: 'University',
        year: '2022-2026',
        status: 'In Progress',
        type: 'degree'
    },
    {
        title: 'Bangkit Academy',
        institution: 'Google, Tokopedia, Gojek, Traveloka',
        year: '2024',
        status: 'Graduate',
        type: 'bootcamp'
    },
    {
        title: 'Dicoding Certification',
        institution: 'Dicoding Indonesia',
        year: '2023-2024',
        status: 'Multiple Certificates',
        type: 'certification'
    }
];

const projects: Project[] = [
    {
        title: 'E-Commerce Backend API',
        description: 'Scalable REST API for e-commerce platform with microservices architecture, handling user management, product catalog, and order processing.',
        role: 'Backend Developer & Project Manager',
        tech: ['Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
        year: '2024',
        icon: Server,
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Real-time Chat Application',
        description: 'WebSocket-based chat application with message encryption, file sharing, and user presence indicators.',
        role: 'Backend Developer',
        tech: ['NestJS', 'Socket.io', 'MongoDB', 'JWT'],
        year: '2024',
        icon: MessageCircle,
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Task Management Android App',
        description: 'Native Android application for team task management with offline synchronization and push notifications.',
        role: 'Android Developer & Project Manager',
        tech: ['Kotlin', 'Room Database', 'Retrofit', 'Firebase'],
        year: '2023',
        icon: SmartphoneIcon,
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Financial Analytics Dashboard',
        description: 'Backend service for financial data processing and analytics with automated reporting and data visualization APIs.',
        role: 'Backend Developer',
        tech: ['Django', 'Celery', 'PostgreSQL', 'Pandas'],
        year: '2023',
        icon: LineChart,
        gradient: 'from-orange-500 to-red-500'
    }
];

export {
    skillCategories,
    education,
    projects
};