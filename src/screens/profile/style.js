import Styled from 'styled-components/native'

export const Title = Styled.Text`
        font-size: 18px;
        align-self: center;
        font-weight: 400;
`
export const Header = Styled.View`
        flex-direction: column;
        height: 250px;
        justify-content: center;
        width: 90%;
        margin-left: 5%;
        margin-top: 40px;
`
export const SubTitle = Styled.Text`
        font-size: 15px;
        font-weight: 500;
`
export const BackButton = Styled.View`
        position: absolute;
        left: 20px;
        top: 30px;
        border: black 1px solid;
        border-radius:100px;
        padding: 5px;
`