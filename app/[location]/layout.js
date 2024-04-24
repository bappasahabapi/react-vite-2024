import Image from "next/image";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Parallet routing",
    description: "One Place Dashboard for weather Information",
};

export default function RootLayout({
    children,
    weather,
    aqi,
    wind,
    temperature,
}) {
    return (
        <div className="wrapper">
            <div className="overlay"></div>
            <Image
                src="/background.png"
                className="bg-img opacity-0.2"
                width={700}
                height={1200}
                alt="background image"
            />
            <main className="!z-50 w-full">
                <div className="container">
                    <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20 text-slate-50">
                        {children}
                        {weather}
                        {aqi}
                        {wind}
                        {temperature}
                    </div>
                </div>
            </main>
        </div>
    );
}
