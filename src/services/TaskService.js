import Storage from '../utils/Storage';


export const TaskService = {
    async getTasks(){
        const tasks = await Storage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    },

    async addTask(task) {
        let tasks = await this.getTasks();
        tasks.push(task);
        await Storage.setItem('tasks', JSON.stringify(tasks));
    }
}

