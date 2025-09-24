export type User = {
  id: number;
  name: string;
  email: string;
  isActive?: boolean;
};

export type GreetingProps = {
  user: User;
  age?: number;
};