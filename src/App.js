import React, {useState} from "react";
import {Text, 
        SafeAreaView, 
        TouchableOpacity,
        StyleSheet
} from 'react-native';

const App = () => {

    const [numero, setNumero] = useState(0);

    function hadleNumero () {
        const novo_numero = Math.floor(Math.random() * 10);

        setNumero(novo_numero);  //alterando o estado do numero
    };

    return (
        <SafeAreaView style={style.container}>
            <Text style={style.numero}>{numero}</Text>
            <TouchableOpacity onPress={hadleNumero} style={style.botao}>
                <Text>Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#38FFDB',
        flex: 1, //Propriedade do flexbox. por padrão o react native. 1 espaço total
        justifyContent: 'center',
        alignItems: 'center',
    },
    numero: {
        fontSize: 38,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#ffffff',
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10
    },
});

export default App;

