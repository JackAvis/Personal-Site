import { Center, Box, Image } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { primaryColor, secondaryColor, tertiaryColor } from '../../../src/Constants'
import pfp from "./defaultpfp.jpg"

type HomeProps = {
    setOption: Function;
}

function Home(props: HomeProps) {
    props.setOption("Home");
    let navigate = useNavigate();
    function navigateToPage(text: string, page: string) {
        navigate(page);
        props.setOption("Experience");
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
            <ChevronRightIcon />
        </Box>)
    }
    return (
        <div>
            <Box className="textContainer">
                <Center><h1 className="pfpTitle">About Me</h1></Center>
                <Center>
                    <Box className="pfpContainer">
                        <Image boxSize='40vh' src={pfp} className="pfp"></Image>
                    </Box>
                </Center>
                <Center>
                    <h1 className="pfpTitle"> Introduction thing</h1>
                </Center>
                <Center>
                    <p className="pfpDescription">A plplane moves through the air, the air flows over and under its wings. The shape of the wings is carefully designed to create lift, which is the force that allows the plane to rise into the air and stay airborne. The engines of a plane provide the power needed to overcome the resistance of the air and move the plane forward through the air at high speeds.</p>

                </Center>
                <Center>{createOption(secondaryColor, "See Experience", "experience")}
                </Center></Box>
            <Box className="endPage" />
        </div>
    );
};

export default Home;