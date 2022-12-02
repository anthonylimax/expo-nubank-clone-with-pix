import { Title } from "./style";
import { useState } from "react";

export default function Cash(props){
    const [accountValue,setAccountValue] = useState(props.cash)
    return(
    <Title> R$ { props.value === false ? "••••" : accountValue.toFixed(2)}</Title>
    )
}