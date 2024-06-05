
import { Link, useLoaderData } from "react-router-dom";

const TaskDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="max-w-5xl mx-auto overflow-hidden font-raleway my-14 bg-white rounded-lg shadow-md mt-5">
            <img className=" w-full md:h-[500px]" src={data.task_image} alt="Article" />

            <form>
                <div className="p-6">
                    <div className="space-y-1 ">
                        <p className="text-lg font-medium text-blue-600 uppercase dark:text-blue-400">{data.task_title}</p>
                        <p className="text-xl font-medium  dark:text-blue-400">{data.task_detail}</p>
                        <p>Task Quantity: {data.task_quantity}</p>
                        <p>Payable Amount: {data.payable_amount} coin</p>
                        <p>Completion Date: {new Date(data.deadline).toLocaleDateString()}</p>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Submission Info: {data.submission_info}</p>
                    </div>


                    <div className="mt-5 h-36">
                        <textarea className="textarea border border-rose-400 border-opacity-40 bg-pink-50 w-full h-full textarea-bordered" placeholder="Submission Details"></textarea>
                    </div>


                    <div className="flex justify-between items-center">
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
                        <input className="btn btn-primary" type="submit" value="Submit" />
                    </div>


                </div>
           </form>
        </div>
    );
};

export default TaskDetails;