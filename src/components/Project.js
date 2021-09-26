import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

function setTagColour(tag) {
  switch (tag) {
    case "react":
      return "cyan.100";
    case "java":
      return "red.100";
    case "spring boot":
      return "green.100";
    case "aws":
      return "yellow.100";
    case "javascript":
      return "white.900";
    case "firebase":
      return "orange.100";
  }
}

function setBgColour(tag) {
  switch (tag) {
    case "react":
      return "cyan.700";
    case "java":
      return "red.700";
    case "springboot":
      return "green.700";
    case "aws":
      return "yellow.500";
    case "javascript":
      return "yellow.400";
    case "firebase":
      return "orange.500";
  }
}

function Project({ title, desc, tech, colorMode, image_url }) {
  const [isNotMobile] = useMediaQuery("(min-width:760px)");

  return (
    <Stack marginBottom={isNotMobile && 5}>
      <Heading
        as="h4"
        size="md"
        color={useColorModeValue("grey.100, grey.700")}
      ></Heading>
      <Grid
        templateColumns={isNotMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
        //gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={2}
        p={5}
        borderWidth="1px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={useColorModeValue("white")}
        rounded="md"
        height={isNotMobile ? "230px" : ""}
        position={isNotMobile ? "relative" : ""}
      >
        {!isNotMobile && (
          <Text
            as="span"
            fontWeight="bold"
            fontSize="md"
            mb="0"
          >
            {title}
          </Text>
        )}

        {isNotMobile && (
          <Flex w="100%" h="100%" alignItems="center" mb={!isNotMobile && "0"}>
            <Image
              rounded="md"
              src={image_url}
              fallback={<Skeleton />}
              mb={!isNotMobile && "0"}
            />
          </Flex>
        )}

        <Box w="100%">
          <Stack pl={[0, 4, 4, 4]}>
            {isNotMobile && (
              <Text
                as="span"
                fontWeight="300px"
                fontSize="md"
                fontWeight="bold"
              >
                {title}
              </Text>
            )}
            {!isNotMobile && (
              <Flex
                w="100%"
                h="100%"
                alignItems="center"
                mb={!isNotMobile && "0"}
              >
                <Image
                  rounded="md"
                  src={image_url}
                  fallback={<Skeleton />}
                  mb={!isNotMobile && "0"}
                />
              </Flex>
            )}
            <Text
              fontSize="sm"
              color={useColorModeValue("black")}
              lineHeight="short"
              borderColor={useColorModeValue("gray.700", "gray.700")}
              mb={!isNotMobile && "0"}
            >
              {desc}
            </Text>
            <Stack isInline>
              {tech.split(",").map((tag) => (
                <Tag
                  size="sm"
                  padding="0 3px"
                  key={tag}
                  color="#4299E1"
                  fontWeight="bold"
                  color={setTagColour(tag.toLowerCase())}
                  bgColor={setBgColour(tag.toLowerCase())}
                >
                  {tag}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

export default Project;
