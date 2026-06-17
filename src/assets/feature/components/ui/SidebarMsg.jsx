
const SidebarMsg = ({ text, des, icon: Icon }) => {
    return (
        <div className="shrink-0 flex justify-center items-center gap-2.5 w-full h-auto rounded-lg shadow-sm bg-[#FFFFFF] px-2.5 py-5">

            <span className="block overflow-hidden">
                <Icon strokeWidth="1px" size="45px" />
            </span>

            <p>
               <span className="font-semibold text-[16px]">{text}</span><br />
               <span className="text-[14px]">{des}</span>   
            </p>

        </div>
    )
}

export default SidebarMsg;