import { useEffect, useState } from "react";

const DarkButton = () => {
    const [isDark, setIsDark] = useState<Boolean | undefined>(undefined);
    const onClick = () => {
        setIsDark((i) => !i);
    };

    useEffect(() => {
        if (isDark !== undefined) {
            if (isDark) {
                document.querySelector("html")?.classList.add("dark");
                localStorage.setItem("isDark", "true");
            } else {
                document.querySelector("html")?.classList.remove("dark");
                localStorage.setItem("isDark", "false");
            }
        } else {
            if (localStorage.getItem("isDark") === "true") setIsDark(true);
            else if (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem("isDark") !== "false") setIsDark(true);
            else setIsDark(false);
        }
    }, [isDark]);
    return (
        <>
            {isDark !== undefined &&
                (isDark ? ( //
                    <i
                        className="bi bi-brightness-high text-3xl"
                        onClick={onClick}
                    ></i>
                ) : (
                    <i
                        className="bi bi-moon text-3xl"
                        onClick={onClick}
                    ></i>
                ))}
        </>
    );
};

export default DarkButton;
