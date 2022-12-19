import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import { useState, useEffect } from 'react';
import { Stack, MenuDivider, Menu, MenuItem, IconButton, MenuList, MenuButton, Box, Text, Center, Spacer, Flex, Image, Link, LinkBox } from '@chakra-ui/react'
import linkedinLogo from './Icons/Linkedin.png'
import { HamburgerIcon } from '@chakra-ui/icons'
import githubLogo from './Icons/Github.png'
import { primaryColor, secondaryColor, tertiaryColor } from '../../../src/Constants'
type NavBarProps = {
    optionSelected: string;
}
function Navbar(props: NavBarProps) {
    /* detect mobile usage */
    const [width, setWidth] = useState<number>(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 800;
    /* page navigation */
    let optionSelected = props.optionSelected;
    let navigate = useNavigate();
    function navigateToPage(text: string, page: string) {
        navigate(page);
    }

    const createOption = (color: string, text: string, page: string) => {
        return (<Box
            color={color === secondaryColor ? primaryColor : color}
            bgColor={color === tertiaryColor ? primaryColor : color}
            borderColor={color === tertiaryColor ? primaryColor : color}
            fontSize={[12, 20, 22]}
            className="menuOption"
            onClick={() => navigateToPage(text, page)}
        >
            <Text whiteSpace="nowrap">{text}</Text >
        </Box>)
    }

    const createMobileOption = (color: string, text: string, page: string) => {
        return (<MenuItem onClick={() => navigateToPage(text, page)}>
            <Box
                color={color === secondaryColor ? primaryColor : color}
                bgColor={color === tertiaryColor ? primaryColor : color}
                borderColor={color === tertiaryColor ? primaryColor : color}
                fontSize={[13, 16]}
                className="mobileMenuOption"
                onClick={() => navigateToPage(text, page)}
            >
                <Text whiteSpace="nowrap">{text}</Text >
            </Box>
        </MenuItem>)
    }

    const desktopMenu = () => {
        return (
            <Stack direction='row'>
                <Flex className="menuContainer" justify='right'>
                    <Center><Text className="name" whiteSpace='nowrap' onClick={() => navigateToPage("About Me", "/")}> Jackson Davis</Text></Center>
                    {optionSelected === 'Home' ? createOption(secondaryColor, "About Me", "/") : createOption(tertiaryColor, "About Me", "/")}
                    {optionSelected === 'Experience' ? createOption(secondaryColor, "Experience", "experience") : createOption(tertiaryColor, "Experience", "experience")}
                    {optionSelected === 'Contact' ? createOption(secondaryColor, "Contact", "contact") : createOption(tertiaryColor, "Contact", "contact")}
                </Flex>
                <Spacer />
                <Flex className="iconContainer" justify='right' w='100%' paddingTop='1vh'>
                    <Center>
                        {createIcon(githubLogo, '3.45vh', 'https://github.com/Jackson-Davis1')}
                        {createIcon(linkedinLogo, '3.1vh', 'https://linkedin.com/in/jackson-davis-931a35175')}
                    </Center>
                </Flex>
            </Stack>)
    }
    const mobileMenu = () => {
        return (<Flex className="mobileMenuContainer" justify='right'>
            <Center><Text className="nameMobile" whiteSpace='nowrap' onClick={() => navigateToPage("About Me", "/")}> Jackson Davis</Text></Center>
            <Spacer />
            <Menu>
                <MenuButton
                    as={IconButton}
                    margin='1vw'
                    boxSize='40px'
                    borderColor={secondaryColor}
                    marginRight='2vw'
                    borderWidth='0vw'
                    bgColor='#e3e3e3'
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    {optionSelected === 'Home' ? createMobileOption(secondaryColor, "About Me", "/") : createMobileOption(tertiaryColor, "About Me", "/")}
                    <MenuDivider />
                    {optionSelected === 'Experience' ? createMobileOption(secondaryColor, "Experience", "experience") : createMobileOption(tertiaryColor, "Experience", "experience")}
                    <MenuDivider />
                    {optionSelected === 'Contact' ? createMobileOption(secondaryColor, "Contact", "contact") : createMobileOption(tertiaryColor, "Contact", "contact")}
                    <MenuDivider />
                    <MenuItem>
                        <Flex className="iconContainer" justify='left' w='100%' paddingTop='1vh'>
                            <Center>
                                {createMobileIcon(githubLogo, '3.45vh', 'https://github.com/Jackson-Davis1')}
                                <Spacer />
                                {createMobileIcon(linkedinLogo, '3.1vh', 'https://linkedin.com/in/jackson-davis-931a35175')}
                            </Center>
                        </Flex>
                    </MenuItem>

                </MenuList>
            </Menu>
        </Flex>)

    }
    const createIcon = (icon: string, size: string, link: string) => {
        return (
            <LinkBox>
                <Link href={link} isExternal>
                    <Image className="icon" src={icon} justifyContent='left' boxSize={size} alt="Logo" />
                </Link>
            </LinkBox>

        )
    }
    const createMobileIcon = (icon: string, size: string, link: string) => {
        return (
            <LinkBox>
                <Link href={link} isExternal>
                    <Image className="mobileIcon" src={icon} justifyContent='left' boxSize={size} alt="Logo" />
                </Link>
            </LinkBox>

        )
    }

    return (
        <Box className='navBox'>
            <nav className='navbar'>
                {isMobile ? mobileMenu() : desktopMenu()}
            </nav>
        </Box>
    )
};

export default Navbar;
