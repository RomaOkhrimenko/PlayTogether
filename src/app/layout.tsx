import '@/assets/styles/index.scss';
import { Providers } from './provider';
import StyledComponentsRegistry from '@/lib/styled-component/registry';
import { ReactNode } from 'react';

export const metadata = {
  title: 'PlayTogether',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Providers>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </Providers>
        </main>
        <div id="portal"></div>
      </body>
    </html>
  );
}
