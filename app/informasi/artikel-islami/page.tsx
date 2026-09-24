import { redirect } from "next/navigation";

export default function ArtikelIslamiRedirect() {
  redirect("/informasi/artikel?kategori=islami");
}
