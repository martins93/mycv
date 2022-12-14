export interface workExperienceProps {
  experience: experience[];
  functionGoTo: (exp: experience) => void;
}

export interface experience {
  id: number;
  role: string;
  company: string;
  tasks: tasks[];
  startDate: string;
  about?: string;
  /*   endDate?: string; */
}

export interface tasks {
  id: number;
  task: string;
}
