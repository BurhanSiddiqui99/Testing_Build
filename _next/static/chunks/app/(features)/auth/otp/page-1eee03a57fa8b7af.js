(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[754],{46005:(A,e,t)=>{Promise.resolve().then(t.bind(t,54504))},54504:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>U});var a=t(95155),i=t(12115),r=t(46742),l=t(37488),n=t(62516),s=t(19589),g=t(84172),c=t(40899),d=t(69606),u=t(76600),o=function(A){return"object"==typeof A&&null!==A},h=function(A){var e=A.value,t=void 0===e?"":e,a=A.numInputs,r=void 0===a?4:a,l=A.onChange,n=A.onPaste,s=A.renderInput,g=A.shouldAutoFocus,c=void 0!==g&&g,d=A.inputType,u=void 0===d?"text":d,h=A.renderSeparator,f=A.placeholder,E=A.containerStyle,b=A.inputStyle,w=A.skipDefaultStyles,U=void 0!==w&&w,p=i.useState(0),R=p[0],S=p[1],C=i.useRef([]),M=function(){return t?t.toString().split(""):[]},m="number"===u||"tel"===u;i.useEffect(function(){C.current=C.current.slice(0,r)},[r]),i.useEffect(function(){var A;c&&(null===(A=C.current[0])||void 0===A||A.focus())},[c]);var B=function(){if("string"==typeof f){if(f.length===r)return f;f.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},D=function(A){return(m?!isNaN(Number(A)):"string"==typeof A)&&1===A.trim().length},V=function(A){var e=A.target.value;D(e)&&(T(e),v(R+1))},x=function(A){var e=A.nativeEvent,t=A.target.value;D(t)||(t.length!==r||t.split("").some(function(A){return!D(A)})||(F(t.split("")),v(r-1)),null===e.data&&"deleteContentBackward"===e.inputType&&(A.preventDefault(),T(""),v(R-1)),A.target.value="")},y=function(){S(R-1)},I=function(A){var e=M();[A.code,A.key].includes("Backspace")?(A.preventDefault(),T(""),v(R-1)):"Delete"===A.code?(A.preventDefault(),T("")):"ArrowLeft"===A.code?(A.preventDefault(),v(R-1)):"ArrowRight"===A.code?(A.preventDefault(),v(R+1)):A.key===e[R]?(A.preventDefault(),v(R+1)):("Spacebar"===A.code||"Space"===A.code||"ArrowUp"===A.code||"ArrowDown"===A.code)&&A.preventDefault()},v=function(A){var e,t,a=Math.max(Math.min(r-1,A),0);C.current[a]&&(null===(e=C.current[a])||void 0===e||e.focus(),null===(t=C.current[a])||void 0===t||t.select(),S(a))},T=function(A){var e=M();e[R]=A[0],F(e)},F=function(A){l(A.join(""))},H=function(A){A.preventDefault();var e,t=M(),a=R,i=A.clipboardData.getData("text/plain").slice(0,r-R).split("");if(!(m&&i.some(function(A){return isNaN(Number(A))}))){for(var l=0;l<r;++l)l>=R&&i.length>0&&(t[l]=null!==(e=i.shift())&&void 0!==e?e:"",a++);v(a),F(t)}};return i.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},o(E)&&E),className:"string"==typeof E?E:void 0,onPaste:n},Array.from({length:r},function(A,e){return e}).map(function(A){var e,t,a;return i.createElement(i.Fragment,{key:A},s({value:null!==(e=M()[A])&&void 0!==e?e:"",placeholder:null!==(a=null===(t=B())||void 0===t?void 0:t[A])&&void 0!==a?a:void 0,ref:function(e){return C.current[A]=e},onChange:V,onFocus:function(e){S(A),e.target.select()},onBlur:y,onKeyDown:I,onPaste:H,autoComplete:"off","aria-label":"Please enter OTP character ".concat(A+1),style:Object.assign(U?{}:{width:"1em",textAlign:"center"},o(b)?b:{}),className:"string"==typeof b?b:void 0,type:u,inputMode:m?"numeric":"text",onInput:x},A),A<r-1&&("function"==typeof h?h(A):h))}))};let f=A=>{let{value:e,onChange:t,inputStyle:i,containerStyle:r,numInputs:l,inputType:n,skipDefaultStyles:s}=A;return(0,a.jsx)(h,{value:e,onChange:t,inputStyle:i,containerStyle:r,numInputs:l,renderSeparator:(0,a.jsx)("span",{children:" "}),inputType:n,renderInput:A=>(0,a.jsx)("input",{...A}),skipDefaultStyles:s})};var E=t(76046);let{Title:b,Paragraph:w}=r.A;function U(){let[A,e]=(0,i.useState)(""),{handleSubmit:t,control:r,formState:{errors:o}}=(0,d.mN)({mode:"onChange"});return(0,a.jsxs)(l.A,{className:"h-screen",children:[(0,a.jsx)(n.A,{xxl:12,xl:12,lg:12,md:24,sm:24,xs:24,children:(0,a.jsxs)("div",{className:"min-h-screen w-full flex items-center justify-center bg-dot-pattern relative px-4",children:[(0,a.jsx)("div",{className:"absolute inset-0 -z-10 bg-no-repeat",style:{backgroundImage:"url(".concat(c.Tp.src,")"),backgroundSize:"100% 100vh"}}),(0,a.jsx)(s.A,{className:"w-full max-w-[500px] shadow-lg rounded-3xl px-8",children:(0,a.jsxs)("div",{className:"text-center mb-6",children:[(0,a.jsx)(g.A,{preview:!1,alt:"Logo",src:c.gu.src,width:50,height:50,className:"mx-auto mb-4"}),(0,a.jsx)(b,{level:3,className:"mb-1",children:"Enter OTP"}),(0,a.jsx)(w,{type:"secondary",children:"Enter 6 Digit code to reset your password"}),(0,a.jsxs)(l.A,{className:"gap-2 w-full my-4",children:[(0,a.jsx)(n.A,{span:24,className:"py-2",style:{},children:(0,a.jsx)(f,{value:A,onChange:e,inputStyle:{margin:"0 12px",padding:"0.5rem 0.8rem",color:u.A.MainColor,width:"40px",fontSize:"2rem",borderBottom:"1px solid #ed1a72"},containerStyle:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},numInputs:"6",inputType:"number",skipDefaultStyles:!0})}),(0,a.jsx)("button",{className:"bg-gradient-to-r from-[#8052A0] to-[#55A0D7] w-full py-3 mt-4 rounded-lg text-white font-semibold",onClick:()=>(0,E.redirect)("/auth/change-password"),children:" Next "})]}),(0,a.jsx)(l.A,{className:"flex justify-center w-full",children:(0,a.jsxs)("p",{children:["Didn't receive the code? ",(0,a.jsx)("span",{className:"cursor-pointer text-[#ed1a72]",children:" Resend"})]})})]})})]})}),(0,a.jsx)(n.A,{xxl:12,xl:12,lg:12,md:0,sm:0,xs:0,children:(0,a.jsx)(g.A,{alt:"sideImage",preview:!1,height:"100vh",width:"100%",src:c.iW.src})})]})}},40899:(A,e,t)=>{"use strict";t.d(e,{BV:()=>b.default,B_:()=>c.default,EN:()=>g.default,Fv:()=>l.default,Hb:()=>E.default,Mq:()=>n.default,Tp:()=>a.default,dB:()=>u.default,gu:()=>r.default,iW:()=>i.default,oS:()=>o.default,s2:()=>s.default,uS:()=>f.default,vS:()=>h.default,zM:()=>d.default});var a=t(71159),i=t(11308),r=t(17126),l=t(28753),n=t(63834),s=t(27998),g=t(80508),c=t(80215),d=t(47085),u=t(58261),o=t(98466),h=t(46477),f=t(50772),E=t(56979),b=t(53133);t(64618),t(16865),t(79492),t(89944),t(22799),t(63217)},76600:(A,e,t)=>{"use strict";t.d(e,{A:()=>a});let a={PlaceHolder:function(){let A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.5";return"rgba(235, 235, 235, ".concat(A,")")},BlackOpacity:function(){let A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.5";return"rgba(0, 0, 0, ".concat(A,")")},WhiteOpacity:function(){let A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.5";return"rgba(255, 255, 255, ".concat(A,")")},Black:"#000000",Transparent:"transparent",Primary:"#d94826",Secondary:"#000000",DarkGray:"#969aa8",White:"#ffffff",Text:"#ffffff",Danger:"#FF494C",Error:"#FF0000",MainColor:"#ed1a72",backGroundColor:"#f5f8ff",borderColor:"#E5E5E5",redColor:"red",ModalCancelColor:"#bdbcc2",CallingBackground:"#f5f8ff",sidebarActiveColor:"#b53689",nonActiveColor:"#c9c9c9"}},17126:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/Logo.43708c2b.png",height:121,width:131,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAY1BMVEVMaXH0ZWtuttxnmM9/jLXwRHZ7dbdldbe8V4n/2TviKIjyLXfIAG3KLYT+ql/4fVVhzvZkrd7/rVHrh1mCj8iEveX2q0LoOYr4t1hkbLH6x0h4hceQc7PiUnroCHRoseJsktJsMbDEAAAAIHRSTlMA9aLTDBq8HwUIo8sOmFvmP+XSTV7Az8OoYzzjwNZcyIISbXMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA8SURBVHicBcEHAoAgDACxA4G2Ltx7/f+VJjRlBCRQV67tiqQQ8zD3Asq4XBMKtt7pFGBzz/69ATsMxPsfQtYCWunzChkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},79492:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/activeUser.be5be8aa.png",height:29,width:29,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEW30T6zzDO2zjy82T630T641D62zj231D6zzTy41T261j7F5EK31T631D7A3kDR8kZqqIbHAAAAD3RSTlM6ASoKSI0vWSB+mvTiqM1fDYN9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nBXFxxHAQAgAsSXDOdB/tx7rI8Q6UROMCgdDefeoK+S5ZwrweOK/Z/dyFKkT4RginakmHyonATZhpyOhAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},22799:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/ageImage.ecbf0084.png",height:11,width:11,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXFUn9dUndVUnNVUn9dUntZUn9ZVn9dSn9VYpd5Un9VRndZWndlVlNRXpd5crurAyI9cAAAADnRSTlMA43RF+ZDJ0SilpFEvDJCcalgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVHicFcXBEcAgDAMw20kI0Nbsv20PfQRcM9/bE5EBfFhrmJgdo8tGUOmiwexycYMeO3UEHZE6+gEsigFe1/CCRgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},64618:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/backButton.82ec017d.png",height:16,width:16,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXFHR0dLS0tJSUlBQUFJSUlISEgVAaXbAAAAB3RSTlMAIue+B7VB5X9RfQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYGBgYGBkYgNRDIxMzCyoNCtYHMGAS6Gy2BgACnMAS0YBcDQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},71159:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/background.db121533.png",height:1010,width:849,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAABlBMVEVMaXHKyspMwKbhAAAAAnRSTlMABp/waA0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAATSURBVHicY2CAAkY0GidAUcAIAAC1AAXuHiJZAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8}},89944:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/child1.24be215b.png",height:90,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAeFBMVEViOSeBaWNhm84pEQq8ZDHGd0ixWyvFckFMaXFLKR/Lj3TGaziETC6YVC2FTzPgh0q6cEDjjUtiYlk7XILcl0N4XUhidICFpsbrvGGucVhuSjt3PyBJIxSGTTtoNBicYEjDhmwyFw2bWjKEQh6/XyhIX32cTyKZmI6Ii4IZAAAAGXRSTlP78yz58/mxLQD9/rC17LSx7C/3tP7+tez32DPRpQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUeJwFwQcCgCAMBLADgRb3VhDc4/8/NAFTCeTEaGrrcRSE6rSpS5YMevH7FlYF9cLFcCkYLaLFbUDT1w+PILAc57aT/AOHuwPwSyqz5gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},63217:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/completeQuiz.850dff5a.png",height:11,width:11,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEWQfUAASHHx1Dj/8VT8zyr/zQAUS1n+6F3/1gf9xwD+8WKqvWcCNUUESF66pRS7ymz6wwD/0AD90wH/+WLqxxL7+GL/8F//+mSTli+joCrq41n//2YAQWYAVnvDtCPFzWH/4QBiFXcKAAAAG3RSTlMBWgn8F3kTKvsjgf3r64mEPMuRuv6bZv35/v06ekA1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nB3IWRLAEBBF0YemGxnJLNP+V5mK+3XqghCMWE3gZY27WA+eS9zeNIBDOaZ6dDYykgfQP3eHP3WdqsK1jQM+Zx4CniHADkAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},46477:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/deleteImage.b83c5f0e.png",height:49,width:50,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXzZWjzZGj0Zmr5Z2v0YWX0XWHzWl72dXn5pKb3lZf94uP5sbP97e36u736xcb6vsB+iRsPAAAAAnRSTlPg4f/g7DoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA7SURBVHicHcu5EcAwDAMwRqKs1/H+2+biDg3wKM2ogIpnuiiEUdUUyOqpbT925HvRM8cESo/w27gWFR8zuAF2ymlrHgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},56979:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/deleteTableItem.7c499e20.png",height:36,width:36,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEX/OSz/Oi3/Oi//OzD/Oi//Oy//OjCzUBj+AAAAB3RSTlM9MlnAtHTkuE8HjwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACpJREFUeJxjYGQAAxDFyAjlMLGwMIEFWdnYWMEyrMzMTGAGEzNECgZg2gEKlABHAKg2RgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},98466:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/editProfile.51bba053.png",height:134,width:134,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEXe4exMaXE6RVGhpK/Ly+HPz9kpNEHV1d739/vU0909R1QyPUpVXmu8usOpzOeHrNfX6+vj3OO0z9+PzmiAAAAAE3RSTlNOAKVbDUu9NENIobCJUc9XDUJBgXktWwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwVykkSwDAIAzAnAWyyt/9/bKc6C+XSnVZgCQlpIFqtDYQrIkIO1+h9yEGsOdfDP0PYB8WY+e7zATVrAbfKSJTiAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},58261:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/feedbackImage.13964939.png",height:56,width:57,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVMaXH6NSf3Piz9Qy0hHCAgHSHwNiY0IiYrIyj/NSj+SC9iJSLlMiV4QDsFERcgHiMuGBZNGxzCJh8eHiP5mob6NSiuSz6QOjF1XVaAKyTZPir/YjlvKST5TTUXFxn/Qy4iHySZKSLvNSl8Rj2dV0lxRDqqZFbRlILEWEiwT1N6AAAAHnRSTlMAv9+iot4g/vz25f09+Szt+bn0Mv45/vn++rMs9yvMRNiEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVR4nAXBhQHAIBAEsMOh7t4H6vtP2ARYl21mPbAn30TRZRB+fO/qYOB+eC6KDtx3J4XQQPg8NTbU0NwYS2ULaKmULPADuH4Eg0mXQkYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},27998:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/lock.adaf8f4d.png",height:18,width:18,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEXKyspMaXHKysrLy8vJycnMzMzIyMjKysrKysrJycnCwsLKysrNzc3KysrY2NjOzs6Gc/Y1AAAADnRSTlP+AJpWui9IbdzrCnBs5KWSGPEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA6SURBVHicFcjJDcAwDAMwSbZztZD33zYInwT5ZU4SLJEqgr/G0CRq2/YuhLEWHIi25I43wJuTDXSeCy/DAXyzZXUNAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},11308:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/main.13eb3992.png",height:1010,width:842,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAS1BMVEUoNUM1TGQuOUY5RE8qPkwnRVg6V21gRVlFVmwyQlhuYGJET2BESVIqQ10wPk8/PU5IT1ZdUVRQXVxcWGQ4TGM7UG53XFZZZXJRZ3jMsGCxAAAACnRSTlPvtP//7+/v/u/9coYEvAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADxJREFUeJwVwQcSgCAQBLB1LcAVOur/X+qYIGeSBPYfAbNqoQBy9xbKga6qtZ1Ic8whF9x1yROxeVryxg8+VgJWQnE9AwAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},63834:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/passwordViewer.3e6ef566.png",height:14,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAHlBMVEUfHyMgICMfHyIfHyJMaXEfHyIfHyIfHyMfHx8kJCRqmIkbAAAACnRSTlNLKZFoADhTeQgHJa95VQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJwFwYcBADAMwjADWf3/4UocmXBF9kmbw5IjB/eYNrDdvRSlYVT1ARKPAKgSP94CAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},28753:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/passwordseen.f9283478.png",height:18,width:20,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAHlBMVEUeHiIfHyJMaXEfHyIfHyIfHyMfHyMfHyMhISEgICPY4FbjAAAACnRSTlNeOgALhypwShtNUsj93QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwdwYcNwEAMA7GTJZfff+EAIWl5t6vwvN5gCLICkx5dhss0q6P8ABX1kz8afADD9DlpigAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}},80508:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/sidebarLogo.05718edf.png",height:51,width:214,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEUJFSMMGSYIFyPPdH1ykL51lM7tUADNAAAABnRSTlNCOzJyQ1k+c1zjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgZmEAAUYGZlYmRkYmRiYAAOkAGhnwVmAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},47085:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/totalEarningDashboard.26ab6a62.png",height:56,width:56,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUtyVguyVcvyVguuVhMaXExyFgyx1gzzGYyx1kuyViegZ+CAAAACnRSTlM5QioLAHOFCqIuVBY6GwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJw9i8kJADAMw+Tc+09cQktfBkkm3MA8cATCMVGJDNDkUlDN7lcvbu694wAQ6AB+OZXs7wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},80215:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/totalUsersDashboard.d4c4b8c2.png",height:56,width:56,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVTntVRntJTn9RMaXFemtVIqtRSntRUoNdUoNVVoNZTn9ZVoNdvrjDlAAAADHRSTlM9KzMACgo22Va/dqJRwVEdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nEXLuREAIBADsfX9QP/9MkTkEh4ChZNgBoGocwoB1V0Atru3gZi1Bn3s+Xr6BRtqAMWghtzTAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},16865:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/userDetail.4ea3058c.png",height:132,width:134,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEVKOC8QDgtcRjh4Xkyjh3A2JhtlTT5MaXETExMqHRSSbVm2moDDrpzRvKwSERKxlHw4LSeQdWGjjHrOuaffzb3dy7qLZVGmd2hHMCGKdGJZQzYbFQ8eFhBZOCs9LSeXb2C6g3LCkoAhdex4AAAAFnRSTlP9Njq6+Pn9APH7+jf3N7S7tLi787juvirG7wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwFwQUCgDAMBLCbtVOGTnD+/0kScFAOc2IEDV9pScgaz0dxhe53fUvf4Mt5VVCE2l0rpk2Q9nAwRoLFYO0o+Ad5PANGOFW2FAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},53133:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/userImage.57ac212f.png",height:32,width:33,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEUXExIRDg2MbllzW0ksHRTLtaFlTT9IMyc4Jx5MaXFOOzPNtqNIOi8SEhKyln2ninSkhW2ojXY4LCdqVkWRdmKhinfezbzey7qKZVGic2Kpe2yPcmNYQjRcOy2ZgGu8hXXBkX+5qJd09woxAAAAGHRSTlP8OvvD/Dz+/vwA/fVGw8VG9/e8Pr++w/LN3FSBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVR4nAXBBwKAIAwEsGO2BRW3DOf/P2kCccbS5gRpolJ9dBju0F7/7Rg1lye3AzrjquQjzGkpM63oABuYF4jqgVnJD33pAzhLoQr2AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},50772:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/viewUserProfile.cc40b496.png",height:36,width:37,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEX7sD77sD77sD/5sD/5sUD6sT/6sD/5sD+KnlNoAAAACHRSTlM/OzW1K5pScJLBqFEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAwSURBVHicLYvJDcAwAIMwzrH/xlWavEBIMAiEgaAhiGsnQWfbU9ztPAVZ/kLed/EBEFgAbyOWPloAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}}},A=>{var e=e=>A(A.s=e);A.O(0,[980,172,424,606,742,589,441,517,358],()=>e(46005)),_N_E=A.O()}]);