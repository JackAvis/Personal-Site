import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./Navbar.css"
import { Box, Flex } from '@chakra-ui/react'
import { stringify } from "querystring";
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
            className="menuOption"
            onClick={() => navigateToPage(text, page)}
        >
            {text}
        </Box>)
    }

    return (
        <nav className='navbar'>
            <Flex>
                <Box className="NameBox"> <Box className="Name">Jackson Davis</Box></Box>
                {optionSelected === 'Home' ? createOption("white", "Home", "/") : createOption("grey", "Home", "/")}
                {optionSelected === 'Contact' ? createOption("white", "Contact", "contact") : createOption("grey", "Contact", "contact")}
            </Flex>
        </nav>
    )
};

export default Navbar;
