
import { ViewPort, Image, Div, Button, Text, Main, Input} from "./style"
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect} from "react"
import axios from "axios"



const ScreenLock = () =>{
    const navigation = useNavigation();
    const [verify, setVerify] = useState(true)
    const [error, setError] = useState("")
    
    const [email, setEmail] = useState("")
    
    const [password, setPassword] = useState("")
    if(verify){
        return(
        <ViewPort>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0ek_RA7-0Jjstpp5ZR7dZgkdr3_22Rdb1LV0PdJUzQ&s'}}/>
            <Div>
                <Button onPress={()=>{
                    setVerify(false)
                    }}>
                    <Text>
                        Entrar na conta Nubank
                    </Text>
                </Button>
            </Div>
        </ViewPort>
    )
    }
    else{
        return(
            <ViewPort>
                <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0ek_RA7-0Jjstpp5ZR7dZgkdr3_22Rdb1LV0PdJUzQ&s'}}/>
                <Main>
                    <Input onChangeText = {(event)=>{
                        setEmail(event)
                    }} placeholder="Email">
                    </Input>
                    <Input onChangeText = {(event)=>{
                        setPassword(event)
                    }}  secureTextEntry={true} placeholder="Senha">
                    </Input>
                    <Button size={250} onPress={()=>{
                        axios({
                            method: 'post',
                            url: 'http://192.168.0.105:3000/getvalues',
                            data: {
                              "email": email,
                              "password": password,
                            }
                          }).then(response => {if(response.data){
                                const a = response.data;
                                 navigation.navigate('Home', a)
                                 setError("")
                                }else{
                                    setError("Qué isso meu filho? Calma!")
                                }})
                            ;
                    }}>
                        <Text>Entrar no nubank</Text>
                    </Button>
                        {error != "" ? <Text error>{error}</Text> : <Text>{error}</Text>}
                </Main>
            </ViewPort>
        )

    }
    
}
export default ScreenLock