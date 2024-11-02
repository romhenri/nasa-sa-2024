export interface MissionCardProps {
    id: number;
    ods: number;
    title: string;
    description: string;
    summary: string;
    rating: number;
    points: number;
    status: "done" | "doing" | "todo";
    anim?: "right" | "center";
} 

export interface MissionPageProps {
    ods: number;
    title: string;
    description: string;
    rating: number;
    points: number;
    status: "done" | "doing" | "todo";
    context: string;
    count: number;
    summary: string;
}
  