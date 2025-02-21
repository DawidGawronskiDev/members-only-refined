export interface MessageType {
  id: string;
  message: string;
  user: {
    name?: string;
  } | null;
  created: number;
  updated: number;
}
