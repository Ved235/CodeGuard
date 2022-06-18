import React from "react";
import styles from '../theme/obfuscate.module.css'
import { Input, Text} from 'theme-ui';
function InfoOne({ formData, setFormData }) {
  return (
    <div className={styles.eachContainer}>
      <Text sx={{align:'center', fontSize:'18px',marginBottom: '15px'}}>Go to File Doge and upload your JavaScript or your Python file, and copy the link</Text>
      <Input
      sx={style.input}
        type="text"
        placeholder="File Doge Link"
        value={formData.link}
        onChange={(e) => {
          setFormData({ ...formData, link: e.target.value });
        }}
      />
     
    </div>
  );
}
const style={
  input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '375px'],
      height: ['45px', null, null, '55px', null, null, '65px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      mt:'5px'
    },
}
export default InfoOne;