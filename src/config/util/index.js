// import { createBrowserHistory } from 'history';
// import { useNavigate } from 'react-router-dom';
// let history = createBrowserHistory()
// let snackBarRef = null

// const saveSnackbarRef = (ref) => {
//   snackBarRef = ref
// }

// const showSnackBar = ({ message, vertical, horizontal, severity, style }) => {
//   snackBarRef.setState({
//     open: true,
//     message: message || "success",
//     vertical: vertical || 'top',
//     horizontal: horizontal || 'center',
//     severity: severity || "success",
//     style
//   })
// }

// function camelCaseToTitle(text) {
//   var result = text.replace(/([A-Z])/g, " $1");
//   var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
//   return finalResult
// }

// const numWithCommas = num =>
//   num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// const AccountingFormat = (amount, currency = "") => {
//   if (amount < 0)
//     return `${currency}(${numWithCommas(
//       Number(Math.abs(amount))
//         .toFixed(2)
//         .replace("-", "")
//     )})`;
//   else
//     return `${currency}${numWithCommas(
//       Number(amount)
//         .toFixed(2)
//         .replace("-", "")
//     )}`;
// };


// const withRouter = (Component) => {
//   const Wrapper = (props) => {
//     const navigate = useNavigate();
    
//     return (
//       <Component
//         navigate={navigate}
//         {...props}
//         />
//     );
//   };
  
//   return Wrapper;
// };
// const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

// export default {
//   history,
//   snackBarRef,
//   withRouter,
//   saveSnackbarRef,
//   showSnackBar,
//   emailRegex,
//   camelCaseToTitle,
//   AccountingFormat,
// }

import { message } from 'antd';
// import { createBrowserHistory } from 'history';
import { useNavigate } from 'react-router-dom';

// let history = createBrowserHistory()
let snackBarRef = null

const saveSnackbarRef = (ref) => {
  snackBarRef = ref
}

const showSnackBar = ({ message, vertical, horizontal, severity, style }) => {
  snackBarRef?.setState({
    open: true,
    message: message || "success",
    vertical: vertical || 'top',
    horizontal: horizontal || 'center',
    severity: severity || "success",
    style
  })
}

const showMessage = (status, content) => {
  if (status == "success") {
    message.success({
      content:content,
      maxCount:1,
      duration:1
    })
    
  }
  if (status == "warning") {
    message.warning(content)
  }
  if (status == "error") {
    message.error({
      content:content,
      maxCount:1,
      duration:1
    })
  }

}

function camelCaseToTitle(text) {
  var result = text.replace(/([A-Z])/g, " $1");
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult
}

const numWithCommas = num =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const AccountingFormat = (amount, currency = "") => {
  if (amount < 0)
    return `${currency}(${numWithCommas(
      Number(Math.abs(amount))
        .toFixed(2)
        .replace("-", "")
    )})`;
  else
    return `${currency}${numWithCommas(
      Number(amount)
        .toFixed(2)
        .replace("-", "")
    )}`;
};

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    return (
      <Component
        navigate={navigate}
        {...props}
      />
    );
  };

  return Wrapper;
};
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

export default {
  // history,
  snackBarRef,
  withRouter,
  saveSnackbarRef,
  showSnackBar,
  emailRegex,
  camelCaseToTitle,
  AccountingFormat,
  showMessage
}