import './globals.css';
import Header from '@/components/Header'; // Import the Header component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Place the Header here */}
        {children}
      </body>
    </html>
  );
}