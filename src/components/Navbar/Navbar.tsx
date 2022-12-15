import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./Navbar.css"
import {Stack, Box, Flex, Image, Icon, Link, LinkBox } from '@chakra-ui/react'
import linkedinLogo from './Icons/Linkedin.png'
import githubLogo from './Icons/Github.png'
function Navbar() {
    const [optionSelected, setOptionSelected] = useState('Home');
    let navigate = useNavigate();
    const navigateToPage = (text: string, page: string) => {
        navigate(page);
        setOptionSelected(text);
    }
    const createOption = (color: string, text: string, page: string) => {
        return (<Box
            color={color}
            borderColor={color == "grey" ? "#FFF0E6" : color}
            className="menuOption"
            onClick={() => navigateToPage(text, page)}
        >
            {text}
        </Box>)
    }

    const createIcon = (icon: string, size:string, marginTop: string, link: string) => {
        return (
            <LinkBox>
                <Link href={link} isExternal>
                <Image src={icon} justifyContent='left' marginTop={marginTop} boxSize={size} alt="Logo" />
                </Link>
            </LinkBox>

        )
    }

    return (
        <nav className='navbar'>
            <Stack direction='row'>
                <Flex className="menuContainer" justify='right'>
                    {optionSelected === 'Home' ? createOption("black", "Home", "/") : createOption("grey", "Home", "/")}
                    {optionSelected === 'Contact' ? createOption("black", "Contact", "contact") : createOption("grey", "Contact", "contact")}
                </Flex>
                <Flex className="iconContainer" paddingLeft='50vw' w='100%'display='flex' flexDirection='row'>
                    {createIcon(githubLogo, '3.45vh', '2.4vh', 'https://github.com/Jackson-Davis1')}
                    {createIcon(linkedinLogo, '3.1vh', '2.6vh', 'https://linkedin.com/in/jackson-davis-931a35175')}                    
                </Flex>
            </Stack>
        </nav>
    )
};

export default Navbar;