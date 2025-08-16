"use client";

import { useParams, useRouter } from "next/navigation";
import css from "./page.module.css";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";

const NotesPreview = () => {
  const { id } = useParams<{ id: string }>();

  const { data: note } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });
  const router = useRouter();

  const close = () => router.back();

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note?.title}</h2>
        </div>
        <p className={css.content}>{note?.content}</p>
        <p className={css.date}>{note?.createdAt}</p>
        <p className={css.tag}>{note?.tag}</p>
        <button className={css.backBtn} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotesPreview;
