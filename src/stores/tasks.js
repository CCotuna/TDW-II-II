import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [],
    favoriteTasks: [],
  }),

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(taskId) {
      const index = this.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        this.tasks.splice(index, 1);
      }
    },
    addToFavorite(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        this.favoriteTasks.push(task);
      }
    },
    removeFavorite(taskId) {
      const index = this.favoriteTasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        this.favoriteTasks.splice(index, 1);
      }
    },
    updateTaskLabel(taskId, label) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) {
        task.label = label;
      }
    }
  },
});
