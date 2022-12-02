import styled from "styled-components/native";

export const ViewPort = styled.SafeAreaView`
        background-color: #830AD1;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
`
export const Image = styled.Image`
        width: 200px;
        height: 200px;
`
export const Div = styled.View`
        width: 400px;
        height: 100%;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        position: absolute;
`
export const Button = styled.TouchableOpacity`
        background-color: white;
        width: ${props => props.size ? props.size + 'px' : '90%'};
        height: ${props => props.size ? '35px' : '50px'};
        border-radius: 100px;
        margin-bottom: 50px;
        align-items: center;
        justify-content: center;
`
export const Text = styled.Text`
        background-color: ${props => props.error ? "white" : "transparent"};
        color: ${props => props.error ? "red" : "black"};
        font-size: ${props => props.error ? "20px" : "15px"};
        font-weight: 400;
`
export const Main = styled.View`
        margin-top: 20px;
        width: 100%;
        height: 300px;
        justify-content: center;
        align-items: center;

`
export const Input = styled.TextInput`
    margin-bottom: 10px;
    width: 60%;
    padding: 10px;
    height: 40px;
    color: black;
    font-size: 15px;
    border: white 1px solid;
    border-radius: 30px;
    background-color: white;
`