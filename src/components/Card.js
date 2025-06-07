import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box backgroundColor="white" borderRadius="lg" overflow="hidden">
      <VStack>
        <Image src={imageSrc}></Image>
        <Box padding={4}>
          <Heading size="md" color="black">
            {title}
          </Heading>
          <Text fontSize={14} paddingTop={2} color="black">
            {description}
          </Text>
          <HStack paddingTop={4}>
            <Text fontSize={14} color="black">
              Learn More
            </Text>
            <FontAwesomeIcon fontSize={14} color="black" icon={faArrowRight} />
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
