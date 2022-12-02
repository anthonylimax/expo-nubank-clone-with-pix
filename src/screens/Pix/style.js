import styled from 'styled-components/native'

export const Title = styled.Text`
    font-size: 22px;
`;
export const Container = styled.View`
    background-color: white;
    padding: 10px;
    width: 100%;
    height: 90%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    justify-content: center;
    align-items: flex-start;
    align-self: center;
`
export const PixInput = styled.TextInput`
    font-size: 50px;
    width: 100%;
`
export const BallonInput = styled.TouchableOpacity`
    position: absolute;
    right: 40px;
    justify-content: center;
    align-items: center;
    bottom: 100px;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: #88ECEE;
    transition: 1s;
    
`
