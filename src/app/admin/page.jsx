import { Suspense } from "react";

import Container from "@/components/ui/Container";
import AdminUserForm from "@/components/adminUserForm";
import AdminUsers from "@/components/adminUsers";
import AdminPostForm from "@/components/adminPostForm";
import AdminPosts from "@/components/adminPosts";
import { auth } from "@/lib/auth";

const AdminPage = async () => {
  const session = await auth();

  return (
    <Container classes="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 mt-5 mb-10 gap-10">
      <AdminUserForm />

      <Suspense
        fallback={
          <p className="text-center text-sm text-zinc-500 italic uppercase flex items-center justify-center">
            Loading users...
          </p>
        }
      >
        <AdminUsers userId={session.user.id} />
      </Suspense>

      <AdminPostForm userId={session.user.id} />

      <Suspense
        fallback={
          <p className="text-center text-sm text-zinc-500 italic uppercase flex items-center justify-center">
            Loading posts...
          </p>
        }
      >
        <AdminPosts />
      </Suspense>
    </Container>
  );
};

export default AdminPage;
