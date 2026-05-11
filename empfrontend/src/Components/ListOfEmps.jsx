import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Employee from "./Employee";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/view", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/edit-emp",{state:empObj});
  };



      const deleteEmpByID = async (id) => {
    let res = await axios.delete(`http://localhost:3000/employee-api/employees/${id}`)
    if(res.status===200){
        getEmps();
    }
  }
    async function getEmps() {
      let res = await fetch("http://localhost:3000/employee-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }

    useEffect(() => {
        getEmps();
    }, []);


  return (
    <div>
      <h1 className="text-4xl text-center pb-10">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center rounded-2xl shadow-2xl ">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            <div className="flex justify-around">
              <button onClick={() => gotoEmployee(empObj)} className="bg-blue-500 p-2 rounded-2xl text-white">
                View
              </button>
              <button onClick={()=>gotoEditEmployee(empObj)} className="bg-green-300 p-2 rounded-2xl text-white">
                Edit
              </button>
              <button onClick={() => deleteEmpByID(empObj._id)} className="bg-red-500 p-2 rounded-2xl text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;