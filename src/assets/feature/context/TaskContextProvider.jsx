// TaskContextProvider.jsx
import { initialState }  from "../data/initialData";
import { taskReducer } from "../reducer/taskReducer";
import useLocalStorage from "../hooks/useLocalStorage";
import { act, createContext, useContext } from "react";
import { useMemo, useCallback } from "react";

const CreateTaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const [state, dispatch] = useLocalStorage(taskReducer, initialState, "taskflow");
    // INPUT_TASK
    const inputTask = (task) => {
        dispatch({
            type: "INPUT_TASK",
            payload: task,
        });
    }
    // INPUT_DESCRIPTION
    const inputDescription = (task) => {
        dispatch({
            type: "INPUT_DESCRIPTION",
            payload: task,
        });
    }
    // INPUT_CATEGORY
    const inputCategory = (task) => {
        dispatch({
            type: "INPUT_CATEGORY",
            payload: task,
        });
    }
    // INPUT_PRIORITY
    const inputPriority = (task) => {
        dispatch({
            type: "INPUT_PRIORITY",
            payload: task
        });
    }
    // INPUT_DEADLINE
    const inputDeadline = (task) => {
        dispatch({
            type: "INPUT_DEADLINE",
            payload: task,
        });
    }
    // ADD_TASK
    const addTask = () => {
        dispatch({
            type: "ADD_TASK"
        })
    };
    // START_EDIT
    const startEdit = (task) => {
        dispatch({
            type: "START_EDIT",
            payload: task,
        })
    }
    // SAVE_EDIT
    const saveEdit = () => {
        dispatch({
            type: "SAVE_EDIT",
        })
    }
    // IS_COMPLETED
    const isCompleted = (task) => {
        dispatch({
            type: "IS_COMPLETED",
            payload: task,
        });
    }
    // IS_FAVORITE
    const isFavorite = (task) => {
        dispatch({
            type: "IS_FAVORITE",
            payload: task,
        });
    }
    // MOVE_TRASH
    const moveTrash = (task) => {
        dispatch({
            type: "MOVE_TRASH",
            payload: task,
        });
    }
    // PERMANENT_DELETEDoggleSidebar
    const permanentDeleted = (task) => {
        dispatch({
            type: "PERMANENT_DELETE",
            payload: task,
        });
    }
    // RESTORE_TASK
    const restoreTask = (task) => {
        dispatch({
            type: "RESTORE_TASK",
            payload: task,
        });
    }
    // EMPTY_TRASH
    const emptyTrash = () => {
        dispatch({
            type: "EMPTY_TRASH",
        })
    }
    // OPEN_EDIT_MENU_MODAL
    const openEditMenuModal = (task) => {
        dispatch({
            type: "OPEN_EDIT_MENU_MODAL",
            payload: task,
        })
    }
    // CLOSE_EDIT_MENU_MODAL
    const closeEditMenuModal = () => {
        dispatch({
            type: "CLOSE_EDIT_MENU_MODAL"
        })
    }
    // TOGGLE_VIEW_DETAILS_MODAL
    const toggleViewDetailsModal = (task) => {
        dispatch({
            type: "TOGGLE_VIEW_DETAILS_MODAL",
            payload: task,
        })
    }
    // TOGGLE_SIDEBAR
    const toggleSidebar = (task) => {
        dispatch({
            type: "TOGGLE_SIDEBAR",
            payload: task,
        });
    }
    // OPEN_ADD_TASK_MODAL
    const openAddTaskModal = () => {
        dispatch({
            type: "OPEN_ADD_TASK_MODAL"
        });
    }
    // CLOSE_ADD_TASK_MODAL
    const closeAddTaskModal = (task) => {
        dispatch({
            type: "CLOSE_ADD_TASK_MODAL",
            payload: task,
        });
    }
    // CANCEL_ADD_TASK_BOX
    const cancelAddTaskBox = () => {
        dispatch({
            type: "CANCEL_ADD_TASK_BOX",
        })
    }
    // SEARCH_TASK
    const searchTask = (task) => {
        dispatch({
            type: "SEARCH_TASK",
            payload: task
        })
    }
    // SET_ACTIVE_TAB
    const setActiveTab = (task) => {
        dispatch({
            type: "SET_ACTIVE_TAB",
            payload: task,
        });
    }

    // SELECT_CATEGORY
    const filterCategory = (task) => {
        dispatch({
            type: "SELECT_CATEGORY",
            payload: task
        });
    }
    // SELECT_SORT
    const filterSort = (task) => {
        dispatch({
            type: "SELECT_SORT",
            payload: task
        });
    }

    // Task Count
    const stats = useMemo(() => {
        return state.todos.reduce((acc, todo) => {
            acc.all++;
            if(todo.status) acc.completed++;
            else acc.active++;
            if(todo.favorite) acc.favorites++;
            const cat = todo.category;
            acc.categories[cat] = (acc.categories[cat] || 0) + 1;
            return acc;
        }, {
            all: 0,
            completed: 0,
            active: 0,
            favorites: 0,
            categories: {}
        })

    }, [state.todos]);
    // Trash Count
    const trashCount = state.trash.length;
    // Filter Task
    const filterProcessTasks = useMemo(() => {
        let result = [...state.todos];
        if(state.activeTab === "active") {
            result = result.filter(t => !t.status);
        }
        if(state.activeTab === "completed") {
            result = result.filter(t => t.status);
        }
        if(state.activeTab === "favorites") {
            result = result.filter(t => t.favorite);
        }
        if(state.category !== "all") {
            result = result.filter(t => t.category.toLowerCase() === state.category)
        }
        if(state.search.trim()) {
            const q = state.search.toLowerCase();
            result = result.filter(t => 
                t.task.toLowerCase().includes(q)
            );
        }
        if(state.sort === "newest") {
            result.sort((a, b) => b.id - a.id);
        }
        if(state.sort === "oldest") {
            result.sort((a, b) => a.id - b.id);
        }
        if (state.sort === "a-z") {
            result.sort((a, b) => a.task.localeCompare(b.task));
        }
        if (state.sort === "z-a") {
            result.sort((a, b) => b.task.localeCompare(a.task));
        }
        return result;

    }, [
        state.todos,
        state.activeTab,
        state.category,
        state.search,
        state.sort
    ])

    const actions = useCallback({
        inputTask,
        inputDescription,
        inputCategory,
        inputPriority,
        inputDeadline,
        addTask,
        startEdit,
        saveEdit,
        isCompleted,
        isFavorite,
        moveTrash,
        permanentDeleted,
        restoreTask,
        emptyTrash,
        openEditMenuModal,
        closeEditMenuModal,
        toggleViewDetailsModal,
        toggleSidebar,
        openAddTaskModal,
        closeAddTaskModal,
        cancelAddTaskBox,
        searchTask,
        setActiveTab,
        filterCategory,
        filterSort,
    }, []);
    
    const value = useMemo(() => ({
        state,
        stats,
        trashCount,
        filterProcessTasks,
        actions,
    }), [
        state,
        stats,
        trashCount,
        filterProcessTasks
    ]);

    return (
        <CreateTaskContext.Provider value={value}>
            { children }
        </CreateTaskContext.Provider>
    )
}

export const useTaskContext = () => useContext(CreateTaskContext)