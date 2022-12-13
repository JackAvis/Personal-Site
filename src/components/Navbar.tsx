  import { useNavigate } from "react-router-dom";
  import { Button, Stack } from '@chakra-ui/react'
function Navbar() {
    let navigate = useNavigate(); 
    const navigateContact = () =>{ 
        navigate('contact');
    }
    const navigateHome = () =>{
        navigate('/');
    }
    return (
        <nav className='navbar'>
            <div className="links">
                <Stack direction='row' spacing='20vw' align='center'>
                    <Button onClick ={navigateHome} colorScheme='teal' margin='.3vw'>Home</Button>
                    <Button onClick ={navigateContact} colorScheme='teal'>Contact</Button>
                </Stack>
            </div>
        </nav>
    )

  
};

export default Navbar;