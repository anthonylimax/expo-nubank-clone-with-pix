import styled from 'styled-components/native'

export const MainSection = styled.View`
    padding: 40px;
    border: 1px solid gray;
`
export const Div = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Title = styled.Text`
    margin-top: 10px;
    font-size: ${props => props.cash ? "30px" : "25px"};
    font-weight: 500;
`
export const SubTitle = styled.Text`
    color: gray;    
    font-weight: ${props => props.cash ? 700 : 500};
    font-size: 18px;
    margin-top: 10px;
`