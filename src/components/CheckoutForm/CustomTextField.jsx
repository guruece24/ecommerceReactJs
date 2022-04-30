import React from 'react';
import {TextField, Grid} from '@material-ui/core';
import {useFormContext, Controller } from 'react-hook-form';

const FormInput  = ( {name, label, inputRef, required }) => {
const { control, ref  } = useFormContext();
const isError = false;

  return (
    <Grid item xs={12} sm={6}>
       {/* <Controller
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
      /> */}

      <Controller 
       control={control}    name={ name }  
        render={({ field: { ref, ...field }, fieldState }) =>   (
                  <TextField  label={ label }   fullWidth   
                  required={ required } {...field} inputRef={ref} error={isError} ></TextField>
        )}
        >
      </Controller>
    </Grid>
  );
}

export default FormInput
