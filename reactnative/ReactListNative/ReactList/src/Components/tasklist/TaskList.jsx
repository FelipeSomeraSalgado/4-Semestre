import {Text, ScrollView } from "react-native"
import{ TaskListStyle } from "./TaskListStyle"
import{ TaskItem } from "../taskitem/TaskItem"

export const TaskList = () => {
    return(
        
        <ScrollView style = {TaskListStyle.TaskListContainer}>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </ScrollView>
    )
}