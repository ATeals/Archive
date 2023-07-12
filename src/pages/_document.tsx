import { Html, Head, Main, NextScript } from "next/document";

const ScriptTag = () => {
    const codeToRunOnClient = `(function() {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("darkMode") !== "false" ){
            localStorage.setItem("darkMode", "true");
        } 
        if (localStorage.getItem("darkMode") === "true") {
            document.querySelector("html").classList.toggle("dark");
        }
        if (localStorage.getItem("darkMode") === null) {
            localStorage.setItem("darkMode", false);
        }
       
  })()`;

    return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
                />
            </Head>
            <body className="dark:bg-darkBg dark:text-[darkText]">
                <Main />
                <NextScript />
            </body>
            <ScriptTag />
        </Html>
    );
}
