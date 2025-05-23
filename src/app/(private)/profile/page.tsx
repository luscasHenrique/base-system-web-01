import { Role, User } from "@/types/model/User";
import { ManageProfile } from "./_components/manageProfile/ManagerProfile";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/");
  }
  // Exemplo de dados fake completos para o usuário
  const fakeUser: Partial<User> = {
    id: "123",
    name: "João Silva",
    email: "joao.silva@email.com",
    role: Role.EDITOR,
    image: "https://github.com/shadcn.png",
  };

  return <ManageProfile initialUser={fakeUser} />;
}
