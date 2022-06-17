import React from "react";
import styles from '../theme/obfuscate.module.css'
function InfoTwo({ formData, setFormData }) {
  return (
    <div className={styles.eachContainer}>
      <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
    </div>
  );
}

export default InfoTwo;
