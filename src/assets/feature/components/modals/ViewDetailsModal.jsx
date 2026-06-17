import TaskDetailBtn from "../ui/TaskDetailBtn";
import formatDate from "../../utils/formatDate";
import { categories } from "../../data/initialData";
import { useTaskContext } from "../../context/TaskContextProvider";
import {
    Check,
    Star,
    Briefcase,
    Calendar,
    Clock,
    X,
    PenLine,
    Trash2,
    UserRound,
    BookOpenText,
    Heart,
    Gamepad2,
} from "lucide-react";

const varients = {
    work: Briefcase,
    personal: UserRound,
    study: BookOpenText,
    health: Heart,
    game: Gamepad2,
}
const priorities = {
    low: {
        bgColor: "#F59E0B",
        ringColor: "#F59E0B55",
    },
    medium: {
        bgColor: "#22C55E",
        ringColor: "#22C55E55",
    },
    high: {
        bgColor: "#FB2C36",
        ringColor: "#FB2C3655",
    }
}

const ViewDetailsModal = () => {

    const {
        state,
        filterProcessTasks,
        actions,
    } = useTaskContext();

    const taskDetails = state.todos.find(todo => todo.id === state.selectTaskId);

    const Icon = varients[taskDetails?.category];
    const priorityColor = priorities[taskDetails?.priority];

    return (
        <div className="absolute inset-0 flex justify-center items-center rounded-md bg-[#000a] z-99">

            <div className="flex flex-col w-full md:w-112.5 md:min-h-137.5 md:h-auto md:rounded-lg h-full justify-start items-center bg-[#FFFFFF] p-3.75">
                <div className="w-full h-auto flex justify-between items-center mb-7.5 text-[14px] font-bold">
                    <h3>Task Details</h3>
                    <button onClick={() => actions.toggleViewDetailsModal(false)} className="outline-none hover:text-[#EF4444] text-[#1F2937]">
                        <X size={20} />
                    </button>
                </div>
                <ul className="flex flex-col justify-start items-center gap-1.25 divide-y w-full h-full overflow-hidden text-[16px] font-medium text-[#1F2937]">
                    <li className="flex justify-between items-center w-full h-auto mb-5 border-none">
                        <div className="flex justify-center items-center gap-2.5">
                            <button
                                onClick={() => actions.isCompleted(taskDetails.id)}
                                className={`${taskDetails.status ? "bg-[#6D5DFC] text-[#FFFFFF]" : "border border-[#1F2937]"} w-6.25 h-6.25 shrink-0 flex justify-center items-center  p-1.25  rounded-full cursor-pointer`}
                            >
                                {taskDetails.status && <Check />}
                            </button>
                            <p className="font-semibold text-[16px]">{taskDetails?.task}</p>
                        </div>
                        <button
                            onClick={() => actions.isFavorite(taskDetails.id)}
                            className="text-[#000000] cursor-pointer hover:text-[#F59E0B] duration-100"
                        >
                            <Star size={20} fill={`${taskDetails.favorite ? "#F59E0B" : "none"}`} color={`${taskDetails.favorite ? "#F59E0B" : "#1F2937"}`} />
                        </button>
                    </li>
                    <li className="flex justify-between items-center w-full h-auto py-2.5">
                        <span className="block w-[40%]">Category</span>
                        <span className="flex justify-start items-center gap-2.5 w-[60%]">
                            <span className="shrink-0 w-5 h-5 flex justify-center items-center text-[#3B82F6]">
                                <Icon size={20} />
                            </span>
                            <span>{taskDetails?.category}</span>
                        </span>
                    </li>
                    <li className="flex justify-between items-center w-full h-auto py-2.5">
                        <span className="block w-[40%]">Priority</span>
                        <span className="flex justify-start items-center gap-2.5 w-[60%]">
                            <span className="shrink-0 w-5 h-5 flex justify-center items-center">
                                <span style={{ backgroundColor: priorityColor?.bgColor, boxShadow: `00px 0px 0px 5px ${priorityColor?.ringColor}` }} className="block w-2.5 h-2.5 rounded-full"></span>
                            </span>
                            <span>{taskDetails?.priority}</span>
                        </span>
                    </li>
                    <li className="flex justify-between items-center w-full h-auto py-2.5">
                        <span className="block w-[40%]">Due Date</span>
                        <span className="flex justify-start items-center gap-2.5 w-[60%]">
                            <span className="shrink-0 w-5 h-5 flex justify-center items-center">
                                <Calendar size={20} />
                            </span>
                            <span>{taskDetails.deadline ? formatDate(taskDetails.deadline) : "Not Set"}</span>
                        </span>
                    </li>
                    <li className="flex justify-between items-center w-full h-auto py-2.5">
                        <span className="block w-[40%]">Create At</span>
                        <span className="flex justify-start items-center gap-2.5 w-[60%]">
                            <span className="shrink-0 w-5 h-5 flex justify-center items-center">
                                <Clock size={20} />
                            </span>
                            <span>{formatDate(taskDetails.createDate)}</span>
                        </span>
                    </li>
                    <li className="flex flex-col justify-start items-start w-full h-auto py-2.5">
                        <span className="font-bold mb-1.25">Description</span>
                        <p className="text-[14px] text-[#6B7280] leading-5">
                           {taskDetails?.description}
                        </p>
                    </li>
                </ul>

                <div className="flex justify-between items-center gap-2.5 w-full h-auto font-[16px] mt-auto">
                    <TaskDetailBtn
                        label="Edit Task"
                        icon={PenLine}
                        color="#3B82F6"
                        bgColor="#3B82F611"
                        hoverColor="#3B82F644"
                        onClick={() => {
                            actions.startEdit(taskDetails.id);
                            actions.toggleViewDetailsModal(false);
                            actions.openAddTaskModal()
                        }}
                    />
                    <TaskDetailBtn
                        label="Delete Task"
                        icon={Trash2}
                        color="#EF4444"
                        bgColor="#EF444411"
                        hoverColor="#EF444444"
                        onClick={() => {
                            actions.moveTrash(taskDetails.id)
                            actions.toggleViewDetailsModal(false);
                        }}
                    />
                </div>

            </div>

        </div>
    )

}

export default ViewDetailsModal;