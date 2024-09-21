import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import {BarChart} from 'react-native-chart-kit'
const screenWidth = Dimensions.get('window').width;

const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
        {
        data: [20, 45, 28, 80, 99, 43]
        }
    ]
    };

const chartConfig = {
    backgroundColor: "transparent",
    backgroundGradientFrom: "#EDEDED",
    backgroundGradientTo: "#EDEDED",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 0) => `#26408B`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
    };

const _BarChart = () => {
    return(<BarChart
        style={styles.bar}
        data={data}
        width={screenWidth - 90}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={0}
    />)
}
export default _BarChart

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'column',
        alignSelf: 'center',
        
    }
})