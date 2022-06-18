import React, { useState } from "react";
import InfoOne from './infoOne';
import InfoTwo from "./infoTwo";
import styles from '../theme/obfuscate.module.css'
function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    lang: "",
    link:""
  });

  const FormTitles = ["Upload your file", "Programming language"];

  const PageDisplay = () => {
    if (page === 0) {
      return <InfoOne formData={formData} setFormData={setFormData} />;
      
    } else if (page === 1) {
      return <InfoTwo formData={formData} setFormData={setFormData} />;
    } 
  };

  return (
   <div className={styles.app}>
    <div className={styles.form}>
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : "100%" }}
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
          
            hidden={page == 0}
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