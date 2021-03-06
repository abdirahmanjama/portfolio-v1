import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Grid, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { FaAws, FaJava, FaReact } from "react-icons/fa";
import Skill from "../components/Skill";

export default function Skills() {
  const [isNotMobile] = useMediaQuery("(min-width:760px)");
  return (
    <Stack
      as="main"
      color={useColorModeValue("white, black")}
      mb="100"

      //   backgroundColor={`mode.${colorMode}.background`}
    >
      <Text fontSize={"3xl"} mb="5" fontWeight="extrabold">
        Skills
      </Text>
      <Grid
        templateColumns={isNotMobile ? "repeat(3,1fr)" : "repeat(1, 1fr)"}
        gap={2}
        w="100%"
        mb={10}
      >
        <Skill
          icon={<Icon color="cyan.300" p="4" as={FaReact} w="16" h="16" />}
          name="Front-end"
          description="React, JavaScript, UI/UX, HTML/CSS, Chakra UI, Material UI"
        />
        <Skill
          icon={
            <Icon
              className="fa-spin"
              color="red"
              p="4"
              as={FaJava}
              w="16"
              h="16"
            />
          }
          name="Back-end"
          description="Java, Spring Boot, Python, Flask, Elastic, Mongo, Microservices"
        />
        <Skill
          icon={
            <Icon
              className="fa-spin"
              color="yellow.300"
              p="4"
              as={FaAws}
              w="16"
              h="16"
            />
          }
          name="Infrastructure"
          description="Linux, AWS, Kubernetes, Helm, CI/CD, DevOps"
        />
      </Grid>
    </Stack>
  );
}
