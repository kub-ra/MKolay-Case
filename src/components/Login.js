import { Box, Image, Text, Card, CardBody, Stack, Heading, Divider } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import images from '../images/market.jpg'
import images2 from '../images/manav.jpg'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const linkStyle = {
  margin: "10px auto",

};

function Login() {
  return (
    <div>
      <Navbar redirect="/" color="#ff7f00" text="MKOLAY"></Navbar>
      <Box
        display={["block", "block", "flex", "flex"]}
        justifyContent="center"
        padding={2}
        backgroundColor={'gray.200'}
        height={'100vh'}
        margin="auto" >
        <Link
          style={linkStyle}
          to="/kantin">
          <Card
            w={["20em", "23em", "25em", "27em"]}
            h={{
              sm: '33em',
              md: '33em',
              lg: '36em',
              xl: '38em'
            }}
            background="#65bab0"
            color="white"
            margin="10px auto"
          >
            <CardBody
              padding={0}
            >
              <Image
                h={"70%"}
                w={"100%"}
                src={images}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'
                  display="flex"
                  justifyContent="space-between"
                  padding={3}
                >
                  <Text>MKOLAY</Text>
                  <ArrowForwardIcon
                    fontSize={'30px'}
                    background={'#8080803d'}
                    width="50px"
                    borderRadius={'8px'}
                  />
                </Heading>
                <Text
                  textAlign={'start'}
                  padding={2}
                >
                  MKOLAY mağaza ile ürünlerinizi kolayca okutun, JetKasa ile ödeyin.
                </Text>

              </Stack>
            </CardBody>
            <Divider />
          </Card>
        </Link>
        <Link
          style={linkStyle}
          to="/kantin">
          <Card
            w={["20em", "23em", "25em", "27em"]}
            h={{
              sm: '30em',
              md: '34em',
              lg: '36em',
              xl: '38em'
            }}
            background="#b83163"
            color="white"
            margin="10px auto"

          >
            <CardBody
              padding={0}
            >
              <Image
                h={'70%'}
                w={"100%"}
                src={images2}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'
                  display="flex"
                  justifyContent="space-between"
                  padding={3}
                >
                  <Text>MKOLAY-Kantin</Text>
                  <ArrowForwardIcon
                    fontSize={'30px'}
                    background={'#8080803d'}
                    width="50px"
                    borderRadius={'8px'}
                  />
                </Heading>
                <Text
                  textAlign={'start'}
                  padding={2}
                >
                  MKOLAY Kantin ile ürünlerinizi kolayca okutun, telefonunuzdan  ödeyin.
                </Text>

              </Stack>
            </CardBody>
            <Divider />

          </Card>
        </Link>



      </Box>
    </div>
  )
}

export default Login