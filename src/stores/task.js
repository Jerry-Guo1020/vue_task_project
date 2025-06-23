import { defineStore } from "pinia"

export const useTaskStore = defineStore('task', {
    state: () => ({
        taskList: [],
    }),

    actions: {

        // 添加任务
        addTask(content) {
            this.taskList.push({ content, completed: false })
        },

        // 完成任务
        completeTask(index) {
            this.taskList[index].completed = !this.taskList[index].completed
        },

        // 删除任务
        deleteTask(index) {
            this.taskList.splice(index, 1)  
        }
    }
})