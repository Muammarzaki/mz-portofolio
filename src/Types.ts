import {LucideIcon} from "lucide-react";

export interface Project {
    title: string;
    description: string;
    role: string;
    tech: string[];
    year: string;
    icon: LucideIcon;
    gradient: string;
}

export interface Education {
    title: string;
    institution: string;
    year: string;
    status: string;
    type: 'degree' | 'certification' | 'bootcamp';
}

export interface Skill {
    name: string;
    icon: string;
    category: string;
    description: string;
    projects?: number;
    yearsExp?: string;
    isCore?: boolean;
    isTrending?: boolean;
}

export interface SkillCategory {
    languages: SkillSection;
    frameworks: SkillSection;
    tools: SkillSection;
}

export interface SkillSection {
    title: string;
    icon: LucideIcon;
    skills: Skill[];
}