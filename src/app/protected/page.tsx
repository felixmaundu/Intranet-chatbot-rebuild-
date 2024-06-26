import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <h1>This is a protected route.</h1>
      <br />
      You will only see this if you are authenticated.
    </div>
  );
}