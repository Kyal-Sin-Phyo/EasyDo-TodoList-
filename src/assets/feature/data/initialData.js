// initialData.js
import {
    LayoutPanelLeft,
    Clock4,
    SquareCheckBig,
    Star,
    Trash2,
    Briefcase,
    UserRound,
    BookOpenText,
    Heart,
    Puzzle,
    Gamepad2,
} from 'lucide-react';


export const initialState = {
    todos: [],
    trash: [],

    activeTab: "all" ,
    category: "all",
    sort: "newest",
    search: "",

    inputTask: "",
    inputDescription: "",
    inputCategory: "",
    inputPriority: "",
    inputDeadline: "",

    isEdit: false,
    editId: 0,
    selectTaskId: null,

    editMenuModal: false,
    viewDetailsModal: false,
    addTaskModal: false,
    sidebarOpen: false,
}

export const sidebarItems = [
    {
        label: "Total",
        key: "all",
        icon: LayoutPanelLeft,
        borderColor: "#3B82F6",
        bgColor: "#3B82F616",
    },
    {
        label: "Active",
        key: "active",
        icon: Clock4,
        borderColor: "#22C55E",
        bgColor: "#22C55E16",
    },
    {
        label: "Completed",
        key: "completed",
        icon: SquareCheckBig,
        borderColor: "#8B5CF6",
        bgColor: "#8B5CF616",
    },
    {
        label: "Favorites",
        key: "favorites",
        icon: Star,
        borderColor: "#F59E0B",
        bgColor: "#F59E0B16",
    },
    {
        label: "Trash",
        key: "trash",
        icon: Trash2,
        borderColor: "#fb2c36",
        bgColor: "#fb2c3616",
    },
]

export const categories = [
    {
        label: "Work",
        key: "work",
        icon: Briefcase,
        color: "#3B82F6",
        bgColor: "#3B82F622",
    },
    {
        label: "Personal",
        key: 'personal',
        icon: UserRound,
        color: "#22C55E",
        bgColor: "#22C55E22",
    },
    {
        label: "Study",
        key: "study",
        icon: BookOpenText,
        color: "#8B5CF6",
        bgColor: "#8B5CF622",
    },
    {
        label: "Health",
        key: "health",
        icon: Heart,
        color: "#F59E0B",
        bgColor: "#F59E0B22",
    },
    {
        label: "Game",
        key: "game",
        icon: Gamepad2,
        color: "#FB2C36",
        bgColor: "#FB2C3622",
    }
];