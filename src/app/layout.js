import { Providers } from "./providers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "react-hot-toast";
// fonts: font-['JetBrains_Mono',monospace]
// import "../themes/ocean.css"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IdeaVault",
  description: "A secure platform for sharing and collaborating on innovative ideas, protected by advanced encryption and access controls.",
};

// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       data-theme="dark"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col bg-[#00170f]">
//         <Navbar></Navbar>
//         <div className="w-full md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
//           {children}
//         </div>
//         <Footer></Footer>
//         <Toaster position="top-center" />
//       </body>
//     </html>
//   );
// }




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#00170f] dark:text-[#b0f0d6] transition-colors duration-300">
        <Providers>
          <Navbar></Navbar>
          <div className="w-full md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <Footer></Footer>
          <Toaster position="top-center" /> 
        </Providers>
      </body>
    </html>
  );
}












// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       suppressHydrationWarning
//       // data-theme="dark"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="bg-background text-foreground">
        
//           <Navbar></Navbar>
//           <Providers>
//             {children}
//           </Providers>
      
//         <Footer></Footer>
//         <Toaster position="top-right" /> 
//       </body>
//     </html>
//   );
// }

// export default function RootLayout({ children }) {
  
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className="min-h-full flex flex-col bg-[#00170f]">
//         <Navbar />
//         <div className="w-full md:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
//           <Providers >
//             {children}
//           </Providers>
//         </div>
//         <Toaster position="top-center" />
//       </body>
//       <Footer />
//     </html>
//   );
// }
