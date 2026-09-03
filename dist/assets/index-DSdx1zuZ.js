(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function c1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var kx={exports:{}},cd={},zx={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu=Symbol.for("react.element"),f1=Symbol.for("react.portal"),d1=Symbol.for("react.fragment"),h1=Symbol.for("react.strict_mode"),p1=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),_1=Symbol.for("react.context"),g1=Symbol.for("react.forward_ref"),v1=Symbol.for("react.suspense"),x1=Symbol.for("react.memo"),y1=Symbol.for("react.lazy"),vg=Symbol.iterator;function S1(n){return n===null||typeof n!="object"?null:(n=vg&&n[vg]||n["@@iterator"],typeof n=="function"?n:null)}var Bx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hx=Object.assign,Gx={};function ol(n,e,t){this.props=n,this.context=e,this.refs=Gx,this.updater=t||Bx}ol.prototype.isReactComponent={};ol.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ol.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Vx(){}Vx.prototype=ol.prototype;function Fm(n,e,t){this.props=n,this.context=e,this.refs=Gx,this.updater=t||Bx}var km=Fm.prototype=new Vx;km.constructor=Fm;Hx(km,ol.prototype);km.isPureReactComponent=!0;var xg=Array.isArray,Wx=Object.prototype.hasOwnProperty,zm={current:null},Xx={key:!0,ref:!0,__self:!0,__source:!0};function Yx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Wx.call(e,i)&&!Xx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fu,type:n,key:s,ref:o,props:r,_owner:zm.current}}function M1(n,e){return{$$typeof:Fu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Bm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Fu}function E1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var yg=/\/+/g;function Bd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?E1(""+n.key):e.toString(36)}function Jc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Fu:case f1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Bd(o,0):i,xg(r)?(t="",n!=null&&(t=n.replace(yg,"$&/")+"/"),Jc(r,e,t,"",function(u){return u})):r!=null&&(Bm(r)&&(r=M1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(yg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",xg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Bd(s,a);o+=Jc(s,e,t,l,r)}else if(l=S1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Bd(s,a++),o+=Jc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ku(n,e,t){if(n==null)return n;var i=[],r=0;return Jc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function T1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Vn={current:null},ef={transition:null},w1={ReactCurrentDispatcher:Vn,ReactCurrentBatchConfig:ef,ReactCurrentOwner:zm};function jx(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Ku,forEach:function(n,e,t){Ku(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ku(n,function(){e++}),e},toArray:function(n){return Ku(n,function(e){return e})||[]},only:function(n){if(!Bm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=ol;st.Fragment=d1;st.Profiler=p1;st.PureComponent=Fm;st.StrictMode=h1;st.Suspense=v1;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;st.act=jx;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Hx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Wx.call(e,l)&&!Xx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Fu,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:_1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:m1,_context:n},n.Consumer=n};st.createElement=Yx;st.createFactory=function(n){var e=Yx.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:g1,render:n}};st.isValidElement=Bm;st.lazy=function(n){return{$$typeof:y1,_payload:{_status:-1,_result:n},_init:T1}};st.memo=function(n,e){return{$$typeof:x1,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=ef.transition;ef.transition={};try{n()}finally{ef.transition=e}};st.unstable_act=jx;st.useCallback=function(n,e){return Vn.current.useCallback(n,e)};st.useContext=function(n){return Vn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return Vn.current.useDeferredValue(n)};st.useEffect=function(n,e){return Vn.current.useEffect(n,e)};st.useId=function(){return Vn.current.useId()};st.useImperativeHandle=function(n,e,t){return Vn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return Vn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return Vn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return Vn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return Vn.current.useReducer(n,e,t)};st.useRef=function(n){return Vn.current.useRef(n)};st.useState=function(n){return Vn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return Vn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return Vn.current.useTransition()};st.version="18.3.1";zx.exports=st;var Tr=zx.exports;const A1=c1(Tr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1=Tr,R1=Symbol.for("react.element"),b1=Symbol.for("react.fragment"),P1=Object.prototype.hasOwnProperty,L1=C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D1={key:!0,ref:!0,__self:!0,__source:!0};function qx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)P1.call(e,i)&&!D1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:R1,type:n,key:s,ref:o,props:r,_owner:L1.current}}cd.Fragment=b1;cd.jsx=qx;cd.jsxs=qx;kx.exports=cd;var dt=kx.exports,ip={},$x={exports:{}},bi={},Kx={exports:{}},Zx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,F){var R=U.length;U.push(F);e:for(;0<R;){var K=R-1>>>1,Q=U[K];if(0<r(Q,F))U[K]=F,U[R]=Q,R=K;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var F=U[0],R=U.pop();if(R!==F){U[0]=R;e:for(var K=0,Q=U.length,q=Q>>>1;K<q;){var $=2*(K+1)-1,re=U[$],ge=$+1,me=U[ge];if(0>r(re,R))ge<Q&&0>r(me,re)?(U[K]=me,U[ge]=R,K=ge):(U[K]=re,U[$]=R,K=$);else if(ge<Q&&0>r(me,R))U[K]=me,U[ge]=R,K=ge;else break e}}return F}function r(U,F){var R=U.sortIndex-F.sortIndex;return R!==0?R:U.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,g=!1,m=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var F=t(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=U)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(u)}}function y(U){if(m=!1,x(U),!g)if(t(l)!==null)g=!0,B(T);else{var F=t(u);F!==null&&G(y,F.startTime-U)}}function T(U,F){g=!1,m&&(m=!1,f(P),P=-1),p=!0;var R=h;try{for(x(F),d=t(l);d!==null&&(!(d.expirationTime>F)||U&&!I());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var Q=K(d.expirationTime<=F);F=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(l)&&i(l),x(F)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var $=t(u);$!==null&&G(y,$.startTime-F),q=!1}return q}finally{d=null,h=R,p=!1}}var w=!1,M=null,P=-1,S=5,E=-1;function I(){return!(n.unstable_now()-E<S)}function N(){if(M!==null){var U=n.unstable_now();E=U;var F=!0;try{F=M(!0,U)}finally{F?Z():(w=!1,M=null)}}else w=!1}var Z;if(typeof v=="function")Z=function(){v(N)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,O=L.port2;L.port1.onmessage=N,Z=function(){O.postMessage(null)}}else Z=function(){_(N,0)};function B(U){M=U,w||(w=!0,Z())}function G(U,F){P=_(function(){U(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,B(T))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var R=h;h=F;try{return U()}finally{h=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,F){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var R=h;h=U;try{return F()}finally{h=R}},n.unstable_scheduleCallback=function(U,F,R){var K=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?K+R:K):R=K,U){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=R+Q,U={id:c++,callback:F,priorityLevel:U,startTime:R,expirationTime:Q,sortIndex:-1},R>K?(U.sortIndex=R,e(u,U),t(l)===null&&U===t(u)&&(m?(f(P),P=-1):m=!0,G(y,R-K))):(U.sortIndex=Q,e(l,U),g||p||(g=!0,B(T))),U},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(U){var F=h;return function(){var R=h;h=F;try{return U.apply(this,arguments)}finally{h=R}}}})(Zx);Kx.exports=Zx;var U1=Kx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1=Tr,Ai=U1;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qx=new Set,lu={};function Fo(n,e){Va(n,e),Va(n+"Capture",e)}function Va(n,e){for(lu[n]=e,n=0;n<e.length;n++)Qx.add(e[n])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rp=Object.prototype.hasOwnProperty,I1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sg={},Mg={};function O1(n){return rp.call(Mg,n)?!0:rp.call(Sg,n)?!1:I1.test(n)?Mg[n]=!0:(Sg[n]=!0,!1)}function F1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function k1(n,e,t,i){if(e===null||typeof e>"u"||F1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){vn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];vn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){vn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){vn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){vn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){vn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){vn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){vn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){vn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Hm=/[\-:]([a-z])/g;function Gm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Hm,Gm);vn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Hm,Gm);vn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Hm,Gm);vn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){vn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});vn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){vn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Vm(n,e,t,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k1(e,t,r,i)&&(t=null),i||r===null?O1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Kr=N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zu=Symbol.for("react.element"),ca=Symbol.for("react.portal"),fa=Symbol.for("react.fragment"),Wm=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),Jx=Symbol.for("react.provider"),ey=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),ap=Symbol.for("react.suspense_list"),Ym=Symbol.for("react.memo"),rs=Symbol.for("react.lazy"),ty=Symbol.for("react.offscreen"),Eg=Symbol.iterator;function dl(n){return n===null||typeof n!="object"?null:(n=Eg&&n[Eg]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Object.assign,Hd;function Rl(n){if(Hd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hd=e&&e[1]||""}return`
`+Hd+n}var Gd=!1;function Vd(n,e){if(!n||Gd)return"";Gd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Rl(n):""}function z1(n){switch(n.tag){case 5:return Rl(n.type);case 16:return Rl("Lazy");case 13:return Rl("Suspense");case 19:return Rl("SuspenseList");case 0:case 2:case 15:return n=Vd(n.type,!1),n;case 11:return n=Vd(n.type.render,!1),n;case 1:return n=Vd(n.type,!0),n;default:return""}}function lp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case fa:return"Fragment";case ca:return"Portal";case sp:return"Profiler";case Wm:return"StrictMode";case op:return"Suspense";case ap:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ey:return(n.displayName||"Context")+".Consumer";case Jx:return(n._context.displayName||"Context")+".Provider";case Xm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ym:return e=n.displayName||null,e!==null?e:lp(n.type)||"Memo";case rs:e=n._payload,n=n._init;try{return lp(n(e))}catch{}}return null}function B1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lp(e);case 8:return e===Wm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ds(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ny(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H1(n){var e=ny(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Qu(n){n._valueTracker||(n._valueTracker=H1(n))}function iy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ny(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Mf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function up(n,e){var t=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Tg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ds(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ry(n,e){e=e.checked,e!=null&&Vm(n,"checked",e,!1)}function cp(n,e){ry(n,e);var t=Ds(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?fp(n,e.type,t):e.hasOwnProperty("defaultValue")&&fp(n,e.type,Ds(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function wg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function fp(n,e,t){(e!=="number"||Mf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var bl=Array.isArray;function Ra(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ds(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function dp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ag(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(bl(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ds(t)}}function sy(n,e){var t=Ds(e.value),i=Ds(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Cg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function oy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?oy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ju,ay=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ju=Ju||document.createElement("div"),Ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function uu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var zl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G1=["Webkit","ms","Moz","O"];Object.keys(zl).forEach(function(n){G1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),zl[e]=zl[n]})});function ly(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||zl.hasOwnProperty(n)&&zl[n]?(""+e).trim():e+"px"}function uy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=ly(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var V1=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pp(n,e){if(e){if(V1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function mp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _p=null;function jm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gp=null,ba=null,Pa=null;function Rg(n){if(n=Bu(n)){if(typeof gp!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=md(e),gp(n.stateNode,n.type,e))}}function cy(n){ba?Pa?Pa.push(n):Pa=[n]:ba=n}function fy(){if(ba){var n=ba,e=Pa;if(Pa=ba=null,Rg(n),e)for(n=0;n<e.length;n++)Rg(e[n])}}function dy(n,e){return n(e)}function hy(){}var Wd=!1;function py(n,e,t){if(Wd)return n(e,t);Wd=!0;try{return dy(n,e,t)}finally{Wd=!1,(ba!==null||Pa!==null)&&(hy(),fy())}}function cu(n,e){var t=n.stateNode;if(t===null)return null;var i=md(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var vp=!1;if(Vr)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){vp=!0}}),window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{vp=!1}function W1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Bl=!1,Ef=null,Tf=!1,xp=null,X1={onError:function(n){Bl=!0,Ef=n}};function Y1(n,e,t,i,r,s,o,a,l){Bl=!1,Ef=null,W1.apply(X1,arguments)}function j1(n,e,t,i,r,s,o,a,l){if(Y1.apply(this,arguments),Bl){if(Bl){var u=Ef;Bl=!1,Ef=null}else throw Error(oe(198));Tf||(Tf=!0,xp=u)}}function ko(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function my(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function bg(n){if(ko(n)!==n)throw Error(oe(188))}function q1(n){var e=n.alternate;if(!e){if(e=ko(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return bg(r),n;if(s===i)return bg(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function _y(n){return n=q1(n),n!==null?gy(n):null}function gy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=gy(n);if(e!==null)return e;n=n.sibling}return null}var vy=Ai.unstable_scheduleCallback,Pg=Ai.unstable_cancelCallback,$1=Ai.unstable_shouldYield,K1=Ai.unstable_requestPaint,Wt=Ai.unstable_now,Z1=Ai.unstable_getCurrentPriorityLevel,qm=Ai.unstable_ImmediatePriority,xy=Ai.unstable_UserBlockingPriority,wf=Ai.unstable_NormalPriority,Q1=Ai.unstable_LowPriority,yy=Ai.unstable_IdlePriority,fd=null,Sr=null;function J1(n){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(fd,n,void 0,(n.current.flags&128)===128)}catch{}}var ar=Math.clz32?Math.clz32:nT,eT=Math.log,tT=Math.LN2;function nT(n){return n>>>=0,n===0?32:31-(eT(n)/tT|0)|0}var ec=64,tc=4194304;function Pl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Af(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Pl(a):(s&=o,s!==0&&(i=Pl(s)))}else o=t&~r,o!==0?i=Pl(o):s!==0&&(i=Pl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ar(e),r=1<<t,i|=n[t],e&=~r;return i}function iT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ar(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=iT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function yp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sy(){var n=ec;return ec<<=1,!(ec&4194240)&&(ec=64),n}function Xd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ku(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ar(e),n[e]=t}function sT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ar(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function $m(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ar(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function My(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ey,Km,Ty,wy,Ay,Sp=!1,nc=[],vs=null,xs=null,ys=null,fu=new Map,du=new Map,as=[],oT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lg(n,e){switch(n){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":fu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(e.pointerId)}}function pl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bu(e),e!==null&&Km(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function aT(n,e,t,i,r){switch(e){case"focusin":return vs=pl(vs,n,e,t,i,r),!0;case"dragenter":return xs=pl(xs,n,e,t,i,r),!0;case"mouseover":return ys=pl(ys,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return fu.set(s,pl(fu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,du.set(s,pl(du.get(s)||null,n,e,t,i,r)),!0}return!1}function Cy(n){var e=oo(n.target);if(e!==null){var t=ko(e);if(t!==null){if(e=t.tag,e===13){if(e=my(t),e!==null){n.blockedOn=e,Ay(n.priority,function(){Ty(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Mp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);_p=i,t.target.dispatchEvent(i),_p=null}else return e=Bu(t),e!==null&&Km(e),n.blockedOn=t,!1;e.shift()}return!0}function Dg(n,e,t){tf(n)&&t.delete(e)}function lT(){Sp=!1,vs!==null&&tf(vs)&&(vs=null),xs!==null&&tf(xs)&&(xs=null),ys!==null&&tf(ys)&&(ys=null),fu.forEach(Dg),du.forEach(Dg)}function ml(n,e){n.blockedOn===e&&(n.blockedOn=null,Sp||(Sp=!0,Ai.unstable_scheduleCallback(Ai.unstable_NormalPriority,lT)))}function hu(n){function e(r){return ml(r,n)}if(0<nc.length){ml(nc[0],n);for(var t=1;t<nc.length;t++){var i=nc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vs!==null&&ml(vs,n),xs!==null&&ml(xs,n),ys!==null&&ml(ys,n),fu.forEach(e),du.forEach(e),t=0;t<as.length;t++)i=as[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<as.length&&(t=as[0],t.blockedOn===null);)Cy(t),t.blockedOn===null&&as.shift()}var La=Kr.ReactCurrentBatchConfig,Cf=!0;function uT(n,e,t,i){var r=vt,s=La.transition;La.transition=null;try{vt=1,Zm(n,e,t,i)}finally{vt=r,La.transition=s}}function cT(n,e,t,i){var r=vt,s=La.transition;La.transition=null;try{vt=4,Zm(n,e,t,i)}finally{vt=r,La.transition=s}}function Zm(n,e,t,i){if(Cf){var r=Mp(n,e,t,i);if(r===null)th(n,e,i,Rf,t),Lg(n,i);else if(aT(r,n,e,t,i))i.stopPropagation();else if(Lg(n,i),e&4&&-1<oT.indexOf(n)){for(;r!==null;){var s=Bu(r);if(s!==null&&Ey(s),s=Mp(n,e,t,i),s===null&&th(n,e,i,Rf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else th(n,e,i,null,t)}}var Rf=null;function Mp(n,e,t,i){if(Rf=null,n=jm(i),n=oo(n),n!==null)if(e=ko(n),e===null)n=null;else if(t=e.tag,t===13){if(n=my(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Rf=n,null}function Ry(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z1()){case qm:return 1;case xy:return 4;case wf:case Q1:return 16;case yy:return 536870912;default:return 16}default:return 16}}var us=null,Qm=null,nf=null;function by(){if(nf)return nf;var n,e=Qm,t=e.length,i,r="value"in us?us.value:us.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return nf=r.slice(n,1<i?1-i:void 0)}function rf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ic(){return!0}function Ug(){return!1}function Pi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:Ug,this.isPropagationStopped=Ug,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jm=Pi(al),zu=zt({},al,{view:0,detail:0}),fT=Pi(zu),Yd,jd,_l,dd=zt({},zu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:e_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_l&&(_l&&n.type==="mousemove"?(Yd=n.screenX-_l.screenX,jd=n.screenY-_l.screenY):jd=Yd=0,_l=n),Yd)},movementY:function(n){return"movementY"in n?n.movementY:jd}}),Ng=Pi(dd),dT=zt({},dd,{dataTransfer:0}),hT=Pi(dT),pT=zt({},zu,{relatedTarget:0}),qd=Pi(pT),mT=zt({},al,{animationName:0,elapsedTime:0,pseudoElement:0}),_T=Pi(mT),gT=zt({},al,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vT=Pi(gT),xT=zt({},al,{data:0}),Ig=Pi(xT),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ST={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ET(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=MT[n])?!!e[n]:!1}function e_(){return ET}var TT=zt({},zu,{key:function(n){if(n.key){var e=yT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=rf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ST[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:e_,charCode:function(n){return n.type==="keypress"?rf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wT=Pi(TT),AT=zt({},dd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Og=Pi(AT),CT=zt({},zu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:e_}),RT=Pi(CT),bT=zt({},al,{propertyName:0,elapsedTime:0,pseudoElement:0}),PT=Pi(bT),LT=zt({},dd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),DT=Pi(LT),UT=[9,13,27,32],t_=Vr&&"CompositionEvent"in window,Hl=null;Vr&&"documentMode"in document&&(Hl=document.documentMode);var NT=Vr&&"TextEvent"in window&&!Hl,Py=Vr&&(!t_||Hl&&8<Hl&&11>=Hl),Fg=" ",kg=!1;function Ly(n,e){switch(n){case"keyup":return UT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var da=!1;function IT(n,e){switch(n){case"compositionend":return Dy(e);case"keypress":return e.which!==32?null:(kg=!0,Fg);case"textInput":return n=e.data,n===Fg&&kg?null:n;default:return null}}function OT(n,e){if(da)return n==="compositionend"||!t_&&Ly(n,e)?(n=by(),nf=Qm=us=null,da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Py&&e.locale!=="ko"?null:e.data;default:return null}}var FT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!FT[n.type]:e==="textarea"}function Uy(n,e,t,i){cy(i),e=bf(e,"onChange"),0<e.length&&(t=new Jm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Gl=null,pu=null;function kT(n){Wy(n,0)}function hd(n){var e=ma(n);if(iy(e))return n}function zT(n,e){if(n==="change")return e}var Ny=!1;if(Vr){var $d;if(Vr){var Kd="oninput"in document;if(!Kd){var Bg=document.createElement("div");Bg.setAttribute("oninput","return;"),Kd=typeof Bg.oninput=="function"}$d=Kd}else $d=!1;Ny=$d&&(!document.documentMode||9<document.documentMode)}function Hg(){Gl&&(Gl.detachEvent("onpropertychange",Iy),pu=Gl=null)}function Iy(n){if(n.propertyName==="value"&&hd(pu)){var e=[];Uy(e,pu,n,jm(n)),py(kT,e)}}function BT(n,e,t){n==="focusin"?(Hg(),Gl=e,pu=t,Gl.attachEvent("onpropertychange",Iy)):n==="focusout"&&Hg()}function HT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hd(pu)}function GT(n,e){if(n==="click")return hd(e)}function VT(n,e){if(n==="input"||n==="change")return hd(e)}function WT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var cr=typeof Object.is=="function"?Object.is:WT;function mu(n,e){if(cr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!rp.call(e,r)||!cr(n[r],e[r]))return!1}return!0}function Gg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vg(n,e){var t=Gg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Gg(t)}}function Oy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Oy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Fy(){for(var n=window,e=Mf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Mf(n.document)}return e}function n_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function XT(n){var e=Fy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Oy(t.ownerDocument.documentElement,t)){if(i!==null&&n_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Vg(t,s);var o=Vg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var YT=Vr&&"documentMode"in document&&11>=document.documentMode,ha=null,Ep=null,Vl=null,Tp=!1;function Wg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Tp||ha==null||ha!==Mf(i)||(i=ha,"selectionStart"in i&&n_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vl&&mu(Vl,i)||(Vl=i,i=bf(Ep,"onSelect"),0<i.length&&(e=new Jm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ha)))}function rc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var pa={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Zd={},ky={};Vr&&(ky=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function pd(n){if(Zd[n])return Zd[n];if(!pa[n])return n;var e=pa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ky)return Zd[n]=e[t];return n}var zy=pd("animationend"),By=pd("animationiteration"),Hy=pd("animationstart"),Gy=pd("transitionend"),Vy=new Map,Xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zs(n,e){Vy.set(n,e),Fo(e,[n])}for(var Qd=0;Qd<Xg.length;Qd++){var Jd=Xg[Qd],jT=Jd.toLowerCase(),qT=Jd[0].toUpperCase()+Jd.slice(1);zs(jT,"on"+qT)}zs(zy,"onAnimationEnd");zs(By,"onAnimationIteration");zs(Hy,"onAnimationStart");zs("dblclick","onDoubleClick");zs("focusin","onFocus");zs("focusout","onBlur");zs(Gy,"onTransitionEnd");Va("onMouseEnter",["mouseout","mouseover"]);Va("onMouseLeave",["mouseout","mouseover"]);Va("onPointerEnter",["pointerout","pointerover"]);Va("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$T=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ll));function Yg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,j1(i,e,void 0,n),n.currentTarget=null}function Wy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Yg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Yg(r,a,u),s=l}}}if(Tf)throw n=xp,Tf=!1,xp=null,n}function Ct(n,e){var t=e[bp];t===void 0&&(t=e[bp]=new Set);var i=n+"__bubble";t.has(i)||(Xy(e,n,2,!1),t.add(i))}function eh(n,e,t){var i=0;e&&(i|=4),Xy(t,n,i,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function _u(n){if(!n[sc]){n[sc]=!0,Qx.forEach(function(t){t!=="selectionchange"&&($T.has(t)||eh(t,!1,n),eh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[sc]||(e[sc]=!0,eh("selectionchange",!1,e))}}function Xy(n,e,t,i){switch(Ry(e)){case 1:var r=uT;break;case 4:r=cT;break;default:r=Zm}t=r.bind(null,e,t,n),r=void 0,!vp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function th(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=oo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}py(function(){var u=s,c=jm(t),d=[];e:{var h=Vy.get(n);if(h!==void 0){var p=Jm,g=n;switch(n){case"keypress":if(rf(t)===0)break e;case"keydown":case"keyup":p=wT;break;case"focusin":g="focus",p=qd;break;case"focusout":g="blur",p=qd;break;case"beforeblur":case"afterblur":p=qd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=RT;break;case zy:case By:case Hy:p=_T;break;case Gy:p=PT;break;case"scroll":p=fT;break;case"wheel":p=DT;break;case"copy":case"cut":case"paste":p=vT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Og}var m=(e&4)!==0,_=!m&&n==="scroll",f=m?h!==null?h+"Capture":null:h;m=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,f!==null&&(y=cu(v,f),y!=null&&m.push(gu(v,y,x)))),_)break;v=v.return}0<m.length&&(h=new p(h,g,null,t,c),d.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==_p&&(g=t.relatedTarget||t.fromElement)&&(oo(g)||g[Wr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?oo(g):null,g!==null&&(_=ko(g),g!==_||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(m=Ng,y="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=Og,y="onPointerLeave",f="onPointerEnter",v="pointer"),_=p==null?h:ma(p),x=g==null?h:ma(g),h=new m(y,v+"leave",p,t,c),h.target=_,h.relatedTarget=x,y=null,oo(c)===u&&(m=new m(f,v+"enter",g,t,c),m.target=x,m.relatedTarget=_,y=m),_=y,p&&g)t:{for(m=p,f=g,v=0,x=m;x;x=Bo(x))v++;for(x=0,y=f;y;y=Bo(y))x++;for(;0<v-x;)m=Bo(m),v--;for(;0<x-v;)f=Bo(f),x--;for(;v--;){if(m===f||f!==null&&m===f.alternate)break t;m=Bo(m),f=Bo(f)}m=null}else m=null;p!==null&&jg(d,h,p,m,!1),g!==null&&_!==null&&jg(d,_,g,m,!0)}}e:{if(h=u?ma(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=zT;else if(zg(h))if(Ny)T=VT;else{T=HT;var w=BT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=GT);if(T&&(T=T(n,u))){Uy(d,T,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&fp(h,"number",h.value)}switch(w=u?ma(u):window,n){case"focusin":(zg(w)||w.contentEditable==="true")&&(ha=w,Ep=u,Vl=null);break;case"focusout":Vl=Ep=ha=null;break;case"mousedown":Tp=!0;break;case"contextmenu":case"mouseup":case"dragend":Tp=!1,Wg(d,t,c);break;case"selectionchange":if(YT)break;case"keydown":case"keyup":Wg(d,t,c)}var M;if(t_)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else da?Ly(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Py&&t.locale!=="ko"&&(da||P!=="onCompositionStart"?P==="onCompositionEnd"&&da&&(M=by()):(us=c,Qm="value"in us?us.value:us.textContent,da=!0)),w=bf(u,P),0<w.length&&(P=new Ig(P,n,null,t,c),d.push({event:P,listeners:w}),M?P.data=M:(M=Dy(t),M!==null&&(P.data=M)))),(M=NT?IT(n,t):OT(n,t))&&(u=bf(u,"onBeforeInput"),0<u.length&&(c=new Ig("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}Wy(d,e)})}function gu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function bf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=cu(n,t),s!=null&&i.unshift(gu(n,s,r)),s=cu(n,e),s!=null&&i.push(gu(n,s,r))),n=n.return}return i}function Bo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=cu(t,s),l!=null&&o.unshift(gu(t,l,a))):r||(l=cu(t,s),l!=null&&o.push(gu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var KT=/\r\n?/g,ZT=/\u0000|\uFFFD/g;function qg(n){return(typeof n=="string"?n:""+n).replace(KT,`
`).replace(ZT,"")}function oc(n,e,t){if(e=qg(e),qg(n)!==e&&t)throw Error(oe(425))}function Pf(){}var wp=null,Ap=null;function Cp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rp=typeof setTimeout=="function"?setTimeout:void 0,QT=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,JT=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(n){return $g.resolve(null).then(n).catch(ew)}:Rp;function ew(n){setTimeout(function(){throw n})}function nh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),hu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);hu(e)}function Ss(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Kg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ll=Math.random().toString(36).slice(2),_r="__reactFiber$"+ll,vu="__reactProps$"+ll,Wr="__reactContainer$"+ll,bp="__reactEvents$"+ll,tw="__reactListeners$"+ll,nw="__reactHandles$"+ll;function oo(n){var e=n[_r];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Wr]||t[_r]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Kg(n);n!==null;){if(t=n[_r])return t;n=Kg(n)}return e}n=t,t=n.parentNode}return null}function Bu(n){return n=n[_r]||n[Wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ma(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function md(n){return n[vu]||null}var Pp=[],_a=-1;function Bs(n){return{current:n}}function bt(n){0>_a||(n.current=Pp[_a],Pp[_a]=null,_a--)}function wt(n,e){_a++,Pp[_a]=n.current,n.current=e}var Us={},Pn=Bs(Us),Qn=Bs(!1),Ao=Us;function Wa(n,e){var t=n.type.contextTypes;if(!t)return Us;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Jn(n){return n=n.childContextTypes,n!=null}function Lf(){bt(Qn),bt(Pn)}function Zg(n,e,t){if(Pn.current!==Us)throw Error(oe(168));wt(Pn,e),wt(Qn,t)}function Yy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,B1(n)||"Unknown",r));return zt({},t,i)}function Df(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Us,Ao=Pn.current,wt(Pn,n),wt(Qn,Qn.current),!0}function Qg(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=Yy(n,e,Ao),i.__reactInternalMemoizedMergedChildContext=n,bt(Qn),bt(Pn),wt(Pn,n)):bt(Qn),wt(Qn,t)}var Nr=null,_d=!1,ih=!1;function jy(n){Nr===null?Nr=[n]:Nr.push(n)}function iw(n){_d=!0,jy(n)}function Hs(){if(!ih&&Nr!==null){ih=!0;var n=0,e=vt;try{var t=Nr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Nr=null,_d=!1}catch(r){throw Nr!==null&&(Nr=Nr.slice(n+1)),vy(qm,Hs),r}finally{vt=e,ih=!1}}return null}var ga=[],va=0,Uf=null,Nf=0,Ni=[],Ii=0,Co=null,Fr=1,kr="";function Zs(n,e){ga[va++]=Nf,ga[va++]=Uf,Uf=n,Nf=e}function qy(n,e,t){Ni[Ii++]=Fr,Ni[Ii++]=kr,Ni[Ii++]=Co,Co=n;var i=Fr;n=kr;var r=32-ar(i)-1;i&=~(1<<r),t+=1;var s=32-ar(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fr=1<<32-ar(e)+r|t<<r|i,kr=s+n}else Fr=1<<s|t<<r|i,kr=n}function i_(n){n.return!==null&&(Zs(n,1),qy(n,1,0))}function r_(n){for(;n===Uf;)Uf=ga[--va],ga[va]=null,Nf=ga[--va],ga[va]=null;for(;n===Co;)Co=Ni[--Ii],Ni[Ii]=null,kr=Ni[--Ii],Ni[Ii]=null,Fr=Ni[--Ii],Ni[Ii]=null}var Mi=null,xi=null,Lt=!1,ir=null;function $y(n,e){var t=Hi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Jg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mi=n,xi=Ss(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mi=n,xi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Co!==null?{id:Fr,overflow:kr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mi=n,xi=null,!0):!1;default:return!1}}function Lp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dp(n){if(Lt){var e=xi;if(e){var t=e;if(!Jg(n,e)){if(Lp(n))throw Error(oe(418));e=Ss(t.nextSibling);var i=Mi;e&&Jg(n,e)?$y(i,t):(n.flags=n.flags&-4097|2,Lt=!1,Mi=n)}}else{if(Lp(n))throw Error(oe(418));n.flags=n.flags&-4097|2,Lt=!1,Mi=n}}}function e0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mi=n}function ac(n){if(n!==Mi)return!1;if(!Lt)return e0(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Cp(n.type,n.memoizedProps)),e&&(e=xi)){if(Lp(n))throw Ky(),Error(oe(418));for(;e;)$y(n,e),e=Ss(e.nextSibling)}if(e0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){xi=Ss(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}xi=null}}else xi=Mi?Ss(n.stateNode.nextSibling):null;return!0}function Ky(){for(var n=xi;n;)n=Ss(n.nextSibling)}function Xa(){xi=Mi=null,Lt=!1}function s_(n){ir===null?ir=[n]:ir.push(n)}var rw=Kr.ReactCurrentBatchConfig;function gl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function lc(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function t0(n){var e=n._init;return e(n._payload)}function Zy(n){function e(f,v){if(n){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=ws(f,v),f.index=0,f.sibling=null,f}function s(f,v,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,x,y){return v===null||v.tag!==6?(v=ch(x,f.mode,y),v.return=f,v):(v=r(v,x),v.return=f,v)}function l(f,v,x,y){var T=x.type;return T===fa?c(f,v,x.props.children,y,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rs&&t0(T)===v.type)?(y=r(v,x.props),y.ref=gl(f,v,x),y.return=f,y):(y=ff(x.type,x.key,x.props,null,f.mode,y),y.ref=gl(f,v,x),y.return=f,y)}function u(f,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=fh(x,f.mode,y),v.return=f,v):(v=r(v,x.children||[]),v.return=f,v)}function c(f,v,x,y,T){return v===null||v.tag!==7?(v=mo(x,f.mode,y,T),v.return=f,v):(v=r(v,x),v.return=f,v)}function d(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ch(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zu:return x=ff(v.type,v.key,v.props,null,f.mode,x),x.ref=gl(f,null,v),x.return=f,x;case ca:return v=fh(v,f.mode,x),v.return=f,v;case rs:var y=v._init;return d(f,y(v._payload),x)}if(bl(v)||dl(v))return v=mo(v,f.mode,x,null),v.return=f,v;lc(f,v)}return null}function h(f,v,x,y){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(f,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zu:return x.key===T?l(f,v,x,y):null;case ca:return x.key===T?u(f,v,x,y):null;case rs:return T=x._init,h(f,v,T(x._payload),y)}if(bl(x)||dl(x))return T!==null?null:c(f,v,x,y,null);lc(f,x)}return null}function p(f,v,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(x)||null,a(v,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zu:return f=f.get(y.key===null?x:y.key)||null,l(v,f,y,T);case ca:return f=f.get(y.key===null?x:y.key)||null,u(v,f,y,T);case rs:var w=y._init;return p(f,v,x,w(y._payload),T)}if(bl(y)||dl(y))return f=f.get(x)||null,c(v,f,y,T,null);lc(v,y)}return null}function g(f,v,x,y){for(var T=null,w=null,M=v,P=v=0,S=null;M!==null&&P<x.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=h(f,M,x[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(f,M),v=s(E,v,P),w===null?T=E:w.sibling=E,w=E,M=S}if(P===x.length)return t(f,M),Lt&&Zs(f,P),T;if(M===null){for(;P<x.length;P++)M=d(f,x[P],y),M!==null&&(v=s(M,v,P),w===null?T=M:w.sibling=M,w=M);return Lt&&Zs(f,P),T}for(M=i(f,M);P<x.length;P++)S=p(M,f,P,x[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?T=S:w.sibling=S,w=S);return n&&M.forEach(function(I){return e(f,I)}),Lt&&Zs(f,P),T}function m(f,v,x,y){var T=dl(x);if(typeof T!="function")throw Error(oe(150));if(x=T.call(x),x==null)throw Error(oe(151));for(var w=T=null,M=v,P=v=0,S=null,E=x.next();M!==null&&!E.done;P++,E=x.next()){M.index>P?(S=M,M=null):S=M.sibling;var I=h(f,M,E.value,y);if(I===null){M===null&&(M=S);break}n&&M&&I.alternate===null&&e(f,M),v=s(I,v,P),w===null?T=I:w.sibling=I,w=I,M=S}if(E.done)return t(f,M),Lt&&Zs(f,P),T;if(M===null){for(;!E.done;P++,E=x.next())E=d(f,E.value,y),E!==null&&(v=s(E,v,P),w===null?T=E:w.sibling=E,w=E);return Lt&&Zs(f,P),T}for(M=i(f,M);!E.done;P++,E=x.next())E=p(M,f,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),v=s(E,v,P),w===null?T=E:w.sibling=E,w=E);return n&&M.forEach(function(N){return e(f,N)}),Lt&&Zs(f,P),T}function _(f,v,x,y){if(typeof x=="object"&&x!==null&&x.type===fa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Zu:e:{for(var T=x.key,w=v;w!==null;){if(w.key===T){if(T=x.type,T===fa){if(w.tag===7){t(f,w.sibling),v=r(w,x.props.children),v.return=f,f=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===rs&&t0(T)===w.type){t(f,w.sibling),v=r(w,x.props),v.ref=gl(f,w,x),v.return=f,f=v;break e}t(f,w);break}else e(f,w);w=w.sibling}x.type===fa?(v=mo(x.props.children,f.mode,y,x.key),v.return=f,f=v):(y=ff(x.type,x.key,x.props,null,f.mode,y),y.ref=gl(f,v,x),y.return=f,f=y)}return o(f);case ca:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(f,v.sibling),v=r(v,x.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=fh(x,f.mode,y),v.return=f,f=v}return o(f);case rs:return w=x._init,_(f,v,w(x._payload),y)}if(bl(x))return g(f,v,x,y);if(dl(x))return m(f,v,x,y);lc(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,x),v.return=f,f=v):(t(f,v),v=ch(x,f.mode,y),v.return=f,f=v),o(f)):t(f,v)}return _}var Ya=Zy(!0),Qy=Zy(!1),If=Bs(null),Of=null,xa=null,o_=null;function a_(){o_=xa=Of=null}function l_(n){var e=If.current;bt(If),n._currentValue=e}function Up(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Da(n,e){Of=n,o_=xa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Zn=!0),n.firstContext=null)}function ji(n){var e=n._currentValue;if(o_!==n)if(n={context:n,memoizedValue:e,next:null},xa===null){if(Of===null)throw Error(oe(308));xa=n,Of.dependencies={lanes:0,firstContext:n}}else xa=xa.next=n;return e}var ao=null;function u_(n){ao===null?ao=[n]:ao.push(n)}function Jy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,u_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xr(n,i)}function Xr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ss=!1;function c_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ms(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xr(n,t)}return r=i.interleaved,r===null?(e.next=e,u_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xr(n,t)}function sf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,$m(n,t)}}function n0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ff(n,e,t,i){var r=n.updateQueue;ss=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,m=a;switch(h=e,p=t,m.tag){case 1:if(g=m.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=zt({},d,h);break e;case 2:ss=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);bo|=o,n.lanes=o,n.memoizedState=d}}function i0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Hu={},Mr=Bs(Hu),xu=Bs(Hu),yu=Bs(Hu);function lo(n){if(n===Hu)throw Error(oe(174));return n}function f_(n,e){switch(wt(yu,e),wt(xu,n),wt(Mr,Hu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=hp(e,n)}bt(Mr),wt(Mr,e)}function ja(){bt(Mr),bt(xu),bt(yu)}function tS(n){lo(yu.current);var e=lo(Mr.current),t=hp(e,n.type);e!==t&&(wt(xu,n),wt(Mr,t))}function d_(n){xu.current===n&&(bt(Mr),bt(xu))}var It=Bs(0);function kf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rh=[];function h_(){for(var n=0;n<rh.length;n++)rh[n]._workInProgressVersionPrimary=null;rh.length=0}var of=Kr.ReactCurrentDispatcher,sh=Kr.ReactCurrentBatchConfig,Ro=0,kt=null,Jt=null,ln=null,zf=!1,Wl=!1,Su=0,sw=0;function yn(){throw Error(oe(321))}function p_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!cr(n[t],e[t]))return!1;return!0}function m_(n,e,t,i,r,s){if(Ro=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,of.current=n===null||n.memoizedState===null?uw:cw,n=t(i,r),Wl){s=0;do{if(Wl=!1,Su=0,25<=s)throw Error(oe(301));s+=1,ln=Jt=null,e.updateQueue=null,of.current=fw,n=t(i,r)}while(Wl)}if(of.current=Bf,e=Jt!==null&&Jt.next!==null,Ro=0,ln=Jt=kt=null,zf=!1,e)throw Error(oe(300));return n}function __(){var n=Su!==0;return Su=0,n}function dr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?kt.memoizedState=ln=n:ln=ln.next=n,ln}function qi(){if(Jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var e=ln===null?kt.memoizedState:ln.next;if(e!==null)ln=e,Jt=n;else{if(n===null)throw Error(oe(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},ln===null?kt.memoizedState=ln=n:ln=ln.next=n}return ln}function Mu(n,e){return typeof e=="function"?e(n):e}function oh(n){var e=qi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=Jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ro&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,kt.lanes|=c,bo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,cr(i,e.memoizedState)||(Zn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,kt.lanes|=s,bo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ah(n){var e=qi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);cr(s,e.memoizedState)||(Zn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function nS(){}function iS(n,e){var t=kt,i=qi(),r=e(),s=!cr(i.memoizedState,r);if(s&&(i.memoizedState=r,Zn=!0),i=i.queue,g_(oS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ln!==null&&ln.memoizedState.tag&1){if(t.flags|=2048,Eu(9,sS.bind(null,t,i,r,e),void 0,null),un===null)throw Error(oe(349));Ro&30||rS(t,e,r)}return r}function rS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function sS(n,e,t,i){e.value=t,e.getSnapshot=i,aS(e)&&lS(n)}function oS(n,e,t){return t(function(){aS(e)&&lS(n)})}function aS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!cr(n,t)}catch{return!0}}function lS(n){var e=Xr(n,1);e!==null&&lr(e,n,1,-1)}function r0(n){var e=dr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mu,lastRenderedState:n},e.queue=n,n=n.dispatch=lw.bind(null,kt,n),[e.memoizedState,n]}function Eu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function uS(){return qi().memoizedState}function af(n,e,t,i){var r=dr();kt.flags|=n,r.memoizedState=Eu(1|e,t,void 0,i===void 0?null:i)}function gd(n,e,t,i){var r=qi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&p_(i,o.deps)){r.memoizedState=Eu(e,t,s,i);return}}kt.flags|=n,r.memoizedState=Eu(1|e,t,s,i)}function s0(n,e){return af(8390656,8,n,e)}function g_(n,e){return gd(2048,8,n,e)}function cS(n,e){return gd(4,2,n,e)}function fS(n,e){return gd(4,4,n,e)}function dS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function hS(n,e,t){return t=t!=null?t.concat([n]):null,gd(4,4,dS.bind(null,e,n),t)}function v_(){}function pS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&p_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function mS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&p_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function _S(n,e,t){return Ro&21?(cr(t,e)||(t=Sy(),kt.lanes|=t,bo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=t)}function ow(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=sh.transition;sh.transition={};try{n(!1),e()}finally{vt=t,sh.transition=i}}function gS(){return qi().memoizedState}function aw(n,e,t){var i=Ts(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},vS(n))xS(e,t);else if(t=Jy(n,e,t,i),t!==null){var r=Gn();lr(t,n,i,r),yS(t,e,i)}}function lw(n,e,t){var i=Ts(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(vS(n))xS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,cr(a,o)){var l=e.interleaved;l===null?(r.next=r,u_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Jy(n,e,r,i),t!==null&&(r=Gn(),lr(t,n,i,r),yS(t,e,i))}}function vS(n){var e=n.alternate;return n===kt||e!==null&&e===kt}function xS(n,e){Wl=zf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function yS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,$m(n,t)}}var Bf={readContext:ji,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},uw={readContext:ji,useCallback:function(n,e){return dr().memoizedState=[n,e===void 0?null:e],n},useContext:ji,useEffect:s0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,af(4194308,4,dS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return af(4194308,4,n,e)},useInsertionEffect:function(n,e){return af(4,2,n,e)},useMemo:function(n,e){var t=dr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=dr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=aw.bind(null,kt,n),[i.memoizedState,n]},useRef:function(n){var e=dr();return n={current:n},e.memoizedState=n},useState:r0,useDebugValue:v_,useDeferredValue:function(n){return dr().memoizedState=n},useTransition:function(){var n=r0(!1),e=n[0];return n=ow.bind(null,n[1]),dr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=kt,r=dr();if(Lt){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),un===null)throw Error(oe(349));Ro&30||rS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,s0(oS.bind(null,i,s,n),[n]),i.flags|=2048,Eu(9,sS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=dr(),e=un.identifierPrefix;if(Lt){var t=kr,i=Fr;t=(i&~(1<<32-ar(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Su++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=sw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},cw={readContext:ji,useCallback:pS,useContext:ji,useEffect:g_,useImperativeHandle:hS,useInsertionEffect:cS,useLayoutEffect:fS,useMemo:mS,useReducer:oh,useRef:uS,useState:function(){return oh(Mu)},useDebugValue:v_,useDeferredValue:function(n){var e=qi();return _S(e,Jt.memoizedState,n)},useTransition:function(){var n=oh(Mu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:nS,useSyncExternalStore:iS,useId:gS,unstable_isNewReconciler:!1},fw={readContext:ji,useCallback:pS,useContext:ji,useEffect:g_,useImperativeHandle:hS,useInsertionEffect:cS,useLayoutEffect:fS,useMemo:mS,useReducer:ah,useRef:uS,useState:function(){return ah(Mu)},useDebugValue:v_,useDeferredValue:function(n){var e=qi();return Jt===null?e.memoizedState=n:_S(e,Jt.memoizedState,n)},useTransition:function(){var n=ah(Mu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:nS,useSyncExternalStore:iS,useId:gS,unstable_isNewReconciler:!1};function tr(n,e){if(n&&n.defaultProps){e=zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Np(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var vd={isMounted:function(n){return(n=n._reactInternals)?ko(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=Ts(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ms(n,s,r),e!==null&&(lr(e,n,r,i),sf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=Ts(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ms(n,s,r),e!==null&&(lr(e,n,r,i),sf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Gn(),i=Ts(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ms(n,r,i),e!==null&&(lr(e,n,i,t),sf(e,n,i))}};function o0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mu(t,i)||!mu(r,s):!0}function SS(n,e,t){var i=!1,r=Us,s=e.contextType;return typeof s=="object"&&s!==null?s=ji(s):(r=Jn(e)?Ao:Pn.current,i=e.contextTypes,s=(i=i!=null)?Wa(n,r):Us),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function a0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&vd.enqueueReplaceState(e,e.state,null)}function Ip(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},c_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ji(s):(s=Jn(e)?Ao:Pn.current,r.context=Wa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Np(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vd.enqueueReplaceState(r,r.state,null),Ff(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function qa(n,e){try{var t="",i=e;do t+=z1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function lh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Op(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var dw=typeof WeakMap=="function"?WeakMap:Map;function MS(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Gf||(Gf=!0,Yp=i),Op(n,e)},t}function ES(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Op(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Op(n,e),typeof i!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function l0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new dw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Aw.bind(null,n,e,t),e.then(n,n))}function u0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function c0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,Ms(t,e,1))),t.lanes|=1),n)}var hw=Kr.ReactCurrentOwner,Zn=!1;function On(n,e,t,i){e.child=n===null?Qy(e,null,t,i):Ya(e,n.child,t,i)}function f0(n,e,t,i,r){t=t.render;var s=e.ref;return Da(e,r),i=m_(n,e,t,i,s,r),t=__(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(Lt&&t&&i_(e),e.flags|=1,On(n,e,i,r),e.child)}function d0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!A_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,TS(n,e,s,i,r)):(n=ff(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:mu,t(o,i)&&n.ref===e.ref)return Yr(n,e,r)}return e.flags|=1,n=ws(s,i),n.ref=e.ref,n.return=e,e.child=n}function TS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(mu(s,i)&&n.ref===e.ref)if(Zn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Zn=!0);else return e.lanes=n.lanes,Yr(n,e,r)}return Fp(n,e,t,i,r)}function wS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Sa,hi),hi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(Sa,hi),hi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(Sa,hi),hi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(Sa,hi),hi|=i;return On(n,e,r,t),e.child}function AS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Fp(n,e,t,i,r){var s=Jn(t)?Ao:Pn.current;return s=Wa(e,s),Da(e,r),t=m_(n,e,t,i,s,r),i=__(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(Lt&&i&&i_(e),e.flags|=1,On(n,e,t,r),e.child)}function h0(n,e,t,i,r){if(Jn(t)){var s=!0;Df(e)}else s=!1;if(Da(e,r),e.stateNode===null)lf(n,e),SS(e,t,i),Ip(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ji(u):(u=Jn(t)?Ao:Pn.current,u=Wa(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&a0(e,o,i,u),ss=!1;var h=e.memoizedState;o.state=h,Ff(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Qn.current||ss?(typeof c=="function"&&(Np(e,t,c,i),l=e.memoizedState),(a=ss||o0(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,eS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:tr(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ji(l):(l=Jn(t)?Ao:Pn.current,l=Wa(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&a0(e,o,i,l),ss=!1,h=e.memoizedState,o.state=h,Ff(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||Qn.current||ss?(typeof p=="function"&&(Np(e,t,p,i),g=e.memoizedState),(u=ss||o0(e,t,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return kp(n,e,t,i,s,r)}function kp(n,e,t,i,r,s){AS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qg(e,t,!1),Yr(n,e,s);i=e.stateNode,hw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ya(e,n.child,null,s),e.child=Ya(e,null,a,s)):On(n,e,a,s),e.memoizedState=i.state,r&&Qg(e,t,!0),e.child}function CS(n){var e=n.stateNode;e.pendingContext?Zg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Zg(n,e.context,!1),f_(n,e.containerInfo)}function p0(n,e,t,i,r){return Xa(),s_(r),e.flags|=256,On(n,e,t,i),e.child}var zp={dehydrated:null,treeContext:null,retryLane:0};function Bp(n){return{baseLanes:n,cachePool:null,transitions:null}}function RS(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(It,r&1),n===null)return Dp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sd(o,i,0,null),n=mo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Bp(t),e.memoizedState=zp,n):x_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ws(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ws(a,s):(s=mo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Bp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=zp,i}return s=n.child,n=s.sibling,i=ws(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function x_(n,e){return e=Sd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function uc(n,e,t,i){return i!==null&&s_(i),Ya(e,n.child,null,t),n=x_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function pw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=lh(Error(oe(422))),uc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sd({mode:"visible",children:i.children},r,0,null),s=mo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ya(e,n.child,null,o),e.child.memoizedState=Bp(o),e.memoizedState=zp,s);if(!(e.mode&1))return uc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=lh(s,i,void 0),uc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Zn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xr(n,r),lr(i,n,r,-1))}return w_(),i=lh(Error(oe(421))),uc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Cw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,xi=Ss(r.nextSibling),Mi=e,Lt=!0,ir=null,n!==null&&(Ni[Ii++]=Fr,Ni[Ii++]=kr,Ni[Ii++]=Co,Fr=n.id,kr=n.overflow,Co=e),e=x_(e,i.children),e.flags|=4096,e)}function m0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Up(n.return,e,t)}function uh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function bS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(On(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&m0(n,t,e);else if(n.tag===19)m0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&kf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),uh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&kf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}uh(e,!0,t,null,s);break;case"together":uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),bo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=ws(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ws(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function mw(n,e,t){switch(e.tag){case 3:CS(e),Xa();break;case 5:tS(e);break;case 1:Jn(e.type)&&Df(e);break;case 4:f_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(If,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?RS(n,e,t):(wt(It,It.current&1),n=Yr(n,e,t),n!==null?n.sibling:null);wt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return bS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,wS(n,e,t)}return Yr(n,e,t)}var PS,Hp,LS,DS;PS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hp=function(){};LS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,lo(Mr.current);var s=null;switch(t){case"input":r=up(n,r),i=up(n,i),s=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),s=[];break;case"textarea":r=dp(n,r),i=dp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Pf)}pp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};DS=function(n,e,t,i){t!==i&&(e.flags|=4)};function vl(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Sn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function _w(n,e,t){var i=e.pendingProps;switch(r_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return Jn(e.type)&&Lf(),Sn(e),null;case 3:return i=e.stateNode,ja(),bt(Qn),bt(Pn),h_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ac(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ir!==null&&($p(ir),ir=null))),Hp(n,e),Sn(e),null;case 5:d_(e);var r=lo(yu.current);if(t=e.type,n!==null&&e.stateNode!=null)LS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Sn(e),null}if(n=lo(Mr.current),ac(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[_r]=e,i[vu]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Ll.length;r++)Ct(Ll[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Tg(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":Ag(i,s),Ct("invalid",i)}pp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,n),r=["children",""+a]):lu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":Qu(i),wg(i,s,!0);break;case"textarea":Qu(i),Cg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=oy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[_r]=e,n[vu]=i,PS(n,e,!1,!1),e.stateNode=n;e:{switch(o=mp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ll.length;r++)Ct(Ll[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":Tg(n,i),r=up(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":Ag(n,i),r=dp(n,i),Ct("invalid",n);break;default:r=i}pp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ay(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&uu(n,l):typeof l=="number"&&uu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Vm(n,s,l,o))}switch(t){case"input":Qu(n),wg(n,i,!1);break;case"textarea":Qu(n),Cg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ds(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ra(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ra(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Pf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(n&&e.stateNode!=null)DS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=lo(yu.current),lo(Mr.current),ac(e)){if(i=e.stateNode,t=e.memoizedProps,i[_r]=e,(s=i.nodeValue!==t)&&(n=Mi,n!==null))switch(n.tag){case 3:oc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&oc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[_r]=e,e.stateNode=i}return Sn(e),null;case 13:if(bt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&xi!==null&&e.mode&1&&!(e.flags&128))Ky(),Xa(),e.flags|=98560,s=!1;else if(s=ac(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[_r]=e}else Xa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else ir!==null&&($p(ir),ir=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?tn===0&&(tn=3):w_())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return ja(),Hp(n,e),n===null&&_u(e.stateNode.containerInfo),Sn(e),null;case 10:return l_(e.type._context),Sn(e),null;case 17:return Jn(e.type)&&Lf(),Sn(e),null;case 19:if(bt(It),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vl(s,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=kf(n),o!==null){for(e.flags|=128,vl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>$a&&(e.flags|=128,i=!0,vl(s,!1),e.lanes=4194304)}else{if(!i)if(n=kf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),vl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Sn(e),null}else 2*Wt()-s.renderingStartTime>$a&&t!==1073741824&&(e.flags|=128,i=!0,vl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=It.current,wt(It,i?t&1|2:t&1),e):(Sn(e),null);case 22:case 23:return T_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hi&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function gw(n,e){switch(r_(e),e.tag){case 1:return Jn(e.type)&&Lf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ja(),bt(Qn),bt(Pn),h_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return d_(e),null;case 13:if(bt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Xa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(It),null;case 4:return ja(),null;case 10:return l_(e.type._context),null;case 22:case 23:return T_(),null;case 24:return null;default:return null}}var cc=!1,An=!1,vw=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ya(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function Gp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var _0=!1;function xw(n,e){if(wp=Cf,n=Fy(),n_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ap={focusedElem:n,selectionRange:t},Cf=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,_=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?m:tr(e.type,m),_);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){Ht(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return g=_0,_0=!1,g}function Xl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Gp(e,t,s)}r=r.next}while(r!==i)}}function xd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Vp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function US(n){var e=n.alternate;e!==null&&(n.alternate=null,US(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[_r],delete e[vu],delete e[bp],delete e[tw],delete e[nw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function NS(n){return n.tag===5||n.tag===3||n.tag===4}function g0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||NS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Pf));else if(i!==4&&(n=n.child,n!==null))for(Wp(n,e,t),n=n.sibling;n!==null;)Wp(n,e,t),n=n.sibling}function Xp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Xp(n,e,t),n=n.sibling;n!==null;)Xp(n,e,t),n=n.sibling}var dn=null,nr=!1;function Zr(n,e,t){for(t=t.child;t!==null;)IS(n,e,t),t=t.sibling}function IS(n,e,t){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(fd,t)}catch{}switch(t.tag){case 5:An||ya(t,e);case 6:var i=dn,r=nr;dn=null,Zr(n,e,t),dn=i,nr=r,dn!==null&&(nr?(n=dn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):dn.removeChild(t.stateNode));break;case 18:dn!==null&&(nr?(n=dn,t=t.stateNode,n.nodeType===8?nh(n.parentNode,t):n.nodeType===1&&nh(n,t),hu(n)):nh(dn,t.stateNode));break;case 4:i=dn,r=nr,dn=t.stateNode.containerInfo,nr=!0,Zr(n,e,t),dn=i,nr=r;break;case 0:case 11:case 14:case 15:if(!An&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gp(t,e,o),r=r.next}while(r!==i)}Zr(n,e,t);break;case 1:if(!An&&(ya(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}Zr(n,e,t);break;case 21:Zr(n,e,t);break;case 22:t.mode&1?(An=(i=An)||t.memoizedState!==null,Zr(n,e,t),An=i):Zr(n,e,t);break;default:Zr(n,e,t)}}function v0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new vw),e.forEach(function(i){var r=Rw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ki(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dn=a.stateNode,nr=!1;break e;case 3:dn=a.stateNode.containerInfo,nr=!0;break e;case 4:dn=a.stateNode.containerInfo,nr=!0;break e}a=a.return}if(dn===null)throw Error(oe(160));IS(s,o,r),dn=null,nr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)OS(e,n),e=e.sibling}function OS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ki(e,n),fr(n),i&4){try{Xl(3,n,n.return),xd(3,n)}catch(m){Ht(n,n.return,m)}try{Xl(5,n,n.return)}catch(m){Ht(n,n.return,m)}}break;case 1:Ki(e,n),fr(n),i&512&&t!==null&&ya(t,t.return);break;case 5:if(Ki(e,n),fr(n),i&512&&t!==null&&ya(t,t.return),n.flags&32){var r=n.stateNode;try{uu(r,"")}catch(m){Ht(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ry(r,s),mp(a,o);var u=mp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?uy(r,d):c==="dangerouslySetInnerHTML"?ay(r,d):c==="children"?uu(r,d):Vm(r,c,d,u)}switch(a){case"input":cp(r,s);break;case"textarea":sy(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ra(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ra(r,!!s.multiple,s.defaultValue,!0):Ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[vu]=s}catch(m){Ht(n,n.return,m)}}break;case 6:if(Ki(e,n),fr(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){Ht(n,n.return,m)}}break;case 3:if(Ki(e,n),fr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{hu(e.containerInfo)}catch(m){Ht(n,n.return,m)}break;case 4:Ki(e,n),fr(n);break;case 13:Ki(e,n),fr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(M_=Wt())),i&4&&v0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(An=(u=An)||c,Ki(e,n),An=u):Ki(e,n),fr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:Xl(4,h,h.return);break;case 1:ya(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(m){Ht(i,t,m)}}break;case 5:ya(h,h.return);break;case 22:if(h.memoizedState!==null){y0(d);continue}}p!==null?(p.return=h,Ee=p):y0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ly("display",o))}catch(m){Ht(n,n.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){Ht(n,n.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ki(e,n),fr(n),i&4&&v0(n);break;case 21:break;default:Ki(e,n),fr(n)}}function fr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(NS(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uu(r,""),i.flags&=-33);var s=g0(n);Xp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=g0(n);Wp(n,a,o);break;default:throw Error(oe(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function yw(n,e,t){Ee=n,FS(n)}function FS(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||cc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||An;a=cc;var u=An;if(cc=o,(An=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?S0(r):l!==null?(l.return=o,Ee=l):S0(r);for(;s!==null;)Ee=s,FS(s),s=s.sibling;Ee=r,cc=a,An=u}x0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):x0(n)}}function x0(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:An||xd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!An)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:tr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&i0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}i0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&hu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}An||e.flags&512&&Vp(e)}catch(h){Ht(e,e.return,h)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function y0(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function S0(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{xd(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{Vp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{Vp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var Sw=Math.ceil,Hf=Kr.ReactCurrentDispatcher,y_=Kr.ReactCurrentOwner,Xi=Kr.ReactCurrentBatchConfig,ct=0,un=null,$t=null,_n=0,hi=0,Sa=Bs(0),tn=0,Tu=null,bo=0,yd=0,S_=0,Yl=null,jn=null,M_=0,$a=1/0,Dr=null,Gf=!1,Yp=null,Es=null,fc=!1,cs=null,Vf=0,jl=0,jp=null,uf=-1,cf=0;function Gn(){return ct&6?Wt():uf!==-1?uf:uf=Wt()}function Ts(n){return n.mode&1?ct&2&&_n!==0?_n&-_n:rw.transition!==null?(cf===0&&(cf=Sy()),cf):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Ry(n.type)),n):1}function lr(n,e,t,i){if(50<jl)throw jl=0,jp=null,Error(oe(185));ku(n,t,i),(!(ct&2)||n!==un)&&(n===un&&(!(ct&2)&&(yd|=t),tn===4&&ls(n,_n)),ei(n,i),t===1&&ct===0&&!(e.mode&1)&&($a=Wt()+500,_d&&Hs()))}function ei(n,e){var t=n.callbackNode;rT(n,e);var i=Af(n,n===un?_n:0);if(i===0)t!==null&&Pg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Pg(t),e===1)n.tag===0?iw(M0.bind(null,n)):jy(M0.bind(null,n)),JT(function(){!(ct&6)&&Hs()}),t=null;else{switch(My(i)){case 1:t=qm;break;case 4:t=xy;break;case 16:t=wf;break;case 536870912:t=yy;break;default:t=wf}t=XS(t,kS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function kS(n,e){if(uf=-1,cf=0,ct&6)throw Error(oe(327));var t=n.callbackNode;if(Ua()&&n.callbackNode!==t)return null;var i=Af(n,n===un?_n:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Wf(n,i);else{e=i;var r=ct;ct|=2;var s=BS();(un!==n||_n!==e)&&(Dr=null,$a=Wt()+500,po(n,e));do try{Tw();break}catch(a){zS(n,a)}while(!0);a_(),Hf.current=s,ct=r,$t!==null?e=0:(un=null,_n=0,e=tn)}if(e!==0){if(e===2&&(r=yp(n),r!==0&&(i=r,e=qp(n,r))),e===1)throw t=Tu,po(n,0),ls(n,i),ei(n,Wt()),t;if(e===6)ls(n,i);else{if(r=n.current.alternate,!(i&30)&&!Mw(r)&&(e=Wf(n,i),e===2&&(s=yp(n),s!==0&&(i=s,e=qp(n,s))),e===1))throw t=Tu,po(n,0),ls(n,i),ei(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Qs(n,jn,Dr);break;case 3:if(ls(n,i),(i&130023424)===i&&(e=M_+500-Wt(),10<e)){if(Af(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Gn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Rp(Qs.bind(null,n,jn,Dr),e);break}Qs(n,jn,Dr);break;case 4:if(ls(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ar(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sw(i/1960))-i,10<i){n.timeoutHandle=Rp(Qs.bind(null,n,jn,Dr),i);break}Qs(n,jn,Dr);break;case 5:Qs(n,jn,Dr);break;default:throw Error(oe(329))}}}return ei(n,Wt()),n.callbackNode===t?kS.bind(null,n):null}function qp(n,e){var t=Yl;return n.current.memoizedState.isDehydrated&&(po(n,e).flags|=256),n=Wf(n,e),n!==2&&(e=jn,jn=t,e!==null&&$p(e)),n}function $p(n){jn===null?jn=n:jn.push.apply(jn,n)}function Mw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!cr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ls(n,e){for(e&=~S_,e&=~yd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ar(e),i=1<<t;n[t]=-1,e&=~i}}function M0(n){if(ct&6)throw Error(oe(327));Ua();var e=Af(n,0);if(!(e&1))return ei(n,Wt()),null;var t=Wf(n,e);if(n.tag!==0&&t===2){var i=yp(n);i!==0&&(e=i,t=qp(n,i))}if(t===1)throw t=Tu,po(n,0),ls(n,e),ei(n,Wt()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qs(n,jn,Dr),ei(n,Wt()),null}function E_(n,e){var t=ct;ct|=1;try{return n(e)}finally{ct=t,ct===0&&($a=Wt()+500,_d&&Hs())}}function Po(n){cs!==null&&cs.tag===0&&!(ct&6)&&Ua();var e=ct;ct|=1;var t=Xi.transition,i=vt;try{if(Xi.transition=null,vt=1,n)return n()}finally{vt=i,Xi.transition=t,ct=e,!(ct&6)&&Hs()}}function T_(){hi=Sa.current,bt(Sa)}function po(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,QT(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(r_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Lf();break;case 3:ja(),bt(Qn),bt(Pn),h_();break;case 5:d_(i);break;case 4:ja();break;case 13:bt(It);break;case 19:bt(It);break;case 10:l_(i.type._context);break;case 22:case 23:T_()}t=t.return}if(un=n,$t=n=ws(n.current,null),_n=hi=e,tn=0,Tu=null,S_=yd=bo=0,jn=Yl=null,ao!==null){for(e=0;e<ao.length;e++)if(t=ao[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ao=null}return n}function zS(n,e){do{var t=$t;try{if(a_(),of.current=Bf,zf){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zf=!1}if(Ro=0,ln=Jt=kt=null,Wl=!1,Su=0,y_.current=null,t===null||t.return===null){tn=1,Tu=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=u0(o);if(p!==null){p.flags&=-257,c0(p,o,a,s,e),p.mode&1&&l0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var m=new Set;m.add(l),e.updateQueue=m}else g.add(l);break e}else{if(!(e&1)){l0(s,u,e),w_();break e}l=Error(oe(426))}}else if(Lt&&a.mode&1){var _=u0(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),c0(_,o,a,s,e),s_(qa(l,a));break e}}s=l=qa(l,a),tn!==4&&(tn=2),Yl===null?Yl=[s]:Yl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=MS(s,l,e);n0(s,f);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Es===null||!Es.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=ES(s,a,e);n0(s,y);break e}}s=s.return}while(s!==null)}GS(t)}catch(T){e=T,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function BS(){var n=Hf.current;return Hf.current=Bf,n===null?Bf:n}function w_(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||!(bo&268435455)&&!(yd&268435455)||ls(un,_n)}function Wf(n,e){var t=ct;ct|=2;var i=BS();(un!==n||_n!==e)&&(Dr=null,po(n,e));do try{Ew();break}catch(r){zS(n,r)}while(!0);if(a_(),ct=t,Hf.current=i,$t!==null)throw Error(oe(261));return un=null,_n=0,tn}function Ew(){for(;$t!==null;)HS($t)}function Tw(){for(;$t!==null&&!$1();)HS($t)}function HS(n){var e=WS(n.alternate,n,hi);n.memoizedProps=n.pendingProps,e===null?GS(n):$t=e,y_.current=null}function GS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=gw(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}else if(t=_w(t,e,hi),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);tn===0&&(tn=5)}function Qs(n,e,t){var i=vt,r=Xi.transition;try{Xi.transition=null,vt=1,ww(n,e,t,i)}finally{Xi.transition=r,vt=i}return null}function ww(n,e,t,i){do Ua();while(cs!==null);if(ct&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(sT(n,s),n===un&&($t=un=null,_n=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||fc||(fc=!0,XS(wf,function(){return Ua(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xi.transition,Xi.transition=null;var o=vt;vt=1;var a=ct;ct|=4,y_.current=null,xw(n,t),OS(t,n),XT(Ap),Cf=!!wp,Ap=wp=null,n.current=t,yw(t),K1(),ct=a,vt=o,Xi.transition=s}else n.current=t;if(fc&&(fc=!1,cs=n,Vf=r),s=n.pendingLanes,s===0&&(Es=null),J1(t.stateNode),ei(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gf)throw Gf=!1,n=Yp,Yp=null,n;return Vf&1&&n.tag!==0&&Ua(),s=n.pendingLanes,s&1?n===jp?jl++:(jl=0,jp=n):jl=0,Hs(),null}function Ua(){if(cs!==null){var n=My(Vf),e=Xi.transition,t=vt;try{if(Xi.transition=null,vt=16>n?16:n,cs===null)var i=!1;else{if(n=cs,cs=null,Vf=0,ct&6)throw Error(oe(331));var r=ct;for(ct|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Xl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var h=c.sibling,p=c.return;if(US(c),c===u){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var g=s.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var _=m.sibling;m.sibling=null,m=_}while(m!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xd(9,a)}}catch(T){Ht(a,a.return,T)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(ct=r,Hs(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(fd,n)}catch{}i=!0}return i}finally{vt=t,Xi.transition=e}}return!1}function E0(n,e,t){e=qa(t,e),e=MS(n,e,1),n=Ms(n,e,1),e=Gn(),n!==null&&(ku(n,1,e),ei(n,e))}function Ht(n,e,t){if(n.tag===3)E0(n,n,t);else for(;e!==null;){if(e.tag===3){E0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Es===null||!Es.has(i))){n=qa(t,n),n=ES(e,n,1),e=Ms(e,n,1),n=Gn(),e!==null&&(ku(e,1,n),ei(e,n));break}}e=e.return}}function Aw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Gn(),n.pingedLanes|=n.suspendedLanes&t,un===n&&(_n&t)===t&&(tn===4||tn===3&&(_n&130023424)===_n&&500>Wt()-M_?po(n,0):S_|=t),ei(n,e)}function VS(n,e){e===0&&(n.mode&1?(e=tc,tc<<=1,!(tc&130023424)&&(tc=4194304)):e=1);var t=Gn();n=Xr(n,e),n!==null&&(ku(n,e,t),ei(n,t))}function Cw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),VS(n,t)}function Rw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),VS(n,t)}var WS;WS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Qn.current)Zn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Zn=!1,mw(n,e,t);Zn=!!(n.flags&131072)}else Zn=!1,Lt&&e.flags&1048576&&qy(e,Nf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;lf(n,e),n=e.pendingProps;var r=Wa(e,Pn.current);Da(e,t),r=m_(null,e,i,n,r,t);var s=__();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jn(i)?(s=!0,Df(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,c_(e),r.updater=vd,e.stateNode=r,r._reactInternals=e,Ip(e,i,n,t),e=kp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&i_(e),On(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(lf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Pw(i),n=tr(i,n),r){case 0:e=Fp(null,e,i,n,t);break e;case 1:e=h0(null,e,i,n,t);break e;case 11:e=f0(null,e,i,n,t);break e;case 14:e=d0(null,e,i,tr(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),Fp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),h0(n,e,i,r,t);case 3:e:{if(CS(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,eS(n,e),Ff(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qa(Error(oe(423)),e),e=p0(n,e,i,t,r);break e}else if(i!==r){r=qa(Error(oe(424)),e),e=p0(n,e,i,t,r);break e}else for(xi=Ss(e.stateNode.containerInfo.firstChild),Mi=e,Lt=!0,ir=null,t=Qy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xa(),i===r){e=Yr(n,e,t);break e}On(n,e,i,t)}e=e.child}return e;case 5:return tS(e),n===null&&Dp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Cp(i,r)?o=null:s!==null&&Cp(i,s)&&(e.flags|=32),AS(n,e),On(n,e,o,t),e.child;case 6:return n===null&&Dp(e),null;case 13:return RS(n,e,t);case 4:return f_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ya(e,null,i,t):On(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),f0(n,e,i,r,t);case 7:return On(n,e,e.pendingProps,t),e.child;case 8:return On(n,e,e.pendingProps.children,t),e.child;case 12:return On(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(If,i._currentValue),i._currentValue=o,s!==null)if(cr(s.value,o)){if(s.children===r.children&&!Qn.current){e=Yr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Up(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Up(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}On(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Da(e,t),r=ji(r),i=i(r),e.flags|=1,On(n,e,i,t),e.child;case 14:return i=e.type,r=tr(i,e.pendingProps),r=tr(i.type,r),d0(n,e,i,r,t);case 15:return TS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),lf(n,e),e.tag=1,Jn(i)?(n=!0,Df(e)):n=!1,Da(e,t),SS(e,i,r),Ip(e,i,r,t),kp(null,e,i,!0,n,t);case 19:return bS(n,e,t);case 22:return wS(n,e,t)}throw Error(oe(156,e.tag))};function XS(n,e){return vy(n,e)}function bw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(n,e,t,i){return new bw(n,e,t,i)}function A_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pw(n){if(typeof n=="function")return A_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Xm)return 11;if(n===Ym)return 14}return 2}function ws(n,e){var t=n.alternate;return t===null?(t=Hi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ff(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")A_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case fa:return mo(t.children,r,s,e);case Wm:o=8,r|=8;break;case sp:return n=Hi(12,t,e,r|2),n.elementType=sp,n.lanes=s,n;case op:return n=Hi(13,t,e,r),n.elementType=op,n.lanes=s,n;case ap:return n=Hi(19,t,e,r),n.elementType=ap,n.lanes=s,n;case ty:return Sd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Jx:o=10;break e;case ey:o=9;break e;case Xm:o=11;break e;case Ym:o=14;break e;case rs:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=Hi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function mo(n,e,t,i){return n=Hi(7,n,i,e),n.lanes=t,n}function Sd(n,e,t,i){return n=Hi(22,n,i,e),n.elementType=ty,n.lanes=t,n.stateNode={isHidden:!1},n}function ch(n,e,t){return n=Hi(6,n,null,e),n.lanes=t,n}function fh(n,e,t){return e=Hi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Lw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xd(0),this.expirationTimes=Xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function C_(n,e,t,i,r,s,o,a,l){return n=new Lw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},c_(s),n}function Dw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ca,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function YS(n){if(!n)return Us;n=n._reactInternals;e:{if(ko(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(Jn(t))return Yy(n,t,e)}return e}function jS(n,e,t,i,r,s,o,a,l){return n=C_(t,i,!0,n,r,s,o,a,l),n.context=YS(null),t=n.current,i=Gn(),r=Ts(t),s=Hr(i,r),s.callback=e??null,Ms(t,s,r),n.current.lanes=r,ku(n,r,i),ei(n,i),n}function Md(n,e,t,i){var r=e.current,s=Gn(),o=Ts(r);return t=YS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ms(r,e,o),n!==null&&(lr(n,r,o,s),sf(n,r,o)),o}function Xf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function T0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function R_(n,e){T0(n,e),(n=n.alternate)&&T0(n,e)}function Uw(){return null}var qS=typeof reportError=="function"?reportError:function(n){console.error(n)};function b_(n){this._internalRoot=n}Ed.prototype.render=b_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));Md(n,e,null,null)};Ed.prototype.unmount=b_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Po(function(){Md(null,n,null,null)}),e[Wr]=null}};function Ed(n){this._internalRoot=n}Ed.prototype.unstable_scheduleHydration=function(n){if(n){var e=wy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<as.length&&e!==0&&e<as[t].priority;t++);as.splice(t,0,n),t===0&&Cy(n)}};function P_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function w0(){}function Nw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Xf(o);s.call(u)}}var o=jS(e,i,n,0,null,!1,!1,"",w0);return n._reactRootContainer=o,n[Wr]=o.current,_u(n.nodeType===8?n.parentNode:n),Po(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Xf(l);a.call(u)}}var l=C_(n,0,!1,null,null,!1,!1,"",w0);return n._reactRootContainer=l,n[Wr]=l.current,_u(n.nodeType===8?n.parentNode:n),Po(function(){Md(e,l,t,i)}),l}function wd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xf(o);a.call(l)}}Md(e,o,n,r)}else o=Nw(t,e,n,r,i);return Xf(o)}Ey=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Pl(e.pendingLanes);t!==0&&($m(e,t|1),ei(e,Wt()),!(ct&6)&&($a=Wt()+500,Hs()))}break;case 13:Po(function(){var i=Xr(n,1);if(i!==null){var r=Gn();lr(i,n,1,r)}}),R_(n,1)}};Km=function(n){if(n.tag===13){var e=Xr(n,134217728);if(e!==null){var t=Gn();lr(e,n,134217728,t)}R_(n,134217728)}};Ty=function(n){if(n.tag===13){var e=Ts(n),t=Xr(n,e);if(t!==null){var i=Gn();lr(t,n,e,i)}R_(n,e)}};wy=function(){return vt};Ay=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};gp=function(n,e,t){switch(e){case"input":if(cp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=md(i);if(!r)throw Error(oe(90));iy(i),cp(i,r)}}}break;case"textarea":sy(n,t);break;case"select":e=t.value,e!=null&&Ra(n,!!t.multiple,e,!1)}};dy=E_;hy=Po;var Iw={usingClientEntryPoint:!1,Events:[Bu,ma,md,cy,fy,E_]},xl={findFiberByHostInstance:oo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ow={bundleType:xl.bundleType,version:xl.version,rendererPackageName:xl.rendererPackageName,rendererConfig:xl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_y(n),n===null?null:n.stateNode},findFiberByHostInstance:xl.findFiberByHostInstance||Uw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{fd=dc.inject(Ow),Sr=dc}catch{}}bi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iw;bi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!P_(e))throw Error(oe(200));return Dw(n,e,null,t)};bi.createRoot=function(n,e){if(!P_(n))throw Error(oe(299));var t=!1,i="",r=qS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=C_(n,1,!1,null,null,t,!1,i,r),n[Wr]=e.current,_u(n.nodeType===8?n.parentNode:n),new b_(e)};bi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=_y(e),n=n===null?null:n.stateNode,n};bi.flushSync=function(n){return Po(n)};bi.hydrate=function(n,e,t){if(!Td(e))throw Error(oe(200));return wd(null,n,e,!0,t)};bi.hydrateRoot=function(n,e,t){if(!P_(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=qS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=jS(e,null,n,1,t??null,r,!1,s,o),n[Wr]=e.current,_u(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ed(e)};bi.render=function(n,e,t){if(!Td(e))throw Error(oe(200));return wd(null,n,e,!1,t)};bi.unmountComponentAtNode=function(n){if(!Td(n))throw Error(oe(40));return n._reactRootContainer?(Po(function(){wd(null,null,n,!1,function(){n._reactRootContainer=null,n[Wr]=null})}),!0):!1};bi.unstable_batchedUpdates=E_;bi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Td(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return wd(n,e,t,!1,i)};bi.version="18.3.1-next-f1338f8080-20240426";function $S(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($S)}catch(n){console.error(n)}}$S(),$x.exports=bi;var Fw=$x.exports,A0=Fw;ip.createRoot=A0.createRoot,ip.hydrateRoot=A0.hydrateRoot;function Ur(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function KS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wu={duration:.5,overwrite:!1,delay:0},L_,gn,Dt,Gi=1e8,Mt=1/Gi,Kp=Math.PI*2,kw=Kp/4,zw=0,ZS=Math.sqrt,Bw=Math.cos,Hw=Math.sin,fn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},jr=function(e){return typeof e=="number"},D_=function(e){return typeof e>"u"},wr=function(e){return typeof e=="object"},ti=function(e){return e!==!1},U_=function(){return typeof window<"u"},hc=function(e){return Gt(e)||fn(e)},QS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,Gw=/random\([^)]+\)/g,Vw=/,\s*/g,C0=/(?:-?\.?\d|\.)+/gi,JS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ma=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eM=/[+-]=-?[.\d]+/,Ww=/[^,'"\[\]\s]+/gi,Xw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,hr,Zp,N_,Ci={},Yf={},tM,nM=function(e){return(Yf=Ka(e,Ci))&&li},I_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Au=function(e,t){return!t&&console.warn(e)},iM=function(e,t){return e&&(Ci[e]=t)&&Yf&&(Yf[e]=t)||Ci},Cu=function(){return 0},Yw={suppressEvents:!0,isStart:!0,kill:!1},df={suppressEvents:!0,kill:!1},jw={suppressEvents:!0},O_={},As=[],Qp={},rM,mi={},hh={},R0=30,hf=[],F_="",k_=function(e){var t=e[0],i,r;if(wr(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=hf.length;r--&&!hf[r].targetTest(t););i=hf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new AM(e[r],i)))||e.splice(r,1);return e},_o=function(e){return e._gsap||k_(Vi(e))[0]._gsap},sM=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():D_(i)&&e.getAttribute&&e.getAttribute(t)||i},ni=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Na=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},qw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},jf=function(){var e=As.length,t=As.slice(0),i,r;for(Qp={},As.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},z_=function(e){return!!(e._initted||e._startAt||e.add)},oM=function(e,t,i,r){As.length&&!gn&&jf(),e.render(t,i,!!(gn&&t<0&&z_(e))),As.length&&!gn&&jf()},aM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ww).length<2?t:fn(e)?e.trim():e},lM=function(e){return e},Ri=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},$w=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ka=function(e,t){for(var i in t)e[i]=t[i];return e},b0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=wr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},qf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ql=function(e){var t=e.parent||Ot,i=e.keyframes?$w(bn(e.keyframes)):Ri;if(ti(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Kw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},uM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ad=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},go=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Zw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jp=function(e,t,i,r){return e._startAt&&(gn?e._startAt.revert(df):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Qw=function n(e){return!e||e._ts&&n(e.parent)},P0=function(e){return e._repeat?Za(e._tTime,e=e.duration()+e._rDelay)*e:0},Za=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},$f=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Cd=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Rd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Cd(e),i._dirty||go(i,e)),e},cM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=$f(e.rawTime(),t),(!t._dur||Gu(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),go(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},gr=function(e,t,i,r){return t.parent&&Ns(t),t._start=Nt((jr(i)?i:i||e!==Ot?Ui(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),uM(e,t,"_first","_last",e._sort?"_start":0),em(t)||(e._recent=t),r||cM(e,t),e._ts<0&&Rd(e,e._tTime),e},fM=function(e,t){return(Ci.ScrollTrigger||I_("scrollTrigger",t))&&Ci.ScrollTrigger.create(t,e)},dM=function(e,t,i,r,s){if(H_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&rM!==gi.frame)return As.push(e),e._lazy=[s,r],1},Jw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},em=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},eA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Jw(e)&&!(!e._initted&&em(e))||(e._ts<0||e._dp._ts<0)&&!em(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Gu(0,e._tDur,t),c=Za(l,a),e._yoyo&&c&1&&(o=1-o),c!==Za(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&dM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Jp(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ns(e,1),!i&&!gn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Qa=function(e,t,i,r){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Rd(e,e._tTime=e._tDur*a),e.parent&&Cd(e),i||go(e.parent,e),e},L0=function(e){return e instanceof Kn?go(e):Qa(e,e._dur)},nA={_start:0,endTime:Cu,totalDuration:Cu},Ui=function n(e,t,i){var r=e.labels,s=e._recent||nA,o=e.duration()>=Gi?s.endTime(!1):e._dur,a,l,u;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(bn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},$l=function(e,t,i){var r=jr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ti(l.vars.inherit)&&l.parent;o.immediateRender=ti(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},Gs=function(e,t){return e||e===0?t(e):t},Gu=function(e,t,i){return i<e?e:i>t?t:i},Cn=function(e,t){return!fn(e)||!(t=Xw.exec(e))?"":t[1]},iA=function(e,t,i){return Gs(i,function(r){return Gu(e,t,r)})},tm=[].slice,hM=function(e,t){return e&&wr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wr(e[0]))&&!e.nodeType&&e!==hr},rA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return fn(r)&&!t||hM(r,1)?(s=i).push.apply(s,Vi(r)):i.push(r)})||i},Vi=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):fn(e)&&!i&&(Zp||!Ja())?tm.call((t||N_).querySelectorAll(e),0):bn(e)?rA(e,i):hM(e)?tm.call(e,0):e?[e]:[]},nm=function(e){return e=Vi(e)[0]||Au("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Vi(t,i.querySelectorAll?i:i===e?Au("Invalid scope")||N_.createElement("div"):e)}},pM=function(e){return e.sort(function(){return .5-Math.random()})},mM=function(e){if(Gt(e))return e;var t=wr(e)?e:{each:e},i=vo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return fn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,g){var m=(g||t).length,_=o[m],f,v,x,y,T,w,M,P,S;if(!_){if(S=t.grid==="auto"?0:(t.grid||[1,Gi])[1],!S){for(M=-Gi;M<(M=g[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(_=o[m]=[],f=l?Math.min(S,m)*c-.5:r%S,v=S===Gi?0:l?m*d/S-.5:r/S|0,M=0,P=Gi,w=0;w<m;w++)x=w%S-f,y=v-(w/S|0),_[w]=T=u?Math.abs(u==="y"?y:x):ZS(x*x+y*y),T>M&&(M=T),T<P&&(P=T);r==="random"&&pM(_),_.max=M-P,_.min=P,_.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:u?u==="y"?m/S:S:Math.max(S,m/S))||0)*(r==="edges"?-1:1),_.b=m<0?s-m:s,_.u=Cn(t.amount||t.each)||0,i=i&&m<0?gA(i):i}return m=(_[h]-_.min)/_.max||0,Nt(_.b+(i?i(m):m)*_.v)+_.u}},im=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(jr(i)?0:Cn(i))}},_M=function(e,t){var i=bn(e),r,s;return!i&&wr(e)&&(r=i=e.radius||Gi,e.values?(e=Vi(e.values),(s=!jr(e[0]))&&(r*=r)):e=im(e.increment)),Gs(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Gi,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||jr(o)?c:c+Cn(o)}:im(e))},gM=function(e,t,i,r){return Gs(bn(e)?!t:i===!0?!!(i=0):!r,function(){return bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},sA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},oA=function(e,t){return function(i){return e(parseFloat(i))+(t||Cn(i))}},aA=function(e,t,i){return xM(e,t,0,1,i)},vM=function(e,t,i){return Gs(i,function(r){return e[~~t(r)]})},lA=function n(e,t,i){var r=t-e;return bn(e)?vM(e,n(0,e.length),t):Gs(i,function(s){return(r+(s-e)%r)%r+e})},uA=function n(e,t,i){var r=t-e,s=r*2;return bn(e)?vM(e,n(0,e.length-1),t):Gs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ru=function(e){return e.replace(Gw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Vw);return gM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},xM=function(e,t,i,r,s){var o=t-e,a=r-i;return Gs(s,function(l){return i+((l-e)/o*a||0)})},cA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=fn(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(g){g*=d;var m=Math.min(h,~~g);return c[m](g-m)},i=t}else r||(e=Ka(bn(e)?[]:{},e));if(!c){for(l in t)B_.call(a,e,l,"get",t[l]);s=function(g){return W_(g,a)||(o?e.p:e)}}}return Gs(i,s)},D0=function(e,t,i){var r=e.labels,s=Gi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&As.length&&jf(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},Dl=function(e){return Ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&yi(e,"onInterrupt"),e},Ea,yM=[],SM=function(e){if(e)if(e=!e.name&&e.default||e,U_()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Cu,render:W_,add:B_,kill:CA,modifier:AA,rawVars:0},o={targetTest:0,get:0,getSetter:V_,aliases:{},register:0};if(Ja(),e!==r){if(mi[t])return;Ri(r,Ri(qf(e,s),o)),Ka(r.prototype,Ka(s,qf(e,o))),mi[r.prop=t]=r,e.targetTest&&(hf.push(r),O_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}iM(t,r),e.register&&e.register(li,r,ii)}else yM.push(e)},St=255,Ul={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},ph=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},MM=function(e,t,i){var r=e?jr(e)?[e>>16,e>>8&St,e&St]:0:Ul.black,s,o,a,l,u,c,d,h,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ul[e])r=Ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(C0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=ph(l+1/3,s,o),r[1]=ph(l,s,o),r[2]=ph(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(JS),i&&r.length<4&&(r[3]=1),r}else r=e.match(C0)||Ul.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},EM=function(e){var t=[],i=[],r=-1;return e.split(Cs).forEach(function(s){var o=s.match(Ma)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},U0=function(e,t,i){var r="",s=(e+r).match(Cs),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=MM(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=EM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Cs,"1").split(Ma),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Cs),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Cs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ul)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),fA=/hsl[a]?\(/,TM=function(e){var t=e.join(" "),i;if(Cs.lastIndex=0,Cs.test(t))return i=fA.test(t),e[1]=U0(e[1],i),e[0]=U0(e[0],i,EM(e[1])),!0},bu,gi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,g=function m(_){var f=n()-r,v=_===!0,x,y,T,w;if((f>e||f<0)&&(i+=f-t),r+=f,T=r-i,x=T-o,(x>0||v)&&(w=++d.frame,h=T-d.time*1e3,d.time=T=T/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](T,h,w,_)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){tM&&(!Zp&&U_()&&(hr=Zp=window,N_=hr.document||{},Ci.gsap=li,(hr.gsapVersions||(hr.gsapVersions=[])).push(li.version),nM(Yf||hr.GreenSockGlobals||!hr.gsap&&hr||{}),yM.forEach(SM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(_){return setTimeout(_,o-d.time*1e3+1|0)},bu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),bu=0,u=Cu},lagSmoothing:function(_,f){e=_||1/0,t=Math.min(f||33,e)},fps:function(_){s=1e3/(_||240),o=d.time*1e3+s},add:function(_,f,v){var x=f?function(y,T,w,M){_(y,T,w,M),d.remove(x)}:_;return d.remove(_),a[v?"unshift":"push"](x),Ja(),x},remove:function(_,f){~(f=a.indexOf(_))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),Ja=function(){return!bu&&gi.wake()},at={},dA=/^[\d.\-M][\d.\-,\s]/,hA=/["']/g,pA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(hA,"").trim():+u,r=l.substr(a+1).trim();return t},mA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},_A=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[pA(t[1])]:mA(e).split(",").map(aM)):at._CE&&dA.test(e)?at._CE("",e):i},gA=function(e){return function(t){return 1-e(1-t)}},vo=function(e,t){return e&&(Gt(e)?e:at[e]||_A(e))||t},zo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ni(e,function(a){at[a]=Ci[a]=s,at[o=a.toLowerCase()]=i;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},wM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Kp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Hw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:wM(a);return s=Kp/s,l.config=function(u,c){return n(e,u,c)},l},_h=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:wM(i);return r.config=function(s){return n(e,s)},r};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;zo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;zo("Elastic",mh("in"),mh("out"),mh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};zo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});zo("Circ",function(n){return-(ZS(1-n*n)-1)});zo("Sine",function(n){return n===1?1:-Bw(n*kw)+1});zo("Back",_h("in"),_h("out"),_h());at.SteppedEase=at.steps=Ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Gu(0,o,a)|0)+s)*i}}};wu.ease=at["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return F_+=n+","+n+"Params,"});var AM=function(e,t){this.id=zw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:sM,this.set=t?t.getSetter:V_},Pu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qa(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),bu||gi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ja(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rd(this,i),!s._dp||s.parent||cM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),oM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+P0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+P0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Za(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?$f(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Gu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Cd(this),Zw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ti(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$f(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=jw);var r=gn;return gn=i,z_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),gn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,L0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,L0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ui(this,i),ti(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ti(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:lM,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Dl(this)},n}();Ri(Pu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Kn=function(n){KS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ti(i.sortChildren),Ot&&gr(i.parent||Ot,Ur(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&fM(Ur(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return $l(0,arguments,this),this},t.from=function(r,s,o){return $l(1,arguments,this),this},t.fromTo=function(r,s,o,a){return $l(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,Ui(this,o),1),this},t.call=function(r,s,o){return gr(this,qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new qt(r,o,Ui(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,ql(o).immediateRender=ti(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,ql(a).immediateRender=ti(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Nt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,g,m,_,f,v,x,y,T,w,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,f=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,_=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(h=Nt(c%_),c===l?(m=this._repeat,h=u):(T=Nt(c/_),m=~~T,m&&m===T&&(h=u,m--),h>u&&(h=u)),T=Za(this._tTime,_),!a&&this._tTime&&T!==m&&this._tTime-T*_-this._dur<=0&&(T=m),w&&m&1&&(h=u-h,M=1),m!==T&&!this._lock){var P=w&&T&1,S=P===(w&&m&1);if(m<T&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Nt(m*_)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,T=m),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=tA(this,Nt(a),Nt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(yi(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){v=0,g&&(c+=this._zTime=-Mt);break}}p=g}else{p=this._last;for(var E=r<0?r:h;p;){if(g=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||gn&&z_(p)),h!==this._time||!this._ts&&!f){v=0,g&&(c+=this._zTime=E?-Mt:Mt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-Mt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Cd(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ns(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(yi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(jr(s)||(s=Ui(this,s,r)),!(r instanceof Pu)){if(bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(fn(r))return this.addLabel(r,s);if(Gt(r))r=qt.delayedCall(0,r);else return this}return this!==r?gr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return fn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&Ad(this,r),r===this._recent&&(this._recent=this._last),go(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(gi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=qt.delayedCall(0,s||Cu,o);return a.data="isPause",this._hasPause=1,gr(this,a,Ui(this,r))},t.removePause=function(r){var s=this._first;for(r=Ui(this,r);s;)s._start===r&&s.data==="isPause"&&Ns(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)fs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Vi(r),l=this._first,u=jr(s),c;l;)l instanceof qt?qw(l._targets,a)&&(u?(!fs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ui(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,g=qt.to(o,Ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var _=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==_&&Qa(g,_,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ri({startAt:{time:Ui(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),D0(this,Ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),D0(this,Ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Nt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return go(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),go(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Gi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Nt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Qa(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(oM(Ot,$f(r,Ot)),rM=gi.frame),gi.frame>=R0){R0+=Ei.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Ei.autoSleep&&gi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gi.sleep()}}},e}(Pu);Ri(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var vA=function(e,t,i,r,s,o,a){var l=new ii(this._pt,e,t,0,1,DM,null,s),u=0,c=0,d,h,p,g,m,_,f,v;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Ru(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(dh)||[];d=dh.exec(r);)g=d[0],m=r.substring(u,d.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),g!==h[c++]&&(_=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:_,c:g.charAt(1)==="="?Na(_,g)-_:parseFloat(g)-_,m:p&&p<4?Math.round:0},u=dh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(eM.test(r)||f)&&(l.e=0),this._pt=l,l},B_=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:Gt(d)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Gt(d)?u?EA:PM:G_,g;if(fn(r)&&(~r.indexOf("random(")&&(r=Ru(r)),r.charAt(1)==="="&&(g=Na(h,r)+(Cn(h)||0),(g||g===0)&&(r=g))),!c||h!==r||rm)return!isNaN(h*r)&&r!==""?(g=new ii(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?wA:LM,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&I_(t,r),vA.call(this,e,t,h,r,p,l||Ei.stringFilter,u))},xA=function(e,t,i,r,s){if(Gt(e)&&(e=Kl(e,s,t,i,r)),!wr(e)||e.style&&e.nodeType||bn(e)||QS(e))return fn(e)?Kl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Kl(e[a],s,t,i,r);return o},CM=function(e,t,i,r,s,o){var a,l,u,c;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:xA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ii(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ea))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},fs,rm,H_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,g=e._dur,m=e._startAt,_=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:_,x=e._overwrite==="auto"&&!L_,y=e.timeline,T=r.easeReverse||d,w,M,P,S,E,I,N,Z,L,O,B,G,U;if(y&&(!h||!s)&&(s="none"),e._ease=vo(s,wu.ease),e._rEase=T&&(vo(T)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||h&&!r.stagger){if(Z=_[0]?_o(_[0]).harness:0,G=Z&&r[Z.prop],w=qf(r,O_),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&g?df:Yw),m._lazy=0),o){if(Ns(e._startAt=qt.set(_,Ri({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!m&&ti(l),startAt:null,delay:0,onUpdate:u&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!p)&&e._startAt.revert(df),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!m){if(t&&(a=!1),P=Ri({overwrite:!1,data:"isFromStart",lazy:a&&!m&&ti(l),immediateRender:a,stagger:0,parent:f},w),G&&(P[Z.prop]=G),Ns(e._startAt=qt.set(_,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(df):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ti(l)||l&&!g,M=0;M<_.length;M++){if(E=_[M],N=E._gsap||k_(_)[M]._gsap,e._ptLookup[M]=O={},Qp[N.id]&&As.length&&jf(),B=v===_?M:v.indexOf(E),Z&&(L=new Z).init(E,G||w,e,B,v)!==!1&&(e._pt=S=new ii(e._pt,E,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(F){O[F]=S}),L.priority&&(I=1)),!Z||G)for(P in w)mi[P]&&(L=CM(P,w,e,B,E,v))?L.priority&&(I=1):O[P]=S=B_.call(e,E,P,"get",w[P],B,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(E,e._op[M]),x&&e._pt&&(fs=e,Ot.killTweensOf(E,O,e.globalTime(t)),U=!e.parent,fs=0),e._pt&&l&&(Qp[N.id]=1)}I&&UM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!U,h&&t<=0&&y.render(Gi,!0,!0)},yA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return rm=1,e.vars[t]="+=0",H_(e,a),rm=0,l?Au(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Vt(i)+Cn(d.e)),d.b&&(d.b=c.s+Cn(d.b))},SA=function(e,t){var i=e[0]?_o(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ka({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},MA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(bn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Kl=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):fn(e)&&~e.indexOf("random(")?Ru(e):e},RM=F_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",bM={};ni(RM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return bM[n]=1});var qt=function(n){KS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,m=l.defaults,_=l.scrollTrigger,f=r.parent||Ot,v=(bn(i)||QS(i)?jr(i[0]):"length"in r)?[i]:Vi(i),x,y,T,w,M,P,S,E;if(a._targets=v.length?k_(v):Au("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||hc(u)||hc(c)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Kn({data:"nested",defaults:m||{},targets:f&&f.data==="nested"?f.vars.targets:v}),x.kill(),x.parent=x._dp=Ur(a),x._start=0,h||hc(u)||hc(c)){if(w=v.length,S=h&&mM(h),wr(h))for(M in h)~RM.indexOf(M)&&(E||(E={}),E[M]=h[M]);for(y=0;y<w;y++)T=qf(r,bM),T.stagger=0,I&&(T.easeReverse=I),E&&Ka(T,E),P=v[y],T.duration=+Kl(u,Ur(a),y,P,v),T.delay=(+Kl(c,Ur(a),y,P,v)||0)-a._delay,!h&&w===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(P,T,S?S(y,P,v):0),x._ease=at.none;x.duration()?u=c=0:a.timeline=0}else if(g){ql(Ri(x.vars.defaults,{ease:"none"})),x._ease=vo(g.ease||r.ease||"none");var N=0,Z,L,O;if(bn(g))g.forEach(function(B){return x.to(v,B,">")}),x.duration();else{T={};for(M in g)M==="ease"||M==="easeEach"||MA(M,g[M],T,g.easeEach);for(M in T)for(Z=T[M].sort(function(B,G){return B.t-G.t}),N=0,y=0;y<Z.length;y++)L=Z[y],O={ease:L.e,duration:(L.t-(y?Z[y-1].t:0))/100*u},O[M]=L.v,x.to(v,O,N),N+=O.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!L_&&(fs=Ur(a),Ot.killTweensOf(v),fs=0),gr(f,Ur(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!g&&a._start===Nt(f._time)&&ti(d)&&Qw(Ur(a))&&f.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),_&&fM(Ur(a),_),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Mt&&!c?l:r<Mt?0:r,h,p,g,m,_,f,v,x;if(!u)eA(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,x=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=Nt(d%m),d===l?(g=this._repeat,h=u):(_=Nt(d/m),g=~~_,g&&g===_?(h=u,g--):h>u&&(h=u)),f=this._yoyo&&g&1,f&&(h=u-h),_=Za(this._tTime,m),h===a&&!o&&this._initted&&g===_)return this._tTime=d,this;g!==_&&this.vars.repeatRefresh&&!f&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(Nt(m*g),!0).invalidate()._lock=0)}if(!this._initted){if(dM(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var T=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!_&&(yi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Jp(this,r,s,o),yi(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Jp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ns(this,1),!s&&!(c&&!a)&&(d||a||f)&&(yi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){bu||gi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||H_(this,u),c=this._ease(u/this._dur),yA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Rd(this,0),this.parent||uM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Dl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,fs&&fs.vars.overwrite!==!0)._first||Dl(this),this.parent&&o!==this.timeline.totalDuration()&&Qa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Vi(r):a,u=this._ptLookup,c=this._pt,d,h,p,g,m,_,f;if((!s||s==="all")&&Kw(a,l))return s==="all"&&(this._pt=0),Dl(this);for(d=this._op=this._op||[],s!=="all"&&(fn(s)&&(m={},ni(s,function(v){return m[v]=1}),s=m),s=SA(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,g=h,p={}):(p=d[f]=d[f]||{},g=s);for(m in g)_=h&&h[m],_&&((!("kill"in _.d)||_.d.kill(m)===!0)&&Ad(this,_,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&Dl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return $l(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return $l(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Pu);Ri(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Kn,t=tm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var G_=function(e,t,i){return e[t]=i},PM=function(e,t,i){return e[t](i)},EA=function(e,t,i,r){return e[t](r.fp,i)},TA=function(e,t,i){return e.setAttribute(t,i)},V_=function(e,t){return Gt(e[t])?PM:D_(e[t])&&e.setAttribute?TA:G_},LM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},DM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},W_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},AA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},CA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ad(this,t,"_pt"):t.dep||(i=1),t=r;return!i},RA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},UM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ii=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||LM,this.d=l||this,this.set=u||G_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=RA,this.m=i,this.mt=s,this.tween=r},n}();ni(F_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return O_[n]=1});Ci.TweenMax=Ci.TweenLite=qt;Ci.TimelineLite=Ci.TimelineMax=Kn;Ot=new Kn({sortChildren:!1,defaults:wu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=TM;var xo=[],pf={},bA=[],N0=0,PA=0,gh=function(e){return(pf[e]||bA).map(function(t){return t()})},sm=function(){var e=Date.now(),t=[];e-N0>2&&(gh("matchMediaInit"),xo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=hr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),gh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),N0=e,gh("matchMedia"))},NM=function(){function n(t,i){this.selector=i&&nm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=PA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Dt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=nm(s)),Dt=o,d=r.apply(o,arguments),Gt(d)&&o._r.push(d),Dt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Kn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=xo.length;o--;)xo[o].id===this.id&&xo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),LA=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){wr(i)||(i={matches:i});var o=new NM(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=hr.matchMedia(i[u]),l&&(xo.indexOf(o)<0&&xo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(sm):l.addEventListener("change",sm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Kf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return SM(r)})},timeline:function(e){return new Kn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){fn(e)&&(e=Vi(e)[0]);var s=_o(e||{}).get,o=i?lM:aM;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,r)):function(a,l,u){return o((mi[a]&&mi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Vi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=mi[t],a=_o(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Ea._pt=0,d.init(e,i?c+i:c,Ea,0,[e]),d.render(1,d),Ea._pt&&W_(1,Ea)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Ri((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vo(e.ease,wu.ease)),b0(wu,e||{})},config:function(e){return b0(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ci[a]&&Au(t+" effect requires "+a+" plugin.")}),hh[t]=function(a,l,u){return i(Vi(a),Ri(l||{},s),u)},o&&(Kn.prototype[t]=function(a,l,u){return this.add(hh[t](a,wr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){at[e]=vo(t)},parseEase:function(e,t){return arguments.length?vo(e,t):at},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Kn(e),r,s;for(i.smoothChildTiming=ti(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&gr(i,r,r._start-r._delay),r=s;return gr(Ot,i,0),i},context:function(e,t){return e?new NM(e,t):Dt},matchMedia:function(e){return new LA(e)},matchMediaRefresh:function(){return xo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||sm()},addEventListener:function(e,t){var i=pf[e]||(pf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=pf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:lA,wrapYoyo:uA,distribute:mM,random:gM,snap:_M,normalize:aA,getUnit:Cn,clamp:iA,splitColor:MM,toArray:Vi,selector:nm,mapRange:xM,pipe:sA,unitize:oA,interpolate:cA,shuffle:pM},install:nM,effects:hh,ticker:gi,updateRoot:Kn.updateRoot,plugins:mi,globalTimeline:Ot,core:{PropTween:ii,globals:iM,Tween:qt,Timeline:Kn,Animation:Pu,getCache:_o,_removeLinkedListItem:Ad,reverting:function(){return gn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return L_=e}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Kf[n]=qt[n]});gi.add(Kn.updateRoot);Ea=Kf.to({},{duration:0});var DA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},UA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=DA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},vh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(fn(s)&&(l={},ni(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}UA(a,s)}}}},li=Kf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)gn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},vh("roundProps",im),vh("modifiers"),vh("snap",_M))||Kf;qt.version=Kn.version=li.version="3.15.0";tM=1;U_()&&Ja();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var I0,ds,Ia,X_,uo,O0,Y_,NA=function(){return typeof window<"u"},qr={},Js=180/Math.PI,Oa=Math.PI/180,Ho=Math.atan2,F0=1e8,j_=/([A-Z])/g,IA=/(left|right|width|margin|padding|x)/i,OA=/[\s,\(]\S/,vr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},om=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},FA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},IM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},OM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},HA=function(e,t,i){return e.style[t]=i},GA=function(e,t,i){return e.style.setProperty(t,i)},VA=function(e,t,i){return e._gsap[t]=i},WA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},XA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},YA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",ri=Ft+"Origin",jA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in qr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ir(r,a)}):this.tfm[e]=o.x?o[e]:Ir(r,e),e===ri&&(this.tfm.zOrigin=o.zOrigin);else return vr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},FM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},qA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(j_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Y_(),(!s||!s.isStart)&&!i[Ft]&&(FM(i),r.zOrigin&&i[ri]&&(i[ri]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kM=function(e,t){var i={target:e,props:[],revert:qA,save:jA};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},zM,am=function(e,t){var i=ds.createElementNS?ds.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ds.createElement(e);return i&&i.style?i:ds.createElement(e)},Si=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(j_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,el(t)||t,1)||""},k0="O,Moz,ms,Ms,Webkit".split(","),el=function(e,t,i){var r=t||uo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(k0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?k0[o]:"")+e},lm=function(){NA()&&window.document&&(I0=window,ds=I0.document,Ia=ds.documentElement,uo=am("div")||{style:{}},am("div"),Ft=el(Ft),ri=Ft+"Origin",uo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zM=!!el("perspective"),Y_=li.core.reverting,X_=1)},z0=function(e){var t=e.ownerSVGElement,i=am("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ia.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ia.removeChild(i),s},B0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},BM=function(e){var t,i;try{t=e.getBBox()}catch{t=z0(e),i=1}return t&&(t.width||t.height)||i||(t=z0(e)),t&&!t.width&&!t.x&&!t.y?{x:+B0(e,["x","cx","x1"])||0,y:+B0(e,["y","cy","y1"])||0,width:0,height:0}:t},HM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&BM(e))},Is=function(e,t){if(t){var i=e.style,r;t in qr&&t!==ri&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(j_,"-$1").toLowerCase())):i.removeAttribute(t)}},hs=function(e,t,i,r,s,o){var a=new ii(e._pt,t,i,0,1,o?OM:IM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},H0={deg:1,rad:1,turn:1},$A={grid:1,flex:1},Os=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=uo.style,l=IA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",g,m,_,f;if(r===o||!s||H0[r]||H0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&HM(e),(p||o==="%")&&(qr[t]||~t.indexOf("adius")))return g=f?e.getBBox()[l?"width":"height"]:e[c],Vt(p?s/g*d:s/100*g);if(a[l?"width":"height"]=d+(h?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===ds||!m.appendChild)&&(m=ds.body),_=m._gsap,_&&p&&_.width&&l&&_.time===gi.time&&!_.uncache)return Vt(s/_.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,g=e[c],v?e.style[t]=v:Is(e,t)}else(p||o==="%")&&!$A[Si(m,"display")]&&(a.position=Si(e,"position")),m===e&&(a.position="static"),m.appendChild(uo),g=uo[c],m.removeChild(uo),a.position="absolute";return l&&p&&(_=_o(m),_.time=gi.time,_.width=m[c]),Vt(h?g*s/d:g&&s?d/g*s:0)},Ir=function(e,t,i,r){var s;return X_||lm(),t in vr&&t!=="transform"&&(t=vr[t],~t.indexOf(",")&&(t=t.split(",")[0])),qr[t]&&t!=="transform"?(s=Du(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Qf(Si(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Zf[t]&&Zf[t](e,t,i)||Si(e,t)||sM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Os(e,t,s,i)+i:s},KA=function(e,t,i,r){if(!i||i==="none"){var s=el(t,e,1),o=s&&Si(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Si(e,"borderTopColor"))}var a=new ii(this._pt,e.style,t,0,1,DM),l=0,u=0,c,d,h,p,g,m,_,f,v,x,y,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Si(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=Si(e,t)||r,m?e.style[t]=m:Is(e,t)),c=[i,r],TM(c),i=c[0],r=c[1],h=i.match(Ma)||[],T=r.match(Ma)||[],T.length){for(;d=Ma.exec(r);)_=d[0],v=r.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),_!==(m=h[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),_.charAt(1)==="="&&(_=Na(p,_)+y),f=parseFloat(_),x=_.substr((f+"").length),l=Ma.lastIndex-x.length,x||(x=x||Ei.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Os(e,t,m,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:f-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?OM:IM;return eM.test(r)&&(a.e=0),this._pt=a,a},G0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ZA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=G0[i]||i,t[1]=G0[r]||r,t.join(" ")},QA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],qr[a]&&(l=1,a=a==="transformOrigin"?ri:Ft),Is(i,a);l&&(Is(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Du(i,1),o.uncache=1,FM(r)))}},Zf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ii(e._pt,t,i,0,0,QA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Lu=[1,0,0,1,0,0],GM={},VM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},V0=function(e){var t=Si(e,Ft);return VM(t)?Lu:t.substr(7).match(JS).map(Vt)},q_=function(e,t){var i=e._gsap||_o(e),r=e.style,s=V0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Lu:s):(s===Lu&&!e.offsetParent&&e!==Ia&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ia.appendChild(e)),s=V0(e),l?r.display=l:Is(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ia.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},um=function(e,t,i,r,s,o){var a=e._gsap,l=s||q_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],m=l[2],_=l[3],f=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,M,P,S;i?l!==Lu&&(M=p*_-g*m)&&(P=y*(_/M)+T*(-m/M)+(m*v-_*f)/M,S=y*(-g/M)+T*(p/M)-(p*v-g*f)/M,y=P,T=S):(w=BM(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(f=y-u,v=T-c,a.xOffset=d+(f*p+v*m)-f,a.yOffset=h+(f*g+v*_)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ri]="0px 0px",o&&(hs(o,a,"xOrigin",u,y),hs(o,a,"yOrigin",c,T),hs(o,a,"xOffset",d,a.xOffset),hs(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Du=function(e,t){var i=e._gsap||new AM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Si(e,ri)||"0",c,d,h,p,g,m,_,f,v,x,y,T,w,M,P,S,E,I,N,Z,L,O,B,G,U,F,R,K,Q,q,$,re;return c=d=h=m=_=f=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&HM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=q_(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),um(e,G||u,!!G||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,w=i.yOrigin||0,M!==Lu&&(I=M[0],N=M[1],Z=M[2],L=M[3],c=O=M[4],d=B=M[5],M.length===6?(p=Math.sqrt(I*I+N*N),g=Math.sqrt(L*L+Z*Z),m=I||N?Ho(N,I)*Js:0,v=Z||L?Ho(Z,L)*Js+m:0,v&&(g*=Math.abs(Math.cos(v*Oa))),i.svg&&(c-=T-(T*I+w*Z),d-=w-(T*N+w*L))):(re=M[6],q=M[7],R=M[8],K=M[9],Q=M[10],$=M[11],c=M[12],d=M[13],h=M[14],P=Ho(re,Q),_=P*Js,P&&(S=Math.cos(-P),E=Math.sin(-P),G=O*S+R*E,U=B*S+K*E,F=re*S+Q*E,R=O*-E+R*S,K=B*-E+K*S,Q=re*-E+Q*S,$=q*-E+$*S,O=G,B=U,re=F),P=Ho(-Z,Q),f=P*Js,P&&(S=Math.cos(-P),E=Math.sin(-P),G=I*S-R*E,U=N*S-K*E,F=Z*S-Q*E,$=L*E+$*S,I=G,N=U,Z=F),P=Ho(N,I),m=P*Js,P&&(S=Math.cos(P),E=Math.sin(P),G=I*S+N*E,U=O*S+B*E,N=N*S-I*E,B=B*S-O*E,I=G,O=U),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,f=180-f),p=Vt(Math.sqrt(I*I+N*N+Z*Z)),g=Vt(Math.sqrt(B*B+re*re)),P=Ho(O,B),v=Math.abs(P)>2e-4?P*Js:0,y=$?1/($<0?-$:$):0),i.svg&&(G=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!VM(Si(e,Ft)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Vt(p),i.scaleY=Vt(g),i.rotation=Vt(m)+a,i.rotationX=Vt(_)+a,i.rotationY=Vt(f)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ri]=Qf(u)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?eC:zM?WM:JA,i.uncache=0,i},Qf=function(e){return(e=e.split(" "))[0]+" "+e[1]},xh=function(e,t,i){var r=Cn(t);return Vt(parseFloat(t)+parseFloat(Os(e,"x",i+"px",r)))+r},JA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,WM(e,t)},Xs="0deg",yl="0px",Ys=") ",WM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,g=i.scaleX,m=i.scaleY,_=i.transformPerspective,f=i.force3D,v=i.target,x=i.zOrigin,y="",T=f==="auto"&&e&&e!==1||f===!0;if(x&&(d!==Xs||c!==Xs)){var w=parseFloat(c)*Oa,M=Math.sin(w),P=Math.cos(w),S;w=parseFloat(d)*Oa,S=Math.cos(w),o=xh(v,o,M*S*-x),a=xh(v,a,-Math.sin(w)*-x),l=xh(v,l,P*S*-x+x)}_!==yl&&(y+="perspective("+_+Ys),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==yl||a!==yl||l!==yl)&&(y+=l!==yl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ys),u!==Xs&&(y+="rotate("+u+Ys),c!==Xs&&(y+="rotateY("+c+Ys),d!==Xs&&(y+="rotateX("+d+Ys),(h!==Xs||p!==Xs)&&(y+="skew("+h+", "+p+Ys),(g!==1||m!==1)&&(y+="scale("+g+", "+m+Ys),v.style[Ft]=y||"translate(0, 0)"},eC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,g=i.xOrigin,m=i.yOrigin,_=i.xOffset,f=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),T,w,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Oa,u*=Oa,T=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Oa,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Vt(T),w=Vt(w),M=Vt(M),P=Vt(P)):(T=d,P=h,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Os(p,"x",o,"px"),y=Os(p,"y",a,"px")),(g||m||_||f)&&(x=Vt(x+g-(g*T+m*M)+_),y=Vt(y+m-(g*w+m*P)+f)),(r||s)&&(S=p.getBBox(),x=Vt(x+r/100*S.width),y=Vt(y+s/100*S.height)),S="matrix("+T+","+w+","+M+","+P+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Ft]=S)},tC=function(e,t,i,r,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Js:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*F0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*F0)%o-~~(u/o)*o)),e._pt=h=new ii(e._pt,t,i,r,u,FA),h.e=c,h.u="deg",e._props.push(i),h},W0=function(e,t){for(var i in t)e[i]=t[i];return e},nC=function(e,t,i){var r=W0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Du(i,1),Is(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Du(i,1),o[Ft]=u);for(l in qr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Cn(u),g=Cn(c),d=p!==g?Os(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new ii(e._pt,a,l,d,h-d,om),e._pt.u=g||0,e._props.push(l));W0(a,r)};ni("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Zf[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(g){return Ir(a,g,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(g,m){return p[g]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,d)}});var XM={name:"css",register:lm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,g,m,_,f,v,x,y,T,w,M,P,S;X_||lm(),this.styles=this.styles||kM(e),P=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(mi[m]&&CM(m,t,i,r,e,s)))){if(p=typeof c,g=Zf[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ru(c)),g)g(this,e,m,c,i)&&(M=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Cs.lastIndex=0,Cs.test(u)||(_=Cn(u),f=Cn(c),f?_!==f&&(u=Os(e,m,u,f)+f):_&&(c+=_)),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),P.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],fn(u)&&~u.indexOf("random(")&&(u=Ru(u)),Cn(u+"")||u==="auto"||(u+=Ei.units[m]||Cn(Ir(e,m))||""),(u+"").charAt(1)==="="&&(u=Ir(e,m))):u=Ir(e,m),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),m in vr&&(m==="autoAlpha"&&(h===1&&Ir(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),hs(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),m!=="scale"&&m!=="transform"&&(m=vr[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in qr,x){if(this.styles.save(m),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Si(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=Si(e,"perspective"),E?e.style.perspective=E:Is(e,"perspective")}d=parseFloat(c)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Du(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new ii(this._pt,a,Ft,0,1,T.renderTransform,T,0,-1),y.dep=1),m==="scale")this._pt=new ii(this._pt,T,"scaleY",T.scaleY,(v?Na(T.scaleY,v+d):d)-T.scaleY||0,om),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){P.push(ri,0,a[ri]),c=ZA(c),T.svg?um(e,c,0,w,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==T.zOrigin&&hs(this,T,"zOrigin",T.zOrigin,f),hs(this,a,m,Qf(u),Qf(c)));continue}else if(m==="svgOrigin"){um(e,c,1,w,0,this);continue}else if(m in GM){tC(this,T,m,h,v?Na(h,v+c):c);continue}else if(m==="smoothOrigin"){hs(this,T,"smooth",T.smooth,c);continue}else if(m==="force3D"){T[m]=c;continue}else if(m==="transform"){nC(this,c,e);continue}}else m in a||(m=el(m)||m);if(x||(d||d===0)&&(h||h===0)&&!OA.test(c)&&m in a)_=(u+"").substr((h+"").length),d||(d=0),f=Cn(c)||(m in Ei.units?Ei.units[m]:_),_!==f&&(h=Os(e,m,u,f)),this._pt=new ii(this._pt,x?T:a,m,h,(v?Na(h,v+d):d)-h,!x&&(f==="px"||m==="zIndex")&&t.autoRound!==!1?BA:om),this._pt.u=f||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=zA):_!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=kA);else if(m in a)KA.call(this,e,m,u,v?v+c:c);else if(m in e)this.add(e,m,u||e[m],v?v+c:c,r,s);else if(m!=="parseTransform"){I_(m,c);continue}x||(m in a?P.push(m,0,a[m]):typeof e[m]=="function"?P.push(m,2,e[m]()):P.push(m,1,u||e[m])),o.push(m)}}M&&UM(this)},render:function(e,t){if(t.tween._time||!Y_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ir,aliases:vr,getSetter:function(e,t,i){var r=vr[t];return r&&r.indexOf(",")<0&&(t=r),t in qr&&t!==ri&&(e._gsap.x||Ir(e,"x"))?i&&O0===i?t==="scale"?WA:VA:(O0=i||{})&&(t==="scale"?XA:YA):e.style&&!D_(e.style[t])?HA:~t.indexOf("-")?GA:V_(e,t)},core:{_removeProperty:Is,_getMatrix:q_}};li.utils.checkPrefix=el;li.core.getStyleSaver=kM;(function(n,e,t,i){var r=ni(n+","+e+","+t,function(s){qr[s]=1});ni(e,function(s){Ei.units[s]="deg",GM[s]=1}),vr[r[13]]=n+","+e,ni(i,function(s){var o=s.split(":");vr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});li.registerPlugin(XM);var Vu=li.registerPlugin(XM)||li;Vu.core.Tween;function iC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function rC(n,e,t){return e&&iC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,mf,vi,ps,ms,Fa,YM,eo,ka,jM,zr,er,qM,$M=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},KM=1,Ta=[],rt=[],Er=[],Zl=Date.now,cm=function(e,t){return t},sC=function(){var e=ka.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,Er),rt=i,Er=r,cm=function(o,a){return t[o](a)}},Rs=function(e,t){return~Er.indexOf(e)&&Er[Er.indexOf(e)+1][t]},Ql=function(e){return!!~jM.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Dn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},pc="scrollLeft",mc="scrollTop",fm=function(){return zr&&zr.isPressed||rt.cache++},Jf=function(e,t){var i=function r(s){if(s||s===0){KM&&(vi.history.scrollRestoration="manual");var o=zr&&zr.isPressed;s=r.v=Math.round(s)||(zr&&zr.iOS?1:0),e(s),r.cacheID=rt.cache,o&&cm("ss",s)}else(t||rt.cache!==r.cacheID||cm("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:pc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Jf(function(n){return arguments.length?vi.scrollTo(n,en.sc()):vi.pageXOffset||ps[pc]||ms[pc]||Fa[pc]||0})},en={s:mc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:Jf(function(n){return arguments.length?vi.scrollTo(Hn.sc(),n):vi.pageYOffset||ps[mc]||ms[mc]||Fa[mc]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},oC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Fs=function(e,t){var i=t.s,r=t.sc;Ql(e)&&(e=ps.scrollingElement||ms);var s=rt.indexOf(e),o=r===en.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Un(e,"scroll",fm);var a=rt[s+o],l=a||(rt[s+o]=Jf(Rs(e,i),!0)||(Ql(e)?r:Jf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},dm=function(e,t,i){var r=e,s=e,o=Zl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,m){var _=Zl();m||_-o>l?(s=r,r=g,a=o,o=_):i?r+=g:r=s+(g-s)/(_-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},h=function(g){var m=a,_=s,f=Zl();return(g||g===0)&&g!==r&&c(g),o===a||f-a>u?0:(r+(i?_:-_))/((i?f:o)-m)*1e3};return{update:c,reset:d,getVelocity:h}},Sl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},X0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},ZM=function(){ka=pn.core.globals().ScrollTrigger,ka&&ka.core&&sC()},QM=function(e){return pn=e||$M(),!mf&&pn&&typeof document<"u"&&document.body&&(vi=window,ps=document,ms=ps.documentElement,Fa=ps.body,jM=[vi,ps,ms,Fa],pn.utils.clamp,qM=pn.core.context||function(){},eo="onpointerenter"in Fa?"pointer":"mouse",YM=Xt.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,er=Xt.eventTypes=("ontouchstart"in ms?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ms?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return KM=0},500),mf=1),ka||ZM(),mf};Hn.op=en;rt.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){mf||QM(pn)||console.warn("Please gsap.registerPlugin(Observer)"),ka||ZM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,h=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,m=i.event,_=i.onDragStart,f=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,T=i.onRight,w=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,I=i.onChange,N=i.onToggleX,Z=i.onToggleY,L=i.onHover,O=i.onHoverEnd,B=i.onMove,G=i.ignoreCheck,U=i.isNormalizer,F=i.onGestureStart,R=i.onGestureEnd,K=i.onWheel,Q=i.onEnable,q=i.onDisable,$=i.onClick,re=i.scrollSpeed,ge=i.capture,me=i.allowClicks,Le=i.lockAxis,De=i.onLockAxis;this.target=a=Yn(a)||ms,this.vars=i,p&&(p=pn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,re=re||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(vi.getComputedStyle(Fa).lineHeight)||22);var Ie,We,H,ce,ae,ye,_e,W=this,ze=0,b=0,A=i.passive||!c&&i.passive!==!1,z=Fs(a,Hn),ne=Fs(a,en),te=z(),ie=ne(),fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&er[0]==="pointerdown",J=Ql(a),se=a.ownerDocument||ps,Me=[0,0,0],Ue=[0,0,0],ee=0,Qe=function(){return ee=Zl()},be=function(Te,Oe){return(W.event=Te)&&p&&oC(Te.target,p)||Oe&&fe&&Te.pointerType!=="touch"||G&&G(Te,Oe)},Ye=function(){W._vx.reset(),W._vy.reset(),We.pause(),d&&d(W)},Ae=function(){var Te=W.deltaX=X0(Me),Oe=W.deltaY=X0(Ue),ue=Math.abs(Te)>=r,He=Math.abs(Oe)>=r;I&&(ue||He)&&I(W,Te,Oe,Me,Ue),ue&&(T&&W.deltaX>0&&T(W),w&&W.deltaX<0&&w(W),S&&S(W),N&&W.deltaX<0!=ze<0&&N(W),ze=W.deltaX,Me[0]=Me[1]=Me[2]=0),He&&(P&&W.deltaY>0&&P(W),M&&W.deltaY<0&&M(W),E&&E(W),Z&&W.deltaY<0!=b<0&&Z(W),b=W.deltaY,Ue[0]=Ue[1]=Ue[2]=0),(ce||H)&&(B&&B(W),H&&(_&&H===1&&_(W),v&&v(W),H=0),ce=!1),ye&&!(ye=!1)&&De&&De(W),ae&&(K(W),ae=!1),Ie=0},Se=function(Te,Oe,ue){Me[ue]+=Te,Ue[ue]+=Oe,W._vx.update(Te),W._vy.update(Oe),u?Ie||(Ie=requestAnimationFrame(Ae)):Ae()},Xe=function(Te,Oe){Le&&!_e&&(W.axis=_e=Math.abs(Te)>Math.abs(Oe)?"x":"y",ye=!0),_e!=="y"&&(Me[2]+=Te,W._vx.update(Te,!0)),_e!=="x"&&(Ue[2]+=Oe,W._vy.update(Oe,!0)),u?Ie||(Ie=requestAnimationFrame(Ae)):Ae()},Ke=function(Te){if(!be(Te,1)){Te=Sl(Te,c);var Oe=Te.clientX,ue=Te.clientY,He=Oe-W.x,ke=ue-W.y,qe=W.isDragging;W.x=Oe,W.y=ue,(qe||(He||ke)&&(Math.abs(W.startX-Oe)>=s||Math.abs(W.startY-ue)>=s))&&(H||(H=qe?2:1),qe||(W.isDragging=!0),Xe(He,ke))}},lt=W.onPress=function(Pe){be(Pe,1)||Pe&&Pe.button||(W.axis=_e=null,We.pause(),W.isPressed=!0,Pe=Sl(Pe),ze=b=0,W.startX=W.x=Pe.clientX,W.startY=W.y=Pe.clientY,W._vx.reset(),W._vy.reset(),Un(U?a:se,er[1],Ke,A,!0),W.deltaX=W.deltaY=0,x&&x(W))},ve=W.onRelease=function(Pe){if(!be(Pe,1)){Dn(U?a:se,er[1],Ke,!0);var Te=!isNaN(W.y-W.startY),Oe=W.isDragging,ue=Oe&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),He=Sl(Pe);!ue&&Te&&(W._vx.reset(),W._vy.reset(),c&&me&&pn.delayedCall(.08,function(){if(Zl()-ee>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(se.createEvent){var ke=se.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,vi,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(ke)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,d&&Oe&&!U&&We.restart(!0),H&&Ae(),f&&Oe&&f(W),y&&y(W,ue)}},le=function(Te){return Te.touches&&Te.touches.length>1&&(W.isGesturing=!0)&&F(Te,W.isDragging)},D=function(){return(W.isGesturing=!1)||R(W)},de=function(Te){if(!be(Te)){var Oe=z(),ue=ne();Se((Oe-te)*re,(ue-ie)*re,1),te=Oe,ie=ue,d&&We.restart(!0)}},he=function(Te){if(!be(Te)){Te=Sl(Te,c),K&&(ae=!0);var Oe=(Te.deltaMode===1?l:Te.deltaMode===2?vi.innerHeight:1)*g;Se(Te.deltaX*Oe,Te.deltaY*Oe,0),d&&!U&&We.restart(!0)}},Be=function(Te){if(!be(Te)){var Oe=Te.clientX,ue=Te.clientY,He=Oe-W.x,ke=ue-W.y;W.x=Oe,W.y=ue,ce=!0,d&&We.restart(!0),(He||ke)&&Xe(He,ke)}},Fe=function(Te){W.event=Te,L(W)},ot=function(Te){W.event=Te,O(W)},ft=function(Te){return be(Te)||Sl(Te,c)&&$(W)};We=W._dc=pn.delayedCall(h||.25,Ye).pause(),W.deltaX=W.deltaY=0,W._vx=dm(0,50,!0),W._vy=dm(0,50,!0),W.scrollX=z,W.scrollY=ne,W.isDragging=W.isGesturing=W.isPressed=!1,qM(this),W.enable=function(Pe){return W.isEnabled||(Un(J?se:a,"scroll",fm),o.indexOf("scroll")>=0&&Un(J?se:a,"scroll",de,A,ge),o.indexOf("wheel")>=0&&Un(a,"wheel",he,A,ge),(o.indexOf("touch")>=0&&YM||o.indexOf("pointer")>=0)&&(Un(a,er[0],lt,A,ge),Un(se,er[2],ve),Un(se,er[3],ve),me&&Un(a,"click",Qe,!0,!0),$&&Un(a,"click",ft),F&&Un(se,"gesturestart",le),R&&Un(se,"gestureend",D),L&&Un(a,eo+"enter",Fe),O&&Un(a,eo+"leave",ot),B&&Un(a,eo+"move",Be)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=ce=H=!1,W._vx.reset(),W._vy.reset(),te=z(),ie=ne(),Pe&&Pe.type&&lt(Pe),Q&&Q(W)),W},W.disable=function(){W.isEnabled&&(Ta.filter(function(Pe){return Pe!==W&&Ql(Pe.target)}).length||Dn(J?se:a,"scroll",fm),W.isPressed&&(W._vx.reset(),W._vy.reset(),Dn(U?a:se,er[1],Ke,!0)),Dn(J?se:a,"scroll",de,ge),Dn(a,"wheel",he,ge),Dn(a,er[0],lt,ge),Dn(se,er[2],ve),Dn(se,er[3],ve),Dn(a,"click",Qe,!0),Dn(a,"click",ft),Dn(se,"gesturestart",le),Dn(se,"gestureend",D),Dn(a,eo+"enter",Fe),Dn(a,eo+"leave",ot),Dn(a,eo+"move",Be),W.isEnabled=W.isPressed=W.isDragging=!1,q&&q(W))},W.kill=W.revert=function(){W.disable();var Pe=Ta.indexOf(W);Pe>=0&&Ta.splice(Pe,1),zr===W&&(zr=0)},Ta.push(W),U&&Ql(a)&&(zr=W),W.enable(m)},rC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.15.0";Xt.create=function(n){return new Xt(n)};Xt.register=QM;Xt.getAll=function(){return Ta.slice()};Xt.getById=function(n){return Ta.filter(function(e){return e.vars.id===n})[0]};$M()&&pn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,la,nt,gt,_i,pt,$_,ed,Uu,Jl,Nl,_c,Tn,bd,hm,Fn,Y0,j0,ua,JM,yh,eE,In,pm,tE,nE,is,mm,K_,za,Z_,eu,_m,Sh,gc=1,wn=Date.now,Mh=wn(),Yi=0,Il=0,q0=function(e,t,i){var r=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},$0=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},aC=function n(){return Il&&requestAnimationFrame(n)},K0=function(){return bd=1},Z0=function(){return bd=0},pr=function(e){return e},Ol=function(e){return Math.round(e*1e5)/1e5||0},iE=function(){return typeof window<"u"},rE=function(){return we||iE()&&(we=window.gsap)&&we.registerPlugin&&we},Lo=function(e){return!!~$_.indexOf(e)},sE=function(e){return(e==="Height"?Z_:nt["inner"+e])||_i["client"+e]||pt["client"+e]},oE=function(e){return Rs(e,"getBoundingClientRect")||(Lo(e)?function(){return yf.width=nt.innerWidth,yf.height=Z_,yf}:function(){return Or(e)})},lC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Rs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?sE(s):e["client"+s])||0}},uC=function(e,t){return!t||~Er.indexOf(e)?oE(e):function(){return yf}},xr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Rs(e,i))?o()-oE(e)()[s]:Lo(e)?(_i[i]||pt[i])-sE(r):e[i]-e["offset"+r])},vc=function(e,t){for(var i=0;i<ua.length;i+=3)(!t||~t.indexOf(ua[i+1]))&&e(ua[i],ua[i+1],ua[i+2])},pi=function(e){return typeof e=="string"},Rn=function(e){return typeof e=="function"},Fl=function(e){return typeof e=="number"},to=function(e){return typeof e=="object"},Ml=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Go=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Vo=Math.abs,aE="left",lE="top",Q_="right",J_="bottom",yo="width",So="height",tu="Right",nu="Left",iu="Top",ru="Bottom",jt="padding",Oi="margin",tl="Width",eg="Height",Qt="px",Fi=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},cC=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Q0=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Or=function(e,t){var i=t&&Fi(e)[hm]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},td=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},uE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},fC=function(e){return function(t){return we.utils.snap(uE(e),t)}},tg=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},dC=function(e){return function(t,i){return tg(uE(e))(t,i.direction)}},xc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},an=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},on=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},yc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},J0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Sc={toggleActions:"play",anticipatePin:0},nd={top:0,left:0,center:.5,bottom:1,right:1},_f=function(e,t){if(pi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in nd?nd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Mc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,h=s.indent,p=s.fontWeight,g=gt.createElement("div"),m=Lo(i)||Rs(i,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,f=m?pt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((_||l)&&m?"fixed;":"absolute;"),(_||l||!m)&&(y+=(r===en?Q_:J_)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,f.children[0]?f.insertBefore(g,f.children[0]):f.appendChild(g),g._offset=g["offset"+r.op.d2],gf(g,0,r,v),g},gf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+tl]=1,s["border"+a+tl]=0,s[i.p]=t+"px",we.set(e,s)},et=[],gm={},Nu,ev=function(){return wn()-Yi>34&&(Nu||(Nu=requestAnimationFrame(Gr)))},Wo=function(){(!In||!In.isPressed||In.startX>pt.clientWidth)&&(rt.cache++,In?Nu||(Nu=requestAnimationFrame(Gr)):Gr(),Yi||Uo("scrollStart"),Yi=wn())},Eh=function(){nE=nt.innerWidth,tE=nt.innerHeight},kl=function(e){rt.cache++,(e===!0||!Tn&&!eE&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!pm||nE!==nt.innerWidth||Math.abs(nt.innerHeight-tE)>nt.innerHeight*.25))&&ed.restart(!0)},Do={},hC=[],cE=function n(){return on(Ze,"scrollEnd",n)||co(!0)},Uo=function(e){return Do[e]&&Do[e].map(function(t){return t()})||hC},di=[],fE=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},dE=function(){return rt.forEach(function(e){return Rn(e)&&++e.cacheID&&(e.rec=e())})},ng=function(e,t){var i;for(Fn=0;Fn<et.length;Fn++)i=et[Fn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));eu=!0,t&&fE(t),t||Uo("revert")},hE=function(e,t){rt.cache++,(t||!kn)&&rt.forEach(function(i){return Rn(i)&&i.cacheID++&&(i.rec=0)}),pi(e)&&(nt.history.scrollRestoration=K_=e)},kn,Mo=0,tv,pC=function(){if(tv!==Mo){var e=tv=Mo;requestAnimationFrame(function(){return e===Mo&&co(!0)})}},pE=function(){pt.appendChild(za),Z_=!In&&za.offsetHeight||nt.innerHeight,pt.removeChild(za)},nv=function(e){return Uu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},co=function(e,t){if(_i=gt.documentElement,pt=gt.body,$_=[nt,gt,_i,pt],Yi&&!e&&!eu){an(Ze,"scrollEnd",cE);return}pE(),kn=Ze.isRefreshing=!0,eu||dE();var i=Uo("refreshInit");JM&&Ze.sort(),t||ng(),rt.forEach(function(r){Rn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),eu=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),_m=1,nv(!0),et.forEach(function(r){var s=xr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),nv(!1),_m=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Rn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),hE(K_,1),ed.pause(),Mo++,kn=2,Gr(2),et.forEach(function(r){return Rn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=Ze.isRefreshing=!1,Uo("refresh")},vm=0,vf=1,su,Gr=function(e){if(e===2||!kn&&!eu){Ze.isUpdating=!0,su&&su.update(0);var t=et.length,i=wn(),r=i-Mh>=50,s=t&&et[0].scroll();if(vf=vm>s?-1:1,kn||(vm=s),r&&(Yi&&!bd&&i-Yi>200&&(Yi=0,Uo("scrollEnd")),Nl=Mh,Mh=i),vf<0){for(Fn=t;Fn-- >0;)et[Fn]&&et[Fn].update(0,r);vf=1}else for(Fn=0;Fn<t;Fn++)et[Fn]&&et[Fn].update(0,r);Ze.isUpdating=!1}Nu=0},xm=[aE,lE,J_,Q_,Oi+ru,Oi+tu,Oi+iu,Oi+nu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xf=xm.concat([yo,So,"boxSizing","max"+tl,"max"+eg,"position",Oi,jt,jt+iu,jt+tu,jt+ru,jt+nu]),mC=function(e,t,i){Ba(i);var r=e._gsap;if(r.spacerIsNative)Ba(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Th=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=xm.length,o=t.style,a=e.style,l;s--;)l=xm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[J_]=a[Q_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[yo]=td(e,Hn)+Qt,o[So]=td(e,en)+Qt,o[jt]=a[Oi]=a[lE]=a[aE]="0",Ba(r),a[yo]=a["max"+tl]=i[yo],a[So]=a["max"+eg]=i[So],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_C=/([A-Z])/g,Ba=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(_C,"-$1").toLowerCase())}},Ec=function(e){for(var t=xf.length,i=e.style,r=[],s=0;s<t;s++)r.push(xf[s],i[xf[s]]);return r.t=e,r},gC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},yf={left:0,top:0},iv=function(e,t,i,r,s,o,a,l,u,c,d,h,p,g){Rn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?_f("0"+e.substr(3),i):0));var m=p?p.time():0,_,f,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Fl(e))p&&(e=we.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&gf(a,i,r,!0);else{Rn(t)&&(t=t(l));var x=(e||"0").split(" "),y,T,w,M;v=Yn(t,l)||pt,y=Or(v)||{},(!y||!y.left&&!y.top)&&Fi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Or(v),M?v.style.display=M:v.style.removeProperty("display")),T=_f(x[0],y[r.d]),w=_f(x[1]||"0",i),e=y[r.p]-u[r.p]-c+T+s-w,a&&gf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;_="scroll"+r.d2,gf(o,P,r,S&&P>20||!S&&(d?Math.max(pt[_],_i[_]):o.parentNode[_])<=P+1),d&&(u=Or(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Qt))}return p&&v&&(_=Or(v),p.seek(h),f=Or(v),p._caScrollDist=_[r.p]-f[r.p],e=e/p._caScrollDist*h),p&&p.seek(m),p?e:Math.round(e)},vC=/(webkit|moz|length|cssText|inset)/i,rv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!vC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},mE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Tc=function(e,t,i){var r={};r[t.p]="+="+i,we.set(e,r)},sv=function(e,t){var i=Fs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var h=o.tween,p=l.onComplete,g={};u=u||i();var m=mE(i,u,function(){h.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return m(u+c*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Gr()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=we.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",i.wheelHandler),Ze.isTouch&&an(e,"touchmove",i.wheelHandler),s},Ze=function(){function n(t,i){la||n.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Il){this.update=this.refresh=this.kill=pr;return}i=Q0(pi(i)||Fl(i)||i.nodeType?{trigger:i}:i,Sc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,h=s.trigger,p=s.pin,g=s.pinSpacing,m=s.invalidateOnRefresh,_=s.anticipatePin,f=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:en,I=!d&&d!==0,N=Yn(i.scroller||nt),Z=we.core.getCache(N),L=Lo(N),O=("pinType"in i?i.pinType:Rs(N,"pinType")||L&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],G=I&&i.toggleActions.split(" "),U="markers"in i?i.markers:Sc.markers,F=L?0:parseFloat(Fi(N)["border"+E.p2+tl])||0,R=this,K=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Q=lC(N,L,E),q=uC(N,L),$=0,re=0,ge=0,me=Fs(N,E),Le,De,Ie,We,H,ce,ae,ye,_e,W,ze,b,A,z,ne,te,ie,fe,J,se,Me,Ue,ee,Qe,be,Ye,Ae,Se,Xe,Ke,lt,ve,le,D,de,he,Be,Fe,ot;if(R._startClamp=R._endClamp=!1,R._dir=E,_*=45,R.scroller=N,R.scroll=M?M.time.bind(M):me,We=me(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(JM=1,i.refreshPriority===-9999&&(su=R)),Z.tweenScroll=Z.tweenScroll||{top:sv(N,en),left:sv(N,Hn)},R.tweenTo=Le=Z.tweenScroll[E.p],R.scrubDuration=function(ue){le=Fl(ue)&&ue,le?ve?ve.duration(ue):ve=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return f&&f(R)}}):(ve&&ve.progress(1).kill(),ve=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),Ke=0,l||(l=r.vars.id)),y&&((!to(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&we.set(L?[pt,_i]:N,{scrollBehavior:"auto"}),rt.forEach(function(ue){return Rn(ue)&&ue.target===(L?gt.scrollingElement||_i:N)&&(ue.smooth=!1)}),Ie=Rn(y.snapTo)?y.snapTo:y.snapTo==="labels"?fC(r):y.snapTo==="labelsDirectional"?dC(r):y.directional!==!1?function(ue,He){return tg(y.snapTo)(ue,wn()-re<500?0:He.direction)}:we.utils.snap(y.snapTo),D=y.duration||{min:.1,max:2},D=to(D)?Jl(D.min,D.max):Jl(D,D),de=we.delayedCall(y.delay||le/2||.1,function(){var ue=me(),He=wn()-re<500,ke=Le.tween;if((He||Math.abs(R.getVelocity())<10)&&!ke&&!bd&&$!==ue){var qe=(ue-ce)/z,Ut=r&&!I?r.totalProgress():qe,tt=He?0:(Ut-lt)/(wn()-Nl)*1e3||0,Et=we.utils.clamp(-qe,1-qe,Vo(tt/2)*tt/.185),Kt=qe+(y.inertia===!1?0:Et),At,Tt,mt=y,ui=mt.onStart,C=mt.onInterrupt,k=mt.onComplete;if(At=Ie(Kt,R),Fl(At)||(At=Kt),Tt=Math.max(0,Math.round(ce+At*z)),ue<=ae&&ue>=ce&&Tt!==ue){if(ke&&!ke._initted&&ke.data<=Vo(Tt-ue))return;y.inertia===!1&&(Et=At-qe),Le(Tt,{duration:D(Vo(Math.max(Vo(Kt-Ut),Vo(At-Ut))*.185/tt/.05||0)),ease:y.ease||"power3",data:Vo(Tt-ue),onInterrupt:function(){return de.restart(!0)&&C&&Go(R,C)},onComplete:function(){R.update(),$=me(),r&&!I&&(ve?ve.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),Ke=lt=r&&!I?r.totalProgress():R.progress,v&&v(R),k&&Go(R,k)}},ue,Et*z,Tt-ue-Et*z),ui&&Go(R,ui,Le.tween)}}else R.isActive&&$!==ue&&de.restart(!0)}).pause()),l&&(gm[l]=R),h=R.trigger=Yn(h||p!==!0&&p),ot=h&&h._gsap&&h._gsap.stRevert,ot&&(ot=ot(R)),p=p===!0?h:Yn(p),pi(a)&&(a={targets:h,className:a}),p&&(g===!1||g===Oi||(g=!g&&p.parentNode&&p.parentNode.style&&Fi(p.parentNode).display==="flex"?!1:jt),R.pin=p,De=we.core.getCache(p),De.spacer?ne=De.pinState:(w&&(w=Yn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),De.spacerIsNative=!!w,w&&(De.spacerState=Ec(w))),De.spacer=fe=w||gt.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),De.pinState=ne=Ec(p)),i.force3D!==!1&&we.set(p,{force3D:!0}),R.spacer=fe=De.spacer,Xe=Fi(p),Qe=Xe[g+E.os2],se=we.getProperty(p),Me=we.quickSetter(p,E.a,Qt),Th(p,fe,Xe),ie=Ec(p)),U){b=to(U)?Q0(U,J0):J0,W=Mc("scroller-start",l,N,E,b,0),ze=Mc("scroller-end",l,N,E,b,0,W),J=W["offset"+E.op.d2];var ft=Yn(Rs(N,"content")||N);ye=this.markerStart=Mc("start",l,ft,E,b,J,0,M),_e=this.markerEnd=Mc("end",l,ft,E,b,J,0,M),M&&(Fe=we.quickSetter([ye,_e],E.a,Qt)),!O&&!(Er.length&&Rs(N,"fixedMarkers")===!0)&&(cC(L?pt:N),we.set([W,ze],{force3D:!0}),Ye=we.quickSetter(W,E.a,Qt),Se=we.quickSetter(ze,E.a,Qt))}if(M){var Pe=M.vars.onUpdate,Te=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Pe&&Pe.apply(M,Te||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(ue,He){if(!He)return R.kill(!0);var ke=ue!==!1||!R.enabled,qe=Tn;ke!==R.isReverted&&(ke&&(he=Math.max(me(),R.scroll.rec||0),ge=R.progress,Be=r&&r.progress()),ye&&[ye,_e,W,ze].forEach(function(Ut){return Ut.style.display=ke?"none":"block"}),ke&&(Tn=R,R.update(ke)),p&&(!T||!R.isActive)&&(ke?mC(p,fe,ne):Th(p,fe,Fi(p),be)),ke||R.update(ke),Tn=qe,R.isReverted=ke)},R.refresh=function(ue,He,ke,qe){if(!((Tn||!R.enabled)&&!He)){if(p&&ue&&Yi){an(n,"scrollEnd",cE);return}!kn&&K&&K(R),Tn=R,Le.tween&&!ke&&(Le.tween.kill(),Le.tween=0),ve&&ve.pause(),m&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(je){return je.vars.immediateRender&&je.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ut=Q(),tt=q(),Et=M?M.duration():xr(N,E),Kt=z<=.01||!z,At=0,Tt=qe||0,mt=to(ke)?ke.end:i.end,ui=i.endTrigger||h,C=to(ke)?ke.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),k=R.pinnedContainer=i.pinnedContainer&&Yn(i.pinnedContainer,R),Y=h&&Math.max(0,et.indexOf(R))||0,X=Y,V,pe,Ce,Ge,Re,Ne,Ve,$e,Pt,Zt,_t,Ln,xt;for(U&&to(ke)&&(Ln=we.getProperty(W,E.p),xt=we.getProperty(ze,E.p));X-- >0;)Ne=et[X],Ne.end||Ne.refresh(0,1)||(Tn=R),Ve=Ne.pin,Ve&&(Ve===h||Ve===p||Ve===k)&&!Ne.isReverted&&(Zt||(Zt=[]),Zt.unshift(Ne),Ne.revert(!0,!0)),Ne!==et[X]&&(Y--,X--);for(Rn(C)&&(C=C(R)),C=q0(C,"start",R),ce=iv(C,h,Ut,E,me(),ye,W,R,tt,F,O,Et,M,R._startClamp&&"_startClamp")||(p?-.001:0),Rn(mt)&&(mt=mt(R)),pi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(pi(C)?C.split(" ")[0]:"")+mt:(At=_f(mt.substr(2),Ut),mt=pi(C)?C:(M?we.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,ce):ce)+At,ui=h)),mt=q0(mt,"end",R),ae=Math.max(ce,iv(mt||(ui?"100% 0":Et),ui,Ut,E,me()+At,_e,ze,R,tt,F,O,Et,M,R._endClamp&&"_endClamp"))||-.001,At=0,X=Y;X--;)Ne=et[X]||{},Ve=Ne.pin,Ve&&Ne.start-Ne._pinPush<=ce&&!M&&Ne.end>0&&(V=Ne.end-(R._startClamp?Math.max(0,Ne.start):Ne.start),(Ve===h&&Ne.start-Ne._pinPush<ce||Ve===k)&&isNaN(C)&&(At+=V*(1-Ne.progress)),Ve===p&&(Tt+=V));if(ce+=At,ae+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!kn&&(R._endClamp=ae||-.001,ae=Math.min(ae,xr(N,E))),z=ae-ce||(ce-=.01)&&.001,Kt&&(ge=we.utils.clamp(0,1,we.utils.normalize(ce,ae,he))),R._pinPush=Tt,ye&&At&&(V={},V[E.a]="+="+At,k&&(V[E.p]="-="+me()),we.set([ye,_e],V)),p&&!(_m&&R.end>=xr(N,E)))V=Fi(p),Ge=E===en,Ce=me(),Ue=parseFloat(se(E.a))+Tt,!Et&&ae>1&&(_t=(L?gt.scrollingElement||_i:N).style,_t={style:_t,value:_t["overflow"+E.a.toUpperCase()]},L&&Fi(pt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(_t.style["overflow"+E.a.toUpperCase()]="scroll")),Th(p,fe,V),ie=Ec(p),pe=Or(p,!0),$e=O&&Fs(N,Ge?Hn:en)(),g?(be=[g+E.os2,z+Tt+Qt],be.t=fe,X=g===jt?td(p,E)+z+Tt:0,X&&(be.push(E.d,X+Qt),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=X+Qt)),Ba(be),k&&et.forEach(function(je){je.pin===k&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),O&&me(he)):(X=td(p,E),X&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=X+Qt)),O&&(Re={top:pe.top+(Ge?Ce-ce:$e)+Qt,left:pe.left+(Ge?$e:Ce-ce)+Qt,boxSizing:"border-box",position:"fixed"},Re[yo]=Re["max"+tl]=Math.ceil(pe.width)+Qt,Re[So]=Re["max"+eg]=Math.ceil(pe.height)+Qt,Re[Oi]=Re[Oi+iu]=Re[Oi+tu]=Re[Oi+ru]=Re[Oi+nu]="0",Re[jt]=V[jt],Re[jt+iu]=V[jt+iu],Re[jt+tu]=V[jt+tu],Re[jt+ru]=V[jt+ru],Re[jt+nu]=V[jt+nu],te=gC(ne,Re,T),kn&&me(0)),r?(Pt=r._initted,yh(1),r.render(r.duration(),!0,!0),ee=se(E.a)-Ue+z+Tt,Ae=Math.abs(z-ee)>1,O&&Ae&&te.splice(te.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),yh(0)):ee=z,_t&&(_t.value?_t.style["overflow"+E.a.toUpperCase()]=_t.value:_t.style.removeProperty("overflow-"+E.a));else if(h&&me()&&!M)for(pe=h.parentNode;pe&&pe!==pt;)pe._pinOffset&&(ce-=pe._pinOffset,ae-=pe._pinOffset),pe=pe.parentNode;Zt&&Zt.forEach(function(je){return je.revert(!1,!0)}),R.start=ce,R.end=ae,We=H=kn?he:me(),!M&&!kn&&(We<he&&me(he),R.scroll.rec=0),R.revert(!1,!0),re=wn(),de&&($=-1,de.restart(!0)),Tn=0,r&&I&&(r._initted||Be)&&r.progress()!==Be&&r.progress(Be||0,!0).render(r.time(),!0,!0),(Kt||ge!==R.progress||M||m||r&&!r._initted)&&(r&&!I&&(r._initted||ge||r.vars.immediateRender!==!1)&&r.totalProgress(M&&ce<-.001&&!ge?we.utils.normalize(ce,ae,0):ge,!0),R.progress=Kt||(We-ce)/z===ge?0:ge),p&&g&&(fe._pinOffset=Math.round(R.progress*ee)),ve&&ve.invalidate(),isNaN(Ln)||(Ln-=we.getProperty(W,E.p),xt-=we.getProperty(ze,E.p),Tc(W,E,Ln),Tc(ye,E,Ln-(qe||0)),Tc(ze,E,xt),Tc(_e,E,xt-(qe||0))),Kt&&!kn&&R.update(),c&&!kn&&!A&&(A=!0,c(R),A=!1)}},R.getVelocity=function(){return(me()-H)/(wn()-Nl)*1e3||0},R.endAnimation=function(){Ml(R.callbackAnimation),r&&(ve?ve.progress(1):r.paused()?I||Ml(r,R.direction<0,1):Ml(r,r.reversed()))},R.labelToScroll=function(ue){return r&&r.labels&&(ce||R.refresh()||ce)+r.labels[ue]/r.duration()*z||0},R.getTrailing=function(ue){var He=et.indexOf(R),ke=R.direction>0?et.slice(0,He).reverse():et.slice(He+1);return(pi(ue)?ke.filter(function(qe){return qe.vars.preventOverlaps===ue}):ke).filter(function(qe){return R.direction>0?qe.end<=ce:qe.start>=ae})},R.update=function(ue,He,ke){if(!(M&&!ke&&!ue)){var qe=kn===!0?he:R.scroll(),Ut=ue?0:(qe-ce)/z,tt=Ut<0?0:Ut>1?1:Ut||0,Et=R.progress,Kt,At,Tt,mt,ui,C,k,Y;if(He&&(H=We,We=M?me():qe,y&&(lt=Ke,Ke=r&&!I?r.totalProgress():tt)),_&&p&&!Tn&&!gc&&Yi&&(!tt&&ce<qe+(qe-H)/(wn()-Nl)*_?tt=1e-4:tt===1&&ae>qe+(qe-H)/(wn()-Nl)*_&&(tt=.9999)),tt!==Et&&R.enabled){if(Kt=R.isActive=!!tt&&tt<1,At=!!Et&&Et<1,C=Kt!==At,ui=C||!!tt!=!!Et,R.direction=tt>Et?1:-1,R.progress=tt,ui&&!Tn&&(Tt=tt&&!Et?0:tt===1?1:Et===1?2:3,I&&(mt=!C&&G[Tt+1]!=="none"&&G[Tt+1]||G[Tt],Y=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(C||Y)&&(Y||d||!r)&&(Rn(S)?S(R):R.getTrailing(S).forEach(function(Ce){return Ce.endAnimation()})),I||(ve&&!Tn&&!gc?(ve._dp._time-ve._start!==ve._time&&ve.render(ve._dp._time-ve._start),ve.resetTo?ve.resetTo("totalProgress",tt,r._tTime/r._tDur):(ve.vars.totalProgress=tt,ve.invalidate().restart())):r&&r.totalProgress(tt,!!(Tn&&(re||ue)))),p){if(ue&&g&&(fe.style[g+E.os2]=Qe),!O)Me(Ol(Ue+ee*tt));else if(ui){if(k=!ue&&tt>Et&&ae+1>qe&&qe+1>=xr(N,E),T)if(!ue&&(Kt||k)){var X=Or(p,!0),V=qe-ce;rv(p,pt,X.top+(E===en?V:0)+Qt,X.left+(E===en?0:V)+Qt)}else rv(p,fe);Ba(Kt||k?te:ie),Ae&&tt<1&&Kt||Me(Ue+(tt===1&&!k?ee:0))}}y&&!Le.tween&&!Tn&&!gc&&de.restart(!0),a&&(C||x&&tt&&(tt<1||!Sh))&&Uu(a.targets).forEach(function(Ce){return Ce.classList[Kt||x?"add":"remove"](a.className)}),o&&!I&&!ue&&o(R),ui&&!Tn?(I&&(Y&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(R)),(C||!Sh)&&(u&&C&&Go(R,u),B[Tt]&&Go(R,B[Tt]),x&&(tt===1?R.kill(!1,1):B[Tt]=0),C||(Tt=tt===1?1:3,B[Tt]&&Go(R,B[Tt]))),P&&!Kt&&Math.abs(R.getVelocity())>(Fl(P)?P:2500)&&(Ml(R.callbackAnimation),ve?ve.progress(1):Ml(r,mt==="reverse"?1:!tt,1))):I&&o&&!Tn&&o(R)}if(Se){var pe=M?qe/M.duration()*(M._caScrollDist||0):qe;Ye(pe+(W._isFlipped?1:0)),Se(pe)}Fe&&Fe(-qe/M.duration()*(M._caScrollDist||0))}},R.enable=function(ue,He){R.enabled||(R.enabled=!0,an(N,"resize",kl),L||an(N,"scroll",Wo),K&&an(n,"refreshInit",K),ue!==!1&&(R.progress=ge=0,We=H=$=me()),He!==!1&&R.refresh())},R.getTween=function(ue){return ue&&Le?Le.tween:ve},R.setPositions=function(ue,He,ke,qe){if(M){var Ut=M.scrollTrigger,tt=M.duration(),Et=Ut.end-Ut.start;ue=Ut.start+Et*ue/tt,He=Ut.start+Et*He/tt}R.refresh(!1,!1,{start:$0(ue,ke&&!!R._startClamp),end:$0(He,ke&&!!R._endClamp)},qe),R.update()},R.adjustPinSpacing=function(ue){if(be&&ue){var He=be.indexOf(E.d)+1;be[He]=parseFloat(be[He])+ue+Qt,be[1]=parseFloat(be[1])+ue+Qt,Ba(be)}},R.disable=function(ue,He){if(ue!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,He||ve&&ve.pause(),he=0,De&&(De.uncache=1),K&&on(n,"refreshInit",K),de&&(de.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!L)){for(var ke=et.length;ke--;)if(et[ke].scroller===N&&et[ke]!==R)return;on(N,"resize",kl),L||on(N,"scroll",Wo)}},R.kill=function(ue,He){R.disable(ue,He),ve&&!He&&ve.kill(),l&&delete gm[l];var ke=et.indexOf(R);ke>=0&&et.splice(ke,1),ke===Fn&&vf>0&&Fn--,ke=0,et.forEach(function(qe){return qe.scroller===R.scroller&&(ke=1)}),ke||kn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,ue&&r.revert({kill:!1}),He||r.kill()),ye&&[ye,_e,W,ze].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),su===R&&(su=0),p&&(De&&(De.uncache=1),ke=0,et.forEach(function(qe){return qe.pin===p&&ke++}),ke||(De.spacer=0)),i.onKill&&i.onKill(R)},et.push(R),R.enable(!1,!1),ot&&ot(R),r&&r.add&&!z){var Oe=R.update;R.update=function(){R.update=Oe,rt.cache++,ce||ae||R.refresh()},we.delayedCall(.01,R.update),z=.01,ce=ae=0}else R.refresh();p&&pC()},n.register=function(i){return la||(we=i||rE(),iE()&&window.document&&n.enable(),la=Il),la},n.defaults=function(i){if(i)for(var r in i)Sc[r]=i[r];return Sc},n.disable=function(i,r){Il=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),on(nt,"wheel",Wo),on(gt,"scroll",Wo),clearInterval(_c),on(gt,"touchcancel",pr),on(pt,"touchstart",pr),xc(on,gt,"pointerdown,touchstart,mousedown",K0),xc(on,gt,"pointerup,touchend,mouseup",Z0),ed.kill(),vc(on);for(var s=0;s<rt.length;s+=3)yc(on,rt[s],rt[s+1]),yc(on,rt[s],rt[s+2])},n.enable=function(){if(nt=window,gt=document,_i=gt.documentElement,pt=gt.body,we){if(Uu=we.utils.toArray,Jl=we.utils.clamp,mm=we.core.context||pr,yh=we.core.suppressOverwrites||pr,K_=nt.history.scrollRestoration||"auto",vm=nt.pageYOffset||0,we.core.globals("ScrollTrigger",n),pt){Il=1,za=document.createElement("div"),za.style.height="100vh",za.style.position="absolute",pE(),aC(),Xt.register(we),n.isTouch=Xt.isTouch,is=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pm=Xt.isTouch===1,an(nt,"wheel",Wo),$_=[nt,gt,_i,pt],we.matchMedia?(n.matchMedia=function(c){var d=we.matchMedia(),h;for(h in c)d.add(h,c[h]);return d},we.addEventListener("matchMediaInit",function(){dE(),ng()}),we.addEventListener("matchMediaRevert",function(){return fE()}),we.addEventListener("matchMedia",function(){co(0,1),Uo("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Eh(),Eh})):console.warn("Requires GSAP 3.11.0 or later"),Eh(),an(gt,"scroll",Wo);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Or(pt),en.m=Math.round(a.top+en.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),_c=setInterval(ev,250),we.delayedCall(.5,function(){return gc=0}),an(gt,"touchcancel",pr),an(pt,"touchstart",pr),xc(an,gt,"pointerdown,touchstart,mousedown",K0),xc(an,gt,"pointerup,touchend,mouseup",Z0),hm=we.utils.checkPrefix("transform"),xf.push(hm),la=wn(),ed=we.delayedCall(.2,co).pause(),ua=[gt,"visibilitychange",function(){var c=nt.innerWidth,d=nt.innerHeight;gt.hidden?(Y0=c,j0=d):(Y0!==c||j0!==d)&&kl()},gt,"DOMContentLoaded",co,nt,"load",co,nt,"resize",kl],vc(an),et.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)yc(on,rt[l],rt[l+1]),yc(on,rt[l],rt[l+2])}else if(gt){var u=function c(){n.enable(),gt.removeEventListener("DOMContentLoaded",c)};gt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Sh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(_c)||(_c=r)&&setInterval(ev,r),"ignoreMobileResize"in i&&(pm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(vc(on)||vc(an,i.autoRefreshEvents||"none"),eE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Yn(i),o=rt.indexOf(s),a=Lo(s);~o&&rt.splice(o,a?6:2),r&&(a?Er.unshift(nt,r,pt,r,_i,r):Er.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(pi(i)?Yn(i):i).getBoundingClientRect(),a=o[s?yo:So]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){pi(i)&&(i=Yn(i));var o=i.getBoundingClientRect(),a=o[s?yo:So],l=r==null?a/2:r in nd?nd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Do.killAll||[];Do={},r.forEach(function(s){return s()})}},n}();Ze.version="3.15.0";Ze.saveStyles=function(n){return n?Uu(n).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),mm())}}):di};Ze.revert=function(n,e){return ng(!n,e)};Ze.create=function(n,e){return new Ze(n,e)};Ze.refresh=function(n){return n?kl(!0):(la||Ze.register())&&co(!0)};Ze.update=function(n){return++rt.cache&&Gr(n===!0?2:0)};Ze.clearScrollMemory=hE;Ze.maxScroll=function(n,e){return xr(n,e?Hn:en)};Ze.getScrollFunc=function(n,e){return Fs(Yn(n),e?Hn:en)};Ze.getById=function(n){return gm[n]};Ze.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!Yi};Ze.snapDirectional=tg;Ze.addEventListener=function(n,e){var t=Do[n]||(Do[n]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(n,e){var t=Do[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ze.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],h=[],p=we.delayedCall(r,function(){c(d,h),d=[],h=[]}).pause();return function(g){d.length||p.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Rn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Rn(s)&&(s=s(),an(Ze,"refresh",function(){return s=e.batchMax()})),Uu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Ze.create(u))}),t};var ov=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},wh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===_i&&n(pt,t)},wc={auto:1,scroll:1},xC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(wc[(l=Fi(s)).overflowY]||wc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Lo(s)&&(wc[(l=Fi(s)).overflowY]||wc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},_E=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&xC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&an(gt,Xt.eventTypes[0],lv,!1,!0)},onDisable:function(){return on(gt,Xt.eventTypes[0],lv,!0)}})},yC=/(input|label|select|textarea)/i,av,lv=function(e){var t=yC.test(e.target.tagName);(t||av)&&(e._gsapAllow=!0,av=t)},SC=function(e){to(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Yn(e.target)||_i,c=we.core.globals().ScrollSmoother,d=c&&c.get(),h=is&&(e.content&&Yn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Fs(u,en),g=Fs(u,Hn),m=1,_=(Xt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,f=0,v=Rn(r)?function(){return r(a)}:function(){return r||2.8},x,y,T=_E(u,e.type,!0,s),w=function(){return y=!1},M=pr,P=pr,S=function(){l=xr(u,en),P=Jl(is?1:0,l),i&&(M=Jl(0,xr(u,Hn))),x=Mo},E=function(){h._gsap.y=Ol(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(y){requestAnimationFrame(w);var U=Ol(a.deltaY/2),F=P(p.v-U);if(h&&F!==p.v+p.offset){p.offset=F-p.v;var R=Ol((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",p.cacheID=rt.cache,Gr()}return!0}p.offset&&E(),y=!0},N,Z,L,O,B=function(){S(),N.isActive()&&N.vars.scrollY>l&&(p()>l?N.progress(1)&&p(l):N.resetTo("scrollY",l))};return h&&we.set(h,{y:"+=0"}),e.ignoreCheck=function(G){return is&&G.type==="touchmove"&&I()||m>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){y=!1;var G=m;m=Ol((nt.visualViewport&&nt.visualViewport.scale||1)/_),N.pause(),G!==m&&wh(u,m>1.01?!0:i?!1:"x"),Z=g(),L=p(),S(),x=Mo},e.onRelease=e.onGestureStart=function(G,U){if(p.offset&&E(),!U)O.restart(!0);else{rt.cache++;var F=v(),R,K;i&&(R=g(),K=R+F*.05*-G.velocityX/.227,F*=ov(g,R,K,xr(u,Hn)),N.vars.scrollX=M(K)),R=p(),K=R+F*.05*-G.velocityY/.227,F*=ov(p,R,K,xr(u,en)),N.vars.scrollY=P(K),N.invalidate().duration(F).play(.01),(is&&N.vars.scrollY>=l||R>=l-1)&&we.to({},{onUpdate:B,duration:F})}o&&o(G)},e.onWheel=function(){N._ts&&N.pause(),wn()-f>1e3&&(x=0,f=wn())},e.onChange=function(G,U,F,R,K){if(Mo!==x&&S(),U&&i&&g(M(R[2]===U?Z+(G.startX-G.x):g()+U-R[1])),F){p.offset&&E();var Q=K[2]===F,q=Q?L+G.startY-G.y:p()+F-K[1],$=P(q);Q&&q!==$&&(L+=$-q),p($)}(F||U)&&Gr()},e.onEnable=function(){wh(u,i?!1:"x"),Ze.addEventListener("refresh",B),an(nt,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),T.enable()},e.onDisable=function(){wh(u,!0),on(nt,"resize",B),Ze.removeEventListener("refresh",B),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=is,is&&!p()&&p(1),is&&we.ticker.add(pr),O=a._dc,N=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:mE(p,p(),function(){return N.pause()})},onUpdate:Gr,onComplete:O.vars.onComplete}),a};Ze.sort=function(n){if(Rn(n))return et.sort(n);var e=nt.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(n){return new Xt(n)};Ze.normalizeScroll=function(n){if(typeof n>"u")return In;if(n===!0&&In)return In.enable();if(n===!1){In&&In.kill(),In=n;return}var e=n instanceof Xt?n:SC(n);return In&&In.target===e.target&&In.kill(),Lo(e.target)&&(In=e),e};Ze.core={_getVelocityProp:dm,_inputObserver:_E,_scrollers:rt,_proxies:Er,bridge:{ss:function(){Yi||Uo("scrollStart"),Yi=wn()},ref:function(){return Tn}}};rE()&&we.registerPlugin(Ze);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ig="160",MC=0,uv=1,EC=2,gE=1,TC=2,Lr=3,ks=0,si=1,zi=2,bs=0,Ha=1,io=2,cv=3,fv=4,wC=5,ro=100,AC=101,CC=102,dv=103,hv=104,RC=200,bC=201,PC=202,LC=203,ym=204,Sm=205,DC=206,UC=207,NC=208,IC=209,OC=210,FC=211,kC=212,zC=213,BC=214,HC=0,GC=1,VC=2,id=3,WC=4,XC=5,YC=6,jC=7,vE=0,qC=1,$C=2,Ps=0,KC=1,ZC=2,QC=3,JC=4,eR=5,tR=6,xE=300,nl=301,il=302,Mm=303,Em=304,Pd=306,Tm=1e3,sr=1001,wm=1002,zn=1003,pv=1004,Ah=1005,qn=1006,nR=1007,Iu=1008,Ls=1009,iR=1010,rR=1011,rg=1012,yE=1013,_s=1014,gs=1015,Ou=1016,SE=1017,ME=1018,Eo=1020,sR=1021,or=1023,oR=1024,aR=1025,To=1026,rl=1027,lR=1028,EE=1029,uR=1030,TE=1031,wE=1033,Ch=33776,Rh=33777,bh=33778,Ph=33779,mv=35840,_v=35841,gv=35842,vv=35843,AE=36196,xv=37492,yv=37496,Sv=37808,Mv=37809,Ev=37810,Tv=37811,wv=37812,Av=37813,Cv=37814,Rv=37815,bv=37816,Pv=37817,Lv=37818,Dv=37819,Uv=37820,Nv=37821,Lh=36492,Iv=36494,Ov=36495,cR=36283,Fv=36284,kv=36285,zv=36286,CE=3e3,wo=3001,fR=3200,dR=3201,hR=0,pR=1,Bi="",hn="srgb",$r="srgb-linear",sg="display-p3",Ld="display-p3-linear",rd="linear",Rt="srgb",sd="rec709",od="p3",Xo=7680,Bv=519,mR=512,_R=513,gR=514,RE=515,vR=516,xR=517,yR=518,SR=519,Hv=35044,Gv="300 es",Am=1035,Br=2e3,ad=2001;class ul{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dh=Math.PI/180,Cm=180/Math.PI;function Wu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function $n(n,e,t){return Math.max(e,Math.min(t,n))}function MR(n,e){return(n%e+e)%e}function Uh(n,e,t){return(1-t)*n+t*e}function Vv(n){return(n&n-1)===0&&n!==0}function Rm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function El(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,r,s,o,a,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],g=i[8],m=r[0],_=r[3],f=r[6],v=r[1],x=r[4],y=r[7],T=r[2],w=r[5],M=r[8];return s[0]=o*m+a*v+l*T,s[3]=o*_+a*x+l*w,s[6]=o*f+a*y+l*M,s[1]=u*m+c*v+d*T,s[4]=u*_+c*x+d*w,s[7]=u*f+c*y+d*M,s[2]=h*m+p*v+g*T,s[5]=h*_+p*x+g*w,s[8]=h*f+p*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=t*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nh.makeScale(e,t)),this}rotate(e){return this.premultiply(Nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new it;function bE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ld(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ER(){const n=ld("canvas");return n.style.display="block",n}const Wv={};function ou(n){n in Wv||(Wv[n]=!0,console.warn(n))}const Xv=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Yv=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ac={[$r]:{transfer:rd,primaries:sd,toReference:n=>n,fromReference:n=>n},[hn]:{transfer:Rt,primaries:sd,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ld]:{transfer:rd,primaries:od,toReference:n=>n.applyMatrix3(Yv),fromReference:n=>n.applyMatrix3(Xv)},[sg]:{transfer:Rt,primaries:od,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Yv),fromReference:n=>n.applyMatrix3(Xv).convertLinearToSRGB()}},TR=new Set([$r,Ld]),yt={enabled:!0,_workingColorSpace:$r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!TR.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ac[e].toReference,r=Ac[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ac[n].primaries},getTransfer:function(n){return n===Bi?rd:Ac[n].transfer}};function Ga(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ih(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yo;class PE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yo===void 0&&(Yo=ld("canvas")),Yo.width=e.width,Yo.height=e.height;const i=Yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ld("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ga(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ga(t[i]/255)*255):t[i]=Ga(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wR=0;class LE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wR++}),this.uuid=Wu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Oh(r[o].image)):s.push(Oh(r[o]))}else s=Oh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Oh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?PE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AR=0;class oi extends ul{constructor(e=oi.DEFAULT_IMAGE,t=oi.DEFAULT_MAPPING,i=sr,r=sr,s=qn,o=Iu,a=or,l=Ls,u=oi.DEFAULT_ANISOTROPY,c=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AR++}),this.uuid=Wu(),this.name="",this.source=new LE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ou("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===wo?hn:Bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tm:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case wm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tm:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case wm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ou("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===hn?wo:CE}set encoding(e){ou("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===wo?hn:Bi}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=xE;oi.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,t=0,i=0,r=1){mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],g=l[9],m=l[2],_=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-m)<.01&&Math.abs(g-_)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+m)<.1&&Math.abs(g+_)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,T=(f+1)/2,w=(c+h)/4,M=(d+m)/4,P=(g+_)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((_-g)*(_-g)+(d-m)*(d-m)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(_-g)/v,this.y=(d-m)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CR extends ul{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ou("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===wo?hn:Bi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new oi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new LE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class No extends CR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class DE extends oi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class RR extends oi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(d!==m||l!==h||u!==p||c!==g){let _=1-a;const f=l*h+u*p+c*g+d*m,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,f*v);_=Math.sin(_*w)/T,a=Math.sin(a*w)/T}const y=a*v;if(l=l*_+h*y,u=u*_+p*y,c=c*_+g*y,d=d*_+m*y,_===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=T,u*=T,c*=T,d*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*d+l*p-u*h,e[t+1]=l*g+c*h+u*d-a*p,e[t+2]=u*g+c*p+a*h-l*d,e[t+3]=c*g-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"YXZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"ZXY":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"ZYX":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"YZX":this._x=h*c*d+u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d-h*p*g;break;case"XZY":this._x=h*c*d-u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new j,jv=new Xu;class Yu{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cc.copy(i.boundingBox)),Cc.applyMatrix4(e.matrixWorld),this.union(Cc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tl),Rc.subVectors(this.max,Tl),jo.subVectors(e.a,Tl),qo.subVectors(e.b,Tl),$o.subVectors(e.c,Tl),Qr.subVectors(qo,jo),Jr.subVectors($o,qo),js.subVectors(jo,$o);let t=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-js.z,js.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,js.z,0,-js.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-js.y,js.x,0];return!kh(t,jo,qo,$o,Rc)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,jo,qo,$o,Rc))?!1:(bc.crossVectors(Qr,Jr),t=[bc.x,bc.y,bc.z],kh(t,jo,qo,$o,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ar=[new j,new j,new j,new j,new j,new j,new j,new j],Zi=new j,Cc=new Yu,jo=new j,qo=new j,$o=new j,Qr=new j,Jr=new j,js=new j,Tl=new j,Rc=new j,bc=new j,qs=new j;function kh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qs.fromArray(n,s);const a=r.x*Math.abs(qs.x)+r.y*Math.abs(qs.y)+r.z*Math.abs(qs.z),l=e.dot(qs),u=t.dot(qs),c=i.dot(qs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const bR=new Yu,wl=new j,zh=new j;class Dd{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wl.subVectors(e,this.center);const t=wl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wl.copy(e.center).add(zh)),this.expandByPoint(wl.copy(e.center).sub(zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cr=new j,Bh=new j,Pc=new j,es=new j,Hh=new j,Lc=new j,Gh=new j;class og{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Bh.copy(e).add(t).multiplyScalar(.5),Pc.copy(t).sub(e).normalize(),es.copy(this.origin).sub(Bh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pc),a=es.dot(this.direction),l=-es.dot(Pc),u=es.lengthSq(),c=Math.abs(1-o*o);let d,h,p,g;if(c>0)if(d=o*l-a,h=o*a-l,g=s*c,d>=0)if(h>=-g)if(h<=g){const m=1/c;d*=m,h*=m,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Bh).addScaledVector(Pc,h),p}intersectSphere(e,t){Cr.subVectors(e.center,this.origin);const i=Cr.dot(this.direction),r=Cr.dot(Cr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,i,r,s){Hh.subVectors(t,e),Lc.subVectors(i,e),Gh.crossVectors(Hh,Lc);let o=this.direction.dot(Gh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);const l=a*this.direction.dot(Lc.crossVectors(es,Lc));if(l<0)return null;const u=a*this.direction.dot(Hh.cross(es));if(u<0||l+u>o)return null;const c=-a*es.dot(Gh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,g,m,_){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,g,m,_)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,g,m,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=m,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ko.setFromMatrixColumn(e,0).length(),s=1/Ko.setFromMatrixColumn(e,1).length(),o=1/Ko.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,g=a*c,m=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+g*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,g=u*c,m=u*d;t[0]=h+m*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,g=u*c,m=u*d;t[0]=h-m*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,g=a*c,m=a*d;t[0]=l*c,t[4]=g*u-p,t[8]=h*u+m,t[1]=l*d,t[5]=m*u+h,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,m=a*u;t[0]=l*c,t[4]=m-h*d,t[8]=g*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+g,t[10]=h-m*d}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,m=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+m,t[5]=o*c,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*c,t[10]=m*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PR,e,LR)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ts.crossVectors(i,ci),ts.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ts.crossVectors(i,ci)),ts.normalize(),Dc.crossVectors(ci,ts),r[0]=ts.x,r[4]=Dc.x,r[8]=ci.x,r[1]=ts.y,r[5]=Dc.y,r[9]=ci.y,r[2]=ts.z,r[6]=Dc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],g=i[2],m=i[6],_=i[10],f=i[14],v=i[3],x=i[7],y=i[11],T=i[15],w=r[0],M=r[4],P=r[8],S=r[12],E=r[1],I=r[5],N=r[9],Z=r[13],L=r[2],O=r[6],B=r[10],G=r[14],U=r[3],F=r[7],R=r[11],K=r[15];return s[0]=o*w+a*E+l*L+u*U,s[4]=o*M+a*I+l*O+u*F,s[8]=o*P+a*N+l*B+u*R,s[12]=o*S+a*Z+l*G+u*K,s[1]=c*w+d*E+h*L+p*U,s[5]=c*M+d*I+h*O+p*F,s[9]=c*P+d*N+h*B+p*R,s[13]=c*S+d*Z+h*G+p*K,s[2]=g*w+m*E+_*L+f*U,s[6]=g*M+m*I+_*O+f*F,s[10]=g*P+m*N+_*B+f*R,s[14]=g*S+m*Z+_*G+f*K,s[3]=v*w+x*E+y*L+T*U,s[7]=v*M+x*I+y*O+T*F,s[11]=v*P+x*N+y*B+T*R,s[15]=v*S+x*Z+y*G+T*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],g=e[3],m=e[7],_=e[11],f=e[15];return g*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+_*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],g=e[12],m=e[13],_=e[14],f=e[15],v=d*_*u-m*h*u+m*l*p-a*_*p-d*l*f+a*h*f,x=g*h*u-c*_*u-g*l*p+o*_*p+c*l*f-o*h*f,y=c*m*u-g*d*u+g*a*p-o*m*p-c*a*f+o*d*f,T=g*d*l-c*m*l-g*a*h+o*m*h+c*a*_-o*d*_,w=t*v+i*x+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(m*h*s-d*_*s-m*r*p+i*_*p+d*r*f-i*h*f)*M,e[2]=(a*_*s-m*l*s+m*r*u-i*_*u-a*r*f+i*l*f)*M,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*_*s-g*h*s+g*r*p-t*_*p-c*r*f+t*h*f)*M,e[6]=(g*l*s-o*_*s-g*r*u+t*_*u+o*r*f-t*l*f)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(g*d*s-c*m*s-g*i*p+t*m*p+c*i*f-t*d*f)*M,e[10]=(o*m*s-g*a*s+g*i*u-t*m*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=T*M,e[13]=(c*m*r-g*d*r+g*i*h-t*m*h-c*i*_+t*d*_)*M,e[14]=(g*a*r-o*m*r-g*i*l+t*m*l+o*i*_-t*a*_)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,g=s*d,m=o*c,_=o*d,f=a*d,v=l*u,x=l*c,y=l*d,T=i.x,w=i.y,M=i.z;return r[0]=(1-(m+f))*T,r[1]=(p+y)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+f))*w,r[6]=(_+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(_-v)*M,r[10]=(1-(h+m))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ko.set(r[0],r[1],r[2]).length();const o=Ko.set(r[4],r[5],r[6]).length(),a=Ko.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qi.copy(this);const u=1/s,c=1/o,d=1/a;return Qi.elements[0]*=u,Qi.elements[1]*=u,Qi.elements[2]*=u,Qi.elements[4]*=c,Qi.elements[5]*=c,Qi.elements[6]*=c,Qi.elements[8]*=d,Qi.elements[9]*=d,Qi.elements[10]*=d,t.setFromRotationMatrix(Qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Br){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,g;if(a===Br)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ad)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Br){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let g,m;if(a===Br)g=(o+s)*d,m=-2*d;else if(a===ad)g=s*d,m=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ko=new j,Qi=new cn,PR=new j(0,0,0),LR=new j(1,1,1),ts=new j,Dc=new j,ci=new j,qv=new cn,$v=new Xu;class Ud{constructor(e=0,t=0,i=0,r=Ud.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $v.setFromEuler(this),this.setFromQuaternion($v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ud.DEFAULT_ORDER="XYZ";class ag{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DR=0;const Kv=new j,Zo=new Xu,Rr=new cn,Uc=new j,Al=new j,UR=new j,NR=new Xu,Zv=new j(1,0,0),Qv=new j(0,1,0),Jv=new j(0,0,1),IR={type:"added"},OR={type:"removed"};class ai extends ul{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DR++}),this.uuid=Wu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new j,t=new Ud,i=new Xu,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new it}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.multiply(Zo),this}rotateOnWorldAxis(e,t){return Zo.setFromAxisAngle(e,t),this.quaternion.premultiply(Zo),this}rotateX(e){return this.rotateOnAxis(Zv,e)}rotateY(e){return this.rotateOnAxis(Qv,e)}rotateZ(e){return this.rotateOnAxis(Jv,e)}translateOnAxis(e,t){return Kv.copy(e).applyQuaternion(this.quaternion),this.position.add(Kv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zv,e)}translateY(e){return this.translateOnAxis(Qv,e)}translateZ(e){return this.translateOnAxis(Jv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uc.copy(e):Uc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(Al,Uc,this.up):Rr.lookAt(Uc,Al,this.up),this.quaternion.setFromRotationMatrix(Rr),r&&(Rr.extractRotation(r.matrixWorld),Zo.setFromRotationMatrix(Rr),this.quaternion.premultiply(Zo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(IR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(OR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,UR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,NR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ai.DEFAULT_UP=new j(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new j,br=new j,Vh=new j,Pr=new j,Qo=new j,Jo=new j,ex=new j,Wh=new j,Xh=new j,Yh=new j;let Nc=!1;class rr{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ji.subVectors(e,t),r.cross(Ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ji.subVectors(r,t),br.subVectors(i,t),Vh.subVectors(e,t);const o=Ji.dot(Ji),a=Ji.dot(br),l=Ji.dot(Vh),u=br.dot(br),c=br.dot(Vh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getUV(e,t,i,r,s,o,a,l){return Nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(o,Pr.y),l.addScaledVector(a,Pr.z),l)}static isFrontFacing(e,t,i,r){return Ji.subVectors(i,t),br.subVectors(e,t),Ji.cross(br).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Ji.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Nc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nc=!0),rr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return rr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Qo.subVectors(r,i),Jo.subVectors(s,i),Wh.subVectors(e,i);const l=Qo.dot(Wh),u=Jo.dot(Wh);if(l<=0&&u<=0)return t.copy(i);Xh.subVectors(e,r);const c=Qo.dot(Xh),d=Jo.dot(Xh);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Qo,o);Yh.subVectors(e,s);const p=Qo.dot(Yh),g=Jo.dot(Yh);if(g>=0&&p<=g)return t.copy(s);const m=p*u-l*g;if(m<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Jo,a);const _=c*g-p*d;if(_<=0&&d-c>=0&&p-g>=0)return ex.subVectors(s,r),a=(d-c)/(d-c+(p-g)),t.copy(r).addScaledVector(ex,a);const f=1/(_+m+h);return o=m*f,a=h*f,t.copy(i).addScaledVector(Qo,o).addScaledVector(Jo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const UE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function jh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=MR(e,1),t=$n(t,0,1),i=$n(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=jh(o,s,e+1/3),this.g=jh(o,s,e),this.b=jh(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=UE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=Ih(e.r),this.g=Ih(e.g),this.b=Ih(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return yt.fromWorkingColorSpace(En.copy(this),e),Math.round($n(En.r*255,0,255))*65536+Math.round($n(En.g*255,0,255))*256+Math.round($n(En.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=hn){yt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,r=En.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Ic);const i=Uh(ns.h,Ic.h,t),r=Uh(ns.s,Ic.s,t),s=Uh(ns.l,Ic.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ut;ut.NAMES=UE;let FR=0;class ju extends ul{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FR++}),this.uuid=Wu(),this.name="",this.type="Material",this.blending=Ha,this.side=ks,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ym,this.blendDst=Sm,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=id,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xo,this.stencilZFail=Xo,this.stencilZPass=Xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ha&&(i.blending=this.blending),this.side!==ks&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ym&&(i.blendSrc=this.blendSrc),this.blendDst!==Sm&&(i.blendDst=this.blendDst),this.blendEquation!==ro&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==id&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wa extends ju{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new j,Oc=new ht;class Ti{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oc.fromBufferAttribute(this,t),Oc.applyMatrix3(e),this.setXY(t,Oc.x,Oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=El(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=El(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=El(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=El(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=El(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hv&&(e.usage=this.usage),e}}class NE extends Ti{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class IE extends Ti{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wi extends Ti{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kR=0;const Di=new cn,qh=new ai,ea=new j,fi=new Yu,Cl=new Yu,sn=new j;class $i extends ul{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=Wu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bE(e)?IE:NE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return qh.lookAt(e),qh.updateMatrix(),this.applyMatrix4(qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Cl.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(fi.min,Cl.min),fi.expandByPoint(sn),sn.addVectors(fi.max,Cl.max),fi.expandByPoint(sn)):(fi.expandByPoint(Cl.min),fi.expandByPoint(Cl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)sn.fromBufferAttribute(a,u),l&&(ea.fromBufferAttribute(e,u),sn.add(ea)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new j,c[E]=new j;const d=new j,h=new j,p=new j,g=new ht,m=new ht,_=new ht,f=new j,v=new j;function x(E,I,N){d.fromArray(r,E*3),h.fromArray(r,I*3),p.fromArray(r,N*3),g.fromArray(o,E*2),m.fromArray(o,I*2),_.fromArray(o,N*2),h.sub(d),p.sub(d),m.sub(g),_.sub(g);const Z=1/(m.x*_.y-_.x*m.y);isFinite(Z)&&(f.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(Z),v.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(Z),u[E].add(f),u[I].add(f),u[N].add(f),c[E].add(v),c[I].add(v),c[N].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,I=y.length;E<I;++E){const N=y[E],Z=N.start,L=N.count;for(let O=Z,B=Z+L;O<B;O+=3)x(i[O+0],i[O+1],i[O+2])}const T=new j,w=new j,M=new j,P=new j;function S(E){M.fromArray(s,E*3),P.copy(M);const I=u[E];T.copy(I),T.sub(M.multiplyScalar(M.dot(I))).normalize(),w.crossVectors(P,I);const Z=w.dot(c[E])<0?-1:1;l[E*4]=T.x,l[E*4+1]=T.y,l[E*4+2]=T.z,l[E*4+3]=Z}for(let E=0,I=y.length;E<I;++E){const N=y[E],Z=N.start,L=N.count;for(let O=Z,B=Z+L;O<B;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,u=new j,c=new j,d=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),m=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,_),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,_),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let m=0,_=l.length;m<_;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let f=0;f<c;f++)h[g++]=u[p++]}return new Ti(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tx=new cn,$s=new og,Fc=new Dd,nx=new j,ta=new j,na=new j,ia=new j,$h=new j,kc=new j,zc=new ht,Bc=new ht,Hc=new ht,ix=new j,rx=new j,sx=new j,Gc=new j,Vc=new j;class Wi extends ai{constructor(e=new $i,t=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&($h.fromBufferAttribute(d,e),o?kc.addScaledVector($h,c):kc.addScaledVector($h.sub(t),c))}t.add(kc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(s),$s.copy(e.ray).recast(e.near),!(Fc.containsPoint($s.origin)===!1&&($s.intersectSphere(Fc,nx)===null||$s.origin.distanceToSquared(nx)>(e.far-e.near)**2))&&(tx.copy(s).invert(),$s.copy(e.ray).applyMatrix4(tx),!(i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=h.length;g<m;g++){const _=h[g],f=o[_.materialIndex],v=Math.max(_.start,p.start),x=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=Wc(this,f,e,i,u,c,d,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let _=g,f=m;_<f;_+=3){const v=a.getX(_),x=a.getX(_+1),y=a.getX(_+2);r=Wc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=h.length;g<m;g++){const _=h[g],f=o[_.materialIndex],v=Math.max(_.start,p.start),x=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=y,M=y+1,P=y+2;r=Wc(this,f,e,i,u,c,d,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let _=g,f=m;_<f;_+=3){const v=_,x=_+1,y=_+2;r=Wc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function zR(n,e,t,i,r,s,o,a){let l;if(e.side===si?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ks,a),l===null)return null;Vc.copy(a),Vc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Vc);return u<t.near||u>t.far?null:{distance:u,point:Vc.clone(),object:n}}function Wc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ta),n.getVertexPosition(l,na),n.getVertexPosition(u,ia);const c=zR(n,e,t,i,ta,na,ia,Gc);if(c){r&&(zc.fromBufferAttribute(r,a),Bc.fromBufferAttribute(r,l),Hc.fromBufferAttribute(r,u),c.uv=rr.getInterpolation(Gc,ta,na,ia,zc,Bc,Hc,new ht)),s&&(zc.fromBufferAttribute(s,a),Bc.fromBufferAttribute(s,l),Hc.fromBufferAttribute(s,u),c.uv1=rr.getInterpolation(Gc,ta,na,ia,zc,Bc,Hc,new ht),c.uv2=c.uv1),o&&(ix.fromBufferAttribute(o,a),rx.fromBufferAttribute(o,l),sx.fromBufferAttribute(o,u),c.normal=rr.getInterpolation(Gc,ta,na,ia,ix,rx,sx,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new j,materialIndex:0};rr.getNormal(ta,na,ia,d.normal),c.face=d}return c}class qu extends $i{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wi(u,3)),this.setAttribute("normal",new wi(c,3)),this.setAttribute("uv",new wi(d,2));function g(m,_,f,v,x,y,T,w,M,P,S){const E=y/M,I=T/P,N=y/2,Z=T/2,L=w/2,O=M+1,B=P+1;let G=0,U=0;const F=new j;for(let R=0;R<B;R++){const K=R*I-Z;for(let Q=0;Q<O;Q++){const q=Q*E-N;F[m]=q*v,F[_]=K*x,F[f]=L,u.push(F.x,F.y,F.z),F[m]=0,F[_]=0,F[f]=w>0?1:-1,c.push(F.x,F.y,F.z),d.push(Q/M),d.push(1-R/P),G+=1}}for(let R=0;R<P;R++)for(let K=0;K<M;K++){const Q=h+K+O*R,q=h+K+O*(R+1),$=h+(K+1)+O*(R+1),re=h+(K+1)+O*R;l.push(Q,q,re),l.push(q,$,re),U+=6}a.addGroup(p,U,S),p+=U,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const i=sl(n[t]);for(const r in i)e[r]=i[r]}return e}function BR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function OE(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const HR={clone:sl,merge:Nn};var GR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Io extends ju{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GR,this.fragmentShader=VR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sl(e.uniforms),this.uniformsGroups=BR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class FE extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Br}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ki extends FE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cm*2*Math.atan(Math.tan(Dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ra=-90,sa=1;class WR extends ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ki(ra,sa,e,t);r.layers=this.layers,this.add(r);const s=new ki(ra,sa,e,t);s.layers=this.layers,this.add(s);const o=new ki(ra,sa,e,t);o.layers=this.layers,this.add(o);const a=new ki(ra,sa,e,t);a.layers=this.layers,this.add(a);const l=new ki(ra,sa,e,t);l.layers=this.layers,this.add(l);const u=new ki(ra,sa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Br)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ad)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kE extends oi{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:nl,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XR extends No{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ou("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===wo?hn:Bi),this.texture=new kE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qu(5,5,5),s=new Io({name:"CubemapFromEquirect",uniforms:sl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:bs});s.uniforms.tEquirect.value=t;const o=new Wi(r,s),a=t.minFilter;return t.minFilter===Iu&&(t.minFilter=qn),new WR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Kh=new j,YR=new j,jR=new it;class os{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Kh.subVectors(i,t).cross(YR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Kh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jR.getNormalMatrix(e),r=this.coplanarPoint(Kh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new Dd,Xc=new j;class zE{constructor(e=new os,t=new os,i=new os,r=new os,s=new os,o=new os){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Br){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],g=r[9],m=r[10],_=r[11],f=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,_-p,y-f).normalize(),i[1].setComponents(l+s,h+u,_+p,y+f).normalize(),i[2].setComponents(l+o,h+c,_+g,y+v).normalize(),i[3].setComponents(l-o,h-c,_-g,y-v).normalize(),i[4].setComponents(l-a,h-d,_-m,y-x).normalize(),t===Br)i[5].setComponents(l+a,h+d,_+m,y+x).normalize();else if(t===ad)i[5].setComponents(a,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xc.x=r.normal.x>0?e.max.x:e.min.x,Xc.y=r.normal.y>0?e.max.y:e.min.y,Xc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function BE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qR(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,d,h),u.onUploadCallback();let m;if(d instanceof Float32Array)m=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)m=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)m=n.SHORT;else if(d instanceof Uint32Array)m=n.UNSIGNED_INT;else if(d instanceof Int32Array)m=n.INT;else if(d instanceof Int8Array)m=n.BYTE;else if(d instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:m,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,g=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let m=0,_=g.length;m<_;m++){const f=g[m];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class lg extends $i{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],g=[],m=[],_=[];for(let f=0;f<c;f++){const v=f*h-o;for(let x=0;x<u;x++){const y=x*d-s;g.push(y,-v,0),m.push(0,0,1),_.push(x/a),_.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+u*f,y=v+u*(f+1),T=v+1+u*(f+1),w=v+1+u*f;p.push(x,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new wi(g,3)),this.setAttribute("normal",new wi(m,3)),this.setAttribute("uv",new wi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lg(e.width,e.height,e.widthSegments,e.heightSegments)}}var $R=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KR=`#ifdef USE_ALPHAHASH
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
#endif`,ZR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JR=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tb=`#ifdef USE_AOMAP
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
#endif`,nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ib=`#ifdef USE_BATCHING
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
#endif`,rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ab=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lb=`#ifdef USE_IRIDESCENCE
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
#endif`,ub=`#ifdef USE_BUMPMAP
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vb=`#define PI 3.141592653589793
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
} // validated`,xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yb=`vec3 transformedNormal = objectNormal;
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
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ab=`
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
}`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ob=`#ifdef USE_GRADIENTMAP
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
}`,Fb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hb=`uniform bool receiveShadow;
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
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jb=`PhysicalMaterial material;
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
#endif`,qb=`struct PhysicalMaterial {
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
}`,$b=`
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sP=`#if defined( USE_POINTS_UV )
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
#endif`,oP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uP=`#ifdef USE_MORPHNORMALS
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
#endif`,cP=`#ifdef USE_MORPHTARGETS
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
#endif`,fP=`#ifdef USE_MORPHTARGETS
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
#endif`,dP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_P=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gP=`#ifdef USE_NORMALMAP
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
#endif`,vP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UP=`float getShadowMask() {
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
}`,NP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IP=`#ifdef USE_SKINNING
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
#endif`,OP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FP=`#ifdef USE_SKINNING
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
#endif`,kP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GP=`#ifdef USE_TRANSMISSION
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
#endif`,VP=`#ifdef USE_TRANSMISSION
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
#endif`,WP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$P=`uniform sampler2D t2D;
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
}`,KP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`#include <common>
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
}`,t2=`#if DEPTH_PACKING == 3200
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
}`,n2=`#define DISTANCE
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
}`,i2=`#define DISTANCE
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`uniform float scale;
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
}`,a2=`uniform vec3 diffuse;
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
}`,l2=`#include <common>
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
}`,u2=`uniform vec3 diffuse;
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
}`,c2=`#define LAMBERT
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
}`,f2=`#define LAMBERT
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
}`,d2=`#define MATCAP
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
}`,h2=`#define MATCAP
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
}`,p2=`#define NORMAL
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
}`,m2=`#define NORMAL
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
}`,_2=`#define PHONG
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
}`,g2=`#define PHONG
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
}`,v2=`#define STANDARD
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
}`,x2=`#define STANDARD
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
}`,y2=`#define TOON
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
}`,S2=`#define TOON
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
}`,M2=`uniform float size;
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
}`,E2=`uniform vec3 diffuse;
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
}`,T2=`#include <common>
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
}`,w2=`uniform vec3 color;
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
}`,A2=`uniform float rotation;
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
}`,C2=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:$R,alphahash_pars_fragment:KR,alphamap_fragment:ZR,alphamap_pars_fragment:QR,alphatest_fragment:JR,alphatest_pars_fragment:eb,aomap_fragment:tb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:rb,begin_vertex:sb,beginnormal_vertex:ob,bsdfs:ab,iridescence_fragment:lb,bumpmap_pars_fragment:ub,clipping_planes_fragment:cb,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:db,clipping_planes_vertex:hb,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:_b,color_vertex:gb,common:vb,cube_uv_reflection_fragment:xb,defaultnormal_vertex:yb,displacementmap_pars_vertex:Sb,displacementmap_vertex:Mb,emissivemap_fragment:Eb,emissivemap_pars_fragment:Tb,colorspace_fragment:wb,colorspace_pars_fragment:Ab,envmap_fragment:Cb,envmap_common_pars_fragment:Rb,envmap_pars_fragment:bb,envmap_pars_vertex:Pb,envmap_physical_pars_fragment:Gb,envmap_vertex:Lb,fog_vertex:Db,fog_pars_vertex:Ub,fog_fragment:Nb,fog_pars_fragment:Ib,gradientmap_pars_fragment:Ob,lightmap_fragment:Fb,lightmap_pars_fragment:kb,lights_lambert_fragment:zb,lights_lambert_pars_fragment:Bb,lights_pars_begin:Hb,lights_toon_fragment:Vb,lights_toon_pars_fragment:Wb,lights_phong_fragment:Xb,lights_phong_pars_fragment:Yb,lights_physical_fragment:jb,lights_physical_pars_fragment:qb,lights_fragment_begin:$b,lights_fragment_maps:Kb,lights_fragment_end:Zb,logdepthbuf_fragment:Qb,logdepthbuf_pars_fragment:Jb,logdepthbuf_pars_vertex:eP,logdepthbuf_vertex:tP,map_fragment:nP,map_pars_fragment:iP,map_particle_fragment:rP,map_particle_pars_fragment:sP,metalnessmap_fragment:oP,metalnessmap_pars_fragment:aP,morphcolor_vertex:lP,morphnormal_vertex:uP,morphtarget_pars_vertex:cP,morphtarget_vertex:fP,normal_fragment_begin:dP,normal_fragment_maps:hP,normal_pars_fragment:pP,normal_pars_vertex:mP,normal_vertex:_P,normalmap_pars_fragment:gP,clearcoat_normal_fragment_begin:vP,clearcoat_normal_fragment_maps:xP,clearcoat_pars_fragment:yP,iridescence_pars_fragment:SP,opaque_fragment:MP,packing:EP,premultiplied_alpha_fragment:TP,project_vertex:wP,dithering_fragment:AP,dithering_pars_fragment:CP,roughnessmap_fragment:RP,roughnessmap_pars_fragment:bP,shadowmap_pars_fragment:PP,shadowmap_pars_vertex:LP,shadowmap_vertex:DP,shadowmask_pars_fragment:UP,skinbase_vertex:NP,skinning_pars_vertex:IP,skinning_vertex:OP,skinnormal_vertex:FP,specularmap_fragment:kP,specularmap_pars_fragment:zP,tonemapping_fragment:BP,tonemapping_pars_fragment:HP,transmission_fragment:GP,transmission_pars_fragment:VP,uv_pars_fragment:WP,uv_pars_vertex:XP,uv_vertex:YP,worldpos_vertex:jP,background_vert:qP,background_frag:$P,backgroundCube_vert:KP,backgroundCube_frag:ZP,cube_vert:QP,cube_frag:JP,depth_vert:e2,depth_frag:t2,distanceRGBA_vert:n2,distanceRGBA_frag:i2,equirect_vert:r2,equirect_frag:s2,linedashed_vert:o2,linedashed_frag:a2,meshbasic_vert:l2,meshbasic_frag:u2,meshlambert_vert:c2,meshlambert_frag:f2,meshmatcap_vert:d2,meshmatcap_frag:h2,meshnormal_vert:p2,meshnormal_frag:m2,meshphong_vert:_2,meshphong_frag:g2,meshphysical_vert:v2,meshphysical_frag:x2,meshtoon_vert:y2,meshtoon_frag:S2,points_vert:M2,points_frag:E2,shadow_vert:T2,shadow_frag:w2,sprite_vert:A2,sprite_frag:C2},xe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},mr={basic:{uniforms:Nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ut(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Nn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Nn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ut(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Nn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Nn([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Nn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Nn([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Nn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Nn([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Nn([xe.common,xe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Nn([xe.lights,xe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};mr.physical={uniforms:Nn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Yc={r:0,b:0,g:0};function R2(n,e,t,i,r,s,o){const a=new ut(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function g(_,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?m(a,l):x&&x.isColor&&(m(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Pd)?(c===void 0&&(c=new Wi(new qu(1,1,1),new Io({name:"BackgroundCubeMaterial",uniforms:sl(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Wi(new lg(2,2),new Io({name:"BackgroundMaterial",uniforms:sl(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:ks,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function m(_,f){_.getRGB(Yc,OE(n)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(_,f=1){a.set(_),l=f,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,m(a,l)},render:g}}function b2(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=_(null);let u=l,c=!1;function d(L,O,B,G,U){let F=!1;if(o){const R=m(G,B,O);u!==R&&(u=R,p(u.object)),F=f(L,G,B,U),F&&v(L,G,B,U)}else{const R=O.wireframe===!0;(u.geometry!==G.id||u.program!==B.id||u.wireframe!==R)&&(u.geometry=G.id,u.program=B.id,u.wireframe=R,F=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,P(L,O,B,G),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,O,B){const G=B.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let F=U[O.id];F===void 0&&(F={},U[O.id]=F);let R=F[G];return R===void 0&&(R=_(h()),F[G]=R),R}function _(L){const O=[],B=[],G=[];for(let U=0;U<r;U++)O[U]=0,B[U]=0,G[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:G,object:L,attributes:{},index:null}}function f(L,O,B,G){const U=u.attributes,F=O.attributes;let R=0;const K=B.getAttributes();for(const Q in K)if(K[Q].location>=0){const $=U[Q];let re=F[Q];if(re===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;R++}return u.attributesNum!==R||u.index!==G}function v(L,O,B,G){const U={},F=O.attributes;let R=0;const K=B.getAttributes();for(const Q in K)if(K[Q].location>=0){let $=F[Q];$===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const re={};re.attribute=$,$&&$.data&&(re.data=$.data),U[Q]=re,R++}u.attributes=U,u.attributesNum=R,u.index=G}function x(){const L=u.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function y(L){T(L,0)}function T(L,O){const B=u.newAttributes,G=u.enabledAttributes,U=u.attributeDivisors;B[L]=1,G[L]===0&&(n.enableVertexAttribArray(L),G[L]=1),U[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),U[L]=O)}function w(){const L=u.newAttributes,O=u.enabledAttributes;for(let B=0,G=O.length;B<G;B++)O[B]!==L[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function M(L,O,B,G,U,F,R){R===!0?n.vertexAttribIPointer(L,O,B,U,F):n.vertexAttribPointer(L,O,B,G,U,F)}function P(L,O,B,G){if(i.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const U=G.attributes,F=B.getAttributes(),R=O.defaultAttributeValues;for(const K in F){const Q=F[K];if(Q.location>=0){let q=U[K];if(q===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const $=q.normalized,re=q.itemSize,ge=t.get(q);if(ge===void 0)continue;const me=ge.buffer,Le=ge.type,De=ge.bytesPerElement,Ie=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||q.gpuType===yE);if(q.isInterleavedBufferAttribute){const We=q.data,H=We.stride,ce=q.offset;if(We.isInstancedInterleavedBuffer){for(let ae=0;ae<Q.locationSize;ae++)T(Q.location+ae,We.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ae=0;ae<Q.locationSize;ae++)y(Q.location+ae);n.bindBuffer(n.ARRAY_BUFFER,me);for(let ae=0;ae<Q.locationSize;ae++)M(Q.location+ae,re/Q.locationSize,Le,$,H*De,(ce+re/Q.locationSize*ae)*De,Ie)}else{if(q.isInstancedBufferAttribute){for(let We=0;We<Q.locationSize;We++)T(Q.location+We,q.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let We=0;We<Q.locationSize;We++)y(Q.location+We);n.bindBuffer(n.ARRAY_BUFFER,me);for(let We=0;We<Q.locationSize;We++)M(Q.location+We,re/Q.locationSize,Le,$,re*De,re/Q.locationSize*We*De,Ie)}}else if(R!==void 0){const $=R[K];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(Q.location,$);break;case 3:n.vertexAttrib3fv(Q.location,$);break;case 4:n.vertexAttrib4fv(Q.location,$);break;default:n.vertexAttrib1fv(Q.location,$)}}}}w()}function S(){N();for(const L in a){const O=a[L];for(const B in O){const G=O[B];for(const U in G)g(G[U].object),delete G[U];delete O[B]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const B in O){const G=O[B];for(const U in G)g(G[U].object),delete G[U];delete O[B]}delete a[L.id]}function I(L){for(const O in a){const B=a[O];if(B[L.id]===void 0)continue;const G=B[L.id];for(const U in G)g(G[U].object),delete G[U];delete B[L.id]}}function N(){Z(),c=!0,u!==l&&(u=l,p(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function P2(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,d,h),t.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(c[g],d[g]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let g=0;for(let m=0;m<h;m++)g+=d[m];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function L2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),T=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:_,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function D2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new os,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,m=d.clipIntersection,_=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!_)s?c(null):u();else{const v=s?0:i,x=v*4;let y=f.clippingState||null;l.value=y,y=c(g,h,x,p);for(let T=0;T!==x;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,g){const m=d!==null?d.length:0;let _=null;if(m!==0){if(_=l.value,g!==!0||_===null){const f=p+m*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(_===null||_.length<f)&&(_=new Float32Array(f));for(let x=0,y=p;x!==m;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,_}}function U2(n){let e=new WeakMap;function t(o,a){return a===Mm?o.mapping=nl:a===Em&&(o.mapping=il),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mm||a===Em)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new XR(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class N2 extends FE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Aa=4,ox=[.125,.215,.35,.446,.526,.582],so=20,Zh=new N2,ax=new ut;let Qh=null,Jh=0,ep=0;const no=(1+Math.sqrt(5))/2,oa=1/no,lx=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,no,oa),new j(0,no,-oa),new j(oa,0,no),new j(-oa,0,no),new j(no,oa,0),new j(-no,oa,0)];class ux{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qh,Jh,ep),e.scissorTest=!1,jc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nl||e.mapping===il?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ou,format:or,colorSpace:$r,depthBuffer:!1},r=cx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I2(s)),this._blurMaterial=O2(s,e,t)}return r}_compileMaterial(e){const t=new Wi(this._lodPlanes[0],e);this._renderer.compile(t,Zh)}_sceneToCubeUV(e,t,i,r){const a=new ki(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(ax),c.toneMapping=Ps,c.autoClear=!1;const p=new wa({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1}),g=new Wi(new qu,p);let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(ax),m=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;jc(r,v*x,f>2?x:0,x,x),c.setRenderTarget(r),m&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===nl||e.mapping===il;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;jc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lx[(r-1)%lx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Wi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*so-1),m=s/g,_=isFinite(s)?1+Math.floor(c*m):so;_>so&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${so}`);const f=[];let v=0;for(let M=0;M<so;++M){const P=M/m,S=Math.exp(-P*P/2);f.push(S),M===0?v+=S:M<_&&(v+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-Aa?r-x+Aa:0),w=4*(this._cubeSize-y);jc(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(d,Zh)}}function I2(n){const e=[],t=[],i=[];let r=n;const s=n-Aa+1+ox.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Aa?l=ox[o-n+Aa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,m=3,_=2,f=1,v=new Float32Array(m*g*p),x=new Float32Array(_*g*p),y=new Float32Array(f*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,P=w>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,m*g*w),x.set(h,_*g*w);const E=[w,w,w,w,w,w];y.set(E,f*g*w)}const T=new $i;T.setAttribute("position",new Ti(v,m)),T.setAttribute("uv",new Ti(x,_)),T.setAttribute("faceIndex",new Ti(y,f)),e.push(T),r>Aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function cx(n,e,t){const i=new No(n,e,t);return i.texture.mapping=Pd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function O2(n,e,t){const i=new Float32Array(so),r=new j(0,1,0);return new Io({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ug(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function fx(){return new Io({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ug(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function dx(){return new Io({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ug(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function ug(){return`

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
	`}function F2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Mm||l===Em,c=l===nl||l===il;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ux(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new ux(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function k2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function z2(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const m=h.morphAttributes[g];for(let _=0,f=m.length;_<f;_++)e.remove(m[_])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const m=p[g];for(let _=0,f=m.length;_<f;_++)e.update(m[_],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,g=d.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],w=v[x+1],M=v[x+2];h.push(T,w,w,M,M,T)}}else if(g!==void 0){const v=g.array;m=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,w=x+1,M=x+2;h.push(T,w,w,M,M,T)}}else return;const _=new(bE(h)?IE:NE)(h,1);_.version=m;const f=s.get(d);f&&e.remove(f),s.set(d,_)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function B2(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function d(p,g,m){if(m===0)return;let _,f;if(r)_=n,f="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[f](s,g,a,p*l,m),t.update(g,s,m)}function h(p,g,m){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let f=0;f<m;f++)this.render(p[f]/l,g[f]);else{_.multiDrawElementsWEBGL(s,g,0,a,p,0,m);let f=0;for(let v=0;v<m;v++)f+=g[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function H2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function G2(n,e){return n[0]-e[0]}function V2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function W2(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new mn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=g!==void 0?g.length:0;let _=s.get(c);if(_===void 0||_.count!==m){let O=function(){Z.dispose(),s.delete(c),c.removeEventListener("dispose",O)};var p=O;_!==void 0&&_.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let E=c.attributes.position.count*S,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*I*4*m),Z=new DE(N,E,I,m);Z.type=gs,Z.needsUpdate=!0;const L=S*4;for(let B=0;B<m;B++){const G=w[B],U=M[B],F=P[B],R=E*I*4*B;for(let K=0;K<G.count;K++){const Q=K*L;x===!0&&(o.fromBufferAttribute(G,K),N[R+Q+0]=o.x,N[R+Q+1]=o.y,N[R+Q+2]=o.z,N[R+Q+3]=0),y===!0&&(o.fromBufferAttribute(U,K),N[R+Q+4]=o.x,N[R+Q+5]=o.y,N[R+Q+6]=o.z,N[R+Q+7]=0),T===!0&&(o.fromBufferAttribute(F,K),N[R+Q+8]=o.x,N[R+Q+9]=o.y,N[R+Q+10]=o.z,N[R+Q+11]=F.itemSize===4?o.w:1)}}_={count:m,texture:Z,size:new ht(E,I)},s.set(c,_),c.addEventListener("dispose",O)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const g=h===void 0?0:h.length;let m=i[c.id];if(m===void 0||m.length!==g){m=[];for(let y=0;y<g;y++)m[y]=[y,0];i[c.id]=m}for(let y=0;y<g;y++){const T=m[y];T[0]=y,T[1]=h[y]}m.sort(V2);for(let y=0;y<8;y++)y<g&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(G2);const _=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],M=T[1];w!==Number.MAX_SAFE_INTEGER&&M?(_&&c.getAttribute("morphTarget"+y)!==_[w]&&c.setAttribute("morphTarget"+y,_[w]),f&&c.getAttribute("morphNormal"+y)!==f[w]&&c.setAttribute("morphNormal"+y,f[w]),r[y]=M,v+=M):(_&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function X2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class HE extends oi{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:To,c!==To&&c!==rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===To&&(i=_s),i===void 0&&c===rl&&(i=Eo),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const GE=new oi,VE=new HE(1,1);VE.compareFunction=RE;const WE=new DE,XE=new RR,YE=new kE,hx=[],px=[],mx=new Float32Array(16),_x=new Float32Array(9),gx=new Float32Array(4);function cl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=hx[r];if(s===void 0&&(s=new Float32Array(r),hx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Nd(n,e){let t=px[e];t===void 0&&(t=new Int32Array(e),px[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Y2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function j2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function q2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function $2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function K2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;gx.set(i),n.uniformMatrix2fv(this.addr,!1,gx),rn(t,i)}}function Z2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;_x.set(i),n.uniformMatrix3fv(this.addr,!1,_x),rn(t,i)}}function Q2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;mx.set(i),n.uniformMatrix4fv(this.addr,!1,mx),rn(t,i)}}function J2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function tL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function nL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function iL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function sL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function oL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function aL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?VE:GE;t.setTexture2D(e||s,r)}function lL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||XE,r)}function uL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||YE,r)}function cL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||WE,r)}function fL(n){switch(n){case 5126:return Y2;case 35664:return j2;case 35665:return q2;case 35666:return $2;case 35674:return K2;case 35675:return Z2;case 35676:return Q2;case 5124:case 35670:return J2;case 35667:case 35671:return eL;case 35668:case 35672:return tL;case 35669:case 35673:return nL;case 5125:return iL;case 36294:return rL;case 36295:return sL;case 36296:return oL;case 35678:case 36198:case 36298:case 36306:case 35682:return aL;case 35679:case 36299:case 36307:return lL;case 35680:case 36300:case 36308:case 36293:return uL;case 36289:case 36303:case 36311:case 36292:return cL}}function dL(n,e){n.uniform1fv(this.addr,e)}function hL(n,e){const t=cl(e,this.size,2);n.uniform2fv(this.addr,t)}function pL(n,e){const t=cl(e,this.size,3);n.uniform3fv(this.addr,t)}function mL(n,e){const t=cl(e,this.size,4);n.uniform4fv(this.addr,t)}function _L(n,e){const t=cl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gL(n,e){const t=cl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function vL(n,e){const t=cl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xL(n,e){n.uniform1iv(this.addr,e)}function yL(n,e){n.uniform2iv(this.addr,e)}function SL(n,e){n.uniform3iv(this.addr,e)}function ML(n,e){n.uniform4iv(this.addr,e)}function EL(n,e){n.uniform1uiv(this.addr,e)}function TL(n,e){n.uniform2uiv(this.addr,e)}function wL(n,e){n.uniform3uiv(this.addr,e)}function AL(n,e){n.uniform4uiv(this.addr,e)}function CL(n,e,t){const i=this.cache,r=e.length,s=Nd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||GE,s[o])}function RL(n,e,t){const i=this.cache,r=e.length,s=Nd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||XE,s[o])}function bL(n,e,t){const i=this.cache,r=e.length,s=Nd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||YE,s[o])}function PL(n,e,t){const i=this.cache,r=e.length,s=Nd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||WE,s[o])}function LL(n){switch(n){case 5126:return dL;case 35664:return hL;case 35665:return pL;case 35666:return mL;case 35674:return _L;case 35675:return gL;case 35676:return vL;case 5124:case 35670:return xL;case 35667:case 35671:return yL;case 35668:case 35672:return SL;case 35669:case 35673:return ML;case 5125:return EL;case 36294:return TL;case 36295:return wL;case 36296:return AL;case 35678:case 36198:case 36298:case 36306:case 35682:return CL;case 35679:case 36299:case 36307:return RL;case 35680:case 36300:case 36308:case 36293:return bL;case 36289:case 36303:case 36311:case 36292:return PL}}class DL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fL(t.type)}}class UL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LL(t.type)}}class NL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const tp=/(\w+)(\])?(\[|\.)?/g;function vx(n,e){n.seq.push(e),n.map[e.id]=e}function IL(n,e,t){const i=n.name,r=i.length;for(tp.lastIndex=0;;){const s=tp.exec(i),o=tp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){vx(t,u===void 0?new DL(a,n,e):new UL(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new NL(a),vx(t,d)),t=d}}}class Sf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);IL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function xx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OL=37297;let FL=0;function kL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function zL(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===od&&t===sd?i="LinearDisplayP3ToLinearSRGB":e===sd&&t===od&&(i="LinearSRGBToLinearDisplayP3"),n){case $r:case Ld:return[i,"LinearTransferOETF"];case hn:case sg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function yx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kL(n.getShaderSource(e),o)}else return r}function BL(n,e){const t=zL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HL(n,e){let t;switch(e){case KC:t="Linear";break;case ZC:t="Reinhard";break;case QC:t="OptimizedCineon";break;case JC:t="ACESFilmic";break;case tR:t="AgX";break;case eR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function GL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ca).join(`
`)}function VL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ca).join(`
`)}function WL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ca(n){return n!==""}function Sx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YL=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(n){return n.replace(YL,qL)}const jL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function qL(n,e){let t=Je[e];if(t===void 0){const i=jL.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bm(t)}const $L=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ex(n){return n.replace($L,KL)}function KL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===gE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===TC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function QL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nl:case il:e="ENVMAP_TYPE_CUBE";break;case Pd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case il:e="ENVMAP_MODE_REFRACTION";break}return e}function eD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vE:e="ENVMAP_BLENDING_MULTIPLY";break;case qC:e="ENVMAP_BLENDING_MIX";break;case $C:e="ENVMAP_BLENDING_ADD";break}return e}function tD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZL(t),u=QL(t),c=JL(t),d=eD(t),h=tD(t),p=t.isWebGL2?"":GL(t),g=VL(t),m=WL(s),_=r.createProgram();let f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ca).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ca).join(`
`),v.length>0&&(v+=`
`)):(f=[Tx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),v=[p,Tx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ps?"#define TONE_MAPPING":"",t.toneMapping!==Ps?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ps?HL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,BL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),o=bm(o),o=Sx(o,t),o=Mx(o,t),a=bm(a),a=Sx(a,t),a=Mx(a,t),o=Ex(o),a=Ex(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Gv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+f+o,T=x+v+a,w=xx(r,r.VERTEX_SHADER,y),M=xx(r,r.FRAGMENT_SHADER,T);r.attachShader(_,w),r.attachShader(_,M),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function P(N){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(w).trim(),O=r.getShaderInfoLog(M).trim();let B=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,w,M);else{const U=yx(r,w,"vertex"),F=yx(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+U+`
`+F)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||O==="")&&(G=!1);G&&(N.diagnostics={runnable:B,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:O,prefix:v}})}r.deleteShader(w),r.deleteShader(M),S=new Sf(r,_),E=XL(r,_)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(_,OL)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=M,this}let iD=0;class rD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sD(e),t.set(e,i)),i}}class sD{constructor(e){this.id=iD++,this.code=e,this.usedTimes=0}}function oD(n,e,t,i,r,s,o){const a=new ag,l=new rD,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return S===0?"uv":`uv${S}`}function _(S,E,I,N,Z){const L=N.fog,O=Z.geometry,B=S.isMeshStandardMaterial?N.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),U=G&&G.mapping===Pd?G.image.height:null,F=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const R=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,K=R!==void 0?R.length:0;let Q=0;O.morphAttributes.position!==void 0&&(Q=1),O.morphAttributes.normal!==void 0&&(Q=2),O.morphAttributes.color!==void 0&&(Q=3);let q,$,re,ge;if(F){const Te=mr[F];q=Te.vertexShader,$=Te.fragmentShader}else q=S.vertexShader,$=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const me=n.getRenderTarget(),Le=Z.isInstancedMesh===!0,De=Z.isBatchedMesh===!0,Ie=!!S.map,We=!!S.matcap,H=!!G,ce=!!S.aoMap,ae=!!S.lightMap,ye=!!S.bumpMap,_e=!!S.normalMap,W=!!S.displacementMap,ze=!!S.emissiveMap,b=!!S.metalnessMap,A=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,ie=S.sheen>0,fe=S.transmission>0,J=z&&!!S.anisotropyMap,se=ne&&!!S.clearcoatMap,Me=ne&&!!S.clearcoatNormalMap,Ue=ne&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,Qe=te&&!!S.iridescenceThicknessMap,be=ie&&!!S.sheenColorMap,Ye=ie&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Se=!!S.specularColorMap,Xe=!!S.specularIntensityMap,Ke=fe&&!!S.transmissionMap,lt=fe&&!!S.thicknessMap,ve=!!S.gradientMap,le=!!S.alphaMap,D=S.alphaTest>0,de=!!S.alphaHash,he=!!S.extensions,Be=!!O.attributes.uv1,Fe=!!O.attributes.uv2,ot=!!O.attributes.uv3;let ft=Ps;return S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ft=n.toneMapping),{isWebGL2:c,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:$,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,instancing:Le,instancingColor:Le&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:$r,map:Ie,matcap:We,envMap:H,envMapMode:H&&G.mapping,envMapCubeUVHeight:U,aoMap:ce,lightMap:ae,bumpMap:ye,normalMap:_e,displacementMap:h&&W,emissiveMap:ze,normalMapObjectSpace:_e&&S.normalMapType===pR,normalMapTangentSpace:_e&&S.normalMapType===hR,metalnessMap:b,roughnessMap:A,anisotropy:z,anisotropyMap:J,clearcoat:ne,clearcoatMap:se,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ue,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Qe,sheen:ie,sheenColorMap:be,sheenRoughnessMap:Ye,specularMap:Ae,specularColorMap:Se,specularIntensityMap:Xe,transmission:fe,transmissionMap:Ke,thicknessMap:lt,gradientMap:ve,opaque:S.transparent===!1&&S.blending===Ha,alphaMap:le,alphaTest:D,alphaHash:de,combine:S.combine,mapUv:Ie&&m(S.map.channel),aoMapUv:ce&&m(S.aoMap.channel),lightMapUv:ae&&m(S.lightMap.channel),bumpMapUv:ye&&m(S.bumpMap.channel),normalMapUv:_e&&m(S.normalMap.channel),displacementMapUv:W&&m(S.displacementMap.channel),emissiveMapUv:ze&&m(S.emissiveMap.channel),metalnessMapUv:b&&m(S.metalnessMap.channel),roughnessMapUv:A&&m(S.roughnessMap.channel),anisotropyMapUv:J&&m(S.anisotropyMap.channel),clearcoatMapUv:se&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Me&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(S.sheenRoughnessMap.channel),specularMapUv:Ae&&m(S.specularMap.channel),specularColorMapUv:Se&&m(S.specularColorMap.channel),specularIntensityMapUv:Xe&&m(S.specularIntensityMap.channel),transmissionMapUv:Ke&&m(S.transmissionMap.channel),thicknessMapUv:lt&&m(S.thicknessMap.channel),alphaMapUv:le&&m(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_e||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Fe,vertexUv3s:ot,pointsUvs:Z.isPoints===!0&&!!O.attributes.uv&&(Ie||le),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zi,flipSided:S.side===si,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=g[S.type];let I;if(E){const N=mr[E];I=HR.clone(N.uniforms)}else I=S.uniforms;return I}function T(S,E){let I;for(let N=0,Z=u.length;N<Z;N++){const L=u[N];if(L.cacheKey===E){I=L,++I.usedTimes;break}}return I===void 0&&(I=new nD(n,E,S,s),u.push(I)),I}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:P}}function aD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function lD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ax(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,g,m,_){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:m,group:_},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=m,f.group=_),e++,f}function a(d,h,p,g,m,_){const f=o(d,h,p,g,m,_);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,g,m,_){const f=o(d,h,p,g,m,_);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||lD),i.length>1&&i.sort(h||wx),r.length>1&&r.sort(h||wx)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function uD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Ax,n.set(i,[o])):r>=s.length?(o=new Ax,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ut};break;case"SpotLight":t={position:new j,direction:new j,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function fD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let dD=0;function hD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pD(n,e){const t=new cD,i=fD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new j);const s=new j,o=new cn,a=new cn;function l(c,d){let h=0,p=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let m=0,_=0,f=0,v=0,x=0,y=0,T=0,w=0,M=0,P=0,S=0;c.sort(hD);const E=d===!0?Math.PI:1;for(let N=0,Z=c.length;N<Z;N++){const L=c[N],O=L.color,B=L.intensity,G=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*B*E,p+=O.g*B*E,g+=O.b*B*E;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],B);S++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const R=L.shadow,K=i.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.directionalShadow[m]=K,r.directionalShadowMap[m]=U,r.directionalShadowMatrix[m]=L.shadow.matrix,y++}r.directional[m]=F,m++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(O).multiplyScalar(B*E),F.distance=G,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[f]=F;const R=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,R.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=R.matrix,L.castShadow){const K=i.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.spotShadow[f]=K,r.spotShadowMap[f]=U,w++}f++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(O).multiplyScalar(B),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=F,v++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),F.distance=L.distance,F.decay=L.decay,L.castShadow){const R=L.shadow,K=i.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,r.pointShadow[_]=K,r.pointShadowMap[_]=U,r.pointShadowMatrix[_]=L.shadow.matrix,T++}r.point[_]=F,_++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(B*E),F.groundColor.copy(L.groundColor).multiplyScalar(B*E),r.hemi[x]=F,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==f||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==M||I.numLightProbes!==S)&&(r.directional.length=m,r.spot.length=f,r.rectArea.length=v,r.point.length=_,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,I.directionalLength=m,I.pointLength=_,I.spotLength=f,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=M,I.numLightProbes=S,r.version=dD++)}function u(c,d){let h=0,p=0,g=0,m=0,_=0;const f=d.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),h++}else if(y.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const T=r.rectArea[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const T=r.hemi[_];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),_++}}}return{setup:l,setupView:u,state:r}}function Cx(n,e){const t=new pD(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function mD(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Cx(n,e),t.set(s,[l])):o>=a.length?(l=new Cx(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class _D extends ju{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gD extends ju{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xD=`uniform sampler2D shadow_pass;
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
}`;function yD(n,e,t){let i=new zE;const r=new ht,s=new ht,o=new mn,a=new _D({depthPacking:dR}),l=new gD,u={},c=t.maxTextureSize,d={[ks]:si,[si]:ks,[zi]:zi},h=new Io({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:vD,fragmentShader:xD}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new $i;g.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Wi(g,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gE;let f=this.type;this.render=function(w,M,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(bs),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Z=f!==Lr&&this.type===Lr,L=f===Lr&&this.type!==Lr;for(let O=0,B=w.length;O<B;O++){const G=w[O],U=G.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const F=U.getFrameExtents();if(r.multiply(F),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,U.mapSize.y=s.y)),U.map===null||Z===!0||L===!0){const K=this.type!==Lr?{minFilter:zn,magFilter:zn}:{};U.map!==null&&U.map.dispose(),U.map=new No(r.x,r.y,K),U.map.texture.name=G.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const R=U.getViewportCount();for(let K=0;K<R;K++){const Q=U.getViewport(K);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),N.viewport(o),U.updateMatrices(G,K),i=U.getFrustum(),y(M,P,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===Lr&&v(U,P),U.needsUpdate=!1}f=this.type,_.needsUpdate=!1,n.setRenderTarget(S,E,I)};function v(w,M){const P=e.update(m);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new No(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,P,h,m,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,P,p,m,null)}function x(w,M,P,S){let E=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)E=I;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=E.uuid,Z=M.uuid;let L=u[N];L===void 0&&(L={},u[N]=L);let O=L[Z];O===void 0&&(O=E.clone(),L[Z]=O,M.addEventListener("dispose",T)),E=O}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Lr?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:d[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=n.properties.get(E);N.light=P}return E}function y(w,M,P,S,E){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Lr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),L=w.material;if(Array.isArray(L)){const O=Z.groups;for(let B=0,G=O.length;B<G;B++){const U=O[B],F=L[U.materialIndex];if(F&&F.visible){const R=x(w,F,S,E);w.onBeforeShadow(n,w,M,P,Z,R,U),n.renderBufferDirect(P,null,Z,R,w,U),w.onAfterShadow(n,w,M,P,Z,R,U)}}}else if(L.visible){const O=x(w,L,S,E);w.onBeforeShadow(n,w,M,P,Z,O,null),n.renderBufferDirect(P,null,Z,O,w,null),w.onAfterShadow(n,w,M,P,Z,O,null)}}const N=w.children;for(let Z=0,L=N.length;Z<L;Z++)y(N[Z],M,P,S,E)}function T(w){w.target.removeEventListener("dispose",T);for(const P in u){const S=u[P],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function SD(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const de=new mn;let he=null;const Be=new mn(0,0,0,0);return{setMask:function(Fe){he!==Fe&&!D&&(n.colorMask(Fe,Fe,Fe,Fe),he=Fe)},setLocked:function(Fe){D=Fe},setClear:function(Fe,ot,ft,Pe,Te){Te===!0&&(Fe*=Pe,ot*=Pe,ft*=Pe),de.set(Fe,ot,ft,Pe),Be.equals(de)===!1&&(n.clearColor(Fe,ot,ft,Pe),Be.copy(de))},reset:function(){D=!1,he=null,Be.set(-1,0,0,0)}}}function s(){let D=!1,de=null,he=null,Be=null;return{setTest:function(Fe){Fe?De(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Fe){de!==Fe&&!D&&(n.depthMask(Fe),de=Fe)},setFunc:function(Fe){if(he!==Fe){switch(Fe){case HC:n.depthFunc(n.NEVER);break;case GC:n.depthFunc(n.ALWAYS);break;case VC:n.depthFunc(n.LESS);break;case id:n.depthFunc(n.LEQUAL);break;case WC:n.depthFunc(n.EQUAL);break;case XC:n.depthFunc(n.GEQUAL);break;case YC:n.depthFunc(n.GREATER);break;case jC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Fe}},setLocked:function(Fe){D=Fe},setClear:function(Fe){Be!==Fe&&(n.clearDepth(Fe),Be=Fe)},reset:function(){D=!1,de=null,he=null,Be=null}}}function o(){let D=!1,de=null,he=null,Be=null,Fe=null,ot=null,ft=null,Pe=null,Te=null;return{setTest:function(Oe){D||(Oe?De(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Oe){de!==Oe&&!D&&(n.stencilMask(Oe),de=Oe)},setFunc:function(Oe,ue,He){(he!==Oe||Be!==ue||Fe!==He)&&(n.stencilFunc(Oe,ue,He),he=Oe,Be=ue,Fe=He)},setOp:function(Oe,ue,He){(ot!==Oe||ft!==ue||Pe!==He)&&(n.stencilOp(Oe,ue,He),ot=Oe,ft=ue,Pe=He)},setLocked:function(Oe){D=Oe},setClear:function(Oe){Te!==Oe&&(n.clearStencil(Oe),Te=Oe)},reset:function(){D=!1,de=null,he=null,Be=null,Fe=null,ot=null,ft=null,Pe=null,Te=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,m=[],_=null,f=!1,v=null,x=null,y=null,T=null,w=null,M=null,P=null,S=new ut(0,0,0),E=0,I=!1,N=null,Z=null,L=null,O=null,B=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,F=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(R)[1]),U=F>=1):R.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),U=F>=2);let K=null,Q={};const q=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),re=new mn().fromArray(q),ge=new mn().fromArray($);function me(D,de,he,Be){const Fe=new Uint8Array(4),ot=n.createTexture();n.bindTexture(D,ot),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<he;ft++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(de+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return ot}const Le={};Le[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(n.DEPTH_TEST),l.setFunc(id),ze(!1),b(uv),De(n.CULL_FACE),_e(bs);function De(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function Ie(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function We(D,de){return p[D]!==de?(n.bindFramebuffer(D,de),p[D]=de,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function H(D,de){let he=m,Be=!1;if(D)if(he=g.get(de),he===void 0&&(he=[],g.set(de,he)),D.isWebGLMultipleRenderTargets){const Fe=D.texture;if(he.length!==Fe.length||he[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,ft=Fe.length;ot<ft;ot++)he[ot]=n.COLOR_ATTACHMENT0+ot;he.length=Fe.length,Be=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,Be=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,Be=!0);Be&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function ce(D){return _!==D?(n.useProgram(D),_=D,!0):!1}const ae={[ro]:n.FUNC_ADD,[AC]:n.FUNC_SUBTRACT,[CC]:n.FUNC_REVERSE_SUBTRACT};if(i)ae[dv]=n.MIN,ae[hv]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(ae[dv]=D.MIN_EXT,ae[hv]=D.MAX_EXT)}const ye={[RC]:n.ZERO,[bC]:n.ONE,[PC]:n.SRC_COLOR,[ym]:n.SRC_ALPHA,[OC]:n.SRC_ALPHA_SATURATE,[NC]:n.DST_COLOR,[DC]:n.DST_ALPHA,[LC]:n.ONE_MINUS_SRC_COLOR,[Sm]:n.ONE_MINUS_SRC_ALPHA,[IC]:n.ONE_MINUS_DST_COLOR,[UC]:n.ONE_MINUS_DST_ALPHA,[FC]:n.CONSTANT_COLOR,[kC]:n.ONE_MINUS_CONSTANT_COLOR,[zC]:n.CONSTANT_ALPHA,[BC]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(D,de,he,Be,Fe,ot,ft,Pe,Te,Oe){if(D===bs){f===!0&&(Ie(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),D!==wC){if(D!==v||Oe!==I){if((x!==ro||w!==ro)&&(n.blendEquation(n.FUNC_ADD),x=ro,w=ro),Oe)switch(D){case Ha:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case io:n.blendFunc(n.ONE,n.ONE);break;case cv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ha:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case io:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case cv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,M=null,P=null,S.set(0,0,0),E=0,v=D,I=Oe}return}Fe=Fe||de,ot=ot||he,ft=ft||Be,(de!==x||Fe!==w)&&(n.blendEquationSeparate(ae[de],ae[Fe]),x=de,w=Fe),(he!==y||Be!==T||ot!==M||ft!==P)&&(n.blendFuncSeparate(ye[he],ye[Be],ye[ot],ye[ft]),y=he,T=Be,M=ot,P=ft),(Pe.equals(S)===!1||Te!==E)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Te),S.copy(Pe),E=Te),v=D,I=!1}function W(D,de){D.side===zi?Ie(n.CULL_FACE):De(n.CULL_FACE);let he=D.side===si;de&&(he=!he),ze(he),D.blending===Ha&&D.transparent===!1?_e(bs):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Be=D.stencilWrite;u.setTest(Be),Be&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){N!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),N=D)}function b(D){D!==MC?(De(n.CULL_FACE),D!==Z&&(D===uv?n.cullFace(n.BACK):D===EC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),Z=D}function A(D){D!==L&&(U&&n.lineWidth(D),L=D)}function z(D,de,he){D?(De(n.POLYGON_OFFSET_FILL),(O!==de||B!==he)&&(n.polygonOffset(de,he),O=de,B=he)):Ie(n.POLYGON_OFFSET_FILL)}function ne(D){D?De(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function te(D){D===void 0&&(D=n.TEXTURE0+G-1),K!==D&&(n.activeTexture(D),K=D)}function ie(D,de,he){he===void 0&&(K===null?he=n.TEXTURE0+G-1:he=K);let Be=Q[he];Be===void 0&&(Be={type:void 0,texture:void 0},Q[he]=Be),(Be.type!==D||Be.texture!==de)&&(K!==he&&(n.activeTexture(he),K=he),n.bindTexture(D,de||Le[D]),Be.type=D,Be.texture=de)}function fe(){const D=Q[K];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(D){re.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),re.copy(D))}function Ke(D){ge.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function lt(D,de){let he=d.get(de);he===void 0&&(he=new WeakMap,d.set(de,he));let Be=he.get(D);Be===void 0&&(Be=n.getUniformBlockIndex(de,D.name),he.set(D,Be))}function ve(D,de){const Be=d.get(de).get(D);c.get(de)!==Be&&(n.uniformBlockBinding(de,Be,D.__bindingPointIndex),c.set(de,Be))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,Q={},p={},g=new WeakMap,m=[],_=null,f=!1,v=null,x=null,y=null,T=null,w=null,M=null,P=null,S=new ut(0,0,0),E=0,I=!1,N=null,Z=null,L=null,O=null,B=null,re.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:Ie,bindFramebuffer:We,drawBuffers:H,useProgram:ce,setBlending:_e,setMaterial:W,setFlipSided:ze,setCullFace:b,setLineWidth:A,setPolygonOffset:z,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:fe,compressedTexImage2D:J,compressedTexImage3D:se,texImage2D:Ae,texImage3D:Se,updateUBOMapping:lt,uniformBlockBinding:ve,texStorage2D:be,texStorage3D:Ye,texSubImage2D:Me,texSubImage3D:Ue,compressedTexSubImage2D:ee,compressedTexSubImage3D:Qe,scissor:Xe,viewport:Ke,reset:le}}function MD(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,A){return p?new OffscreenCanvas(b,A):ld("canvas")}function m(b,A,z,ne){let te=1;if((b.width>ne||b.height>ne)&&(te=ne/Math.max(b.width,b.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=A?Rm:Math.floor,fe=ie(te*b.width),J=ie(te*b.height);d===void 0&&(d=g(fe,J));const se=z?g(fe,J):d;return se.width=fe,se.height=J,se.getContext("2d").drawImage(b,0,0,fe,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+J+")."),se}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function _(b){return Vv(b.width)&&Vv(b.height)}function f(b){return a?!1:b.wrapS!==sr||b.wrapT!==sr||b.minFilter!==zn&&b.minFilter!==qn}function v(b,A){return b.generateMipmaps&&A&&b.minFilter!==zn&&b.minFilter!==qn}function x(b){n.generateMipmap(b)}function y(b,A,z,ne,te=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=A;if(A===n.RED&&(z===n.FLOAT&&(ie=n.R32F),z===n.HALF_FLOAT&&(ie=n.R16F),z===n.UNSIGNED_BYTE&&(ie=n.R8)),A===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.R8UI),z===n.UNSIGNED_SHORT&&(ie=n.R16UI),z===n.UNSIGNED_INT&&(ie=n.R32UI),z===n.BYTE&&(ie=n.R8I),z===n.SHORT&&(ie=n.R16I),z===n.INT&&(ie=n.R32I)),A===n.RG&&(z===n.FLOAT&&(ie=n.RG32F),z===n.HALF_FLOAT&&(ie=n.RG16F),z===n.UNSIGNED_BYTE&&(ie=n.RG8)),A===n.RGBA){const fe=te?rd:yt.getTransfer(ne);z===n.FLOAT&&(ie=n.RGBA32F),z===n.HALF_FLOAT&&(ie=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ie=fe===Rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(b,A,z){return v(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==zn&&b.minFilter!==qn?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function w(b){return b===zn||b===pv||b===Ah?n.NEAREST:n.LINEAR}function M(b){const A=b.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function P(b){const A=b.target;A.removeEventListener("dispose",P),I(A)}function S(b){const A=i.get(b);if(A.__webglInit===void 0)return;const z=b.source,ne=h.get(z);if(ne){const te=ne[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(ne).length===0&&h.delete(z)}i.remove(b)}function E(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const z=b.source,ne=h.get(z);delete ne[A.__cacheKey],o.memory.textures--}function I(b){const A=b.texture,z=i.get(b),ne=i.get(A);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let ie=0;ie<z.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(z.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)n.deleteFramebuffer(z.__webglFramebuffer[te]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,ie=A.length;te<ie;te++){const fe=i.get(A[te]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(b)}let N=0;function Z(){N=0}function L(){const b=N;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),N+=1,b}function O(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function B(b,A){const z=i.get(b);if(b.isVideoTexture&&W(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(z,b,A);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+A)}function G(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){re(z,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+A)}function U(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){re(z,b,A);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+A)}function F(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){ge(z,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+A)}const R={[Tm]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[wm]:n.MIRRORED_REPEAT},K={[zn]:n.NEAREST,[pv]:n.NEAREST_MIPMAP_NEAREST,[Ah]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[nR]:n.LINEAR_MIPMAP_NEAREST,[Iu]:n.LINEAR_MIPMAP_LINEAR},Q={[mR]:n.NEVER,[SR]:n.ALWAYS,[_R]:n.LESS,[RE]:n.LEQUAL,[gR]:n.EQUAL,[yR]:n.GEQUAL,[vR]:n.GREATER,[xR]:n.NOTEQUAL};function q(b,A,z){if(z?(n.texParameteri(b,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,R[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,K[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,K[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==sr||A.wrapT!==sr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==zn&&A.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===zn||A.minFilter!==Ah&&A.minFilter!==Iu||A.type===gs&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Ou&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function $(b,A){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",M));const ne=A.source;let te=h.get(ne);te===void 0&&(te={},h.set(ne,te));const ie=O(A);if(ie!==b.__cacheKey){te[ie]===void 0&&(te[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[ie].usedTimes++;const fe=te[b.__cacheKey];fe!==void 0&&(te[b.__cacheKey].usedTimes--,fe.usedTimes===0&&E(A)),b.__cacheKey=ie,b.__webglTexture=te[ie].texture}return z}function re(b,A,z){let ne=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=n.TEXTURE_3D);const te=$(b,A),ie=A.source;t.bindTexture(ne,b.__webglTexture,n.TEXTURE0+z);const fe=i.get(ie);if(ie.version!==fe.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const J=yt.getPrimaries(yt.workingColorSpace),se=A.colorSpace===Bi?null:yt.getPrimaries(A.colorSpace),Me=A.colorSpace===Bi||J===se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ue=f(A)&&_(A.image)===!1;let ee=m(A.image,Ue,!1,r.maxTextureSize);ee=ze(A,ee);const Qe=_(ee)||a,be=s.convert(A.format,A.colorSpace);let Ye=s.convert(A.type),Ae=y(A.internalFormat,be,Ye,A.colorSpace,A.isVideoTexture);q(ne,A,Qe);let Se;const Xe=A.mipmaps,Ke=a&&A.isVideoTexture!==!0&&Ae!==AE,lt=fe.__version===void 0||te===!0,ve=T(A,ee,Qe);if(A.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?A.type===gs?Ae=n.DEPTH_COMPONENT32F:A.type===_s?Ae=n.DEPTH_COMPONENT24:A.type===Eo?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:A.type===gs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===To&&Ae===n.DEPTH_COMPONENT&&A.type!==rg&&A.type!==_s&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=_s,Ye=s.convert(A.type)),A.format===rl&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,A.type!==Eo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Eo,Ye=s.convert(A.type))),lt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Ae,ee.width,ee.height,0,be,Ye,null));else if(A.isDataTexture)if(Xe.length>0&&Qe){Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,ve,Ae,Xe[0].width,Xe[0].height);for(let le=0,D=Xe.length;le<D;le++)Se=Xe[le],Ke?t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,be,Ye,Se.data):t.texImage2D(n.TEXTURE_2D,le,Ae,Se.width,Se.height,0,be,Ye,Se.data);A.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(n.TEXTURE_2D,ve,Ae,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,be,Ye,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,ee.width,ee.height,0,be,Ye,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ke&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ae,Xe[0].width,Xe[0].height,ee.depth);for(let le=0,D=Xe.length;le<D;le++)Se=Xe[le],A.format!==or?be!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,ee.depth,be,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ae,Se.width,Se.height,ee.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,Se.width,Se.height,ee.depth,be,Ye,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ae,Se.width,Se.height,ee.depth,0,be,Ye,Se.data)}else{Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,ve,Ae,Xe[0].width,Xe[0].height);for(let le=0,D=Xe.length;le<D;le++)Se=Xe[le],A.format!==or?be!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ae,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se.width,Se.height,be,Ye,Se.data):t.texImage2D(n.TEXTURE_2D,le,Ae,Se.width,Se.height,0,be,Ye,Se.data)}else if(A.isDataArrayTexture)Ke?(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ae,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,be,Ye,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,be,Ye,ee.data);else if(A.isData3DTexture)Ke?(lt&&t.texStorage3D(n.TEXTURE_3D,ve,Ae,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,be,Ye,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,be,Ye,ee.data);else if(A.isFramebufferTexture){if(lt)if(Ke)t.texStorage2D(n.TEXTURE_2D,ve,Ae,ee.width,ee.height);else{let le=ee.width,D=ee.height;for(let de=0;de<ve;de++)t.texImage2D(n.TEXTURE_2D,de,Ae,le,D,0,be,Ye,null),le>>=1,D>>=1}}else if(Xe.length>0&&Qe){Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,ve,Ae,Xe[0].width,Xe[0].height);for(let le=0,D=Xe.length;le<D;le++)Se=Xe[le],Ke?t.texSubImage2D(n.TEXTURE_2D,le,0,0,be,Ye,Se):t.texImage2D(n.TEXTURE_2D,le,Ae,be,Ye,Se);A.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(n.TEXTURE_2D,ve,Ae,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ye,ee)):t.texImage2D(n.TEXTURE_2D,0,Ae,be,Ye,ee);v(A,Qe)&&x(ne),fe.__version=ie.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function ge(b,A,z){if(A.image.length!==6)return;const ne=$(b,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+z);const ie=i.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const fe=yt.getPrimaries(yt.workingColorSpace),J=A.colorSpace===Bi?null:yt.getPrimaries(A.colorSpace),se=A.colorSpace===Bi||fe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const Me=A.isCompressedTexture||A.image[0].isCompressedTexture,Ue=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let le=0;le<6;le++)!Me&&!Ue?ee[le]=m(A.image[le],!1,!0,r.maxCubemapSize):ee[le]=Ue?A.image[le].image:A.image[le],ee[le]=ze(A,ee[le]);const Qe=ee[0],be=_(Qe)||a,Ye=s.convert(A.format,A.colorSpace),Ae=s.convert(A.type),Se=y(A.internalFormat,Ye,Ae,A.colorSpace),Xe=a&&A.isVideoTexture!==!0,Ke=ie.__version===void 0||ne===!0;let lt=T(A,Qe,be);q(n.TEXTURE_CUBE_MAP,A,be);let ve;if(Me){Xe&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Se,Qe.width,Qe.height);for(let le=0;le<6;le++){ve=ee[le].mipmaps;for(let D=0;D<ve.length;D++){const de=ve[D];A.format!==or?Ye!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D,0,0,de.width,de.height,Ye,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D,0,0,de.width,de.height,Ye,Ae,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D,Se,de.width,de.height,0,Ye,Ae,de.data)}}}else{ve=A.mipmaps,Xe&&Ke&&(ve.length>0&&lt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Se,ee[0].width,ee[0].height));for(let le=0;le<6;le++)if(Ue){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ee[le].width,ee[le].height,Ye,Ae,ee[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,ee[le].width,ee[le].height,0,Ye,Ae,ee[le].data);for(let D=0;D<ve.length;D++){const he=ve[D].image[le].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D+1,0,0,he.width,he.height,Ye,Ae,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D+1,Se,he.width,he.height,0,Ye,Ae,he.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ye,Ae,ee[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Se,Ye,Ae,ee[le]);for(let D=0;D<ve.length;D++){const de=ve[D];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D+1,0,0,Ye,Ae,de.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D+1,Se,Ye,Ae,de.image[le])}}}v(A,be)&&x(n.TEXTURE_CUBE_MAP),ie.__version=te.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function me(b,A,z,ne,te,ie){const fe=s.convert(z.format,z.colorSpace),J=s.convert(z.type),se=y(z.internalFormat,fe,J,z.colorSpace);if(!i.get(A).__hasExternalTextures){const Ue=Math.max(1,A.width>>ie),ee=Math.max(1,A.height>>ie);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,se,Ue,ee,A.depth,0,fe,J,null):t.texImage2D(te,ie,se,Ue,ee,0,fe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),_e(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,0,ye(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(b,A,z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||_e(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===gs?ne=n.DEPTH_COMPONENT32F:te.type===_s&&(ne=n.DEPTH_COMPONENT24));const ie=ye(A);_e(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const ne=ye(A);z&&_e(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):_e(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],fe=s.convert(ie.format,ie.colorSpace),J=s.convert(ie.type),se=y(ie.internalFormat,fe,J,ie.colorSpace),Me=ye(A);z&&_e(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,se,A.width,A.height):_e(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,se,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,se,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const ne=i.get(A.depthTexture).__webglTexture,te=ye(A);if(A.depthTexture.format===To)_e(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(A.depthTexture.format===rl)_e(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const A=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");De(A.__webglFramebuffer,b)}else if(z){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=n.createRenderbuffer(),Le(A.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Le(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(b,A,z){const ne=i.get(b);A!==void 0&&me(ne.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ie(b)}function H(b){const A=b.texture,z=i.get(b),ne=i.get(A);b.addEventListener("dispose",P),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=A.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,fe=_(b)||a;if(te){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let se=0;se<A.mipmaps.length;se++)z.__webglFramebuffer[J][se]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<A.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const J=b.texture;for(let se=0,Me=J.length;se<Me;se++){const Ue=i.get(J[se]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&_e(b)===!1){const J=ie?A:[A];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const Me=J[se];z.__webglColorRenderbuffer[se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const Ue=s.convert(Me.format,Me.colorSpace),ee=s.convert(Me.type),Qe=y(Me.internalFormat,Ue,ee,Me.colorSpace,b.isXRRenderTarget===!0),be=ye(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Qe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+se,n.RENDERBUFFER,z.__webglColorRenderbuffer[se])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,A,fe);for(let J=0;J<6;J++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)me(z.__webglFramebuffer[J][se],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,se);else me(z.__webglFramebuffer[J],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);v(A,fe)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const J=b.texture;for(let se=0,Me=J.length;se<Me;se++){const Ue=J[se],ee=i.get(Ue);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),q(n.TEXTURE_2D,Ue,fe),me(z.__webglFramebuffer,b,Ue,n.COLOR_ATTACHMENT0+se,n.TEXTURE_2D,0),v(Ue,fe)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?J=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,ne.__webglTexture),q(J,A,fe),a&&A.mipmaps&&A.mipmaps.length>0)for(let se=0;se<A.mipmaps.length;se++)me(z.__webglFramebuffer[se],b,A,n.COLOR_ATTACHMENT0,J,se);else me(z.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,J,0);v(A,fe)&&x(J),t.unbindTexture()}b.depthBuffer&&Ie(b)}function ce(b){const A=_(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,te=z.length;ne<te;ne++){const ie=z[ne];if(v(ie,A)){const fe=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,J=i.get(ie).__webglTexture;t.bindTexture(fe,J),x(fe),t.unbindTexture()}}}function ae(b){if(a&&b.samples>0&&_e(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,ne=b.height;let te=n.COLOR_BUFFER_BIT;const ie=[],fe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(b),se=b.isWebGLMultipleRenderTargets===!0;if(se)for(let Me=0;Me<A.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let Me=0;Me<A.length;Me++){ie.push(n.COLOR_ATTACHMENT0+Me),b.depthBuffer&&ie.push(fe);const Ue=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(Ue===!1&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),se&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[Me]),Ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),se){const ee=i.get(A[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),se)for(let Me=0;Me<A.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,J.__webglColorRenderbuffer[Me]);const Ue=i.get(A[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function ye(b){return Math.min(r.maxSamples,b.samples)}function _e(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function W(b){const A=o.render.frame;c.get(b)!==A&&(c.set(b,A),b.update())}function ze(b,A){const z=b.colorSpace,ne=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Am||z!==$r&&z!==Bi&&(yt.getTransfer(z)===Rt?a===!1?e.has("EXT_sRGB")===!0&&ne===or?(b.format=Am,b.minFilter=qn,b.generateMipmaps=!1):A=PE.sRGBToLinear(A):(ne!==or||te!==Ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),A}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=F,this.rebindTextures=We,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function ED(n,e,t){const i=t.isWebGL2;function r(s,o=Bi){let a;const l=yt.getTransfer(o);if(s===Ls)return n.UNSIGNED_BYTE;if(s===SE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ME)return n.UNSIGNED_SHORT_5_5_5_1;if(s===iR)return n.BYTE;if(s===rR)return n.SHORT;if(s===rg)return n.UNSIGNED_SHORT;if(s===yE)return n.INT;if(s===_s)return n.UNSIGNED_INT;if(s===gs)return n.FLOAT;if(s===Ou)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===sR)return n.ALPHA;if(s===or)return n.RGBA;if(s===oR)return n.LUMINANCE;if(s===aR)return n.LUMINANCE_ALPHA;if(s===To)return n.DEPTH_COMPONENT;if(s===rl)return n.DEPTH_STENCIL;if(s===Am)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===lR)return n.RED;if(s===EE)return n.RED_INTEGER;if(s===uR)return n.RG;if(s===TE)return n.RG_INTEGER;if(s===wE)return n.RGBA_INTEGER;if(s===Ch||s===Rh||s===bh||s===Ph)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ch)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Rh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ph)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ch)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Rh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ph)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mv||s===_v||s===gv||s===vv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_v)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===AE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xv||s===yv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xv)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===yv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sv||s===Mv||s===Ev||s===Tv||s===wv||s===Av||s===Cv||s===Rv||s===bv||s===Pv||s===Lv||s===Dv||s===Uv||s===Nv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Sv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ev)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Tv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Av)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Lh||s===Iv||s===Ov)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Lh)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Iv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ov)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cR||s===Fv||s===kv||s===zv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Lh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Fv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===kv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Eo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class TD extends ki{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qc extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wD={type:"move"};class np{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const _=t.getJointPose(m,i),f=this._getHandJoint(u,m);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class AD extends ul{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,g=null;const m=t.getContextAttributes();let _=null,f=null;const v=[],x=[],y=new ht;let T=null;const w=new ki;w.layers.enable(1),w.viewport=new mn;const M=new ki;M.layers.enable(2),M.viewport=new mn;const P=[w,M],S=new TD;S.layers.enable(1),S.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=v[q];return $===void 0&&($=new np,v[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=v[q];return $===void 0&&($=new np,v[q]=$),$.getGripSpace()},this.getHand=function(q){let $=v[q];return $===void 0&&($=new np,v[q]=$),$.getHandSpace()};function N(q){const $=x.indexOf(q.inputSource);if($===-1)return;const re=v[$];re!==void 0&&(re.update(q.inputSource,q.frame,u||o),re.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let q=0;q<v.length;q++){const $=x[q];$!==null&&(x[q]=null,v[q].disconnect($))}E=null,I=null,e.setRenderTarget(_),p=null,h=null,d=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new No(p.framebufferWidth,p.framebufferHeight,{format:or,type:Ls,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,re=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?rl:To,re=m.stencil?Eo:_s);const me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new No(h.textureWidth,h.textureHeight,{format:or,type:Ls,depthTexture:new HE(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Le=e.properties.get(f);Le.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let $=0;$<q.removed.length;$++){const re=q.removed[$],ge=x.indexOf(re);ge>=0&&(x[ge]=null,v[ge].disconnect(re))}for(let $=0;$<q.added.length;$++){const re=q.added[$];let ge=x.indexOf(re);if(ge===-1){for(let Le=0;Le<v.length;Le++)if(Le>=x.length){x.push(re),ge=Le;break}else if(x[Le]===null){x[Le]=re,ge=Le;break}if(ge===-1)break}const me=v[ge];me&&me.connect(re)}}const O=new j,B=new j;function G(q,$,re){O.setFromMatrixPosition($.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);const ge=O.distanceTo(B),me=$.projectionMatrix.elements,Le=re.projectionMatrix.elements,De=me[14]/(me[10]-1),Ie=me[14]/(me[10]+1),We=(me[9]+1)/me[5],H=(me[9]-1)/me[5],ce=(me[8]-1)/me[0],ae=(Le[8]+1)/Le[0],ye=De*ce,_e=De*ae,W=ge/(-ce+ae),ze=W*-ce;$.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ze),q.translateZ(W),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=De+W,A=Ie+W,z=ye-ze,ne=_e+(ge-ze),te=We*Ie/A*b,ie=H*Ie/A*b;q.projectionMatrix.makePerspective(z,ne,te,ie,b,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function U(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=M.near=w.near=q.near,S.far=M.far=w.far=q.far,(E!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,I=S.far);const $=q.parent,re=S.cameras;U(S,$);for(let ge=0;ge<re.length;ge++)U(re[ge],$);re.length===2?G(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),F(q,S,$)};function F(q,$,re){re===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let R=null;function K(q,$){if(c=$.getViewerPose(u||o),g=$,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ge=!1;re.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let me=0;me<re.length;me++){const Le=re[me];let De=null;if(p!==null)De=p.getViewport(Le);else{const We=d.getViewSubImage(h,Le);De=We.viewport,me===0&&(e.setRenderTargetTextures(f,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Ie=P[me];Ie===void 0&&(Ie=new ki,Ie.layers.enable(me),Ie.viewport=new mn,P[me]=Ie),Ie.matrix.fromArray(Le.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Le.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(De.x,De.y,De.width,De.height),me===0&&(S.matrix.copy(Ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(Ie)}}for(let re=0;re<v.length;re++){const ge=x[re],me=v[re];ge!==null&&me!==void 0&&me.update(ge,$,u||o)}R&&R(q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const Q=new BE;Q.setAnimationLoop(K),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}}function CD(n,e){function t(_,f){_.matrixAutoUpdate===!0&&_.updateMatrix(),f.value.copy(_.matrix)}function i(_,f){f.color.getRGB(_.fogColor.value,OE(n)),f.isFog?(_.fogNear.value=f.near,_.fogFar.value=f.far):f.isFogExp2&&(_.fogDensity.value=f.density)}function r(_,f,v,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(_,f):f.isMeshToonMaterial?(s(_,f),d(_,f)):f.isMeshPhongMaterial?(s(_,f),c(_,f)):f.isMeshStandardMaterial?(s(_,f),h(_,f),f.isMeshPhysicalMaterial&&p(_,f,y)):f.isMeshMatcapMaterial?(s(_,f),g(_,f)):f.isMeshDepthMaterial?s(_,f):f.isMeshDistanceMaterial?(s(_,f),m(_,f)):f.isMeshNormalMaterial?s(_,f):f.isLineBasicMaterial?(o(_,f),f.isLineDashedMaterial&&a(_,f)):f.isPointsMaterial?l(_,f,v,x):f.isSpriteMaterial?u(_,f):f.isShadowMaterial?(_.color.value.copy(f.color),_.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(_,f){_.opacity.value=f.opacity,f.color&&_.diffuse.value.copy(f.color),f.emissive&&_.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.bumpMap&&(_.bumpMap.value=f.bumpMap,t(f.bumpMap,_.bumpMapTransform),_.bumpScale.value=f.bumpScale,f.side===si&&(_.bumpScale.value*=-1)),f.normalMap&&(_.normalMap.value=f.normalMap,t(f.normalMap,_.normalMapTransform),_.normalScale.value.copy(f.normalScale),f.side===si&&_.normalScale.value.negate()),f.displacementMap&&(_.displacementMap.value=f.displacementMap,t(f.displacementMap,_.displacementMapTransform),_.displacementScale.value=f.displacementScale,_.displacementBias.value=f.displacementBias),f.emissiveMap&&(_.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,_.emissiveMapTransform)),f.specularMap&&(_.specularMap.value=f.specularMap,t(f.specularMap,_.specularMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(_.envMap.value=v,_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=f.reflectivity,_.ior.value=f.ior,_.refractionRatio.value=f.refractionRatio),f.lightMap){_.lightMap.value=f.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,_.lightMapTransform)}f.aoMap&&(_.aoMap.value=f.aoMap,_.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,_.aoMapTransform))}function o(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform))}function a(_,f){_.dashSize.value=f.dashSize,_.totalSize.value=f.dashSize+f.gapSize,_.scale.value=f.scale}function l(_,f,v,x){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.size.value=f.size*v,_.scale.value=x*.5,f.map&&(_.map.value=f.map,t(f.map,_.uvTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function u(_,f){_.diffuse.value.copy(f.color),_.opacity.value=f.opacity,_.rotation.value=f.rotation,f.map&&(_.map.value=f.map,t(f.map,_.mapTransform)),f.alphaMap&&(_.alphaMap.value=f.alphaMap,t(f.alphaMap,_.alphaMapTransform)),f.alphaTest>0&&(_.alphaTest.value=f.alphaTest)}function c(_,f){_.specular.value.copy(f.specular),_.shininess.value=Math.max(f.shininess,1e-4)}function d(_,f){f.gradientMap&&(_.gradientMap.value=f.gradientMap)}function h(_,f){_.metalness.value=f.metalness,f.metalnessMap&&(_.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,_.metalnessMapTransform)),_.roughness.value=f.roughness,f.roughnessMap&&(_.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,_.roughnessMapTransform)),e.get(f).envMap&&(_.envMapIntensity.value=f.envMapIntensity)}function p(_,f,v){_.ior.value=f.ior,f.sheen>0&&(_.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),_.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(_.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,_.sheenColorMapTransform)),f.sheenRoughnessMap&&(_.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,_.sheenRoughnessMapTransform))),f.clearcoat>0&&(_.clearcoat.value=f.clearcoat,_.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(_.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,_.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(_.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===si&&_.clearcoatNormalScale.value.negate())),f.iridescence>0&&(_.iridescence.value=f.iridescence,_.iridescenceIOR.value=f.iridescenceIOR,_.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(_.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,_.iridescenceMapTransform)),f.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),f.transmission>0&&(_.transmission.value=f.transmission,_.transmissionSamplerMap.value=v.texture,_.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(_.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,_.transmissionMapTransform)),_.thickness.value=f.thickness,f.thicknessMap&&(_.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=f.attenuationDistance,_.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(_.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(_.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=f.specularIntensity,_.specularColor.value.copy(f.specularColor),f.specularColorMap&&(_.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,_.specularColorMapTransform)),f.specularIntensityMap&&(_.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,f){f.matcap&&(_.matcap.value=f.matcap)}function m(_,f){const v=e.get(f).light;_.referencePosition.value.setFromMatrixPosition(v.matrixWorld),_.nearDistance.value=v.shadow.camera.near,_.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RD(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",_));const T=x.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=P.length;S<E;S++){const I=P[S];if(p(I,w,S,T)===!0){const N=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let O=0;O<Z.length;O++){const B=Z[O],G=m(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+L,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,T){const w=v.value,M=x+"_"+y;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const P=T[M];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return T[M]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(v){const x=v.uniforms;let y=0;const T=16;for(let M=0,P=x.length;M<P;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,I=S.length;E<I;E++){const N=S[E],Z=Array.isArray(N.value)?N.value:[N.value];for(let L=0,O=Z.length;L<O;L++){const B=Z[L],G=m(B),U=y%T;U!==0&&T-U<G.boundary&&(y+=T-U),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=G.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function _(v){const x=v.target;x.removeEventListener("dispose",_);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class jE{constructor(e={}){const{canvas:t=ER(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let m=null,_=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=Ps,this.toneMappingExposure=1;const x=this;let y=!1,T=0,w=0,M=null,P=-1,S=null;const E=new mn,I=new mn;let N=null;const Z=new ut(0);let L=0,O=t.width,B=t.height,G=1,U=null,F=null;const R=new mn(0,0,O,B),K=new mn(0,0,O,B);let Q=!1;const q=new zE;let $=!1,re=!1,ge=null;const me=new cn,Le=new ht,De=new j,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?G:1}let H=i;function ce(C,k){for(let Y=0;Y<C.length;Y++){const X=C[Y],V=t.getContext(X,k);if(V!==null)return V}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ig}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",de,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),H=ce(k,C),H===null)throw ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,ye,_e,W,ze,b,A,z,ne,te,ie,fe,J,se,Me,Ue,ee,Qe,be,Ye,Ae,Se,Xe,Ke;function lt(){ae=new k2(H),ye=new L2(H,ae,e),ae.init(ye),Se=new ED(H,ae,ye),_e=new SD(H,ae,ye),W=new H2(H),ze=new aD,b=new MD(H,ae,_e,ze,ye,Se,W),A=new U2(x),z=new F2(x),ne=new qR(H,ye),Xe=new b2(H,ae,ne,ye),te=new z2(H,ne,W,Xe),ie=new X2(H,te,ne,W),be=new W2(H,ye,b),Ue=new D2(ze),fe=new oD(x,A,z,ae,ye,Xe,Ue),J=new CD(x,ze),se=new uD,Me=new mD(ae,ye),Qe=new R2(x,A,z,_e,ie,h,l),ee=new yD(x,ie,ye),Ke=new RD(H,W,ye,_e),Ye=new P2(H,ae,W,ye),Ae=new B2(H,ae,W,ye),W.programs=fe.programs,x.capabilities=ye,x.extensions=ae,x.properties=ze,x.renderLists=se,x.shadowMap=ee,x.state=_e,x.info=W}lt();const ve=new AD(x,H);this.xr=ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(O,B,!1))},this.getSize=function(C){return C.set(O,B)},this.setSize=function(C,k,Y=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,B=k,t.width=Math.floor(C*G),t.height=Math.floor(k*G),Y===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(O*G,B*G).floor()},this.setDrawingBufferSize=function(C,k,Y){O=C,B=k,G=Y,t.width=Math.floor(C*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,k,Y,X){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,k,Y,X),_e.viewport(E.copy(R).multiplyScalar(G).floor())},this.getScissor=function(C){return C.copy(K)},this.setScissor=function(C,k,Y,X){C.isVector4?K.set(C.x,C.y,C.z,C.w):K.set(C,k,Y,X),_e.scissor(I.copy(K).multiplyScalar(G).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){_e.setScissorTest(Q=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(C=!0,k=!0,Y=!0){let X=0;if(C){let V=!1;if(M!==null){const pe=M.texture.format;V=pe===wE||pe===TE||pe===EE}if(V){const pe=M.texture.type,Ce=pe===Ls||pe===_s||pe===rg||pe===Eo||pe===SE||pe===ME,Ge=Qe.getClearColor(),Re=Qe.getClearAlpha(),Ne=Ge.r,Ve=Ge.g,$e=Ge.b;Ce?(p[0]=Ne,p[1]=Ve,p[2]=$e,p[3]=Re,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=Ne,g[1]=Ve,g[2]=$e,g[3]=Re,H.clearBufferiv(H.COLOR,0,g))}else X|=H.COLOR_BUFFER_BIT}k&&(X|=H.DEPTH_BUFFER_BIT),Y&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",de,!1),se.dispose(),Me.dispose(),ze.dispose(),A.dispose(),z.dispose(),ie.dispose(),Xe.dispose(),Ke.dispose(),fe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Te),ve.removeEventListener("sessionend",Oe),ge&&(ge.dispose(),ge=null),ue.stop()};function le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=W.autoReset,k=ee.enabled,Y=ee.autoUpdate,X=ee.needsUpdate,V=ee.type;lt(),W.autoReset=C,ee.enabled=k,ee.autoUpdate=Y,ee.needsUpdate=X,ee.type=V}function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function he(C){const k=C.target;k.removeEventListener("dispose",he),Be(k)}function Be(C){Fe(C),ze.remove(C)}function Fe(C){const k=ze.get(C).programs;k!==void 0&&(k.forEach(function(Y){fe.releaseProgram(Y)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,X,V,pe){k===null&&(k=Ie);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,Ge=Tt(C,k,Y,X,V);_e.setMaterial(X,Ce);let Re=Y.index,Ne=1;if(X.wireframe===!0){if(Re=te.getWireframeAttribute(Y),Re===void 0)return;Ne=2}const Ve=Y.drawRange,$e=Y.attributes.position;let Pt=Ve.start*Ne,Zt=(Ve.start+Ve.count)*Ne;pe!==null&&(Pt=Math.max(Pt,pe.start*Ne),Zt=Math.min(Zt,(pe.start+pe.count)*Ne)),Re!==null?(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Re.count)):$e!=null&&(Pt=Math.max(Pt,0),Zt=Math.min(Zt,$e.count));const _t=Zt-Pt;if(_t<0||_t===1/0)return;Xe.setup(V,X,Ge,Y,Re);let Ln,xt=Ye;if(Re!==null&&(Ln=ne.get(Re),xt=Ae,xt.setIndex(Ln)),V.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*We()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(V.isLine){let je=X.linewidth;je===void 0&&(je=1),_e.setLineWidth(je*We()),V.isLineSegments?xt.setMode(H.LINES):V.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else V.isPoints?xt.setMode(H.POINTS):V.isSprite&&xt.setMode(H.TRIANGLES);if(V.isBatchedMesh)xt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)xt.renderInstances(Pt,_t,V.count);else if(Y.isInstancedBufferGeometry){const je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Od=Math.min(Y.instanceCount,je);xt.renderInstances(Pt,_t,Od)}else xt.render(Pt,_t)};function ot(C,k,Y){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=si,C.needsUpdate=!0,Et(C,k,Y),C.side=ks,C.needsUpdate=!0,Et(C,k,Y),C.side=zi):Et(C,k,Y)}this.compile=function(C,k,Y=null){Y===null&&(Y=C),_=Me.get(Y),_.init(),v.push(_),Y.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),C!==Y&&C.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights(x._useLegacyLights);const X=new Set;return C.traverse(function(V){const pe=V.material;if(pe)if(Array.isArray(pe))for(let Ce=0;Ce<pe.length;Ce++){const Ge=pe[Ce];ot(Ge,Y,V),X.add(Ge)}else ot(pe,Y,V),X.add(pe)}),v.pop(),_=null,X},this.compileAsync=function(C,k,Y=null){const X=this.compile(C,k,Y);return new Promise(V=>{function pe(){if(X.forEach(function(Ce){ze.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){V(C);return}setTimeout(pe,10)}ae.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ft=null;function Pe(C){ft&&ft(C)}function Te(){ue.stop()}function Oe(){ue.start()}const ue=new BE;ue.setAnimationLoop(Pe),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(C){ft=C,ve.setAnimationLoop(C),C===null?ue.stop():ue.start()},ve.addEventListener("sessionstart",Te),ve.addEventListener("sessionend",Oe),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(k),k=ve.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,M),_=Me.get(C,v.length),_.init(),v.push(_),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(me),re=this.localClippingEnabled,$=Ue.init(this.clippingPlanes,re),m=se.get(C,f.length),m.init(),f.push(m),He(C,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(U,F),this.info.render.frame++,$===!0&&Ue.beginShadows();const Y=_.state.shadowsArray;if(ee.render(Y,C,k),$===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(m,C),_.setupLights(x._useLegacyLights),k.isArrayCamera){const X=k.cameras;for(let V=0,pe=X.length;V<pe;V++){const Ce=X[V];ke(m,C,Ce,Ce.viewport)}}else ke(m,C,k);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,k),Xe.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?_=v[v.length-1]:_=null,f.pop(),f.length>0?m=f[f.length-1]:m=null};function He(C,k,Y,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){X&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Ce=ie.update(C),Ge=C.material;Ge.visible&&m.push(C,Ce,Ge,Y,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Ce=ie.update(C),Ge=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ge)){const Re=Ce.groups;for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++){const $e=Re[Ne],Pt=Ge[$e.materialIndex];Pt&&Pt.visible&&m.push(C,Ce,Pt,Y,De.z,$e)}}else Ge.visible&&m.push(C,Ce,Ge,Y,De.z,null)}}const pe=C.children;for(let Ce=0,Ge=pe.length;Ce<Ge;Ce++)He(pe[Ce],k,Y,X)}function ke(C,k,Y,X){const V=C.opaque,pe=C.transmissive,Ce=C.transparent;_.setupLightsView(Y),$===!0&&Ue.setGlobalState(x.clippingPlanes,Y),pe.length>0&&qe(V,pe,k,Y),X&&_e.viewport(E.copy(X)),V.length>0&&Ut(V,k,Y),pe.length>0&&Ut(pe,k,Y),Ce.length>0&&Ut(Ce,k,Y),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function qe(C,k,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const pe=ye.isWebGL2;ge===null&&(ge=new No(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Ou:Ls,minFilter:Iu,samples:pe?4:0})),x.getDrawingBufferSize(Le),pe?ge.setSize(Le.x,Le.y):ge.setSize(Rm(Le.x),Rm(Le.y));const Ce=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ge=x.toneMapping;x.toneMapping=Ps,Ut(C,Y,X),b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge);let Re=!1;for(let Ne=0,Ve=k.length;Ne<Ve;Ne++){const $e=k[Ne],Pt=$e.object,Zt=$e.geometry,_t=$e.material,Ln=$e.group;if(_t.side===zi&&Pt.layers.test(X.layers)){const xt=_t.side;_t.side=si,_t.needsUpdate=!0,tt(Pt,Y,X,Zt,_t,Ln),_t.side=xt,_t.needsUpdate=!0,Re=!0}}Re===!0&&(b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge)),x.setRenderTarget(Ce),x.setClearColor(Z,L),x.toneMapping=Ge}function Ut(C,k,Y){const X=k.isScene===!0?k.overrideMaterial:null;for(let V=0,pe=C.length;V<pe;V++){const Ce=C[V],Ge=Ce.object,Re=Ce.geometry,Ne=X===null?Ce.material:X,Ve=Ce.group;Ge.layers.test(Y.layers)&&tt(Ge,k,Y,Re,Ne,Ve)}}function tt(C,k,Y,X,V,pe){C.onBeforeRender(x,k,Y,X,V,pe),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(x,k,Y,X,C,pe),V.transparent===!0&&V.side===zi&&V.forceSinglePass===!1?(V.side=si,V.needsUpdate=!0,x.renderBufferDirect(Y,k,X,V,C,pe),V.side=ks,V.needsUpdate=!0,x.renderBufferDirect(Y,k,X,V,C,pe),V.side=zi):x.renderBufferDirect(Y,k,X,V,C,pe),C.onAfterRender(x,k,Y,X,V,pe)}function Et(C,k,Y){k.isScene!==!0&&(k=Ie);const X=ze.get(C),V=_.state.lights,pe=_.state.shadowsArray,Ce=V.state.version,Ge=fe.getParameters(C,V.state,pe,k,Y),Re=fe.getProgramCacheKey(Ge);let Ne=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?z:A).get(C.envMap||X.environment),Ne===void 0&&(C.addEventListener("dispose",he),Ne=new Map,X.programs=Ne);let Ve=Ne.get(Re);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===Ce)return At(C,Ge),Ve}else Ge.uniforms=fe.getUniforms(C),C.onBuild(Y,Ge,x),C.onBeforeCompile(Ge,x),Ve=fe.acquireProgram(Ge,Re),Ne.set(Re,Ve),X.uniforms=Ge.uniforms;const $e=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=Ue.uniform),At(C,Ge),X.needsLights=ui(C),X.lightsStateVersion=Ce,X.needsLights&&($e.ambientLightColor.value=V.state.ambient,$e.lightProbe.value=V.state.probe,$e.directionalLights.value=V.state.directional,$e.directionalLightShadows.value=V.state.directionalShadow,$e.spotLights.value=V.state.spot,$e.spotLightShadows.value=V.state.spotShadow,$e.rectAreaLights.value=V.state.rectArea,$e.ltc_1.value=V.state.rectAreaLTC1,$e.ltc_2.value=V.state.rectAreaLTC2,$e.pointLights.value=V.state.point,$e.pointLightShadows.value=V.state.pointShadow,$e.hemisphereLights.value=V.state.hemi,$e.directionalShadowMap.value=V.state.directionalShadowMap,$e.directionalShadowMatrix.value=V.state.directionalShadowMatrix,$e.spotShadowMap.value=V.state.spotShadowMap,$e.spotLightMatrix.value=V.state.spotLightMatrix,$e.spotLightMap.value=V.state.spotLightMap,$e.pointShadowMap.value=V.state.pointShadowMap,$e.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Kt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Sf.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function At(C,k){const Y=ze.get(C);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Tt(C,k,Y,X,V){k.isScene!==!0&&(k=Ie),b.resetTextureUnits();const pe=k.fog,Ce=X.isMeshStandardMaterial?k.environment:null,Ge=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:$r,Re=(X.isMeshStandardMaterial?z:A).get(X.envMap||Ce),Ne=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),$e=!!Y.morphAttributes.position,Pt=!!Y.morphAttributes.normal,Zt=!!Y.morphAttributes.color;let _t=Ps;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Ln=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xt=Ln!==void 0?Ln.length:0,je=ze.get(X),Od=_.state.lights;if($===!0&&(re===!0||C!==S)){const Li=C===S&&X.id===P;Ue.setState(X,C,Li)}let Bt=!1;X.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Od.state.version||je.outputColorSpace!==Ge||V.isBatchedMesh&&je.batching===!1||!V.isBatchedMesh&&je.batching===!0||V.isInstancedMesh&&je.instancing===!1||!V.isInstancedMesh&&je.instancing===!0||V.isSkinnedMesh&&je.skinning===!1||!V.isSkinnedMesh&&je.skinning===!0||V.isInstancedMesh&&je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&je.instancingColor===!1&&V.instanceColor!==null||je.envMap!==Re||X.fog===!0&&je.fog!==pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ue.numPlanes||je.numIntersection!==Ue.numIntersection)||je.vertexAlphas!==Ne||je.vertexTangents!==Ve||je.morphTargets!==$e||je.morphNormals!==Pt||je.morphColors!==Zt||je.toneMapping!==_t||ye.isWebGL2===!0&&je.morphTargetsCount!==xt)&&(Bt=!0):(Bt=!0,je.__version=X.version);let Vs=je.currentProgram;Bt===!0&&(Vs=Et(X,k,V));let _g=!1,fl=!1,Fd=!1;const xn=Vs.getUniforms(),Ws=je.uniforms;if(_e.useProgram(Vs.program)&&(_g=!0,fl=!0,Fd=!0),X.id!==P&&(P=X.id,fl=!0),_g||S!==C){xn.setValue(H,"projectionMatrix",C.projectionMatrix),xn.setValue(H,"viewMatrix",C.matrixWorldInverse);const Li=xn.map.cameraPosition;Li!==void 0&&Li.setValue(H,De.setFromMatrixPosition(C.matrixWorld)),ye.logarithmicDepthBuffer&&xn.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xn.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,fl=!0,Fd=!0)}if(V.isSkinnedMesh){xn.setOptional(H,V,"bindMatrix"),xn.setOptional(H,V,"bindMatrixInverse");const Li=V.skeleton;Li&&(ye.floatVertexTextures?(Li.boneTexture===null&&Li.computeBoneTexture(),xn.setValue(H,"boneTexture",Li.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(xn.setOptional(H,V,"batchingTexture"),xn.setValue(H,"batchingTexture",V._matricesTexture,b));const kd=Y.morphAttributes;if((kd.position!==void 0||kd.normal!==void 0||kd.color!==void 0&&ye.isWebGL2===!0)&&be.update(V,Y,Vs),(fl||je.receiveShadow!==V.receiveShadow)&&(je.receiveShadow=V.receiveShadow,xn.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ws.envMap.value=Re,Ws.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),fl&&(xn.setValue(H,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&mt(Ws,Fd),pe&&X.fog===!0&&J.refreshFogUniforms(Ws,pe),J.refreshMaterialUniforms(Ws,X,G,B,ge),Sf.upload(H,Kt(je),Ws,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Sf.upload(H,Kt(je),Ws,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xn.setValue(H,"center",V.center),xn.setValue(H,"modelViewMatrix",V.modelViewMatrix),xn.setValue(H,"normalMatrix",V.normalMatrix),xn.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Li=X.uniformsGroups;for(let zd=0,u1=Li.length;zd<u1;zd++)if(ye.isWebGL2){const gg=Li[zd];Ke.update(gg,Vs),Ke.bind(gg,Vs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vs}function mt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function ui(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,Y){ze.get(C.texture).__webglTexture=k,ze.get(C.depthTexture).__webglTexture=Y;const X=ze.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const Y=ze.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Y=0){M=C,T=k,w=Y;let X=!0,V=null,pe=!1,Ce=!1;if(C){const Re=ze.get(C);Re.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Re.__webglFramebuffer===void 0?b.setupRenderTarget(C):Re.__hasExternalTextures&&b.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ce=!0);const Ve=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?V=Ve[k][Y]:V=Ve[k],pe=!0):ye.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?V=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[Y]:V=Ve,E.copy(C.viewport),I.copy(C.scissor),N=C.scissorTest}else E.copy(R).multiplyScalar(G).floor(),I.copy(K).multiplyScalar(G).floor(),N=Q;if(_e.bindFramebuffer(H.FRAMEBUFFER,V)&&ye.drawBuffers&&X&&_e.drawBuffers(C,V),_e.viewport(E),_e.scissor(I),_e.setScissorTest(N),pe){const Re=ze.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,Y)}else if(Ce){const Re=ze.get(C.texture),Ne=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,Ne)}P=-1},this.readRenderTargetPixels=function(C,k,Y,X,V,pe,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ge=Ge[Ce]),Ge){_e.bindFramebuffer(H.FRAMEBUFFER,Ge);try{const Re=C.texture,Ne=Re.format,Ve=Re.type;if(Ne!==or&&Se.convert(Ne)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ve===Ou&&(ae.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ve!==Ls&&Se.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===gs&&(ye.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&Y>=0&&Y<=C.height-V&&H.readPixels(k,Y,X,V,Se.convert(Ne),Se.convert(Ve),pe)}finally{const Re=M!==null?ze.get(M).__webglFramebuffer:null;_e.bindFramebuffer(H.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(C,k,Y=0){const X=Math.pow(2,-Y),V=Math.floor(k.image.width*X),pe=Math.floor(k.image.height*X);b.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,Y,0,0,C.x,C.y,V,pe),_e.unbindTexture()},this.copyTextureToTexture=function(C,k,Y,X=0){const V=k.image.width,pe=k.image.height,Ce=Se.convert(Y.format),Ge=Se.convert(Y.type);b.setTexture2D(Y,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,C.x,C.y,V,pe,Ce,Ge,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Ce,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,C.x,C.y,Ce,Ge,k.image),X===0&&Y.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(C,k,Y,X,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,Ge=C.max.z-C.min.z+1,Re=Se.convert(X.format),Ne=Se.convert(X.type);let Ve;if(X.isData3DTexture)b.setTexture3D(X,0),Ve=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const $e=H.getParameter(H.UNPACK_ROW_LENGTH),Pt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Zt=H.getParameter(H.UNPACK_SKIP_PIXELS),_t=H.getParameter(H.UNPACK_SKIP_ROWS),Ln=H.getParameter(H.UNPACK_SKIP_IMAGES),xt=Y.isCompressedTexture?Y.mipmaps[V]:Y.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,xt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(Ve,V,k.x,k.y,k.z,pe,Ce,Ge,Re,Ne,xt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,V,k.x,k.y,k.z,pe,Ce,Ge,Re,xt.data)):H.texSubImage3D(Ve,V,k.x,k.y,k.z,pe,Ce,Ge,Re,Ne,xt),H.pixelStorei(H.UNPACK_ROW_LENGTH,$e),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zt),H.pixelStorei(H.UNPACK_SKIP_ROWS,_t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ln),V===0&&X.generateMipmaps&&H.generateMipmap(Ve),_e.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){T=0,w=0,M=null,_e.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Br}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===sg?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Ld?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===hn?wo:CE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===wo?hn:$r}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bD extends jE{}bD.prototype.isWebGL1Renderer=!0;class PD extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Pm extends ju{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rx=new cn,Lm=new og,$c=new Dd,Kc=new j;class bx extends ai{constructor(e=new $i,t=new Pm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$c.copy(i.boundingSphere),$c.applyMatrix4(r),$c.radius+=s,e.ray.intersectsSphere($c)===!1)return;Rx.copy(r).invert(),Lm.copy(e.ray).applyMatrix4(Rx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,m=p;g<m;g++){const _=u.getX(g);Kc.fromBufferAttribute(d,_),Px(Kc,_,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,m=p;g<m;g++)Kc.fromBufferAttribute(d,g),Px(Kc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Px(n,e,t,i,r,s,o){const a=Lm.distanceSqToPoint(n);if(a<t){const l=new j;Lm.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class LD extends oi{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class au extends $i{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let d=e;const h=(t-e)/r,p=new j,g=new ht;for(let m=0;m<=r;m++){for(let _=0;_<=i;_++){const f=s+_/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,c.push(g.x,g.y)}d+=h}for(let m=0;m<r;m++){const _=m*(i+1);for(let f=0;f<i;f++){const v=f+_,x=v,y=v+i+1,T=v+i+2,w=v+1;a.push(x,y,w),a.push(y,T,w)}}this.setIndex(a),this.setAttribute("position",new wi(l,3)),this.setAttribute("normal",new wi(u,3)),this.setAttribute("uv",new wi(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cg extends $i{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new j,h=new j,p=[],g=[],m=[],_=[];for(let f=0;f<=i;f++){const v=[],x=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const w=T/t;d.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),m.push(h.x,h.y,h.z),_.push(w+y,1-x),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const x=c[f][v+1],y=c[f][v],T=c[f+1][v],w=c[f+1][v+1];(f!==0||o>0)&&p.push(x,y,w),(f!==i-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new wi(g,3)),this.setAttribute("normal",new wi(m,3)),this.setAttribute("uv",new wi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class DD{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Lx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Lx(){return(typeof performance>"u"?Date:performance).now()}class UD{constructor(e,t,i=0,r=1/0){this.ray=new og(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ag,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Dm(e,this,i,t),i.sort(Dx),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Dm(e[r],this,i,t);return i.sort(Dx),i}}function Dx(n,e){return n.distance-e.distance}function Dm(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Dm(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ig}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ig);Vu.registerPlugin(Ze);function ND(){const n=Tr.useRef(null);return Tr.useEffect(()=>{const e=n.current;if(!e)return;function t(){const ce=document.createElement("canvas");ce.width=64,ce.height=64;const ae=ce.getContext("2d"),ye=ae.createRadialGradient(32,32,0,32,32,32);ye.addColorStop(0,"rgba(255, 255, 255, 1.0)"),ye.addColorStop(.15,"rgba(255, 230, 160, 0.9)"),ye.addColorStop(.35,"rgba(255, 120, 20, 0.45)"),ye.addColorStop(.65,"rgba(200, 40, 0, 0.15)"),ye.addColorStop(1,"rgba(0, 0, 0, 0)"),ae.fillStyle=ye,ae.beginPath(),ae.arc(32,32,32,0,Math.PI*2),ae.fill();const _e=new LD(ce);return _e.generateMipmaps=!1,_e.minFilter=qn,_e.magFilter=qn,_e.needsUpdate=!0,_e}const i=t(),r=7,s=new j(r,0,0),o=new PD,a=new ki(45,window.innerWidth/window.innerHeight,.1,1e3),l=new jE({canvas:e,antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const u=new Wi(new cg(1.65,64,64),new wa({color:0}));u.position.copy(s),o.add(u);const c=new Wi(new au(1.65,2.05,80),new wa({color:16752704,side:zi,transparent:!0,opacity:.75,blending:io}));c.position.copy(s),c.rotation.x=Math.PI/2,o.add(c);const d=new Wi(new au(2.05,2.35,80),new wa({color:16733440,side:zi,transparent:!0,opacity:.4,blending:io}));d.position.copy(s),d.rotation.x=Math.PI/2,o.add(d);const h=new Wi(new au(1.65,1.95,80),new wa({color:16755264,side:zi,transparent:!0,opacity:.65,blending:io}));h.position.copy(s),h.rotation.y=.15,o.add(h);const p=24e3,g=new $i,m=new Float32Array(p*3),_=new Float32Array(p*3),f=new Float32Array(p),v=new Float32Array(p),x=new Float32Array(p),y=new ut(16775406),T=new ut(16737792),w=new ut(7798784),M=new ut;for(let ce=0;ce<p;ce++){const ae=Math.pow(Math.random(),1.35),ye=1.85+ae*12.5,_e=Math.random()*Math.PI*2;v[ce]=ye,f[ce]=_e,x[ce]=.18/Math.sqrt(ye),m[ce*3]=r+Math.cos(_e)*ye,m[ce*3+1]=(Math.random()-.5)*(.15+ae*.35),m[ce*3+2]=Math.sin(_e)*ye,ae<.22?M.copy(y).lerp(T,ae/.22):M.copy(T).lerp(w,(ae-.22)/.78),_[ce*3]=M.r,_[ce*3+1]=M.g,_[ce*3+2]=M.b}g.setAttribute("position",new Ti(m,3)),g.setAttribute("color",new Ti(_,3));const P=new bx(g,new Pm({size:.13,map:i,vertexColors:!0,transparent:!0,opacity:.7,blending:io,depthWrite:!1}));o.add(P);const S=300,E=new $i,I=new Float32Array(S*3),N=new Float32Array(S*3);for(let ce=0;ce<S;ce++)I[ce*3]=r+(Math.random()-.5)*60,I[ce*3+1]=(Math.random()-.5)*50,I[ce*3+2]=Math.random()*30+5;E.setAttribute("position",new Ti(I,3));const Z=new bx(E,new Pm({color:16764040,size:.12,map:i,transparent:!0,opacity:.35,blending:io,depthWrite:!1}));o.add(Z);const L={camZ:21,camY:2.5,camX:0,lookX:0,lookY:0,lookZ:0,baseSpeed:2};let O=new ht(0,0),B=new ht(0,0),G=!1,U=!1,F=null;const R=new UD,K=new os(new j(0,1,0),0),Q=new j(9999,0,9999),q=new j;let $=0;const re=ce=>{O.x=ce.clientX/window.innerWidth*2-1,O.y=-(ce.clientY/window.innerHeight)*2+1,G=!0},ge=()=>{G=!1},me=()=>{U=!0,F&&clearTimeout(F),F=setTimeout(()=>{U=!1},120)},Le=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",re),window.addEventListener("mouseleave",ge),window.addEventListener("scroll",me,{passive:!0}),window.addEventListener("resize",Le);const De=new DD;let Ie;function We(){Ie=requestAnimationFrame(We);const ce=Math.min(De.getDelta(),.05),ae=De.getElapsedTime(),ye=U?3:5;B.x+=(O.x-B.x)*(1-Math.exp(-ye*ce)),B.y+=(O.y-B.y)*(1-Math.exp(-ye*ce));const _e=L.camX+B.x*1.6,W=L.camY+B.y*1.6;a.position.x+=(_e-a.position.x)*(1-Math.exp(-5*ce)),a.position.y+=(W-a.position.y)*(1-Math.exp(-5*ce)),a.position.z+=(L.camZ-a.position.z)*(1-Math.exp(-5*ce)),a.lookAt(L.lookX,L.lookY,L.lookZ),$+=((G&&!U?1:0)-$)*(1-Math.exp(-6*ce)),G&&$>.01?(R.setFromCamera(B,a),R.ray.intersectPlane(K,q)&&Q.copy(q)):Q.set(9999,0,9999);const b=L.baseSpeed,A=P.geometry.attributes.position.array,z=.65,ne=z*z,te=$>.02&&Q.x<9e3,ie=te?Math.hypot(Q.x-r,Q.z):-1;for(let J=0;J<p;J++){const se=v[J];f[J]-=x[J]*ce*b*60;const Me=r+Math.cos(f[J])*se,Ue=Math.sin(f[J])*se;let ee=0,Qe=0,be=0;if(te&&Math.abs(se-ie)<z){const Xe=Me-Q.x,Ke=Ue-Q.z,lt=Xe*Xe+Ke*Ke;if(lt<ne&&lt>1e-4){const ve=Math.sqrt(lt),le=ve/z,D=Math.cos(le*Math.PI*.5)*.35*$;ee=Xe/ve*D,Qe=Ke/ve*D,be=(1-le)*.22*Math.sin(ae*3.5)*$}}const Ye=Math.sin(ae*.9+f[J]*2.2+se*1.3)*.32,Ae=Math.cos(ae*.5-se*.8)*.16,Se=Ye+Ae;A[J*3]=Me+ee,A[J*3+1]=Se+be,A[J*3+2]=Ue+Qe}P.geometry.attributes.position.needsUpdate=!0;const fe=Z.geometry.attributes.position.array;for(let J=0;J<S;J++){const se=r-fe[J*3],Me=-fe[J*3+1],Ue=-fe[J*3+2],ee=se*se+Me*Me+Ue*Ue,Qe=Math.min(20/(ee+1),1.4);N[J*3]+=se*2e-4*Qe,N[J*3+1]+=Me*2e-4*Qe,N[J*3+2]+=Ue*2e-4*Qe,fe[J*3]+=N[J*3],fe[J*3+1]+=N[J*3+1],fe[J*3+2]+=N[J*3+2],(ee<3.5||fe[J*3+2]<-10)&&(fe[J*3]=r+(Math.random()-.5)*60,fe[J*3+1]=(Math.random()-.5)*50,fe[J*3+2]=Math.random()*30+10,N[J*3]=0,N[J*3+1]=0,N[J*3+2]=0)}Z.geometry.attributes.position.needsUpdate=!0,c.scale.setScalar(1+Math.sin(ae*1.8)*.015),d.scale.setScalar(1+Math.cos(ae*1.4)*.015),h.scale.setScalar(1+Math.sin(ae*1.2)*.012),l.render(o,a)}a.position.set(L.camX,L.camY,L.camZ),We();const H=Vu.timeline({scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:1.2}});return H.to(L,{camZ:14,camY:7.5,camX:3.5,lookX:3.5,baseSpeed:2.2,duration:.5,ease:"power1.inOut"}),H.to(L,{camY:17.5,camX:r,lookX:r,camZ:.2,baseSpeed:2.8,duration:.5,ease:"power2.inOut"}),window.__getBHScreenCoord=()=>{const ce=new j(r,0,0).project(a);return{x:(ce.x*.5+.5)*window.innerWidth,y:(-ce.y*.5+.5)*window.innerHeight}},()=>{cancelAnimationFrame(Ie),window.removeEventListener("mousemove",re),window.removeEventListener("mouseleave",ge),window.removeEventListener("scroll",me),window.removeEventListener("resize",Le),H.kill(),l.dispose()}},[]),dt.jsx("canvas",{id:"blackhole-canvas",ref:n})}const Zc={name:"Maheswar N P",title:"BUILDER • ROBOTICS & AI ENGINEER",github:"https://github.com/MaheswarPraveen",linkedin:"https://www.linkedin.com/in/maheswarpraveen"},ID=[{id:"00",category:"PROFILE",title:"Autonomous Systems Builder",description:"Developing end-to-end robotics systems across ROS 2, bare-metal firmware, and edge AI accelerators. Focused on real-time motor control, kinematic trajectories, and hardware deployment.",tags:["ROS 2","Edge AI","Embedded Systems"]},{id:"01",category:"ROBOTICS",title:"SpotMicro Quadruped",description:"12-DOF quadruped robot powered by 12× DS3218 servos and an Arduino UNO Q running Zephyr RTOS for ~200Hz analytical inverse kinematics and quintic spline gaits. Custom 6.8V high-current busbar rail off a 3S LiPo to handle 20A transient bursts without brownouts.",tags:["Zephyr RTOS","Arduino UNO Q","200Hz IK","3S LiPo Busbar"]},{id:"02",category:"FIELD AI",title:"Autonomous Skid-Steer Rover",description:"Field farming rover equipped with a 4-DOF robotic manipulator for precision weed removal. Powered by ROS 2 and an edge Hailo-8L NPU executing real-time YOLO vision guidance for field deployment.",tags:["ROS 2","Hailo-8L NPU","YOLO","4-DOF Arm"]},{id:"03",category:"DRIVER ARCHITECTURE",title:"RoArm M2-S PlayMotion",description:"High-precision trajectory recording and autonomous playback driver featuring dual-mode teaching (physical freedrive & keyboard jogging). Streams 25Hz quintic polynomial splines for zero-jerk motion with serial noise filtering. Officially adopted into the Waveshare Wiki.",tags:["Quintic Splines","Python Driver","Waveshare Wiki"]},{id:"04",category:"TELEMETRY BRIDGE",title:"ArduROSPI Bridge",description:"Zero-dependency ROS 2 ↔ MAVLink translation layer built with pymavlink, replacing heavy MAVROS on resource-constrained Raspberry Pi rovers. Implements 10Hz IMU streaming, automatic serial reconnect, and mission mode switching.",tags:["pymavlink","ROS 2","ArduPilot"]},{id:"05",category:"INTERACTIVE SYSTEMS",title:"Kalkii Genesis",description:"Cyberpunk 2.5D action title solo-engineered in Godot 4. Custom hierarchical combat state machines, frame-accurate animation cancelling, dynamic 2D lighting, and responsive platformer physics controllers.",tags:["Godot 4","Combat State Machines","GDScript"]},{id:"06",category:"EMBEDDED VISION",title:"Plant Disease Detection CNN",description:"End-to-end computer vision pipeline for agricultural crop leaf pathology. Implements OpenCV preprocessing, custom convolutional neural network (CNN) architectures in TensorFlow, achieving 80% test accuracy on unseen diseased foliage datasets.",tags:["TensorFlow","OpenCV","80% Test Accuracy"]}],OD=[{label:"Languages & AI",value:"Python, C/C++, GDScript, PyTorch, TensorFlow, YOLO, OpenCV"},{label:"Robotics & Protocols",value:"ROS 2 (Humble/Jazzy), MAVLink, CAN, UART, I2C, SPI, MQTT"},{label:"Hardware & Engineering",value:"Hailo-8L NPU, Arduino UNO Q, Raspberry Pi, Zephyr RTOS, Fusion 360"}];(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function FD(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Ux(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Nx(n,e,t){return e&&Ux(n.prototype,e),t&&Ux(n,t),n}function kD(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ix(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ox(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ix(Object(t),!0).forEach(function(i){kD(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ix(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function qE(n,e){return BD(n)||GD(n,e)||$E(n,e)||WD()}function Bn(n){return zD(n)||HD(n)||$E(n)||VD()}function zD(n){if(Array.isArray(n))return Um(n)}function BD(n){if(Array.isArray(n))return n}function HD(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function GD(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function $E(n,e){if(n){if(typeof n=="string")return Um(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Um(n,e)}}function Um(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function VD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fo(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function $u(n){return typeof n=="string"}function fg(n){return Array.isArray(n)}function Qc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=fo(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=($u(t)||fg(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function dg(n){var e=$u(n)||fg(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Id(n){return n!==null&&typeof n=="object"}function XD(n){return Id(n)&&/^(1|3|11)$/.test(n.nodeType)}function YD(n){return typeof n=="number"&&n>-1&&n%1===0}function jD(n){return Id(n)&&YD(n.length)}function Oo(n){return fg(n)?n:n==null?[]:jD(n)?Array.prototype.slice.call(n):[n]}function Fx(n){var e=n;return $u(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),Oo(e).reduce(function(t,i){return[].concat(Bn(t),Bn(Oo(i).filter(XD)))},[])}var qD=Object.entries,ud="_splittype",ur={},$D=0;function yr(n,e,t){if(!Id(n))return console.warn("[data.set] owner is not an object"),null;var i=n[ud]||(n[ud]=++$D),r=ur[i]||(ur[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(ur[i]=Ox(Ox({},r),e)):e!==void 0&&(r[e]=t),t}function ho(n,e){var t=Id(n)?n[ud]:null,i=t&&ur[t]||{};return i}function KE(n){var e=n&&n[ud];e&&(delete n[e],delete ur[e])}function KD(){Object.keys(ur).forEach(function(n){delete ur[n]})}function ZD(){qD(ur).forEach(function(n){var e=qE(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(ur[t]=null,delete ur[t])})}function QD(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var hg="\\ud800-\\udfff",ZE="\\u0300-\\u036f\\ufe20-\\ufe23",QE="\\u20d0-\\u20f0",JE="\\ufe0e\\ufe0f",JD="[".concat(hg,"]"),Nm="[".concat(ZE).concat(QE,"]"),Im="\\ud83c[\\udffb-\\udfff]",e3="(?:".concat(Nm,"|").concat(Im,")"),e1="[^".concat(hg,"]"),t1="(?:\\ud83c[\\udde6-\\uddff]){2}",n1="[\\ud800-\\udbff][\\udc00-\\udfff]",i1="\\u200d",r1="".concat(e3,"?"),s1="[".concat(JE,"]?"),t3="(?:"+i1+"(?:"+[e1,t1,n1].join("|")+")"+s1+r1+")*",n3=s1+r1+t3,i3="(?:".concat(["".concat(e1).concat(Nm,"?"),Nm,t1,n1,JD].join("|"),`
)`),r3=RegExp("".concat(Im,"(?=").concat(Im,")|").concat(i3).concat(n3),"g"),s3=[i1,hg,ZE,QE,JE],o3=RegExp("[".concat(s3.join(""),"]"));function a3(n){return n.split("")}function o1(n){return o3.test(n)}function l3(n){return n.match(r3)||[]}function u3(n){return o1(n)?l3(n):a3(n)}function c3(n){return n==null?"":String(n)}function f3(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=c3(n),n&&$u(n)&&!e&&o1(n)?u3(n):n.split(e)}function Om(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=$u(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,Bn(Oo(s))):t.setAttribute(i,s))}),t}var pg={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function d3(n,e){e=fo(pg,e);var t=dg(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=QD(r).reduce(function(l,u,c,d){var h,p;return t.chars&&(p=f3(u).map(function(g){var m=Om(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:g});return yr(m,"isChar",!0),a=[].concat(Bn(a),[m]),m})),t.words||t.lines?(h=Om(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),yr(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):p.forEach(function(g){s.appendChild(g)}),c<d.length-1&&s.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function a1(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return d3(n,e);var r=Oo(n.childNodes);if(r.length&&(yr(n,"isSplit",!0),!ho(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";yr(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,d){var h=a1(d,e),p=h.words,g=h.chars;return{words:[].concat(Bn(c.words),Bn(p)),chars:[].concat(Bn(c.chars),Bn(g))}},i)}function h3(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=qE(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var d=n.getBoundingClientRect(),h=d.width,p=d.height,g=d.x,m=d.y,_=m+a-u,f=g+o-l;return{width:h,height:p,top:_,left:f}}function l1(n){ho(n).isWord?(KE(n),n.replaceWith.apply(n,Bn(n.childNodes))):Oo(n.children).forEach(function(e){return l1(e)})}var p3=function(){return document.createDocumentFragment()};function m3(n,e,t){var i=dg(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,d,h=[],p=n.parentElement,g=n.nextElementSibling,m=p3(),_=window.getComputedStyle(n),f=_.textAlign,v=parseFloat(_.fontSize),x=v*.2;return e.absolute&&(d={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,yr(n,{cssWidth:n.style.width,cssHeight:n.style.height})),Oo(s).forEach(function(y){var T=y.parentElement===n,w=h3(y,T,e,t),M=w.width,P=w.height,S=w.top,E=w.left;/^br$/i.test(y.nodeName)||(i.lines&&T&&((l===null||S-l>=x)&&(l=S,o.push(a=[])),a.push(y)),e.absolute&&yr(y,{top:S,left:E,width:M,height:P}))}),p&&p.removeChild(n),i.lines&&(h=o.map(function(y){var T=Om(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(f,"; width: 100%;")});yr(T,"isLine",!0);var w={height:0,top:1e4};return m.appendChild(T),y.forEach(function(M,P,S){var E=ho(M),I=E.isWordEnd,N=E.top,Z=E.height,L=S[P+1];w.height=Math.max(w.height,Z),w.top=Math.min(w.top,N),T.appendChild(M),I&&ho(L).isWordStart&&T.append(" ")}),e.absolute&&yr(T,{height:w.height,top:w.top}),T}),i.words||l1(m),n.replaceChildren(m)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),Oo(s).forEach(function(y){var T=ho(y),w=T.isLine,M=T.top,P=T.left,S=T.width,E=T.height,I=ho(y.parentElement),N=!w&&I.isLine;y.style.top="".concat(N?M-I.top:M,"px"),y.style.left=w?"".concat(d.left,"px"):"".concat(P-(N?d.left:0),"px"),y.style.height="".concat(E,"px"),y.style.width=w?"".concat(d.width,"px"):"".concat(S,"px"),y.style.position="absolute"})),p&&(g?p.insertBefore(n,g):p.appendChild(n)),h}var aa=fo(pg,{}),_3=function(){Nx(n,null,[{key:"clearData",value:function(){KD()}},{key:"setDefaults",value:function(t){return aa=fo(aa,Qc(t)),pg}},{key:"revert",value:function(t){Fx(t).forEach(function(i){var r=ho(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",KE(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return ur}},{key:"defaults",get:function(){return aa},set:function(t){aa=fo(aa,Qc(t))}}]);function n(e,t){FD(this,n),this.isSplit=!1,this.settings=fo(aa,Qc(t)),this.elements=Fx(e),this.split()}return Nx(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){yr(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=fo(this.settings,Qc(t)));var s=dg(this.settings.types);s.none||(this.elements.forEach(function(o){yr(o,"isRoot",!0);var a=a1(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(Bn(i.words),Bn(l)),i.chars=[].concat(Bn(i.chars),Bn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=m3(o,i.settings,r);i.lines=[].concat(Bn(i.lines),Bn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),ZD())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();Vu.registerPlugin(Ze);function mg(n,{isHero:e=!1,isStack:t=!1}={}){Tr.useEffect(()=>{const i=n.current;if(!i)return;let r=".section-title, .tag, .project-index, .section-desc";e?r=".name-title, .hero-subtitle, .clean-link":t&&(r=".section-title, .project-index, .stack-label, .stack-val");const s=new _3(i.querySelectorAll(r),{types:"chars"}),o=Array.from(i.querySelectorAll(".char")),a=Array.from(i.querySelectorAll(".tag, .section-title, .hero-links, .clean-link, .stack-col")),l=o.length;o.forEach(g=>{g.dataset.orig=g.textContent});let u=[];function c(){u=o.map(g=>{const m=g.getBoundingClientRect();return{x:m.left,y:m.top}})}c();let d=null;e||(d=Ze.create({trigger:i,start:"top 95%",end:"top 5%",scrub:1,onUpdate:g=>{if(g.progress<1){const m=Math.min(1,g.progress*1.5),_=.96+.04*g.progress;i.style.opacity=m.toFixed(2),i.style.transform=`scale(${_.toFixed(3)})`}}}));let h=-1;const p=Ze.create({trigger:i,start:"top top",end:e?"+=38%":"+=48%",pin:!0,pinSpacing:!0,scrub:1,onEnter:()=>c(),onEnterBack:()=>c(),onUpdate:g=>{const m=g.progress,_=Math.floor(m*36);if(_===h)return;if(h=_,m<=.08){o.forEach(y=>{y.textContent!==y.dataset.orig&&(y.textContent=y.dataset.orig),y.style.color="",y.style.opacity="1",y.style.transform="",y.style.textShadow=""}),i.style.opacity="1",i.style.transform="",a.forEach(y=>{y.style.opacity="1",y.style.borderColor=""});return}u.length!==l&&c();const f=window.__getBHScreenCoord?window.__getBHScreenCoord():{x:window.innerWidth*.72,y:window.innerHeight*.5};o.forEach((y,T)=>{const w=.08+T/l*.32,M=.16,P=.14;if(m<w){y.textContent!==y.dataset.orig&&(y.textContent=y.dataset.orig),y.style.color="",y.style.opacity="1",y.style.transform="",y.style.textShadow="";return}const S=m-w;if(S<M)y.textContent=Math.random()>.5?"1":"0",y.style.color=Math.random()>.3?"#ffb030":"#ffe480",y.style.textShadow="0 0 8px rgba(255, 176, 48, 0.6)",y.style.opacity="1",y.style.transform="";else if(S<M+P)y.textContent="0",y.style.color="#ffa020",y.style.textShadow="0 0 10px rgba(255, 160, 32, 0.7)",y.style.opacity="1",y.style.transform="";else{y.textContent="0";const E=Math.min(1,(S-M-P)/.3),I=Math.pow(E,2.2),N=u[T]||{x:window.innerWidth*.25,y:window.innerHeight*.5},Z=f.x-N.x,L=f.y-N.y,O=T*.12+I*3.5,B=Math.sin(O)*25*(1-I),G=Math.cos(O)*18*(1-I),U=Z*I+B,F=L*I+G,R=-I*550,K=1+I*.4,Q=Math.max(.1,1-I*.8),q=I*55,$=-I*18,re=Math.max(0,1-Math.pow(E,2.5));y.style.transform=`translate3d(${U.toFixed(1)}px, ${F.toFixed(1)}px, ${R.toFixed(0)}px) rotateX(${q.toFixed(0)}deg) rotateZ(${$.toFixed(0)}deg) scale(${K.toFixed(2)}, ${Q.toFixed(2)})`,y.style.color=I<.5?"#ff9010":"#dd3000",y.style.textShadow=`0 0 ${Math.max(2,12*(1-I)).toFixed(1)}px rgba(255, 120, 20, 0.8)`,y.style.opacity=re.toFixed(2)}});const v=Math.max(0,(m-.45)/.45),x=Math.max(0,1-v*1.3);i.style.opacity=x.toFixed(2),a.forEach(y=>{y.style.opacity=x.toFixed(2),y.style.borderColor=`rgba(255, 255, 255, ${(.12*x).toFixed(3)})`})},onLeave:()=>{o.forEach(g=>{g.textContent="0",g.style.opacity="0"}),i.style.opacity="0"},onLeaveBack:()=>{o.forEach(g=>{g.textContent=g.dataset.orig,g.style.color="",g.style.opacity="1",g.style.transform="",g.style.textShadow=""}),i.style.opacity="1",i.style.transform="",a.forEach(g=>{g.style.borderColor="",g.style.opacity="1"})}});return()=>{d&&d.kill(),p.kill(),s.revert()}},[e,t])}function g3(){const n=Tr.useRef(null);return mg(n,{isHero:!0}),dt.jsxs("header",{className:"card hero-card",ref:n,"data-offset":"0",children:[dt.jsx("h1",{className:"name-title",children:Zc.name}),dt.jsx("p",{className:"hero-subtitle",children:Zc.title}),dt.jsxs("div",{className:"hero-links",children:[dt.jsx("a",{href:Zc.github,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"GitHub"}),dt.jsx("a",{href:Zc.linkedin,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"LinkedIn"})]})]})}function v3({project:n,index:e}){const t=Tr.useRef(null);return mg(t,{isHero:!1}),dt.jsxs("section",{className:"card content-card",ref:t,"data-offset":e+1,children:[dt.jsxs("span",{className:"project-index",children:[n.id," // ",n.category]}),dt.jsx("h2",{className:"section-title",children:n.title}),dt.jsx("p",{className:"section-desc",children:n.description}),dt.jsx("div",{className:"tag-cloud",children:n.tags.map((i,r)=>dt.jsx("span",{className:"tag",children:i},r))})]})}function x3(){const n=Tr.useRef(null);return mg(n,{isStack:!0}),dt.jsxs("section",{className:"card content-card",ref:n,"data-offset":"8",children:[dt.jsx("span",{className:"project-index",children:"07 // STACK"}),dt.jsx("h2",{className:"section-title",children:"Technical Capabilities"}),dt.jsx("div",{className:"stack-grid",children:OD.map((e,t)=>dt.jsxs("div",{className:"stack-col",children:[dt.jsx("span",{className:"stack-label",children:e.label}),dt.jsx("span",{className:"stack-val",children:e.value})]},t))})]})}Vu.registerPlugin(Ze);function y3(){return Tr.useEffect(()=>{const n=Ze.create({trigger:".scroll-end-trigger",start:"top 80%",end:"bottom bottom",scrub:1,onUpdate:e=>{const t=document.getElementById("flash-overlay");t&&(e.progress<.6?(t.style.backgroundColor="#ffffff",t.style.opacity=(e.progress/.6).toFixed(2)):(t.style.backgroundColor="#000000",t.style.opacity=((e.progress-.6)/.4).toFixed(2)))}});return()=>n.kill()},[]),dt.jsxs(dt.Fragment,{children:[dt.jsx("div",{id:"flash-overlay"}),dt.jsx(ND,{}),dt.jsxs("main",{id:"ui-container",children:[dt.jsx(g3,{}),ID.map((n,e)=>dt.jsx(v3,{project:n,index:e},n.id)),dt.jsx(x3,{})]}),dt.jsx("div",{className:"scroll-end-trigger"})]})}ip.createRoot(document.getElementById("root")).render(dt.jsx(A1.StrictMode,{children:dt.jsx(y3,{})}));
