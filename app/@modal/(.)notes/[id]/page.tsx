import NotesPreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

const NotePreviewPage = async ({ params }: Props) => {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return (
    <NotesPreview>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </NotesPreview>
  );
};

export default NotePreviewPage;
