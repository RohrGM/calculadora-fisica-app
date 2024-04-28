import { Image } from 'react-native';
import { Container, Divider, FormulaBase, FormulaBaseP, FormulaContent, ImageContainer, JournalContainer, ResultContainer, ResultContent } from '../../styles';
import CustomText from '../../components/custom-text';
import InputField from '../../components/input-field';
import { useEffect, useState } from 'react';
import { Path, Polyline, Svg } from 'react-native-svg';
import { exp, exponencial } from '../../utils';

export default function EletroField() {
    const [f, setF] = useState("");
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [r, setR] = useState("");
    const [unknown, setUnknown] = useState("F");
    const [result, setResult] = useState("");

    const k = 9 * (10 ** 9);

    useEffect(() => {
        if (![q1, q2, r].includes("")) {
            setResult((k * q1 * q2) / r ** 2);
            setUnknown("F")
        } else if (![f, q2, r].includes("")) {
            setResult((f * (r ** 2)) / k * q2);
            setUnknown("q1")
        } else if (![f, q1, r].includes("")) {
            setResult((f * (r ** 2)) / k * q1);
            setUnknown("q2")
        } else if (![f, q1, q2].includes("")) {
            setResult(Math.sqrt((k * Number(q1) * Number(q2)) / Number(f)));
            setUnknown("r")
        } else {
            setResult("")
        }

    }, [f, q1, q2, r]);

    function getFormula(value) {
        const data = {
            "F": (
                <FormulaContent>
                    <CustomText>K * q1 * q2</CustomText>
                    <Divider />
                    <CustomText>r²</CustomText>
                </FormulaContent>
            ),
            "q1": (
                <FormulaContent>
                    <CustomText>F * r²</CustomText>
                    <Divider />
                    <CustomText>k * q2</CustomText>
                </FormulaContent>
            ),
            "q2": (
                <FormulaContent>
                    <CustomText>F * r²</CustomText>
                    <Divider />
                    <CustomText>k * q1</CustomText>
                </FormulaContent>
            ),
            "r": (
                <FormulaContent>
                    <CustomText>√(k * q1 * q2)</CustomText>
                    <Divider />
                    <CustomText>F</CustomText>
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
            {/*<Svg height="200" width="200">
                <Path
                    d="M 10 50 C 30 150, 70 150, 90 50"
                    fill="blue"
                    stroke="red"
                />
    </Svg>*/}
            <ImageContainer>
                <Image
                    source={require('../../../assets/images/postite.png')}
                    style={{ width: 160, height: 160, resizeMode: 'stretch' }}
                />
                <FormulaBase>
                    <CustomText size={20}>F = </CustomText>
                    <FormulaContent>
                        <CustomText>K * q1 * q2</CustomText>
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
                    <CustomText>k = 9x10^9</CustomText>
                    <InputField
                        char={'F'}
                        value={f}
                        onChangeText={setF}
                    />
                    <InputField
                        char={'q1'}
                        value={q1}
                        onChangeText={setQ1}
                    />
                    <InputField
                        char={'q2'}
                        value={q2}
                        onChangeText={setQ2}
                    />
                    <InputField
                        char={'r'}
                        value={r}
                        onChangeText={setR}
                    />
                    {
                        !isNaN(result) && result != "" && <ResultContainer>
                            {getFormula(unknown)}
                            <ResultContent>
                                <CustomText size={30}>{`${unknown} = ${exponencial(result)}`}</CustomText>
                            </ResultContent>
                        </ResultContainer>
                    }
                </JournalContainer>
            </ImageContainer>
        </Container>
    );
}