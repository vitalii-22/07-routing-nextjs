import { fetchNoteById } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NoteDetailsPageClient from "./NoteDetails.client";

type NoteDetailsProps = {
  params: Promise<{ id: string }>;
};

const NoteDetails = async ({ params }: NoteDetailsProps) => {
  const { id } = await params;
  const note = await fetchNoteById(id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  console.log(note);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsPageClient />
    </HydrationBoundary>
  );
};

export default NoteDetails;

// "use client";

// import { fetchNoteById } from "@/lib/api";
// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "next/navigation";

// import css from "./page.module.css";

// const NoteDetailsPageClient = () => {
//   const { id } = useParams<{ id: string }>();

//   const { data: note } = useQuery({
//     queryKey: ["note", id],
//     queryFn: () => fetchNoteById(id),
//     refetchOnMount: false,
//   });

//   return (
//     <div className={css.container}>
//       <div className={css.item}>
//         <div className={css.header}>
//           <h2>{note?.title}</h2>
//         </div>
//         <p className={css.content}>{note?.content}</p>
//         <p className={css.date}>{note?.createdAt}</p>
//       </div>
//     </div>
//   );
// };

// export default NoteDetailsPageClient;
