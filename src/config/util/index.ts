import { message } from 'antd';
import React, { ComponentType } from 'react';

// Snackbar Reference
let snackBarRef: any = null;

// Save Snackbar Reference
const saveSnackbarRef = (ref: any): void => {
  snackBarRef = ref;
};

// Snackbar Options Type
interface SnackbarOptions {
  message?: string;
  vertical?: 'top' | 'bottom';
  horizontal?: 'center' | 'left' | 'right';
  severity?: 'success' | 'error' | 'warning' | 'info';
  style?: React.CSSProperties;
}

// Show Snackbar
const showSnackBar = ({ message, vertical, horizontal, severity, style }: SnackbarOptions): void => {
  snackBarRef?.setState({
    open: true,
    message: message || 'success',
    vertical: vertical || 'top',
    horizontal: horizontal || 'center',
    severity: severity || 'success',
    style,
  });
};

// Message Status Type
type MessageStatus = 'success' | 'warning' | 'error';

// Show Message
// const showMessage = (status: MessageStatus, content: string): void => {
  
//   if (status == 'success') {
//     console.log("ddddddddd",status,content);
//     message.success({
//       content,
//       duration: 1,
//     });
//   } else if (status === 'warning') {
//     message.warning(content);
//   } else if (status === 'error') {
//     message.error({
//       content,
//       duration: 1,
//     });
//   }
// };
// message.config({
//   maxCount: 1, // Ensures only one message is displayed at a time
// });

// Convert camelCase to Title Case
const camelCaseToTitle = (text: string): string => {
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
};

// Add commas to numbers
const numWithCommas = (num: number): string =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// Format Accounting Numbers

// Email Regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

// Export everything
const utils = {
  snackBarRef,
  saveSnackbarRef,
  showSnackBar,
  emailRegex,
  camelCaseToTitle,
  // showMessage,
};

export default utils;
