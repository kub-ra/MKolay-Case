import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import { Spinner } from '@chakra-ui/react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { React, useEffect, useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import Timer from './Timer.js';

import app from '../fireBase.js';
import Navbar from './Navbar.js';



function Complete() {
  const [products, setProducts] = useState();

  const [looding, setLooding] = useState(true);

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, 'products');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setProducts(data);
      setLooding(false);
    });
  }, []);

  return (
    <div>
      <Navbar
        redirect="/alisveris"
        color="#b83163"
        text="Alışveriş Geçmişim"
      ></Navbar>
      {looding ? (
        <Spinner />
      ) : (
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
              products.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.title}</Td>
                    <Timer end_date={item.date}></Timer>
                    <Td isNumeric>{item.price} TL</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      )}
    </div>
  );
}

export default Complete;