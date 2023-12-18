import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export function CustomRedirect({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
    router.refresh();
  });

  return <></>;
}