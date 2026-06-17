import { categories } from "../../data/initialData";
import { useTaskContext } from "../../context/TaskContextProvider";
import {
    Wallet,
    Check,
    X
} from "lucide-react"

const SelectCategoryModal = ({ setIsOpenSelectCategory }) => {

    const {
        state,
        actions,
    } =  useTaskContext();

    return (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-2.5 w-80 h-auto rounded-md py-2.5 bg-[#FFFFFF] overflow-hidden shadow-lg">
            
            <div className="w-full h-auto flex justify-between items-center my-3.75 px-2.5">
                <h3 className="font-bold text-[16px]">Select Category</h3>

                <button onClick={() => setIsOpenSelectCategory(false)} className="hover:text-[#fb2c36] text-[#1F2937]">
                    <X size={20} />
                </button>

            </div>

            <div className="flex flex-col justify-start items-center gap-1.25 w-full h-auto ">
                {categories.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={`${item}-${idx}`}
                            onClick={() => {
                                actions.inputCategory(item.key);
                                setIsOpenSelectCategory(false)
                            }}
                            className="flex justify-between items-center gap-1.25 w-full h-auto py-2.5 px-3 duration-300 hover:bg-[#3B82F622] rounded-sm"
                        >
                            <div style={{ color: item.color }} className="flex justify-between items-center gap-2.5 font-medium">
                                <Icon size={20} />
                                <span>{item.label}</span>
                            </div>

                            {state.inputCategory === item.key && (
                                <Check size={25} color="#3B82F6" />
                            )}
                        </button>
                    )
                })}
            </div>

        </div>
    )

}

export default SelectCategoryModal;