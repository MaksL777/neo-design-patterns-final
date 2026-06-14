export interface ProjectData {
    name: string;
    description: string;
    isRecent: boolean;
}

export interface ExperienceData {
    company: string;
    projects: ProjectData[];
}

export interface HeaderData {
    name: string;
    email: string;
    phone: string;
}

export interface ResumeModel {
    header: HeaderData;
    summary: string;
    experience: ExperienceData[];
    education: string[];
    skills: string[];
}