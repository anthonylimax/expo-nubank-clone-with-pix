import styled from 'styled-components/native';

export const Header = styled.SafeAreaView`
    background-color: #830AD1;
    height: 200px;
    display: flex;
    justify-content: center;
    
`
export const TextInit = styled.Text`
    color: white;
    padding-top: 55px;
    margin-left:40px;
    font-size: 20px;
`
export const Container = styled.View`
    display: flex;
    margin-left: 20px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
export const SecondDiv = styled.View`
    display: flex;
    flex-direction: row;
    margin-right: 10px;
    width: 200px;
    justify-content: space-around;
`
export const Icon = styled.TouchableOpacity`
    height: ${props => props.second ? '80px' : '50px'};
    width: ${props => props.second ? '80px' : '50px'};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color:${props => props.second ? '#EEEFF4' : '#9C3BD8'} ;
`