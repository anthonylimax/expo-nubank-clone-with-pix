import React from "react";
import {Header,Container, TextInit, Icon, SecondDiv} from './style'
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useState } from "react";
import { TitleSettings, Div } from "../Bank/style";
import Cash from "../Cash";


function Main({props}){
    const [name, setName] = useState(props.route.params.name)
    const [clicked, setClicked] = useState("-off")
    const [veirfy, setVerify] = useState(false)
    return(
        <>
        <Header>
            <Container>
                <Icon >
                    <Ionicons name="person-outline" size={25} color="#d7b6ee"onPress={()=>{
                        props.navigation.navigate('Profile', props.route)
                    }}/>
                </Icon>
                <SecondDiv>
                    <Feather name={`eye${clicked}`} size={25} color="#fff" onPress={()=>{
                        setVerify(!veirfy)
                        if(veirfy){
                            setClicked("-off")
                            
                        }else{
                            setClicked("")
                        }
                    }}></Feather>
                    <AntDesign name="questioncircleo" size={25} color="#fff"></AntDesign>
                    <AntDesign name="mail" size={25} color="#fff"></AntDesign>
                </SecondDiv>
            </Container>
            <TextInit>
                Olá, {name}
            </TextInit>
        </Header>
            
            <Div>
                <TitleSettings>Conta</TitleSettings>
                <AntDesign name="right" size={20} color="gray"></AntDesign>
            </Div>
        <Cash value={veirfy} cash={props.route.params.cash}/>
        </>
    )
}


export default Main; 