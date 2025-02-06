'use client'; // Mark this as a client component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store';

export default function Home() {
  const router = useRouter();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  // const { user } = useAppSelector((state) => state.login);
  const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
  useEffect(() => {
    // Simulate user authentication check (e.g., reading from cookies or localStorage)
    // const token = localStorage.getItem('auth_token'); // or use cookies if available on the client side

    if (user) {
      router.push('/admin/dashboard');
    } else {
      router.push('/auth/login');
    }
  }, [router,user]);

  // Return nothing as the redirection happens in useEffect
  return null;
}
