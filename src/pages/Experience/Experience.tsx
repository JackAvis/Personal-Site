import { Box, Flex, Spacer, Center } from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import {primaryColor, secondaryColor, tertiaryColor} from  '../../../src/Constants'
type ExperienceProps = {
    setOption: Function;
}
function Experience(props: ExperienceProps) {
    props.setOption("Experience");
    const onButtonClick = () => {
        fetch('sample.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'sample.pdf';
                alink.click();
            })
        })
    }
    return (
        <div>
            <Box className="textContainer">
                <h1 className="sectionTitle"> Education </h1>
                <Box className="sectionContainer">
                    <h1 className="header">Education</h1>
                    <ul>
                        <li className="bulletPoint">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li className="bulletPoint">Lorem ipsum dolor sit amet, consectetur. </li>

                    </ul>
                </Box>
            </Box>
            <Box className="textContainer">
                <h1 className="sectionTitle"> Experience </h1>
                <Box className="sectionContainer">
                    <h1 className="header">Experience 1</h1>
                    <ul>
                        <li className="bulletPoint">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                    </ul>
                    <h1 className="header">Experience 2</h1>
                    <ul>
                        <li className="bulletPoint">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li className="bulletPoint">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
                        <li className="bulletPoint">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>

                    </ul>
                </Box>
                <Flex alignContent="left">
                    <Spacer />
                    <Box
                        color={primaryColor}
                        bgColor={secondaryColor}
                        borderColor={secondaryColor}
                        fontSize={[10, 13, 15]}
                        className="menuOption"
                        onClick={() => onButtonClick()}
                    >
                        Download Resume <DownloadIcon />
                    </Box>
                </Flex>
                <Box className="endPage" />
            </Box>
        </div>

    );
};

export default Experience;