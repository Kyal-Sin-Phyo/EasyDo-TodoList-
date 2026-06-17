import { useState } from "react";
import {
    X
} from "lucide-react";

const CategoryFilterModal = ({ title, activeCat, filterGrp, filterFn, closeFilter }) => {
    
    const [selectCategory, setSelectCategory] = useState(activeCat);

    return (
        <div className="absolute inset-0 grid place-content-center w-full h-full z-999">
            <div className="flex flex-col gap-1.25 w-80 h-auto py-3.75 px-5 rounded-md bg-[#FFFFFF] shadow-md text-[#1F2937] text-[16px] font-medium">
                <div className="flex justify-between items-center w-full h-auto">
                    <h2 className="text-[18px] font-bold mb-2.5">{title}</h2>
                    <button onClick={closeFilter} className="outline-none hover:text-[#FB2C36]">
                        <X size={25} />
                    </button>
                </div>
                <button
                    onClick={() => setSelectCategory("all")}
                    className="flex justify-start items-center gap-2.5 w-full h-auto py-2.5 cursor-pointer"
                >
                    <span className={`block w-5 h-5 ${selectCategory === "all" ? "border-3 border-white bg-[#3B82F6] ring-2 ring-[#3B82F6]" : "ring-2 ring-[#3B82F6]"} rounded-full`}></span>
                    <span>All</span>
                </button>
                {filterGrp.map((item, idx) => (
                    <button
                        key={`${item.key}-${idx}`}
                        onClick={() => setSelectCategory(item.key)}
                        className="flex justify-start items-center gap-2.5 w-full h-auto py-2.5 cursor-pointer"
                    >
                        <span className={`block w-5 h-5 ${selectCategory === item.key ? "border-3 border-white bg-[#3B82F6] ring-2 ring-[#3B82F6]" : "ring-2 ring-[#3B82F6]"} rounded-full`}></span>
                        <span>{item.label}</span>
                    </button>
                ))}
                <div className="w-full flex justify-end items-center gap-2.5 mt-2.5">
                    <button onClick={closeFilter} className="w-21.25 h-auto py-1 border rounded-sm cursor-pointer">Cancel</button>
                    <button
                        onClick={() => {
                            filterFn.filterCategory(selectCategory)
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

export default CategoryFilterModal;