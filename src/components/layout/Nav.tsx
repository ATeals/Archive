import Link from "next/link";

export default () => {
    return (
        <nav className="w-full bg-white bottom-0 p-3 z-99 fixed  flex justify-around [&>*]:text-[gray]">
            <Link href="/">
                <i className="bi bi-house text-4xl "></i>
            </Link>
            <i className="bi bi-bookmarks text-3xl"></i>
            <i className="bi bi-pen text-3xl"></i>
            <i className="bi bi-link-45deg text-4xl "></i>
            <i className="bi bi-person text-4xl "></i>
        </nav>
    );
};
