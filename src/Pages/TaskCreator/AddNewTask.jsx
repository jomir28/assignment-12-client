import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Providers/AuthProvider";

const AddNewTask = () => {
    const{user} = useContext(AuthContext)
    const [deadline, setStartDate] = useState(new Date());
    
    return (
        <div>
            <form>
                
                    
                    {/* date picker */}
                    {/* <div className="mb-4 ">
                        <label htmlFor="deadline" className="block font-semibold mb-1">Deadline:</label>
                        <DatePicker
                            className="border p-2 rounded-md"
                            selected={deadline} onChange={(date) => setStartDate(date)} />
                    </div> */}
              



            

                
            </form>
        </div>
    );
};

export default AddNewTask;