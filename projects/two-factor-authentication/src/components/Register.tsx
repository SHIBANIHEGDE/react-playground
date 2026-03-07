import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'

const Register = () => {
  return (
    <Box
      w={{ base: "90%", md: "400px" }}
      mt={10}
      p={8}
      borderRadius="lg"
      boxShadow="5px 10px 50px 2px #0003"
      color="white"
      border={"1px"}
      borderColor={"gray.800"}
    >
      {" "}
      <Heading mb={6} size={"lg"} textAlign={"center"}>
        Register
      </Heading>
      </Box>
  )
}

export default Register