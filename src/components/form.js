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
  
              if (validUrl.isUri(formData.codeLink)){
                  console.log('Looks like an URL');
                  if (page === FormTitles.length - 1) {
                    Alert();
                    $window.location = "http://194.233.170.133?codeLink=" + formData.codeLink + "&programmingLanguage=py";
                  }
                    }
                    else if (formData.programmingLanguage === "JavaScript") {
                      Alert();
                      // download file
                      fetch(formData.codeLink)
                      .then(resp => resp.blob())
                      .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.style.display = 'none';
                        a.href = url;
                        // the filename you want
                        a.download = 'code.js';
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(url);
                        Alert()
                        // run ObfuscatorUtil.js and wait until it finishes
                        // then download the file
                        // var fs = require("fs");
                        // var jsObfuscator = require("javascript-obfuscator");
                        // fs.readFile('./code.js', 'UTF-8', function(error, code){
                        //   if (error)
                        //   {
                        //       throw error;
                        //   }
                        //   var obfuscatorResult = jsObfuscator.obfuscate(code);
                        //   fs.writeFile('./obfuscatedCode.js', obfuscatorResult.getObfuscatedCode(), function(fsError){
                        //       if (fsError)
                        //       {
                        //           return console.log(fsError);
                        //       }
                        //       alert("Obfuscated code written to file");
                        //       // provide download link
                        //   });
                        // });
                      });
                    }

                  
                    else {
                      alert("Please select a programming language and try again!");
                    }
                  }
                else {
                  setPage((currPage) => currPage + 1);
                }
              } else {
                 alert('Not a valid URL');
              }
              /*if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }*/
              
            }}
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
