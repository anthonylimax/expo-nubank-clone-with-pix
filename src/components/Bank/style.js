import styled from "styled-components/native";

export const BankArea = styled.View`
    display: flex;
`
export const TitleSettings = styled.Text`
    color: black;
    font-size: ${props => props.cash ? "30px" : "20px"};
    font-weight: ${props => props.cash ? 500 : "none"};
`
export const Div = styled.View`
    display: flex;
    justify-content: ${props => props.functions ? "flex-start" : "space-between"};
    flex-direction: row;
    padding: 20px 30px;
`
export const Carousel = styled.ScrollView`
    display: flex;
    flex-direction: row;
`

export const ButtonComponent = styled.View`
    display: flex;
    align-items: center;
    padding: 10px;
`
export const Text = styled.Text`
    font-size: 15px;
    margin-top: 10px;
    font-weight: 600;
`
export const YourCard = styled.View`
    width: 90%;
    display: flex;
    flex-direction: row;
    height: 60px;
    margin-top: 30px;
    align-items: center;
    padding-left: 20px;
    align-self: center;
    border-radius: 10px;
    background-color: #EEEFF4;
    margin-bottom: 30px;
`