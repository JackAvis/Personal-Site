import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./Navbar.css"
import { Stack, Box, Flex, Image, Icon, Link, LinkBox } from '@chakra-ui/react'
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
            color={color == "black" ? "#ffeadc" : color}
            bgColor={color == "grey" ? "#ffeadc" : color}
            borderColor={color == "grey" ? "#ffeadc" : color}
            fontSize={[12, 20, 22]}
            className="menuOption"
            onClick={() => navigateToPage(text, page)}
        >
            {text}
        </Box>)
    }

    const createIcon = (icon: string, size: string, marginTop: number, link: string) => {
        return (
            <LinkBox>
                <Link href={link} isExternal>
                    <Image src={icon} justifyContent='left' marginTop={[17.4 + marginTop, 20 + marginTop, 26 + marginTop]}boxSize={size} alt="Logo" />
                </Link>
            </LinkBox>

        )
    }

    return (
        <Box className='navBox'>
            <nav className='navbar'>
                <Stack direction='row'>
                    <Flex className="menuContainer" justify='right'>
                        {optionSelected === 'Home' ? createOption("black", "Home", "/") : createOption("grey", "Home", "/")}
                        {optionSelected === 'Experience' ? createOption("black", "Experience", "experience") : createOption("grey", "Experience", "experience")}
                        {optionSelected === 'Contact' ? createOption("black", "Contact", "contact") : createOption("grey", "Contact", "contact")}
                    </Flex>
                    <Flex className="iconContainer" justify='right' w='100%'>
                        {createIcon(githubLogo, '3.45vh', 1, 'https://github.com/Jackson-Davis1')}
                        {createIcon(linkedinLogo, '3.1vh', 2.5, 'https://linkedin.com/in/jackson-davis-931a35175')}
                    </Flex>
                </Stack>
            </nav>
        </Box>
    )
};

export default Navbar;
