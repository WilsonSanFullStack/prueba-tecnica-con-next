import { auth, currentUser } from "@clerk/nextjs";
import Image from "next/image";

async function loadPOsts() {
  try {
    const { userIds } = auth();
  if (userIds) {

  }
  const user = await currentUser();
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/user/${user.id}`);
  const userId = await res.json();
  userId.imageUrl = user?.imageUrl;
  return userId;
  } catch (error) {
    
  }
  
}

async function Profile() {
  // Use `user` to render user details or create UI elements
  const userId = await loadPOsts();
  return (
    <div className="Container">
      {userId && (
        <section
          key={userId.id}
          className="m-2 grid w-fit border-2 border-slate-950 dark:border-slate-300 p-2"
        >
          <section className="flex justify-center items-center p-2">
            <Image
              src={userId.imageUrl}
              alt={userId.firstName}
              width={800}
              height={800}
              className="w-36 rounded-full"
            />
          </section>
          <section className="grid grid-cols-2">
            <h1 className="text-right mx-2">Name:</h1>
            <h2 className=" text-left">
              {userId.firstName} {userId.lastName}{" "}
            </h2>
          </section>
          <section className=" grid grid-cols-2">
            <h1 className="text-right mx-2">Email:</h1>{" "}
            <h2 className=" text-left">{userId.email} </h2>
          </section>
          <section className="grid grid-cols-2">
            <h1 className="text-right mx-2">Number Phone:</h1>
            <h2 className="text-left">{userId.phone} </h2>
          </section>
          <section className="text-center font-bold">
            <h1>{userId.admin ? "You are admin" : "You are not admin"}</h1>
          </section>
        </section>
      )}
    </div>
  );
}

export default Profile
