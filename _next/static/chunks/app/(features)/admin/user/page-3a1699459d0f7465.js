(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{83874:(e,a,t)=>{Promise.resolve().then(t.bind(t,76356))},76356:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>k});var l=t(95155),s=t(12115),i=t(62516),r=t(84172),o=t(66799),n=t(37488),d=t(40899),c=t(69606),m=t(81860),u=t(67396),h=t(92258),f=t(83465),x=t(38394),p=t(26711),g=t(76600);let j=e=>{let{tableData:a,tableColumns:t,onHandleChange:s,previousPage:i,metaData:r,isLoader:o,allowedAccountLoading:n,fromOrder:d,sorter:c,headerBg:m,loading:u,total:h,pageSize:f,currentPage:j,handlePaginationChange:v,rowClassName:A,tableStyle:N,position:w,size:b}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Ay,{theme:{components:{Table:{headerColor:g.A.DarkGray,headerBg:g.A.White,cellPaddingBlock:26,cellPaddingInline:26,headerBorderRadius:3,cellFontSize:15}}},children:(0,l.jsx)(x.A,{style:N,dataSource:a,columns:t,loading:u,rowClassName:A,size:b})})})};t(30347);var v=t(33060);let A=e=>{let{checked:a,onChange:t,...s}=e;return(0,l.jsx)(v.A,{checked:a,onChange:t,checkedIcon:!1,uncheckedIcon:!1,onColor:"#b53689",offColor:"#fff",offHandleColor:"#c2c2c2",...s})};var N=t(11536),w=t(51019),b=t(68047);let C=(0,s.forwardRef)((e,a)=>{let{disabled:t=!1,icon:s,loading:i=!1,shape:r,type:o,size:n,text:d,onClick:c,className:m,containerStyle:u,buttonStyle:h,htmlType:f,...x}=e;return(0,l.jsx)("div",{style:u,children:(0,l.jsx)(p.Ay,{theme:{token:{colorPrimaryHover:"green",controlHeight:33,lineHeight:0,lineWidth:0}},children:(0,l.jsx)(b.Ay,{disabled:t,icon:s,loading:i,shape:r,size:n,type:o,onClick:c,style:h,className:m,ref:a,htmlType:f,...x,children:d})})})});C.displayName="Basic";let y=e=>{let{modalType:a,title:t,className:s="",onCancel:r,closeable:o=!0,text:d,isModalOpen:c,leftButtonText:m,leftButtonStyle:u,onClickLeft:h,rightButtonText:f,rightButtonStyle:x,onClickRight:p,btnLoadingLeft:g=!1,loadingLeft:j=!1,btnLoadingRight:v=!1,loadingRight:A=!1,isFooter:N=!0,isCommentModal:b=!1,descriptionStyle:y,centered:k=!0,width:P=520}=e;return console.log("description: ",t),(0,l.jsx)(w.A,{className:"basicModal ".concat(s),title:t,open:c,onCancel:r,centered:k,closable:o,width:P,footer:N?(0,l.jsxs)(n.A,{gutter:24,children:[(0,l.jsx)(i.A,{span:12,children:(0,l.jsx)(C,{className:"footer-action footer-btn-1 w-full h-12",style:u,text:m,onClick:h,disabled:g,size:"large"})}),(0,l.jsx)(i.A,{span:12,children:(0,l.jsx)(C,{className:"footer-action footer-btn-2 w-full h-12",type:"primary",size:"large",style:x,text:f,onClick:p,disabled:v})})]}):null,children:d})};function k(){let e=h.pH,{handleSubmit:a,control:t,formState:{errors:x}}=(0,c.mN)({mode:"onChange",resolver:(0,m.t)(e)}),[p,g]=(0,s.useState)(!1),[v,w]=(0,s.useState)(!1),b=()=>{g(!0)},C=(e,a)=>{w(!0)},k=[{title:"S.no",dataIndex:"id",align:"left",render:(e,a)=>(0,l.jsx)("span",{className:"cursor-pointer",children:null==a?void 0:a.id})},{title:"Name",dataIndex:"fullName",align:"left",render:(e,a)=>{var t,s;return(null==a?void 0:null===(t=a.fullName)||void 0===t?void 0:t.length)>12?(0,l.jsxs)(i.A,{lg:24,className:"flex  items-center  sm:justify-start cursor-pointer",children:[(null==a?void 0:a.image)?(0,l.jsx)(r.A,{alt:"UserImage",src:null==a?void 0:a.image}):(0,l.jsx)(r.A,{alt:"UserImage",src:d.BV.src}),(0,l.jsx)(o.A,{placement:"bottom",title:null==a?void 0:a.fullName,children:(0,l.jsx)("span",{className:"pl-3",children:(null==a?void 0:null===(s=a.fullName)||void 0===s?void 0:s.slice(0,13))+"..."})})]}):(0,l.jsxs)(i.A,{lg:24,className:"flex items-center  sm:justify-start cursor-pointer",children:[(null==a?void 0:a.image)?(0,l.jsx)(r.A,{alt:"UserImage",src:null==a?void 0:a.image}):(0,l.jsx)(r.A,{alt:"UserImage",src:d.BV.src}),(0,l.jsx)("span",{className:"pl-3",children:null==a?void 0:a.fullName})]})}},{title:"Email",dataIndex:"email",align:"left",render:(e,a)=>(0,l.jsx)(i.A,{children:(0,l.jsx)("span",{children:null==a?void 0:a.email})})},{title:"Profiles Created",dataIndex:"profilesCreated",align:"left",render:(e,a)=>(0,l.jsx)(i.A,{children:(0,l.jsx)("span",{children:(null==a?void 0:a.profilesCreated)?a.profilesCreated:"0"})})},{title:"Status",dataIndex:"status",align:"left",render:(e,a)=>(0,l.jsx)(n.A,{justify:"start",align:"bottom",className:"gap-2 flex items-center justify-between",children:(0,l.jsx)(A,{checked:(null==a?void 0:a.status)==="Active",onChange:e=>C(null==a?void 0:a.id,e),className:"".concat((null==a?void 0:a.status)=="Active"?"border-switch":"border-unswitch")})})},{title:"Action",dataIndex:"",align:"left",render:(e,a)=>(0,l.jsxs)(n.A,{className:"flex",children:[(0,l.jsx)("div",{className:"mr-3 cursor-pointer",children:(0,l.jsx)(r.A,{alt:"UserDelete",src:d.Hb.src,preview:!1,width:36,height:36,onClick:b})}),(0,l.jsx)(u.default,{href:"/admin/user/".concat(null==a?void 0:a.id),className:"mr-3",children:(0,l.jsx)(r.A,{alt:"UserDetails",src:d.uS.src,preview:!1,width:36,height:36})})]})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.default,{children:(0,l.jsxs)("div",{className:"p-8 bg-[#f5f5f5] w-fit md:w-full ",children:[(0,l.jsx)("div",{className:" z-50 mb-6",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"mb-2 text-[#afb2bd]",children:"Pages / User Management"}),(0,l.jsx)("p",{className:"font-extrabold text-3xl",children:"User Management"})]})}),(0,l.jsxs)("div",{className:"bg-white p-6 rounded-2xl",children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:"font-normal text-2xl mb-8",children:"User (4)"})}),(0,l.jsx)(n.A,{className:"w-full",children:(0,l.jsx)(i.A,{span:24,children:(0,l.jsx)(j,{tableColumns:k,tableData:[{key:"1",id:1011,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"2",id:1012,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"3",id:1013,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"4",id:1014,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"5",id:1015,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"In-Active"},{key:"6",id:1016,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"7",id:1071,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"8",id:1018,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"9",id:1019,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"10",id:1010,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"11",id:10111,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"},{key:"12",id:10112,fullName:"Ahmed",email:"octaviajohn@gmail.com",profilesCreated:2,image:"",status:"Active"}],rowClassName:"row-antd"})})})]}),(0,l.jsxs)("div",{className:"flex justify-between mt-3",children:[(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:"font-semibold text-base text-[#4e4d6e]",children:"Showing 01 of 02"})}),(0,l.jsxs)("div",{className:"flex border border-[#4e4d6e] bg-white w-14 px-1 items-center justify-between rounded-lg",children:[(0,l.jsx)("div",{className:"cursor-pointer",children:(0,l.jsx)(N.U_G,{size:16,className:"text-[#4e4d6e] mt-1 pb-1"})}),(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:"font-semibold text-base text-[#4e4d6e] pb-1",children:"|"})}),(0,l.jsx)("div",{className:"cursor-pointer",children:(0,l.jsx)(N.l_J,{size:16,className:"text-[#4e4d6e] mt-1 pb-1"})})]})]})]})}),(0,l.jsx)(y,{className:"p-12 text-[#9c9c9c]",centered:!0,width:"600px",modalType:"basicModal",title:"Delete User",text:"Are you sure you want to delete this User?",descriptionStyle:{textAlign:"center",fontSize:"1.3rem",fontWeight:"400",marginTop:"10px",marginBottom:"20px"},isModalOpen:p,isFooter:!0,rightButtonText:"Yes",leftButtonText:"Cancel",rightButtonStyle:{backgroundColor:"#ff3b30",color:"white",fontWeight:"500",paddingTop:"1rem",paddingBottom:"1rem"},leftButtonStyle:{backgroundColor:"#e0e0e0",color:"#9c9c9c",fontWeight:"500"},onClickLeft:()=>g(!1),onClickRight:()=>g(!1),onCancel:()=>g(!1)}),(0,l.jsx)(y,{className:"p-12 text-[#9c9c9c]",centered:!0,width:"600px",modalType:"basicModal",title:"Deactivate User",text:"Are you sure you want to deactivate this User?",descriptionStyle:{textAlign:"center",fontSize:"1.3rem",fontWeight:"400",marginTop:"10px",marginBottom:"20px"},isModalOpen:v,isFooter:!0,rightButtonText:"Yes",leftButtonText:"Cancel",rightButtonStyle:{backgroundColor:"#ff3b30",color:"white",fontWeight:"500",paddingTop:"1rem",paddingBottom:"1rem"},leftButtonStyle:{backgroundColor:"#e0e0e0",color:"#9c9c9c",fontWeight:"500"},onClickLeft:()=>w(!1),onClickRight:()=>w(!1),onCancel:()=>w(!1)})]})}},92258:(e,a,t)=>{"use strict";t.d(a,{Jj:()=>i,ec:()=>r,pH:()=>s});var l=t(19938);let s=l.Ik().shape({email:l.Yj().email("Invaild Email").required("Email is required").matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/,"Please enter a valid email"),password:l.Yj().required("Password is required")});l.Ik().shape({email:l.Yj().email("Invaild Email").required("Email is required")});let i=l.Ik().shape({password:l.Yj().min(8).max(32).matches(/[A-Z]/,"Password must contain at least one uppercase letter").matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one special character").matches(/[0-9]/,"Password must contain at least one number").required("Password is required"),confirm_password:l.Yj().label("confirm password").required().oneOf([l.KR("password"),null],"Passwords do not match")}),r=l.Ik().shape({old_Password:l.Yj().required("Old Password is required"),Password:l.Yj().required("New Password is required").min(8).max(32).matches(/[A-Z]/,"Password must contain at least one uppercase letter").matches(/[!@#$%^&*(),.?":{}|<>]/,"Password must contain at least one special character").matches(/[0-9]/,"Password must contain at least one number"),confirmPassword:l.Yj().label("confirm password").required("Confirm Password is required").oneOf([l.KR("Password"),null],"Passwords do not match")})},30347:()=>{}},e=>{var a=a=>e(e.s=a);e.O(0,[36,690,150,711,512,206,980,236,172,424,606,234,37,457,723,791,465,441,517,358],()=>a(83874)),_N_E=e.O()}]);