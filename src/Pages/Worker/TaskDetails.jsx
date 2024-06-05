
import { Link, useLoaderData } from "react-router-dom";

const TaskDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="max-w-5xl mx-auto overflow-hidden font-raleway bg-white rounded-lg shadow-md mt-5">
            <img className=" w-full md:h-[500px]" src={data.task_image} alt="Article" />

            <div className="p-6">
                <div className="space-y-1 ">
                    <p className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">{data.task_title}</p>
                    <p className="text-xl font-medium  dark:text-blue-400">{data.task_detail}</p>
                    <p>Task Quantity: {data.task_quantity}</p>
                    <p>Payable Amount: {data.payable_amount} coin</p>
                    <p>Completion Date: {new Date(data.deadline).toLocaleDateString()}</p>
                    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Submission Info: {data.submission_info}</p>
                </div>

                <div className="flex justify-between items-center">

                    <div className="mt-5" >
                        <Link>
                            <button className="btn btn-outline btn-success">Be A Volunteer</button>
                        </Link>
                    </div>

                    <div className="mt-4">
                        <div className="flex gap-5 items-center">
                            <div>
                                <img className="object-cover w-14 h-14 rounded-full" src={data?.user.photo_url} alt="Avatar" />
                            </div>
                            <div>
                                <p>{data.user.name}</p>
                                <p>{data.user.email}</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TaskDetails;