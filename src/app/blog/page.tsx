import { Metadata } from 'next';
import Link from 'next/link';
import List from '@/components/List';
import withAuth from '@/hoc/withAuth';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Unable to fetch posts!');

  return response.json();
}

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <ul></ul>
    </>
  );
}

export default withAuth(Blog);
