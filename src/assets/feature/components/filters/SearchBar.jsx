import { useTaskContext } from "../../context/TaskContextProvider";
import {
    Search,
    X
} from "lucide-react"

const SeachBar = () => {

    const {
        state,
        actions
    } = useTaskContext();

    return (
        <div className="focus-within:border-[#6D5DFC] flex justify-start items-center w-full min-w-35 h-11.25 overflow-hidden border border-[#1F293755] rounded-md">
            <span className="px-2.5">
                <Search size={20} />
            </span>
            <input
                type="text"
                value={state.search}
                placeholder="Search Task..."
                onChange={e => actions.searchTask(e.target.value)}
                className=" py-2.5 w-full h-full text-[14px] outline-none"
            />
            <button
                onClick={() => actions.searchTask("")}
                className="outline-none h-full px-2.5 cursor-pointer hover:text-[#EF4444]"
            >
                <X size={20} />
            </button>
        </div>
    )
}

export default SeachBar;