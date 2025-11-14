// app/layout.tsx
import '../styles/globals.css';
import localFont from 'next/font/local';
import { OrderProvider } from '@/context/OrderContext';

export const metadata = {
  title: '𝓒𝓱𝓲𝓬𝓴𝓮𝓷 𝓑𝓾𝓽𝓽',
  description: 'Menu ordering system',
};

// Define font variables
const chango = localFont({
  src: '/fonts/Chango-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-chango',
  display: 'swap',
});

const engagement = localFont({
  src: '/fonts/Pacifico-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-engagement',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* expose both variables on body */}
      <body className={`${chango.variable} ${engagement.variable} overflow-hidden`}>
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}
