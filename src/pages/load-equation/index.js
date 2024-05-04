import { Image } from 'react-native';
import { Container, Divider, FormulaBase, FormulaBaseP, FormulaContent, ImageContainer, JournalContainer, ResultContainer, ResultContent } from '../../styles';
import CustomText from '../../components/custom-text';
import InputField from '../../components/input-field';
import { useEffect, useState } from 'react';
import { exp, exponencial, getUnit } from '../../utils';

export default function LoadEquation() {
    const [e, setE] = useState("");
    const [q1, setQ1] = useState("");
    const [r, setR] = useState("");
    const [unknown, setUnknown] = useState("E");
    const [result, setResult] = useState("");

    const k = 9 * (10 ** 9);

    useEffect(() => {
        if (![q1, r].includes("")) {
            setResult((k * q1) / r ** 2);
            setUnknown("E")
        } else if (![e, r].includes("")) {
            setResult((e * (r ** 2)) / k);
            setUnknown("q1")
        } else if (![e, q1].includes("")) {
            setResult(Math.sqrt((k * q1) / e));
            setUnknown("r")
        } else {
            setResult("")
        }

    }, [e, q1, r]);

    function getFormula(value) {
        const data = {
            "E": (
                <FormulaContent>
                    <CustomText>K * q1</CustomText>
                    <Divider />
                    <CustomText>r²</CustomText>
                </FormulaContent>
            ),
            "q1": (
                <FormulaContent>
                    <CustomText>E * r²</CustomText>
                    <Divider />
                    <CustomText>k</CustomText>
                </FormulaContent>
            ),
            "r": (
                <FormulaContent>
                    <CustomText>√(k * q1)</CustomText>
                    <Divider />
                    <CustomText>E</CustomText>
                </FormulaContent>
            )
        }

        return data[value] ? (
            <FormulaBaseP>
                <CustomText size={20}>{value} = </CustomText>
                {data[value]}
            </FormulaBaseP>
        ) : null;
    }

    return (
        <Container>
            <ImageContainer>
                <Image
                    source={require('../../../assets/images/postite.png')}
                    style={{ width: 160, height: 160, resizeMode: 'stretch' }}
                />
                <FormulaBase>
                    <CustomText size={20}>E = </CustomText>
                    <FormulaContent>
                        <CustomText>K * q1</CustomText>
                        <Divider />
                        <CustomText>r²</CustomText>
                    </FormulaContent>
                </FormulaBase>
            </ImageContainer>
            <ImageContainer>
                <Image
                    source={require('../../../assets/images/journal.png')}
                    style={{ width: 350, height: 450, resizeMode: 'stretch' }}
                />
                <JournalContainer>
                    <CustomText>k = 9x10^9 N*m²/C²</CustomText>
                    <InputField
                        char={'E'}
                        value={e}
                        onChangeText={setE}
                    />
                    <InputField
                        char={'q1'}
                        value={q1}
                        onChangeText={setQ1}
                    />
                    <InputField
                        char={'r'}
                        value={r}
                        onChangeText={setR}
                    />
                    {
                        result != "" && <ResultContainer>
                            {getFormula(unknown)}
                            <ResultContent>
                                <CustomText size={30}>{`${unknown} = ${exponencial(result)} ${getUnit(unknown)}`}</CustomText>
                            </ResultContent>
                        </ResultContainer>
                    }
                </JournalContainer>
            </ImageContainer>
        </Container>
    );
}