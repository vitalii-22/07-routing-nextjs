export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
}

export interface NewNoteData {
  title: string;
  content?: string;
  tag: "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";
}

export interface Category {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}
