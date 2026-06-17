import { useTaskContext } from "../../context/TaskContextProvider";
import {
    Eye,
    PenLine,
    Star,
    Trash2,
} from "lucide-react"

const EditMenuModal = () => {

    const {
        state,
        actions
    } = useTaskContext();

    const selectTask = state.todos.find(todo => todo.id === state.selectTaskId);
    if(!selectTask) return;

    return (
        <div className="flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full justify-end pr-5 items-center z-999">

            <div onClick={() => actions.closeEditMenuModal()} className="absolute inset-0 bg-transprent z-0"></div>

            <div className="flex flex-col justify-start items-center gap-1.25 w-70 h-auto bg-[#FFFFFF] shadow-sm p-2.5 rounded-md text-[14px] font-medium text-[#1F2937] z-1">
                
                <button
                    onClick={() => {
                        actions.toggleViewDetailsModal(true)
                        actions.closeEditMenuModal()
                    }}
                    className="flex justify-start items-center gap-2.5 w-full h-auto p-2.5 hover:bg-[#6D5DFC22] duration-300 rounded-sm cursor-pointer"
                >
                    <Eye size={20} />
                    View Details
                </button>
                <button
                    onClick={() => {
                        actions.startEdit(selectTask.id);
                        actions.closeEditMenuModal();
                        actions.openAddTaskModal();
                    }}
                    className="flex justify-start items-center gap-2.5 w-full h-auto p-2.5 hover:bg-[#6D5DFC22] duration-300 rounded-sm cursor-pointer"
                >
                    <PenLine size={20} />
                    Edit Task
                </button>
                <button
                    onClick={() => actions.isFavorite(selectTask.id)}
                    className="flex justify-start items-center gap-2.5 w-full h-auto p-2.5 hover:bg-[#6D5DFC22] duration-300 rounded-sm cursor-pointer"
                >

                    <Star size={20} fill={`${selectTask.favorite ? "#F59E0B" : "none"}`} color={`${selectTask.favorite ? "#F59E0B" : "#1F2937"}`} />
                    {selectTask.favorite ? "Remove Favorite" : "Add Favorite"}
                </button>

                <span className="block w-full h-px bg-[#1F293755]"></span>

                <button
                    onClick={() => {
                        actions.moveTrash(selectTask.id)
                        actions.toggleViewDetailsModal(false);
                    }}
                    className="flex justify-start items-center gap-2.5 w-full h-auto p-2.5 hover:bg-[#6D5DFC22] duration-300 rounded-sm cursor-pointer text-[#EF4444]"
                >
                    <Trash2 size={20} />
                    Move To Trash
                </button>

            </div>

        </div>
    )
}

export default EditMenuModal;