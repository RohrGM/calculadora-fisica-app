import styled from "styled-components/native";

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #788cc4;
    align-items: center;
`;

export const CText = styled.Text`
    font-size: ${props => (props.size ? props.size : 18) + 'px'};
    color: ${props => (props.color ? props.color : 'black')};
    text-align: center;
`;

export const FormulaBase = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

export const FormulaBaseP = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FormulaContent = styled.View`
    display: flex;
    flex-direction: column;
`;
export const Divider = styled.View`
    border: 1px solid black;
`;

export const ImageContainer = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const InputText = styled.TextInput`
    font-size: 20px;
    color: black;
    border-bottom-width: 1px;
    border-bottom-color: red;
    text-align: center;
    max-width: 75%;
    min-width: 50px;
    overflow: scroll;
`;

export const JournalContainer = styled.View`
    position: absolute;
    width: 300px;
    top: 80px;
`;

export const InputContainer = styled.View`
   flex-direction: row;
   align-items: flex-end;
`;

export const ResultContainer = styled.View`
    margin-top: 30px;
    width: 100%;
`;

export const ResultContent = styled.View`
    margin-top: 10px;
    border-bottom-width: 2px;
    border-bottom-color: green;
`;

export const IconButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const CalcularButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 150px;    
    gap: 10px;
    border: 3px solid #4b836a;
    border-radius: 20px;
    background-color: white;
`;

export const DefinitionContent = styled.View`
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 40px;
    gap: 30px;
`;