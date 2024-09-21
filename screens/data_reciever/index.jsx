import { ScrollView, View, Text, Button, Pressable } from "react-native";
import styles from "../dashboard/styles";
export default function DataReciever() {
    return (
        <View style={styles.main}>
            <View style={styles.background}>
                <View style={styles.content}>
                    <Text style={styles.title}>Você deseja enviar as seguintes entradas para a base de dados?</Text>
                    <ScrollView>
                        <Text>teste 1</Text>
                        <Text>teste 2</Text>
                        <Text>teste 3</Text>
                    </ScrollView>
                    <Pressable style={styles.button}>
                        <Text style={styles.subtitle}>Sim</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}