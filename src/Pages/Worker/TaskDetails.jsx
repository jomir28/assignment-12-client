import { useLoaderData } from "react-router-dom";

const TaskDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h3>Single Task Details Page</h3>
        </div>
    );
};

export default TaskDetails;