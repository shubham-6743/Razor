import { Box, Heading, Text, VStack, interactivity } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        // <Box>
        //     <VStack h="100vh" justifyContent={"center"}>

        //         <Heading textTransform={"uppercase"}>Payment Successful</Heading>

        //         <Text>
        //             Reference.Id-{referenceNum}
        //         </Text>
        //         <Heading textDecorationLine={"blink"} textShadow={"revert-layer"} textColor={'red'}>Congrats!😍 Tour Booked</Heading>

        //     </VStack>
        // </Box>

        <Box>
  <VStack h="100vh" justifyContent="center" alignItems="center">

      <Heading textTransform="uppercase" fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center" mb={4} fontFamily="cursive">
      Payment Successful
    </Heading>

    <Text fontSize="lg" fontWeight="bold" color="gray.600" mb={6}>
      Reference ID: {referenceNum}
    </Text>

     <Heading textDecoration="underline blink" textShadow="0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black, 1px 1px 2px red" textColor="red" fontSize="5xl" textAlign="center" fontWeight="bold" fontStyle="italic" mb={8}>
      Congrats!😍 Tour Booked
    </Heading>

  </VStack>
</Box>

    )
}

export default PaymentSuccess