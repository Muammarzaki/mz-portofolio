import {useEffect, useState} from 'react';
import {
    ArrowRight,
    Atom,
    Award,
    Binary,
    Braces,
    Briefcase,
    Calendar,
    CheckCircle,
    Circle,
    Clock,
    Code2,
    Coffee,
    Cog as Gear,
    Command,
    Compass,
    Diamond,
    Gem,
    GitCommit,
    GraduationCap,
    Heart,
    Hexagon,
    Home,
    Instagram,
    Lightbulb,
    Linkedin,
    Mail,
    Menu,
    MessageCircle,
    Moon,
    Phone,
    Play,
    Puzzle,
    Quote,
    Radar,
    Rocket,
    Sparkle,
    Sparkles,
    Square,
    Star,
    Sun,
    Target,
    Telescope,
    Terminal,
    TrendingUp,
    Triangle,
    Wifi,
    X,
    Zap
} from 'lucide-react';
import {education, projects, skillCategories} from "./Data.ts";

function App() {
    const [isDark, setIsDark] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSkillCategory, setActiveSkillCategory] = useState('languages');

    useEffect(() => {
        setIsLoaded(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setIsMenuOpen(false);
        }
    };

    const themeClasses = {
        background: isDark
            ? 'bg-black text-white'
            : 'bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900',
        card: isDark
            ? 'bg-gray-900 border-gray-800'
            : 'bg-white/80 backdrop-blur-sm border-blue-100',
        accent: isDark
            ? 'text-white'
            : 'text-blue-600',
        button: isDark
            ? 'bg-white text-black hover:bg-gray-200'
            : 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: isDark
            ? 'text-gray-400'
            : 'text-gray-600',
        navbar: scrolled
            ? (isDark ? 'bg-black/90 backdrop-blur-md border-gray-800' : 'bg-white/90 backdrop-blur-md border-blue-100')
            : (isDark ? 'bg-transparent' : 'bg-transparent')
    };

    const getEducationIcon = (type: string) => {
        switch (type) {
            case 'degree':
                return <GraduationCap className="w-5 h-5"/>;
            case 'bootcamp':
                return <Award className="w-5 h-5"/>;
            case 'certification':
                return <CheckCircle className="w-5 h-5"/>;
            default:
                return <GraduationCap className="w-5 h-5"/>;
        }
    };

    const getEducationColor = (type: string) => {
        if (isDark) {
            switch (type) {
                case 'degree':
                    return 'border-l-blue-400';
                case 'bootcamp':
                    return 'border-l-green-400';
                case 'certification':
                    return 'border-l-purple-400';
                default:
                    return 'border-l-blue-400';
            }
        } else {
            switch (type) {
                case 'degree':
                    return 'border-l-blue-600';
                case 'bootcamp':
                    return 'border-l-green-600';
                case 'certification':
                    return 'border-l-purple-600';
                default:
                    return 'border-l-blue-600';
            }
        }
    };

    const navItems = [
        {name: 'Home', icon: Home, href: 'hero'},
        {name: 'Skills', icon: Code2, href: 'skills'},
        {name: 'Education', icon: GraduationCap, href: 'education'},
        {name: 'Projects', icon: Briefcase, href: 'projects'},
        {name: 'Contact', icon: Phone, href: 'contact'}
    ];

    // Floating shapes data
    const floatingShapes = [
        {icon: Hexagon, size: 'w-8 h-8', position: 'top-1/4 left-1/4', delay: '0s', color: 'text-blue-500/20'},
        {icon: Triangle, size: 'w-6 h-6', position: 'top-1/3 right-1/4', delay: '2s', color: 'text-purple-500/20'},
        {icon: Circle, size: 'w-10 h-10', position: 'bottom-1/4 left-1/3', delay: '4s', color: 'text-green-500/20'},
        {icon: Diamond, size: 'w-7 h-7', position: 'bottom-1/3 right-1/3', delay: '1s', color: 'text-orange-500/20'},
        {icon: Square, size: 'w-5 h-5', position: 'top-1/2 left-1/6', delay: '3s', color: 'text-pink-500/20'},
        {icon: Atom, size: 'w-9 h-9', position: 'bottom-1/2 right-1/6', delay: '5s', color: 'text-cyan-500/20'}
    ];

    return (
        <div
            className={`min-h-screen transition-all duration-500 ${themeClasses.background} ${isLoaded ? 'opacity-100' : 'opacity-0'} relative overflow-hidden`}>
            {/* Floating Background Shapes */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {floatingShapes.map((shape, index) => {
                    const ShapeIcon = shape.icon;
                    return (
                        <div
                            key={shape.icon.name + index}
                            className={`absolute ${shape.position} ${shape.color} animate-float-slow`}
                            style={{animationDelay: shape.delay, animationDuration: '6s'}}
                        >
                            <ShapeIcon className={shape.size}/>
                        </div>
                    );
                })}
            </div>

            {/* Modern Navbar */}
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${themeClasses.navbar} ${scrolled ? 'border-b shadow-lg' : ''}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo/Brand */}
                        <div className="flex items-center gap-3">
                            <div
                                className={`relative w-10 h-10 rounded-xl ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} flex items-center justify-center shadow-lg`}>
                                <Code2 className="w-6 h-6 text-white"/>
                                {/* Decorative corner shapes */}
                                <div
                                    className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                <div
                                    className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-500"></div>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold flex items-center gap-2">
                                    Muammar Zaki
                                    <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse"/>
                                </h1>
                                <p className={`text-xs ${themeClasses.secondary} flex items-center gap-1`}>
                                    <Terminal className="w-3 h-3"/>
                                    Backend Engineer
                                </p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${themeClasses.card} hover:shadow-lg backdrop-blur-sm border border-transparent hover:border-current relative overflow-hidden`}
                                >
                                    {/* Hover effect background */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-500/10 to-purple-500/10' : 'from-blue-600/10 to-indigo-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <item.icon className="w-4 h-4 relative z-10"/>
                                    <span className="font-medium relative z-10">{item.name}</span>
                                </button>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-3">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`relative p-3 rounded-xl transition-all duration-300 ${themeClasses.card} border shadow-lg hover:scale-110 backdrop-blur-sm overflow-hidden group`}
                                aria-label="Toggle theme"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-yellow-400/20 to-orange-500/20' : 'from-blue-500/20 to-purple-500/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                {isDark ? <Sun className="w-5 h-5 relative z-10"/> :
                                    <Moon className="w-5 h-5 relative z-10"/>}
                            </button>

                            {/* CTA Button - Desktop */}
                            <button
                                className={`hidden sm:flex items-center gap-2 px-6 py-3 rounded-xl ${themeClasses.button} font-semibold transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden group`}>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Mail className="w-4 h-4 relative z-10"/>
                                <span className="relative z-10">Hire Me</span>
                                <Sparkles className="w-3 h-3 relative z-10 animate-pulse"/>
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={toggleMenu}
                                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${themeClasses.card} border shadow-lg hover:scale-110 backdrop-blur-sm`}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5"/>}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className={`px-6 py-4 ${themeClasses.card} border-t backdrop-blur-md`}>
                        <div className="space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 ${themeClasses.card} hover:shadow-lg backdrop-blur-sm border text-left relative overflow-hidden group`}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-500/10 to-purple-500/10' : 'from-blue-600/10 to-indigo-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <item.icon className="w-5 h-5 relative z-10"/>
                                    <span className="font-medium relative z-10">{item.name}</span>
                                </button>
                            ))}

                            {/* Mobile CTA */}
                            <button
                                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl ${themeClasses.button} font-semibold transition-all duration-300 hover:scale-105 shadow-lg mt-4`}>
                                <Mail className="w-4 h-4"/>
                                <span>Hire Me</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Enhanced with Shapes and Icons */}
            <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                {/* Enhanced Background Elements */}
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div
                        className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full ${isDark ? 'bg-white' : 'bg-blue-600'} animate-pulse`}></div>
                    <div
                        className={`absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full ${isDark ? 'bg-gray-400' : 'bg-blue-400'} animate-pulse delay-1000`}></div>
                    <div
                        className={`absolute top-1/2 left-1/6 w-3 h-3 ${isDark ? 'border-white' : 'border-blue-500'} border rotate-45 animate-spin-slow`}></div>
                    <div
                        className={`absolute bottom-1/4 right-1/4 w-4 h-4 ${isDark ? 'border-purple-400' : 'border-indigo-500'} border-2 rounded-full animate-bounce-slow`}></div>
                </div>

                <div className="w-full max-w-7xl mx-auto relative z-10">
                    {/* Compact Single Row Layout */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                        {/* Left Side - Enhanced Photo */}
                        <div className="flex-shrink-0 order-2 lg:order-1">
                            <div className="relative group">
                                {/* Enhanced Photo Container */}
                                <div
                                    className={`relative w-64 h-80 lg:w-72 lg:h-96 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 ${themeClasses.card} border-2`}>
                                    <div
                                        className={`w-full h-full flex flex-col items-center justify-center ${isDark ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'} relative overflow-hidden`}>
                                        {/* Enhanced Background Pattern */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div
                                                className={`absolute top-6 left-6 w-12 h-12 rounded-full ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/20'} blur-xl`}></div>
                                            <div
                                                className={`absolute bottom-8 right-8 w-16 h-16 rounded-full ${isDark ? 'bg-purple-500/20' : 'bg-indigo-600/20'} blur-xl`}></div>
                                            {/* Geometric shapes */}
                                            <Hexagon
                                                className="absolute top-4 right-4 w-6 h-6 text-blue-400/30 animate-spin-slow"/>
                                            <Triangle
                                                className="absolute bottom-4 left-4 w-5 h-5 text-purple-400/30 animate-bounce-slow"/>
                                        </div>

                                        {/* Enhanced Photo Content */}
                                        <div className="text-center relative z-10">
                                            <img src="/profile-removebg-preview.png" alt="Muammar Zaki"
                                                 className="w-full h-full "/>
                                        </div>
                                    </div>
                                </div>

                                {/* Enhanced Floating Badges */}
                                <div
                                    className={`absolute -top-3 -right-3 w-10 h-10 rounded-full ${isDark ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-yellow-500 to-orange-600'} flex items-center justify-center animate-bounce shadow-lg border-2 border-white`}>
                                    <Award className="w-5 h-5 text-white"/>
                                </div>
                                <div
                                    className={`absolute -bottom-3 -left-3 w-8 h-8 rounded-full ${isDark ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-gradient-to-r from-green-500 to-blue-600'} flex items-center justify-center animate-bounce delay-300 shadow-lg border-2 border-white`}>
                                    <Code2 className="w-4 h-4 text-white"/>
                                </div>

                                {/* Additional decorative elements */}
                                <div className="absolute top-1/2 -left-6 opacity-30">
                                    <Braces className="w-6 h-6 text-blue-500 animate-pulse"/>
                                </div>
                                <div className="absolute top-1/3 -right-6 opacity-30">
                                    <Binary className="w-5 h-5 text-purple-500 animate-pulse delay-1000"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left order-1 lg:order-2 max-w-3xl">
                            <div className="mb-6">
                                <div
                                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${themeClasses.card} border shadow-lg backdrop-blur-sm relative overflow-hidden group`}>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-green-400/10 to-blue-500/10' : 'from-green-500/10 to-blue-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <div
                                        className={`w-2 h-2 rounded-full ${isDark ? 'bg-green-400' : 'bg-green-500'} animate-pulse relative z-10`}></div>
                                    <span
                                        className="text-sm font-medium relative z-10">Available for opportunities</span>
                                    <Radar className="w-4 h-4 animate-spin relative z-10"/>
                                </div>
                            </div>

                            {/* Enhanced Introduction */}
                            <div className="mb-8">
                                <h1 className="mb-4">
                  <span
                      className="block text-xl md:text-2xl font-medium mb-2 tracking-wide flex items-center justify-center lg:justify-start gap-2">
                    Hello, I'm
                    <Sparkle className="w-5 h-5 text-yellow-500 animate-pulse"/>
                  </span>
                                    <span
                                        className={`block text-4xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight bg-gradient-to-r ${isDark ? 'from-white via-blue-200 to-purple-200' : 'from-blue-600 via-indigo-600 to-purple-600'} bg-clip-text text-transparent`}>
                    Muammar Zaki
                  </span>
                                </h1>

                                <div className="space-y-3">
                                    <p className={`text-xl md:text-2xl font-semibold ${themeClasses.accent} tracking-wide flex items-center justify-center lg:justify-start gap-2`}>
                                        <Terminal className="w-6 h-6"/>
                                        Backend Engineer & Problem Solver
                                        <Zap className="w-5 h-5 animate-pulse"/>
                                    </p>
                                    <p className={`text-base md:text-lg ${themeClasses.secondary} font-normal leading-relaxed flex items-center justify-center lg:justify-start gap-2`}>
                                        <Lightbulb className="w-5 h-5 animate-pulse"/>
                                        Passionate about building scalable systems that make a difference
                                    </p>
                                </div>
                            </div>

                            {/* Enhanced Story Card */}
                            <div
                                className={`p-6 rounded-2xl ${themeClasses.card} border backdrop-blur-sm shadow-xl mb-8 relative overflow-hidden group`}>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-500/5 to-purple-500/5' : 'from-blue-600/5 to-indigo-600/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className="flex items-start gap-3 relative z-10">
                                    <div
                                        className={`p-2 rounded-xl ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600'} flex-shrink-0 relative`}>
                                        <Quote className="w-5 h-5 text-white"/>
                                        <div
                                            className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                            My Journey Into Code
                                            <Compass className="w-4 h-4 animate-spin-slow"/>
                                            <Sparkles className="w-4 h-4 animate-pulse"/>
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${themeClasses.secondary}`}>
                                            It all began during the COVID-19 pandemic, when I found myself diving deep
                                            into the world of backend development. What started as a curiosity quickly
                                            grew into a passion for building scalable, secure, and efficient systems.
                                            I’ve since spent countless hours exploring tools, frameworks, and languages
                                            like Java and Kotlin—driven by a desire to understand not just how things
                                            work, but how to make them work better.
                                            Today, I’m focused on mastering backend technologies and learning how they
                                            power real-world applications. I thrive on continuous learning, practical
                                            challenges, and the excitement of contributing to systems that make a real
                                            impact.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Focus Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                <div
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl ${themeClasses.card} border backdrop-blur-sm shadow-lg relative overflow-hidden group`}>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-500/10 to-cyan-500/10' : 'from-blue-600/10 to-cyan-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/20 rounded-lg">
                                            <Target className="w-5 h-5 text-blue-500 flex-shrink-0"/>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-sm flex items-center gap-1">
                                                Currently Building
                                                <Gear className="w-3 h-3 animate-spin"/>
                                            </p>
                                            <p className={`text-xs ${themeClasses.secondary}`}>Scalable
                                                microservices</p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl ${themeClasses.card} border backdrop-blur-sm shadow-lg relative overflow-hidden group`}>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-green-500/10 to-emerald-500/10' : 'from-green-600/10 to-emerald-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <div className="relative z-10 flex items-center gap-3">
                                        <div className="p-2 bg-green-500/20 rounded-lg">
                                            <Rocket className="w-5 h-5 text-green-500 flex-shrink-0"/>
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-sm flex items-center gap-1">
                                                Learning
                                                <Telescope className="w-3 h-3 animate-pulse"/>
                                            </p>
                                            <p className={`text-xs ${themeClasses.secondary}`}>Cloud-native patterns</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-xl ${themeClasses.button} font-semibold transition-all duration-300 hover:scale-105 shadow-lg relative overflow-hidden`}
                                >
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <Mail className="w-4 h-4 relative z-10"/>
                                    <span className="relative z-10">Let's Connect</span>
                                    <ArrowRight
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10"/>
                                    <Sparkles className="w-3 h-3 animate-pulse relative z-10"/>
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-xl ${themeClasses.card} border font-semibold transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm relative overflow-hidden`}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-500/10 to-purple-500/10' : 'from-blue-600/10 to-indigo-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                    <Play className="w-4 h-4 relative z-10"/>
                                    <span className="relative z-10">See My Work</span>
                                    <Gem className="w-3 h-3 animate-pulse relative z-10"/>
                                </button>
                            </div>

                            {/* Enhanced Stats */}
                            <div className="flex justify-center lg:justify-start gap-8 text-center">
                                <div className="relative group">
                                    <div
                                        className={`text-2xl font-bold ${themeClasses.accent} mb-1 flex items-center gap-1`}>
                                        15+
                                        <Briefcase className="w-4 h-4 animate-bounce"/>
                                    </div>
                                    <div
                                        className={`text-xs ${themeClasses.secondary} font-medium uppercase tracking-wider`}>Projects
                                    </div>
                                </div>
                                <div className={`w-px h-10 ${isDark ? 'bg-gray-700' : 'bg-gray-300'} relative`}>
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                </div>
                                <div className="relative group">
                                    <div
                                        className={`text-2xl font-bold ${themeClasses.accent} mb-1 flex items-center gap-1`}>
                                        8+
                                        <Code2 className="w-4 h-4 animate-pulse"/>
                                    </div>
                                    <div
                                        className={`text-xs ${themeClasses.secondary} font-medium uppercase tracking-wider`}>Technologies
                                    </div>
                                </div>
                                <div className={`w-px h-10 ${isDark ? 'bg-gray-700' : 'bg-gray-300'} relative`}>
                                    <div
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-500"></div>
                                </div>
                                <div className="relative group">
                                    <div
                                        className={`text-2xl font-bold ${themeClasses.accent} mb-1 flex items-center gap-1`}>
                                        3+
                                        <Clock className="w-4 h-4 animate-spin-slow"/>
                                    </div>
                                    <div
                                        className={`text-xs ${themeClasses.secondary} font-medium uppercase tracking-wider`}>Years
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section - Enhanced with Icons */}
            <section id="skills" className="py-20 px-6 relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden opacity-5">
                    <Binary className="absolute top-10 left-10 w-8 h-8 animate-pulse"/>
                    <Braces className="absolute top-20 right-20 w-6 h-6 animate-bounce"/>
                    <Command className="absolute bottom-20 left-20 w-7 h-7 animate-spin-slow"/>
                    <GitCommit className="absolute bottom-10 right-10 w-5 h-5 animate-pulse delay-1000"/>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Enhanced Header */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center mb-6">
                            <div
                                className={`relative p-6 rounded-3xl ${isDark ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500' : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'} shadow-2xl`}>
                                <Zap className="w-10 h-10 text-white animate-pulse"/>
                                <div
                                    className={`absolute inset-0 rounded-3xl ${isDark ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500' : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600'} opacity-20 blur-xl animate-pulse`}></div>
                                {/* Decorative corner elements */}
                                <div
                                    className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
                                <div
                                    className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-300"></div>
                            </div>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-4">
              <span
                  className={`bg-gradient-to-r ${isDark ? 'from-white via-blue-200 to-purple-200' : 'from-blue-600 via-indigo-600 to-purple-600'} bg-clip-text text-transparent`}>
                Technical Arsenal
              </span>
                            <Atom className="w-8 h-8 text-blue-500 animate-spin-slow"/>
                        </h2>
                        <p className={`text-xl ${themeClasses.secondary} max-w-4xl mx-auto leading-relaxed flex items-center justify-center gap-2 flex-wrap`}>
                            <Puzzle className="w-5 h-5 animate-pulse"/>
                            A comprehensive toolkit spanning backend systems, mobile development, cloud infrastructure,
                            and modern software engineering practices
                            <Gem className="w-5 h-5 animate-pulse delay-500"/>
                        </p>
                    </div>

                    {/* Enhanced Category Navigation Bar */}
                    <div
                        className={`flex flex-wrap justify-center gap-2 mb-16 p-2 rounded-2xl ${themeClasses.card} border backdrop-blur-sm shadow-lg max-w-2xl mx-auto relative overflow-hidden`}>
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-500/5 to-purple-500/5' : 'from-blue-600/5 to-indigo-600/5'} opacity-50`}></div>
                        {Object.entries(skillCategories).map(([key, category]) => {
                            const IconComponent = category.icon;
                            const isActive = activeSkillCategory === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveSkillCategory(key)}
                                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 overflow-hidden group ${
                                        isActive
                                            ? `${themeClasses.button} shadow-lg`
                                            : `hover:${isDark ? 'bg-gray-800' : 'bg-blue-50'} ${themeClasses.secondary} hover:text-current`
                                    }`}
                                >
                                    {isActive && (
                                        <div
                                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-100"></div>
                                    )}
                                    <IconComponent className="w-5 h-5 relative z-10"/>
                                    <span className="relative z-10">{category.title}</span>
                                    {isActive && <Sparkles className="w-3 h-3 animate-pulse relative z-10"/>}
                                </button>
                            );
                        })}
                    </div>

                    {/* Enhanced Skills Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {skillCategories[activeSkillCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                            <div
                                key={skill.name}
                                className={`group relative p-6 rounded-2xl ${themeClasses.card} border hover:scale-105 transition-all duration-300 hover:shadow-xl backdrop-blur-sm overflow-hidden`}
                                style={{animationDelay: `${index * 50}ms`}}
                            >
                                <div className="absolute top-3 right-3 flex gap-1">
                                    {skill.isCore && (
                                        <div
                                            className={`w-2 h-2 rounded-full ${isDark ? 'bg-yellow-400' : 'bg-yellow-500'} shadow-sm animate-pulse`}
                                            title="Core Technology"></div>
                                    )}
                                    {skill.isTrending && (
                                        <div
                                            className={`w-2 h-2 rounded-full ${isDark ? 'bg-green-400' : 'bg-green-500'} shadow-sm animate-pulse delay-300`}
                                            title="Trending"></div>
                                    )}
                                    <TrendingUp className="w-3 h-3 text-green-500 animate-bounce"/>
                                </div>

                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className={`text-2xl p-2 rounded-lg ${isDark ? 'bg-gray-800/50' : 'bg-blue-50/50'} backdrop-blur-sm border relative`}>
                                        {skill.icon}
                                        <div
                                            className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-lg truncate flex items-center gap-2">
                                            {skill.name}
                                            {skill.isCore && <Star className="w-4 h-4 text-yellow-500 animate-pulse"/>}
                                        </h3>
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full font-medium ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-blue-100 text-blue-700'} flex items-center gap-1`}>
                      <Circle className="w-2 h-2 fill-current"/>
                                            {skill.category}
                    </span>
                                    </div>
                                </div>

                                <p className={`text-sm ${themeClasses.secondary} mb-4 leading-relaxed line-clamp-2`}>
                                    {skill.description}
                                </p>

                                <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3 animate-pulse"/>
                                        <span className={themeClasses.secondary}>{skill.yearsExp}</span>
                                    </div>
                                    {skill.projects && (
                                        <div className="flex items-center gap-1">
                                            <Briefcase className="w-3 h-3"/>
                                            <span className={themeClasses.secondary}>{skill.projects} projects</span>
                                        </div>
                                    )}
                                </div>

                                {/* Enhanced Hover Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-500/5 to-purple-500/5' : 'from-blue-600/5 to-indigo-600/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none`}></div>

                                {/* Decorative corner element */}
                                <div
                                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Sparkles className="w-4 h-4 text-blue-500 animate-pulse"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section - Enhanced */
            }
            <section id="education" className="py-20 px-6 relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden opacity-5">
                    <GraduationCap className="absolute top-10 right-10 w-12 h-12 animate-bounce"/>
                    <Award className="absolute bottom-10 left-10 w-10 h-10 animate-pulse"/>
                    <CheckCircle className="absolute top-1/2 left-10 w-8 h-8 animate-spin-slow"/>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                            <div
                                className={`p-3 rounded-xl ${isDark ? 'bg-gradient-to-r from-green-500 to-blue-500' : 'bg-gradient-to-r from-green-600 to-blue-600'} shadow-lg`}>
                                <GraduationCap className="w-8 h-8 text-white"/>
                            </div>
                            Education & Certifications
                            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse"/>
                        </h2>
                        <p className={`text-lg ${themeClasses.secondary} flex items-center justify-center gap-2`}>
                            <Telescope className="w-5 h-5 animate-pulse"/>
                            Continuous learning journey in computer science and software engineering
                            <Lightbulb className="w-5 h-5 animate-pulse delay-500"/>
                        </p>
                    </div>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index}
                                 className={`relative p-6 rounded-xl ${themeClasses.card} border hover:scale-105 transition-all duration-300 border-l-4 ${getEducationColor(edu.type)} group overflow-hidden`}>
                                <div
                                    className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-blue-500/5 to-purple-500/5' : 'from-blue-600/5 to-indigo-600/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                                <div className="flex items-start gap-4 relative z-10">
                                    <div
                                        className={`p-2 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-blue-50'} flex-shrink-0 relative border`}>
                                        {getEducationIcon(edu.type)}
                                        <div
                                            className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    </div>

                                    <div className="flex-grow">
                                        <div
                                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-xl font-semibold flex items-center gap-2">
                                                {edu.title}
                                                <Gem className="w-4 h-4 text-blue-500 animate-pulse"/>
                                            </h3>
                                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                            edu.status === 'In Progress'
                                ? (isDark ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800')
                                : edu.status === 'Graduate' || edu.status === 'Completed'
                                    ? (isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800')
                                    : (isDark ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800')
                        }`}>
                          {edu.status === 'In Progress' && <Clock className="w-3 h-3 animate-spin"/>}
                            {(edu.status === 'Graduate' || edu.status === 'Completed') &&
                                <CheckCircle className="w-3 h-3"/>}
                            {edu.status}
                        </span>
                                            </div>
                                        </div>

                                        <p className={`${themeClasses.secondary} mb-2 font-medium flex items-center gap-2`}>
                                            <Award className="w-4 h-4"/>
                                            {edu.institution}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4"/>
                                            <span
                                                className={`text-sm ${themeClasses.accent} font-medium`}>{edu.year}</span>
                                            <Sparkles className="w-3 h-3 animate-pulse"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section - Enhanced */
            }
            <section id="projects" className="py-20 px-6 relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden opacity-5">
                    <Briefcase className="absolute top-10 left-10 w-10 h-10 animate-bounce"/>
                    <Rocket className="absolute top-20 right-20 w-8 h-8 animate-pulse"/>
                    <Gem className="absolute bottom-20 left-20 w-6 h-6 animate-spin-slow"/>
                    <Star className="absolute bottom-10 right-10 w-7 h-7 animate-pulse delay-1000"/>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-4">
                        <div
                            className={`p-3 rounded-xl ${isDark ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-purple-600 to-pink-600'} shadow-lg`}>
                            <Briefcase className="w-8 h-8 text-white"/>
                        </div>
                        Featured Projects
                        <Rocket className="w-6 h-6 text-blue-500 animate-bounce"/>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project) => {
                            const ProjectIcon = project.icon;
                            return (
                                <div key={project.title}
                                     className={`p-8 rounded-2xl ${themeClasses.card} border hover:scale-105 transition-all duration-300 group relative overflow-hidden`}>
                                    {/* Enhanced background gradient */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-gray-800/50 to-gray-900/50' : 'from-blue-50/50 to-indigo-50/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                                    <div className="relative z-10">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                                                    <ProjectIcon className="w-6 h-6 text-white"/>
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-semibold group-hover:text-current transition-colors flex items-center gap-2">
                                                        {project.title}
                                                        <Sparkles className="w-4 h-4 animate-pulse"/>
                                                    </h3>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                        <span
                                            className={`text-sm ${themeClasses.secondary} font-medium`}>{project.year}</span>
                                                <Star className="w-4 h-4 text-yellow-500 animate-pulse"/>
                                            </div>
                                        </div>

                                        <p className={`${themeClasses.secondary} mb-4 leading-relaxed`}>
                                            {project.description}
                                        </p>

                                        <div className="mb-4">
                      <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${themeClasses.accent} ${isDark ? 'bg-gray-800' : 'bg-blue-50'} border`}>
                        <Briefcase className="w-3 h-3"/>
                          {project.role}
                          <Award className="w-3 h-3 animate-pulse"/>
                      </span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className={`px-2 py-1 rounded text-xs font-medium ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} border flex items-center gap-1`}
                                                >
                          <Circle className="w-2 h-2 fill-current"/>
                                                    {tech}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Decorative corner element */}
                                    <div
                                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Gem className="w-5 h-5 text-purple-500 animate-pulse"/>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Section - Enhanced */
            }
            <section id="contact" className="py-20 px-6 relative">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden opacity-5">
                    <Mail className="absolute top-10 left-10 w-8 h-8 animate-bounce"/>
                    <MessageCircle className="absolute top-20 right-20 w-6 h-6 animate-pulse"/>
                    <Heart className="absolute bottom-20 left-20 w-7 h-7 animate-pulse delay-500"/>
                    <Sparkles className="absolute bottom-10 right-10 w-5 h-5 animate-spin-slow"/>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-8 flex items-center justify-center gap-3">
                        <div
                            className={`p-3 rounded-xl ${isDark ? 'bg-gradient-to-r from-pink-500 to-red-500' : 'bg-gradient-to-r from-pink-600 to-red-600'} shadow-lg`}>
                            <Heart className="w-8 h-8 text-white animate-pulse"/>
                        </div>
                        Let's Connect
                        <Wifi className="w-6 h-6 text-blue-500 animate-pulse"/>
                    </h2>
                    <p className={`text-xl ${themeClasses.secondary} mb-12 flex items-center justify-center gap-2 flex-wrap`}>
                        <Coffee className="w-5 h-5 animate-pulse"/>
                        Always open to discussing backend architecture, mobile development, or potential collaborations.
                        <Lightbulb className="w-5 h-5 animate-pulse delay-500"/>
                    </p>

                    <div className="flex justify-center gap-6 mb-12">
                        <a
                            href="https://www.linkedin.com/in/muammar-zaki-b6387a2a0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative p-4 rounded-full ${themeClasses.card} border hover:scale-110 transition-all duration-300 group overflow-hidden`}
                            aria-label="LinkedIn"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            <Linkedin className="w-6 h-6 group-hover:text-blue-600 transition-colors relative z-10"/>
                            <div
                                className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="https://discordapp.com/users/marsal_88474"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative p-4 rounded-full ${themeClasses.card} border hover:scale-110 transition-all duration-300 group overflow-hidden`}
                            aria-label="Discord"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            <MessageCircle
                                className="w-6 h-6 group-hover:text-indigo-600 transition-colors relative z-10"/>
                            <div
                                className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                        <a
                            href="https://www.instagram.com/marsal_mc/?igsh=aG9vZTJtYWIwM2g5#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`relative p-4 rounded-full ${themeClasses.card} border hover:scale-110 transition-all duration-300 group overflow-hidden`}
                            aria-label="Instagram"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                            <Instagram className="w-6 h-6 group-hover:text-pink-600 transition-colors relative z-10"/>
                            <div
                                className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>

                    <div
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${themeClasses.card} border relative overflow-hidden group`}>
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-green-500/10 to-blue-500/10' : 'from-green-600/10 to-blue-600/10'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <div
                            className={`w-2 h-2 rounded-full ${isDark ? 'bg-green-400' : 'bg-green-500'} animate-pulse relative z-10`}></div>
                        <span className="font-medium relative z-10">Available for new opportunities</span>
                        <Rocket className="w-4 h-4 animate-bounce relative z-10"/>
                    </div>
                </div>
            </section>

            {/* Enhanced Footer */
            }
            <footer className={`py-8 px-6 border-t ${isDark ? 'border-gray-800' : 'border-blue-100'} relative`}>
                <div className="absolute inset-0 overflow-hidden opacity-5">
                    <Code2 className="absolute top-2 left-10 w-6 h-6 animate-pulse"/>
                    <Heart className="absolute top-2 right-10 w-5 h-5 animate-pulse delay-500"/>
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <p className={`${themeClasses.secondary} flex items-center justify-center gap-2 flex-wrap`}>
                        <Code2 className="w-4 h-4 animate-pulse"/>
                        Built with React & TypeScript
                        <Sparkles className="w-3 h-3 animate-pulse"/>
                        Passionate about clean architecture & scalable systems
                        <Heart className="w-4 h-4 text-red-500 animate-pulse"/>
                    </p>
                </div>
            </footer>

            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                    }
                }

                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes bounce-slow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-25%);
                    }
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-float-slow {
                    animation: float-slow 6s ease-in-out infinite;
                }

                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }

                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }

                .animate-bounce-slow {
                    animation: bounce-slow 2s infinite;
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </div>
    )
        ;
}

export default App;