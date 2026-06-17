import {
    Rows3,
    LayoutGrid,
} from "lucide-react"

const ViewToggle = ({ changeViewFn }) => {
    return (
        <div className="shrink-0 w-22.5 h-full border rounded-md border-[#1F293755] flex justify-between items-center relative">

            <span className="absolute w-10 h-10 left-0.5 rounded-sm bg-[#6D5DFCAA] z-0"></span>

            <button onClick={() => changeViewFn.changeView("list")} className="w-full h-full rounded-sm flex justify-center items-center z-1 cursor-pointer">
                <Rows3 />
            </button>
            <button onClick={() => changeViewFn.changeView("grid")} className="w-full h-full rounded-sm flex justify-center items-center z-1 cursor-pointer">
                <LayoutGrid />
            </button>

        </div>
    )
}

export default ViewToggle;