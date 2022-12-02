import { Container, Text } from "./style"
import {View} from "react-native"

import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Entypo from '@expo/vector-icons/Entypo'

export default function Option({options}){
    function IconSplit(props){
        const a = {
            "AntDesign" : ()=> {return<AntDesign name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "Ionicons" : ()=> {return<Ionicons name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "Feather" : ()=> {return<Feather name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "MaterialCommunityIcons" : ()=> {return<MaterialCommunityIcons name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "FontAwesome5" : ()=>{return<FontAwesome5 name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "Entypo" : ()=>{return(<Entypo name={props.name} size={20} style={{marginHorizontal: 20}} />)}
        } 
        return a[props.type]();
}
    return(
        <>
            {
                options.items.map((item, key)=>{
                        return(
                            <Container key={key}>
                            <View style={{flexDirection: "row"}}>
                                <IconSplit name={item.nameIcon} type={item.type}></IconSplit>
                                <Text>{item.name}</Text>
                            </View>
                                <AntDesign name="right" size={20} color="gray" style={{marginRight: 20,}}></AntDesign> 
                            </Container>)
                })
            }
        </>
    )
}