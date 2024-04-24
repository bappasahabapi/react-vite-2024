import { Inter,Roboto } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const roboto =Roboto({
    subsets: ["latin"],
    display:'swap',
    weight:'400'
   
});

export const metadata = {
    title: "Rendering",
    description: "Understanding Next.js Rendering process",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <body className={inter.className}>
                <Header className={roboto.className} />
                {children}
            </body>
        </html>
    );
}
