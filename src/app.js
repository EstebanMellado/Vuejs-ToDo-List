const app = new Vue({
    el: '#app',
    data: {
        titlePage: 'Mis Tareas',
        tasks: [],
        newTask: ''
    },
    methods: {
        addTask: function(){
            this.tasks.push({
                name: this.newTask,
                status: false
            });
            this.newTask = '';
            this.updateLocalStorage();
        },
        completeTask: function(index){
            this.tasks[index].status = true;
            this.updateLocalStorage();
        },
        removeTask: function(index){
            this.tasks.splice(index, 1);
            this.updateLocalStorage();
        },
        updateLocalStorage: function(){
            localStorage.setItem('tasks-vue', JSON.stringify(this.tasks));
        }
    },
    created: function(){
        let datosLS = JSON.parse(localStorage.getItem('tasks-vue'));
        if(datosLS === null)
            this.tasks = [];
        else
            this.tasks = datosLS;
    }
});