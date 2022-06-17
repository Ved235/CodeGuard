import React from "react";
import { Box, Container, Grid, Button, Input, Heading, Text } from 'theme-ui';
import styles from '../theme/obfuscate.module.css'
function InfoThree({ formData, setFormData }) {
  return (
    <div className={styles.eachContainer}>
      <Input 
        sx={style.input}
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <Input
        type="text"
        sx={style.input}
        placeholder="Password..."
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <Input
        type="text"
        sx={style.input}
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
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
export default InfoThree;