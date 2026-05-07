import { redirect } from "next/navigation";
import { RESUME_URL } from "@/data/resume";

export async function GET() {
  redirect(RESUME_URL);
}
