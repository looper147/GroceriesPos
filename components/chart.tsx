import React from 'react';
import { Dimensions, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
const data = [
    {
        name: "Fruits",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Vegetables",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Electronics",
        population: 527612,
        color: "green",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    
];

const Chart = () => {
    return (
        <>
        <View>
            <PieChart
                data={data}
                width={Dimensions.get('window').width-50}
                height={150}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                // center={[10, 50]}
                // absolute
            />
        </View>
        </>
    )
}

export default Chart;