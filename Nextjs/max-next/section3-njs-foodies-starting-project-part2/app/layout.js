import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

import MainHeader from '@/components/main-header/main-header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>


        {/* header */}
        <MainHeader/>


        {children}
      </body>
    </html>
  );
}
