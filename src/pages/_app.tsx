import Nav from "@/components/layout/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className="lg:flex">
                <Nav />
                <main className="w-full mb-[100px] lg:ml-[80px] flex flex-col items-center">
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}
