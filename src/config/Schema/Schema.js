"use client";
import * as yup from "yup";

// for user login or sign in validation schema
export const userLogin = yup.object().shape({
    email: yup.string()
        .email('Invaild Email')
        .required('Email is required')
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/, 'Please enter a valid email'),
    password: yup.string()
        .required('Password is required')
    // .min(8)
    // .max(32)
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .matches(/[0-9]/, 'Password must contain at least one number')
    // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')

});

// for useremail for forget password
export const userEmail = yup.object().shape({
    email: yup.string().email('Invaild Email').required('Email is required'),
});

// for password matching in forget password.
export const passwordVerification = yup.object().shape({
    password: yup.string()
        .min(8)
        .max(32)
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Password is required'),
    confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords do not match'),

});

// for password reset from profile.
export const changePassword = yup.object().shape({
    old_Password: yup.string()
        .required('Old Password is required')
    // .min(8)
    // .max(32)
    // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    // .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    // .matches(/[0-9]/, 'Password must contain at least one number')
    ,

    Password: yup.string()
        .required('New Password is required')
        .min(8)
        .max(32)
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
        .matches(/[0-9]/, 'Password must contain at least one number'),
        

    confirmPassword: yup.string().label('confirm password').required('Confirm Password is required').oneOf([yup.ref('Password'), null], 'Passwords do not match'),

})