import { useState } from "react";
// import { Link } from "react-router-dom";
import FormInput from "../components/formInput";
import { RiAdminLine } from "react-icons/ri";

export default function PatientLogin() {
  const [logvalues, setValues] = useState({
    email: "",
    password: "",
  });
  
  const aLInputs = [
    {
      id: 201,
      inpuConClass: "fromInput field-con",
      name: "email",
      placeholder: "Email",
      type: "email",
      errorMessage: "Please enter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 202,
      inpuConClass: "fromInput field-con",
      name: "password",
      placeholder: "Password",
      type: "password",
      errorMessage: "Password is required",
      // pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,19}$`,
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...logvalues, [e.target.name]: e.target.value });
  };
  console.log(logvalues);
  return (
    <>
      <div className="login-main-continer">
      <div className="page-bg-min-con-nav">
          <div className="page-background-nav page-back-1-nav">
           
            <CiMedicalCross />
          </div>
          <div className="page-background-nav page-back-3-nav">
            
            <CiMedicalCross />
          </div>
          <div className="page-background-nav page-back-2-nav">
            <FaHandHoldingMedical />
          </div>
          <div className="page-background-nav page-back-4-nav">
          <CiMedicalClipboard />
          <FaHouseMedical />
          </div>
         
          <div className="page-background-nav page-back-5-nav">
            <CiMedicalClipboard />
          </div>
        </div>
        <section className="form-main-continer login-main">
          
          
          <div className="form-name-logo-con">
            
            <div className="form-icon-con">
              <RiAdminLine />
            </div>
            <div className="form-name-con">
              <span>Patient LogIn</span>
            </div>
          </div>

          <form className="admin-log-form" onSubmit={handleSubmit}>
            {aLInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={logvalues[input.name]}
                onChange={onChange}

              />
            ))}

            <button>LogIn</button>
          </form>
         
        </section>
      </div>
    </>
  );
}
