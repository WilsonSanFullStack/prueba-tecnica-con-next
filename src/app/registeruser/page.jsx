import RegisterUser from "@/Components/RegisterUser";
import { auth, currentUser } from "@clerk/nextjs";
 
export default async function Page() {
 
  // Get the userId from auth() -- if null, the user is not logged in
  const { userId } = auth();
 
  if (userId) {
    // Query DB for user specific information or display assets only to logged in users 
  }
 
  // Get the User object when you need access to the user's information
  const user = await currentUser()
  const userClar = {
    id: user.id,
    image: user.imageUrl,
    email: user.emailAddresses?.[0]?.emailAddress,
  };
  // Use `user` to render user details or create UI elements
  return (
    <div>
      <RegisterUser userClar={userClar}/>
    </div>
  )
}