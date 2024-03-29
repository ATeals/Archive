import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DarkButton from "./button/DarkButton";

export default () => {
    const { asPath } = useRouter();
    const [, slug] = asPath.split("/");
    const [on, setOn] = useState("");

    const home = (e: any) => {
        if (slug === "") {
            e.preventDefault();
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        setOn(slug);
    }, [asPath]);

    return (
        <nav className="w-full bg-bg dark:bg-darkBg bottom-0 p-3 z-99 fixed  flex justify-around items-center [&>*]:text-[gray] [&>*]:dark:text-darkText | lg:h-full lg:flex-col lg:justify-start lg:py-[50px] lg:[&>*]:my-5 lg:px-5 lg:w-auto">
            {on === "" || on === "thread" ? (
                <Link
                    href="/"
                    onClick={home}
                >
                    <i className="bi bi-house-fill text-3xl "></i>
                </Link>
            ) : (
                <Link href="/">
                    <i className="bi bi-house text-3xl "></i>
                </Link>
            )}
            {on === "tag" ? (
                <Link href="/tag">
                    <i className="bi bi-bookmarks-fill text-2xl"></i>
                </Link>
            ) : (
                <Link href="/tag">
                    <i className="bi bi-bookmarks text-2xl"></i>
                </Link>
            )}
            {on === "chat" ? (
                <Link href="/chat">
                    <i className="bi bi-pen-fill text-2xl"></i>
                </Link>
            ) : (
                <Link href="/chat">
                    <i className="bi bi-pen text-2xl"></i>
                </Link>
            )}

            {/* <i className="bi bi-link-45deg text-4xl "></i> */}

            {on === "profile" ? (
                <Link href="/profile">
                    <i className="bi bi-person-fill text-3xl "></i>
                </Link>
            ) : (
                <Link href="/profile">
                    <i className="bi bi-person text-3xl "></i>
                </Link>
            )}

            <DarkButton />
        </nav>
    );
};
