/* eslint-disable react/prop-types */

import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ManageTaskRow = ({ task }) => {
    console.log(task);
    const modalId = `modal_${task._id}`;
    return (
        <tr>
            <td>{task.task_title}</td>
            <td>{task.user.name}</td>
            <td>{task.task_quantity}</td>
            <td>{task.task_quantity * task.payable_amount}</td>
            <td>{task.task_quantity === 0 ? 'false' : 'true'}</td>
            <td onClick={() => document.getElementById(modalId).showModal()}>
                <FaRegEye className="text-xl text-green-700" />
                <dialog id={modalId} className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Task Detail</h3>
                        <p className="py-4">{task.task_detail}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </td>
            <td>
                <MdDelete className="text-xl" />

            </td>
           
        </tr>
    );
};

export default ManageTaskRow;