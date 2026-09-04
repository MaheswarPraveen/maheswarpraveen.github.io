var TT=Object.defineProperty;var wT=(n,e,t)=>e in n?TT(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var br=(n,e,t)=>wT(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function AT(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Gx={exports:{}},ph={},Wx={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu=Symbol.for("react.element"),CT=Symbol.for("react.portal"),RT=Symbol.for("react.fragment"),bT=Symbol.for("react.strict_mode"),PT=Symbol.for("react.profiler"),LT=Symbol.for("react.provider"),DT=Symbol.for("react.context"),UT=Symbol.for("react.forward_ref"),NT=Symbol.for("react.suspense"),IT=Symbol.for("react.memo"),OT=Symbol.for("react.lazy"),y_=Symbol.iterator;function FT(n){return n===null||typeof n!="object"?null:(n=y_&&n[y_]||n["@@iterator"],typeof n=="function"?n:null)}var Xx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yx=Object.assign,jx={};function cl(n,e,t){this.props=n,this.context=e,this.refs=jx,this.updater=t||Xx}cl.prototype.isReactComponent={};cl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};cl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function qx(){}qx.prototype=cl.prototype;function Bm(n,e,t){this.props=n,this.context=e,this.refs=jx,this.updater=t||Xx}var Hm=Bm.prototype=new qx;Hm.constructor=Bm;Yx(Hm,cl.prototype);Hm.isPureReactComponent=!0;var S_=Array.isArray,$x=Object.prototype.hasOwnProperty,Vm={current:null},Kx={key:!0,ref:!0,__self:!0,__source:!0};function Zx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$x.call(e,i)&&!Kx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Hu,type:n,key:s,ref:o,props:r,_owner:Vm.current}}function kT(n,e){return{$$typeof:Hu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Hu}function zT(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var M_=/\/+/g;function Wh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?zT(""+n.key):e.toString(36)}function nf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Hu:case CT:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Wh(o,0):i,S_(r)?(t="",n!=null&&(t=n.replace(M_,"$&/")+"/"),nf(r,e,t,"",function(u){return u})):r!=null&&(Gm(r)&&(r=kT(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(M_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",S_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Wh(s,a);o+=nf(s,e,t,l,r)}else if(l=FT(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Wh(s,a++),o+=nf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ec(n,e,t){if(n==null)return n;var i=[],r=0;return nf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function BT(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xn={current:null},rf={transition:null},HT={ReactCurrentDispatcher:Xn,ReactCurrentBatchConfig:rf,ReactCurrentOwner:Vm};function Qx(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:ec,forEach:function(n,e,t){ec(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ec(n,function(){e++}),e},toArray:function(n){return ec(n,function(e){return e})||[]},only:function(n){if(!Gm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=cl;at.Fragment=RT;at.Profiler=PT;at.PureComponent=Bm;at.StrictMode=bT;at.Suspense=NT;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HT;at.act=Qx;at.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Yx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)$x.call(e,l)&&!Kx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Hu,type:n.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(n){return n={$$typeof:DT,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:LT,_context:n},n.Consumer=n};at.createElement=Zx;at.createFactory=function(n){var e=Zx.bind(null,n);return e.type=n,e};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:UT,render:n}};at.isValidElement=Gm;at.lazy=function(n){return{$$typeof:OT,_payload:{_status:-1,_result:n},_init:BT}};at.memo=function(n,e){return{$$typeof:IT,type:n,compare:e===void 0?null:e}};at.startTransition=function(n){var e=rf.transition;rf.transition={};try{n()}finally{rf.transition=e}};at.unstable_act=Qx;at.useCallback=function(n,e){return Xn.current.useCallback(n,e)};at.useContext=function(n){return Xn.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return Xn.current.useDeferredValue(n)};at.useEffect=function(n,e){return Xn.current.useEffect(n,e)};at.useId=function(){return Xn.current.useId()};at.useImperativeHandle=function(n,e,t){return Xn.current.useImperativeHandle(n,e,t)};at.useInsertionEffect=function(n,e){return Xn.current.useInsertionEffect(n,e)};at.useLayoutEffect=function(n,e){return Xn.current.useLayoutEffect(n,e)};at.useMemo=function(n,e){return Xn.current.useMemo(n,e)};at.useReducer=function(n,e,t){return Xn.current.useReducer(n,e,t)};at.useRef=function(n){return Xn.current.useRef(n)};at.useState=function(n){return Xn.current.useState(n)};at.useSyncExternalStore=function(n,e,t){return Xn.current.useSyncExternalStore(n,e,t)};at.useTransition=function(){return Xn.current.useTransition()};at.version="18.3.1";Wx.exports=at;var Lo=Wx.exports;const VT=AT(Lo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GT=Lo,WT=Symbol.for("react.element"),XT=Symbol.for("react.fragment"),YT=Object.prototype.hasOwnProperty,jT=GT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qT={key:!0,ref:!0,__self:!0,__source:!0};function Jx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)YT.call(e,i)&&!qT.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:WT,type:n,key:s,ref:o,props:r,_owner:jT.current}}ph.Fragment=XT;ph.jsx=Jx;ph.jsxs=Jx;Gx.exports=ph;var dt=Gx.exports,ap={},ey={exports:{}},Di={},ty={exports:{}},ny={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,O){var R=U.length;U.push(O);e:for(;0<R;){var $=R-1>>>1,Q=U[$];if(0<r(Q,O))U[$]=O,U[R]=Q,R=$;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],R=U.pop();if(R!==O){U[0]=R;e:for(var $=0,Q=U.length,j=Q>>>1;$<j;){var Z=2*($+1)-1,ie=U[Z],fe=Z+1,le=U[fe];if(0>r(ie,R))fe<Q&&0>r(le,ie)?(U[$]=le,U[fe]=R,$=fe):(U[$]=ie,U[Z]=R,$=Z);else if(fe<Q&&0>r(le,R))U[$]=le,U[fe]=R,$=fe;else break e}}return O}function r(U,O){var R=U.sortIndex-O.sortIndex;return R!==0?R:U.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var O=t(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=U)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(u)}}function y(U){if(g=!1,x(U),!_)if(t(l)!==null)_=!0,k(T);else{var O=t(u);O!==null&&H(y,O.startTime-U)}}function T(U,O){_=!1,g&&(g=!1,h(P),P=-1),p=!0;var R=d;try{for(x(O),f=t(l);f!==null&&(!(f.expirationTime>O)||U&&!I());){var $=f.callback;if(typeof $=="function"){f.callback=null,d=f.priorityLevel;var Q=$(f.expirationTime<=O);O=n.unstable_now(),typeof Q=="function"?f.callback=Q:f===t(l)&&i(l),x(O)}else i(l);f=t(l)}if(f!==null)var j=!0;else{var Z=t(u);Z!==null&&H(y,Z.startTime-O),j=!1}return j}finally{f=null,d=R,p=!1}}var w=!1,M=null,P=-1,S=5,E=-1;function I(){return!(n.unstable_now()-E<S)}function D(){if(M!==null){var U=n.unstable_now();E=U;var O=!0;try{O=M(!0,U)}finally{O?K():(w=!1,M=null)}}else w=!1}var K;if(typeof v=="function")K=function(){v(D)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,F=L.port2;L.port1.onmessage=D,K=function(){F.postMessage(null)}}else K=function(){m(D,0)};function k(U){M=U,w||(w=!0,K())}function H(U,O){P=m(function(){U(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,k(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var R=d;d=O;try{return U()}finally{d=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var R=d;d=U;try{return O()}finally{d=R}},n.unstable_scheduleCallback=function(U,O,R){var $=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,U){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=R+Q,U={id:c++,callback:O,priorityLevel:U,startTime:R,expirationTime:Q,sortIndex:-1},R>$?(U.sortIndex=R,e(u,U),t(l)===null&&U===t(u)&&(g?(h(P),P=-1):g=!0,H(y,R-$))):(U.sortIndex=Q,e(l,U),_||p||(_=!0,k(T))),U},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(U){var O=d;return function(){var R=d;d=O;try{return U.apply(this,arguments)}finally{d=R}}}})(ny);ty.exports=ny;var $T=ty.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KT=Lo,Ri=$T;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iy=new Set,du={};function Ho(n,e){Ya(n,e),Ya(n+"Capture",e)}function Ya(n,e){for(du[n]=e,n=0;n<e.length;n++)iy.add(e[n])}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lp=Object.prototype.hasOwnProperty,ZT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E_={},T_={};function QT(n){return lp.call(T_,n)?!0:lp.call(E_,n)?!1:ZT.test(n)?T_[n]=!0:(E_[n]=!0,!1)}function JT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function e1(n,e,t,i){if(e===null||typeof e>"u"||JT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){vn[n]=new Yn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];vn[e]=new Yn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){vn[n]=new Yn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){vn[n]=new Yn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){vn[n]=new Yn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){vn[n]=new Yn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){vn[n]=new Yn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){vn[n]=new Yn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){vn[n]=new Yn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Wm=/[\-:]([a-z])/g;function Xm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Wm,Xm);vn[e]=new Yn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Wm,Xm);vn[e]=new Yn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Wm,Xm);vn[e]=new Yn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){vn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!1,!1)});vn.xlinkHref=new Yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){vn[n]=new Yn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ym(n,e,t,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e1(e,t,r,i)&&(t=null),i||r===null?QT(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ts=KT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),jm=Symbol.for("react.strict_mode"),up=Symbol.for("react.profiler"),ry=Symbol.for("react.provider"),sy=Symbol.for("react.context"),qm=Symbol.for("react.forward_ref"),cp=Symbol.for("react.suspense"),fp=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),us=Symbol.for("react.lazy"),oy=Symbol.for("react.offscreen"),w_=Symbol.iterator;function gl(n){return n===null||typeof n!="object"?null:(n=w_&&n[w_]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Object.assign,Xh;function Ul(n){if(Xh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Xh=e&&e[1]||""}return`
`+Xh+n}var Yh=!1;function jh(n,e){if(!n||Yh)return"";Yh=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yh=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ul(n):""}function t1(n){switch(n.tag){case 5:return Ul(n.type);case 16:return Ul("Lazy");case 13:return Ul("Suspense");case 19:return Ul("SuspenseList");case 0:case 2:case 15:return n=jh(n.type,!1),n;case 11:return n=jh(n.type.render,!1),n;case 1:return n=jh(n.type,!0),n;default:return""}}function hp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ma:return"Fragment";case pa:return"Portal";case up:return"Profiler";case jm:return"StrictMode";case cp:return"Suspense";case fp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case sy:return(n.displayName||"Context")+".Consumer";case ry:return(n._context.displayName||"Context")+".Provider";case qm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $m:return e=n.displayName||null,e!==null?e:hp(n.type)||"Memo";case us:e=n._payload,n=n._init;try{return hp(n(e))}catch{}}return null}function n1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hp(e);case 8:return e===jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ay(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function i1(n){var e=ay(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function nc(n){n._valueTracker||(n._valueTracker=i1(n))}function ly(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ay(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dp(n,e){var t=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function A_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Fs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uy(n,e){e=e.checked,e!=null&&Ym(n,"checked",e,!1)}function pp(n,e){uy(n,e);var t=Fs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?mp(n,e.type,t):e.hasOwnProperty("defaultValue")&&mp(n,e.type,Fs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function C_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function mp(n,e,t){(e!=="number"||wf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Nl=Array.isArray;function La(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Fs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function gp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function R_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Nl(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Fs(t)}}function cy(n,e){var t=Fs(e.value),i=Fs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function b_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function fy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _p(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?fy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ic,hy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ic=ic||document.createElement("div"),ic.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ic.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function pu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Wl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r1=["Webkit","ms","Moz","O"];Object.keys(Wl).forEach(function(n){r1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Wl[e]=Wl[n]})});function dy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Wl.hasOwnProperty(n)&&Wl[n]?(""+e).trim():e+"px"}function py(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=dy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var s1=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vp(n,e){if(e){if(s1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function xp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yp=null;function Km(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Sp=null,Da=null,Ua=null;function P_(n){if(n=Wu(n)){if(typeof Sp!="function")throw Error(se(280));var e=n.stateNode;e&&(e=xh(e),Sp(n.stateNode,n.type,e))}}function my(n){Da?Ua?Ua.push(n):Ua=[n]:Da=n}function gy(){if(Da){var n=Da,e=Ua;if(Ua=Da=null,P_(n),e)for(n=0;n<e.length;n++)P_(e[n])}}function _y(n,e){return n(e)}function vy(){}var qh=!1;function xy(n,e,t){if(qh)return n(e,t);qh=!0;try{return _y(n,e,t)}finally{qh=!1,(Da!==null||Ua!==null)&&(vy(),gy())}}function mu(n,e){var t=n.stateNode;if(t===null)return null;var i=xh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var Mp=!1;if(qr)try{var _l={};Object.defineProperty(_l,"passive",{get:function(){Mp=!0}}),window.addEventListener("test",_l,_l),window.removeEventListener("test",_l,_l)}catch{Mp=!1}function o1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Xl=!1,Af=null,Cf=!1,Ep=null,a1={onError:function(n){Xl=!0,Af=n}};function l1(n,e,t,i,r,s,o,a,l){Xl=!1,Af=null,o1.apply(a1,arguments)}function u1(n,e,t,i,r,s,o,a,l){if(l1.apply(this,arguments),Xl){if(Xl){var u=Af;Xl=!1,Af=null}else throw Error(se(198));Cf||(Cf=!0,Ep=u)}}function Vo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function yy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function L_(n){if(Vo(n)!==n)throw Error(se(188))}function c1(n){var e=n.alternate;if(!e){if(e=Vo(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return L_(r),n;if(s===i)return L_(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function Sy(n){return n=c1(n),n!==null?My(n):null}function My(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=My(n);if(e!==null)return e;n=n.sibling}return null}var Ey=Ri.unstable_scheduleCallback,D_=Ri.unstable_cancelCallback,f1=Ri.unstable_shouldYield,h1=Ri.unstable_requestPaint,Wt=Ri.unstable_now,d1=Ri.unstable_getCurrentPriorityLevel,Zm=Ri.unstable_ImmediatePriority,Ty=Ri.unstable_UserBlockingPriority,Rf=Ri.unstable_NormalPriority,p1=Ri.unstable_LowPriority,wy=Ri.unstable_IdlePriority,mh=null,Tr=null;function m1(n){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(mh,n,void 0,(n.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:v1,g1=Math.log,_1=Math.LN2;function v1(n){return n>>>=0,n===0?32:31-(g1(n)/_1|0)|0}var rc=64,sc=4194304;function Il(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Il(a):(s&=o,s!==0&&(i=Il(s)))}else o=t&~r,o!==0?i=Il(o):s!==0&&(i=Il(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ur(e),r=1<<t,i|=n[t],e&=~r;return i}function x1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function y1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ur(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=x1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Tp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ay(){var n=rc;return rc<<=1,!(rc&4194240)&&(rc=64),n}function $h(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ur(e),n[e]=t}function S1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ur(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Qm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ur(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function Cy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ry,Jm,by,Py,Ly,wp=!1,oc=[],Ts=null,ws=null,As=null,gu=new Map,_u=new Map,hs=[],M1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U_(n,e){switch(n){case"focusin":case"focusout":Ts=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":gu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_u.delete(e.pointerId)}}function vl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wu(e),e!==null&&Jm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function E1(n,e,t,i,r){switch(e){case"focusin":return Ts=vl(Ts,n,e,t,i,r),!0;case"dragenter":return ws=vl(ws,n,e,t,i,r),!0;case"mouseover":return As=vl(As,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return gu.set(s,vl(gu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_u.set(s,vl(_u.get(s)||null,n,e,t,i,r)),!0}return!1}function Dy(n){var e=co(n.target);if(e!==null){var t=Vo(e);if(t!==null){if(e=t.tag,e===13){if(e=yy(t),e!==null){n.blockedOn=e,Ly(n.priority,function(){by(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ap(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);yp=i,t.target.dispatchEvent(i),yp=null}else return e=Wu(t),e!==null&&Jm(e),n.blockedOn=t,!1;e.shift()}return!0}function N_(n,e,t){sf(n)&&t.delete(e)}function T1(){wp=!1,Ts!==null&&sf(Ts)&&(Ts=null),ws!==null&&sf(ws)&&(ws=null),As!==null&&sf(As)&&(As=null),gu.forEach(N_),_u.forEach(N_)}function xl(n,e){n.blockedOn===e&&(n.blockedOn=null,wp||(wp=!0,Ri.unstable_scheduleCallback(Ri.unstable_NormalPriority,T1)))}function vu(n){function e(r){return xl(r,n)}if(0<oc.length){xl(oc[0],n);for(var t=1;t<oc.length;t++){var i=oc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ts!==null&&xl(Ts,n),ws!==null&&xl(ws,n),As!==null&&xl(As,n),gu.forEach(e),_u.forEach(e),t=0;t<hs.length;t++)i=hs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hs.length&&(t=hs[0],t.blockedOn===null);)Dy(t),t.blockedOn===null&&hs.shift()}var Na=ts.ReactCurrentBatchConfig,Pf=!0;function w1(n,e,t,i){var r=vt,s=Na.transition;Na.transition=null;try{vt=1,eg(n,e,t,i)}finally{vt=r,Na.transition=s}}function A1(n,e,t,i){var r=vt,s=Na.transition;Na.transition=null;try{vt=4,eg(n,e,t,i)}finally{vt=r,Na.transition=s}}function eg(n,e,t,i){if(Pf){var r=Ap(n,e,t,i);if(r===null)sd(n,e,i,Lf,t),U_(n,i);else if(E1(r,n,e,t,i))i.stopPropagation();else if(U_(n,i),e&4&&-1<M1.indexOf(n)){for(;r!==null;){var s=Wu(r);if(s!==null&&Ry(s),s=Ap(n,e,t,i),s===null&&sd(n,e,i,Lf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else sd(n,e,i,null,t)}}var Lf=null;function Ap(n,e,t,i){if(Lf=null,n=Km(i),n=co(n),n!==null)if(e=Vo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=yy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Lf=n,null}function Uy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d1()){case Zm:return 1;case Ty:return 4;case Rf:case p1:return 16;case wy:return 536870912;default:return 16}default:return 16}}var ms=null,tg=null,of=null;function Ny(){if(of)return of;var n,e=tg,t=e.length,i,r="value"in ms?ms.value:ms.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return of=r.slice(n,1<i?1-i:void 0)}function af(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ac(){return!0}function I_(){return!1}function Ui(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ac:I_,this.isPropagationStopped=I_,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var fl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ng=Ui(fl),Gu=zt({},fl,{view:0,detail:0}),C1=Ui(Gu),Kh,Zh,yl,gh=zt({},Gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ig,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==yl&&(yl&&n.type==="mousemove"?(Kh=n.screenX-yl.screenX,Zh=n.screenY-yl.screenY):Zh=Kh=0,yl=n),Kh)},movementY:function(n){return"movementY"in n?n.movementY:Zh}}),O_=Ui(gh),R1=zt({},gh,{dataTransfer:0}),b1=Ui(R1),P1=zt({},Gu,{relatedTarget:0}),Qh=Ui(P1),L1=zt({},fl,{animationName:0,elapsedTime:0,pseudoElement:0}),D1=Ui(L1),U1=zt({},fl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),N1=Ui(U1),I1=zt({},fl,{data:0}),F_=Ui(I1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=k1[n])?!!e[n]:!1}function ig(){return z1}var B1=zt({},Gu,{key:function(n){if(n.key){var e=O1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=af(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?F1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ig,charCode:function(n){return n.type==="keypress"?af(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?af(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),H1=Ui(B1),V1=zt({},gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k_=Ui(V1),G1=zt({},Gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ig}),W1=Ui(G1),X1=zt({},fl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y1=Ui(X1),j1=zt({},gh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=Ui(j1),$1=[9,13,27,32],rg=qr&&"CompositionEvent"in window,Yl=null;qr&&"documentMode"in document&&(Yl=document.documentMode);var K1=qr&&"TextEvent"in window&&!Yl,Iy=qr&&(!rg||Yl&&8<Yl&&11>=Yl),z_=" ",B_=!1;function Oy(n,e){switch(n){case"keyup":return $1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function Z1(n,e){switch(n){case"compositionend":return Fy(e);case"keypress":return e.which!==32?null:(B_=!0,z_);case"textInput":return n=e.data,n===z_&&B_?null:n;default:return null}}function Q1(n,e){if(ga)return n==="compositionend"||!rg&&Oy(n,e)?(n=Ny(),of=tg=ms=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Iy&&e.locale!=="ko"?null:e.data;default:return null}}var J1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!J1[n.type]:e==="textarea"}function ky(n,e,t,i){my(i),e=Df(e,"onChange"),0<e.length&&(t=new ng("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var jl=null,xu=null;function ew(n){$y(n,0)}function _h(n){var e=xa(n);if(ly(e))return n}function tw(n,e){if(n==="change")return e}var zy=!1;if(qr){var Jh;if(qr){var ed="oninput"in document;if(!ed){var V_=document.createElement("div");V_.setAttribute("oninput","return;"),ed=typeof V_.oninput=="function"}Jh=ed}else Jh=!1;zy=Jh&&(!document.documentMode||9<document.documentMode)}function G_(){jl&&(jl.detachEvent("onpropertychange",By),xu=jl=null)}function By(n){if(n.propertyName==="value"&&_h(xu)){var e=[];ky(e,xu,n,Km(n)),xy(ew,e)}}function nw(n,e,t){n==="focusin"?(G_(),jl=e,xu=t,jl.attachEvent("onpropertychange",By)):n==="focusout"&&G_()}function iw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _h(xu)}function rw(n,e){if(n==="click")return _h(e)}function sw(n,e){if(n==="input"||n==="change")return _h(e)}function ow(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var hr=typeof Object.is=="function"?Object.is:ow;function yu(n,e){if(hr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!lp.call(e,r)||!hr(n[r],e[r]))return!1}return!0}function W_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function X_(n,e){var t=W_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=W_(t)}}function Hy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Hy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Vy(){for(var n=window,e=wf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wf(n.document)}return e}function sg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function aw(n){var e=Vy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Hy(t.ownerDocument.documentElement,t)){if(i!==null&&sg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=X_(t,s);var o=X_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lw=qr&&"documentMode"in document&&11>=document.documentMode,_a=null,Cp=null,ql=null,Rp=!1;function Y_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Rp||_a==null||_a!==wf(i)||(i=_a,"selectionStart"in i&&sg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ql&&yu(ql,i)||(ql=i,i=Df(Cp,"onSelect"),0<i.length&&(e=new ng("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=_a)))}function lc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var va={animationend:lc("Animation","AnimationEnd"),animationiteration:lc("Animation","AnimationIteration"),animationstart:lc("Animation","AnimationStart"),transitionend:lc("Transition","TransitionEnd")},td={},Gy={};qr&&(Gy=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function vh(n){if(td[n])return td[n];if(!va[n])return n;var e=va[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Gy)return td[n]=e[t];return n}var Wy=vh("animationend"),Xy=vh("animationiteration"),Yy=vh("animationstart"),jy=vh("transitionend"),qy=new Map,j_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ws(n,e){qy.set(n,e),Ho(e,[n])}for(var nd=0;nd<j_.length;nd++){var id=j_[nd],uw=id.toLowerCase(),cw=id[0].toUpperCase()+id.slice(1);Ws(uw,"on"+cw)}Ws(Wy,"onAnimationEnd");Ws(Xy,"onAnimationIteration");Ws(Yy,"onAnimationStart");Ws("dblclick","onDoubleClick");Ws("focusin","onFocus");Ws("focusout","onBlur");Ws(jy,"onTransitionEnd");Ya("onMouseEnter",["mouseout","mouseover"]);Ya("onMouseLeave",["mouseout","mouseover"]);Ya("onPointerEnter",["pointerout","pointerover"]);Ya("onPointerLeave",["pointerout","pointerover"]);Ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ol));function q_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,u1(i,e,void 0,n),n.currentTarget=null}function $y(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;q_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;q_(r,a,u),s=l}}}if(Cf)throw n=Ep,Cf=!1,Ep=null,n}function Ct(n,e){var t=e[Up];t===void 0&&(t=e[Up]=new Set);var i=n+"__bubble";t.has(i)||(Ky(e,n,2,!1),t.add(i))}function rd(n,e,t){var i=0;e&&(i|=4),Ky(t,n,i,e)}var uc="_reactListening"+Math.random().toString(36).slice(2);function Su(n){if(!n[uc]){n[uc]=!0,iy.forEach(function(t){t!=="selectionchange"&&(fw.has(t)||rd(t,!1,n),rd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[uc]||(e[uc]=!0,rd("selectionchange",!1,e))}}function Ky(n,e,t,i){switch(Uy(e)){case 1:var r=w1;break;case 4:r=A1;break;default:r=eg}t=r.bind(null,e,t,n),r=void 0,!Mp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function sd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=co(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xy(function(){var u=s,c=Km(t),f=[];e:{var d=qy.get(n);if(d!==void 0){var p=ng,_=n;switch(n){case"keypress":if(af(t)===0)break e;case"keydown":case"keyup":p=H1;break;case"focusin":_="focus",p=Qh;break;case"focusout":_="blur",p=Qh;break;case"beforeblur":case"afterblur":p=Qh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=O_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=b1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=W1;break;case Wy:case Xy:case Yy:p=D1;break;case jy:p=Y1;break;case"scroll":p=C1;break;case"wheel":p=q1;break;case"copy":case"cut":case"paste":p=N1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=k_}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?d!==null?d+"Capture":null:d;g=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=mu(v,h),y!=null&&g.push(Mu(v,y,x)))),m)break;v=v.return}0<g.length&&(d=new p(d,_,null,t,c),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==yp&&(_=t.relatedTarget||t.fromElement)&&(co(_)||_[$r]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?co(_):null,_!==null&&(m=Vo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=O_,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=k_,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:xa(p),x=_==null?d:xa(_),d=new g(y,v+"leave",p,t,c),d.target=m,d.relatedTarget=x,y=null,co(c)===u&&(g=new g(h,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,h=_,v=0,x=g;x;x=Wo(x))v++;for(x=0,y=h;y;y=Wo(y))x++;for(;0<v-x;)g=Wo(g),v--;for(;0<x-v;)h=Wo(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=Wo(g),h=Wo(h)}g=null}else g=null;p!==null&&$_(f,d,p,g,!1),_!==null&&m!==null&&$_(f,m,_,g,!0)}}e:{if(d=u?xa(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=tw;else if(H_(d))if(zy)T=sw;else{T=iw;var w=nw}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=rw);if(T&&(T=T(n,u))){ky(f,T,t,c);break e}w&&w(n,d,u),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&mp(d,"number",d.value)}switch(w=u?xa(u):window,n){case"focusin":(H_(w)||w.contentEditable==="true")&&(_a=w,Cp=u,ql=null);break;case"focusout":ql=Cp=_a=null;break;case"mousedown":Rp=!0;break;case"contextmenu":case"mouseup":case"dragend":Rp=!1,Y_(f,t,c);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":Y_(f,t,c)}var M;if(rg)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ga?Oy(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Iy&&t.locale!=="ko"&&(ga||P!=="onCompositionStart"?P==="onCompositionEnd"&&ga&&(M=Ny()):(ms=c,tg="value"in ms?ms.value:ms.textContent,ga=!0)),w=Df(u,P),0<w.length&&(P=new F_(P,n,null,t,c),f.push({event:P,listeners:w}),M?P.data=M:(M=Fy(t),M!==null&&(P.data=M)))),(M=K1?Z1(n,t):Q1(n,t))&&(u=Df(u,"onBeforeInput"),0<u.length&&(c=new F_("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}$y(f,e)})}function Mu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Df(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=mu(n,t),s!=null&&i.unshift(Mu(n,s,r)),s=mu(n,e),s!=null&&i.push(Mu(n,s,r))),n=n.return}return i}function Wo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=mu(t,s),l!=null&&o.unshift(Mu(t,l,a))):r||(l=mu(t,s),l!=null&&o.push(Mu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var hw=/\r\n?/g,dw=/\u0000|\uFFFD/g;function K_(n){return(typeof n=="string"?n:""+n).replace(hw,`
`).replace(dw,"")}function cc(n,e,t){if(e=K_(e),K_(n)!==e&&t)throw Error(se(425))}function Uf(){}var bp=null,Pp=null;function Lp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dp=typeof setTimeout=="function"?setTimeout:void 0,pw=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,mw=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(n){return Z_.resolve(null).then(n).catch(gw)}:Dp;function gw(n){setTimeout(function(){throw n})}function od(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),vu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);vu(e)}function Cs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Q_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var hl=Math.random().toString(36).slice(2),xr="__reactFiber$"+hl,Eu="__reactProps$"+hl,$r="__reactContainer$"+hl,Up="__reactEvents$"+hl,_w="__reactListeners$"+hl,vw="__reactHandles$"+hl;function co(n){var e=n[xr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[$r]||t[xr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Q_(n);n!==null;){if(t=n[xr])return t;n=Q_(n)}return e}n=t,t=n.parentNode}return null}function Wu(n){return n=n[xr]||n[$r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function xh(n){return n[Eu]||null}var Np=[],ya=-1;function Xs(n){return{current:n}}function bt(n){0>ya||(n.current=Np[ya],Np[ya]=null,ya--)}function wt(n,e){ya++,Np[ya]=n.current,n.current=e}var ks={},Ln=Xs(ks),ti=Xs(!1),Do=ks;function ja(n,e){var t=n.type.contextTypes;if(!t)return ks;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ni(n){return n=n.childContextTypes,n!=null}function Nf(){bt(ti),bt(Ln)}function J_(n,e,t){if(Ln.current!==ks)throw Error(se(168));wt(Ln,e),wt(ti,t)}function Zy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,n1(n)||"Unknown",r));return zt({},t,i)}function If(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ks,Do=Ln.current,wt(Ln,n),wt(ti,ti.current),!0}function e0(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=Zy(n,e,Do),i.__reactInternalMemoizedMergedChildContext=n,bt(ti),bt(Ln),wt(Ln,n)):bt(ti),wt(ti,t)}var kr=null,yh=!1,ad=!1;function Qy(n){kr===null?kr=[n]:kr.push(n)}function xw(n){yh=!0,Qy(n)}function Ys(){if(!ad&&kr!==null){ad=!0;var n=0,e=vt;try{var t=kr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}kr=null,yh=!1}catch(r){throw kr!==null&&(kr=kr.slice(n+1)),Ey(Zm,Ys),r}finally{vt=e,ad=!1}}return null}var Sa=[],Ma=0,Of=null,Ff=0,Fi=[],ki=0,Uo=null,Hr=1,Vr="";function no(n,e){Sa[Ma++]=Ff,Sa[Ma++]=Of,Of=n,Ff=e}function Jy(n,e,t){Fi[ki++]=Hr,Fi[ki++]=Vr,Fi[ki++]=Uo,Uo=n;var i=Hr;n=Vr;var r=32-ur(i)-1;i&=~(1<<r),t+=1;var s=32-ur(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hr=1<<32-ur(e)+r|t<<r|i,Vr=s+n}else Hr=1<<s|t<<r|i,Vr=n}function og(n){n.return!==null&&(no(n,1),Jy(n,1,0))}function ag(n){for(;n===Of;)Of=Sa[--Ma],Sa[Ma]=null,Ff=Sa[--Ma],Sa[Ma]=null;for(;n===Uo;)Uo=Fi[--ki],Fi[ki]=null,Vr=Fi[--ki],Fi[ki]=null,Hr=Fi[--ki],Fi[ki]=null}var Ai=null,Mi=null,Lt=!1,or=null;function eS(n,e){var t=Xi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function t0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ai=n,Mi=Cs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ai=n,Mi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Uo!==null?{id:Hr,overflow:Vr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Xi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ai=n,Mi=null,!0):!1;default:return!1}}function Ip(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Op(n){if(Lt){var e=Mi;if(e){var t=e;if(!t0(n,e)){if(Ip(n))throw Error(se(418));e=Cs(t.nextSibling);var i=Ai;e&&t0(n,e)?eS(i,t):(n.flags=n.flags&-4097|2,Lt=!1,Ai=n)}}else{if(Ip(n))throw Error(se(418));n.flags=n.flags&-4097|2,Lt=!1,Ai=n}}}function n0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ai=n}function fc(n){if(n!==Ai)return!1;if(!Lt)return n0(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Lp(n.type,n.memoizedProps)),e&&(e=Mi)){if(Ip(n))throw tS(),Error(se(418));for(;e;)eS(n,e),e=Cs(e.nextSibling)}if(n0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Mi=Cs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Mi=null}}else Mi=Ai?Cs(n.stateNode.nextSibling):null;return!0}function tS(){for(var n=Mi;n;)n=Cs(n.nextSibling)}function qa(){Mi=Ai=null,Lt=!1}function lg(n){or===null?or=[n]:or.push(n)}var yw=ts.ReactCurrentBatchConfig;function Sl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function hc(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function i0(n){var e=n._init;return e(n._payload)}function nS(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Ls(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=pd(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var T=x.type;return T===ma?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===us&&i0(T)===v.type)?(y=r(v,x.props),y.ref=Sl(h,v,x),y.return=h,y):(y=pf(x.type,x.key,x.props,null,h.mode,y),y.ref=Sl(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=md(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,T){return v===null||v.tag!==7?(v=yo(x,h.mode,y,T),v.return=h,v):(v=r(v,x),v.return=h,v)}function f(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=pd(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case tc:return x=pf(v.type,v.key,v.props,null,h.mode,x),x.ref=Sl(h,null,v),x.return=h,x;case pa:return v=md(v,h.mode,x),v.return=h,v;case us:var y=v._init;return f(h,y(v._payload),x)}if(Nl(v)||gl(v))return v=yo(v,h.mode,x,null),v.return=h,v;hc(h,v)}return null}function d(h,v,x,y){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tc:return x.key===T?l(h,v,x,y):null;case pa:return x.key===T?u(h,v,x,y):null;case us:return T=x._init,d(h,v,T(x._payload),y)}if(Nl(x)||gl(x))return T!==null?null:c(h,v,x,y,null);hc(h,x)}return null}function p(h,v,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tc:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,T);case pa:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,T);case us:var w=y._init;return p(h,v,x,w(y._payload),T)}if(Nl(y)||gl(y))return h=h.get(x)||null,c(v,h,y,T,null);hc(v,y)}return null}function _(h,v,x,y){for(var T=null,w=null,M=v,P=v=0,S=null;M!==null&&P<x.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=d(h,M,x[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(h,M),v=s(E,v,P),w===null?T=E:w.sibling=E,w=E,M=S}if(P===x.length)return t(h,M),Lt&&no(h,P),T;if(M===null){for(;P<x.length;P++)M=f(h,x[P],y),M!==null&&(v=s(M,v,P),w===null?T=M:w.sibling=M,w=M);return Lt&&no(h,P),T}for(M=i(h,M);P<x.length;P++)S=p(M,h,P,x[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?T=S:w.sibling=S,w=S);return n&&M.forEach(function(I){return e(h,I)}),Lt&&no(h,P),T}function g(h,v,x,y){var T=gl(x);if(typeof T!="function")throw Error(se(150));if(x=T.call(x),x==null)throw Error(se(151));for(var w=T=null,M=v,P=v=0,S=null,E=x.next();M!==null&&!E.done;P++,E=x.next()){M.index>P?(S=M,M=null):S=M.sibling;var I=d(h,M,E.value,y);if(I===null){M===null&&(M=S);break}n&&M&&I.alternate===null&&e(h,M),v=s(I,v,P),w===null?T=I:w.sibling=I,w=I,M=S}if(E.done)return t(h,M),Lt&&no(h,P),T;if(M===null){for(;!E.done;P++,E=x.next())E=f(h,E.value,y),E!==null&&(v=s(E,v,P),w===null?T=E:w.sibling=E,w=E);return Lt&&no(h,P),T}for(M=i(h,M);!E.done;P++,E=x.next())E=p(M,h,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),v=s(E,v,P),w===null?T=E:w.sibling=E,w=E);return n&&M.forEach(function(D){return e(h,D)}),Lt&&no(h,P),T}function m(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ma&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case tc:e:{for(var T=x.key,w=v;w!==null;){if(w.key===T){if(T=x.type,T===ma){if(w.tag===7){t(h,w.sibling),v=r(w,x.props.children),v.return=h,h=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===us&&i0(T)===w.type){t(h,w.sibling),v=r(w,x.props),v.ref=Sl(h,w,x),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}x.type===ma?(v=yo(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=pf(x.type,x.key,x.props,null,h.mode,y),y.ref=Sl(h,v,x),y.return=h,h=y)}return o(h);case pa:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=md(x,h.mode,y),v.return=h,h=v}return o(h);case us:return w=x._init,m(h,v,w(x._payload),y)}if(Nl(x))return _(h,v,x,y);if(gl(x))return g(h,v,x,y);hc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=pd(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return m}var $a=nS(!0),iS=nS(!1),kf=Xs(null),zf=null,Ea=null,ug=null;function cg(){ug=Ea=zf=null}function fg(n){var e=kf.current;bt(kf),n._currentValue=e}function Fp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ia(n,e){zf=n,ug=Ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Jn=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(ug!==n)if(n={context:n,memoizedValue:e,next:null},Ea===null){if(zf===null)throw Error(se(308));Ea=n,zf.dependencies={lanes:0,firstContext:n}}else Ea=Ea.next=n;return e}var fo=null;function hg(n){fo===null?fo=[n]:fo.push(n)}function rS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,hg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Kr(n,i)}function Kr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var cs=!1;function dg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Rs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Kr(n,t)}return r=i.interleaved,r===null?(e.next=e,hg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Kr(n,t)}function lf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qm(n,t)}}function r0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Bf(n,e,t,i){var r=n.updateQueue;cs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(d=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=zt({},f,d);break e;case 2:cs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Io|=o,n.lanes=o,n.memoizedState=f}}function s0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Xu={},wr=Xs(Xu),Tu=Xs(Xu),wu=Xs(Xu);function ho(n){if(n===Xu)throw Error(se(174));return n}function pg(n,e){switch(wt(wu,e),wt(Tu,n),wt(wr,Xu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_p(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=_p(e,n)}bt(wr),wt(wr,e)}function Ka(){bt(wr),bt(Tu),bt(wu)}function oS(n){ho(wu.current);var e=ho(wr.current),t=_p(e,n.type);e!==t&&(wt(Tu,n),wt(wr,t))}function mg(n){Tu.current===n&&(bt(wr),bt(Tu))}var It=Xs(0);function Hf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ld=[];function gg(){for(var n=0;n<ld.length;n++)ld[n]._workInProgressVersionPrimary=null;ld.length=0}var uf=ts.ReactCurrentDispatcher,ud=ts.ReactCurrentBatchConfig,No=0,kt=null,Jt=null,ln=null,Vf=!1,$l=!1,Au=0,Sw=0;function yn(){throw Error(se(321))}function _g(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!hr(n[t],e[t]))return!1;return!0}function vg(n,e,t,i,r,s){if(No=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uf.current=n===null||n.memoizedState===null?ww:Aw,n=t(i,r),$l){s=0;do{if($l=!1,Au=0,25<=s)throw Error(se(301));s+=1,ln=Jt=null,e.updateQueue=null,uf.current=Cw,n=t(i,r)}while($l)}if(uf.current=Gf,e=Jt!==null&&Jt.next!==null,No=0,ln=Jt=kt=null,Vf=!1,e)throw Error(se(300));return n}function xg(){var n=Au!==0;return Au=0,n}function pr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?kt.memoizedState=ln=n:ln=ln.next=n,ln}function Qi(){if(Jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var e=ln===null?kt.memoizedState:ln.next;if(e!==null)ln=e,Jt=n;else{if(n===null)throw Error(se(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},ln===null?kt.memoizedState=ln=n:ln=ln.next=n}return ln}function Cu(n,e){return typeof e=="function"?e(n):e}function cd(n){var e=Qi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=Jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((No&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,kt.lanes|=c,Io|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,hr(i,e.memoizedState)||(Jn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,kt.lanes|=s,Io|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function fd(n){var e=Qi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);hr(s,e.memoizedState)||(Jn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function aS(){}function lS(n,e){var t=kt,i=Qi(),r=e(),s=!hr(i.memoizedState,r);if(s&&(i.memoizedState=r,Jn=!0),i=i.queue,yg(fS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ln!==null&&ln.memoizedState.tag&1){if(t.flags|=2048,Ru(9,cS.bind(null,t,i,r,e),void 0,null),un===null)throw Error(se(349));No&30||uS(t,e,r)}return r}function uS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function cS(n,e,t,i){e.value=t,e.getSnapshot=i,hS(e)&&dS(n)}function fS(n,e,t){return t(function(){hS(e)&&dS(n)})}function hS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!hr(n,t)}catch{return!0}}function dS(n){var e=Kr(n,1);e!==null&&cr(e,n,1,-1)}function o0(n){var e=pr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cu,lastRenderedState:n},e.queue=n,n=n.dispatch=Tw.bind(null,kt,n),[e.memoizedState,n]}function Ru(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function pS(){return Qi().memoizedState}function cf(n,e,t,i){var r=pr();kt.flags|=n,r.memoizedState=Ru(1|e,t,void 0,i===void 0?null:i)}function Sh(n,e,t,i){var r=Qi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&_g(i,o.deps)){r.memoizedState=Ru(e,t,s,i);return}}kt.flags|=n,r.memoizedState=Ru(1|e,t,s,i)}function a0(n,e){return cf(8390656,8,n,e)}function yg(n,e){return Sh(2048,8,n,e)}function mS(n,e){return Sh(4,2,n,e)}function gS(n,e){return Sh(4,4,n,e)}function _S(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function vS(n,e,t){return t=t!=null?t.concat([n]):null,Sh(4,4,_S.bind(null,e,n),t)}function Sg(){}function xS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&_g(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function yS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&_g(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function SS(n,e,t){return No&21?(hr(t,e)||(t=Ay(),kt.lanes|=t,Io|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=t)}function Mw(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=ud.transition;ud.transition={};try{n(!1),e()}finally{vt=t,ud.transition=i}}function MS(){return Qi().memoizedState}function Ew(n,e,t){var i=Ps(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ES(n))TS(e,t);else if(t=rS(n,e,t,i),t!==null){var r=Gn();cr(t,n,i,r),wS(t,e,i)}}function Tw(n,e,t){var i=Ps(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ES(n))TS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,hr(a,o)){var l=e.interleaved;l===null?(r.next=r,hg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=rS(n,e,r,i),t!==null&&(r=Gn(),cr(t,n,i,r),wS(t,e,i))}}function ES(n){var e=n.alternate;return n===kt||e!==null&&e===kt}function TS(n,e){$l=Vf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function wS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qm(n,t)}}var Gf={readContext:Zi,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},ww={readContext:Zi,useCallback:function(n,e){return pr().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:a0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,cf(4194308,4,_S.bind(null,e,n),t)},useLayoutEffect:function(n,e){return cf(4194308,4,n,e)},useInsertionEffect:function(n,e){return cf(4,2,n,e)},useMemo:function(n,e){var t=pr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=pr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Ew.bind(null,kt,n),[i.memoizedState,n]},useRef:function(n){var e=pr();return n={current:n},e.memoizedState=n},useState:o0,useDebugValue:Sg,useDeferredValue:function(n){return pr().memoizedState=n},useTransition:function(){var n=o0(!1),e=n[0];return n=Mw.bind(null,n[1]),pr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=kt,r=pr();if(Lt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),un===null)throw Error(se(349));No&30||uS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,a0(fS.bind(null,i,s,n),[n]),i.flags|=2048,Ru(9,cS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=pr(),e=un.identifierPrefix;if(Lt){var t=Vr,i=Hr;t=(i&~(1<<32-ur(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Au++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Sw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Aw={readContext:Zi,useCallback:xS,useContext:Zi,useEffect:yg,useImperativeHandle:vS,useInsertionEffect:mS,useLayoutEffect:gS,useMemo:yS,useReducer:cd,useRef:pS,useState:function(){return cd(Cu)},useDebugValue:Sg,useDeferredValue:function(n){var e=Qi();return SS(e,Jt.memoizedState,n)},useTransition:function(){var n=cd(Cu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:aS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1},Cw={readContext:Zi,useCallback:xS,useContext:Zi,useEffect:yg,useImperativeHandle:vS,useInsertionEffect:mS,useLayoutEffect:gS,useMemo:yS,useReducer:fd,useRef:pS,useState:function(){return fd(Cu)},useDebugValue:Sg,useDeferredValue:function(n){var e=Qi();return Jt===null?e.memoizedState=n:SS(e,Jt.memoizedState,n)},useTransition:function(){var n=fd(Cu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:aS,useSyncExternalStore:lS,useId:MS,unstable_isNewReconciler:!1};function rr(n,e){if(n&&n.defaultProps){e=zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function kp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Mh={isMounted:function(n){return(n=n._reactInternals)?Vo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=Ps(n),s=Xr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Rs(n,s,r),e!==null&&(cr(e,n,r,i),lf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=Ps(n),s=Xr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Rs(n,s,r),e!==null&&(cr(e,n,r,i),lf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Gn(),i=Ps(n),r=Xr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Rs(n,r,i),e!==null&&(cr(e,n,i,t),lf(e,n,i))}};function l0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!yu(t,i)||!yu(r,s):!0}function AS(n,e,t){var i=!1,r=ks,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=ni(e)?Do:Ln.current,i=e.contextTypes,s=(i=i!=null)?ja(n,r):ks),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function u0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Mh.enqueueReplaceState(e,e.state,null)}function zp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},dg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=ni(e)?Do:Ln.current,r.context=ja(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mh.enqueueReplaceState(r,r.state,null),Bf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Za(n,e){try{var t="",i=e;do t+=t1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function hd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Bp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function CS(n,e,t){t=Xr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Xf||(Xf=!0,Kp=i),Bp(n,e)},t}function RS(n,e,t){t=Xr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Bp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Bp(n,e),typeof i!="function"&&(bs===null?bs=new Set([this]):bs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function c0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Rw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Vw.bind(null,n,e,t),e.then(n,n))}function f0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function h0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Xr(-1,1),e.tag=2,Rs(t,e,1))),t.lanes|=1),n)}var bw=ts.ReactCurrentOwner,Jn=!1;function Fn(n,e,t,i){e.child=n===null?iS(e,null,t,i):$a(e,n.child,t,i)}function d0(n,e,t,i,r){t=t.render;var s=e.ref;return Ia(e,r),i=vg(n,e,t,i,s,r),t=xg(),n!==null&&!Jn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zr(n,e,r)):(Lt&&t&&og(e),e.flags|=1,Fn(n,e,i,r),e.child)}function p0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!bg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,bS(n,e,s,i,r)):(n=pf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:yu,t(o,i)&&n.ref===e.ref)return Zr(n,e,r)}return e.flags|=1,n=Ls(s,i),n.ref=e.ref,n.return=e,e.child=n}function bS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(yu(s,i)&&n.ref===e.ref)if(Jn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Jn=!0);else return e.lanes=n.lanes,Zr(n,e,r)}return Hp(n,e,t,i,r)}function PS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(wa,gi),gi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(wa,gi),gi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(wa,gi),gi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(wa,gi),gi|=i;return Fn(n,e,r,t),e.child}function LS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Hp(n,e,t,i,r){var s=ni(t)?Do:Ln.current;return s=ja(e,s),Ia(e,r),t=vg(n,e,t,i,s,r),i=xg(),n!==null&&!Jn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Zr(n,e,r)):(Lt&&i&&og(e),e.flags|=1,Fn(n,e,t,r),e.child)}function m0(n,e,t,i,r){if(ni(t)){var s=!0;If(e)}else s=!1;if(Ia(e,r),e.stateNode===null)ff(n,e),AS(e,t,i),zp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=ni(t)?Do:Ln.current,u=ja(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&u0(e,o,i,u),cs=!1;var d=e.memoizedState;o.state=d,Bf(e,i,o,r),l=e.memoizedState,a!==i||d!==l||ti.current||cs?(typeof c=="function"&&(kp(e,t,c,i),l=e.memoizedState),(a=cs||l0(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,sS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:rr(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=ni(t)?Do:Ln.current,l=ja(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&u0(e,o,i,l),cs=!1,d=e.memoizedState,o.state=d,Bf(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||ti.current||cs?(typeof p=="function"&&(kp(e,t,p,i),_=e.memoizedState),(u=cs||l0(e,t,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Vp(n,e,t,i,s,r)}function Vp(n,e,t,i,r,s){LS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&e0(e,t,!1),Zr(n,e,s);i=e.stateNode,bw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=$a(e,n.child,null,s),e.child=$a(e,null,a,s)):Fn(n,e,a,s),e.memoizedState=i.state,r&&e0(e,t,!0),e.child}function DS(n){var e=n.stateNode;e.pendingContext?J_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&J_(n,e.context,!1),pg(n,e.containerInfo)}function g0(n,e,t,i,r){return qa(),lg(r),e.flags|=256,Fn(n,e,t,i),e.child}var Gp={dehydrated:null,treeContext:null,retryLane:0};function Wp(n){return{baseLanes:n,cachePool:null,transitions:null}}function US(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(It,r&1),n===null)return Op(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wh(o,i,0,null),n=yo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Wp(t),e.memoizedState=Gp,n):Mg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Pw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ls(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ls(a,s):(s=yo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Wp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Gp,i}return s=n.child,n=s.sibling,i=Ls(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Mg(n,e){return e=wh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function dc(n,e,t,i){return i!==null&&lg(i),$a(e,n.child,null,t),n=Mg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Pw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=hd(Error(se(422))),dc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wh({mode:"visible",children:i.children},r,0,null),s=yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$a(e,n.child,null,o),e.child.memoizedState=Wp(o),e.memoizedState=Gp,s);if(!(e.mode&1))return dc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=hd(s,i,void 0),dc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Jn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Kr(n,r),cr(i,n,r,-1))}return Rg(),i=hd(Error(se(421))),dc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Gw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Mi=Cs(r.nextSibling),Ai=e,Lt=!0,or=null,n!==null&&(Fi[ki++]=Hr,Fi[ki++]=Vr,Fi[ki++]=Uo,Hr=n.id,Vr=n.overflow,Uo=e),e=Mg(e,i.children),e.flags|=4096,e)}function _0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Fp(n.return,e,t)}function dd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function NS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Fn(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_0(n,t,e);else if(n.tag===19)_0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Hf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),dd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Hf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}dd(e,!0,t,null,s);break;case"together":dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ff(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Zr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Io|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=Ls(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ls(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Lw(n,e,t){switch(e.tag){case 3:DS(e),qa();break;case 5:oS(e);break;case 1:ni(e.type)&&If(e);break;case 4:pg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(kf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?US(n,e,t):(wt(It,It.current&1),n=Zr(n,e,t),n!==null?n.sibling:null);wt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return NS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,PS(n,e,t)}return Zr(n,e,t)}var IS,Xp,OS,FS;IS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Xp=function(){};OS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ho(wr.current);var s=null;switch(t){case"input":r=dp(n,r),i=dp(n,i),s=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),s=[];break;case"textarea":r=gp(n,r),i=gp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Uf)}vp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(du.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(du.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};FS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ml(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Sn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Dw(n,e,t){var i=e.pendingProps;switch(ag(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return ni(e.type)&&Nf(),Sn(e),null;case 3:return i=e.stateNode,Ka(),bt(ti),bt(Ln),gg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(fc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,or!==null&&(Jp(or),or=null))),Xp(n,e),Sn(e),null;case 5:mg(e);var r=ho(wu.current);if(t=e.type,n!==null&&e.stateNode!=null)OS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Sn(e),null}if(n=ho(wr.current),fc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[xr]=e,i[Eu]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Ol.length;r++)Ct(Ol[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":A_(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":R_(i,s),Ct("invalid",i)}vp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cc(i.textContent,a,n),r=["children",""+a]):du.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":nc(i),C_(i,s,!0);break;case"textarea":nc(i),b_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Uf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[xr]=e,n[Eu]=i,IS(n,e,!1,!1),e.stateNode=n;e:{switch(o=xp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ol.length;r++)Ct(Ol[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":A_(n,i),r=dp(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":R_(n,i),r=gp(n,i),Ct("invalid",n);break;default:r=i}vp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?py(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&hy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&pu(n,l):typeof l=="number"&&pu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(du.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Ym(n,s,l,o))}switch(t){case"input":nc(n),C_(n,i,!1);break;case"textarea":nc(n),b_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Fs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?La(n,!!i.multiple,s,!1):i.defaultValue!=null&&La(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Uf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(n&&e.stateNode!=null)FS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=ho(wu.current),ho(wr.current),fc(e)){if(i=e.stateNode,t=e.memoizedProps,i[xr]=e,(s=i.nodeValue!==t)&&(n=Ai,n!==null))switch(n.tag){case 3:cc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[xr]=e,e.stateNode=i}return Sn(e),null;case 13:if(bt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&Mi!==null&&e.mode&1&&!(e.flags&128))tS(),qa(),e.flags|=98560,s=!1;else if(s=fc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[xr]=e}else qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else or!==null&&(Jp(or),or=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?tn===0&&(tn=3):Rg())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return Ka(),Xp(n,e),n===null&&Su(e.stateNode.containerInfo),Sn(e),null;case 10:return fg(e.type._context),Sn(e),null;case 17:return ni(e.type)&&Nf(),Sn(e),null;case 19:if(bt(It),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ml(s,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Hf(n),o!==null){for(e.flags|=128,Ml(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>Qa&&(e.flags|=128,i=!0,Ml(s,!1),e.lanes=4194304)}else{if(!i)if(n=Hf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ml(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Sn(e),null}else 2*Wt()-s.renderingStartTime>Qa&&t!==1073741824&&(e.flags|=128,i=!0,Ml(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=It.current,wt(It,i?t&1|2:t&1),e):(Sn(e),null);case 22:case 23:return Cg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gi&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Uw(n,e){switch(ag(e),e.tag){case 1:return ni(e.type)&&Nf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ka(),bt(ti),bt(Ln),gg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return mg(e),null;case 13:if(bt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));qa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(It),null;case 4:return Ka(),null;case 10:return fg(e.type._context),null;case 22:case 23:return Cg(),null;case 24:return null;default:return null}}var pc=!1,An=!1,Nw=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ta(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function Yp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var v0=!1;function Iw(n,e){if(bp=Pf,n=Vy(),sg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Pp={focusedElem:n,selectionRange:t},Pf=!1,Se=e;Se!==null;)if(e=Se,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Se=n;else for(;Se!==null;){e=Se;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:rr(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Ht(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}return _=v0,v0=!1,_}function Kl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Yp(e,t,s)}r=r.next}while(r!==i)}}function Eh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function jp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function kS(n){var e=n.alternate;e!==null&&(n.alternate=null,kS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[xr],delete e[Eu],delete e[Up],delete e[_w],delete e[vw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zS(n){return n.tag===5||n.tag===3||n.tag===4}function x0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function qp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Uf));else if(i!==4&&(n=n.child,n!==null))for(qp(n,e,t),n=n.sibling;n!==null;)qp(n,e,t),n=n.sibling}function $p(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for($p(n,e,t),n=n.sibling;n!==null;)$p(n,e,t),n=n.sibling}var hn=null,sr=!1;function ns(n,e,t){for(t=t.child;t!==null;)BS(n,e,t),t=t.sibling}function BS(n,e,t){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(mh,t)}catch{}switch(t.tag){case 5:An||Ta(t,e);case 6:var i=hn,r=sr;hn=null,ns(n,e,t),hn=i,sr=r,hn!==null&&(sr?(n=hn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):hn.removeChild(t.stateNode));break;case 18:hn!==null&&(sr?(n=hn,t=t.stateNode,n.nodeType===8?od(n.parentNode,t):n.nodeType===1&&od(n,t),vu(n)):od(hn,t.stateNode));break;case 4:i=hn,r=sr,hn=t.stateNode.containerInfo,sr=!0,ns(n,e,t),hn=i,sr=r;break;case 0:case 11:case 14:case 15:if(!An&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yp(t,e,o),r=r.next}while(r!==i)}ns(n,e,t);break;case 1:if(!An&&(Ta(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}ns(n,e,t);break;case 21:ns(n,e,t);break;case 22:t.mode&1?(An=(i=An)||t.memoizedState!==null,ns(n,e,t),An=i):ns(n,e,t);break;default:ns(n,e,t)}}function y0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Nw),e.forEach(function(i){var r=Ww.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ji(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:hn=a.stateNode,sr=!1;break e;case 3:hn=a.stateNode.containerInfo,sr=!0;break e;case 4:hn=a.stateNode.containerInfo,sr=!0;break e}a=a.return}if(hn===null)throw Error(se(160));BS(s,o,r),hn=null,sr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)HS(e,n),e=e.sibling}function HS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ji(e,n),dr(n),i&4){try{Kl(3,n,n.return),Eh(3,n)}catch(g){Ht(n,n.return,g)}try{Kl(5,n,n.return)}catch(g){Ht(n,n.return,g)}}break;case 1:Ji(e,n),dr(n),i&512&&t!==null&&Ta(t,t.return);break;case 5:if(Ji(e,n),dr(n),i&512&&t!==null&&Ta(t,t.return),n.flags&32){var r=n.stateNode;try{pu(r,"")}catch(g){Ht(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&uy(r,s),xp(a,o);var u=xp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?py(r,f):c==="dangerouslySetInnerHTML"?hy(r,f):c==="children"?pu(r,f):Ym(r,c,f,u)}switch(a){case"input":pp(r,s);break;case"textarea":cy(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?La(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?La(r,!!s.multiple,s.defaultValue,!0):La(r,!!s.multiple,s.multiple?[]:"",!1))}r[Eu]=s}catch(g){Ht(n,n.return,g)}}break;case 6:if(Ji(e,n),dr(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Ht(n,n.return,g)}}break;case 3:if(Ji(e,n),dr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{vu(e.containerInfo)}catch(g){Ht(n,n.return,g)}break;case 4:Ji(e,n),dr(n);break;case 13:Ji(e,n),dr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wg=Wt())),i&4&&y0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(An=(u=An)||c,Ji(e,n),An=u):Ji(e,n),dr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Se=n,c=n.child;c!==null;){for(f=Se=c;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:Kl(4,d,d.return);break;case 1:Ta(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Ht(i,t,g)}}break;case 5:Ta(d,d.return);break;case 22:if(d.memoizedState!==null){M0(f);continue}}p!==null?(p.return=d,Se=p):M0(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dy("display",o))}catch(g){Ht(n,n.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Ht(n,n.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ji(e,n),dr(n),i&4&&y0(n);break;case 21:break;default:Ji(e,n),dr(n)}}function dr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(zS(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pu(r,""),i.flags&=-33);var s=x0(n);$p(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=x0(n);qp(n,a,o);break;default:throw Error(se(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Ow(n,e,t){Se=n,VS(n)}function VS(n,e,t){for(var i=(n.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||An;a=pc;var u=An;if(pc=o,(An=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?E0(r):l!==null?(l.return=o,Se=l):E0(r);for(;s!==null;)Se=s,VS(s),s=s.sibling;Se=r,pc=a,An=u}S0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):S0(n)}}function S0(n){for(;Se!==null;){var e=Se;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:An||Eh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!An)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:rr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&s0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}s0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&vu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}An||e.flags&512&&jp(e)}catch(d){Ht(e,e.return,d)}}if(e===n){Se=null;break}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}}function M0(n){for(;Se!==null;){var e=Se;if(e===n){Se=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Se=t;break}Se=e.return}}function E0(n){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Eh(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{jp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{jp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Fw=Math.ceil,Wf=ts.ReactCurrentDispatcher,Eg=ts.ReactCurrentOwner,qi=ts.ReactCurrentBatchConfig,ct=0,un=null,$t=null,gn=0,gi=0,wa=Xs(0),tn=0,bu=null,Io=0,Th=0,Tg=0,Zl=null,$n=null,wg=0,Qa=1/0,Or=null,Xf=!1,Kp=null,bs=null,mc=!1,gs=null,Yf=0,Ql=0,Zp=null,hf=-1,df=0;function Gn(){return ct&6?Wt():hf!==-1?hf:hf=Wt()}function Ps(n){return n.mode&1?ct&2&&gn!==0?gn&-gn:yw.transition!==null?(df===0&&(df=Ay()),df):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Uy(n.type)),n):1}function cr(n,e,t,i){if(50<Ql)throw Ql=0,Zp=null,Error(se(185));Vu(n,t,i),(!(ct&2)||n!==un)&&(n===un&&(!(ct&2)&&(Th|=t),tn===4&&ds(n,gn)),ii(n,i),t===1&&ct===0&&!(e.mode&1)&&(Qa=Wt()+500,yh&&Ys()))}function ii(n,e){var t=n.callbackNode;y1(n,e);var i=bf(n,n===un?gn:0);if(i===0)t!==null&&D_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&D_(t),e===1)n.tag===0?xw(T0.bind(null,n)):Qy(T0.bind(null,n)),mw(function(){!(ct&6)&&Ys()}),t=null;else{switch(Cy(i)){case 1:t=Zm;break;case 4:t=Ty;break;case 16:t=Rf;break;case 536870912:t=wy;break;default:t=Rf}t=KS(t,GS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function GS(n,e){if(hf=-1,df=0,ct&6)throw Error(se(327));var t=n.callbackNode;if(Oa()&&n.callbackNode!==t)return null;var i=bf(n,n===un?gn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=jf(n,i);else{e=i;var r=ct;ct|=2;var s=XS();(un!==n||gn!==e)&&(Or=null,Qa=Wt()+500,xo(n,e));do try{Bw();break}catch(a){WS(n,a)}while(!0);cg(),Wf.current=s,ct=r,$t!==null?e=0:(un=null,gn=0,e=tn)}if(e!==0){if(e===2&&(r=Tp(n),r!==0&&(i=r,e=Qp(n,r))),e===1)throw t=bu,xo(n,0),ds(n,i),ii(n,Wt()),t;if(e===6)ds(n,i);else{if(r=n.current.alternate,!(i&30)&&!kw(r)&&(e=jf(n,i),e===2&&(s=Tp(n),s!==0&&(i=s,e=Qp(n,s))),e===1))throw t=bu,xo(n,0),ds(n,i),ii(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:io(n,$n,Or);break;case 3:if(ds(n,i),(i&130023424)===i&&(e=wg+500-Wt(),10<e)){if(bf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Gn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Dp(io.bind(null,n,$n,Or),e);break}io(n,$n,Or);break;case 4:if(ds(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ur(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Fw(i/1960))-i,10<i){n.timeoutHandle=Dp(io.bind(null,n,$n,Or),i);break}io(n,$n,Or);break;case 5:io(n,$n,Or);break;default:throw Error(se(329))}}}return ii(n,Wt()),n.callbackNode===t?GS.bind(null,n):null}function Qp(n,e){var t=Zl;return n.current.memoizedState.isDehydrated&&(xo(n,e).flags|=256),n=jf(n,e),n!==2&&(e=$n,$n=t,e!==null&&Jp(e)),n}function Jp(n){$n===null?$n=n:$n.push.apply($n,n)}function kw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!hr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ds(n,e){for(e&=~Tg,e&=~Th,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ur(e),i=1<<t;n[t]=-1,e&=~i}}function T0(n){if(ct&6)throw Error(se(327));Oa();var e=bf(n,0);if(!(e&1))return ii(n,Wt()),null;var t=jf(n,e);if(n.tag!==0&&t===2){var i=Tp(n);i!==0&&(e=i,t=Qp(n,i))}if(t===1)throw t=bu,xo(n,0),ds(n,e),ii(n,Wt()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,io(n,$n,Or),ii(n,Wt()),null}function Ag(n,e){var t=ct;ct|=1;try{return n(e)}finally{ct=t,ct===0&&(Qa=Wt()+500,yh&&Ys())}}function Oo(n){gs!==null&&gs.tag===0&&!(ct&6)&&Oa();var e=ct;ct|=1;var t=qi.transition,i=vt;try{if(qi.transition=null,vt=1,n)return n()}finally{vt=i,qi.transition=t,ct=e,!(ct&6)&&Ys()}}function Cg(){gi=wa.current,bt(wa)}function xo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,pw(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(ag(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nf();break;case 3:Ka(),bt(ti),bt(Ln),gg();break;case 5:mg(i);break;case 4:Ka();break;case 13:bt(It);break;case 19:bt(It);break;case 10:fg(i.type._context);break;case 22:case 23:Cg()}t=t.return}if(un=n,$t=n=Ls(n.current,null),gn=gi=e,tn=0,bu=null,Tg=Th=Io=0,$n=Zl=null,fo!==null){for(e=0;e<fo.length;e++)if(t=fo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}fo=null}return n}function WS(n,e){do{var t=$t;try{if(cg(),uf.current=Gf,Vf){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vf=!1}if(No=0,ln=Jt=kt=null,$l=!1,Au=0,Eg.current=null,t===null||t.return===null){tn=1,bu=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=gn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=f0(o);if(p!==null){p.flags&=-257,h0(p,o,a,s,e),p.mode&1&&c0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){c0(s,u,e),Rg();break e}l=Error(se(426))}}else if(Lt&&a.mode&1){var m=f0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),h0(m,o,a,s,e),lg(Za(l,a));break e}}s=l=Za(l,a),tn!==4&&(tn=2),Zl===null?Zl=[s]:Zl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=CS(s,l,e);r0(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(bs===null||!bs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=RS(s,a,e);r0(s,y);break e}}s=s.return}while(s!==null)}jS(t)}catch(T){e=T,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function XS(){var n=Wf.current;return Wf.current=Gf,n===null?Gf:n}function Rg(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||!(Io&268435455)&&!(Th&268435455)||ds(un,gn)}function jf(n,e){var t=ct;ct|=2;var i=XS();(un!==n||gn!==e)&&(Or=null,xo(n,e));do try{zw();break}catch(r){WS(n,r)}while(!0);if(cg(),ct=t,Wf.current=i,$t!==null)throw Error(se(261));return un=null,gn=0,tn}function zw(){for(;$t!==null;)YS($t)}function Bw(){for(;$t!==null&&!f1();)YS($t)}function YS(n){var e=$S(n.alternate,n,gi);n.memoizedProps=n.pendingProps,e===null?jS(n):$t=e,Eg.current=null}function jS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Uw(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}else if(t=Dw(t,e,gi),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);tn===0&&(tn=5)}function io(n,e,t){var i=vt,r=qi.transition;try{qi.transition=null,vt=1,Hw(n,e,t,i)}finally{qi.transition=r,vt=i}return null}function Hw(n,e,t,i){do Oa();while(gs!==null);if(ct&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(S1(n,s),n===un&&($t=un=null,gn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mc||(mc=!0,KS(Rf,function(){return Oa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=qi.transition,qi.transition=null;var o=vt;vt=1;var a=ct;ct|=4,Eg.current=null,Iw(n,t),HS(t,n),aw(Pp),Pf=!!bp,Pp=bp=null,n.current=t,Ow(t),h1(),ct=a,vt=o,qi.transition=s}else n.current=t;if(mc&&(mc=!1,gs=n,Yf=r),s=n.pendingLanes,s===0&&(bs=null),m1(t.stateNode),ii(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xf)throw Xf=!1,n=Kp,Kp=null,n;return Yf&1&&n.tag!==0&&Oa(),s=n.pendingLanes,s&1?n===Zp?Ql++:(Ql=0,Zp=n):Ql=0,Ys(),null}function Oa(){if(gs!==null){var n=Cy(Yf),e=qi.transition,t=vt;try{if(qi.transition=null,vt=16>n?16:n,gs===null)var i=!1;else{if(n=gs,gs=null,Yf=0,ct&6)throw Error(se(331));var r=ct;for(ct|=4,Se=n.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:Kl(8,c,s)}var f=c.child;if(f!==null)f.return=c,Se=f;else for(;Se!==null;){c=Se;var d=c.sibling,p=c.return;if(kS(c),c===u){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var v=n.current;for(Se=v;Se!==null;){o=Se;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Se=x;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eh(9,a)}}catch(T){Ht(a,a.return,T)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(ct=r,Ys(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(mh,n)}catch{}i=!0}return i}finally{vt=t,qi.transition=e}}return!1}function w0(n,e,t){e=Za(t,e),e=CS(n,e,1),n=Rs(n,e,1),e=Gn(),n!==null&&(Vu(n,1,e),ii(n,e))}function Ht(n,e,t){if(n.tag===3)w0(n,n,t);else for(;e!==null;){if(e.tag===3){w0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(bs===null||!bs.has(i))){n=Za(t,n),n=RS(e,n,1),e=Rs(e,n,1),n=Gn(),e!==null&&(Vu(e,1,n),ii(e,n));break}}e=e.return}}function Vw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Gn(),n.pingedLanes|=n.suspendedLanes&t,un===n&&(gn&t)===t&&(tn===4||tn===3&&(gn&130023424)===gn&&500>Wt()-wg?xo(n,0):Tg|=t),ii(n,e)}function qS(n,e){e===0&&(n.mode&1?(e=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):e=1);var t=Gn();n=Kr(n,e),n!==null&&(Vu(n,e,t),ii(n,t))}function Gw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),qS(n,t)}function Ww(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),qS(n,t)}var $S;$S=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ti.current)Jn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Jn=!1,Lw(n,e,t);Jn=!!(n.flags&131072)}else Jn=!1,Lt&&e.flags&1048576&&Jy(e,Ff,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ff(n,e),n=e.pendingProps;var r=ja(e,Ln.current);Ia(e,t),r=vg(null,e,i,n,r,t);var s=xg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ni(i)?(s=!0,If(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dg(e),r.updater=Mh,e.stateNode=r,r._reactInternals=e,zp(e,i,n,t),e=Vp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&og(e),Fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ff(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yw(i),n=rr(i,n),r){case 0:e=Hp(null,e,i,n,t);break e;case 1:e=m0(null,e,i,n,t);break e;case 11:e=d0(null,e,i,n,t);break e;case 14:e=p0(null,e,i,rr(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),Hp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),m0(n,e,i,r,t);case 3:e:{if(DS(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,sS(n,e),Bf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Za(Error(se(423)),e),e=g0(n,e,i,t,r);break e}else if(i!==r){r=Za(Error(se(424)),e),e=g0(n,e,i,t,r);break e}else for(Mi=Cs(e.stateNode.containerInfo.firstChild),Ai=e,Lt=!0,or=null,t=iS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(qa(),i===r){e=Zr(n,e,t);break e}Fn(n,e,i,t)}e=e.child}return e;case 5:return oS(e),n===null&&Op(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Lp(i,r)?o=null:s!==null&&Lp(i,s)&&(e.flags|=32),LS(n,e),Fn(n,e,o,t),e.child;case 6:return n===null&&Op(e),null;case 13:return US(n,e,t);case 4:return pg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=$a(e,null,i,t):Fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),d0(n,e,i,r,t);case 7:return Fn(n,e,e.pendingProps,t),e.child;case 8:return Fn(n,e,e.pendingProps.children,t),e.child;case 12:return Fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(kf,i._currentValue),i._currentValue=o,s!==null)if(hr(s.value,o)){if(s.children===r.children&&!ti.current){e=Zr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Fp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Fp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ia(e,t),r=Zi(r),i=i(r),e.flags|=1,Fn(n,e,i,t),e.child;case 14:return i=e.type,r=rr(i,e.pendingProps),r=rr(i.type,r),p0(n,e,i,r,t);case 15:return bS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),ff(n,e),e.tag=1,ni(i)?(n=!0,If(e)):n=!1,Ia(e,t),AS(e,i,r),zp(e,i,r,t),Vp(null,e,i,!0,n,t);case 19:return NS(n,e,t);case 22:return PS(n,e,t)}throw Error(se(156,e.tag))};function KS(n,e){return Ey(n,e)}function Xw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(n,e,t,i){return new Xw(n,e,t,i)}function bg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yw(n){if(typeof n=="function")return bg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qm)return 11;if(n===$m)return 14}return 2}function Ls(n,e){var t=n.alternate;return t===null?(t=Xi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function pf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")bg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ma:return yo(t.children,r,s,e);case jm:o=8,r|=8;break;case up:return n=Xi(12,t,e,r|2),n.elementType=up,n.lanes=s,n;case cp:return n=Xi(13,t,e,r),n.elementType=cp,n.lanes=s,n;case fp:return n=Xi(19,t,e,r),n.elementType=fp,n.lanes=s,n;case oy:return wh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ry:o=10;break e;case sy:o=9;break e;case qm:o=11;break e;case $m:o=14;break e;case us:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Xi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function yo(n,e,t,i){return n=Xi(7,n,i,e),n.lanes=t,n}function wh(n,e,t,i){return n=Xi(22,n,i,e),n.elementType=oy,n.lanes=t,n.stateNode={isHidden:!1},n}function pd(n,e,t){return n=Xi(6,n,null,e),n.lanes=t,n}function md(n,e,t){return e=Xi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function jw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$h(0),this.expirationTimes=$h(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$h(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pg(n,e,t,i,r,s,o,a,l){return n=new jw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},dg(s),n}function qw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ZS(n){if(!n)return ks;n=n._reactInternals;e:{if(Vo(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ni(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(ni(t))return Zy(n,t,e)}return e}function QS(n,e,t,i,r,s,o,a,l){return n=Pg(t,i,!0,n,r,s,o,a,l),n.context=ZS(null),t=n.current,i=Gn(),r=Ps(t),s=Xr(i,r),s.callback=e??null,Rs(t,s,r),n.current.lanes=r,Vu(n,r,i),ii(n,i),n}function Ah(n,e,t,i){var r=e.current,s=Gn(),o=Ps(r);return t=ZS(t),e.context===null?e.context=t:e.pendingContext=t,e=Xr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Rs(r,e,o),n!==null&&(cr(n,r,o,s),lf(n,r,o)),o}function qf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function A0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lg(n,e){A0(n,e),(n=n.alternate)&&A0(n,e)}function $w(){return null}var JS=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dg(n){this._internalRoot=n}Ch.prototype.render=Dg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));Ah(n,e,null,null)};Ch.prototype.unmount=Dg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Oo(function(){Ah(null,n,null,null)}),e[$r]=null}};function Ch(n){this._internalRoot=n}Ch.prototype.unstable_scheduleHydration=function(n){if(n){var e=Py();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hs.length&&e!==0&&e<hs[t].priority;t++);hs.splice(t,0,n),t===0&&Dy(n)}};function Ug(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function C0(){}function Kw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=qf(o);s.call(u)}}var o=QS(e,i,n,0,null,!1,!1,"",C0);return n._reactRootContainer=o,n[$r]=o.current,Su(n.nodeType===8?n.parentNode:n),Oo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=qf(l);a.call(u)}}var l=Pg(n,0,!1,null,null,!1,!1,"",C0);return n._reactRootContainer=l,n[$r]=l.current,Su(n.nodeType===8?n.parentNode:n),Oo(function(){Ah(e,l,t,i)}),l}function bh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qf(o);a.call(l)}}Ah(e,o,n,r)}else o=Kw(t,e,n,r,i);return qf(o)}Ry=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Il(e.pendingLanes);t!==0&&(Qm(e,t|1),ii(e,Wt()),!(ct&6)&&(Qa=Wt()+500,Ys()))}break;case 13:Oo(function(){var i=Kr(n,1);if(i!==null){var r=Gn();cr(i,n,1,r)}}),Lg(n,1)}};Jm=function(n){if(n.tag===13){var e=Kr(n,134217728);if(e!==null){var t=Gn();cr(e,n,134217728,t)}Lg(n,134217728)}};by=function(n){if(n.tag===13){var e=Ps(n),t=Kr(n,e);if(t!==null){var i=Gn();cr(t,n,e,i)}Lg(n,e)}};Py=function(){return vt};Ly=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};Sp=function(n,e,t){switch(e){case"input":if(pp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xh(i);if(!r)throw Error(se(90));ly(i),pp(i,r)}}}break;case"textarea":cy(n,t);break;case"select":e=t.value,e!=null&&La(n,!!t.multiple,e,!1)}};_y=Ag;vy=Oo;var Zw={usingClientEntryPoint:!1,Events:[Wu,xa,xh,my,gy,Ag]},El={findFiberByHostInstance:co,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qw={bundleType:El.bundleType,version:El.version,rendererPackageName:El.rendererPackageName,rendererConfig:El.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ts.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Sy(n),n===null?null:n.stateNode},findFiberByHostInstance:El.findFiberByHostInstance||$w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{mh=gc.inject(Qw),Tr=gc}catch{}}Di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zw;Di.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ug(e))throw Error(se(200));return qw(n,e,null,t)};Di.createRoot=function(n,e){if(!Ug(n))throw Error(se(299));var t=!1,i="",r=JS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pg(n,1,!1,null,null,t,!1,i,r),n[$r]=e.current,Su(n.nodeType===8?n.parentNode:n),new Dg(e)};Di.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=Sy(e),n=n===null?null:n.stateNode,n};Di.flushSync=function(n){return Oo(n)};Di.hydrate=function(n,e,t){if(!Rh(e))throw Error(se(200));return bh(null,n,e,!0,t)};Di.hydrateRoot=function(n,e,t){if(!Ug(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=JS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=QS(e,null,n,1,t??null,r,!1,s,o),n[$r]=e.current,Su(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ch(e)};Di.render=function(n,e,t){if(!Rh(e))throw Error(se(200));return bh(null,n,e,!1,t)};Di.unmountComponentAtNode=function(n){if(!Rh(n))throw Error(se(40));return n._reactRootContainer?(Oo(function(){bh(null,null,n,!1,function(){n._reactRootContainer=null,n[$r]=null})}),!0):!1};Di.unstable_batchedUpdates=Ag;Di.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Rh(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return bh(n,e,t,!1,i)};Di.version="18.3.1-next-f1338f8080-20240426";function eM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eM)}catch(n){console.error(n)}}eM(),ey.exports=Di;var Jw=ey.exports,R0=Jw;ap.createRoot=R0.createRoot,ap.hydrateRoot=R0.hydrateRoot;function Fr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function tM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pu={duration:.5,overwrite:!1,delay:0},Ng,_n,Dt,Yi=1e8,Mt=1/Yi,em=Math.PI*2,eA=em/4,tA=0,nM=Math.sqrt,nA=Math.cos,iA=Math.sin,fn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Qr=function(e){return typeof e=="number"},Ig=function(e){return typeof e>"u"},Rr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Og=function(){return typeof window<"u"},_c=function(e){return Vt(e)||fn(e)},iM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,rA=/random\([^)]+\)/g,sA=/,\s*/g,b0=/(?:-?\.?\d|\.)+/gi,rM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Aa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sM=/[+-]=-?[.\d]+/,oA=/[^,'"\[\]\s]+/gi,aA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,mr,tm,Fg,bi={},$f={},oM,aM=function(e){return($f=Ja(e,bi))&&fi},kg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Lu=function(e,t){return!t&&console.warn(e)},lM=function(e,t){return e&&(bi[e]=t)&&$f&&($f[e]=t)||bi},Du=function(){return 0},lA={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},uA={suppressEvents:!0},zg={},Ds=[],nm={},uM,vi={},_d={},P0=30,gf=[],Bg="",Hg=function(e){var t=e[0],i,r;if(Rr(t)||Vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=gf.length;r--&&!gf[r].targetTest(t););i=gf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new LM(e[r],i)))||e.splice(r,1);return e},So=function(e){return e._gsap||Hg(ji(e))[0]._gsap},cM=function(e,t,i){return(i=e[t])&&Vt(i)?e[t]():Ig(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Fa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},cA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Kf=function(){var e=Ds.length,t=Ds.slice(0),i,r;for(nm={},Ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Vg=function(e){return!!(e._initted||e._startAt||e.add)},fM=function(e,t,i,r){Ds.length&&!_n&&Kf(),e.render(t,i,!!(_n&&t<0&&Vg(e))),Ds.length&&!_n&&Kf()},hM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(oA).length<2?t:fn(e)?e.trim():e},dM=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},fA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ja=function(e,t){for(var i in t)e[i]=t[i];return e},L0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Rr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Zf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Jl=function(e){var t=e.parent||Ot,i=e.keyframes?fA(Pn(e.keyframes)):Pi;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},hA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},pM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ph=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},dA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},im=function(e,t,i,r){return e._startAt&&(_n?e._startAt.revert(mf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},pA=function n(e){return!e||e._ts&&n(e.parent)},D0=function(e){return e._repeat?el(e._tTime,e=e.duration()+e._rDelay)*e:0},el=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},Qf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lh=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Dh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lh(e),i._dirty||Mo(i,e)),e},mM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qf(e.rawTime(),t),(!t._dur||Yu(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),Mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},yr=function(e,t,i,r){return t.parent&&zs(t),t._start=Nt((Qr(i)?i:i||e!==Ot?Oi(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pM(e,t,"_first","_last",e._sort?"_start":0),rm(t)||(e._recent=t),r||mM(e,t),e._ts<0&&Dh(e,e._tTime),e},gM=function(e,t){return(bi.ScrollTrigger||kg("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},_M=function(e,t,i,r,s){if(Wg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!_n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&uM!==yi.frame)return Ds.push(e),e._lazy=[s,r],1},mA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},rm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},gA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&mA(e)&&!(!e._initted&&rm(e))||(e._ts<0||e._dp._ts<0)&&!rm(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Yu(0,e._tDur,t),c=el(l,a),e._yoyo&&c&1&&(o=1-o),c!==el(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||_n||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&_M(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&im(e,t,i,!0),e._onUpdate&&!i&&Ei(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ei(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!_n&&(Ei(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},_A=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},tl=function(e,t,i,r){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Dh(e,e._tTime=e._tDur*a),e.parent&&Lh(e),i||Mo(e.parent,e),e},U0=function(e){return e instanceof Qn?Mo(e):tl(e,e._dur)},vA={_start:0,endTime:Du,totalDuration:Du},Oi=function n(e,t,i){var r=e.labels,s=e._recent||vA,o=e.duration()>=Yi?s.endTime(!1):e._dur,a,l,u;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Pn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},eu=function(e,t,i){var r=Qr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},js=function(e,t){return e||e===0?t(e):t},Yu=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!fn(e)||!(t=aA.exec(e))?"":t[1]},xA=function(e,t,i){return js(i,function(r){return Yu(e,t,r)})},sm=[].slice,vM=function(e,t){return e&&Rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Rr(e[0]))&&!e.nodeType&&e!==mr},yA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return fn(r)&&!t||vM(r,1)?(s=i).push.apply(s,ji(r)):i.push(r)})||i},ji=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):fn(e)&&!i&&(tm||!nl())?sm.call((t||Fg).querySelectorAll(e),0):Pn(e)?yA(e,i):vM(e)?sm.call(e,0):e?[e]:[]},om=function(e){return e=ji(e)[0]||Lu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ji(t,i.querySelectorAll?i:i===e?Lu("Invalid scope")||Fg.createElement("div"):e)}},xM=function(e){return e.sort(function(){return .5-Math.random()})},yM=function(e){if(Vt(e))return e;var t=Rr(e)?e:{each:e},i=Eo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return fn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,p,_){var g=(_||t).length,m=o[g],h,v,x,y,T,w,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Yi])[1],!S){for(M=-Yi;M<(M=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],h=l?Math.min(S,g)*c-.5:r%S,v=S===Yi?0:l?g*f/S-.5:r/S|0,M=0,P=Yi,w=0;w<g;w++)x=w%S-h,y=v-(w/S|0),m[w]=T=u?Math.abs(u==="y"?y:x):nM(x*x+y*y),T>M&&(M=T),T<P&&(P=T);r==="random"&&xM(m),m.max=M-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Rn(t.amount||t.each)||0,i=i&&g<0?UA(i):i}return g=(m[d]-m.min)/m.max||0,Nt(m.b+(i?i(g):g)*m.v)+m.u}},am=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Qr(i)?0:Rn(i))}},SM=function(e,t){var i=Pn(e),r,s;return!i&&Rr(e)&&(r=i=e.radius||Yi,e.values?(e=ji(e.values),(s=!Qr(e[0]))&&(r*=r)):e=am(e.increment)),js(t,i?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Yi,c=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Qr(o)?c:c+Rn(o)}:am(e))},MM=function(e,t,i,r){return js(Pn(e)?!t:i===!0?!!(i=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},SA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},MA=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},EA=function(e,t,i){return TM(e,t,0,1,i)},EM=function(e,t,i){return js(i,function(r){return e[~~t(r)]})},TA=function n(e,t,i){var r=t-e;return Pn(e)?EM(e,n(0,e.length),t):js(i,function(s){return(r+(s-e)%r)%r+e})},wA=function n(e,t,i){var r=t-e,s=r*2;return Pn(e)?EM(e,n(0,e.length-1),t):js(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Uu=function(e){return e.replace(rA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(sA);return MM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},TM=function(e,t,i,r,s){var o=t-e,a=r-i;return js(s,function(l){return i+((l-e)/o*a||0)})},AA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=fn(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return c[g](_-g)},i=t}else r||(e=Ja(Pn(e)?[]:{},e));if(!c){for(l in t)Gg.call(a,e,l,"get",t[l]);s=function(_){return jg(_,a)||(o?e.p:e)}}}return js(i,s)},N0=function(e,t,i){var r=e.labels,s=Yi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ei=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ds.length&&Kf(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},Fl=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_n),e.progress()<1&&Ei(e,"onInterrupt"),e},Ca,wM=[],AM=function(e){if(e)if(e=!e.name&&e.default||e,Og()||e.headless){var t=e.name,i=Vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Du,render:jg,add:Gg,kill:GA,modifier:VA,rawVars:0},o={targetTest:0,get:0,getSetter:Yg,aliases:{},register:0};if(nl(),e!==r){if(vi[t])return;Pi(r,Pi(Zf(e,s),o)),Ja(r.prototype,Ja(s,Zf(e,o))),vi[r.prop=t]=r,e.targetTest&&(gf.push(r),zg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}lM(t,r),e.register&&e.register(fi,r,oi)}else wM.push(e)},St=255,kl={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},vd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},CM=function(e,t,i){var r=e?Qr(e)?[e>>16,e>>8&St,e&St]:0:kl.black,s,o,a,l,u,c,f,d,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),kl[e])r=kl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(b0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=vd(l+1/3,s,o),r[1]=vd(l,s,o),r[2]=vd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(rM),i&&r.length<4&&(r[3]=1),r}else r=e.match(b0)||kl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(p=f-d,u=c>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},RM=function(e){var t=[],i=[],r=-1;return e.split(Us).forEach(function(s){var o=s.match(Aa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},I0=function(e,t,i){var r="",s=(e+r).match(Us),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=CM(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=RM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Us,"1").split(Aa),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Us),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Us=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in kl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),CA=/hsl[a]?\(/,bM=function(e){var t=e.join(" "),i;if(Us.lastIndex=0,Us.test(t))return i=CA.test(t),e[1]=I0(e[1],i),e[0]=I0(e[0],i,RM(e[1])),!0},Nu,yi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,p,_=function g(m){var h=n()-r,v=m===!0,x,y,T,w;if((h>e||h<0)&&(i+=h-t),r+=h,T=r-i,x=T-o,(x>0||v)&&(w=++f.frame,d=T-f.time*1e3,f.time=T=T/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](T,d,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){oM&&(!tm&&Og()&&(mr=tm=window,Fg=mr.document||{},bi.gsap=fi,(mr.gsapVersions||(mr.gsapVersions=[])).push(fi.version),aM($f||mr.GreenSockGlobals||!mr.gsap&&mr||{}),wM.forEach(AM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Nu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Nu=0,u=Du},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,h,v){var x=h?function(y,T,w,M){m(y,T,w,M),f.remove(x)}:m;return f.remove(m),a[v?"unshift":"push"](x),nl(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},f}(),nl=function(){return!Nu&&yi.wake()},ut={},RA=/^[\d.\-M][\d.\-,\s]/,bA=/["']/g,PA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(bA,"").trim():+u,r=l.substr(a+1).trim();return t},LA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},DA=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[PA(t[1])]:LA(e).split(",").map(hM)):ut._CE&&RA.test(e)?ut._CE("",e):i},UA=function(e){return function(t){return 1-e(1-t)}},Eo=function(e,t){return e&&(Vt(e)?e:ut[e]||DA(e))||t},Go=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){ut[a]=bi[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},PM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/em*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*iA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:PM(a);return s=em/s,l.config=function(u,c){return n(e,u,c)},l},yd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:PM(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Go(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Go("Elastic",xd("in"),xd("out"),xd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Go("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Go("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Go("Circ",function(n){return-(nM(1-n*n)-1)});Go("Sine",function(n){return n===1?1:-nA(n*eA)+1});Go("Back",yd("in"),yd("out"),yd());ut.SteppedEase=ut.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Yu(0,o,a)|0)+s)*i}}};Pu.ease=ut["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Bg+=n+","+n+"Params,"});var LM=function(e,t){this.id=tA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cM,this.set=t?t.getSetter:Yg},Iu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,tl(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Nu||yi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,tl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(nl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Dh(this,i),!s._dp||s.parent||mM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&yr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),fM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+D0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+D0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?el(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Qf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Yu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Lh(this),dA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&yr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=uA);var r=_n;return _n=i,Vg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),_n=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,U0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,U0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Oi(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Vt(i)?i:dM,l=function(){var c=r.then;r.then=null,s&&s(),Vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Fl(this)},n}();Pi(Iu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Qn=function(n){tM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),Ot&&yr(i.parent||Ot,Fr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&gM(Fr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return eu(0,arguments,this),this},t.from=function(r,s,o){return eu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return eu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Jl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,Oi(this,o),1),this},t.call=function(r,s,o){return yr(this,qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new qt(r,o,Oi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Jl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Jl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Nt(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,p,_,g,m,h,v,x,y,T,w,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,x=this._ts,h=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Nt(c%m),c===l?(g=this._repeat,d=u):(T=Nt(c/m),g=~~T,g&&g===T&&(d=u,g--),d>u&&(d=u)),T=el(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),w&&g&1&&(d=u-d,M=1),g!==T&&!this._lock){var P=w&&T&1,S=P===(w&&g&1);if(g<T&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Nt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=_A(this,Nt(a),Nt(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(Ei(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-Mt);break}}p=_}else{p=this._last;for(var E=r<0?r:d;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||_n&&Vg(p)),d!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=E?-Mt:Mt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Lh(this),this.render(r,s,o);this._onUpdate&&!s&&Ei(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ei(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Qr(s)||(s=Oi(this,s,r)),!(r instanceof Iu)){if(Pn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(fn(r))return this.addLabel(r,s);if(Vt(r))r=qt.delayedCall(0,r);else return this}return this!==r?yr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return fn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&Ph(this,r),r===this._recent&&(this._recent=this._last),Mo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(yi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Oi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=qt.delayedCall(0,s||Du,o);return a.data="isPause",this._hasPause=1,yr(this,a,Oi(this,r))},t.removePause=function(r){var s=this._first;for(r=Oi(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)_s!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ji(r),l=this._first,u=Qr(s),c;l;)l instanceof qt?cA(l._targets,a)&&(u?(!_s||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Oi(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,p,_=qt.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&tl(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Oi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),N0(this,Oi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),N0(this,Oi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Nt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Mo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Yi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,yr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=Nt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;tl(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(fM(Ot,Qf(r,Ot)),uM=yi.frame),yi.frame>=P0){P0+=Ci.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Ci.autoSleep&&yi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||yi.sleep()}}},e}(Iu);Pi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var NA=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,FM,null,s),u=0,c=0,f,d,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Uu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(gd)||[];f=gd.exec(r);)_=f[0],g=r.substring(u,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Fa(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=gd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(sM.test(r)||h)&&(l.e=0),this._pt=l,l},Gg=function(e,t,i,r,s,o,a,l,u,c){Vt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Vt(f)?u?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Vt(f)?u?zA:IM:Xg,_;if(fn(r)&&(~r.indexOf("random(")&&(r=Uu(r)),r.charAt(1)==="="&&(_=Fa(d,r)+(Rn(d)||0),(_||_===0)&&(r=_))),!c||d!==r||lm)return!isNaN(d*r)&&r!==""?(_=new oi(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?HA:OM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&kg(t,r),NA.call(this,e,t,d,r,p,l||Ci.stringFilter,u))},IA=function(e,t,i,r,s){if(Vt(e)&&(e=tu(e,s,t,i,r)),!Rr(e)||e.style&&e.nodeType||Pn(e)||iM(e))return fn(e)?tu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=tu(e[a],s,t,i,r);return o},DM=function(e,t,i,r,s,o){var a,l,u,c;if(vi[e]&&(a=new vi[e]).init(s,a.rawVars?t[e]:IA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ca))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},_s,lm,Wg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!Ng,y=e.timeline,T=r.easeReverse||f,w,M,P,S,E,I,D,K,L,F,k,H,U;if(y&&(!d||!s)&&(s="none"),e._ease=Eo(s,Pu.ease),e._rEase=T&&(Eo(T)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||d&&!r.stagger){if(K=m[0]?So(m[0]).harness:0,H=K&&r[K.prop],w=Zf(r,zg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?mf:lA),g._lazy=0),o){if(zs(e._startAt=qt.set(m,Pi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&ri(l),startAt:null,delay:0,onUpdate:u&&function(){return Ei(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n||!a&&!p)&&e._startAt.revert(mf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),P=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ri(l),immediateRender:a,stagger:0,parent:h},w),H&&(P[K.prop]=H),zs(e._startAt=qt.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n?e._startAt.revert(mf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ri(l)||l&&!_,M=0;M<m.length;M++){if(E=m[M],D=E._gsap||Hg(m)[M]._gsap,e._ptLookup[M]=F={},nm[D.id]&&Ds.length&&Kf(),k=v===m?M:v.indexOf(E),K&&(L=new K).init(E,H||w,e,k,v)!==!1&&(e._pt=S=new oi(e._pt,E,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(O){F[O]=S}),L.priority&&(I=1)),!K||H)for(P in w)vi[P]&&(L=DM(P,w,e,k,E,v))?L.priority&&(I=1):F[P]=S=Gg.call(e,E,P,"get",w[P],k,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(E,e._op[M]),x&&e._pt&&(_s=e,Ot.killTweensOf(E,F,e.globalTime(t)),U=!e.parent,_s=0),e._pt&&l&&(nm[D.id]=1)}I&&kM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!U,d&&t<=0&&y.render(Yi,!0,!0)},OA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return lm=1,e.vars[t]="+=0",Wg(e,a),lm=0,l?Lu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Gt(i)+Rn(f.e)),f.b&&(f.b=c.s+Rn(f.b))},FA=function(e,t){var i=e[0]?So(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ja({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},kA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Pn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},tu=function(e,t,i,r,s){return Vt(e)?e.call(t,i,r,s):fn(e)&&~e.indexOf("random(")?Uu(e):e},UM=Bg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",NM={};si(UM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return NM[n]=1});var qt=function(n){tM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Jl(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=r.parent||Ot,v=(Pn(i)||iM(i)?Qr(i[0]):"length"in r)?[i]:ji(i),x,y,T,w,M,P,S,E;if(a._targets=v.length?Hg(v):Lu("GSAP target "+i+" not found. https://gsap.com",!Ci.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||_c(u)||_c(c)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Qn({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=Fr(a),x._start=0,d||_c(u)||_c(c)){if(w=v.length,S=d&&yM(d),Rr(d))for(M in d)~UM.indexOf(M)&&(E||(E={}),E[M]=d[M]);for(y=0;y<w;y++)T=Zf(r,NM),T.stagger=0,I&&(T.easeReverse=I),E&&Ja(T,E),P=v[y],T.duration=+tu(u,Fr(a),y,P,v),T.delay=(+tu(c,Fr(a),y,P,v)||0)-a._delay,!d&&w===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(P,T,S?S(y,P,v):0),x._ease=ut.none;x.duration()?u=c=0:a.timeline=0}else if(_){Jl(Pi(x.vars.defaults,{ease:"none"})),x._ease=Eo(_.ease||r.ease||"none");var D=0,K,L,F;if(Pn(_))_.forEach(function(k){return x.to(v,k,">")}),x.duration();else{T={};for(M in _)M==="ease"||M==="easeEach"||kA(M,_[M],T,_.easeEach);for(M in T)for(K=T[M].sort(function(k,H){return k.t-H.t}),D=0,y=0;y<K.length;y++)L=K[y],F={ease:L.e,duration:(L.t-(y?K[y-1].t:0))/100*u},F[M]=L.v,x.to(v,F,D),D+=F.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!Ng&&(_s=Fr(a),Ot.killTweensOf(v),_s=0),yr(h,Fr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===Nt(h._time)&&ri(f)&&pA(Fr(a))&&h.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),m&&gM(Fr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Mt&&!c?l:r<Mt?0:r,d,p,_,g,m,h,v,x;if(!u)gA(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(d=Nt(f%g),f===l?(_=this._repeat,d=u):(m=Nt(f/g),_=~~m,_&&_===m?(d=u,_--):d>u&&(d=u)),h=this._yoyo&&_&1,h&&(d=u-d),m=el(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Nt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(_M(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var T=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/u);if(this._from&&(this.ratio=v=1-v),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(Ei(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&im(this,r,s,o),Ei(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Ei(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&im(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&zs(this,1),!s&&!(c&&!a)&&(f||a||h)&&(Ei(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Nu||yi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wg(this,u),c=this._ease(u/this._dur),OA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Dh(this,0),this.parent||pM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_s&&_s.vars.overwrite!==!0)._first||Fl(this),this.parent&&o!==this.timeline.totalDuration()&&tl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ji(r):a,u=this._ptLookup,c=this._pt,f,d,p,_,g,m,h;if((!s||s==="all")&&hA(a,l))return s==="all"&&(this._pt=0),Fl(this);for(f=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},si(s,function(v){return g[v]=1}),s=g),s=FA(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=u[h],s==="all"?(f[h]=s,_=d,p={}):(p=f[h]=f[h]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Ph(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Fl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return eu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return eu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Iu);Pi(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Qn,t=sm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Xg=function(e,t,i){return e[t]=i},IM=function(e,t,i){return e[t](i)},zA=function(e,t,i,r){return e[t](r.fp,i)},BA=function(e,t,i){return e.setAttribute(t,i)},Yg=function(e,t){return Vt(e[t])?IM:Ig(e[t])&&e.setAttribute?BA:Xg},OM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},HA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},FM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},jg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},VA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},GA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ph(this,t,"_pt"):t.dep||(i=1),t=r;return!i},WA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},kM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||OM,this.d=l||this,this.set=u||Xg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=WA,this.m=i,this.mt=s,this.tween=r},n}();si(Bg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return zg[n]=1});bi.TweenMax=bi.TweenLite=qt;bi.TimelineLite=bi.TimelineMax=Qn;Ot=new Qn({sortChildren:!1,defaults:Pu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ci.stringFilter=bM;var To=[],_f={},XA=[],O0=0,YA=0,Sd=function(e){return(_f[e]||XA).map(function(t){return t()})},um=function(){var e=Date.now(),t=[];e-O0>2&&(Sd("matchMediaInit"),To.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=mr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Sd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),O0=e,Sd("matchMedia"))},zM=function(){function n(t,i){this.selector=i&&om(i),this.data=[],this._r=[],this.isReverted=!1,this.id=YA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Vt(i)&&(s=r,r=i,i=Vt);var o=this,a=function(){var u=Dt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=om(s)),Dt=o,f=r.apply(o,arguments),Vt(f)&&o._r.push(f),Dt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Qn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=To.length;o--;)To[o].id===this.id&&To.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),jA=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Rr(i)||(i={matches:i});var o=new zM(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=mr.matchMedia(i[u]),l&&(To.indexOf(o)<0&&To.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(um):l.addEventListener("change",um)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Jf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return AM(r)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){fn(e)&&(e=ji(e)[0]);var s=So(e||{}).get,o=i?dM:hM;return i==="native"&&(i=""),e&&(t?o((vi[t]&&vi[t].get||s)(e,t,i,r)):function(a,l,u){return o((vi[a]&&vi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ji(e),e.length>1){var r=e.map(function(c){return fi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=vi[t],a=So(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;Ca._pt=0,f.init(e,i?c+i:c,Ca,0,[e]),f.render(1,f),Ca._pt&&jg(1,Ca)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=fi.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,Pu.ease)),L0(Pu,e||{})},config:function(e){return L0(Ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!vi[a]&&!bi[a]&&Lu(t+" effect requires "+a+" plugin.")}),_d[t]=function(a,l,u){return i(ji(a),Pi(l||{},s),u)},o&&(Qn.prototype[t]=function(a,l,u){return this.add(_d[t](a,Rr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ut[e]=Eo(t)},parseEase:function(e,t){return arguments.length?Eo(e,t):ut},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qn(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&yr(i,r,r._start-r._delay),r=s;return yr(Ot,i,0),i},context:function(e,t){return e?new zM(e,t):Dt},matchMedia:function(e){return new jA(e)},matchMediaRefresh:function(){return To.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||um()},addEventListener:function(e,t){var i=_f[e]||(_f[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=_f[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:TA,wrapYoyo:wA,distribute:yM,random:MM,snap:SM,normalize:EA,getUnit:Rn,clamp:xA,splitColor:CM,toArray:ji,selector:om,mapRange:TM,pipe:SA,unitize:MA,interpolate:AA,shuffle:xM},install:aM,effects:_d,ticker:yi,updateRoot:Qn.updateRoot,plugins:vi,globalTimeline:Ot,core:{PropTween:oi,globals:lM,Tween:qt,Timeline:Qn,Animation:Iu,getCache:So,_removeLinkedListItem:Ph,reverting:function(){return _n},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Ng=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Jf[n]=qt[n]});yi.add(Qn.updateRoot);Ca=Jf.to({},{duration:0});var qA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},$A=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=qA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Md=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(fn(s)&&(l={},si(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}$A(a,s)}}}},fi=Jf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)_n?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Md("roundProps",am),Md("modifiers"),Md("snap",SM))||Jf;qt.version=Qn.version=fi.version="3.15.0";oM=1;Og()&&nl();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var F0,vs,ka,qg,po,k0,$g,KA=function(){return typeof window<"u"},Jr={},ro=180/Math.PI,za=Math.PI/180,Xo=Math.atan2,z0=1e8,Kg=/([A-Z])/g,ZA=/(left|right|width|margin|padding|x)/i,QA=/[\s,\(]\S/,Sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},cm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},eC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},nC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},BM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},HM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},iC=function(e,t,i){return e.style[t]=i},rC=function(e,t,i){return e.style.setProperty(t,i)},sC=function(e,t,i){return e._gsap[t]=i},oC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},aC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},lC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",ai=Ft+"Origin",uC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Jr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Sr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zr(r,a)}):this.tfm[e]=o.x?o[e]:zr(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return Sr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},VM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},cC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$g(),(!s||!s.isStart)&&!i[Ft]&&(VM(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},GM=function(e,t){var i={target:e,props:[],revert:cC,save:uC};return e._gsap||fi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},WM,fm=function(e,t){var i=vs.createElementNS?vs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vs.createElement(e);return i&&i.style?i:vs.createElement(e)},Ti=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Kg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,il(t)||t,1)||""},B0="O,Moz,ms,Ms,Webkit".split(","),il=function(e,t,i){var r=t||po,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(B0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?B0[o]:"")+e},hm=function(){KA()&&window.document&&(F0=window,vs=F0.document,ka=vs.documentElement,po=fm("div")||{style:{}},fm("div"),Ft=il(Ft),ai=Ft+"Origin",po.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",WM=!!il("perspective"),$g=fi.core.reverting,qg=1)},H0=function(e){var t=e.ownerSVGElement,i=fm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ka.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ka.removeChild(i),s},V0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},XM=function(e){var t,i;try{t=e.getBBox()}catch{t=H0(e),i=1}return t&&(t.width||t.height)||i||(t=H0(e)),t&&!t.width&&!t.x&&!t.y?{x:+V0(e,["x","cx","x1"])||0,y:+V0(e,["y","cy","y1"])||0,width:0,height:0}:t},YM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&XM(e))},Bs=function(e,t){if(t){var i=e.style,r;t in Jr&&t!==ai&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Kg,"-$1").toLowerCase())):i.removeAttribute(t)}},xs=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?HM:BM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},G0={deg:1,rad:1,turn:1},fC={grid:1,flex:1},Hs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=po.style,l=ZA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||G0[r]||G0[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&YM(e),(p||o==="%")&&(Jr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Gt(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===vs||!g.appendChild)&&(g=vs.body),m=g._gsap,m&&p&&m.width&&l&&m.time===yi.time&&!m.uncache)return Gt(s/m.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[c],v?e.style[t]=v:Bs(e,t)}else(p||o==="%")&&!fC[Ti(g,"display")]&&(a.position=Ti(e,"position")),g===e&&(a.position="static"),g.appendChild(po),_=po[c],g.removeChild(po),a.position="absolute";return l&&p&&(m=So(g),m.time=yi.time,m.width=g[c]),Gt(d?_*s/f:_&&s?f/_*s:0)},zr=function(e,t,i,r){var s;return qg||hm(),t in Sr&&t!=="transform"&&(t=Sr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Jr[t]&&t!=="transform"?(s=Fu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:th(Ti(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=eh[t]&&eh[t](e,t,i)||Ti(e,t)||cM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hs(e,t,s,i)+i:s},hC=function(e,t,i,r){if(!i||i==="none"){var s=il(t,e,1),o=s&&Ti(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ti(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,FM),l=0,u=0,c,f,d,p,_,g,m,h,v,x,y,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ti(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Ti(e,t)||r,g?e.style[t]=g:Bs(e,t)),c=[i,r],bM(c),i=c[0],r=c[1],d=i.match(Aa)||[],T=r.match(Aa)||[],T.length){for(;f=Aa.exec(r);)m=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=d[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Fa(p,m)+y),h=parseFloat(m),x=m.substr((h+"").length),l=Aa.lastIndex-x.length,x||(x=x||Ci.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Hs(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?HM:BM;return sM.test(r)&&(a.e=0),this._pt=a,a},W0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=W0[i]||i,t[1]=W0[r]||r,t.join(" ")},pC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Jr[a]&&(l=1,a=a==="transformOrigin"?ai:Ft),Bs(i,a);l&&(Bs(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Fu(i,1),o.uncache=1,VM(r)))}},eh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,pC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ou=[1,0,0,1,0,0],jM={},qM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},X0=function(e){var t=Ti(e,Ft);return qM(t)?Ou:t.substr(7).match(rM).map(Gt)},Zg=function(e,t){var i=e._gsap||So(e),r=e.style,s=X0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ou:s):(s===Ou&&!e.offsetParent&&e!==ka&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,ka.appendChild(e)),s=X0(e),l?r.display=l:Bs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ka.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dm=function(e,t,i,r,s,o){var a=e._gsap,l=s||Zg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,M,P,S;i?l!==Ou&&(M=p*m-_*g)&&(P=y*(m/M)+T*(-g/M)+(g*v-m*h)/M,S=y*(-_/M)+T*(p/M)-(p*v-_*h)/M,y=P,T=S):(w=XM(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(h=y-u,v=T-c,a.xOffset=f+(h*p+v*g)-h,a.yOffset=d+(h*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(xs(o,a,"xOrigin",u,y),xs(o,a,"yOrigin",c,T),xs(o,a,"xOffset",f,a.xOffset),xs(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Fu=function(e,t){var i=e._gsap||new LM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ti(e,ai)||"0",c,f,d,p,_,g,m,h,v,x,y,T,w,M,P,S,E,I,D,K,L,F,k,H,U,O,R,$,Q,j,Z,ie;return c=f=d=g=m=h=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&YM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=Zg(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),dm(e,H||u,!!H||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,w=i.yOrigin||0,M!==Ou&&(I=M[0],D=M[1],K=M[2],L=M[3],c=F=M[4],f=k=M[5],M.length===6?(p=Math.sqrt(I*I+D*D),_=Math.sqrt(L*L+K*K),g=I||D?Xo(D,I)*ro:0,v=K||L?Xo(K,L)*ro+g:0,v&&(_*=Math.abs(Math.cos(v*za))),i.svg&&(c-=T-(T*I+w*K),f-=w-(T*D+w*L))):(ie=M[6],j=M[7],R=M[8],$=M[9],Q=M[10],Z=M[11],c=M[12],f=M[13],d=M[14],P=Xo(ie,Q),m=P*ro,P&&(S=Math.cos(-P),E=Math.sin(-P),H=F*S+R*E,U=k*S+$*E,O=ie*S+Q*E,R=F*-E+R*S,$=k*-E+$*S,Q=ie*-E+Q*S,Z=j*-E+Z*S,F=H,k=U,ie=O),P=Xo(-K,Q),h=P*ro,P&&(S=Math.cos(-P),E=Math.sin(-P),H=I*S-R*E,U=D*S-$*E,O=K*S-Q*E,Z=L*E+Z*S,I=H,D=U,K=O),P=Xo(D,I),g=P*ro,P&&(S=Math.cos(P),E=Math.sin(P),H=I*S+D*E,U=F*S+k*E,D=D*S-I*E,k=k*S-F*E,I=H,F=U),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Gt(Math.sqrt(I*I+D*D+K*K)),_=Gt(Math.sqrt(k*k+ie*ie)),P=Xo(F,k),v=Math.abs(P)>2e-4?P*ro:0,y=Z?1/(Z<0?-Z:Z):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!qM(Ti(e,Ft)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Gt(p),i.scaleY=Gt(_),i.rotation=Gt(g)+a,i.rotationX=Gt(m)+a,i.rotationY=Gt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=th(u)),i.xOffset=i.yOffset=0,i.force3D=Ci.force3D,i.renderTransform=i.svg?gC:WM?$M:mC,i.uncache=0,i},th=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ed=function(e,t,i){var r=Rn(t);return Gt(parseFloat(t)+parseFloat(Hs(e,"x",i+"px",r)))+r},mC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$M(e,t)},Ks="0deg",Tl="0px",Zs=") ",$M=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",T=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==Ks||c!==Ks)){var w=parseFloat(c)*za,M=Math.sin(w),P=Math.cos(w),S;w=parseFloat(f)*za,S=Math.cos(w),o=Ed(v,o,M*S*-x),a=Ed(v,a,-Math.sin(w)*-x),l=Ed(v,l,P*S*-x+x)}m!==Tl&&(y+="perspective("+m+Zs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==Tl||a!==Tl||l!==Tl)&&(y+=l!==Tl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zs),u!==Ks&&(y+="rotate("+u+Zs),c!==Ks&&(y+="rotateY("+c+Zs),f!==Ks&&(y+="rotateX("+f+Zs),(d!==Ks||p!==Ks)&&(y+="skew("+d+", "+p+Zs),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Zs),v.style[Ft]=y||"translate(0, 0)"},gC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),T,w,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=za,u*=za,T=Math.cos(l)*f,w=Math.sin(l)*f,M=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=za,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Gt(T),w=Gt(w),M=Gt(M),P=Gt(P)):(T=f,P=d,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Hs(p,"x",o,"px"),y=Hs(p,"y",a,"px")),(_||g||m||h)&&(x=Gt(x+_-(_*T+g*M)+m),y=Gt(y+g-(_*w+g*P)+h)),(r||s)&&(S=p.getBBox(),x=Gt(x+r/100*S.width),y=Gt(y+s/100*S.height)),S="matrix("+T+","+w+","+M+","+P+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Ft]=S)},_C=function(e,t,i,r,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ro:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*z0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*z0)%o-~~(u/o)*o)),e._pt=d=new oi(e._pt,t,i,r,u,JA),d.e=c,d.u="deg",e._props.push(i),d},Y0=function(e,t){for(var i in t)e[i]=t[i];return e},vC=function(e,t,i){var r=Y0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Fu(i,1),Bs(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Fu(i,1),o[Ft]=u);for(l in Jr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Rn(u),_=Rn(c),f=p!==_?Hs(i,l,u,_):parseFloat(u),d=parseFloat(c),e._pt=new oi(e._pt,a,l,f,d-f,cm),e._pt.u=_||0,e._props.push(l));Y0(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});eh[e>1?"border"+n:n]=function(a,l,u,c,f){var d,p;if(arguments.length<4)return d=o.map(function(_){return zr(a,_,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,f)}});var KM={name:"css",register:hm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,p,_,g,m,h,v,x,y,T,w,M,P,S;qg||hm(),this.styles=this.styles||GM(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(vi[g]&&DM(g,t,i,r,e,s)))){if(p=typeof c,_=eh[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Uu(c)),_)_(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Us.lastIndex=0,Us.test(u)||(m=Rn(u),h=Rn(c),h?m!==h&&(u=Hs(e,g,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],fn(u)&&~u.indexOf("random(")&&(u=Uu(u)),Rn(u+"")||u==="auto"||(u+=Ci.units[g]||Rn(zr(e,g))||""),(u+"").charAt(1)==="="&&(u=zr(e,g))):u=zr(e,g),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),g in Sr&&(g==="autoAlpha"&&(d===1&&zr(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,a.visibility),xs(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Sr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Jr,x){if(this.styles.save(g),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Ti(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=Ti(e,"perspective"),E?e.style.perspective=E:Bs(e,"perspective")}f=parseFloat(c)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Fu(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new oi(this._pt,a,Ft,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new oi(this._pt,T,"scaleY",T.scaleY,(v?Fa(T.scaleY,v+f):f)-T.scaleY||0,cm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(ai,0,a[ai]),c=dC(c),T.svg?dm(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==T.zOrigin&&xs(this,T,"zOrigin",T.zOrigin,h),xs(this,a,g,th(u),th(c)));continue}else if(g==="svgOrigin"){dm(e,c,1,w,0,this);continue}else if(g in jM){_C(this,T,g,d,v?Fa(d,v+c):c);continue}else if(g==="smoothOrigin"){xs(this,T,"smooth",T.smooth,c);continue}else if(g==="force3D"){T[g]=c;continue}else if(g==="transform"){vC(this,c,e);continue}}else g in a||(g=il(g)||g);if(x||(f||f===0)&&(d||d===0)&&!QA.test(c)&&g in a)m=(u+"").substr((d+"").length),f||(f=0),h=Rn(c)||(g in Ci.units?Ci.units[g]:m),m!==h&&(d=Hs(e,g,u,h)),this._pt=new oi(this._pt,x?T:a,g,d,(v?Fa(d,v+f):f)-d,!x&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?nC:cm),this._pt.u=h||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=tC):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=eC);else if(g in a)hC.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){kg(g,c);continue}x||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,u||e[g])),o.push(g)}}M&&kM(this)},render:function(e,t){if(t.tween._time||!$g())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zr,aliases:Sr,getSetter:function(e,t,i){var r=Sr[t];return r&&r.indexOf(",")<0&&(t=r),t in Jr&&t!==ai&&(e._gsap.x||zr(e,"x"))?i&&k0===i?t==="scale"?oC:sC:(k0=i||{})&&(t==="scale"?aC:lC):e.style&&!Ig(e.style[t])?iC:~t.indexOf("-")?rC:Yg(e,t)},core:{_removeProperty:Bs,_getMatrix:Zg}};fi.utils.checkPrefix=il;fi.core.getStyleSaver=GM;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){Jr[s]=1});si(e,function(s){Ci.units[s]="deg",jM[s]=1}),Sr[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");Sr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ci.units[n]="px"});fi.registerPlugin(KM);var _r=fi.registerPlugin(KM)||fi;_r.core.Tween;function xC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function yC(n,e,t){return e&&xC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,vf,Si,ys,Ss,Ba,ZM,so,Ha,QM,Gr,ir,JM,eE=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},tE=1,Ra=[],st=[],Ar=[],nu=Date.now,pm=function(e,t){return t},SC=function(){var e=Ha.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,st),r.push.apply(r,Ar),st=i,Ar=r,pm=function(o,a){return t[o](a)}},Ns=function(e,t){return~Ar.indexOf(e)&&Ar[Ar.indexOf(e)+1][t]},iu=function(e){return!!~QM.indexOf(e)},Nn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},vc="scrollLeft",xc="scrollTop",mm=function(){return Gr&&Gr.isPressed||st.cache++},nh=function(e,t){var i=function r(s){if(s||s===0){tE&&(Si.history.scrollRestoration="manual");var o=Gr&&Gr.isPressed;s=r.v=Math.round(s)||(Gr&&Gr.iOS?1:0),e(s),r.cacheID=st.cache,o&&pm("ss",s)}else(t||st.cache!==r.cacheID||pm("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Vn={s:vc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nh(function(n){return arguments.length?Si.scrollTo(n,en.sc()):Si.pageXOffset||ys[vc]||Ss[vc]||Ba[vc]||0})},en={s:xc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:nh(function(n){return arguments.length?Si.scrollTo(Vn.sc(),n):Si.pageYOffset||ys[xc]||Ss[xc]||Ba[xc]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},MC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Vs=function(e,t){var i=t.s,r=t.sc;iu(e)&&(e=ys.scrollingElement||Ss);var s=st.indexOf(e),o=r===en.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||Nn(e,"scroll",mm);var a=st[s+o],l=a||(st[s+o]=nh(Ns(e,i),!0)||(iu(e)?r:nh(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},gm=function(e,t,i){var r=e,s=e,o=nu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=nu();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(_){var g=a,m=s,h=nu();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:f,getVelocity:d}},wl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},j0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},nE=function(){Ha=pn.core.globals().ScrollTrigger,Ha&&Ha.core&&SC()},iE=function(e){return pn=e||eE(),!vf&&pn&&typeof document<"u"&&document.body&&(Si=window,ys=document,Ss=ys.documentElement,Ba=ys.body,QM=[Si,ys,Ss,Ba],pn.utils.clamp,JM=pn.core.context||function(){},so="onpointerenter"in Ba?"pointer":"mouse",ZM=Xt.isTouch=Si.matchMedia&&Si.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Si||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ir=Xt.eventTypes=("ontouchstart"in Ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return tE=0},500),vf=1),Ha||nE(),vf};Vn.op=en;st.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){vf||iE(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Ha||nE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,d=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,T=i.onRight,w=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,I=i.onChange,D=i.onToggleX,K=i.onToggleY,L=i.onHover,F=i.onHoverEnd,k=i.onMove,H=i.ignoreCheck,U=i.isNormalizer,O=i.onGestureStart,R=i.onGestureEnd,$=i.onWheel,Q=i.onEnable,j=i.onDisable,Z=i.onClick,ie=i.scrollSpeed,fe=i.capture,le=i.allowClicks,Pe=i.lockAxis,we=i.onLockAxis;this.target=a=qn(a)||Ss,this.vars=i,p&&(p=pn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,ie=ie||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Si.getComputedStyle(Ba).lineHeight)||22);var De,Oe,V,We,_e,Ue,xe,G=this,Fe=0,b=0,A=i.passive||!c&&i.passive!==!1,z=Vs(a,Vn),J=Vs(a,en),ee=z(),ne=J(),ge=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ir[0]==="pointerdown",de=iu(a),re=a.ownerDocument||ys,Ae=[0,0,0],ve=[0,0,0],te=0,et=function(){return te=nu()},Re=function(Ee,Ie){return(G.event=Ee)&&p&&MC(Ee.target,p)||Ie&&ge&&Ee.pointerType!=="touch"||H&&H(Ee,Ie)},Xe=function(){G._vx.reset(),G._vy.reset(),Oe.pause(),f&&f(G)},Me=function(){var Ee=G.deltaX=j0(Ae),Ie=G.deltaY=j0(ve),oe=Math.abs(Ee)>=r,He=Math.abs(Ie)>=r;I&&(oe||He)&&I(G,Ee,Ie,Ae,ve),oe&&(T&&G.deltaX>0&&T(G),w&&G.deltaX<0&&w(G),S&&S(G),D&&G.deltaX<0!=Fe<0&&D(G),Fe=G.deltaX,Ae[0]=Ae[1]=Ae[2]=0),He&&(P&&G.deltaY>0&&P(G),M&&G.deltaY<0&&M(G),E&&E(G),K&&G.deltaY<0!=b<0&&K(G),b=G.deltaY,ve[0]=ve[1]=ve[2]=0),(We||V)&&(k&&k(G),V&&(m&&V===1&&m(G),v&&v(G),V=0),We=!1),Ue&&!(Ue=!1)&&we&&we(G),_e&&($(G),_e=!1),De=0},ye=function(Ee,Ie,oe){Ae[oe]+=Ee,ve[oe]+=Ie,G._vx.update(Ee),G._vy.update(Ie),u?De||(De=requestAnimationFrame(Me)):Me()},Ye=function(Ee,Ie){Pe&&!xe&&(G.axis=xe=Math.abs(Ee)>Math.abs(Ie)?"x":"y",Ue=!0),xe!=="y"&&(Ae[2]+=Ee,G._vx.update(Ee,!0)),xe!=="x"&&(ve[2]+=Ie,G._vy.update(Ie,!0)),u?De||(De=requestAnimationFrame(Me)):Me()},tt=function(Ee){if(!Re(Ee,1)){Ee=wl(Ee,c);var Ie=Ee.clientX,oe=Ee.clientY,He=Ie-G.x,ze=oe-G.y,qe=G.isDragging;G.x=Ie,G.y=oe,(qe||(He||ze)&&(Math.abs(G.startX-Ie)>=s||Math.abs(G.startY-oe)>=s))&&(V||(V=qe?2:1),qe||(G.isDragging=!0),Ye(He,ze))}},ht=G.onPress=function(Le){Re(Le,1)||Le&&Le.button||(G.axis=xe=null,Oe.pause(),G.isPressed=!0,Le=wl(Le),Fe=b=0,G.startX=G.x=Le.clientX,G.startY=G.y=Le.clientY,G._vx.reset(),G._vy.reset(),Nn(U?a:re,ir[1],tt,A,!0),G.deltaX=G.deltaY=0,x&&x(G))},me=G.onRelease=function(Le){if(!Re(Le,1)){Un(U?a:re,ir[1],tt,!0);var Ee=!isNaN(G.y-G.startY),Ie=G.isDragging,oe=Ie&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),He=wl(Le);!oe&&Ee&&(G._vx.reset(),G._vy.reset(),c&&le&&pn.delayedCall(.08,function(){if(nu()-te>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(re.createEvent){var ze=re.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,Si,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(ze)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Ie&&!U&&Oe.restart(!0),V&&Me(),h&&Ie&&h(G),y&&y(G,oe)}},ae=function(Ee){return Ee.touches&&Ee.touches.length>1&&(G.isGesturing=!0)&&O(Ee,G.isDragging)},N=function(){return(G.isGesturing=!1)||R(G)},ue=function(Ee){if(!Re(Ee)){var Ie=z(),oe=J();ye((Ie-ee)*ie,(oe-ne)*ie,1),ee=Ie,ne=oe,f&&Oe.restart(!0)}},ce=function(Ee){if(!Re(Ee)){Ee=wl(Ee,c),$&&(_e=!0);var Ie=(Ee.deltaMode===1?l:Ee.deltaMode===2?Si.innerHeight:1)*_;ye(Ee.deltaX*Ie,Ee.deltaY*Ie,0),f&&!U&&Oe.restart(!0)}},Be=function(Ee){if(!Re(Ee)){var Ie=Ee.clientX,oe=Ee.clientY,He=Ie-G.x,ze=oe-G.y;G.x=Ie,G.y=oe,We=!0,f&&Oe.restart(!0),(He||ze)&&Ye(He,ze)}},ke=function(Ee){G.event=Ee,L(G)},lt=function(Ee){G.event=Ee,F(G)},ft=function(Ee){return Re(Ee)||wl(Ee,c)&&Z(G)};Oe=G._dc=pn.delayedCall(d||.25,Xe).pause(),G.deltaX=G.deltaY=0,G._vx=gm(0,50,!0),G._vy=gm(0,50,!0),G.scrollX=z,G.scrollY=J,G.isDragging=G.isGesturing=G.isPressed=!1,JM(this),G.enable=function(Le){return G.isEnabled||(Nn(de?re:a,"scroll",mm),o.indexOf("scroll")>=0&&Nn(de?re:a,"scroll",ue,A,fe),o.indexOf("wheel")>=0&&Nn(a,"wheel",ce,A,fe),(o.indexOf("touch")>=0&&ZM||o.indexOf("pointer")>=0)&&(Nn(a,ir[0],ht,A,fe),Nn(re,ir[2],me),Nn(re,ir[3],me),le&&Nn(a,"click",et,!0,!0),Z&&Nn(a,"click",ft),O&&Nn(re,"gesturestart",ae),R&&Nn(re,"gestureend",N),L&&Nn(a,so+"enter",ke),F&&Nn(a,so+"leave",lt),k&&Nn(a,so+"move",Be)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=We=V=!1,G._vx.reset(),G._vy.reset(),ee=z(),ne=J(),Le&&Le.type&&ht(Le),Q&&Q(G)),G},G.disable=function(){G.isEnabled&&(Ra.filter(function(Le){return Le!==G&&iu(Le.target)}).length||Un(de?re:a,"scroll",mm),G.isPressed&&(G._vx.reset(),G._vy.reset(),Un(U?a:re,ir[1],tt,!0)),Un(de?re:a,"scroll",ue,fe),Un(a,"wheel",ce,fe),Un(a,ir[0],ht,fe),Un(re,ir[2],me),Un(re,ir[3],me),Un(a,"click",et,!0),Un(a,"click",ft),Un(re,"gesturestart",ae),Un(re,"gestureend",N),Un(a,so+"enter",ke),Un(a,so+"leave",lt),Un(a,so+"move",Be),G.isEnabled=G.isPressed=G.isDragging=!1,j&&j(G))},G.kill=G.revert=function(){G.disable();var Le=Ra.indexOf(G);Le>=0&&Ra.splice(Le,1),Gr===G&&(Gr=0)},Ra.push(G),U&&iu(a)&&(Gr=G),G.enable(g)},yC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.15.0";Xt.create=function(n){return new Xt(n)};Xt.register=iE;Xt.getAll=function(){return Ra.slice()};Xt.getById=function(n){return Ra.filter(function(e){return e.vars.id===n})[0]};eE()&&pn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Te,ha,it,_t,xi,pt,Qg,ih,ku,ru,zl,yc,Tn,Uh,_m,kn,q0,$0,da,rE,Td,sE,On,vm,oE,aE,ls,xm,Jg,Va,e_,su,ym,wd,Sc=1,wn=Date.now,Ad=wn(),$i=0,Bl=0,K0=function(e,t,i){var r=_i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Z0=function(e,t){return t&&(!_i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},EC=function n(){return Bl&&requestAnimationFrame(n)},Q0=function(){return Uh=1},J0=function(){return Uh=0},gr=function(e){return e},Hl=function(e){return Math.round(e*1e5)/1e5||0},lE=function(){return typeof window<"u"},uE=function(){return Te||lE()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Fo=function(e){return!!~Qg.indexOf(e)},cE=function(e){return(e==="Height"?e_:it["inner"+e])||xi["client"+e]||pt["client"+e]},fE=function(e){return Ns(e,"getBoundingClientRect")||(Fo(e)?function(){return Ef.width=it.innerWidth,Ef.height=e_,Ef}:function(){return Br(e)})},TC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ns(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?cE(s):e["client"+s])||0}},wC=function(e,t){return!t||~Ar.indexOf(e)?fE(e):function(){return Ef}},Mr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ns(e,i))?o()-fE(e)()[s]:Fo(e)?(xi[i]||pt[i])-cE(r):e[i]-e["offset"+r])},Mc=function(e,t){for(var i=0;i<da.length;i+=3)(!t||~t.indexOf(da[i+1]))&&e(da[i],da[i+1],da[i+2])},_i=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},Vl=function(e){return typeof e=="number"},oo=function(e){return typeof e=="object"},Al=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Yo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},jo=Math.abs,hE="left",dE="top",t_="right",n_="bottom",wo="width",Ao="height",ou="Right",au="Left",lu="Top",uu="Bottom",jt="padding",zi="margin",rl="Width",i_="Height",Qt="px",Bi=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},AC=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ev=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Br=function(e,t){var i=t&&Bi(e)[_m]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},rh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},pE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},CC=function(e){return function(t){return Te.utils.snap(pE(e),t)}},r_=function(e){var t=Te.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},RC=function(e){return function(t,i){return r_(pE(e))(t,i.direction)}},Ec=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},an=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},on=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Tc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},tv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wc={toggleActions:"play",anticipatePin:0},sh={top:0,left:0,center:.5,bottom:1,right:1},xf=function(e,t){if(_i(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in sh?sh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ac=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,d=s.indent,p=s.fontWeight,_=_t.createElement("div"),g=Fo(i)||Ns(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?pt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===en?t_:n_)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],yf(_,0,r,v),_},yf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+rl]=1,s["border"+a+rl]=0,s[i.p]=t+"px",Te.set(e,s)},Je=[],Sm={},zu,nv=function(){return wn()-$i>34&&(zu||(zu=requestAnimationFrame(Yr)))},qo=function(){(!On||!On.isPressed||On.startX>pt.clientWidth)&&(st.cache++,On?zu||(zu=requestAnimationFrame(Yr)):Yr(),$i||zo("scrollStart"),$i=wn())},Cd=function(){aE=it.innerWidth,oE=it.innerHeight},Gl=function(e){st.cache++,(e===!0||!Tn&&!sE&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!vm||aE!==it.innerWidth||Math.abs(it.innerHeight-oE)>it.innerHeight*.25))&&ih.restart(!0)},ko={},bC=[],mE=function n(){return on(Ze,"scrollEnd",n)||mo(!0)},zo=function(e){return ko[e]&&ko[e].map(function(t){return t()})||bC},mi=[],gE=function(e){for(var t=0;t<mi.length;t+=5)(!e||mi[t+4]&&mi[t+4].query===e)&&(mi[t].style.cssText=mi[t+1],mi[t].getBBox&&mi[t].setAttribute("transform",mi[t+2]||""),mi[t+3].uncache=1)},_E=function(){return st.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},s_=function(e,t){var i;for(kn=0;kn<Je.length;kn++)i=Je[kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));su=!0,t&&gE(t),t||zo("revert")},vE=function(e,t){st.cache++,(t||!zn)&&st.forEach(function(i){return bn(i)&&i.cacheID++&&(i.rec=0)}),_i(e)&&(it.history.scrollRestoration=Jg=e)},zn,Co=0,iv,PC=function(){if(iv!==Co){var e=iv=Co;requestAnimationFrame(function(){return e===Co&&mo(!0)})}},xE=function(){pt.appendChild(Va),e_=!On&&Va.offsetHeight||it.innerHeight,pt.removeChild(Va)},rv=function(e){return ku(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},mo=function(e,t){if(xi=_t.documentElement,pt=_t.body,Qg=[it,_t,xi,pt],$i&&!e&&!su){an(Ze,"scrollEnd",mE);return}xE(),zn=Ze.isRefreshing=!0,su||_E();var i=zo("refreshInit");rE&&Ze.sort(),t||s_(),st.forEach(function(r){bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),su=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),ym=1,rv(!0),Je.forEach(function(r){var s=Mr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),rv(!1),ym=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),vE(Jg,1),ih.pause(),Co++,zn=2,Yr(2),Je.forEach(function(r){return bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=Ze.isRefreshing=!1,zo("refresh")},Mm=0,Sf=1,cu,Yr=function(e){if(e===2||!zn&&!su){Ze.isUpdating=!0,cu&&cu.update(0);var t=Je.length,i=wn(),r=i-Ad>=50,s=t&&Je[0].scroll();if(Sf=Mm>s?-1:1,zn||(Mm=s),r&&($i&&!Uh&&i-$i>200&&($i=0,zo("scrollEnd")),zl=Ad,Ad=i),Sf<0){for(kn=t;kn-- >0;)Je[kn]&&Je[kn].update(0,r);Sf=1}else for(kn=0;kn<t;kn++)Je[kn]&&Je[kn].update(0,r);Ze.isUpdating=!1}zu=0},Em=[hE,dE,n_,t_,zi+uu,zi+ou,zi+lu,zi+au,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Mf=Em.concat([wo,Ao,"boxSizing","max"+rl,"max"+i_,"position",zi,jt,jt+lu,jt+ou,jt+uu,jt+au]),LC=function(e,t,i){Ga(i);var r=e._gsap;if(r.spacerIsNative)Ga(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Em.length,o=t.style,a=e.style,l;s--;)l=Em[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[n_]=a[t_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wo]=rh(e,Vn)+Qt,o[Ao]=rh(e,en)+Qt,o[jt]=a[zi]=a[dE]=a[hE]="0",Ga(r),a[wo]=a["max"+rl]=i[wo],a[Ao]=a["max"+i_]=i[Ao],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},DC=/([A-Z])/g,Ga=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(DC,"-$1").toLowerCase())}},Cc=function(e){for(var t=Mf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Mf[s],i[Mf[s]]);return r.t=e,r},UC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Ef={left:0,top:0},sv=function(e,t,i,r,s,o,a,l,u,c,f,d,p,_){bn(e)&&(e=e(l)),_i(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?xf("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Vl(e))p&&(e=Te.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&yf(a,i,r,!0);else{bn(t)&&(t=t(l));var x=(e||"0").split(" "),y,T,w,M;v=qn(t,l)||pt,y=Br(v)||{},(!y||!y.left&&!y.top)&&Bi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Br(v),M?v.style.display=M:v.style.removeProperty("display")),T=xf(x[0],y[r.d]),w=xf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+T+s-w,a&&yf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,yf(o,P,r,S&&P>20||!S&&(f?Math.max(pt[m],xi[m]):o.parentNode[m])<=P+1),f&&(u=Br(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Qt))}return p&&v&&(m=Br(v),p.seek(d),h=Br(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*d),p&&p.seek(g),p?e:Math.round(e)},NC=/(webkit|moz|length|cssText|inset)/i,ov=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!NC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},yE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Rc=function(e,t,i){var r={};r[t.p]="+="+i,Te.set(e,r)},av=function(e,t){var i=Vs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var d=o.tween,p=l.onComplete,_={};u=u||i();var g=yE(i,u,function(){d.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Yr()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=Te.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",i.wheelHandler),Ze.isTouch&&an(e,"touchmove",i.wheelHandler),s},Ze=function(){function n(t,i){ha||n.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Bl){this.update=this.refresh=this.kill=gr;return}i=ev(_i(i)||Vl(i)||i.nodeType?{trigger:i}:i,wc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,d=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Vn:en,I=!f&&f!==0,D=qn(i.scroller||it),K=Te.core.getCache(D),L=Fo(D),F=("pinType"in i?i.pinType:Ns(D,"pinType")||L&&"fixed")==="fixed",k=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],H=I&&i.toggleActions.split(" "),U="markers"in i?i.markers:wc.markers,O=L?0:parseFloat(Bi(D)["border"+E.p2+rl])||0,R=this,$=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Q=TC(D,L,E),j=wC(D,L),Z=0,ie=0,fe=0,le=Vs(D,E),Pe,we,De,Oe,V,We,_e,Ue,xe,G,Fe,b,A,z,J,ee,ne,ge,de,re,Ae,ve,te,et,Re,Xe,Me,ye,Ye,tt,ht,me,ae,N,ue,ce,Be,ke,lt;if(R._startClamp=R._endClamp=!1,R._dir=E,m*=45,R.scroller=D,R.scroll=M?M.time.bind(M):le,Oe=le(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(rE=1,i.refreshPriority===-9999&&(cu=R)),K.tweenScroll=K.tweenScroll||{top:av(D,en),left:av(D,Vn)},R.tweenTo=Pe=K.tweenScroll[E.p],R.scrubDuration=function(oe){ae=Vl(oe)&&oe,ae?me?me.duration(oe):me=Te.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return h&&h(R)}}):(me&&me.progress(1).kill(),me=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(f),tt=0,l||(l=r.vars.id)),y&&((!oo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Te.set(L?[pt,xi]:D,{scrollBehavior:"auto"}),st.forEach(function(oe){return bn(oe)&&oe.target===(L?_t.scrollingElement||xi:D)&&(oe.smooth=!1)}),De=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?CC(r):y.snapTo==="labelsDirectional"?RC(r):y.directional!==!1?function(oe,He){return r_(y.snapTo)(oe,wn()-ie<500?0:He.direction)}:Te.utils.snap(y.snapTo),N=y.duration||{min:.1,max:2},N=oo(N)?ru(N.min,N.max):ru(N,N),ue=Te.delayedCall(y.delay||ae/2||.1,function(){var oe=le(),He=wn()-ie<500,ze=Pe.tween;if((He||Math.abs(R.getVelocity())<10)&&!ze&&!Uh&&Z!==oe){var qe=(oe-We)/z,Ut=r&&!I?r.totalProgress():qe,nt=He?0:(Ut-ht)/(wn()-zl)*1e3||0,Et=Te.utils.clamp(-qe,1-qe,jo(nt/2)*nt/.185),Kt=qe+(y.inertia===!1?0:Et),At,Tt,mt=y,hi=mt.onStart,C=mt.onInterrupt,B=mt.onComplete;if(At=De(Kt,R),Vl(At)||(At=Kt),Tt=Math.max(0,Math.round(We+At*z)),oe<=_e&&oe>=We&&Tt!==oe){if(ze&&!ze._initted&&ze.data<=jo(Tt-oe))return;y.inertia===!1&&(Et=At-qe),Pe(Tt,{duration:N(jo(Math.max(jo(Kt-Ut),jo(At-Ut))*.185/nt/.05||0)),ease:y.ease||"power3",data:jo(Tt-oe),onInterrupt:function(){return ue.restart(!0)&&C&&Yo(R,C)},onComplete:function(){R.update(),Z=le(),r&&!I&&(me?me.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),tt=ht=r&&!I?r.totalProgress():R.progress,v&&v(R),B&&Yo(R,B)}},oe,Et*z,Tt-oe-Et*z),hi&&Yo(R,hi,Pe.tween)}}else R.isActive&&Z!==oe&&ue.restart(!0)}).pause()),l&&(Sm[l]=R),d=R.trigger=qn(d||p!==!0&&p),lt=d&&d._gsap&&d._gsap.stRevert,lt&&(lt=lt(R)),p=p===!0?d:qn(p),_i(a)&&(a={targets:d,className:a}),p&&(_===!1||_===zi||(_=!_&&p.parentNode&&p.parentNode.style&&Bi(p.parentNode).display==="flex"?!1:jt),R.pin=p,we=Te.core.getCache(p),we.spacer?J=we.pinState:(w&&(w=qn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),we.spacerIsNative=!!w,w&&(we.spacerState=Cc(w))),we.spacer=ge=w||_t.createElement("div"),ge.classList.add("pin-spacer"),l&&ge.classList.add("pin-spacer-"+l),we.pinState=J=Cc(p)),i.force3D!==!1&&Te.set(p,{force3D:!0}),R.spacer=ge=we.spacer,Ye=Bi(p),et=Ye[_+E.os2],re=Te.getProperty(p),Ae=Te.quickSetter(p,E.a,Qt),Rd(p,ge,Ye),ne=Cc(p)),U){b=oo(U)?ev(U,tv):tv,G=Ac("scroller-start",l,D,E,b,0),Fe=Ac("scroller-end",l,D,E,b,0,G),de=G["offset"+E.op.d2];var ft=qn(Ns(D,"content")||D);Ue=this.markerStart=Ac("start",l,ft,E,b,de,0,M),xe=this.markerEnd=Ac("end",l,ft,E,b,de,0,M),M&&(ke=Te.quickSetter([Ue,xe],E.a,Qt)),!F&&!(Ar.length&&Ns(D,"fixedMarkers")===!0)&&(AC(L?pt:D),Te.set([G,Fe],{force3D:!0}),Xe=Te.quickSetter(G,E.a,Qt),ye=Te.quickSetter(Fe,E.a,Qt))}if(M){var Le=M.vars.onUpdate,Ee=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Le&&Le.apply(M,Ee||[])})}if(R.previous=function(){return Je[Je.indexOf(R)-1]},R.next=function(){return Je[Je.indexOf(R)+1]},R.revert=function(oe,He){if(!He)return R.kill(!0);var ze=oe!==!1||!R.enabled,qe=Tn;ze!==R.isReverted&&(ze&&(ce=Math.max(le(),R.scroll.rec||0),fe=R.progress,Be=r&&r.progress()),Ue&&[Ue,xe,G,Fe].forEach(function(Ut){return Ut.style.display=ze?"none":"block"}),ze&&(Tn=R,R.update(ze)),p&&(!T||!R.isActive)&&(ze?LC(p,ge,J):Rd(p,ge,Bi(p),Re)),ze||R.update(ze),Tn=qe,R.isReverted=ze)},R.refresh=function(oe,He,ze,qe){if(!((Tn||!R.enabled)&&!He)){if(p&&oe&&$i){an(n,"scrollEnd",mE);return}!zn&&$&&$(R),Tn=R,Pe.tween&&!ze&&(Pe.tween.kill(),Pe.tween=0),me&&me.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(je){return je.vars.immediateRender&&je.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ut=Q(),nt=j(),Et=M?M.duration():Mr(D,E),Kt=z<=.01||!z,At=0,Tt=qe||0,mt=oo(ze)?ze.end:i.end,hi=i.endTrigger||d,C=oo(ze)?ze.start:i.start||(i.start===0||!d?0:p?"0 0":"0 100%"),B=R.pinnedContainer=i.pinnedContainer&&qn(i.pinnedContainer,R),q=d&&Math.max(0,Je.indexOf(R))||0,Y=q,W,he,Ce,Ve,be,Ne,Ge,$e,Pt,Zt,gt,Dn,xt;for(U&&oo(ze)&&(Dn=Te.getProperty(G,E.p),xt=Te.getProperty(Fe,E.p));Y-- >0;)Ne=Je[Y],Ne.end||Ne.refresh(0,1)||(Tn=R),Ge=Ne.pin,Ge&&(Ge===d||Ge===p||Ge===B)&&!Ne.isReverted&&(Zt||(Zt=[]),Zt.unshift(Ne),Ne.revert(!0,!0)),Ne!==Je[Y]&&(q--,Y--);for(bn(C)&&(C=C(R)),C=K0(C,"start",R),We=sv(C,d,Ut,E,le(),Ue,G,R,nt,O,F,Et,M,R._startClamp&&"_startClamp")||(p?-.001:0),bn(mt)&&(mt=mt(R)),_i(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(_i(C)?C.split(" ")[0]:"")+mt:(At=xf(mt.substr(2),Ut),mt=_i(C)?C:(M?Te.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,We):We)+At,hi=d)),mt=K0(mt,"end",R),_e=Math.max(We,sv(mt||(hi?"100% 0":Et),hi,Ut,E,le()+At,xe,Fe,R,nt,O,F,Et,M,R._endClamp&&"_endClamp"))||-.001,At=0,Y=q;Y--;)Ne=Je[Y]||{},Ge=Ne.pin,Ge&&Ne.start-Ne._pinPush<=We&&!M&&Ne.end>0&&(W=Ne.end-(R._startClamp?Math.max(0,Ne.start):Ne.start),(Ge===d&&Ne.start-Ne._pinPush<We||Ge===B)&&isNaN(C)&&(At+=W*(1-Ne.progress)),Ge===p&&(Tt+=W));if(We+=At,_e+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!zn&&(R._endClamp=_e||-.001,_e=Math.min(_e,Mr(D,E))),z=_e-We||(We-=.01)&&.001,Kt&&(fe=Te.utils.clamp(0,1,Te.utils.normalize(We,_e,ce))),R._pinPush=Tt,Ue&&At&&(W={},W[E.a]="+="+At,B&&(W[E.p]="-="+le()),Te.set([Ue,xe],W)),p&&!(ym&&R.end>=Mr(D,E)))W=Bi(p),Ve=E===en,Ce=le(),ve=parseFloat(re(E.a))+Tt,!Et&&_e>1&&(gt=(L?_t.scrollingElement||xi:D).style,gt={style:gt,value:gt["overflow"+E.a.toUpperCase()]},L&&Bi(pt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+E.a.toUpperCase()]="scroll")),Rd(p,ge,W),ne=Cc(p),he=Br(p,!0),$e=F&&Vs(D,Ve?Vn:en)(),_?(Re=[_+E.os2,z+Tt+Qt],Re.t=ge,Y=_===jt?rh(p,E)+z+Tt:0,Y&&(Re.push(E.d,Y+Qt),ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=Y+Qt)),Ga(Re),B&&Je.forEach(function(je){je.pin===B&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),F&&le(ce)):(Y=rh(p,E),Y&&ge.style.flexBasis!=="auto"&&(ge.style.flexBasis=Y+Qt)),F&&(be={top:he.top+(Ve?Ce-We:$e)+Qt,left:he.left+(Ve?$e:Ce-We)+Qt,boxSizing:"border-box",position:"fixed"},be[wo]=be["max"+rl]=Math.ceil(he.width)+Qt,be[Ao]=be["max"+i_]=Math.ceil(he.height)+Qt,be[zi]=be[zi+lu]=be[zi+ou]=be[zi+uu]=be[zi+au]="0",be[jt]=W[jt],be[jt+lu]=W[jt+lu],be[jt+ou]=W[jt+ou],be[jt+uu]=W[jt+uu],be[jt+au]=W[jt+au],ee=UC(J,be,T),zn&&le(0)),r?(Pt=r._initted,Td(1),r.render(r.duration(),!0,!0),te=re(E.a)-ve+z+Tt,Me=Math.abs(z-te)>1,F&&Me&&ee.splice(ee.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Td(0)):te=z,gt&&(gt.value?gt.style["overflow"+E.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+E.a));else if(d&&le()&&!M)for(he=d.parentNode;he&&he!==pt;)he._pinOffset&&(We-=he._pinOffset,_e-=he._pinOffset),he=he.parentNode;Zt&&Zt.forEach(function(je){return je.revert(!1,!0)}),R.start=We,R.end=_e,Oe=V=zn?ce:le(),!M&&!zn&&(Oe<ce&&le(ce),R.scroll.rec=0),R.revert(!1,!0),ie=wn(),ue&&(Z=-1,ue.restart(!0)),Tn=0,r&&I&&(r._initted||Be)&&r.progress()!==Be&&r.progress(Be||0,!0).render(r.time(),!0,!0),(Kt||fe!==R.progress||M||g||r&&!r._initted)&&(r&&!I&&(r._initted||fe||r.vars.immediateRender!==!1)&&r.totalProgress(M&&We<-.001&&!fe?Te.utils.normalize(We,_e,0):fe,!0),R.progress=Kt||(Oe-We)/z===fe?0:fe),p&&_&&(ge._pinOffset=Math.round(R.progress*te)),me&&me.invalidate(),isNaN(Dn)||(Dn-=Te.getProperty(G,E.p),xt-=Te.getProperty(Fe,E.p),Rc(G,E,Dn),Rc(Ue,E,Dn-(qe||0)),Rc(Fe,E,xt),Rc(xe,E,xt-(qe||0))),Kt&&!zn&&R.update(),c&&!zn&&!A&&(A=!0,c(R),A=!1)}},R.getVelocity=function(){return(le()-V)/(wn()-zl)*1e3||0},R.endAnimation=function(){Al(R.callbackAnimation),r&&(me?me.progress(1):r.paused()?I||Al(r,R.direction<0,1):Al(r,r.reversed()))},R.labelToScroll=function(oe){return r&&r.labels&&(We||R.refresh()||We)+r.labels[oe]/r.duration()*z||0},R.getTrailing=function(oe){var He=Je.indexOf(R),ze=R.direction>0?Je.slice(0,He).reverse():Je.slice(He+1);return(_i(oe)?ze.filter(function(qe){return qe.vars.preventOverlaps===oe}):ze).filter(function(qe){return R.direction>0?qe.end<=We:qe.start>=_e})},R.update=function(oe,He,ze){if(!(M&&!ze&&!oe)){var qe=zn===!0?ce:R.scroll(),Ut=oe?0:(qe-We)/z,nt=Ut<0?0:Ut>1?1:Ut||0,Et=R.progress,Kt,At,Tt,mt,hi,C,B,q;if(He&&(V=Oe,Oe=M?le():qe,y&&(ht=tt,tt=r&&!I?r.totalProgress():nt)),m&&p&&!Tn&&!Sc&&$i&&(!nt&&We<qe+(qe-V)/(wn()-zl)*m?nt=1e-4:nt===1&&_e>qe+(qe-V)/(wn()-zl)*m&&(nt=.9999)),nt!==Et&&R.enabled){if(Kt=R.isActive=!!nt&&nt<1,At=!!Et&&Et<1,C=Kt!==At,hi=C||!!nt!=!!Et,R.direction=nt>Et?1:-1,R.progress=nt,hi&&!Tn&&(Tt=nt&&!Et?0:nt===1?1:Et===1?2:3,I&&(mt=!C&&H[Tt+1]!=="none"&&H[Tt+1]||H[Tt],q=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(C||q)&&(q||f||!r)&&(bn(S)?S(R):R.getTrailing(S).forEach(function(Ce){return Ce.endAnimation()})),I||(me&&!Tn&&!Sc?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",nt,r._tTime/r._tDur):(me.vars.totalProgress=nt,me.invalidate().restart())):r&&r.totalProgress(nt,!!(Tn&&(ie||oe)))),p){if(oe&&_&&(ge.style[_+E.os2]=et),!F)Ae(Hl(ve+te*nt));else if(hi){if(B=!oe&&nt>Et&&_e+1>qe&&qe+1>=Mr(D,E),T)if(!oe&&(Kt||B)){var Y=Br(p,!0),W=qe-We;ov(p,pt,Y.top+(E===en?W:0)+Qt,Y.left+(E===en?0:W)+Qt)}else ov(p,ge);Ga(Kt||B?ee:ne),Me&&nt<1&&Kt||Ae(ve+(nt===1&&!B?te:0))}}y&&!Pe.tween&&!Tn&&!Sc&&ue.restart(!0),a&&(C||x&&nt&&(nt<1||!wd))&&ku(a.targets).forEach(function(Ce){return Ce.classList[Kt||x?"add":"remove"](a.className)}),o&&!I&&!oe&&o(R),hi&&!Tn?(I&&(q&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(R)),(C||!wd)&&(u&&C&&Yo(R,u),k[Tt]&&Yo(R,k[Tt]),x&&(nt===1?R.kill(!1,1):k[Tt]=0),C||(Tt=nt===1?1:3,k[Tt]&&Yo(R,k[Tt]))),P&&!Kt&&Math.abs(R.getVelocity())>(Vl(P)?P:2500)&&(Al(R.callbackAnimation),me?me.progress(1):Al(r,mt==="reverse"?1:!nt,1))):I&&o&&!Tn&&o(R)}if(ye){var he=M?qe/M.duration()*(M._caScrollDist||0):qe;Xe(he+(G._isFlipped?1:0)),ye(he)}ke&&ke(-qe/M.duration()*(M._caScrollDist||0))}},R.enable=function(oe,He){R.enabled||(R.enabled=!0,an(D,"resize",Gl),L||an(D,"scroll",qo),$&&an(n,"refreshInit",$),oe!==!1&&(R.progress=fe=0,Oe=V=Z=le()),He!==!1&&R.refresh())},R.getTween=function(oe){return oe&&Pe?Pe.tween:me},R.setPositions=function(oe,He,ze,qe){if(M){var Ut=M.scrollTrigger,nt=M.duration(),Et=Ut.end-Ut.start;oe=Ut.start+Et*oe/nt,He=Ut.start+Et*He/nt}R.refresh(!1,!1,{start:Z0(oe,ze&&!!R._startClamp),end:Z0(He,ze&&!!R._endClamp)},qe),R.update()},R.adjustPinSpacing=function(oe){if(Re&&oe){var He=Re.indexOf(E.d)+1;Re[He]=parseFloat(Re[He])+oe+Qt,Re[1]=parseFloat(Re[1])+oe+Qt,Ga(Re)}},R.disable=function(oe,He){if(oe!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,He||me&&me.pause(),ce=0,we&&(we.uncache=1),$&&on(n,"refreshInit",$),ue&&(ue.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!L)){for(var ze=Je.length;ze--;)if(Je[ze].scroller===D&&Je[ze]!==R)return;on(D,"resize",Gl),L||on(D,"scroll",qo)}},R.kill=function(oe,He){R.disable(oe,He),me&&!He&&me.kill(),l&&delete Sm[l];var ze=Je.indexOf(R);ze>=0&&Je.splice(ze,1),ze===kn&&Sf>0&&kn--,ze=0,Je.forEach(function(qe){return qe.scroller===R.scroller&&(ze=1)}),ze||zn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,oe&&r.revert({kill:!1}),He||r.kill()),Ue&&[Ue,xe,G,Fe].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),cu===R&&(cu=0),p&&(we&&(we.uncache=1),ze=0,Je.forEach(function(qe){return qe.pin===p&&ze++}),ze||(we.spacer=0)),i.onKill&&i.onKill(R)},Je.push(R),R.enable(!1,!1),lt&&lt(R),r&&r.add&&!z){var Ie=R.update;R.update=function(){R.update=Ie,st.cache++,We||_e||R.refresh()},Te.delayedCall(.01,R.update),z=.01,We=_e=0}else R.refresh();p&&PC()},n.register=function(i){return ha||(Te=i||uE(),lE()&&window.document&&n.enable(),ha=Bl),ha},n.defaults=function(i){if(i)for(var r in i)wc[r]=i[r];return wc},n.disable=function(i,r){Bl=0,Je.forEach(function(o){return o[r?"kill":"disable"](i)}),on(it,"wheel",qo),on(_t,"scroll",qo),clearInterval(yc),on(_t,"touchcancel",gr),on(pt,"touchstart",gr),Ec(on,_t,"pointerdown,touchstart,mousedown",Q0),Ec(on,_t,"pointerup,touchend,mouseup",J0),ih.kill(),Mc(on);for(var s=0;s<st.length;s+=3)Tc(on,st[s],st[s+1]),Tc(on,st[s],st[s+2])},n.enable=function(){if(it=window,_t=document,xi=_t.documentElement,pt=_t.body,Te){if(ku=Te.utils.toArray,ru=Te.utils.clamp,xm=Te.core.context||gr,Td=Te.core.suppressOverwrites||gr,Jg=it.history.scrollRestoration||"auto",Mm=it.pageYOffset||0,Te.core.globals("ScrollTrigger",n),pt){Bl=1,Va=document.createElement("div"),Va.style.height="100vh",Va.style.position="absolute",xE(),EC(),Xt.register(Te),n.isTouch=Xt.isTouch,ls=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vm=Xt.isTouch===1,an(it,"wheel",qo),Qg=[it,_t,xi,pt],Te.matchMedia?(n.matchMedia=function(c){var f=Te.matchMedia(),d;for(d in c)f.add(d,c[d]);return f},Te.addEventListener("matchMediaInit",function(){_E(),s_()}),Te.addEventListener("matchMediaRevert",function(){return gE()}),Te.addEventListener("matchMedia",function(){mo(0,1),zo("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return Cd(),Cd})):console.warn("Requires GSAP 3.11.0 or later"),Cd(),an(_t,"scroll",qo);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=Te.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Br(pt),en.m=Math.round(a.top+en.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),yc=setInterval(nv,250),Te.delayedCall(.5,function(){return Sc=0}),an(_t,"touchcancel",gr),an(pt,"touchstart",gr),Ec(an,_t,"pointerdown,touchstart,mousedown",Q0),Ec(an,_t,"pointerup,touchend,mouseup",J0),_m=Te.utils.checkPrefix("transform"),Mf.push(_m),ha=wn(),ih=Te.delayedCall(.2,mo).pause(),da=[_t,"visibilitychange",function(){var c=it.innerWidth,f=it.innerHeight;_t.hidden?(q0=c,$0=f):(q0!==c||$0!==f)&&Gl()},_t,"DOMContentLoaded",mo,it,"load",mo,it,"resize",Gl],Mc(an),Je.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)Tc(on,st[l],st[l+1]),Tc(on,st[l],st[l+2])}else if(_t){var u=function c(){n.enable(),_t.removeEventListener("DOMContentLoaded",c)};_t.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(wd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(yc)||(yc=r)&&setInterval(nv,r),"ignoreMobileResize"in i&&(vm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Mc(on)||Mc(an,i.autoRefreshEvents||"none"),sE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=qn(i),o=st.indexOf(s),a=Fo(s);~o&&st.splice(o,a?6:2),r&&(a?Ar.unshift(it,r,pt,r,xi,r):Ar.unshift(s,r))},n.clearMatchMedia=function(i){Je.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(_i(i)?qn(i):i).getBoundingClientRect(),a=o[s?wo:Ao]*r||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},n.positionInViewport=function(i,r,s){_i(i)&&(i=qn(i));var o=i.getBoundingClientRect(),a=o[s?wo:Ao],l=r==null?a/2:r in sh?sh[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},n.killAll=function(i){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=ko.killAll||[];ko={},r.forEach(function(s){return s()})}},n}();Ze.version="3.15.0";Ze.saveStyles=function(n){return n?ku(n).forEach(function(e){if(e&&e.style){var t=mi.indexOf(e);t>=0&&mi.splice(t,5),mi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),xm())}}):mi};Ze.revert=function(n,e){return s_(!n,e)};Ze.create=function(n,e){return new Ze(n,e)};Ze.refresh=function(n){return n?Gl(!0):(ha||Ze.register())&&mo(!0)};Ze.update=function(n){return++st.cache&&Yr(n===!0?2:0)};Ze.clearScrollMemory=vE;Ze.maxScroll=function(n,e){return Mr(n,e?Vn:en)};Ze.getScrollFunc=function(n,e){return Vs(qn(n),e?Vn:en)};Ze.getById=function(n){return Sm[n]};Ze.getAll=function(){return Je.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!$i};Ze.snapDirectional=r_;Ze.addEventListener=function(n,e){var t=ko[n]||(ko[n]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(n,e){var t=ko[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ze.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],d=[],p=Te.delayedCall(r,function(){c(f,d),f=[],d=[]}).pause();return function(_){f.length||p.restart(!0),f.push(_.trigger),d.push(_),s<=f.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),an(Ze,"refresh",function(){return s=e.batchMax()})),ku(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Ze.create(u))}),t};var lv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},bd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===xi&&n(pt,t)},bc={auto:1,scroll:1},IC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Te.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bc[(l=Bi(s)).overflowY]||bc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Fo(s)&&(bc[(l=Bi(s)).overflowY]||bc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},SE=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&IC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&an(_t,Xt.eventTypes[0],cv,!1,!0)},onDisable:function(){return on(_t,Xt.eventTypes[0],cv,!0)}})},OC=/(input|label|select|textarea)/i,uv,cv=function(e){var t=OC.test(e.target.tagName);(t||uv)&&(e._gsapAllow=!0,uv=t)},FC=function(e){oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=qn(e.target)||xi,c=Te.core.globals().ScrollSmoother,f=c&&c.get(),d=ls&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Vs(u,en),_=Vs(u,Vn),g=1,m=(Xt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,h=0,v=bn(r)?function(){return r(a)}:function(){return r||2.8},x,y,T=SE(u,e.type,!0,s),w=function(){return y=!1},M=gr,P=gr,S=function(){l=Mr(u,en),P=ru(ls?1:0,l),i&&(M=ru(0,Mr(u,Vn))),x=Co},E=function(){d._gsap.y=Hl(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(y){requestAnimationFrame(w);var U=Hl(a.deltaY/2),O=P(p.v-U);if(d&&O!==p.v+p.offset){p.offset=O-p.v;var R=Hl((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",p.cacheID=st.cache,Yr()}return!0}p.offset&&E(),y=!0},D,K,L,F,k=function(){S(),D.isActive()&&D.vars.scrollY>l&&(p()>l?D.progress(1)&&p(l):D.resetTo("scrollY",l))};return d&&Te.set(d,{y:"+=0"}),e.ignoreCheck=function(H){return ls&&H.type==="touchmove"&&I()||g>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){y=!1;var H=g;g=Hl((it.visualViewport&&it.visualViewport.scale||1)/m),D.pause(),H!==g&&bd(u,g>1.01?!0:i?!1:"x"),K=_(),L=p(),S(),x=Co},e.onRelease=e.onGestureStart=function(H,U){if(p.offset&&E(),!U)F.restart(!0);else{st.cache++;var O=v(),R,$;i&&(R=_(),$=R+O*.05*-H.velocityX/.227,O*=lv(_,R,$,Mr(u,Vn)),D.vars.scrollX=M($)),R=p(),$=R+O*.05*-H.velocityY/.227,O*=lv(p,R,$,Mr(u,en)),D.vars.scrollY=P($),D.invalidate().duration(O).play(.01),(ls&&D.vars.scrollY>=l||R>=l-1)&&Te.to({},{onUpdate:k,duration:O})}o&&o(H)},e.onWheel=function(){D._ts&&D.pause(),wn()-h>1e3&&(x=0,h=wn())},e.onChange=function(H,U,O,R,$){if(Co!==x&&S(),U&&i&&_(M(R[2]===U?K+(H.startX-H.x):_()+U-R[1])),O){p.offset&&E();var Q=$[2]===O,j=Q?L+H.startY-H.y:p()+O-$[1],Z=P(j);Q&&j!==Z&&(L+=Z-j),p(Z)}(O||U)&&Yr()},e.onEnable=function(){bd(u,i?!1:"x"),Ze.addEventListener("refresh",k),an(it,"resize",k),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),T.enable()},e.onDisable=function(){bd(u,!0),on(it,"resize",k),Ze.removeEventListener("refresh",k),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=ls,ls&&!p()&&p(1),ls&&Te.ticker.add(gr),F=a._dc,D=Te.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:yE(p,p(),function(){return D.pause()})},onUpdate:Yr,onComplete:F.vars.onComplete}),a};Ze.sort=function(n){if(bn(n))return Je.sort(n);var e=it.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),Je.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(n){return new Xt(n)};Ze.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof Xt?n:FC(n);return On&&On.target===e.target&&On.kill(),Fo(e.target)&&(On=e),e};Ze.core={_getVelocityProp:gm,_inputObserver:SE,_scrollers:st,_proxies:Ar,bridge:{ss:function(){$i||zo("scrollStart"),$i=wn()},ref:function(){return Tn}}};uE()&&Te.registerPlugin(Ze);(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function kC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function fv(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function hv(n,e,t){return e&&fv(n.prototype,e),t&&fv(n,t),n}function zC(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function dv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function pv(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?dv(Object(t),!0).forEach(function(i){zC(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):dv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function ME(n,e){return HC(n)||GC(n,e)||EE(n,e)||XC()}function Hn(n){return BC(n)||VC(n)||EE(n)||WC()}function BC(n){if(Array.isArray(n))return Tm(n)}function HC(n){if(Array.isArray(n))return n}function VC(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function GC(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function EE(n,e){if(n){if(typeof n=="string")return Tm(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Tm(n,e)}}function Tm(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function WC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function go(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function ju(n){return typeof n=="string"}function o_(n){return Array.isArray(n)}function Pc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=go(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(ju(t)||o_(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function a_(n){var e=ju(n)||o_(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Nh(n){return n!==null&&typeof n=="object"}function YC(n){return Nh(n)&&/^(1|3|11)$/.test(n.nodeType)}function jC(n){return typeof n=="number"&&n>-1&&n%1===0}function qC(n){return Nh(n)&&jC(n.length)}function Bo(n){return o_(n)?n:n==null?[]:qC(n)?Array.prototype.slice.call(n):[n]}function mv(n){var e=n;return ju(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),Bo(e).reduce(function(t,i){return[].concat(Hn(t),Hn(Bo(i).filter(YC)))},[])}var $C=Object.entries,oh="_splittype",fr={},KC=0;function Er(n,e,t){if(!Nh(n))return console.warn("[data.set] owner is not an object"),null;var i=n[oh]||(n[oh]=++KC),r=fr[i]||(fr[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(fr[i]=pv(pv({},r),e)):e!==void 0&&(r[e]=t),t}function _o(n,e){var t=Nh(n)?n[oh]:null,i=t&&fr[t]||{};return i}function TE(n){var e=n&&n[oh];e&&(delete n[e],delete fr[e])}function ZC(){Object.keys(fr).forEach(function(n){delete fr[n]})}function QC(){$C(fr).forEach(function(n){var e=ME(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(fr[t]=null,delete fr[t])})}function JC(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var l_="\\ud800-\\udfff",wE="\\u0300-\\u036f\\ufe20-\\ufe23",AE="\\u20d0-\\u20f0",CE="\\ufe0e\\ufe0f",eR="[".concat(l_,"]"),wm="[".concat(wE).concat(AE,"]"),Am="\\ud83c[\\udffb-\\udfff]",tR="(?:".concat(wm,"|").concat(Am,")"),RE="[^".concat(l_,"]"),bE="(?:\\ud83c[\\udde6-\\uddff]){2}",PE="[\\ud800-\\udbff][\\udc00-\\udfff]",LE="\\u200d",DE="".concat(tR,"?"),UE="[".concat(CE,"]?"),nR="(?:"+LE+"(?:"+[RE,bE,PE].join("|")+")"+UE+DE+")*",iR=UE+DE+nR,rR="(?:".concat(["".concat(RE).concat(wm,"?"),wm,bE,PE,eR].join("|"),`
)`),sR=RegExp("".concat(Am,"(?=").concat(Am,")|").concat(rR).concat(iR),"g"),oR=[LE,l_,wE,AE,CE],aR=RegExp("[".concat(oR.join(""),"]"));function lR(n){return n.split("")}function NE(n){return aR.test(n)}function uR(n){return n.match(sR)||[]}function cR(n){return NE(n)?uR(n):lR(n)}function fR(n){return n==null?"":String(n)}function hR(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=fR(n),n&&ju(n)&&!e&&NE(n)?cR(n):n.split(e)}function Cm(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=ju(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,Hn(Bo(s))):t.setAttribute(i,s))}),t}var u_={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function dR(n,e){e=go(u_,e);var t=a_(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=JC(r).reduce(function(l,u,c,f){var d,p;return t.chars&&(p=hR(u).map(function(_){var g=Cm(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return Er(g,"isChar",!0),a=[].concat(Hn(a),[g]),g})),t.words||t.lines?(d=Cm(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),Er(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(d)):p.forEach(function(_){s.appendChild(_)}),c<f.length-1&&s.append(" "),t.words?l.concat(d):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function IE(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return dR(n,e);var r=Bo(n.childNodes);if(r.length&&(Er(n,"isSplit",!0),!_o(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";Er(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,f){var d=IE(f,e),p=d.words,_=d.chars;return{words:[].concat(Hn(c.words),Hn(p)),chars:[].concat(Hn(c.chars),Hn(_))}},i)}function pR(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=ME(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var f=n.getBoundingClientRect(),d=f.width,p=f.height,_=f.x,g=f.y,m=g+a-u,h=_+o-l;return{width:d,height:p,top:m,left:h}}function OE(n){_o(n).isWord?(TE(n),n.replaceWith.apply(n,Hn(n.childNodes))):Bo(n.children).forEach(function(e){return OE(e)})}var mR=function(){return document.createDocumentFragment()};function gR(n,e,t){var i=a_(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,f,d=[],p=n.parentElement,_=n.nextElementSibling,g=mR(),m=window.getComputedStyle(n),h=m.textAlign,v=parseFloat(m.fontSize),x=v*.2;return e.absolute&&(f={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,Er(n,{cssWidth:n.style.width,cssHeight:n.style.height})),Bo(s).forEach(function(y){var T=y.parentElement===n,w=pR(y,T,e,t),M=w.width,P=w.height,S=w.top,E=w.left;/^br$/i.test(y.nodeName)||(i.lines&&T&&((l===null||S-l>=x)&&(l=S,o.push(a=[])),a.push(y)),e.absolute&&Er(y,{top:S,left:E,width:M,height:P}))}),p&&p.removeChild(n),i.lines&&(d=o.map(function(y){var T=Cm(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(h,"; width: 100%;")});Er(T,"isLine",!0);var w={height:0,top:1e4};return g.appendChild(T),y.forEach(function(M,P,S){var E=_o(M),I=E.isWordEnd,D=E.top,K=E.height,L=S[P+1];w.height=Math.max(w.height,K),w.top=Math.min(w.top,D),T.appendChild(M),I&&_o(L).isWordStart&&T.append(" ")}),e.absolute&&Er(T,{height:w.height,top:w.top}),T}),i.words||OE(g),n.replaceChildren(g)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),Bo(s).forEach(function(y){var T=_o(y),w=T.isLine,M=T.top,P=T.left,S=T.width,E=T.height,I=_o(y.parentElement),D=!w&&I.isLine;y.style.top="".concat(D?M-I.top:M,"px"),y.style.left=w?"".concat(f.left,"px"):"".concat(P-(D?f.left:0),"px"),y.style.height="".concat(E,"px"),y.style.width=w?"".concat(f.width,"px"):"".concat(S,"px"),y.style.position="absolute"})),p&&(_?p.insertBefore(n,_):p.appendChild(n)),d}var $o=go(u_,{}),gv=function(){hv(n,null,[{key:"clearData",value:function(){ZC()}},{key:"setDefaults",value:function(t){return $o=go($o,Pc(t)),u_}},{key:"revert",value:function(t){mv(t).forEach(function(i){var r=_o(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",TE(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return fr}},{key:"defaults",get:function(){return $o},set:function(t){$o=go($o,Pc(t))}}]);function n(e,t){kC(this,n),this.isSplit=!1,this.settings=go($o,Pc(t)),this.elements=mv(e),this.split()}return hv(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){Er(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=go(this.settings,Pc(t)));var s=a_(this.settings.types);s.none||(this.elements.forEach(function(o){Er(o,"isRoot",!0);var a=IE(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(Hn(i.words),Hn(l)),i.chars=[].concat(Hn(i.chars),Hn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=gR(o,i.settings,r);i.lines=[].concat(Hn(i.lines),Hn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),QC())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();function FE(n,e,t){return Math.max(n,Math.min(e,t))}class _R{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=e,function(l,u,c){return(1-c)*l+c*u}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=FE(0,this.currentTime/this.duration,1);t=l>=1;const u=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*u}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class vR{constructor({wrapper:e,content:t,autoResize:i=!0,debounce:r=250}={}){br(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});br(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});br(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,u=this;clearTimeout(a),a=setTimeout(function(){s.apply(u,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class kE{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)}on(e,t){var i;return(i=this.events[e])!=null&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>t!==s)}}off(e,t){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>t!==r)}destroy(){this.events={}}}const _v=100/6;class xR{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=1}){br(this,"onTouchStart",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});br(this,"onTouchMove",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});br(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});br(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:r}=e;t*=r===1?_v:r===2?this.windowWidth:1,i*=r===1?_v:r===2?this.windowHeight:1,t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});br(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new kE,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class yR{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:i=e,eventsTarget:r=i,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:u,easing:c=x=>Math.min(1,1.001-Math.pow(2,-10*x)),lerp:f=!u&&.1,infinite:d=!1,orientation:p="vertical",gestureOrientation:_="vertical",touchMultiplier:g=1,wheelMultiplier:m=1,autoResize:h=!0,__experimental__naiveDimensions:v=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:x,deltaY:y,event:T})=>{if(T.ctrlKey)return;const w=T.type.includes("touch"),M=T.type.includes("wheel");if(this.options.syncTouch&&w&&T.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const P=x===0&&y===0,S=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&x===0;if(P||S)return;let E=T.composedPath();if(E=E.slice(0,E.indexOf(this.rootElement)),E.find(L=>{var F,k,H,U,O;return((F=L.hasAttribute)===null||F===void 0?void 0:F.call(L,"data-lenis-prevent"))||w&&((k=L.hasAttribute)===null||k===void 0?void 0:k.call(L,"data-lenis-prevent-touch"))||M&&((H=L.hasAttribute)===null||H===void 0?void 0:H.call(L,"data-lenis-prevent-wheel"))||((U=L.classList)===null||U===void 0?void 0:U.contains("lenis"))&&!(!((O=L.classList)===null||O===void 0)&&O.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void T.preventDefault();if(this.isSmooth=this.options.syncTouch&&w||this.options.smoothWheel&&M,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();T.preventDefault();let I=y;this.options.gestureOrientation==="both"?I=Math.abs(y)>Math.abs(x)?y:x:this.options.gestureOrientation==="horizontal"&&(I=x);const D=w&&this.options.syncTouch,K=w&&T.type==="touchend"&&Math.abs(I)>5;K&&(I=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+I,Object.assign({programmatic:!1},D?{lerp:K?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const x=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-x),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:i,eventsTarget:r,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:u,easing:c,lerp:f,infinite:d,gestureOrientation:_,orientation:p,touchMultiplier:g,wheelMultiplier:m,autoResize:h,__experimental__naiveDimensions:v},this.animate=new _R,this.emitter=new kE,this.dimensions=new vR({wrapper:e,content:t,autoResize:h}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new xR(r,{touchMultiplier:g,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:i=!1,lock:r=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:u=!1,programmatic:c=!0}={}){if(!this.isStopped&&!this.isLocked||u){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let f;if(typeof e=="string"?f=document.querySelector(e):e!=null&&e.nodeType&&(f=e),f){if(this.options.wrapper!==window){const p=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?p.left:p.top}const d=f.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=FE(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!c){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,d)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),c&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const c_="160",SR=0,vv=1,MR=2,zE=1,ER=2,Ir=3,Gs=0,li=1,Vi=2,jr=0,Wa=1,ps=2,xv=3,yv=4,TR=5,lo=100,wR=101,AR=102,Sv=103,Mv=104,CR=200,RR=201,bR=202,PR=203,Rm=204,bm=205,LR=206,DR=207,UR=208,NR=209,IR=210,OR=211,FR=212,kR=213,zR=214,BR=0,HR=1,VR=2,ah=3,GR=4,WR=5,XR=6,YR=7,BE=0,jR=1,qR=2,Is=0,$R=1,KR=2,ZR=3,HE=4,QR=5,JR=6,VE=300,sl=301,ol=302,Pm=303,Lm=304,Ih=306,Dm=1e3,lr=1001,Um=1002,Bn=1003,Ev=1004,Pd=1005,Kn=1006,eb=1007,Bu=1008,Os=1009,tb=1010,nb=1011,f_=1012,GE=1013,Ms=1014,Es=1015,Cr=1016,WE=1017,XE=1018,Ro=1020,ib=1021,Gi=1023,rb=1024,sb=1025,bo=1026,al=1027,ob=1028,YE=1029,ab=1030,jE=1031,qE=1033,Ld=33776,Dd=33777,Ud=33778,Nd=33779,Tv=35840,wv=35841,Av=35842,Cv=35843,$E=36196,Rv=37492,bv=37496,Pv=37808,Lv=37809,Dv=37810,Uv=37811,Nv=37812,Iv=37813,Ov=37814,Fv=37815,kv=37816,zv=37817,Bv=37818,Hv=37819,Vv=37820,Gv=37821,Id=36492,Wv=36494,Xv=36495,lb=36283,Yv=36284,jv=36285,qv=36286,KE=3e3,Po=3001,ub=3200,cb=3201,fb=0,hb=1,Wi="",dn="srgb",es="srgb-linear",h_="display-p3",Oh="display-p3-linear",lh="linear",Rt="srgb",uh="rec709",ch="p3",Ko=7680,$v=519,db=512,pb=513,mb=514,ZE=515,gb=516,_b=517,vb=518,xb=519,Kv=35044,Zv="300 es",Nm=1035,Wr=2e3,fh=2001;class dl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,Im=180/Math.PI;function qu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Zn(n,e,t){return Math.max(e,Math.min(t,n))}function yb(n,e){return(n%e+e)%e}function Fd(n,e,t){return(1-t)*n+t*e}function Qv(n){return(n&n-1)===0&&n!==0}function Om(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,r,s,o,a,l,u){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],x=r[4],y=r[7],T=r[2],w=r[5],M=r[8];return s[0]=o*g+a*v+l*T,s[3]=o*m+a*x+l*w,s[6]=o*h+a*y+l*M,s[1]=u*g+c*v+f*T,s[4]=u*m+c*x+f*w,s[7]=u*h+c*y+f*M,s[2]=d*g+p*v+_*T,s[5]=d*m+p*x+_*w,s[8]=d*h+p*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kd.makeScale(e,t)),this}rotate(e){return this.premultiply(kd.makeRotation(-e)),this}translate(e,t){return this.premultiply(kd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kd=new rt;function QE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sb(){const n=hh("canvas");return n.style.display="block",n}const Jv={};function fu(n){n in Jv||(Jv[n]=!0,console.warn(n))}const ex=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tx=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lc={[es]:{transfer:lh,primaries:uh,toReference:n=>n,fromReference:n=>n},[dn]:{transfer:Rt,primaries:uh,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Oh]:{transfer:lh,primaries:ch,toReference:n=>n.applyMatrix3(tx),fromReference:n=>n.applyMatrix3(ex)},[h_]:{transfer:Rt,primaries:ch,toReference:n=>n.convertSRGBToLinear().applyMatrix3(tx),fromReference:n=>n.applyMatrix3(ex).convertLinearToSRGB()}},Mb=new Set([es,Oh]),yt={enabled:!0,_workingColorSpace:es,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Lc[e].toReference,r=Lc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Lc[n].primaries},getTransfer:function(n){return n===Wi?lh:Lc[n].transfer}};function Xa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Zo;class JE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zo===void 0&&(Zo=hh("canvas")),Zo.width=e.width,Zo.height=e.height;const i=Zo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xa(t[i]/255)*255):t[i]=Xa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eb=0;class eT{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=qu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bd(r[o].image)):s.push(Bd(r[o]))}else s=Bd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?JE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tb=0;class ui extends dl{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,i=lr,r=lr,s=Kn,o=Bu,a=Gi,l=Os,u=ui.DEFAULT_ANISOTROPY,c=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=qu(),this.name="",this.source=new eT(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(fu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Po?dn:Wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==VE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dm:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Um:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dm:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Um:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dn?Po:KE}set encoding(e){fu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Po?dn:Wi}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=VE;ui.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,t=0,i=0,r=1){mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,T=(h+1)/2,w=(c+d)/4,M=(f+g)/4,P=(_+m)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wb extends dl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(fu("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Po?dn:Wi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ui(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new eT(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends wb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tT extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ab extends ui{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $u{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||u!==p||c!==_){let m=1-a;const h=l*d+u*p+c*_+f*g,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,h*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const y=a*v;if(l=l*m+d*y,u=u*m+p*y,c=c*m+_*y,f=f*m+g*y,m===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=T,u*=T,c*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-a*p,e[t+2]=u*_+c*p+a*d-l*f,e[t+3]=c*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hd=new X,nx=new $u;class Ku{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,er):er.fromBufferAttribute(s,o),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rl),Uc.subVectors(this.max,Rl),Qo.subVectors(e.a,Rl),Jo.subVectors(e.b,Rl),ea.subVectors(e.c,Rl),is.subVectors(Jo,Qo),rs.subVectors(ea,Jo),Qs.subVectors(Qo,ea);let t=[0,-is.z,is.y,0,-rs.z,rs.y,0,-Qs.z,Qs.y,is.z,0,-is.x,rs.z,0,-rs.x,Qs.z,0,-Qs.x,-is.y,is.x,0,-rs.y,rs.x,0,-Qs.y,Qs.x,0];return!Vd(t,Qo,Jo,ea,Uc)||(t=[1,0,0,0,1,0,0,0,1],!Vd(t,Qo,Jo,ea,Uc))?!1:(Nc.crossVectors(is,rs),t=[Nc.x,Nc.y,Nc.z],Vd(t,Qo,Jo,ea,Uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pr=[new X,new X,new X,new X,new X,new X,new X,new X],er=new X,Dc=new Ku,Qo=new X,Jo=new X,ea=new X,is=new X,rs=new X,Qs=new X,Rl=new X,Uc=new X,Nc=new X,Js=new X;function Vd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Js.fromArray(n,s);const a=r.x*Math.abs(Js.x)+r.y*Math.abs(Js.y)+r.z*Math.abs(Js.z),l=e.dot(Js),u=t.dot(Js),c=i.dot(Js);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Cb=new Ku,bl=new X,Gd=new X;class Fh{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Cb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);const t=bl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(bl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(Gd)),this.expandByPoint(bl.copy(e.center).sub(Gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Lr=new X,Wd=new X,Ic=new X,ss=new X,Xd=new X,Oc=new X,Yd=new X;class d_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wd.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),ss.copy(this.origin).sub(Wd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ic),a=ss.dot(this.direction),l=-ss.dot(Ic),u=ss.lengthSq(),c=Math.abs(1-o*o);let f,d,p,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const g=1/c;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wd).addScaledVector(Ic,d),p}intersectSphere(e,t){Lr.subVectors(e.center,this.origin);const i=Lr.dot(this.direction),r=Lr.dot(Lr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,i,r,s){Xd.subVectors(t,e),Oc.subVectors(i,e),Yd.crossVectors(Xd,Oc);let o=this.direction.dot(Yd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,e);const l=a*this.direction.dot(Oc.crossVectors(ss,Oc));if(l<0)return null;const u=a*this.direction.dot(Xd.cross(ss));if(u<0||l+u>o)return null;const c=-a*ss.dot(Yd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,t,i,r,s,o,a,l,u,c,f,d,p,_,g,m){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,f,d,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ta.setFromMatrixColumn(e,0).length(),s=1/ta.setFromMatrixColumn(e,1).length(),o=1/ta.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,_=a*c,g=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-g*u,t[9]=-a*l,t[2]=g-d*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,g=u*f;t[0]=d+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,g=u*f;t[0]=d-g*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,_=a*c,g=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+g,t[1]=l*f,t[5]=g*u+d,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+g,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rb,e,bb)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),os.crossVectors(i,di),os.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),os.crossVectors(i,di)),os.normalize(),Fc.crossVectors(di,os),r[0]=os.x,r[4]=Fc.x,r[8]=di.x,r[1]=os.y,r[5]=Fc.y,r[9]=di.y,r[2]=os.z,r[6]=Fc.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],x=i[7],y=i[11],T=i[15],w=r[0],M=r[4],P=r[8],S=r[12],E=r[1],I=r[5],D=r[9],K=r[13],L=r[2],F=r[6],k=r[10],H=r[14],U=r[3],O=r[7],R=r[11],$=r[15];return s[0]=o*w+a*E+l*L+u*U,s[4]=o*M+a*I+l*F+u*O,s[8]=o*P+a*D+l*k+u*R,s[12]=o*S+a*K+l*H+u*$,s[1]=c*w+f*E+d*L+p*U,s[5]=c*M+f*I+d*F+p*O,s[9]=c*P+f*D+d*k+p*R,s[13]=c*S+f*K+d*H+p*$,s[2]=_*w+g*E+m*L+h*U,s[6]=_*M+g*I+m*F+h*O,s[10]=_*P+g*D+m*k+h*R,s[14]=_*S+g*K+m*H+h*$,s[3]=v*w+x*E+y*L+T*U,s[7]=v*M+x*I+y*F+T*O,s[11]=v*P+x*D+y*k+T*R,s[15]=v*S+x*K+y*H+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+g*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=f*m*u-g*d*u+g*l*p-a*m*p-f*l*h+a*d*h,x=_*d*u-c*m*u-_*l*p+o*m*p+c*l*h-o*d*h,y=c*g*u-_*f*u+_*a*p-o*g*p-c*a*h+o*f*h,T=_*f*l-c*g*l-_*a*d+o*g*d+c*a*m-o*f*m,w=t*v+i*x+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-_*d*s+_*r*p-t*m*p-c*r*h+t*d*h)*M,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(_*f*s-c*g*s-_*i*p+t*g*p+c*i*h-t*f*h)*M,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*M,e[12]=T*M,e[13]=(c*g*r-_*f*r+_*i*d-t*g*d-c*i*m+t*f*m)*M,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,_=s*f,g=o*c,m=o*f,h=a*f,v=l*u,x=l*c,y=l*f,T=i.x,w=i.y,M=i.z;return r[0]=(1-(g+h))*T,r[1]=(p+y)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(d+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+x)*M,r[9]=(m-v)*M,r[10]=(1-(d+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ta.set(r[0],r[1],r[2]).length();const o=ta.set(r[4],r[5],r[6]).length(),a=ta.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tr.copy(this);const u=1/s,c=1/o,f=1/a;return tr.elements[0]*=u,tr.elements[1]*=u,tr.elements[2]*=u,tr.elements[4]*=c,tr.elements[5]*=c,tr.elements[6]*=c,tr.elements[8]*=f,tr.elements[9]*=f,tr.elements[10]*=f,t.setFromRotationMatrix(tr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Wr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(a===Wr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fh)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Wr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,p=(i+r)*c;let _,g;if(a===Wr)_=(o+s)*f,g=-2*f;else if(a===fh)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ta=new X,tr=new cn,Rb=new X(0,0,0),bb=new X(1,1,1),os=new X,Fc=new X,di=new X,ix=new cn,rx=new $u;class kh{constructor(e=0,t=0,i=0,r=kh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ix.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ix,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rx.setFromEuler(this),this.setFromQuaternion(rx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kh.DEFAULT_ORDER="XYZ";class p_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pb=0;const sx=new X,na=new $u,Dr=new cn,kc=new X,Pl=new X,Lb=new X,Db=new $u,ox=new X(1,0,0),ax=new X(0,1,0),lx=new X(0,0,1),Ub={type:"added"},Nb={type:"removed"};class ci extends dl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=qu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new X,t=new kh,i=new $u,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new rt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(ox,e)}rotateY(e){return this.rotateOnAxis(ax,e)}rotateZ(e){return this.rotateOnAxis(lx,e)}translateOnAxis(e,t){return sx.copy(e).applyQuaternion(this.quaternion),this.position.add(sx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ox,e)}translateY(e){return this.translateOnAxis(ax,e)}translateZ(e){return this.translateOnAxis(lx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kc.copy(e):kc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Pl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dr.lookAt(Pl,kc,this.up):Dr.lookAt(kc,Pl,this.up),this.quaternion.setFromRotationMatrix(Dr),r&&(Dr.extractRotation(r.matrixWorld),na.setFromRotationMatrix(Dr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ub)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,e,Lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pl,Db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ci.DEFAULT_UP=new X(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nr=new X,Ur=new X,jd=new X,Nr=new X,ia=new X,ra=new X,ux=new X,qd=new X,$d=new X,Kd=new X;let zc=!1;class ar{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nr.subVectors(e,t),r.cross(nr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nr.subVectors(r,t),Ur.subVectors(i,t),jd.subVectors(e,t);const o=nr.dot(nr),a=nr.dot(Ur),l=nr.dot(jd),u=Ur.dot(Ur),c=Ur.dot(jd),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Nr)===null?!1:Nr.x>=0&&Nr.y>=0&&Nr.x+Nr.y<=1}static getUV(e,t,i,r,s,o,a,l){return zc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Nr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Nr.x),l.addScaledVector(o,Nr.y),l.addScaledVector(a,Nr.z),l)}static isFrontFacing(e,t,i,r){return nr.subVectors(i,t),Ur.subVectors(e,t),nr.cross(Ur).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nr.subVectors(this.c,this.b),Ur.subVectors(this.a,this.b),nr.cross(Ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return zc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zc=!0),ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ia.subVectors(r,i),ra.subVectors(s,i),qd.subVectors(e,i);const l=ia.dot(qd),u=ra.dot(qd);if(l<=0&&u<=0)return t.copy(i);$d.subVectors(e,r);const c=ia.dot($d),f=ra.dot($d);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ia,o);Kd.subVectors(e,s);const p=ia.dot(Kd),_=ra.dot(Kd);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(ra,a);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return ux.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(ux,a);const h=1/(m+g+d);return o=g*h,a=d*h,t.copy(i).addScaledVector(ia,o).addScaledVector(ra,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function Zd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=yb(e,1),t=Zn(t,0,1),i=Zn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zd(o,s,e+1/3),this.g=Zd(o,s,e),this.b=Zd(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=nT[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=zd(e.r),this.g=zd(e.g),this.b=zd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return yt.fromWorkingColorSpace(En.copy(this),e),Math.round(Zn(En.r*255,0,255))*65536+Math.round(Zn(En.g*255,0,255))*256+Math.round(Zn(En.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=dn){yt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,r=En.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Bc);const i=Fd(as.h,Bc.h,t),r=Fd(as.s,Bc.s,t),s=Fd(as.l,Bc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ot;ot.NAMES=nT;let Ib=0;class Zu extends dl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=qu(),this.name="",this.type="Material",this.blending=Wa,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rm,this.blendDst=bm,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=ah,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ko,this.stencilZFail=Ko,this.stencilZPass=Ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wa&&(i.blending=this.blending),this.side!==Gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rm&&(i.blendSrc=this.blendSrc),this.blendDst!==bm&&(i.blendDst=this.blendDst),this.blendEquation!==lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ah&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$v&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ko&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ko&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ko&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vo extends Zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=BE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new X,Hc=new Ke;class Cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Es,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hc.fromBufferAttribute(this,t),Hc.applyMatrix3(e),this.setXY(t,Hc.x,Hc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Cl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cl(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cl(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cl(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),r=jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),r=jn(r,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kv&&(e.usage=this.usage),e}}class iT extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rT extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ob=0;const Ii=new cn,Qd=new ci,sa=new X,pi=new Ku,Ll=new Ku,sn=new X;class Li extends dl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=qu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QE(e)?rT:iT)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return Qd.lookAt(e),Qd.updateMatrix(),this.applyMatrix4(Qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ku);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];pi.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ll.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(pi.min,Ll.min),pi.expandByPoint(sn),sn.addVectors(pi.max,Ll.max),pi.expandByPoint(sn)):(pi.expandByPoint(Ll.min),pi.expandByPoint(Ll.max))}pi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)sn.fromBufferAttribute(a,u),l&&(sa.fromBufferAttribute(e,u),sn.add(sa)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new X,c[E]=new X;const f=new X,d=new X,p=new X,_=new Ke,g=new Ke,m=new Ke,h=new X,v=new X;function x(E,I,D){f.fromArray(r,E*3),d.fromArray(r,I*3),p.fromArray(r,D*3),_.fromArray(o,E*2),g.fromArray(o,I*2),m.fromArray(o,D*2),d.sub(f),p.sub(f),g.sub(_),m.sub(_);const K=1/(g.x*m.y-m.x*g.y);isFinite(K)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(K),v.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(K),u[E].add(h),u[I].add(h),u[D].add(h),c[E].add(v),c[I].add(v),c[D].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,I=y.length;E<I;++E){const D=y[E],K=D.start,L=D.count;for(let F=K,k=K+L;F<k;F+=3)x(i[F+0],i[F+1],i[F+2])}const T=new X,w=new X,M=new X,P=new X;function S(E){M.fromArray(s,E*3),P.copy(M);const I=u[E];T.copy(I),T.sub(M.multiplyScalar(M.dot(I))).normalize(),w.crossVectors(P,I);const K=w.dot(c[E])<0?-1:1;l[E*4]=T.x,l[E*4+1]=T.y,l[E*4+2]=T.z,l[E*4+3]=K}for(let E=0,I=y.length;E<I;++E){const D=y[E],K=D.start,L=D.count;for(let F=K,k=K+L;F<k;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,f=new X;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new Cn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cx=new cn,eo=new d_,Vc=new Fh,fx=new X,oa=new X,aa=new X,la=new X,Jd=new X,Gc=new X,Wc=new Ke,Xc=new Ke,Yc=new Ke,hx=new X,dx=new X,px=new X,jc=new X,qc=new X;class wi extends ci{constructor(e=new Li,t=new vo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Jd.fromBufferAttribute(f,e),o?Gc.addScaledVector(Jd,c):Gc.addScaledVector(Jd.sub(t),c))}t.add(Gc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(s),eo.copy(e.ray).recast(e.near),!(Vc.containsPoint(eo.origin)===!1&&(eo.intersectSphere(Vc,fx)===null||eo.origin.distanceToSquared(fx)>(e.far-e.near)**2))&&(cx.copy(s).invert(),eo.copy(e.ray).applyMatrix4(cx),!(i.boundingBox!==null&&eo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,eo)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=$c(this,h,e,i,u,c,f,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=$c(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=y,M=y+1,P=y+2;r=$c(this,h,e,i,u,c,f,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,x=m+1,y=m+2;r=$c(this,o,e,i,u,c,f,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fb(n,e,t,i,r,s,o,a){let l;if(e.side===li?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gs,a),l===null)return null;qc.copy(a),qc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(qc);return u<t.near||u>t.far?null:{distance:u,point:qc.clone(),object:n}}function $c(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,oa),n.getVertexPosition(l,aa),n.getVertexPosition(u,la);const c=Fb(n,e,t,i,oa,aa,la,jc);if(c){r&&(Wc.fromBufferAttribute(r,a),Xc.fromBufferAttribute(r,l),Yc.fromBufferAttribute(r,u),c.uv=ar.getInterpolation(jc,oa,aa,la,Wc,Xc,Yc,new Ke)),s&&(Wc.fromBufferAttribute(s,a),Xc.fromBufferAttribute(s,l),Yc.fromBufferAttribute(s,u),c.uv1=ar.getInterpolation(jc,oa,aa,la,Wc,Xc,Yc,new Ke),c.uv2=c.uv1),o&&(hx.fromBufferAttribute(o,a),dx.fromBufferAttribute(o,l),px.fromBufferAttribute(o,u),c.normal=ar.getInterpolation(jc,oa,aa,la,hx,dx,px,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new X,materialIndex:0};ar.getNormal(oa,aa,la,f.normal),c.face=f}return c}class Qu extends Li{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(u,3)),this.setAttribute("normal",new Wn(c,3)),this.setAttribute("uv",new Wn(f,2));function _(g,m,h,v,x,y,T,w,M,P,S){const E=y/M,I=T/P,D=y/2,K=T/2,L=w/2,F=M+1,k=P+1;let H=0,U=0;const O=new X;for(let R=0;R<k;R++){const $=R*I-K;for(let Q=0;Q<F;Q++){const j=Q*E-D;O[g]=j*v,O[m]=$*x,O[h]=L,u.push(O.x,O.y,O.z),O[g]=0,O[m]=0,O[h]=w>0?1:-1,c.push(O.x,O.y,O.z),f.push(Q/M),f.push(1-R/P),H+=1}}for(let R=0;R<P;R++)for(let $=0;$<M;$++){const Q=d+$+F*R,j=d+$+F*(R+1),Z=d+($+1)+F*(R+1),ie=d+($+1)+F*R;l.push(Q,j,ie),l.push(j,Z,ie),U+=6}a.addGroup(p,U,S),p+=U,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ll(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const i=ll(n[t]);for(const r in i)e[r]=i[r]}return e}function kb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sT(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const dh={clone:ll,merge:In};var zb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zb,this.fragmentShader=Bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ll(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class oT extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Wr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hi extends oT{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Im*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Im*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Od*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ua=-90,ca=1;class Hb extends ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hi(ua,ca,e,t);r.layers=this.layers,this.add(r);const s=new Hi(ua,ca,e,t);s.layers=this.layers,this.add(s);const o=new Hi(ua,ca,e,t);o.layers=this.layers,this.add(o);const a=new Hi(ua,ca,e,t);a.layers=this.layers,this.add(a);const l=new Hi(ua,ca,e,t);l.layers=this.layers,this.add(l);const u=new Hi(ua,ca,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Wr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class aT extends ui{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:sl,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vb extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(fu("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Po?dn:Wi),this.texture=new aT(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qu(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:ll(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:jr});s.uniforms.tEquirect.value=t;const o=new wi(r,s),a=t.minFilter;return t.minFilter===Bu&&(t.minFilter=Kn),new Hb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ep=new X,Gb=new X,Wb=new rt;class fs{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ep.subVectors(i,t).cross(Gb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ep),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wb.getNormalMatrix(e),r=this.coplanarPoint(ep).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const to=new Fh,Kc=new X;class lT{constructor(e=new fs,t=new fs,i=new fs,r=new fs,s=new fs,o=new fs){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-h).normalize(),i[1].setComponents(l+s,d+u,m+p,y+h).normalize(),i[2].setComponents(l+o,d+c,m+_,y+v).normalize(),i[3].setComponents(l-o,d-c,m-_,y-v).normalize(),i[4].setComponents(l-a,d-f,m-g,y-x).normalize(),t===Wr)i[5].setComponents(l+a,d+f,m+g,y+x).normalize();else if(t===fh)i[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),to.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),to.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(to)}intersectsSprite(e){return to.center.set(0,0,0),to.radius=.7071067811865476,to.applyMatrix4(e.matrixWorld),this.intersectsSphere(to)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kc.x=r.normal.x>0?e.max.x:e.min.x,Kc.y=r.normal.y>0?e.max.y:e.min.y,Kc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function uT(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=f.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,f,d),u.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const d=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&_.length===0&&n.bufferSubData(f,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const h=_[g];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class m_ extends Li{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const v=h*d-o;for(let x=0;x<u;x++){const y=x*f-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),T=v+1+u*(h+1),w=v+1+u*h;p.push(x,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Wn(_,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new m_(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yb=`#ifdef USE_ALPHAHASH
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
}`,Qe={alphahash_fragment:Yb,alphahash_pars_fragment:jb,alphamap_fragment:qb,alphamap_pars_fragment:$b,alphatest_fragment:Kb,alphatest_pars_fragment:Zb,aomap_fragment:Qb,aomap_pars_fragment:Jb,batching_pars_vertex:eP,batching_vertex:tP,begin_vertex:nP,beginnormal_vertex:iP,bsdfs:rP,iridescence_fragment:sP,bumpmap_pars_fragment:oP,clipping_planes_fragment:aP,clipping_planes_pars_fragment:lP,clipping_planes_pars_vertex:uP,clipping_planes_vertex:cP,color_fragment:fP,color_pars_fragment:hP,color_pars_vertex:dP,color_vertex:pP,common:mP,cube_uv_reflection_fragment:gP,defaultnormal_vertex:_P,displacementmap_pars_vertex:vP,displacementmap_vertex:xP,emissivemap_fragment:yP,emissivemap_pars_fragment:SP,colorspace_fragment:MP,colorspace_pars_fragment:EP,envmap_fragment:TP,envmap_common_pars_fragment:wP,envmap_pars_fragment:AP,envmap_pars_vertex:CP,envmap_physical_pars_fragment:zP,envmap_vertex:RP,fog_vertex:bP,fog_pars_vertex:PP,fog_fragment:LP,fog_pars_fragment:DP,gradientmap_pars_fragment:UP,lightmap_fragment:NP,lightmap_pars_fragment:IP,lights_lambert_fragment:OP,lights_lambert_pars_fragment:FP,lights_pars_begin:kP,lights_toon_fragment:BP,lights_toon_pars_fragment:HP,lights_phong_fragment:VP,lights_phong_pars_fragment:GP,lights_physical_fragment:WP,lights_physical_pars_fragment:XP,lights_fragment_begin:YP,lights_fragment_maps:jP,lights_fragment_end:qP,logdepthbuf_fragment:$P,logdepthbuf_pars_fragment:KP,logdepthbuf_pars_vertex:ZP,logdepthbuf_vertex:QP,map_fragment:JP,map_pars_fragment:e2,map_particle_fragment:t2,map_particle_pars_fragment:n2,metalnessmap_fragment:i2,metalnessmap_pars_fragment:r2,morphcolor_vertex:s2,morphnormal_vertex:o2,morphtarget_pars_vertex:a2,morphtarget_vertex:l2,normal_fragment_begin:u2,normal_fragment_maps:c2,normal_pars_fragment:f2,normal_pars_vertex:h2,normal_vertex:d2,normalmap_pars_fragment:p2,clearcoat_normal_fragment_begin:m2,clearcoat_normal_fragment_maps:g2,clearcoat_pars_fragment:_2,iridescence_pars_fragment:v2,opaque_fragment:x2,packing:y2,premultiplied_alpha_fragment:S2,project_vertex:M2,dithering_fragment:E2,dithering_pars_fragment:T2,roughnessmap_fragment:w2,roughnessmap_pars_fragment:A2,shadowmap_pars_fragment:C2,shadowmap_pars_vertex:R2,shadowmap_vertex:b2,shadowmask_pars_fragment:P2,skinbase_vertex:L2,skinning_pars_vertex:D2,skinning_vertex:U2,skinnormal_vertex:N2,specularmap_fragment:I2,specularmap_pars_fragment:O2,tonemapping_fragment:F2,tonemapping_pars_fragment:k2,transmission_fragment:z2,transmission_pars_fragment:B2,uv_pars_fragment:H2,uv_pars_vertex:V2,uv_vertex:G2,worldpos_vertex:W2,background_vert:X2,background_frag:Y2,backgroundCube_vert:j2,backgroundCube_frag:q2,cube_vert:$2,cube_frag:K2,depth_vert:Z2,depth_frag:Q2,distanceRGBA_vert:J2,distanceRGBA_frag:eL,equirect_vert:tL,equirect_frag:nL,linedashed_vert:iL,linedashed_frag:rL,meshbasic_vert:sL,meshbasic_frag:oL,meshlambert_vert:aL,meshlambert_frag:lL,meshmatcap_vert:uL,meshmatcap_frag:cL,meshnormal_vert:fL,meshnormal_frag:hL,meshphong_vert:dL,meshphong_frag:pL,meshphysical_vert:mL,meshphysical_frag:gL,meshtoon_vert:_L,meshtoon_frag:vL,points_vert:xL,points_frag:yL,shadow_vert:SL,shadow_frag:ML,sprite_vert:EL,sprite_frag:TL},pe={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},vr={basic:{uniforms:In([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:In([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:In([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:In([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:In([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ot(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:In([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:In([pe.points,pe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:In([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:In([pe.common,pe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:In([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:In([pe.sprite,pe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:In([pe.common,pe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:In([pe.lights,pe.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};vr.physical={uniforms:In([vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Zc={r:0,b:0,g:0};function wL(n,e,t,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function _(m,h){let v=!1,x=h.isScene===!0?h.background:null;x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ih)?(c===void 0&&(c=new wi(new Qu(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ll(vr.backgroundCube.uniforms),vertexShader:vr.backgroundCube.vertexShader,fragmentShader:vr.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,(f!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new wi(new m_(2,2),new ei({name:"BackgroundMaterial",uniforms:ll(vr.background.uniforms),vertexShader:vr.background.vertexShader,fragmentShader:vr.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,h){m.getRGB(Zc,sT(n)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function AL(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(L,F,k,H,U){let O=!1;if(o){const R=g(H,k,F);u!==R&&(u=R,p(u.object)),O=h(L,H,k,U),O&&v(L,H,k,U)}else{const R=F.wireframe===!0;(u.geometry!==H.id||u.program!==k.id||u.wireframe!==R)&&(u.geometry=H.id,u.program=k.id,u.wireframe=R,O=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,P(L,F,k,H),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,F,k){const H=k.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let O=U[F.id];O===void 0&&(O={},U[F.id]=O);let R=O[H];return R===void 0&&(R=m(d()),O[H]=R),R}function m(L){const F=[],k=[],H=[];for(let U=0;U<r;U++)F[U]=0,k[U]=0,H[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:H,object:L,attributes:{},index:null}}function h(L,F,k,H){const U=u.attributes,O=F.attributes;let R=0;const $=k.getAttributes();for(const Q in $)if($[Q].location>=0){const Z=U[Q];let ie=O[Q];if(ie===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;R++}return u.attributesNum!==R||u.index!==H}function v(L,F,k,H){const U={},O=F.attributes;let R=0;const $=k.getAttributes();for(const Q in $)if($[Q].location>=0){let Z=O[Q];Z===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),U[Q]=ie,R++}u.attributes=U,u.attributesNum=R,u.index=H}function x(){const L=u.newAttributes;for(let F=0,k=L.length;F<k;F++)L[F]=0}function y(L){T(L,0)}function T(L,F){const k=u.newAttributes,H=u.enabledAttributes,U=u.attributeDivisors;k[L]=1,H[L]===0&&(n.enableVertexAttribArray(L),H[L]=1),U[L]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),U[L]=F)}function w(){const L=u.newAttributes,F=u.enabledAttributes;for(let k=0,H=F.length;k<H;k++)F[k]!==L[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function M(L,F,k,H,U,O,R){R===!0?n.vertexAttribIPointer(L,F,k,U,O):n.vertexAttribPointer(L,F,k,H,U,O)}function P(L,F,k,H){if(i.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=H.attributes,O=k.getAttributes(),R=F.defaultAttributeValues;for(const $ in O){const Q=O[$];if(Q.location>=0){let j=U[$];if(j===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const Z=j.normalized,ie=j.itemSize,fe=t.get(j);if(fe===void 0)continue;const le=fe.buffer,Pe=fe.type,we=fe.bytesPerElement,De=i.isWebGL2===!0&&(Pe===n.INT||Pe===n.UNSIGNED_INT||j.gpuType===GE);if(j.isInterleavedBufferAttribute){const Oe=j.data,V=Oe.stride,We=j.offset;if(Oe.isInstancedInterleavedBuffer){for(let _e=0;_e<Q.locationSize;_e++)T(Q.location+_e,Oe.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let _e=0;_e<Q.locationSize;_e++)y(Q.location+_e);n.bindBuffer(n.ARRAY_BUFFER,le);for(let _e=0;_e<Q.locationSize;_e++)M(Q.location+_e,ie/Q.locationSize,Pe,Z,V*we,(We+ie/Q.locationSize*_e)*we,De)}else{if(j.isInstancedBufferAttribute){for(let Oe=0;Oe<Q.locationSize;Oe++)T(Q.location+Oe,j.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Oe=0;Oe<Q.locationSize;Oe++)y(Q.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Oe=0;Oe<Q.locationSize;Oe++)M(Q.location+Oe,ie/Q.locationSize,Pe,Z,ie*we,ie/Q.locationSize*Oe*we,De)}}else if(R!==void 0){const Z=R[$];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(Q.location,Z);break;case 3:n.vertexAttrib3fv(Q.location,Z);break;case 4:n.vertexAttrib4fv(Q.location,Z);break;default:n.vertexAttrib1fv(Q.location,Z)}}}}w()}function S(){D();for(const L in a){const F=a[L];for(const k in F){const H=F[k];for(const U in H)_(H[U].object),delete H[U];delete F[k]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const k in F){const H=F[k];for(const U in H)_(H[U].object),delete H[U];delete F[k]}delete a[L.id]}function I(L){for(const F in a){const k=a[F];if(k[L.id]===void 0)continue;const H=k[L.id];for(const U in H)_(H[U].object),delete H[U];delete k[L.id]}}function D(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:D,resetDefaultState:K,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function CL(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,f,d),t.update(f,s,d)}function u(c,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(c[_],f[_]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function RL(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),T=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function bL(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new fs,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(_,d,x,p);for(let T=0;T!==x;++T)y[T]=t[T];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function PL(n){let e=new WeakMap;function t(o,a){return a===Pm?o.mapping=sl:a===Lm&&(o.mapping=ol),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pm||a===Lm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Vb(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cT extends oT{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ba=4,mx=[.125,.215,.35,.446,.526,.582],uo=20,tp=new cT,gx=new ot;let np=null,ip=0,rp=0;const ao=(1+Math.sqrt(5))/2,fa=1/ao,_x=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,ao,fa),new X(0,ao,-fa),new X(fa,0,ao),new X(-fa,0,ao),new X(ao,fa,0),new X(-ao,fa,0)];class vx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(np,ip,rp),e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sl||e.mapping===ol?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),np=this._renderer.getRenderTarget(),ip=this._renderer.getActiveCubeFace(),rp=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Cr,format:Gi,colorSpace:es,depthBuffer:!1},r=xx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LL(s)),this._blurMaterial=DL(s,e,t)}return r}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,tp)}_sceneToCubeUV(e,t,i,r){const a=new Hi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(gx),c.toneMapping=Is,c.autoClear=!1;const p=new vo({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1}),_=new wi(new Qu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(gx),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Qc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sl||e.mapping===ol;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,tp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_x[(r-1)%_x.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new wi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*uo-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):uo;m>uo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${uo}`);const h=[];let v=0;for(let M=0;M<uo;++M){const P=M/g,S=Math.exp(-P*P/2);h.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-ba?r-x+ba:0),w=4*(this._cubeSize-y);Qc(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(f,tp)}}function LL(n){const e=[],t=[],i=[];let r=n;const s=n-ba+1+mx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ba?l=mx[o-n+ba-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,P=w>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,g*_*w),x.set(d,m*_*w);const E=[w,w,w,w,w,w];y.set(E,h*_*w)}const T=new Li;T.setAttribute("position",new Cn(v,g)),T.setAttribute("uv",new Cn(x,m)),T.setAttribute("faceIndex",new Cn(y,h)),e.push(T),r>ba&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xx(n,e,t){const i=new Ki(n,e,t);return i.texture.mapping=Ih,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function DL(n,e,t){const i=new Float32Array(uo),r=new X(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:uo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:g_(),fragmentShader:`

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
		`,blending:jr,depthTest:!1,depthWrite:!1})}function yx(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:g_(),fragmentShader:`

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
		`,blending:jr,depthTest:!1,depthWrite:!1})}function Sx(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:g_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jr,depthTest:!1,depthWrite:!1})}function g_(){return`

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
	`}function UL(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Pm||l===Lm,c=l===sl||l===ol;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new vx(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new vx(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function NL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IL(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],w=v[x+1],M=v[x+2];d.push(T,w,w,M,M,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,w=x+1,M=x+2;d.push(T,w,w,M,M,T)}}else return;const m=new(QE(d)?rT:iT)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function OL(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function f(p,_,g){if(g===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,_,a,p*l,g),t.update(_,s,g)}function d(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<g;h++)this.render(p[h]/l,_[h]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let h=0;for(let v=0;v<g;v++)h+=_[v];t.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function FL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kL(n,e){return n[0]-e[0]}function zL(n,e){return Math.abs(e[1])-Math.abs(n[1])}function BL(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new mn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let F=function(){K.dispose(),s.delete(c),c.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let E=c.attributes.position.count*S,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*I*4*g),K=new tT(D,E,I,g);K.type=Es,K.needsUpdate=!0;const L=S*4;for(let k=0;k<g;k++){const H=w[k],U=M[k],O=P[k],R=E*I*4*k;for(let $=0;$<H.count;$++){const Q=$*L;x===!0&&(o.fromBufferAttribute(H,$),D[R+Q+0]=o.x,D[R+Q+1]=o.y,D[R+Q+2]=o.z,D[R+Q+3]=0),y===!0&&(o.fromBufferAttribute(U,$),D[R+Q+4]=o.x,D[R+Q+5]=o.y,D[R+Q+6]=o.z,D[R+Q+7]=0),T===!0&&(o.fromBufferAttribute(O,$),D[R+Q+8]=o.x,D[R+Q+9]=o.y,D[R+Q+10]=o.z,D[R+Q+11]=O.itemSize===4?o.w:1)}}m={count:g,texture:K,size:new Ke(E,I)},s.set(c,m),c.addEventListener("dispose",F)}let h=0;for(let x=0;x<d.length;x++)h+=d[x];const v=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=i[c.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<_;y++){const T=g[y];T[0]=y,T[1]=d[y]}g.sort(zL);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(kL);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],M=T[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),h&&c.getAttribute("morphNormal"+y)!==h[w]&&c.setAttribute("morphNormal"+y,h[w]),r[y]=M,v+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),h&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function HL(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class fT extends ui{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:bo,c!==bo&&c!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===bo&&(i=Ms),i===void 0&&c===al&&(i=Ro),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hT=new ui,dT=new fT(1,1);dT.compareFunction=ZE;const pT=new tT,mT=new Ab,gT=new aT,Mx=[],Ex=[],Tx=new Float32Array(16),wx=new Float32Array(9),Ax=new Float32Array(4);function pl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Mx[r];if(s===void 0&&(s=new Float32Array(r),Mx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zh(n,e){let t=Ex[e];t===void 0&&(t=new Int32Array(e),Ex[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function VL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function WL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function XL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function YL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ax.set(i),n.uniformMatrix2fv(this.addr,!1,Ax),rn(t,i)}}function jL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;wx.set(i),n.uniformMatrix3fv(this.addr,!1,wx),rn(t,i)}}function qL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Tx.set(i),n.uniformMatrix4fv(this.addr,!1,Tx),rn(t,i)}}function $L(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function KL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function ZL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function QL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function JL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function eD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function tD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function nD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function iD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?dT:hT;t.setTexture2D(e||s,r)}function rD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||mT,r)}function sD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||gT,r)}function oD(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pT,r)}function aD(n){switch(n){case 5126:return VL;case 35664:return GL;case 35665:return WL;case 35666:return XL;case 35674:return YL;case 35675:return jL;case 35676:return qL;case 5124:case 35670:return $L;case 35667:case 35671:return KL;case 35668:case 35672:return ZL;case 35669:case 35673:return QL;case 5125:return JL;case 36294:return eD;case 36295:return tD;case 36296:return nD;case 35678:case 36198:case 36298:case 36306:case 35682:return iD;case 35679:case 36299:case 36307:return rD;case 35680:case 36300:case 36308:case 36293:return sD;case 36289:case 36303:case 36311:case 36292:return oD}}function lD(n,e){n.uniform1fv(this.addr,e)}function uD(n,e){const t=pl(e,this.size,2);n.uniform2fv(this.addr,t)}function cD(n,e){const t=pl(e,this.size,3);n.uniform3fv(this.addr,t)}function fD(n,e){const t=pl(e,this.size,4);n.uniform4fv(this.addr,t)}function hD(n,e){const t=pl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dD(n,e){const t=pl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function pD(n,e){const t=pl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mD(n,e){n.uniform1iv(this.addr,e)}function gD(n,e){n.uniform2iv(this.addr,e)}function _D(n,e){n.uniform3iv(this.addr,e)}function vD(n,e){n.uniform4iv(this.addr,e)}function xD(n,e){n.uniform1uiv(this.addr,e)}function yD(n,e){n.uniform2uiv(this.addr,e)}function SD(n,e){n.uniform3uiv(this.addr,e)}function MD(n,e){n.uniform4uiv(this.addr,e)}function ED(n,e,t){const i=this.cache,r=e.length,s=zh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||hT,s[o])}function TD(n,e,t){const i=this.cache,r=e.length,s=zh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||mT,s[o])}function wD(n,e,t){const i=this.cache,r=e.length,s=zh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gT,s[o])}function AD(n,e,t){const i=this.cache,r=e.length,s=zh(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||pT,s[o])}function CD(n){switch(n){case 5126:return lD;case 35664:return uD;case 35665:return cD;case 35666:return fD;case 35674:return hD;case 35675:return dD;case 35676:return pD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return _D;case 35669:case 35673:return vD;case 5125:return xD;case 36294:return yD;case 36295:return SD;case 36296:return MD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return AD}}class RD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=aD(t.type)}}class bD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CD(t.type)}}class PD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const sp=/(\w+)(\])?(\[|\.)?/g;function Cx(n,e){n.seq.push(e),n.map[e.id]=e}function LD(n,e,t){const i=n.name,r=i.length;for(sp.lastIndex=0;;){const s=sp.exec(i),o=sp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Cx(t,u===void 0?new RD(a,n,e):new bD(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new PD(a),Cx(t,f)),t=f}}}class Tf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);LD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Rx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const DD=37297;let UD=0;function ND(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ID(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===ch&&t===uh?i="LinearDisplayP3ToLinearSRGB":e===uh&&t===ch&&(i="LinearSRGBToLinearDisplayP3"),n){case es:case Oh:return[i,"LinearTransferOETF"];case dn:case h_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function bx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ND(n.getShaderSource(e),o)}else return r}function OD(n,e){const t=ID(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function FD(n,e){let t;switch(e){case $R:t="Linear";break;case KR:t="Reinhard";break;case ZR:t="OptimizedCineon";break;case HE:t="ACESFilmic";break;case JR:t="AgX";break;case QR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kD(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pa).join(`
`)}function zD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pa).join(`
`)}function BD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function HD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pa(n){return n!==""}function Px(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fm(n){return n.replace(VD,WD)}const GD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WD(n,e){let t=Qe[e];if(t===void 0){const i=GD.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fm(t)}const XD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dx(n){return n.replace(XD,YD)}function YD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ux(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ER?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ir&&(e="SHADOWMAP_TYPE_VSM"),e}function qD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sl:case ol:e="ENVMAP_TYPE_CUBE";break;case Ih:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $D(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ol:e="ENVMAP_MODE_REFRACTION";break}return e}function KD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case BE:e="ENVMAP_BLENDING_MULTIPLY";break;case jR:e="ENVMAP_BLENDING_MIX";break;case qR:e="ENVMAP_BLENDING_ADD";break}return e}function ZD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function QD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jD(t),u=qD(t),c=$D(t),f=KD(t),d=ZD(t),p=t.isWebGL2?"":kD(t),_=zD(t),g=BD(s),m=r.createProgram();let h,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pa).join(`
`),h.length>0&&(h+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Pa).join(`
`),v.length>0&&(v+=`
`)):(h=[Ux(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),v=[p,Ux(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Is?FD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,OD("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pa).join(`
`)),o=Fm(o),o=Px(o,t),o=Lx(o,t),a=Fm(a),a=Px(a,t),a=Lx(a,t),o=Dx(o),a=Dx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+h+o,T=x+v+a,w=Rx(r,r.VERTEX_SHADER,y),M=Rx(r,r.FRAGMENT_SHADER,T);r.attachShader(m,w),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(D){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(M).trim();let k=!0,H=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,M);else{const U=bx(r,w,"vertex"),O=bx(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+U+`
`+O)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||F==="")&&(H=!1);H&&(D.diagnostics={runnable:k,programLog:K,vertexShader:{log:L,prefix:h},fragmentShader:{log:F,prefix:v}})}r.deleteShader(w),r.deleteShader(M),S=new Tf(r,m),E=HD(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,DD)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=M,this}let JD=0;class e3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new t3(e),t.set(e,i)),i}}class t3{constructor(e){this.id=JD++,this.code=e,this.usedTimes=0}}function n3(n,e,t,i,r,s,o){const a=new p_,l=new e3,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,E,I,D,K){const L=D.fog,F=K.geometry,k=S.isMeshStandardMaterial?D.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),U=H&&H.mapping===Ih?H.image.height:null,O=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const R=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$=R!==void 0?R.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let j,Z,ie,fe;if(O){const Ee=vr[O];j=Ee.vertexShader,Z=Ee.fragmentShader}else j=S.vertexShader,Z=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const le=n.getRenderTarget(),Pe=K.isInstancedMesh===!0,we=K.isBatchedMesh===!0,De=!!S.map,Oe=!!S.matcap,V=!!H,We=!!S.aoMap,_e=!!S.lightMap,Ue=!!S.bumpMap,xe=!!S.normalMap,G=!!S.displacementMap,Fe=!!S.emissiveMap,b=!!S.metalnessMap,A=!!S.roughnessMap,z=S.anisotropy>0,J=S.clearcoat>0,ee=S.iridescence>0,ne=S.sheen>0,ge=S.transmission>0,de=z&&!!S.anisotropyMap,re=J&&!!S.clearcoatMap,Ae=J&&!!S.clearcoatNormalMap,ve=J&&!!S.clearcoatRoughnessMap,te=ee&&!!S.iridescenceMap,et=ee&&!!S.iridescenceThicknessMap,Re=ne&&!!S.sheenColorMap,Xe=ne&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ye=!!S.specularColorMap,Ye=!!S.specularIntensityMap,tt=ge&&!!S.transmissionMap,ht=ge&&!!S.thicknessMap,me=!!S.gradientMap,ae=!!S.alphaMap,N=S.alphaTest>0,ue=!!S.alphaHash,ce=!!S.extensions,Be=!!F.attributes.uv1,ke=!!F.attributes.uv2,lt=!!F.attributes.uv3;let ft=Is;return S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ft=n.toneMapping),{isWebGL2:c,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:Z,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:we,instancing:Pe,instancingColor:Pe&&K.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:es,map:De,matcap:Oe,envMap:V,envMapMode:V&&H.mapping,envMapCubeUVHeight:U,aoMap:We,lightMap:_e,bumpMap:Ue,normalMap:xe,displacementMap:d&&G,emissiveMap:Fe,normalMapObjectSpace:xe&&S.normalMapType===hb,normalMapTangentSpace:xe&&S.normalMapType===fb,metalnessMap:b,roughnessMap:A,anisotropy:z,anisotropyMap:de,clearcoat:J,clearcoatMap:re,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ve,iridescence:ee,iridescenceMap:te,iridescenceThicknessMap:et,sheen:ne,sheenColorMap:Re,sheenRoughnessMap:Xe,specularMap:Me,specularColorMap:ye,specularIntensityMap:Ye,transmission:ge,transmissionMap:tt,thicknessMap:ht,gradientMap:me,opaque:S.transparent===!1&&S.blending===Wa,alphaMap:ae,alphaTest:N,alphaHash:ue,combine:S.combine,mapUv:De&&g(S.map.channel),aoMapUv:We&&g(S.aoMap.channel),lightMapUv:_e&&g(S.lightMap.channel),bumpMapUv:Ue&&g(S.bumpMap.channel),normalMapUv:xe&&g(S.normalMap.channel),displacementMapUv:G&&g(S.displacementMap.channel),emissiveMapUv:Fe&&g(S.emissiveMap.channel),metalnessMapUv:b&&g(S.metalnessMap.channel),roughnessMapUv:A&&g(S.roughnessMap.channel),anisotropyMapUv:de&&g(S.anisotropyMap.channel),clearcoatMapUv:re&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&g(S.sheenRoughnessMap.channel),specularMapUv:Me&&g(S.specularMap.channel),specularColorMapUv:ye&&g(S.specularColorMap.channel),specularIntensityMapUv:Ye&&g(S.specularIntensityMap.channel),transmissionMapUv:tt&&g(S.transmissionMap.channel),thicknessMapUv:ht&&g(S.thicknessMap.channel),alphaMapUv:ae&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(xe||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:ke,vertexUv3s:lt,pointsUvs:K.isPoints===!0&&!!F.attributes.uv&&(De||ae),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vi,flipSided:S.side===li,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ce&&S.extensions.derivatives===!0,extensionFragDepth:ce&&S.extensions.fragDepth===!0,extensionDrawBuffers:ce&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=_[S.type];let I;if(E){const D=vr[E];I=dh.clone(D.uniforms)}else I=S.uniforms;return I}function T(S,E){let I;for(let D=0,K=u.length;D<K;D++){const L=u[D];if(L.cacheKey===E){I=L,++I.usedTimes;break}}return I===void 0&&(I=new QD(n,E,S,s),u.push(I)),I}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:P}}function i3(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function r3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ix(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,_,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function a(f,d,p,_,g,m){const h=o(f,d,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,g,m){const h=o(f,d,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||r3),i.length>1&&i.sort(d||Nx),r.length>1&&r.sort(d||Nx)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function s3(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ix,n.set(i,[o])):r>=s.length?(o=new Ix,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function o3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new ot};break;case"SpotLight":t={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function a3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let l3=0;function u3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function c3(n,e){const t=new o3,i=a3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const s=new X,o=new cn,a=new cn;function l(c,f){let d=0,p=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let g=0,m=0,h=0,v=0,x=0,y=0,T=0,w=0,M=0,P=0,S=0;c.sort(u3);const E=f===!0?Math.PI:1;for(let D=0,K=c.length;D<K;D++){const L=c[D],F=L.color,k=L.intensity,H=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*k*E,p+=F.g*k*E,_+=F.b*k*E;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],k);S++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.directionalShadow[g]=$,r.directionalShadowMap[g]=U,r.directionalShadowMatrix[g]=L.shadow.matrix,y++}r.directional[g]=O,g++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(F).multiplyScalar(k*E),O.distance=H,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[h]=O;const R=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,R.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[h]=R.matrix,L.castShadow){const $=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.spotShadow[h]=$,r.spotShadowMap[h]=U,w++}h++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(F).multiplyScalar(k),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=O,v++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*E),O.distance=L.distance,O.decay=L.decay,L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=L.shadow.matrix,T++}r.point[m]=O,m++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(k*E),O.groundColor.copy(L.groundColor).multiplyScalar(k*E),r.hemi[x]=O,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==g||I.pointLength!==m||I.spotLength!==h||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==M||I.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,I.directionalLength=g,I.pointLength=m,I.spotLength=h,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=M,I.numLightProbes=S,r.version=l3++)}function u(c,f){let d=0,p=0,_=0,g=0,m=0;const h=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const T=r.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),d++}else if(y.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const T=r.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function Ox(n,e){const t=new c3(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function f3(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ox(n,e),t.set(s,[l])):o>=a.length?(l=new Ox(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class h3 extends Zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ub,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class d3 extends Zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const p3=`void main() {
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
}`;function g3(n,e,t){let i=new lT;const r=new Ke,s=new Ke,o=new mn,a=new h3({depthPacking:cb}),l=new d3,u={},c=t.maxTextureSize,f={[Gs]:li,[li]:Gs,[Vi]:Vi},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:p3,fragmentShader:m3}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Li;_.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zE;let h=this.type;this.render=function(w,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),D=n.state;D.setBlending(jr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const K=h!==Ir&&this.type===Ir,L=h===Ir&&this.type!==Ir;for(let F=0,k=w.length;F<k;F++){const H=w[F],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();if(r.multiply(O),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,U.mapSize.y=s.y)),U.map===null||K===!0||L===!0){const $=this.type!==Ir?{minFilter:Bn,magFilter:Bn}:{};U.map!==null&&U.map.dispose(),U.map=new Ki(r.x,r.y,$),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const R=U.getViewportCount();for(let $=0;$<R;$++){const Q=U.getViewport($);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),D.viewport(o),U.updateMatrices(H,$),i=U.getFrustum(),y(M,P,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Ir&&v(U,P),U.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,I)};function v(w,M){const P=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ki(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,P,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,P,p,g,null)}function x(w,M,P,S){let E=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)E=I;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const D=E.uuid,K=M.uuid;let L=u[D];L===void 0&&(L={},u[D]=L);let F=L[K];F===void 0&&(F=E.clone(),L[K]=F,M.addEventListener("dispose",T)),E=F}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Ir?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:f[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=n.properties.get(E);D.light=P}return E}function y(w,M,P,S,E){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Ir)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const K=e.update(w),L=w.material;if(Array.isArray(L)){const F=K.groups;for(let k=0,H=F.length;k<H;k++){const U=F[k],O=L[U.materialIndex];if(O&&O.visible){const R=x(w,O,S,E);w.onBeforeShadow(n,w,M,P,K,R,U),n.renderBufferDirect(P,null,K,R,w,U),w.onAfterShadow(n,w,M,P,K,R,U)}}}else if(L.visible){const F=x(w,L,S,E);w.onBeforeShadow(n,w,M,P,K,F,null),n.renderBufferDirect(P,null,K,F,w,null),w.onAfterShadow(n,w,M,P,K,F,null)}}const D=w.children;for(let K=0,L=D.length;K<L;K++)y(D[K],M,P,S,E)}function T(w){w.target.removeEventListener("dispose",T);for(const P in u){const S=u[P],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function _3(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const ue=new mn;let ce=null;const Be=new mn(0,0,0,0);return{setMask:function(ke){ce!==ke&&!N&&(n.colorMask(ke,ke,ke,ke),ce=ke)},setLocked:function(ke){N=ke},setClear:function(ke,lt,ft,Le,Ee){Ee===!0&&(ke*=Le,lt*=Le,ft*=Le),ue.set(ke,lt,ft,Le),Be.equals(ue)===!1&&(n.clearColor(ke,lt,ft,Le),Be.copy(ue))},reset:function(){N=!1,ce=null,Be.set(-1,0,0,0)}}}function s(){let N=!1,ue=null,ce=null,Be=null;return{setTest:function(ke){ke?we(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(ke){ue!==ke&&!N&&(n.depthMask(ke),ue=ke)},setFunc:function(ke){if(ce!==ke){switch(ke){case BR:n.depthFunc(n.NEVER);break;case HR:n.depthFunc(n.ALWAYS);break;case VR:n.depthFunc(n.LESS);break;case ah:n.depthFunc(n.LEQUAL);break;case GR:n.depthFunc(n.EQUAL);break;case WR:n.depthFunc(n.GEQUAL);break;case XR:n.depthFunc(n.GREATER);break;case YR:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=ke}},setLocked:function(ke){N=ke},setClear:function(ke){Be!==ke&&(n.clearDepth(ke),Be=ke)},reset:function(){N=!1,ue=null,ce=null,Be=null}}}function o(){let N=!1,ue=null,ce=null,Be=null,ke=null,lt=null,ft=null,Le=null,Ee=null;return{setTest:function(Ie){N||(Ie?we(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(Ie){ue!==Ie&&!N&&(n.stencilMask(Ie),ue=Ie)},setFunc:function(Ie,oe,He){(ce!==Ie||Be!==oe||ke!==He)&&(n.stencilFunc(Ie,oe,He),ce=Ie,Be=oe,ke=He)},setOp:function(Ie,oe,He){(lt!==Ie||ft!==oe||Le!==He)&&(n.stencilOp(Ie,oe,He),lt=Ie,ft=oe,Le=He)},setLocked:function(Ie){N=Ie},setClear:function(Ie){Ee!==Ie&&(n.clearStencil(Ie),Ee=Ie)},reset:function(){N=!1,ue=null,ce=null,Be=null,ke=null,lt=null,ft=null,Le=null,Ee=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,g=[],m=null,h=!1,v=null,x=null,y=null,T=null,w=null,M=null,P=null,S=new ot(0,0,0),E=0,I=!1,D=null,K=null,L=null,F=null,k=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(R)[1]),U=O>=1):R.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),U=O>=2);let $=null,Q={};const j=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),ie=new mn().fromArray(j),fe=new mn().fromArray(Z);function le(N,ue,ce,Be){const ke=new Uint8Array(4),lt=n.createTexture();n.bindTexture(N,lt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<ce;ft++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(ue,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(ue+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return lt}const Pe={};Pe[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),we(n.DEPTH_TEST),l.setFunc(ah),Fe(!1),b(vv),we(n.CULL_FACE),xe(jr);function we(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function De(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function Oe(N,ue){return p[N]!==ue?(n.bindFramebuffer(N,ue),p[N]=ue,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ue),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ue)),!0):!1}function V(N,ue){let ce=g,Be=!1;if(N)if(ce=_.get(ue),ce===void 0&&(ce=[],_.set(ue,ce)),N.isWebGLMultipleRenderTargets){const ke=N.texture;if(ce.length!==ke.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,ft=ke.length;lt<ft;lt++)ce[lt]=n.COLOR_ATTACHMENT0+lt;ce.length=ke.length,Be=!0}}else ce[0]!==n.COLOR_ATTACHMENT0&&(ce[0]=n.COLOR_ATTACHMENT0,Be=!0);else ce[0]!==n.BACK&&(ce[0]=n.BACK,Be=!0);Be&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function We(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const _e={[lo]:n.FUNC_ADD,[wR]:n.FUNC_SUBTRACT,[AR]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[Sv]=n.MIN,_e[Mv]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(_e[Sv]=N.MIN_EXT,_e[Mv]=N.MAX_EXT)}const Ue={[CR]:n.ZERO,[RR]:n.ONE,[bR]:n.SRC_COLOR,[Rm]:n.SRC_ALPHA,[IR]:n.SRC_ALPHA_SATURATE,[UR]:n.DST_COLOR,[LR]:n.DST_ALPHA,[PR]:n.ONE_MINUS_SRC_COLOR,[bm]:n.ONE_MINUS_SRC_ALPHA,[NR]:n.ONE_MINUS_DST_COLOR,[DR]:n.ONE_MINUS_DST_ALPHA,[OR]:n.CONSTANT_COLOR,[FR]:n.ONE_MINUS_CONSTANT_COLOR,[kR]:n.CONSTANT_ALPHA,[zR]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(N,ue,ce,Be,ke,lt,ft,Le,Ee,Ie){if(N===jr){h===!0&&(De(n.BLEND),h=!1);return}if(h===!1&&(we(n.BLEND),h=!0),N!==TR){if(N!==v||Ie!==I){if((x!==lo||w!==lo)&&(n.blendEquation(n.FUNC_ADD),x=lo,w=lo),Ie)switch(N){case Wa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ps:n.blendFunc(n.ONE,n.ONE);break;case xv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Wa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ps:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,T=null,M=null,P=null,S.set(0,0,0),E=0,v=N,I=Ie}return}ke=ke||ue,lt=lt||ce,ft=ft||Be,(ue!==x||ke!==w)&&(n.blendEquationSeparate(_e[ue],_e[ke]),x=ue,w=ke),(ce!==y||Be!==T||lt!==M||ft!==P)&&(n.blendFuncSeparate(Ue[ce],Ue[Be],Ue[lt],Ue[ft]),y=ce,T=Be,M=lt,P=ft),(Le.equals(S)===!1||Ee!==E)&&(n.blendColor(Le.r,Le.g,Le.b,Ee),S.copy(Le),E=Ee),v=N,I=!1}function G(N,ue){N.side===Vi?De(n.CULL_FACE):we(n.CULL_FACE);let ce=N.side===li;ue&&(ce=!ce),Fe(ce),N.blending===Wa&&N.transparent===!1?xe(jr):xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Be=N.stencilWrite;u.setTest(Be),Be&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),z(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?we(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function b(N){N!==SR?(we(n.CULL_FACE),N!==K&&(N===vv?n.cullFace(n.BACK):N===MR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),K=N}function A(N){N!==L&&(U&&n.lineWidth(N),L=N)}function z(N,ue,ce){N?(we(n.POLYGON_OFFSET_FILL),(F!==ue||k!==ce)&&(n.polygonOffset(ue,ce),F=ue,k=ce)):De(n.POLYGON_OFFSET_FILL)}function J(N){N?we(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function ee(N){N===void 0&&(N=n.TEXTURE0+H-1),$!==N&&(n.activeTexture(N),$=N)}function ne(N,ue,ce){ce===void 0&&($===null?ce=n.TEXTURE0+H-1:ce=$);let Be=Q[ce];Be===void 0&&(Be={type:void 0,texture:void 0},Q[ce]=Be),(Be.type!==N||Be.texture!==ue)&&($!==ce&&(n.activeTexture(ce),$=ce),n.bindTexture(N,ue||Pe[N]),Be.type=N,Be.texture=ue)}function ge(){const N=Q[$];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function de(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Xe(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(N){ie.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function tt(N){fe.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),fe.copy(N))}function ht(N,ue){let ce=f.get(ue);ce===void 0&&(ce=new WeakMap,f.set(ue,ce));let Be=ce.get(N);Be===void 0&&(Be=n.getUniformBlockIndex(ue,N.name),ce.set(N,Be))}function me(N,ue){const Be=f.get(ue).get(N);c.get(ue)!==Be&&(n.uniformBlockBinding(ue,Be,N.__bindingPointIndex),c.set(ue,Be))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},$=null,Q={},p={},_=new WeakMap,g=[],m=null,h=!1,v=null,x=null,y=null,T=null,w=null,M=null,P=null,S=new ot(0,0,0),E=0,I=!1,D=null,K=null,L=null,F=null,k=null,ie.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:we,disable:De,bindFramebuffer:Oe,drawBuffers:V,useProgram:We,setBlending:xe,setMaterial:G,setFlipSided:Fe,setCullFace:b,setLineWidth:A,setPolygonOffset:z,setScissorTest:J,activeTexture:ee,bindTexture:ne,unbindTexture:ge,compressedTexImage2D:de,compressedTexImage3D:re,texImage2D:Me,texImage3D:ye,updateUBOMapping:ht,uniformBlockBinding:me,texStorage2D:Re,texStorage3D:Xe,texSubImage2D:Ae,texSubImage3D:ve,compressedTexSubImage2D:te,compressedTexSubImage3D:et,scissor:Ye,viewport:tt,reset:ae}}function v3(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,A){return p?new OffscreenCanvas(b,A):hh("canvas")}function g(b,A,z,J){let ee=1;if((b.width>J||b.height>J)&&(ee=J/Math.max(b.width,b.height)),ee<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ne=A?Om:Math.floor,ge=ne(ee*b.width),de=ne(ee*b.height);f===void 0&&(f=_(ge,de));const re=z?_(ge,de):f;return re.width=ge,re.height=de,re.getContext("2d").drawImage(b,0,0,ge,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ge+"x"+de+")."),re}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Qv(b.width)&&Qv(b.height)}function h(b){return a?!1:b.wrapS!==lr||b.wrapT!==lr||b.minFilter!==Bn&&b.minFilter!==Kn}function v(b,A){return b.generateMipmaps&&A&&b.minFilter!==Bn&&b.minFilter!==Kn}function x(b){n.generateMipmap(b)}function y(b,A,z,J,ee=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=A;if(A===n.RED&&(z===n.FLOAT&&(ne=n.R32F),z===n.HALF_FLOAT&&(ne=n.R16F),z===n.UNSIGNED_BYTE&&(ne=n.R8)),A===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.R8UI),z===n.UNSIGNED_SHORT&&(ne=n.R16UI),z===n.UNSIGNED_INT&&(ne=n.R32UI),z===n.BYTE&&(ne=n.R8I),z===n.SHORT&&(ne=n.R16I),z===n.INT&&(ne=n.R32I)),A===n.RG&&(z===n.FLOAT&&(ne=n.RG32F),z===n.HALF_FLOAT&&(ne=n.RG16F),z===n.UNSIGNED_BYTE&&(ne=n.RG8)),A===n.RGBA){const ge=ee?lh:yt.getTransfer(J);z===n.FLOAT&&(ne=n.RGBA32F),z===n.HALF_FLOAT&&(ne=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ne=ge===Rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(b,A,z){return v(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Bn&&b.minFilter!==Kn?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function w(b){return b===Bn||b===Ev||b===Pd?n.NEAREST:n.LINEAR}function M(b){const A=b.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function P(b){const A=b.target;A.removeEventListener("dispose",P),I(A)}function S(b){const A=i.get(b);if(A.__webglInit===void 0)return;const z=b.source,J=d.get(z);if(J){const ee=J[A.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(b),Object.keys(J).length===0&&d.delete(z)}i.remove(b)}function E(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const z=b.source,J=d.get(z);delete J[A.__cacheKey],o.memory.textures--}function I(b){const A=b.texture,z=i.get(b),J=i.get(A);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(z.__webglFramebuffer[ee]))for(let ne=0;ne<z.__webglFramebuffer[ee].length;ne++)n.deleteFramebuffer(z.__webglFramebuffer[ee][ne]);else n.deleteFramebuffer(z.__webglFramebuffer[ee]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[ee])}else{if(Array.isArray(z.__webglFramebuffer))for(let ee=0;ee<z.__webglFramebuffer.length;ee++)n.deleteFramebuffer(z.__webglFramebuffer[ee]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ee=0;ee<z.__webglColorRenderbuffer.length;ee++)z.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,ne=A.length;ee<ne;ee++){const ge=i.get(A[ee]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(A[ee])}i.remove(A),i.remove(b)}let D=0;function K(){D=0}function L(){const b=D;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),D+=1,b}function F(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function k(b,A){const z=i.get(b);if(b.isVideoTexture&&G(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(z,b,A);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+A)}function H(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){ie(z,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+A)}function U(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){ie(z,b,A);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+A)}function O(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){fe(z,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+A)}const R={[Dm]:n.REPEAT,[lr]:n.CLAMP_TO_EDGE,[Um]:n.MIRRORED_REPEAT},$={[Bn]:n.NEAREST,[Ev]:n.NEAREST_MIPMAP_NEAREST,[Pd]:n.NEAREST_MIPMAP_LINEAR,[Kn]:n.LINEAR,[eb]:n.LINEAR_MIPMAP_NEAREST,[Bu]:n.LINEAR_MIPMAP_LINEAR},Q={[db]:n.NEVER,[xb]:n.ALWAYS,[pb]:n.LESS,[ZE]:n.LEQUAL,[mb]:n.EQUAL,[vb]:n.GEQUAL,[gb]:n.GREATER,[_b]:n.NOTEQUAL};function j(b,A,z){if(z?(n.texParameteri(b,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,R[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,$[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,$[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==lr||A.wrapT!==lr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==Bn&&A.minFilter!==Kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Bn||A.minFilter!==Pd&&A.minFilter!==Bu||A.type===Es&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Cr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function Z(b,A){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",M));const J=A.source;let ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));const ne=F(A);if(ne!==b.__cacheKey){ee[ne]===void 0&&(ee[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),ee[ne].usedTimes++;const ge=ee[b.__cacheKey];ge!==void 0&&(ee[b.__cacheKey].usedTimes--,ge.usedTimes===0&&E(A)),b.__cacheKey=ne,b.__webglTexture=ee[ne].texture}return z}function ie(b,A,z){let J=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=n.TEXTURE_3D);const ee=Z(b,A),ne=A.source;t.bindTexture(J,b.__webglTexture,n.TEXTURE0+z);const ge=i.get(ne);if(ne.version!==ge.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);const de=yt.getPrimaries(yt.workingColorSpace),re=A.colorSpace===Wi?null:yt.getPrimaries(A.colorSpace),Ae=A.colorSpace===Wi||de===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ve=h(A)&&m(A.image)===!1;let te=g(A.image,ve,!1,r.maxTextureSize);te=Fe(A,te);const et=m(te)||a,Re=s.convert(A.format,A.colorSpace);let Xe=s.convert(A.type),Me=y(A.internalFormat,Re,Xe,A.colorSpace,A.isVideoTexture);j(J,A,et);let ye;const Ye=A.mipmaps,tt=a&&A.isVideoTexture!==!0&&Me!==$E,ht=ge.__version===void 0||ee===!0,me=T(A,te,et);if(A.isDepthTexture)Me=n.DEPTH_COMPONENT,a?A.type===Es?Me=n.DEPTH_COMPONENT32F:A.type===Ms?Me=n.DEPTH_COMPONENT24:A.type===Ro?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:A.type===Es&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===bo&&Me===n.DEPTH_COMPONENT&&A.type!==f_&&A.type!==Ms&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ms,Xe=s.convert(A.type)),A.format===al&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,A.type!==Ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ro,Xe=s.convert(A.type))),ht&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Me,te.width,te.height,0,Re,Xe,null));else if(A.isDataTexture)if(Ye.length>0&&et){tt&&ht&&t.texStorage2D(n.TEXTURE_2D,me,Me,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)ye=Ye[ae],tt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Re,Xe,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Me,ye.width,ye.height,0,Re,Xe,ye.data);A.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(n.TEXTURE_2D,me,Me,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,Re,Xe,te.data)):t.texImage2D(n.TEXTURE_2D,0,Me,te.width,te.height,0,Re,Xe,te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){tt&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Me,Ye[0].width,Ye[0].height,te.depth);for(let ae=0,N=Ye.length;ae<N;ae++)ye=Ye[ae],A.format!==Gi?Re!==null?tt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,te.depth,Re,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Me,ye.width,ye.height,te.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,te.depth,Re,Xe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Me,ye.width,ye.height,te.depth,0,Re,Xe,ye.data)}else{tt&&ht&&t.texStorage2D(n.TEXTURE_2D,me,Me,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)ye=Ye[ae],A.format!==Gi?Re!==null?tt?t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Re,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Me,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ye.width,ye.height,Re,Xe,ye.data):t.texImage2D(n.TEXTURE_2D,ae,Me,ye.width,ye.height,0,Re,Xe,ye.data)}else if(A.isDataArrayTexture)tt?(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Me,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Re,Xe,te.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,Re,Xe,te.data);else if(A.isData3DTexture)tt?(ht&&t.texStorage3D(n.TEXTURE_3D,me,Me,te.width,te.height,te.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Re,Xe,te.data)):t.texImage3D(n.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,Re,Xe,te.data);else if(A.isFramebufferTexture){if(ht)if(tt)t.texStorage2D(n.TEXTURE_2D,me,Me,te.width,te.height);else{let ae=te.width,N=te.height;for(let ue=0;ue<me;ue++)t.texImage2D(n.TEXTURE_2D,ue,Me,ae,N,0,Re,Xe,null),ae>>=1,N>>=1}}else if(Ye.length>0&&et){tt&&ht&&t.texStorage2D(n.TEXTURE_2D,me,Me,Ye[0].width,Ye[0].height);for(let ae=0,N=Ye.length;ae<N;ae++)ye=Ye[ae],tt?t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Re,Xe,ye):t.texImage2D(n.TEXTURE_2D,ae,Me,Re,Xe,ye);A.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(n.TEXTURE_2D,me,Me,te.width,te.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Xe,te)):t.texImage2D(n.TEXTURE_2D,0,Me,Re,Xe,te);v(A,et)&&x(J),ge.__version=ne.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function fe(b,A,z){if(A.image.length!==6)return;const J=Z(b,A),ee=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+z);const ne=i.get(ee);if(ee.version!==ne.__version||J===!0){t.activeTexture(n.TEXTURE0+z);const ge=yt.getPrimaries(yt.workingColorSpace),de=A.colorSpace===Wi?null:yt.getPrimaries(A.colorSpace),re=A.colorSpace===Wi||ge===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,ve=A.image[0]&&A.image[0].isDataTexture,te=[];for(let ae=0;ae<6;ae++)!Ae&&!ve?te[ae]=g(A.image[ae],!1,!0,r.maxCubemapSize):te[ae]=ve?A.image[ae].image:A.image[ae],te[ae]=Fe(A,te[ae]);const et=te[0],Re=m(et)||a,Xe=s.convert(A.format,A.colorSpace),Me=s.convert(A.type),ye=y(A.internalFormat,Xe,Me,A.colorSpace),Ye=a&&A.isVideoTexture!==!0,tt=ne.__version===void 0||J===!0;let ht=T(A,et,Re);j(n.TEXTURE_CUBE_MAP,A,Re);let me;if(Ae){Ye&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,ye,et.width,et.height);for(let ae=0;ae<6;ae++){me=te[ae].mipmaps;for(let N=0;N<me.length;N++){const ue=me[N];A.format!==Gi?Xe!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,ue.width,ue.height,Xe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,ye,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,0,0,ue.width,ue.height,Xe,Me,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N,ye,ue.width,ue.height,0,Xe,Me,ue.data)}}}else{me=A.mipmaps,Ye&&tt&&(me.length>0&&ht++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ht,ye,te[0].width,te[0].height));for(let ae=0;ae<6;ae++)if(ve){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,te[ae].width,te[ae].height,Xe,Me,te[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,te[ae].width,te[ae].height,0,Xe,Me,te[ae].data);for(let N=0;N<me.length;N++){const ce=me[N].image[ae].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,ce.width,ce.height,Xe,Me,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,ye,ce.width,ce.height,0,Xe,Me,ce.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Xe,Me,te[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,ye,Xe,Me,te[ae]);for(let N=0;N<me.length;N++){const ue=me[N];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,0,0,Xe,Me,ue.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,N+1,ye,Xe,Me,ue.image[ae])}}}v(A,Re)&&x(n.TEXTURE_CUBE_MAP),ne.__version=ee.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function le(b,A,z,J,ee,ne){const ge=s.convert(z.format,z.colorSpace),de=s.convert(z.type),re=y(z.internalFormat,ge,de,z.colorSpace);if(!i.get(A).__hasExternalTextures){const ve=Math.max(1,A.width>>ne),te=Math.max(1,A.height>>ne);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ne,re,ve,te,A.depth,0,ge,de,null):t.texImage2D(ee,ne,re,ve,te,0,ge,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,i.get(z).__webglTexture,0,Ue(A)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,i.get(z).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(b,A,z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||xe(A)){const ee=A.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Es?J=n.DEPTH_COMPONENT32F:ee.type===Ms&&(J=n.DEPTH_COMPONENT24));const ne=Ue(A);xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,J,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,J,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const J=Ue(A);z&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const J=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0;ee<J.length;ee++){const ne=J[ee],ge=s.convert(ne.format,ne.colorSpace),de=s.convert(ne.type),re=y(ne.internalFormat,ge,de,ne.colorSpace),Ae=Ue(A);z&&xe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,re,A.width,A.height):xe(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,re,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,re,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),k(A.depthTexture,0);const J=i.get(A.depthTexture).__webglTexture,ee=Ue(A);if(A.depthTexture.format===bo)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(A.depthTexture.format===al)xe(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function De(b){const A=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");we(A.__webglFramebuffer,b)}else if(z){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]=n.createRenderbuffer(),Pe(A.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Pe(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(b,A,z){const J=i.get(b);A!==void 0&&le(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&De(b)}function V(b){const A=b.texture,z=i.get(b),J=i.get(A);b.addEventListener("dispose",P),b.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=A.version,o.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,ge=m(b)||a;if(ee){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let re=0;re<A.mipmaps.length;re++)z.__webglFramebuffer[de][re]=n.createFramebuffer()}else z.__webglFramebuffer[de]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<A.mipmaps.length;de++)z.__webglFramebuffer[de]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const de=b.texture;for(let re=0,Ae=de.length;re<Ae;re++){const ve=i.get(de[re]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&xe(b)===!1){const de=ne?A:[A];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let re=0;re<de.length;re++){const Ae=de[re];z.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[re]);const ve=s.convert(Ae.format,Ae.colorSpace),te=s.convert(Ae.type),et=y(Ae.internalFormat,ve,te,Ae.colorSpace,b.isXRRenderTarget===!0),Re=Ue(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,et,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,z.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),j(n.TEXTURE_CUBE_MAP,A,ge);for(let de=0;de<6;de++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)le(z.__webglFramebuffer[de][re],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,re);else le(z.__webglFramebuffer[de],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(A,ge)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const de=b.texture;for(let re=0,Ae=de.length;re<Ae;re++){const ve=de[re],te=i.get(ve);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),j(n.TEXTURE_2D,ve,ge),le(z.__webglFramebuffer,b,ve,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),v(ve,ge)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?de=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,J.__webglTexture),j(de,A,ge),a&&A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)le(z.__webglFramebuffer[re],b,A,n.COLOR_ATTACHMENT0,de,re);else le(z.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,de,0);v(A,ge)&&x(de),t.unbindTexture()}b.depthBuffer&&De(b)}function We(b){const A=m(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let J=0,ee=z.length;J<ee;J++){const ne=z[J];if(v(ne,A)){const ge=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,de=i.get(ne).__webglTexture;t.bindTexture(ge,de),x(ge),t.unbindTexture()}}}function _e(b){if(a&&b.samples>0&&xe(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,J=b.height;let ee=n.COLOR_BUFFER_BIT;const ne=[],ge=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),re=b.isWebGLMultipleRenderTargets===!0;if(re)for(let Ae=0;Ae<A.length;Ae++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Ae=0;Ae<A.length;Ae++){ne.push(n.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&ne.push(ge);const ve=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(ve===!1&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]),ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),re){const te=i.get(A[Ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let Ae=0;Ae<A.length;Ae++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,de.__webglColorRenderbuffer[Ae]);const ve=i.get(A[Ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function Ue(b){return Math.min(r.maxSamples,b.samples)}function xe(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function G(b){const A=o.render.frame;c.get(b)!==A&&(c.set(b,A),b.update())}function Fe(b,A){const z=b.colorSpace,J=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Nm||z!==es&&z!==Wi&&(yt.getTransfer(z)===Rt?a===!1?e.has("EXT_sRGB")===!0&&J===Gi?(b.format=Nm,b.minFilter=Kn,b.generateMipmaps=!1):A=JE.sRGBToLinear(A):(J!==Gi||ee!==Os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),A}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=Oe,this.setupRenderTarget=V,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=le,this.useMultisampledRTT=xe}function x3(n,e,t){const i=t.isWebGL2;function r(s,o=Wi){let a;const l=yt.getTransfer(o);if(s===Os)return n.UNSIGNED_BYTE;if(s===WE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===XE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===tb)return n.BYTE;if(s===nb)return n.SHORT;if(s===f_)return n.UNSIGNED_SHORT;if(s===GE)return n.INT;if(s===Ms)return n.UNSIGNED_INT;if(s===Es)return n.FLOAT;if(s===Cr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ib)return n.ALPHA;if(s===Gi)return n.RGBA;if(s===rb)return n.LUMINANCE;if(s===sb)return n.LUMINANCE_ALPHA;if(s===bo)return n.DEPTH_COMPONENT;if(s===al)return n.DEPTH_STENCIL;if(s===Nm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ob)return n.RED;if(s===YE)return n.RED_INTEGER;if(s===ab)return n.RG;if(s===jE)return n.RG_INTEGER;if(s===qE)return n.RGBA_INTEGER;if(s===Ld||s===Dd||s===Ud||s===Nd)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ld)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ud)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ld)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ud)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tv||s===wv||s===Av||s===Cv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Tv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Av)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Cv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$E)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rv||s===bv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rv)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pv||s===Lv||s===Dv||s===Uv||s===Nv||s===Iv||s===Ov||s===Fv||s===kv||s===zv||s===Bv||s===Hv||s===Vv||s===Gv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Pv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Uv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Iv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ov)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===zv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Id||s===Wv||s===Xv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Id)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lb||s===Yv||s===jv||s===qv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Id)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Yv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ro?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class y3 extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jc extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S3={type:"move"};class op{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class M3 extends dl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const g=t.getContextAttributes();let m=null,h=null;const v=[],x=[],y=new Ke;let T=null;const w=new Hi;w.layers.enable(1),w.viewport=new mn;const M=new Hi;M.layers.enable(2),M.viewport=new mn;const P=[w,M],S=new y3;S.layers.enable(1),S.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Z=v[j];return Z===void 0&&(Z=new op,v[j]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(j){let Z=v[j];return Z===void 0&&(Z=new op,v[j]=Z),Z.getGripSpace()},this.getHand=function(j){let Z=v[j];return Z===void 0&&(Z=new op,v[j]=Z),Z.getHandSpace()};function D(j){const Z=x.indexOf(j.inputSource);if(Z===-1)return;const ie=v[Z];ie!==void 0&&(ie.update(j.inputSource,j.frame,u||o),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let j=0;j<v.length;j++){const Z=x[j];Z!==null&&(x[j]=null,v[j].disconnect(Z))}E=null,I=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new Ki(p.framebufferWidth,p.framebufferHeight,{format:Gi,type:Os,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let Z=null,ie=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=g.stencil?al:bo,ie=g.stencil?Ro:Ms);const le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(le),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),h=new Ki(d.textureWidth,d.textureHeight,{format:Gi,type:Os,depthTexture:new fT(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Pe=e.properties.get(h);Pe.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(j){for(let Z=0;Z<j.removed.length;Z++){const ie=j.removed[Z],fe=x.indexOf(ie);fe>=0&&(x[fe]=null,v[fe].disconnect(ie))}for(let Z=0;Z<j.added.length;Z++){const ie=j.added[Z];let fe=x.indexOf(ie);if(fe===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=x.length){x.push(ie),fe=Pe;break}else if(x[Pe]===null){x[Pe]=ie,fe=Pe;break}if(fe===-1)break}const le=v[fe];le&&le.connect(ie)}}const F=new X,k=new X;function H(j,Z,ie){F.setFromMatrixPosition(Z.matrixWorld),k.setFromMatrixPosition(ie.matrixWorld);const fe=F.distanceTo(k),le=Z.projectionMatrix.elements,Pe=ie.projectionMatrix.elements,we=le[14]/(le[10]-1),De=le[14]/(le[10]+1),Oe=(le[9]+1)/le[5],V=(le[9]-1)/le[5],We=(le[8]-1)/le[0],_e=(Pe[8]+1)/Pe[0],Ue=we*We,xe=we*_e,G=fe/(-We+_e),Fe=G*-We;Z.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(G),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const b=we+G,A=De+G,z=Ue-Fe,J=xe+(fe-Fe),ee=Oe*De/A*b,ne=V*De/A*b;j.projectionMatrix.makePerspective(z,J,ee,ne,b,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function U(j,Z){Z===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Z.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=M.near=w.near=j.near,S.far=M.far=w.far=j.far,(E!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,I=S.far);const Z=j.parent,ie=S.cameras;U(S,Z);for(let fe=0;fe<ie.length;fe++)U(ie[fe],Z);ie.length===2?H(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),O(j,S,Z)};function O(j,Z,ie){ie===null?j.matrix.copy(Z.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(Z.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Z.projectionMatrix),j.projectionMatrixInverse.copy(Z.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Im*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let R=null;function $(j,Z){if(c=Z.getViewerPose(u||o),_=Z,c!==null){const ie=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let fe=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let le=0;le<ie.length;le++){const Pe=ie[le];let we=null;if(p!==null)we=p.getViewport(Pe);else{const Oe=f.getViewSubImage(d,Pe);we=Oe.viewport,le===0&&(e.setRenderTargetTextures(h,Oe.colorTexture,d.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(h))}let De=P[le];De===void 0&&(De=new Hi,De.layers.enable(le),De.viewport=new mn,P[le]=De),De.matrix.fromArray(Pe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Pe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(we.x,we.y,we.width,we.height),le===0&&(S.matrix.copy(De.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(De)}}for(let ie=0;ie<v.length;ie++){const fe=x[ie],le=v[ie];fe!==null&&le!==void 0&&le.update(fe,Z,u||o)}R&&R(j,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Q=new uT;Q.setAnimationLoop($),this.setAnimationLoop=function(j){R=j},this.dispose=function(){}}}function E3(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,sT(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===li&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===li&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===li&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function T3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function c(v){const x=f();v.__bindingPointIndex=x;const y=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],y=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=P.length;S<E;S++){const I=P[S];if(p(I,w,S,T)===!0){const D=I.__offset,K=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let F=0;F<K.length;F++){const k=K[F],H=g(k);typeof k=="number"||typeof k=="boolean"?(I.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,D+L,I.__data)):k.isMatrix3?(I.__data[0]=k.elements[0],I.__data[1]=k.elements[1],I.__data[2]=k.elements[2],I.__data[3]=0,I.__data[4]=k.elements[3],I.__data[5]=k.elements[4],I.__data[6]=k.elements[5],I.__data[7]=0,I.__data[8]=k.elements[6],I.__data[9]=k.elements[7],I.__data[10]=k.elements[8],I.__data[11]=0):(k.toArray(I.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,T){const w=v.value,M=x+"_"+y;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const P=T[M];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return T[M]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(v){const x=v.uniforms;let y=0;const T=16;for(let M=0,P=x.length;M<P;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,I=S.length;E<I;E++){const D=S[E],K=Array.isArray(D.value)?D.value:[D.value];for(let L=0,F=K.length;L<F;L++){const k=K[L],H=g(k),U=y%T;U!==0&&T-U<H.boundary&&(y+=T-U),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=H.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class _T{constructor(e={}){const{canvas:t=Sb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this._useLegacyLights=!1,this.toneMapping=Is,this.toneMappingExposure=1;const x=this;let y=!1,T=0,w=0,M=null,P=-1,S=null;const E=new mn,I=new mn;let D=null;const K=new ot(0);let L=0,F=t.width,k=t.height,H=1,U=null,O=null;const R=new mn(0,0,F,k),$=new mn(0,0,F,k);let Q=!1;const j=new lT;let Z=!1,ie=!1,fe=null;const le=new cn,Pe=new Ke,we=new X,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return M===null?H:1}let V=i;function We(C,B){for(let q=0;q<C.length;q++){const Y=C[q],W=t.getContext(Y,B);if(W!==null)return W}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${c_}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",N,!1),t.addEventListener("webglcontextcreationerror",ue,!1),V===null){const B=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&B.shift(),V=We(B,C),V===null)throw We(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _e,Ue,xe,G,Fe,b,A,z,J,ee,ne,ge,de,re,Ae,ve,te,et,Re,Xe,Me,ye,Ye,tt;function ht(){_e=new NL(V),Ue=new RL(V,_e,e),_e.init(Ue),ye=new x3(V,_e,Ue),xe=new _3(V,_e,Ue),G=new FL(V),Fe=new i3,b=new v3(V,_e,xe,Fe,Ue,ye,G),A=new PL(x),z=new UL(x),J=new Xb(V,Ue),Ye=new AL(V,_e,J,Ue),ee=new IL(V,J,G,Ye),ne=new HL(V,ee,J,G),Re=new BL(V,Ue,b),ve=new bL(Fe),ge=new n3(x,A,z,_e,Ue,Ye,ve),de=new E3(x,Fe),re=new s3,Ae=new f3(_e,Ue),et=new wL(x,A,z,xe,ne,d,l),te=new g3(x,ne,Ue),tt=new T3(V,G,Ue,xe),Xe=new CL(V,_e,G,Ue),Me=new OL(V,_e,G,Ue),G.programs=ge.programs,x.capabilities=Ue,x.extensions=_e,x.properties=Fe,x.renderLists=re,x.shadowMap=te,x.state=xe,x.info=G}ht();const me=new M3(x,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=_e.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_e.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(F,k,!1))},this.getSize=function(C){return C.set(F,k)},this.setSize=function(C,B,q=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,k=B,t.width=Math.floor(C*H),t.height=Math.floor(B*H),q===!0&&(t.style.width=C+"px",t.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(F*H,k*H).floor()},this.setDrawingBufferSize=function(C,B,q){F=C,k=B,H=q,t.width=Math.floor(C*q),t.height=Math.floor(B*q),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,B,q,Y){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,B,q,Y),xe.viewport(E.copy(R).multiplyScalar(H).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,B,q,Y){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,B,q,Y),xe.scissor(I.copy($).multiplyScalar(H).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){xe.setScissorTest(Q=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(C=!0,B=!0,q=!0){let Y=0;if(C){let W=!1;if(M!==null){const he=M.texture.format;W=he===qE||he===jE||he===YE}if(W){const he=M.texture.type,Ce=he===Os||he===Ms||he===f_||he===Ro||he===WE||he===XE,Ve=et.getClearColor(),be=et.getClearAlpha(),Ne=Ve.r,Ge=Ve.g,$e=Ve.b;Ce?(p[0]=Ne,p[1]=Ge,p[2]=$e,p[3]=be,V.clearBufferuiv(V.COLOR,0,p)):(_[0]=Ne,_[1]=Ge,_[2]=$e,_[3]=be,V.clearBufferiv(V.COLOR,0,_))}else Y|=V.COLOR_BUFFER_BIT}B&&(Y|=V.DEPTH_BUFFER_BIT),q&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",N,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),re.dispose(),Ae.dispose(),Fe.dispose(),A.dispose(),z.dispose(),ne.dispose(),Ye.dispose(),tt.dispose(),ge.dispose(),me.dispose(),me.removeEventListener("sessionstart",Ee),me.removeEventListener("sessionend",Ie),fe&&(fe.dispose(),fe=null),oe.stop()};function ae(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=G.autoReset,B=te.enabled,q=te.autoUpdate,Y=te.needsUpdate,W=te.type;ht(),G.autoReset=C,te.enabled=B,te.autoUpdate=q,te.needsUpdate=Y,te.type=W}function ue(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ce(C){const B=C.target;B.removeEventListener("dispose",ce),Be(B)}function Be(C){ke(C),Fe.remove(C)}function ke(C){const B=Fe.get(C).programs;B!==void 0&&(B.forEach(function(q){ge.releaseProgram(q)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,q,Y,W,he){B===null&&(B=De);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,Ve=Tt(C,B,q,Y,W);xe.setMaterial(Y,Ce);let be=q.index,Ne=1;if(Y.wireframe===!0){if(be=ee.getWireframeAttribute(q),be===void 0)return;Ne=2}const Ge=q.drawRange,$e=q.attributes.position;let Pt=Ge.start*Ne,Zt=(Ge.start+Ge.count)*Ne;he!==null&&(Pt=Math.max(Pt,he.start*Ne),Zt=Math.min(Zt,(he.start+he.count)*Ne)),be!==null?(Pt=Math.max(Pt,0),Zt=Math.min(Zt,be.count)):$e!=null&&(Pt=Math.max(Pt,0),Zt=Math.min(Zt,$e.count));const gt=Zt-Pt;if(gt<0||gt===1/0)return;Ye.setup(W,Y,Ve,q,be);let Dn,xt=Xe;if(be!==null&&(Dn=J.get(be),xt=Me,xt.setIndex(Dn)),W.isMesh)Y.wireframe===!0?(xe.setLineWidth(Y.wireframeLinewidth*Oe()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(W.isLine){let je=Y.linewidth;je===void 0&&(je=1),xe.setLineWidth(je*Oe()),W.isLineSegments?xt.setMode(V.LINES):W.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else W.isPoints?xt.setMode(V.POINTS):W.isSprite&&xt.setMode(V.TRIANGLES);if(W.isBatchedMesh)xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)xt.renderInstances(Pt,gt,W.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Bh=Math.min(q.instanceCount,je);xt.renderInstances(Pt,gt,Bh)}else xt.render(Pt,gt)};function lt(C,B,q){C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=li,C.needsUpdate=!0,Et(C,B,q),C.side=Gs,C.needsUpdate=!0,Et(C,B,q),C.side=Vi):Et(C,B,q)}this.compile=function(C,B,q=null){q===null&&(q=C),m=Ae.get(q),m.init(),v.push(m),q.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==q&&C.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);const Y=new Set;return C.traverse(function(W){const he=W.material;if(he)if(Array.isArray(he))for(let Ce=0;Ce<he.length;Ce++){const Ve=he[Ce];lt(Ve,q,W),Y.add(Ve)}else lt(he,q,W),Y.add(he)}),v.pop(),m=null,Y},this.compileAsync=function(C,B,q=null){const Y=this.compile(C,B,q);return new Promise(W=>{function he(){if(Y.forEach(function(Ce){Fe.get(Ce).currentProgram.isReady()&&Y.delete(Ce)}),Y.size===0){W(C);return}setTimeout(he,10)}_e.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ft=null;function Le(C){ft&&ft(C)}function Ee(){oe.stop()}function Ie(){oe.start()}const oe=new uT;oe.setAnimationLoop(Le),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(C){ft=C,me.setAnimationLoop(C),C===null?oe.stop():oe.start()},me.addEventListener("sessionstart",Ee),me.addEventListener("sessionend",Ie),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(B),B=me.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,B,M),m=Ae.get(C,v.length),m.init(),v.push(m),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(le),ie=this.localClippingEnabled,Z=ve.init(this.clippingPlanes,ie),g=re.get(C,h.length),g.init(),h.push(g),He(C,B,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(U,O),this.info.render.frame++,Z===!0&&ve.beginShadows();const q=m.state.shadowsArray;if(te.render(q,C,B),Z===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(g,C),m.setupLights(x._useLegacyLights),B.isArrayCamera){const Y=B.cameras;for(let W=0,he=Y.length;W<he;W++){const Ce=Y[W];ze(g,C,Ce,Ce.viewport)}}else ze(g,C,B);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,B),Ye.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function He(C,B,q,Y){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){Y&&we.setFromMatrixPosition(C.matrixWorld).applyMatrix4(le);const Ce=ne.update(C),Ve=C.material;Ve.visible&&g.push(C,Ce,Ve,q,we.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const Ce=ne.update(C),Ve=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),we.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),we.copy(Ce.boundingSphere.center)),we.applyMatrix4(C.matrixWorld).applyMatrix4(le)),Array.isArray(Ve)){const be=Ce.groups;for(let Ne=0,Ge=be.length;Ne<Ge;Ne++){const $e=be[Ne],Pt=Ve[$e.materialIndex];Pt&&Pt.visible&&g.push(C,Ce,Pt,q,we.z,$e)}}else Ve.visible&&g.push(C,Ce,Ve,q,we.z,null)}}const he=C.children;for(let Ce=0,Ve=he.length;Ce<Ve;Ce++)He(he[Ce],B,q,Y)}function ze(C,B,q,Y){const W=C.opaque,he=C.transmissive,Ce=C.transparent;m.setupLightsView(q),Z===!0&&ve.setGlobalState(x.clippingPlanes,q),he.length>0&&qe(W,he,B,q),Y&&xe.viewport(E.copy(Y)),W.length>0&&Ut(W,B,q),he.length>0&&Ut(he,B,q),Ce.length>0&&Ut(Ce,B,q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function qe(C,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const he=Ue.isWebGL2;fe===null&&(fe=new Ki(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Cr:Os,minFilter:Bu,samples:he?4:0})),x.getDrawingBufferSize(Pe),he?fe.setSize(Pe.x,Pe.y):fe.setSize(Om(Pe.x),Om(Pe.y));const Ce=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(K),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ve=x.toneMapping;x.toneMapping=Is,Ut(C,q,Y),b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe);let be=!1;for(let Ne=0,Ge=B.length;Ne<Ge;Ne++){const $e=B[Ne],Pt=$e.object,Zt=$e.geometry,gt=$e.material,Dn=$e.group;if(gt.side===Vi&&Pt.layers.test(Y.layers)){const xt=gt.side;gt.side=li,gt.needsUpdate=!0,nt(Pt,q,Y,Zt,gt,Dn),gt.side=xt,gt.needsUpdate=!0,be=!0}}be===!0&&(b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe)),x.setRenderTarget(Ce),x.setClearColor(K,L),x.toneMapping=Ve}function Ut(C,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let W=0,he=C.length;W<he;W++){const Ce=C[W],Ve=Ce.object,be=Ce.geometry,Ne=Y===null?Ce.material:Y,Ge=Ce.group;Ve.layers.test(q.layers)&&nt(Ve,B,q,be,Ne,Ge)}}function nt(C,B,q,Y,W,he){C.onBeforeRender(x,B,q,Y,W,he),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(x,B,q,Y,C,he),W.transparent===!0&&W.side===Vi&&W.forceSinglePass===!1?(W.side=li,W.needsUpdate=!0,x.renderBufferDirect(q,B,Y,W,C,he),W.side=Gs,W.needsUpdate=!0,x.renderBufferDirect(q,B,Y,W,C,he),W.side=Vi):x.renderBufferDirect(q,B,Y,W,C,he),C.onAfterRender(x,B,q,Y,W,he)}function Et(C,B,q){B.isScene!==!0&&(B=De);const Y=Fe.get(C),W=m.state.lights,he=m.state.shadowsArray,Ce=W.state.version,Ve=ge.getParameters(C,W.state,he,B,q),be=ge.getProgramCacheKey(Ve);let Ne=Y.programs;Y.environment=C.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(C.isMeshStandardMaterial?z:A).get(C.envMap||Y.environment),Ne===void 0&&(C.addEventListener("dispose",ce),Ne=new Map,Y.programs=Ne);let Ge=Ne.get(be);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===Ce)return At(C,Ve),Ge}else Ve.uniforms=ge.getUniforms(C),C.onBuild(q,Ve,x),C.onBeforeCompile(Ve,x),Ge=ge.acquireProgram(Ve,be),Ne.set(be,Ge),Y.uniforms=Ve.uniforms;const $e=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=ve.uniform),At(C,Ve),Y.needsLights=hi(C),Y.lightsStateVersion=Ce,Y.needsLights&&($e.ambientLightColor.value=W.state.ambient,$e.lightProbe.value=W.state.probe,$e.directionalLights.value=W.state.directional,$e.directionalLightShadows.value=W.state.directionalShadow,$e.spotLights.value=W.state.spot,$e.spotLightShadows.value=W.state.spotShadow,$e.rectAreaLights.value=W.state.rectArea,$e.ltc_1.value=W.state.rectAreaLTC1,$e.ltc_2.value=W.state.rectAreaLTC2,$e.pointLights.value=W.state.point,$e.pointLightShadows.value=W.state.pointShadow,$e.hemisphereLights.value=W.state.hemi,$e.directionalShadowMap.value=W.state.directionalShadowMap,$e.directionalShadowMatrix.value=W.state.directionalShadowMatrix,$e.spotShadowMap.value=W.state.spotShadowMap,$e.spotLightMatrix.value=W.state.spotLightMatrix,$e.spotLightMap.value=W.state.spotLightMap,$e.pointShadowMap.value=W.state.pointShadowMap,$e.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function Kt(C){if(C.uniformsList===null){const B=C.currentProgram.getUniforms();C.uniformsList=Tf.seqWithValue(B.seq,C.uniforms)}return C.uniformsList}function At(C,B){const q=Fe.get(C);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Tt(C,B,q,Y,W){B.isScene!==!0&&(B=De),b.resetTextureUnits();const he=B.fog,Ce=Y.isMeshStandardMaterial?B.environment:null,Ve=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:es,be=(Y.isMeshStandardMaterial?z:A).get(Y.envMap||Ce),Ne=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),$e=!!q.morphAttributes.position,Pt=!!q.morphAttributes.normal,Zt=!!q.morphAttributes.color;let gt=Is;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Dn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xt=Dn!==void 0?Dn.length:0,je=Fe.get(Y),Bh=m.state.lights;if(Z===!0&&(ie===!0||C!==S)){const Ni=C===S&&Y.id===P;ve.setState(Y,C,Ni)}let Bt=!1;Y.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Bh.state.version||je.outputColorSpace!==Ve||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||je.envMap!==be||Y.fog===!0&&je.fog!==he||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ve.numPlanes||je.numIntersection!==ve.numIntersection)||je.vertexAlphas!==Ne||je.vertexTangents!==Ge||je.morphTargets!==$e||je.morphNormals!==Pt||je.morphColors!==Zt||je.toneMapping!==gt||Ue.isWebGL2===!0&&je.morphTargetsCount!==xt)&&(Bt=!0):(Bt=!0,je.__version=Y.version);let qs=je.currentProgram;Bt===!0&&(qs=Et(Y,B,W));let v_=!1,ml=!1,Hh=!1;const xn=qs.getUniforms(),$s=je.uniforms;if(xe.useProgram(qs.program)&&(v_=!0,ml=!0,Hh=!0),Y.id!==P&&(P=Y.id,ml=!0),v_||S!==C){xn.setValue(V,"projectionMatrix",C.projectionMatrix),xn.setValue(V,"viewMatrix",C.matrixWorldInverse);const Ni=xn.map.cameraPosition;Ni!==void 0&&Ni.setValue(V,we.setFromMatrixPosition(C.matrixWorld)),Ue.logarithmicDepthBuffer&&xn.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xn.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,ml=!0,Hh=!0)}if(W.isSkinnedMesh){xn.setOptional(V,W,"bindMatrix"),xn.setOptional(V,W,"bindMatrixInverse");const Ni=W.skeleton;Ni&&(Ue.floatVertexTextures?(Ni.boneTexture===null&&Ni.computeBoneTexture(),xn.setValue(V,"boneTexture",Ni.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(xn.setOptional(V,W,"batchingTexture"),xn.setValue(V,"batchingTexture",W._matricesTexture,b));const Vh=q.morphAttributes;if((Vh.position!==void 0||Vh.normal!==void 0||Vh.color!==void 0&&Ue.isWebGL2===!0)&&Re.update(W,q,qs),(ml||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,xn.setValue(V,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&($s.envMap.value=be,$s.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ml&&(xn.setValue(V,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&mt($s,Hh),he&&Y.fog===!0&&de.refreshFogUniforms($s,he),de.refreshMaterialUniforms($s,Y,H,k,fe),Tf.upload(V,Kt(je),$s,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Tf.upload(V,Kt(je),$s,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xn.setValue(V,"center",W.center),xn.setValue(V,"modelViewMatrix",W.modelViewMatrix),xn.setValue(V,"normalMatrix",W.normalMatrix),xn.setValue(V,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ni=Y.uniformsGroups;for(let Gh=0,ET=Ni.length;Gh<ET;Gh++)if(Ue.isWebGL2){const x_=Ni[Gh];tt.update(x_,qs),tt.bind(x_,qs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qs}function mt(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function hi(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,B,q){Fe.get(C.texture).__webglTexture=B,Fe.get(C.depthTexture).__webglTexture=q;const Y=Fe.get(C);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const q=Fe.get(C);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,q=0){M=C,T=B,w=q;let Y=!0,W=null,he=!1,Ce=!1;if(C){const be=Fe.get(C);be.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):be.__webglFramebuffer===void 0?b.setupRenderTarget(C):be.__hasExternalTextures&&b.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ce=!0);const Ge=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?W=Ge[B][q]:W=Ge[B],he=!0):Ue.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?W=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?W=Ge[q]:W=Ge,E.copy(C.viewport),I.copy(C.scissor),D=C.scissorTest}else E.copy(R).multiplyScalar(H).floor(),I.copy($).multiplyScalar(H).floor(),D=Q;if(xe.bindFramebuffer(V.FRAMEBUFFER,W)&&Ue.drawBuffers&&Y&&xe.drawBuffers(C,W),xe.viewport(E),xe.scissor(I),xe.setScissorTest(D),he){const be=Fe.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,q)}else if(Ce){const be=Fe.get(C.texture),Ne=B||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,be.__webglTexture,q||0,Ne)}P=-1},this.readRenderTargetPixels=function(C,B,q,Y,W,he,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ve=Ve[Ce]),Ve){xe.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const be=C.texture,Ne=be.format,Ge=be.type;if(Ne!==Gi&&ye.convert(Ne)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ge===Cr&&(_e.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ge!==Os&&ye.convert(Ge)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Es&&(Ue.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-Y&&q>=0&&q<=C.height-W&&V.readPixels(B,q,Y,W,ye.convert(Ne),ye.convert(Ge),he)}finally{const be=M!==null?Fe.get(M).__webglFramebuffer:null;xe.bindFramebuffer(V.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,B,q=0){const Y=Math.pow(2,-q),W=Math.floor(B.image.width*Y),he=Math.floor(B.image.height*Y);b.setTexture2D(B,0),V.copyTexSubImage2D(V.TEXTURE_2D,q,0,0,C.x,C.y,W,he),xe.unbindTexture()},this.copyTextureToTexture=function(C,B,q,Y=0){const W=B.image.width,he=B.image.height,Ce=ye.convert(q.format),Ve=ye.convert(q.type);b.setTexture2D(q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment),B.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,W,he,Ce,Ve,B.image.data):B.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Ce,B.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,C.x,C.y,Ce,Ve,B.image),Y===0&&q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(C,B,q,Y,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,Ve=C.max.z-C.min.z+1,be=ye.convert(Y.format),Ne=ye.convert(Y.type);let Ge;if(Y.isData3DTexture)b.setTexture3D(Y,0),Ge=V.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)b.setTexture2DArray(Y,0),Ge=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const $e=V.getParameter(V.UNPACK_ROW_LENGTH),Pt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Zt=V.getParameter(V.UNPACK_SKIP_PIXELS),gt=V.getParameter(V.UNPACK_SKIP_ROWS),Dn=V.getParameter(V.UNPACK_SKIP_IMAGES),xt=q.isCompressedTexture?q.mipmaps[W]:q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,C.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,C.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C.min.z),q.isDataTexture||q.isData3DTexture?V.texSubImage3D(Ge,W,B.x,B.y,B.z,he,Ce,Ve,be,Ne,xt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ge,W,B.x,B.y,B.z,he,Ce,Ve,be,xt.data)):V.texSubImage3D(Ge,W,B.x,B.y,B.z,he,Ce,Ve,be,Ne,xt),V.pixelStorei(V.UNPACK_ROW_LENGTH,$e),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zt),V.pixelStorei(V.UNPACK_SKIP_ROWS,gt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Dn),W===0&&Y.generateMipmaps&&V.generateMipmap(Ge),xe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),xe.unbindTexture()},this.resetState=function(){T=0,w=0,M=null,xe.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===h_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Oh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dn?Po:KE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Po?dn:es}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class w3 extends _T{}w3.prototype.isWebGL1Renderer=!0;class A3 extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vT extends Zu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fx=new cn,km=new d_,ef=new Fh,tf=new X;class kx extends ci{constructor(e=new Li,t=new vT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ef.copy(i.boundingSphere),ef.applyMatrix4(r),ef.radius+=s,e.ray.intersectsSphere(ef)===!1)return;Fx.copy(r).invert(),km.copy(e.ray).applyMatrix4(Fx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,g=p;_<g;_++){const m=u.getX(_);tf.fromBufferAttribute(f,m),zx(tf,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,g=p;_<g;_++)tf.fromBufferAttribute(f,_),zx(tf,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zx(n,e,t,i,r,s,o){const a=km.distanceSqToPoint(n);if(a<t){const l=new X;km.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class C3 extends ui{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hu extends Li{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let f=e;const d=(t-e)/r,p=new X,_=new Ke;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const h=s+m/i*o;p.x=f*Math.cos(h),p.y=f*Math.sin(h),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,c.push(_.x,_.y)}f+=d}for(let g=0;g<r;g++){const m=g*(i+1);for(let h=0;h<i;h++){const v=h+m,x=v,y=v+i+1,T=v+i+2,w=v+1;a.push(x,y,w),a.push(y,T,w)}}this.setIndex(a),this.setAttribute("position",new Wn(l,3)),this.setAttribute("normal",new Wn(u,3)),this.setAttribute("uv",new Wn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class __ extends Li{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new X,d=new X,p=[],_=[],g=[],m=[];for(let h=0;h<=i;h++){const v=[],x=h/i;let y=0;h===0&&o===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const w=T/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(w+y,1-x),v.push(u++)}c.push(v)}for(let h=0;h<i;h++)for(let v=0;v<t;v++){const x=c[h][v+1],y=c[h][v],T=c[h+1][v],w=c[h+1][v+1];(h!==0||o>0)&&p.push(x,y,w),(h!==i-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Wn(_,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new __(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bx(){return(typeof performance>"u"?Date:performance).now()}class R3{constructor(e,t,i=0,r=1/0){this.ray=new d_(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new p_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return zm(e,this,i,t),i.sort(Hx),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zm(e[r],this,i,t);return i.sort(Hx),i}}function Hx(n,e){return n.distance-e.distance}function zm(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)zm(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:c_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=c_);const yT={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ju{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b3=new cT(-1,1,1,-1,0,1);class P3 extends Li{constructor(){super(),this.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wn([0,2,0,0,2,0],2))}}const L3=new P3;class ST{constructor(e){this._mesh=new wi(L3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class MT extends Ju{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ei?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dh.clone(e.uniforms),this.material=new ei({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ST(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vx extends Ju{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class D3 extends Ju{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class U3{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ke);this._width=i.width,this._height=i.height,t=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new MT(yT),this.copyPass.material.blending=jr,this.clock=new xT}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vx!==void 0&&(o instanceof Vx?i=!0:o instanceof D3&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class N3 extends Ju{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const I3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ul extends Ju{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ki(s,o,{type:Cr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new Ki(s,o,{type:Cr});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Ki(s,o,{type:Cr});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=I3;this.highPassUniforms=dh.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ei({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ke(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=yT;this.copyUniforms=dh.clone(c.uniforms),this.blendMaterial=new ei({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:ps,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new vo,this.fsQuad=new ST(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ke(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ul.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ul.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new ei({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new ei({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ul.BlurDirectionX=new Ke(1,0);ul.BlurDirectionY=new Ke(0,1);_r.registerPlugin(Ze);function O3(){const n=Lo.useRef(null);return Lo.useEffect(()=>{const e=n.current;if(!e)return;function t(){const A=document.createElement("canvas");A.width=64,A.height=64;const z=A.getContext("2d"),J=z.createRadialGradient(32,32,0,32,32,32);J.addColorStop(0,"rgba(255, 255, 255, 1.0)"),J.addColorStop(.2,"rgba(255, 235, 170, 0.95)"),J.addColorStop(.5,"rgba(255, 130, 30, 0.5)"),J.addColorStop(.8,"rgba(220, 50, 0, 0.15)"),J.addColorStop(1,"rgba(0, 0, 0, 0)"),z.fillStyle=J,z.beginPath(),z.arc(32,32,32,0,Math.PI*2),z.fill();const ee=new C3(A);return ee.generateMipmaps=!1,ee.minFilter=Kn,ee.magFilter=Kn,ee.needsUpdate=!0,ee}const i=t(),r=7,s=new X(r,0,0),o=new A3,a=new Hi(45,window.innerWidth/window.innerHeight,.1,1e3),l=new _T({canvas:e,antialias:!1,alpha:!0,stencil:!1,powerPreference:"high-performance"});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,1)),l.toneMapping=HE,l.toneMappingExposure=1.2,l.setClearColor(0,0);const u=new Ki(window.innerWidth,window.innerHeight,{type:Cr,format:Gi}),c=new U3(l,u);c.addPass(new N3(o,a));const f=new ul(new Ke(window.innerWidth/2,window.innerHeight/2),.85,.55,.15);c.addPass(f);const d={uniforms:{tDiffuse:{value:null},bhPos:{value:new Ke(.5,.5)},strength:{value:2e-4}},vertexShader:`
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
          
          float eh = 0.052; // Matched to singularity scale 1.9
          
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
      `},p=new MT(d);c.addPass(p);const _=new wi(new __(1.65,64,64),new vo({color:0}));_.position.copy(s),_.scale.setScalar(1.9),o.add(_);const g=new wi(new hu(1.65,2.05,80),new vo({color:16752704,side:Vi,transparent:!0,opacity:.75,blending:ps}));g.position.copy(s),g.rotation.x=Math.PI/2,o.add(g);const m=new wi(new hu(2.05,2.35,80),new vo({color:16733440,side:Vi,transparent:!0,opacity:.4,blending:ps}));m.position.copy(s),m.rotation.x=Math.PI/2,o.add(m);const h=new wi(new hu(1.65,1.95,80),new vo({color:16755264,side:Vi,transparent:!0,opacity:.65,blending:ps}));h.position.copy(s),h.rotation.y=.15,o.add(h);const v=11e3,x=new Li,y=new Float32Array(v*3),T=new Float32Array(v*3),w=new Float32Array(v),M=new Float32Array(v),P=new Float32Array(v),S=new ot(16775406),E=new ot(16737792),I=new ot(7798784),D=new ot;for(let A=0;A<v;A++){const z=Math.pow(Math.random(),2),J=3.14+z*9.5;M[A]=J,P[A]=.007/Math.sqrt(J);const ee=Math.random()*Math.PI*2;w[A]=ee,y[A*3]=r+Math.cos(ee)*J,y[A*3+1]=(Math.random()-.5)*(.15+z*.3),y[A*3+2]=Math.sin(ee)*J,D.lerpColors(S,E,Math.min(1,J/8)),D.lerp(I,Math.max(0,(J-8)/20)),D.toArray(T,A*3)}x.setAttribute("position",new Cn(y,3)),x.setAttribute("customColor",new Cn(T,3)),x.setAttribute("angle",new Cn(w,1)),x.setAttribute("radius",new Cn(M,1)),x.setAttribute("speed",new Cn(P,1));const K={uTime:{value:0},uSpeed:{value:1},uAnchor:{value:new X(r,0,0)},uMouseTarget:{value:new X(9999,0,9999)},uHoverStrength:{value:0}},L=new ei({uniforms:K,vertexShader:`
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
      `,transparent:!0,blending:ps,depthWrite:!1}),F=new kx(x,L);o.add(F);const k=300,H=new Li,U=new Float32Array(k*3),O=new Float32Array(k*3);for(let A=0;A<k;A++)U[A*3]=r+(Math.random()-.5)*60,U[A*3+1]=(Math.random()-.5)*50,U[A*3+2]=Math.random()*30+5;H.setAttribute("position",new Cn(U,3));const R=new kx(H,new vT({color:16764040,size:.1,map:i,transparent:!0,opacity:.4,blending:ps,depthWrite:!1}));o.add(R);const $={camZ:20,camY:3.2,camX:0,lookX:0,lookY:0,lookZ:0,baseSpeed:1};let Q=new Ke(0,0),j=new Ke(0,0),Z=!1,ie=!1,fe=null;const le=new R3,Pe=new fs(new X(0,1,0),0),we=new X(9999,0,9999),De=new X;let Oe=0;const V=A=>{Q.x=A.clientX/window.innerWidth*2-1,Q.y=-(A.clientY/window.innerHeight)*2+1,Z=!0},We=()=>{Z=!1},_e=()=>{ie=!0,fe&&clearTimeout(fe),fe=setTimeout(()=>{ie=!1},120)},Ue=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",V),window.addEventListener("mouseleave",We),window.addEventListener("scroll",_e,{passive:!0}),window.addEventListener("resize",Ue);const xe=new xT;let G;function Fe(){G=requestAnimationFrame(Fe);const A=Math.min(xe.getDelta(),.05),z=xe.getElapsedTime(),J=ie?3:5;j.x+=(Q.x-j.x)*(1-Math.exp(-J*A)),j.y+=(Q.y-j.y)*(1-Math.exp(-J*A));const ee=$.camX+j.x*1.5,ne=$.camY+j.y*1.5;a.position.x+=(ee-a.position.x)*(1-Math.exp(-9*A)),a.position.y+=(ne-a.position.y)*(1-Math.exp(-9*A)),a.position.z+=($.camZ-a.position.z)*(1-Math.exp(-9*A)),a.lookAt($.lookX,$.lookY,$.lookZ),Oe+=((Z?1:0)-Oe)*(1-Math.exp(-8*A)),Z&&Oe>.01?(le.setFromCamera(j,a),le.ray.intersectPlane(Pe,De)&&we.copy(De)):we.set(9999,0,9999);const de=$.baseSpeed;K.uTime.value=z,K.uSpeed.value=de,K.uHoverStrength.value=Oe,K.uMouseTarget.value.copy(we);const re=R.geometry.attributes.position.array;for(let ve=0;ve<k;ve++){const te=r-re[ve*3],et=-re[ve*3+1],Re=-re[ve*3+2],Xe=te*te+et*et+Re*Re,Me=Math.min(20/(Xe+1),1.4);O[ve*3]+=te*2e-4*Me,O[ve*3+1]+=et*2e-4*Me,O[ve*3+2]+=Re*2e-4*Me,re[ve*3]+=O[ve*3],re[ve*3+1]+=O[ve*3+1],re[ve*3+2]+=O[ve*3+2],(Xe<3.5||re[ve*3+2]<-10)&&(re[ve*3]=r+(Math.random()-.5)*60,re[ve*3+1]=(Math.random()-.5)*50,re[ve*3+2]=Math.random()*30+10,O[ve*3]=0,O[ve*3+1]=0,O[ve*3+2]=0)}R.geometry.attributes.position.needsUpdate=!0,g.scale.setScalar(1+Math.sin(z*1.8)*.015),m.scale.setScalar(1+Math.cos(z*1.5)*.015),h.scale.setScalar(1+Math.sin(z*1.2)*.012);const Ae=new X(r,0,0);Ae.project(a),p.uniforms.bhPos.value.set(Ae.x*.5+.5,Ae.y*.5+.5),c.render()}a.position.set($.camX,$.camY,$.camZ),Fe();const b=_r.timeline({scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:.5}});return b.to($,{camZ:17,camY:3.8,camX:3,lookX:3,duration:.4,ease:"power1.inOut"}),b.to($,{camY:4.4,camX:r*.5,lookX:r*.5,camZ:14,duration:.35,ease:"power2.inOut"}),b.to($,{camY:26,camZ:.5,camX:r,lookX:r,duration:.9,ease:"power2.inOut"}),window.__getBHScreenCoord=()=>{const A=new X(r,0,0).project(a);return{x:(A.x*.5+.5)*window.innerWidth,y:(-A.y*.5+.5)*window.innerHeight}},()=>{cancelAnimationFrame(G),window.removeEventListener("mousemove",V),window.removeEventListener("mouseleave",We),window.removeEventListener("scroll",_e),window.removeEventListener("resize",Ue),b.kill(),c.dispose(),l.dispose()}},[]),dt.jsx("canvas",{id:"blackhole-canvas",ref:n})}const Dl={firstName:"Maheswar",lastName:"Praveen",title:"BUILDER • ROBOTICS & AI ENGINEER",github:"https://github.com/MaheswarPraveen",linkedin:"https://www.linkedin.com/in/maheswarpraveen"},F3=[{id:"00",category:"PROFILE",title:"Autonomous Systems Builder",description:"Developing end-to-end robotics systems across ROS 2, bare-metal firmware, and edge AI accelerators. Focused on real-time motor control, kinematic trajectories, and hardware deployment.",tags:["ROS 2","Edge AI","Embedded Systems"]},{id:"01",category:"ROBOTICS",title:"SpotMicro Quadruped",description:"12-DOF quadruped robot powered by 12× DS3218 servos and an Arduino UNO Q running Zephyr RTOS for ~200Hz analytical inverse kinematics and quintic spline gaits. Custom 6.8V high-current busbar rail off a 3S LiPo to handle 20A transient bursts without brownouts.",tags:["Zephyr RTOS","Arduino UNO Q","200Hz IK","3S LiPo Busbar"]},{id:"02",category:"FIELD AI",title:"Autonomous Skid-Steer Rover",description:"Field farming rover equipped with a 4-DOF robotic manipulator for precision weed removal. Powered by ROS 2 and an edge Hailo-8L NPU executing real-time YOLO vision guidance for field deployment.",tags:["ROS 2","Hailo-8L NPU","YOLO","4-DOF Arm"]},{id:"03",category:"DRIVER ARCHITECTURE",title:"RoArm M2-S PlayMotion",description:"High-precision trajectory recording and autonomous playback driver featuring dual-mode teaching (physical freedrive & keyboard jogging). Streams 25Hz quintic polynomial splines for zero-jerk motion with serial noise filtering. Officially adopted into the Waveshare Wiki.",tags:["Quintic Splines","Python Driver","Waveshare Wiki"]},{id:"04",category:"TELEMETRY BRIDGE",title:"ArduROSPI Bridge",description:"Zero-dependency ROS 2 ↔ MAVLink translation layer built with pymavlink, replacing heavy MAVROS on resource-constrained Raspberry Pi rovers. Implements 10Hz IMU streaming, automatic serial reconnect, and mission mode switching.",tags:["pymavlink","ROS 2","ArduPilot"]},{id:"05",category:"INTERACTIVE SYSTEMS",title:"Kalkii Genesis",description:"Cyberpunk 2.5D action title solo-engineered in Godot 4. Custom hierarchical combat state machines, frame-accurate animation cancelling, dynamic 2D lighting, and responsive platformer physics controllers.",tags:["Godot 4","Combat State Machines","GDScript"]},{id:"06",category:"EMBEDDED VISION",title:"Plant Disease Detection CNN",description:"End-to-end computer vision pipeline for agricultural crop leaf pathology. Implements OpenCV preprocessing, custom convolutional neural network (CNN) architectures in TensorFlow, achieving 80% test accuracy on unseen diseased foliage datasets.",tags:["TensorFlow","OpenCV","80% Test Accuracy"]}],k3=[{label:"Languages & AI",value:"Python, C/C++, GDScript, PyTorch, TensorFlow, YOLO, OpenCV"},{label:"Robotics & Protocols",value:"ROS 2 (Humble/Jazzy), MAVLink, CAN, UART, I2C, SPI, MQTT"},{label:"Hardware & Engineering",value:"Hailo-8L NPU, Arduino UNO Q, Raspberry Pi, Zephyr RTOS, Fusion 360"}];_r.registerPlugin(Ze);function z3(){const n=Lo.useRef(null);return Lo.useEffect(()=>{const e=n.current;if(!e)return;const t=new yR({duration:1.2,easing:o=>Math.min(1,1.001-Math.pow(2,-10*o)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:2});t.on("scroll",Ze.update);const i=o=>{t.raf(o*1e3)};_r.ticker.add(i),_r.ticker.lagSmoothing(0);const r=[],s=[];return document.fonts.ready.then(()=>{Array.from(e.querySelectorAll(".card")).forEach((l,u)=>{const c=l.classList.contains("hero-card"),f=l.querySelector(".stack-grid");let d=".project-index, .tag";c?d=".name-line, .hero-subtitle, .clean-link":f&&(d=".project-index, .stack-label, .stack-val");const p=new gv(l.querySelectorAll(d),{types:"chars"});r.push(p);let _=".section-title, .section-desc";if(f?_=".section-title":c&&(_=""),_){const P=l.querySelectorAll(_);if(P.length>0){const S=new gv(P,{types:"lines, chars"});r.push(S);const E=_r.fromTo(S.lines,{y:30,opacity:0,clipPath:"inset(0 0 100% 0)"},{y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:.9,stagger:.08,ease:"power3.out",scrollTrigger:{trigger:l,start:"top 85%",toggleActions:"play none none none"}});E.scrollTrigger&&s.push(E.scrollTrigger)}}const g=Array.from(l.querySelectorAll(".char")),m=Array.from(l.querySelectorAll(".tag, .clean-link, .stack-col")),h=g.length,v=g.map(P=>{P.dataset.orig=P.textContent,P._swallowState=0,P._lastFlip=Math.random()*100;const S=P.getBoundingClientRect();return{x:S.left+window.scrollX,y:S.top+window.scrollY}}),x={phase:0},y=_r.timeline({paused:!0});let T=null;const w=P=>{const S=window.__getBHScreenCoord?window.__getBHScreenCoord():{x:window.innerWidth*.72,y:window.innerHeight*.5},E=performance.now();for(let I=0;I<h;I++){const D=g[I];if(P<=.4)D._swallowState!==0&&(D.textContent=D.dataset.orig,D.style.color="",D.style.opacity="1",D.style.transform="none",D.style.textShadow="none",D._swallowState=0);else if(P<.55)E-D._lastFlip>90&&(D.textContent=Math.random()>.5?"1":"0",D._lastFlip=E),D._swallowState!==1&&(D.style.color="#ffaa20",D.style.textShadow="0 0 12px rgba(255, 170, 32, 0.8)",D.style.opacity="1",D.style.transform="none",D._swallowState=1);else{const K=(P-.55)/.45,L=I/h*.15,F=Math.max(0,Math.min(1,(K-L)/.85)),k=Math.pow(F,2),H=v[I],U=H.x-window.scrollX,O=H.y-window.scrollY,R=S.x-U,$=S.y-O,Q=I*.12+k*3,j=Math.sin(Q)*18*(1-k),Z=Math.cos(Q)*12*(1-k),ie=R*k+j,fe=$*k+Z,le=-k*350,Pe=1+k*.3,we=Math.max(.1,1-k*.8),De=k*35,Oe=-k*12,V=Math.max(0,1-Math.pow(F,2.2));D.textContent="0",D.style.transform=`translate3d(${ie.toFixed(1)}px, ${fe.toFixed(1)}px, ${le.toFixed(0)}px) rotateX(${De.toFixed(0)}deg) rotateZ(${Oe.toFixed(0)}deg) scale(${Pe.toFixed(2)}, ${we.toFixed(2)})`,D.style.color=k<.6?"#ff9010":"#ff2000",D.style.textShadow=`0 0 ${Math.max(2,12*(1-k)).toFixed(0)}px rgba(255, 120, 20, 0.9)`,D.style.opacity=V.toFixed(2),D._swallowState=3}}if(P<.55)m.forEach(I=>I.style.opacity="1"),l.style.opacity="1";else{const I=(P-.55)/.45,D=Math.max(0,1-Math.pow(I,1.5));m.forEach(K=>K.style.opacity=D.toFixed(2)),l.style.opacity=Math.max(0,1-Math.pow(I,2.2)).toFixed(2)}};y.to(x,{phase:1,duration:1,ease:"power1.inOut",onUpdate:()=>w(x.phase)});const M=Ze.create({trigger:l,start:c?"top top":"top 25%",end:c?"+=70%":"+=60%",scrub:.6,animation:y,onUpdate:P=>{P.progress>=.62&&y.progress()<1?(!T||!T.isActive())&&(T=_r.to(y,{progress:1,duration:.7,ease:"power2.in",overwrite:"auto"})):P.progress<.5&&T&&(T.kill(),T=null)}});s.push(M)});const a=Ze.create({trigger:".scroll-end-trigger",start:"top 70%",end:"bottom bottom",scrub:.5,onUpdate:l=>{const u=document.getElementById("flash-overlay");u&&(l.progress<.5?(u.style.backgroundColor="#ffffff",u.style.opacity=(l.progress/.5).toFixed(2)):(u.style.backgroundColor="#000000",u.style.opacity=((l.progress-.5)/.5).toFixed(2)))}});s.push(a),Ze.refresh()}),()=>{r.forEach(o=>o.revert()),s.forEach(o=>o.kill()),_r.ticker.remove(i),t.destroy()}},[]),dt.jsxs(dt.Fragment,{children:[dt.jsx("div",{id:"flash-overlay"}),dt.jsx(O3,{}),dt.jsxs("main",{id:"ui-container",ref:n,children:[dt.jsxs("header",{className:"card hero-card",children:[dt.jsxs("h1",{className:"name-title",children:[dt.jsx("span",{className:"name-line",children:Dl.firstName}),dt.jsx("span",{className:"name-line",children:Dl.lastName})]}),dt.jsx("p",{className:"hero-subtitle",children:Dl.title}),dt.jsxs("div",{className:"hero-links",children:[dt.jsx("a",{href:Dl.github,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"GitHub"}),dt.jsx("a",{href:Dl.linkedin,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"LinkedIn"})]})]}),F3.map(e=>dt.jsxs("section",{className:"card content-card",children:[dt.jsxs("span",{className:"project-index",children:[e.id," // ",e.category]}),dt.jsx("h2",{className:"section-title",children:e.title}),dt.jsx("p",{className:"section-desc",children:e.description}),dt.jsx("div",{className:"tag-cloud",children:e.tags.map((t,i)=>dt.jsx("span",{className:"tag",children:t},i))})]},e.id)),dt.jsxs("section",{className:"card content-card",children:[dt.jsx("span",{className:"project-index",children:"07 // STACK"}),dt.jsx("h2",{className:"section-title",children:"Technical Capabilities"}),dt.jsx("div",{className:"stack-grid",children:k3.map((e,t)=>dt.jsxs("div",{className:"stack-col",children:[dt.jsx("span",{className:"stack-label",children:e.label}),dt.jsx("span",{className:"stack-val",children:e.value})]},t))})]})]}),dt.jsx("div",{className:"scroll-end-trigger",style:{height:"50vh",width:"100%"}})]})}ap.createRoot(document.getElementById("root")).render(dt.jsx(VT.StrictMode,{children:dt.jsx(z3,{})}));
