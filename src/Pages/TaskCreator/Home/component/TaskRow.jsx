/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import SubmissionModal from "./SubmissionModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TaskRow = ({ task, refetch }) => {
    const axiosSecure = useAxiosSecure()


    const modalId = `modal_${task._id}`;

    const handleStatusReject = (id) => {
        Swal.fire({
            title: "Are you sure?",
            // text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const data = await axiosSecure.patch(`/task/reject/${id}`, { status:'Reject'})
                console.log(data);
                // Swal.fire({
                //     title: "Rejected!",
                //     text: "Rejected Successfully.",
                //     icon: "success"
                // });
                refetch()
            }
        });
    }
    

    return (
        <tr>
            <th>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={task.worker_image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{task.worker_name}</div>
                        <div className="text-sm opacity-50">{task.worker_email}</div>
                    </div>
                </div>
            </th>
            <td>
                {task.task_title}
            </td>
            <td>{task.payable_amount} coin</td>
            <td>
                <button className="underline" onClick={() => document.getElementById(modalId).showModal()}>View Submission</button>
                <SubmissionModal task={task} modalId={modalId}></SubmissionModal>
            </td>
            <td className="flex gap-2">
                <button onClick={()=>handleStatusReject(task._id)} className="py-2 px-4 rounded-lg bg-red-400 font-medium">Reject</button>
                <button className="py-2 px-4 rounded-lg bg-green-400 font-medium">Approved</button>
            </td>
            
            
        </tr>
    );
};


export default TaskRow;
