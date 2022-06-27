import { Select } from "theme-ui";
import styles from "../theme/obfuscate.module.css";
function InfoTwo({ formData, setFormData }) {
console.log(formData.programmingLanguage)
  return (
    <div className={styles.eachContainer}>
      <Select
        defaultValue={formData.programmingLanguage}
        sx={style.input}
        onChange={(event) =>
          setFormData({ ...formData, programmingLanguage: event.target.value })
        }
      >
        <option>-- Select Programming Language --</option>
        <option>Python</option>
        <option>JavaScript</option>
        <option>GitHub Repository (.py and .js)</option>
      </Select>
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
    "&:focus": {
      border: "1px solid",
      borderColor: "#00ff00",
    },
  },
};

export default InfoTwo;
