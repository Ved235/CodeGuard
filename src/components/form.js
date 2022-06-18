import React, { useState } from "react";
import InfoThree from "./infoThree";
import InfoOne from './infoOne';
import InfoTwo from "./infoTwo";
import styles from '../theme/obfuscate.module.css'
function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <InfoThree formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <InfoOne formData={formData} setFormData={setFormData} />;
    } else {
      return <InfoTwo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
   <div className={styles.app}>
    <div className={styles.form}>
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.header}>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className={styles.body}>{PageDisplay()}</div>
        <div className={styles.footer}>
          <button
           className={styles.button}
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
          className={styles.button}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Form;