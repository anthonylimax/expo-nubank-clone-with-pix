import Option from "../../components/option/index.js"
import { Title, Header, SubTitle, BackButton} from "./style" 
import { ScrollView, View} from "react-native"
import {Icon} from './../../components/header/style'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native"

export default function Profile(props){
    const navigation = useNavigation();
    const opt = {
        items: [
            {
                name: "Seguro de Vida",
                nameIcon: "heart",
                type: "AntDesign"
            },
            {
                name: "Notificações",
                nameIcon: "bells",
                type: "AntDesign"
            },
            {
                name: "Me Ajuda",
                nameIcon: "help-circle",
                type: "Feather"
            },
            {
                name: "Editar dados do Perfil",
                nameIcon: "person-outline",
                type: "Ionicons"
            },
            {
                name: "Segurança",
                nameIcon: "shield",
                type: "Feather"
            },
            {
                name: "Open Finance",
                nameIcon: "finance",
                type: "MaterialCommunityIcons"
            },
            {
                name: "Configurar chaves Pix",
                nameIcon: "settings",
                type: "Feather"
            },
            {
                name: "Pedir Conta PJ",
                nameIcon: "store-alt",
                type: "FontAwesome5"
            },
            {
                name: "Configurar Conta",
                nameIcon: "money-check",
                type: "FontAwesome5"
            },
            {
                name: "Configurar Cartão",
                nameIcon: "credit-card",
                type: "Feather"
            },
            {
             name: "Configurar perfil de investimentos",
             nameIcon: "bar-graph",
             type: "Entypo"   
            },
            {
                name: "Sobre",
                nameIcon: "file",
                type: "Feather"
            },
            {
                name: "Informe de rendimentos",
                nameIcon: "file-text",
                type: "Feather"
            },
            {
                name: "Sair do aplicativo",
                nameIcon: "back",
                type: "AntDesign" 
            }
        ]
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <BackButton>
                <AntDesign name="back" size={30} onPress ={()=>{
                    navigation.goBack();
                }}></AntDesign>
            </BackButton>
            <Header>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: 150,
                }}>
                    <Icon />
                    <Title>{props.route.params.params.name}</Title>
                </View>
                <View style={{   
                    paddingTop: 30,
                    paddingLeft: 10,
                }}>
                    <SubTitle>Agência: 0001 • Conta 391092</SubTitle>
                    <SubTitle>Banco 0012 • NuPagamentos S.A. - Instituição de Pagamento</SubTitle>
                </View>
            </Header>
            <Option options={opt}/>
            
        </ScrollView>
    )
}