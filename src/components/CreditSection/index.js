import {MainSection, Title, SubTitle, Div} from './style'
import AntDesign from '@expo/vector-icons/AntDesign'
import { useState } from 'react'
export default function CreditSection(props){
    const [fatura, setFatura] = useState(props.limite.params.credit)
    const [limite, setLimite] = useState(props.limite.params.limite)
    return(
        <MainSection>
            <AntDesign name="creditcard" size={25}></AntDesign>
            <Div>
                <Title>Cartão de Crédito</Title>
               <AntDesign name="right" size={20} color="gray"></AntDesign>
            </Div>
            <SubTitle>Fatura Atual</SubTitle>
            <Title cash>R$ {fatura.toFixed(2)}</Title>
            <SubTitle>Limite atual: <SubTitle cash>R$ {limite.toFixed(2)}</SubTitle></SubTitle>
        </MainSection>
    )
}