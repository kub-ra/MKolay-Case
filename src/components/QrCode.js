import { useEffect, useState } from 'react'
import { Box, Image, Link, Text } from '@chakra-ui/react'
import { CalendarIcon, PlusSquareIcon } from '@chakra-ui/icons'
import QRCode from 'react-qr-code';
import app from "../fireBase.js";
import { getDatabase, onValue, ref, set, } from "firebase/database";
import { nanoid } from 'nanoid'
import { useNavigate } from "react-router-dom"



const linkStyle = {
  border: "2px solid gray",
  padding: "12px",
  fontWeight: "bold",
  color: "gray",
  margin: "10px 30px"
}



function QrCode() {
  let id = nanoid();
  let navigate = useNavigate();
  const [value, setValue] = useState(id);
  const [statusVal, setStatusVal] = useState(101);
  const db = getDatabase(app);
  function writeData(status, id) {
    set(ref(db, 'qr/' + id), {
      status: status
    }).then(() => {
      const dbRef = ref(db, "qr")
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data[value]);
        console.log(value, "value")
        if (data[value].status === 1) {
          navigate('/alisveris')
        } else if (data[value].status === 101) {
          id = nanoid();
          setValue(id);
          writeData(1, value);

        }
      })
    })
  }

  useEffect(() => {
    writeData(statusVal, value);

  }, [])


  return (
    <div>
      <Box
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
        margin="auto"
      >
        <Text
          fontWeight={'bold'}
          fontSize={{
            sm: "xl",
            xl: "4xl"

          }}

        >Hoş geldiniz.</Text>
        <Text padding={2}>MKOLAY kantin'e giriş yapabilmek için QR Kodu turnikeye okutman gerekiyor.</Text>
        <Box
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
          margin="auto"
          display="flex"
          justifyContent="center"
        >



          <QRCode
            title="GeeksForGeeks"
            value={value}

            size={256}
          />
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
        >
          <Link style={linkStyle}>
            <CalendarIcon color={'#b83163'} />
            <Text>Alışveriş Geçmişim</Text>
          </Link>
          <Link style={linkStyle}>
            <PlusSquareIcon color={'#b83163'} />
            <Text>Yeni Kart Ekle</Text>
          </Link>
        </Box>
      </Box>
    </div>
  )
}

export default QrCode