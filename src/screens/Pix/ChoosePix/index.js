import { Title, Container, PixInput, BallonInput } from "./../style";
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font';
import { useState } from "react";
import axios from "axios";

export default function Pix(props){
        const [verify, setVerify] = useState(false);
        const [chave, setChave] = useState('');
        const [fontsLoaded] = useFonts({
          'normal': require('../../../../assets/fonts/GraphikBlack.otf'),
          'bold' : require('../../../../assets/fonts/GraphikSemibold.otf'),
          'regular' : require('../../../../assets/fonts/GraphikRegular.otf')
        });
        
    return(
        <Container style={{
            position: 'relative',
            top: '10%'
        }}>
        <Feather name="x" size={30} onPress={()=> props.navigation.goBack()}></Feather>
            <Container>

                <Title style= {{fontFamily: 'bold'}}>
                    Digite a chave pix
                </Title>
                <Container style={{flexDirection: 'row',justifyContent: 'flex-start'}}>
                    <Title style={{fontSize: 30}}>Chave:  </Title>
                    <PixInput keyboardType="numeric" onChangeText = {
                        (event)=>{
                            if(event != ''){
                                setVerify(true)
                                setChave(event)
                            }
                            else{
                                setVerify(false)
                                setChave(event)
                            }
                        }
                    } style ={{fontSize: 30}}></PixInput>
                </Container>
            </Container>
            {verify ? <BallonInput><FontAwesome name="check" size={40} color='white' onPress={()=>{
                axios({
                    method: 'put',
                    url: 'http://192.168.0.105:3000/sendPix',
                    data: {'Ikey': chave, 'valor': +props.route.params.valor, 'key': props.route.params.key}
                }).then(
                    res => {
                        props.navigation.navigate('Home', res.data)
                    }
                ).catch()
            }}></FontAwesome></BallonInput> : undefined}
            <></>
        </Container>
        
    )
}