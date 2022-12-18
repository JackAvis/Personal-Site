import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import { Stack, Box, Flex, Image, Link, LinkBox } from '@chakra-ui/react'
import linkedinLogo from './Icons/Linkedin.png'
import githubLogo from './Icons/Github.png'
type NavBarProps = {
    setOption: Function;
    optionSelected: string;
}
function Navbar(props: NavBarProps) {
    let optionSelected = props.optionSelected;
    let setOptionSelected = props.setOption;
    let navigate = useNavigate();
    function navigateToPage(text: string, page: string) {
        navigate(page);
        setOptionSelected(text);
    }
    const createOption = (color: string, text: string, page: string) => {
        return (<Box
            color={color === "black" ? "#ffeadc" : color}
            bgColor={color === "grey" ? "#ffeadc" : color}
            borderColor={color === "grey" ? "#ffeadc" : color}
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
                    <Image className="icon" src={icon} justifyContent='left' marginTop={[17.4 + marginTop, 20 + marginTop, 26 + marginTop]}boxSize={size} alt="Logo" />
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
