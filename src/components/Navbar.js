import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

function Navbar({ redirect, color, text }) {
  return (
    <div>
      <Box
        w={"100%"}
        backgroundColor={color}
        display="flex"
        justifyContent="start"
        margin="auto"
        h={["3em", "6em"]}
        color="#fff"
      >
        <Box
          w={["60%", "50%"]}
          display="flex"
          justifyContent="space-between"
          margin={["auto 30px", "auto 50px"]}
        >
          <Link to={redirect}>
            <ArrowLeftIcon
              margin="auto"

              h={["1em", "3em"]}
              fontSize={["xl", "2xl"]}
            ></ArrowLeftIcon>
          </Link>

          <Text
            fontSize={["15px", "3xl"]}

          >{text}</Text>

        </Box>

      </Box>
    </div>
  )
}

export default Navbar