import React, { useState } from "react";
import InfoOne from "./infoOne";
import InfoTwo from "./infoTwo";
import styles from "../theme/obfuscate.module.css";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "../theme/index";
import fetch from "node-fetch";
import Swal from "sweetalert2";

import Layout from "../components/layout";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    programmingLanguage: "",
    codeLink: "",
  });
  function Alert(alertHeading, alertMessage) {
    const Swal = require("sweetalert2");
    Swal.fire(
      alertHeading,
      alertMessage,
      "success"
    );
  }
  function Error(errorHeading, errorMessage) {
    const Swal = require("sweetalert2");
    Swal.fire(errorHeading, errorMessage, "error");
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
                  var validUrl = require("valid-url");

                  if (
                    validUrl.isUri(formData.codeLink) &&
                    page === FormTitles.length - 2 
                  ) {
                    if(formData.codeLink.slice(-3) === ".js" || formData.codeLink.slice(-4) === ".js/"){
                    formData.programmingLanguage = 'JavaScript'
                    setPage((currPage) => currPage + 1);
                    }
                    else if(formData.codeLink.slice(-3) === ".py" || formData.codeLink.slice(-4) === ".py/"){
                      formData.programmingLanguage = 'Python'
                      console.log(FormData.programmingLanguage)
                      setPage((currPage) => currPage + 1);
                    }
                    // if url starts with https://github.com, proceed
                    else if(formData.codeLink.slice(0,19) === "https://github.com/"){
                      formData.programmingLanguage = 'GitHub Repository (.py and .js)'
                      setPage((currPage) => currPage + 1);
                  }
                    else{
                    Error("Error!", "Invalid URL. (URL submitted, but not valid)");
                    }
                  } else if (validUrl.isUri(formData.codeLink) === undefined) {
                    Error("Error!", "Invalid URL. (No URL submitted)");
                  }
                  if (page === FormTitles.length - 1) {
                    if (formData.programmingLanguage === "JavaScript") {
                      if(formData.codeLink.slice(-3) === ".js" || formData.codeLink.slice(-4) === ".js/"){
                        Alert("Success!", "Please wait, your obfuscated code will be downloaded shortly!");
                        window.location = "https://api.codeguard.tech?link=" + formData.codeLink + "&redirect=false";
                      }
                      else{
                        Error("Error!", "It seems you choosed the wrong programming language, it's better to proceed with the automatic selection.");
                      }
                  
                    } else if (formData.programmingLanguage === "Python") {
                      Alert("Success!", "Please wait, your obfuscated code will be downloaded shortly!");
                      if (formData.codeLink.slice(-3) === ".py" || formData.codeLink.slice(-4) === ".py/") {
                        window.location = "https://api.codeguard.tech?link=" + formData.codeLink + "&redirect=false";
                      }
                      else{
                        Error("Error!", "It seems you choosed the wrong programming language, it's better to proceed with the automatic selection.");
                      }
                    }
                      else if (formData.programmingLanguage === "GitHub Repository (.py and .js)") {
                        Alert("Success!", "Please wait, your obfuscated code will be downloaded shortly! (as a ZIP file)");
                        if (formData.codeLink.slice(0,19) === "https://github.com/") {
                          window.location = "https://api.codeguard.tech?link=" + formData.codeLink + "&redirect=false";
                        }
                        else {
                          Error("Error!", "It seems you choosed the wrong programming language (selection), it's better to proceed with the automatic selection.");
                        }
                      }
                  }
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
