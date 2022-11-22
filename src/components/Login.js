import { Box, Image, Text, Card, CardBody, Stack, Heading, Divider } from '@chakra-ui/react'
import React from 'react'
import { ArrowLeftIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import images from '../images/market.jpg'
import images2 from '../images/manav.jpg'

function Login() {
  return (
    <div>
      <Box
        backgroundColor="#ff7f00"
        display="flex"
        justifyContent="center"
        margin="auto"
        h="20"
        color="#fff"
        position="relative"
      >
        <ArrowLeftIcon
          position="absolute"
          left="5%"
          margin="auto"
          width="15%"
          top={{
            xl: "20%",
            lg: "30%",
            md: "20%",
            sm: "40%"

          }}
          height="1em"
          fontSize={{
            xl: "40px",
            lg: "20px",
            md: "18px",
            sm: "15px"

          }}
        ></ArrowLeftIcon>
        <Text
          position="absolute"
          fontSize={{
            xl: "40px",
            lg: "30px",
            md: "24px",
            sm: "20px"
          }}
          top={{
            xl: "10%",
            lg: "20%",
            sm: "30%"

          }}

        >MKOLAY</Text>
      </Box>
      <Box

        display={{
          sm: 'block',
          md: 'block',
          lg: 'flex',
          xl: 'flex'
        }}
        justifyContent="center"
        padding={2}
        backgroundColor={'gray.200'}
        height={'100vh'}
        margin="auto"

      >
        <Card
          maxW={{
            sm: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl'
          }}
          maxH={{
            sm: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl'
          }}
          background="#65bab0"
          color="white"
          margin="20px auto"
        >
          <CardBody
            padding={0}
          >
            <Image
              h={{
                sm: "10em",

                xl: "20em"
              }}
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
        <Card
          maxW={{
            sm: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl'
          }}
          maxH={{
            sm: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl'
          }}
          background="#b83163"
          color="white"
          margin="20px auto"
        >
          <CardBody
            padding={0}
          >
            <Image
              h={{
                sm: "10em",

                xl: "20em"
              }}
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


      </Box>
    </div>
  )
}

export default Login