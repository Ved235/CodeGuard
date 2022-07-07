import React from "react";
import styles from "../theme/obfuscate.module.css";
import { Input, Text } from "theme-ui";
function InfoOne({ formData, setFormData }) {
  return (
    <div className={styles.eachContainer}>
      <Text sx={{ fontSize: "18px", marginBottom: "15px", cursor: "default" }}>
        Go to{" "}
        <a style={{ color: "blue" }} href="https://gist.github.com/" target="_blank">
          GitHub Gist
        </a>{" "}
        and paste your JavaScript or your Python code, open your code in raw
        view and paste the link in the address bar below OR{" "}
        <a style={{ color: "blue" }} href="https://github.com/new" target="_blank">
        create a GitHub Repository 
        </a>{" "}
        and paste your GitHub Repository link below!
      </Text>

      <Input
        sx={style.input}
        placeholder="GitHub Gist or GitHub Repo Link"
        value={formData.codeLink}
        onChange={(e) => {
          setFormData({ ...formData, codeLink: e.target.value });
        }}
      />
    </div>
  );
}
const style = {
  input: {
    borderRadius: ["4px"],
    backgroundColor: "#fff",
    width: ["240px", null, null, null, "315px", null, "375px"],
    height: ["45px", null, null, "55px", null, null, "65px"],
    padding: ["0 15px", null, null, "0 25px"],
    fontSize: [1, null, null, 2],
    border: "none",
    outline: "none",
    boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
    mt: "5px",
  },
};
export default InfoOne;
