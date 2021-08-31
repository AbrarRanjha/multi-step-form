import React from 'react'
import {TextField} from "@material-ui/core";
import { Controller, useFormContext} from "react-hook-form";
const BasicForm = () => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    console.log(errors);
    return (
      <>
        <Controller
          control={control}
          name="firstName"
          rules={{ required: "this field is required.",
           minLength:
          {
             value:3,
             message:'Length must be  3 characters'
          }, }}
          render={({ field }) => (
            <TextField
              id="first-name"
              label="First Name"
              variant="outlined"
              placeholder="Enter Your First Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.firstName)}
              helperText={errors.firstName?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="lastName"
          rules={{ required: "this field is required.",
          minLength:
          {
             value:3,
             message:'Length must be 3 characters'
          },
        }}
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Last Name"
              variant="outlined"
              placeholder="Enter Your Last Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.lastName)}
              helperText={errors.lastName?.message}
            />
          )}
        />
  
        <Controller
          control={control}
          name="userName"
          rules={{ required: "this field is required.",
          minLength:
          {
             value:3,
             message:'Length must be  3 characters'
          }, }}
          render={({ field }) => (
            <TextField
              id="user-name"
              label="User Name"
              variant="outlined"
              placeholder="Enter User Name"
              fullWidth
              margin="normal"
              {...field}
              error={Boolean(errors?.userName)}
              helperText={errors.userName?.message}
            />
          )}
        />
      </>
    );
  };

export default BasicForm;
