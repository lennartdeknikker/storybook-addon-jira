
export interface JiraSettings {
  id?: string,
  persistentTabs?: string[],
}

export type ResultsWrapper = {
  parsedData: Results;
  isForSubtask: boolean;
}

export type Results = {
  overview?: Overview;
  subtasks?: SubTasks;
};

export interface Overview {
  assignedTo: User;
  comments?: Comments;
  created: string;
  description: string;
  lastUpdated: string;
  status: Status;
  summary: string;
  ticketId: string;
  subtasksProgress: SubtaskProgress[];
  priority: Priority;
  reporter: User;
};

export interface SubTaskOverview {
  id: string;
  summary: string;
  apiLink: string;
  status: Status;
}

export type Comments = {
  amount: number;
  items: Comment[];
};

export type Comment = {
  author: User;
  body: string;
  timeStamps: Timestamps;
};

export type Timestamps = {
  created: Date;
  updated: Date;
}

export type SubtaskProgress = {
  id: string;
  percentage?: number;
  color?: string;
}
export type User = {
  name: string;
  avatar: string;
};

export type Priority = {
  label: string;
  icon: string;
};

export type SubTasks = {
  amount: number;
  categories?: {[key: string]: Category}
};

export type Status = {
  color: string;
  label: string;
};

export type Category = {
  color: string;
  amount: number;
  items: SubTaskOverview[]
};
