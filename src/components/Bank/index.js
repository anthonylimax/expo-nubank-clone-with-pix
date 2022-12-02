
import { BankArea,Div, Text, Carousel, YourCard } from '../Bank/style'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Button from '../ButtonComponent';

export default function Bank({props}) {
    const options = [
    {
    "name": "Pix",
    "nameIcon": "bank-transfer",
    "type": "MaterialCommunityIcons",
    "function": ()=>{navigation.navigate("PixScreen", props)}
    },
    {
    "name" : "Pagar",
    "nameIcon" : "barcode",
    "type": "FontAwesome",
    "function" : ()=>{console.log("nada")}
    }
    ]
    const navigation = useNavigation();
    return (
        <BankArea>
            <Div cash>
            </Div>
            <Carousel showsHorizontalScrollIndicator={false} horizontal={true} functions>
            <Button items={options}></Button>
            </Carousel>
            <YourCard>
                <AntDesign name="creditcard" size={25}></AntDesign>
                <Text style={{paddingLeft: 20, marginTop: 0}}>Meus Cartões</Text>
            </YourCard>
        </BankArea>
    )
}