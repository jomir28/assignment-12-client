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
                <button onClick={() => document.getElementById(modalId).showModal()}><span className="px-2 py-1 bg-indigo-200 rounded-xl font-medium">View Submission</span></button>
            </td>
            <SubmissionModal task={task} modalId={modalId}></SubmissionModal>
        </tr>
    );
};


export default TaskRow;
