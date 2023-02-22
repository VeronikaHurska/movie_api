import {useLayoutEffect, useState} from "react";

const useTheme = () => {
    const [theme, setTheme] = useState('light');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme',theme)
    })
    return {theme, setTheme}
}

export {
    useTheme
}