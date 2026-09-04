var T1=Object.defineProperty;var w1=(n,e,t)=>e in n?T1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Rr=(n,e,t)=>w1(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function A1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gx={exports:{}},ph={},Wx={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu=Symbol.for("react.element"),C1=Symbol.for("react.portal"),R1=Symbol.for("react.fragment"),b1=Symbol.for("react.strict_mode"),P1=Symbol.for("react.profiler"),L1=Symbol.for("react.provider"),D1=Symbol.for("react.context"),U1=Symbol.for("react.forward_ref"),N1=Symbol.for("react.suspense"),I1=Symbol.for("react.memo"),O1=Symbol.for("react.lazy"),S_=Symbol.iterator;function F1(n){return n===null||typeof n!="object"?null:(n=S_&&n[S_]||n["@@iterator"],typeof n=="function"?n:null)}var Xx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yx=Object.assign,jx={};function cl(n,e,t){this.props=n,this.context=e,this.refs=jx,this.updater=t||Xx}cl.prototype.isReactComponent={};cl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};cl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function qx(){}qx.prototype=cl.prototype;function Hm(n,e,t){this.props=n,this.context=e,this.refs=jx,this.updater=t||Xx}var Vm=Hm.prototype=new qx;Vm.constructor=Hm;Yx(Vm,cl.prototype);Vm.isPureReactComponent=!0;var M_=Array.isArray,$x=Object.prototype.hasOwnProperty,Gm={current:null},Kx={key:!0,ref:!0,__self:!0,__source:!0};function Zx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$x.call(e,i)&&!Kx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Hu,type:n,key:s,ref:o,props:r,_owner:Gm.current}}function k1(n,e){return{$$typeof:Hu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Wm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Hu}function z1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var E_=/\/+/g;function Wh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?z1(""+n.key):e.toString(36)}function nf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Hu:case C1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Wh(o,0):i,M_(r)?(t="",n!=null&&(t=n.replace(E_,"$&/")+"/"),nf(r,e,t,"",function(u){return u})):r!=null&&(Wm(r)&&(r=k1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(E_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",M_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Wh(s,a);o+=nf(s,e,t,l,r)}else if(l=F1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Wh(s,a++),o+=nf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ec(n,e,t){if(n==null)return n;var i=[],r=0;return nf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function B1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Yn={current:null},rf={transition:null},H1={ReactCurrentDispatcher:Yn,ReactCurrentBatchConfig:rf,ReactCurrentOwner:Gm};function Qx(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:ec,forEach:function(n,e,t){ec(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ec(n,function(){e++}),e},toArray:function(n){return ec(n,function(e){return e})||[]},only:function(n){if(!Wm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=cl;ot.Fragment=R1;ot.Profiler=P1;ot.PureComponent=Hm;ot.StrictMode=b1;ot.Suspense=N1;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H1;ot.act=Qx;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Yx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)$x.call(e,l)&&!Kx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Hu,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:D1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:L1,_context:n},n.Consumer=n};ot.createElement=Zx;ot.createFactory=function(n){var e=Zx.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:U1,render:n}};ot.isValidElement=Wm;ot.lazy=function(n){return{$$typeof:O1,_payload:{_status:-1,_result:n},_init:B1}};ot.memo=function(n,e){return{$$typeof:I1,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=rf.transition;rf.transition={};try{n()}finally{rf.transition=e}};ot.unstable_act=Qx;ot.useCallback=function(n,e){return Yn.current.useCallback(n,e)};ot.useContext=function(n){return Yn.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return Yn.current.useDeferredValue(n)};ot.useEffect=function(n,e){return Yn.current.useEffect(n,e)};ot.useId=function(){return Yn.current.useId()};ot.useImperativeHandle=function(n,e,t){return Yn.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return Yn.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return Yn.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return Yn.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return Yn.current.useReducer(n,e,t)};ot.useRef=function(n){return Yn.current.useRef(n)};ot.useState=function(n){return Yn.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return Yn.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return Yn.current.useTransition()};ot.version="18.3.1";Wx.exports=ot;var Lo=Wx.exports;const V1=A1(Lo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=Lo,W1=Symbol.for("react.element"),X1=Symbol.for("react.fragment"),Y1=Object.prototype.hasOwnProperty,j1=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q1={key:!0,ref:!0,__self:!0,__source:!0};function Jx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Y1.call(e,i)&&!q1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:W1,type:n,key:s,ref:o,props:r,_owner:j1.current}}ph.Fragment=X1;ph.jsx=Jx;ph.jsxs=Jx;Gx.exports=ph;var dt=Gx.exports,lp={},ey={exports:{}},Di={},ty={exports:{}},ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,F){var R=D.length;D.push(F);e:for(;0<R;){var K=R-1>>>1,J=D[K];if(0<r(J,F))D[K]=F,D[R]=J,R=K;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],R=D.pop();if(R!==F){D[0]=R;e:for(var K=0,J=D.length,q=J>>>1;K<q;){var Z=2*(K+1)-1,re=D[Z],se=Z+1,ce=D[se];if(0>r(re,R))se<J&&0>r(ce,re)?(D[K]=ce,D[se]=R,K=se):(D[K]=re,D[Z]=R,K=Z);else if(se<J&&0>r(ce,R))D[K]=ce,D[se]=R,K=se;else break e}}return F}function r(D,F){var R=D.sortIndex-F.sortIndex;return R!==0?R:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var F=t(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=D)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(u)}}function y(D){if(g=!1,x(D),!_)if(t(l)!==null)_=!0,B(T);else{var F=t(u);F!==null&&z(y,F.startTime-D)}}function T(D,F){_=!1,g&&(g=!1,d(L),L=-1),p=!0;var R=h;try{for(x(F),f=t(l);f!==null&&(!(f.expirationTime>F)||D&&!I());){var K=f.callback;if(typeof K=="function"){f.callback=null,h=f.priorityLevel;var J=K(f.expirationTime<=F);F=n.unstable_now(),typeof J=="function"?f.callback=J:f===t(l)&&i(l),x(F)}else i(l);f=t(l)}if(f!==null)var q=!0;else{var Z=t(u);Z!==null&&z(y,Z.startTime-F),q=!1}return q}finally{f=null,h=R,p=!1}}var w=!1,M=null,L=-1,S=5,E=-1;function I(){return!(n.unstable_now()-E<S)}function U(){if(M!==null){var D=n.unstable_now();E=D;var F=!0;try{F=M(!0,D)}finally{F?$():(w=!1,M=null)}}else w=!1}var $;if(typeof v=="function")$=function(){v(U)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,O=P.port2;P.port1.onmessage=U,$=function(){O.postMessage(null)}}else $=function(){m(U,0)};function B(D){M=D,w||(w=!0,$())}function z(D,F){L=m(function(){D(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,B(T))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var R=h;h=F;try{return D()}finally{h=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var R=h;h=D;try{return F()}finally{h=R}},n.unstable_scheduleCallback=function(D,F,R){var K=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,D){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=R+J,D={id:c++,callback:F,priorityLevel:D,startTime:R,expirationTime:J,sortIndex:-1},R>K?(D.sortIndex=R,e(u,D),t(l)===null&&D===t(u)&&(g?(d(L),L=-1):g=!0,z(y,R-K))):(D.sortIndex=J,e(l,D),_||p||(_=!0,B(T))),D},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(D){var F=h;return function(){var R=h;h=F;try{return D.apply(this,arguments)}finally{h=R}}}})(ny);ty.exports=ny;var $1=ty.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K1=Lo,bi=$1;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iy=new Set,du={};function Ho(n,e){Ya(n,e),Ya(n+"Capture",e)}function Ya(n,e){for(du[n]=e,n=0;n<e.length;n++)iy.add(e[n])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),up=Object.prototype.hasOwnProperty,Z1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T_={},w_={};function Q1(n){return up.call(w_,n)?!0:up.call(T_,n)?!1:Z1.test(n)?w_[n]=!0:(T_[n]=!0,!1)}function J1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function eT(n,e,t,i){if(e===null||typeof e>"u"||J1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){xn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];xn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){xn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){xn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){xn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){xn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){xn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){xn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){xn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Xm=/[\-:]([a-z])/g;function Ym(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Xm,Ym);xn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Xm,Ym);xn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Xm,Ym);xn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){xn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});xn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){xn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function jm(n,e,t,i){var r=xn.hasOwnProperty(e)?xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eT(e,t,r,i)&&(t=null),i||r===null?Q1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ns=K1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),qm=Symbol.for("react.strict_mode"),cp=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),sy=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),fp=Symbol.for("react.suspense"),hp=Symbol.for("react.suspense_list"),Km=Symbol.for("react.memo"),cs=Symbol.for("react.lazy"),oy=Symbol.for("react.offscreen"),A_=Symbol.iterator;function gl(n){return n===null||typeof n!="object"?null:(n=A_&&n[A_]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Object.assign,Xh;function Ul(n){if(Xh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Xh=e&&e[1]||""}return`
`+Xh+n}var Yh=!1;function jh(n,e){if(!n||Yh)return"";Yh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ul(n):""}function tT(n){switch(n.tag){case 5:return Ul(n.type);case 16:return Ul("Lazy");case 13:return Ul("Suspense");case 19:return Ul("SuspenseList");case 0:case 2:case 15:return n=jh(n.type,!1),n;case 11:return n=jh(n.type.render,!1),n;case 1:return n=jh(n.type,!0),n;default:return""}}function dp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ma:return"Fragment";case pa:return"Portal";case cp:return"Profiler";case qm:return"StrictMode";case fp:return"Suspense";case hp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case sy:return(n.displayName||"Context")+".Consumer";case ry:return(n._context.displayName||"Context")+".Provider";case $m:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Km:return e=n.displayName||null,e!==null?e:dp(n.type)||"Memo";case cs:e=n._payload,n=n._init;try{return dp(n(e))}catch{}}return null}function nT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dp(e);case 8:return e===qm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ay(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iT(n){var e=ay(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function nc(n){n._valueTracker||(n._valueTracker=iT(n))}function ly(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ay(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pp(n,e){var t=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function C_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uy(n,e){e=e.checked,e!=null&&jm(n,"checked",e,!1)}function mp(n,e){uy(n,e);var t=Fs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?gp(n,e.type,t):e.hasOwnProperty("defaultValue")&&gp(n,e.type,Fs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function R_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function gp(n,e,t){(e!=="number"||wf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Nl=Array.isArray;function La(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function _p(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function b_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Nl(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fs(t)}}function cy(n,e){var t=Fs(e.value),i=Fs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function P_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function fy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?fy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ic,hy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ic=ic||document.createElement("div"),ic.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ic.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function pu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Wl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rT=["Webkit","ms","Moz","O"];Object.keys(Wl).forEach(function(n){rT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Wl[e]=Wl[n]})});function dy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Wl.hasOwnProperty(n)&&Wl[n]?(""+e).trim():e+"px"}function py(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=dy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var sT=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xp(n,e){if(e){if(sT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function yp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sp=null;function Zm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Mp=null,Da=null,Ua=null;function L_(n){if(n=Wu(n)){if(typeof Mp!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=xh(e),Mp(n.stateNode,n.type,e))}}function my(n){Da?Ua?Ua.push(n):Ua=[n]:Da=n}function gy(){if(Da){var n=Da,e=Ua;if(Ua=Da=null,L_(n),e)for(n=0;n<e.length;n++)L_(e[n])}}function _y(n,e){return n(e)}function vy(){}var qh=!1;function xy(n,e,t){if(qh)return n(e,t);qh=!0;try{return _y(n,e,t)}finally{qh=!1,(Da!==null||Ua!==null)&&(vy(),gy())}}function mu(n,e){var t=n.stateNode;if(t===null)return null;var i=xh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var Ep=!1;if($r)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){Ep=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{Ep=!1}function oT(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Xl=!1,Af=null,Cf=!1,Tp=null,aT={onError:function(n){Xl=!0,Af=n}};function lT(n,e,t,i,r,s,o,a,l){Xl=!1,Af=null,oT.apply(aT,arguments)}function uT(n,e,t,i,r,s,o,a,l){if(lT.apply(this,arguments),Xl){if(Xl){var u=Af;Xl=!1,Af=null}else throw Error(oe(198));Cf||(Cf=!0,Tp=u)}}function Vo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function D_(n){if(Vo(n)!==n)throw Error(oe(188))}function cT(n){var e=n.alternate;if(!e){if(e=Vo(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return D_(r),n;if(s===i)return D_(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function Sy(n){return n=cT(n),n!==null?My(n):null}function My(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=My(n);if(e!==null)return e;n=n.sibling}return null}var Ey=bi.unstable_scheduleCallback,U_=bi.unstable_cancelCallback,fT=bi.unstable_shouldYield,hT=bi.unstable_requestPaint,Wt=bi.unstable_now,dT=bi.unstable_getCurrentPriorityLevel,Qm=bi.unstable_ImmediatePriority,Ty=bi.unstable_UserBlockingPriority,Rf=bi.unstable_NormalPriority,pT=bi.unstable_LowPriority,wy=bi.unstable_IdlePriority,mh=null,Er=null;function mT(n){if(Er&&typeof Er.onCommitFiberRoot=="function")try{Er.onCommitFiberRoot(mh,n,void 0,(n.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:vT,gT=Math.log,_T=Math.LN2;function vT(n){return n>>>=0,n===0?32:31-(gT(n)/_T|0)|0}var rc=64,sc=4194304;function Il(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Il(a):(s&=o,s!==0&&(i=Il(s)))}else o=t&~r,o!==0?i=Il(o):s!==0&&(i=Il(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ur(e),r=1<<t,i|=n[t],e&=~r;return i}function xT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ur(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=xT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function wp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ay(){var n=rc;return rc<<=1,!(rc&4194240)&&(rc=64),n}function $h(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ur(e),n[e]=t}function ST(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ur(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Jm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ur(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function Cy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ry,eg,by,Py,Ly,Ap=!1,oc=[],Ts=null,ws=null,As=null,gu=new Map,_u=new Map,ds=[],MT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function N_(n,e){switch(n){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":gu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_u.delete(e.pointerId)}}function vl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wu(e),e!==null&&eg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ET(n,e,t,i,r){switch(e){case"focusin":return Ts=vl(Ts,n,e,t,i,r),!0;case"dragenter":return ws=vl(ws,n,e,t,i,r),!0;case"mouseover":return As=vl(As,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return gu.set(s,vl(gu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_u.set(s,vl(_u.get(s)||null,n,e,t,i,r)),!0}return!1}function Dy(n){var e=co(n.target);if(e!==null){var t=Vo(e);if(t!==null){if(e=t.tag,e===13){if(e=yy(t),e!==null){n.blockedOn=e,Ly(n.priority,function(){by(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Cp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Sp=i,t.target.dispatchEvent(i),Sp=null}else return e=Wu(t),e!==null&&eg(e),n.blockedOn=t,!1;e.shift()}return!0}function I_(n,e,t){sf(n)&&t.delete(e)}function TT(){Ap=!1,Ts!==null&&sf(Ts)&&(Ts=null),ws!==null&&sf(ws)&&(ws=null),As!==null&&sf(As)&&(As=null),gu.forEach(I_),_u.forEach(I_)}function xl(n,e){n.blockedOn===e&&(n.blockedOn=null,Ap||(Ap=!0,bi.unstable_scheduleCallback(bi.unstable_NormalPriority,TT)))}function vu(n){function e(r){return xl(r,n)}if(0<oc.length){xl(oc[0],n);for(var t=1;t<oc.length;t++){var i=oc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ts!==null&&xl(Ts,n),ws!==null&&xl(ws,n),As!==null&&xl(As,n),gu.forEach(e),_u.forEach(e),t=0;t<ds.length;t++)i=ds[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ds.length&&(t=ds[0],t.blockedOn===null);)Dy(t),t.blockedOn===null&&ds.shift()}var Na=ns.ReactCurrentBatchConfig,Pf=!0;function wT(n,e,t,i){var r=vt,s=Na.transition;Na.transition=null;try{vt=1,tg(n,e,t,i)}finally{vt=r,Na.transition=s}}function AT(n,e,t,i){var r=vt,s=Na.transition;Na.transition=null;try{vt=4,tg(n,e,t,i)}finally{vt=r,Na.transition=s}}function tg(n,e,t,i){if(Pf){var r=Cp(n,e,t,i);if(r===null)sd(n,e,i,Lf,t),N_(n,i);else if(ET(r,n,e,t,i))i.stopPropagation();else if(N_(n,i),e&4&&-1<MT.indexOf(n)){for(;r!==null;){var s=Wu(r);if(s!==null&&Ry(s),s=Cp(n,e,t,i),s===null&&sd(n,e,i,Lf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else sd(n,e,i,null,t)}}var Lf=null;function Cp(n,e,t,i){if(Lf=null,n=Zm(i),n=co(n),n!==null)if(e=Vo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Lf=n,null}function Uy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dT()){case Qm:return 1;case Ty:return 4;case Rf:case pT:return 16;case wy:return 536870912;default:return 16}default:return 16}}var ms=null,ng=null,of=null;function Ny(){if(of)return of;var n,e=ng,t=e.length,i,r="value"in ms?ms.value:ms.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return of=r.slice(n,1<i?1-i:void 0)}function af(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ac(){return!0}function O_(){return!1}function Ui(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ac:O_,this.isPropagationStopped=O_,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ig=Ui(fl),Gu=zt({},fl,{view:0,detail:0}),CT=Ui(Gu),Kh,Zh,yl,gh=zt({},Gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yl&&(yl&&n.type==="mousemove"?(Kh=n.screenX-yl.screenX,Zh=n.screenY-yl.screenY):Zh=Kh=0,yl=n),Kh)},movementY:function(n){return"movementY"in n?n.movementY:Zh}}),F_=Ui(gh),RT=zt({},gh,{dataTransfer:0}),bT=Ui(RT),PT=zt({},Gu,{relatedTarget:0}),Qh=Ui(PT),LT=zt({},fl,{animationName:0,elapsedTime:0,pseudoElement:0}),DT=Ui(LT),UT=zt({},fl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),NT=Ui(UT),IT=zt({},fl,{data:0}),k_=Ui(IT),OT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=kT[n])?!!e[n]:!1}function rg(){return zT}var BT=zt({},Gu,{key:function(n){if(n.key){var e=OT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=af(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?FT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rg,charCode:function(n){return n.type==="keypress"?af(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?af(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),HT=Ui(BT),VT=zt({},gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),z_=Ui(VT),GT=zt({},Gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rg}),WT=Ui(GT),XT=zt({},fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),YT=Ui(XT),jT=zt({},gh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),qT=Ui(jT),$T=[9,13,27,32],sg=$r&&"CompositionEvent"in window,Yl=null;$r&&"documentMode"in document&&(Yl=document.documentMode);var KT=$r&&"TextEvent"in window&&!Yl,Iy=$r&&(!sg||Yl&&8<Yl&&11>=Yl),B_=" ",H_=!1;function Oy(n,e){switch(n){case"keyup":return $T.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function ZT(n,e){switch(n){case"compositionend":return Fy(e);case"keypress":return e.which!==32?null:(H_=!0,B_);case"textInput":return n=e.data,n===B_&&H_?null:n;default:return null}}function QT(n,e){if(ga)return n==="compositionend"||!sg&&Oy(n,e)?(n=Ny(),of=ng=ms=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iy&&e.locale!=="ko"?null:e.data;default:return null}}var JT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function V_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!JT[n.type]:e==="textarea"}function ky(n,e,t,i){my(i),e=Df(e,"onChange"),0<e.length&&(t=new ig("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var jl=null,xu=null;function ew(n){$y(n,0)}function _h(n){var e=xa(n);if(ly(e))return n}function tw(n,e){if(n==="change")return e}var zy=!1;if($r){var Jh;if($r){var ed="oninput"in document;if(!ed){var G_=document.createElement("div");G_.setAttribute("oninput","return;"),ed=typeof G_.oninput=="function"}Jh=ed}else Jh=!1;zy=Jh&&(!document.documentMode||9<document.documentMode)}function W_(){jl&&(jl.detachEvent("onpropertychange",By),xu=jl=null)}function By(n){if(n.propertyName==="value"&&_h(xu)){var e=[];ky(e,xu,n,Zm(n)),xy(ew,e)}}function nw(n,e,t){n==="focusin"?(W_(),jl=e,xu=t,jl.attachEvent("onpropertychange",By)):n==="focusout"&&W_()}function iw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _h(xu)}function rw(n,e){if(n==="click")return _h(e)}function sw(n,e){if(n==="input"||n==="change")return _h(e)}function ow(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var hr=typeof Object.is=="function"?Object.is:ow;function yu(n,e){if(hr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!up.call(e,r)||!hr(n[r],e[r]))return!1}return!0}function X_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Y_(n,e){var t=X_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=X_(t)}}function Hy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Hy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Vy(){for(var n=window,e=wf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wf(n.document)}return e}function og(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function aw(n){var e=Vy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Hy(t.ownerDocument.documentElement,t)){if(i!==null&&og(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Y_(t,s);var o=Y_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lw=$r&&"documentMode"in document&&11>=document.documentMode,_a=null,Rp=null,ql=null,bp=!1;function j_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bp||_a==null||_a!==wf(i)||(i=_a,"selectionStart"in i&&og(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ql&&yu(ql,i)||(ql=i,i=Df(Rp,"onSelect"),0<i.length&&(e=new ig("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=_a)))}function lc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var va={animationend:lc("Animation","AnimationEnd"),animationiteration:lc("Animation","AnimationIteration"),animationstart:lc("Animation","AnimationStart"),transitionend:lc("Transition","TransitionEnd")},td={},Gy={};$r&&(Gy=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function vh(n){if(td[n])return td[n];if(!va[n])return n;var e=va[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gy)return td[n]=e[t];return n}var Wy=vh("animationend"),Xy=vh("animationiteration"),Yy=vh("animationstart"),jy=vh("transitionend"),qy=new Map,q_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ws(n,e){qy.set(n,e),Ho(e,[n])}for(var nd=0;nd<q_.length;nd++){var id=q_[nd],uw=id.toLowerCase(),cw=id[0].toUpperCase()+id.slice(1);Ws(uw,"on"+cw)}Ws(Wy,"onAnimationEnd");Ws(Xy,"onAnimationIteration");Ws(Yy,"onAnimationStart");Ws("dblclick","onDoubleClick");Ws("focusin","onFocus");Ws("focusout","onBlur");Ws(jy,"onTransitionEnd");Ya("onMouseEnter",["mouseout","mouseover"]);Ya("onMouseLeave",["mouseout","mouseover"]);Ya("onPointerEnter",["pointerout","pointerover"]);Ya("onPointerLeave",["pointerout","pointerover"]);Ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ol));function $_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,uT(i,e,void 0,n),n.currentTarget=null}function $y(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;$_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;$_(r,a,u),s=l}}}if(Cf)throw n=Tp,Cf=!1,Tp=null,n}function Ct(n,e){var t=e[Np];t===void 0&&(t=e[Np]=new Set);var i=n+"__bubble";t.has(i)||(Ky(e,n,2,!1),t.add(i))}function rd(n,e,t){var i=0;e&&(i|=4),Ky(t,n,i,e)}var uc="_reactListening"+Math.random().toString(36).slice(2);function Su(n){if(!n[uc]){n[uc]=!0,iy.forEach(function(t){t!=="selectionchange"&&(fw.has(t)||rd(t,!1,n),rd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[uc]||(e[uc]=!0,rd("selectionchange",!1,e))}}function Ky(n,e,t,i){switch(Uy(e)){case 1:var r=wT;break;case 4:r=AT;break;default:r=tg}t=r.bind(null,e,t,n),r=void 0,!Ep||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function sd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=co(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xy(function(){var u=s,c=Zm(t),f=[];e:{var h=qy.get(n);if(h!==void 0){var p=ig,_=n;switch(n){case"keypress":if(af(t)===0)break e;case"keydown":case"keyup":p=HT;break;case"focusin":_="focus",p=Qh;break;case"focusout":_="blur",p=Qh;break;case"beforeblur":case"afterblur":p=Qh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=F_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=WT;break;case Wy:case Xy:case Yy:p=DT;break;case jy:p=YT;break;case"scroll":p=CT;break;case"wheel":p=qT;break;case"copy":case"cut":case"paste":p=NT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=z_}var g=(e&4)!==0,m=!g&&n==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=mu(v,d),y!=null&&g.push(Mu(v,y,x)))),m)break;v=v.return}0<g.length&&(h=new p(h,_,null,t,c),f.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Sp&&(_=t.relatedTarget||t.fromElement)&&(co(_)||_[Kr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?co(_):null,_!==null&&(m=Vo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=F_,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=z_,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:xa(p),x=_==null?h:xa(_),h=new g(y,v+"leave",p,t,c),h.target=m,h.relatedTarget=x,y=null,co(c)===u&&(g=new g(d,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,d=_,v=0,x=g;x;x=Wo(x))v++;for(x=0,y=d;y;y=Wo(y))x++;for(;0<v-x;)g=Wo(g),v--;for(;0<x-v;)d=Wo(d),x--;for(;v--;){if(g===d||d!==null&&g===d.alternate)break t;g=Wo(g),d=Wo(d)}g=null}else g=null;p!==null&&K_(f,h,p,g,!1),_!==null&&m!==null&&K_(f,m,_,g,!0)}}e:{if(h=u?xa(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=tw;else if(V_(h))if(zy)T=sw;else{T=iw;var w=nw}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=rw);if(T&&(T=T(n,u))){ky(f,T,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&gp(h,"number",h.value)}switch(w=u?xa(u):window,n){case"focusin":(V_(w)||w.contentEditable==="true")&&(_a=w,Rp=u,ql=null);break;case"focusout":ql=Rp=_a=null;break;case"mousedown":bp=!0;break;case"contextmenu":case"mouseup":case"dragend":bp=!1,j_(f,t,c);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":j_(f,t,c)}var M;if(sg)e:{switch(n){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ga?Oy(n,t)&&(L="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Iy&&t.locale!=="ko"&&(ga||L!=="onCompositionStart"?L==="onCompositionEnd"&&ga&&(M=Ny()):(ms=c,ng="value"in ms?ms.value:ms.textContent,ga=!0)),w=Df(u,L),0<w.length&&(L=new k_(L,n,null,t,c),f.push({event:L,listeners:w}),M?L.data=M:(M=Fy(t),M!==null&&(L.data=M)))),(M=KT?ZT(n,t):QT(n,t))&&(u=Df(u,"onBeforeInput"),0<u.length&&(c=new k_("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}$y(f,e)})}function Mu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Df(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=mu(n,t),s!=null&&i.unshift(Mu(n,s,r)),s=mu(n,e),s!=null&&i.push(Mu(n,s,r))),n=n.return}return i}function Wo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function K_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=mu(t,s),l!=null&&o.unshift(Mu(t,l,a))):r||(l=mu(t,s),l!=null&&o.push(Mu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var hw=/\r\n?/g,dw=/\u0000|\uFFFD/g;function Z_(n){return(typeof n=="string"?n:""+n).replace(hw,`
`).replace(dw,"")}function cc(n,e,t){if(e=Z_(e),Z_(n)!==e&&t)throw Error(oe(425))}function Uf(){}var Pp=null,Lp=null;function Dp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Up=typeof setTimeout=="function"?setTimeout:void 0,pw=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,mw=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(n){return Q_.resolve(null).then(n).catch(gw)}:Up;function gw(n){setTimeout(function(){throw n})}function od(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),vu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);vu(e)}function Cs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function J_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var hl=Math.random().toString(36).slice(2),vr="__reactFiber$"+hl,Eu="__reactProps$"+hl,Kr="__reactContainer$"+hl,Np="__reactEvents$"+hl,_w="__reactListeners$"+hl,vw="__reactHandles$"+hl;function co(n){var e=n[vr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Kr]||t[vr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=J_(n);n!==null;){if(t=n[vr])return t;n=J_(n)}return e}n=t,t=n.parentNode}return null}function Wu(n){return n=n[vr]||n[Kr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function xh(n){return n[Eu]||null}var Ip=[],ya=-1;function Xs(n){return{current:n}}function bt(n){0>ya||(n.current=Ip[ya],Ip[ya]=null,ya--)}function wt(n,e){ya++,Ip[ya]=n.current,n.current=e}var ks={},Ln=Xs(ks),ti=Xs(!1),Do=ks;function ja(n,e){var t=n.type.contextTypes;if(!t)return ks;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ni(n){return n=n.childContextTypes,n!=null}function Nf(){bt(ti),bt(Ln)}function e0(n,e,t){if(Ln.current!==ks)throw Error(oe(168));wt(Ln,e),wt(ti,t)}function Zy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,nT(n)||"Unknown",r));return zt({},t,i)}function If(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ks,Do=Ln.current,wt(Ln,n),wt(ti,ti.current),!0}function t0(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=Zy(n,e,Do),i.__reactInternalMemoizedMergedChildContext=n,bt(ti),bt(Ln),wt(Ln,n)):bt(ti),wt(ti,t)}var Fr=null,yh=!1,ad=!1;function Qy(n){Fr===null?Fr=[n]:Fr.push(n)}function xw(n){yh=!0,Qy(n)}function Ys(){if(!ad&&Fr!==null){ad=!0;var n=0,e=vt;try{var t=Fr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Fr=null,yh=!1}catch(r){throw Fr!==null&&(Fr=Fr.slice(n+1)),Ey(Qm,Ys),r}finally{vt=e,ad=!1}}return null}var Sa=[],Ma=0,Of=null,Ff=0,Fi=[],ki=0,Uo=null,Vr=1,Gr="";function no(n,e){Sa[Ma++]=Ff,Sa[Ma++]=Of,Of=n,Ff=e}function Jy(n,e,t){Fi[ki++]=Vr,Fi[ki++]=Gr,Fi[ki++]=Uo,Uo=n;var i=Vr;n=Gr;var r=32-ur(i)-1;i&=~(1<<r),t+=1;var s=32-ur(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vr=1<<32-ur(e)+r|t<<r|i,Gr=s+n}else Vr=1<<s|t<<r|i,Gr=n}function ag(n){n.return!==null&&(no(n,1),Jy(n,1,0))}function lg(n){for(;n===Of;)Of=Sa[--Ma],Sa[Ma]=null,Ff=Sa[--Ma],Sa[Ma]=null;for(;n===Uo;)Uo=Fi[--ki],Fi[ki]=null,Gr=Fi[--ki],Fi[ki]=null,Vr=Fi[--ki],Fi[ki]=null}var Ci=null,Ei=null,Lt=!1,or=null;function eS(n,e){var t=Xi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function n0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ci=n,Ei=Cs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ci=n,Ei=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Uo!==null?{id:Vr,overflow:Gr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Xi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ci=n,Ei=null,!0):!1;default:return!1}}function Op(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fp(n){if(Lt){var e=Ei;if(e){var t=e;if(!n0(n,e)){if(Op(n))throw Error(oe(418));e=Cs(t.nextSibling);var i=Ci;e&&n0(n,e)?eS(i,t):(n.flags=n.flags&-4097|2,Lt=!1,Ci=n)}}else{if(Op(n))throw Error(oe(418));n.flags=n.flags&-4097|2,Lt=!1,Ci=n}}}function i0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ci=n}function fc(n){if(n!==Ci)return!1;if(!Lt)return i0(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Dp(n.type,n.memoizedProps)),e&&(e=Ei)){if(Op(n))throw tS(),Error(oe(418));for(;e;)eS(n,e),e=Cs(e.nextSibling)}if(i0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ei=Cs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ei=null}}else Ei=Ci?Cs(n.stateNode.nextSibling):null;return!0}function tS(){for(var n=Ei;n;)n=Cs(n.nextSibling)}function qa(){Ei=Ci=null,Lt=!1}function ug(n){or===null?or=[n]:or.push(n)}var yw=ns.ReactCurrentBatchConfig;function Sl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function hc(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function r0(n){var e=n._init;return e(n._payload)}function nS(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Ls(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=pd(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var T=x.type;return T===ma?c(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===cs&&r0(T)===v.type)?(y=r(v,x.props),y.ref=Sl(d,v,x),y.return=d,y):(y=pf(x.type,x.key,x.props,null,d.mode,y),y.ref=Sl(d,v,x),y.return=d,y)}function u(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=md(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,y,T){return v===null||v.tag!==7?(v=yo(x,d.mode,y,T),v.return=d,v):(v=r(v,x),v.return=d,v)}function f(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pd(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case tc:return x=pf(v.type,v.key,v.props,null,d.mode,x),x.ref=Sl(d,null,v),x.return=d,x;case pa:return v=md(v,d.mode,x),v.return=d,v;case cs:var y=v._init;return f(d,y(v._payload),x)}if(Nl(v)||gl(v))return v=yo(v,d.mode,x,null),v.return=d,v;hc(d,v)}return null}function h(d,v,x,y){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tc:return x.key===T?l(d,v,x,y):null;case pa:return x.key===T?u(d,v,x,y):null;case cs:return T=x._init,h(d,v,T(x._payload),y)}if(Nl(x)||gl(x))return T!==null?null:c(d,v,x,y,null);hc(d,x)}return null}function p(d,v,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tc:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,T);case pa:return d=d.get(y.key===null?x:y.key)||null,u(v,d,y,T);case cs:var w=y._init;return p(d,v,x,w(y._payload),T)}if(Nl(y)||gl(y))return d=d.get(x)||null,c(v,d,y,T,null);hc(v,y)}return null}function _(d,v,x,y){for(var T=null,w=null,M=v,L=v=0,S=null;M!==null&&L<x.length;L++){M.index>L?(S=M,M=null):S=M.sibling;var E=h(d,M,x[L],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(d,M),v=s(E,v,L),w===null?T=E:w.sibling=E,w=E,M=S}if(L===x.length)return t(d,M),Lt&&no(d,L),T;if(M===null){for(;L<x.length;L++)M=f(d,x[L],y),M!==null&&(v=s(M,v,L),w===null?T=M:w.sibling=M,w=M);return Lt&&no(d,L),T}for(M=i(d,M);L<x.length;L++)S=p(M,d,L,x[L],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?L:S.key),v=s(S,v,L),w===null?T=S:w.sibling=S,w=S);return n&&M.forEach(function(I){return e(d,I)}),Lt&&no(d,L),T}function g(d,v,x,y){var T=gl(x);if(typeof T!="function")throw Error(oe(150));if(x=T.call(x),x==null)throw Error(oe(151));for(var w=T=null,M=v,L=v=0,S=null,E=x.next();M!==null&&!E.done;L++,E=x.next()){M.index>L?(S=M,M=null):S=M.sibling;var I=h(d,M,E.value,y);if(I===null){M===null&&(M=S);break}n&&M&&I.alternate===null&&e(d,M),v=s(I,v,L),w===null?T=I:w.sibling=I,w=I,M=S}if(E.done)return t(d,M),Lt&&no(d,L),T;if(M===null){for(;!E.done;L++,E=x.next())E=f(d,E.value,y),E!==null&&(v=s(E,v,L),w===null?T=E:w.sibling=E,w=E);return Lt&&no(d,L),T}for(M=i(d,M);!E.done;L++,E=x.next())E=p(M,d,L,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?L:E.key),v=s(E,v,L),w===null?T=E:w.sibling=E,w=E);return n&&M.forEach(function(U){return e(d,U)}),Lt&&no(d,L),T}function m(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ma&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case tc:e:{for(var T=x.key,w=v;w!==null;){if(w.key===T){if(T=x.type,T===ma){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===cs&&r0(T)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=Sl(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===ma?(v=yo(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=pf(x.type,x.key,x.props,null,d.mode,y),y.ref=Sl(d,v,x),y.return=d,d=y)}return o(d);case pa:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=md(x,d.mode,y),v.return=d,d=v}return o(d);case cs:return w=x._init,m(d,v,w(x._payload),y)}if(Nl(x))return _(d,v,x,y);if(gl(x))return g(d,v,x,y);hc(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=pd(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return m}var $a=nS(!0),iS=nS(!1),kf=Xs(null),zf=null,Ea=null,cg=null;function fg(){cg=Ea=zf=null}function hg(n){var e=kf.current;bt(kf),n._currentValue=e}function kp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ia(n,e){zf=n,cg=Ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ei=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(cg!==n)if(n={context:n,memoizedValue:e,next:null},Ea===null){if(zf===null)throw Error(oe(308));Ea=n,zf.dependencies={lanes:0,firstContext:n}}else Ea=Ea.next=n;return e}var fo=null;function dg(n){fo===null?fo=[n]:fo.push(n)}function rS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,dg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Zr(n,i)}function Zr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var fs=!1;function pg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Rs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zr(n,t)}return r=i.interleaved,r===null?(e.next=e,dg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zr(n,t)}function lf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Jm(n,t)}}function s0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Bf(n,e,t,i){var r=n.updateQueue;fs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(h=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=zt({},f,h);break e;case 2:fs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Io|=o,n.lanes=o,n.memoizedState=f}}function o0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Xu={},Tr=Xs(Xu),Tu=Xs(Xu),wu=Xs(Xu);function ho(n){if(n===Xu)throw Error(oe(174));return n}function mg(n,e){switch(wt(wu,e),wt(Tu,n),wt(Tr,Xu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=vp(e,n)}bt(Tr),wt(Tr,e)}function Ka(){bt(Tr),bt(Tu),bt(wu)}function oS(n){ho(wu.current);var e=ho(Tr.current),t=vp(e,n.type);e!==t&&(wt(Tu,n),wt(Tr,t))}function gg(n){Tu.current===n&&(bt(Tr),bt(Tu))}var It=Xs(0);function Hf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ld=[];function _g(){for(var n=0;n<ld.length;n++)ld[n]._workInProgressVersionPrimary=null;ld.length=0}var uf=ns.ReactCurrentDispatcher,ud=ns.ReactCurrentBatchConfig,No=0,kt=null,Jt=null,ln=null,Vf=!1,$l=!1,Au=0,Sw=0;function Sn(){throw Error(oe(321))}function vg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!hr(n[t],e[t]))return!1;return!0}function xg(n,e,t,i,r,s){if(No=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uf.current=n===null||n.memoizedState===null?ww:Aw,n=t(i,r),$l){s=0;do{if($l=!1,Au=0,25<=s)throw Error(oe(301));s+=1,ln=Jt=null,e.updateQueue=null,uf.current=Cw,n=t(i,r)}while($l)}if(uf.current=Gf,e=Jt!==null&&Jt.next!==null,No=0,ln=Jt=kt=null,Vf=!1,e)throw Error(oe(300));return n}function yg(){var n=Au!==0;return Au=0,n}function pr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?kt.memoizedState=ln=n:ln=ln.next=n,ln}function Qi(){if(Jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var e=ln===null?kt.memoizedState:ln.next;if(e!==null)ln=e,Jt=n;else{if(n===null)throw Error(oe(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},ln===null?kt.memoizedState=ln=n:ln=ln.next=n}return ln}function Cu(n,e){return typeof e=="function"?e(n):e}function cd(n){var e=Qi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=Jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((No&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,kt.lanes|=c,Io|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,hr(i,e.memoizedState)||(ei=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,kt.lanes|=s,Io|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function fd(n){var e=Qi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);hr(s,e.memoizedState)||(ei=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function aS(){}function lS(n,e){var t=kt,i=Qi(),r=e(),s=!hr(i.memoizedState,r);if(s&&(i.memoizedState=r,ei=!0),i=i.queue,Sg(fS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ln!==null&&ln.memoizedState.tag&1){if(t.flags|=2048,Ru(9,cS.bind(null,t,i,r,e),void 0,null),cn===null)throw Error(oe(349));No&30||uS(t,e,r)}return r}function uS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function cS(n,e,t,i){e.value=t,e.getSnapshot=i,hS(e)&&dS(n)}function fS(n,e,t){return t(function(){hS(e)&&dS(n)})}function hS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!hr(n,t)}catch{return!0}}function dS(n){var e=Zr(n,1);e!==null&&cr(e,n,1,-1)}function a0(n){var e=pr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cu,lastRenderedState:n},e.queue=n,n=n.dispatch=Tw.bind(null,kt,n),[e.memoizedState,n]}function Ru(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function pS(){return Qi().memoizedState}function cf(n,e,t,i){var r=pr();kt.flags|=n,r.memoizedState=Ru(1|e,t,void 0,i===void 0?null:i)}function Sh(n,e,t,i){var r=Qi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&vg(i,o.deps)){r.memoizedState=Ru(e,t,s,i);return}}kt.flags|=n,r.memoizedState=Ru(1|e,t,s,i)}function l0(n,e){return cf(8390656,8,n,e)}function Sg(n,e){return Sh(2048,8,n,e)}function mS(n,e){return Sh(4,2,n,e)}function gS(n,e){return Sh(4,4,n,e)}function _S(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function vS(n,e,t){return t=t!=null?t.concat([n]):null,Sh(4,4,_S.bind(null,e,n),t)}function Mg(){}function xS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function yS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function SS(n,e,t){return No&21?(hr(t,e)||(t=Ay(),kt.lanes|=t,Io|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ei=!0),n.memoizedState=t)}function Mw(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=ud.transition;ud.transition={};try{n(!1),e()}finally{vt=t,ud.transition=i}}function MS(){return Qi().memoizedState}function Ew(n,e,t){var i=Ps(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ES(n))TS(e,t);else if(t=rS(n,e,t,i),t!==null){var r=Wn();cr(t,n,i,r),wS(t,e,i)}}function Tw(n,e,t){var i=Ps(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ES(n))TS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,hr(a,o)){var l=e.interleaved;l===null?(r.next=r,dg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=rS(n,e,r,i),t!==null&&(r=Wn(),cr(t,n,i,r),wS(t,e,i))}}function ES(n){var e=n.alternate;return n===kt||e!==null&&e===kt}function TS(n,e){$l=Vf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function wS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Jm(n,t)}}var Gf={readContext:Zi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},ww={readContext:Zi,useCallback:function(n,e){return pr().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:l0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,cf(4194308,4,_S.bind(null,e,n),t)},useLayoutEffect:function(n,e){return cf(4194308,4,n,e)},useInsertionEffect:function(n,e){return cf(4,2,n,e)},useMemo:function(n,e){var t=pr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=pr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Ew.bind(null,kt,n),[i.memoizedState,n]},useRef:function(n){var e=pr();return n={current:n},e.memoizedState=n},useState:a0,useDebugValue:Mg,useDeferredValue:function(n){return pr().memoizedState=n},useTransition:function(){var n=a0(!1),e=n[0];return n=Mw.bind(null,n[1]),pr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=kt,r=pr();if(Lt){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),cn===null)throw Error(oe(349));No&30||uS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,l0(fS.bind(null,i,s,n),[n]),i.flags|=2048,Ru(9,cS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=pr(),e=cn.identifierPrefix;if(Lt){var t=Gr,i=Vr;t=(i&~(1<<32-ur(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Au++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Sw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Aw={readContext:Zi,useCallback:xS,useContext:Zi,useEffect:Sg,useImperativeHandle:vS,useInsertionEffect:mS,useLayoutEffect:gS,useMemo:yS,useReducer:cd,useRef:pS,useState:function(){return cd(Cu)},useDebugValue:Mg,useDeferredValue:function(n){var e=Qi();return SS(e,Jt.memoizedState,n)},useTransition:function(){var n=cd(Cu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:aS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1},Cw={readContext:Zi,useCallback:xS,useContext:Zi,useEffect:Sg,useImperativeHandle:vS,useInsertionEffect:mS,useLayoutEffect:gS,useMemo:yS,useReducer:fd,useRef:pS,useState:function(){return fd(Cu)},useDebugValue:Mg,useDeferredValue:function(n){var e=Qi();return Jt===null?e.memoizedState=n:SS(e,Jt.memoizedState,n)},useTransition:function(){var n=fd(Cu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:aS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1};function rr(n,e){if(n&&n.defaultProps){e=zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function zp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Mh={isMounted:function(n){return(n=n._reactInternals)?Vo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ps(n),s=Yr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Rs(n,s,r),e!==null&&(cr(e,n,r,i),lf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=Ps(n),s=Yr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Rs(n,s,r),e!==null&&(cr(e,n,r,i),lf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=Ps(n),r=Yr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Rs(n,r,i),e!==null&&(cr(e,n,i,t),lf(e,n,i))}};function u0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!yu(t,i)||!yu(r,s):!0}function AS(n,e,t){var i=!1,r=ks,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=ni(e)?Do:Ln.current,i=e.contextTypes,s=(i=i!=null)?ja(n,r):ks),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function c0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Mh.enqueueReplaceState(e,e.state,null)}function Bp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},pg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=ni(e)?Do:Ln.current,r.context=ja(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mh.enqueueReplaceState(r,r.state,null),Bf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Za(n,e){try{var t="",i=e;do t+=tT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function hd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Hp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function CS(n,e,t){t=Yr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Xf||(Xf=!0,Zp=i),Hp(n,e)},t}function RS(n,e,t){t=Yr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Hp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Hp(n,e),typeof i!="function"&&(bs===null?bs=new Set([this]):bs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function f0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Rw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Vw.bind(null,n,e,t),e.then(n,n))}function h0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function d0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yr(-1,1),e.tag=2,Rs(t,e,1))),t.lanes|=1),n)}var bw=ns.ReactCurrentOwner,ei=!1;function Fn(n,e,t,i){e.child=n===null?iS(e,null,t,i):$a(e,n.child,t,i)}function p0(n,e,t,i,r){t=t.render;var s=e.ref;return Ia(e,r),i=xg(n,e,t,i,s,r),t=yg(),n!==null&&!ei?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qr(n,e,r)):(Lt&&t&&ag(e),e.flags|=1,Fn(n,e,i,r),e.child)}function m0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Pg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,bS(n,e,s,i,r)):(n=pf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:yu,t(o,i)&&n.ref===e.ref)return Qr(n,e,r)}return e.flags|=1,n=Ls(s,i),n.ref=e.ref,n.return=e,e.child=n}function bS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(yu(s,i)&&n.ref===e.ref)if(ei=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ei=!0);else return e.lanes=n.lanes,Qr(n,e,r)}return Vp(n,e,t,i,r)}function PS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(wa,_i),_i|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(wa,_i),_i|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(wa,_i),_i|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(wa,_i),_i|=i;return Fn(n,e,r,t),e.child}function LS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Vp(n,e,t,i,r){var s=ni(t)?Do:Ln.current;return s=ja(e,s),Ia(e,r),t=xg(n,e,t,i,s,r),i=yg(),n!==null&&!ei?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Qr(n,e,r)):(Lt&&i&&ag(e),e.flags|=1,Fn(n,e,t,r),e.child)}function g0(n,e,t,i,r){if(ni(t)){var s=!0;If(e)}else s=!1;if(Ia(e,r),e.stateNode===null)ff(n,e),AS(e,t,i),Bp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=ni(t)?Do:Ln.current,u=ja(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&c0(e,o,i,u),fs=!1;var h=e.memoizedState;o.state=h,Bf(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ti.current||fs?(typeof c=="function"&&(zp(e,t,c,i),l=e.memoizedState),(a=fs||u0(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:rr(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=ni(t)?Do:Ln.current,l=ja(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&c0(e,o,i,l),fs=!1,h=e.memoizedState,o.state=h,Bf(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||ti.current||fs?(typeof p=="function"&&(zp(e,t,p,i),_=e.memoizedState),(u=fs||u0(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Gp(n,e,t,i,s,r)}function Gp(n,e,t,i,r,s){LS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&t0(e,t,!1),Qr(n,e,s);i=e.stateNode,bw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=$a(e,n.child,null,s),e.child=$a(e,null,a,s)):Fn(n,e,a,s),e.memoizedState=i.state,r&&t0(e,t,!0),e.child}function DS(n){var e=n.stateNode;e.pendingContext?e0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&e0(n,e.context,!1),mg(n,e.containerInfo)}function _0(n,e,t,i,r){return qa(),ug(r),e.flags|=256,Fn(n,e,t,i),e.child}var Wp={dehydrated:null,treeContext:null,retryLane:0};function Xp(n){return{baseLanes:n,cachePool:null,transitions:null}}function US(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(It,r&1),n===null)return Fp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wh(o,i,0,null),n=yo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Xp(t),e.memoizedState=Wp,n):Eg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Pw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ls(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ls(a,s):(s=yo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Xp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Wp,i}return s=n.child,n=s.sibling,i=Ls(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Eg(n,e){return e=wh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function dc(n,e,t,i){return i!==null&&ug(i),$a(e,n.child,null,t),n=Eg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Pw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=hd(Error(oe(422))),dc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wh({mode:"visible",children:i.children},r,0,null),s=yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$a(e,n.child,null,o),e.child.memoizedState=Xp(o),e.memoizedState=Wp,s);if(!(e.mode&1))return dc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=hd(s,i,void 0),dc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ei||a){if(i=cn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zr(n,r),cr(i,n,r,-1))}return bg(),i=hd(Error(oe(421))),dc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Gw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ei=Cs(r.nextSibling),Ci=e,Lt=!0,or=null,n!==null&&(Fi[ki++]=Vr,Fi[ki++]=Gr,Fi[ki++]=Uo,Vr=n.id,Gr=n.overflow,Uo=e),e=Eg(e,i.children),e.flags|=4096,e)}function v0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),kp(n.return,e,t)}function dd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function NS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Fn(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&v0(n,t,e);else if(n.tag===19)v0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Hf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),dd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Hf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}dd(e,!0,t,null,s);break;case"together":dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ff(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Qr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Io|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=Ls(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ls(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Lw(n,e,t){switch(e.tag){case 3:DS(e),qa();break;case 5:oS(e);break;case 1:ni(e.type)&&If(e);break;case 4:mg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(kf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?US(n,e,t):(wt(It,It.current&1),n=Qr(n,e,t),n!==null?n.sibling:null);wt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return NS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,PS(n,e,t)}return Qr(n,e,t)}var IS,Yp,OS,FS;IS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yp=function(){};OS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ho(Tr.current);var s=null;switch(t){case"input":r=pp(n,r),i=pp(n,i),s=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),s=[];break;case"textarea":r=_p(n,r),i=_p(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Uf)}xp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(du.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(du.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};FS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ml(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Dw(n,e,t){var i=e.pendingProps;switch(lg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return ni(e.type)&&Nf(),Mn(e),null;case 3:return i=e.stateNode,Ka(),bt(ti),bt(Ln),_g(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(fc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,or!==null&&(em(or),or=null))),Yp(n,e),Mn(e),null;case 5:gg(e);var r=ho(wu.current);if(t=e.type,n!==null&&e.stateNode!=null)OS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Mn(e),null}if(n=ho(Tr.current),fc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[vr]=e,i[Eu]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Ol.length;r++)Ct(Ol[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":C_(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":b_(i,s),Ct("invalid",i)}xp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cc(i.textContent,a,n),r=["children",""+a]):du.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":nc(i),R_(i,s,!0);break;case"textarea":nc(i),P_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Uf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[vr]=e,n[Eu]=i,IS(n,e,!1,!1),e.stateNode=n;e:{switch(o=yp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ol.length;r++)Ct(Ol[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":C_(n,i),r=pp(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":b_(n,i),r=_p(n,i),Ct("invalid",n);break;default:r=i}xp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?py(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&pu(n,l):typeof l=="number"&&pu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(du.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&jm(n,s,l,o))}switch(t){case"input":nc(n),R_(n,i,!1);break;case"textarea":nc(n),P_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?La(n,!!i.multiple,s,!1):i.defaultValue!=null&&La(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Uf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)FS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=ho(wu.current),ho(Tr.current),fc(e)){if(i=e.stateNode,t=e.memoizedProps,i[vr]=e,(s=i.nodeValue!==t)&&(n=Ci,n!==null))switch(n.tag){case 3:cc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[vr]=e,e.stateNode=i}return Mn(e),null;case 13:if(bt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&Ei!==null&&e.mode&1&&!(e.flags&128))tS(),qa(),e.flags|=98560,s=!1;else if(s=fc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[vr]=e}else qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else or!==null&&(em(or),or=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?tn===0&&(tn=3):bg())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return Ka(),Yp(n,e),n===null&&Su(e.stateNode.containerInfo),Mn(e),null;case 10:return hg(e.type._context),Mn(e),null;case 17:return ni(e.type)&&Nf(),Mn(e),null;case 19:if(bt(It),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ml(s,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Hf(n),o!==null){for(e.flags|=128,Ml(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>Qa&&(e.flags|=128,i=!0,Ml(s,!1),e.lanes=4194304)}else{if(!i)if(n=Hf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ml(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Mn(e),null}else 2*Wt()-s.renderingStartTime>Qa&&t!==1073741824&&(e.flags|=128,i=!0,Ml(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=It.current,wt(It,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return Rg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_i&1073741824&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Uw(n,e){switch(lg(e),e.tag){case 1:return ni(e.type)&&Nf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ka(),bt(ti),bt(Ln),_g(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return gg(e),null;case 13:if(bt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));qa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(It),null;case 4:return Ka(),null;case 10:return hg(e.type._context),null;case 22:case 23:return Rg(),null;case 24:return null;default:return null}}var pc=!1,Cn=!1,Nw=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ta(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function jp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var x0=!1;function Iw(n,e){if(Pp=Pf,n=Vy(),og(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Lp={focusedElem:n,selectionRange:t},Pf=!1,Te=e;Te!==null;)if(e=Te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Te=n;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?g:rr(e.type,g),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){Ht(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}return _=x0,x0=!1,_}function Kl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&jp(e,t,s)}r=r.next}while(r!==i)}}function Eh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function qp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function kS(n){var e=n.alternate;e!==null&&(n.alternate=null,kS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[vr],delete e[Eu],delete e[Np],delete e[_w],delete e[vw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zS(n){return n.tag===5||n.tag===3||n.tag===4}function y0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $p(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Uf));else if(i!==4&&(n=n.child,n!==null))for($p(n,e,t),n=n.sibling;n!==null;)$p(n,e,t),n=n.sibling}function Kp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Kp(n,e,t),n=n.sibling;n!==null;)Kp(n,e,t),n=n.sibling}var dn=null,sr=!1;function is(n,e,t){for(t=t.child;t!==null;)BS(n,e,t),t=t.sibling}function BS(n,e,t){if(Er&&typeof Er.onCommitFiberUnmount=="function")try{Er.onCommitFiberUnmount(mh,t)}catch{}switch(t.tag){case 5:Cn||Ta(t,e);case 6:var i=dn,r=sr;dn=null,is(n,e,t),dn=i,sr=r,dn!==null&&(sr?(n=dn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):dn.removeChild(t.stateNode));break;case 18:dn!==null&&(sr?(n=dn,t=t.stateNode,n.nodeType===8?od(n.parentNode,t):n.nodeType===1&&od(n,t),vu(n)):od(dn,t.stateNode));break;case 4:i=dn,r=sr,dn=t.stateNode.containerInfo,sr=!0,is(n,e,t),dn=i,sr=r;break;case 0:case 11:case 14:case 15:if(!Cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jp(t,e,o),r=r.next}while(r!==i)}is(n,e,t);break;case 1:if(!Cn&&(Ta(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}is(n,e,t);break;case 21:is(n,e,t);break;case 22:t.mode&1?(Cn=(i=Cn)||t.memoizedState!==null,is(n,e,t),Cn=i):is(n,e,t);break;default:is(n,e,t)}}function S0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Nw),e.forEach(function(i){var r=Ww.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ji(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dn=a.stateNode,sr=!1;break e;case 3:dn=a.stateNode.containerInfo,sr=!0;break e;case 4:dn=a.stateNode.containerInfo,sr=!0;break e}a=a.return}if(dn===null)throw Error(oe(160));BS(s,o,r),dn=null,sr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)HS(e,n),e=e.sibling}function HS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ji(e,n),dr(n),i&4){try{Kl(3,n,n.return),Eh(3,n)}catch(g){Ht(n,n.return,g)}try{Kl(5,n,n.return)}catch(g){Ht(n,n.return,g)}}break;case 1:Ji(e,n),dr(n),i&512&&t!==null&&Ta(t,t.return);break;case 5:if(Ji(e,n),dr(n),i&512&&t!==null&&Ta(t,t.return),n.flags&32){var r=n.stateNode;try{pu(r,"")}catch(g){Ht(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uy(r,s),yp(a,o);var u=yp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?py(r,f):c==="dangerouslySetInnerHTML"?hy(r,f):c==="children"?pu(r,f):jm(r,c,f,u)}switch(a){case"input":mp(r,s);break;case"textarea":cy(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?La(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?La(r,!!s.multiple,s.defaultValue,!0):La(r,!!s.multiple,s.multiple?[]:"",!1))}r[Eu]=s}catch(g){Ht(n,n.return,g)}}break;case 6:if(Ji(e,n),dr(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Ht(n,n.return,g)}}break;case 3:if(Ji(e,n),dr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{vu(e.containerInfo)}catch(g){Ht(n,n.return,g)}break;case 4:Ji(e,n),dr(n);break;case 13:Ji(e,n),dr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ag=Wt())),i&4&&S0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Cn=(u=Cn)||c,Ji(e,n),Cn=u):Ji(e,n),dr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Te=n,c=n.child;c!==null;){for(f=Te=c;Te!==null;){switch(h=Te,p=h.child,h.tag){case 0:case 11:case 14:case 15:Kl(4,h,h.return);break;case 1:Ta(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Ht(i,t,g)}}break;case 5:Ta(h,h.return);break;case 22:if(h.memoizedState!==null){E0(f);continue}}p!==null?(p.return=h,Te=p):E0(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dy("display",o))}catch(g){Ht(n,n.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Ht(n,n.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ji(e,n),dr(n),i&4&&S0(n);break;case 21:break;default:Ji(e,n),dr(n)}}function dr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(zS(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pu(r,""),i.flags&=-33);var s=y0(n);Kp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=y0(n);$p(n,a,o);break;default:throw Error(oe(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ow(n,e,t){Te=n,VS(n)}function VS(n,e,t){for(var i=(n.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Cn;a=pc;var u=Cn;if(pc=o,(Cn=l)&&!u)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?T0(r):l!==null?(l.return=o,Te=l):T0(r);for(;s!==null;)Te=s,VS(s),s=s.sibling;Te=r,pc=a,Cn=u}M0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):M0(n)}}function M0(n){for(;Te!==null;){var e=Te;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Cn||Eh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:rr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&o0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}o0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&vu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Cn||e.flags&512&&qp(e)}catch(h){Ht(e,e.return,h)}}if(e===n){Te=null;break}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}}function E0(n){for(;Te!==null;){var e=Te;if(e===n){Te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Te=t;break}Te=e.return}}function T0(n){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Eh(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{qp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{qp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var Fw=Math.ceil,Wf=ns.ReactCurrentDispatcher,Tg=ns.ReactCurrentOwner,qi=ns.ReactCurrentBatchConfig,ft=0,cn=null,$t=null,_n=0,_i=0,wa=Xs(0),tn=0,bu=null,Io=0,Th=0,wg=0,Zl=null,Kn=null,Ag=0,Qa=1/0,Ir=null,Xf=!1,Zp=null,bs=null,mc=!1,gs=null,Yf=0,Ql=0,Qp=null,hf=-1,df=0;function Wn(){return ft&6?Wt():hf!==-1?hf:hf=Wt()}function Ps(n){return n.mode&1?ft&2&&_n!==0?_n&-_n:yw.transition!==null?(df===0&&(df=Ay()),df):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Uy(n.type)),n):1}function cr(n,e,t,i){if(50<Ql)throw Ql=0,Qp=null,Error(oe(185));Vu(n,t,i),(!(ft&2)||n!==cn)&&(n===cn&&(!(ft&2)&&(Th|=t),tn===4&&ps(n,_n)),ii(n,i),t===1&&ft===0&&!(e.mode&1)&&(Qa=Wt()+500,yh&&Ys()))}function ii(n,e){var t=n.callbackNode;yT(n,e);var i=bf(n,n===cn?_n:0);if(i===0)t!==null&&U_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&U_(t),e===1)n.tag===0?xw(w0.bind(null,n)):Qy(w0.bind(null,n)),mw(function(){!(ft&6)&&Ys()}),t=null;else{switch(Cy(i)){case 1:t=Qm;break;case 4:t=Ty;break;case 16:t=Rf;break;case 536870912:t=wy;break;default:t=Rf}t=KS(t,GS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function GS(n,e){if(hf=-1,df=0,ft&6)throw Error(oe(327));var t=n.callbackNode;if(Oa()&&n.callbackNode!==t)return null;var i=bf(n,n===cn?_n:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=jf(n,i);else{e=i;var r=ft;ft|=2;var s=XS();(cn!==n||_n!==e)&&(Ir=null,Qa=Wt()+500,xo(n,e));do try{Bw();break}catch(a){WS(n,a)}while(!0);fg(),Wf.current=s,ft=r,$t!==null?e=0:(cn=null,_n=0,e=tn)}if(e!==0){if(e===2&&(r=wp(n),r!==0&&(i=r,e=Jp(n,r))),e===1)throw t=bu,xo(n,0),ps(n,i),ii(n,Wt()),t;if(e===6)ps(n,i);else{if(r=n.current.alternate,!(i&30)&&!kw(r)&&(e=jf(n,i),e===2&&(s=wp(n),s!==0&&(i=s,e=Jp(n,s))),e===1))throw t=bu,xo(n,0),ps(n,i),ii(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:io(n,Kn,Ir);break;case 3:if(ps(n,i),(i&130023424)===i&&(e=Ag+500-Wt(),10<e)){if(bf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Up(io.bind(null,n,Kn,Ir),e);break}io(n,Kn,Ir);break;case 4:if(ps(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ur(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Fw(i/1960))-i,10<i){n.timeoutHandle=Up(io.bind(null,n,Kn,Ir),i);break}io(n,Kn,Ir);break;case 5:io(n,Kn,Ir);break;default:throw Error(oe(329))}}}return ii(n,Wt()),n.callbackNode===t?GS.bind(null,n):null}function Jp(n,e){var t=Zl;return n.current.memoizedState.isDehydrated&&(xo(n,e).flags|=256),n=jf(n,e),n!==2&&(e=Kn,Kn=t,e!==null&&em(e)),n}function em(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function kw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!hr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ps(n,e){for(e&=~wg,e&=~Th,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ur(e),i=1<<t;n[t]=-1,e&=~i}}function w0(n){if(ft&6)throw Error(oe(327));Oa();var e=bf(n,0);if(!(e&1))return ii(n,Wt()),null;var t=jf(n,e);if(n.tag!==0&&t===2){var i=wp(n);i!==0&&(e=i,t=Jp(n,i))}if(t===1)throw t=bu,xo(n,0),ps(n,e),ii(n,Wt()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,io(n,Kn,Ir),ii(n,Wt()),null}function Cg(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Qa=Wt()+500,yh&&Ys())}}function Oo(n){gs!==null&&gs.tag===0&&!(ft&6)&&Oa();var e=ft;ft|=1;var t=qi.transition,i=vt;try{if(qi.transition=null,vt=1,n)return n()}finally{vt=i,qi.transition=t,ft=e,!(ft&6)&&Ys()}}function Rg(){_i=wa.current,bt(wa)}function xo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,pw(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(lg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nf();break;case 3:Ka(),bt(ti),bt(Ln),_g();break;case 5:gg(i);break;case 4:Ka();break;case 13:bt(It);break;case 19:bt(It);break;case 10:hg(i.type._context);break;case 22:case 23:Rg()}t=t.return}if(cn=n,$t=n=Ls(n.current,null),_n=_i=e,tn=0,bu=null,wg=Th=Io=0,Kn=Zl=null,fo!==null){for(e=0;e<fo.length;e++)if(t=fo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}fo=null}return n}function WS(n,e){do{var t=$t;try{if(fg(),uf.current=Gf,Vf){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vf=!1}if(No=0,ln=Jt=kt=null,$l=!1,Au=0,Tg.current=null,t===null||t.return===null){tn=1,bu=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=h0(o);if(p!==null){p.flags&=-257,d0(p,o,a,s,e),p.mode&1&&f0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){f0(s,u,e),bg();break e}l=Error(oe(426))}}else if(Lt&&a.mode&1){var m=h0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),d0(m,o,a,s,e),ug(Za(l,a));break e}}s=l=Za(l,a),tn!==4&&(tn=2),Zl===null?Zl=[s]:Zl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=CS(s,l,e);s0(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(bs===null||!bs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=RS(s,a,e);s0(s,y);break e}}s=s.return}while(s!==null)}jS(t)}catch(T){e=T,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function XS(){var n=Wf.current;return Wf.current=Gf,n===null?Gf:n}function bg(){(tn===0||tn===3||tn===2)&&(tn=4),cn===null||!(Io&268435455)&&!(Th&268435455)||ps(cn,_n)}function jf(n,e){var t=ft;ft|=2;var i=XS();(cn!==n||_n!==e)&&(Ir=null,xo(n,e));do try{zw();break}catch(r){WS(n,r)}while(!0);if(fg(),ft=t,Wf.current=i,$t!==null)throw Error(oe(261));return cn=null,_n=0,tn}function zw(){for(;$t!==null;)YS($t)}function Bw(){for(;$t!==null&&!fT();)YS($t)}function YS(n){var e=$S(n.alternate,n,_i);n.memoizedProps=n.pendingProps,e===null?jS(n):$t=e,Tg.current=null}function jS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Uw(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}else if(t=Dw(t,e,_i),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);tn===0&&(tn=5)}function io(n,e,t){var i=vt,r=qi.transition;try{qi.transition=null,vt=1,Hw(n,e,t,i)}finally{qi.transition=r,vt=i}return null}function Hw(n,e,t,i){do Oa();while(gs!==null);if(ft&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ST(n,s),n===cn&&($t=cn=null,_n=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mc||(mc=!0,KS(Rf,function(){return Oa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=qi.transition,qi.transition=null;var o=vt;vt=1;var a=ft;ft|=4,Tg.current=null,Iw(n,t),HS(t,n),aw(Lp),Pf=!!Pp,Lp=Pp=null,n.current=t,Ow(t),hT(),ft=a,vt=o,qi.transition=s}else n.current=t;if(mc&&(mc=!1,gs=n,Yf=r),s=n.pendingLanes,s===0&&(bs=null),mT(t.stateNode),ii(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xf)throw Xf=!1,n=Zp,Zp=null,n;return Yf&1&&n.tag!==0&&Oa(),s=n.pendingLanes,s&1?n===Qp?Ql++:(Ql=0,Qp=n):Ql=0,Ys(),null}function Oa(){if(gs!==null){var n=Cy(Yf),e=qi.transition,t=vt;try{if(qi.transition=null,vt=16>n?16:n,gs===null)var i=!1;else{if(n=gs,gs=null,Yf=0,ft&6)throw Error(oe(331));var r=ft;for(ft|=4,Te=n.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:Kl(8,c,s)}var f=c.child;if(f!==null)f.return=c,Te=f;else for(;Te!==null;){c=Te;var h=c.sibling,p=c.return;if(kS(c),c===u){Te=null;break}if(h!==null){h.return=p,Te=h;break}Te=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kl(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Te=d;break e}Te=s.return}}var v=n.current;for(Te=v;Te!==null;){o=Te;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Te=x;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eh(9,a)}}catch(T){Ht(a,a.return,T)}if(a===o){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(ft=r,Ys(),Er&&typeof Er.onPostCommitFiberRoot=="function")try{Er.onPostCommitFiberRoot(mh,n)}catch{}i=!0}return i}finally{vt=t,qi.transition=e}}return!1}function A0(n,e,t){e=Za(t,e),e=CS(n,e,1),n=Rs(n,e,1),e=Wn(),n!==null&&(Vu(n,1,e),ii(n,e))}function Ht(n,e,t){if(n.tag===3)A0(n,n,t);else for(;e!==null;){if(e.tag===3){A0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bs===null||!bs.has(i))){n=Za(t,n),n=RS(e,n,1),e=Rs(e,n,1),n=Wn(),e!==null&&(Vu(e,1,n),ii(e,n));break}}e=e.return}}function Vw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,cn===n&&(_n&t)===t&&(tn===4||tn===3&&(_n&130023424)===_n&&500>Wt()-Ag?xo(n,0):wg|=t),ii(n,e)}function qS(n,e){e===0&&(n.mode&1?(e=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):e=1);var t=Wn();n=Zr(n,e),n!==null&&(Vu(n,e,t),ii(n,t))}function Gw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),qS(n,t)}function Ww(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),qS(n,t)}var $S;$S=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ti.current)ei=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ei=!1,Lw(n,e,t);ei=!!(n.flags&131072)}else ei=!1,Lt&&e.flags&1048576&&Jy(e,Ff,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ff(n,e),n=e.pendingProps;var r=ja(e,Ln.current);Ia(e,t),r=xg(null,e,i,n,r,t);var s=yg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ni(i)?(s=!0,If(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pg(e),r.updater=Mh,e.stateNode=r,r._reactInternals=e,Bp(e,i,n,t),e=Gp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&ag(e),Fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ff(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yw(i),n=rr(i,n),r){case 0:e=Vp(null,e,i,n,t);break e;case 1:e=g0(null,e,i,n,t);break e;case 11:e=p0(null,e,i,n,t);break e;case 14:e=m0(null,e,i,rr(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),Vp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),g0(n,e,i,r,t);case 3:e:{if(DS(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sS(n,e),Bf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Za(Error(oe(423)),e),e=_0(n,e,i,t,r);break e}else if(i!==r){r=Za(Error(oe(424)),e),e=_0(n,e,i,t,r);break e}else for(Ei=Cs(e.stateNode.containerInfo.firstChild),Ci=e,Lt=!0,or=null,t=iS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qa(),i===r){e=Qr(n,e,t);break e}Fn(n,e,i,t)}e=e.child}return e;case 5:return oS(e),n===null&&Fp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Dp(i,r)?o=null:s!==null&&Dp(i,s)&&(e.flags|=32),LS(n,e),Fn(n,e,o,t),e.child;case 6:return n===null&&Fp(e),null;case 13:return US(n,e,t);case 4:return mg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=$a(e,null,i,t):Fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),p0(n,e,i,r,t);case 7:return Fn(n,e,e.pendingProps,t),e.child;case 8:return Fn(n,e,e.pendingProps.children,t),e.child;case 12:return Fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(kf,i._currentValue),i._currentValue=o,s!==null)if(hr(s.value,o)){if(s.children===r.children&&!ti.current){e=Qr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),kp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),kp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ia(e,t),r=Zi(r),i=i(r),e.flags|=1,Fn(n,e,i,t),e.child;case 14:return i=e.type,r=rr(i,e.pendingProps),r=rr(i.type,r),m0(n,e,i,r,t);case 15:return bS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),ff(n,e),e.tag=1,ni(i)?(n=!0,If(e)):n=!1,Ia(e,t),AS(e,i,r),Bp(e,i,r,t),Gp(null,e,i,!0,n,t);case 19:return NS(n,e,t);case 22:return PS(n,e,t)}throw Error(oe(156,e.tag))};function KS(n,e){return Ey(n,e)}function Xw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(n,e,t,i){return new Xw(n,e,t,i)}function Pg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yw(n){if(typeof n=="function")return Pg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$m)return 11;if(n===Km)return 14}return 2}function Ls(n,e){var t=n.alternate;return t===null?(t=Xi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function pf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Pg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ma:return yo(t.children,r,s,e);case qm:o=8,r|=8;break;case cp:return n=Xi(12,t,e,r|2),n.elementType=cp,n.lanes=s,n;case fp:return n=Xi(13,t,e,r),n.elementType=fp,n.lanes=s,n;case hp:return n=Xi(19,t,e,r),n.elementType=hp,n.lanes=s,n;case oy:return wh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ry:o=10;break e;case sy:o=9;break e;case $m:o=11;break e;case Km:o=14;break e;case cs:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=Xi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function yo(n,e,t,i){return n=Xi(7,n,i,e),n.lanes=t,n}function wh(n,e,t,i){return n=Xi(22,n,i,e),n.elementType=oy,n.lanes=t,n.stateNode={isHidden:!1},n}function pd(n,e,t){return n=Xi(6,n,null,e),n.lanes=t,n}function md(n,e,t){return e=Xi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function jw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$h(0),this.expirationTimes=$h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$h(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lg(n,e,t,i,r,s,o,a,l){return n=new jw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pg(s),n}function qw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ZS(n){if(!n)return ks;n=n._reactInternals;e:{if(Vo(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ni(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(ni(t))return Zy(n,t,e)}return e}function QS(n,e,t,i,r,s,o,a,l){return n=Lg(t,i,!0,n,r,s,o,a,l),n.context=ZS(null),t=n.current,i=Wn(),r=Ps(t),s=Yr(i,r),s.callback=e??null,Rs(t,s,r),n.current.lanes=r,Vu(n,r,i),ii(n,i),n}function Ah(n,e,t,i){var r=e.current,s=Wn(),o=Ps(r);return t=ZS(t),e.context===null?e.context=t:e.pendingContext=t,e=Yr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Rs(r,e,o),n!==null&&(cr(n,r,o,s),lf(n,r,o)),o}function qf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function C0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Dg(n,e){C0(n,e),(n=n.alternate)&&C0(n,e)}function $w(){return null}var JS=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ug(n){this._internalRoot=n}Ch.prototype.render=Ug.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));Ah(n,e,null,null)};Ch.prototype.unmount=Ug.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Oo(function(){Ah(null,n,null,null)}),e[Kr]=null}};function Ch(n){this._internalRoot=n}Ch.prototype.unstable_scheduleHydration=function(n){if(n){var e=Py();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ds.length&&e!==0&&e<ds[t].priority;t++);ds.splice(t,0,n),t===0&&Dy(n)}};function Ng(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function R0(){}function Kw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=qf(o);s.call(u)}}var o=QS(e,i,n,0,null,!1,!1,"",R0);return n._reactRootContainer=o,n[Kr]=o.current,Su(n.nodeType===8?n.parentNode:n),Oo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=qf(l);a.call(u)}}var l=Lg(n,0,!1,null,null,!1,!1,"",R0);return n._reactRootContainer=l,n[Kr]=l.current,Su(n.nodeType===8?n.parentNode:n),Oo(function(){Ah(e,l,t,i)}),l}function bh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qf(o);a.call(l)}}Ah(e,o,n,r)}else o=Kw(t,e,n,r,i);return qf(o)}Ry=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Il(e.pendingLanes);t!==0&&(Jm(e,t|1),ii(e,Wt()),!(ft&6)&&(Qa=Wt()+500,Ys()))}break;case 13:Oo(function(){var i=Zr(n,1);if(i!==null){var r=Wn();cr(i,n,1,r)}}),Dg(n,1)}};eg=function(n){if(n.tag===13){var e=Zr(n,134217728);if(e!==null){var t=Wn();cr(e,n,134217728,t)}Dg(n,134217728)}};by=function(n){if(n.tag===13){var e=Ps(n),t=Zr(n,e);if(t!==null){var i=Wn();cr(t,n,e,i)}Dg(n,e)}};Py=function(){return vt};Ly=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};Mp=function(n,e,t){switch(e){case"input":if(mp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xh(i);if(!r)throw Error(oe(90));ly(i),mp(i,r)}}}break;case"textarea":cy(n,t);break;case"select":e=t.value,e!=null&&La(n,!!t.multiple,e,!1)}};_y=Cg;vy=Oo;var Zw={usingClientEntryPoint:!1,Events:[Wu,xa,xh,my,gy,Cg]},El={findFiberByHostInstance:co,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qw={bundleType:El.bundleType,version:El.version,rendererPackageName:El.rendererPackageName,rendererConfig:El.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ns.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Sy(n),n===null?null:n.stateNode},findFiberByHostInstance:El.findFiberByHostInstance||$w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{mh=gc.inject(Qw),Er=gc}catch{}}Di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;Di.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ng(e))throw Error(oe(200));return qw(n,e,null,t)};Di.createRoot=function(n,e){if(!Ng(n))throw Error(oe(299));var t=!1,i="",r=JS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lg(n,1,!1,null,null,t,!1,i,r),n[Kr]=e.current,Su(n.nodeType===8?n.parentNode:n),new Ug(e)};Di.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=Sy(e),n=n===null?null:n.stateNode,n};Di.flushSync=function(n){return Oo(n)};Di.hydrate=function(n,e,t){if(!Rh(e))throw Error(oe(200));return bh(null,n,e,!0,t)};Di.hydrateRoot=function(n,e,t){if(!Ng(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=JS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=QS(e,null,n,1,t??null,r,!1,s,o),n[Kr]=e.current,Su(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ch(e)};Di.render=function(n,e,t){if(!Rh(e))throw Error(oe(200));return bh(null,n,e,!1,t)};Di.unmountComponentAtNode=function(n){if(!Rh(n))throw Error(oe(40));return n._reactRootContainer?(Oo(function(){bh(null,null,n,!1,function(){n._reactRootContainer=null,n[Kr]=null})}),!0):!1};Di.unstable_batchedUpdates=Cg;Di.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Rh(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return bh(n,e,t,!1,i)};Di.version="18.3.1-next-f1338f8080-20240426";function eM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eM)}catch(n){console.error(n)}}eM(),ey.exports=Di;var Jw=ey.exports,b0=Jw;lp.createRoot=b0.createRoot,lp.hydrateRoot=b0.hydrateRoot;function Or(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pu={duration:.5,overwrite:!1,delay:0},Ig,vn,Dt,Yi=1e8,Mt=1/Yi,tm=Math.PI*2,eA=tm/4,tA=0,nM=Math.sqrt,nA=Math.cos,iA=Math.sin,hn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Jr=function(e){return typeof e=="number"},Og=function(e){return typeof e>"u"},Cr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Fg=function(){return typeof window<"u"},_c=function(e){return Vt(e)||hn(e)},iM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,rA=/random\([^)]+\)/g,sA=/,\s*/g,P0=/(?:-?\.?\d|\.)+/gi,rM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Aa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sM=/[+-]=-?[.\d]+/,oA=/[^,'"\[\]\s]+/gi,aA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,mr,nm,kg,Pi={},$f={},oM,aM=function(e){return($f=Ja(e,Pi))&&hi},zg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Lu=function(e,t){return!t&&console.warn(e)},lM=function(e,t){return e&&(Pi[e]=t)&&$f&&($f[e]=t)||Pi},Du=function(){return 0},lA={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},uA={suppressEvents:!0},Bg={},Ds=[],im={},uM,xi={},_d={},L0=30,gf=[],Hg="",Vg=function(e){var t=e[0],i,r;if(Cr(t)||Vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=gf.length;r--&&!gf[r].targetTest(t););i=gf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new LM(e[r],i)))||e.splice(r,1);return e},So=function(e){return e._gsap||Vg(ji(e))[0]._gsap},cM=function(e,t,i){return(i=e[t])&&Vt(i)?e[t]():Og(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Fa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},cA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Kf=function(){var e=Ds.length,t=Ds.slice(0),i,r;for(im={},Ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Gg=function(e){return!!(e._initted||e._startAt||e.add)},fM=function(e,t,i,r){Ds.length&&!vn&&Kf(),e.render(t,i,!!(vn&&t<0&&Gg(e))),Ds.length&&!vn&&Kf()},hM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(oA).length<2?t:hn(e)?e.trim():e},dM=function(e){return e},Li=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},fA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ja=function(e,t){for(var i in t)e[i]=t[i];return e},D0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Cr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Zf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Jl=function(e){var t=e.parent||Ot,i=e.keyframes?fA(Pn(e.keyframes)):Li;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},hA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},pM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ph=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},dA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rm=function(e,t,i,r){return e._startAt&&(vn?e._startAt.revert(mf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},pA=function n(e){return!e||e._ts&&n(e.parent)},U0=function(e){return e._repeat?el(e._tTime,e=e.duration()+e._rDelay)*e:0},el=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},Qf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lh=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Dh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lh(e),i._dirty||Mo(i,e)),e},mM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qf(e.rawTime(),t),(!t._dur||Yu(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),Mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},xr=function(e,t,i,r){return t.parent&&zs(t),t._start=Nt((Jr(i)?i:i||e!==Ot?Oi(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pM(e,t,"_first","_last",e._sort?"_start":0),sm(t)||(e._recent=t),r||mM(e,t),e._ts<0&&Dh(e,e._tTime),e},gM=function(e,t){return(Pi.ScrollTrigger||zg("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},_M=function(e,t,i,r,s){if(Xg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&uM!==Si.frame)return Ds.push(e),e._lazy=[s,r],1},mA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},sm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&mA(e)&&!(!e._initted&&sm(e))||(e._ts<0||e._dp._ts<0)&&!sm(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Yu(0,e._tDur,t),c=el(l,a),e._yoyo&&c&1&&(o=1-o),c!==el(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||vn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&_M(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&rm(e,t,i,!0),e._onUpdate&&!i&&Ti(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!vn&&(Ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_A=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},tl=function(e,t,i,r){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Dh(e,e._tTime=e._tDur*a),e.parent&&Lh(e),i||Mo(e.parent,e),e},N0=function(e){return e instanceof Jn?Mo(e):tl(e,e._dur)},vA={_start:0,endTime:Du,totalDuration:Du},Oi=function n(e,t,i){var r=e.labels,s=e._recent||vA,o=e.duration()>=Yi?s.endTime(!1):e._dur,a,l,u;return hn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Pn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},eu=function(e,t,i){var r=Jr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},js=function(e,t){return e||e===0?t(e):t},Yu=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!hn(e)||!(t=aA.exec(e))?"":t[1]},xA=function(e,t,i){return js(i,function(r){return Yu(e,t,r)})},om=[].slice,vM=function(e,t){return e&&Cr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Cr(e[0]))&&!e.nodeType&&e!==mr},yA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return hn(r)&&!t||vM(r,1)?(s=i).push.apply(s,ji(r)):i.push(r)})||i},ji=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):hn(e)&&!i&&(nm||!nl())?om.call((t||kg).querySelectorAll(e),0):Pn(e)?yA(e,i):vM(e)?om.call(e,0):e?[e]:[]},am=function(e){return e=ji(e)[0]||Lu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ji(t,i.querySelectorAll?i:i===e?Lu("Invalid scope")||kg.createElement("div"):e)}},xM=function(e){return e.sort(function(){return .5-Math.random()})},yM=function(e){if(Vt(e))return e;var t=Cr(e)?e:{each:e},i=Eo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return hn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,_){var g=(_||t).length,m=o[g],d,v,x,y,T,w,M,L,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Yi])[1],!S){for(M=-Yi;M<(M=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],d=l?Math.min(S,g)*c-.5:r%S,v=S===Yi?0:l?g*f/S-.5:r/S|0,M=0,L=Yi,w=0;w<g;w++)x=w%S-d,y=v-(w/S|0),m[w]=T=u?Math.abs(u==="y"?y:x):nM(x*x+y*y),T>M&&(M=T),T<L&&(L=T);r==="random"&&xM(m),m.max=M-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Rn(t.amount||t.each)||0,i=i&&g<0?UA(i):i}return g=(m[h]-m.min)/m.max||0,Nt(m.b+(i?i(g):g)*m.v)+m.u}},lm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Jr(i)?0:Rn(i))}},SM=function(e,t){var i=Pn(e),r,s;return!i&&Cr(e)&&(r=i=e.radius||Yi,e.values?(e=ji(e.values),(s=!Jr(e[0]))&&(r*=r)):e=lm(e.increment)),js(t,i?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Yi,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Jr(o)?c:c+Rn(o)}:lm(e))},MM=function(e,t,i,r){return js(Pn(e)?!t:i===!0?!!(i=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},SA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},MA=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},EA=function(e,t,i){return TM(e,t,0,1,i)},EM=function(e,t,i){return js(i,function(r){return e[~~t(r)]})},TA=function n(e,t,i){var r=t-e;return Pn(e)?EM(e,n(0,e.length),t):js(i,function(s){return(r+(s-e)%r)%r+e})},wA=function n(e,t,i){var r=t-e,s=r*2;return Pn(e)?EM(e,n(0,e.length-1),t):js(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Uu=function(e){return e.replace(rA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(sA);return MM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},TM=function(e,t,i,r,s){var o=t-e,a=r-i;return js(s,function(l){return i+((l-e)/o*a||0)})},AA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=hn(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return c[g](_-g)},i=t}else r||(e=Ja(Pn(e)?[]:{},e));if(!c){for(l in t)Wg.call(a,e,l,"get",t[l]);s=function(_){return qg(_,a)||(o?e.p:e)}}}return js(i,s)},I0=function(e,t,i){var r=e.labels,s=Yi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ti=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ds.length&&Kf(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},Fl=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&Ti(e,"onInterrupt"),e},Ca,wM=[],AM=function(e){if(e)if(e=!e.name&&e.default||e,Fg()||e.headless){var t=e.name,i=Vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Du,render:qg,add:Wg,kill:GA,modifier:VA,rawVars:0},o={targetTest:0,get:0,getSetter:jg,aliases:{},register:0};if(nl(),e!==r){if(xi[t])return;Li(r,Li(Zf(e,s),o)),Ja(r.prototype,Ja(s,Zf(e,o))),xi[r.prop=t]=r,e.targetTest&&(gf.push(r),Bg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lM(t,r),e.register&&e.register(hi,r,oi)}else wM.push(e)},St=255,kl={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},vd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},CM=function(e,t,i){var r=e?Jr(e)?[e>>16,e>>8&St,e&St]:0:kl.black,s,o,a,l,u,c,f,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),kl[e])r=kl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(P0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=vd(l+1/3,s,o),r[1]=vd(l,s,o),r[2]=vd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(rM),i&&r.length<4&&(r[3]=1),r}else r=e.match(P0)||kl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},RM=function(e){var t=[],i=[],r=-1;return e.split(Us).forEach(function(s){var o=s.match(Aa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},O0=function(e,t,i){var r="",s=(e+r).match(Us),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=CM(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=RM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Us,"1").split(Aa),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Us),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Us=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in kl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),CA=/hsl[a]?\(/,bM=function(e){var t=e.join(" "),i;if(Us.lastIndex=0,Us.test(t))return i=CA.test(t),e[1]=O0(e[1],i),e[0]=O0(e[0],i,RM(e[1])),!0},Nu,Si=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,_=function g(m){var d=n()-r,v=m===!0,x,y,T,w;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,x=T-o,(x>0||v)&&(w=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](T,h,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){oM&&(!nm&&Fg()&&(mr=nm=window,kg=mr.document||{},Pi.gsap=hi,(mr.gsapVersions||(mr.gsapVersions=[])).push(hi.version),aM($f||mr.GreenSockGlobals||!mr.gsap&&mr||{}),wM.forEach(AM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Nu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Nu=0,u=Du},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,v){var x=d?function(y,T,w,M){m(y,T,w,M),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),nl(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),nl=function(){return!Nu&&Si.wake()},ut={},RA=/^[\d.\-M][\d.\-,\s]/,bA=/["']/g,PA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(bA,"").trim():+u,r=l.substr(a+1).trim();return t},LA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},DA=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[PA(t[1])]:LA(e).split(",").map(hM)):ut._CE&&RA.test(e)?ut._CE("",e):i},UA=function(e){return function(t){return 1-e(1-t)}},Eo=function(e,t){return e&&(Vt(e)?e:ut[e]||DA(e))||t},Go=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){ut[a]=Pi[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},PM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/tm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*iA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:PM(a);return s=tm/s,l.config=function(u,c){return n(e,u,c)},l},yd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:PM(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Go(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Go("Elastic",xd("in"),xd("out"),xd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Go("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Go("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Go("Circ",function(n){return-(nM(1-n*n)-1)});Go("Sine",function(n){return n===1?1:-nA(n*eA)+1});Go("Back",yd("in"),yd("out"),yd());ut.SteppedEase=ut.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Yu(0,o,a)|0)+s)*i}}};Pu.ease=ut["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Hg+=n+","+n+"Params,"});var LM=function(e,t){this.id=tA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cM,this.set=t?t.getSetter:jg},Iu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,tl(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Nu||Si.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,tl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(nl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Dh(this,i),!s._dp||s.parent||mM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),fM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+U0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+U0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?el(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Qf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Yu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Lh(this),dA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=uA);var r=vn;return vn=i,Gg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),vn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,N0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,N0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Oi(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Vt(i)?i:dM,l=function(){var c=r.then;r.then=null,s&&s(),Vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Fl(this)},n}();Li(Iu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Jn=function(n){tM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),Ot&&xr(i.parent||Ot,Or(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&gM(Or(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return eu(0,arguments,this),this},t.from=function(r,s,o){return eu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return eu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Jl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,Oi(this,o),1),this},t.call=function(r,s,o){return xr(this,qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new qt(r,o,Oi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Jl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Jl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Nt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,g,m,d,v,x,y,T,w,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,d=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Nt(c%m),c===l?(g=this._repeat,h=u):(T=Nt(c/m),g=~~T,g&&g===T&&(h=u,g--),h>u&&(h=u)),T=el(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),w&&g&1&&(h=u-h,M=1),g!==T&&!this._lock){var L=w&&T&1,S=L===(w&&g&1);if(g<T&&(L=!L),a=L?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Nt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ti(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=L?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=_A(this,Nt(a),Nt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(Ti(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=-Mt);break}}p=_}else{p=this._last;for(var E=r<0?r:h;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||vn&&Gg(p)),h!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=E?-Mt:Mt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-Mt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Lh(this),this.render(r,s,o);this._onUpdate&&!s&&Ti(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ti(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Jr(s)||(s=Oi(this,s,r)),!(r instanceof Iu)){if(Pn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(hn(r))return this.addLabel(r,s);if(Vt(r))r=qt.delayedCall(0,r);else return this}return this!==r?xr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return hn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&Ph(this,r),r===this._recent&&(this._recent=this._last),Mo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(Si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Oi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=qt.delayedCall(0,s||Du,o);return a.data="isPause",this._hasPause=1,xr(this,a,Oi(this,r))},t.removePause=function(r){var s=this._first;for(r=Oi(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)_s!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ji(r),l=this._first,u=Jr(s),c;l;)l instanceof qt?cA(l._targets,a)&&(u?(!_s||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Oi(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,_=qt.to(o,Li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&tl(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Li({startAt:{time:Oi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),I0(this,Oi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),I0(this,Oi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Nt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Mo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Yi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Nt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;tl(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(fM(Ot,Qf(r,Ot)),uM=Si.frame),Si.frame>=L0){L0+=Ri.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Ri.autoSleep&&Si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Si.sleep()}}},e}(Iu);Li(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var NA=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,FM,null,s),u=0,c=0,f,h,p,_,g,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Uu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(gd)||[];f=gd.exec(r);)_=f[0],g=r.substring(u,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Fa(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=gd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(sM.test(r)||d)&&(l.e=0),this._pt=l,l},Wg=function(e,t,i,r,s,o,a,l,u,c){Vt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Vt(f)?u?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Vt(f)?u?zA:IM:Yg,_;if(hn(r)&&(~r.indexOf("random(")&&(r=Uu(r)),r.charAt(1)==="="&&(_=Fa(h,r)+(Rn(h)||0),(_||_===0)&&(r=_))),!c||h!==r||um)return!isNaN(h*r)&&r!==""?(_=new oi(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?HA:OM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&zg(t,r),NA.call(this,e,t,h,r,p,l||Ri.stringFilter,u))},IA=function(e,t,i,r,s){if(Vt(e)&&(e=tu(e,s,t,i,r)),!Cr(e)||e.style&&e.nodeType||Pn(e)||iM(e))return hn(e)?tu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=tu(e[a],s,t,i,r);return o},DM=function(e,t,i,r,s,o){var a,l,u,c;if(xi[e]&&(a=new xi[e]).init(s,a.rawVars?t[e]:IA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ca))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},_s,um,Xg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!Ig,y=e.timeline,T=r.easeReverse||f,w,M,L,S,E,I,U,$,P,O,B,z,D;if(y&&(!h||!s)&&(s="none"),e._ease=Eo(s,Pu.ease),e._rEase=T&&(Eo(T)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||h&&!r.stagger){if($=m[0]?So(m[0]).harness:0,z=$&&r[$.prop],w=Zf(r,Bg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?mf:lA),g._lazy=0),o){if(zs(e._startAt=qt.set(m,Li({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!g&&ri(l),startAt:null,delay:0,onUpdate:u&&function(){return Ti(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!a&&!p)&&e._startAt.revert(mf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),L=Li({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ri(l),immediateRender:a,stagger:0,parent:d},w),z&&(L[$.prop]=z),zs(e._startAt=qt.set(m,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(mf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ri(l)||l&&!_,M=0;M<m.length;M++){if(E=m[M],U=E._gsap||Vg(m)[M]._gsap,e._ptLookup[M]=O={},im[U.id]&&Ds.length&&Kf(),B=v===m?M:v.indexOf(E),$&&(P=new $).init(E,z||w,e,B,v)!==!1&&(e._pt=S=new oi(e._pt,E,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(F){O[F]=S}),P.priority&&(I=1)),!$||z)for(L in w)xi[L]&&(P=DM(L,w,e,B,E,v))?P.priority&&(I=1):O[L]=S=Wg.call(e,E,L,"get",w[L],B,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(E,e._op[M]),x&&e._pt&&(_s=e,Ot.killTweensOf(E,O,e.globalTime(t)),D=!e.parent,_s=0),e._pt&&l&&(im[U.id]=1)}I&&kM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!D,h&&t<=0&&y.render(Yi,!0,!0)},OA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return um=1,e.vars[t]="+=0",Xg(e,a),um=0,l?Lu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Gt(i)+Rn(f.e)),f.b&&(f.b=c.s+Rn(f.b))},FA=function(e,t){var i=e[0]?So(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ja({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Pn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},tu=function(e,t,i,r,s){return Vt(e)?e.call(t,i,r,s):hn(e)&&~e.indexOf("random(")?Uu(e):e},UM=Hg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",NM={};si(UM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return NM[n]=1});var qt=function(n){tM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Jl(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=r.parent||Ot,v=(Pn(i)||iM(i)?Jr(i[0]):"length"in r)?[i]:ji(i),x,y,T,w,M,L,S,E;if(a._targets=v.length?Vg(v):Lu("GSAP target "+i+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||_c(u)||_c(c)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Jn({data:"nested",defaults:g||{},targets:d&&d.data==="nested"?d.vars.targets:v}),x.kill(),x.parent=x._dp=Or(a),x._start=0,h||_c(u)||_c(c)){if(w=v.length,S=h&&yM(h),Cr(h))for(M in h)~UM.indexOf(M)&&(E||(E={}),E[M]=h[M]);for(y=0;y<w;y++)T=Zf(r,NM),T.stagger=0,I&&(T.easeReverse=I),E&&Ja(T,E),L=v[y],T.duration=+tu(u,Or(a),y,L,v),T.delay=(+tu(c,Or(a),y,L,v)||0)-a._delay,!h&&w===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(L,T,S?S(y,L,v):0),x._ease=ut.none;x.duration()?u=c=0:a.timeline=0}else if(_){Jl(Li(x.vars.defaults,{ease:"none"})),x._ease=Eo(_.ease||r.ease||"none");var U=0,$,P,O;if(Pn(_))_.forEach(function(B){return x.to(v,B,">")}),x.duration();else{T={};for(M in _)M==="ease"||M==="easeEach"||kA(M,_[M],T,_.easeEach);for(M in T)for($=T[M].sort(function(B,z){return B.t-z.t}),U=0,y=0;y<$.length;y++)P=$[y],O={ease:P.e,duration:(P.t-(y?$[y-1].t:0))/100*u},O[M]=P.v,x.to(v,O,U),U+=O.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!Ig&&(_s=Or(a),Ot.killTweensOf(v),_s=0),xr(d,Or(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===Nt(d._time)&&ri(f)&&pA(Or(a))&&d.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),m&&gM(Or(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Mt&&!c?l:r<Mt?0:r,h,p,_,g,m,d,v,x;if(!u)gA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=Nt(f%g),f===l?(_=this._repeat,h=u):(m=Nt(f/g),_=~~m,_&&_===m?(h=u,_--):h>u&&(h=u)),d=this._yoyo&&_&1,d&&(h=u-h),m=el(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Nt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(_M(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var T=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/u);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Ti(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&rm(this,r,s,o),Ti(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Ti(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&rm(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&zs(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Ti(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Nu||Si.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Xg(this,u),c=this._ease(u/this._dur),OA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Dh(this,0),this.parent||pM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_s&&_s.vars.overwrite!==!0)._first||Fl(this),this.parent&&o!==this.timeline.totalDuration()&&tl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ji(r):a,u=this._ptLookup,c=this._pt,f,h,p,_,g,m,d;if((!s||s==="all")&&hA(a,l))return s==="all"&&(this._pt=0),Fl(this);for(f=this._op=this._op||[],s!=="all"&&(hn(s)&&(g={},si(s,function(v){return g[v]=1}),s=g),s=FA(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ph(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Fl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return eu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return eu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Iu);Li(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Jn,t=om.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Yg=function(e,t,i){return e[t]=i},IM=function(e,t,i){return e[t](i)},zA=function(e,t,i,r){return e[t](r.fp,i)},BA=function(e,t,i){return e.setAttribute(t,i)},jg=function(e,t){return Vt(e[t])?IM:Og(e[t])&&e.setAttribute?BA:Yg},OM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},HA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},FM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},qg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},VA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},GA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ph(this,t,"_pt"):t.dep||(i=1),t=r;return!i},WA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},kM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||OM,this.d=l||this,this.set=u||Yg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=WA,this.m=i,this.mt=s,this.tween=r},n}();si(Hg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Bg[n]=1});Pi.TweenMax=Pi.TweenLite=qt;Pi.TimelineLite=Pi.TimelineMax=Jn;Ot=new Jn({sortChildren:!1,defaults:Pu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=bM;var To=[],_f={},XA=[],F0=0,YA=0,Sd=function(e){return(_f[e]||XA).map(function(t){return t()})},cm=function(){var e=Date.now(),t=[];e-F0>2&&(Sd("matchMediaInit"),To.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=mr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Sd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),F0=e,Sd("matchMedia"))},zM=function(){function n(t,i){this.selector=i&&am(i),this.data=[],this._r=[],this.isReverted=!1,this.id=YA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Vt(i)&&(s=r,r=i,i=Vt);var o=this,a=function(){var u=Dt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=am(s)),Dt=o,f=r.apply(o,arguments),Vt(f)&&o._r.push(f),Dt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Jn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=To.length;o--;)To[o].id===this.id&&To.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),jA=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Cr(i)||(i={matches:i});var o=new zM(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=mr.matchMedia(i[u]),l&&(To.indexOf(o)<0&&To.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(cm):l.addEventListener("change",cm)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Jf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return AM(r)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){hn(e)&&(e=ji(e)[0]);var s=So(e||{}).get,o=i?dM:hM;return i==="native"&&(i=""),e&&(t?o((xi[t]&&xi[t].get||s)(e,t,i,r)):function(a,l,u){return o((xi[a]&&xi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ji(e),e.length>1){var r=e.map(function(c){return hi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=xi[t],a=So(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;Ca._pt=0,f.init(e,i?c+i:c,Ca,0,[e]),f.render(1,f),Ca._pt&&qg(1,Ca)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=hi.to(e,Li((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,Pu.ease)),D0(Pu,e||{})},config:function(e){return D0(Ri,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!xi[a]&&!Pi[a]&&Lu(t+" effect requires "+a+" plugin.")}),_d[t]=function(a,l,u){return i(ji(a),Li(l||{},s),u)},o&&(Jn.prototype[t]=function(a,l,u){return this.add(_d[t](a,Cr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ut[e]=Eo(t)},parseEase:function(e,t){return arguments.length?Eo(e,t):ut},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Jn(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&xr(i,r,r._start-r._delay),r=s;return xr(Ot,i,0),i},context:function(e,t){return e?new zM(e,t):Dt},matchMedia:function(e){return new jA(e)},matchMediaRefresh:function(){return To.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||cm()},addEventListener:function(e,t){var i=_f[e]||(_f[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=_f[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:TA,wrapYoyo:wA,distribute:yM,random:MM,snap:SM,normalize:EA,getUnit:Rn,clamp:xA,splitColor:CM,toArray:ji,selector:am,mapRange:TM,pipe:SA,unitize:MA,interpolate:AA,shuffle:xM},install:aM,effects:_d,ticker:Si,updateRoot:Jn.updateRoot,plugins:xi,globalTimeline:Ot,core:{PropTween:oi,globals:lM,Tween:qt,Timeline:Jn,Animation:Iu,getCache:So,_removeLinkedListItem:Ph,reverting:function(){return vn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Ig=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Jf[n]=qt[n]});Si.add(Jn.updateRoot);Ca=Jf.to({},{duration:0});var qA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},$A=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=qA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Md=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(hn(s)&&(l={},si(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}$A(a,s)}}}},hi=Jf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)vn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Md("roundProps",lm),Md("modifiers"),Md("snap",SM))||Jf;qt.version=Jn.version=hi.version="3.15.0";oM=1;Fg()&&nl();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var k0,vs,ka,$g,po,z0,Kg,KA=function(){return typeof window<"u"},es={},ro=180/Math.PI,za=Math.PI/180,Xo=Math.atan2,B0=1e8,Zg=/([A-Z])/g,ZA=/(left|right|width|margin|padding|x)/i,QA=/[\s,\(]\S/,yr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},BM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},HM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iC=function(e,t,i){return e.style[t]=i},rC=function(e,t,i){return e.style.setProperty(t,i)},sC=function(e,t,i){return e._gsap[t]=i},oC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},aC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},lC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",ai=Ft+"Origin",uC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in es&&s){if(this.tfm=this.tfm||{},e!=="transform")e=yr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=kr(r,a)}):this.tfm[e]=o.x?o[e]:kr(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return yr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},VM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},cC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Zg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Kg(),(!s||!s.isStart)&&!i[Ft]&&(VM(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},GM=function(e,t){var i={target:e,props:[],revert:cC,save:uC};return e._gsap||hi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},WM,hm=function(e,t){var i=vs.createElementNS?vs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vs.createElement(e);return i&&i.style?i:vs.createElement(e)},wi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Zg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,il(t)||t,1)||""},H0="O,Moz,ms,Ms,Webkit".split(","),il=function(e,t,i){var r=t||po,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(H0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?H0[o]:"")+e},dm=function(){KA()&&window.document&&(k0=window,vs=k0.document,ka=vs.documentElement,po=hm("div")||{style:{}},hm("div"),Ft=il(Ft),ai=Ft+"Origin",po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",WM=!!il("perspective"),Kg=hi.core.reverting,$g=1)},V0=function(e){var t=e.ownerSVGElement,i=hm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ka.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ka.removeChild(i),s},G0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},XM=function(e){var t,i;try{t=e.getBBox()}catch{t=V0(e),i=1}return t&&(t.width||t.height)||i||(t=V0(e)),t&&!t.width&&!t.x&&!t.y?{x:+G0(e,["x","cx","x1"])||0,y:+G0(e,["y","cy","y1"])||0,width:0,height:0}:t},YM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&XM(e))},Bs=function(e,t){if(t){var i=e.style,r;t in es&&t!==ai&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Zg,"-$1").toLowerCase())):i.removeAttribute(t)}},xs=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?HM:BM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},W0={deg:1,rad:1,turn:1},fC={grid:1,flex:1},Hs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=po.style,l=ZA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",_,g,m,d;if(r===o||!s||W0[r]||W0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&YM(e),(p||o==="%")&&(es[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[c],Gt(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===vs||!g.appendChild)&&(g=vs.body),m=g._gsap,m&&p&&m.width&&l&&m.time===Si.time&&!m.uncache)return Gt(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[c],v?e.style[t]=v:Bs(e,t)}else(p||o==="%")&&!fC[wi(g,"display")]&&(a.position=wi(e,"position")),g===e&&(a.position="static"),g.appendChild(po),_=po[c],g.removeChild(po),a.position="absolute";return l&&p&&(m=So(g),m.time=Si.time,m.width=g[c]),Gt(h?_*s/f:_&&s?f/_*s:0)},kr=function(e,t,i,r){var s;return $g||dm(),t in yr&&t!=="transform"&&(t=yr[t],~t.indexOf(",")&&(t=t.split(",")[0])),es[t]&&t!=="transform"?(s=Fu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:th(wi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=eh[t]&&eh[t](e,t,i)||wi(e,t)||cM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hs(e,t,s,i)+i:s},hC=function(e,t,i,r){if(!i||i==="none"){var s=il(t,e,1),o=s&&wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=wi(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,FM),l=0,u=0,c,f,h,p,_,g,m,d,v,x,y,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=wi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=wi(e,t)||r,g?e.style[t]=g:Bs(e,t)),c=[i,r],bM(c),i=c[0],r=c[1],h=i.match(Aa)||[],T=r.match(Aa)||[],T.length){for(;f=Aa.exec(r);)m=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Fa(p,m)+y),d=parseFloat(m),x=m.substr((d+"").length),l=Aa.lastIndex-x.length,x||(x=x||Ri.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Hs(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?HM:BM;return sM.test(r)&&(a.e=0),this._pt=a,a},X0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=X0[i]||i,t[1]=X0[r]||r,t.join(" ")},pC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],es[a]&&(l=1,a=a==="transformOrigin"?ai:Ft),Bs(i,a);l&&(Bs(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Fu(i,1),o.uncache=1,VM(r)))}},eh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,pC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ou=[1,0,0,1,0,0],jM={},qM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Y0=function(e){var t=wi(e,Ft);return qM(t)?Ou:t.substr(7).match(rM).map(Gt)},Qg=function(e,t){var i=e._gsap||So(e),r=e.style,s=Y0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ou:s):(s===Ou&&!e.offsetParent&&e!==ka&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,ka.appendChild(e)),s=Y0(e),l?r.display=l:Bs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ka.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pm=function(e,t,i,r,s,o){var a=e._gsap,l=s||Qg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,M,L,S;i?l!==Ou&&(M=p*m-_*g)&&(L=y*(m/M)+T*(-g/M)+(g*v-m*d)/M,S=y*(-_/M)+T*(p/M)-(p*v-_*d)/M,y=L,T=S):(w=XM(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(d=y-u,v=T-c,a.xOffset=f+(d*p+v*g)-d,a.yOffset=h+(d*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(xs(o,a,"xOrigin",u,y),xs(o,a,"yOrigin",c,T),xs(o,a,"xOffset",f,a.xOffset),xs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Fu=function(e,t){var i=e._gsap||new LM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=wi(e,ai)||"0",c,f,h,p,_,g,m,d,v,x,y,T,w,M,L,S,E,I,U,$,P,O,B,z,D,F,R,K,J,q,Z,re;return c=f=h=g=m=d=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&YM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=Qg(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),pm(e,z||u,!!z||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,w=i.yOrigin||0,M!==Ou&&(I=M[0],U=M[1],$=M[2],P=M[3],c=O=M[4],f=B=M[5],M.length===6?(p=Math.sqrt(I*I+U*U),_=Math.sqrt(P*P+$*$),g=I||U?Xo(U,I)*ro:0,v=$||P?Xo($,P)*ro+g:0,v&&(_*=Math.abs(Math.cos(v*za))),i.svg&&(c-=T-(T*I+w*$),f-=w-(T*U+w*P))):(re=M[6],q=M[7],R=M[8],K=M[9],J=M[10],Z=M[11],c=M[12],f=M[13],h=M[14],L=Xo(re,J),m=L*ro,L&&(S=Math.cos(-L),E=Math.sin(-L),z=O*S+R*E,D=B*S+K*E,F=re*S+J*E,R=O*-E+R*S,K=B*-E+K*S,J=re*-E+J*S,Z=q*-E+Z*S,O=z,B=D,re=F),L=Xo(-$,J),d=L*ro,L&&(S=Math.cos(-L),E=Math.sin(-L),z=I*S-R*E,D=U*S-K*E,F=$*S-J*E,Z=P*E+Z*S,I=z,U=D,$=F),L=Xo(U,I),g=L*ro,L&&(S=Math.cos(L),E=Math.sin(L),z=I*S+U*E,D=O*S+B*E,U=U*S-I*E,B=B*S-O*E,I=z,O=D),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=Gt(Math.sqrt(I*I+U*U+$*$)),_=Gt(Math.sqrt(B*B+re*re)),L=Xo(O,B),v=Math.abs(L)>2e-4?L*ro:0,y=Z?1/(Z<0?-Z:Z):0),i.svg&&(z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!qM(wi(e,Ft)),z&&e.setAttribute("transform",z))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Gt(p),i.scaleY=Gt(_),i.rotation=Gt(g)+a,i.rotationX=Gt(m)+a,i.rotationY=Gt(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=th(u)),i.xOffset=i.yOffset=0,i.force3D=Ri.force3D,i.renderTransform=i.svg?gC:WM?$M:mC,i.uncache=0,i},th=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ed=function(e,t,i){var r=Rn(t);return Gt(parseFloat(t)+parseFloat(Hs(e,"x",i+"px",r)))+r},mC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$M(e,t)},Ks="0deg",Tl="0px",Zs=") ",$M=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,y="",T=d==="auto"&&e&&e!==1||d===!0;if(x&&(f!==Ks||c!==Ks)){var w=parseFloat(c)*za,M=Math.sin(w),L=Math.cos(w),S;w=parseFloat(f)*za,S=Math.cos(w),o=Ed(v,o,M*S*-x),a=Ed(v,a,-Math.sin(w)*-x),l=Ed(v,l,L*S*-x+x)}m!==Tl&&(y+="perspective("+m+Zs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==Tl||a!==Tl||l!==Tl)&&(y+=l!==Tl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zs),u!==Ks&&(y+="rotate("+u+Zs),c!==Ks&&(y+="rotateY("+c+Zs),f!==Ks&&(y+="rotateX("+f+Zs),(h!==Ks||p!==Ks)&&(y+="skew("+h+", "+p+Zs),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Zs),v.style[Ft]=y||"translate(0, 0)"},gC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),T,w,M,L,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=za,u*=za,T=Math.cos(l)*f,w=Math.sin(l)*f,M=Math.sin(l-u)*-h,L=Math.cos(l-u)*h,u&&(c*=za,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,L*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Gt(T),w=Gt(w),M=Gt(M),L=Gt(L)):(T=f,L=h,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Hs(p,"x",o,"px"),y=Hs(p,"y",a,"px")),(_||g||m||d)&&(x=Gt(x+_-(_*T+g*M)+m),y=Gt(y+g-(_*w+g*L)+d)),(r||s)&&(S=p.getBBox(),x=Gt(x+r/100*S.width),y=Gt(y+s/100*S.height)),S="matrix("+T+","+w+","+M+","+L+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Ft]=S)},_C=function(e,t,i,r,s){var o=360,a=hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ro:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*B0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*B0)%o-~~(u/o)*o)),e._pt=h=new oi(e._pt,t,i,r,u,JA),h.e=c,h.u="deg",e._props.push(i),h},j0=function(e,t){for(var i in t)e[i]=t[i];return e},vC=function(e,t,i){var r=j0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Fu(i,1),Bs(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Fu(i,1),o[Ft]=u);for(l in es)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Rn(u),_=Rn(c),f=p!==_?Hs(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new oi(e._pt,a,l,f,h-f,fm),e._pt.u=_||0,e._props.push(l));j0(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});eh[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(_){return kr(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,f)}});var KM={name:"css",register:dm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,_,g,m,d,v,x,y,T,w,M,L,S;$g||dm(),this.styles=this.styles||GM(e),L=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(xi[g]&&DM(g,t,i,r,e,s)))){if(p=typeof c,_=eh[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Uu(c)),_)_(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Us.lastIndex=0,Us.test(u)||(m=Rn(u),d=Rn(c),d?m!==d&&(u=Hs(e,g,u,d)+d):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],hn(u)&&~u.indexOf("random(")&&(u=Uu(u)),Rn(u+"")||u==="auto"||(u+=Ri.units[g]||Rn(kr(e,g))||""),(u+"").charAt(1)==="="&&(u=kr(e,g))):u=kr(e,g),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),g in yr&&(g==="autoAlpha"&&(h===1&&kr(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),xs(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=yr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in es,x){if(this.styles.save(g),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=wi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=wi(e,"perspective"),E?e.style.perspective=E:Bs(e,"perspective")}f=parseFloat(c)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Fu(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new oi(this._pt,a,Ft,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new oi(this._pt,T,"scaleY",T.scaleY,(v?Fa(T.scaleY,v+f):f)-T.scaleY||0,fm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(ai,0,a[ai]),c=dC(c),T.svg?pm(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==T.zOrigin&&xs(this,T,"zOrigin",T.zOrigin,d),xs(this,a,g,th(u),th(c)));continue}else if(g==="svgOrigin"){pm(e,c,1,w,0,this);continue}else if(g in jM){_C(this,T,g,h,v?Fa(h,v+c):c);continue}else if(g==="smoothOrigin"){xs(this,T,"smooth",T.smooth,c);continue}else if(g==="force3D"){T[g]=c;continue}else if(g==="transform"){vC(this,c,e);continue}}else g in a||(g=il(g)||g);if(x||(f||f===0)&&(h||h===0)&&!QA.test(c)&&g in a)m=(u+"").substr((h+"").length),f||(f=0),d=Rn(c)||(g in Ri.units?Ri.units[g]:m),m!==d&&(h=Hs(e,g,u,d)),this._pt=new oi(this._pt,x?T:a,g,h,(v?Fa(h,v+f):f)-h,!x&&(d==="px"||g==="zIndex")&&t.autoRound!==!1?nC:fm),this._pt.u=d||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=tC):m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=eC);else if(g in a)hC.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){zg(g,c);continue}x||(g in a?L.push(g,0,a[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,u||e[g])),o.push(g)}}M&&kM(this)},render:function(e,t){if(t.tween._time||!Kg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:kr,aliases:yr,getSetter:function(e,t,i){var r=yr[t];return r&&r.indexOf(",")<0&&(t=r),t in es&&t!==ai&&(e._gsap.x||kr(e,"x"))?i&&z0===i?t==="scale"?oC:sC:(z0=i||{})&&(t==="scale"?aC:lC):e.style&&!Og(e.style[t])?iC:~t.indexOf("-")?rC:jg(e,t)},core:{_removeProperty:Bs,_getMatrix:Qg}};hi.utils.checkPrefix=il;hi.core.getStyleSaver=GM;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){es[s]=1});si(e,function(s){Ri.units[s]="deg",jM[s]=1}),yr[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");yr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ri.units[n]="px"});hi.registerPlugin(KM);var Br=hi.registerPlugin(KM)||hi;Br.core.Tween;function xC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function yC(n,e,t){return e&&xC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn,vf,Mi,ys,Ss,Ba,ZM,so,Ha,QM,Wr,ir,JM,eE=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},tE=1,Ra=[],rt=[],wr=[],nu=Date.now,mm=function(e,t){return t},SC=function(){var e=Ha.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,wr),rt=i,wr=r,mm=function(o,a){return t[o](a)}},Ns=function(e,t){return~wr.indexOf(e)&&wr[wr.indexOf(e)+1][t]},iu=function(e){return!!~QM.indexOf(e)},Nn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},vc="scrollLeft",xc="scrollTop",gm=function(){return Wr&&Wr.isPressed||rt.cache++},nh=function(e,t){var i=function r(s){if(s||s===0){tE&&(Mi.history.scrollRestoration="manual");var o=Wr&&Wr.isPressed;s=r.v=Math.round(s)||(Wr&&Wr.iOS?1:0),e(s),r.cacheID=rt.cache,o&&mm("ss",s)}else(t||rt.cache!==r.cacheID||mm("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Vn={s:vc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nh(function(n){return arguments.length?Mi.scrollTo(n,en.sc()):Mi.pageXOffset||ys[vc]||Ss[vc]||Ba[vc]||0})},en={s:xc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:nh(function(n){return arguments.length?Mi.scrollTo(Vn.sc(),n):Mi.pageYOffset||ys[xc]||Ss[xc]||Ba[xc]||0})},$n=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},MC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Vs=function(e,t){var i=t.s,r=t.sc;iu(e)&&(e=ys.scrollingElement||Ss);var s=rt.indexOf(e),o=r===en.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Nn(e,"scroll",gm);var a=rt[s+o],l=a||(rt[s+o]=nh(Ns(e,i),!0)||(iu(e)?r:nh(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},_m=function(e,t,i){var r=e,s=e,o=nu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=nu();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},h=function(_){var g=a,m=s,d=nu();return(_||_===0)&&_!==r&&c(_),o===a||d-a>u?0:(r+(i?m:-m))/((i?d:o)-g)*1e3};return{update:c,reset:f,getVelocity:h}},wl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},q0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},nE=function(){Ha=mn.core.globals().ScrollTrigger,Ha&&Ha.core&&SC()},iE=function(e){return mn=e||eE(),!vf&&mn&&typeof document<"u"&&document.body&&(Mi=window,ys=document,Ss=ys.documentElement,Ba=ys.body,QM=[Mi,ys,Ss,Ba],mn.utils.clamp,JM=mn.core.context||function(){},so="onpointerenter"in Ba?"pointer":"mouse",ZM=Xt.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ir=Xt.eventTypes=("ontouchstart"in Ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return tE=0},500),vf=1),Ha||nE(),vf};Vn.op=en;rt.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){vf||iE(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Ha||nE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,h=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,d=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,T=i.onRight,w=i.onLeft,M=i.onUp,L=i.onDown,S=i.onChangeX,E=i.onChangeY,I=i.onChange,U=i.onToggleX,$=i.onToggleY,P=i.onHover,O=i.onHoverEnd,B=i.onMove,z=i.ignoreCheck,D=i.isNormalizer,F=i.onGestureStart,R=i.onGestureEnd,K=i.onWheel,J=i.onEnable,q=i.onDisable,Z=i.onClick,re=i.scrollSpeed,se=i.capture,ce=i.allowClicks,_e=i.lockAxis,Re=i.onLockAxis;this.target=a=$n(a)||Ss,this.vars=i,p&&(p=mn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,re=re||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Mi.getComputedStyle(Ba).lineHeight)||22);var we,ke,V,Ge,ve,Ue,xe,G=this,Oe=0,b=0,A=i.passive||!c&&i.passive!==!1,H=Vs(a,Vn),ne=Vs(a,en),te=H(),ie=ne(),ge=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ir[0]==="pointerdown",fe=iu(a),Q=a.ownerDocument||ys,ye=[0,0,0],Ee=[0,0,0],ee=0,at=function(){return ee=nu()},Ne=function(Ae,Fe){return(G.event=Ae)&&p&&MC(Ae.target,p)||Fe&&ge&&Ae.pointerType!=="touch"||z&&z(Ae,Fe)},je=function(){G._vx.reset(),G._vy.reset(),ke.pause(),f&&f(G)},Me=function(){var Ae=G.deltaX=q0(ye),Fe=G.deltaY=q0(Ee),ue=Math.abs(Ae)>=r,Ve=Math.abs(Fe)>=r;I&&(ue||Ve)&&I(G,Ae,Fe,ye,Ee),ue&&(T&&G.deltaX>0&&T(G),w&&G.deltaX<0&&w(G),S&&S(G),U&&G.deltaX<0!=Oe<0&&U(G),Oe=G.deltaX,ye[0]=ye[1]=ye[2]=0),Ve&&(L&&G.deltaY>0&&L(G),M&&G.deltaY<0&&M(G),E&&E(G),$&&G.deltaY<0!=b<0&&$(G),b=G.deltaY,Ee[0]=Ee[1]=Ee[2]=0),(Ge||V)&&(B&&B(G),V&&(m&&V===1&&m(G),v&&v(G),V=0),Ge=!1),Ue&&!(Ue=!1)&&Re&&Re(G),ve&&(K(G),ve=!1),we=0},Se=function(Ae,Fe,ue){ye[ue]+=Ae,Ee[ue]+=Fe,G._vx.update(Ae),G._vy.update(Fe),u?we||(we=requestAnimationFrame(Me)):Me()},Ye=function(Ae,Fe){_e&&!xe&&(G.axis=xe=Math.abs(Ae)>Math.abs(Fe)?"x":"y",Ue=!0),xe!=="y"&&(ye[2]+=Ae,G._vx.update(Ae,!0)),xe!=="x"&&(Ee[2]+=Fe,G._vy.update(Fe,!0)),u?we||(we=requestAnimationFrame(Me)):Me()},De=function(Ae){if(!Ne(Ae,1)){Ae=wl(Ae,c);var Fe=Ae.clientX,ue=Ae.clientY,Ve=Fe-G.x,Be=ue-G.y,$e=G.isDragging;G.x=Fe,G.y=ue,($e||(Ve||Be)&&(Math.abs(G.startX-Fe)>=s||Math.abs(G.startY-ue)>=s))&&(V||(V=$e?2:1),$e||(G.isDragging=!0),Ye(Ve,Be))}},ct=G.onPress=function(Le){Ne(Le,1)||Le&&Le.button||(G.axis=xe=null,ke.pause(),G.isPressed=!0,Le=wl(Le),Oe=b=0,G.startX=G.x=Le.clientX,G.startY=G.y=Le.clientY,G._vx.reset(),G._vy.reset(),Nn(D?a:Q,ir[1],De,A,!0),G.deltaX=G.deltaY=0,x&&x(G))},pe=G.onRelease=function(Le){if(!Ne(Le,1)){Un(D?a:Q,ir[1],De,!0);var Ae=!isNaN(G.y-G.startY),Fe=G.isDragging,ue=Fe&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ve=wl(Le);!ue&&Ae&&(G._vx.reset(),G._vy.reset(),c&&ce&&mn.delayedCall(.08,function(){if(nu()-ee>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(Q.createEvent){var Be=Q.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,Mi,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(Be)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Fe&&!D&&ke.restart(!0),V&&Me(),d&&Fe&&d(G),y&&y(G,ue)}},ae=function(Ae){return Ae.touches&&Ae.touches.length>1&&(G.isGesturing=!0)&&F(Ae,G.isDragging)},N=function(){return(G.isGesturing=!1)||R(G)},le=function(Ae){if(!Ne(Ae)){var Fe=H(),ue=ne();Se((Fe-te)*re,(ue-ie)*re,1),te=Fe,ie=ue,f&&ke.restart(!0)}},he=function(Ae){if(!Ne(Ae)){Ae=wl(Ae,c),K&&(ve=!0);var Fe=(Ae.deltaMode===1?l:Ae.deltaMode===2?Mi.innerHeight:1)*_;Se(Ae.deltaX*Fe,Ae.deltaY*Fe,0),f&&!D&&ke.restart(!0)}},He=function(Ae){if(!Ne(Ae)){var Fe=Ae.clientX,ue=Ae.clientY,Ve=Fe-G.x,Be=ue-G.y;G.x=Fe,G.y=ue,Ge=!0,f&&ke.restart(!0),(Ve||Be)&&Ye(Ve,Be)}},ze=function(Ae){G.event=Ae,P(G)},lt=function(Ae){G.event=Ae,O(G)},ht=function(Ae){return Ne(Ae)||wl(Ae,c)&&Z(G)};ke=G._dc=mn.delayedCall(h||.25,je).pause(),G.deltaX=G.deltaY=0,G._vx=_m(0,50,!0),G._vy=_m(0,50,!0),G.scrollX=H,G.scrollY=ne,G.isDragging=G.isGesturing=G.isPressed=!1,JM(this),G.enable=function(Le){return G.isEnabled||(Nn(fe?Q:a,"scroll",gm),o.indexOf("scroll")>=0&&Nn(fe?Q:a,"scroll",le,A,se),o.indexOf("wheel")>=0&&Nn(a,"wheel",he,A,se),(o.indexOf("touch")>=0&&ZM||o.indexOf("pointer")>=0)&&(Nn(a,ir[0],ct,A,se),Nn(Q,ir[2],pe),Nn(Q,ir[3],pe),ce&&Nn(a,"click",at,!0,!0),Z&&Nn(a,"click",ht),F&&Nn(Q,"gesturestart",ae),R&&Nn(Q,"gestureend",N),P&&Nn(a,so+"enter",ze),O&&Nn(a,so+"leave",lt),B&&Nn(a,so+"move",He)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Ge=V=!1,G._vx.reset(),G._vy.reset(),te=H(),ie=ne(),Le&&Le.type&&ct(Le),J&&J(G)),G},G.disable=function(){G.isEnabled&&(Ra.filter(function(Le){return Le!==G&&iu(Le.target)}).length||Un(fe?Q:a,"scroll",gm),G.isPressed&&(G._vx.reset(),G._vy.reset(),Un(D?a:Q,ir[1],De,!0)),Un(fe?Q:a,"scroll",le,se),Un(a,"wheel",he,se),Un(a,ir[0],ct,se),Un(Q,ir[2],pe),Un(Q,ir[3],pe),Un(a,"click",at,!0),Un(a,"click",ht),Un(Q,"gesturestart",ae),Un(Q,"gestureend",N),Un(a,so+"enter",ze),Un(a,so+"leave",lt),Un(a,so+"move",He),G.isEnabled=G.isPressed=G.isDragging=!1,q&&q(G))},G.kill=G.revert=function(){G.disable();var Le=Ra.indexOf(G);Le>=0&&Ra.splice(Le,1),Wr===G&&(Wr=0)},Ra.push(G),D&&iu(a)&&(Wr=G),G.enable(g)},yC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.15.0";Xt.create=function(n){return new Xt(n)};Xt.register=iE;Xt.getAll=function(){return Ra.slice()};Xt.getById=function(n){return Ra.filter(function(e){return e.vars.id===n})[0]};eE()&&mn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,ha,nt,_t,yi,pt,Jg,ih,ku,ru,zl,yc,wn,Uh,vm,kn,$0,K0,da,rE,Td,sE,On,xm,oE,aE,us,ym,e_,Va,t_,su,Sm,wd,Sc=1,An=Date.now,Ad=An(),$i=0,Bl=0,Z0=function(e,t,i){var r=vi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Q0=function(e,t){return t&&(!vi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},EC=function n(){return Bl&&requestAnimationFrame(n)},J0=function(){return Uh=1},ev=function(){return Uh=0},gr=function(e){return e},Hl=function(e){return Math.round(e*1e5)/1e5||0},lE=function(){return typeof window<"u"},uE=function(){return Ce||lE()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Fo=function(e){return!!~Jg.indexOf(e)},cE=function(e){return(e==="Height"?t_:nt["inner"+e])||yi["client"+e]||pt["client"+e]},fE=function(e){return Ns(e,"getBoundingClientRect")||(Fo(e)?function(){return Ef.width=nt.innerWidth,Ef.height=t_,Ef}:function(){return Hr(e)})},TC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ns(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?cE(s):e["client"+s])||0}},wC=function(e,t){return!t||~wr.indexOf(e)?fE(e):function(){return Ef}},Sr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ns(e,i))?o()-fE(e)()[s]:Fo(e)?(yi[i]||pt[i])-cE(r):e[i]-e["offset"+r])},Mc=function(e,t){for(var i=0;i<da.length;i+=3)(!t||~t.indexOf(da[i+1]))&&e(da[i],da[i+1],da[i+2])},vi=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},Vl=function(e){return typeof e=="number"},oo=function(e){return typeof e=="object"},Al=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Yo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},jo=Math.abs,hE="left",dE="top",n_="right",i_="bottom",wo="width",Ao="height",ou="Right",au="Left",lu="Top",uu="Bottom",jt="padding",zi="margin",rl="Width",r_="Height",Qt="px",Bi=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},AC=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},tv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Hr=function(e,t){var i=t&&Bi(e)[vm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},rh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},pE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},CC=function(e){return function(t){return Ce.utils.snap(pE(e),t)}},s_=function(e){var t=Ce.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},RC=function(e){return function(t,i){return s_(pE(e))(t,i.direction)}},Ec=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},an=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},on=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Tc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},nv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wc={toggleActions:"play",anticipatePin:0},sh={top:0,left:0,center:.5,bottom:1,right:1},xf=function(e,t){if(vi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in sh?sh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ac=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,h=s.indent,p=s.fontWeight,_=_t.createElement("div"),g=Fo(i)||Ns(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,d=g?pt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===en?n_:i_)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(_,d.children[0]):d.appendChild(_),_._offset=_["offset"+r.op.d2],yf(_,0,r,v),_},yf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+rl]=1,s["border"+a+rl]=0,s[i.p]=t+"px",Ce.set(e,s)},et=[],Mm={},zu,iv=function(){return An()-$i>34&&(zu||(zu=requestAnimationFrame(jr)))},qo=function(){(!On||!On.isPressed||On.startX>pt.clientWidth)&&(rt.cache++,On?zu||(zu=requestAnimationFrame(jr)):jr(),$i||zo("scrollStart"),$i=An())},Cd=function(){aE=nt.innerWidth,oE=nt.innerHeight},Gl=function(e){rt.cache++,(e===!0||!wn&&!sE&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!xm||aE!==nt.innerWidth||Math.abs(nt.innerHeight-oE)>nt.innerHeight*.25))&&ih.restart(!0)},ko={},bC=[],mE=function n(){return on(Qe,"scrollEnd",n)||mo(!0)},zo=function(e){return ko[e]&&ko[e].map(function(t){return t()})||bC},gi=[],gE=function(e){for(var t=0;t<gi.length;t+=5)(!e||gi[t+4]&&gi[t+4].query===e)&&(gi[t].style.cssText=gi[t+1],gi[t].getBBox&&gi[t].setAttribute("transform",gi[t+2]||""),gi[t+3].uncache=1)},_E=function(){return rt.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},o_=function(e,t){var i;for(kn=0;kn<et.length;kn++)i=et[kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));su=!0,t&&gE(t),t||zo("revert")},vE=function(e,t){rt.cache++,(t||!zn)&&rt.forEach(function(i){return bn(i)&&i.cacheID++&&(i.rec=0)}),vi(e)&&(nt.history.scrollRestoration=e_=e)},zn,Co=0,rv,PC=function(){if(rv!==Co){var e=rv=Co;requestAnimationFrame(function(){return e===Co&&mo(!0)})}},xE=function(){pt.appendChild(Va),t_=!On&&Va.offsetHeight||nt.innerHeight,pt.removeChild(Va)},sv=function(e){return ku(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},mo=function(e,t){if(yi=_t.documentElement,pt=_t.body,Jg=[nt,_t,yi,pt],$i&&!e&&!su){an(Qe,"scrollEnd",mE);return}xE(),zn=Qe.isRefreshing=!0,su||_E();var i=zo("refreshInit");rE&&Qe.sort(),t||o_(),rt.forEach(function(r){bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),su=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Sm=1,sv(!0),et.forEach(function(r){var s=Sr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),sv(!1),Sm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),vE(e_,1),ih.pause(),Co++,zn=2,jr(2),et.forEach(function(r){return bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=Qe.isRefreshing=!1,zo("refresh")},Em=0,Sf=1,cu,jr=function(e){if(e===2||!zn&&!su){Qe.isUpdating=!0,cu&&cu.update(0);var t=et.length,i=An(),r=i-Ad>=50,s=t&&et[0].scroll();if(Sf=Em>s?-1:1,zn||(Em=s),r&&($i&&!Uh&&i-$i>200&&($i=0,zo("scrollEnd")),zl=Ad,Ad=i),Sf<0){for(kn=t;kn-- >0;)et[kn]&&et[kn].update(0,r);Sf=1}else for(kn=0;kn<t;kn++)et[kn]&&et[kn].update(0,r);Qe.isUpdating=!1}zu=0},Tm=[hE,dE,i_,n_,zi+uu,zi+ou,zi+lu,zi+au,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Mf=Tm.concat([wo,Ao,"boxSizing","max"+rl,"max"+r_,"position",zi,jt,jt+lu,jt+ou,jt+uu,jt+au]),LC=function(e,t,i){Ga(i);var r=e._gsap;if(r.spacerIsNative)Ga(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Tm.length,o=t.style,a=e.style,l;s--;)l=Tm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[i_]=a[n_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wo]=rh(e,Vn)+Qt,o[Ao]=rh(e,en)+Qt,o[jt]=a[zi]=a[dE]=a[hE]="0",Ga(r),a[wo]=a["max"+rl]=i[wo],a[Ao]=a["max"+r_]=i[Ao],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},DC=/([A-Z])/g,Ga=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(DC,"-$1").toLowerCase())}},Cc=function(e){for(var t=Mf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Mf[s],i[Mf[s]]);return r.t=e,r},UC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Ef={left:0,top:0},ov=function(e,t,i,r,s,o,a,l,u,c,f,h,p,_){bn(e)&&(e=e(l)),vi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?xf("0"+e.substr(3),i):0));var g=p?p.time():0,m,d,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Vl(e))p&&(e=Ce.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&yf(a,i,r,!0);else{bn(t)&&(t=t(l));var x=(e||"0").split(" "),y,T,w,M;v=$n(t,l)||pt,y=Hr(v)||{},(!y||!y.left&&!y.top)&&Bi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Hr(v),M?v.style.display=M:v.style.removeProperty("display")),T=xf(x[0],y[r.d]),w=xf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+T+s-w,a&&yf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var L=e+i,S=o._isStart;m="scroll"+r.d2,yf(o,L,r,S&&L>20||!S&&(f?Math.max(pt[m],yi[m]):o.parentNode[m])<=L+1),f&&(u=Hr(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Qt))}return p&&v&&(m=Hr(v),p.seek(h),d=Hr(v),p._caScrollDist=m[r.p]-d[r.p],e=e/p._caScrollDist*h),p&&p.seek(g),p?e:Math.round(e)},NC=/(webkit|moz|length|cssText|inset)/i,av=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!NC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},yE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Rc=function(e,t,i){var r={};r[t.p]="+="+i,Ce.set(e,r)},lv=function(e,t){var i=Vs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var h=o.tween,p=l.onComplete,_={};u=u||i();var g=yE(i,u,function(){h.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&jr()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=Ce.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",i.wheelHandler),Qe.isTouch&&an(e,"touchmove",i.wheelHandler),s},Qe=function(){function n(t,i){ha||n.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ym(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bl){this.update=this.refresh=this.kill=gr;return}i=tv(vi(i)||Vl(i)||i.nodeType?{trigger:i}:i,wc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,h=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,d=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,L=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Vn:en,I=!f&&f!==0,U=$n(i.scroller||nt),$=Ce.core.getCache(U),P=Fo(U),O=("pinType"in i?i.pinType:Ns(U,"pinType")||P&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],z=I&&i.toggleActions.split(" "),D="markers"in i?i.markers:wc.markers,F=P?0:parseFloat(Bi(U)["border"+E.p2+rl])||0,R=this,K=i.onRefreshInit&&function(){return i.onRefreshInit(R)},J=TC(U,P,E),q=wC(U,P),Z=0,re=0,se=0,ce=Vs(U,E),_e,Re,we,ke,V,Ge,ve,Ue,xe,G,Oe,b,A,H,ne,te,ie,ge,fe,Q,ye,Ee,ee,at,Ne,je,Me,Se,Ye,De,ct,pe,ae,N,le,he,He,ze,lt;if(R._startClamp=R._endClamp=!1,R._dir=E,m*=45,R.scroller=U,R.scroll=M?M.time.bind(M):ce,ke=ce(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(rE=1,i.refreshPriority===-9999&&(cu=R)),$.tweenScroll=$.tweenScroll||{top:lv(U,en),left:lv(U,Vn)},R.tweenTo=_e=$.tweenScroll[E.p],R.scrubDuration=function(ue){ae=Vl(ue)&&ue,ae?pe?pe.duration(ue):pe=Ce.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return d&&d(R)}}):(pe&&pe.progress(1).kill(),pe=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(f),De=0,l||(l=r.vars.id)),y&&((!oo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Ce.set(P?[pt,yi]:U,{scrollBehavior:"auto"}),rt.forEach(function(ue){return bn(ue)&&ue.target===(P?_t.scrollingElement||yi:U)&&(ue.smooth=!1)}),we=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?CC(r):y.snapTo==="labelsDirectional"?RC(r):y.directional!==!1?function(ue,Ve){return s_(y.snapTo)(ue,An()-re<500?0:Ve.direction)}:Ce.utils.snap(y.snapTo),N=y.duration||{min:.1,max:2},N=oo(N)?ru(N.min,N.max):ru(N,N),le=Ce.delayedCall(y.delay||ae/2||.1,function(){var ue=ce(),Ve=An()-re<500,Be=_e.tween;if((Ve||Math.abs(R.getVelocity())<10)&&!Be&&!Uh&&Z!==ue){var $e=(ue-Ge)/H,Ut=r&&!I?r.totalProgress():$e,tt=Ve?0:(Ut-ct)/(An()-zl)*1e3||0,Et=Ce.utils.clamp(-$e,1-$e,jo(tt/2)*tt/.185),Kt=$e+(y.inertia===!1?0:Et),At,Tt,mt=y,di=mt.onStart,C=mt.onInterrupt,k=mt.onComplete;if(At=we(Kt,R),Vl(At)||(At=Kt),Tt=Math.max(0,Math.round(Ge+At*H)),ue<=ve&&ue>=Ge&&Tt!==ue){if(Be&&!Be._initted&&Be.data<=jo(Tt-ue))return;y.inertia===!1&&(Et=At-$e),_e(Tt,{duration:N(jo(Math.max(jo(Kt-Ut),jo(At-Ut))*.185/tt/.05||0)),ease:y.ease||"power3",data:jo(Tt-ue),onInterrupt:function(){return le.restart(!0)&&C&&Yo(R,C)},onComplete:function(){R.update(),Z=ce(),r&&!I&&(pe?pe.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),De=ct=r&&!I?r.totalProgress():R.progress,v&&v(R),k&&Yo(R,k)}},ue,Et*H,Tt-ue-Et*H),di&&Yo(R,di,_e.tween)}}else R.isActive&&Z!==ue&&le.restart(!0)}).pause()),l&&(Mm[l]=R),h=R.trigger=$n(h||p!==!0&&p),lt=h&&h._gsap&&h._gsap.stRevert,lt&&(lt=lt(R)),p=p===!0?h:$n(p),vi(a)&&(a={targets:h,className:a}),p&&(_===!1||_===zi||(_=!_&&p.parentNode&&p.parentNode.style&&Bi(p.parentNode).display==="flex"?!1:jt),R.pin=p,Re=Ce.core.getCache(p),Re.spacer?ne=Re.pinState:(w&&(w=$n(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Re.spacerIsNative=!!w,w&&(Re.spacerState=Cc(w))),Re.spacer=ge=w||_t.createElement("div"),ge.classList.add("pin-spacer"),l&&ge.classList.add("pin-spacer-"+l),Re.pinState=ne=Cc(p)),i.force3D!==!1&&Ce.set(p,{force3D:!0}),R.spacer=ge=Re.spacer,Ye=Bi(p),at=Ye[_+E.os2],Q=Ce.getProperty(p),ye=Ce.quickSetter(p,E.a,Qt),Rd(p,ge,Ye),ie=Cc(p)),D){b=oo(D)?tv(D,nv):nv,G=Ac("scroller-start",l,U,E,b,0),Oe=Ac("scroller-end",l,U,E,b,0,G),fe=G["offset"+E.op.d2];var ht=$n(Ns(U,"content")||U);Ue=this.markerStart=Ac("start",l,ht,E,b,fe,0,M),xe=this.markerEnd=Ac("end",l,ht,E,b,fe,0,M),M&&(ze=Ce.quickSetter([Ue,xe],E.a,Qt)),!O&&!(wr.length&&Ns(U,"fixedMarkers")===!0)&&(AC(P?pt:U),Ce.set([G,Oe],{force3D:!0}),je=Ce.quickSetter(G,E.a,Qt),Se=Ce.quickSetter(Oe,E.a,Qt))}if(M){var Le=M.vars.onUpdate,Ae=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Le&&Le.apply(M,Ae||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(ue,Ve){if(!Ve)return R.kill(!0);var Be=ue!==!1||!R.enabled,$e=wn;Be!==R.isReverted&&(Be&&(he=Math.max(ce(),R.scroll.rec||0),se=R.progress,He=r&&r.progress()),Ue&&[Ue,xe,G,Oe].forEach(function(Ut){return Ut.style.display=Be?"none":"block"}),Be&&(wn=R,R.update(Be)),p&&(!T||!R.isActive)&&(Be?LC(p,ge,ne):Rd(p,ge,Bi(p),Ne)),Be||R.update(Be),wn=$e,R.isReverted=Be)},R.refresh=function(ue,Ve,Be,$e){if(!((wn||!R.enabled)&&!Ve)){if(p&&ue&&$i){an(n,"scrollEnd",mE);return}!zn&&K&&K(R),wn=R,_e.tween&&!Be&&(_e.tween.kill(),_e.tween=0),pe&&pe.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ut=J(),tt=q(),Et=M?M.duration():Sr(U,E),Kt=H<=.01||!H,At=0,Tt=$e||0,mt=oo(Be)?Be.end:i.end,di=i.endTrigger||h,C=oo(Be)?Be.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),k=R.pinnedContainer=i.pinnedContainer&&$n(i.pinnedContainer,R),j=h&&Math.max(0,et.indexOf(R))||0,Y=j,W,de,be,We,Pe,Ie,Xe,Ke,Pt,Zt,gt,Dn,xt;for(D&&oo(Be)&&(Dn=Ce.getProperty(G,E.p),xt=Ce.getProperty(Oe,E.p));Y-- >0;)Ie=et[Y],Ie.end||Ie.refresh(0,1)||(wn=R),Xe=Ie.pin,Xe&&(Xe===h||Xe===p||Xe===k)&&!Ie.isReverted&&(Zt||(Zt=[]),Zt.unshift(Ie),Ie.revert(!0,!0)),Ie!==et[Y]&&(j--,Y--);for(bn(C)&&(C=C(R)),C=Z0(C,"start",R),Ge=ov(C,h,Ut,E,ce(),Ue,G,R,tt,F,O,Et,M,R._startClamp&&"_startClamp")||(p?-.001:0),bn(mt)&&(mt=mt(R)),vi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(vi(C)?C.split(" ")[0]:"")+mt:(At=xf(mt.substr(2),Ut),mt=vi(C)?C:(M?Ce.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Ge):Ge)+At,di=h)),mt=Z0(mt,"end",R),ve=Math.max(Ge,ov(mt||(di?"100% 0":Et),di,Ut,E,ce()+At,xe,Oe,R,tt,F,O,Et,M,R._endClamp&&"_endClamp"))||-.001,At=0,Y=j;Y--;)Ie=et[Y]||{},Xe=Ie.pin,Xe&&Ie.start-Ie._pinPush<=Ge&&!M&&Ie.end>0&&(W=Ie.end-(R._startClamp?Math.max(0,Ie.start):Ie.start),(Xe===h&&Ie.start-Ie._pinPush<Ge||Xe===k)&&isNaN(C)&&(At+=W*(1-Ie.progress)),Xe===p&&(Tt+=W));if(Ge+=At,ve+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!zn&&(R._endClamp=ve||-.001,ve=Math.min(ve,Sr(U,E))),H=ve-Ge||(Ge-=.01)&&.001,Kt&&(se=Ce.utils.clamp(0,1,Ce.utils.normalize(Ge,ve,he))),R._pinPush=Tt,Ue&&At&&(W={},W[E.a]="+="+At,k&&(W[E.p]="-="+ce()),Ce.set([Ue,xe],W)),p&&!(Sm&&R.end>=Sr(U,E)))W=Bi(p),We=E===en,be=ce(),Ee=parseFloat(Q(E.a))+Tt,!Et&&ve>1&&(gt=(P?_t.scrollingElement||yi:U).style,gt={style:gt,value:gt["overflow"+E.a.toUpperCase()]},P&&Bi(pt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+E.a.toUpperCase()]="scroll")),Rd(p,ge,W),ie=Cc(p),de=Hr(p,!0),Ke=O&&Vs(U,We?Vn:en)(),_?(Ne=[_+E.os2,H+Tt+Qt],Ne.t=ge,Y=_===jt?rh(p,E)+H+Tt:0,Y&&(Ne.push(E.d,Y+Qt),ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=Y+Qt)),Ga(Ne),k&&et.forEach(function(qe){qe.pin===k&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),O&&ce(he)):(Y=rh(p,E),Y&&ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=Y+Qt)),O&&(Pe={top:de.top+(We?be-Ge:Ke)+Qt,left:de.left+(We?Ke:be-Ge)+Qt,boxSizing:"border-box",position:"fixed"},Pe[wo]=Pe["max"+rl]=Math.ceil(de.width)+Qt,Pe[Ao]=Pe["max"+r_]=Math.ceil(de.height)+Qt,Pe[zi]=Pe[zi+lu]=Pe[zi+ou]=Pe[zi+uu]=Pe[zi+au]="0",Pe[jt]=W[jt],Pe[jt+lu]=W[jt+lu],Pe[jt+ou]=W[jt+ou],Pe[jt+uu]=W[jt+uu],Pe[jt+au]=W[jt+au],te=UC(ne,Pe,T),zn&&ce(0)),r?(Pt=r._initted,Td(1),r.render(r.duration(),!0,!0),ee=Q(E.a)-Ee+H+Tt,Me=Math.abs(H-ee)>1,O&&Me&&te.splice(te.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Td(0)):ee=H,gt&&(gt.value?gt.style["overflow"+E.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+E.a));else if(h&&ce()&&!M)for(de=h.parentNode;de&&de!==pt;)de._pinOffset&&(Ge-=de._pinOffset,ve-=de._pinOffset),de=de.parentNode;Zt&&Zt.forEach(function(qe){return qe.revert(!1,!0)}),R.start=Ge,R.end=ve,ke=V=zn?he:ce(),!M&&!zn&&(ke<he&&ce(he),R.scroll.rec=0),R.revert(!1,!0),re=An(),le&&(Z=-1,le.restart(!0)),wn=0,r&&I&&(r._initted||He)&&r.progress()!==He&&r.progress(He||0,!0).render(r.time(),!0,!0),(Kt||se!==R.progress||M||g||r&&!r._initted)&&(r&&!I&&(r._initted||se||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Ge<-.001&&!se?Ce.utils.normalize(Ge,ve,0):se,!0),R.progress=Kt||(ke-Ge)/H===se?0:se),p&&_&&(ge._pinOffset=Math.round(R.progress*ee)),pe&&pe.invalidate(),isNaN(Dn)||(Dn-=Ce.getProperty(G,E.p),xt-=Ce.getProperty(Oe,E.p),Rc(G,E,Dn),Rc(Ue,E,Dn-($e||0)),Rc(Oe,E,xt),Rc(xe,E,xt-($e||0))),Kt&&!zn&&R.update(),c&&!zn&&!A&&(A=!0,c(R),A=!1)}},R.getVelocity=function(){return(ce()-V)/(An()-zl)*1e3||0},R.endAnimation=function(){Al(R.callbackAnimation),r&&(pe?pe.progress(1):r.paused()?I||Al(r,R.direction<0,1):Al(r,r.reversed()))},R.labelToScroll=function(ue){return r&&r.labels&&(Ge||R.refresh()||Ge)+r.labels[ue]/r.duration()*H||0},R.getTrailing=function(ue){var Ve=et.indexOf(R),Be=R.direction>0?et.slice(0,Ve).reverse():et.slice(Ve+1);return(vi(ue)?Be.filter(function($e){return $e.vars.preventOverlaps===ue}):Be).filter(function($e){return R.direction>0?$e.end<=Ge:$e.start>=ve})},R.update=function(ue,Ve,Be){if(!(M&&!Be&&!ue)){var $e=zn===!0?he:R.scroll(),Ut=ue?0:($e-Ge)/H,tt=Ut<0?0:Ut>1?1:Ut||0,Et=R.progress,Kt,At,Tt,mt,di,C,k,j;if(Ve&&(V=ke,ke=M?ce():$e,y&&(ct=De,De=r&&!I?r.totalProgress():tt)),m&&p&&!wn&&!Sc&&$i&&(!tt&&Ge<$e+($e-V)/(An()-zl)*m?tt=1e-4:tt===1&&ve>$e+($e-V)/(An()-zl)*m&&(tt=.9999)),tt!==Et&&R.enabled){if(Kt=R.isActive=!!tt&&tt<1,At=!!Et&&Et<1,C=Kt!==At,di=C||!!tt!=!!Et,R.direction=tt>Et?1:-1,R.progress=tt,di&&!wn&&(Tt=tt&&!Et?0:tt===1?1:Et===1?2:3,I&&(mt=!C&&z[Tt+1]!=="none"&&z[Tt+1]||z[Tt],j=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(C||j)&&(j||f||!r)&&(bn(S)?S(R):R.getTrailing(S).forEach(function(be){return be.endAnimation()})),I||(pe&&!wn&&!Sc?(pe._dp._time-pe._start!==pe._time&&pe.render(pe._dp._time-pe._start),pe.resetTo?pe.resetTo("totalProgress",tt,r._tTime/r._tDur):(pe.vars.totalProgress=tt,pe.invalidate().restart())):r&&r.totalProgress(tt,!!(wn&&(re||ue)))),p){if(ue&&_&&(ge.style[_+E.os2]=at),!O)ye(Hl(Ee+ee*tt));else if(di){if(k=!ue&&tt>Et&&ve+1>$e&&$e+1>=Sr(U,E),T)if(!ue&&(Kt||k)){var Y=Hr(p,!0),W=$e-Ge;av(p,pt,Y.top+(E===en?W:0)+Qt,Y.left+(E===en?0:W)+Qt)}else av(p,ge);Ga(Kt||k?te:ie),Me&&tt<1&&Kt||ye(Ee+(tt===1&&!k?ee:0))}}y&&!_e.tween&&!wn&&!Sc&&le.restart(!0),a&&(C||x&&tt&&(tt<1||!wd))&&ku(a.targets).forEach(function(be){return be.classList[Kt||x?"add":"remove"](a.className)}),o&&!I&&!ue&&o(R),di&&!wn?(I&&(j&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(R)),(C||!wd)&&(u&&C&&Yo(R,u),B[Tt]&&Yo(R,B[Tt]),x&&(tt===1?R.kill(!1,1):B[Tt]=0),C||(Tt=tt===1?1:3,B[Tt]&&Yo(R,B[Tt]))),L&&!Kt&&Math.abs(R.getVelocity())>(Vl(L)?L:2500)&&(Al(R.callbackAnimation),pe?pe.progress(1):Al(r,mt==="reverse"?1:!tt,1))):I&&o&&!wn&&o(R)}if(Se){var de=M?$e/M.duration()*(M._caScrollDist||0):$e;je(de+(G._isFlipped?1:0)),Se(de)}ze&&ze(-$e/M.duration()*(M._caScrollDist||0))}},R.enable=function(ue,Ve){R.enabled||(R.enabled=!0,an(U,"resize",Gl),P||an(U,"scroll",qo),K&&an(n,"refreshInit",K),ue!==!1&&(R.progress=se=0,ke=V=Z=ce()),Ve!==!1&&R.refresh())},R.getTween=function(ue){return ue&&_e?_e.tween:pe},R.setPositions=function(ue,Ve,Be,$e){if(M){var Ut=M.scrollTrigger,tt=M.duration(),Et=Ut.end-Ut.start;ue=Ut.start+Et*ue/tt,Ve=Ut.start+Et*Ve/tt}R.refresh(!1,!1,{start:Q0(ue,Be&&!!R._startClamp),end:Q0(Ve,Be&&!!R._endClamp)},$e),R.update()},R.adjustPinSpacing=function(ue){if(Ne&&ue){var Ve=Ne.indexOf(E.d)+1;Ne[Ve]=parseFloat(Ne[Ve])+ue+Qt,Ne[1]=parseFloat(Ne[1])+ue+Qt,Ga(Ne)}},R.disable=function(ue,Ve){if(ue!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ve||pe&&pe.pause(),he=0,Re&&(Re.uncache=1),K&&on(n,"refreshInit",K),le&&(le.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!P)){for(var Be=et.length;Be--;)if(et[Be].scroller===U&&et[Be]!==R)return;on(U,"resize",Gl),P||on(U,"scroll",qo)}},R.kill=function(ue,Ve){R.disable(ue,Ve),pe&&!Ve&&pe.kill(),l&&delete Mm[l];var Be=et.indexOf(R);Be>=0&&et.splice(Be,1),Be===kn&&Sf>0&&kn--,Be=0,et.forEach(function($e){return $e.scroller===R.scroller&&(Be=1)}),Be||zn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,ue&&r.revert({kill:!1}),Ve||r.kill()),Ue&&[Ue,xe,G,Oe].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),cu===R&&(cu=0),p&&(Re&&(Re.uncache=1),Be=0,et.forEach(function($e){return $e.pin===p&&Be++}),Be||(Re.spacer=0)),i.onKill&&i.onKill(R)},et.push(R),R.enable(!1,!1),lt&&lt(R),r&&r.add&&!H){var Fe=R.update;R.update=function(){R.update=Fe,rt.cache++,Ge||ve||R.refresh()},Ce.delayedCall(.01,R.update),H=.01,Ge=ve=0}else R.refresh();p&&PC()},n.register=function(i){return ha||(Ce=i||uE(),lE()&&window.document&&n.enable(),ha=Bl),ha},n.defaults=function(i){if(i)for(var r in i)wc[r]=i[r];return wc},n.disable=function(i,r){Bl=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),on(nt,"wheel",qo),on(_t,"scroll",qo),clearInterval(yc),on(_t,"touchcancel",gr),on(pt,"touchstart",gr),Ec(on,_t,"pointerdown,touchstart,mousedown",J0),Ec(on,_t,"pointerup,touchend,mouseup",ev),ih.kill(),Mc(on);for(var s=0;s<rt.length;s+=3)Tc(on,rt[s],rt[s+1]),Tc(on,rt[s],rt[s+2])},n.enable=function(){if(nt=window,_t=document,yi=_t.documentElement,pt=_t.body,Ce){if(ku=Ce.utils.toArray,ru=Ce.utils.clamp,ym=Ce.core.context||gr,Td=Ce.core.suppressOverwrites||gr,e_=nt.history.scrollRestoration||"auto",Em=nt.pageYOffset||0,Ce.core.globals("ScrollTrigger",n),pt){Bl=1,Va=document.createElement("div"),Va.style.height="100vh",Va.style.position="absolute",xE(),EC(),Xt.register(Ce),n.isTouch=Xt.isTouch,us=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xm=Xt.isTouch===1,an(nt,"wheel",qo),Jg=[nt,_t,yi,pt],Ce.matchMedia?(n.matchMedia=function(c){var f=Ce.matchMedia(),h;for(h in c)f.add(h,c[h]);return f},Ce.addEventListener("matchMediaInit",function(){_E(),o_()}),Ce.addEventListener("matchMediaRevert",function(){return gE()}),Ce.addEventListener("matchMedia",function(){mo(0,1),zo("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return Cd(),Cd})):console.warn("Requires GSAP 3.11.0 or later"),Cd(),an(_t,"scroll",qo);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Hr(pt),en.m=Math.round(a.top+en.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),yc=setInterval(iv,250),Ce.delayedCall(.5,function(){return Sc=0}),an(_t,"touchcancel",gr),an(pt,"touchstart",gr),Ec(an,_t,"pointerdown,touchstart,mousedown",J0),Ec(an,_t,"pointerup,touchend,mouseup",ev),vm=Ce.utils.checkPrefix("transform"),Mf.push(vm),ha=An(),ih=Ce.delayedCall(.2,mo).pause(),da=[_t,"visibilitychange",function(){var c=nt.innerWidth,f=nt.innerHeight;_t.hidden?($0=c,K0=f):($0!==c||K0!==f)&&Gl()},_t,"DOMContentLoaded",mo,nt,"load",mo,nt,"resize",Gl],Mc(an),et.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)Tc(on,rt[l],rt[l+1]),Tc(on,rt[l],rt[l+2])}else if(_t){var u=function c(){n.enable(),_t.removeEventListener("DOMContentLoaded",c)};_t.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(wd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(yc)||(yc=r)&&setInterval(iv,r),"ignoreMobileResize"in i&&(xm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Mc(on)||Mc(an,i.autoRefreshEvents||"none"),sE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=$n(i),o=rt.indexOf(s),a=Fo(s);~o&&rt.splice(o,a?6:2),r&&(a?wr.unshift(nt,r,pt,r,yi,r):wr.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(vi(i)?$n(i):i).getBoundingClientRect(),a=o[s?wo:Ao]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){vi(i)&&(i=$n(i));var o=i.getBoundingClientRect(),a=o[s?wo:Ao],l=r==null?a/2:r in sh?sh[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ko.killAll||[];ko={},r.forEach(function(s){return s()})}},n}();Qe.version="3.15.0";Qe.saveStyles=function(n){return n?ku(n).forEach(function(e){if(e&&e.style){var t=gi.indexOf(e);t>=0&&gi.splice(t,5),gi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),ym())}}):gi};Qe.revert=function(n,e){return o_(!n,e)};Qe.create=function(n,e){return new Qe(n,e)};Qe.refresh=function(n){return n?Gl(!0):(ha||Qe.register())&&mo(!0)};Qe.update=function(n){return++rt.cache&&jr(n===!0?2:0)};Qe.clearScrollMemory=vE;Qe.maxScroll=function(n,e){return Sr(n,e?Vn:en)};Qe.getScrollFunc=function(n,e){return Vs($n(n),e?Vn:en)};Qe.getById=function(n){return Mm[n]};Qe.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!$i};Qe.snapDirectional=s_;Qe.addEventListener=function(n,e){var t=ko[n]||(ko[n]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(n,e){var t=ko[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Qe.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],h=[],p=Ce.delayedCall(r,function(){c(f,h),f=[],h=[]}).pause();return function(_){f.length||p.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),an(Qe,"refresh",function(){return s=e.batchMax()})),ku(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Qe.create(u))}),t};var uv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},bd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===yi&&n(pt,t)},bc={auto:1,scroll:1},IC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bc[(l=Bi(s)).overflowY]||bc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Fo(s)&&(bc[(l=Bi(s)).overflowY]||bc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},SE=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&IC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&an(_t,Xt.eventTypes[0],fv,!1,!0)},onDisable:function(){return on(_t,Xt.eventTypes[0],fv,!0)}})},OC=/(input|label|select|textarea)/i,cv,fv=function(e){var t=OC.test(e.target.tagName);(t||cv)&&(e._gsapAllow=!0,cv=t)},FC=function(e){oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=$n(e.target)||yi,c=Ce.core.globals().ScrollSmoother,f=c&&c.get(),h=us&&(e.content&&$n(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Vs(u,en),_=Vs(u,Vn),g=1,m=(Xt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,d=0,v=bn(r)?function(){return r(a)}:function(){return r||2.8},x,y,T=SE(u,e.type,!0,s),w=function(){return y=!1},M=gr,L=gr,S=function(){l=Sr(u,en),L=ru(us?1:0,l),i&&(M=ru(0,Sr(u,Vn))),x=Co},E=function(){h._gsap.y=Hl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(y){requestAnimationFrame(w);var D=Hl(a.deltaY/2),F=L(p.v-D);if(h&&F!==p.v+p.offset){p.offset=F-p.v;var R=Hl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",p.cacheID=rt.cache,jr()}return!0}p.offset&&E(),y=!0},U,$,P,O,B=function(){S(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return h&&Ce.set(h,{y:"+=0"}),e.ignoreCheck=function(z){return us&&z.type==="touchmove"&&I()||g>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=g;g=Hl((nt.visualViewport&&nt.visualViewport.scale||1)/m),U.pause(),z!==g&&bd(u,g>1.01?!0:i?!1:"x"),$=_(),P=p(),S(),x=Co},e.onRelease=e.onGestureStart=function(z,D){if(p.offset&&E(),!D)O.restart(!0);else{rt.cache++;var F=v(),R,K;i&&(R=_(),K=R+F*.05*-z.velocityX/.227,F*=uv(_,R,K,Sr(u,Vn)),U.vars.scrollX=M(K)),R=p(),K=R+F*.05*-z.velocityY/.227,F*=uv(p,R,K,Sr(u,en)),U.vars.scrollY=L(K),U.invalidate().duration(F).play(.01),(us&&U.vars.scrollY>=l||R>=l-1)&&Ce.to({},{onUpdate:B,duration:F})}o&&o(z)},e.onWheel=function(){U._ts&&U.pause(),An()-d>1e3&&(x=0,d=An())},e.onChange=function(z,D,F,R,K){if(Co!==x&&S(),D&&i&&_(M(R[2]===D?$+(z.startX-z.x):_()+D-R[1])),F){p.offset&&E();var J=K[2]===F,q=J?P+z.startY-z.y:p()+F-K[1],Z=L(q);J&&q!==Z&&(P+=Z-q),p(Z)}(F||D)&&jr()},e.onEnable=function(){bd(u,i?!1:"x"),Qe.addEventListener("refresh",B),an(nt,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),T.enable()},e.onDisable=function(){bd(u,!0),on(nt,"resize",B),Qe.removeEventListener("refresh",B),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=us,us&&!p()&&p(1),us&&Ce.ticker.add(gr),O=a._dc,U=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yE(p,p(),function(){return U.pause()})},onUpdate:jr,onComplete:O.vars.onComplete}),a};Qe.sort=function(n){if(bn(n))return et.sort(n);var e=nt.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(n){return new Xt(n)};Qe.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof Xt?n:FC(n);return On&&On.target===e.target&&On.kill(),Fo(e.target)&&(On=e),e};Qe.core={_getVelocityProp:_m,_inputObserver:SE,_scrollers:rt,_proxies:wr,bridge:{ss:function(){$i||zo("scrollStart"),$i=An()},ref:function(){return wn}}};uE()&&Ce.registerPlugin(Qe);(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function kC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function hv(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function dv(n,e,t){return e&&hv(n.prototype,e),t&&hv(n,t),n}function zC(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function pv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function mv(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pv(Object(t),!0).forEach(function(i){zC(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):pv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function ME(n,e){return HC(n)||GC(n,e)||EE(n,e)||XC()}function Hn(n){return BC(n)||VC(n)||EE(n)||WC()}function BC(n){if(Array.isArray(n))return wm(n)}function HC(n){if(Array.isArray(n))return n}function VC(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function GC(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function EE(n,e){if(n){if(typeof n=="string")return wm(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wm(n,e)}}function wm(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function WC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function go(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function ju(n){return typeof n=="string"}function a_(n){return Array.isArray(n)}function Pc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=go(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(ju(t)||a_(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function l_(n){var e=ju(n)||a_(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Nh(n){return n!==null&&typeof n=="object"}function YC(n){return Nh(n)&&/^(1|3|11)$/.test(n.nodeType)}function jC(n){return typeof n=="number"&&n>-1&&n%1===0}function qC(n){return Nh(n)&&jC(n.length)}function Bo(n){return a_(n)?n:n==null?[]:qC(n)?Array.prototype.slice.call(n):[n]}function gv(n){var e=n;return ju(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),Bo(e).reduce(function(t,i){return[].concat(Hn(t),Hn(Bo(i).filter(YC)))},[])}var $C=Object.entries,oh="_splittype",fr={},KC=0;function Mr(n,e,t){if(!Nh(n))return console.warn("[data.set] owner is not an object"),null;var i=n[oh]||(n[oh]=++KC),r=fr[i]||(fr[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(fr[i]=mv(mv({},r),e)):e!==void 0&&(r[e]=t),t}function _o(n,e){var t=Nh(n)?n[oh]:null,i=t&&fr[t]||{};return i}function TE(n){var e=n&&n[oh];e&&(delete n[e],delete fr[e])}function ZC(){Object.keys(fr).forEach(function(n){delete fr[n]})}function QC(){$C(fr).forEach(function(n){var e=ME(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(fr[t]=null,delete fr[t])})}function JC(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var u_="\\ud800-\\udfff",wE="\\u0300-\\u036f\\ufe20-\\ufe23",AE="\\u20d0-\\u20f0",CE="\\ufe0e\\ufe0f",eR="[".concat(u_,"]"),Am="[".concat(wE).concat(AE,"]"),Cm="\\ud83c[\\udffb-\\udfff]",tR="(?:".concat(Am,"|").concat(Cm,")"),RE="[^".concat(u_,"]"),bE="(?:\\ud83c[\\udde6-\\uddff]){2}",PE="[\\ud800-\\udbff][\\udc00-\\udfff]",LE="\\u200d",DE="".concat(tR,"?"),UE="[".concat(CE,"]?"),nR="(?:"+LE+"(?:"+[RE,bE,PE].join("|")+")"+UE+DE+")*",iR=UE+DE+nR,rR="(?:".concat(["".concat(RE).concat(Am,"?"),Am,bE,PE,eR].join("|"),`
)`),sR=RegExp("".concat(Cm,"(?=").concat(Cm,")|").concat(rR).concat(iR),"g"),oR=[LE,u_,wE,AE,CE],aR=RegExp("[".concat(oR.join(""),"]"));function lR(n){return n.split("")}function NE(n){return aR.test(n)}function uR(n){return n.match(sR)||[]}function cR(n){return NE(n)?uR(n):lR(n)}function fR(n){return n==null?"":String(n)}function hR(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=fR(n),n&&ju(n)&&!e&&NE(n)?cR(n):n.split(e)}function Rm(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=ju(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,Hn(Bo(s))):t.setAttribute(i,s))}),t}var c_={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function dR(n,e){e=go(c_,e);var t=l_(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=JC(r).reduce(function(l,u,c,f){var h,p;return t.chars&&(p=hR(u).map(function(_){var g=Rm(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return Mr(g,"isChar",!0),a=[].concat(Hn(a),[g]),g})),t.words||t.lines?(h=Rm(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),Mr(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):p.forEach(function(_){s.appendChild(_)}),c<f.length-1&&s.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function IE(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return dR(n,e);var r=Bo(n.childNodes);if(r.length&&(Mr(n,"isSplit",!0),!_o(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";Mr(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,f){var h=IE(f,e),p=h.words,_=h.chars;return{words:[].concat(Hn(c.words),Hn(p)),chars:[].concat(Hn(c.chars),Hn(_))}},i)}function pR(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=ME(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var f=n.getBoundingClientRect(),h=f.width,p=f.height,_=f.x,g=f.y,m=g+a-u,d=_+o-l;return{width:h,height:p,top:m,left:d}}function OE(n){_o(n).isWord?(TE(n),n.replaceWith.apply(n,Hn(n.childNodes))):Bo(n.children).forEach(function(e){return OE(e)})}var mR=function(){return document.createDocumentFragment()};function gR(n,e,t){var i=l_(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,f,h=[],p=n.parentElement,_=n.nextElementSibling,g=mR(),m=window.getComputedStyle(n),d=m.textAlign,v=parseFloat(m.fontSize),x=v*.2;return e.absolute&&(f={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,Mr(n,{cssWidth:n.style.width,cssHeight:n.style.height})),Bo(s).forEach(function(y){var T=y.parentElement===n,w=pR(y,T,e,t),M=w.width,L=w.height,S=w.top,E=w.left;/^br$/i.test(y.nodeName)||(i.lines&&T&&((l===null||S-l>=x)&&(l=S,o.push(a=[])),a.push(y)),e.absolute&&Mr(y,{top:S,left:E,width:M,height:L}))}),p&&p.removeChild(n),i.lines&&(h=o.map(function(y){var T=Rm(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(d,"; width: 100%;")});Mr(T,"isLine",!0);var w={height:0,top:1e4};return g.appendChild(T),y.forEach(function(M,L,S){var E=_o(M),I=E.isWordEnd,U=E.top,$=E.height,P=S[L+1];w.height=Math.max(w.height,$),w.top=Math.min(w.top,U),T.appendChild(M),I&&_o(P).isWordStart&&T.append(" ")}),e.absolute&&Mr(T,{height:w.height,top:w.top}),T}),i.words||OE(g),n.replaceChildren(g)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),Bo(s).forEach(function(y){var T=_o(y),w=T.isLine,M=T.top,L=T.left,S=T.width,E=T.height,I=_o(y.parentElement),U=!w&&I.isLine;y.style.top="".concat(U?M-I.top:M,"px"),y.style.left=w?"".concat(f.left,"px"):"".concat(L-(U?f.left:0),"px"),y.style.height="".concat(E,"px"),y.style.width=w?"".concat(f.width,"px"):"".concat(S,"px"),y.style.position="absolute"})),p&&(_?p.insertBefore(n,_):p.appendChild(n)),h}var $o=go(c_,{}),_v=function(){dv(n,null,[{key:"clearData",value:function(){ZC()}},{key:"setDefaults",value:function(t){return $o=go($o,Pc(t)),c_}},{key:"revert",value:function(t){gv(t).forEach(function(i){var r=_o(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",TE(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return fr}},{key:"defaults",get:function(){return $o},set:function(t){$o=go($o,Pc(t))}}]);function n(e,t){kC(this,n),this.isSplit=!1,this.settings=go($o,Pc(t)),this.elements=gv(e),this.split()}return dv(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){Mr(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=go(this.settings,Pc(t)));var s=l_(this.settings.types);s.none||(this.elements.forEach(function(o){Mr(o,"isRoot",!0);var a=IE(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(Hn(i.words),Hn(l)),i.chars=[].concat(Hn(i.chars),Hn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=gR(o,i.settings,r);i.lines=[].concat(Hn(i.lines),Hn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),QC())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();function FE(n,e,t){return Math.max(n,Math.min(e,t))}class _R{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=e,function(l,u,c){return(1-c)*l+c*u}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=FE(0,this.currentTime/this.duration,1);t=l>=1;const u=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*u}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class vR{constructor({wrapper:e,content:t,autoResize:i=!0,debounce:r=250}={}){Rr(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Rr(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Rr(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,u=this;clearTimeout(a),a=setTimeout(function(){s.apply(u,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class kE{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)}on(e,t){var i;return(i=this.events[e])!=null&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>t!==s)}}off(e,t){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>t!==r)}destroy(){this.events={}}}const vv=100/6;class xR{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=1}){Rr(this,"onTouchStart",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Rr(this,"onTouchMove",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});Rr(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Rr(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:r}=e;t*=r===1?vv:r===2?this.windowWidth:1,i*=r===1?vv:r===2?this.windowHeight:1,t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});Rr(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new kE,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class yR{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:i=e,eventsTarget:r=i,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:u,easing:c=x=>Math.min(1,1.001-Math.pow(2,-10*x)),lerp:f=!u&&.1,infinite:h=!1,orientation:p="vertical",gestureOrientation:_="vertical",touchMultiplier:g=1,wheelMultiplier:m=1,autoResize:d=!0,__experimental__naiveDimensions:v=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:x,deltaY:y,event:T})=>{if(T.ctrlKey)return;const w=T.type.includes("touch"),M=T.type.includes("wheel");if(this.options.syncTouch&&w&&T.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const L=x===0&&y===0,S=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&x===0;if(L||S)return;let E=T.composedPath();if(E=E.slice(0,E.indexOf(this.rootElement)),E.find(P=>{var O,B,z,D,F;return((O=P.hasAttribute)===null||O===void 0?void 0:O.call(P,"data-lenis-prevent"))||w&&((B=P.hasAttribute)===null||B===void 0?void 0:B.call(P,"data-lenis-prevent-touch"))||M&&((z=P.hasAttribute)===null||z===void 0?void 0:z.call(P,"data-lenis-prevent-wheel"))||((D=P.classList)===null||D===void 0?void 0:D.contains("lenis"))&&!(!((F=P.classList)===null||F===void 0)&&F.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void T.preventDefault();if(this.isSmooth=this.options.syncTouch&&w||this.options.smoothWheel&&M,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();T.preventDefault();let I=y;this.options.gestureOrientation==="both"?I=Math.abs(y)>Math.abs(x)?y:x:this.options.gestureOrientation==="horizontal"&&(I=x);const U=w&&this.options.syncTouch,$=w&&T.type==="touchend"&&Math.abs(I)>5;$&&(I=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+I,Object.assign({programmatic:!1},U?{lerp:$?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const x=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-x),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:i,eventsTarget:r,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:u,easing:c,lerp:f,infinite:h,gestureOrientation:_,orientation:p,touchMultiplier:g,wheelMultiplier:m,autoResize:d,__experimental__naiveDimensions:v},this.animate=new _R,this.emitter=new kE,this.dimensions=new vR({wrapper:e,content:t,autoResize:d}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new xR(r,{touchMultiplier:g,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:i=!1,lock:r=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:u=!1,programmatic:c=!0}={}){if(!this.isStopped&&!this.isLocked||u){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let f;if(typeof e=="string"?f=document.querySelector(e):e!=null&&e.nodeType&&(f=e),f){if(this.options.wrapper!==window){const p=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?p.left:p.top}const h=f.getBoundingClientRect();e=(this.isHorizontal?h.left:h.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=FE(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!c){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,h)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),c&&(this.targetScroll=f),h||this.emit(),h&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const f_="160",SR=0,xv=1,MR=2,zE=1,ER=2,Nr=3,Gs=0,li=1,Vi=2,qr=0,Wa=1,zr=2,yv=3,Sv=4,TR=5,lo=100,wR=101,AR=102,Mv=103,Ev=104,CR=200,RR=201,bR=202,PR=203,bm=204,Pm=205,LR=206,DR=207,UR=208,NR=209,IR=210,OR=211,FR=212,kR=213,zR=214,BR=0,HR=1,VR=2,ah=3,GR=4,WR=5,XR=6,YR=7,BE=0,jR=1,qR=2,Is=0,$R=1,KR=2,ZR=3,HE=4,QR=5,JR=6,VE=300,sl=301,ol=302,Lm=303,Dm=304,Ih=306,Um=1e3,lr=1001,Nm=1002,Bn=1003,Tv=1004,Pd=1005,Zn=1006,eb=1007,Bu=1008,Os=1009,tb=1010,nb=1011,h_=1012,GE=1013,Ms=1014,Es=1015,Ar=1016,WE=1017,XE=1018,Ro=1020,ib=1021,Gi=1023,rb=1024,sb=1025,bo=1026,al=1027,ob=1028,YE=1029,ab=1030,jE=1031,qE=1033,Ld=33776,Dd=33777,Ud=33778,Nd=33779,wv=35840,Av=35841,Cv=35842,Rv=35843,$E=36196,bv=37492,Pv=37496,Lv=37808,Dv=37809,Uv=37810,Nv=37811,Iv=37812,Ov=37813,Fv=37814,kv=37815,zv=37816,Bv=37817,Hv=37818,Vv=37819,Gv=37820,Wv=37821,Id=36492,Xv=36494,Yv=36495,lb=36283,jv=36284,qv=36285,$v=36286,KE=3e3,Po=3001,ub=3200,cb=3201,fb=0,hb=1,Wi="",pn="srgb",ts="srgb-linear",d_="display-p3",Oh="display-p3-linear",lh="linear",Rt="srgb",uh="rec709",ch="p3",Ko=7680,Kv=519,db=512,pb=513,mb=514,ZE=515,gb=516,_b=517,vb=518,xb=519,Zv=35044,Qv="300 es",Im=1035,Xr=2e3,fh=2001;class dl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,Om=180/Math.PI;function qu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function Qn(n,e,t){return Math.max(e,Math.min(t,n))}function yb(n,e){return(n%e+e)%e}function Fd(n,e,t){return(1-t)*n+t*e}function Jv(n){return(n&n-1)===0&&n!==0}function Fm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,r,s,o,a,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],g=r[0],m=r[3],d=r[6],v=r[1],x=r[4],y=r[7],T=r[2],w=r[5],M=r[8];return s[0]=o*g+a*v+l*T,s[3]=o*m+a*x+l*w,s[6]=o*d+a*y+l*M,s[1]=u*g+c*v+f*T,s[4]=u*m+c*x+f*w,s[7]=u*d+c*y+f*M,s[2]=h*g+p*v+_*T,s[5]=h*m+p*x+_*w,s[8]=h*d+p*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kd.makeScale(e,t)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new it;function QE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sb(){const n=hh("canvas");return n.style.display="block",n}const ex={};function fu(n){n in ex||(ex[n]=!0,console.warn(n))}const tx=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nx=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lc={[ts]:{transfer:lh,primaries:uh,toReference:n=>n,fromReference:n=>n},[pn]:{transfer:Rt,primaries:uh,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oh]:{transfer:lh,primaries:ch,toReference:n=>n.applyMatrix3(nx),fromReference:n=>n.applyMatrix3(tx)},[d_]:{transfer:Rt,primaries:ch,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nx),fromReference:n=>n.applyMatrix3(tx).convertLinearToSRGB()}},Mb=new Set([ts,Oh]),yt={enabled:!0,_workingColorSpace:ts,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Lc[e].toReference,r=Lc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Lc[n].primaries},getTransfer:function(n){return n===Wi?lh:Lc[n].transfer}};function Xa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zo;class JE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zo===void 0&&(Zo=hh("canvas")),Zo.width=e.width,Zo.height=e.height;const i=Zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xa(t[i]/255)*255):t[i]=Xa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eb=0;class e1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=qu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bd(r[o].image)):s.push(Bd(r[o]))}else s=Bd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?JE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tb=0;class ui extends dl{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,i=lr,r=lr,s=Zn,o=Bu,a=Gi,l=Os,u=ui.DEFAULT_ANISOTROPY,c=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=qu(),this.name="",this.source=new e1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(fu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Po?pn:Wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==VE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Um:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Nm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Um:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Nm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pn?Po:KE}set encoding(e){fu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Po?pn:Wi}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=VE;ui.DEFAULT_ANISOTROPY=1;class gn{constructor(e=0,t=0,i=0,r=1){gn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,T=(d+1)/2,w=(c+h)/4,M=(f+g)/4,L=(_+m)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=L/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=L/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wb extends dl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(fu("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Po?pn:Wi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ui(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new e1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends wb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class t1 extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ab extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $u{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||u!==p||c!==_){let m=1-a;const d=l*h+u*p+c*_+f*g,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,d*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+_*y,f=f*m+g*y,m===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=T,u*=T,c*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-a*p,e[t+2]=u*_+c*p+a*h-l*f,e[t+3]=c*_-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ix.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ix.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new X,ix=new $u;class Ku{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,er):er.fromBufferAttribute(s,o),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rl),Uc.subVectors(this.max,Rl),Qo.subVectors(e.a,Rl),Jo.subVectors(e.b,Rl),ea.subVectors(e.c,Rl),rs.subVectors(Jo,Qo),ss.subVectors(ea,Jo),Qs.subVectors(Qo,ea);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-Qs.z,Qs.y,rs.z,0,-rs.x,ss.z,0,-ss.x,Qs.z,0,-Qs.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-Qs.y,Qs.x,0];return!Vd(t,Qo,Jo,ea,Uc)||(t=[1,0,0,0,1,0,0,0,1],!Vd(t,Qo,Jo,ea,Uc))?!1:(Nc.crossVectors(rs,ss),t=[Nc.x,Nc.y,Nc.z],Vd(t,Qo,Jo,ea,Uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const br=[new X,new X,new X,new X,new X,new X,new X,new X],er=new X,Dc=new Ku,Qo=new X,Jo=new X,ea=new X,rs=new X,ss=new X,Qs=new X,Rl=new X,Uc=new X,Nc=new X,Js=new X;function Vd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Js.fromArray(n,s);const a=r.x*Math.abs(Js.x)+r.y*Math.abs(Js.y)+r.z*Math.abs(Js.z),l=e.dot(Js),u=t.dot(Js),c=i.dot(Js);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Cb=new Ku,bl=new X,Gd=new X;class Fh{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const t=bl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(Gd)),this.expandByPoint(bl.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pr=new X,Wd=new X,Ic=new X,os=new X,Xd=new X,Oc=new X,Yd=new X;class p_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wd.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),os.copy(this.origin).sub(Wd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ic),a=os.dot(this.direction),l=-os.dot(Ic),u=os.lengthSq(),c=Math.abs(1-o*o);let f,h,p,_;if(c>0)if(f=o*l-a,h=o*a-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const g=1/c;f*=g,h*=g,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wd).addScaledVector(Ic,h),p}intersectSphere(e,t){Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),r=Pr.dot(Pr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,i,r,s){Xd.subVectors(t,e),Oc.subVectors(i,e),Yd.crossVectors(Xd,Oc);let o=this.direction.dot(Yd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;os.subVectors(this.origin,e);const l=a*this.direction.dot(Oc.crossVectors(os,Oc));if(l<0)return null;const u=a*this.direction.dot(Xd.cross(os));if(u<0||l+u>o)return null;const c=-a*os.dot(Yd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,_,g,m){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ta.setFromMatrixColumn(e,0).length(),s=1/ta.setFromMatrixColumn(e,1).length(),o=1/ta.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,_=a*c,g=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,g=u*f;t[0]=h+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,g=u*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,_=a*c,g=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+g,t[1]=l*f,t[5]=g*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+g,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rb,e,bb)}lookAt(e,t,i){const r=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),as.crossVectors(i,pi),as.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),as.crossVectors(i,pi)),as.normalize(),Fc.crossVectors(pi,as),r[0]=as.x,r[4]=Fc.x,r[8]=pi.x,r[1]=as.y,r[5]=Fc.y,r[9]=pi.y,r[2]=as.z,r[6]=Fc.z,r[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],d=i[14],v=i[3],x=i[7],y=i[11],T=i[15],w=r[0],M=r[4],L=r[8],S=r[12],E=r[1],I=r[5],U=r[9],$=r[13],P=r[2],O=r[6],B=r[10],z=r[14],D=r[3],F=r[7],R=r[11],K=r[15];return s[0]=o*w+a*E+l*P+u*D,s[4]=o*M+a*I+l*O+u*F,s[8]=o*L+a*U+l*B+u*R,s[12]=o*S+a*$+l*z+u*K,s[1]=c*w+f*E+h*P+p*D,s[5]=c*M+f*I+h*O+p*F,s[9]=c*L+f*U+h*B+p*R,s[13]=c*S+f*$+h*z+p*K,s[2]=_*w+g*E+m*P+d*D,s[6]=_*M+g*I+m*O+d*F,s[10]=_*L+g*U+m*B+d*R,s[14]=_*S+g*$+m*z+d*K,s[3]=v*w+x*E+y*P+T*D,s[7]=v*M+x*I+y*O+T*F,s[11]=v*L+x*U+y*B+T*R,s[15]=v*S+x*$+y*z+T*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],v=f*m*u-g*h*u+g*l*p-a*m*p-f*l*d+a*h*d,x=_*h*u-c*m*u-_*l*p+o*m*p+c*l*d-o*h*d,y=c*g*u-_*f*u+_*a*p-o*g*p-c*a*d+o*f*d,T=_*f*l-c*g*l-_*a*h+o*g*h+c*a*m-o*f*m,w=t*v+i*x+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(g*h*s-f*m*s-g*r*p+i*m*p+f*r*d-i*h*d)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*d+i*l*d)*M,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-_*h*s+_*r*p-t*m*p-c*r*d+t*h*d)*M,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*d-t*l*d)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(_*f*s-c*g*s-_*i*p+t*g*p+c*i*d-t*f*d)*M,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*M,e[12]=T*M,e[13]=(c*g*r-_*f*r+_*i*h-t*g*h-c*i*m+t*f*m)*M,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,_=s*f,g=o*c,m=o*f,d=a*f,v=l*u,x=l*c,y=l*f,T=i.x,w=i.y,M=i.z;return r[0]=(1-(g+d))*T,r[1]=(p+y)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+d))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+x)*M,r[9]=(m-v)*M,r[10]=(1-(h+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ta.set(r[0],r[1],r[2]).length();const o=ta.set(r[4],r[5],r[6]).length(),a=ta.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tr.copy(this);const u=1/s,c=1/o,f=1/a;return tr.elements[0]*=u,tr.elements[1]*=u,tr.elements[2]*=u,tr.elements[4]*=c,tr.elements[5]*=c,tr.elements[6]*=c,tr.elements[8]*=f,tr.elements[9]*=f,tr.elements[10]*=f,t.setFromRotationMatrix(tr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Xr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Xr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fh)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Xr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let _,g;if(a===Xr)_=(o+s)*f,g=-2*f;else if(a===fh)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ta=new X,tr=new fn,Rb=new X(0,0,0),bb=new X(1,1,1),as=new X,Fc=new X,pi=new X,rx=new fn,sx=new $u;class kh{constructor(e=0,t=0,i=0,r=kh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Qn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sx.setFromEuler(this),this.setFromQuaternion(sx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kh.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pb=0;const ox=new X,na=new $u,Lr=new fn,kc=new X,Pl=new X,Lb=new X,Db=new $u,ax=new X(1,0,0),lx=new X(0,1,0),ux=new X(0,0,1),Ub={type:"added"},Nb={type:"removed"};class ci extends dl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=qu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new X,t=new kh,i=new $u,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fn},normalMatrix:{value:new it}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(ax,e)}rotateY(e){return this.rotateOnAxis(lx,e)}rotateZ(e){return this.rotateOnAxis(ux,e)}translateOnAxis(e,t){return ox.copy(e).applyQuaternion(this.quaternion),this.position.add(ox.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ax,e)}translateY(e){return this.translateOnAxis(lx,e)}translateZ(e){return this.translateOnAxis(ux,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kc.copy(e):kc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(Pl,kc,this.up):Lr.lookAt(kc,Pl,this.up),this.quaternion.setFromRotationMatrix(Lr),r&&(Lr.extractRotation(r.matrixWorld),na.setFromRotationMatrix(Lr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ub)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,e,Lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,Db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ci.DEFAULT_UP=new X(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nr=new X,Dr=new X,jd=new X,Ur=new X,ia=new X,ra=new X,cx=new X,qd=new X,$d=new X,Kd=new X;let zc=!1;class ar{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nr.subVectors(e,t),r.cross(nr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nr.subVectors(r,t),Dr.subVectors(i,t),jd.subVectors(e,t);const o=nr.dot(nr),a=nr.dot(Dr),l=nr.dot(jd),u=Dr.dot(Dr),c=Dr.dot(jd),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ur)===null?!1:Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getUV(e,t,i,r,s,o,a,l){return zc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ur.x),l.addScaledVector(o,Ur.y),l.addScaledVector(a,Ur.z),l)}static isFrontFacing(e,t,i,r){return nr.subVectors(i,t),Dr.subVectors(e,t),nr.cross(Dr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nr.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),nr.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return zc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zc=!0),ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ia.subVectors(r,i),ra.subVectors(s,i),qd.subVectors(e,i);const l=ia.dot(qd),u=ra.dot(qd);if(l<=0&&u<=0)return t.copy(i);$d.subVectors(e,r);const c=ia.dot($d),f=ra.dot($d);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ia,o);Kd.subVectors(e,s);const p=ia.dot(Kd),_=ra.dot(Kd);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(ra,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return cx.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(cx,a);const d=1/(m+g+h);return o=g*d,a=h*d,t.copy(i).addScaledVector(ia,o).addScaledVector(ra,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const n1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function Zd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=yb(e,1),t=Qn(t,0,1),i=Qn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zd(o,s,e+1/3),this.g=Zd(o,s,e),this.b=Zd(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=n1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=zd(e.r),this.g=zd(e.g),this.b=zd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return yt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Qn(Tn.r*255,0,255))*65536+Math.round(Qn(Tn.g*255,0,255))*256+Math.round(Qn(Tn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=pn){yt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ls),this.setHSL(ls.h+e,ls.s+t,ls.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ls),e.getHSL(Bc);const i=Fd(ls.h,Bc.h,t),r=Fd(ls.s,Bc.s,t),s=Fd(ls.l,Bc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new st;st.NAMES=n1;let Ib=0;class Zu extends dl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=qu(),this.name="",this.type="Material",this.blending=Wa,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bm,this.blendDst=Pm,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ah,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wa&&(i.blending=this.blending),this.side!==Gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bm&&(i.blendSrc=this.blendSrc),this.blendDst!==Pm&&(i.blendDst=this.blendDst),this.blendEquation!==lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ah&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ko&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ko&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ko&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vo extends Zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=BE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new X,Hc=new Ze;class un{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Es,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hc.fromBufferAttribute(this,t),Hc.applyMatrix3(e),this.setXY(t,Hc.x,Hc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cl(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cl(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cl(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),i=qn(i,this.array),r=qn(r,this.array),s=qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zv&&(e.usage=this.usage),e}}class i1 extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class r1 extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xn extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ob=0;const Ii=new fn,Qd=new ci,sa=new X,mi=new Ku,Ll=new Ku,sn=new X;class fi extends dl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=qu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QE(e)?r1:i1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Xn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ku);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];mi.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ll.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(mi.min,Ll.min),mi.expandByPoint(sn),sn.addVectors(mi.max,Ll.max),mi.expandByPoint(sn)):(mi.expandByPoint(Ll.min),mi.expandByPoint(Ll.max))}mi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)sn.fromBufferAttribute(a,u),l&&(sa.fromBufferAttribute(e,u),sn.add(sa)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new X,c[E]=new X;const f=new X,h=new X,p=new X,_=new Ze,g=new Ze,m=new Ze,d=new X,v=new X;function x(E,I,U){f.fromArray(r,E*3),h.fromArray(r,I*3),p.fromArray(r,U*3),_.fromArray(o,E*2),g.fromArray(o,I*2),m.fromArray(o,U*2),h.sub(f),p.sub(f),g.sub(_),m.sub(_);const $=1/(g.x*m.y-m.x*g.y);isFinite($)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar($),v.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar($),u[E].add(d),u[I].add(d),u[U].add(d),c[E].add(v),c[I].add(v),c[U].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,I=y.length;E<I;++E){const U=y[E],$=U.start,P=U.count;for(let O=$,B=$+P;O<B;O+=3)x(i[O+0],i[O+1],i[O+2])}const T=new X,w=new X,M=new X,L=new X;function S(E){M.fromArray(s,E*3),L.copy(M);const I=u[E];T.copy(I),T.sub(M.multiplyScalar(M.dot(I))).normalize(),w.crossVectors(L,I);const $=w.dot(c[E])<0?-1:1;l[E*4]=T.x,l[E*4+1]=T.y,l[E*4+2]=T.z,l[E*4+3]=$}for(let E=0,I=y.length;E<I;++E){const U=y[E],$=U.start,P=U.count;for(let O=$,B=$+P;O<B;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new un(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fx=new fn,eo=new p_,Vc=new Fh,hx=new X,oa=new X,aa=new X,la=new X,Jd=new X,Gc=new X,Wc=new Ze,Xc=new Ze,Yc=new Ze,dx=new X,px=new X,mx=new X,jc=new X,qc=new X;class Ai extends ci{constructor(e=new fi,t=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Jd.fromBufferAttribute(f,e),o?Gc.addScaledVector(Jd,c):Gc.addScaledVector(Jd.sub(t),c))}t.add(Gc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(s),eo.copy(e.ray).recast(e.near),!(Vc.containsPoint(eo.origin)===!1&&(eo.intersectSphere(Vc,hx)===null||eo.origin.distanceToSquared(hx)>(e.far-e.near)**2))&&(fx.copy(s).invert(),eo.copy(e.ray).applyMatrix4(fx),!(i.boundingBox!==null&&eo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,eo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=a.getX(y),M=a.getX(y+1),L=a.getX(y+2);r=$c(this,d,e,i,u,c,f,w,M,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=$c(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=y,M=y+1,L=y+2;r=$c(this,d,e,i,u,c,f,w,M,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=m,x=m+1,y=m+2;r=$c(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fb(n,e,t,i,r,s,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gs,a),l===null)return null;qc.copy(a),qc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(qc);return u<t.near||u>t.far?null:{distance:u,point:qc.clone(),object:n}}function $c(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,oa),n.getVertexPosition(l,aa),n.getVertexPosition(u,la);const c=Fb(n,e,t,i,oa,aa,la,jc);if(c){r&&(Wc.fromBufferAttribute(r,a),Xc.fromBufferAttribute(r,l),Yc.fromBufferAttribute(r,u),c.uv=ar.getInterpolation(jc,oa,aa,la,Wc,Xc,Yc,new Ze)),s&&(Wc.fromBufferAttribute(s,a),Xc.fromBufferAttribute(s,l),Yc.fromBufferAttribute(s,u),c.uv1=ar.getInterpolation(jc,oa,aa,la,Wc,Xc,Yc,new Ze),c.uv2=c.uv1),o&&(dx.fromBufferAttribute(o,a),px.fromBufferAttribute(o,l),mx.fromBufferAttribute(o,u),c.normal=ar.getInterpolation(jc,oa,aa,la,dx,px,mx,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new X,materialIndex:0};ar.getNormal(oa,aa,la,f.normal),c.face=f}return c}class Qu extends fi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xn(u,3)),this.setAttribute("normal",new Xn(c,3)),this.setAttribute("uv",new Xn(f,2));function _(g,m,d,v,x,y,T,w,M,L,S){const E=y/M,I=T/L,U=y/2,$=T/2,P=w/2,O=M+1,B=L+1;let z=0,D=0;const F=new X;for(let R=0;R<B;R++){const K=R*I-$;for(let J=0;J<O;J++){const q=J*E-U;F[g]=q*v,F[m]=K*x,F[d]=P,u.push(F.x,F.y,F.z),F[g]=0,F[m]=0,F[d]=w>0?1:-1,c.push(F.x,F.y,F.z),f.push(J/M),f.push(1-R/L),z+=1}}for(let R=0;R<L;R++)for(let K=0;K<M;K++){const J=h+K+O*R,q=h+K+O*(R+1),Z=h+(K+1)+O*(R+1),re=h+(K+1)+O*R;l.push(J,q,re),l.push(q,Z,re),D+=6}a.addGroup(p,D,S),p+=D,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ll(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const i=ll(n[t]);for(const r in i)e[r]=i[r]}return e}function kb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function s1(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const dh={clone:ll,merge:In};var zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends Zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zb,this.fragmentShader=Bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ll(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class o1 extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Xr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hi extends o1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Om*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Om*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Od*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ua=-90,ca=1;class Hb extends ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hi(ua,ca,e,t);r.layers=this.layers,this.add(r);const s=new Hi(ua,ca,e,t);s.layers=this.layers,this.add(s);const o=new Hi(ua,ca,e,t);o.layers=this.layers,this.add(o);const a=new Hi(ua,ca,e,t);a.layers=this.layers,this.add(a);const l=new Hi(ua,ca,e,t);l.layers=this.layers,this.add(l);const u=new Hi(ua,ca,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Xr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class a1 extends ui{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:sl,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vb extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(fu("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Po?pn:Wi),this.texture=new a1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qu(5,5,5),s=new Gn({name:"CubemapFromEquirect",uniforms:ll(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:qr});s.uniforms.tEquirect.value=t;const o=new Ai(r,s),a=t.minFilter;return t.minFilter===Bu&&(t.minFilter=Zn),new Hb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ep=new X,Gb=new X,Wb=new it;class hs{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ep.subVectors(i,t).cross(Gb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ep),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wb.getNormalMatrix(e),r=this.coplanarPoint(ep).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const to=new Fh,Kc=new X;class l1{constructor(e=new hs,t=new hs,i=new hs,r=new hs,s=new hs,o=new hs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],g=r[10],m=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-d).normalize(),i[1].setComponents(l+s,h+u,m+p,y+d).normalize(),i[2].setComponents(l+o,h+c,m+_,y+v).normalize(),i[3].setComponents(l-o,h-c,m-_,y-v).normalize(),i[4].setComponents(l-a,h-f,m-g,y-x).normalize(),t===Xr)i[5].setComponents(l+a,h+f,m+g,y+x).normalize();else if(t===fh)i[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),to.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),to.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(to)}intersectsSprite(e){return to.center.set(0,0,0),to.radius=.7071067811865476,to.applyMatrix4(e.matrixWorld),this.intersectsSphere(to)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kc.x=r.normal.x>0?e.max.x:e.min.x,Kc.y=r.normal.y>0?e.max.y:e.min.y,Kc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function u1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,f,h),u.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&_.length===0&&n.bufferSubData(f,0,h),_.length!==0){for(let g=0,m=_.length;g<m;g++){const d=_[g];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class g_ extends fi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],_=[],g=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let x=0;x<u;x++){const y=x*f-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,y=v+u*(d+1),T=v+1+u*(d+1),w=v+1+u*d;p.push(x,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(g,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new g_(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$b=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eP=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_P=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MP="gl_FragColor = linearToOutputTexel( gl_FragColor );",EP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,TP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,IP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,XP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$P=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,QP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,JP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,a2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,l2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,u2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,f2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,S2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,E2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,b2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,I2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,J2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_L=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ML=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,EL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:Yb,alphahash_pars_fragment:jb,alphamap_fragment:qb,alphamap_pars_fragment:$b,alphatest_fragment:Kb,alphatest_pars_fragment:Zb,aomap_fragment:Qb,aomap_pars_fragment:Jb,batching_pars_vertex:eP,batching_vertex:tP,begin_vertex:nP,beginnormal_vertex:iP,bsdfs:rP,iridescence_fragment:sP,bumpmap_pars_fragment:oP,clipping_planes_fragment:aP,clipping_planes_pars_fragment:lP,clipping_planes_pars_vertex:uP,clipping_planes_vertex:cP,color_fragment:fP,color_pars_fragment:hP,color_pars_vertex:dP,color_vertex:pP,common:mP,cube_uv_reflection_fragment:gP,defaultnormal_vertex:_P,displacementmap_pars_vertex:vP,displacementmap_vertex:xP,emissivemap_fragment:yP,emissivemap_pars_fragment:SP,colorspace_fragment:MP,colorspace_pars_fragment:EP,envmap_fragment:TP,envmap_common_pars_fragment:wP,envmap_pars_fragment:AP,envmap_pars_vertex:CP,envmap_physical_pars_fragment:zP,envmap_vertex:RP,fog_vertex:bP,fog_pars_vertex:PP,fog_fragment:LP,fog_pars_fragment:DP,gradientmap_pars_fragment:UP,lightmap_fragment:NP,lightmap_pars_fragment:IP,lights_lambert_fragment:OP,lights_lambert_pars_fragment:FP,lights_pars_begin:kP,lights_toon_fragment:BP,lights_toon_pars_fragment:HP,lights_phong_fragment:VP,lights_phong_pars_fragment:GP,lights_physical_fragment:WP,lights_physical_pars_fragment:XP,lights_fragment_begin:YP,lights_fragment_maps:jP,lights_fragment_end:qP,logdepthbuf_fragment:$P,logdepthbuf_pars_fragment:KP,logdepthbuf_pars_vertex:ZP,logdepthbuf_vertex:QP,map_fragment:JP,map_pars_fragment:e2,map_particle_fragment:t2,map_particle_pars_fragment:n2,metalnessmap_fragment:i2,metalnessmap_pars_fragment:r2,morphcolor_vertex:s2,morphnormal_vertex:o2,morphtarget_pars_vertex:a2,morphtarget_vertex:l2,normal_fragment_begin:u2,normal_fragment_maps:c2,normal_pars_fragment:f2,normal_pars_vertex:h2,normal_vertex:d2,normalmap_pars_fragment:p2,clearcoat_normal_fragment_begin:m2,clearcoat_normal_fragment_maps:g2,clearcoat_pars_fragment:_2,iridescence_pars_fragment:v2,opaque_fragment:x2,packing:y2,premultiplied_alpha_fragment:S2,project_vertex:M2,dithering_fragment:E2,dithering_pars_fragment:T2,roughnessmap_fragment:w2,roughnessmap_pars_fragment:A2,shadowmap_pars_fragment:C2,shadowmap_pars_vertex:R2,shadowmap_vertex:b2,shadowmask_pars_fragment:P2,skinbase_vertex:L2,skinning_pars_vertex:D2,skinning_vertex:U2,skinnormal_vertex:N2,specularmap_fragment:I2,specularmap_pars_fragment:O2,tonemapping_fragment:F2,tonemapping_pars_fragment:k2,transmission_fragment:z2,transmission_pars_fragment:B2,uv_pars_fragment:H2,uv_pars_vertex:V2,uv_vertex:G2,worldpos_vertex:W2,background_vert:X2,background_frag:Y2,backgroundCube_vert:j2,backgroundCube_frag:q2,cube_vert:$2,cube_frag:K2,depth_vert:Z2,depth_frag:Q2,distanceRGBA_vert:J2,distanceRGBA_frag:eL,equirect_vert:tL,equirect_frag:nL,linedashed_vert:iL,linedashed_frag:rL,meshbasic_vert:sL,meshbasic_frag:oL,meshlambert_vert:aL,meshlambert_frag:lL,meshmatcap_vert:uL,meshmatcap_frag:cL,meshnormal_vert:fL,meshnormal_frag:hL,meshphong_vert:dL,meshphong_frag:pL,meshphysical_vert:mL,meshphysical_frag:gL,meshtoon_vert:_L,meshtoon_frag:vL,points_vert:xL,points_frag:yL,shadow_vert:SL,shadow_frag:ML,sprite_vert:EL,sprite_frag:TL},me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},_r={basic:{uniforms:In([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:In([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:In([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:In([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:In([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:In([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:In([me.points,me.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:In([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:In([me.common,me.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:In([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:In([me.sprite,me.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:In([me.common,me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:In([me.lights,me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};_r.physical={uniforms:In([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Zc={r:0,b:0,g:0};function wL(n,e,t,i,r,s,o){const a=new st(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ih)?(c===void 0&&(c=new Ai(new Qu(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ll(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,(f!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ai(new g_(2,2),new Gn({name:"BackgroundMaterial",uniforms:ll(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,d){m.getRGB(Zc,s1(n)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function AL(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(P,O,B,z,D){let F=!1;if(o){const R=g(z,B,O);u!==R&&(u=R,p(u.object)),F=d(P,z,B,D),F&&v(P,z,B,D)}else{const R=O.wireframe===!0;(u.geometry!==z.id||u.program!==B.id||u.wireframe!==R)&&(u.geometry=z.id,u.program=B.id,u.wireframe=R,F=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,L(P,O,B,z),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(P){return i.isWebGL2?n.bindVertexArray(P):s.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?n.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function g(P,O,B){const z=B.wireframe===!0;let D=a[P.id];D===void 0&&(D={},a[P.id]=D);let F=D[O.id];F===void 0&&(F={},D[O.id]=F);let R=F[z];return R===void 0&&(R=m(h()),F[z]=R),R}function m(P){const O=[],B=[],z=[];for(let D=0;D<r;D++)O[D]=0,B[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:z,object:P,attributes:{},index:null}}function d(P,O,B,z){const D=u.attributes,F=O.attributes;let R=0;const K=B.getAttributes();for(const J in K)if(K[J].location>=0){const Z=D[J];let re=F[J];if(re===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;R++}return u.attributesNum!==R||u.index!==z}function v(P,O,B,z){const D={},F=O.attributes;let R=0;const K=B.getAttributes();for(const J in K)if(K[J].location>=0){let Z=F[J];Z===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),D[J]=re,R++}u.attributes=D,u.attributesNum=R,u.index=z}function x(){const P=u.newAttributes;for(let O=0,B=P.length;O<B;O++)P[O]=0}function y(P){T(P,0)}function T(P,O){const B=u.newAttributes,z=u.enabledAttributes,D=u.attributeDivisors;B[P]=1,z[P]===0&&(n.enableVertexAttribArray(P),z[P]=1),D[P]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),D[P]=O)}function w(){const P=u.newAttributes,O=u.enabledAttributes;for(let B=0,z=O.length;B<z;B++)O[B]!==P[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function M(P,O,B,z,D,F,R){R===!0?n.vertexAttribIPointer(P,O,B,D,F):n.vertexAttribPointer(P,O,B,z,D,F)}function L(P,O,B,z){if(i.isWebGL2===!1&&(P.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=z.attributes,F=B.getAttributes(),R=O.defaultAttributeValues;for(const K in F){const J=F[K];if(J.location>=0){let q=D[K];if(q===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const Z=q.normalized,re=q.itemSize,se=t.get(q);if(se===void 0)continue;const ce=se.buffer,_e=se.type,Re=se.bytesPerElement,we=i.isWebGL2===!0&&(_e===n.INT||_e===n.UNSIGNED_INT||q.gpuType===GE);if(q.isInterleavedBufferAttribute){const ke=q.data,V=ke.stride,Ge=q.offset;if(ke.isInstancedInterleavedBuffer){for(let ve=0;ve<J.locationSize;ve++)T(J.location+ve,ke.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let ve=0;ve<J.locationSize;ve++)y(J.location+ve);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let ve=0;ve<J.locationSize;ve++)M(J.location+ve,re/J.locationSize,_e,Z,V*Re,(Ge+re/J.locationSize*ve)*Re,we)}else{if(q.isInstancedBufferAttribute){for(let ke=0;ke<J.locationSize;ke++)T(J.location+ke,q.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ke=0;ke<J.locationSize;ke++)y(J.location+ke);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let ke=0;ke<J.locationSize;ke++)M(J.location+ke,re/J.locationSize,_e,Z,re*Re,re/J.locationSize*ke*Re,we)}}else if(R!==void 0){const Z=R[K];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(J.location,Z);break;case 3:n.vertexAttrib3fv(J.location,Z);break;case 4:n.vertexAttrib4fv(J.location,Z);break;default:n.vertexAttrib1fv(J.location,Z)}}}}w()}function S(){U();for(const P in a){const O=a[P];for(const B in O){const z=O[B];for(const D in z)_(z[D].object),delete z[D];delete O[B]}delete a[P]}}function E(P){if(a[P.id]===void 0)return;const O=a[P.id];for(const B in O){const z=O[B];for(const D in z)_(z[D].object),delete z[D];delete O[B]}delete a[P.id]}function I(P){for(const O in a){const B=a[O];if(B[P.id]===void 0)continue;const z=B[P.id];for(const D in z)_(z[D].object),delete z[D];delete B[P.id]}}function U(){$(),c=!0,u!==l&&(u=l,p(u.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function CL(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],f[_]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function RL(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),T=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function bL(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new hs,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=c(_,h,x,p);for(let T=0;T!==x;++T)y[T]=t[T];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function PL(n){let e=new WeakMap;function t(o,a){return a===Lm?o.mapping=sl:a===Dm&&(o.mapping=ol),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lm||a===Dm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Vb(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class c1 extends o1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ba=4,gx=[.125,.215,.35,.446,.526,.582],uo=20,tp=new c1,_x=new st;let np=null,ip=0,rp=0;const ao=(1+Math.sqrt(5))/2,fa=1/ao,vx=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ao,fa),new X(0,ao,-fa),new X(fa,0,ao),new X(-fa,0,ao),new X(ao,fa,0),new X(-ao,fa,0)];class xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(np,ip,rp),e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sl||e.mapping===ol?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ar,format:Gi,colorSpace:ts,depthBuffer:!1},r=yx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LL(s)),this._blurMaterial=DL(s,e,t)}return r}_compileMaterial(e){const t=new Ai(this._lodPlanes[0],e);this._renderer.compile(t,tp)}_sceneToCubeUV(e,t,i,r){const a=new Hi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(_x),c.toneMapping=Is,c.autoClear=!1;const p=new vo({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),_=new Ai(new Qu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(_x),g=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;Qc(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sl||e.mapping===ol;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vx[(r-1)%vx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ai(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*uo-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):uo;m>uo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${uo}`);const d=[];let v=0;for(let M=0;M<uo;++M){const L=M/g,S=Math.exp(-L*L/2);d.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-ba?r-x+ba:0),w=4*(this._cubeSize-y);Qc(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(f,tp)}}function LL(n){const e=[],t=[],i=[];let r=n;const s=n-ba+1+gx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ba?l=gx[o-n+ba-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,g=3,m=2,d=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(d*_*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,L=w>2?0:-1,S=[M,L,0,M+2/3,L,0,M+2/3,L+1,0,M,L,0,M+2/3,L+1,0,M,L+1,0];v.set(S,g*_*w),x.set(h,m*_*w);const E=[w,w,w,w,w,w];y.set(E,d*_*w)}const T=new fi;T.setAttribute("position",new un(v,g)),T.setAttribute("uv",new un(x,m)),T.setAttribute("faceIndex",new un(y,d)),e.push(T),r>ba&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yx(n,e,t){const i=new Ki(n,e,t);return i.texture.mapping=Ih,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function DL(n,e,t){const i=new Float32Array(uo),r=new X(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Sx(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function Mx(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:__(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qr,depthTest:!1,depthWrite:!1})}function __(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UL(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Lm||l===Dm,c=l===sl||l===ol;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new xx(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new xx(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function NL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IL(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],w=v[x+1],M=v[x+2];h.push(T,w,w,M,M,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,w=x+1,M=x+2;h.push(T,w,w,M,M,T)}}else return;const m=new(QE(h)?r1:i1)(h,1);m.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function OL(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function f(p,_,g){if(g===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,a,p*l,g),t.update(_,s,g)}function h(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let d=0;for(let v=0;v<g;v++)d+=_[v];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function FL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kL(n,e){return n[0]-e[0]}function zL(n,e){return Math.abs(e[1])-Math.abs(n[1])}function BL(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new gn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let O=function(){$.dispose(),s.delete(c),c.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let E=c.attributes.position.count*S,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const U=new Float32Array(E*I*4*g),$=new t1(U,E,I,g);$.type=Es,$.needsUpdate=!0;const P=S*4;for(let B=0;B<g;B++){const z=w[B],D=M[B],F=L[B],R=E*I*4*B;for(let K=0;K<z.count;K++){const J=K*P;x===!0&&(o.fromBufferAttribute(z,K),U[R+J+0]=o.x,U[R+J+1]=o.y,U[R+J+2]=o.z,U[R+J+3]=0),y===!0&&(o.fromBufferAttribute(D,K),U[R+J+4]=o.x,U[R+J+5]=o.y,U[R+J+6]=o.z,U[R+J+7]=0),T===!0&&(o.fromBufferAttribute(F,K),U[R+J+8]=o.x,U[R+J+9]=o.y,U[R+J+10]=o.z,U[R+J+11]=F.itemSize===4?o.w:1)}}m={count:g,texture:$,size:new Ze(E,I)},s.set(c,m),c.addEventListener("dispose",O)}let d=0;for(let x=0;x<h.length;x++)d+=h[x];const v=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[c.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<_;y++){const T=g[y];T[0]=y,T[1]=h[y]}g.sort(zL);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(kL);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],M=T[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),d&&c.getAttribute("morphNormal"+y)!==d[w]&&c.setAttribute("morphNormal"+y,d[w]),r[y]=M,v+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),d&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function HL(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class f1 extends ui{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:bo,c!==bo&&c!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===bo&&(i=Ms),i===void 0&&c===al&&(i=Ro),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const h1=new ui,d1=new f1(1,1);d1.compareFunction=ZE;const p1=new t1,m1=new Ab,g1=new a1,Ex=[],Tx=[],wx=new Float32Array(16),Ax=new Float32Array(9),Cx=new Float32Array(4);function pl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ex[r];if(s===void 0&&(s=new Float32Array(r),Ex[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zh(n,e){let t=Tx[e];t===void 0&&(t=new Int32Array(e),Tx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function VL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function WL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function XL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function YL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Cx.set(i),n.uniformMatrix2fv(this.addr,!1,Cx),rn(t,i)}}function jL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ax.set(i),n.uniformMatrix3fv(this.addr,!1,Ax),rn(t,i)}}function qL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;wx.set(i),n.uniformMatrix4fv(this.addr,!1,wx),rn(t,i)}}function $L(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function KL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function ZL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function QL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function JL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function tD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function nD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function iD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?d1:h1;t.setTexture2D(e||s,r)}function rD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||m1,r)}function sD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||g1,r)}function oD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||p1,r)}function aD(n){switch(n){case 5126:return VL;case 35664:return GL;case 35665:return WL;case 35666:return XL;case 35674:return YL;case 35675:return jL;case 35676:return qL;case 5124:case 35670:return $L;case 35667:case 35671:return KL;case 35668:case 35672:return ZL;case 35669:case 35673:return QL;case 5125:return JL;case 36294:return eD;case 36295:return tD;case 36296:return nD;case 35678:case 36198:case 36298:case 36306:case 35682:return iD;case 35679:case 36299:case 36307:return rD;case 35680:case 36300:case 36308:case 36293:return sD;case 36289:case 36303:case 36311:case 36292:return oD}}function lD(n,e){n.uniform1fv(this.addr,e)}function uD(n,e){const t=pl(e,this.size,2);n.uniform2fv(this.addr,t)}function cD(n,e){const t=pl(e,this.size,3);n.uniform3fv(this.addr,t)}function fD(n,e){const t=pl(e,this.size,4);n.uniform4fv(this.addr,t)}function hD(n,e){const t=pl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dD(n,e){const t=pl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pD(n,e){const t=pl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mD(n,e){n.uniform1iv(this.addr,e)}function gD(n,e){n.uniform2iv(this.addr,e)}function _D(n,e){n.uniform3iv(this.addr,e)}function vD(n,e){n.uniform4iv(this.addr,e)}function xD(n,e){n.uniform1uiv(this.addr,e)}function yD(n,e){n.uniform2uiv(this.addr,e)}function SD(n,e){n.uniform3uiv(this.addr,e)}function MD(n,e){n.uniform4uiv(this.addr,e)}function ED(n,e,t){const i=this.cache,r=e.length,s=zh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||h1,s[o])}function TD(n,e,t){const i=this.cache,r=e.length,s=zh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||m1,s[o])}function wD(n,e,t){const i=this.cache,r=e.length,s=zh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||g1,s[o])}function AD(n,e,t){const i=this.cache,r=e.length,s=zh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||p1,s[o])}function CD(n){switch(n){case 5126:return lD;case 35664:return uD;case 35665:return cD;case 35666:return fD;case 35674:return hD;case 35675:return dD;case 35676:return pD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return _D;case 35669:case 35673:return vD;case 5125:return xD;case 36294:return yD;case 36295:return SD;case 36296:return MD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return AD}}class RD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aD(t.type)}}class bD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CD(t.type)}}class PD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const sp=/(\w+)(\])?(\[|\.)?/g;function Rx(n,e){n.seq.push(e),n.map[e.id]=e}function LD(n,e,t){const i=n.name,r=i.length;for(sp.lastIndex=0;;){const s=sp.exec(i),o=sp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Rx(t,u===void 0?new RD(a,n,e):new bD(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new PD(a),Rx(t,f)),t=f}}}class Tf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);LD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function bx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const DD=37297;let UD=0;function ND(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ID(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===ch&&t===uh?i="LinearDisplayP3ToLinearSRGB":e===uh&&t===ch&&(i="LinearSRGBToLinearDisplayP3"),n){case ts:case Oh:return[i,"LinearTransferOETF"];case pn:case d_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Px(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ND(n.getShaderSource(e),o)}else return r}function OD(n,e){const t=ID(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function FD(n,e){let t;switch(e){case $R:t="Linear";break;case KR:t="Reinhard";break;case ZR:t="OptimizedCineon";break;case HE:t="ACESFilmic";break;case JR:t="AgX";break;case QR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kD(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pa).join(`
`)}function zD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pa).join(`
`)}function BD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function HD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pa(n){return n!==""}function Lx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VD=/^[ \t]*#include +<([\w\d./]+)>/gm;function km(n){return n.replace(VD,WD)}const GD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WD(n,e){let t=Je[e];if(t===void 0){const i=GD.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return km(t)}const XD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ux(n){return n.replace(XD,YD)}function YD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ER?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nr&&(e="SHADOWMAP_TYPE_VSM"),e}function qD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sl:case ol:e="ENVMAP_TYPE_CUBE";break;case Ih:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $D(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ol:e="ENVMAP_MODE_REFRACTION";break}return e}function KD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case BE:e="ENVMAP_BLENDING_MULTIPLY";break;case jR:e="ENVMAP_BLENDING_MIX";break;case qR:e="ENVMAP_BLENDING_ADD";break}return e}function ZD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function QD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jD(t),u=qD(t),c=$D(t),f=KD(t),h=ZD(t),p=t.isWebGL2?"":kD(t),_=zD(t),g=BD(s),m=r.createProgram();let d,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pa).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pa).join(`
`),v.length>0&&(v+=`
`)):(d=[Nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),v=[p,Nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?Je.tonemapping_pars_fragment:"",t.toneMapping!==Is?FD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,OD("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),o=km(o),o=Lx(o,t),o=Dx(o,t),a=km(a),a=Lx(a,t),a=Dx(a,t),o=Ux(o),a=Ux(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+d+o,T=x+v+a,w=bx(r,r.VERTEX_SHADER,y),M=bx(r,r.FRAGMENT_SHADER,T);r.attachShader(m,w),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(U){if(n.debug.checkShaderErrors){const $=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(M).trim();let B=!0,z=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,M);else{const D=Px(r,w,"vertex"),F=Px(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+$+`
`+D+`
`+F)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(P===""||O==="")&&(z=!1);z&&(U.diagnostics={runnable:B,programLog:$,vertexShader:{log:P,prefix:d},fragmentShader:{log:O,prefix:v}})}r.deleteShader(w),r.deleteShader(M),S=new Tf(r,m),E=HD(r,m)}let S;this.getUniforms=function(){return S===void 0&&L(this),S};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,DD)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=M,this}let JD=0;class e3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new t3(e),t.set(e,i)),i}}class t3{constructor(e){this.id=JD++,this.code=e,this.usedTimes=0}}function n3(n,e,t,i,r,s,o){const a=new m_,l=new e3,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,E,I,U,$){const P=U.fog,O=$.geometry,B=S.isMeshStandardMaterial?U.environment:null,z=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),D=z&&z.mapping===Ih?z.image.height:null,F=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const R=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,K=R!==void 0?R.length:0;let J=0;O.morphAttributes.position!==void 0&&(J=1),O.morphAttributes.normal!==void 0&&(J=2),O.morphAttributes.color!==void 0&&(J=3);let q,Z,re,se;if(F){const Ae=_r[F];q=Ae.vertexShader,Z=Ae.fragmentShader}else q=S.vertexShader,Z=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const ce=n.getRenderTarget(),_e=$.isInstancedMesh===!0,Re=$.isBatchedMesh===!0,we=!!S.map,ke=!!S.matcap,V=!!z,Ge=!!S.aoMap,ve=!!S.lightMap,Ue=!!S.bumpMap,xe=!!S.normalMap,G=!!S.displacementMap,Oe=!!S.emissiveMap,b=!!S.metalnessMap,A=!!S.roughnessMap,H=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,ie=S.sheen>0,ge=S.transmission>0,fe=H&&!!S.anisotropyMap,Q=ne&&!!S.clearcoatMap,ye=ne&&!!S.clearcoatNormalMap,Ee=ne&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,at=te&&!!S.iridescenceThicknessMap,Ne=ie&&!!S.sheenColorMap,je=ie&&!!S.sheenRoughnessMap,Me=!!S.specularMap,Se=!!S.specularColorMap,Ye=!!S.specularIntensityMap,De=ge&&!!S.transmissionMap,ct=ge&&!!S.thicknessMap,pe=!!S.gradientMap,ae=!!S.alphaMap,N=S.alphaTest>0,le=!!S.alphaHash,he=!!S.extensions,He=!!O.attributes.uv1,ze=!!O.attributes.uv2,lt=!!O.attributes.uv3;let ht=Is;return S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ht=n.toneMapping),{isWebGL2:c,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:Z,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Re,instancing:_e,instancingColor:_e&&$.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ts,map:we,matcap:ke,envMap:V,envMapMode:V&&z.mapping,envMapCubeUVHeight:D,aoMap:Ge,lightMap:ve,bumpMap:Ue,normalMap:xe,displacementMap:h&&G,emissiveMap:Oe,normalMapObjectSpace:xe&&S.normalMapType===hb,normalMapTangentSpace:xe&&S.normalMapType===fb,metalnessMap:b,roughnessMap:A,anisotropy:H,anisotropyMap:fe,clearcoat:ne,clearcoatMap:Q,clearcoatNormalMap:ye,clearcoatRoughnessMap:Ee,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:at,sheen:ie,sheenColorMap:Ne,sheenRoughnessMap:je,specularMap:Me,specularColorMap:Se,specularIntensityMap:Ye,transmission:ge,transmissionMap:De,thicknessMap:ct,gradientMap:pe,opaque:S.transparent===!1&&S.blending===Wa,alphaMap:ae,alphaTest:N,alphaHash:le,combine:S.combine,mapUv:we&&g(S.map.channel),aoMapUv:Ge&&g(S.aoMap.channel),lightMapUv:ve&&g(S.lightMap.channel),bumpMapUv:Ue&&g(S.bumpMap.channel),normalMapUv:xe&&g(S.normalMap.channel),displacementMapUv:G&&g(S.displacementMap.channel),emissiveMapUv:Oe&&g(S.emissiveMap.channel),metalnessMapUv:b&&g(S.metalnessMap.channel),roughnessMapUv:A&&g(S.roughnessMap.channel),anisotropyMapUv:fe&&g(S.anisotropyMap.channel),clearcoatMapUv:Q&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&g(S.sheenRoughnessMap.channel),specularMapUv:Me&&g(S.specularMap.channel),specularColorMapUv:Se&&g(S.specularColorMap.channel),specularIntensityMapUv:Ye&&g(S.specularIntensityMap.channel),transmissionMapUv:De&&g(S.transmissionMap.channel),thicknessMapUv:ct&&g(S.thicknessMap.channel),alphaMapUv:ae&&g(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:He,vertexUv2s:ze,vertexUv3s:lt,pointsUvs:$.isPoints===!0&&!!O.attributes.uv&&(we||ae),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:J,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,useLegacyLights:n._useLegacyLights,decodeVideoTexture:we&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vi,flipSided:S.side===li,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=_[S.type];let I;if(E){const U=_r[E];I=dh.clone(U.uniforms)}else I=S.uniforms;return I}function T(S,E){let I;for(let U=0,$=u.length;U<$;U++){const P=u[U];if(P.cacheKey===E){I=P,++I.usedTimes;break}}return I===void 0&&(I=new QD(n,E,S,s),u.push(I)),I}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:L}}function i3(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function r3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ox(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,g,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function a(f,h,p,_,g,m){const d=o(f,h,p,_,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,g,m){const d=o(f,h,p,_,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||r3),i.length>1&&i.sort(h||Ix),r.length>1&&r.sort(h||Ix)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function s3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ox,n.set(i,[o])):r>=s.length?(o=new Ox,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function o3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new st};break;case"SpotLight":t={position:new X,direction:new X,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function a3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let l3=0;function u3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function c3(n,e){const t=new o3,i=a3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const s=new X,o=new fn,a=new fn;function l(c,f){let h=0,p=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let g=0,m=0,d=0,v=0,x=0,y=0,T=0,w=0,M=0,L=0,S=0;c.sort(u3);const E=f===!0?Math.PI:1;for(let U=0,$=c.length;U<$;U++){const P=c[U],O=P.color,B=P.intensity,z=P.distance,D=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=O.r*B*E,p+=O.g*B*E,_+=O.b*B*E;else if(P.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(P.sh.coefficients[F],B);S++}else if(P.isDirectionalLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const R=P.shadow,K=i.get(P);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.directionalShadow[g]=K,r.directionalShadowMap[g]=D,r.directionalShadowMatrix[g]=P.shadow.matrix,y++}r.directional[g]=F,g++}else if(P.isSpotLight){const F=t.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(O).multiplyScalar(B*E),F.distance=z,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,r.spot[d]=F;const R=P.shadow;if(P.map&&(r.spotLightMap[M]=P.map,M++,R.updateMatrices(P),P.castShadow&&L++),r.spotLightMatrix[d]=R.matrix,P.castShadow){const K=i.get(P);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.spotShadow[d]=K,r.spotShadowMap[d]=D,w++}d++}else if(P.isRectAreaLight){const F=t.get(P);F.color.copy(O).multiplyScalar(B),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),r.rectArea[v]=F,v++}else if(P.isPointLight){const F=t.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity*E),F.distance=P.distance,F.decay=P.decay,P.castShadow){const R=P.shadow,K=i.get(P);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=P.shadow.matrix,T++}r.point[m]=F,m++}else if(P.isHemisphereLight){const F=t.get(P);F.skyColor.copy(P.color).multiplyScalar(B*E),F.groundColor.copy(P.groundColor).multiplyScalar(B*E),r.hemi[x]=F,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==g||I.pointLength!==m||I.spotLength!==d||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==M||I.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+M-L,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=S,I.directionalLength=g,I.pointLength=m,I.spotLength=d,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=M,I.numLightProbes=S,r.version=l3++)}function u(c,f){let h=0,p=0,_=0,g=0,m=0;const d=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(y.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),_++}else if(y.isRectAreaLight){const T=r.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Fx(n,e){const t=new c3(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function f3(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Fx(n,e),t.set(s,[l])):o>=a.length?(l=new Fx(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class h3 extends Zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d3 extends Zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function g3(n,e,t){let i=new l1;const r=new Ze,s=new Ze,o=new gn,a=new h3({depthPacking:cb}),l=new d3,u={},c=t.maxTextureSize,f={[Gs]:li,[li]:Gs,[Vi]:Vi},h=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:p3,fragmentShader:m3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new fi;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ai(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zE;let d=this.type;this.render=function(w,M,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(qr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const $=d!==Nr&&this.type===Nr,P=d===Nr&&this.type!==Nr;for(let O=0,B=w.length;O<B;O++){const z=w[O],D=z.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||$===!0||P===!0){const K=this.type!==Nr?{minFilter:Bn,magFilter:Bn}:{};D.map!==null&&D.map.dispose(),D.map=new Ki(r.x,r.y,K),D.map.texture.name=z.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const R=D.getViewportCount();for(let K=0;K<R;K++){const J=D.getViewport(K);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),U.viewport(o),D.updateMatrices(z,K),i=D.getFrustum(),y(M,L,D.camera,z,this.type)}D.isPointLightShadow!==!0&&this.type===Nr&&v(D,L),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,I)};function v(w,M){const L=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ki(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,L,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,L,p,g,null)}function x(w,M,L,S){let E=null;const I=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)E=I;else if(E=L.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=E.uuid,$=M.uuid;let P=u[U];P===void 0&&(P={},u[U]=P);let O=P[$];O===void 0&&(O=E.clone(),P[$]=O,M.addEventListener("dispose",T)),E=O}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Nr?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:f[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=L}return E}function y(w,M,L,S,E){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Nr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const $=e.update(w),P=w.material;if(Array.isArray(P)){const O=$.groups;for(let B=0,z=O.length;B<z;B++){const D=O[B],F=P[D.materialIndex];if(F&&F.visible){const R=x(w,F,S,E);w.onBeforeShadow(n,w,M,L,$,R,D),n.renderBufferDirect(L,null,$,R,w,D),w.onAfterShadow(n,w,M,L,$,R,D)}}}else if(P.visible){const O=x(w,P,S,E);w.onBeforeShadow(n,w,M,L,$,O,null),n.renderBufferDirect(L,null,$,O,w,null),w.onAfterShadow(n,w,M,L,$,O,null)}}const U=w.children;for(let $=0,P=U.length;$<P;$++)y(U[$],M,L,S,E)}function T(w){w.target.removeEventListener("dispose",T);for(const L in u){const S=u[L],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function _3(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const le=new gn;let he=null;const He=new gn(0,0,0,0);return{setMask:function(ze){he!==ze&&!N&&(n.colorMask(ze,ze,ze,ze),he=ze)},setLocked:function(ze){N=ze},setClear:function(ze,lt,ht,Le,Ae){Ae===!0&&(ze*=Le,lt*=Le,ht*=Le),le.set(ze,lt,ht,Le),He.equals(le)===!1&&(n.clearColor(ze,lt,ht,Le),He.copy(le))},reset:function(){N=!1,he=null,He.set(-1,0,0,0)}}}function s(){let N=!1,le=null,he=null,He=null;return{setTest:function(ze){ze?Re(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ze){le!==ze&&!N&&(n.depthMask(ze),le=ze)},setFunc:function(ze){if(he!==ze){switch(ze){case BR:n.depthFunc(n.NEVER);break;case HR:n.depthFunc(n.ALWAYS);break;case VR:n.depthFunc(n.LESS);break;case ah:n.depthFunc(n.LEQUAL);break;case GR:n.depthFunc(n.EQUAL);break;case WR:n.depthFunc(n.GEQUAL);break;case XR:n.depthFunc(n.GREATER);break;case YR:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=ze}},setLocked:function(ze){N=ze},setClear:function(ze){He!==ze&&(n.clearDepth(ze),He=ze)},reset:function(){N=!1,le=null,he=null,He=null}}}function o(){let N=!1,le=null,he=null,He=null,ze=null,lt=null,ht=null,Le=null,Ae=null;return{setTest:function(Fe){N||(Fe?Re(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(Fe){le!==Fe&&!N&&(n.stencilMask(Fe),le=Fe)},setFunc:function(Fe,ue,Ve){(he!==Fe||He!==ue||ze!==Ve)&&(n.stencilFunc(Fe,ue,Ve),he=Fe,He=ue,ze=Ve)},setOp:function(Fe,ue,Ve){(lt!==Fe||ht!==ue||Le!==Ve)&&(n.stencilOp(Fe,ue,Ve),lt=Fe,ht=ue,Le=Ve)},setLocked:function(Fe){N=Fe},setClear:function(Fe){Ae!==Fe&&(n.clearStencil(Fe),Ae=Fe)},reset:function(){N=!1,le=null,he=null,He=null,ze=null,lt=null,ht=null,Le=null,Ae=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,d=!1,v=null,x=null,y=null,T=null,w=null,M=null,L=null,S=new st(0,0,0),E=0,I=!1,U=null,$=null,P=null,O=null,B=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(R)[1]),D=F>=1):R.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),D=F>=2);let K=null,J={};const q=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),re=new gn().fromArray(q),se=new gn().fromArray(Z);function ce(N,le,he,He){const ze=new Uint8Array(4),lt=n.createTexture();n.bindTexture(N,lt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ht=0;ht<he;ht++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,He,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(le+ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return lt}const _e={};_e[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(n.DEPTH_TEST),l.setFunc(ah),Oe(!1),b(xv),Re(n.CULL_FACE),xe(qr);function Re(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function we(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function ke(N,le){return p[N]!==le?(n.bindFramebuffer(N,le),p[N]=le,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function V(N,le){let he=g,He=!1;if(N)if(he=_.get(le),he===void 0&&(he=[],_.set(le,he)),N.isWebGLMultipleRenderTargets){const ze=N.texture;if(he.length!==ze.length||he[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,ht=ze.length;lt<ht;lt++)he[lt]=n.COLOR_ATTACHMENT0+lt;he.length=ze.length,He=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,He=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,He=!0);He&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Ge(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const ve={[lo]:n.FUNC_ADD,[wR]:n.FUNC_SUBTRACT,[AR]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[Mv]=n.MIN,ve[Ev]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(ve[Mv]=N.MIN_EXT,ve[Ev]=N.MAX_EXT)}const Ue={[CR]:n.ZERO,[RR]:n.ONE,[bR]:n.SRC_COLOR,[bm]:n.SRC_ALPHA,[IR]:n.SRC_ALPHA_SATURATE,[UR]:n.DST_COLOR,[LR]:n.DST_ALPHA,[PR]:n.ONE_MINUS_SRC_COLOR,[Pm]:n.ONE_MINUS_SRC_ALPHA,[NR]:n.ONE_MINUS_DST_COLOR,[DR]:n.ONE_MINUS_DST_ALPHA,[OR]:n.CONSTANT_COLOR,[FR]:n.ONE_MINUS_CONSTANT_COLOR,[kR]:n.CONSTANT_ALPHA,[zR]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(N,le,he,He,ze,lt,ht,Le,Ae,Fe){if(N===qr){d===!0&&(we(n.BLEND),d=!1);return}if(d===!1&&(Re(n.BLEND),d=!0),N!==TR){if(N!==v||Fe!==I){if((x!==lo||w!==lo)&&(n.blendEquation(n.FUNC_ADD),x=lo,w=lo),Fe)switch(N){case Wa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zr:n.blendFunc(n.ONE,n.ONE);break;case yv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,T=null,M=null,L=null,S.set(0,0,0),E=0,v=N,I=Fe}return}ze=ze||le,lt=lt||he,ht=ht||He,(le!==x||ze!==w)&&(n.blendEquationSeparate(ve[le],ve[ze]),x=le,w=ze),(he!==y||He!==T||lt!==M||ht!==L)&&(n.blendFuncSeparate(Ue[he],Ue[He],Ue[lt],Ue[ht]),y=he,T=He,M=lt,L=ht),(Le.equals(S)===!1||Ae!==E)&&(n.blendColor(Le.r,Le.g,Le.b,Ae),S.copy(Le),E=Ae),v=N,I=!1}function G(N,le){N.side===Vi?we(n.CULL_FACE):Re(n.CULL_FACE);let he=N.side===li;le&&(he=!he),Oe(he),N.blending===Wa&&N.transparent===!1?xe(qr):xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const He=N.stencilWrite;u.setTest(He),He&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),H(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(N){U!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),U=N)}function b(N){N!==SR?(Re(n.CULL_FACE),N!==$&&(N===xv?n.cullFace(n.BACK):N===MR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),$=N}function A(N){N!==P&&(D&&n.lineWidth(N),P=N)}function H(N,le,he){N?(Re(n.POLYGON_OFFSET_FILL),(O!==le||B!==he)&&(n.polygonOffset(le,he),O=le,B=he)):we(n.POLYGON_OFFSET_FILL)}function ne(N){N?Re(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function te(N){N===void 0&&(N=n.TEXTURE0+z-1),K!==N&&(n.activeTexture(N),K=N)}function ie(N,le,he){he===void 0&&(K===null?he=n.TEXTURE0+z-1:he=K);let He=J[he];He===void 0&&(He={type:void 0,texture:void 0},J[he]=He),(He.type!==N||He.texture!==le)&&(K!==he&&(n.activeTexture(he),K=he),n.bindTexture(N,le||_e[N]),He.type=N,He.texture=le)}function ge(){const N=J[K];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(N){re.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),re.copy(N))}function De(N){se.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),se.copy(N))}function ct(N,le){let he=f.get(le);he===void 0&&(he=new WeakMap,f.set(le,he));let He=he.get(N);He===void 0&&(He=n.getUniformBlockIndex(le,N.name),he.set(N,He))}function pe(N,le){const He=f.get(le).get(N);c.get(le)!==He&&(n.uniformBlockBinding(le,He,N.__bindingPointIndex),c.set(le,He))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,J={},p={},_=new WeakMap,g=[],m=null,d=!1,v=null,x=null,y=null,T=null,w=null,M=null,L=null,S=new st(0,0,0),E=0,I=!1,U=null,$=null,P=null,O=null,B=null,re.set(0,0,n.canvas.width,n.canvas.height),se.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Re,disable:we,bindFramebuffer:ke,drawBuffers:V,useProgram:Ge,setBlending:xe,setMaterial:G,setFlipSided:Oe,setCullFace:b,setLineWidth:A,setPolygonOffset:H,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:ge,compressedTexImage2D:fe,compressedTexImage3D:Q,texImage2D:Me,texImage3D:Se,updateUBOMapping:ct,uniformBlockBinding:pe,texStorage2D:Ne,texStorage3D:je,texSubImage2D:ye,texSubImage3D:Ee,compressedTexSubImage2D:ee,compressedTexSubImage3D:at,scissor:Ye,viewport:De,reset:ae}}function v3(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,A){return p?new OffscreenCanvas(b,A):hh("canvas")}function g(b,A,H,ne){let te=1;if((b.width>ne||b.height>ne)&&(te=ne/Math.max(b.width,b.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=A?Fm:Math.floor,ge=ie(te*b.width),fe=ie(te*b.height);f===void 0&&(f=_(ge,fe));const Q=H?_(ge,fe):f;return Q.width=ge,Q.height=fe,Q.getContext("2d").drawImage(b,0,0,ge,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+fe+")."),Q}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Jv(b.width)&&Jv(b.height)}function d(b){return a?!1:b.wrapS!==lr||b.wrapT!==lr||b.minFilter!==Bn&&b.minFilter!==Zn}function v(b,A){return b.generateMipmaps&&A&&b.minFilter!==Bn&&b.minFilter!==Zn}function x(b){n.generateMipmap(b)}function y(b,A,H,ne,te=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=A;if(A===n.RED&&(H===n.FLOAT&&(ie=n.R32F),H===n.HALF_FLOAT&&(ie=n.R16F),H===n.UNSIGNED_BYTE&&(ie=n.R8)),A===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ie=n.R8UI),H===n.UNSIGNED_SHORT&&(ie=n.R16UI),H===n.UNSIGNED_INT&&(ie=n.R32UI),H===n.BYTE&&(ie=n.R8I),H===n.SHORT&&(ie=n.R16I),H===n.INT&&(ie=n.R32I)),A===n.RG&&(H===n.FLOAT&&(ie=n.RG32F),H===n.HALF_FLOAT&&(ie=n.RG16F),H===n.UNSIGNED_BYTE&&(ie=n.RG8)),A===n.RGBA){const ge=te?lh:yt.getTransfer(ne);H===n.FLOAT&&(ie=n.RGBA32F),H===n.HALF_FLOAT&&(ie=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ie=ge===Rt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(b,A,H){return v(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==Bn&&b.minFilter!==Zn?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function w(b){return b===Bn||b===Tv||b===Pd?n.NEAREST:n.LINEAR}function M(b){const A=b.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function L(b){const A=b.target;A.removeEventListener("dispose",L),I(A)}function S(b){const A=i.get(b);if(A.__webglInit===void 0)return;const H=b.source,ne=h.get(H);if(ne){const te=ne[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(ne).length===0&&h.delete(H)}i.remove(b)}function E(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const H=b.source,ne=h.get(H);delete ne[A.__cacheKey],o.memory.textures--}function I(b){const A=b.texture,H=i.get(b),ne=i.get(A);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let ie=0;ie<H.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(H.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)n.deleteFramebuffer(H.__webglFramebuffer[te]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,ie=A.length;te<ie;te++){const ge=i.get(A[te]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(b)}let U=0;function $(){U=0}function P(){const b=U;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b}function O(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function B(b,A){const H=i.get(b);if(b.isVideoTexture&&G(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(H,b,A);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+A)}function z(b,A){const H=i.get(b);if(b.version>0&&H.__version!==b.version){re(H,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+A)}function D(b,A){const H=i.get(b);if(b.version>0&&H.__version!==b.version){re(H,b,A);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+A)}function F(b,A){const H=i.get(b);if(b.version>0&&H.__version!==b.version){se(H,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+A)}const R={[Um]:n.REPEAT,[lr]:n.CLAMP_TO_EDGE,[Nm]:n.MIRRORED_REPEAT},K={[Bn]:n.NEAREST,[Tv]:n.NEAREST_MIPMAP_NEAREST,[Pd]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[eb]:n.LINEAR_MIPMAP_NEAREST,[Bu]:n.LINEAR_MIPMAP_LINEAR},J={[db]:n.NEVER,[xb]:n.ALWAYS,[pb]:n.LESS,[ZE]:n.LEQUAL,[mb]:n.EQUAL,[vb]:n.GEQUAL,[gb]:n.GREATER,[_b]:n.NOTEQUAL};function q(b,A,H){if(H?(n.texParameteri(b,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,R[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==lr||A.wrapT!==lr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Bn&&A.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Bn||A.minFilter!==Pd&&A.minFilter!==Bu||A.type===Es&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Z(b,A){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",M));const ne=A.source;let te=h.get(ne);te===void 0&&(te={},h.set(ne,te));const ie=O(A);if(ie!==b.__cacheKey){te[ie]===void 0&&(te[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[ie].usedTimes++;const ge=te[b.__cacheKey];ge!==void 0&&(te[b.__cacheKey].usedTimes--,ge.usedTimes===0&&E(A)),b.__cacheKey=ie,b.__webglTexture=te[ie].texture}return H}function re(b,A,H){let ne=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=n.TEXTURE_3D);const te=Z(b,A),ie=A.source;t.bindTexture(ne,b.__webglTexture,n.TEXTURE0+H);const ge=i.get(ie);if(ie.version!==ge.__version||te===!0){t.activeTexture(n.TEXTURE0+H);const fe=yt.getPrimaries(yt.workingColorSpace),Q=A.colorSpace===Wi?null:yt.getPrimaries(A.colorSpace),ye=A.colorSpace===Wi||fe===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ee=d(A)&&m(A.image)===!1;let ee=g(A.image,Ee,!1,r.maxTextureSize);ee=Oe(A,ee);const at=m(ee)||a,Ne=s.convert(A.format,A.colorSpace);let je=s.convert(A.type),Me=y(A.internalFormat,Ne,je,A.colorSpace,A.isVideoTexture);q(ne,A,at);let Se;const Ye=A.mipmaps,De=a&&A.isVideoTexture!==!0&&Me!==$E,ct=ge.__version===void 0||te===!0,pe=T(A,ee,at);if(A.isDepthTexture)Me=n.DEPTH_COMPONENT,a?A.type===Es?Me=n.DEPTH_COMPONENT32F:A.type===Ms?Me=n.DEPTH_COMPONENT24:A.type===Ro?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:A.type===Es&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===bo&&Me===n.DEPTH_COMPONENT&&A.type!==h_&&A.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ms,je=s.convert(A.type)),A.format===al&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,A.type!==Ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ro,je=s.convert(A.type))),ct&&(De?t.texStorage2D(n.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,Ne,je,null));else if(A.isDataTexture)if(Ye.length>0&&at){De&&ct&&t.texStorage2D(n.TEXTURE_2D,pe,Me,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)Se=Ye[ae],De?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,Ne,je,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Me,Se.width,Se.height,0,Ne,je,Se.data);A.generateMipmaps=!1}else De?(ct&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Ne,je,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Me,ee.width,ee.height,0,Ne,je,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){De&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,Ye[0].width,Ye[0].height,ee.depth);for(let ae=0,N=Ye.length;ae<N;ae++)Se=Ye[ae],A.format!==Gi?Ne!==null?De?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,ee.depth,Ne,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Me,Se.width,Se.height,ee.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,ee.depth,Ne,je,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Me,Se.width,Se.height,ee.depth,0,Ne,je,Se.data)}else{De&&ct&&t.texStorage2D(n.TEXTURE_2D,pe,Me,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)Se=Ye[ae],A.format!==Gi?Ne!==null?De?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,Ne,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Me,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,Ne,je,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Me,Se.width,Se.height,0,Ne,je,Se.data)}else if(A.isDataArrayTexture)De?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Me,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ne,je,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,Ne,je,ee.data);else if(A.isData3DTexture)De?(ct&&t.texStorage3D(n.TEXTURE_3D,pe,Me,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ne,je,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,Ne,je,ee.data);else if(A.isFramebufferTexture){if(ct)if(De)t.texStorage2D(n.TEXTURE_2D,pe,Me,ee.width,ee.height);else{let ae=ee.width,N=ee.height;for(let le=0;le<pe;le++)t.texImage2D(n.TEXTURE_2D,le,Me,ae,N,0,Ne,je,null),ae>>=1,N>>=1}}else if(Ye.length>0&&at){De&&ct&&t.texStorage2D(n.TEXTURE_2D,pe,Me,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)Se=Ye[ae],De?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ne,je,Se):t.texImage2D(n.TEXTURE_2D,ae,Me,Ne,je,Se);A.generateMipmaps=!1}else De?(ct&&t.texStorage2D(n.TEXTURE_2D,pe,Me,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,je,ee)):t.texImage2D(n.TEXTURE_2D,0,Me,Ne,je,ee);v(A,at)&&x(ne),ge.__version=ie.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function se(b,A,H){if(A.image.length!==6)return;const ne=Z(b,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+H);const ie=i.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const ge=yt.getPrimaries(yt.workingColorSpace),fe=A.colorSpace===Wi?null:yt.getPrimaries(A.colorSpace),Q=A.colorSpace===Wi||ge===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ye=A.isCompressedTexture||A.image[0].isCompressedTexture,Ee=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let ae=0;ae<6;ae++)!ye&&!Ee?ee[ae]=g(A.image[ae],!1,!0,r.maxCubemapSize):ee[ae]=Ee?A.image[ae].image:A.image[ae],ee[ae]=Oe(A,ee[ae]);const at=ee[0],Ne=m(at)||a,je=s.convert(A.format,A.colorSpace),Me=s.convert(A.type),Se=y(A.internalFormat,je,Me,A.colorSpace),Ye=a&&A.isVideoTexture!==!0,De=ie.__version===void 0||ne===!0;let ct=T(A,at,Ne);q(n.TEXTURE_CUBE_MAP,A,Ne);let pe;if(ye){Ye&&De&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Se,at.width,at.height);for(let ae=0;ae<6;ae++){pe=ee[ae].mipmaps;for(let N=0;N<pe.length;N++){const le=pe[N];A.format!==Gi?je!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,le.width,le.height,je,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,Se,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,le.width,le.height,je,Me,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,Se,le.width,le.height,0,je,Me,le.data)}}}else{pe=A.mipmaps,Ye&&De&&(pe.length>0&&ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Se,ee[0].width,ee[0].height));for(let ae=0;ae<6;ae++)if(Ee){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ee[ae].width,ee[ae].height,je,Me,ee[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Se,ee[ae].width,ee[ae].height,0,je,Me,ee[ae].data);for(let N=0;N<pe.length;N++){const he=pe[N].image[ae].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,he.width,he.height,je,Me,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,Se,he.width,he.height,0,je,Me,he.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,je,Me,ee[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Se,je,Me,ee[ae]);for(let N=0;N<pe.length;N++){const le=pe[N];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,je,Me,le.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,Se,je,Me,le.image[ae])}}}v(A,Ne)&&x(n.TEXTURE_CUBE_MAP),ie.__version=te.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function ce(b,A,H,ne,te,ie){const ge=s.convert(H.format,H.colorSpace),fe=s.convert(H.type),Q=y(H.internalFormat,ge,fe,H.colorSpace);if(!i.get(A).__hasExternalTextures){const Ee=Math.max(1,A.width>>ie),ee=Math.max(1,A.height>>ie);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,Q,Ee,ee,A.depth,0,ge,fe,null):t.texImage2D(te,ie,Q,Ee,ee,0,ge,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(H).__webglTexture,0,Ue(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(H).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(b,A,H){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||xe(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===Es?ne=n.DEPTH_COMPONENT32F:te.type===Ms&&(ne=n.DEPTH_COMPONENT24));const ie=Ue(A);xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const ne=Ue(A);H&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],ge=s.convert(ie.format,ie.colorSpace),fe=s.convert(ie.type),Q=y(ie.internalFormat,ge,fe,ie.colorSpace),ye=Ue(A);H&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Q,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,Q,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Q,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const ne=i.get(A.depthTexture).__webglTexture,te=Ue(A);if(A.depthTexture.format===bo)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(A.depthTexture.format===al)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function we(b){const A=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Re(A.__webglFramebuffer,b)}else if(H){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=n.createRenderbuffer(),_e(A.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),_e(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(b,A,H){const ne=i.get(b);A!==void 0&&ce(ne.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&we(b)}function V(b){const A=b.texture,H=i.get(b),ne=i.get(A);b.addEventListener("dispose",L),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=A.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,ge=m(b)||a;if(te){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let Q=0;Q<A.mipmaps.length;Q++)H.__webglFramebuffer[fe][Q]=n.createFramebuffer()}else H.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<A.mipmaps.length;fe++)H.__webglFramebuffer[fe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const fe=b.texture;for(let Q=0,ye=fe.length;Q<ye;Q++){const Ee=i.get(fe[Q]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&xe(b)===!1){const fe=ie?A:[A];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<fe.length;Q++){const ye=fe[Q];H.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);const Ee=s.convert(ye.format,ye.colorSpace),ee=s.convert(ye.type),at=y(ye.internalFormat,Ee,ee,ye.colorSpace,b.isXRRenderTarget===!0),Ne=Ue(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,at,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,A,ge);for(let fe=0;fe<6;fe++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)ce(H.__webglFramebuffer[fe][Q],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Q);else ce(H.__webglFramebuffer[fe],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(A,ge)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const fe=b.texture;for(let Q=0,ye=fe.length;Q<ye;Q++){const Ee=fe[Q],ee=i.get(Ee);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),q(n.TEXTURE_2D,Ee,ge),ce(H.__webglFramebuffer,b,Ee,n.COLOR_ATTACHMENT0+Q,n.TEXTURE_2D,0),v(Ee,ge)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?fe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ne.__webglTexture),q(fe,A,ge),a&&A.mipmaps&&A.mipmaps.length>0)for(let Q=0;Q<A.mipmaps.length;Q++)ce(H.__webglFramebuffer[Q],b,A,n.COLOR_ATTACHMENT0,fe,Q);else ce(H.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,fe,0);v(A,ge)&&x(fe),t.unbindTexture()}b.depthBuffer&&we(b)}function Ge(b){const A=m(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,te=H.length;ne<te;ne++){const ie=H[ne];if(v(ie,A)){const ge=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(ie).__webglTexture;t.bindTexture(ge,fe),x(ge),t.unbindTexture()}}}function ve(b){if(a&&b.samples>0&&xe(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ne=b.height;let te=n.COLOR_BUFFER_BIT;const ie=[],ge=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(b),Q=b.isWebGLMultipleRenderTargets===!0;if(Q)for(let ye=0;ye<A.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ye=0;ye<A.length;ye++){ie.push(n.COLOR_ATTACHMENT0+ye),b.depthBuffer&&ie.push(ge);const Ee=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ee===!1&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),Q&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ye]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),Q){const ee=i.get(A[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let ye=0;ye<A.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ye]);const Ee=i.get(A[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ue(b){return Math.min(r.maxSamples,b.samples)}function xe(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function G(b){const A=o.render.frame;c.get(b)!==A&&(c.set(b,A),b.update())}function Oe(b,A){const H=b.colorSpace,ne=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Im||H!==ts&&H!==Wi&&(yt.getTransfer(H)===Rt?a===!1?e.has("EXT_sRGB")===!0&&ne===Gi?(b.format=Im,b.minFilter=Zn,b.generateMipmaps=!1):A=JE.sRGBToLinear(A):(ne!==Gi||te!==Os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=P,this.resetTextureUnits=$,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=ke,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=xe}function x3(n,e,t){const i=t.isWebGL2;function r(s,o=Wi){let a;const l=yt.getTransfer(o);if(s===Os)return n.UNSIGNED_BYTE;if(s===WE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===XE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===tb)return n.BYTE;if(s===nb)return n.SHORT;if(s===h_)return n.UNSIGNED_SHORT;if(s===GE)return n.INT;if(s===Ms)return n.UNSIGNED_INT;if(s===Es)return n.FLOAT;if(s===Ar)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ib)return n.ALPHA;if(s===Gi)return n.RGBA;if(s===rb)return n.LUMINANCE;if(s===sb)return n.LUMINANCE_ALPHA;if(s===bo)return n.DEPTH_COMPONENT;if(s===al)return n.DEPTH_STENCIL;if(s===Im)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ob)return n.RED;if(s===YE)return n.RED_INTEGER;if(s===ab)return n.RG;if(s===jE)return n.RG_INTEGER;if(s===qE)return n.RGBA_INTEGER;if(s===Ld||s===Dd||s===Ud||s===Nd)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ld)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ud)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ld)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ud)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wv||s===Av||s===Cv||s===Rv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Av)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$E)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bv||s===Pv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bv)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Pv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lv||s===Dv||s===Uv||s===Nv||s===Iv||s===Ov||s===Fv||s===kv||s===zv||s===Bv||s===Hv||s===Vv||s===Gv||s===Wv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Lv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Iv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ov)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Wv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Id||s===Xv||s===Yv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Id)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Xv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lb||s===jv||s===qv||s===$v)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Id)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===$v)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ro?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class y3 extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jc extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S3={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),d=this._getHandJoint(u,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class M3 extends dl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const g=t.getContextAttributes();let m=null,d=null;const v=[],x=[],y=new Ze;let T=null;const w=new Hi;w.layers.enable(1),w.viewport=new gn;const M=new Hi;M.layers.enable(2),M.viewport=new gn;const L=[w,M],S=new y3;S.layers.enable(1),S.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=v[q];return Z===void 0&&(Z=new op,v[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=v[q];return Z===void 0&&(Z=new op,v[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=v[q];return Z===void 0&&(Z=new op,v[q]=Z),Z.getHandSpace()};function U(q){const Z=x.indexOf(q.inputSource);if(Z===-1)return;const re=v[Z];re!==void 0&&(re.update(q.inputSource,q.frame,u||o),re.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",P);for(let q=0;q<v.length;q++){const Z=x[q];Z!==null&&(x[q]=null,v[q].disconnect(Z))}E=null,I=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,J.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",$),r.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Ki(p.framebufferWidth,p.framebufferHeight,{format:Gi,type:Os,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,re=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?al:bo,re=g.stencil?Ro:Ms);const ce={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ce),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Ki(h.textureWidth,h.textureHeight,{format:Gi,type:Os,depthTexture:new f1(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const _e=e.properties.get(d);_e.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),J.setContext(r),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(q){for(let Z=0;Z<q.removed.length;Z++){const re=q.removed[Z],se=x.indexOf(re);se>=0&&(x[se]=null,v[se].disconnect(re))}for(let Z=0;Z<q.added.length;Z++){const re=q.added[Z];let se=x.indexOf(re);if(se===-1){for(let _e=0;_e<v.length;_e++)if(_e>=x.length){x.push(re),se=_e;break}else if(x[_e]===null){x[_e]=re,se=_e;break}if(se===-1)break}const ce=v[se];ce&&ce.connect(re)}}const O=new X,B=new X;function z(q,Z,re){O.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);const se=O.distanceTo(B),ce=Z.projectionMatrix.elements,_e=re.projectionMatrix.elements,Re=ce[14]/(ce[10]-1),we=ce[14]/(ce[10]+1),ke=(ce[9]+1)/ce[5],V=(ce[9]-1)/ce[5],Ge=(ce[8]-1)/ce[0],ve=(_e[8]+1)/_e[0],Ue=Re*Ge,xe=Re*ve,G=se/(-Ge+ve),Oe=G*-Ge;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(G),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=Re+G,A=we+G,H=Ue-Oe,ne=xe+(se-Oe),te=ke*we/A*b,ie=V*we/A*b;q.projectionMatrix.makePerspective(H,ne,te,ie,b,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function D(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=M.near=w.near=q.near,S.far=M.far=w.far=q.far,(E!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,I=S.far);const Z=q.parent,re=S.cameras;D(S,Z);for(let se=0;se<re.length;se++)D(re[se],Z);re.length===2?z(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),F(q,S,Z)};function F(q,Z,re){re===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Om*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let R=null;function K(q,Z){if(c=Z.getViewerPose(u||o),_=Z,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let se=!1;re.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let ce=0;ce<re.length;ce++){const _e=re[ce];let Re=null;if(p!==null)Re=p.getViewport(_e);else{const ke=f.getViewSubImage(h,_e);Re=ke.viewport,ce===0&&(e.setRenderTargetTextures(d,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(d))}let we=L[ce];we===void 0&&(we=new Hi,we.layers.enable(ce),we.viewport=new gn,L[ce]=we),we.matrix.fromArray(_e.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(_e.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Re.x,Re.y,Re.width,Re.height),ce===0&&(S.matrix.copy(we.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(we)}}for(let re=0;re<v.length;re++){const se=x[re],ce=v[re];se!==null&&ce!==void 0&&ce.update(se,Z,u||o)}R&&R(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const J=new u1;J.setAnimationLoop(K),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}}function E3(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,s1(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===li&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===li&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===li&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function T3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=L.length;S<E;S++){const I=L[S];if(p(I,w,S,T)===!0){const U=I.__offset,$=Array.isArray(I.value)?I.value:[I.value];let P=0;for(let O=0;O<$.length;O++){const B=$[O],z=g(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,U+P,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,P),P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,T){const w=v.value,M=x+"_"+y;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const L=T[M];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return T[M]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(v){const x=v.uniforms;let y=0;const T=16;for(let M=0,L=x.length;M<L;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,I=S.length;E<I;E++){const U=S[E],$=Array.isArray(U.value)?U.value:[U.value];for(let P=0,O=$.length;P<O;P++){const B=$[P],z=g(B),D=y%T;D!==0&&T-D<z.boundary&&(y+=T-D),U.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=z.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class _1{constructor(e={}){const{canvas:t=Sb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this._useLegacyLights=!1,this.toneMapping=Is,this.toneMappingExposure=1;const x=this;let y=!1,T=0,w=0,M=null,L=-1,S=null;const E=new gn,I=new gn;let U=null;const $=new st(0);let P=0,O=t.width,B=t.height,z=1,D=null,F=null;const R=new gn(0,0,O,B),K=new gn(0,0,O,B);let J=!1;const q=new l1;let Z=!1,re=!1,se=null;const ce=new fn,_e=new Ze,Re=new X,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return M===null?z:1}let V=i;function Ge(C,k){for(let j=0;j<C.length;j++){const Y=C[j],W=t.getContext(Y,k);if(W!==null)return W}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${f_}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",le,!1),V===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),V=Ge(k,C),V===null)throw Ge(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ve,Ue,xe,G,Oe,b,A,H,ne,te,ie,ge,fe,Q,ye,Ee,ee,at,Ne,je,Me,Se,Ye,De;function ct(){ve=new NL(V),Ue=new RL(V,ve,e),ve.init(Ue),Se=new x3(V,ve,Ue),xe=new _3(V,ve,Ue),G=new FL(V),Oe=new i3,b=new v3(V,ve,xe,Oe,Ue,Se,G),A=new PL(x),H=new UL(x),ne=new Xb(V,Ue),Ye=new AL(V,ve,ne,Ue),te=new IL(V,ne,G,Ye),ie=new HL(V,te,ne,G),Ne=new BL(V,Ue,b),Ee=new bL(Oe),ge=new n3(x,A,H,ve,Ue,Ye,Ee),fe=new E3(x,Oe),Q=new s3,ye=new f3(ve,Ue),at=new wL(x,A,H,xe,ie,h,l),ee=new g3(x,ie,Ue),De=new T3(V,G,Ue,xe),je=new CL(V,ve,G,Ue),Me=new OL(V,ve,G,Ue),G.programs=ge.programs,x.capabilities=Ue,x.extensions=ve,x.properties=Oe,x.renderLists=Q,x.shadowMap=ee,x.state=xe,x.info=G}ct();const pe=new M3(x,V);this.xr=pe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ve.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ve.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(O,B,!1))},this.getSize=function(C){return C.set(O,B)},this.setSize=function(C,k,j=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,B=k,t.width=Math.floor(C*z),t.height=Math.floor(k*z),j===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(O*z,B*z).floor()},this.setDrawingBufferSize=function(C,k,j){O=C,B=k,z=j,t.width=Math.floor(C*j),t.height=Math.floor(k*j),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,k,j,Y){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,k,j,Y),xe.viewport(E.copy(R).multiplyScalar(z).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,k,j,Y){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,k,j,Y),xe.scissor(I.copy(K).multiplyScalar(z).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(C){xe.setScissorTest(J=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(C=!0,k=!0,j=!0){let Y=0;if(C){let W=!1;if(M!==null){const de=M.texture.format;W=de===qE||de===jE||de===YE}if(W){const de=M.texture.type,be=de===Os||de===Ms||de===h_||de===Ro||de===WE||de===XE,We=at.getClearColor(),Pe=at.getClearAlpha(),Ie=We.r,Xe=We.g,Ke=We.b;be?(p[0]=Ie,p[1]=Xe,p[2]=Ke,p[3]=Pe,V.clearBufferuiv(V.COLOR,0,p)):(_[0]=Ie,_[1]=Xe,_[2]=Ke,_[3]=Pe,V.clearBufferiv(V.COLOR,0,_))}else Y|=V.COLOR_BUFFER_BIT}k&&(Y|=V.DEPTH_BUFFER_BIT),j&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Q.dispose(),ye.dispose(),Oe.dispose(),A.dispose(),H.dispose(),ie.dispose(),Ye.dispose(),De.dispose(),ge.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ae),pe.removeEventListener("sessionend",Fe),se&&(se.dispose(),se=null),ue.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=G.autoReset,k=ee.enabled,j=ee.autoUpdate,Y=ee.needsUpdate,W=ee.type;ct(),G.autoReset=C,ee.enabled=k,ee.autoUpdate=j,ee.needsUpdate=Y,ee.type=W}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function he(C){const k=C.target;k.removeEventListener("dispose",he),He(k)}function He(C){ze(C),Oe.remove(C)}function ze(C){const k=Oe.get(C).programs;k!==void 0&&(k.forEach(function(j){ge.releaseProgram(j)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,j,Y,W,de){k===null&&(k=we);const be=W.isMesh&&W.matrixWorld.determinant()<0,We=Tt(C,k,j,Y,W);xe.setMaterial(Y,be);let Pe=j.index,Ie=1;if(Y.wireframe===!0){if(Pe=te.getWireframeAttribute(j),Pe===void 0)return;Ie=2}const Xe=j.drawRange,Ke=j.attributes.position;let Pt=Xe.start*Ie,Zt=(Xe.start+Xe.count)*Ie;de!==null&&(Pt=Math.max(Pt,de.start*Ie),Zt=Math.min(Zt,(de.start+de.count)*Ie)),Pe!==null?(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Pe.count)):Ke!=null&&(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Ke.count));const gt=Zt-Pt;if(gt<0||gt===1/0)return;Ye.setup(W,Y,We,j,Pe);let Dn,xt=je;if(Pe!==null&&(Dn=ne.get(Pe),xt=Me,xt.setIndex(Dn)),W.isMesh)Y.wireframe===!0?(xe.setLineWidth(Y.wireframeLinewidth*ke()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(W.isLine){let qe=Y.linewidth;qe===void 0&&(qe=1),xe.setLineWidth(qe*ke()),W.isLineSegments?xt.setMode(V.LINES):W.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else W.isPoints?xt.setMode(V.POINTS):W.isSprite&&xt.setMode(V.TRIANGLES);if(W.isBatchedMesh)xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)xt.renderInstances(Pt,gt,W.count);else if(j.isInstancedBufferGeometry){const qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Bh=Math.min(j.instanceCount,qe);xt.renderInstances(Pt,gt,Bh)}else xt.render(Pt,gt)};function lt(C,k,j){C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=li,C.needsUpdate=!0,Et(C,k,j),C.side=Gs,C.needsUpdate=!0,Et(C,k,j),C.side=Vi):Et(C,k,j)}this.compile=function(C,k,j=null){j===null&&(j=C),m=ye.get(j),m.init(),v.push(m),j.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==j&&C.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);const Y=new Set;return C.traverse(function(W){const de=W.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const We=de[be];lt(We,j,W),Y.add(We)}else lt(de,j,W),Y.add(de)}),v.pop(),m=null,Y},this.compileAsync=function(C,k,j=null){const Y=this.compile(C,k,j);return new Promise(W=>{function de(){if(Y.forEach(function(be){Oe.get(be).currentProgram.isReady()&&Y.delete(be)}),Y.size===0){W(C);return}setTimeout(de,10)}ve.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ht=null;function Le(C){ht&&ht(C)}function Ae(){ue.stop()}function Fe(){ue.start()}const ue=new u1;ue.setAnimationLoop(Le),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(C){ht=C,pe.setAnimationLoop(C),C===null?ue.stop():ue.start()},pe.addEventListener("sessionstart",Ae),pe.addEventListener("sessionend",Fe),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(k),k=pe.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,M),m=ye.get(C,v.length),m.init(),v.push(m),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(ce),re=this.localClippingEnabled,Z=Ee.init(this.clippingPlanes,re),g=Q.get(C,d.length),g.init(),d.push(g),Ve(C,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(D,F),this.info.render.frame++,Z===!0&&Ee.beginShadows();const j=m.state.shadowsArray;if(ee.render(j,C,k),Z===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(g,C),m.setupLights(x._useLegacyLights),k.isArrayCamera){const Y=k.cameras;for(let W=0,de=Y.length;W<de;W++){const be=Y[W];Be(g,C,be,be.viewport)}}else Be(g,C,k);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,k),Ye.resetDefaultState(),L=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Ve(C,k,j,Y){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){Y&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ce);const be=ie.update(C),We=C.material;We.visible&&g.push(C,be,We,j,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const be=ie.update(C),We=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Re.copy(be.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4(ce)),Array.isArray(We)){const Pe=be.groups;for(let Ie=0,Xe=Pe.length;Ie<Xe;Ie++){const Ke=Pe[Ie],Pt=We[Ke.materialIndex];Pt&&Pt.visible&&g.push(C,be,Pt,j,Re.z,Ke)}}else We.visible&&g.push(C,be,We,j,Re.z,null)}}const de=C.children;for(let be=0,We=de.length;be<We;be++)Ve(de[be],k,j,Y)}function Be(C,k,j,Y){const W=C.opaque,de=C.transmissive,be=C.transparent;m.setupLightsView(j),Z===!0&&Ee.setGlobalState(x.clippingPlanes,j),de.length>0&&$e(W,de,k,j),Y&&xe.viewport(E.copy(Y)),W.length>0&&Ut(W,k,j),de.length>0&&Ut(de,k,j),be.length>0&&Ut(be,k,j),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function $e(C,k,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const de=Ue.isWebGL2;se===null&&(se=new Ki(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?Ar:Os,minFilter:Bu,samples:de?4:0})),x.getDrawingBufferSize(_e),de?se.setSize(_e.x,_e.y):se.setSize(Fm(_e.x),Fm(_e.y));const be=x.getRenderTarget();x.setRenderTarget(se),x.getClearColor($),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const We=x.toneMapping;x.toneMapping=Is,Ut(C,j,Y),b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se);let Pe=!1;for(let Ie=0,Xe=k.length;Ie<Xe;Ie++){const Ke=k[Ie],Pt=Ke.object,Zt=Ke.geometry,gt=Ke.material,Dn=Ke.group;if(gt.side===Vi&&Pt.layers.test(Y.layers)){const xt=gt.side;gt.side=li,gt.needsUpdate=!0,tt(Pt,j,Y,Zt,gt,Dn),gt.side=xt,gt.needsUpdate=!0,Pe=!0}}Pe===!0&&(b.updateMultisampleRenderTarget(se),b.updateRenderTargetMipmap(se)),x.setRenderTarget(be),x.setClearColor($,P),x.toneMapping=We}function Ut(C,k,j){const Y=k.isScene===!0?k.overrideMaterial:null;for(let W=0,de=C.length;W<de;W++){const be=C[W],We=be.object,Pe=be.geometry,Ie=Y===null?be.material:Y,Xe=be.group;We.layers.test(j.layers)&&tt(We,k,j,Pe,Ie,Xe)}}function tt(C,k,j,Y,W,de){C.onBeforeRender(x,k,j,Y,W,de),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(x,k,j,Y,C,de),W.transparent===!0&&W.side===Vi&&W.forceSinglePass===!1?(W.side=li,W.needsUpdate=!0,x.renderBufferDirect(j,k,Y,W,C,de),W.side=Gs,W.needsUpdate=!0,x.renderBufferDirect(j,k,Y,W,C,de),W.side=Vi):x.renderBufferDirect(j,k,Y,W,C,de),C.onAfterRender(x,k,j,Y,W,de)}function Et(C,k,j){k.isScene!==!0&&(k=we);const Y=Oe.get(C),W=m.state.lights,de=m.state.shadowsArray,be=W.state.version,We=ge.getParameters(C,W.state,de,k,j),Pe=ge.getProgramCacheKey(We);let Ie=Y.programs;Y.environment=C.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(C.isMeshStandardMaterial?H:A).get(C.envMap||Y.environment),Ie===void 0&&(C.addEventListener("dispose",he),Ie=new Map,Y.programs=Ie);let Xe=Ie.get(Pe);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===be)return At(C,We),Xe}else We.uniforms=ge.getUniforms(C),C.onBuild(j,We,x),C.onBeforeCompile(We,x),Xe=ge.acquireProgram(We,Pe),Ie.set(Pe,Xe),Y.uniforms=We.uniforms;const Ke=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Ee.uniform),At(C,We),Y.needsLights=di(C),Y.lightsStateVersion=be,Y.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMap.value=W.state.directionalShadowMap,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotShadowMap.value=W.state.spotShadowMap,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMap.value=W.state.pointShadowMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Kt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Tf.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function At(C,k){const j=Oe.get(C);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Tt(C,k,j,Y,W){k.isScene!==!0&&(k=we),b.resetTextureUnits();const de=k.fog,be=Y.isMeshStandardMaterial?k.environment:null,We=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ts,Pe=(Y.isMeshStandardMaterial?H:A).get(Y.envMap||be),Ie=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xe=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ke=!!j.morphAttributes.position,Pt=!!j.morphAttributes.normal,Zt=!!j.morphAttributes.color;let gt=Is;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Dn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=Dn!==void 0?Dn.length:0,qe=Oe.get(Y),Bh=m.state.lights;if(Z===!0&&(re===!0||C!==S)){const Ni=C===S&&Y.id===L;Ee.setState(Y,C,Ni)}let Bt=!1;Y.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Bh.state.version||qe.outputColorSpace!==We||W.isBatchedMesh&&qe.batching===!1||!W.isBatchedMesh&&qe.batching===!0||W.isInstancedMesh&&qe.instancing===!1||!W.isInstancedMesh&&qe.instancing===!0||W.isSkinnedMesh&&qe.skinning===!1||!W.isSkinnedMesh&&qe.skinning===!0||W.isInstancedMesh&&qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&qe.instancingColor===!1&&W.instanceColor!==null||qe.envMap!==Pe||Y.fog===!0&&qe.fog!==de||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==Ie||qe.vertexTangents!==Xe||qe.morphTargets!==Ke||qe.morphNormals!==Pt||qe.morphColors!==Zt||qe.toneMapping!==gt||Ue.isWebGL2===!0&&qe.morphTargetsCount!==xt)&&(Bt=!0):(Bt=!0,qe.__version=Y.version);let qs=qe.currentProgram;Bt===!0&&(qs=Et(Y,k,W));let x_=!1,ml=!1,Hh=!1;const yn=qs.getUniforms(),$s=qe.uniforms;if(xe.useProgram(qs.program)&&(x_=!0,ml=!0,Hh=!0),Y.id!==L&&(L=Y.id,ml=!0),x_||S!==C){yn.setValue(V,"projectionMatrix",C.projectionMatrix),yn.setValue(V,"viewMatrix",C.matrixWorldInverse);const Ni=yn.map.cameraPosition;Ni!==void 0&&Ni.setValue(V,Re.setFromMatrixPosition(C.matrixWorld)),Ue.logarithmicDepthBuffer&&yn.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yn.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,ml=!0,Hh=!0)}if(W.isSkinnedMesh){yn.setOptional(V,W,"bindMatrix"),yn.setOptional(V,W,"bindMatrixInverse");const Ni=W.skeleton;Ni&&(Ue.floatVertexTextures?(Ni.boneTexture===null&&Ni.computeBoneTexture(),yn.setValue(V,"boneTexture",Ni.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(yn.setOptional(V,W,"batchingTexture"),yn.setValue(V,"batchingTexture",W._matricesTexture,b));const Vh=j.morphAttributes;if((Vh.position!==void 0||Vh.normal!==void 0||Vh.color!==void 0&&Ue.isWebGL2===!0)&&Ne.update(W,j,qs),(ml||qe.receiveShadow!==W.receiveShadow)&&(qe.receiveShadow=W.receiveShadow,yn.setValue(V,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&($s.envMap.value=Pe,$s.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ml&&(yn.setValue(V,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&mt($s,Hh),de&&Y.fog===!0&&fe.refreshFogUniforms($s,de),fe.refreshMaterialUniforms($s,Y,z,B,se),Tf.upload(V,Kt(qe),$s,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Tf.upload(V,Kt(qe),$s,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yn.setValue(V,"center",W.center),yn.setValue(V,"modelViewMatrix",W.modelViewMatrix),yn.setValue(V,"normalMatrix",W.normalMatrix),yn.setValue(V,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ni=Y.uniformsGroups;for(let Gh=0,E1=Ni.length;Gh<E1;Gh++)if(Ue.isWebGL2){const y_=Ni[Gh];De.update(y_,qs),De.bind(y_,qs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qs}function mt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function di(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,j){Oe.get(C.texture).__webglTexture=k,Oe.get(C.depthTexture).__webglTexture=j;const Y=Oe.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const j=Oe.get(C);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,j=0){M=C,T=k,w=j;let Y=!0,W=null,de=!1,be=!1;if(C){const Pe=Oe.get(C);Pe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):Pe.__webglFramebuffer===void 0?b.setupRenderTarget(C):Pe.__hasExternalTextures&&b.rebindTextures(C,Oe.get(C.texture).__webglTexture,Oe.get(C.depthTexture).__webglTexture);const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);const Xe=Oe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[k])?W=Xe[k][j]:W=Xe[k],de=!0):Ue.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?W=Oe.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?W=Xe[j]:W=Xe,E.copy(C.viewport),I.copy(C.scissor),U=C.scissorTest}else E.copy(R).multiplyScalar(z).floor(),I.copy(K).multiplyScalar(z).floor(),U=J;if(xe.bindFramebuffer(V.FRAMEBUFFER,W)&&Ue.drawBuffers&&Y&&xe.drawBuffers(C,W),xe.viewport(E),xe.scissor(I),xe.setScissorTest(U),de){const Pe=Oe.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,j)}else if(be){const Pe=Oe.get(C.texture),Ie=k||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pe.__webglTexture,j||0,Ie)}L=-1},this.readRenderTargetPixels=function(C,k,j,Y,W,de,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Oe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(We=We[be]),We){xe.bindFramebuffer(V.FRAMEBUFFER,We);try{const Pe=C.texture,Ie=Pe.format,Xe=Pe.type;if(Ie!==Gi&&Se.convert(Ie)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Xe===Ar&&(ve.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Xe!==Os&&Se.convert(Xe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Es&&(Ue.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-Y&&j>=0&&j<=C.height-W&&V.readPixels(k,j,Y,W,Se.convert(Ie),Se.convert(Xe),de)}finally{const Pe=M!==null?Oe.get(M).__webglFramebuffer:null;xe.bindFramebuffer(V.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(C,k,j=0){const Y=Math.pow(2,-j),W=Math.floor(k.image.width*Y),de=Math.floor(k.image.height*Y);b.setTexture2D(k,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,C.x,C.y,W,de),xe.unbindTexture()},this.copyTextureToTexture=function(C,k,j,Y=0){const W=k.image.width,de=k.image.height,be=Se.convert(j.format),We=Se.convert(j.type);b.setTexture2D(j,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,W,de,be,We,k.image.data):k.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,be,k.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,be,We,k.image),Y===0&&j.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,k,j,Y,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=C.max.x-C.min.x+1,be=C.max.y-C.min.y+1,We=C.max.z-C.min.z+1,Pe=Se.convert(Y.format),Ie=Se.convert(Y.type);let Xe;if(Y.isData3DTexture)b.setTexture3D(Y,0),Xe=V.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)b.setTexture2DArray(Y,0),Xe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ke=V.getParameter(V.UNPACK_ROW_LENGTH),Pt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Zt=V.getParameter(V.UNPACK_SKIP_PIXELS),gt=V.getParameter(V.UNPACK_SKIP_ROWS),Dn=V.getParameter(V.UNPACK_SKIP_IMAGES),xt=j.isCompressedTexture?j.mipmaps[W]:j.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),j.isDataTexture||j.isData3DTexture?V.texSubImage3D(Xe,W,k.x,k.y,k.z,de,be,We,Pe,Ie,xt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Xe,W,k.x,k.y,k.z,de,be,We,Pe,xt.data)):V.texSubImage3D(Xe,W,k.x,k.y,k.z,de,be,We,Pe,Ie,xt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ke),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zt),V.pixelStorei(V.UNPACK_SKIP_ROWS,gt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Dn),W===0&&Y.generateMipmaps&&V.generateMipmap(Xe),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){T=0,w=0,M=null,xe.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===d_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Oh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pn?Po:KE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Po?pn:ts}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class w3 extends _1{}w3.prototype.isWebGL1Renderer=!0;class A3 extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class v1 extends Zu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kx=new fn,zm=new p_,ef=new Fh,tf=new X;class ap extends ci{constructor(e=new fi,t=new v1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ef.copy(i.boundingSphere),ef.applyMatrix4(r),ef.radius+=s,e.ray.intersectsSphere(ef)===!1)return;kx.copy(r).invert(),zm.copy(e.ray).applyMatrix4(kx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,g=p;_<g;_++){const m=u.getX(_);tf.fromBufferAttribute(f,m),zx(tf,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,g=p;_<g;_++)tf.fromBufferAttribute(f,_),zx(tf,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zx(n,e,t,i,r,s,o){const a=zm.distanceSqToPoint(n);if(a<t){const l=new X;zm.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class C3 extends ui{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hu extends fi{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let f=e;const h=(t-e)/r,p=new X,_=new Ze;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,c.push(_.x,_.y)}f+=h}for(let g=0;g<r;g++){const m=g*(i+1);for(let d=0;d<i;d++){const v=d+m,x=v,y=v+i+1,T=v+i+2,w=v+1;a.push(x,y,w),a.push(y,T,w)}}this.setIndex(a),this.setAttribute("position",new Xn(l,3)),this.setAttribute("normal",new Xn(u,3)),this.setAttribute("uv",new Xn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class v_ extends fi{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new X,h=new X,p=[],_=[],g=[],m=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const w=T/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(w+y,1-x),v.push(u++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const x=c[d][v+1],y=c[d][v],T=c[d+1][v],w=c[d+1][v+1];(d!==0||o>0)&&p.push(x,y,w),(d!==i-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(g,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new v_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class x1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bx(){return(typeof performance>"u"?Date:performance).now()}class R3{constructor(e,t,i=0,r=1/0){this.ray=new p_(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new m_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Bm(e,this,i,t),i.sort(Hx),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Bm(e[r],this,i,t);return i.sort(Hx),i}}function Hx(n,e){return n.distance-e.distance}function Bm(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Bm(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:f_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=f_);const y1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ju{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b3=new c1(-1,1,1,-1,0,1);class P3 extends fi{constructor(){super(),this.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xn([0,2,0,0,2,0],2))}}const L3=new P3;class S1{constructor(e){this._mesh=new Ai(L3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class M1 extends Ju{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dh.clone(e.uniforms),this.material=new Gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new S1(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vx extends Ju{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class D3 extends Ju{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class U3{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ze);this._width=i.width,this._height=i.height,t=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ar}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new M1(y1),this.copyPass.material.blending=qr,this.clock=new x1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vx!==void 0&&(o instanceof Vx?i=!0:o instanceof D3&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class N3 extends Ju{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const I3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ul extends Ju{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ki(s,o,{type:Ar}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Ki(s,o,{type:Ar});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Ki(s,o,{type:Ar});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=I3;this.highPassUniforms=dh.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ze(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=y1;this.copyUniforms=dh.clone(c.uniforms),this.blendMaterial=new Gn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:zr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new vo,this.fsQuad=new S1(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ze(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ul.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ul.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ul.BlurDirectionX=new Ze(1,0);ul.BlurDirectionY=new Ze(0,1);Br.registerPlugin(Qe);function O3(){const n=Lo.useRef(null);return Lo.useEffect(()=>{const e=n.current;if(!e)return;function t(){const Q=document.createElement("canvas");Q.width=64,Q.height=64;const ye=Q.getContext("2d"),Ee=ye.createRadialGradient(32,32,0,32,32,32);Ee.addColorStop(0,"rgba(255, 255, 255, 1.0)"),Ee.addColorStop(.2,"rgba(255, 235, 170, 0.95)"),Ee.addColorStop(.5,"rgba(255, 130, 30, 0.5)"),Ee.addColorStop(.8,"rgba(220, 50, 0, 0.15)"),Ee.addColorStop(1,"rgba(0, 0, 0, 0)"),ye.fillStyle=Ee,ye.beginPath(),ye.arc(32,32,32,0,Math.PI*2),ye.fill();const ee=new C3(Q);return ee.generateMipmaps=!1,ee.minFilter=Zn,ee.magFilter=Zn,ee.needsUpdate=!0,ee}const i=t(),r=7,s=new X(r,0,0),o=new A3,a=new Hi(45,window.innerWidth/window.innerHeight,.1,1e3),l=new _1({canvas:e,antialias:!1,alpha:!0,stencil:!1,powerPreference:"high-performance"});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,1)),l.toneMapping=HE,l.toneMappingExposure=1.2,l.setClearColor(0,0);const u=new Ki(window.innerWidth,window.innerHeight,{type:Ar,format:Gi}),c=new U3(l,u);c.addPass(new N3(o,a));const f=new ul(new Ze(window.innerWidth/2,window.innerHeight/2),.85,.55,.15);c.addPass(f);const h={uniforms:{tDiffuse:{value:null},bhPos:{value:new Ze(.5,.5)},strength:{value:2e-4}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform vec2 bhPos;
        uniform float strength;
        varying vec2 vUv;

        void main() {
          vec2 dir = vUv - bhPos;
          // Compensate for aspect ratio roughly if needed, assuming 16:9 for distance
          dir.x *= 1.77; 
          float dist = length(dir);
          vec2 warpedUv = vUv;
          
          float eh = 0.062; // Matched to singularity scale 2.3
          
          // Inverse square falloff for gravitational warping (outside only)
          float warp = strength / (dist * dist + 0.001);
          warp = clamp(warp, 0.0, 0.05); // strict clamp to prevent tearing

          // Smoothly decay the warp to 0 at a distance of 0.35 to prevent hard edges
          float edgeFade = smoothstep(0.35, 0.1, dist);
          warp *= edgeFade;

          // Warp towards the black hole
          vec2 trueDir = vUv - bhPos;
          warpedUv -= normalize(trueDir + vec2(1e-5)) * warp;

          vec4 warped = texture2D(tDiffuse, warpedUv);
          // Soft-edged void: covers bloom bleed over the mesh so the
          // singularity stays pitch black without a hard shader boundary.
          float disc = 1.0 - smoothstep(eh * 0.85, eh, dist);
          gl_FragColor = mix(warped, vec4(0.0, 0.0, 0.0, 1.0), disc);
        }
      `},p=new M1(h);c.addPass(p);const _=new Ai(new v_(1.65,64,64),new vo({color:0}));_.position.copy(s),_.scale.setScalar(2.3),o.add(_);const g=new Ai(new hu(1.65,2.05,80),new vo({color:16752704,side:Vi,transparent:!0,opacity:.75,blending:zr}));g.position.copy(s),g.rotation.x=Math.PI/2,o.add(g);const m=new Ai(new hu(2.05,2.35,80),new vo({color:16733440,side:Vi,transparent:!0,opacity:.4,blending:zr}));m.position.copy(s),m.rotation.x=Math.PI/2,o.add(m);const d=new Ai(new hu(1.65,1.95,80),new vo({color:16755264,side:Vi,transparent:!0,opacity:.65,blending:zr}));d.position.copy(s),d.rotation.y=.15,o.add(d);const v=11e3,x=new fi,y=new Float32Array(v*3),T=new Float32Array(v*3),w=new Float32Array(v),M=new Float32Array(v),L=new Float32Array(v),S=new st(16775406),E=new st(16737792),I=new st(7798784),U=new st;for(let Q=0;Q<v;Q++){const ye=Math.pow(Math.random(),2),Ee=3.8+ye*8.8;M[Q]=Ee,L[Q]=.007/Math.sqrt(Ee);const ee=Math.random()*Math.PI*2;w[Q]=ee,y[Q*3]=r+Math.cos(ee)*Ee,y[Q*3+1]=(Math.random()-.5)*(.15+ye*.3),y[Q*3+2]=Math.sin(ee)*Ee,U.lerpColors(S,E,Math.min(1,Ee/8)),U.lerp(I,Math.max(0,(Ee-8)/20)),U.toArray(T,Q*3)}x.setAttribute("position",new un(y,3)),x.setAttribute("customColor",new un(T,3)),x.setAttribute("angle",new un(w,1)),x.setAttribute("radius",new un(M,1)),x.setAttribute("speed",new un(L,1));const $={uTime:{value:0},uSpeed:{value:1},uAnchor:{value:new X(r,0,0)},uMouseTarget:{value:new X(9999,0,9999)},uHoverStrength:{value:0}},P=new Gn({uniforms:$,vertexShader:`
        uniform float uTime;
        uniform float uSpeed;
        uniform vec3 uAnchor;
        uniform vec3 uMouseTarget;
        uniform float uHoverStrength;
        
        attribute float angle;
        attribute float radius;
        attribute float speed;
        attribute vec3 customColor;
        
        varying vec3 vColor;

        void main() {
          vColor = customColor;
          
          float currentAngle = angle - speed * uTime * 60.0 * uSpeed;
          
          float bx = uAnchor.x + cos(currentAngle) * radius;
          float bz = sin(currentAngle) * radius;
          
          float spiralWave = sin(uTime * 2.2 + currentAngle * 2.5 + radius * 1.6) * 0.22;
          
          float rx = 0.0;
          float rz = 0.0;
          float ry = 0.0;
          
          float REPEL_RADIUS = 0.65;
          float REPEL_RADIUS_SQ = REPEL_RADIUS * REPEL_RADIUS;
          
          if (uHoverStrength > 0.02 && uMouseTarget.x < 9000.0) {
             float targetR = length(vec2(uMouseTarget.x - uAnchor.x, uMouseTarget.z));
             if (abs(radius - targetR) < REPEL_RADIUS) {
                 float dx = bx - uMouseTarget.x;
                 float dz = bz - uMouseTarget.z;
                 float ds = dx * dx + dz * dz;
                 if (ds < REPEL_RADIUS_SQ && ds > 0.0001) {
                     float d = sqrt(ds);
                     float norm = d / REPEL_RADIUS;
                     float force = cos(norm * 1.570796) * 0.35 * uHoverStrength;
                     rx = (dx / d) * force;
                     rz = (dz / d) * force;
                     ry = (1.0 - norm) * 0.24 * sin(uTime * 5.0) * uHoverStrength;
                 }
             }
          }
          
          vec3 pos = vec3(bx + rx, spiralWave + ry, bz + rz);
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
          gl_PointSize = (52.0 * (1.0 + sin(angle * 5.0)*0.25)) / -mvPosition.z;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        void main() {
          // Soft radial falloff so points read as plasma waves, not grains.
          vec2 coord = gl_PointCoord - vec2(0.5);
          float d = length(coord);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d);
          gl_FragColor = vec4(vColor * a, a * 0.9);
        }
      `,transparent:!0,blending:zr,depthWrite:!1}),O=new ap(x,P);o.add(O);const B=2500,z=new fi,D=new Float32Array(B*3),F=new Float32Array(B);for(let Q=0;Q<B;Q++)D[Q*3]=-14+Math.random()*(r-3+14),D[Q*3+1]=(Math.random()-.5)*14,D[Q*3+2]=Math.random()*10,F[Q]=Math.random();z.setAttribute("position",new un(D,3)),z.setAttribute("seed",new un(F,1));const R={uTime:$.uTime,uCenter:{value:new X(r,0,0)}},K=new Gn({uniforms:R,vertexShader:`
        uniform float uTime;
        uniform vec3 uCenter;
        attribute float seed;
        varying float vLife;
        varying float vSeed;
        void main() {
          vSeed = seed;
          float rate = 0.10 + fract(seed * 7.13) * 0.12;
          float life = fract(uTime * rate + seed);
          vLife = life;
          // Accelerating plunge: slow drift far away, rush into the horizon
          vec3 pos = mix(position, uCenter, pow(life, 1.6));
          // Slight curl so streams feel gravitational, not linear
          pos.y += sin(life * 6.0 + seed * 40.0) * 0.5 * (1.0 - life);
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (34.0 * (0.5 + fract(seed * 3.7) * 0.7) * (1.0 - life * 0.6)) / -mvPosition.z;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying float vLife;
        varying float vSeed;
        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float d = length(coord);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d);
          // White-hot head fading to ember tail, alpha swells mid-flight
          vec3 head = vec3(1.0, 0.85, 0.6);
          vec3 tail = vec3(0.9, 0.25, 0.05);
          vec3 col = mix(head, tail, smoothstep(0.0, 1.0, vLife));
          float fade = smoothstep(0.0, 0.15, vLife) * (1.0 - smoothstep(0.75, 1.0, vLife));
          gl_FragColor = vec4(col * a, a * fade * 0.85);
        }
      `,transparent:!0,blending:zr,depthWrite:!1}),J=new ap(z,K);o.add(J);const q=300,Z=new fi,re=new Float32Array(q*3),se=new Float32Array(q*3);for(let Q=0;Q<q;Q++)re[Q*3]=r+(Math.random()-.5)*60,re[Q*3+1]=(Math.random()-.5)*50,re[Q*3+2]=Math.random()*30+5;Z.setAttribute("position",new un(re,3));const ce=new ap(Z,new v1({color:16764040,size:.1,map:i,transparent:!0,opacity:.4,blending:zr,depthWrite:!1}));o.add(ce);const _e={camZ:20,camY:3.2,camX:0,lookX:0,lookY:0,lookZ:0,baseSpeed:1};let Re=new Ze(0,0),we=new Ze(0,0),ke=!1,V=!1,Ge=null;const ve=new R3,Ue=new hs(new X(0,1,0),0),xe=new X(9999,0,9999),G=new X;let Oe=0;const b=Q=>{Re.x=Q.clientX/window.innerWidth*2-1,Re.y=-(Q.clientY/window.innerHeight)*2+1,ke=!0},A=()=>{ke=!1},H=()=>{V=!0,Ge&&clearTimeout(Ge),Ge=setTimeout(()=>{V=!1},120)},ne=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",b),window.addEventListener("mouseleave",A),window.addEventListener("scroll",H,{passive:!0}),window.addEventListener("resize",ne);const te=new x1;let ie;function ge(){ie=requestAnimationFrame(ge);const Q=Math.min(te.getDelta(),.05),ye=te.getElapsedTime(),Ee=V?3:5;we.x+=(Re.x-we.x)*(1-Math.exp(-Ee*Q)),we.y+=(Re.y-we.y)*(1-Math.exp(-Ee*Q));const ee=_e.camX+we.x*1.5,at=_e.camY+we.y*1.5;a.position.x+=(ee-a.position.x)*(1-Math.exp(-9*Q)),a.position.y+=(at-a.position.y)*(1-Math.exp(-9*Q)),a.position.z+=(_e.camZ-a.position.z)*(1-Math.exp(-9*Q)),a.lookAt(_e.lookX,_e.lookY,_e.lookZ),Oe+=((ke?1:0)-Oe)*(1-Math.exp(-8*Q)),ke&&Oe>.01?(ve.setFromCamera(we,a),ve.ray.intersectPlane(Ue,G)&&xe.copy(G)):xe.set(9999,0,9999);const je=_e.baseSpeed;$.uTime.value=ye,$.uSpeed.value=je,$.uHoverStrength.value=Oe,$.uMouseTarget.value.copy(xe);const Me=ce.geometry.attributes.position.array;for(let De=0;De<q;De++){const ct=r-Me[De*3],pe=-Me[De*3+1],ae=-Me[De*3+2],N=ct*ct+pe*pe+ae*ae,le=Math.min(20/(N+1),1.4);se[De*3]+=ct*2e-4*le,se[De*3+1]+=pe*2e-4*le,se[De*3+2]+=ae*2e-4*le,Me[De*3]+=se[De*3],Me[De*3+1]+=se[De*3+1],Me[De*3+2]+=se[De*3+2],(N<3.5||Me[De*3+2]<-10)&&(Me[De*3]=r+(Math.random()-.5)*60,Me[De*3+1]=(Math.random()-.5)*50,Me[De*3+2]=Math.random()*30+10,se[De*3]=0,se[De*3+1]=0,se[De*3+2]=0)}ce.geometry.attributes.position.needsUpdate=!0,g.scale.setScalar(1+Math.sin(ye*1.8)*.015),m.scale.setScalar(1+Math.cos(ye*1.5)*.015),d.scale.setScalar(1+Math.sin(ye*1.2)*.012);const Se=Math.min(1,Math.max(0,(_e.camY-4)/16));g.material.opacity=.75+Se*.25,m.material.opacity=.4+Se*.55,d.material.opacity=.65+Se*.35,f.strength=.85+Se*.6;const Ye=new X(r,0,0);Ye.project(a),p.uniforms.bhPos.value.set(Ye.x*.5+.5,Ye.y*.5+.5),c.render()}a.position.set(_e.camX,_e.camY,_e.camZ),ge();const fe=Br.timeline({scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:.5}});return fe.to(_e,{camZ:17,camY:3.8,camX:3,lookX:3,duration:.4,ease:"power1.inOut"}),fe.to(_e,{camY:4.4,camX:r*.5,lookX:r*.5,camZ:14,duration:.35,ease:"power2.inOut"}),fe.to(_e,{camY:26,camZ:.5,camX:r,lookX:r,duration:.9,ease:"power2.inOut"}),window.__getBHScreenCoord=()=>{const Q=new X(r,0,0).project(a);return{x:(Q.x*.5+.5)*window.innerWidth,y:(-Q.y*.5+.5)*window.innerHeight}},()=>{cancelAnimationFrame(ie),window.removeEventListener("mousemove",b),window.removeEventListener("mouseleave",A),window.removeEventListener("scroll",H),window.removeEventListener("resize",ne),fe.kill(),c.dispose(),l.dispose()}},[]),dt.jsx("canvas",{id:"blackhole-canvas",ref:n})}const Dl={firstName:"Maheswar",lastName:"Praveen",title:"BUILDER • ROBOTICS & AI ENGINEER",github:"https://github.com/MaheswarPraveen",linkedin:"https://www.linkedin.com/in/maheswarpraveen"},F3=[{id:"00",category:"PROFILE",title:"Autonomous Systems Builder",description:"Developing end-to-end robotics systems across ROS 2, bare-metal firmware, and edge AI accelerators. Focused on real-time motor control, kinematic trajectories, and hardware deployment.",tags:["ROS 2","Edge AI","Embedded Systems"]},{id:"01",category:"ROBOTICS",title:"SpotMicro Quadruped",description:"12-DOF quadruped robot powered by 12× DS3218 servos and an Arduino UNO Q running Zephyr RTOS for ~200Hz analytical inverse kinematics and quintic spline gaits. Custom 6.8V high-current busbar rail off a 3S LiPo to handle 20A transient bursts without brownouts.",tags:["Zephyr RTOS","Arduino UNO Q","200Hz IK","3S LiPo Busbar"]},{id:"02",category:"FIELD AI",title:"Autonomous Skid-Steer Rover",description:"Field farming rover equipped with a 4-DOF robotic manipulator for precision weed removal. Powered by ROS 2 and an edge Hailo-8L NPU executing real-time YOLO vision guidance for field deployment.",tags:["ROS 2","Hailo-8L NPU","YOLO","4-DOF Arm"]},{id:"03",category:"DRIVER ARCHITECTURE",title:"RoArm M2-S PlayMotion",description:"High-precision trajectory recording and autonomous playback driver featuring dual-mode teaching (physical freedrive & keyboard jogging). Streams 25Hz quintic polynomial splines for zero-jerk motion with serial noise filtering. Officially adopted into the Waveshare Wiki.",tags:["Quintic Splines","Python Driver","Waveshare Wiki"]},{id:"04",category:"TELEMETRY BRIDGE",title:"ArduROSPI Bridge",description:"Zero-dependency ROS 2 ↔ MAVLink translation layer built with pymavlink, replacing heavy MAVROS on resource-constrained Raspberry Pi rovers. Implements 10Hz IMU streaming, automatic serial reconnect, and mission mode switching.",tags:["pymavlink","ROS 2","ArduPilot"]},{id:"05",category:"INTERACTIVE SYSTEMS",title:"Kalkii Genesis",description:"Cyberpunk 2.5D action title solo-engineered in Godot 4. Custom hierarchical combat state machines, frame-accurate animation cancelling, dynamic 2D lighting, and responsive platformer physics controllers.",tags:["Godot 4","Combat State Machines","GDScript"]},{id:"06",category:"EMBEDDED VISION",title:"Plant Disease Detection CNN",description:"End-to-end computer vision pipeline for agricultural crop leaf pathology. Implements OpenCV preprocessing, custom convolutional neural network (CNN) architectures in TensorFlow, achieving 80% test accuracy on unseen diseased foliage datasets.",tags:["TensorFlow","OpenCV","80% Test Accuracy"]}],k3=[{label:"Languages & AI",value:"Python, C/C++, GDScript, PyTorch, TensorFlow, YOLO, OpenCV"},{label:"Robotics & Protocols",value:"ROS 2 (Humble/Jazzy), MAVLink, CAN, UART, I2C, SPI, MQTT"},{label:"Hardware & Engineering",value:"Hailo-8L NPU, Arduino UNO Q, Raspberry Pi, Zephyr RTOS, Fusion 360"}];Br.registerPlugin(Qe);function z3(){const n=Lo.useRef(null);return Lo.useEffect(()=>{const e=n.current;if(!e)return;const t=new yR({duration:1.2,easing:a=>Math.min(1,1.001-Math.pow(2,-10*a)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:2});t.on("scroll",Qe.update);const i=a=>{t.raf(a*1e3)};Br.ticker.add(i),Br.ticker.lagSmoothing(0);const r=[],s=[],o=[];return document.fonts.ready.then(()=>{Array.from(e.querySelectorAll(".card")).forEach((c,f)=>{const h=c.classList.contains("hero-card"),p=c.querySelector(".stack-grid");let _=".project-index, .tag";h?_=".name-line, .hero-subtitle, .clean-link":p&&(_=".project-index, .stack-label, .stack-val");const g=new _v(c.querySelectorAll(_),{types:"chars"});r.push(g);let m=".section-title, .section-desc";if(p?m=".section-title":h&&(m=""),m){const I=c.querySelectorAll(m);if(I.length>0){const U=new _v(I,{types:"lines, words, chars"});r.push(U);const $=Br.fromTo(U.lines,{y:30,opacity:0,clipPath:"inset(0 0 100% 0)"},{y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:.9,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:c,start:"top 85%",toggleActions:"play none none none"}});$.scrollTrigger&&s.push($.scrollTrigger)}}const d=Array.from(c.querySelectorAll(".char")),v=Array.from(c.querySelectorAll(".tag, .clean-link, .stack-col")),x=d.length;d.forEach(I=>{I.dataset.orig=I.textContent,I._swallowState=0,I._lastFlip=Math.random()*100});let y=null;const T=()=>{y=d.map(I=>{const U=I.getBoundingClientRect();return{x:U.left+window.scrollX,y:U.top+window.scrollY}})},w=()=>{for(let I=0;I<x;I++){const U=d[I];U._swallowState!==0&&(U.textContent=U.dataset.orig,U.style.color="",U.style.opacity="1",U.style.transform="none",U.style.textShadow="none",U._swallowState=0)}v.forEach(I=>I.style.opacity="1"),c.style.opacity="1"},M=I=>{const U=performance.now();for(let $=0;$<x;$++){const P=d[$];I<.45?P._swallowState!==0&&(P.textContent=P.dataset.orig,P.style.color="",P.style.opacity="1",P.style.transform="none",P.style.textShadow="none",P._swallowState=0):I<.68?(U-P._lastFlip>90&&(P.textContent=Math.random()>.5?"1":"0",P._lastFlip=U),P._swallowState!==1&&(P.style.color="#ffaa20",P.style.textShadow="0 0 12px rgba(255, 170, 32, 0.8)",P.style.opacity="1",P.style.transform="none",P._swallowState=1)):P._swallowState!==2&&(P.textContent="0",P.style.color="#ffa020",P.style.textShadow="0 0 10px rgba(255, 160, 32, 0.6)",P.style.opacity="1",P.style.transform="none",P._swallowState=2)}I<.68&&(v.forEach($=>$.style.opacity="1"),c.style.opacity="1")},L={t:0},S=Br.timeline({paused:!0});S.eventCallback("onStart",()=>{T();for(let I=0;I<x;I++){const U=d[I];U.textContent="0",U._swallowState=3}}),S.to(L,{t:1,duration:.9,ease:"power2.in",onUpdate:()=>{const I=window.__getBHScreenCoord?window.__getBHScreenCoord():{x:window.innerWidth*.72,y:window.innerHeight*.5},U=L.t;for(let P=0;P<x;P++){const O=d[P],B=P/x*.12,z=Math.max(0,Math.min(1,(U-B)/.88)),D=Math.pow(z,1.7),F=y[P],R=I.x-(F.x-window.scrollX),K=I.y-(F.y-window.scrollY),J=R*1.18,q=K*1.18,Z=R*.5-K*.38+Math.sin(P*.35)*60*(1-D),re=K*.5+R*.38+Math.cos(P*.27)*40*(1-D),se=1-D,ce=se*se*0+2*se*D*Z+D*D*J,_e=se*se*0+2*se*D*re+D*D*q,Re=1+D*1.8,we=Math.max(.05,1-Math.pow(z,1.5)*.95);O.style.transform=`translate3d(${ce.toFixed(1)}px, ${_e.toFixed(1)}px, ${(-D*420).toFixed(0)}px) rotateX(${(D*45).toFixed(0)}deg) rotateZ(${(-D*25).toFixed(0)}deg) scale(${Re.toFixed(2)}, ${we.toFixed(2)})`;const ke=Math.sin(Math.min(1,z)*Math.PI);z<.55?O.style.color="#ffaa20":z<.85?O.style.color="#ffe9b8":O.style.color="#ff5010",O.style.textShadow=`0 0 ${(8+34*ke).toFixed(0)}px rgba(255, ${Math.round(170-60*z)}, 40, 0.95)`;const V=z<.78?1-Math.pow(z,1.4)*.25:Math.max(0,1-(z-.78)/.22);O.style.opacity=V.toFixed(2)}const $=Math.max(0,1-Math.pow(U,1.5));v.forEach(P=>P.style.opacity=$.toFixed(2)),c.style.opacity=Math.max(0,1-Math.pow(U,2.2)).toFixed(2)}}),S.eventCallback("onReverseComplete",w);const E=Qe.create({trigger:c,start:h?"top top":"top 25%",end:h?"+=70%":"+=60%",onUpdate:I=>{const U=I.progress;if(U>=.72){S.progress()===0&&!S.isActive()&&S.play();return}if(U<.6){S.progress()>0||S.isActive()?S.reverse():M(U);return}S.isActive()||M(Math.min(U,.71))},onLeave:()=>{S.progress()<1&&S.play()},onLeaveBack:()=>{S.progress()>0?S.reverse():w()}});s.push(E),s.push(S),o.push({st:E,flightTl:S})});const l=Qe.create({trigger:".scroll-end-trigger",start:"top 70%",end:"bottom bottom",scrub:.5,onUpdate:c=>{const f=document.getElementById("flash-overlay");if(!f)return;c.progress<.5?(f.style.backgroundColor="#ffffff",f.style.opacity=(c.progress/.5).toFixed(2)):(f.style.backgroundColor="#000000",f.style.opacity=((c.progress-.5)/.5).toFixed(2));const h=document.getElementById("blackhole-canvas");h&&(h.style.opacity=c.progress>.85?"0":"1")}});s.push(l);const u=setInterval(()=>{const c=performance.now(),f=document.querySelectorAll(".char");for(let h=0;h<f.length;h++){const p=f[h];p._swallowState===1&&c-p._lastFlip>110&&(p.textContent=Math.random()>.5?"1":"0",p._lastFlip=c)}for(let h=0;h<o.length;h++){const p=o[h];p.st.progress>=.72&&p.flightTl.progress()===0&&!p.flightTl.isActive()&&p.flightTl.play()}},120);Qe.refresh(),e._watchdog=u}),()=>{e._watchdog&&clearInterval(e._watchdog),r.forEach(a=>a.revert()),s.forEach(a=>a.kill()),Br.ticker.remove(i),t.destroy()}},[]),dt.jsxs(dt.Fragment,{children:[dt.jsx("div",{id:"flash-overlay"}),dt.jsx(O3,{}),dt.jsxs("main",{id:"ui-container",ref:n,children:[dt.jsxs("header",{className:"card hero-card",children:[dt.jsxs("h1",{className:"name-title",children:[dt.jsx("span",{className:"name-line",children:Dl.firstName}),dt.jsx("span",{className:"name-line",children:Dl.lastName})]}),dt.jsx("p",{className:"hero-subtitle",children:Dl.title}),dt.jsxs("div",{className:"hero-links",children:[dt.jsx("a",{href:Dl.github,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"GitHub"}),dt.jsx("a",{href:Dl.linkedin,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"LinkedIn"})]})]}),F3.map(e=>dt.jsxs("section",{className:"card content-card",children:[dt.jsxs("span",{className:"project-index",children:[e.id," // ",e.category]}),dt.jsx("h2",{className:"section-title",children:e.title}),dt.jsx("p",{className:"section-desc",children:e.description}),dt.jsx("div",{className:"tag-cloud",children:e.tags.map((t,i)=>dt.jsx("span",{className:"tag",children:t},i))})]},e.id)),dt.jsxs("section",{className:"card content-card",children:[dt.jsx("span",{className:"project-index",children:"07 // STACK"}),dt.jsx("h2",{className:"section-title",children:"Technical Capabilities"}),dt.jsx("div",{className:"stack-grid",children:k3.map((e,t)=>dt.jsxs("div",{className:"stack-col",children:[dt.jsx("span",{className:"stack-label",children:e.label}),dt.jsx("span",{className:"stack-val",children:e.value})]},t))})]})]}),dt.jsx("div",{className:"scroll-end-trigger",style:{height:"50vh",width:"100%"}})]})}lp.createRoot(document.getElementById("root")).render(dt.jsx(V1.StrictMode,{children:dt.jsx(z3,{})}));
