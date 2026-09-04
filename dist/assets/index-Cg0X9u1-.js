(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function _1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hx={exports:{}},hd={},Vx={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zu=Symbol.for("react.element"),v1=Symbol.for("react.portal"),x1=Symbol.for("react.fragment"),y1=Symbol.for("react.strict_mode"),S1=Symbol.for("react.profiler"),M1=Symbol.for("react.provider"),E1=Symbol.for("react.context"),T1=Symbol.for("react.forward_ref"),w1=Symbol.for("react.suspense"),A1=Symbol.for("react.memo"),C1=Symbol.for("react.lazy"),y_=Symbol.iterator;function R1(n){return n===null||typeof n!="object"?null:(n=y_&&n[y_]||n["@@iterator"],typeof n=="function"?n:null)}var Gx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wx=Object.assign,Xx={};function ll(n,e,t){this.props=n,this.context=e,this.refs=Xx,this.updater=t||Gx}ll.prototype.isReactComponent={};ll.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ll.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Yx(){}Yx.prototype=ll.prototype;function Bm(n,e,t){this.props=n,this.context=e,this.refs=Xx,this.updater=t||Gx}var Hm=Bm.prototype=new Yx;Hm.constructor=Bm;Wx(Hm,ll.prototype);Hm.isPureReactComponent=!0;var S_=Array.isArray,jx=Object.prototype.hasOwnProperty,Vm={current:null},qx={key:!0,ref:!0,__self:!0,__source:!0};function $x(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jx.call(e,i)&&!qx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:zu,type:n,key:s,ref:o,props:r,_owner:Vm.current}}function b1(n,e){return{$$typeof:zu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gm(n){return typeof n=="object"&&n!==null&&n.$$typeof===zu}function P1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var M_=/\/+/g;function Gd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?P1(""+n.key):e.toString(36)}function tf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case zu:case v1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Gd(o,0):i,S_(r)?(t="",n!=null&&(t=n.replace(M_,"$&/")+"/"),tf(r,e,t,"",function(u){return u})):r!=null&&(Gm(r)&&(r=b1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(M_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",S_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Gd(s,a);o+=tf(s,e,t,l,r)}else if(l=R1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Gd(s,a++),o+=tf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ju(n,e,t){if(n==null)return n;var i=[],r=0;return tf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function L1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Wn={current:null},nf={transition:null},D1={ReactCurrentDispatcher:Wn,ReactCurrentBatchConfig:nf,ReactCurrentOwner:Vm};function Kx(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:Ju,forEach:function(n,e,t){Ju(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ju(n,function(){e++}),e},toArray:function(n){return Ju(n,function(e){return e})||[]},only:function(n){if(!Gm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};at.Component=ll;at.Fragment=x1;at.Profiler=S1;at.PureComponent=Bm;at.StrictMode=y1;at.Suspense=w1;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;at.act=Kx;at.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Wx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)jx.call(e,l)&&!qx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:zu,type:n.type,key:r,ref:s,props:i,_owner:o}};at.createContext=function(n){return n={$$typeof:E1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:M1,_context:n},n.Consumer=n};at.createElement=$x;at.createFactory=function(n){var e=$x.bind(null,n);return e.type=n,e};at.createRef=function(){return{current:null}};at.forwardRef=function(n){return{$$typeof:T1,render:n}};at.isValidElement=Gm;at.lazy=function(n){return{$$typeof:C1,_payload:{_status:-1,_result:n},_init:L1}};at.memo=function(n,e){return{$$typeof:A1,type:n,compare:e===void 0?null:e}};at.startTransition=function(n){var e=nf.transition;nf.transition={};try{n()}finally{nf.transition=e}};at.unstable_act=Kx;at.useCallback=function(n,e){return Wn.current.useCallback(n,e)};at.useContext=function(n){return Wn.current.useContext(n)};at.useDebugValue=function(){};at.useDeferredValue=function(n){return Wn.current.useDeferredValue(n)};at.useEffect=function(n,e){return Wn.current.useEffect(n,e)};at.useId=function(){return Wn.current.useId()};at.useImperativeHandle=function(n,e,t){return Wn.current.useImperativeHandle(n,e,t)};at.useInsertionEffect=function(n,e){return Wn.current.useInsertionEffect(n,e)};at.useLayoutEffect=function(n,e){return Wn.current.useLayoutEffect(n,e)};at.useMemo=function(n,e){return Wn.current.useMemo(n,e)};at.useReducer=function(n,e,t){return Wn.current.useReducer(n,e,t)};at.useRef=function(n){return Wn.current.useRef(n)};at.useState=function(n){return Wn.current.useState(n)};at.useSyncExternalStore=function(n,e,t){return Wn.current.useSyncExternalStore(n,e,t)};at.useTransition=function(){return Wn.current.useTransition()};at.version="18.3.1";Vx.exports=at;var bo=Vx.exports;const U1=_1(bo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1=bo,I1=Symbol.for("react.element"),O1=Symbol.for("react.fragment"),F1=Object.prototype.hasOwnProperty,k1=N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z1={key:!0,ref:!0,__self:!0,__source:!0};function Zx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)F1.call(e,i)&&!z1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:I1,type:n,key:s,ref:o,props:r,_owner:k1.current}}hd.Fragment=O1;hd.jsx=Zx;hd.jsxs=Zx;Hx.exports=hd;var ht=Hx.exports,op={},Qx={exports:{}},Di={},Jx={exports:{}},ey={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,O){var R=U.length;U.push(O);e:for(;0<R;){var $=R-1>>>1,Q=U[$];if(0<r(Q,O))U[$]=O,U[R]=Q,R=$;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var O=U[0],R=U.pop();if(R!==O){U[0]=R;e:for(var $=0,Q=U.length,q=Q>>>1;$<q;){var K=2*($+1)-1,re=U[K],pe=K+1,ue=U[pe];if(0>r(re,R))pe<Q&&0>r(ue,re)?(U[$]=ue,U[pe]=R,$=pe):(U[$]=re,U[K]=R,$=K);else if(pe<Q&&0>r(ue,R))U[$]=ue,U[pe]=R,$=pe;else break e}}return O}function r(U,O){var R=U.sortIndex-O.sortIndex;return R!==0?R:U.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var O=t(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=U)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(u)}}function y(U){if(g=!1,x(U),!_)if(t(l)!==null)_=!0,V(T);else{var O=t(u);O!==null&&B(y,O.startTime-U)}}function T(U,O){_=!1,g&&(g=!1,f(P),P=-1),p=!0;var R=h;try{for(x(O),d=t(l);d!==null&&(!(d.expirationTime>O)||U&&!F());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var Q=$(d.expirationTime<=O);O=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(l)&&i(l),x(O)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var K=t(u);K!==null&&B(y,K.startTime-O),q=!1}return q}finally{d=null,h=R,p=!1}}var w=!1,M=null,P=-1,S=5,E=-1;function F(){return!(n.unstable_now()-E<S)}function N(){if(M!==null){var U=n.unstable_now();E=U;var O=!0;try{O=M(!0,U)}finally{O?Z():(w=!1,M=null)}}else w=!1}var Z;if(typeof v=="function")Z=function(){v(N)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,I=L.port2;L.port1.onmessage=N,Z=function(){I.postMessage(null)}}else Z=function(){m(N,0)};function V(U){M=U,w||(w=!0,Z())}function B(U,O){P=m(function(){U(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,V(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var R=h;h=O;try{return U()}finally{h=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,O){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var R=h;h=U;try{return O()}finally{h=R}},n.unstable_scheduleCallback=function(U,O,R){var $=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,U){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=R+Q,U={id:c++,callback:O,priorityLevel:U,startTime:R,expirationTime:Q,sortIndex:-1},R>$?(U.sortIndex=R,e(u,U),t(l)===null&&U===t(u)&&(g?(f(P),P=-1):g=!0,B(y,R-$))):(U.sortIndex=Q,e(l,U),_||p||(_=!0,V(T))),U},n.unstable_shouldYield=F,n.unstable_wrapCallback=function(U){var O=h;return function(){var R=h;h=O;try{return U.apply(this,arguments)}finally{h=R}}}})(ey);Jx.exports=ey;var B1=Jx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1=bo,Ri=B1;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ty=new Set,fu={};function zo(n,e){Wa(n,e),Wa(n+"Capture",e)}function Wa(n,e){for(fu[n]=e,n=0;n<e.length;n++)ty.add(e[n])}var Yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ap=Object.prototype.hasOwnProperty,V1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E_={},T_={};function G1(n){return ap.call(T_,n)?!0:ap.call(E_,n)?!1:V1.test(n)?T_[n]=!0:(E_[n]=!0,!1)}function W1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function X1(n,e,t,i){if(e===null||typeof e>"u"||W1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){vn[n]=new Xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];vn[e]=new Xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){vn[n]=new Xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){vn[n]=new Xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){vn[n]=new Xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){vn[n]=new Xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){vn[n]=new Xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){vn[n]=new Xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){vn[n]=new Xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Wm=/[\-:]([a-z])/g;function Xm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Wm,Xm);vn[e]=new Xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Wm,Xm);vn[e]=new Xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Wm,Xm);vn[e]=new Xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){vn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!1,!1)});vn.xlinkHref=new Xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){vn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ym(n,e,t,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(X1(e,t,r,i)&&(t=null),i||r===null?G1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Jr=H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ec=Symbol.for("react.element"),da=Symbol.for("react.portal"),ha=Symbol.for("react.fragment"),jm=Symbol.for("react.strict_mode"),lp=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),iy=Symbol.for("react.context"),qm=Symbol.for("react.forward_ref"),up=Symbol.for("react.suspense"),cp=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),as=Symbol.for("react.lazy"),ry=Symbol.for("react.offscreen"),w_=Symbol.iterator;function pl(n){return n===null||typeof n!="object"?null:(n=w_&&n[w_]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Object.assign,Wd;function Ll(n){if(Wd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Wd=e&&e[1]||""}return`
`+Wd+n}var Xd=!1;function Yd(n,e){if(!n||Xd)return"";Xd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ll(n):""}function Y1(n){switch(n.tag){case 5:return Ll(n.type);case 16:return Ll("Lazy");case 13:return Ll("Suspense");case 19:return Ll("SuspenseList");case 0:case 2:case 15:return n=Yd(n.type,!1),n;case 11:return n=Yd(n.type.render,!1),n;case 1:return n=Yd(n.type,!0),n;default:return""}}function fp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ha:return"Fragment";case da:return"Portal";case lp:return"Profiler";case jm:return"StrictMode";case up:return"Suspense";case cp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case iy:return(n.displayName||"Context")+".Consumer";case ny:return(n._context.displayName||"Context")+".Provider";case qm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $m:return e=n.displayName||null,e!==null?e:fp(n.type)||"Memo";case as:e=n._payload,n=n._init;try{return fp(n(e))}catch{}}return null}function j1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fp(e);case 8:return e===jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Is(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q1(n){var e=sy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function tc(n){n._valueTracker||(n._valueTracker=q1(n))}function oy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=sy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Tf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dp(n,e){var t=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function A_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Is(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ay(n,e){e=e.checked,e!=null&&Ym(n,"checked",e,!1)}function hp(n,e){ay(n,e);var t=Is(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?pp(n,e.type,t):e.hasOwnProperty("defaultValue")&&pp(n,e.type,Is(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function C_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function pp(n,e,t){(e!=="number"||Tf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Dl=Array.isArray;function ba(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Is(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function mp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function R_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(Dl(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Is(t)}}function ly(n,e){var t=Is(e.value),i=Is(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function b_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function uy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?uy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var nc,cy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(nc=nc||document.createElement("div"),nc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function du(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Vl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$1=["Webkit","ms","Moz","O"];Object.keys(Vl).forEach(function(n){$1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Vl[e]=Vl[n]})});function fy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Vl.hasOwnProperty(n)&&Vl[n]?(""+e).trim():e+"px"}function dy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=fy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var K1=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _p(n,e){if(e){if(K1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function vp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xp=null;function Km(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yp=null,Pa=null,La=null;function P_(n){if(n=Vu(n)){if(typeof yp!="function")throw Error(se(280));var e=n.stateNode;e&&(e=vd(e),yp(n.stateNode,n.type,e))}}function hy(n){Pa?La?La.push(n):La=[n]:Pa=n}function py(){if(Pa){var n=Pa,e=La;if(La=Pa=null,P_(n),e)for(n=0;n<e.length;n++)P_(e[n])}}function my(n,e){return n(e)}function gy(){}var jd=!1;function _y(n,e,t){if(jd)return n(e,t);jd=!0;try{return my(n,e,t)}finally{jd=!1,(Pa!==null||La!==null)&&(gy(),py())}}function hu(n,e){var t=n.stateNode;if(t===null)return null;var i=vd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var Sp=!1;if(Yr)try{var ml={};Object.defineProperty(ml,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",ml,ml),window.removeEventListener("test",ml,ml)}catch{Sp=!1}function Z1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Gl=!1,wf=null,Af=!1,Mp=null,Q1={onError:function(n){Gl=!0,wf=n}};function J1(n,e,t,i,r,s,o,a,l){Gl=!1,wf=null,Z1.apply(Q1,arguments)}function eT(n,e,t,i,r,s,o,a,l){if(J1.apply(this,arguments),Gl){if(Gl){var u=wf;Gl=!1,wf=null}else throw Error(se(198));Af||(Af=!0,Mp=u)}}function Bo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function vy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function L_(n){if(Bo(n)!==n)throw Error(se(188))}function tT(n){var e=n.alternate;if(!e){if(e=Bo(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return L_(r),n;if(s===i)return L_(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function xy(n){return n=tT(n),n!==null?yy(n):null}function yy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=yy(n);if(e!==null)return e;n=n.sibling}return null}var Sy=Ri.unstable_scheduleCallback,D_=Ri.unstable_cancelCallback,nT=Ri.unstable_shouldYield,iT=Ri.unstable_requestPaint,Wt=Ri.unstable_now,rT=Ri.unstable_getCurrentPriorityLevel,Zm=Ri.unstable_ImmediatePriority,My=Ri.unstable_UserBlockingPriority,Cf=Ri.unstable_NormalPriority,sT=Ri.unstable_LowPriority,Ey=Ri.unstable_IdlePriority,pd=null,Er=null;function oT(n){if(Er&&typeof Er.onCommitFiberRoot=="function")try{Er.onCommitFiberRoot(pd,n,void 0,(n.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:uT,aT=Math.log,lT=Math.LN2;function uT(n){return n>>>=0,n===0?32:31-(aT(n)/lT|0)|0}var ic=64,rc=4194304;function Ul(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Rf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ul(a):(s&=o,s!==0&&(i=Ul(s)))}else o=t&~r,o!==0?i=Ul(o):s!==0&&(i=Ul(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ur(e),r=1<<t,i|=n[t],e&=~r;return i}function cT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ur(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=cT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ep(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ty(){var n=ic;return ic<<=1,!(ic&4194240)&&(ic=64),n}function qd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Bu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ur(e),n[e]=t}function dT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ur(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Qm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ur(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function wy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ay,Jm,Cy,Ry,by,Tp=!1,sc=[],Ms=null,Es=null,Ts=null,pu=new Map,mu=new Map,cs=[],hT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function U_(n,e){switch(n){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":pu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mu.delete(e.pointerId)}}function gl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vu(e),e!==null&&Jm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function pT(n,e,t,i,r){switch(e){case"focusin":return Ms=gl(Ms,n,e,t,i,r),!0;case"dragenter":return Es=gl(Es,n,e,t,i,r),!0;case"mouseover":return Ts=gl(Ts,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return pu.set(s,gl(pu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,mu.set(s,gl(mu.get(s)||null,n,e,t,i,r)),!0}return!1}function Py(n){var e=lo(n.target);if(e!==null){var t=Bo(e);if(t!==null){if(e=t.tag,e===13){if(e=vy(t),e!==null){n.blockedOn=e,by(n.priority,function(){Cy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function rf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=wp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);xp=i,t.target.dispatchEvent(i),xp=null}else return e=Vu(t),e!==null&&Jm(e),n.blockedOn=t,!1;e.shift()}return!0}function N_(n,e,t){rf(n)&&t.delete(e)}function mT(){Tp=!1,Ms!==null&&rf(Ms)&&(Ms=null),Es!==null&&rf(Es)&&(Es=null),Ts!==null&&rf(Ts)&&(Ts=null),pu.forEach(N_),mu.forEach(N_)}function _l(n,e){n.blockedOn===e&&(n.blockedOn=null,Tp||(Tp=!0,Ri.unstable_scheduleCallback(Ri.unstable_NormalPriority,mT)))}function gu(n){function e(r){return _l(r,n)}if(0<sc.length){_l(sc[0],n);for(var t=1;t<sc.length;t++){var i=sc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ms!==null&&_l(Ms,n),Es!==null&&_l(Es,n),Ts!==null&&_l(Ts,n),pu.forEach(e),mu.forEach(e),t=0;t<cs.length;t++)i=cs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cs.length&&(t=cs[0],t.blockedOn===null);)Py(t),t.blockedOn===null&&cs.shift()}var Da=Jr.ReactCurrentBatchConfig,bf=!0;function gT(n,e,t,i){var r=vt,s=Da.transition;Da.transition=null;try{vt=1,eg(n,e,t,i)}finally{vt=r,Da.transition=s}}function _T(n,e,t,i){var r=vt,s=Da.transition;Da.transition=null;try{vt=4,eg(n,e,t,i)}finally{vt=r,Da.transition=s}}function eg(n,e,t,i){if(bf){var r=wp(n,e,t,i);if(r===null)rh(n,e,i,Pf,t),U_(n,i);else if(pT(r,n,e,t,i))i.stopPropagation();else if(U_(n,i),e&4&&-1<hT.indexOf(n)){for(;r!==null;){var s=Vu(r);if(s!==null&&Ay(s),s=wp(n,e,t,i),s===null&&rh(n,e,i,Pf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else rh(n,e,i,null,t)}}var Pf=null;function wp(n,e,t,i){if(Pf=null,n=Km(i),n=lo(n),n!==null)if(e=Bo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=vy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Pf=n,null}function Ly(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rT()){case Zm:return 1;case My:return 4;case Cf:case sT:return 16;case Ey:return 536870912;default:return 16}default:return 16}}var hs=null,tg=null,sf=null;function Dy(){if(sf)return sf;var n,e=tg,t=e.length,i,r="value"in hs?hs.value:hs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return sf=r.slice(n,1<i?1-i:void 0)}function of(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function oc(){return!0}function I_(){return!1}function Ui(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?oc:I_,this.isPropagationStopped=I_,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=oc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=oc)},persist:function(){},isPersistent:oc}),e}var ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ng=Ui(ul),Hu=zt({},ul,{view:0,detail:0}),vT=Ui(Hu),$d,Kd,vl,md=zt({},Hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ig,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vl&&(vl&&n.type==="mousemove"?($d=n.screenX-vl.screenX,Kd=n.screenY-vl.screenY):Kd=$d=0,vl=n),$d)},movementY:function(n){return"movementY"in n?n.movementY:Kd}}),O_=Ui(md),xT=zt({},md,{dataTransfer:0}),yT=Ui(xT),ST=zt({},Hu,{relatedTarget:0}),Zd=Ui(ST),MT=zt({},ul,{animationName:0,elapsedTime:0,pseudoElement:0}),ET=Ui(MT),TT=zt({},ul,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wT=Ui(TT),AT=zt({},ul,{data:0}),F_=Ui(AT),CT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=bT[n])?!!e[n]:!1}function ig(){return PT}var LT=zt({},Hu,{key:function(n){if(n.key){var e=CT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=of(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?RT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ig,charCode:function(n){return n.type==="keypress"?of(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?of(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),DT=Ui(LT),UT=zt({},md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),k_=Ui(UT),NT=zt({},Hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ig}),IT=Ui(NT),OT=zt({},ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),FT=Ui(OT),kT=zt({},md,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),zT=Ui(kT),BT=[9,13,27,32],rg=Yr&&"CompositionEvent"in window,Wl=null;Yr&&"documentMode"in document&&(Wl=document.documentMode);var HT=Yr&&"TextEvent"in window&&!Wl,Uy=Yr&&(!rg||Wl&&8<Wl&&11>=Wl),z_=" ",B_=!1;function Ny(n,e){switch(n){case"keyup":return BT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var pa=!1;function VT(n,e){switch(n){case"compositionend":return Iy(e);case"keypress":return e.which!==32?null:(B_=!0,z_);case"textInput":return n=e.data,n===z_&&B_?null:n;default:return null}}function GT(n,e){if(pa)return n==="compositionend"||!rg&&Ny(n,e)?(n=Dy(),sf=tg=hs=null,pa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uy&&e.locale!=="ko"?null:e.data;default:return null}}var WT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!WT[n.type]:e==="textarea"}function Oy(n,e,t,i){hy(i),e=Lf(e,"onChange"),0<e.length&&(t=new ng("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Xl=null,_u=null;function XT(n){jy(n,0)}function gd(n){var e=_a(n);if(oy(e))return n}function YT(n,e){if(n==="change")return e}var Fy=!1;if(Yr){var Qd;if(Yr){var Jd="oninput"in document;if(!Jd){var V_=document.createElement("div");V_.setAttribute("oninput","return;"),Jd=typeof V_.oninput=="function"}Qd=Jd}else Qd=!1;Fy=Qd&&(!document.documentMode||9<document.documentMode)}function G_(){Xl&&(Xl.detachEvent("onpropertychange",ky),_u=Xl=null)}function ky(n){if(n.propertyName==="value"&&gd(_u)){var e=[];Oy(e,_u,n,Km(n)),_y(XT,e)}}function jT(n,e,t){n==="focusin"?(G_(),Xl=e,_u=t,Xl.attachEvent("onpropertychange",ky)):n==="focusout"&&G_()}function qT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gd(_u)}function $T(n,e){if(n==="click")return gd(e)}function KT(n,e){if(n==="input"||n==="change")return gd(e)}function ZT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var dr=typeof Object.is=="function"?Object.is:ZT;function vu(n,e){if(dr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ap.call(e,r)||!dr(n[r],e[r]))return!1}return!0}function W_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function X_(n,e){var t=W_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=W_(t)}}function zy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?zy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function By(){for(var n=window,e=Tf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Tf(n.document)}return e}function sg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function QT(n){var e=By(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&zy(t.ownerDocument.documentElement,t)){if(i!==null&&sg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=X_(t,s);var o=X_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var JT=Yr&&"documentMode"in document&&11>=document.documentMode,ma=null,Ap=null,Yl=null,Cp=!1;function Y_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Cp||ma==null||ma!==Tf(i)||(i=ma,"selectionStart"in i&&sg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yl&&vu(Yl,i)||(Yl=i,i=Lf(Ap,"onSelect"),0<i.length&&(e=new ng("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ma)))}function ac(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ga={animationend:ac("Animation","AnimationEnd"),animationiteration:ac("Animation","AnimationIteration"),animationstart:ac("Animation","AnimationStart"),transitionend:ac("Transition","TransitionEnd")},eh={},Hy={};Yr&&(Hy=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function _d(n){if(eh[n])return eh[n];if(!ga[n])return n;var e=ga[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Hy)return eh[n]=e[t];return n}var Vy=_d("animationend"),Gy=_d("animationiteration"),Wy=_d("animationstart"),Xy=_d("transitionend"),Yy=new Map,j_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(n,e){Yy.set(n,e),zo(e,[n])}for(var th=0;th<j_.length;th++){var nh=j_[th],ew=nh.toLowerCase(),tw=nh[0].toUpperCase()+nh.slice(1);Vs(ew,"on"+tw)}Vs(Vy,"onAnimationEnd");Vs(Gy,"onAnimationIteration");Vs(Wy,"onAnimationStart");Vs("dblclick","onDoubleClick");Vs("focusin","onFocus");Vs("focusout","onBlur");Vs(Xy,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);zo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zo("onBeforeInput",["compositionend","keypress","textInput","paste"]);zo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nl));function q_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,eT(i,e,void 0,n),n.currentTarget=null}function jy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;q_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;q_(r,a,u),s=l}}}if(Af)throw n=Mp,Af=!1,Mp=null,n}function Ct(n,e){var t=e[Dp];t===void 0&&(t=e[Dp]=new Set);var i=n+"__bubble";t.has(i)||(qy(e,n,2,!1),t.add(i))}function ih(n,e,t){var i=0;e&&(i|=4),qy(t,n,i,e)}var lc="_reactListening"+Math.random().toString(36).slice(2);function xu(n){if(!n[lc]){n[lc]=!0,ty.forEach(function(t){t!=="selectionchange"&&(nw.has(t)||ih(t,!1,n),ih(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[lc]||(e[lc]=!0,ih("selectionchange",!1,e))}}function qy(n,e,t,i){switch(Ly(e)){case 1:var r=gT;break;case 4:r=_T;break;default:r=eg}t=r.bind(null,e,t,n),r=void 0,!Sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function rh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_y(function(){var u=s,c=Km(t),d=[];e:{var h=Yy.get(n);if(h!==void 0){var p=ng,_=n;switch(n){case"keypress":if(of(t)===0)break e;case"keydown":case"keyup":p=DT;break;case"focusin":_="focus",p=Zd;break;case"focusout":_="blur",p=Zd;break;case"beforeblur":case"afterblur":p=Zd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=O_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=IT;break;case Vy:case Gy:case Wy:p=ET;break;case Xy:p=FT;break;case"scroll":p=vT;break;case"wheel":p=zT;break;case"copy":case"cut":case"paste":p=wT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=k_}var g=(e&4)!==0,m=!g&&n==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,f!==null&&(y=hu(v,f),y!=null&&g.push(yu(v,y,x)))),m)break;v=v.return}0<g.length&&(h=new p(h,_,null,t,c),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==xp&&(_=t.relatedTarget||t.fromElement)&&(lo(_)||_[jr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?lo(_):null,_!==null&&(m=Bo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=O_,y="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=k_,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:_a(p),x=_==null?h:_a(_),h=new g(y,v+"leave",p,t,c),h.target=m,h.relatedTarget=x,y=null,lo(c)===u&&(g=new g(f,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,f=_,v=0,x=g;x;x=Vo(x))v++;for(x=0,y=f;y;y=Vo(y))x++;for(;0<v-x;)g=Vo(g),v--;for(;0<x-v;)f=Vo(f),x--;for(;v--;){if(g===f||f!==null&&g===f.alternate)break t;g=Vo(g),f=Vo(f)}g=null}else g=null;p!==null&&$_(d,h,p,g,!1),_!==null&&m!==null&&$_(d,m,_,g,!0)}}e:{if(h=u?_a(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=YT;else if(H_(h))if(Fy)T=KT;else{T=qT;var w=jT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=$T);if(T&&(T=T(n,u))){Oy(d,T,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&pp(h,"number",h.value)}switch(w=u?_a(u):window,n){case"focusin":(H_(w)||w.contentEditable==="true")&&(ma=w,Ap=u,Yl=null);break;case"focusout":Yl=Ap=ma=null;break;case"mousedown":Cp=!0;break;case"contextmenu":case"mouseup":case"dragend":Cp=!1,Y_(d,t,c);break;case"selectionchange":if(JT)break;case"keydown":case"keyup":Y_(d,t,c)}var M;if(rg)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pa?Ny(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Uy&&t.locale!=="ko"&&(pa||P!=="onCompositionStart"?P==="onCompositionEnd"&&pa&&(M=Dy()):(hs=c,tg="value"in hs?hs.value:hs.textContent,pa=!0)),w=Lf(u,P),0<w.length&&(P=new F_(P,n,null,t,c),d.push({event:P,listeners:w}),M?P.data=M:(M=Iy(t),M!==null&&(P.data=M)))),(M=HT?VT(n,t):GT(n,t))&&(u=Lf(u,"onBeforeInput"),0<u.length&&(c=new F_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}jy(d,e)})}function yu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Lf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=hu(n,t),s!=null&&i.unshift(yu(n,s,r)),s=hu(n,e),s!=null&&i.push(yu(n,s,r))),n=n.return}return i}function Vo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=hu(t,s),l!=null&&o.unshift(yu(t,l,a))):r||(l=hu(t,s),l!=null&&o.push(yu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var iw=/\r\n?/g,rw=/\u0000|\uFFFD/g;function K_(n){return(typeof n=="string"?n:""+n).replace(iw,`
`).replace(rw,"")}function uc(n,e,t){if(e=K_(e),K_(n)!==e&&t)throw Error(se(425))}function Df(){}var Rp=null,bp=null;function Pp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lp=typeof setTimeout=="function"?setTimeout:void 0,sw=typeof clearTimeout=="function"?clearTimeout:void 0,Z_=typeof Promise=="function"?Promise:void 0,ow=typeof queueMicrotask=="function"?queueMicrotask:typeof Z_<"u"?function(n){return Z_.resolve(null).then(n).catch(aw)}:Lp;function aw(n){setTimeout(function(){throw n})}function sh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),gu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);gu(e)}function ws(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Q_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var cl=Math.random().toString(36).slice(2),vr="__reactFiber$"+cl,Su="__reactProps$"+cl,jr="__reactContainer$"+cl,Dp="__reactEvents$"+cl,lw="__reactListeners$"+cl,uw="__reactHandles$"+cl;function lo(n){var e=n[vr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[jr]||t[vr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Q_(n);n!==null;){if(t=n[vr])return t;n=Q_(n)}return e}n=t,t=n.parentNode}return null}function Vu(n){return n=n[vr]||n[jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _a(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function vd(n){return n[Su]||null}var Up=[],va=-1;function Gs(n){return{current:n}}function bt(n){0>va||(n.current=Up[va],Up[va]=null,va--)}function wt(n,e){va++,Up[va]=n.current,n.current=e}var Os={},Pn=Gs(Os),Jn=Gs(!1),Po=Os;function Xa(n,e){var t=n.type.contextTypes;if(!t)return Os;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function Uf(){bt(Jn),bt(Pn)}function J_(n,e,t){if(Pn.current!==Os)throw Error(se(168));wt(Pn,e),wt(Jn,t)}function $y(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,j1(n)||"Unknown",r));return zt({},t,i)}function Nf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Os,Po=Pn.current,wt(Pn,n),wt(Jn,Jn.current),!0}function e0(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=$y(n,e,Po),i.__reactInternalMemoizedMergedChildContext=n,bt(Jn),bt(Pn),wt(Pn,n)):bt(Jn),wt(Jn,t)}var Or=null,xd=!1,oh=!1;function Ky(n){Or===null?Or=[n]:Or.push(n)}function cw(n){xd=!0,Ky(n)}function Ws(){if(!oh&&Or!==null){oh=!0;var n=0,e=vt;try{var t=Or;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Or=null,xd=!1}catch(r){throw Or!==null&&(Or=Or.slice(n+1)),Sy(Zm,Ws),r}finally{vt=e,oh=!1}}return null}var xa=[],ya=0,If=null,Of=0,Fi=[],ki=0,Lo=null,zr=1,Br="";function eo(n,e){xa[ya++]=Of,xa[ya++]=If,If=n,Of=e}function Zy(n,e,t){Fi[ki++]=zr,Fi[ki++]=Br,Fi[ki++]=Lo,Lo=n;var i=zr;n=Br;var r=32-ur(i)-1;i&=~(1<<r),t+=1;var s=32-ur(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zr=1<<32-ur(e)+r|t<<r|i,Br=s+n}else zr=1<<s|t<<r|i,Br=n}function og(n){n.return!==null&&(eo(n,1),Zy(n,1,0))}function ag(n){for(;n===If;)If=xa[--ya],xa[ya]=null,Of=xa[--ya],xa[ya]=null;for(;n===Lo;)Lo=Fi[--ki],Fi[ki]=null,Br=Fi[--ki],Fi[ki]=null,zr=Fi[--ki],Fi[ki]=null}var wi=null,yi=null,Lt=!1,or=null;function Qy(n,e){var t=Xi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function t0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,wi=n,yi=ws(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,wi=n,yi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lo!==null?{id:zr,overflow:Br}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Xi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,wi=n,yi=null,!0):!1;default:return!1}}function Np(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ip(n){if(Lt){var e=yi;if(e){var t=e;if(!t0(n,e)){if(Np(n))throw Error(se(418));e=ws(t.nextSibling);var i=wi;e&&t0(n,e)?Qy(i,t):(n.flags=n.flags&-4097|2,Lt=!1,wi=n)}}else{if(Np(n))throw Error(se(418));n.flags=n.flags&-4097|2,Lt=!1,wi=n}}}function n0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wi=n}function cc(n){if(n!==wi)return!1;if(!Lt)return n0(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Pp(n.type,n.memoizedProps)),e&&(e=yi)){if(Np(n))throw Jy(),Error(se(418));for(;e;)Qy(n,e),e=ws(e.nextSibling)}if(n0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yi=ws(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yi=null}}else yi=wi?ws(n.stateNode.nextSibling):null;return!0}function Jy(){for(var n=yi;n;)n=ws(n.nextSibling)}function Ya(){yi=wi=null,Lt=!1}function lg(n){or===null?or=[n]:or.push(n)}var fw=Jr.ReactCurrentBatchConfig;function xl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function fc(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function i0(n){var e=n._init;return e(n._payload)}function eS(n){function e(f,v){if(n){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=bs(f,v),f.index=0,f.sibling=null,f}function s(f,v,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,x,y){return v===null||v.tag!==6?(v=hh(x,f.mode,y),v.return=f,v):(v=r(v,x),v.return=f,v)}function l(f,v,x,y){var T=x.type;return T===ha?c(f,v,x.props.children,y,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===as&&i0(T)===v.type)?(y=r(v,x.props),y.ref=xl(f,v,x),y.return=f,y):(y=hf(x.type,x.key,x.props,null,f.mode,y),y.ref=xl(f,v,x),y.return=f,y)}function u(f,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=ph(x,f.mode,y),v.return=f,v):(v=r(v,x.children||[]),v.return=f,v)}function c(f,v,x,y,T){return v===null||v.tag!==7?(v=vo(x,f.mode,y,T),v.return=f,v):(v=r(v,x),v.return=f,v)}function d(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=hh(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ec:return x=hf(v.type,v.key,v.props,null,f.mode,x),x.ref=xl(f,null,v),x.return=f,x;case da:return v=ph(v,f.mode,x),v.return=f,v;case as:var y=v._init;return d(f,y(v._payload),x)}if(Dl(v)||pl(v))return v=vo(v,f.mode,x,null),v.return=f,v;fc(f,v)}return null}function h(f,v,x,y){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(f,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ec:return x.key===T?l(f,v,x,y):null;case da:return x.key===T?u(f,v,x,y):null;case as:return T=x._init,h(f,v,T(x._payload),y)}if(Dl(x)||pl(x))return T!==null?null:c(f,v,x,y,null);fc(f,x)}return null}function p(f,v,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(x)||null,a(v,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ec:return f=f.get(y.key===null?x:y.key)||null,l(v,f,y,T);case da:return f=f.get(y.key===null?x:y.key)||null,u(v,f,y,T);case as:var w=y._init;return p(f,v,x,w(y._payload),T)}if(Dl(y)||pl(y))return f=f.get(x)||null,c(v,f,y,T,null);fc(v,y)}return null}function _(f,v,x,y){for(var T=null,w=null,M=v,P=v=0,S=null;M!==null&&P<x.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=h(f,M,x[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(f,M),v=s(E,v,P),w===null?T=E:w.sibling=E,w=E,M=S}if(P===x.length)return t(f,M),Lt&&eo(f,P),T;if(M===null){for(;P<x.length;P++)M=d(f,x[P],y),M!==null&&(v=s(M,v,P),w===null?T=M:w.sibling=M,w=M);return Lt&&eo(f,P),T}for(M=i(f,M);P<x.length;P++)S=p(M,f,P,x[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?T=S:w.sibling=S,w=S);return n&&M.forEach(function(F){return e(f,F)}),Lt&&eo(f,P),T}function g(f,v,x,y){var T=pl(x);if(typeof T!="function")throw Error(se(150));if(x=T.call(x),x==null)throw Error(se(151));for(var w=T=null,M=v,P=v=0,S=null,E=x.next();M!==null&&!E.done;P++,E=x.next()){M.index>P?(S=M,M=null):S=M.sibling;var F=h(f,M,E.value,y);if(F===null){M===null&&(M=S);break}n&&M&&F.alternate===null&&e(f,M),v=s(F,v,P),w===null?T=F:w.sibling=F,w=F,M=S}if(E.done)return t(f,M),Lt&&eo(f,P),T;if(M===null){for(;!E.done;P++,E=x.next())E=d(f,E.value,y),E!==null&&(v=s(E,v,P),w===null?T=E:w.sibling=E,w=E);return Lt&&eo(f,P),T}for(M=i(f,M);!E.done;P++,E=x.next())E=p(M,f,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),v=s(E,v,P),w===null?T=E:w.sibling=E,w=E);return n&&M.forEach(function(N){return e(f,N)}),Lt&&eo(f,P),T}function m(f,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ha&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ec:e:{for(var T=x.key,w=v;w!==null;){if(w.key===T){if(T=x.type,T===ha){if(w.tag===7){t(f,w.sibling),v=r(w,x.props.children),v.return=f,f=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===as&&i0(T)===w.type){t(f,w.sibling),v=r(w,x.props),v.ref=xl(f,w,x),v.return=f,f=v;break e}t(f,w);break}else e(f,w);w=w.sibling}x.type===ha?(v=vo(x.props.children,f.mode,y,x.key),v.return=f,f=v):(y=hf(x.type,x.key,x.props,null,f.mode,y),y.ref=xl(f,v,x),y.return=f,f=y)}return o(f);case da:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(f,v.sibling),v=r(v,x.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=ph(x,f.mode,y),v.return=f,f=v}return o(f);case as:return w=x._init,m(f,v,w(x._payload),y)}if(Dl(x))return _(f,v,x,y);if(pl(x))return g(f,v,x,y);fc(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,x),v.return=f,f=v):(t(f,v),v=hh(x,f.mode,y),v.return=f,f=v),o(f)):t(f,v)}return m}var ja=eS(!0),tS=eS(!1),Ff=Gs(null),kf=null,Sa=null,ug=null;function cg(){ug=Sa=kf=null}function fg(n){var e=Ff.current;bt(Ff),n._currentValue=e}function Op(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ua(n,e){kf=n,ug=Sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(ug!==n)if(n={context:n,memoizedValue:e,next:null},Sa===null){if(kf===null)throw Error(se(308));Sa=n,kf.dependencies={lanes:0,firstContext:n}}else Sa=Sa.next=n;return e}var uo=null;function dg(n){uo===null?uo=[n]:uo.push(n)}function nS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,dg(e)):(t.next=r.next,r.next=t),e.interleaved=t,qr(n,i)}function qr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ls=!1;function hg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function As(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qr(n,t)}return r=i.interleaved,r===null?(e.next=e,dg(i)):(e.next=r.next,r.next=e),i.interleaved=e,qr(n,t)}function af(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qm(n,t)}}function r0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function zf(n,e,t,i){var r=n.updateQueue;ls=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(h=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=zt({},d,h);break e;case 2:ls=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Uo|=o,n.lanes=o,n.memoizedState=d}}function s0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Gu={},Tr=Gs(Gu),Mu=Gs(Gu),Eu=Gs(Gu);function co(n){if(n===Gu)throw Error(se(174));return n}function pg(n,e){switch(wt(Eu,e),wt(Mu,n),wt(Tr,Gu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=gp(e,n)}bt(Tr),wt(Tr,e)}function qa(){bt(Tr),bt(Mu),bt(Eu)}function rS(n){co(Eu.current);var e=co(Tr.current),t=gp(e,n.type);e!==t&&(wt(Mu,n),wt(Tr,t))}function mg(n){Mu.current===n&&(bt(Tr),bt(Mu))}var It=Gs(0);function Bf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function gg(){for(var n=0;n<ah.length;n++)ah[n]._workInProgressVersionPrimary=null;ah.length=0}var lf=Jr.ReactCurrentDispatcher,lh=Jr.ReactCurrentBatchConfig,Do=0,kt=null,Jt=null,ln=null,Hf=!1,jl=!1,Tu=0,dw=0;function yn(){throw Error(se(321))}function _g(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!dr(n[t],e[t]))return!1;return!0}function vg(n,e,t,i,r,s){if(Do=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lf.current=n===null||n.memoizedState===null?gw:_w,n=t(i,r),jl){s=0;do{if(jl=!1,Tu=0,25<=s)throw Error(se(301));s+=1,ln=Jt=null,e.updateQueue=null,lf.current=vw,n=t(i,r)}while(jl)}if(lf.current=Vf,e=Jt!==null&&Jt.next!==null,Do=0,ln=Jt=kt=null,Hf=!1,e)throw Error(se(300));return n}function xg(){var n=Tu!==0;return Tu=0,n}function pr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?kt.memoizedState=ln=n:ln=ln.next=n,ln}function Qi(){if(Jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var e=ln===null?kt.memoizedState:ln.next;if(e!==null)ln=e,Jt=n;else{if(n===null)throw Error(se(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},ln===null?kt.memoizedState=ln=n:ln=ln.next=n}return ln}function wu(n,e){return typeof e=="function"?e(n):e}function uh(n){var e=Qi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=Jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Do&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,kt.lanes|=c,Uo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,dr(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,kt.lanes|=s,Uo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ch(n){var e=Qi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);dr(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function sS(){}function oS(n,e){var t=kt,i=Qi(),r=e(),s=!dr(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,yg(uS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ln!==null&&ln.memoizedState.tag&1){if(t.flags|=2048,Au(9,lS.bind(null,t,i,r,e),void 0,null),un===null)throw Error(se(349));Do&30||aS(t,e,r)}return r}function aS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function lS(n,e,t,i){e.value=t,e.getSnapshot=i,cS(e)&&fS(n)}function uS(n,e,t){return t(function(){cS(e)&&fS(n)})}function cS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!dr(n,t)}catch{return!0}}function fS(n){var e=qr(n,1);e!==null&&cr(e,n,1,-1)}function o0(n){var e=pr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wu,lastRenderedState:n},e.queue=n,n=n.dispatch=mw.bind(null,kt,n),[e.memoizedState,n]}function Au(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function dS(){return Qi().memoizedState}function uf(n,e,t,i){var r=pr();kt.flags|=n,r.memoizedState=Au(1|e,t,void 0,i===void 0?null:i)}function yd(n,e,t,i){var r=Qi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&_g(i,o.deps)){r.memoizedState=Au(e,t,s,i);return}}kt.flags|=n,r.memoizedState=Au(1|e,t,s,i)}function a0(n,e){return uf(8390656,8,n,e)}function yg(n,e){return yd(2048,8,n,e)}function hS(n,e){return yd(4,2,n,e)}function pS(n,e){return yd(4,4,n,e)}function mS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function gS(n,e,t){return t=t!=null?t.concat([n]):null,yd(4,4,mS.bind(null,e,n),t)}function Sg(){}function _S(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&_g(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function vS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&_g(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function xS(n,e,t){return Do&21?(dr(t,e)||(t=Ty(),kt.lanes|=t,Uo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function hw(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=lh.transition;lh.transition={};try{n(!1),e()}finally{vt=t,lh.transition=i}}function yS(){return Qi().memoizedState}function pw(n,e,t){var i=Rs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},SS(n))MS(e,t);else if(t=nS(n,e,t,i),t!==null){var r=Vn();cr(t,n,i,r),ES(t,e,i)}}function mw(n,e,t){var i=Rs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(SS(n))MS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,dr(a,o)){var l=e.interleaved;l===null?(r.next=r,dg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=nS(n,e,r,i),t!==null&&(r=Vn(),cr(t,n,i,r),ES(t,e,i))}}function SS(n){var e=n.alternate;return n===kt||e!==null&&e===kt}function MS(n,e){jl=Hf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ES(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qm(n,t)}}var Vf={readContext:Zi,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},gw={readContext:Zi,useCallback:function(n,e){return pr().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:a0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,uf(4194308,4,mS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return uf(4194308,4,n,e)},useInsertionEffect:function(n,e){return uf(4,2,n,e)},useMemo:function(n,e){var t=pr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=pr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=pw.bind(null,kt,n),[i.memoizedState,n]},useRef:function(n){var e=pr();return n={current:n},e.memoizedState=n},useState:o0,useDebugValue:Sg,useDeferredValue:function(n){return pr().memoizedState=n},useTransition:function(){var n=o0(!1),e=n[0];return n=hw.bind(null,n[1]),pr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=kt,r=pr();if(Lt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),un===null)throw Error(se(349));Do&30||aS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,a0(uS.bind(null,i,s,n),[n]),i.flags|=2048,Au(9,lS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=pr(),e=un.identifierPrefix;if(Lt){var t=Br,i=zr;t=(i&~(1<<32-ur(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Tu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=dw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},_w={readContext:Zi,useCallback:_S,useContext:Zi,useEffect:yg,useImperativeHandle:gS,useInsertionEffect:hS,useLayoutEffect:pS,useMemo:vS,useReducer:uh,useRef:dS,useState:function(){return uh(wu)},useDebugValue:Sg,useDeferredValue:function(n){var e=Qi();return xS(e,Jt.memoizedState,n)},useTransition:function(){var n=uh(wu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:sS,useSyncExternalStore:oS,useId:yS,unstable_isNewReconciler:!1},vw={readContext:Zi,useCallback:_S,useContext:Zi,useEffect:yg,useImperativeHandle:gS,useInsertionEffect:hS,useLayoutEffect:pS,useMemo:vS,useReducer:ch,useRef:dS,useState:function(){return ch(wu)},useDebugValue:Sg,useDeferredValue:function(n){var e=Qi();return Jt===null?e.memoizedState=n:xS(e,Jt.memoizedState,n)},useTransition:function(){var n=ch(wu)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:sS,useSyncExternalStore:oS,useId:yS,unstable_isNewReconciler:!1};function rr(n,e){if(n&&n.defaultProps){e=zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Fp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Sd={isMounted:function(n){return(n=n._reactInternals)?Bo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Rs(n),s=Gr(i,r);s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(cr(e,n,r,i),af(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Rs(n),s=Gr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(cr(e,n,r,i),af(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=Rs(n),r=Gr(t,i);r.tag=2,e!=null&&(r.callback=e),e=As(n,r,i),e!==null&&(cr(e,n,i,t),af(e,n,i))}};function l0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!vu(t,i)||!vu(r,s):!0}function TS(n,e,t){var i=!1,r=Os,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=ei(e)?Po:Pn.current,i=e.contextTypes,s=(i=i!=null)?Xa(n,r):Os),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function u0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Sd.enqueueReplaceState(e,e.state,null)}function kp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},hg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=ei(e)?Po:Pn.current,r.context=Xa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sd.enqueueReplaceState(r,r.state,null),zf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function $a(n,e){try{var t="",i=e;do t+=Y1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function fh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function zp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var xw=typeof WeakMap=="function"?WeakMap:Map;function wS(n,e,t){t=Gr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Wf||(Wf=!0,$p=i),zp(n,e)},t}function AS(n,e,t){t=Gr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){zp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zp(n,e),typeof i!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function c0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new xw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Uw.bind(null,n,e,t),e.then(n,n))}function f0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function d0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Gr(-1,1),e.tag=2,As(t,e,1))),t.lanes|=1),n)}var yw=Jr.ReactCurrentOwner,Qn=!1;function On(n,e,t,i){e.child=n===null?tS(e,null,t,i):ja(e,n.child,t,i)}function h0(n,e,t,i,r){t=t.render;var s=e.ref;return Ua(e,r),i=vg(n,e,t,i,s,r),t=xg(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$r(n,e,r)):(Lt&&t&&og(e),e.flags|=1,On(n,e,i,r),e.child)}function p0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!bg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,CS(n,e,s,i,r)):(n=hf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:vu,t(o,i)&&n.ref===e.ref)return $r(n,e,r)}return e.flags|=1,n=bs(s,i),n.ref=e.ref,n.return=e,e.child=n}function CS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(vu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,$r(n,e,r)}return Bp(n,e,t,i,r)}function RS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Ea,pi),pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(Ea,pi),pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(Ea,pi),pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(Ea,pi),pi|=i;return On(n,e,r,t),e.child}function bS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Bp(n,e,t,i,r){var s=ei(t)?Po:Pn.current;return s=Xa(e,s),Ua(e,r),t=vg(n,e,t,i,s,r),i=xg(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$r(n,e,r)):(Lt&&i&&og(e),e.flags|=1,On(n,e,t,r),e.child)}function m0(n,e,t,i,r){if(ei(t)){var s=!0;Nf(e)}else s=!1;if(Ua(e,r),e.stateNode===null)cf(n,e),TS(e,t,i),kp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=ei(t)?Po:Pn.current,u=Xa(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&u0(e,o,i,u),ls=!1;var h=e.memoizedState;o.state=h,zf(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jn.current||ls?(typeof c=="function"&&(Fp(e,t,c,i),l=e.memoizedState),(a=ls||l0(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,iS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:rr(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=ei(t)?Po:Pn.current,l=Xa(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&u0(e,o,i,l),ls=!1,h=e.memoizedState,o.state=h,zf(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||Jn.current||ls?(typeof p=="function"&&(Fp(e,t,p,i),_=e.memoizedState),(u=ls||l0(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Hp(n,e,t,i,s,r)}function Hp(n,e,t,i,r,s){bS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&e0(e,t,!1),$r(n,e,s);i=e.stateNode,yw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ja(e,n.child,null,s),e.child=ja(e,null,a,s)):On(n,e,a,s),e.memoizedState=i.state,r&&e0(e,t,!0),e.child}function PS(n){var e=n.stateNode;e.pendingContext?J_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&J_(n,e.context,!1),pg(n,e.containerInfo)}function g0(n,e,t,i,r){return Ya(),lg(r),e.flags|=256,On(n,e,t,i),e.child}var Vp={dehydrated:null,treeContext:null,retryLane:0};function Gp(n){return{baseLanes:n,cachePool:null,transitions:null}}function LS(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(It,r&1),n===null)return Ip(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Td(o,i,0,null),n=vo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Gp(t),e.memoizedState=Vp,n):Mg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Sw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=bs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=bs(a,s):(s=vo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Gp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Vp,i}return s=n.child,n=s.sibling,i=bs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Mg(n,e){return e=Td({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function dc(n,e,t,i){return i!==null&&lg(i),ja(e,n.child,null,t),n=Mg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Sw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=fh(Error(se(422))),dc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Td({mode:"visible",children:i.children},r,0,null),s=vo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ja(e,n.child,null,o),e.child.memoizedState=Gp(o),e.memoizedState=Vp,s);if(!(e.mode&1))return dc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=fh(s,i,void 0),dc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qr(n,r),cr(i,n,r,-1))}return Rg(),i=fh(Error(se(421))),dc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Nw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yi=ws(r.nextSibling),wi=e,Lt=!0,or=null,n!==null&&(Fi[ki++]=zr,Fi[ki++]=Br,Fi[ki++]=Lo,zr=n.id,Br=n.overflow,Lo=e),e=Mg(e,i.children),e.flags|=4096,e)}function _0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Op(n.return,e,t)}function dh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function DS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(On(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&_0(n,t,e);else if(n.tag===19)_0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Bf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),dh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Bf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}dh(e,!0,t,null,s);break;case"together":dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function $r(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Uo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=bs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=bs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Mw(n,e,t){switch(e.tag){case 3:PS(e),Ya();break;case 5:rS(e);break;case 1:ei(e.type)&&Nf(e);break;case 4:pg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(Ff,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?LS(n,e,t):(wt(It,It.current&1),n=$r(n,e,t),n!==null?n.sibling:null);wt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return DS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,RS(n,e,t)}return $r(n,e,t)}var US,Wp,NS,IS;US=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Wp=function(){};NS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,co(Tr.current);var s=null;switch(t){case"input":r=dp(n,r),i=dp(n,i),s=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),s=[];break;case"textarea":r=mp(n,r),i=mp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Df)}_p(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};IS=function(n,e,t,i){t!==i&&(e.flags|=4)};function yl(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Sn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Ew(n,e,t){var i=e.pendingProps;switch(ag(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return ei(e.type)&&Uf(),Sn(e),null;case 3:return i=e.stateNode,qa(),bt(Jn),bt(Pn),gg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(cc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,or!==null&&(Qp(or),or=null))),Wp(n,e),Sn(e),null;case 5:mg(e);var r=co(Eu.current);if(t=e.type,n!==null&&e.stateNode!=null)NS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Sn(e),null}if(n=co(Tr.current),cc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[vr]=e,i[Su]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Nl.length;r++)Ct(Nl[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":A_(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":R_(i,s),Ct("invalid",i)}_p(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&uc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&uc(i.textContent,a,n),r=["children",""+a]):fu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":tc(i),C_(i,s,!0);break;case"textarea":tc(i),b_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Df)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=uy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[vr]=e,n[Su]=i,US(n,e,!1,!1),e.stateNode=n;e:{switch(o=vp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Nl.length;r++)Ct(Nl[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":A_(n,i),r=dp(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":R_(n,i),r=mp(n,i),Ct("invalid",n);break;default:r=i}_p(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&du(n,l):typeof l=="number"&&du(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Ym(n,s,l,o))}switch(t){case"input":tc(n),C_(n,i,!1);break;case"textarea":tc(n),b_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Is(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ba(n,!!i.multiple,s,!1):i.defaultValue!=null&&ba(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Df)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(n&&e.stateNode!=null)IS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=co(Eu.current),co(Tr.current),cc(e)){if(i=e.stateNode,t=e.memoizedProps,i[vr]=e,(s=i.nodeValue!==t)&&(n=wi,n!==null))switch(n.tag){case 3:uc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&uc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[vr]=e,e.stateNode=i}return Sn(e),null;case 13:if(bt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&yi!==null&&e.mode&1&&!(e.flags&128))Jy(),Ya(),e.flags|=98560,s=!1;else if(s=cc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[vr]=e}else Ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else or!==null&&(Qp(or),or=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?tn===0&&(tn=3):Rg())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return qa(),Wp(n,e),n===null&&xu(e.stateNode.containerInfo),Sn(e),null;case 10:return fg(e.type._context),Sn(e),null;case 17:return ei(e.type)&&Uf(),Sn(e),null;case 19:if(bt(It),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)yl(s,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Bf(n),o!==null){for(e.flags|=128,yl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>Ka&&(e.flags|=128,i=!0,yl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Bf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),yl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Sn(e),null}else 2*Wt()-s.renderingStartTime>Ka&&t!==1073741824&&(e.flags|=128,i=!0,yl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=It.current,wt(It,i?t&1|2:t&1),e):(Sn(e),null);case 22:case 23:return Cg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pi&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function Tw(n,e){switch(ag(e),e.tag){case 1:return ei(e.type)&&Uf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return qa(),bt(Jn),bt(Pn),gg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return mg(e),null;case 13:if(bt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Ya()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(It),null;case 4:return qa(),null;case 10:return fg(e.type._context),null;case 22:case 23:return Cg(),null;case 24:return null;default:return null}}var hc=!1,An=!1,ww=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ma(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function Xp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var v0=!1;function Aw(n,e){if(Rp=bf,n=By(),sg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(bp={focusedElem:n,selectionRange:t},bf=!1,Te=e;Te!==null;)if(e=Te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Te=n;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:rr(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Ht(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}return _=v0,v0=!1,_}function ql(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xp(e,t,s)}r=r.next}while(r!==i)}}function Md(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Yp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function OS(n){var e=n.alternate;e!==null&&(n.alternate=null,OS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[vr],delete e[Su],delete e[Dp],delete e[lw],delete e[uw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function FS(n){return n.tag===5||n.tag===3||n.tag===4}function x0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||FS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Df));else if(i!==4&&(n=n.child,n!==null))for(jp(n,e,t),n=n.sibling;n!==null;)jp(n,e,t),n=n.sibling}function qp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(qp(n,e,t),n=n.sibling;n!==null;)qp(n,e,t),n=n.sibling}var dn=null,sr=!1;function es(n,e,t){for(t=t.child;t!==null;)kS(n,e,t),t=t.sibling}function kS(n,e,t){if(Er&&typeof Er.onCommitFiberUnmount=="function")try{Er.onCommitFiberUnmount(pd,t)}catch{}switch(t.tag){case 5:An||Ma(t,e);case 6:var i=dn,r=sr;dn=null,es(n,e,t),dn=i,sr=r,dn!==null&&(sr?(n=dn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):dn.removeChild(t.stateNode));break;case 18:dn!==null&&(sr?(n=dn,t=t.stateNode,n.nodeType===8?sh(n.parentNode,t):n.nodeType===1&&sh(n,t),gu(n)):sh(dn,t.stateNode));break;case 4:i=dn,r=sr,dn=t.stateNode.containerInfo,sr=!0,es(n,e,t),dn=i,sr=r;break;case 0:case 11:case 14:case 15:if(!An&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xp(t,e,o),r=r.next}while(r!==i)}es(n,e,t);break;case 1:if(!An&&(Ma(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}es(n,e,t);break;case 21:es(n,e,t);break;case 22:t.mode&1?(An=(i=An)||t.memoizedState!==null,es(n,e,t),An=i):es(n,e,t);break;default:es(n,e,t)}}function y0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new ww),e.forEach(function(i){var r=Iw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ji(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dn=a.stateNode,sr=!1;break e;case 3:dn=a.stateNode.containerInfo,sr=!0;break e;case 4:dn=a.stateNode.containerInfo,sr=!0;break e}a=a.return}if(dn===null)throw Error(se(160));kS(s,o,r),dn=null,sr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zS(e,n),e=e.sibling}function zS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ji(e,n),hr(n),i&4){try{ql(3,n,n.return),Md(3,n)}catch(g){Ht(n,n.return,g)}try{ql(5,n,n.return)}catch(g){Ht(n,n.return,g)}}break;case 1:Ji(e,n),hr(n),i&512&&t!==null&&Ma(t,t.return);break;case 5:if(Ji(e,n),hr(n),i&512&&t!==null&&Ma(t,t.return),n.flags&32){var r=n.stateNode;try{du(r,"")}catch(g){Ht(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ay(r,s),vp(a,o);var u=vp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?dy(r,d):c==="dangerouslySetInnerHTML"?cy(r,d):c==="children"?du(r,d):Ym(r,c,d,u)}switch(a){case"input":hp(r,s);break;case"textarea":ly(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ba(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ba(r,!!s.multiple,s.defaultValue,!0):ba(r,!!s.multiple,s.multiple?[]:"",!1))}r[Su]=s}catch(g){Ht(n,n.return,g)}}break;case 6:if(Ji(e,n),hr(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Ht(n,n.return,g)}}break;case 3:if(Ji(e,n),hr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{gu(e.containerInfo)}catch(g){Ht(n,n.return,g)}break;case 4:Ji(e,n),hr(n);break;case 13:Ji(e,n),hr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wg=Wt())),i&4&&y0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(An=(u=An)||c,Ji(e,n),An=u):Ji(e,n),hr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Te=n,c=n.child;c!==null;){for(d=Te=c;Te!==null;){switch(h=Te,p=h.child,h.tag){case 0:case 11:case 14:case 15:ql(4,h,h.return);break;case 1:Ma(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Ht(i,t,g)}}break;case 5:Ma(h,h.return);break;case 22:if(h.memoizedState!==null){M0(d);continue}}p!==null?(p.return=h,Te=p):M0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fy("display",o))}catch(g){Ht(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Ht(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ji(e,n),hr(n),i&4&&y0(n);break;case 21:break;default:Ji(e,n),hr(n)}}function hr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(FS(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(du(r,""),i.flags&=-33);var s=x0(n);qp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=x0(n);jp(n,a,o);break;default:throw Error(se(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Cw(n,e,t){Te=n,BS(n)}function BS(n,e,t){for(var i=(n.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||An;a=hc;var u=An;if(hc=o,(An=l)&&!u)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?E0(r):l!==null?(l.return=o,Te=l):E0(r);for(;s!==null;)Te=s,BS(s),s=s.sibling;Te=r,hc=a,An=u}S0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):S0(n)}}function S0(n){for(;Te!==null;){var e=Te;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:An||Md(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!An)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:rr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&s0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}s0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&gu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}An||e.flags&512&&Yp(e)}catch(h){Ht(e,e.return,h)}}if(e===n){Te=null;break}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}}function M0(n){for(;Te!==null;){var e=Te;if(e===n){Te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Te=t;break}Te=e.return}}function E0(n){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Md(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{Yp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{Yp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var Rw=Math.ceil,Gf=Jr.ReactCurrentDispatcher,Eg=Jr.ReactCurrentOwner,qi=Jr.ReactCurrentBatchConfig,ft=0,un=null,$t=null,gn=0,pi=0,Ea=Gs(0),tn=0,Cu=null,Uo=0,Ed=0,Tg=0,$l=null,qn=null,wg=0,Ka=1/0,Nr=null,Wf=!1,$p=null,Cs=null,pc=!1,ps=null,Xf=0,Kl=0,Kp=null,ff=-1,df=0;function Vn(){return ft&6?Wt():ff!==-1?ff:ff=Wt()}function Rs(n){return n.mode&1?ft&2&&gn!==0?gn&-gn:fw.transition!==null?(df===0&&(df=Ty()),df):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Ly(n.type)),n):1}function cr(n,e,t,i){if(50<Kl)throw Kl=0,Kp=null,Error(se(185));Bu(n,t,i),(!(ft&2)||n!==un)&&(n===un&&(!(ft&2)&&(Ed|=t),tn===4&&fs(n,gn)),ti(n,i),t===1&&ft===0&&!(e.mode&1)&&(Ka=Wt()+500,xd&&Ws()))}function ti(n,e){var t=n.callbackNode;fT(n,e);var i=Rf(n,n===un?gn:0);if(i===0)t!==null&&D_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&D_(t),e===1)n.tag===0?cw(T0.bind(null,n)):Ky(T0.bind(null,n)),ow(function(){!(ft&6)&&Ws()}),t=null;else{switch(wy(i)){case 1:t=Zm;break;case 4:t=My;break;case 16:t=Cf;break;case 536870912:t=Ey;break;default:t=Cf}t=qS(t,HS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function HS(n,e){if(ff=-1,df=0,ft&6)throw Error(se(327));var t=n.callbackNode;if(Na()&&n.callbackNode!==t)return null;var i=Rf(n,n===un?gn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Yf(n,i);else{e=i;var r=ft;ft|=2;var s=GS();(un!==n||gn!==e)&&(Nr=null,Ka=Wt()+500,_o(n,e));do try{Lw();break}catch(a){VS(n,a)}while(!0);cg(),Gf.current=s,ft=r,$t!==null?e=0:(un=null,gn=0,e=tn)}if(e!==0){if(e===2&&(r=Ep(n),r!==0&&(i=r,e=Zp(n,r))),e===1)throw t=Cu,_o(n,0),fs(n,i),ti(n,Wt()),t;if(e===6)fs(n,i);else{if(r=n.current.alternate,!(i&30)&&!bw(r)&&(e=Yf(n,i),e===2&&(s=Ep(n),s!==0&&(i=s,e=Zp(n,s))),e===1))throw t=Cu,_o(n,0),fs(n,i),ti(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:to(n,qn,Nr);break;case 3:if(fs(n,i),(i&130023424)===i&&(e=wg+500-Wt(),10<e)){if(Rf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Lp(to.bind(null,n,qn,Nr),e);break}to(n,qn,Nr);break;case 4:if(fs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ur(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Rw(i/1960))-i,10<i){n.timeoutHandle=Lp(to.bind(null,n,qn,Nr),i);break}to(n,qn,Nr);break;case 5:to(n,qn,Nr);break;default:throw Error(se(329))}}}return ti(n,Wt()),n.callbackNode===t?HS.bind(null,n):null}function Zp(n,e){var t=$l;return n.current.memoizedState.isDehydrated&&(_o(n,e).flags|=256),n=Yf(n,e),n!==2&&(e=qn,qn=t,e!==null&&Qp(e)),n}function Qp(n){qn===null?qn=n:qn.push.apply(qn,n)}function bw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!dr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fs(n,e){for(e&=~Tg,e&=~Ed,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ur(e),i=1<<t;n[t]=-1,e&=~i}}function T0(n){if(ft&6)throw Error(se(327));Na();var e=Rf(n,0);if(!(e&1))return ti(n,Wt()),null;var t=Yf(n,e);if(n.tag!==0&&t===2){var i=Ep(n);i!==0&&(e=i,t=Zp(n,i))}if(t===1)throw t=Cu,_o(n,0),fs(n,e),ti(n,Wt()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,to(n,qn,Nr),ti(n,Wt()),null}function Ag(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Ka=Wt()+500,xd&&Ws())}}function No(n){ps!==null&&ps.tag===0&&!(ft&6)&&Na();var e=ft;ft|=1;var t=qi.transition,i=vt;try{if(qi.transition=null,vt=1,n)return n()}finally{vt=i,qi.transition=t,ft=e,!(ft&6)&&Ws()}}function Cg(){pi=Ea.current,bt(Ea)}function _o(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,sw(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(ag(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uf();break;case 3:qa(),bt(Jn),bt(Pn),gg();break;case 5:mg(i);break;case 4:qa();break;case 13:bt(It);break;case 19:bt(It);break;case 10:fg(i.type._context);break;case 22:case 23:Cg()}t=t.return}if(un=n,$t=n=bs(n.current,null),gn=pi=e,tn=0,Cu=null,Tg=Ed=Uo=0,qn=$l=null,uo!==null){for(e=0;e<uo.length;e++)if(t=uo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}uo=null}return n}function VS(n,e){do{var t=$t;try{if(cg(),lf.current=Vf,Hf){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hf=!1}if(Do=0,ln=Jt=kt=null,jl=!1,Tu=0,Eg.current=null,t===null||t.return===null){tn=1,Cu=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=gn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=f0(o);if(p!==null){p.flags&=-257,d0(p,o,a,s,e),p.mode&1&&c0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){c0(s,u,e),Rg();break e}l=Error(se(426))}}else if(Lt&&a.mode&1){var m=f0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),d0(m,o,a,s,e),lg($a(l,a));break e}}s=l=$a(l,a),tn!==4&&(tn=2),$l===null?$l=[s]:$l.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=wS(s,l,e);r0(s,f);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cs===null||!Cs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=AS(s,a,e);r0(s,y);break e}}s=s.return}while(s!==null)}XS(t)}catch(T){e=T,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function GS(){var n=Gf.current;return Gf.current=Vf,n===null?Vf:n}function Rg(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||!(Uo&268435455)&&!(Ed&268435455)||fs(un,gn)}function Yf(n,e){var t=ft;ft|=2;var i=GS();(un!==n||gn!==e)&&(Nr=null,_o(n,e));do try{Pw();break}catch(r){VS(n,r)}while(!0);if(cg(),ft=t,Gf.current=i,$t!==null)throw Error(se(261));return un=null,gn=0,tn}function Pw(){for(;$t!==null;)WS($t)}function Lw(){for(;$t!==null&&!nT();)WS($t)}function WS(n){var e=jS(n.alternate,n,pi);n.memoizedProps=n.pendingProps,e===null?XS(n):$t=e,Eg.current=null}function XS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Tw(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}else if(t=Ew(t,e,pi),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);tn===0&&(tn=5)}function to(n,e,t){var i=vt,r=qi.transition;try{qi.transition=null,vt=1,Dw(n,e,t,i)}finally{qi.transition=r,vt=i}return null}function Dw(n,e,t,i){do Na();while(ps!==null);if(ft&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(dT(n,s),n===un&&($t=un=null,gn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||pc||(pc=!0,qS(Cf,function(){return Na(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=qi.transition,qi.transition=null;var o=vt;vt=1;var a=ft;ft|=4,Eg.current=null,Aw(n,t),zS(t,n),QT(bp),bf=!!Rp,bp=Rp=null,n.current=t,Cw(t),iT(),ft=a,vt=o,qi.transition=s}else n.current=t;if(pc&&(pc=!1,ps=n,Xf=r),s=n.pendingLanes,s===0&&(Cs=null),oT(t.stateNode),ti(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Wf)throw Wf=!1,n=$p,$p=null,n;return Xf&1&&n.tag!==0&&Na(),s=n.pendingLanes,s&1?n===Kp?Kl++:(Kl=0,Kp=n):Kl=0,Ws(),null}function Na(){if(ps!==null){var n=wy(Xf),e=qi.transition,t=vt;try{if(qi.transition=null,vt=16>n?16:n,ps===null)var i=!1;else{if(n=ps,ps=null,Xf=0,ft&6)throw Error(se(331));var r=ft;for(ft|=4,Te=n.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:ql(8,c,s)}var d=c.child;if(d!==null)d.return=c,Te=d;else for(;Te!==null;){c=Te;var h=c.sibling,p=c.return;if(OS(c),c===u){Te=null;break}if(h!==null){h.return=p,Te=h;break}Te=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ql(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Te=f;break e}Te=s.return}}var v=n.current;for(Te=v;Te!==null;){o=Te;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Te=x;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Md(9,a)}}catch(T){Ht(a,a.return,T)}if(a===o){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(ft=r,Ws(),Er&&typeof Er.onPostCommitFiberRoot=="function")try{Er.onPostCommitFiberRoot(pd,n)}catch{}i=!0}return i}finally{vt=t,qi.transition=e}}return!1}function w0(n,e,t){e=$a(t,e),e=wS(n,e,1),n=As(n,e,1),e=Vn(),n!==null&&(Bu(n,1,e),ti(n,e))}function Ht(n,e,t){if(n.tag===3)w0(n,n,t);else for(;e!==null;){if(e.tag===3){w0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cs===null||!Cs.has(i))){n=$a(t,n),n=AS(e,n,1),e=As(e,n,1),n=Vn(),e!==null&&(Bu(e,1,n),ti(e,n));break}}e=e.return}}function Uw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,un===n&&(gn&t)===t&&(tn===4||tn===3&&(gn&130023424)===gn&&500>Wt()-wg?_o(n,0):Tg|=t),ti(n,e)}function YS(n,e){e===0&&(n.mode&1?(e=rc,rc<<=1,!(rc&130023424)&&(rc=4194304)):e=1);var t=Vn();n=qr(n,e),n!==null&&(Bu(n,e,t),ti(n,t))}function Nw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),YS(n,t)}function Iw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),YS(n,t)}var jS;jS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,Mw(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Lt&&e.flags&1048576&&Zy(e,Of,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cf(n,e),n=e.pendingProps;var r=Xa(e,Pn.current);Ua(e,t),r=vg(null,e,i,n,r,t);var s=xg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,Nf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hg(e),r.updater=Sd,e.stateNode=r,r._reactInternals=e,kp(e,i,n,t),e=Hp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&og(e),On(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(cf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fw(i),n=rr(i,n),r){case 0:e=Bp(null,e,i,n,t);break e;case 1:e=m0(null,e,i,n,t);break e;case 11:e=h0(null,e,i,n,t);break e;case 14:e=p0(null,e,i,rr(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),Bp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),m0(n,e,i,r,t);case 3:e:{if(PS(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iS(n,e),zf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$a(Error(se(423)),e),e=g0(n,e,i,t,r);break e}else if(i!==r){r=$a(Error(se(424)),e),e=g0(n,e,i,t,r);break e}else for(yi=ws(e.stateNode.containerInfo.firstChild),wi=e,Lt=!0,or=null,t=tS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ya(),i===r){e=$r(n,e,t);break e}On(n,e,i,t)}e=e.child}return e;case 5:return rS(e),n===null&&Ip(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Pp(i,r)?o=null:s!==null&&Pp(i,s)&&(e.flags|=32),bS(n,e),On(n,e,o,t),e.child;case 6:return n===null&&Ip(e),null;case 13:return LS(n,e,t);case 4:return pg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ja(e,null,i,t):On(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),h0(n,e,i,r,t);case 7:return On(n,e,e.pendingProps,t),e.child;case 8:return On(n,e,e.pendingProps.children,t),e.child;case 12:return On(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(Ff,i._currentValue),i._currentValue=o,s!==null)if(dr(s.value,o)){if(s.children===r.children&&!Jn.current){e=$r(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Op(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Op(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}On(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ua(e,t),r=Zi(r),i=i(r),e.flags|=1,On(n,e,i,t),e.child;case 14:return i=e.type,r=rr(i,e.pendingProps),r=rr(i.type,r),p0(n,e,i,r,t);case 15:return CS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),cf(n,e),e.tag=1,ei(i)?(n=!0,Nf(e)):n=!1,Ua(e,t),TS(e,i,r),kp(e,i,r,t),Hp(null,e,i,!0,n,t);case 19:return DS(n,e,t);case 22:return RS(n,e,t)}throw Error(se(156,e.tag))};function qS(n,e){return Sy(n,e)}function Ow(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(n,e,t,i){return new Ow(n,e,t,i)}function bg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fw(n){if(typeof n=="function")return bg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qm)return 11;if(n===$m)return 14}return 2}function bs(n,e){var t=n.alternate;return t===null?(t=Xi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function hf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")bg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ha:return vo(t.children,r,s,e);case jm:o=8,r|=8;break;case lp:return n=Xi(12,t,e,r|2),n.elementType=lp,n.lanes=s,n;case up:return n=Xi(13,t,e,r),n.elementType=up,n.lanes=s,n;case cp:return n=Xi(19,t,e,r),n.elementType=cp,n.lanes=s,n;case ry:return Td(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ny:o=10;break e;case iy:o=9;break e;case qm:o=11;break e;case $m:o=14;break e;case as:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Xi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function vo(n,e,t,i){return n=Xi(7,n,i,e),n.lanes=t,n}function Td(n,e,t,i){return n=Xi(22,n,i,e),n.elementType=ry,n.lanes=t,n.stateNode={isHidden:!1},n}function hh(n,e,t){return n=Xi(6,n,null,e),n.lanes=t,n}function ph(n,e,t){return e=Xi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function kw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qd(0),this.expirationTimes=qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pg(n,e,t,i,r,s,o,a,l){return n=new kw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hg(s),n}function zw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:da,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function $S(n){if(!n)return Os;n=n._reactInternals;e:{if(Bo(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(ei(t))return $y(n,t,e)}return e}function KS(n,e,t,i,r,s,o,a,l){return n=Pg(t,i,!0,n,r,s,o,a,l),n.context=$S(null),t=n.current,i=Vn(),r=Rs(t),s=Gr(i,r),s.callback=e??null,As(t,s,r),n.current.lanes=r,Bu(n,r,i),ti(n,i),n}function wd(n,e,t,i){var r=e.current,s=Vn(),o=Rs(r);return t=$S(t),e.context===null?e.context=t:e.pendingContext=t,e=Gr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=As(r,e,o),n!==null&&(cr(n,r,o,s),af(n,r,o)),o}function jf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function A0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lg(n,e){A0(n,e),(n=n.alternate)&&A0(n,e)}function Bw(){return null}var ZS=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dg(n){this._internalRoot=n}Ad.prototype.render=Dg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));wd(n,e,null,null)};Ad.prototype.unmount=Dg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;No(function(){wd(null,n,null,null)}),e[jr]=null}};function Ad(n){this._internalRoot=n}Ad.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ry();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cs.length&&e!==0&&e<cs[t].priority;t++);cs.splice(t,0,n),t===0&&Py(n)}};function Ug(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function C0(){}function Hw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=jf(o);s.call(u)}}var o=KS(e,i,n,0,null,!1,!1,"",C0);return n._reactRootContainer=o,n[jr]=o.current,xu(n.nodeType===8?n.parentNode:n),No(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=jf(l);a.call(u)}}var l=Pg(n,0,!1,null,null,!1,!1,"",C0);return n._reactRootContainer=l,n[jr]=l.current,xu(n.nodeType===8?n.parentNode:n),No(function(){wd(e,l,t,i)}),l}function Rd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=jf(o);a.call(l)}}wd(e,o,n,r)}else o=Hw(t,e,n,r,i);return jf(o)}Ay=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ul(e.pendingLanes);t!==0&&(Qm(e,t|1),ti(e,Wt()),!(ft&6)&&(Ka=Wt()+500,Ws()))}break;case 13:No(function(){var i=qr(n,1);if(i!==null){var r=Vn();cr(i,n,1,r)}}),Lg(n,1)}};Jm=function(n){if(n.tag===13){var e=qr(n,134217728);if(e!==null){var t=Vn();cr(e,n,134217728,t)}Lg(n,134217728)}};Cy=function(n){if(n.tag===13){var e=Rs(n),t=qr(n,e);if(t!==null){var i=Vn();cr(t,n,e,i)}Lg(n,e)}};Ry=function(){return vt};by=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};yp=function(n,e,t){switch(e){case"input":if(hp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=vd(i);if(!r)throw Error(se(90));oy(i),hp(i,r)}}}break;case"textarea":ly(n,t);break;case"select":e=t.value,e!=null&&ba(n,!!t.multiple,e,!1)}};my=Ag;gy=No;var Vw={usingClientEntryPoint:!1,Events:[Vu,_a,vd,hy,py,Ag]},Sl={findFiberByHostInstance:lo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gw={bundleType:Sl.bundleType,version:Sl.version,rendererPackageName:Sl.rendererPackageName,rendererConfig:Sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xy(n),n===null?null:n.stateNode},findFiberByHostInstance:Sl.findFiberByHostInstance||Bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{pd=mc.inject(Gw),Er=mc}catch{}}Di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vw;Di.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ug(e))throw Error(se(200));return zw(n,e,null,t)};Di.createRoot=function(n,e){if(!Ug(n))throw Error(se(299));var t=!1,i="",r=ZS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pg(n,1,!1,null,null,t,!1,i,r),n[jr]=e.current,xu(n.nodeType===8?n.parentNode:n),new Dg(e)};Di.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=xy(e),n=n===null?null:n.stateNode,n};Di.flushSync=function(n){return No(n)};Di.hydrate=function(n,e,t){if(!Cd(e))throw Error(se(200));return Rd(null,n,e,!0,t)};Di.hydrateRoot=function(n,e,t){if(!Ug(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ZS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=KS(e,null,n,1,t??null,r,!1,s,o),n[jr]=e.current,xu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ad(e)};Di.render=function(n,e,t){if(!Cd(e))throw Error(se(200));return Rd(null,n,e,!1,t)};Di.unmountComponentAtNode=function(n){if(!Cd(n))throw Error(se(40));return n._reactRootContainer?(No(function(){Rd(null,null,n,!1,function(){n._reactRootContainer=null,n[jr]=null})}),!0):!1};Di.unstable_batchedUpdates=Ag;Di.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Cd(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return Rd(n,e,t,!1,i)};Di.version="18.3.1-next-f1338f8080-20240426";function QS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(QS)}catch(n){console.error(n)}}QS(),Qx.exports=Di;var Ww=Qx.exports,R0=Ww;op.createRoot=R0.createRoot,op.hydrateRoot=R0.hydrateRoot;function Ir(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function JS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ru={duration:.5,overwrite:!1,delay:0},Ng,_n,Dt,Yi=1e8,Mt=1/Yi,Jp=Math.PI*2,Xw=Jp/4,Yw=0,eM=Math.sqrt,jw=Math.cos,qw=Math.sin,fn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Kr=function(e){return typeof e=="number"},Ig=function(e){return typeof e>"u"},Cr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},Og=function(){return typeof window<"u"},gc=function(e){return Vt(e)||fn(e)},tM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,$w=/random\([^)]+\)/g,Kw=/,\s*/g,b0=/(?:-?\.?\d|\.)+/gi,nM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,iM=/[+-]=-?[.\d]+/,Zw=/[^,'"\[\]\s]+/gi,Qw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,mr,em,Fg,bi={},qf={},rM,sM=function(e){return(qf=Za(e,bi))&&ui},kg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},bu=function(e,t){return!t&&console.warn(e)},oM=function(e,t){return e&&(bi[e]=t)&&qf&&(qf[e]=t)||bi},Pu=function(){return 0},Jw={suppressEvents:!0,isStart:!0,kill:!1},pf={suppressEvents:!0,kill:!1},eA={suppressEvents:!0},zg={},Ps=[],tm={},aM,gi={},gh={},P0=30,mf=[],Bg="",Hg=function(e){var t=e[0],i,r;if(Cr(t)||Vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=mf.length;r--&&!mf[r].targetTest(t););i=mf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new bM(e[r],i)))||e.splice(r,1);return e},xo=function(e){return e._gsap||Hg(ji(e))[0]._gsap},lM=function(e,t,i){return(i=e[t])&&Vt(i)?e[t]():Ig(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Ia=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},tA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},$f=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(tm={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Vg=function(e){return!!(e._initted||e._startAt||e.add)},uM=function(e,t,i,r){Ps.length&&!_n&&$f(),e.render(t,i,!!(_n&&t<0&&Vg(e))),Ps.length&&!_n&&$f()},cM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zw).length<2?t:fn(e)?e.trim():e},fM=function(e){return e},Pi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},nA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Za=function(e,t){for(var i in t)e[i]=t[i];return e},L0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Cr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Kf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Zl=function(e){var t=e.parent||Ot,i=e.keyframes?nA(bn(e.keyframes)):Pi;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},iA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},dM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},bd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Fs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},rA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nm=function(e,t,i,r){return e._startAt&&(_n?e._startAt.revert(pf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},sA=function n(e){return!e||e._ts&&n(e.parent)},D0=function(e){return e._repeat?Qa(e._tTime,e=e.duration()+e._rDelay)*e:0},Qa=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},Zf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pd=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Ld=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pd(e),i._dirty||yo(i,e)),e},hM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Zf(e.rawTime(),t),(!t._dur||Wu(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),yo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},xr=function(e,t,i,r){return t.parent&&Fs(t),t._start=Nt((Kr(i)?i:i||e!==Ot?Oi(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dM(e,t,"_first","_last",e._sort?"_start":0),im(t)||(e._recent=t),r||hM(e,t),e._ts<0&&Ld(e,e._tTime),e},pM=function(e,t){return(bi.ScrollTrigger||kg("scrollTrigger",t))&&bi.ScrollTrigger.create(t,e)},mM=function(e,t,i,r,s){if(Wg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!_n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&aM!==vi.frame)return Ps.push(e),e._lazy=[s,r],1},oA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},im=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},aA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&oA(e)&&!(!e._initted&&im(e))||(e._ts<0||e._dp._ts<0)&&!im(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Wu(0,e._tDur,t),c=Qa(l,a),e._yoyo&&c&1&&(o=1-o),c!==Qa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||_n||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&mM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&nm(e,t,i,!0),e._onUpdate&&!i&&Si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fs(e,1),!i&&!_n&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ja=function(e,t,i,r){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ld(e,e._tTime=e._tDur*a),e.parent&&Pd(e),i||yo(e.parent,e),e},U0=function(e){return e instanceof Zn?yo(e):Ja(e,e._dur)},uA={_start:0,endTime:Pu,totalDuration:Pu},Oi=function n(e,t,i){var r=e.labels,s=e._recent||uA,o=e.duration()>=Yi?s.endTime(!1):e._dur,a,l,u;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(bn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ql=function(e,t,i){var r=Kr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},Xs=function(e,t){return e||e===0?t(e):t},Wu=function(e,t,i){return i<e?e:i>t?t:i},Cn=function(e,t){return!fn(e)||!(t=Qw.exec(e))?"":t[1]},cA=function(e,t,i){return Xs(i,function(r){return Wu(e,t,r)})},rm=[].slice,gM=function(e,t){return e&&Cr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Cr(e[0]))&&!e.nodeType&&e!==mr},fA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return fn(r)&&!t||gM(r,1)?(s=i).push.apply(s,ji(r)):i.push(r)})||i},ji=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):fn(e)&&!i&&(em||!el())?rm.call((t||Fg).querySelectorAll(e),0):bn(e)?fA(e,i):gM(e)?rm.call(e,0):e?[e]:[]},sm=function(e){return e=ji(e)[0]||bu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ji(t,i.querySelectorAll?i:i===e?bu("Invalid scope")||Fg.createElement("div"):e)}},_M=function(e){return e.sort(function(){return .5-Math.random()})},vM=function(e){if(Vt(e))return e;var t=Cr(e)?e:{each:e},i=So(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return fn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,_){var g=(_||t).length,m=o[g],f,v,x,y,T,w,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Yi])[1],!S){for(M=-Yi;M<(M=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],f=l?Math.min(S,g)*c-.5:r%S,v=S===Yi?0:l?g*d/S-.5:r/S|0,M=0,P=Yi,w=0;w<g;w++)x=w%S-f,y=v-(w/S|0),m[w]=T=u?Math.abs(u==="y"?y:x):eM(x*x+y*y),T>M&&(M=T),T<P&&(P=T);r==="random"&&_M(m),m.max=M-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Cn(t.amount||t.each)||0,i=i&&g<0?TA(i):i}return g=(m[h]-m.min)/m.max||0,Nt(m.b+(i?i(g):g)*m.v)+m.u}},om=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Kr(i)?0:Cn(i))}},xM=function(e,t){var i=bn(e),r,s;return!i&&Cr(e)&&(r=i=e.radius||Yi,e.values?(e=ji(e.values),(s=!Kr(e[0]))&&(r*=r)):e=om(e.increment)),Xs(t,i?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Yi,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Kr(o)?c:c+Cn(o)}:om(e))},yM=function(e,t,i,r){return Xs(bn(e)?!t:i===!0?!!(i=0):!r,function(){return bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},dA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},hA=function(e,t){return function(i){return e(parseFloat(i))+(t||Cn(i))}},pA=function(e,t,i){return MM(e,t,0,1,i)},SM=function(e,t,i){return Xs(i,function(r){return e[~~t(r)]})},mA=function n(e,t,i){var r=t-e;return bn(e)?SM(e,n(0,e.length),t):Xs(i,function(s){return(r+(s-e)%r)%r+e})},gA=function n(e,t,i){var r=t-e,s=r*2;return bn(e)?SM(e,n(0,e.length-1),t):Xs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Lu=function(e){return e.replace($w,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Kw);return yM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},MM=function(e,t,i,r,s){var o=t-e,a=r-i;return Xs(s,function(l){return i+((l-e)/o*a||0)})},_A=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=fn(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return c[g](_-g)},i=t}else r||(e=Za(bn(e)?[]:{},e));if(!c){for(l in t)Gg.call(a,e,l,"get",t[l]);s=function(_){return jg(_,a)||(o?e.p:e)}}}return Xs(i,s)},N0=function(e,t,i){var r=e.labels,s=Yi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ps.length&&$f(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},Il=function(e){return Fs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_n),e.progress()<1&&Si(e,"onInterrupt"),e},wa,EM=[],TM=function(e){if(e)if(e=!e.name&&e.default||e,Og()||e.headless){var t=e.name,i=Vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Pu,render:jg,add:Gg,kill:NA,modifier:UA,rawVars:0},o={targetTest:0,get:0,getSetter:Yg,aliases:{},register:0};if(el(),e!==r){if(gi[t])return;Pi(r,Pi(Kf(e,s),o)),Za(r.prototype,Za(s,Kf(e,o))),gi[r.prop=t]=r,e.targetTest&&(mf.push(r),zg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}oM(t,r),e.register&&e.register(ui,r,ri)}else EM.push(e)},St=255,Ol={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},_h=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},wM=function(e,t,i){var r=e?Kr(e)?[e>>16,e>>8&St,e&St]:0:Ol.black,s,o,a,l,u,c,d,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ol[e])r=Ol[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(b0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=_h(l+1/3,s,o),r[1]=_h(l,s,o),r[2]=_h(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(nM),i&&r.length<4&&(r[3]=1),r}else r=e.match(b0)||Ol.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},AM=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var o=s.match(Ta)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},I0=function(e,t,i){var r="",s=(e+r).match(Ls),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=wM(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=AM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ls,"1").split(Ta),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ls),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ls=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ol)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),vA=/hsl[a]?\(/,CM=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=vA.test(t),e[1]=I0(e[1],i),e[0]=I0(e[0],i,AM(e[1])),!0},Du,vi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,_=function g(m){var f=n()-r,v=m===!0,x,y,T,w;if((f>e||f<0)&&(i+=f-t),r+=f,T=r-i,x=T-o,(x>0||v)&&(w=++d.frame,h=T-d.time*1e3,d.time=T=T/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](T,h,w,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){rM&&(!em&&Og()&&(mr=em=window,Fg=mr.document||{},bi.gsap=ui,(mr.gsapVersions||(mr.gsapVersions=[])).push(ui.version),sM(qf||mr.GreenSockGlobals||!mr.gsap&&mr||{}),EM.forEach(TM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Du=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Du=0,u=Pu},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,v){var x=f?function(y,T,w,M){m(y,T,w,M),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),el(),x},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),el=function(){return!Du&&vi.wake()},ut={},xA=/^[\d.\-M][\d.\-,\s]/,yA=/["']/g,SA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(yA,"").trim():+u,r=l.substr(a+1).trim();return t},MA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},EA=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[SA(t[1])]:MA(e).split(",").map(cM)):ut._CE&&xA.test(e)?ut._CE("",e):i},TA=function(e){return function(t){return 1-e(1-t)}},So=function(e,t){return e&&(Vt(e)?e:ut[e]||EA(e))||t},Ho=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){ut[a]=bi[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},RM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Jp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*qw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:RM(a);return s=Jp/s,l.config=function(u,c){return n(e,u,c)},l},xh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:RM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ho(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Ho("Elastic",vh("in"),vh("out"),vh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ho("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ho("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ho("Circ",function(n){return-(eM(1-n*n)-1)});Ho("Sine",function(n){return n===1?1:-jw(n*Xw)+1});Ho("Back",xh("in"),xh("out"),xh());ut.SteppedEase=ut.steps=bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Wu(0,o,a)|0)+s)*i}}};Ru.ease=ut["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Bg+=n+","+n+"Params,"});var bM=function(e,t){this.id=Yw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:lM,this.set=t?t.getSetter:Yg},Uu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Du||vi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(el(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ld(this,i),!s._dp||s.parent||hM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),uM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+D0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+D0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Qa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Zf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Wu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Pd(this),rA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(el(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=eA);var r=_n;return _n=i,Vg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),_n=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,U0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,U0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Oi(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Vt(i)?i:fM,l=function(){var c=r.then;r.then=null,s&&s(),Vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Il(this)},n}();Pi(Uu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Zn=function(n){JS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),Ot&&xr(i.parent||Ot,Ir(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&pM(Ir(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ql(0,arguments,this),this},t.from=function(r,s,o){return Ql(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ql(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Zl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,Oi(this,o),1),this},t.call=function(r,s,o){return xr(this,qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new qt(r,o,Oi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Zl(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Zl(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Nt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,g,m,f,v,x,y,T,w,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,f=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Nt(c%m),c===l?(g=this._repeat,h=u):(T=Nt(c/m),g=~~T,g&&g===T&&(h=u,g--),h>u&&(h=u)),T=Qa(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),w&&g&1&&(h=u-h,M=1),g!==T&&!this._lock){var P=w&&T&1,S=P===(w&&g&1);if(g<T&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Nt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=lA(this,Nt(a),Nt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(Si(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){v=0,_&&(c+=this._zTime=-Mt);break}}p=_}else{p=this._last;for(var E=r<0?r:h;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||_n&&Vg(p)),h!==this._time||!this._ts&&!f){v=0,_&&(c+=this._zTime=E?-Mt:Mt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-Mt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Pd(this),this.render(r,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Fs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Si(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Kr(s)||(s=Oi(this,s,r)),!(r instanceof Uu)){if(bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(fn(r))return this.addLabel(r,s);if(Vt(r))r=qt.delayedCall(0,r);else return this}return this!==r?xr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Yi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return fn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&bd(this,r),r===this._recent&&(this._recent=this._last),yo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(vi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Oi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=qt.delayedCall(0,s||Pu,o);return a.data="isPause",this._hasPause=1,xr(this,a,Oi(this,r))},t.removePause=function(r){var s=this._first;for(r=Oi(this,r);s;)s._start===r&&s.data==="isPause"&&Fs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ms!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ji(r),l=this._first,u=Kr(s),c;l;)l instanceof qt?tA(l._targets,a)&&(u?(!ms||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Oi(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,_=qt.to(o,Pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&Ja(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Pi({startAt:{time:Oi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),N0(this,Oi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),N0(this,Oi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Nt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return yo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),yo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Yi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Nt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ja(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(uM(Ot,Zf(r,Ot)),aM=vi.frame),vi.frame>=P0){P0+=Ai.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Ai.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e}(Uu);Pi(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wA=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,IM,null,s),u=0,c=0,d,h,p,_,g,m,f,v;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Lu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(mh)||[];d=mh.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Ia(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=mh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(iM.test(r)||f)&&(l.e=0),this._pt=l,l},Gg=function(e,t,i,r,s,o,a,l,u,c){Vt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:Vt(d)?u?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Vt(d)?u?PA:UM:Xg,_;if(fn(r)&&(~r.indexOf("random(")&&(r=Lu(r)),r.charAt(1)==="="&&(_=Ia(h,r)+(Cn(h)||0),(_||_===0)&&(r=_))),!c||h!==r||am)return!isNaN(h*r)&&r!==""?(_=new ri(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?DA:NM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&kg(t,r),wA.call(this,e,t,h,r,p,l||Ai.stringFilter,u))},AA=function(e,t,i,r,s){if(Vt(e)&&(e=Jl(e,s,t,i,r)),!Cr(e)||e.style&&e.nodeType||bn(e)||tM(e))return fn(e)?Jl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Jl(e[a],s,t,i,r);return o},PM=function(e,t,i,r,s,o){var a,l,u,c;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:AA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==wa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ms,am,Wg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:m,x=e._overwrite==="auto"&&!Ng,y=e.timeline,T=r.easeReverse||d,w,M,P,S,E,F,N,Z,L,I,V,B,U;if(y&&(!h||!s)&&(s="none"),e._ease=So(s,Ru.ease),e._rEase=T&&(So(T)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||h&&!r.stagger){if(Z=m[0]?xo(m[0]).harness:0,B=Z&&r[Z.prop],w=Kf(r,zg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?pf:Jw),g._lazy=0),o){if(Fs(e._startAt=qt.set(m,Pi({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n||!a&&!p)&&e._startAt.revert(pf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),P=Pi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ni(l),immediateRender:a,stagger:0,parent:f},w),B&&(P[Z.prop]=B),Fs(e._startAt=qt.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n?e._startAt.revert(pf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ni(l)||l&&!_,M=0;M<m.length;M++){if(E=m[M],N=E._gsap||Hg(m)[M]._gsap,e._ptLookup[M]=I={},tm[N.id]&&Ps.length&&$f(),V=v===m?M:v.indexOf(E),Z&&(L=new Z).init(E,B||w,e,V,v)!==!1&&(e._pt=S=new ri(e._pt,E,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(O){I[O]=S}),L.priority&&(F=1)),!Z||B)for(P in w)gi[P]&&(L=PM(P,w,e,V,E,v))?L.priority&&(F=1):I[P]=S=Gg.call(e,E,P,"get",w[P],V,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(E,e._op[M]),x&&e._pt&&(ms=e,Ot.killTweensOf(E,I,e.globalTime(t)),U=!e.parent,ms=0),e._pt&&l&&(tm[N.id]=1)}F&&OM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!U,h&&t<=0&&y.render(Yi,!0,!0)},CA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return am=1,e.vars[t]="+=0",Wg(e,a),am=0,l?bu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Gt(i)+Cn(d.e)),d.b&&(d.b=c.s+Cn(d.b))},RA=function(e,t){var i=e[0]?xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Za({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},bA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(bn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Jl=function(e,t,i,r,s){return Vt(e)?e.call(t,i,r,s):fn(e)&&~e.indexOf("random(")?Lu(e):e},LM=Bg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",DM={};ii(LM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return DM[n]=1});var qt=function(n){JS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Zl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=r.parent||Ot,v=(bn(i)||tM(i)?Kr(i[0]):"length"in r)?[i]:ji(i),x,y,T,w,M,P,S,E;if(a._targets=v.length?Hg(v):bu("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||gc(u)||gc(c)){r=a.vars;var F=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Zn({data:"nested",defaults:g||{},targets:f&&f.data==="nested"?f.vars.targets:v}),x.kill(),x.parent=x._dp=Ir(a),x._start=0,h||gc(u)||gc(c)){if(w=v.length,S=h&&vM(h),Cr(h))for(M in h)~LM.indexOf(M)&&(E||(E={}),E[M]=h[M]);for(y=0;y<w;y++)T=Kf(r,DM),T.stagger=0,F&&(T.easeReverse=F),E&&Za(T,E),P=v[y],T.duration=+Jl(u,Ir(a),y,P,v),T.delay=(+Jl(c,Ir(a),y,P,v)||0)-a._delay,!h&&w===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(P,T,S?S(y,P,v):0),x._ease=ut.none;x.duration()?u=c=0:a.timeline=0}else if(_){Zl(Pi(x.vars.defaults,{ease:"none"})),x._ease=So(_.ease||r.ease||"none");var N=0,Z,L,I;if(bn(_))_.forEach(function(V){return x.to(v,V,">")}),x.duration();else{T={};for(M in _)M==="ease"||M==="easeEach"||bA(M,_[M],T,_.easeEach);for(M in T)for(Z=T[M].sort(function(V,B){return V.t-B.t}),N=0,y=0;y<Z.length;y++)L=Z[y],I={ease:L.e,duration:(L.t-(y?Z[y-1].t:0))/100*u},I[M]=L.v,x.to(v,I,N),N+=I.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!Ng&&(ms=Ir(a),Ot.killTweensOf(v),ms=0),xr(f,Ir(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===Nt(f._time)&&ni(d)&&sA(Ir(a))&&f.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),m&&pM(Ir(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Mt&&!c?l:r<Mt?0:r,h,p,_,g,m,f,v,x;if(!u)aA(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=Nt(d%g),d===l?(_=this._repeat,h=u):(m=Nt(d/g),_=~~m,_&&_===m?(h=u,_--):h>u&&(h=u)),f=this._yoyo&&_&1,f&&(h=u-h),m=Qa(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Nt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(mM(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var T=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Si(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&nm(this,r,s,o),Si(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&nm(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fs(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Du||vi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wg(this,u),c=this._ease(u/this._dur),CA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Ld(this,0),this.parent||dM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Il(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ms&&ms.vars.overwrite!==!0)._first||Il(this),this.parent&&o!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ji(r):a,u=this._ptLookup,c=this._pt,d,h,p,_,g,m,f;if((!s||s==="all")&&iA(a,l))return s==="all"&&(this._pt=0),Il(this);for(d=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},ii(s,function(v){return g[v]=1}),s=g),s=RA(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,_=h,p={}):(p=d[f]=d[f]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&bd(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Il(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ql(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ql(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Uu);Pi(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Zn,t=rm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Xg=function(e,t,i){return e[t]=i},UM=function(e,t,i){return e[t](i)},PA=function(e,t,i,r){return e[t](r.fp,i)},LA=function(e,t,i){return e.setAttribute(t,i)},Yg=function(e,t){return Vt(e[t])?UM:Ig(e[t])&&e.setAttribute?LA:Xg},NM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},DA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},IM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},jg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},UA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},NA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?bd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},IA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},OM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||NM,this.d=l||this,this.set=u||Xg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=IA,this.m=i,this.mt=s,this.tween=r},n}();ii(Bg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return zg[n]=1});bi.TweenMax=bi.TweenLite=qt;bi.TimelineLite=bi.TimelineMax=Zn;Ot=new Zn({sortChildren:!1,defaults:Ru,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=CM;var Mo=[],gf={},OA=[],O0=0,FA=0,yh=function(e){return(gf[e]||OA).map(function(t){return t()})},lm=function(){var e=Date.now(),t=[];e-O0>2&&(yh("matchMediaInit"),Mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=mr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),yh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),O0=e,yh("matchMedia"))},FM=function(){function n(t,i){this.selector=i&&sm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=FA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Vt(i)&&(s=r,r=i,i=Vt);var o=this,a=function(){var u=Dt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=sm(s)),Dt=o,d=r.apply(o,arguments),Vt(d)&&o._r.push(d),Dt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Zn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Mo.length;o--;)Mo[o].id===this.id&&Mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),kA=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Cr(i)||(i={matches:i});var o=new FM(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=mr.matchMedia(i[u]),l&&(Mo.indexOf(o)<0&&Mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(lm):l.addEventListener("change",lm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Qf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return TM(r)})},timeline:function(e){return new Zn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){fn(e)&&(e=ji(e)[0]);var s=xo(e||{}).get,o=i?fM:cM;return i==="native"&&(i=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,i,r)):function(a,l,u){return o((gi[a]&&gi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ji(e),e.length>1){var r=e.map(function(c){return ui.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=gi[t],a=xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;wa._pt=0,d.init(e,i?c+i:c,wa,0,[e]),d.render(1,d),wa._pt&&jg(1,wa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ui.to(e,Pi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=So(e.ease,Ru.ease)),L0(Ru,e||{})},config:function(e){return L0(Ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!bi[a]&&bu(t+" effect requires "+a+" plugin.")}),gh[t]=function(a,l,u){return i(ji(a),Pi(l||{},s),u)},o&&(Zn.prototype[t]=function(a,l,u){return this.add(gh[t](a,Cr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ut[e]=So(t)},parseEase:function(e,t){return arguments.length?So(e,t):ut},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Zn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&xr(i,r,r._start-r._delay),r=s;return xr(Ot,i,0),i},context:function(e,t){return e?new FM(e,t):Dt},matchMedia:function(e){return new kA(e)},matchMediaRefresh:function(){return Mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||lm()},addEventListener:function(e,t){var i=gf[e]||(gf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=gf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:mA,wrapYoyo:gA,distribute:vM,random:yM,snap:xM,normalize:pA,getUnit:Cn,clamp:cA,splitColor:wM,toArray:ji,selector:sm,mapRange:MM,pipe:dA,unitize:hA,interpolate:_A,shuffle:_M},install:sM,effects:gh,ticker:vi,updateRoot:Zn.updateRoot,plugins:gi,globalTimeline:Ot,core:{PropTween:ri,globals:oM,Tween:qt,Timeline:Zn,Animation:Uu,getCache:xo,_removeLinkedListItem:bd,reverting:function(){return _n},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Ng=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Qf[n]=qt[n]});vi.add(Zn.updateRoot);wa=Qf.to({},{duration:0});var zA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},BA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=zA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Sh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(fn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}BA(a,s)}}}},ui=Qf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)_n?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Sh("roundProps",om),Sh("modifiers"),Sh("snap",xM))||Qf;qt.version=Zn.version=ui.version="3.15.0";rM=1;Og()&&el();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var F0,gs,Oa,qg,fo,k0,$g,HA=function(){return typeof window<"u"},Zr={},no=180/Math.PI,Fa=Math.PI/180,Go=Math.atan2,z0=1e8,Kg=/([A-Z])/g,VA=/(left|right|width|margin|padding|x)/i,GA=/[\s,\(]\S/,yr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},um=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},YA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},kM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qA=function(e,t,i){return e.style[t]=i},$A=function(e,t,i){return e.style.setProperty(t,i)},KA=function(e,t,i){return e._gsap[t]=i},ZA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},QA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},JA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",si=Ft+"Origin",eC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Zr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=yr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Fr(r,a)}):this.tfm[e]=o.x?o[e]:Fr(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return yr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},BM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},tC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$g(),(!s||!s.isStart)&&!i[Ft]&&(BM(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},HM=function(e,t){var i={target:e,props:[],revert:tC,save:eC};return e._gsap||ui.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},VM,cm=function(e,t){var i=gs.createElementNS?gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gs.createElement(e);return i&&i.style?i:gs.createElement(e)},Mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Kg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,tl(t)||t,1)||""},B0="O,Moz,ms,Ms,Webkit".split(","),tl=function(e,t,i){var r=t||fo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(B0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?B0[o]:"")+e},fm=function(){HA()&&window.document&&(F0=window,gs=F0.document,Oa=gs.documentElement,fo=cm("div")||{style:{}},cm("div"),Ft=tl(Ft),si=Ft+"Origin",fo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",VM=!!tl("perspective"),$g=ui.core.reverting,qg=1)},H0=function(e){var t=e.ownerSVGElement,i=cm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Oa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Oa.removeChild(i),s},V0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},GM=function(e){var t,i;try{t=e.getBBox()}catch{t=H0(e),i=1}return t&&(t.width||t.height)||i||(t=H0(e)),t&&!t.width&&!t.x&&!t.y?{x:+V0(e,["x","cx","x1"])||0,y:+V0(e,["y","cy","y1"])||0,width:0,height:0}:t},WM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&GM(e))},ks=function(e,t){if(t){var i=e.style,r;t in Zr&&t!==si&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Kg,"-$1").toLowerCase())):i.removeAttribute(t)}},_s=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?zM:kM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},G0={deg:1,rad:1,turn:1},nC={grid:1,flex:1},zs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=fo.style,l=VA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",_,g,m,f;if(r===o||!s||G0[r]||G0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&WM(e),(p||o==="%")&&(Zr[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[c],Gt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===gs||!g.appendChild)&&(g=gs.body),m=g._gsap,m&&p&&m.width&&l&&m.time===vi.time&&!m.uncache)return Gt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:ks(e,t)}else(p||o==="%")&&!nC[Mi(g,"display")]&&(a.position=Mi(e,"position")),g===e&&(a.position="static"),g.appendChild(fo),_=fo[c],g.removeChild(fo),a.position="absolute";return l&&p&&(m=xo(g),m.time=vi.time,m.width=g[c]),Gt(h?_*s/d:_&&s?d/_*s:0)},Fr=function(e,t,i,r){var s;return qg||fm(),t in yr&&t!=="transform"&&(t=yr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zr[t]&&t!=="transform"?(s=Iu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ed(Mi(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Jf[t]&&Jf[t](e,t,i)||Mi(e,t)||lM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zs(e,t,s,i)+i:s},iC=function(e,t,i,r){if(!i||i==="none"){var s=tl(t,e,1),o=s&&Mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Mi(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,IM),l=0,u=0,c,d,h,p,_,g,m,f,v,x,y,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Mi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Mi(e,t)||r,g?e.style[t]=g:ks(e,t)),c=[i,r],CM(c),i=c[0],r=c[1],h=i.match(Ta)||[],T=r.match(Ta)||[],T.length){for(;d=Ta.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ia(p,m)+y),f=parseFloat(m),x=m.substr((f+"").length),l=Ta.lastIndex-x.length,x||(x=x||Ai.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=zs(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:f-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?zM:kM;return iM.test(r)&&(a.e=0),this._pt=a,a},W0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=W0[i]||i,t[1]=W0[r]||r,t.join(" ")},sC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Zr[a]&&(l=1,a=a==="transformOrigin"?si:Ft),ks(i,a);l&&(ks(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Iu(i,1),o.uncache=1,BM(r)))}},Jf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,sC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Nu=[1,0,0,1,0,0],XM={},YM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},X0=function(e){var t=Mi(e,Ft);return YM(t)?Nu:t.substr(7).match(nM).map(Gt)},Zg=function(e,t){var i=e._gsap||xo(e),r=e.style,s=X0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Nu:s):(s===Nu&&!e.offsetParent&&e!==Oa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Oa.appendChild(e)),s=X0(e),l?r.display=l:ks(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Oa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dm=function(e,t,i,r,s,o){var a=e._gsap,l=s||Zg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,M,P,S;i?l!==Nu&&(M=p*m-_*g)&&(P=y*(m/M)+T*(-g/M)+(g*v-m*f)/M,S=y*(-_/M)+T*(p/M)-(p*v-_*f)/M,y=P,T=S):(w=GM(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(f=y-u,v=T-c,a.xOffset=d+(f*p+v*g)-f,a.yOffset=h+(f*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(_s(o,a,"xOrigin",u,y),_s(o,a,"yOrigin",c,T),_s(o,a,"xOffset",d,a.xOffset),_s(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Iu=function(e,t){var i=e._gsap||new bM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Mi(e,si)||"0",c,d,h,p,_,g,m,f,v,x,y,T,w,M,P,S,E,F,N,Z,L,I,V,B,U,O,R,$,Q,q,K,re;return c=d=h=g=m=f=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&WM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=Zg(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),dm(e,B||u,!!B||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,w=i.yOrigin||0,M!==Nu&&(F=M[0],N=M[1],Z=M[2],L=M[3],c=I=M[4],d=V=M[5],M.length===6?(p=Math.sqrt(F*F+N*N),_=Math.sqrt(L*L+Z*Z),g=F||N?Go(N,F)*no:0,v=Z||L?Go(Z,L)*no+g:0,v&&(_*=Math.abs(Math.cos(v*Fa))),i.svg&&(c-=T-(T*F+w*Z),d-=w-(T*N+w*L))):(re=M[6],q=M[7],R=M[8],$=M[9],Q=M[10],K=M[11],c=M[12],d=M[13],h=M[14],P=Go(re,Q),m=P*no,P&&(S=Math.cos(-P),E=Math.sin(-P),B=I*S+R*E,U=V*S+$*E,O=re*S+Q*E,R=I*-E+R*S,$=V*-E+$*S,Q=re*-E+Q*S,K=q*-E+K*S,I=B,V=U,re=O),P=Go(-Z,Q),f=P*no,P&&(S=Math.cos(-P),E=Math.sin(-P),B=F*S-R*E,U=N*S-$*E,O=Z*S-Q*E,K=L*E+K*S,F=B,N=U,Z=O),P=Go(N,F),g=P*no,P&&(S=Math.cos(P),E=Math.sin(P),B=F*S+N*E,U=I*S+V*E,N=N*S-F*E,V=V*S-I*E,F=B,I=U),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=Gt(Math.sqrt(F*F+N*N+Z*Z)),_=Gt(Math.sqrt(V*V+re*re)),P=Go(I,V),v=Math.abs(P)>2e-4?P*no:0,y=K?1/(K<0?-K:K):0),i.svg&&(B=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!YM(Mi(e,Ft)),B&&e.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Gt(p),i.scaleY=Gt(_),i.rotation=Gt(g)+a,i.rotationX=Gt(m)+a,i.rotationY=Gt(f)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=ed(u)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?aC:VM?jM:oC,i.uncache=0,i},ed=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mh=function(e,t,i){var r=Cn(t);return Gt(parseFloat(t)+parseFloat(zs(e,"x",i+"px",r)))+r},oC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,jM(e,t)},qs="0deg",Ml="0px",$s=") ",jM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,v=i.target,x=i.zOrigin,y="",T=f==="auto"&&e&&e!==1||f===!0;if(x&&(d!==qs||c!==qs)){var w=parseFloat(c)*Fa,M=Math.sin(w),P=Math.cos(w),S;w=parseFloat(d)*Fa,S=Math.cos(w),o=Mh(v,o,M*S*-x),a=Mh(v,a,-Math.sin(w)*-x),l=Mh(v,l,P*S*-x+x)}m!==Ml&&(y+="perspective("+m+$s),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==Ml||a!==Ml||l!==Ml)&&(y+=l!==Ml||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$s),u!==qs&&(y+="rotate("+u+$s),c!==qs&&(y+="rotateY("+c+$s),d!==qs&&(y+="rotateX("+d+$s),(h!==qs||p!==qs)&&(y+="skew("+h+", "+p+$s),(_!==1||g!==1)&&(y+="scale("+_+", "+g+$s),v.style[Ft]=y||"translate(0, 0)"},aC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),T,w,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Fa,u*=Fa,T=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Fa,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Gt(T),w=Gt(w),M=Gt(M),P=Gt(P)):(T=d,P=h,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=zs(p,"x",o,"px"),y=zs(p,"y",a,"px")),(_||g||m||f)&&(x=Gt(x+_-(_*T+g*M)+m),y=Gt(y+g-(_*w+g*P)+f)),(r||s)&&(S=p.getBBox(),x=Gt(x+r/100*S.width),y=Gt(y+s/100*S.height)),S="matrix("+T+","+w+","+M+","+P+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Ft]=S)},lC=function(e,t,i,r,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?no:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*z0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*z0)%o-~~(u/o)*o)),e._pt=h=new ri(e._pt,t,i,r,u,WA),h.e=c,h.u="deg",e._props.push(i),h},Y0=function(e,t){for(var i in t)e[i]=t[i];return e},uC=function(e,t,i){var r=Y0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Iu(i,1),ks(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Iu(i,1),o[Ft]=u);for(l in Zr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Cn(u),_=Cn(c),d=p!==_?zs(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new ri(e._pt,a,l,d,h-d,um),e._pt.u=_||0,e._props.push(l));Y0(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Jf[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(_){return Fr(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,d)}});var qM={name:"css",register:fm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,_,g,m,f,v,x,y,T,w,M,P,S;qg||fm(),this.styles=this.styles||HM(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(gi[g]&&PM(g,t,i,r,e,s)))){if(p=typeof c,_=Jf[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Lu(c)),_)_(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ls.lastIndex=0,Ls.test(u)||(m=Cn(u),f=Cn(c),f?m!==f&&(u=zs(e,g,u,f)+f):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],fn(u)&&~u.indexOf("random(")&&(u=Lu(u)),Cn(u+"")||u==="auto"||(u+=Ai.units[g]||Cn(Fr(e,g))||""),(u+"").charAt(1)==="="&&(u=Fr(e,g))):u=Fr(e,g),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in yr&&(g==="autoAlpha"&&(h===1&&Fr(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),_s(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=yr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Zr,x){if(this.styles.save(g),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Mi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=Mi(e,"perspective"),E?e.style.perspective=E:ks(e,"perspective")}d=parseFloat(c)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Iu(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new ri(this._pt,a,Ft,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new ri(this._pt,T,"scaleY",T.scaleY,(v?Ia(T.scaleY,v+d):d)-T.scaleY||0,um),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(si,0,a[si]),c=rC(c),T.svg?dm(e,c,0,w,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==T.zOrigin&&_s(this,T,"zOrigin",T.zOrigin,f),_s(this,a,g,ed(u),ed(c)));continue}else if(g==="svgOrigin"){dm(e,c,1,w,0,this);continue}else if(g in XM){lC(this,T,g,h,v?Ia(h,v+c):c);continue}else if(g==="smoothOrigin"){_s(this,T,"smooth",T.smooth,c);continue}else if(g==="force3D"){T[g]=c;continue}else if(g==="transform"){uC(this,c,e);continue}}else g in a||(g=tl(g)||g);if(x||(d||d===0)&&(h||h===0)&&!GA.test(c)&&g in a)m=(u+"").substr((h+"").length),d||(d=0),f=Cn(c)||(g in Ai.units?Ai.units[g]:m),m!==f&&(h=zs(e,g,u,f)),this._pt=new ri(this._pt,x?T:a,g,h,(v?Ia(h,v+d):d)-h,!x&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?jA:um),this._pt.u=f||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=YA):m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=XA);else if(g in a)iC.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){kg(g,c);continue}x||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,u||e[g])),o.push(g)}}M&&OM(this)},render:function(e,t){if(t.tween._time||!$g())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Fr,aliases:yr,getSetter:function(e,t,i){var r=yr[t];return r&&r.indexOf(",")<0&&(t=r),t in Zr&&t!==si&&(e._gsap.x||Fr(e,"x"))?i&&k0===i?t==="scale"?ZA:KA:(k0=i||{})&&(t==="scale"?QA:JA):e.style&&!Ig(e.style[t])?qA:~t.indexOf("-")?$A:Yg(e,t)},core:{_removeProperty:ks,_getMatrix:Zg}};ui.utils.checkPrefix=tl;ui.core.getStyleSaver=HM;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){Zr[s]=1});ii(e,function(s){Ai.units[s]="deg",XM[s]=1}),yr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");yr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ai.units[n]="px"});ui.registerPlugin(qM);var Xu=ui.registerPlugin(qM)||ui;Xu.core.Tween;function cC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function fC(n,e,t){return e&&cC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,_f,xi,vs,xs,ka,$M,io,za,KM,Hr,ir,ZM,QM=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},JM=1,Aa=[],st=[],wr=[],eu=Date.now,hm=function(e,t){return t},dC=function(){var e=za.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,st),r.push.apply(r,wr),st=i,wr=r,hm=function(o,a){return t[o](a)}},Ds=function(e,t){return~wr.indexOf(e)&&wr[wr.indexOf(e)+1][t]},tu=function(e){return!!~KM.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Dn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},_c="scrollLeft",vc="scrollTop",pm=function(){return Hr&&Hr.isPressed||st.cache++},td=function(e,t){var i=function r(s){if(s||s===0){JM&&(xi.history.scrollRestoration="manual");var o=Hr&&Hr.isPressed;s=r.v=Math.round(s)||(Hr&&Hr.iOS?1:0),e(s),r.cacheID=st.cache,o&&hm("ss",s)}else(t||st.cache!==r.cacheID||hm("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:_c,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:td(function(n){return arguments.length?xi.scrollTo(n,en.sc()):xi.pageXOffset||vs[_c]||xs[_c]||ka[_c]||0})},en={s:vc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:td(function(n){return arguments.length?xi.scrollTo(Hn.sc(),n):xi.pageYOffset||vs[vc]||xs[vc]||ka[vc]||0})},jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},hC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;tu(e)&&(e=vs.scrollingElement||xs);var s=st.indexOf(e),o=r===en.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||Un(e,"scroll",pm);var a=st[s+o],l=a||(st[s+o]=td(Ds(e,i),!0)||(tu(e)?r:td(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},mm=function(e,t,i){var r=e,s=e,o=eu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=eu();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},h=function(_){var g=a,m=s,f=eu();return(_||_===0)&&_!==r&&c(_),o===a||f-a>u?0:(r+(i?m:-m))/((i?f:o)-g)*1e3};return{update:c,reset:d,getVelocity:h}},El=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},j0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},eE=function(){za=pn.core.globals().ScrollTrigger,za&&za.core&&dC()},tE=function(e){return pn=e||QM(),!_f&&pn&&typeof document<"u"&&document.body&&(xi=window,vs=document,xs=vs.documentElement,ka=vs.body,KM=[xi,vs,xs,ka],pn.utils.clamp,ZM=pn.core.context||function(){},io="onpointerenter"in ka?"pointer":"mouse",$M=Xt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ir=Xt.eventTypes=("ontouchstart"in xs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return JM=0},500),_f=1),za||eE(),_f};Hn.op=en;st.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){_f||tE(pn)||console.warn("Please gsap.registerPlugin(Observer)"),za||eE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,h=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,f=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,T=i.onRight,w=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,F=i.onChange,N=i.onToggleX,Z=i.onToggleY,L=i.onHover,I=i.onHoverEnd,V=i.onMove,B=i.ignoreCheck,U=i.isNormalizer,O=i.onGestureStart,R=i.onGestureEnd,$=i.onWheel,Q=i.onEnable,q=i.onDisable,K=i.onClick,re=i.scrollSpeed,pe=i.capture,ue=i.allowClicks,De=i.lockAxis,Ue=i.onLockAxis;this.target=a=jn(a)||xs,this.vars=i,p&&(p=pn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,re=re||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(xi.getComputedStyle(ka).lineHeight)||22);var Ie,We,G,Xe,xe,Pe,ee,z=this,Me=0,b=0,A=i.passive||!c&&i.passive!==!1,H=Bs(a,Hn),ne=Bs(a,en),te=H(),ie=ne(),ve=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ir[0]==="pointerdown",me=tu(a),fe=a.ownerDocument||vs,Se=[0,0,0],ce=[0,0,0],J=0,Qe=function(){return J=eu()},we=function(Ae,Oe){return(z.event=Ae)&&p&&hC(Ae.target,p)||Oe&&ve&&Ae.pointerType!=="touch"||B&&B(Ae,Oe)},ze=function(){z._vx.reset(),z._vy.reset(),We.pause(),d&&d(z)},Ee=function(){var Ae=z.deltaX=j0(Se),Oe=z.deltaY=j0(ce),ae=Math.abs(Ae)>=r,He=Math.abs(Oe)>=r;F&&(ae||He)&&F(z,Ae,Oe,Se,ce),ae&&(T&&z.deltaX>0&&T(z),w&&z.deltaX<0&&w(z),S&&S(z),N&&z.deltaX<0!=Me<0&&N(z),Me=z.deltaX,Se[0]=Se[1]=Se[2]=0),He&&(P&&z.deltaY>0&&P(z),M&&z.deltaY<0&&M(z),E&&E(z),Z&&z.deltaY<0!=b<0&&Z(z),b=z.deltaY,ce[0]=ce[1]=ce[2]=0),(Xe||G)&&(V&&V(z),G&&(m&&G===1&&m(z),v&&v(z),G=0),Xe=!1),Pe&&!(Pe=!1)&&Ue&&Ue(z),xe&&($(z),xe=!1),Ie=0},ye=function(Ae,Oe,ae){Se[ae]+=Ae,ce[ae]+=Oe,z._vx.update(Ae),z._vy.update(Oe),u?Ie||(Ie=requestAnimationFrame(Ee)):Ee()},Ye=function(Ae,Oe){De&&!ee&&(z.axis=ee=Math.abs(Ae)>Math.abs(Oe)?"x":"y",Pe=!0),ee!=="y"&&(Se[2]+=Ae,z._vx.update(Ae,!0)),ee!=="x"&&(ce[2]+=Oe,z._vy.update(Oe,!0)),u?Ie||(Ie=requestAnimationFrame(Ee)):Ee()},Ke=function(Ae){if(!we(Ae,1)){Ae=El(Ae,c);var Oe=Ae.clientX,ae=Ae.clientY,He=Oe-z.x,ke=ae-z.y,qe=z.isDragging;z.x=Oe,z.y=ae,(qe||(He||ke)&&(Math.abs(z.startX-Oe)>=s||Math.abs(z.startY-ae)>=s))&&(G||(G=qe?2:1),qe||(z.isDragging=!0),Ye(He,ke))}},ct=z.onPress=function(Le){we(Le,1)||Le&&Le.button||(z.axis=ee=null,We.pause(),z.isPressed=!0,Le=El(Le),Me=b=0,z.startX=z.x=Le.clientX,z.startY=z.y=Le.clientY,z._vx.reset(),z._vy.reset(),Un(U?a:fe,ir[1],Ke,A,!0),z.deltaX=z.deltaY=0,x&&x(z))},ge=z.onRelease=function(Le){if(!we(Le,1)){Dn(U?a:fe,ir[1],Ke,!0);var Ae=!isNaN(z.y-z.startY),Oe=z.isDragging,ae=Oe&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),He=El(Le);!ae&&Ae&&(z._vx.reset(),z._vy.reset(),c&&ue&&pn.delayedCall(.08,function(){if(eu()-J>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(fe.createEvent){var ke=fe.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,xi,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(ke)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&Oe&&!U&&We.restart(!0),G&&Ee(),f&&Oe&&f(z),y&&y(z,ae)}},oe=function(Ae){return Ae.touches&&Ae.touches.length>1&&(z.isGesturing=!0)&&O(Ae,z.isDragging)},D=function(){return(z.isGesturing=!1)||R(z)},le=function(Ae){if(!we(Ae)){var Oe=H(),ae=ne();ye((Oe-te)*re,(ae-ie)*re,1),te=Oe,ie=ae,d&&We.restart(!0)}},de=function(Ae){if(!we(Ae)){Ae=El(Ae,c),$&&(xe=!0);var Oe=(Ae.deltaMode===1?l:Ae.deltaMode===2?xi.innerHeight:1)*_;ye(Ae.deltaX*Oe,Ae.deltaY*Oe,0),d&&!U&&We.restart(!0)}},Be=function(Ae){if(!we(Ae)){var Oe=Ae.clientX,ae=Ae.clientY,He=Oe-z.x,ke=ae-z.y;z.x=Oe,z.y=ae,Xe=!0,d&&We.restart(!0),(He||ke)&&Ye(He,ke)}},Fe=function(Ae){z.event=Ae,L(z)},lt=function(Ae){z.event=Ae,I(z)},dt=function(Ae){return we(Ae)||El(Ae,c)&&K(z)};We=z._dc=pn.delayedCall(h||.25,ze).pause(),z.deltaX=z.deltaY=0,z._vx=mm(0,50,!0),z._vy=mm(0,50,!0),z.scrollX=H,z.scrollY=ne,z.isDragging=z.isGesturing=z.isPressed=!1,ZM(this),z.enable=function(Le){return z.isEnabled||(Un(me?fe:a,"scroll",pm),o.indexOf("scroll")>=0&&Un(me?fe:a,"scroll",le,A,pe),o.indexOf("wheel")>=0&&Un(a,"wheel",de,A,pe),(o.indexOf("touch")>=0&&$M||o.indexOf("pointer")>=0)&&(Un(a,ir[0],ct,A,pe),Un(fe,ir[2],ge),Un(fe,ir[3],ge),ue&&Un(a,"click",Qe,!0,!0),K&&Un(a,"click",dt),O&&Un(fe,"gesturestart",oe),R&&Un(fe,"gestureend",D),L&&Un(a,io+"enter",Fe),I&&Un(a,io+"leave",lt),V&&Un(a,io+"move",Be)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=Xe=G=!1,z._vx.reset(),z._vy.reset(),te=H(),ie=ne(),Le&&Le.type&&ct(Le),Q&&Q(z)),z},z.disable=function(){z.isEnabled&&(Aa.filter(function(Le){return Le!==z&&tu(Le.target)}).length||Dn(me?fe:a,"scroll",pm),z.isPressed&&(z._vx.reset(),z._vy.reset(),Dn(U?a:fe,ir[1],Ke,!0)),Dn(me?fe:a,"scroll",le,pe),Dn(a,"wheel",de,pe),Dn(a,ir[0],ct,pe),Dn(fe,ir[2],ge),Dn(fe,ir[3],ge),Dn(a,"click",Qe,!0),Dn(a,"click",dt),Dn(fe,"gesturestart",oe),Dn(fe,"gestureend",D),Dn(a,io+"enter",Fe),Dn(a,io+"leave",lt),Dn(a,io+"move",Be),z.isEnabled=z.isPressed=z.isDragging=!1,q&&q(z))},z.kill=z.revert=function(){z.disable();var Le=Aa.indexOf(z);Le>=0&&Aa.splice(Le,1),Hr===z&&(Hr=0)},Aa.push(z),U&&tu(a)&&(Hr=z),z.enable(g)},fC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.15.0";Xt.create=function(n){return new Xt(n)};Xt.register=tE;Xt.getAll=function(){return Aa.slice()};Xt.getById=function(n){return Aa.filter(function(e){return e.vars.id===n})[0]};QM()&&pn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,ca,it,_t,_i,pt,Qg,nd,Ou,nu,Fl,xc,Tn,Dd,gm,Fn,q0,$0,fa,nE,Eh,iE,In,_m,rE,sE,os,vm,Jg,Ba,e_,iu,xm,Th,yc=1,wn=Date.now,wh=wn(),$i=0,kl=0,K0=function(e,t,i){var r=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Z0=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},pC=function n(){return kl&&requestAnimationFrame(n)},Q0=function(){return Dd=1},J0=function(){return Dd=0},gr=function(e){return e},zl=function(e){return Math.round(e*1e5)/1e5||0},oE=function(){return typeof window<"u"},aE=function(){return Ce||oE()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Io=function(e){return!!~Qg.indexOf(e)},lE=function(e){return(e==="Height"?e_:it["inner"+e])||_i["client"+e]||pt["client"+e]},uE=function(e){return Ds(e,"getBoundingClientRect")||(Io(e)?function(){return Mf.width=it.innerWidth,Mf.height=e_,Mf}:function(){return kr(e)})},mC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ds(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?lE(s):e["client"+s])||0}},gC=function(e,t){return!t||~wr.indexOf(e)?uE(e):function(){return Mf}},Sr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ds(e,i))?o()-uE(e)()[s]:Io(e)?(_i[i]||pt[i])-lE(r):e[i]-e["offset"+r])},Sc=function(e,t){for(var i=0;i<fa.length;i+=3)(!t||~t.indexOf(fa[i+1]))&&e(fa[i],fa[i+1],fa[i+2])},mi=function(e){return typeof e=="string"},Rn=function(e){return typeof e=="function"},Bl=function(e){return typeof e=="number"},ro=function(e){return typeof e=="object"},Tl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Wo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Xo=Math.abs,cE="left",fE="top",t_="right",n_="bottom",Eo="width",To="height",ru="Right",su="Left",ou="Top",au="Bottom",jt="padding",zi="margin",nl="Width",i_="Height",Qt="px",Bi=function(e){return it.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},_C=function(e){var t=Bi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ev=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},kr=function(e,t){var i=t&&Bi(e)[gm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},id=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},dE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},vC=function(e){return function(t){return Ce.utils.snap(dE(e),t)}},r_=function(e){var t=Ce.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},xC=function(e){return function(t,i){return r_(dE(e))(t,i.direction)}},Mc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},an=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},on=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ec=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},tv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Tc={toggleActions:"play",anticipatePin:0},rd={top:0,left:0,center:.5,bottom:1,right:1},vf=function(e,t){if(mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in rd?rd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},wc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,h=s.indent,p=s.fontWeight,_=_t.createElement("div"),g=Io(i)||Ds(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,f=g?pt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===en?t_:n_)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,f.children[0]?f.insertBefore(_,f.children[0]):f.appendChild(_),_._offset=_["offset"+r.op.d2],xf(_,0,r,v),_},xf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+nl]=1,s["border"+a+nl]=0,s[i.p]=t+"px",Ce.set(e,s)},tt=[],ym={},Fu,nv=function(){return wn()-$i>34&&(Fu||(Fu=requestAnimationFrame(Wr)))},Yo=function(){(!In||!In.isPressed||In.startX>pt.clientWidth)&&(st.cache++,In?Fu||(Fu=requestAnimationFrame(Wr)):Wr(),$i||Fo("scrollStart"),$i=wn())},Ah=function(){sE=it.innerWidth,rE=it.innerHeight},Hl=function(e){st.cache++,(e===!0||!Tn&&!iE&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!_m||sE!==it.innerWidth||Math.abs(it.innerHeight-rE)>it.innerHeight*.25))&&nd.restart(!0)},Oo={},yC=[],hE=function n(){return on(Je,"scrollEnd",n)||ho(!0)},Fo=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||yC},hi=[],pE=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},mE=function(){return st.forEach(function(e){return Rn(e)&&++e.cacheID&&(e.rec=e())})},s_=function(e,t){var i;for(Fn=0;Fn<tt.length;Fn++)i=tt[Fn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));iu=!0,t&&pE(t),t||Fo("revert")},gE=function(e,t){st.cache++,(t||!kn)&&st.forEach(function(i){return Rn(i)&&i.cacheID++&&(i.rec=0)}),mi(e)&&(it.history.scrollRestoration=Jg=e)},kn,wo=0,iv,SC=function(){if(iv!==wo){var e=iv=wo;requestAnimationFrame(function(){return e===wo&&ho(!0)})}},_E=function(){pt.appendChild(Ba),e_=!In&&Ba.offsetHeight||it.innerHeight,pt.removeChild(Ba)},rv=function(e){return Ou(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ho=function(e,t){if(_i=_t.documentElement,pt=_t.body,Qg=[it,_t,_i,pt],$i&&!e&&!iu){an(Je,"scrollEnd",hE);return}_E(),kn=Je.isRefreshing=!0,iu||mE();var i=Fo("refreshInit");nE&&Je.sort(),t||s_(),st.forEach(function(r){Rn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),tt.slice(0).forEach(function(r){return r.refresh()}),iu=!1,tt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),xm=1,rv(!0),tt.forEach(function(r){var s=Sr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),rv(!1),xm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){Rn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),gE(Jg,1),nd.pause(),wo++,kn=2,Wr(2),tt.forEach(function(r){return Rn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=Je.isRefreshing=!1,Fo("refresh")},Sm=0,yf=1,lu,Wr=function(e){if(e===2||!kn&&!iu){Je.isUpdating=!0,lu&&lu.update(0);var t=tt.length,i=wn(),r=i-wh>=50,s=t&&tt[0].scroll();if(yf=Sm>s?-1:1,kn||(Sm=s),r&&($i&&!Dd&&i-$i>200&&($i=0,Fo("scrollEnd")),Fl=wh,wh=i),yf<0){for(Fn=t;Fn-- >0;)tt[Fn]&&tt[Fn].update(0,r);yf=1}else for(Fn=0;Fn<t;Fn++)tt[Fn]&&tt[Fn].update(0,r);Je.isUpdating=!1}Fu=0},Mm=[cE,fE,n_,t_,zi+au,zi+ru,zi+ou,zi+su,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sf=Mm.concat([Eo,To,"boxSizing","max"+nl,"max"+i_,"position",zi,jt,jt+ou,jt+ru,jt+au,jt+su]),MC=function(e,t,i){Ha(i);var r=e._gsap;if(r.spacerIsNative)Ha(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ch=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Mm.length,o=t.style,a=e.style,l;s--;)l=Mm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[n_]=a[t_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Eo]=id(e,Hn)+Qt,o[To]=id(e,en)+Qt,o[jt]=a[zi]=a[fE]=a[cE]="0",Ha(r),a[Eo]=a["max"+nl]=i[Eo],a[To]=a["max"+i_]=i[To],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},EC=/([A-Z])/g,Ha=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(EC,"-$1").toLowerCase())}},Ac=function(e){for(var t=Sf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Sf[s],i[Sf[s]]);return r.t=e,r},TC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Mf={left:0,top:0},sv=function(e,t,i,r,s,o,a,l,u,c,d,h,p,_){Rn(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?vf("0"+e.substr(3),i):0));var g=p?p.time():0,m,f,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Bl(e))p&&(e=Ce.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&xf(a,i,r,!0);else{Rn(t)&&(t=t(l));var x=(e||"0").split(" "),y,T,w,M;v=jn(t,l)||pt,y=kr(v)||{},(!y||!y.left&&!y.top)&&Bi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=kr(v),M?v.style.display=M:v.style.removeProperty("display")),T=vf(x[0],y[r.d]),w=vf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+T+s-w,a&&xf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,xf(o,P,r,S&&P>20||!S&&(d?Math.max(pt[m],_i[m]):o.parentNode[m])<=P+1),d&&(u=kr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Qt))}return p&&v&&(m=kr(v),p.seek(h),f=kr(v),p._caScrollDist=m[r.p]-f[r.p],e=e/p._caScrollDist*h),p&&p.seek(g),p?e:Math.round(e)},wC=/(webkit|moz|length|cssText|inset)/i,ov=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Bi(e);for(o in a)!+o&&!wC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},vE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Cc=function(e,t,i){var r={};r[t.p]="+="+i,Ce.set(e,r)},av=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var h=o.tween,p=l.onComplete,_={};u=u||i();var g=vE(i,u,function(){h.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){st.cache++,o.tween&&Wr()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=Ce.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",i.wheelHandler),Je.isTouch&&an(e,"touchmove",i.wheelHandler),s},Je=function(){function n(t,i){ca||n.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!kl){this.update=this.refresh=this.kill=gr;return}i=ev(mi(i)||Bl(i)||i.nodeType?{trigger:i}:i,Tc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,h=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,f=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:en,F=!d&&d!==0,N=jn(i.scroller||it),Z=Ce.core.getCache(N),L=Io(N),I=("pinType"in i?i.pinType:Ds(N,"pinType")||L&&"fixed")==="fixed",V=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=F&&i.toggleActions.split(" "),U="markers"in i?i.markers:Tc.markers,O=L?0:parseFloat(Bi(N)["border"+E.p2+nl])||0,R=this,$=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Q=mC(N,L,E),q=gC(N,L),K=0,re=0,pe=0,ue=Bs(N,E),De,Ue,Ie,We,G,Xe,xe,Pe,ee,z,Me,b,A,H,ne,te,ie,ve,me,fe,Se,ce,J,Qe,we,ze,Ee,ye,Ye,Ke,ct,ge,oe,D,le,de,Be,Fe,lt;if(R._startClamp=R._endClamp=!1,R._dir=E,m*=45,R.scroller=N,R.scroll=M?M.time.bind(M):ue,We=ue(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(nE=1,i.refreshPriority===-9999&&(lu=R)),Z.tweenScroll=Z.tweenScroll||{top:av(N,en),left:av(N,Hn)},R.tweenTo=De=Z.tweenScroll[E.p],R.scrubDuration=function(ae){oe=Bl(ae)&&ae,oe?ge?ge.duration(ae):ge=Ce.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:oe,paused:!0,onComplete:function(){return f&&f(R)}}):(ge&&ge.progress(1).kill(),ge=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),Ke=0,l||(l=r.vars.id)),y&&((!ro(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&Ce.set(L?[pt,_i]:N,{scrollBehavior:"auto"}),st.forEach(function(ae){return Rn(ae)&&ae.target===(L?_t.scrollingElement||_i:N)&&(ae.smooth=!1)}),Ie=Rn(y.snapTo)?y.snapTo:y.snapTo==="labels"?vC(r):y.snapTo==="labelsDirectional"?xC(r):y.directional!==!1?function(ae,He){return r_(y.snapTo)(ae,wn()-re<500?0:He.direction)}:Ce.utils.snap(y.snapTo),D=y.duration||{min:.1,max:2},D=ro(D)?nu(D.min,D.max):nu(D,D),le=Ce.delayedCall(y.delay||oe/2||.1,function(){var ae=ue(),He=wn()-re<500,ke=De.tween;if((He||Math.abs(R.getVelocity())<10)&&!ke&&!Dd&&K!==ae){var qe=(ae-Xe)/H,Ut=r&&!F?r.totalProgress():qe,nt=He?0:(Ut-ct)/(wn()-Fl)*1e3||0,Et=Ce.utils.clamp(-qe,1-qe,Xo(nt/2)*nt/.185),Kt=qe+(y.inertia===!1?0:Et),At,Tt,mt=y,ci=mt.onStart,C=mt.onInterrupt,k=mt.onComplete;if(At=Ie(Kt,R),Bl(At)||(At=Kt),Tt=Math.max(0,Math.round(Xe+At*H)),ae<=xe&&ae>=Xe&&Tt!==ae){if(ke&&!ke._initted&&ke.data<=Xo(Tt-ae))return;y.inertia===!1&&(Et=At-qe),De(Tt,{duration:D(Xo(Math.max(Xo(Kt-Ut),Xo(At-Ut))*.185/nt/.05||0)),ease:y.ease||"power3",data:Xo(Tt-ae),onInterrupt:function(){return le.restart(!0)&&C&&Wo(R,C)},onComplete:function(){R.update(),K=ue(),r&&!F&&(ge?ge.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),Ke=ct=r&&!F?r.totalProgress():R.progress,v&&v(R),k&&Wo(R,k)}},ae,Et*H,Tt-ae-Et*H),ci&&Wo(R,ci,De.tween)}}else R.isActive&&K!==ae&&le.restart(!0)}).pause()),l&&(ym[l]=R),h=R.trigger=jn(h||p!==!0&&p),lt=h&&h._gsap&&h._gsap.stRevert,lt&&(lt=lt(R)),p=p===!0?h:jn(p),mi(a)&&(a={targets:h,className:a}),p&&(_===!1||_===zi||(_=!_&&p.parentNode&&p.parentNode.style&&Bi(p.parentNode).display==="flex"?!1:jt),R.pin=p,Ue=Ce.core.getCache(p),Ue.spacer?ne=Ue.pinState:(w&&(w=jn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ue.spacerIsNative=!!w,w&&(Ue.spacerState=Ac(w))),Ue.spacer=ve=w||_t.createElement("div"),ve.classList.add("pin-spacer"),l&&ve.classList.add("pin-spacer-"+l),Ue.pinState=ne=Ac(p)),i.force3D!==!1&&Ce.set(p,{force3D:!0}),R.spacer=ve=Ue.spacer,Ye=Bi(p),Qe=Ye[_+E.os2],fe=Ce.getProperty(p),Se=Ce.quickSetter(p,E.a,Qt),Ch(p,ve,Ye),ie=Ac(p)),U){b=ro(U)?ev(U,tv):tv,z=wc("scroller-start",l,N,E,b,0),Me=wc("scroller-end",l,N,E,b,0,z),me=z["offset"+E.op.d2];var dt=jn(Ds(N,"content")||N);Pe=this.markerStart=wc("start",l,dt,E,b,me,0,M),ee=this.markerEnd=wc("end",l,dt,E,b,me,0,M),M&&(Fe=Ce.quickSetter([Pe,ee],E.a,Qt)),!I&&!(wr.length&&Ds(N,"fixedMarkers")===!0)&&(_C(L?pt:N),Ce.set([z,Me],{force3D:!0}),ze=Ce.quickSetter(z,E.a,Qt),ye=Ce.quickSetter(Me,E.a,Qt))}if(M){var Le=M.vars.onUpdate,Ae=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Le&&Le.apply(M,Ae||[])})}if(R.previous=function(){return tt[tt.indexOf(R)-1]},R.next=function(){return tt[tt.indexOf(R)+1]},R.revert=function(ae,He){if(!He)return R.kill(!0);var ke=ae!==!1||!R.enabled,qe=Tn;ke!==R.isReverted&&(ke&&(de=Math.max(ue(),R.scroll.rec||0),pe=R.progress,Be=r&&r.progress()),Pe&&[Pe,ee,z,Me].forEach(function(Ut){return Ut.style.display=ke?"none":"block"}),ke&&(Tn=R,R.update(ke)),p&&(!T||!R.isActive)&&(ke?MC(p,ve,ne):Ch(p,ve,Bi(p),we)),ke||R.update(ke),Tn=qe,R.isReverted=ke)},R.refresh=function(ae,He,ke,qe){if(!((Tn||!R.enabled)&&!He)){if(p&&ae&&$i){an(n,"scrollEnd",hE);return}!kn&&$&&$(R),Tn=R,De.tween&&!ke&&(De.tween.kill(),De.tween=0),ge&&ge.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(je){return je.vars.immediateRender&&je.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ut=Q(),nt=q(),Et=M?M.duration():Sr(N,E),Kt=H<=.01||!H,At=0,Tt=qe||0,mt=ro(ke)?ke.end:i.end,ci=i.endTrigger||h,C=ro(ke)?ke.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),k=R.pinnedContainer=i.pinnedContainer&&jn(i.pinnedContainer,R),j=h&&Math.max(0,tt.indexOf(R))||0,X=j,W,he,Re,Ve,be,Ne,Ge,$e,Pt,Zt,gt,Ln,xt;for(U&&ro(ke)&&(Ln=Ce.getProperty(z,E.p),xt=Ce.getProperty(Me,E.p));X-- >0;)Ne=tt[X],Ne.end||Ne.refresh(0,1)||(Tn=R),Ge=Ne.pin,Ge&&(Ge===h||Ge===p||Ge===k)&&!Ne.isReverted&&(Zt||(Zt=[]),Zt.unshift(Ne),Ne.revert(!0,!0)),Ne!==tt[X]&&(j--,X--);for(Rn(C)&&(C=C(R)),C=K0(C,"start",R),Xe=sv(C,h,Ut,E,ue(),Pe,z,R,nt,O,I,Et,M,R._startClamp&&"_startClamp")||(p?-.001:0),Rn(mt)&&(mt=mt(R)),mi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(mi(C)?C.split(" ")[0]:"")+mt:(At=vf(mt.substr(2),Ut),mt=mi(C)?C:(M?Ce.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Xe):Xe)+At,ci=h)),mt=K0(mt,"end",R),xe=Math.max(Xe,sv(mt||(ci?"100% 0":Et),ci,Ut,E,ue()+At,ee,Me,R,nt,O,I,Et,M,R._endClamp&&"_endClamp"))||-.001,At=0,X=j;X--;)Ne=tt[X]||{},Ge=Ne.pin,Ge&&Ne.start-Ne._pinPush<=Xe&&!M&&Ne.end>0&&(W=Ne.end-(R._startClamp?Math.max(0,Ne.start):Ne.start),(Ge===h&&Ne.start-Ne._pinPush<Xe||Ge===k)&&isNaN(C)&&(At+=W*(1-Ne.progress)),Ge===p&&(Tt+=W));if(Xe+=At,xe+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!kn&&(R._endClamp=xe||-.001,xe=Math.min(xe,Sr(N,E))),H=xe-Xe||(Xe-=.01)&&.001,Kt&&(pe=Ce.utils.clamp(0,1,Ce.utils.normalize(Xe,xe,de))),R._pinPush=Tt,Pe&&At&&(W={},W[E.a]="+="+At,k&&(W[E.p]="-="+ue()),Ce.set([Pe,ee],W)),p&&!(xm&&R.end>=Sr(N,E)))W=Bi(p),Ve=E===en,Re=ue(),ce=parseFloat(fe(E.a))+Tt,!Et&&xe>1&&(gt=(L?_t.scrollingElement||_i:N).style,gt={style:gt,value:gt["overflow"+E.a.toUpperCase()]},L&&Bi(pt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+E.a.toUpperCase()]="scroll")),Ch(p,ve,W),ie=Ac(p),he=kr(p,!0),$e=I&&Bs(N,Ve?Hn:en)(),_?(we=[_+E.os2,H+Tt+Qt],we.t=ve,X=_===jt?id(p,E)+H+Tt:0,X&&(we.push(E.d,X+Qt),ve.style.flexBasis!=="auto"&&(ve.style.flexBasis=X+Qt)),Ha(we),k&&tt.forEach(function(je){je.pin===k&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),I&&ue(de)):(X=id(p,E),X&&ve.style.flexBasis!=="auto"&&(ve.style.flexBasis=X+Qt)),I&&(be={top:he.top+(Ve?Re-Xe:$e)+Qt,left:he.left+(Ve?$e:Re-Xe)+Qt,boxSizing:"border-box",position:"fixed"},be[Eo]=be["max"+nl]=Math.ceil(he.width)+Qt,be[To]=be["max"+i_]=Math.ceil(he.height)+Qt,be[zi]=be[zi+ou]=be[zi+ru]=be[zi+au]=be[zi+su]="0",be[jt]=W[jt],be[jt+ou]=W[jt+ou],be[jt+ru]=W[jt+ru],be[jt+au]=W[jt+au],be[jt+su]=W[jt+su],te=TC(ne,be,T),kn&&ue(0)),r?(Pt=r._initted,Eh(1),r.render(r.duration(),!0,!0),J=fe(E.a)-ce+H+Tt,Ee=Math.abs(H-J)>1,I&&Ee&&te.splice(te.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Eh(0)):J=H,gt&&(gt.value?gt.style["overflow"+E.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+E.a));else if(h&&ue()&&!M)for(he=h.parentNode;he&&he!==pt;)he._pinOffset&&(Xe-=he._pinOffset,xe-=he._pinOffset),he=he.parentNode;Zt&&Zt.forEach(function(je){return je.revert(!1,!0)}),R.start=Xe,R.end=xe,We=G=kn?de:ue(),!M&&!kn&&(We<de&&ue(de),R.scroll.rec=0),R.revert(!1,!0),re=wn(),le&&(K=-1,le.restart(!0)),Tn=0,r&&F&&(r._initted||Be)&&r.progress()!==Be&&r.progress(Be||0,!0).render(r.time(),!0,!0),(Kt||pe!==R.progress||M||g||r&&!r._initted)&&(r&&!F&&(r._initted||pe||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Xe<-.001&&!pe?Ce.utils.normalize(Xe,xe,0):pe,!0),R.progress=Kt||(We-Xe)/H===pe?0:pe),p&&_&&(ve._pinOffset=Math.round(R.progress*J)),ge&&ge.invalidate(),isNaN(Ln)||(Ln-=Ce.getProperty(z,E.p),xt-=Ce.getProperty(Me,E.p),Cc(z,E,Ln),Cc(Pe,E,Ln-(qe||0)),Cc(Me,E,xt),Cc(ee,E,xt-(qe||0))),Kt&&!kn&&R.update(),c&&!kn&&!A&&(A=!0,c(R),A=!1)}},R.getVelocity=function(){return(ue()-G)/(wn()-Fl)*1e3||0},R.endAnimation=function(){Tl(R.callbackAnimation),r&&(ge?ge.progress(1):r.paused()?F||Tl(r,R.direction<0,1):Tl(r,r.reversed()))},R.labelToScroll=function(ae){return r&&r.labels&&(Xe||R.refresh()||Xe)+r.labels[ae]/r.duration()*H||0},R.getTrailing=function(ae){var He=tt.indexOf(R),ke=R.direction>0?tt.slice(0,He).reverse():tt.slice(He+1);return(mi(ae)?ke.filter(function(qe){return qe.vars.preventOverlaps===ae}):ke).filter(function(qe){return R.direction>0?qe.end<=Xe:qe.start>=xe})},R.update=function(ae,He,ke){if(!(M&&!ke&&!ae)){var qe=kn===!0?de:R.scroll(),Ut=ae?0:(qe-Xe)/H,nt=Ut<0?0:Ut>1?1:Ut||0,Et=R.progress,Kt,At,Tt,mt,ci,C,k,j;if(He&&(G=We,We=M?ue():qe,y&&(ct=Ke,Ke=r&&!F?r.totalProgress():nt)),m&&p&&!Tn&&!yc&&$i&&(!nt&&Xe<qe+(qe-G)/(wn()-Fl)*m?nt=1e-4:nt===1&&xe>qe+(qe-G)/(wn()-Fl)*m&&(nt=.9999)),nt!==Et&&R.enabled){if(Kt=R.isActive=!!nt&&nt<1,At=!!Et&&Et<1,C=Kt!==At,ci=C||!!nt!=!!Et,R.direction=nt>Et?1:-1,R.progress=nt,ci&&!Tn&&(Tt=nt&&!Et?0:nt===1?1:Et===1?2:3,F&&(mt=!C&&B[Tt+1]!=="none"&&B[Tt+1]||B[Tt],j=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(C||j)&&(j||d||!r)&&(Rn(S)?S(R):R.getTrailing(S).forEach(function(Re){return Re.endAnimation()})),F||(ge&&!Tn&&!yc?(ge._dp._time-ge._start!==ge._time&&ge.render(ge._dp._time-ge._start),ge.resetTo?ge.resetTo("totalProgress",nt,r._tTime/r._tDur):(ge.vars.totalProgress=nt,ge.invalidate().restart())):r&&r.totalProgress(nt,!!(Tn&&(re||ae)))),p){if(ae&&_&&(ve.style[_+E.os2]=Qe),!I)Se(zl(ce+J*nt));else if(ci){if(k=!ae&&nt>Et&&xe+1>qe&&qe+1>=Sr(N,E),T)if(!ae&&(Kt||k)){var X=kr(p,!0),W=qe-Xe;ov(p,pt,X.top+(E===en?W:0)+Qt,X.left+(E===en?0:W)+Qt)}else ov(p,ve);Ha(Kt||k?te:ie),Ee&&nt<1&&Kt||Se(ce+(nt===1&&!k?J:0))}}y&&!De.tween&&!Tn&&!yc&&le.restart(!0),a&&(C||x&&nt&&(nt<1||!Th))&&Ou(a.targets).forEach(function(Re){return Re.classList[Kt||x?"add":"remove"](a.className)}),o&&!F&&!ae&&o(R),ci&&!Tn?(F&&(j&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(R)),(C||!Th)&&(u&&C&&Wo(R,u),V[Tt]&&Wo(R,V[Tt]),x&&(nt===1?R.kill(!1,1):V[Tt]=0),C||(Tt=nt===1?1:3,V[Tt]&&Wo(R,V[Tt]))),P&&!Kt&&Math.abs(R.getVelocity())>(Bl(P)?P:2500)&&(Tl(R.callbackAnimation),ge?ge.progress(1):Tl(r,mt==="reverse"?1:!nt,1))):F&&o&&!Tn&&o(R)}if(ye){var he=M?qe/M.duration()*(M._caScrollDist||0):qe;ze(he+(z._isFlipped?1:0)),ye(he)}Fe&&Fe(-qe/M.duration()*(M._caScrollDist||0))}},R.enable=function(ae,He){R.enabled||(R.enabled=!0,an(N,"resize",Hl),L||an(N,"scroll",Yo),$&&an(n,"refreshInit",$),ae!==!1&&(R.progress=pe=0,We=G=K=ue()),He!==!1&&R.refresh())},R.getTween=function(ae){return ae&&De?De.tween:ge},R.setPositions=function(ae,He,ke,qe){if(M){var Ut=M.scrollTrigger,nt=M.duration(),Et=Ut.end-Ut.start;ae=Ut.start+Et*ae/nt,He=Ut.start+Et*He/nt}R.refresh(!1,!1,{start:Z0(ae,ke&&!!R._startClamp),end:Z0(He,ke&&!!R._endClamp)},qe),R.update()},R.adjustPinSpacing=function(ae){if(we&&ae){var He=we.indexOf(E.d)+1;we[He]=parseFloat(we[He])+ae+Qt,we[1]=parseFloat(we[1])+ae+Qt,Ha(we)}},R.disable=function(ae,He){if(ae!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,He||ge&&ge.pause(),de=0,Ue&&(Ue.uncache=1),$&&on(n,"refreshInit",$),le&&(le.pause(),De.tween&&De.tween.kill()&&(De.tween=0)),!L)){for(var ke=tt.length;ke--;)if(tt[ke].scroller===N&&tt[ke]!==R)return;on(N,"resize",Hl),L||on(N,"scroll",Yo)}},R.kill=function(ae,He){R.disable(ae,He),ge&&!He&&ge.kill(),l&&delete ym[l];var ke=tt.indexOf(R);ke>=0&&tt.splice(ke,1),ke===Fn&&yf>0&&Fn--,ke=0,tt.forEach(function(qe){return qe.scroller===R.scroller&&(ke=1)}),ke||kn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,ae&&r.revert({kill:!1}),He||r.kill()),Pe&&[Pe,ee,z,Me].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),lu===R&&(lu=0),p&&(Ue&&(Ue.uncache=1),ke=0,tt.forEach(function(qe){return qe.pin===p&&ke++}),ke||(Ue.spacer=0)),i.onKill&&i.onKill(R)},tt.push(R),R.enable(!1,!1),lt&&lt(R),r&&r.add&&!H){var Oe=R.update;R.update=function(){R.update=Oe,st.cache++,Xe||xe||R.refresh()},Ce.delayedCall(.01,R.update),H=.01,Xe=xe=0}else R.refresh();p&&SC()},n.register=function(i){return ca||(Ce=i||aE(),oE()&&window.document&&n.enable(),ca=kl),ca},n.defaults=function(i){if(i)for(var r in i)Tc[r]=i[r];return Tc},n.disable=function(i,r){kl=0,tt.forEach(function(o){return o[r?"kill":"disable"](i)}),on(it,"wheel",Yo),on(_t,"scroll",Yo),clearInterval(xc),on(_t,"touchcancel",gr),on(pt,"touchstart",gr),Mc(on,_t,"pointerdown,touchstart,mousedown",Q0),Mc(on,_t,"pointerup,touchend,mouseup",J0),nd.kill(),Sc(on);for(var s=0;s<st.length;s+=3)Ec(on,st[s],st[s+1]),Ec(on,st[s],st[s+2])},n.enable=function(){if(it=window,_t=document,_i=_t.documentElement,pt=_t.body,Ce){if(Ou=Ce.utils.toArray,nu=Ce.utils.clamp,vm=Ce.core.context||gr,Eh=Ce.core.suppressOverwrites||gr,Jg=it.history.scrollRestoration||"auto",Sm=it.pageYOffset||0,Ce.core.globals("ScrollTrigger",n),pt){kl=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",_E(),pC(),Xt.register(Ce),n.isTouch=Xt.isTouch,os=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_m=Xt.isTouch===1,an(it,"wheel",Yo),Qg=[it,_t,_i,pt],Ce.matchMedia?(n.matchMedia=function(c){var d=Ce.matchMedia(),h;for(h in c)d.add(h,c[h]);return d},Ce.addEventListener("matchMediaInit",function(){mE(),s_()}),Ce.addEventListener("matchMediaRevert",function(){return pE()}),Ce.addEventListener("matchMedia",function(){ho(0,1),Fo("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return Ah(),Ah})):console.warn("Requires GSAP 3.11.0 or later"),Ah(),an(_t,"scroll",Yo);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=kr(pt),en.m=Math.round(a.top+en.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),xc=setInterval(nv,250),Ce.delayedCall(.5,function(){return yc=0}),an(_t,"touchcancel",gr),an(pt,"touchstart",gr),Mc(an,_t,"pointerdown,touchstart,mousedown",Q0),Mc(an,_t,"pointerup,touchend,mouseup",J0),gm=Ce.utils.checkPrefix("transform"),Sf.push(gm),ca=wn(),nd=Ce.delayedCall(.2,ho).pause(),fa=[_t,"visibilitychange",function(){var c=it.innerWidth,d=it.innerHeight;_t.hidden?(q0=c,$0=d):(q0!==c||$0!==d)&&Hl()},_t,"DOMContentLoaded",ho,it,"load",ho,it,"resize",Hl],Sc(an),tt.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)Ec(on,st[l],st[l+1]),Ec(on,st[l],st[l+2])}else if(_t){var u=function c(){n.enable(),_t.removeEventListener("DOMContentLoaded",c)};_t.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Th=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(xc)||(xc=r)&&setInterval(nv,r),"ignoreMobileResize"in i&&(_m=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Sc(on)||Sc(an,i.autoRefreshEvents||"none"),iE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=jn(i),o=st.indexOf(s),a=Io(s);~o&&st.splice(o,a?6:2),r&&(a?wr.unshift(it,r,pt,r,_i,r):wr.unshift(s,r))},n.clearMatchMedia=function(i){tt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(mi(i)?jn(i):i).getBoundingClientRect(),a=o[s?Eo:To]*r||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},n.positionInViewport=function(i,r,s){mi(i)&&(i=jn(i));var o=i.getBoundingClientRect(),a=o[s?Eo:To],l=r==null?a/2:r in rd?rd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},n.killAll=function(i){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Oo.killAll||[];Oo={},r.forEach(function(s){return s()})}},n}();Je.version="3.15.0";Je.saveStyles=function(n){return n?Ou(n).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),vm())}}):hi};Je.revert=function(n,e){return s_(!n,e)};Je.create=function(n,e){return new Je(n,e)};Je.refresh=function(n){return n?Hl(!0):(ca||Je.register())&&ho(!0)};Je.update=function(n){return++st.cache&&Wr(n===!0?2:0)};Je.clearScrollMemory=gE;Je.maxScroll=function(n,e){return Sr(n,e?Hn:en)};Je.getScrollFunc=function(n,e){return Bs(jn(n),e?Hn:en)};Je.getById=function(n){return ym[n]};Je.getAll=function(){return tt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!$i};Je.snapDirectional=r_;Je.addEventListener=function(n,e){var t=Oo[n]||(Oo[n]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(n,e){var t=Oo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Je.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],h=[],p=Ce.delayedCall(r,function(){c(d,h),d=[],h=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Rn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Rn(s)&&(s=s(),an(Je,"refresh",function(){return s=e.batchMax()})),Ou(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Je.create(u))}),t};var lv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Rh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===_i&&n(pt,t)},Rc={auto:1,scroll:1},AC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Rc[(l=Bi(s)).overflowY]||Rc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Io(s)&&(Rc[(l=Bi(s)).overflowY]||Rc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},xE=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&AC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&an(_t,Xt.eventTypes[0],cv,!1,!0)},onDisable:function(){return on(_t,Xt.eventTypes[0],cv,!0)}})},CC=/(input|label|select|textarea)/i,uv,cv=function(e){var t=CC.test(e.target.tagName);(t||uv)&&(e._gsapAllow=!0,uv=t)},RC=function(e){ro(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=jn(e.target)||_i,c=Ce.core.globals().ScrollSmoother,d=c&&c.get(),h=os&&(e.content&&jn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Bs(u,en),_=Bs(u,Hn),g=1,m=(Xt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,f=0,v=Rn(r)?function(){return r(a)}:function(){return r||2.8},x,y,T=xE(u,e.type,!0,s),w=function(){return y=!1},M=gr,P=gr,S=function(){l=Sr(u,en),P=nu(os?1:0,l),i&&(M=nu(0,Sr(u,Hn))),x=wo},E=function(){h._gsap.y=zl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},F=function(){if(y){requestAnimationFrame(w);var U=zl(a.deltaY/2),O=P(p.v-U);if(h&&O!==p.v+p.offset){p.offset=O-p.v;var R=zl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",p.cacheID=st.cache,Wr()}return!0}p.offset&&E(),y=!0},N,Z,L,I,V=function(){S(),N.isActive()&&N.vars.scrollY>l&&(p()>l?N.progress(1)&&p(l):N.resetTo("scrollY",l))};return h&&Ce.set(h,{y:"+=0"}),e.ignoreCheck=function(B){return os&&B.type==="touchmove"&&F()||g>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){y=!1;var B=g;g=zl((it.visualViewport&&it.visualViewport.scale||1)/m),N.pause(),B!==g&&Rh(u,g>1.01?!0:i?!1:"x"),Z=_(),L=p(),S(),x=wo},e.onRelease=e.onGestureStart=function(B,U){if(p.offset&&E(),!U)I.restart(!0);else{st.cache++;var O=v(),R,$;i&&(R=_(),$=R+O*.05*-B.velocityX/.227,O*=lv(_,R,$,Sr(u,Hn)),N.vars.scrollX=M($)),R=p(),$=R+O*.05*-B.velocityY/.227,O*=lv(p,R,$,Sr(u,en)),N.vars.scrollY=P($),N.invalidate().duration(O).play(.01),(os&&N.vars.scrollY>=l||R>=l-1)&&Ce.to({},{onUpdate:V,duration:O})}o&&o(B)},e.onWheel=function(){N._ts&&N.pause(),wn()-f>1e3&&(x=0,f=wn())},e.onChange=function(B,U,O,R,$){if(wo!==x&&S(),U&&i&&_(M(R[2]===U?Z+(B.startX-B.x):_()+U-R[1])),O){p.offset&&E();var Q=$[2]===O,q=Q?L+B.startY-B.y:p()+O-$[1],K=P(q);Q&&q!==K&&(L+=K-q),p(K)}(O||U)&&Wr()},e.onEnable=function(){Rh(u,i?!1:"x"),Je.addEventListener("refresh",V),an(it,"resize",V),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),T.enable()},e.onDisable=function(){Rh(u,!0),on(it,"resize",V),Je.removeEventListener("refresh",V),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=os,os&&!p()&&p(1),os&&Ce.ticker.add(gr),I=a._dc,N=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:vE(p,p(),function(){return N.pause()})},onUpdate:Wr,onComplete:I.vars.onComplete}),a};Je.sort=function(n){if(Rn(n))return tt.sort(n);var e=it.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),tt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Je.observe=function(n){return new Xt(n)};Je.normalizeScroll=function(n){if(typeof n>"u")return In;if(n===!0&&In)return In.enable();if(n===!1){In&&In.kill(),In=n;return}var e=n instanceof Xt?n:RC(n);return In&&In.target===e.target&&In.kill(),Io(e.target)&&(In=e),e};Je.core={_getVelocityProp:mm,_inputObserver:xE,_scrollers:st,_proxies:wr,bridge:{ss:function(){$i||Fo("scrollStart"),$i=wn()},ref:function(){return Tn}}};aE()&&Ce.registerPlugin(Je);(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function bC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function fv(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function dv(n,e,t){return e&&fv(n.prototype,e),t&&fv(n,t),n}function PC(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function hv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function pv(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?hv(Object(t),!0).forEach(function(i){PC(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):hv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function yE(n,e){return DC(n)||NC(n,e)||SE(n,e)||OC()}function Bn(n){return LC(n)||UC(n)||SE(n)||IC()}function LC(n){if(Array.isArray(n))return Em(n)}function DC(n){if(Array.isArray(n))return n}function UC(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function NC(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function SE(n,e){if(n){if(typeof n=="string")return Em(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Em(n,e)}}function Em(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function IC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function po(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function Yu(n){return typeof n=="string"}function o_(n){return Array.isArray(n)}function bc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=po(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(Yu(t)||o_(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function a_(n){var e=Yu(n)||o_(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Ud(n){return n!==null&&typeof n=="object"}function FC(n){return Ud(n)&&/^(1|3|11)$/.test(n.nodeType)}function kC(n){return typeof n=="number"&&n>-1&&n%1===0}function zC(n){return Ud(n)&&kC(n.length)}function ko(n){return o_(n)?n:n==null?[]:zC(n)?Array.prototype.slice.call(n):[n]}function mv(n){var e=n;return Yu(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),ko(e).reduce(function(t,i){return[].concat(Bn(t),Bn(ko(i).filter(FC)))},[])}var BC=Object.entries,sd="_splittype",fr={},HC=0;function Mr(n,e,t){if(!Ud(n))return console.warn("[data.set] owner is not an object"),null;var i=n[sd]||(n[sd]=++HC),r=fr[i]||(fr[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(fr[i]=pv(pv({},r),e)):e!==void 0&&(r[e]=t),t}function mo(n,e){var t=Ud(n)?n[sd]:null,i=t&&fr[t]||{};return i}function ME(n){var e=n&&n[sd];e&&(delete n[e],delete fr[e])}function VC(){Object.keys(fr).forEach(function(n){delete fr[n]})}function GC(){BC(fr).forEach(function(n){var e=yE(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(fr[t]=null,delete fr[t])})}function WC(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var l_="\\ud800-\\udfff",EE="\\u0300-\\u036f\\ufe20-\\ufe23",TE="\\u20d0-\\u20f0",wE="\\ufe0e\\ufe0f",XC="[".concat(l_,"]"),Tm="[".concat(EE).concat(TE,"]"),wm="\\ud83c[\\udffb-\\udfff]",YC="(?:".concat(Tm,"|").concat(wm,")"),AE="[^".concat(l_,"]"),CE="(?:\\ud83c[\\udde6-\\uddff]){2}",RE="[\\ud800-\\udbff][\\udc00-\\udfff]",bE="\\u200d",PE="".concat(YC,"?"),LE="[".concat(wE,"]?"),jC="(?:"+bE+"(?:"+[AE,CE,RE].join("|")+")"+LE+PE+")*",qC=LE+PE+jC,$C="(?:".concat(["".concat(AE).concat(Tm,"?"),Tm,CE,RE,XC].join("|"),`
)`),KC=RegExp("".concat(wm,"(?=").concat(wm,")|").concat($C).concat(qC),"g"),ZC=[bE,l_,EE,TE,wE],QC=RegExp("[".concat(ZC.join(""),"]"));function JC(n){return n.split("")}function DE(n){return QC.test(n)}function eR(n){return n.match(KC)||[]}function tR(n){return DE(n)?eR(n):JC(n)}function nR(n){return n==null?"":String(n)}function iR(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=nR(n),n&&Yu(n)&&!e&&DE(n)?tR(n):n.split(e)}function Am(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=Yu(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,Bn(ko(s))):t.setAttribute(i,s))}),t}var u_={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function rR(n,e){e=po(u_,e);var t=a_(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=WC(r).reduce(function(l,u,c,d){var h,p;return t.chars&&(p=iR(u).map(function(_){var g=Am(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return Mr(g,"isChar",!0),a=[].concat(Bn(a),[g]),g})),t.words||t.lines?(h=Am(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),Mr(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):p.forEach(function(_){s.appendChild(_)}),c<d.length-1&&s.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function UE(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return rR(n,e);var r=ko(n.childNodes);if(r.length&&(Mr(n,"isSplit",!0),!mo(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";Mr(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,d){var h=UE(d,e),p=h.words,_=h.chars;return{words:[].concat(Bn(c.words),Bn(p)),chars:[].concat(Bn(c.chars),Bn(_))}},i)}function sR(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=yE(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var d=n.getBoundingClientRect(),h=d.width,p=d.height,_=d.x,g=d.y,m=g+a-u,f=_+o-l;return{width:h,height:p,top:m,left:f}}function NE(n){mo(n).isWord?(ME(n),n.replaceWith.apply(n,Bn(n.childNodes))):ko(n.children).forEach(function(e){return NE(e)})}var oR=function(){return document.createDocumentFragment()};function aR(n,e,t){var i=a_(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,d,h=[],p=n.parentElement,_=n.nextElementSibling,g=oR(),m=window.getComputedStyle(n),f=m.textAlign,v=parseFloat(m.fontSize),x=v*.2;return e.absolute&&(d={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,Mr(n,{cssWidth:n.style.width,cssHeight:n.style.height})),ko(s).forEach(function(y){var T=y.parentElement===n,w=sR(y,T,e,t),M=w.width,P=w.height,S=w.top,E=w.left;/^br$/i.test(y.nodeName)||(i.lines&&T&&((l===null||S-l>=x)&&(l=S,o.push(a=[])),a.push(y)),e.absolute&&Mr(y,{top:S,left:E,width:M,height:P}))}),p&&p.removeChild(n),i.lines&&(h=o.map(function(y){var T=Am(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(f,"; width: 100%;")});Mr(T,"isLine",!0);var w={height:0,top:1e4};return g.appendChild(T),y.forEach(function(M,P,S){var E=mo(M),F=E.isWordEnd,N=E.top,Z=E.height,L=S[P+1];w.height=Math.max(w.height,Z),w.top=Math.min(w.top,N),T.appendChild(M),F&&mo(L).isWordStart&&T.append(" ")}),e.absolute&&Mr(T,{height:w.height,top:w.top}),T}),i.words||NE(g),n.replaceChildren(g)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),ko(s).forEach(function(y){var T=mo(y),w=T.isLine,M=T.top,P=T.left,S=T.width,E=T.height,F=mo(y.parentElement),N=!w&&F.isLine;y.style.top="".concat(N?M-F.top:M,"px"),y.style.left=w?"".concat(d.left,"px"):"".concat(P-(N?d.left:0),"px"),y.style.height="".concat(E,"px"),y.style.width=w?"".concat(d.width,"px"):"".concat(S,"px"),y.style.position="absolute"})),p&&(_?p.insertBefore(n,_):p.appendChild(n)),h}var jo=po(u_,{}),lR=function(){dv(n,null,[{key:"clearData",value:function(){VC()}},{key:"setDefaults",value:function(t){return jo=po(jo,bc(t)),u_}},{key:"revert",value:function(t){mv(t).forEach(function(i){var r=mo(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",ME(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return fr}},{key:"defaults",get:function(){return jo},set:function(t){jo=po(jo,bc(t))}}]);function n(e,t){bC(this,n),this.isSplit=!1,this.settings=po(jo,bc(t)),this.elements=mv(e),this.split()}return dv(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){Mr(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=po(this.settings,bc(t)));var s=a_(this.settings.types);s.none||(this.elements.forEach(function(o){Mr(o,"isRoot",!0);var a=UE(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(Bn(i.words),Bn(l)),i.chars=[].concat(Bn(i.chars),Bn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=aR(o,i.settings,r);i.lines=[].concat(Bn(i.lines),Bn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),GC())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const c_="160",uR=0,gv=1,cR=2,IE=1,fR=2,Ur=3,Hs=0,oi=1,Vi=2,Xr=0,Va=1,ds=2,_v=3,vv=4,dR=5,oo=100,hR=101,pR=102,xv=103,yv=104,mR=200,gR=201,_R=202,vR=203,Cm=204,Rm=205,xR=206,yR=207,SR=208,MR=209,ER=210,TR=211,wR=212,AR=213,CR=214,RR=0,bR=1,PR=2,od=3,LR=4,DR=5,UR=6,NR=7,OE=0,IR=1,OR=2,Us=0,FR=1,kR=2,zR=3,BR=4,HR=5,VR=6,FE=300,il=301,rl=302,bm=303,Pm=304,Nd=306,Lm=1e3,lr=1001,Dm=1002,zn=1003,Sv=1004,bh=1005,$n=1006,GR=1007,ku=1008,Ns=1009,WR=1010,XR=1011,f_=1012,kE=1013,ys=1014,Ss=1015,Ar=1016,zE=1017,BE=1018,Ao=1020,YR=1021,Gi=1023,jR=1024,qR=1025,Co=1026,sl=1027,$R=1028,HE=1029,KR=1030,VE=1031,GE=1033,Ph=33776,Lh=33777,Dh=33778,Uh=33779,Mv=35840,Ev=35841,Tv=35842,wv=35843,WE=36196,Av=37492,Cv=37496,Rv=37808,bv=37809,Pv=37810,Lv=37811,Dv=37812,Uv=37813,Nv=37814,Iv=37815,Ov=37816,Fv=37817,kv=37818,zv=37819,Bv=37820,Hv=37821,Nh=36492,Vv=36494,Gv=36495,ZR=36283,Wv=36284,Xv=36285,Yv=36286,XE=3e3,Ro=3001,QR=3200,JR=3201,eb=0,tb=1,Wi="",hn="srgb",Qr="srgb-linear",d_="display-p3",Id="display-p3-linear",ad="linear",Rt="srgb",ld="rec709",ud="p3",qo=7680,jv=519,nb=512,ib=513,rb=514,YE=515,sb=516,ob=517,ab=518,lb=519,qv=35044,$v="300 es",Um=1035,Vr=2e3,cd=2001;class fl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ih=Math.PI/180,Nm=180/Math.PI;function ju(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Kn(n,e,t){return Math.max(e,Math.min(t,n))}function ub(n,e){return(n%e+e)%e}function Oh(n,e,t){return(1-t)*n+t*e}function Kv(n){return(n&n-1)===0&&n!==0}function Im(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,r,s,o,a,l,u){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],_=i[8],g=r[0],m=r[3],f=r[6],v=r[1],x=r[4],y=r[7],T=r[2],w=r[5],M=r[8];return s[0]=o*g+a*v+l*T,s[3]=o*m+a*x+l*w,s[6]=o*f+a*y+l*M,s[1]=u*g+c*v+d*T,s[4]=u*m+c*x+d*w,s[7]=u*f+c*y+d*M,s[2]=h*g+p*v+_*T,s[5]=h*m+p*x+_*w,s[8]=h*f+p*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fh.makeScale(e,t)),this}rotate(e){return this.premultiply(Fh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fh=new rt;function jE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cb(){const n=fd("canvas");return n.style.display="block",n}const Zv={};function uu(n){n in Zv||(Zv[n]=!0,console.warn(n))}const Qv=new rt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jv=new rt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pc={[Qr]:{transfer:ad,primaries:ld,toReference:n=>n,fromReference:n=>n},[hn]:{transfer:Rt,primaries:ld,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Id]:{transfer:ad,primaries:ud,toReference:n=>n.applyMatrix3(Jv),fromReference:n=>n.applyMatrix3(Qv)},[d_]:{transfer:Rt,primaries:ud,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Jv),fromReference:n=>n.applyMatrix3(Qv).convertLinearToSRGB()}},fb=new Set([Qr,Id]),yt={enabled:!0,_workingColorSpace:Qr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Pc[e].toReference,r=Pc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Pc[n].primaries},getTransfer:function(n){return n===Wi?ad:Pc[n].transfer}};function Ga(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $o;class qE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$o===void 0&&($o=fd("canvas")),$o.width=e.width,$o.height=e.height;const i=$o.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$o}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ga(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ga(t[i]/255)*255):t[i]=Ga(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let db=0;class $E{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=ju(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zh(r[o].image)):s.push(zh(r[o]))}else s=zh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hb=0;class ai extends fl{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,i=lr,r=lr,s=$n,o=ku,a=Gi,l=Ns,u=ai.DEFAULT_ANISOTROPY,c=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=ju(),this.name="",this.source=new $E(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(uu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ro?hn:Wi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==FE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lm:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Dm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lm:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Dm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return uu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===hn?Ro:XE}set encoding(e){uu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ro?hn:Wi}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=FE;ai.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,t=0,i=0,r=1){mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,T=(f+1)/2,w=(c+h)/4,M=(d+g)/4,P=(_+m)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pb extends fl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(uu("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ro?hn:Wi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ai(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $E(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends pb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class KE extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mb extends ai{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||u!==p||c!==_){let m=1-a;const f=l*h+u*p+c*_+d*g,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,f*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+_*y,d=d*m+g*y,m===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=T,u*=T,c*=T,d*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*h,e[t+1]=l*_+c*h+u*d-a*p,e[t+2]=u*_+c*p+a*h-l*d,e[t+3]=c*_-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d-h*p*_;break;case"YXZ":this._x=h*c*d+u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d+h*p*_;break;case"ZXY":this._x=h*c*d-u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d-h*p*_;break;case"ZYX":this._x=h*c*d-u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d+h*p*_;break;case"YZX":this._x=h*c*d+u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d-h*p*_;break;case"XZY":this._x=h*c*d-u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ex.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ex.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new Y,ex=new qu;class $u{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,er):er.fromBufferAttribute(s,o),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lc.copy(i.boundingBox)),Lc.applyMatrix4(e.matrixWorld),this.union(Lc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Al),Dc.subVectors(this.max,Al),Ko.subVectors(e.a,Al),Zo.subVectors(e.b,Al),Qo.subVectors(e.c,Al),ts.subVectors(Zo,Ko),ns.subVectors(Qo,Zo),Ks.subVectors(Ko,Qo);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ks.z,Ks.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ks.z,0,-Ks.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ks.y,Ks.x,0];return!Hh(t,Ko,Zo,Qo,Dc)||(t=[1,0,0,0,1,0,0,0,1],!Hh(t,Ko,Zo,Qo,Dc))?!1:(Uc.crossVectors(ts,ns),t=[Uc.x,Uc.y,Uc.z],Hh(t,Ko,Zo,Qo,Dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],er=new Y,Lc=new $u,Ko=new Y,Zo=new Y,Qo=new Y,ts=new Y,ns=new Y,Ks=new Y,Al=new Y,Dc=new Y,Uc=new Y,Zs=new Y;function Hh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),u=t.dot(Zs),c=i.dot(Zs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const gb=new $u,Cl=new Y,Vh=new Y;class Od{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const t=Cl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(Vh)),this.expandByPoint(Cl.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const br=new Y,Gh=new Y,Nc=new Y,is=new Y,Wh=new Y,Ic=new Y,Xh=new Y;class h_{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gh.copy(e).add(t).multiplyScalar(.5),Nc.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Gh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Nc),a=is.dot(this.direction),l=-is.dot(Nc),u=is.lengthSq(),c=Math.abs(1-o*o);let d,h,p,_;if(c>0)if(d=o*l-a,h=o*a-l,_=s*c,d>=0)if(h>=-_)if(h<=_){const g=1/c;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gh).addScaledVector(Nc,h),p}intersectSphere(e,t){br.subVectors(e.center,this.origin);const i=br.dot(this.direction),r=br.dot(br)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,i,r,s){Wh.subVectors(t,e),Ic.subVectors(i,e),Xh.crossVectors(Wh,Ic);let o=this.direction.dot(Xh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);const l=a*this.direction.dot(Ic.crossVectors(is,Ic));if(l<0)return null;const u=a*this.direction.dot(Wh.cross(is));if(u<0||l+u>o)return null;const c=-a*is.dot(Xh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,_,g,m){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Jo.setFromMatrixColumn(e,0).length(),s=1/Jo.setFromMatrixColumn(e,1).length(),o=1/Jo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,_=u*c,g=u*d;t[0]=h+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,_=u*c,g=u*d;t[0]=h-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+g,t[1]=l*d,t[5]=g*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-h*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_b,e,vb)}lookAt(e,t,i){const r=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),rs.crossVectors(i,fi),rs.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),rs.crossVectors(i,fi)),rs.normalize(),Oc.crossVectors(fi,rs),r[0]=rs.x,r[4]=Oc.x,r[8]=fi.x,r[1]=rs.y,r[5]=Oc.y,r[9]=fi.y,r[2]=rs.z,r[6]=Oc.z,r[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],v=i[3],x=i[7],y=i[11],T=i[15],w=r[0],M=r[4],P=r[8],S=r[12],E=r[1],F=r[5],N=r[9],Z=r[13],L=r[2],I=r[6],V=r[10],B=r[14],U=r[3],O=r[7],R=r[11],$=r[15];return s[0]=o*w+a*E+l*L+u*U,s[4]=o*M+a*F+l*I+u*O,s[8]=o*P+a*N+l*V+u*R,s[12]=o*S+a*Z+l*B+u*$,s[1]=c*w+d*E+h*L+p*U,s[5]=c*M+d*F+h*I+p*O,s[9]=c*P+d*N+h*V+p*R,s[13]=c*S+d*Z+h*B+p*$,s[2]=_*w+g*E+m*L+f*U,s[6]=_*M+g*F+m*I+f*O,s[10]=_*P+g*N+m*V+f*R,s[14]=_*S+g*Z+m*B+f*$,s[3]=v*w+x*E+y*L+T*U,s[7]=v*M+x*F+y*I+T*O,s[11]=v*P+x*N+y*V+T*R,s[15]=v*S+x*Z+y*B+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],v=d*m*u-g*h*u+g*l*p-a*m*p-d*l*f+a*h*f,x=_*h*u-c*m*u-_*l*p+o*m*p+c*l*f-o*h*f,y=c*g*u-_*d*u+_*a*p-o*g*p-c*a*f+o*d*f,T=_*d*l-c*g*l-_*a*h+o*g*h+c*a*m-o*d*m,w=t*v+i*x+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*f-i*h*f)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*f+i*l*f)*M,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-_*h*s+_*r*p-t*m*p-c*r*f+t*h*f)*M,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*f-t*l*f)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*f-t*d*f)*M,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=T*M,e[13]=(c*g*r-_*d*r+_*i*h-t*g*h-c*i*m+t*d*m)*M,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,_=s*d,g=o*c,m=o*d,f=a*d,v=l*u,x=l*c,y=l*d,T=i.x,w=i.y,M=i.z;return r[0]=(1-(g+f))*T,r[1]=(p+y)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+f))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+x)*M,r[9]=(m-v)*M,r[10]=(1-(h+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Jo.set(r[0],r[1],r[2]).length();const o=Jo.set(r[4],r[5],r[6]).length(),a=Jo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tr.copy(this);const u=1/s,c=1/o,d=1/a;return tr.elements[0]*=u,tr.elements[1]*=u,tr.elements[2]*=u,tr.elements[4]*=c,tr.elements[5]*=c,tr.elements[6]*=c,tr.elements[8]*=d,tr.elements[9]*=d,tr.elements[10]*=d,t.setFromRotationMatrix(tr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Vr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Vr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===cd)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Vr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let _,g;if(a===Vr)_=(o+s)*d,g=-2*d;else if(a===cd)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Jo=new Y,tr=new cn,_b=new Y(0,0,0),vb=new Y(1,1,1),rs=new Y,Oc=new Y,fi=new Y,tx=new cn,nx=new qu;class Fd{constructor(e=0,t=0,i=0,r=Fd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nx.setFromEuler(this),this.setFromQuaternion(nx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fd.DEFAULT_ORDER="XYZ";class p_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xb=0;const ix=new Y,ea=new qu,Pr=new cn,Fc=new Y,Rl=new Y,yb=new Y,Sb=new qu,rx=new Y(1,0,0),sx=new Y(0,1,0),ox=new Y(0,0,1),Mb={type:"added"},Eb={type:"removed"};class li extends fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=ju(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=li.DEFAULT_UP.clone();const e=new Y,t=new Fd,i=new qu,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new rt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=li.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(rx,e)}rotateY(e){return this.rotateOnAxis(sx,e)}rotateZ(e){return this.rotateOnAxis(ox,e)}translateOnAxis(e,t){return ix.copy(e).applyQuaternion(this.quaternion),this.position.add(ix.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rx,e)}translateY(e){return this.translateOnAxis(sx,e)}translateZ(e){return this.translateOnAxis(ox,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fc.copy(e):Fc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pr.lookAt(Rl,Fc,this.up):Pr.lookAt(Fc,Rl,this.up),this.quaternion.setFromRotationMatrix(Pr),r&&(Pr.extractRotation(r.matrixWorld),ea.setFromRotationMatrix(Pr),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,e,yb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rl,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}li.DEFAULT_UP=new Y(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nr=new Y,Lr=new Y,Yh=new Y,Dr=new Y,ta=new Y,na=new Y,ax=new Y,jh=new Y,qh=new Y,$h=new Y;let kc=!1;class ar{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nr.subVectors(e,t),r.cross(nr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nr.subVectors(r,t),Lr.subVectors(i,t),Yh.subVectors(e,t);const o=nr.dot(nr),a=nr.dot(Lr),l=nr.dot(Yh),u=Lr.dot(Lr),c=Lr.dot(Yh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Dr)===null?!1:Dr.x>=0&&Dr.y>=0&&Dr.x+Dr.y<=1}static getUV(e,t,i,r,s,o,a,l){return kc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Dr.x),l.addScaledVector(o,Dr.y),l.addScaledVector(a,Dr.z),l)}static isFrontFacing(e,t,i,r){return nr.subVectors(i,t),Lr.subVectors(e,t),nr.cross(Lr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nr.subVectors(this.c,this.b),Lr.subVectors(this.a,this.b),nr.cross(Lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return kc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),kc=!0),ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ta.subVectors(r,i),na.subVectors(s,i),jh.subVectors(e,i);const l=ta.dot(jh),u=na.dot(jh);if(l<=0&&u<=0)return t.copy(i);qh.subVectors(e,r);const c=ta.dot(qh),d=na.dot(qh);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ta,o);$h.subVectors(e,s);const p=ta.dot($h),_=na.dot($h);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(na,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return ax.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(ax,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(ta,o).addScaledVector(na,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ZE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},zc={h:0,s:0,l:0};function Kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=ub(e,1),t=Kn(t,0,1),i=Kn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Kh(o,s,e+1/3),this.g=Kh(o,s,e),this.b=Kh(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=ZE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=kh(e.r),this.g=kh(e.g),this.b=kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return yt.fromWorkingColorSpace(En.copy(this),e),Math.round(Kn(En.r*255,0,255))*65536+Math.round(Kn(En.g*255,0,255))*256+Math.round(Kn(En.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=hn){yt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,r=En.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(zc);const i=Oh(ss.h,zc.h,t),r=Oh(ss.s,zc.s,t),s=Oh(ss.l,zc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ot;ot.NAMES=ZE;let Tb=0;class Ku extends fl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=ju(),this.name="",this.type="Material",this.blending=Va,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cm,this.blendDst=Rm,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=od,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Va&&(i.blending=this.blending),this.side!==Hs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cm&&(i.blendSrc=this.blendSrc),this.blendDst!==Rm&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==od&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class go extends Ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=OE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new Y,Bc=new Ze;class Ci{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ss,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bc.fromBufferAttribute(this,t),Bc.applyMatrix3(e),this.setXY(t,Bc.x,Bc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qv&&(e.usage=this.usage),e}}class QE extends Ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class JE extends Ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gn extends Ci{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wb=0;const Ii=new cn,Zh=new li,ia=new Y,di=new $u,bl=new $u,sn=new Y;class Li extends fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=ju(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jE(e)?JE:QE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ii.makeRotationFromQuaternion(e),this.applyMatrix4(Ii),this}rotateX(e){return Ii.makeRotationX(e),this.applyMatrix4(Ii),this}rotateY(e){return Ii.makeRotationY(e),this.applyMatrix4(Ii),this}rotateZ(e){return Ii.makeRotationZ(e),this.applyMatrix4(Ii),this}translate(e,t,i){return Ii.makeTranslation(e,t,i),this.applyMatrix4(Ii),this}scale(e,t,i){return Ii.makeScale(e,t,i),this.applyMatrix4(Ii),this}lookAt(e){return Zh.lookAt(e),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $u);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Od);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bl.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(di.min,bl.min),di.expandByPoint(sn),sn.addVectors(di.max,bl.max),di.expandByPoint(sn)):(di.expandByPoint(bl.min),di.expandByPoint(bl.max))}di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)sn.fromBufferAttribute(a,u),l&&(ia.fromBufferAttribute(e,u),sn.add(ia)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new Y,c[E]=new Y;const d=new Y,h=new Y,p=new Y,_=new Ze,g=new Ze,m=new Ze,f=new Y,v=new Y;function x(E,F,N){d.fromArray(r,E*3),h.fromArray(r,F*3),p.fromArray(r,N*3),_.fromArray(o,E*2),g.fromArray(o,F*2),m.fromArray(o,N*2),h.sub(d),p.sub(d),g.sub(_),m.sub(_);const Z=1/(g.x*m.y-m.x*g.y);isFinite(Z)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(Z),v.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(Z),u[E].add(f),u[F].add(f),u[N].add(f),c[E].add(v),c[F].add(v),c[N].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,F=y.length;E<F;++E){const N=y[E],Z=N.start,L=N.count;for(let I=Z,V=Z+L;I<V;I+=3)x(i[I+0],i[I+1],i[I+2])}const T=new Y,w=new Y,M=new Y,P=new Y;function S(E){M.fromArray(s,E*3),P.copy(M);const F=u[E];T.copy(F),T.sub(M.multiplyScalar(M.dot(F))).normalize(),w.crossVectors(P,F);const Z=w.dot(c[E])<0?-1:1;l[E*4]=T.x,l[E*4+1]=T.y,l[E*4+2]=T.z,l[E*4+3]=Z}for(let E=0,F=y.length;E<F;++E){const N=y[E],Z=N.start,L=N.count;for(let I=Z,V=Z+L;I<V;I+=3)S(i[I+0]),S(i[I+1]),S(i[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,d=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let f=0;f<c;f++)h[_++]=u[p++]}return new Ci(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Li,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lx=new cn,Qs=new h_,Hc=new Od,ux=new Y,ra=new Y,sa=new Y,oa=new Y,Qh=new Y,Vc=new Y,Gc=new Ze,Wc=new Ze,Xc=new Ze,cx=new Y,fx=new Y,dx=new Y,Yc=new Y,jc=new Y;class Ei extends li{constructor(e=new Li,t=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Vc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Qh.fromBufferAttribute(d,e),o?Vc.addScaledVector(Qh,c):Vc.addScaledVector(Qh.sub(t),c))}t.add(Vc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hc.copy(i.boundingSphere),Hc.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(Hc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Hc,ux)===null||Qs.origin.distanceToSquared(ux)>(e.far-e.near)**2))&&(lx.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(lx),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=qc(this,f,e,i,u,c,d,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=qc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=y,M=y+1,P=y+2;r=qc(this,f,e,i,u,c,d,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=m,x=m+1,y=m+2;r=qc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ab(n,e,t,i,r,s,o,a){let l;if(e.side===oi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hs,a),l===null)return null;jc.copy(a),jc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(jc);return u<t.near||u>t.far?null:{distance:u,point:jc.clone(),object:n}}function qc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ra),n.getVertexPosition(l,sa),n.getVertexPosition(u,oa);const c=Ab(n,e,t,i,ra,sa,oa,Yc);if(c){r&&(Gc.fromBufferAttribute(r,a),Wc.fromBufferAttribute(r,l),Xc.fromBufferAttribute(r,u),c.uv=ar.getInterpolation(Yc,ra,sa,oa,Gc,Wc,Xc,new Ze)),s&&(Gc.fromBufferAttribute(s,a),Wc.fromBufferAttribute(s,l),Xc.fromBufferAttribute(s,u),c.uv1=ar.getInterpolation(Yc,ra,sa,oa,Gc,Wc,Xc,new Ze),c.uv2=c.uv1),o&&(cx.fromBufferAttribute(o,a),fx.fromBufferAttribute(o,l),dx.fromBufferAttribute(o,u),c.normal=ar.getInterpolation(Yc,ra,sa,oa,cx,fx,dx,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new Y,materialIndex:0};ar.getNormal(ra,sa,oa,d.normal),c.face=d}return c}class Zu extends Li{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gn(u,3)),this.setAttribute("normal",new Gn(c,3)),this.setAttribute("uv",new Gn(d,2));function _(g,m,f,v,x,y,T,w,M,P,S){const E=y/M,F=T/P,N=y/2,Z=T/2,L=w/2,I=M+1,V=P+1;let B=0,U=0;const O=new Y;for(let R=0;R<V;R++){const $=R*F-Z;for(let Q=0;Q<I;Q++){const q=Q*E-N;O[g]=q*v,O[m]=$*x,O[f]=L,u.push(O.x,O.y,O.z),O[g]=0,O[m]=0,O[f]=w>0?1:-1,c.push(O.x,O.y,O.z),d.push(Q/M),d.push(1-R/P),B+=1}}for(let R=0;R<P;R++)for(let $=0;$<M;$++){const Q=h+$+I*R,q=h+$+I*(R+1),K=h+($+1)+I*(R+1),re=h+($+1)+I*R;l.push(Q,q,re),l.push(q,K,re),U+=6}a.addGroup(p,U,S),p+=U,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ol(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const i=ol(n[t]);for(const r in i)e[r]=i[r]}return e}function Cb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function e1(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const dd={clone:ol,merge:Nn};var Rb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rb,this.fragmentShader=bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ol(e.uniforms),this.uniformsGroups=Cb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class t1 extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Vr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hi extends t1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nm*2*Math.atan(Math.tan(Ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ih*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const aa=-90,la=1;class Pb extends li{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hi(aa,la,e,t);r.layers=this.layers,this.add(r);const s=new Hi(aa,la,e,t);s.layers=this.layers,this.add(s);const o=new Hi(aa,la,e,t);o.layers=this.layers,this.add(o);const a=new Hi(aa,la,e,t);a.layers=this.layers,this.add(a);const l=new Hi(aa,la,e,t);l.layers=this.layers,this.add(l);const u=new Hi(aa,la,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Vr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class n1 extends ai{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:il,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lb extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(uu("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ro?hn:Wi),this.texture=new n1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zu(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:ol(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:Xr});s.uniforms.tEquirect.value=t;const o=new Ei(r,s),a=t.minFilter;return t.minFilter===ku&&(t.minFilter=$n),new Pb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Jh=new Y,Db=new Y,Ub=new rt;class us{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Jh.subVectors(i,t).cross(Db.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ub.getNormalMatrix(e),r=this.coplanarPoint(Jh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new Od,$c=new Y;class i1{constructor(e=new us,t=new us,i=new us,r=new us,s=new us,o=new us){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],_=r[9],g=r[10],m=r[11],f=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+_,y+v).normalize(),i[3].setComponents(l-o,h-c,m-_,y-v).normalize(),i[4].setComponents(l-a,h-d,m-g,y-x).normalize(),t===Vr)i[5].setComponents(l+a,h+d,m+g,y+x).normalize();else if(t===cd)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($c.x=r.normal.x>0?e.max.x:e.min.x,$c.y=r.normal.y>0?e.max.y:e.min.y,$c.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function r1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Nb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,d,h),u.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&_.length===0&&n.bufferSubData(d,0,h),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class m_ extends Li{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<c;f++){const v=f*h-o;for(let x=0;x<u;x++){const y=x*d-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+u*f,y=v+u*(f+1),T=v+1+u*(f+1),w=v+1+u*f;p.push(x,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new m_(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ob=`#ifdef USE_ALPHAHASH
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
#endif`,Fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb=`#ifdef USE_BATCHING
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
#endif`,Wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qb=`#ifdef USE_IRIDESCENCE
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
#endif`,$b=`#ifdef USE_BUMPMAP
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
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rP=`#define PI 3.141592653589793
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
} // validated`,sP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oP=`vec3 transformedNormal = objectNormal;
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
#endif`,aP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fP="gl_FragColor = linearToOutputTexel( gl_FragColor );",dP=`
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
}`,hP=`#ifdef USE_ENVMAP
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
#endif`,pP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mP=`#ifdef USE_ENVMAP
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
#endif`,gP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_P=`#ifdef USE_ENVMAP
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
#endif`,vP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MP=`#ifdef USE_GRADIENTMAP
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
}`,EP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CP=`uniform bool receiveShadow;
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
#endif`,RP=`#ifdef USE_ENVMAP
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
#endif`,bP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UP=`PhysicalMaterial material;
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
#endif`,NP=`struct PhysicalMaterial {
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
}`,IP=`
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
#endif`,OP=`#if defined( RE_IndirectDiffuse )
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
#endif`,FP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,VP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XP=`#if defined( USE_POINTS_UV )
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
#endif`,YP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$P=`#ifdef USE_MORPHNORMALS
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
#endif`,KP=`#ifdef USE_MORPHTARGETS
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
#endif`,ZP=`#ifdef USE_MORPHTARGETS
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
#endif`,QP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i2=`#ifdef USE_NORMALMAP
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
#endif`,r2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,c2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x2=`float getShadowMask() {
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
}`,y2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S2=`#ifdef USE_SKINNING
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
#endif`,M2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E2=`#ifdef USE_SKINNING
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
#endif`,T2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R2=`#ifdef USE_TRANSMISSION
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
#endif`,b2=`#ifdef USE_TRANSMISSION
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
#endif`,P2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,I2=`uniform sampler2D t2D;
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
}`,O2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B2=`#include <common>
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
}`,H2=`#if DEPTH_PACKING == 3200
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
}`,V2=`#define DISTANCE
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
}`,G2=`#define DISTANCE
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
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`uniform float scale;
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
}`,j2=`uniform vec3 diffuse;
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
}`,q2=`#include <common>
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
}`,$2=`uniform vec3 diffuse;
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
}`,K2=`#define LAMBERT
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
}`,Z2=`#define LAMBERT
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
}`,Q2=`#define MATCAP
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
}`,J2=`#define MATCAP
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
}`,eL=`#define NORMAL
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
}`,tL=`#define NORMAL
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
}`,nL=`#define PHONG
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
}`,iL=`#define PHONG
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
}`,rL=`#define STANDARD
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
}`,sL=`#define STANDARD
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
}`,oL=`#define TOON
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
}`,aL=`#define TOON
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
}`,lL=`uniform float size;
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
}`,uL=`uniform vec3 diffuse;
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
}`,cL=`#include <common>
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
}`,fL=`uniform vec3 color;
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
}`,dL=`uniform float rotation;
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
}`,hL=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Ib,alphahash_pars_fragment:Ob,alphamap_fragment:Fb,alphamap_pars_fragment:kb,alphatest_fragment:zb,alphatest_pars_fragment:Bb,aomap_fragment:Hb,aomap_pars_fragment:Vb,batching_pars_vertex:Gb,batching_vertex:Wb,begin_vertex:Xb,beginnormal_vertex:Yb,bsdfs:jb,iridescence_fragment:qb,bumpmap_pars_fragment:$b,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:Jb,color_fragment:eP,color_pars_fragment:tP,color_pars_vertex:nP,color_vertex:iP,common:rP,cube_uv_reflection_fragment:sP,defaultnormal_vertex:oP,displacementmap_pars_vertex:aP,displacementmap_vertex:lP,emissivemap_fragment:uP,emissivemap_pars_fragment:cP,colorspace_fragment:fP,colorspace_pars_fragment:dP,envmap_fragment:hP,envmap_common_pars_fragment:pP,envmap_pars_fragment:mP,envmap_pars_vertex:gP,envmap_physical_pars_fragment:RP,envmap_vertex:_P,fog_vertex:vP,fog_pars_vertex:xP,fog_fragment:yP,fog_pars_fragment:SP,gradientmap_pars_fragment:MP,lightmap_fragment:EP,lightmap_pars_fragment:TP,lights_lambert_fragment:wP,lights_lambert_pars_fragment:AP,lights_pars_begin:CP,lights_toon_fragment:bP,lights_toon_pars_fragment:PP,lights_phong_fragment:LP,lights_phong_pars_fragment:DP,lights_physical_fragment:UP,lights_physical_pars_fragment:NP,lights_fragment_begin:IP,lights_fragment_maps:OP,lights_fragment_end:FP,logdepthbuf_fragment:kP,logdepthbuf_pars_fragment:zP,logdepthbuf_pars_vertex:BP,logdepthbuf_vertex:HP,map_fragment:VP,map_pars_fragment:GP,map_particle_fragment:WP,map_particle_pars_fragment:XP,metalnessmap_fragment:YP,metalnessmap_pars_fragment:jP,morphcolor_vertex:qP,morphnormal_vertex:$P,morphtarget_pars_vertex:KP,morphtarget_vertex:ZP,normal_fragment_begin:QP,normal_fragment_maps:JP,normal_pars_fragment:e2,normal_pars_vertex:t2,normal_vertex:n2,normalmap_pars_fragment:i2,clearcoat_normal_fragment_begin:r2,clearcoat_normal_fragment_maps:s2,clearcoat_pars_fragment:o2,iridescence_pars_fragment:a2,opaque_fragment:l2,packing:u2,premultiplied_alpha_fragment:c2,project_vertex:f2,dithering_fragment:d2,dithering_pars_fragment:h2,roughnessmap_fragment:p2,roughnessmap_pars_fragment:m2,shadowmap_pars_fragment:g2,shadowmap_pars_vertex:_2,shadowmap_vertex:v2,shadowmask_pars_fragment:x2,skinbase_vertex:y2,skinning_pars_vertex:S2,skinning_vertex:M2,skinnormal_vertex:E2,specularmap_fragment:T2,specularmap_pars_fragment:w2,tonemapping_fragment:A2,tonemapping_pars_fragment:C2,transmission_fragment:R2,transmission_pars_fragment:b2,uv_pars_fragment:P2,uv_pars_vertex:L2,uv_vertex:D2,worldpos_vertex:U2,background_vert:N2,background_frag:I2,backgroundCube_vert:O2,backgroundCube_frag:F2,cube_vert:k2,cube_frag:z2,depth_vert:B2,depth_frag:H2,distanceRGBA_vert:V2,distanceRGBA_frag:G2,equirect_vert:W2,equirect_frag:X2,linedashed_vert:Y2,linedashed_frag:j2,meshbasic_vert:q2,meshbasic_frag:$2,meshlambert_vert:K2,meshlambert_frag:Z2,meshmatcap_vert:Q2,meshmatcap_frag:J2,meshnormal_vert:eL,meshnormal_frag:tL,meshphong_vert:nL,meshphong_frag:iL,meshphysical_vert:rL,meshphysical_frag:sL,meshtoon_vert:oL,meshtoon_frag:aL,points_vert:lL,points_frag:uL,shadow_vert:cL,shadow_frag:fL,sprite_vert:dL,sprite_frag:hL},_e={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},_r={basic:{uniforms:Nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Nn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Nn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Nn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ot(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Nn([_e.points,_e.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Nn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Nn([_e.common,_e.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Nn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Nn([_e.sprite,_e.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Nn([_e.common,_e.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Nn([_e.lights,_e.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};_r.physical={uniforms:Nn([_r.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Kc={r:0,b:0,g:0};function pL(n,e,t,i,r,s,o){const a=new ot(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function _(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Nd)?(c===void 0&&(c=new Ei(new Zu(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ol(_r.backgroundCube.uniforms),vertexShader:_r.backgroundCube.vertexShader,fragmentShader:_r.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ei(new m_(2,2),new Ti({name:"BackgroundMaterial",uniforms:ol(_r.background.uniforms),vertexShader:_r.background.vertexShader,fragmentShader:_r.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(Kc,e1(n)),i.buffers.color.setClear(Kc.r,Kc.g,Kc.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function mL(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(L,I,V,B,U){let O=!1;if(o){const R=g(B,V,I);u!==R&&(u=R,p(u.object)),O=f(L,B,V,U),O&&v(L,B,V,U)}else{const R=I.wireframe===!0;(u.geometry!==B.id||u.program!==V.id||u.wireframe!==R)&&(u.geometry=B.id,u.program=V.id,u.wireframe=R,O=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,P(L,I,V,B),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,I,V){const B=V.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let O=U[I.id];O===void 0&&(O={},U[I.id]=O);let R=O[B];return R===void 0&&(R=m(h()),O[B]=R),R}function m(L){const I=[],V=[],B=[];for(let U=0;U<r;U++)I[U]=0,V[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:B,object:L,attributes:{},index:null}}function f(L,I,V,B){const U=u.attributes,O=I.attributes;let R=0;const $=V.getAttributes();for(const Q in $)if($[Q].location>=0){const K=U[Q];let re=O[Q];if(re===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;R++}return u.attributesNum!==R||u.index!==B}function v(L,I,V,B){const U={},O=I.attributes;let R=0;const $=V.getAttributes();for(const Q in $)if($[Q].location>=0){let K=O[Q];K===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),U[Q]=re,R++}u.attributes=U,u.attributesNum=R,u.index=B}function x(){const L=u.newAttributes;for(let I=0,V=L.length;I<V;I++)L[I]=0}function y(L){T(L,0)}function T(L,I){const V=u.newAttributes,B=u.enabledAttributes,U=u.attributeDivisors;V[L]=1,B[L]===0&&(n.enableVertexAttribArray(L),B[L]=1),U[L]!==I&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,I),U[L]=I)}function w(){const L=u.newAttributes,I=u.enabledAttributes;for(let V=0,B=I.length;V<B;V++)I[V]!==L[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function M(L,I,V,B,U,O,R){R===!0?n.vertexAttribIPointer(L,I,V,U,O):n.vertexAttribPointer(L,I,V,B,U,O)}function P(L,I,V,B){if(i.isWebGL2===!1&&(L.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=B.attributes,O=V.getAttributes(),R=I.defaultAttributeValues;for(const $ in O){const Q=O[$];if(Q.location>=0){let q=U[$];if(q===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const K=q.normalized,re=q.itemSize,pe=t.get(q);if(pe===void 0)continue;const ue=pe.buffer,De=pe.type,Ue=pe.bytesPerElement,Ie=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||q.gpuType===kE);if(q.isInterleavedBufferAttribute){const We=q.data,G=We.stride,Xe=q.offset;if(We.isInstancedInterleavedBuffer){for(let xe=0;xe<Q.locationSize;xe++)T(Q.location+xe,We.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let xe=0;xe<Q.locationSize;xe++)y(Q.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let xe=0;xe<Q.locationSize;xe++)M(Q.location+xe,re/Q.locationSize,De,K,G*Ue,(Xe+re/Q.locationSize*xe)*Ue,Ie)}else{if(q.isInstancedBufferAttribute){for(let We=0;We<Q.locationSize;We++)T(Q.location+We,q.meshPerAttribute);L.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let We=0;We<Q.locationSize;We++)y(Q.location+We);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let We=0;We<Q.locationSize;We++)M(Q.location+We,re/Q.locationSize,De,K,re*Ue,re/Q.locationSize*We*Ue,Ie)}}else if(R!==void 0){const K=R[$];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Q.location,K);break;case 3:n.vertexAttrib3fv(Q.location,K);break;case 4:n.vertexAttrib4fv(Q.location,K);break;default:n.vertexAttrib1fv(Q.location,K)}}}}w()}function S(){N();for(const L in a){const I=a[L];for(const V in I){const B=I[V];for(const U in B)_(B[U].object),delete B[U];delete I[V]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const I=a[L.id];for(const V in I){const B=I[V];for(const U in B)_(B[U].object),delete B[U];delete I[V]}delete a[L.id]}function F(L){for(const I in a){const V=a[I];if(V[L.id]===void 0)continue;const B=V[L.id];for(const U in B)_(B[U].object),delete B[U];delete V[L.id]}}function N(){Z(),c=!0,u!==l&&(u=l,p(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function gL(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,d,h),t.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],d[_]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function _L(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),T=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function vL(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new us,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=f.clippingState||null;l.value=y,y=c(_,h,x,p);for(let T=0;T!==x;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function xL(n){let e=new WeakMap;function t(o,a){return a===bm?o.mapping=il:a===Pm&&(o.mapping=rl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bm||a===Pm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Lb(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class s1 extends t1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ca=4,hx=[.125,.215,.35,.446,.526,.582],ao=20,ep=new s1,px=new ot;let tp=null,np=0,ip=0;const so=(1+Math.sqrt(5))/2,ua=1/so,mx=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,so,ua),new Y(0,so,-ua),new Y(ua,0,so),new Y(-ua,0,so),new Y(so,ua,0),new Y(-so,ua,0)];class gx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tp,np,ip),e.scissorTest=!1,Zc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===il||e.mapping===rl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Ar,format:Gi,colorSpace:Qr,depthBuffer:!1},r=_x(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_x(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yL(s)),this._blurMaterial=SL(s,e,t)}return r}_compileMaterial(e){const t=new Ei(this._lodPlanes[0],e);this._renderer.compile(t,ep)}_sceneToCubeUV(e,t,i,r){const a=new Hi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(px),c.toneMapping=Us,c.autoClear=!1;const p=new go({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),_=new Ei(new Zu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(px),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;Zc(r,v*x,f>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===il||e.mapping===rl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ei(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ep)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mx[(r-1)%mx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ei(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ao-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):ao;m>ao&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ao}`);const f=[];let v=0;for(let M=0;M<ao;++M){const P=M/g,S=Math.exp(-P*P/2);f.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-Ca?r-x+Ca:0),w=4*(this._cubeSize-y);Zc(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(d,ep)}}function yL(n){const e=[],t=[],i=[];let r=n;const s=n-Ca+1+hx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ca?l=hx[o-n+Ca-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,P=w>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,g*_*w),x.set(h,m*_*w);const E=[w,w,w,w,w,w];y.set(E,f*_*w)}const T=new Li;T.setAttribute("position",new Ci(v,g)),T.setAttribute("uv",new Ci(x,m)),T.setAttribute("faceIndex",new Ci(y,f)),e.push(T),r>Ca&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _x(n,e,t){const i=new Ki(n,e,t);return i.texture.mapping=Nd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function SL(n,e,t){const i=new Float32Array(ao),r=new Y(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:g_(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function vx(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:g_(),fragmentShader:`

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
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function xx(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:g_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xr,depthTest:!1,depthWrite:!1})}function g_(){return`

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
	`}function ML(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===bm||l===Pm,c=l===il||l===rl;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new gx(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new gx(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function EL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TL(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],w=v[x+1],M=v[x+2];h.push(T,w,w,M,M,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,w=x+1,M=x+2;h.push(T,w,w,M,M,T)}}else return;const m=new(jE(h)?JE:QE)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function wL(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function d(p,_,g){if(g===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,_,a,p*l,g),t.update(_,s,g)}function h(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let f=0;for(let v=0;v<g;v++)f+=_[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function AL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function CL(n,e){return n[0]-e[0]}function RL(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bL(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new mn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let I=function(){Z.dispose(),s.delete(c),c.removeEventListener("dispose",I)};var p=I;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let E=c.attributes.position.count*S,F=1;E>e.maxTextureSize&&(F=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*F*4*g),Z=new KE(N,E,F,g);Z.type=Ss,Z.needsUpdate=!0;const L=S*4;for(let V=0;V<g;V++){const B=w[V],U=M[V],O=P[V],R=E*F*4*V;for(let $=0;$<B.count;$++){const Q=$*L;x===!0&&(o.fromBufferAttribute(B,$),N[R+Q+0]=o.x,N[R+Q+1]=o.y,N[R+Q+2]=o.z,N[R+Q+3]=0),y===!0&&(o.fromBufferAttribute(U,$),N[R+Q+4]=o.x,N[R+Q+5]=o.y,N[R+Q+6]=o.z,N[R+Q+7]=0),T===!0&&(o.fromBufferAttribute(O,$),N[R+Q+8]=o.x,N[R+Q+9]=o.y,N[R+Q+10]=o.z,N[R+Q+11]=O.itemSize===4?o.w:1)}}m={count:g,texture:Z,size:new Ze(E,F)},s.set(c,m),c.addEventListener("dispose",I)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[c.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<_;y++){const T=g[y];T[0]=y,T[1]=h[y]}g.sort(RL);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(CL);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],M=T[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),f&&c.getAttribute("morphNormal"+y)!==f[w]&&c.setAttribute("morphNormal"+y,f[w]),r[y]=M,v+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function PL(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class o1 extends ai{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Co,c!==Co&&c!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Co&&(i=ys),i===void 0&&c===sl&&(i=Ao),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const a1=new ai,l1=new o1(1,1);l1.compareFunction=YE;const u1=new KE,c1=new mb,f1=new n1,yx=[],Sx=[],Mx=new Float32Array(16),Ex=new Float32Array(9),Tx=new Float32Array(4);function dl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=yx[r];if(s===void 0&&(s=new Float32Array(r),yx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kd(n,e){let t=Sx[e];t===void 0&&(t=new Int32Array(e),Sx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function LL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function DL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function UL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function NL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function IL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Tx.set(i),n.uniformMatrix2fv(this.addr,!1,Tx),rn(t,i)}}function OL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ex.set(i),n.uniformMatrix3fv(this.addr,!1,Ex),rn(t,i)}}function FL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Mx.set(i),n.uniformMatrix4fv(this.addr,!1,Mx),rn(t,i)}}function kL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function BL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function HL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function VL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function GL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function WL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function XL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function YL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?l1:a1;t.setTexture2D(e||s,r)}function jL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||c1,r)}function qL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||f1,r)}function $L(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||u1,r)}function KL(n){switch(n){case 5126:return LL;case 35664:return DL;case 35665:return UL;case 35666:return NL;case 35674:return IL;case 35675:return OL;case 35676:return FL;case 5124:case 35670:return kL;case 35667:case 35671:return zL;case 35668:case 35672:return BL;case 35669:case 35673:return HL;case 5125:return VL;case 36294:return GL;case 36295:return WL;case 36296:return XL;case 35678:case 36198:case 36298:case 36306:case 35682:return YL;case 35679:case 36299:case 36307:return jL;case 35680:case 36300:case 36308:case 36293:return qL;case 36289:case 36303:case 36311:case 36292:return $L}}function ZL(n,e){n.uniform1fv(this.addr,e)}function QL(n,e){const t=dl(e,this.size,2);n.uniform2fv(this.addr,t)}function JL(n,e){const t=dl(e,this.size,3);n.uniform3fv(this.addr,t)}function eD(n,e){const t=dl(e,this.size,4);n.uniform4fv(this.addr,t)}function tD(n,e){const t=dl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nD(n,e){const t=dl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iD(n,e){const t=dl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function rD(n,e){n.uniform1iv(this.addr,e)}function sD(n,e){n.uniform2iv(this.addr,e)}function oD(n,e){n.uniform3iv(this.addr,e)}function aD(n,e){n.uniform4iv(this.addr,e)}function lD(n,e){n.uniform1uiv(this.addr,e)}function uD(n,e){n.uniform2uiv(this.addr,e)}function cD(n,e){n.uniform3uiv(this.addr,e)}function fD(n,e){n.uniform4uiv(this.addr,e)}function dD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a1,s[o])}function hD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||c1,s[o])}function pD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||f1,s[o])}function mD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||u1,s[o])}function gD(n){switch(n){case 5126:return ZL;case 35664:return QL;case 35665:return JL;case 35666:return eD;case 35674:return tD;case 35675:return nD;case 35676:return iD;case 5124:case 35670:return rD;case 35667:case 35671:return sD;case 35668:case 35672:return oD;case 35669:case 35673:return aD;case 5125:return lD;case 36294:return uD;case 36295:return cD;case 36296:return fD;case 35678:case 36198:case 36298:case 36306:case 35682:return dD;case 35679:case 36299:case 36307:return hD;case 35680:case 36300:case 36308:case 36293:return pD;case 36289:case 36303:case 36311:case 36292:return mD}}class _D{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KL(t.type)}}class vD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gD(t.type)}}class xD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function wx(n,e){n.seq.push(e),n.map[e.id]=e}function yD(n,e,t){const i=n.name,r=i.length;for(rp.lastIndex=0;;){const s=rp.exec(i),o=rp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){wx(t,u===void 0?new _D(a,n,e):new vD(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new xD(a),wx(t,d)),t=d}}}class Ef{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);yD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ax(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const SD=37297;let MD=0;function ED(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function TD(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===ud&&t===ld?i="LinearDisplayP3ToLinearSRGB":e===ld&&t===ud&&(i="LinearSRGBToLinearDisplayP3"),n){case Qr:case Id:return[i,"LinearTransferOETF"];case hn:case d_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ED(n.getShaderSource(e),o)}else return r}function wD(n,e){const t=TD(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function AD(n,e){let t;switch(e){case FR:t="Linear";break;case kR:t="Reinhard";break;case zR:t="OptimizedCineon";break;case BR:t="ACESFilmic";break;case VR:t="AgX";break;case HR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function CD(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ra).join(`
`)}function RD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ra).join(`
`)}function bD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function PD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ra(n){return n!==""}function Rx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Om(n){return n.replace(LD,UD)}const DD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function UD(n,e){let t=et[e];if(t===void 0){const i=DD.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Om(t)}const ND=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Px(n){return n.replace(ND,ID)}function ID(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===IE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fR?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ur&&(e="SHADOWMAP_TYPE_VSM"),e}function FD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case il:case rl:e="ENVMAP_TYPE_CUBE";break;case Nd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rl:e="ENVMAP_MODE_REFRACTION";break}return e}function zD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case OE:e="ENVMAP_BLENDING_MULTIPLY";break;case IR:e="ENVMAP_BLENDING_MIX";break;case OR:e="ENVMAP_BLENDING_ADD";break}return e}function BD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function HD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=OD(t),u=FD(t),c=kD(t),d=zD(t),h=BD(t),p=t.isWebGL2?"":CD(t),_=RD(t),g=bD(s),m=r.createProgram();let f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),v.length>0&&(v+=`
`)):(f=[Lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),v=[p,Lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Us?"#define TONE_MAPPING":"",t.toneMapping!==Us?et.tonemapping_pars_fragment:"",t.toneMapping!==Us?AD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,wD("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=Om(o),o=Rx(o,t),o=bx(o,t),a=Om(a),a=Rx(a,t),a=bx(a,t),o=Px(o),a=Px(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===$v?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+f+o,T=x+v+a,w=Ax(r,r.VERTEX_SHADER,y),M=Ax(r,r.FRAGMENT_SHADER,T);r.attachShader(m,w),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(N){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(w).trim(),I=r.getShaderInfoLog(M).trim();let V=!0,B=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,M);else{const U=Cx(r,w,"vertex"),O=Cx(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+U+`
`+O)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||I==="")&&(B=!1);B&&(N.diagnostics={runnable:V,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:I,prefix:v}})}r.deleteShader(w),r.deleteShader(M),S=new Ef(r,m),E=PD(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(m,SD)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=M,this}let VD=0;class GD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WD(e),t.set(e,i)),i}}class WD{constructor(e){this.id=VD++,this.code=e,this.usedTimes=0}}function XD(n,e,t,i,r,s,o){const a=new p_,l=new GD,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,E,F,N,Z){const L=N.fog,I=Z.geometry,V=S.isMeshStandardMaterial?N.environment:null,B=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),U=B&&B.mapping===Nd?B.image.height:null,O=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=R!==void 0?R.length:0;let Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let q,K,re,pe;if(O){const Ae=_r[O];q=Ae.vertexShader,K=Ae.fragmentShader}else q=S.vertexShader,K=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const ue=n.getRenderTarget(),De=Z.isInstancedMesh===!0,Ue=Z.isBatchedMesh===!0,Ie=!!S.map,We=!!S.matcap,G=!!B,Xe=!!S.aoMap,xe=!!S.lightMap,Pe=!!S.bumpMap,ee=!!S.normalMap,z=!!S.displacementMap,Me=!!S.emissiveMap,b=!!S.metalnessMap,A=!!S.roughnessMap,H=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,ie=S.sheen>0,ve=S.transmission>0,me=H&&!!S.anisotropyMap,fe=ne&&!!S.clearcoatMap,Se=ne&&!!S.clearcoatNormalMap,ce=ne&&!!S.clearcoatRoughnessMap,J=te&&!!S.iridescenceMap,Qe=te&&!!S.iridescenceThicknessMap,we=ie&&!!S.sheenColorMap,ze=ie&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,ye=!!S.specularColorMap,Ye=!!S.specularIntensityMap,Ke=ve&&!!S.transmissionMap,ct=ve&&!!S.thicknessMap,ge=!!S.gradientMap,oe=!!S.alphaMap,D=S.alphaTest>0,le=!!S.alphaHash,de=!!S.extensions,Be=!!I.attributes.uv1,Fe=!!I.attributes.uv2,lt=!!I.attributes.uv3;let dt=Us;return S.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:c,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:K,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ue,instancing:De,instancingColor:De&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ue===null?n.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Qr,map:Ie,matcap:We,envMap:G,envMapMode:G&&B.mapping,envMapCubeUVHeight:U,aoMap:Xe,lightMap:xe,bumpMap:Pe,normalMap:ee,displacementMap:h&&z,emissiveMap:Me,normalMapObjectSpace:ee&&S.normalMapType===tb,normalMapTangentSpace:ee&&S.normalMapType===eb,metalnessMap:b,roughnessMap:A,anisotropy:H,anisotropyMap:me,clearcoat:ne,clearcoatMap:fe,clearcoatNormalMap:Se,clearcoatRoughnessMap:ce,iridescence:te,iridescenceMap:J,iridescenceThicknessMap:Qe,sheen:ie,sheenColorMap:we,sheenRoughnessMap:ze,specularMap:Ee,specularColorMap:ye,specularIntensityMap:Ye,transmission:ve,transmissionMap:Ke,thicknessMap:ct,gradientMap:ge,opaque:S.transparent===!1&&S.blending===Va,alphaMap:oe,alphaTest:D,alphaHash:le,combine:S.combine,mapUv:Ie&&g(S.map.channel),aoMapUv:Xe&&g(S.aoMap.channel),lightMapUv:xe&&g(S.lightMap.channel),bumpMapUv:Pe&&g(S.bumpMap.channel),normalMapUv:ee&&g(S.normalMap.channel),displacementMapUv:z&&g(S.displacementMap.channel),emissiveMapUv:Me&&g(S.emissiveMap.channel),metalnessMapUv:b&&g(S.metalnessMap.channel),roughnessMapUv:A&&g(S.roughnessMap.channel),anisotropyMapUv:me&&g(S.anisotropyMap.channel),clearcoatMapUv:fe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ze&&g(S.sheenRoughnessMap.channel),specularMapUv:Ee&&g(S.specularMap.channel),specularColorMapUv:ye&&g(S.specularColorMap.channel),specularIntensityMapUv:Ye&&g(S.specularIntensityMap.channel),transmissionMapUv:Ke&&g(S.transmissionMap.channel),thicknessMapUv:ct&&g(S.thicknessMap.channel),alphaMapUv:oe&&g(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ee||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Fe,vertexUv3s:lt,pointsUvs:Z.isPoints===!0&&!!I.attributes.uv&&(Ie||oe),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Vi,flipSided:S.side===oi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:de&&S.extensions.derivatives===!0,extensionFragDepth:de&&S.extensions.fragDepth===!0,extensionDrawBuffers:de&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:de&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)E.push(F),E.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=_[S.type];let F;if(E){const N=_r[E];F=dd.clone(N.uniforms)}else F=S.uniforms;return F}function T(S,E){let F;for(let N=0,Z=u.length;N<Z;N++){const L=u[N];if(L.cacheKey===E){F=L,++F.usedTimes;break}}return F===void 0&&(F=new HD(n,E,S,s),u.push(F)),F}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:P}}function YD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function jD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ux(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,_,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||jD),i.length>1&&i.sort(h||Dx),r.length>1&&r.sort(h||Dx)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function qD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ux,n.set(i,[o])):r>=s.length?(o=new Ux,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function $D(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ot};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function KD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ZD=0;function QD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JD(n,e){const t=new $D,i=KD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new Y);const s=new Y,o=new cn,a=new cn;function l(c,d){let h=0,p=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let g=0,m=0,f=0,v=0,x=0,y=0,T=0,w=0,M=0,P=0,S=0;c.sort(QD);const E=d===!0?Math.PI:1;for(let N=0,Z=c.length;N<Z;N++){const L=c[N],I=L.color,V=L.intensity,B=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=I.r*V*E,p+=I.g*V*E,_+=I.b*V*E;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],V);S++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.directionalShadow[g]=$,r.directionalShadowMap[g]=U,r.directionalShadowMatrix[g]=L.shadow.matrix,y++}r.directional[g]=O,g++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(I).multiplyScalar(V*E),O.distance=B,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[f]=O;const R=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,R.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=R.matrix,L.castShadow){const $=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=U,w++}f++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(I).multiplyScalar(V),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=O,v++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*E),O.distance=L.distance,O.decay=L.decay,L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=L.shadow.matrix,T++}r.point[m]=O,m++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(V*E),O.groundColor.copy(L.groundColor).multiplyScalar(V*E),r.hemi[x]=O,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const F=r.hash;(F.directionalLength!==g||F.pointLength!==m||F.spotLength!==f||F.rectAreaLength!==v||F.hemiLength!==x||F.numDirectionalShadows!==y||F.numPointShadows!==T||F.numSpotShadows!==w||F.numSpotMaps!==M||F.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,F.directionalLength=g,F.pointLength=m,F.spotLength=f,F.rectAreaLength=v,F.hemiLength=x,F.numDirectionalShadows=y,F.numPointShadows=T,F.numSpotShadows=w,F.numSpotMaps=M,F.numLightProbes=S,r.version=ZD++)}function u(c,d){let h=0,p=0,_=0,g=0,m=0;const f=d.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),h++}else if(y.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const T=r.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Nx(n,e){const t=new JD(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function e3(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Nx(n,e),t.set(s,[l])):o>=a.length?(l=new Nx(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class t3 extends Ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n3 extends Ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const i3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r3=`uniform sampler2D shadow_pass;
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
}`;function s3(n,e,t){let i=new i1;const r=new Ze,s=new Ze,o=new mn,a=new t3({depthPacking:JR}),l=new n3,u={},c=t.maxTextureSize,d={[Hs]:oi,[oi]:Hs,[Vi]:Vi},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:i3,fragmentShader:r3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Li;_.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ei(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=IE;let f=this.type;this.render=function(w,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Xr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Z=f!==Ur&&this.type===Ur,L=f===Ur&&this.type!==Ur;for(let I=0,V=w.length;I<V;I++){const B=w[I],U=B.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();if(r.multiply(O),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,U.mapSize.y=s.y)),U.map===null||Z===!0||L===!0){const $=this.type!==Ur?{minFilter:zn,magFilter:zn}:{};U.map!==null&&U.map.dispose(),U.map=new Ki(r.x,r.y,$),U.map.texture.name=B.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const R=U.getViewportCount();for(let $=0;$<R;$++){const Q=U.getViewport($);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),N.viewport(o),U.updateMatrices(B,$),i=U.getFrustum(),y(M,P,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===Ur&&v(U,P),U.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,F)};function v(w,M){const P=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ki(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,P,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,P,p,g,null)}function x(w,M,P,S){let E=null;const F=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)E=F;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=E.uuid,Z=M.uuid;let L=u[N];L===void 0&&(L={},u[N]=L);let I=L[Z];I===void 0&&(I=E.clone(),L[Z]=I,M.addEventListener("dispose",T)),E=I}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Ur?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:d[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=n.properties.get(E);N.light=P}return E}function y(w,M,P,S,E){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Ur)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),L=w.material;if(Array.isArray(L)){const I=Z.groups;for(let V=0,B=I.length;V<B;V++){const U=I[V],O=L[U.materialIndex];if(O&&O.visible){const R=x(w,O,S,E);w.onBeforeShadow(n,w,M,P,Z,R,U),n.renderBufferDirect(P,null,Z,R,w,U),w.onAfterShadow(n,w,M,P,Z,R,U)}}}else if(L.visible){const I=x(w,L,S,E);w.onBeforeShadow(n,w,M,P,Z,I,null),n.renderBufferDirect(P,null,Z,I,w,null),w.onAfterShadow(n,w,M,P,Z,I,null)}}const N=w.children;for(let Z=0,L=N.length;Z<L;Z++)y(N[Z],M,P,S,E)}function T(w){w.target.removeEventListener("dispose",T);for(const P in u){const S=u[P],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function o3(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const le=new mn;let de=null;const Be=new mn(0,0,0,0);return{setMask:function(Fe){de!==Fe&&!D&&(n.colorMask(Fe,Fe,Fe,Fe),de=Fe)},setLocked:function(Fe){D=Fe},setClear:function(Fe,lt,dt,Le,Ae){Ae===!0&&(Fe*=Le,lt*=Le,dt*=Le),le.set(Fe,lt,dt,Le),Be.equals(le)===!1&&(n.clearColor(Fe,lt,dt,Le),Be.copy(le))},reset:function(){D=!1,de=null,Be.set(-1,0,0,0)}}}function s(){let D=!1,le=null,de=null,Be=null;return{setTest:function(Fe){Fe?Ue(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Fe){le!==Fe&&!D&&(n.depthMask(Fe),le=Fe)},setFunc:function(Fe){if(de!==Fe){switch(Fe){case RR:n.depthFunc(n.NEVER);break;case bR:n.depthFunc(n.ALWAYS);break;case PR:n.depthFunc(n.LESS);break;case od:n.depthFunc(n.LEQUAL);break;case LR:n.depthFunc(n.EQUAL);break;case DR:n.depthFunc(n.GEQUAL);break;case UR:n.depthFunc(n.GREATER);break;case NR:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=Fe}},setLocked:function(Fe){D=Fe},setClear:function(Fe){Be!==Fe&&(n.clearDepth(Fe),Be=Fe)},reset:function(){D=!1,le=null,de=null,Be=null}}}function o(){let D=!1,le=null,de=null,Be=null,Fe=null,lt=null,dt=null,Le=null,Ae=null;return{setTest:function(Oe){D||(Oe?Ue(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Oe){le!==Oe&&!D&&(n.stencilMask(Oe),le=Oe)},setFunc:function(Oe,ae,He){(de!==Oe||Be!==ae||Fe!==He)&&(n.stencilFunc(Oe,ae,He),de=Oe,Be=ae,Fe=He)},setOp:function(Oe,ae,He){(lt!==Oe||dt!==ae||Le!==He)&&(n.stencilOp(Oe,ae,He),lt=Oe,dt=ae,Le=He)},setLocked:function(Oe){D=Oe},setClear:function(Oe){Ae!==Oe&&(n.clearStencil(Oe),Ae=Oe)},reset:function(){D=!1,le=null,de=null,Be=null,Fe=null,lt=null,dt=null,Le=null,Ae=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,y=null,T=null,w=null,M=null,P=null,S=new ot(0,0,0),E=0,F=!1,N=null,Z=null,L=null,I=null,V=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(R)[1]),U=O>=1):R.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),U=O>=2);let $=null,Q={};const q=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),re=new mn().fromArray(q),pe=new mn().fromArray(K);function ue(D,le,de,Be){const Fe=new Uint8Array(4),lt=n.createTexture();n.bindTexture(D,lt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<de;dt++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(le+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return lt}const De={};De[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ue(n.DEPTH_TEST),l.setFunc(od),Me(!1),b(gv),Ue(n.CULL_FACE),ee(Xr);function Ue(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function We(D,le){return p[D]!==le?(n.bindFramebuffer(D,le),p[D]=le,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function G(D,le){let de=g,Be=!1;if(D)if(de=_.get(le),de===void 0&&(de=[],_.set(le,de)),D.isWebGLMultipleRenderTargets){const Fe=D.texture;if(de.length!==Fe.length||de[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,dt=Fe.length;lt<dt;lt++)de[lt]=n.COLOR_ATTACHMENT0+lt;de.length=Fe.length,Be=!0}}else de[0]!==n.COLOR_ATTACHMENT0&&(de[0]=n.COLOR_ATTACHMENT0,Be=!0);else de[0]!==n.BACK&&(de[0]=n.BACK,Be=!0);Be&&(t.isWebGL2?n.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Xe(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const xe={[oo]:n.FUNC_ADD,[hR]:n.FUNC_SUBTRACT,[pR]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[xv]=n.MIN,xe[yv]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(xe[xv]=D.MIN_EXT,xe[yv]=D.MAX_EXT)}const Pe={[mR]:n.ZERO,[gR]:n.ONE,[_R]:n.SRC_COLOR,[Cm]:n.SRC_ALPHA,[ER]:n.SRC_ALPHA_SATURATE,[SR]:n.DST_COLOR,[xR]:n.DST_ALPHA,[vR]:n.ONE_MINUS_SRC_COLOR,[Rm]:n.ONE_MINUS_SRC_ALPHA,[MR]:n.ONE_MINUS_DST_COLOR,[yR]:n.ONE_MINUS_DST_ALPHA,[TR]:n.CONSTANT_COLOR,[wR]:n.ONE_MINUS_CONSTANT_COLOR,[AR]:n.CONSTANT_ALPHA,[CR]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(D,le,de,Be,Fe,lt,dt,Le,Ae,Oe){if(D===Xr){f===!0&&(Ie(n.BLEND),f=!1);return}if(f===!1&&(Ue(n.BLEND),f=!0),D!==dR){if(D!==v||Oe!==F){if((x!==oo||w!==oo)&&(n.blendEquation(n.FUNC_ADD),x=oo,w=oo),Oe)switch(D){case Va:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.ONE,n.ONE);break;case _v:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Va:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _v:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,M=null,P=null,S.set(0,0,0),E=0,v=D,F=Oe}return}Fe=Fe||le,lt=lt||de,dt=dt||Be,(le!==x||Fe!==w)&&(n.blendEquationSeparate(xe[le],xe[Fe]),x=le,w=Fe),(de!==y||Be!==T||lt!==M||dt!==P)&&(n.blendFuncSeparate(Pe[de],Pe[Be],Pe[lt],Pe[dt]),y=de,T=Be,M=lt,P=dt),(Le.equals(S)===!1||Ae!==E)&&(n.blendColor(Le.r,Le.g,Le.b,Ae),S.copy(Le),E=Ae),v=D,F=!1}function z(D,le){D.side===Vi?Ie(n.CULL_FACE):Ue(n.CULL_FACE);let de=D.side===oi;le&&(de=!de),Me(de),D.blending===Va&&D.transparent===!1?ee(Xr):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Be=D.stencilWrite;u.setTest(Be),Be&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Me(D){N!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),N=D)}function b(D){D!==uR?(Ue(n.CULL_FACE),D!==Z&&(D===gv?n.cullFace(n.BACK):D===cR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),Z=D}function A(D){D!==L&&(U&&n.lineWidth(D),L=D)}function H(D,le,de){D?(Ue(n.POLYGON_OFFSET_FILL),(I!==le||V!==de)&&(n.polygonOffset(le,de),I=le,V=de)):Ie(n.POLYGON_OFFSET_FILL)}function ne(D){D?Ue(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function te(D){D===void 0&&(D=n.TEXTURE0+B-1),$!==D&&(n.activeTexture(D),$=D)}function ie(D,le,de){de===void 0&&($===null?de=n.TEXTURE0+B-1:de=$);let Be=Q[de];Be===void 0&&(Be={type:void 0,texture:void 0},Q[de]=Be),(Be.type!==D||Be.texture!==le)&&($!==de&&(n.activeTexture(de),$=de),n.bindTexture(D,le||De[D]),Be.type=D,Be.texture=le)}function ve(){const D=Q[$];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function me(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function Ke(D){pe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),pe.copy(D))}function ct(D,le){let de=d.get(le);de===void 0&&(de=new WeakMap,d.set(le,de));let Be=de.get(D);Be===void 0&&(Be=n.getUniformBlockIndex(le,D.name),de.set(D,Be))}function ge(D,le){const Be=d.get(le).get(D);c.get(le)!==Be&&(n.uniformBlockBinding(le,Be,D.__bindingPointIndex),c.set(le,Be))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,Q={},p={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,y=null,T=null,w=null,M=null,P=null,S=new ot(0,0,0),E=0,F=!1,N=null,Z=null,L=null,I=null,V=null,re.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ue,disable:Ie,bindFramebuffer:We,drawBuffers:G,useProgram:Xe,setBlending:ee,setMaterial:z,setFlipSided:Me,setCullFace:b,setLineWidth:A,setPolygonOffset:H,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:ve,compressedTexImage2D:me,compressedTexImage3D:fe,texImage2D:Ee,texImage3D:ye,updateUBOMapping:ct,uniformBlockBinding:ge,texStorage2D:we,texStorage3D:ze,texSubImage2D:Se,texSubImage3D:ce,compressedTexSubImage2D:J,compressedTexSubImage3D:Qe,scissor:Ye,viewport:Ke,reset:oe}}function a3(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,A){return p?new OffscreenCanvas(b,A):fd("canvas")}function g(b,A,H,ne){let te=1;if((b.width>ne||b.height>ne)&&(te=ne/Math.max(b.width,b.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=A?Im:Math.floor,ve=ie(te*b.width),me=ie(te*b.height);d===void 0&&(d=_(ve,me));const fe=H?_(ve,me):d;return fe.width=ve,fe.height=me,fe.getContext("2d").drawImage(b,0,0,ve,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+me+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Kv(b.width)&&Kv(b.height)}function f(b){return a?!1:b.wrapS!==lr||b.wrapT!==lr||b.minFilter!==zn&&b.minFilter!==$n}function v(b,A){return b.generateMipmaps&&A&&b.minFilter!==zn&&b.minFilter!==$n}function x(b){n.generateMipmap(b)}function y(b,A,H,ne,te=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=A;if(A===n.RED&&(H===n.FLOAT&&(ie=n.R32F),H===n.HALF_FLOAT&&(ie=n.R16F),H===n.UNSIGNED_BYTE&&(ie=n.R8)),A===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ie=n.R8UI),H===n.UNSIGNED_SHORT&&(ie=n.R16UI),H===n.UNSIGNED_INT&&(ie=n.R32UI),H===n.BYTE&&(ie=n.R8I),H===n.SHORT&&(ie=n.R16I),H===n.INT&&(ie=n.R32I)),A===n.RG&&(H===n.FLOAT&&(ie=n.RG32F),H===n.HALF_FLOAT&&(ie=n.RG16F),H===n.UNSIGNED_BYTE&&(ie=n.RG8)),A===n.RGBA){const ve=te?ad:yt.getTransfer(ne);H===n.FLOAT&&(ie=n.RGBA32F),H===n.HALF_FLOAT&&(ie=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ie=ve===Rt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(b,A,H){return v(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==zn&&b.minFilter!==$n?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function w(b){return b===zn||b===Sv||b===bh?n.NEAREST:n.LINEAR}function M(b){const A=b.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function P(b){const A=b.target;A.removeEventListener("dispose",P),F(A)}function S(b){const A=i.get(b);if(A.__webglInit===void 0)return;const H=b.source,ne=h.get(H);if(ne){const te=ne[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(ne).length===0&&h.delete(H)}i.remove(b)}function E(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const H=b.source,ne=h.get(H);delete ne[A.__cacheKey],o.memory.textures--}function F(b){const A=b.texture,H=i.get(b),ne=i.get(A);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(H.__webglFramebuffer[te]))for(let ie=0;ie<H.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(H.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(H.__webglFramebuffer[te]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[te])}else{if(Array.isArray(H.__webglFramebuffer))for(let te=0;te<H.__webglFramebuffer.length;te++)n.deleteFramebuffer(H.__webglFramebuffer[te]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,ie=A.length;te<ie;te++){const ve=i.get(A[te]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(b)}let N=0;function Z(){N=0}function L(){const b=N;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),N+=1,b}function I(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function V(b,A){const H=i.get(b);if(b.isVideoTexture&&z(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(H,b,A);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+A)}function B(b,A){const H=i.get(b);if(b.version>0&&H.__version!==b.version){re(H,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+A)}function U(b,A){const H=i.get(b);if(b.version>0&&H.__version!==b.version){re(H,b,A);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+A)}function O(b,A){const H=i.get(b);if(b.version>0&&H.__version!==b.version){pe(H,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+A)}const R={[Lm]:n.REPEAT,[lr]:n.CLAMP_TO_EDGE,[Dm]:n.MIRRORED_REPEAT},$={[zn]:n.NEAREST,[Sv]:n.NEAREST_MIPMAP_NEAREST,[bh]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[GR]:n.LINEAR_MIPMAP_NEAREST,[ku]:n.LINEAR_MIPMAP_LINEAR},Q={[nb]:n.NEVER,[lb]:n.ALWAYS,[ib]:n.LESS,[YE]:n.LEQUAL,[rb]:n.EQUAL,[ab]:n.GEQUAL,[sb]:n.GREATER,[ob]:n.NOTEQUAL};function q(b,A,H){if(H?(n.texParameteri(b,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,R[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,$[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,$[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==lr||A.wrapT!==lr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==zn&&A.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===zn||A.minFilter!==bh&&A.minFilter!==ku||A.type===Ss&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ar&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function K(b,A){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",M));const ne=A.source;let te=h.get(ne);te===void 0&&(te={},h.set(ne,te));const ie=I(A);if(ie!==b.__cacheKey){te[ie]===void 0&&(te[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[ie].usedTimes++;const ve=te[b.__cacheKey];ve!==void 0&&(te[b.__cacheKey].usedTimes--,ve.usedTimes===0&&E(A)),b.__cacheKey=ie,b.__webglTexture=te[ie].texture}return H}function re(b,A,H){let ne=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=n.TEXTURE_3D);const te=K(b,A),ie=A.source;t.bindTexture(ne,b.__webglTexture,n.TEXTURE0+H);const ve=i.get(ie);if(ie.version!==ve.__version||te===!0){t.activeTexture(n.TEXTURE0+H);const me=yt.getPrimaries(yt.workingColorSpace),fe=A.colorSpace===Wi?null:yt.getPrimaries(A.colorSpace),Se=A.colorSpace===Wi||me===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const ce=f(A)&&m(A.image)===!1;let J=g(A.image,ce,!1,r.maxTextureSize);J=Me(A,J);const Qe=m(J)||a,we=s.convert(A.format,A.colorSpace);let ze=s.convert(A.type),Ee=y(A.internalFormat,we,ze,A.colorSpace,A.isVideoTexture);q(ne,A,Qe);let ye;const Ye=A.mipmaps,Ke=a&&A.isVideoTexture!==!0&&Ee!==WE,ct=ve.__version===void 0||te===!0,ge=T(A,J,Qe);if(A.isDepthTexture)Ee=n.DEPTH_COMPONENT,a?A.type===Ss?Ee=n.DEPTH_COMPONENT32F:A.type===ys?Ee=n.DEPTH_COMPONENT24:A.type===Ao?Ee=n.DEPTH24_STENCIL8:Ee=n.DEPTH_COMPONENT16:A.type===Ss&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Co&&Ee===n.DEPTH_COMPONENT&&A.type!==f_&&A.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ys,ze=s.convert(A.type)),A.format===sl&&Ee===n.DEPTH_COMPONENT&&(Ee=n.DEPTH_STENCIL,A.type!==Ao&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ao,ze=s.convert(A.type))),ct&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ee,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,we,ze,null));else if(A.isDataTexture)if(Ye.length>0&&Qe){Ke&&ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ee,Ye[0].width,Ye[0].height);for(let oe=0,D=Ye.length;oe<D;oe++)ye=Ye[oe],Ke?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ye.width,ye.height,we,ze,ye.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,ye.width,ye.height,0,we,ze,ye.data);A.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,we,ze,J.data)):t.texImage2D(n.TEXTURE_2D,0,Ee,J.width,J.height,0,we,ze,J.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ke&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ee,Ye[0].width,Ye[0].height,J.depth);for(let oe=0,D=Ye.length;oe<D;oe++)ye=Ye[oe],A.format!==Gi?we!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,J.depth,we,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,ye.width,ye.height,J.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,ye.width,ye.height,J.depth,we,ze,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Ee,ye.width,ye.height,J.depth,0,we,ze,ye.data)}else{Ke&&ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ee,Ye[0].width,Ye[0].height);for(let oe=0,D=Ye.length;oe<D;oe++)ye=Ye[oe],A.format!==Gi?we!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,ye.width,ye.height,we,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,ye.width,ye.height,we,ze,ye.data):t.texImage2D(n.TEXTURE_2D,oe,Ee,ye.width,ye.height,0,we,ze,ye.data)}else if(A.isDataArrayTexture)Ke?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,we,ze,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,we,ze,J.data);else if(A.isData3DTexture)Ke?(ct&&t.texStorage3D(n.TEXTURE_3D,ge,Ee,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,we,ze,J.data)):t.texImage3D(n.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,we,ze,J.data);else if(A.isFramebufferTexture){if(ct)if(Ke)t.texStorage2D(n.TEXTURE_2D,ge,Ee,J.width,J.height);else{let oe=J.width,D=J.height;for(let le=0;le<ge;le++)t.texImage2D(n.TEXTURE_2D,le,Ee,oe,D,0,we,ze,null),oe>>=1,D>>=1}}else if(Ye.length>0&&Qe){Ke&&ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ee,Ye[0].width,Ye[0].height);for(let oe=0,D=Ye.length;oe<D;oe++)ye=Ye[oe],Ke?t.texSubImage2D(n.TEXTURE_2D,oe,0,0,we,ze,ye):t.texImage2D(n.TEXTURE_2D,oe,Ee,we,ze,ye);A.generateMipmaps=!1}else Ke?(ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ee,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,ze,J)):t.texImage2D(n.TEXTURE_2D,0,Ee,we,ze,J);v(A,Qe)&&x(ne),ve.__version=ie.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function pe(b,A,H){if(A.image.length!==6)return;const ne=K(b,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+H);const ie=i.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const ve=yt.getPrimaries(yt.workingColorSpace),me=A.colorSpace===Wi?null:yt.getPrimaries(A.colorSpace),fe=A.colorSpace===Wi||ve===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Se=A.isCompressedTexture||A.image[0].isCompressedTexture,ce=A.image[0]&&A.image[0].isDataTexture,J=[];for(let oe=0;oe<6;oe++)!Se&&!ce?J[oe]=g(A.image[oe],!1,!0,r.maxCubemapSize):J[oe]=ce?A.image[oe].image:A.image[oe],J[oe]=Me(A,J[oe]);const Qe=J[0],we=m(Qe)||a,ze=s.convert(A.format,A.colorSpace),Ee=s.convert(A.type),ye=y(A.internalFormat,ze,Ee,A.colorSpace),Ye=a&&A.isVideoTexture!==!0,Ke=ie.__version===void 0||ne===!0;let ct=T(A,Qe,we);q(n.TEXTURE_CUBE_MAP,A,we);let ge;if(Se){Ye&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ye,Qe.width,Qe.height);for(let oe=0;oe<6;oe++){ge=J[oe].mipmaps;for(let D=0;D<ge.length;D++){const le=ge[D];A.format!==Gi?ze!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,le.width,le.height,ze,le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,0,0,le.width,le.height,ze,Ee,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D,ye,le.width,le.height,0,ze,Ee,le.data)}}}else{ge=A.mipmaps,Ye&&Ke&&(ge.length>0&&ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ye,J[0].width,J[0].height));for(let oe=0;oe<6;oe++)if(ce){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,J[oe].width,J[oe].height,ze,Ee,J[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ye,J[oe].width,J[oe].height,0,ze,Ee,J[oe].data);for(let D=0;D<ge.length;D++){const de=ge[D].image[oe].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,de.width,de.height,ze,Ee,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,ye,de.width,de.height,0,ze,Ee,de.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ze,Ee,J[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ye,ze,Ee,J[oe]);for(let D=0;D<ge.length;D++){const le=ge[D];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,0,0,ze,Ee,le.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,D+1,ye,ze,Ee,le.image[oe])}}}v(A,we)&&x(n.TEXTURE_CUBE_MAP),ie.__version=te.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function ue(b,A,H,ne,te,ie){const ve=s.convert(H.format,H.colorSpace),me=s.convert(H.type),fe=y(H.internalFormat,ve,me,H.colorSpace);if(!i.get(A).__hasExternalTextures){const ce=Math.max(1,A.width>>ie),J=Math.max(1,A.height>>ie);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,fe,ce,J,A.depth,0,ve,me,null):t.texImage2D(te,ie,fe,ce,J,0,ve,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),ee(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(H).__webglTexture,0,Pe(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(H).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(b,A,H){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||ee(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===Ss?ne=n.DEPTH_COMPONENT32F:te.type===ys&&(ne=n.DEPTH_COMPONENT24));const ie=Pe(A);ee(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const ne=Pe(A);H&&ee(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):ee(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],ve=s.convert(ie.format,ie.colorSpace),me=s.convert(ie.type),fe=y(ie.internalFormat,ve,me,ie.colorSpace),Se=Pe(A);H&&ee(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,fe,A.width,A.height):ee(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);const ne=i.get(A.depthTexture).__webglTexture,te=Pe(A);if(A.depthTexture.format===Co)ee(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(A.depthTexture.format===sl)ee(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const A=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ue(A.__webglFramebuffer,b)}else if(H){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=n.createRenderbuffer(),De(A.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),De(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(b,A,H){const ne=i.get(b);A!==void 0&&ue(ne.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ie(b)}function G(b){const A=b.texture,H=i.get(b),ne=i.get(A);b.addEventListener("dispose",P),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=A.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,ve=m(b)||a;if(te){H.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer[me]=[];for(let fe=0;fe<A.mipmaps.length;fe++)H.__webglFramebuffer[me][fe]=n.createFramebuffer()}else H.__webglFramebuffer[me]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){H.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)H.__webglFramebuffer[me]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const me=b.texture;for(let fe=0,Se=me.length;fe<Se;fe++){const ce=i.get(me[fe]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ee(b)===!1){const me=ie?A:[A];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<me.length;fe++){const Se=me[fe];H.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);const ce=s.convert(Se.format,Se.colorSpace),J=s.convert(Se.type),Qe=y(Se.internalFormat,ce,J,Se.colorSpace,b.isXRRenderTarget===!0),we=Pe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Qe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),De(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,A,ve);for(let me=0;me<6;me++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)ue(H.__webglFramebuffer[me][fe],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,fe);else ue(H.__webglFramebuffer[me],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(A,ve)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const me=b.texture;for(let fe=0,Se=me.length;fe<Se;fe++){const ce=me[fe],J=i.get(ce);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),q(n.TEXTURE_2D,ce,ve),ue(H.__webglFramebuffer,b,ce,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),v(ce,ve)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?me=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ne.__webglTexture),q(me,A,ve),a&&A.mipmaps&&A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)ue(H.__webglFramebuffer[fe],b,A,n.COLOR_ATTACHMENT0,me,fe);else ue(H.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,me,0);v(A,ve)&&x(me),t.unbindTexture()}b.depthBuffer&&Ie(b)}function Xe(b){const A=m(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,te=H.length;ne<te;ne++){const ie=H[ne];if(v(ie,A)){const ve=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,me=i.get(ie).__webglTexture;t.bindTexture(ve,me),x(ve),t.unbindTexture()}}}function xe(b){if(a&&b.samples>0&&ee(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ne=b.height;let te=n.COLOR_BUFFER_BIT;const ie=[],ve=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(b),fe=b.isWebGLMultipleRenderTargets===!0;if(fe)for(let Se=0;Se<A.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<A.length;Se++){ie.push(n.COLOR_ATTACHMENT0+Se),b.depthBuffer&&ie.push(ve);const ce=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(ce===!1&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Se]),ce===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),fe){const J=i.get(A[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<A.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const ce=i.get(A[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,ce,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function Pe(b){return Math.min(r.maxSamples,b.samples)}function ee(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function z(b){const A=o.render.frame;c.get(b)!==A&&(c.set(b,A),b.update())}function Me(b,A){const H=b.colorSpace,ne=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Um||H!==Qr&&H!==Wi&&(yt.getTransfer(H)===Rt?a===!1?e.has("EXT_sRGB")===!0&&ne===Gi?(b.format=Um,b.minFilter=$n,b.generateMipmaps=!1):A=qE.sRGBToLinear(A):(ne!==Gi||te!==Ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),A}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=O,this.rebindTextures=We,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ee}function l3(n,e,t){const i=t.isWebGL2;function r(s,o=Wi){let a;const l=yt.getTransfer(o);if(s===Ns)return n.UNSIGNED_BYTE;if(s===zE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===BE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===WR)return n.BYTE;if(s===XR)return n.SHORT;if(s===f_)return n.UNSIGNED_SHORT;if(s===kE)return n.INT;if(s===ys)return n.UNSIGNED_INT;if(s===Ss)return n.FLOAT;if(s===Ar)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===YR)return n.ALPHA;if(s===Gi)return n.RGBA;if(s===jR)return n.LUMINANCE;if(s===qR)return n.LUMINANCE_ALPHA;if(s===Co)return n.DEPTH_COMPONENT;if(s===sl)return n.DEPTH_STENCIL;if(s===Um)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$R)return n.RED;if(s===HE)return n.RED_INTEGER;if(s===KR)return n.RG;if(s===VE)return n.RG_INTEGER;if(s===GE)return n.RGBA_INTEGER;if(s===Ph||s===Lh||s===Dh||s===Uh)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ph)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ph)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mv||s===Ev||s===Tv||s===wv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Mv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ev)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===WE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Av||s===Cv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Av)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Cv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rv||s===bv||s===Pv||s===Lv||s===Dv||s===Uv||s===Nv||s===Iv||s===Ov||s===Fv||s===kv||s===zv||s===Bv||s===Hv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Rv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Uv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Iv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ov)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nh||s===Vv||s===Gv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Nh)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Vv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ZR||s===Wv||s===Xv||s===Yv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Nh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Wv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ao?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class u3 extends Hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qc extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c3={type:"move"};class sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class f3 extends fl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const v=[],x=[],y=new Ze;let T=null;const w=new Hi;w.layers.enable(1),w.viewport=new mn;const M=new Hi;M.layers.enable(2),M.viewport=new mn;const P=[w,M],S=new u3;S.layers.enable(1),S.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=v[q];return K===void 0&&(K=new sp,v[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=v[q];return K===void 0&&(K=new sp,v[q]=K),K.getGripSpace()},this.getHand=function(q){let K=v[q];return K===void 0&&(K=new sp,v[q]=K),K.getHandSpace()};function N(q){const K=x.indexOf(q.inputSource);if(K===-1)return;const re=v[K];re!==void 0&&(re.update(q.inputSource,q.frame,u||o),re.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let q=0;q<v.length;q++){const K=x[q];K!==null&&(x[q]=null,v[q].disconnect(K))}E=null,F=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ki(p.framebufferWidth,p.framebufferHeight,{format:Gi,type:Ns,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,re=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?sl:Co,re=g.stencil?Ao:ys);const ue={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ue),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Ki(h.textureWidth,h.textureHeight,{format:Gi,type:Ns,depthTexture:new o1(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const De=e.properties.get(f);De.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let K=0;K<q.removed.length;K++){const re=q.removed[K],pe=x.indexOf(re);pe>=0&&(x[pe]=null,v[pe].disconnect(re))}for(let K=0;K<q.added.length;K++){const re=q.added[K];let pe=x.indexOf(re);if(pe===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(re),pe=De;break}else if(x[De]===null){x[De]=re,pe=De;break}if(pe===-1)break}const ue=v[pe];ue&&ue.connect(re)}}const I=new Y,V=new Y;function B(q,K,re){I.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(re.matrixWorld);const pe=I.distanceTo(V),ue=K.projectionMatrix.elements,De=re.projectionMatrix.elements,Ue=ue[14]/(ue[10]-1),Ie=ue[14]/(ue[10]+1),We=(ue[9]+1)/ue[5],G=(ue[9]-1)/ue[5],Xe=(ue[8]-1)/ue[0],xe=(De[8]+1)/De[0],Pe=Ue*Xe,ee=Ue*xe,z=pe/(-Xe+xe),Me=z*-Xe;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Me),q.translateZ(z),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=Ue+z,A=Ie+z,H=Pe-Me,ne=ee+(pe-Me),te=We*Ie/A*b,ie=G*Ie/A*b;q.projectionMatrix.makePerspective(H,ne,te,ie,b,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function U(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=M.near=w.near=q.near,S.far=M.far=w.far=q.far,(E!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,F=S.far);const K=q.parent,re=S.cameras;U(S,K);for(let pe=0;pe<re.length;pe++)U(re[pe],K);re.length===2?B(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),O(q,S,K)};function O(q,K,re){re===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Nm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let R=null;function $(q,K){if(c=K.getViewerPose(u||o),_=K,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let pe=!1;re.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let ue=0;ue<re.length;ue++){const De=re[ue];let Ue=null;if(p!==null)Ue=p.getViewport(De);else{const We=d.getViewSubImage(h,De);Ue=We.viewport,ue===0&&(e.setRenderTargetTextures(f,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Ie=P[ue];Ie===void 0&&(Ie=new Hi,Ie.layers.enable(ue),Ie.viewport=new mn,P[ue]=Ie),Ie.matrix.fromArray(De.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(De.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ue===0&&(S.matrix.copy(Ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(Ie)}}for(let re=0;re<v.length;re++){const pe=x[re],ue=v[re];pe!==null&&ue!==void 0&&ue.update(pe,K,u||o)}R&&R(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new r1;Q.setAnimationLoop($),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}}function d3(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,e1(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===oi&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===oi&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===oi&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function h3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=P.length;S<E;S++){const F=P[S];if(p(F,w,S,T)===!0){const N=F.__offset,Z=Array.isArray(F.value)?F.value:[F.value];let L=0;for(let I=0;I<Z.length;I++){const V=Z[I],B=g(V);typeof V=="number"||typeof V=="boolean"?(F.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,N+L,F.__data)):V.isMatrix3?(F.__data[0]=V.elements[0],F.__data[1]=V.elements[1],F.__data[2]=V.elements[2],F.__data[3]=0,F.__data[4]=V.elements[3],F.__data[5]=V.elements[4],F.__data[6]=V.elements[5],F.__data[7]=0,F.__data[8]=V.elements[6],F.__data[9]=V.elements[7],F.__data[10]=V.elements[8],F.__data[11]=0):(V.toArray(F.__data,L),L+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,T){const w=v.value,M=x+"_"+y;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const P=T[M];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return T[M]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(v){const x=v.uniforms;let y=0;const T=16;for(let M=0,P=x.length;M<P;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,F=S.length;E<F;E++){const N=S[E],Z=Array.isArray(N.value)?N.value:[N.value];for(let L=0,I=Z.length;L<I;L++){const V=Z[L],B=g(V),U=y%T;U!==0&&T-U<B.boundary&&(y+=T-U),N.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=B.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class d1{constructor(e={}){const{canvas:t=cb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=Us,this.toneMappingExposure=1;const x=this;let y=!1,T=0,w=0,M=null,P=-1,S=null;const E=new mn,F=new mn;let N=null;const Z=new ot(0);let L=0,I=t.width,V=t.height,B=1,U=null,O=null;const R=new mn(0,0,I,V),$=new mn(0,0,I,V);let Q=!1;const q=new i1;let K=!1,re=!1,pe=null;const ue=new cn,De=new Ze,Ue=new Y,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?B:1}let G=i;function Xe(C,k){for(let j=0;j<C.length;j++){const X=C[j],W=t.getContext(X,k);if(W!==null)return W}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${c_}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",le,!1),G===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),G=Xe(k,C),G===null)throw Xe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let xe,Pe,ee,z,Me,b,A,H,ne,te,ie,ve,me,fe,Se,ce,J,Qe,we,ze,Ee,ye,Ye,Ke;function ct(){xe=new EL(G),Pe=new _L(G,xe,e),xe.init(Pe),ye=new l3(G,xe,Pe),ee=new o3(G,xe,Pe),z=new AL(G),Me=new YD,b=new a3(G,xe,ee,Me,Pe,ye,z),A=new xL(x),H=new ML(x),ne=new Nb(G,Pe),Ye=new mL(G,xe,ne,Pe),te=new TL(G,ne,z,Ye),ie=new PL(G,te,ne,z),we=new bL(G,Pe,b),ce=new vL(Me),ve=new XD(x,A,H,xe,Pe,Ye,ce),me=new d3(x,Me),fe=new qD,Se=new e3(xe,Pe),Qe=new pL(x,A,H,ee,ie,h,l),J=new s3(x,ie,Pe),Ke=new h3(G,z,Pe,ee),ze=new gL(G,xe,z,Pe),Ee=new wL(G,xe,z,Pe),z.programs=ve.programs,x.capabilities=Pe,x.extensions=xe,x.properties=Me,x.renderLists=fe,x.shadowMap=J,x.state=ee,x.info=z}ct();const ge=new f3(x,G);this.xr=ge,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(I,V,!1))},this.getSize=function(C){return C.set(I,V)},this.setSize=function(C,k,j=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,V=k,t.width=Math.floor(C*B),t.height=Math.floor(k*B),j===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(I*B,V*B).floor()},this.setDrawingBufferSize=function(C,k,j){I=C,V=k,B=j,t.width=Math.floor(C*j),t.height=Math.floor(k*j),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,k,j,X){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,k,j,X),ee.viewport(E.copy(R).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,k,j,X){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,k,j,X),ee.scissor(F.copy($).multiplyScalar(B).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){ee.setScissorTest(Q=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(C=!0,k=!0,j=!0){let X=0;if(C){let W=!1;if(M!==null){const he=M.texture.format;W=he===GE||he===VE||he===HE}if(W){const he=M.texture.type,Re=he===Ns||he===ys||he===f_||he===Ao||he===zE||he===BE,Ve=Qe.getClearColor(),be=Qe.getClearAlpha(),Ne=Ve.r,Ge=Ve.g,$e=Ve.b;Re?(p[0]=Ne,p[1]=Ge,p[2]=$e,p[3]=be,G.clearBufferuiv(G.COLOR,0,p)):(_[0]=Ne,_[1]=Ge,_[2]=$e,_[3]=be,G.clearBufferiv(G.COLOR,0,_))}else X|=G.COLOR_BUFFER_BIT}k&&(X|=G.DEPTH_BUFFER_BIT),j&&(X|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Se.dispose(),Me.dispose(),A.dispose(),H.dispose(),ie.dispose(),Ye.dispose(),Ke.dispose(),ve.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Ae),ge.removeEventListener("sessionend",Oe),pe&&(pe.dispose(),pe=null),ae.stop()};function oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=z.autoReset,k=J.enabled,j=J.autoUpdate,X=J.needsUpdate,W=J.type;ct(),z.autoReset=C,J.enabled=k,J.autoUpdate=j,J.needsUpdate=X,J.type=W}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function de(C){const k=C.target;k.removeEventListener("dispose",de),Be(k)}function Be(C){Fe(C),Me.remove(C)}function Fe(C){const k=Me.get(C).programs;k!==void 0&&(k.forEach(function(j){ve.releaseProgram(j)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,j,X,W,he){k===null&&(k=Ie);const Re=W.isMesh&&W.matrixWorld.determinant()<0,Ve=Tt(C,k,j,X,W);ee.setMaterial(X,Re);let be=j.index,Ne=1;if(X.wireframe===!0){if(be=te.getWireframeAttribute(j),be===void 0)return;Ne=2}const Ge=j.drawRange,$e=j.attributes.position;let Pt=Ge.start*Ne,Zt=(Ge.start+Ge.count)*Ne;he!==null&&(Pt=Math.max(Pt,he.start*Ne),Zt=Math.min(Zt,(he.start+he.count)*Ne)),be!==null?(Pt=Math.max(Pt,0),Zt=Math.min(Zt,be.count)):$e!=null&&(Pt=Math.max(Pt,0),Zt=Math.min(Zt,$e.count));const gt=Zt-Pt;if(gt<0||gt===1/0)return;Ye.setup(W,X,Ve,j,be);let Ln,xt=ze;if(be!==null&&(Ln=ne.get(be),xt=Ee,xt.setIndex(Ln)),W.isMesh)X.wireframe===!0?(ee.setLineWidth(X.wireframeLinewidth*We()),xt.setMode(G.LINES)):xt.setMode(G.TRIANGLES);else if(W.isLine){let je=X.linewidth;je===void 0&&(je=1),ee.setLineWidth(je*We()),W.isLineSegments?xt.setMode(G.LINES):W.isLineLoop?xt.setMode(G.LINE_LOOP):xt.setMode(G.LINE_STRIP)}else W.isPoints?xt.setMode(G.POINTS):W.isSprite&&xt.setMode(G.TRIANGLES);if(W.isBatchedMesh)xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)xt.renderInstances(Pt,gt,W.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zd=Math.min(j.instanceCount,je);xt.renderInstances(Pt,gt,zd)}else xt.render(Pt,gt)};function lt(C,k,j){C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=oi,C.needsUpdate=!0,Et(C,k,j),C.side=Hs,C.needsUpdate=!0,Et(C,k,j),C.side=Vi):Et(C,k,j)}this.compile=function(C,k,j=null){j===null&&(j=C),m=Se.get(j),m.init(),v.push(m),j.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),C!==j&&C.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);const X=new Set;return C.traverse(function(W){const he=W.material;if(he)if(Array.isArray(he))for(let Re=0;Re<he.length;Re++){const Ve=he[Re];lt(Ve,j,W),X.add(Ve)}else lt(he,j,W),X.add(he)}),v.pop(),m=null,X},this.compileAsync=function(C,k,j=null){const X=this.compile(C,k,j);return new Promise(W=>{function he(){if(X.forEach(function(Re){Me.get(Re).currentProgram.isReady()&&X.delete(Re)}),X.size===0){W(C);return}setTimeout(he,10)}xe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let dt=null;function Le(C){dt&&dt(C)}function Ae(){ae.stop()}function Oe(){ae.start()}const ae=new r1;ae.setAnimationLoop(Le),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(C){dt=C,ge.setAnimationLoop(C),C===null?ae.stop():ae.start()},ge.addEventListener("sessionstart",Ae),ge.addEventListener("sessionend",Oe),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(k),k=ge.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,M),m=Se.get(C,v.length),m.init(),v.push(m),ue.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(ue),re=this.localClippingEnabled,K=ce.init(this.clippingPlanes,re),g=fe.get(C,f.length),g.init(),f.push(g),He(C,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(U,O),this.info.render.frame++,K===!0&&ce.beginShadows();const j=m.state.shadowsArray;if(J.render(j,C,k),K===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(g,C),m.setupLights(x._useLegacyLights),k.isArrayCamera){const X=k.cameras;for(let W=0,he=X.length;W<he;W++){const Re=X[W];ke(g,C,Re,Re.viewport)}}else ke(g,C,k);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,k),Ye.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function He(C,k,j,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){X&&Ue.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ue);const Re=ie.update(C),Ve=C.material;Ve.visible&&g.push(C,Re,Ve,j,Ue.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Re=ie.update(C),Ve=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ue.copy(C.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ue.copy(Re.boundingSphere.center)),Ue.applyMatrix4(C.matrixWorld).applyMatrix4(ue)),Array.isArray(Ve)){const be=Re.groups;for(let Ne=0,Ge=be.length;Ne<Ge;Ne++){const $e=be[Ne],Pt=Ve[$e.materialIndex];Pt&&Pt.visible&&g.push(C,Re,Pt,j,Ue.z,$e)}}else Ve.visible&&g.push(C,Re,Ve,j,Ue.z,null)}}const he=C.children;for(let Re=0,Ve=he.length;Re<Ve;Re++)He(he[Re],k,j,X)}function ke(C,k,j,X){const W=C.opaque,he=C.transmissive,Re=C.transparent;m.setupLightsView(j),K===!0&&ce.setGlobalState(x.clippingPlanes,j),he.length>0&&qe(W,he,k,j),X&&ee.viewport(E.copy(X)),W.length>0&&Ut(W,k,j),he.length>0&&Ut(he,k,j),Re.length>0&&Ut(Re,k,j),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function qe(C,k,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const he=Pe.isWebGL2;pe===null&&(pe=new Ki(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?Ar:Ns,minFilter:ku,samples:he?4:0})),x.getDrawingBufferSize(De),he?pe.setSize(De.x,De.y):pe.setSize(Im(De.x),Im(De.y));const Re=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ve=x.toneMapping;x.toneMapping=Us,Ut(C,j,X),b.updateMultisampleRenderTarget(pe),b.updateRenderTargetMipmap(pe);let be=!1;for(let Ne=0,Ge=k.length;Ne<Ge;Ne++){const $e=k[Ne],Pt=$e.object,Zt=$e.geometry,gt=$e.material,Ln=$e.group;if(gt.side===Vi&&Pt.layers.test(X.layers)){const xt=gt.side;gt.side=oi,gt.needsUpdate=!0,nt(Pt,j,X,Zt,gt,Ln),gt.side=xt,gt.needsUpdate=!0,be=!0}}be===!0&&(b.updateMultisampleRenderTarget(pe),b.updateRenderTargetMipmap(pe)),x.setRenderTarget(Re),x.setClearColor(Z,L),x.toneMapping=Ve}function Ut(C,k,j){const X=k.isScene===!0?k.overrideMaterial:null;for(let W=0,he=C.length;W<he;W++){const Re=C[W],Ve=Re.object,be=Re.geometry,Ne=X===null?Re.material:X,Ge=Re.group;Ve.layers.test(j.layers)&&nt(Ve,k,j,be,Ne,Ge)}}function nt(C,k,j,X,W,he){C.onBeforeRender(x,k,j,X,W,he),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),W.onBeforeRender(x,k,j,X,C,he),W.transparent===!0&&W.side===Vi&&W.forceSinglePass===!1?(W.side=oi,W.needsUpdate=!0,x.renderBufferDirect(j,k,X,W,C,he),W.side=Hs,W.needsUpdate=!0,x.renderBufferDirect(j,k,X,W,C,he),W.side=Vi):x.renderBufferDirect(j,k,X,W,C,he),C.onAfterRender(x,k,j,X,W,he)}function Et(C,k,j){k.isScene!==!0&&(k=Ie);const X=Me.get(C),W=m.state.lights,he=m.state.shadowsArray,Re=W.state.version,Ve=ve.getParameters(C,W.state,he,k,j),be=ve.getProgramCacheKey(Ve);let Ne=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?H:A).get(C.envMap||X.environment),Ne===void 0&&(C.addEventListener("dispose",de),Ne=new Map,X.programs=Ne);let Ge=Ne.get(be);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===Re)return At(C,Ve),Ge}else Ve.uniforms=ve.getUniforms(C),C.onBuild(j,Ve,x),C.onBeforeCompile(Ve,x),Ge=ve.acquireProgram(Ve,be),Ne.set(be,Ge),X.uniforms=Ve.uniforms;const $e=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=ce.uniform),At(C,Ve),X.needsLights=ci(C),X.lightsStateVersion=Re,X.needsLights&&($e.ambientLightColor.value=W.state.ambient,$e.lightProbe.value=W.state.probe,$e.directionalLights.value=W.state.directional,$e.directionalLightShadows.value=W.state.directionalShadow,$e.spotLights.value=W.state.spot,$e.spotLightShadows.value=W.state.spotShadow,$e.rectAreaLights.value=W.state.rectArea,$e.ltc_1.value=W.state.rectAreaLTC1,$e.ltc_2.value=W.state.rectAreaLTC2,$e.pointLights.value=W.state.point,$e.pointLightShadows.value=W.state.pointShadow,$e.hemisphereLights.value=W.state.hemi,$e.directionalShadowMap.value=W.state.directionalShadowMap,$e.directionalShadowMatrix.value=W.state.directionalShadowMatrix,$e.spotShadowMap.value=W.state.spotShadowMap,$e.spotLightMatrix.value=W.state.spotLightMatrix,$e.spotLightMap.value=W.state.spotLightMap,$e.pointShadowMap.value=W.state.pointShadowMap,$e.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function Kt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Ef.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function At(C,k){const j=Me.get(C);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function Tt(C,k,j,X,W){k.isScene!==!0&&(k=Ie),b.resetTextureUnits();const he=k.fog,Re=X.isMeshStandardMaterial?k.environment:null,Ve=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Qr,be=(X.isMeshStandardMaterial?H:A).get(X.envMap||Re),Ne=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ge=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),$e=!!j.morphAttributes.position,Pt=!!j.morphAttributes.normal,Zt=!!j.morphAttributes.color;let gt=Us;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Ln=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=Ln!==void 0?Ln.length:0,je=Me.get(X),zd=m.state.lights;if(K===!0&&(re===!0||C!==S)){const Ni=C===S&&X.id===P;ce.setState(X,C,Ni)}let Bt=!1;X.version===je.__version?(je.needsLights&&je.lightsStateVersion!==zd.state.version||je.outputColorSpace!==Ve||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||je.envMap!==be||X.fog===!0&&je.fog!==he||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ce.numPlanes||je.numIntersection!==ce.numIntersection)||je.vertexAlphas!==Ne||je.vertexTangents!==Ge||je.morphTargets!==$e||je.morphNormals!==Pt||je.morphColors!==Zt||je.toneMapping!==gt||Pe.isWebGL2===!0&&je.morphTargetsCount!==xt)&&(Bt=!0):(Bt=!0,je.__version=X.version);let Ys=je.currentProgram;Bt===!0&&(Ys=Et(X,k,W));let v_=!1,hl=!1,Bd=!1;const xn=Ys.getUniforms(),js=je.uniforms;if(ee.useProgram(Ys.program)&&(v_=!0,hl=!0,Bd=!0),X.id!==P&&(P=X.id,hl=!0),v_||S!==C){xn.setValue(G,"projectionMatrix",C.projectionMatrix),xn.setValue(G,"viewMatrix",C.matrixWorldInverse);const Ni=xn.map.cameraPosition;Ni!==void 0&&Ni.setValue(G,Ue.setFromMatrixPosition(C.matrixWorld)),Pe.logarithmicDepthBuffer&&xn.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xn.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,hl=!0,Bd=!0)}if(W.isSkinnedMesh){xn.setOptional(G,W,"bindMatrix"),xn.setOptional(G,W,"bindMatrixInverse");const Ni=W.skeleton;Ni&&(Pe.floatVertexTextures?(Ni.boneTexture===null&&Ni.computeBoneTexture(),xn.setValue(G,"boneTexture",Ni.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(xn.setOptional(G,W,"batchingTexture"),xn.setValue(G,"batchingTexture",W._matricesTexture,b));const Hd=j.morphAttributes;if((Hd.position!==void 0||Hd.normal!==void 0||Hd.color!==void 0&&Pe.isWebGL2===!0)&&we.update(W,j,Ys),(hl||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,xn.setValue(G,"receiveShadow",W.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(js.envMap.value=be,js.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),hl&&(xn.setValue(G,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&mt(js,Bd),he&&X.fog===!0&&me.refreshFogUniforms(js,he),me.refreshMaterialUniforms(js,X,B,V,pe),Ef.upload(G,Kt(je),js,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ef.upload(G,Kt(je),js,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xn.setValue(G,"center",W.center),xn.setValue(G,"modelViewMatrix",W.modelViewMatrix),xn.setValue(G,"normalMatrix",W.normalMatrix),xn.setValue(G,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ni=X.uniformsGroups;for(let Vd=0,g1=Ni.length;Vd<g1;Vd++)if(Pe.isWebGL2){const x_=Ni[Vd];Ke.update(x_,Ys),Ke.bind(x_,Ys)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ys}function mt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function ci(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,j){Me.get(C.texture).__webglTexture=k,Me.get(C.depthTexture).__webglTexture=j;const X=Me.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const j=Me.get(C);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,j=0){M=C,T=k,w=j;let X=!0,W=null,he=!1,Re=!1;if(C){const be=Me.get(C);be.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(G.FRAMEBUFFER,null),X=!1):be.__webglFramebuffer===void 0?b.setupRenderTarget(C):be.__hasExternalTextures&&b.rebindTextures(C,Me.get(C.texture).__webglTexture,Me.get(C.depthTexture).__webglTexture);const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);const Ge=Me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?W=Ge[k][j]:W=Ge[k],he=!0):Pe.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?W=Me.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?W=Ge[j]:W=Ge,E.copy(C.viewport),F.copy(C.scissor),N=C.scissorTest}else E.copy(R).multiplyScalar(B).floor(),F.copy($).multiplyScalar(B).floor(),N=Q;if(ee.bindFramebuffer(G.FRAMEBUFFER,W)&&Pe.drawBuffers&&X&&ee.drawBuffers(C,W),ee.viewport(E),ee.scissor(F),ee.setScissorTest(N),he){const be=Me.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,j)}else if(Re){const be=Me.get(C.texture),Ne=k||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,be.__webglTexture,j||0,Ne)}P=-1},this.readRenderTargetPixels=function(C,k,j,X,W,he,Re){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Re!==void 0&&(Ve=Ve[Re]),Ve){ee.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const be=C.texture,Ne=be.format,Ge=be.type;if(Ne!==Gi&&ye.convert(Ne)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ge===Ar&&(xe.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ge!==Ns&&ye.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Ss&&(Pe.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&j>=0&&j<=C.height-W&&G.readPixels(k,j,X,W,ye.convert(Ne),ye.convert(Ge),he)}finally{const be=M!==null?Me.get(M).__webglFramebuffer:null;ee.bindFramebuffer(G.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,k,j=0){const X=Math.pow(2,-j),W=Math.floor(k.image.width*X),he=Math.floor(k.image.height*X);b.setTexture2D(k,0),G.copyTexSubImage2D(G.TEXTURE_2D,j,0,0,C.x,C.y,W,he),ee.unbindTexture()},this.copyTextureToTexture=function(C,k,j,X=0){const W=k.image.width,he=k.image.height,Re=ye.convert(j.format),Ve=ye.convert(j.type);b.setTexture2D(j,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment),k.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,X,C.x,C.y,W,he,Re,Ve,k.image.data):k.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,X,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Re,k.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,X,C.x,C.y,Re,Ve,k.image),X===0&&j.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(C,k,j,X,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=C.max.x-C.min.x+1,Re=C.max.y-C.min.y+1,Ve=C.max.z-C.min.z+1,be=ye.convert(X.format),Ne=ye.convert(X.type);let Ge;if(X.isData3DTexture)b.setTexture3D(X,0),Ge=G.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),Ge=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const $e=G.getParameter(G.UNPACK_ROW_LENGTH),Pt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Zt=G.getParameter(G.UNPACK_SKIP_PIXELS),gt=G.getParameter(G.UNPACK_SKIP_ROWS),Ln=G.getParameter(G.UNPACK_SKIP_IMAGES),xt=j.isCompressedTexture?j.mipmaps[W]:j.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,xt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),j.isDataTexture||j.isData3DTexture?G.texSubImage3D(Ge,W,k.x,k.y,k.z,he,Re,Ve,be,Ne,xt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ge,W,k.x,k.y,k.z,he,Re,Ve,be,xt.data)):G.texSubImage3D(Ge,W,k.x,k.y,k.z,he,Re,Ve,be,Ne,xt),G.pixelStorei(G.UNPACK_ROW_LENGTH,$e),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,gt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ln),W===0&&X.generateMipmaps&&G.generateMipmap(Ge),ee.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),ee.unbindTexture()},this.resetState=function(){T=0,w=0,M=null,ee.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===d_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Id?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===hn?Ro:XE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ro?hn:Qr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class p3 extends d1{}p3.prototype.isWebGL1Renderer=!0;class m3 extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Fm extends Ku{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ix=new cn,km=new h_,Jc=new Od,ef=new Y;class Ox extends li{constructor(e=new Li,t=new Fm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jc.copy(i.boundingSphere),Jc.applyMatrix4(r),Jc.radius+=s,e.ray.intersectsSphere(Jc)===!1)return;Ix.copy(r).invert(),km.copy(e.ray).applyMatrix4(Ix);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,g=p;_<g;_++){const m=u.getX(_);ef.fromBufferAttribute(d,m),Fx(ef,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=h,g=p;_<g;_++)ef.fromBufferAttribute(d,_),Fx(ef,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fx(n,e,t,i,r,s,o){const a=km.distanceSqToPoint(n);if(a<t){const l=new Y;km.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class g3 extends ai{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cu extends Li{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let d=e;const h=(t-e)/r,p=new Y,_=new Ze;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,c.push(_.x,_.y)}d+=h}for(let g=0;g<r;g++){const m=g*(i+1);for(let f=0;f<i;f++){const v=f+m,x=v,y=v+i+1,T=v+i+2,w=v+1;a.push(x,y,w),a.push(y,T,w)}}this.setIndex(a),this.setAttribute("position",new Gn(l,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class __ extends Li{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new Y,h=new Y,p=[],_=[],g=[],m=[];for(let f=0;f<=i;f++){const v=[],x=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const w=T/t;d.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(w+y,1-x),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const x=c[f][v+1],y=c[f][v],T=c[f+1][v],w=c[f+1][v+1];(f!==0||o>0)&&p.push(x,y,w),(f!==i-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new __(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class h1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kx(){return(typeof performance>"u"?Date:performance).now()}class _3{constructor(e,t,i=0,r=1/0){this.ray=new h_(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new p_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return zm(e,this,i,t),i.sort(zx),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zm(e[r],this,i,t);return i.sort(zx),i}}function zx(n,e){return n.distance-e.distance}function zm(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)zm(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:c_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=c_);const p1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qu{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const v3=new s1(-1,1,1,-1,0,1);class x3 extends Li{constructor(){super(),this.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gn([0,2,0,0,2,0],2))}}const y3=new x3;class m1{constructor(e){this._mesh=new Ei(y3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class S3 extends Qu{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ti?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dd.clone(e.uniforms),this.material=new Ti({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new m1(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bx extends Qu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class M3 extends Qu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class E3{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ze);this._width=i.width,this._height=i.height,t=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ar}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new S3(p1),this.copyPass.material.blending=Xr,this.clock=new h1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bx!==void 0&&(o instanceof Bx?i=!0:o instanceof M3&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T3 extends Qu{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ot}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const w3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class al extends Qu{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new ot(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ki(s,o,{type:Ar}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Ki(s,o,{type:Ar});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Ki(s,o,{type:Ar});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=w3;this.highPassUniforms=dd.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ti({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Ze(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=p1;this.copyUniforms=dd.clone(c.uniforms),this.blendMaterial=new Ti({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:ds,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ot,this.oldClearAlpha=1,this.basic=new go,this.fsQuad=new m1(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ze(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=al.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=al.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ti({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ti({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}al.BlurDirectionX=new Ze(1,0);al.BlurDirectionY=new Ze(0,1);Xu.registerPlugin(Je);function A3(){const n=bo.useRef(null);return bo.useEffect(()=>{const e=n.current;if(!e)return;function t(){const ee=document.createElement("canvas");ee.width=64,ee.height=64;const z=ee.getContext("2d"),Me=z.createRadialGradient(32,32,0,32,32,32);Me.addColorStop(0,"rgba(255, 255, 255, 1.0)"),Me.addColorStop(.2,"rgba(255, 235, 170, 0.95)"),Me.addColorStop(.5,"rgba(255, 130, 30, 0.5)"),Me.addColorStop(.8,"rgba(220, 50, 0, 0.15)"),Me.addColorStop(1,"rgba(0, 0, 0, 0)"),z.fillStyle=Me,z.beginPath(),z.arc(32,32,32,0,Math.PI*2),z.fill();const b=new g3(ee);return b.generateMipmaps=!1,b.minFilter=$n,b.magFilter=$n,b.needsUpdate=!0,b}const i=t(),r=7,s=new Y(r,0,0),o=new m3,a=new Hi(45,window.innerWidth/window.innerHeight,.1,1e3),l=new d1({canvas:e,antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),l.setClearColor(0,0);const u=new Ki(window.innerWidth,window.innerHeight,{type:Ar,format:Gi,samples:4}),c=new E3(l,u);c.addPass(new T3(o,a));const d=new al(new Ze(window.innerWidth,window.innerHeight),.85,.55,.15);c.addPass(d);const h=new Ei(new __(1.65,64,64),new go({color:0}));h.position.copy(s),o.add(h);const p=new Ei(new cu(1.65,2.05,80),new go({color:16752704,side:Vi,transparent:!0,opacity:.75,blending:ds}));p.position.copy(s),p.rotation.x=Math.PI/2,o.add(p);const _=new Ei(new cu(2.05,2.35,80),new go({color:16733440,side:Vi,transparent:!0,opacity:.4,blending:ds}));_.position.copy(s),_.rotation.x=Math.PI/2,o.add(_);const g=new Ei(new cu(1.65,1.95,80),new go({color:16755264,side:Vi,transparent:!0,opacity:.65,blending:ds}));g.position.copy(s),g.rotation.y=.15,o.add(g);const m=14e3,f=new Li,v=new Float32Array(m*3),x=new Float32Array(m*3),y=new Float32Array(m),T=new Float32Array(m),w=new Float32Array(m),M=new ot(16775406),P=new ot(16737792),S=new ot(7798784),E=new ot;for(let ee=0;ee<m;ee++){const z=Math.pow(Math.random(),1.35),Me=1.85+z*12.5,b=Math.random()*Math.PI*2;T[ee]=Me,y[ee]=b,w[ee]=.07/Math.sqrt(Me),v[ee*3]=r+Math.cos(b)*Me,v[ee*3+1]=(Math.random()-.5)*(.15+z*.3),v[ee*3+2]=Math.sin(b)*Me,z<.22?E.copy(M).lerp(P,z/.22):E.copy(P).lerp(S,(z-.22)/.78),x[ee*3]=E.r,x[ee*3+1]=E.g,x[ee*3+2]=E.b}f.setAttribute("position",new Ci(v,3)),f.setAttribute("color",new Ci(x,3));const F=new Ox(f,new Fm({size:.075,map:i,vertexColors:!0,transparent:!0,opacity:.85,blending:ds,depthWrite:!1}));o.add(F);const N=300,Z=new Li,L=new Float32Array(N*3),I=new Float32Array(N*3);for(let ee=0;ee<N;ee++)L[ee*3]=r+(Math.random()-.5)*60,L[ee*3+1]=(Math.random()-.5)*50,L[ee*3+2]=Math.random()*30+5;Z.setAttribute("position",new Ci(L,3));const V=new Ox(Z,new Fm({color:16764040,size:.1,map:i,transparent:!0,opacity:.4,blending:ds,depthWrite:!1}));o.add(V);const B={camZ:20,camY:3.2,camX:0,lookX:0,lookY:0,lookZ:0,baseSpeed:1};let U=new Ze(0,0),O=new Ze(0,0),R=!1,$=!1,Q=null;const q=new _3,K=new us(new Y(0,1,0),0),re=new Y(9999,0,9999),pe=new Y;let ue=0;const De=ee=>{U.x=ee.clientX/window.innerWidth*2-1,U.y=-(ee.clientY/window.innerHeight)*2+1,R=!0},Ue=()=>{R=!1},Ie=()=>{$=!0,Q&&clearTimeout(Q),Q=setTimeout(()=>{$=!1},120)},We=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",De),window.addEventListener("mouseleave",Ue),window.addEventListener("scroll",Ie,{passive:!0}),window.addEventListener("resize",We);const G=new h1;let Xe;function xe(){Xe=requestAnimationFrame(xe);const ee=Math.min(G.getDelta(),.05),z=G.getElapsedTime(),Me=$?3:5;O.x+=(U.x-O.x)*(1-Math.exp(-Me*ee)),O.y+=(U.y-O.y)*(1-Math.exp(-Me*ee));const b=B.camX+O.x*1.5,A=B.camY+O.y*1.5;a.position.x+=(b-a.position.x)*(1-Math.exp(-3*ee)),a.position.y+=(A-a.position.y)*(1-Math.exp(-3*ee)),a.position.z+=(B.camZ-a.position.z)*(1-Math.exp(-3*ee)),a.lookAt(B.lookX,B.lookY,B.lookZ),ue+=((R&&!$?1:0)-ue)*(1-Math.exp(-8*ee)),R&&ue>.01?(q.setFromCamera(O,a),q.ray.intersectPlane(K,pe)&&re.copy(pe)):re.set(9999,0,9999);const ne=B.baseSpeed,te=F.geometry.attributes.position.array,ie=.65,ve=ie*ie,me=ue>.02&&re.x<9e3,fe=me?Math.hypot(re.x-r,re.z):-1;for(let ce=0;ce<m;ce++){const J=T[ce];y[ce]-=w[ce]*ee*ne*60;const Qe=r+Math.cos(y[ce])*J,we=Math.sin(y[ce])*J;let ze=0,Ee=0,ye=0;if(me&&Math.abs(J-fe)<ie){const Ke=Qe-re.x,ct=we-re.z,ge=Ke*Ke+ct*ct;if(ge<ve&&ge>1e-4){const oe=Math.sqrt(ge),D=oe/ie,le=Math.cos(D*Math.PI*.5)*.35*ue;ze=Ke/oe*le,Ee=ct/oe*le,ye=(1-D)*.24*Math.sin(z*5)*ue}}const Ye=Math.sin(z*2.2+y[ce]*2.5+J*1.6)*.22;te[ce*3]=Qe+ze,te[ce*3+1]=Ye+ye,te[ce*3+2]=we+Ee}F.geometry.attributes.position.needsUpdate=!0;const Se=V.geometry.attributes.position.array;for(let ce=0;ce<N;ce++){const J=r-Se[ce*3],Qe=-Se[ce*3+1],we=-Se[ce*3+2],ze=J*J+Qe*Qe+we*we,Ee=Math.min(20/(ze+1),1.4);I[ce*3]+=J*2e-4*Ee,I[ce*3+1]+=Qe*2e-4*Ee,I[ce*3+2]+=we*2e-4*Ee,Se[ce*3]+=I[ce*3],Se[ce*3+1]+=I[ce*3+1],Se[ce*3+2]+=I[ce*3+2],(ze<3.5||Se[ce*3+2]<-10)&&(Se[ce*3]=r+(Math.random()-.5)*60,Se[ce*3+1]=(Math.random()-.5)*50,Se[ce*3+2]=Math.random()*30+10,I[ce*3]=0,I[ce*3+1]=0,I[ce*3+2]=0)}V.geometry.attributes.position.needsUpdate=!0,p.scale.setScalar(1+Math.sin(z*1.8)*.015),_.scale.setScalar(1+Math.cos(z*1.5)*.015),g.scale.setScalar(1+Math.sin(z*1.2)*.012),c.render()}a.position.set(B.camX,B.camY,B.camZ),xe();const Pe=Xu.timeline({scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:1.2}});return Pe.to(B,{camZ:17,camY:3.8,camX:3,lookX:3,duration:.5,ease:"power1.inOut"}),Pe.to(B,{camY:4.4,camX:r*.5,lookX:r*.5,camZ:14,duration:.5,ease:"power2.inOut"}),window.__getBHScreenCoord=()=>{const ee=new Y(r,0,0).project(a);return{x:(ee.x*.5+.5)*window.innerWidth,y:(-ee.y*.5+.5)*window.innerHeight}},()=>{cancelAnimationFrame(Xe),window.removeEventListener("mousemove",De),window.removeEventListener("mouseleave",Ue),window.removeEventListener("scroll",Ie),window.removeEventListener("resize",We),Pe.kill(),c.dispose(),l.dispose()}},[]),ht.jsx("canvas",{id:"blackhole-canvas",ref:n})}const Pl={firstName:"Maheswar",lastName:"Praveen",title:"BUILDER • ROBOTICS & AI ENGINEER",github:"https://github.com/MaheswarPraveen",linkedin:"https://www.linkedin.com/in/maheswarpraveen"},C3=[{id:"00",category:"PROFILE",title:"Autonomous Systems Builder",description:"Developing end-to-end robotics systems across ROS 2, bare-metal firmware, and edge AI accelerators. Focused on real-time motor control, kinematic trajectories, and hardware deployment.",tags:["ROS 2","Edge AI","Embedded Systems"]},{id:"01",category:"ROBOTICS",title:"SpotMicro Quadruped",description:"12-DOF quadruped robot powered by 12× DS3218 servos and an Arduino UNO Q running Zephyr RTOS for ~200Hz analytical inverse kinematics and quintic spline gaits. Custom 6.8V high-current busbar rail off a 3S LiPo to handle 20A transient bursts without brownouts.",tags:["Zephyr RTOS","Arduino UNO Q","200Hz IK","3S LiPo Busbar"]},{id:"02",category:"FIELD AI",title:"Autonomous Skid-Steer Rover",description:"Field farming rover equipped with a 4-DOF robotic manipulator for precision weed removal. Powered by ROS 2 and an edge Hailo-8L NPU executing real-time YOLO vision guidance for field deployment.",tags:["ROS 2","Hailo-8L NPU","YOLO","4-DOF Arm"]},{id:"03",category:"DRIVER ARCHITECTURE",title:"RoArm M2-S PlayMotion",description:"High-precision trajectory recording and autonomous playback driver featuring dual-mode teaching (physical freedrive & keyboard jogging). Streams 25Hz quintic polynomial splines for zero-jerk motion with serial noise filtering. Officially adopted into the Waveshare Wiki.",tags:["Quintic Splines","Python Driver","Waveshare Wiki"]},{id:"04",category:"TELEMETRY BRIDGE",title:"ArduROSPI Bridge",description:"Zero-dependency ROS 2 ↔ MAVLink translation layer built with pymavlink, replacing heavy MAVROS on resource-constrained Raspberry Pi rovers. Implements 10Hz IMU streaming, automatic serial reconnect, and mission mode switching.",tags:["pymavlink","ROS 2","ArduPilot"]},{id:"05",category:"INTERACTIVE SYSTEMS",title:"Kalkii Genesis",description:"Cyberpunk 2.5D action title solo-engineered in Godot 4. Custom hierarchical combat state machines, frame-accurate animation cancelling, dynamic 2D lighting, and responsive platformer physics controllers.",tags:["Godot 4","Combat State Machines","GDScript"]},{id:"06",category:"EMBEDDED VISION",title:"Plant Disease Detection CNN",description:"End-to-end computer vision pipeline for agricultural crop leaf pathology. Implements OpenCV preprocessing, custom convolutional neural network (CNN) architectures in TensorFlow, achieving 80% test accuracy on unseen diseased foliage datasets.",tags:["TensorFlow","OpenCV","80% Test Accuracy"]}],R3=[{label:"Languages & AI",value:"Python, C/C++, GDScript, PyTorch, TensorFlow, YOLO, OpenCV"},{label:"Robotics & Protocols",value:"ROS 2 (Humble/Jazzy), MAVLink, CAN, UART, I2C, SPI, MQTT"},{label:"Hardware & Engineering",value:"Hailo-8L NPU, Arduino UNO Q, Raspberry Pi, Zephyr RTOS, Fusion 360"}];Xu.registerPlugin(Je);function b3(){const n=bo.useRef(null);return bo.useEffect(()=>{const e=n.current;if(!e)return;const t=Array.from(e.querySelectorAll(".card")),i=[];return t.forEach((r,s)=>{const o=s===0,a=s===t.length-1;let l=".section-title, .tag, .project-index, .section-desc";o?l=".name-line, .hero-subtitle, .clean-link":a&&(l=".section-title, .project-index, .stack-label, .stack-val");const u=new lR(r.querySelectorAll(l),{types:"chars"});i.push(u);const c=Array.from(r.querySelectorAll(".char")),d=Array.from(r.querySelectorAll(".tag, .section-title, .clean-link, .stack-col")),h=c.length,p=c.map(f=>{f.dataset.orig=f.textContent,f._swallowState=0,f._lastFlip=Math.random()*100;const v=f.getBoundingClientRect();return{x:v.left+window.scrollX,y:v.top+window.scrollY}}),_={phase:0},g=Xu.timeline({paused:!0});let m=null;g.eventCallback("onStart",()=>{m=window.__getBHScreenCoord?window.__getBHScreenCoord():{x:window.innerWidth*.72,y:window.innerHeight*.5}}),g.to(_,{phase:1,duration:1.4,ease:"power1.inOut",onUpdate:()=>{const f=_.phase,v=m||(window.__getBHScreenCoord?window.__getBHScreenCoord():{x:window.innerWidth*.72,y:window.innerHeight*.5}),x=performance.now();for(let y=0;y<h;y++){const T=c[y];if(f===0)T._swallowState!==0&&(T.textContent=T.dataset.orig,T.style.color="",T.style.opacity="1",T.style.transform="none",T.style.textShadow="none",T._swallowState=0);else if(f>0&&f<.25)x-T._lastFlip>40+y%7*15&&(T.textContent=Math.random()>.5?"1":"0",T._lastFlip=x),T._swallowState!==1&&(T.style.color="#ffaa20",T.style.textShadow="0 0 12px rgba(255, 170, 32, 0.8)",T.style.opacity="1",T.style.transform="none",T._swallowState=1);else{const w=(f-.25)/.75,M=y/h*.2,P=Math.max(0,Math.min(1,(w-M)/.8)),S=Math.pow(P,2.2),E=p[y],F=E.x-window.scrollX,N=E.y-window.scrollY,Z=v.x-F,L=v.y-N,I=y*.15+S*4,V=Math.sin(I)*30*(1-S),B=Math.cos(I)*20*(1-S),U=Z*S+V,O=L*S+B,R=-S*600,$=1+S*.5,Q=Math.max(.05,1-S*.9),q=S*60,K=-S*20,re=Math.max(0,1-Math.pow(P,2.5));T._swallowState!==3&&(T.textContent=Math.random()>.5?"1":"0"),T.style.transform=`translate3d(${U.toFixed(1)}px, ${O.toFixed(1)}px, ${R.toFixed(0)}px) rotateX(${q.toFixed(0)}deg) rotateZ(${K.toFixed(0)}deg) scale(${$.toFixed(2)}, ${Q.toFixed(2)})`;const pe=Math.round((1-S)*4)/4;T.style.color=S<.6?"#ff9010":"#ff2000",T.style.textShadow=`0 0 ${Math.max(2,15*pe).toFixed(0)}px rgba(255, 120, 20, 0.9)`,T.style.opacity=re.toFixed(2),T._swallowState=3}}if(f<.25)d.forEach(y=>y.style.opacity="1"),r.style.opacity="1";else{const y=(f-.25)/.75,T=Math.max(0,1-Math.pow(y,1.5));d.forEach(w=>w.style.opacity=T.toFixed(2)),r.style.opacity=Math.max(0,1-Math.pow(y,2.5)).toFixed(2)}}}),Je.create({trigger:r,start:"center 55%",onEnter:()=>g.play(),onEnterBack:()=>g.reverse(),onLeave:()=>{},onLeaveBack:()=>g.reverse()})}),Je.create({trigger:".scroll-end-trigger",start:"top 70%",end:"bottom bottom",scrub:1,onUpdate:r=>{const s=document.getElementById("flash-overlay");s&&(r.progress<.5?(s.style.backgroundColor="#ffffff",s.style.opacity=(r.progress/.5).toFixed(2)):(s.style.backgroundColor="#000000",s.style.opacity=((r.progress-.5)/.5).toFixed(2)))}}),()=>{i.forEach(r=>r.revert()),Je.getAll().forEach(r=>r.kill())}},[]),ht.jsxs(ht.Fragment,{children:[ht.jsx("div",{id:"flash-overlay"}),ht.jsx(A3,{}),ht.jsxs("main",{id:"ui-container",ref:n,children:[ht.jsxs("header",{className:"card hero-card",children:[ht.jsxs("h1",{className:"name-title",children:[ht.jsx("span",{className:"name-line",children:Pl.firstName}),ht.jsx("span",{className:"name-line",children:Pl.lastName})]}),ht.jsx("p",{className:"hero-subtitle",children:Pl.title}),ht.jsxs("div",{className:"hero-links",children:[ht.jsx("a",{href:Pl.github,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"GitHub"}),ht.jsx("a",{href:Pl.linkedin,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"LinkedIn"})]})]}),C3.map(e=>ht.jsxs("section",{className:"card content-card",children:[ht.jsxs("span",{className:"project-index",children:[e.id," // ",e.category]}),ht.jsx("h2",{className:"section-title",children:e.title}),ht.jsx("p",{className:"section-desc",children:e.description}),ht.jsx("div",{className:"tag-cloud",children:e.tags.map((t,i)=>ht.jsx("span",{className:"tag",children:t},i))})]},e.id)),ht.jsxs("section",{className:"card content-card",children:[ht.jsx("span",{className:"project-index",children:"07 // STACK"}),ht.jsx("h2",{className:"section-title",children:"Technical Capabilities"}),ht.jsx("div",{className:"stack-grid",children:R3.map((e,t)=>ht.jsxs("div",{className:"stack-col",children:[ht.jsx("span",{className:"stack-label",children:e.label}),ht.jsx("span",{className:"stack-val",children:e.value})]},t))})]})]}),ht.jsx("div",{className:"scroll-end-trigger"})]})}op.createRoot(document.getElementById("root")).render(ht.jsx(U1.StrictMode,{children:ht.jsx(b3,{})}));
