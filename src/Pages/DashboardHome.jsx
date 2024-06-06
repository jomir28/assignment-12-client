import useRole from "../hooks/useRole";
import TaskCreatorHome from "./TaskCreator/Home/TaskCreatorHome";
import WorkerHome from "./Worker/WorkerHome";


const DashboardHome = () => {
    const [role] = useRole()
    console.log(role);
    return (
        <div className="p-2">
           {role === 'Worker' && <WorkerHome></WorkerHome>}
           {role === 'Task Creator' && <TaskCreatorHome></TaskCreatorHome>}
        </div>
    );
};

export default DashboardHome;