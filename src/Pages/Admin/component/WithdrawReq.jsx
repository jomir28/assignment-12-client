
const WithdrawReq = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Worker Info</th>
                        <th>Withdraw Coin</th>
                        <th>Withdraw Amount</th>
                        <th>Payment Number</th>
                        <th>Payment System</th>
                        <th>Withdraw Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            50
                        </td>
                        <td>Purple</td>
                        <td>Purple</td>
                        <td>Purple</td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                        
                    </tr>
                   
                </tbody>

            </table>
        </div>
    );
};

export default WithdrawReq;