'use-client';
import { useRouter } from 'next/navigation';
import SignInForm from '../components/signup';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignInForm router={router} />
    </div>
  );
}
