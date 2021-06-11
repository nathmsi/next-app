import { useEffect, useContext } from 'react';

import { Context as ThemeContext } from '../contexts/themeContext';
import i18n from '../translation/i18n';
import detectBrowserLanguage from 'detect-browser-language';

// intisilization of the theme color, dark mode, temperature 

const useInitTheme = () => {

    const theme = useContext(ThemeContext);


    useEffect(
        () => {
            try {
                const dark = localStorage.getItem('dark'); // get from local storage if is dark mode
                const language = localStorage.getItem('language');
                try {

                    console.log(language);
                    if (language) {
                        theme.setLanguage(language);
                    } else {
                        console.log(language);
                        const detectLanguage = detectBrowserLanguage();
                        switch (detectLanguage.slice(0, 2)) {
                            case 'he':
                                theme.setLanguage('he');
                                break;
                            case 'fr':
                                theme.setLanguage('fr');
                                break;
                            default: {
                                theme.setLanguage('en');
                                break;
                            }
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
                console.log(`dark-mode = ${dark}`);
                switch (dark) {
                    case 'dark':
                        theme.toogleDarkMode(true);
                        break;
                    case 'not-dark':
                        theme.toogleDarkMode(false);
                        break;
                    default: {
                        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { // set dark mode if the current browser in mode dark
                            console.log('browser is dark mode');
                            theme.toogleDarkMode(true);
                        } else {
                            console.log('browser is light mode');
                            theme.toogleDarkMode(false);
                        }
                        break;
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        }, []); // one time

    useEffect(
        () => {
            i18n.changeLanguage(theme.state.language);
        }, [theme.state.language]);


    return {
        theme
    };
}

export default useInitTheme;