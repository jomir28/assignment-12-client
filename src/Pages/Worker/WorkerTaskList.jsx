import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../Component/Loading";
import TaskListComponent from "./TaskListComponent";


const WorkerTaskList = () => {

    const axiosSecure = useAxiosSecure()

    const { data: allTask, isLoading } = useQuery({
        queryKey: ['all-task'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/all-task`)
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(allTask, isLoading);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 px-2 md:px-10 my-14">
            {
                allTask.map(task => <TaskListComponent key={task._id} task={task}></TaskListComponent>
                )
            }
        </div>
    );
};

export default WorkerTaskList;