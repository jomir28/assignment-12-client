import useRole from "../hooks/useRole";
import TaskCreatorHome from "./TaskCreator/Home/TaskCreatorHome";


const DashboardHome = () => {
    const [role] = useRole()
    console.log(role);
    return (
        <div className="p-2">
           {role === 'Task Creator' && <TaskCreatorHome></TaskCreatorHome>}
        </div>
    );
};

export default DashboardHome;