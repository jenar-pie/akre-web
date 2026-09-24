import { redirect } from "next/navigation";

export default function ArtikelKesehatanRedirect() {
  redirect("/informasi/artikel?kategori=kesehatan");
}
