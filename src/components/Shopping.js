import React from 'react'
import { Box, Image, Text, Card, CardBody, Stack, Heading, Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import images from '../images/market.jpg'
import Navbar from './Navbar'
const linkStyle = {
  justifyContent: "center",
  display: "flex",
  margin: "10px auto"
}
function Shopping() {
  return (
    <div>
      <Navbar redirect="/kantin" color="#b83163" text="MKOLAY"></Navbar>
      <Link
        style={linkStyle}

        to="/complete">
        <Card
          maxW={{
            sm: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl'
          }}
          maxH={{
            sm: 'xl',
            md: 'md',
            lg: 'lg',
            xl: 'xl'
          }}


        >
          <CardBody
            padding={0}
          >
            <Image
              h={{
                sm: "100em",

                xl: "40em"
              }}
              w={"100%"}
              src={images}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              position={'relative'}
            />
            <Box
              bottom={'1%'}
              color="white"
              position="absolute"
            >
              <Text
                textAlign={'center'}
                padding={2}
                margin={'auto'}


                fontWeight={'bold'}
              >
                İYİ ALIŞVERİŞLER DİLERİZ
              </Text>
              <Text
                textAlign={'center'}
                padding={2}
                color="white"
              >
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
              </Text>
            </Box>


          </CardBody>
          <Divider />

        </Card>
      </Link>
    </div>
  )
}

export default Shopping