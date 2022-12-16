import { Box } from '@chakra-ui/react'
function Experience() {
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
            </Box>
        <Box className="endPage" />
        </div>

    );
};

export default Experience;