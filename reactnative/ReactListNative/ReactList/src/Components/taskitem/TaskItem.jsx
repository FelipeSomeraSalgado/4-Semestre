import { Image ,View, Text } from "react-native"
import{ TaskItemStyle } from "./TaskItemStyle"
import Caneta from "../../../assets/Caneta.png"
import Lixeira from "../../../assets/Lixeira.png"

export const TaskItem = () => {
    return(
        <View style={TaskItemStyle.cardBox}>
            <Text style={TaskItemStyle.cardBoxText}>Task Item Component</Text>

            <Image source={Caneta} style={TaskItemStyle.Image1}/>
            <Image source={Lixeira} style={TaskItemStyle.Image2}/>
        </View>
    )
}