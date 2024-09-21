import React from "react";
import { Text, View, Image, Dimensions, Pressable, ImageBackground, } from "react-native";
import _BarChart from "../../components/chart";
import icon from '../../assets/user-icon.png'
import background from '../../assets/image.png'
import PinpointIcon from "../../components/pinpoint_icon";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
export default function Dashboard({navigation}) {

    return (
        <View style={styles.main}>
            <View style={styles.background}>
                <ImageBackground>
                    <View style={styles.header}>
                        <Image source={icon}></Image>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.separator}>
                            <Text style={styles.title}>Meu Dashboard</Text>
                            <_BarChart />
                            <Pressable style={styles.button} onPress={() => navigation.navigate('dataReciever')}>
                                <Text style={styles.subtitle}>Enviar dados</Text>
                            </Pressable>
                        </View>

                        <View style={styles.separator}>
                            <Text style={styles.title}>
                                Métricas Arrecadadas
                            </Text>
                            <LinearGradient style={styles.dataView}
                                colors={['#556EB5', '#4C5893']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}>
                                <PinpointIcon />
                                <View style={styles.dataViewTitle}>
                                    <Text style={styles.subtitle}>Lixo arrecadado total</Text>
                                    <Text style={styles.numberDisplay}>20kgs</Text>
                                </View>
                            </LinearGradient>
                            <LinearGradient
                                style={styles.dataView}
                                colors={['#556EB5', '#4C5893']}
                                start={{ x: 1, y: 0 }}
                                end={{ x: 0, y: 1 }}>
                                <PinpointIcon />
                                <View style={styles.dataViewTitle}>
                                    <Text style={styles.subtitle}>Lixo arrecadado na última coleta</Text>
                                    <Text style={styles.numberDisplay}>10kgs</Text>
                                </View>
                            </LinearGradient>
                            <Pressable title='Receber Lixo' style={styles.button} onPress={() => navigation.navigate('dataSender')}>
                                <Text style={styles.subtitle}>Receber Lixo</Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    )
}