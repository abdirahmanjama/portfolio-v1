import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";

interface Props {
  name: string;
  icon: any;
  description: string;
}
export default function Skill({ name, icon, description }: Props) {
  return (
    <Box>
      <HStack
        p={4}
        bg={useColorModeValue("white", "gray.800")}
        rounded="xl"
        borderWidth="1px"
        w="100%"
        textAlign="left"
        align="start"
        spacing={4}
      >
        <Box p={2}>{icon}</Box>
        <VStack
          align="start"
          justify="flex-start"
          spacing={1}
          maxW="lg"
          h="100%"
        >
          <VStack spacing={0} align="start" flexGrow={1}>
            <Text fontWeight="bold" fontSize="md" noOfLines={2}>
              {name}
            </Text>
            <Text fontSize="sm" color={useColorModeValue("black", "inherit")}>
              {description}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
}
