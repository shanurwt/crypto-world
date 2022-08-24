import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {TopCryptos, VolumeInc, VolumeDec} from './CryptoList'
import '../assets/css/Cards.css'

function Cards() {
  return (
    <div className="cards">
        <Card sx={{ minWidth: 400, minHeight: 450, maxWidth: 430, backgroundColor: "#252629" }} className='first'>
            <CardContent >
                <Typography sx={{ fontSize: 30, color:"aliceblue" }} align="center" color="text.secondary" gutterBottom>
                    Today's Top 5 Cryptos 
                </Typography>
                <TopCryptos/>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 400, minHeight: 450, maxWidth: 430, backgroundColor: "#252629" }} className='second'>
            <CardContent>
                <Typography sx={{ fontSize: 30, color:"aliceblue" }} align="center" color="text.secondary" gutterBottom>
                    Volume Gainers in 24Hrs
                </Typography>
                <VolumeInc/>
            </CardContent>
        </Card>
        <Card sx={{ minWidth: 400, minHeight: 450, maxWidth: 430, backgroundColor: "#252629" }} className='third'>
            <CardContent>
                <Typography sx={{ fontSize: 30, color:"aliceblue" }} align="center" color="text.secondary" gutterBottom>
                    Volume Losers in 24 Hrs
                </Typography>
                <VolumeDec/>
            </CardContent>
        </Card>
    </div>
  )
}

export default Cards