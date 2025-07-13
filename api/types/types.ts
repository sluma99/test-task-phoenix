export type TaskStatus = 'Backlog' | 'Todo' | 'In Progress' | 'Done';
export type TaskPriority = 'High' | 'Medium' | 'Low';

export interface TaskRequest {
    title: string;
    description: string;
    priority: TaskPriority;
    status: TaskStatus;
}

export interface TaskResponse {
    id: string;
    userId: string;
    title: string;
    description: string;
    priority: TaskPriority;
    status: TaskStatus;
    createdAt: string;
}
