// tasoReducer.jsx
export const taskReducer = (state, action) => {
    switch(action.type) {
        case "INPUT_TASK":
            return {
                ...state,
                inputTask: action.payload
            };
        case "INPUT_DESCRIPTION":
            return {
                ...state,
                inputDescription: action.payload
            };
        case "INPUT_CATEGORY":
            if(state.inputCategory === action.payload) {
                return {
                    ...state,
                    inputCategory: ""
                }
            }
            return {
                ...state,
                inputCategory: action.payload
            };
        case "INPUT_PRIORITY":
            return {
                ...state,
                inputPriority: action.payload
            };
        case "INPUT_DEADLINE":
            return {
                ...state,
                inputDeadline: action.payload
            };
        case "ADD_TASK":
            if(
                !state.inputTask ||
                !state.inputCategory
            ) return state;

            const newTask = {
                id: Date.now(),
                task: state.inputTask.trim(),
                description: state.inputDescription.trim(),
                category: state.inputCategory,
                priority: state.inputPriority,
                deadline: state.inputDeadline,

                status: false,
                favorite: false,
                createDate: new Date().toISOString(),
            };
            return {
                ...state,
                todos: [newTask, ...state.todos],
                inputTask: "",
                inputDescription: "",
                inputCategory: "",
                inputPriority: "",
                inputDeadline: "",
            };
        case "START_EDIT":
            const editTask = state.todos.find(todo => todo.id === action.payload);
            if(!editTask) return state;
            return {
                ...state,
                inputTask: editTask.task,
                inputDescription: editTask.description,
                inputCategory: editTask.category,
                inputPriority: editTask.priority,
                inputDeadline: editTask.deadline || "",
                editId: editTask.id,
                isEdit: true,
            };
        case "SAVE_EDIT":
            if(
                !state.inputTask
                || !state.inputCategory
            ) return state;
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === state.editId
                    ? {
                        ...todo,
                        task: state.inputTask.trim(),
                        description: state.inputDescription.trim(),
                        category: state.inputCategory,
                        priority: state.inputPriority,
                        deadline: state.inputDeadline
                    }
                    : todo),
                inputTask: "",
                inputDescription: "",
                inputCategory: "",
                inputPriority: "",
                inputDeadline: "",
                isEdit: false,
                editId: null,
            };
        case "IS_COMPLETED":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, status: !todo.status} : todo),
            };
        case "IS_FAVORITE":
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, favorite: !todo.favorite} : todo),
            };
        case "MOVE_TRASH":
            const deletedTask = state.todos.find(todo => todo.id === action.payload);
            if(!deletedTask) return state;
            return {
                ...state,
                trash: [deletedTask, ...state.trash],
                todos: state.todos.filter(todo => todo.id !== action.payload),
                selectTaskId: null,
            };
        case "PERMANENT_DELETE":
            return {
                ...state,
                trash: state.trash.filter(todo => todo.id !== action.payload)
            };
        case "RESTORE_TASK":
            const restoreTask = state.trash.find(todo => todo.id === action.payload);
            if(!restoreTask) return state;
            return {
                ...state,
                todos: [restoreTask, ...state.todos],
                trash: state.trash.filter(todo => todo.id !== action.payload),
            };
        case "EMPTY_TRASH":
            return {
                ...state,
                trash: []
            };
        case "SET_ACTIVE_TAB":
            return {
                ...state,
                activeTab: action.payload,
            };
        case "OPEN_EDIT_MENU_MODAL":
            return {
                ...state,
                editMenuModal: true,
                selectTaskId: action.payload,
            };
        case "CLOSE_EDIT_MENU_MODAL":
            return {
                ...state,
                editMenuModal: false,
            };
        case "TOGGLE_VIEW_DETAILS_MODAL":
            return {
                ...state,
                viewDetailsModal: action.payload,
            };
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                sidebarOpen: action.payload,
            };
        case "OPEN_ADD_TASK_MODAL":
            return {
                ...state,
                addTaskModal: true,
            };
        case "CLOSE_ADD_TASK_MODAL":
            return {
                ...state,
                addTaskModal: false,
                selectTaskId: null,
                isEdit: false,
                editId: 0,
            };
        case "CANCEL_ADD_TASK_BOX":
            return {
                ...state,
                inputTask: "",
                inputDescription: "",
                inputCategory: "",
                inputPriority: "",
                inputDeadline: "",
            };
        case "SEARCH_TASK":
            return {
                ...state,
                search: action.payload,
            };
        case "SELECT_ACTIVE_TAB":
            return {
                ...state,
                activeTab: action.payload,
            };
        case "SELECT_CATEGORY":
            if(state.category === action.payload) {
                return {
                    ...state,
                    category: "all",
                };
            }
            return {
                ...state,
                category: action.payload,
            };
        case "SELECT_SORT":
            return {
                ...state,
                sort: action.payload,
            };
        
        default:
            return state;
    }
}