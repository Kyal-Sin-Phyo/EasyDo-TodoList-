import {
    Menu,
} from "lucide-react";

const MenuBtn = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex justify-center items-center w-8.75 h-8.75 rounded-sm bg-[#9CA3AF22]"
        >
            <Menu />
        </button>
    )
}

export default MenuBtn;