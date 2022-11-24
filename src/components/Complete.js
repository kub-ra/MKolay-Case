import { React, useEffect, useState } from 'react'
import {
  Box, Image, Text,

  T
} from '@chakra-ui/react'
import app from "../fireBase.js";
import { getDatabase, onValue, ref } from "firebase/database";
import Navbar from './Navbar.js';
import { Spinner } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';






function Complete() {
  const [products, setProducts] = useState();
  const [looding, setLooding] = useState(true);

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, 'products');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setProducts(data);
      setLooding(false)
    });

  }, [])

  const timer = (date) => {
    let endDate = new Date(date).getTime();
    const now = new Date().getTime();
    var distance = endDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    days = days < 10 ? `0${days}` : days;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${days} Gün ${hours} Saat ${minutes} Dakika ${seconds} Saniye`;

  }
  return (
    <div>
      <Navbar redirect="/alisveris" color="#b83163" text="Alışveriş Geçmişim"></Navbar>
      {looding ? <Spinner /> :
        <Table>
          <Thead>
            <Tr>
              <Th>Ürün İsmi </Th>
              <Th>Tarih</Th>
              <Th>Fiyat</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products &&
              products.map((item) =>
                <Tr key={item.id}>
                  <Td

                  >{item.title}</Td>
                  <Td>{timer(item.date)}</Td>
                  <Td isNumeric>{item.price} TL</Td>
                </Tr>
              )}
          </Tbody>
        </Table>}


    </div>
  )
}

export default Complete