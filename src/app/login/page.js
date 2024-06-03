'use client';
import SignInForm from "../components/signup";
import { useRouter } from "next/router";
const HomePage = () => {
  const router=useRouter();
  return (
    <SignInForm  router={router}/>
  );
};

export default HomePage;