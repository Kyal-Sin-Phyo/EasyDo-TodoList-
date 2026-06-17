
const formatDate = (dueDate) => {
    if(!dueDate) return false;
    const date = new Date(dueDate);
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getFullYear()}`;
    // const formattedTime = date.toLocaleTimeString("en-US", {
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     hour12: true,
    // });
    
    return formattedDate;
    
}
export default formatDate;