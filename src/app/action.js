"use server";
import { revalidateTag } from "next/cache";

export async function revalidateHome() {
  revalidateTag("/");
}
