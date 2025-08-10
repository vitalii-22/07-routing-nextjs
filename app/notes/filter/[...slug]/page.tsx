import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type NotesPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;
  const category = slug[0] === "all" ? undefined : slug[0];
  // const notes = await fetchNotes(1);
  // return <NotesClient initialData={notes} />;
}
