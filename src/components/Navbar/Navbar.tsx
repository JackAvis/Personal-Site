import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import { Stack, Box, Center, Spacer, Flex, Image, Link, LinkBox } from '@chakra-ui/react'
import linkedinLogo from './Icons/Linkedin.png'
import githubLogo from './Icons/Github.png'
import {primaryColor, secondaryColor, tertiaryColor} from  '../../../src/Constants'
type NavBarProps = {
    optionSelected: string;
}
function Navbar(props: NavBarProps) {
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
            {text}
        </Box>)
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
    return (
        <Box className='navBox'>
            <nav className='navbar'>
                <Stack direction='row'>
                    <Flex className="menuContainer" justify='right'>
                        {optionSelected === 'Home' ? createOption(secondaryColor, "Home", "/") : createOption(tertiaryColor, "Home", "/")}
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
                </Stack>
            </nav>
        </Box>
    )
};

export default Navbar;
