import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

import ManageUsersUI from "./_components/ManageUsersUI";

export default async function ManageUsers() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/");
  }
  return <ManageUsersUI />;
}
