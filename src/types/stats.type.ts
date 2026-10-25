export interface AdminStats {
    overview: Overview;
    trends: Trends;
}

export interface Overview {
    totalStudents: number;
    totalProjects: number;
}

export interface Trends {
    projects: Projects[];
}

export interface Projects {
    date: string;
    count: number;
}
