import { useLocation, useNavigate } from "react-router";

function ViewEmployee() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" mt-10">
      <h1 className="text-5xl text-center text-cyan-950 mb-5">
        Employee Details
      </h1>
      <div className="text-center rounded-4xl py-10 text-xl text-fuchsia-950 bg-fuchsia-50 mt-15 mx-96 shadow-fuchsia-500 shadow-xl">
        <p>Name: {state.name}</p>
        <p>Email: {state.email}</p>
        <p>Mobile: {state.mobile}</p>
        <p>Designation: {state.designation}</p>
        <p>Company: {state.companyName}</p>
        </div>
    </div>
  );
}

export default ViewEmployee