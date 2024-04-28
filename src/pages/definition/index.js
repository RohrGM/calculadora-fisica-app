import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonStyle, CText, CalcularButton, Container, DefinitionContent } from "../../styles";
import { AntDesign } from '@expo/vector-icons';
import CustomText from '../../components/custom-text';

export default function Definition({ navigation }) {
    return (
        <SafeAreaView>
            <DefinitionContent>
                <CustomText size={22}>Definição de força eletrica</CustomText>
                <CustomText>A força elétrica é uma das quatro forças fundamentais da natureza e é causada pela interação entre partículas carregadas eletricamente, como elétrons e prótons. A definição formal da força elétrica é a força de repulsão ou atração entre duas cargas elétricas, que é diretamente proporcional ao produto das magnitudes das cargas e inversamente proporcional ao quadrado da distância entre elas. A Lei de Coulomb descreve essa relação matematicamente e é fundamental para entender o comportamento das cargas elétricas em diversas situações, desde a interação entre elétrons em um átomo até a eletricidade estática e o funcionamento de dispositivos elétricos.</CustomText>
                <CalcularButton onPress={() => navigation.push("calculator")}>
                    <CustomText color={"#4b836a"}>Calcular</CustomText>
                    <AntDesign name="calculator" size={24} color="#4b836a" />
                </CalcularButton>
            </DefinitionContent>
        </SafeAreaView>
    );
}