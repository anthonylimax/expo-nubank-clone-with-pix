import { useEffect } from "react"
import { ScrollView } from "react-native-gesture-handler"
import CreditSection from "../../components/CreditSection"
import Header from "../../components/header/index"
import Bank from './../../components/Bank/index'
import axios from "axios"
export default function Home(navigation){
    return(
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
        <Header props={navigation} />
        <Bank props={navigation.route.params}/>
        <CreditSection limite = {navigation.route} />
    </ScrollView>
    </>
    )
}