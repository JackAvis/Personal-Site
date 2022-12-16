import { Flex, Box } from '@chakra-ui/react'
import InfiniteScroll from "react-infinite-scroller"
function Home() {
    return (
        <Box className="textContainer">
            <h1 className="sectionTitle"> Chatgpt writes about planes</h1>
            <p className="description">A plane is a vehicle that is designed for air travel. It is typically characterized by its long, narrow shape, its wings, and its ability to fly through the air at high speeds. Planes are used for a variety of purposes, including passenger and cargo transportation, military operations, and scientific research.

                There are many different types of planes, including commercial airliners, military jets, and small personal aircraft. Commercial airliners are used to transport passengers from one location to another, often over long distances. These planes are typically large and can carry hundreds of passengers at a time. Military jets, on the other hand, are designed for speed and maneuverability, and are used for a variety of purposes, including surveillance, air combat, and delivering bombs or missiles. Small personal aircraft, such as private planes and gliders, are used for leisure and recreational purposes.

                Planes are able to fly because of the principles of aerodynamics. When a plane moves through the air, the air flows over and under its wings. The shape of the wings is carefully designed to create lift, which is the force that allows the plane to rise into the air and stay airborne. The engines of a plane provide the power needed to overcome the resistance of the air and move the plane forward through the air at high speeds.
            </p>
        </Box>
    );
};

export default Home;