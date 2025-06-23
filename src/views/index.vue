<template>
    <h1>这个是一个任务管理</h1>
    <input type="text" placeholder="请输入内容" v-model="content">
    <button @click="handle">提交</button>

    <!-- 根据任务数量判断 -->
    <div v-if="task.taskList.length > 0">
        <h2>任务列表,当前的任务有：</h2>
        <div class="card" v-for="(item, index) in task.taskList" :key="index"
            :style="{ color: item.completed ? 'red' : 'black' }">
            任务{{ index + 1 }}:
            <br>
            {{ item.content }}

            <button @click="task.completeTask(index)">
                {{ item.completed ? "未完成" : "完成" }}
            </button>

            <button @click="task.deleteTask(index)">删除</button>
        </div>
    </div>
    <div v-else> 当前没有任务哦</div>

</template>

<script setup>
import { useRouter } from "vue-router"
import { ref } from "vue"
import { useTaskStore } from "@/stores/task"

const router = useRouter();
const task = useTaskStore();
const content = ref('');
const taskList = ref('[]')

const handle = () => {
    if (content.value.trim() === '') {
        alert("请输入您的内容~")
    } else {
        task.addTask(content.value)
        content.value = ''

    }
}

</script>

<style scoped lang="scss">
.card {
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    transition: all 0.2s ease;
}

.card button {
    margin-left: 10px;
}
</style>