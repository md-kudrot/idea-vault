"use client";
import { CiLight } from "react-icons/ci";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();

    return (
        <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <CiLight /> : <CiLight />}
        </button>
    );
}