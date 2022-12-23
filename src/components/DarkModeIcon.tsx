import { useState } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Center } from '@chakra-ui/react'


function DarkModeIcon() {
    const [isDarkMode, setDarkMode] = useState(true);
    let secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');
    function icon() {
        if (isDarkMode) {
            return (<SunIcon boxSize={8} className="SunIcon" color={secondaryColor} onClick={onButtonClick} />);
        }
        else {
            return (<MoonIcon boxSize={8} className="MoonIcon" color={secondaryColor} onClick={onButtonClick} />);
        }
    }
    function onButtonClick() {
        if (isDarkMode) {
            document.documentElement.style.setProperty('--primary-color', '#fafafa');
            document.documentElement.style.setProperty('--secondary-color', 'black');
            setDarkMode(false);
        }
        else {
            document.documentElement.style.setProperty('--primary-color', '#1c1c21');
            document.documentElement.style.setProperty('--secondary-color', '#fafafa');
            setDarkMode(true);
        }
    }

    return (
        <Center>{icon()}</Center>
    )

}

export default DarkModeIcon;
