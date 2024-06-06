/* eslint-disable react/prop-types */
import SubmissionModal from "./SubmissionModal";

const TaskRow = ({ task }) => {

    const modalId = `modal_${task._id}`;
    

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
                <button className="py-2 px-4 rounded-lg bg-red-400 font-medium">Reject</button>
                <button className="py-2 px-4 rounded-lg bg-green-400 font-medium">Approved</button>
            </td>
            
            
        </tr>
    );
};


export default TaskRow;
