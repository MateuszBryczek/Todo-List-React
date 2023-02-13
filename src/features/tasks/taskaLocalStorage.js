const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks =>
    localstorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageKey)) || [];