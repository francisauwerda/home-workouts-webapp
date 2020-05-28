export interface Exercise {
  id: string;
  title: string;
  imageUrl: string;
  order: number;
}

export interface Workout {
  id: string;
  title: string;
  exercises: Exercise[];
}
