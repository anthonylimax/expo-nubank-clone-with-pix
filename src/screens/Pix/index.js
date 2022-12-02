import { Title, Container, PixInput, BallonInput } from "./style";
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useFonts } from 'expo-font';
import { useState } from "react";

export default function Pix(props){
        console.log(props)
        const [verify, setVerify] = useState(false);
        const [value, setValue] = useState(false);
        const [fontsLoaded] = useFonts({
          'normal': require('../../../assets/fonts/GraphikBlack.otf'),
          'bold' : require('../../../assets/fonts/GraphikSemibold.otf'),
          'regular' : require('../../../assets/fonts/GraphikRegular.otf')
        });
        
    return(
        <Container style={{
            position: 'relative',
            top: '10%'
        }}>
        <Feather name="x"onPress={props.navigation.goBack} size={30}></Feather>
            <Container>

                <Title style= {{fontFamily: 'bold'}}>
                    Qual o valor da Transferência?
                </Title>
                <Title style={{fontFamily: 'regular', fontSize: 16,}}>Saldo disponivel em conta R$ {props.route.params.cash.toFixed(2)}</Title>
                <Container style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Title style={{fontSize: 50}}>R$ </Title>
                    <PixInput keyboardType="numeric" onChangeText = {
                        (event)=>{
                            if(+event > 0 && +event <= +props.route.params.cash){
                                setValue(event)
                                setVerify(true)
                            }
                            else{
                                setValue(event)
                                setVerify(false)
                            }
                        }
                    }></PixInput>
                </Container>
            </Container>
            {verify ? <BallonInput onPress={()=>{
                console.log(props.route.params)
                const data = {
                    valor: value,
                    key: props.route.params.chave
                }
                props.navigation.navigate('ChoosePix', data)
            }}><FontAwesome name="check" size={40} color='white'></FontAwesome></BallonInput> : undefined}
        </Container>
        
    )
}