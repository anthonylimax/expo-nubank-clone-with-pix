import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import Feather from '@expo/vector-icons/Feather'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import FontAwesome from '@expo/vector-icons/FontAwesome5'
import Entypo from '@expo/vector-icons/Entypo'
import {ButtonComponent, Text} from '../Bank/style'
import { Icon } from '../header/style'

export default function Button({items}){
    function IconSplit(props){
        const a = {
            "AntDesign" : ()=> {return<AntDesign name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "Ionicons" : ()=> {return<Ionicons name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "Feather" : ()=> {return<Feather name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "MaterialCommunityIcons" : ()=> {return<MaterialCommunityIcons name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "FontAwesome" : ()=>{return<FontAwesome name={props.name} size={20} style={{marginHorizontal: 20}}/>},
            "Entypo" : ()=>{return(<Entypo name={props.name} size={20} style={{marginHorizontal: 20}} />)}
        } 
        return a[props.type]();
}
    return(
        <>
            {
                items.map((item, key)=>{
                        return(
                    <ButtonComponent key={key}>
                    <Icon onPress={item.function} second>
                        <IconSplit name={item.nameIcon} type={item.type} size={30}></IconSplit>
                    </Icon>
                    <Text>{item.name}</Text>
                    </ButtonComponent>
                    )
                })
            }
        </>
    )
}