import { Image } from 'react-native';
import { Container, Divider, FormulaBase, FormulaBaseP, FormulaContent, ImageContainer, JournalContainer, ResultContainer, ResultContent } from '../../styles';
import CustomText from '../../components/custom-text';
import InputField from '../../components/input-field';
import { useEffect, useState } from 'react';

export default function PotentialEnergy() {
    const [u, setU] = useState("");
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [r, setR] = useState("");
    const [unknown, setUnknown] = useState("U");
    const [result, setResult] = useState("");

    const k = 9 * (10 ** 9);

    useEffect(() => {
        if (![q1, q2, r].includes("")) {
            setResult((k * q1 * q2) / r);
            setUnknown("U")
        } else if (![u, q2, r].includes("")) {
            setResult((u * r) / k * q2);
            setUnknown("q1")
        } else if (![u, q1, r].includes("")) {
            setResult((u * r) / k * q1);
            setUnknown("q2")
        } else if (![u, q1, q2].includes("")) {
            setResult((k * q1 * q2) / u);
            setUnknown("r")
        } else {
            setResult("")
        }

    }, [u, q1, q2, r]);

    function getFormula(value) {
        const data = {
            "U": (
                <FormulaContent>
                    <CustomText>K * q1 * q2</CustomText>
                    <Divider />
                    <CustomText>r</CustomText>
                </FormulaContent>
            ),
            "q1": (
                <FormulaContent>
                    <CustomText>U * r</CustomText>
                    <Divider />
                    <CustomText>k * q2</CustomText>
                </FormulaContent>
            ),
            "q2": (
                <FormulaContent>
                    <CustomText>U * r</CustomText>
                    <Divider />
                    <CustomText>k * q1</CustomText>
                </FormulaContent>
            ),
            "r": (
                <FormulaContent>
                    <CustomText>k * q1 * q2</CustomText>
                    <Divider />
                    <CustomText>U</CustomText>
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
                    <CustomText size={20}>U = </CustomText>
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
                        char={'U'}
                        value={u}
                        onChangeText={setU}
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
                        result != "" && <ResultContainer>
                            {getFormula(unknown)}
                            <ResultContent>
                                <CustomText size={30}>{`${unknown} = ${result.toFixed(3)}`}</CustomText>
                            </ResultContent>
                        </ResultContainer>
                    }
                </JournalContainer>
            </ImageContainer>
        </Container>
    );
}