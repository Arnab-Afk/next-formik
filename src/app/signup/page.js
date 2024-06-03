'use client';
import SignInForm from "../../components/signup";
import { useRouter } from 'next/router';
const HomePage = () => {
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignInForm />
    </div>
  );
};

export default HomePage;