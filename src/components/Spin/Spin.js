import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import CasinoIcon from '@material-ui/icons/Casino';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 700,
    },
    small: {
      width: 1,
      height: 1,
      marginLeft: 15,
    },

    spincolour: {

    }
    
  }));



function Spin() {

    const classes = useStyles();

    let [spinset, setSpinSet] = React.useState(false);
    let [winmessage, setWinMessage] = React.useState('no win sorry');





    let [dice1, setDice1] = React.useState(0);
    let [dice2, setDice2] = React.useState(0);
    let [dice3, setDice3] = React.useState(0);
    let [dice4, setDice4] = React.useState(0);
    let [dice5, setDice5] = React.useState(0);
    let [dice6, setDice6] = React.useState(0);
    let [dice7, setDice7] = React.useState(0);
    let [dice8, setDice8] = React.useState(0);
    let [dice9, setDice9] = React.useState(0);
    let [dice10, setDice10] = React.useState(0);
    let [dice11, setDice11] = React.useState(0);
    let [dice12, setDice12] = React.useState(0);
    let [dice13, setDice13] = React.useState(0);
    let [dice14, setDice14] = React.useState(0);
    let [dice15, setDice15] = React.useState(0);
    let [money, setMoney] = React.useState(500);
    
    let [dice1colour, setDice1Colour] = React.useState('#00000');
    let [dice2colour, setDice2Colour] = React.useState('#00000');
    let [dice3colour, setDice3Colour] = React.useState('#00000');
    let [dice4colour, setDice4Colour] = React.useState('#00000');
    let [dice5colour, setDice5Colour] = React.useState('#00000');
    let [dice6colour, setDice6Colour] = React.useState('#00000');
    let [dice7colour, setDice7Colour] = React.useState('#00000');
    let [dice8colour, setDice8Colour] = React.useState('#00000');
    let [dice9colour, setDice9Colour] = React.useState('#00000');
    let [dice10colour, setDice10Colour] = React.useState('#00000');
    let [dice11colour, setDice11Colour] = React.useState('#00000');
    let [dice12colour, setDice12Colour] = React.useState('#00000');
    let [dice13colour, setDice13Colour] = React.useState('#00000');
    let [dice14colour, setDice14Colour] = React.useState('#00000');
    let [dice15colour, setDice15Colour] = React.useState('#00000');

    const jackpotfunc = (color) => {
        if(dice1colour === color && dice2colour === color && dice3colour === color){
            setMoney(money+100)
            setWinMessage(' Minor Jackpot 100 coins!')
          
        }
        if(dice1colour === color && dice2colour === color && dice3colour === color && dice4colour === color){
            setMoney(money+2500)
            setWinMessage('Major Jackpot!! 2500 coins!')
          
        }

        if(dice1colour === color && dice2colour === color && dice3colour === color && dice4colour === color && dice5colour === color){
            setMoney(money+50000)
            setWinMessage('GRAND Jackpot!! 50000 coins!')
          
        }
        if(dice6colour === color && dice7colour === color && dice8colour === color){
            setMoney(money+100)
            setWinMessage(' Minor Jackpot 100 coins!')
          
        }
        if(dice6 === color && dice7colour === color && dice8colour === color && dice9colour === color){
            setMoney(money+2500)
            setWinMessage('Major Jackpot!! 2500 coins!')
          
        }

        if(dice6 === color && dice7colour === color && dice8colour === color && dice9colour === color && dice10colour === color){
            setMoney(money+50000)
            setWinMessage('GRAND Jackpot!! 50000 coins!')
          
        }
    }

    const changecolordice = (value1, value2, color) => {

        if (dice1 > value1 && dice1 < value2){
            setDice1Colour(color)
        }
        if (dice2 > value1 && dice2 < value2){
            setDice2Colour(color)
        }
        if (dice3 > value1 && dice3 < value2){
            setDice3Colour(color)
        }
        if (dice4 > value1 && dice4 < value2){
            setDice4Colour(color)
        }
        if (dice5 > value1 && dice5 < value2){
            setDice5Colour(color)
        }
        if (dice6 > value1 && dice6 < value2){
            setDice6Colour(color)
        }
        if (dice7 > value1 && dice7 < value2){
            setDice7Colour(color)
        }
        if (dice8 > value1 && dice8 < value2){
            setDice8Colour(color)
        }
        if (dice9 > value1 && dice9 < value2){
            setDice9Colour(color)
        }
        if (dice10 > value1 && dice10 < value2){
            setDice10Colour(color)
        }
        if (dice11 > value1 && dice11 < value2){
            setDice11Colour(color)
        }
        if (dice12 > value1 && dice12 < value2){
            setDice12Colour(color)
        }
        if (dice13 > value1 && dice13 < value2){
            setDice13Colour(color)
        }
        if (dice14 > value1 && dice14 < value2){
            setDice14Colour(color)
        }
        if (dice15 > value1 && dice15 < value2){
            setDice15Colour(color)
        }

    }


    const spinnumber = (event) => {

        setDice1(Math.floor(Math.random() * 501)  )
        setDice2(Math.floor(Math.random() * 501)  )
        setDice3(Math.floor(Math.random() * 501)  )
        setDice4(Math.floor(Math.random() * 501)  )
        setDice5(Math.floor(Math.random() * 501)  )
        setDice6(Math.floor(Math.random() * 501)  )
        setDice7(Math.floor(Math.random() * 501)  )
        setDice8(Math.floor(Math.random() * 501)  )
        setDice9(Math.floor(Math.random() * 501)  )
        setDice10(Math.floor(Math.random() * 501)  )
        setDice11(Math.floor(Math.random() * 501)  )
        setDice12(Math.floor(Math.random() * 501)  )
        setDice13(Math.floor(Math.random() * 501)  )
        setDice14(Math.floor(Math.random() * 501)  )
        setDice15(Math.floor(Math.random() * 501)  )
        
        setSpinSet(true)
       
        setTimeout(function(){
            //do what you need here
       
        setMoney(money-10)

        changecolordice(0,100,'#32E82A')
        changecolordice(100,200,'#FFD60A')
        changecolordice(200,300,'#FF453A')
        changecolordice(300,400,'#f25abf')
        changecolordice(400,500,'#0066FF')
        

        jackpotfunc('#32E82A')
        jackpotfunc('#FFD60A' )
        jackpotfunc('#FF453A')
        jackpotfunc('#f25abf')
        jackpotfunc('#0066FF')

       
        
        
        






    }, 0);
}
    


    return (
        <div>
            <Grid container spacing={3}  direction="row"  style={{margin: 100, border: '5,5,5,5'}}>
                <Grid item xs={12}>
            <IconButton onClick={spinnumber}>
                Spin
                <CasinoIcon/>
               
                
            </IconButton>
            
            <h2>${money}</h2>
            <h1>{winmessage}</h1>
            </Grid>
            <Grid item xs={2}>
            <Avatar style={{backgroundColor: dice2colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice6colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice11colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            </Grid>
            <Grid item xs={2}>
            <Avatar style={{backgroundColor: dice2colour, marginTop: 5, padding: 75,}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice7colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice12colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            </Grid>
            <Grid item xs={2}>
            <Avatar style={{backgroundColor: dice3colour, marginTop: 5, padding: 75,}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice8colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice13colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            </Grid>
            <Grid item xs={2}>
            <Avatar style={{backgroundColor: dice4colour, marginTop: 5, padding: 75,}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice9colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice14colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            </Grid>
            <Grid item xs={2}>
            <Avatar style={{backgroundColor: dice5colour, marginTop: 5, padding: 75,}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice10colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
            <Avatar style={{backgroundColor: dice15colour, marginTop: 5, padding: 75}}><Paper/></Avatar>
           
            </Grid>
           
           
            </Grid>
            

        </div>
    )
}

export default Spin
