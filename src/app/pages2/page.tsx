'use client';
import * as React from 'react';
import '../layout'
import useFetch from "react-fetch-hook"
import { Avatar } from '@mui/material';
import Stack from '@mui/material/Stack';
import { RingLoader } from 'react-spinners';

export default function () {
  //API'den veri çekme işlemi
  const {data} = useFetch("https://theofficeapi.dev/api/character/62");
  //Veriler çekilene kadar bekleme
  if (!data) {
    return(
      <div key='uniqueKey' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <RingLoader color="#17c0f2" />
      </div>
    );    
  }
  //Çekilecek kategorileri tanımlama
  const {name}: any = data;
  const {job}:any = data;
  const {gender}:any = data;
  const {marital}:any = data;
  const {workplace}:any = data;
  const {firstAppearance}:any = data;
  const {lastAppearance}:any = data;
  const {actor}:any = data;
  return (
    //Çekilen verileri yazdırma ve karakterin avatarını ekleme
    <div >
      <body style={{ backgroundColor: "#17c0f2" }}>
        <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
        <Avatar alt="Pam Beesley" src="images/office3.jpg" sx={{ width: 200, height: 200}} 
        />
        </div>
        <div>
        <Stack spacing={2}>     
        <b><h1 style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>Bilgiler</h1></b>        
        <p style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><b>İsim: </b>{name}</p>
        <p style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><b>Cinsiyet: </b>{gender}</p>
        <p style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><b>Ugras: </b>{job}</p>
        <p style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><b>İliski: </b>Jim Halpert {marital}</p>
        <p style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><b>İsyeri: </b>{workplace}</p>
        <p style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><b>İlk Bölümü: </b>{firstAppearance}</p>
        <p style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><b>Son Bölümü: </b>{lastAppearance}</p>
        <p style={{ fontFamily: 'American Typewriter Medium', alignItems: 'center', justifyContent: 'center', display: 'flex' }}><b>Oyuncu: </b>{actor}</p>
        </Stack>
        </div>
      </body>
    </div>
  )
}
