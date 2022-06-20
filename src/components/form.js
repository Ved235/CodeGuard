import React, { useState } from "react";
import InfoOne from './infoOne';
import InfoTwo from "./infoTwo";
import styles from '../theme/obfuscate.module.css';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from '../theme/index';
import fetch from "node-fetch";
import Swal from 'sweetalert2';

import Layout from '../components/layout';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    programmingLanguage: "",
    codeLink:""
  });
function  Alert(){
  const Swal = require('sweetalert2')
  Swal.fire(
    'Success!',
    'Your obfuscated code file will be automatically downloaded shortly.',
    'success'
  )
}
function Error(){
  const Swal = require('sweetalert2')
  Swal.fire(
    'Error!',
    'We encountered a problem!',
    'error'
  )
}
  const FormTitles = ["Upload your file", "Programming language"];

  const PageDisplay = () => {
    if (page === 0) {
      return <InfoOne formData={formData} setFormData={setFormData} />;
      
    } else if (page === 1) {
      return <InfoTwo formData={formData} setFormData={setFormData} />;
    } 
  };

  return (

     <Layout>
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
          type="submit"
            onClick={() => {
              var validUrl = require('valid-url');
  
              if (validUrl.isUri(formData.codeLink) && page === FormTitles.length - 2){
                  console.log('Looks like an URL');
                  setPage((currPage) => currPage + 1);
              }
              else{
                Error()
              }
              if (page === FormTitles.length - 1) {
                if (formData.programmingLanguage === "JavaScript") {
                  alert("Okay! It's JavaScript!!")
                    
                }
                
              else if(formData.programmingLanguage === "Python"){
                  window.location = "http://194.233.170.133?link=" + formData.codeLink + "&lang=py";

                }
                else{
                  Error()
                }
              }         
              }
              
            }
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
    </div>
  
            </Layout>
  );
}

export default Form;
