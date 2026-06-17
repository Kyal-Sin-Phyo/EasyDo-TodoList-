import { lazy, useState } from "react";
import {
    X,
    ArrowUpDown,
    ClockArrowDown,
    ClockArrowUp,
    ArrowDownAZ,
    ArrowDownZA,
} from "lucide-react";

const SortLists = [
    // {
    //     label: "All",
    //     key: "all",
    //     icon: ArrowUpDown,
    // },
    {
        label: "Newest",
        key: "newest",
        icon: ClockArrowDown
    },
    {
        label: "Oldest",
        key: "oldest",
        icon: ClockArrowUp
    },
    {
        label: "A-Z",
        key: "a-z",
        icon: ArrowDownAZ
    },
    {
        label: "Z-A",
        key: "z-a",
        icon: ArrowDownZA
    }
]

const SortFilterModal = ({ activeSort, filterFn, closeFilter }) => {
    const [selectSort, setSelectSort] = useState(activeSort);
    return (
        <div className="absolute inset-0 grid place-content-center w-full h-full z-999">
            <div className="flex flex-col gap-1.25 w-80 h-auto py-3.75 px-5 rounded-md bg-[#FFFFFF] shadow-md text-[#1F2937] text-[16px] font-medium">
                <div className="flex justify-between items-center w-full h-auto">
                    <h2 className="text-[18px] font-bold mb-2.5">Sort By</h2>
                    <button onClick={closeFilter} className="outline-none hover:text-[#FB2C36]">
                        <X size={25} />
                    </button>
                </div>
                {SortLists.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={`${item.key}-${idx}`}
                            onClick={() => setSelectSort(item.key)}
                            className="flex justify-between items-center w-full h-auto py-2.5 cursor-pointer"
                        >
                            <div className="flex justify-start items-center gap-2.5">
                                <span className={`block w-5 h-5 ${selectSort === item.key ? "border-3 border-white bg-[#3B82F6] ring-2 ring-[#3B82F6]" : "ring-2 ring-[#3B82F6]"} rounded-full`}></span>
                                <span>{item.label}</span>
                            </div>
                            <Icon size={20} />
                        </button>
                    )
                })}
                <div className="w-full flex justify-end items-center gap-2.5 mt-2.5">
                    <button onClick={closeFilter} className="w-21.25 h-auto py-1 border rounded-sm cursor-pointer">Cancel</button>
                    <button
                        onClick={() => {
                            filterFn.filterSort(selectSort);
                            closeFilter();
                        }}
                        className="w-21.25 h-auto py-1 border rounded-sm cursor-pointer bg-[#3B82F6] text-[#FFFFFF]"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SortFilterModal;