

const MyTask = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task Title</th>
                        <th>Task Quantity</th>
                        <th>Payable Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td className="flex gap-2 ">
                            <button className="btn">Update</button>
                            <button className="btn">Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
};

export default MyTask;