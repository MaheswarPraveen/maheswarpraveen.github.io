(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function S1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vx={exports:{}},hd={},Gx={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hu=Symbol.for("react.element"),M1=Symbol.for("react.portal"),E1=Symbol.for("react.fragment"),T1=Symbol.for("react.strict_mode"),w1=Symbol.for("react.profiler"),A1=Symbol.for("react.provider"),C1=Symbol.for("react.context"),R1=Symbol.for("react.forward_ref"),b1=Symbol.for("react.suspense"),P1=Symbol.for("react.memo"),L1=Symbol.for("react.lazy"),S_=Symbol.iterator;function D1(n){return n===null||typeof n!="object"?null:(n=S_&&n[S_]||n["@@iterator"],typeof n=="function"?n:null)}var Wx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xx=Object.assign,Yx={};function ll(n,e,t){this.props=n,this.context=e,this.refs=Yx,this.updater=t||Wx}ll.prototype.isReactComponent={};ll.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ll.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function jx(){}jx.prototype=ll.prototype;function Bm(n,e,t){this.props=n,this.context=e,this.refs=Yx,this.updater=t||Wx}var Hm=Bm.prototype=new jx;Hm.constructor=Bm;Xx(Hm,ll.prototype);Hm.isPureReactComponent=!0;var M_=Array.isArray,qx=Object.prototype.hasOwnProperty,Vm={current:null},$x={key:!0,ref:!0,__self:!0,__source:!0};function Kx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qx.call(e,i)&&!$x.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Hu,type:n,key:s,ref:o,props:r,_owner:Vm.current}}function U1(n,e){return{$$typeof:Hu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Gm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Hu}function N1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var E_=/\/+/g;function Gd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?N1(""+n.key):e.toString(36)}function nf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Hu:case M1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Gd(o,0):i,M_(r)?(t="",n!=null&&(t=n.replace(E_,"$&/")+"/"),nf(r,e,t,"",function(u){return u})):r!=null&&(Gm(r)&&(r=U1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(E_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",M_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Gd(s,a);o+=nf(s,e,t,l,r)}else if(l=D1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Gd(s,a++),o+=nf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ec(n,e,t){if(n==null)return n;var i=[],r=0;return nf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function I1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Wn={current:null},rf={transition:null},O1={ReactCurrentDispatcher:Wn,ReactCurrentBatchConfig:rf,ReactCurrentOwner:Vm};function Zx(){throw Error("act(...) is not supported in production builds of React.")}ut.Children={map:ec,forEach:function(n,e,t){ec(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ec(n,function(){e++}),e},toArray:function(n){return ec(n,function(e){return e})||[]},only:function(n){if(!Gm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ut.Component=ll;ut.Fragment=E1;ut.Profiler=w1;ut.PureComponent=Bm;ut.StrictMode=T1;ut.Suspense=b1;ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O1;ut.act=Zx;ut.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Xx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)qx.call(e,l)&&!$x.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Hu,type:n.type,key:r,ref:s,props:i,_owner:o}};ut.createContext=function(n){return n={$$typeof:C1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:A1,_context:n},n.Consumer=n};ut.createElement=Kx;ut.createFactory=function(n){var e=Kx.bind(null,n);return e.type=n,e};ut.createRef=function(){return{current:null}};ut.forwardRef=function(n){return{$$typeof:R1,render:n}};ut.isValidElement=Gm;ut.lazy=function(n){return{$$typeof:L1,_payload:{_status:-1,_result:n},_init:I1}};ut.memo=function(n,e){return{$$typeof:P1,type:n,compare:e===void 0?null:e}};ut.startTransition=function(n){var e=rf.transition;rf.transition={};try{n()}finally{rf.transition=e}};ut.unstable_act=Zx;ut.useCallback=function(n,e){return Wn.current.useCallback(n,e)};ut.useContext=function(n){return Wn.current.useContext(n)};ut.useDebugValue=function(){};ut.useDeferredValue=function(n){return Wn.current.useDeferredValue(n)};ut.useEffect=function(n,e){return Wn.current.useEffect(n,e)};ut.useId=function(){return Wn.current.useId()};ut.useImperativeHandle=function(n,e,t){return Wn.current.useImperativeHandle(n,e,t)};ut.useInsertionEffect=function(n,e){return Wn.current.useInsertionEffect(n,e)};ut.useLayoutEffect=function(n,e){return Wn.current.useLayoutEffect(n,e)};ut.useMemo=function(n,e){return Wn.current.useMemo(n,e)};ut.useReducer=function(n,e,t){return Wn.current.useReducer(n,e,t)};ut.useRef=function(n){return Wn.current.useRef(n)};ut.useState=function(n){return Wn.current.useState(n)};ut.useSyncExternalStore=function(n,e,t){return Wn.current.useSyncExternalStore(n,e,t)};ut.useTransition=function(){return Wn.current.useTransition()};ut.version="18.3.1";Gx.exports=ut;var bo=Gx.exports;const F1=S1(bo);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=bo,z1=Symbol.for("react.element"),B1=Symbol.for("react.fragment"),H1=Object.prototype.hasOwnProperty,V1=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G1={key:!0,ref:!0,__self:!0,__source:!0};function Qx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)H1.call(e,i)&&!G1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:z1,type:n,key:s,ref:o,props:r,_owner:V1.current}}hd.Fragment=B1;hd.jsx=Qx;hd.jsxs=Qx;Vx.exports=hd;var ht=Vx.exports,op={},Jx={exports:{}},Ui={},ey={exports:{}},ty={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,k){var R=D.length;D.push(k);e:for(;0<R;){var $=R-1>>>1,Q=D[$];if(0<r(Q,k))D[$]=k,D[R]=Q,R=$;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var k=D[0],R=D.pop();if(R!==k){D[0]=R;e:for(var $=0,Q=D.length,q=Q>>>1;$<q;){var K=2*($+1)-1,ie=D[K],de=K+1,he=D[de];if(0>r(ie,R))de<Q&&0>r(he,ie)?(D[$]=he,D[de]=R,$=de):(D[$]=ie,D[K]=R,$=K);else if(de<Q&&0>r(he,R))D[$]=he,D[de]=R,$=de;else break e}}return k}function r(D,k){var R=D.sortIndex-k.sortIndex;return R!==0?R:D.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var k=t(u);k!==null;){if(k.callback===null)i(u);else if(k.startTime<=D)i(u),k.sortIndex=k.expirationTime,e(l,k);else break;k=t(u)}}function y(D){if(g=!1,x(D),!_)if(t(l)!==null)_=!0,B(T);else{var k=t(u);k!==null&&H(y,k.startTime-D)}}function T(D,k){_=!1,g&&(g=!1,f(P),P=-1),p=!0;var R=h;try{for(x(k),d=t(l);d!==null&&(!(d.expirationTime>k)||D&&!I());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var Q=$(d.expirationTime<=k);k=n.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(l)&&i(l),x(k)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var K=t(u);K!==null&&H(y,K.startTime-k),q=!1}return q}finally{d=null,h=R,p=!1}}var w=!1,M=null,P=-1,S=5,E=-1;function I(){return!(n.unstable_now()-E<S)}function N(){if(M!==null){var D=n.unstable_now();E=D;var k=!0;try{k=M(!0,D)}finally{k?Z():(w=!1,M=null)}}else w=!1}var Z;if(typeof v=="function")Z=function(){v(N)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,F=L.port2;L.port1.onmessage=N,Z=function(){F.postMessage(null)}}else Z=function(){m(N,0)};function B(D){M=D,w||(w=!0,Z())}function H(D,k){P=m(function(){D(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,B(T))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var R=h;h=k;try{return D()}finally{h=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var R=h;h=D;try{return k()}finally{h=R}},n.unstable_scheduleCallback=function(D,k,R){var $=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,D){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=R+Q,D={id:c++,callback:k,priorityLevel:D,startTime:R,expirationTime:Q,sortIndex:-1},R>$?(D.sortIndex=R,e(u,D),t(l)===null&&D===t(u)&&(g?(f(P),P=-1):g=!0,H(y,R-$))):(D.sortIndex=Q,e(l,D),_||p||(_=!0,B(T))),D},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(D){var k=h;return function(){var R=h;h=k;try{return D.apply(this,arguments)}finally{h=R}}}})(ty);ey.exports=ty;var W1=ey.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1=bo,bi=W1;function re(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ny=new Set,du={};function zo(n,e){Wa(n,e),Wa(n+"Capture",e)}function Wa(n,e){for(du[n]=e,n=0;n<e.length;n++)ny.add(e[n])}var Yr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ap=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,T_={},w_={};function j1(n){return ap.call(w_,n)?!0:ap.call(T_,n)?!1:Y1.test(n)?w_[n]=!0:(T_[n]=!0,!1)}function q1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $1(n,e,t,i){if(e===null||typeof e>"u"||q1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Xn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){xn[n]=new Xn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];xn[e]=new Xn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){xn[n]=new Xn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){xn[n]=new Xn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){xn[n]=new Xn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){xn[n]=new Xn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){xn[n]=new Xn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){xn[n]=new Xn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){xn[n]=new Xn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Wm=/[\-:]([a-z])/g;function Xm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Wm,Xm);xn[e]=new Xn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Wm,Xm);xn[e]=new Xn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Wm,Xm);xn[e]=new Xn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){xn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!1,!1)});xn.xlinkHref=new Xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){xn[n]=new Xn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ym(n,e,t,i){var r=xn.hasOwnProperty(e)?xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($1(e,t,r,i)&&(t=null),i||r===null?j1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Jr=X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tc=Symbol.for("react.element"),da=Symbol.for("react.portal"),ha=Symbol.for("react.fragment"),jm=Symbol.for("react.strict_mode"),lp=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),ry=Symbol.for("react.context"),qm=Symbol.for("react.forward_ref"),up=Symbol.for("react.suspense"),cp=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),as=Symbol.for("react.lazy"),sy=Symbol.for("react.offscreen"),A_=Symbol.iterator;function ml(n){return n===null||typeof n!="object"?null:(n=A_&&n[A_]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Object.assign,Wd;function Dl(n){if(Wd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Wd=e&&e[1]||""}return`
`+Wd+n}var Xd=!1;function Yd(n,e){if(!n||Xd)return"";Xd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Dl(n):""}function K1(n){switch(n.tag){case 5:return Dl(n.type);case 16:return Dl("Lazy");case 13:return Dl("Suspense");case 19:return Dl("SuspenseList");case 0:case 2:case 15:return n=Yd(n.type,!1),n;case 11:return n=Yd(n.type.render,!1),n;case 1:return n=Yd(n.type,!0),n;default:return""}}function fp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ha:return"Fragment";case da:return"Portal";case lp:return"Profiler";case jm:return"StrictMode";case up:return"Suspense";case cp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ry:return(n.displayName||"Context")+".Consumer";case iy:return(n._context.displayName||"Context")+".Provider";case qm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $m:return e=n.displayName||null,e!==null?e:fp(n.type)||"Memo";case as:e=n._payload,n=n._init;try{return fp(n(e))}catch{}}return null}function Z1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fp(e);case 8:return e===jm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Is(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function oy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Q1(n){var e=oy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function nc(n){n._valueTracker||(n._valueTracker=Q1(n))}function ay(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=oy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function wf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dp(n,e){var t=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function C_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Is(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ly(n,e){e=e.checked,e!=null&&Ym(n,"checked",e,!1)}function hp(n,e){ly(n,e);var t=Is(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?pp(n,e.type,t):e.hasOwnProperty("defaultValue")&&pp(n,e.type,Is(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function R_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function pp(n,e,t){(e!=="number"||wf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ul=Array.isArray;function ba(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Is(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function mp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function b_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(re(92));if(Ul(t)){if(1<t.length)throw Error(re(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Is(t)}}function uy(n,e){var t=Is(e.value),i=Is(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function P_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function cy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?cy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ic,fy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ic=ic||document.createElement("div"),ic.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ic.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function hu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Gl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J1=["Webkit","ms","Moz","O"];Object.keys(Gl).forEach(function(n){J1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Gl[e]=Gl[n]})});function dy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Gl.hasOwnProperty(n)&&Gl[n]?(""+e).trim():e+"px"}function hy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=dy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var eT=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _p(n,e){if(e){if(eT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function vp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xp=null;function Km(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yp=null,Pa=null,La=null;function L_(n){if(n=Wu(n)){if(typeof yp!="function")throw Error(re(280));var e=n.stateNode;e&&(e=vd(e),yp(n.stateNode,n.type,e))}}function py(n){Pa?La?La.push(n):La=[n]:Pa=n}function my(){if(Pa){var n=Pa,e=La;if(La=Pa=null,L_(n),e)for(n=0;n<e.length;n++)L_(e[n])}}function gy(n,e){return n(e)}function _y(){}var jd=!1;function vy(n,e,t){if(jd)return n(e,t);jd=!0;try{return gy(n,e,t)}finally{jd=!1,(Pa!==null||La!==null)&&(_y(),my())}}function pu(n,e){var t=n.stateNode;if(t===null)return null;var i=vd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(re(231,e,typeof t));return t}var Sp=!1;if(Yr)try{var gl={};Object.defineProperty(gl,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",gl,gl),window.removeEventListener("test",gl,gl)}catch{Sp=!1}function tT(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Wl=!1,Af=null,Cf=!1,Mp=null,nT={onError:function(n){Wl=!0,Af=n}};function iT(n,e,t,i,r,s,o,a,l){Wl=!1,Af=null,tT.apply(nT,arguments)}function rT(n,e,t,i,r,s,o,a,l){if(iT.apply(this,arguments),Wl){if(Wl){var u=Af;Wl=!1,Af=null}else throw Error(re(198));Cf||(Cf=!0,Mp=u)}}function Bo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function xy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function D_(n){if(Bo(n)!==n)throw Error(re(188))}function sT(n){var e=n.alternate;if(!e){if(e=Bo(n),e===null)throw Error(re(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return D_(r),n;if(s===i)return D_(r),e;s=s.sibling}throw Error(re(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(t.alternate!==i)throw Error(re(190))}if(t.tag!==3)throw Error(re(188));return t.stateNode.current===t?n:e}function yy(n){return n=sT(n),n!==null?Sy(n):null}function Sy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Sy(n);if(e!==null)return e;n=n.sibling}return null}var My=bi.unstable_scheduleCallback,U_=bi.unstable_cancelCallback,oT=bi.unstable_shouldYield,aT=bi.unstable_requestPaint,Wt=bi.unstable_now,lT=bi.unstable_getCurrentPriorityLevel,Zm=bi.unstable_ImmediatePriority,Ey=bi.unstable_UserBlockingPriority,Rf=bi.unstable_NormalPriority,uT=bi.unstable_LowPriority,Ty=bi.unstable_IdlePriority,pd=null,Tr=null;function cT(n){if(Tr&&typeof Tr.onCommitFiberRoot=="function")try{Tr.onCommitFiberRoot(pd,n,void 0,(n.current.flags&128)===128)}catch{}}var ur=Math.clz32?Math.clz32:hT,fT=Math.log,dT=Math.LN2;function hT(n){return n>>>=0,n===0?32:31-(fT(n)/dT|0)|0}var rc=64,sc=4194304;function Nl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Nl(a):(s&=o,s!==0&&(i=Nl(s)))}else o=t&~r,o!==0?i=Nl(o):s!==0&&(i=Nl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ur(e),r=1<<t,i|=n[t],e&=~r;return i}function pT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ur(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=pT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ep(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wy(){var n=rc;return rc<<=1,!(rc&4194240)&&(rc=64),n}function qd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ur(e),n[e]=t}function gT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ur(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Qm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ur(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function Ay(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Cy,Jm,Ry,by,Py,Tp=!1,oc=[],Ms=null,Es=null,Ts=null,mu=new Map,gu=new Map,cs=[],_T="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function N_(n,e){switch(n){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":Ts=null;break;case"pointerover":case"pointerout":mu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":gu.delete(e.pointerId)}}function _l(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wu(e),e!==null&&Jm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function vT(n,e,t,i,r){switch(e){case"focusin":return Ms=_l(Ms,n,e,t,i,r),!0;case"dragenter":return Es=_l(Es,n,e,t,i,r),!0;case"mouseover":return Ts=_l(Ts,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return mu.set(s,_l(mu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,gu.set(s,_l(gu.get(s)||null,n,e,t,i,r)),!0}return!1}function Ly(n){var e=lo(n.target);if(e!==null){var t=Bo(e);if(t!==null){if(e=t.tag,e===13){if(e=xy(t),e!==null){n.blockedOn=e,Py(n.priority,function(){Ry(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=wp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);xp=i,t.target.dispatchEvent(i),xp=null}else return e=Wu(t),e!==null&&Jm(e),n.blockedOn=t,!1;e.shift()}return!0}function I_(n,e,t){sf(n)&&t.delete(e)}function xT(){Tp=!1,Ms!==null&&sf(Ms)&&(Ms=null),Es!==null&&sf(Es)&&(Es=null),Ts!==null&&sf(Ts)&&(Ts=null),mu.forEach(I_),gu.forEach(I_)}function vl(n,e){n.blockedOn===e&&(n.blockedOn=null,Tp||(Tp=!0,bi.unstable_scheduleCallback(bi.unstable_NormalPriority,xT)))}function _u(n){function e(r){return vl(r,n)}if(0<oc.length){vl(oc[0],n);for(var t=1;t<oc.length;t++){var i=oc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ms!==null&&vl(Ms,n),Es!==null&&vl(Es,n),Ts!==null&&vl(Ts,n),mu.forEach(e),gu.forEach(e),t=0;t<cs.length;t++)i=cs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<cs.length&&(t=cs[0],t.blockedOn===null);)Ly(t),t.blockedOn===null&&cs.shift()}var Da=Jr.ReactCurrentBatchConfig,Pf=!0;function yT(n,e,t,i){var r=vt,s=Da.transition;Da.transition=null;try{vt=1,eg(n,e,t,i)}finally{vt=r,Da.transition=s}}function ST(n,e,t,i){var r=vt,s=Da.transition;Da.transition=null;try{vt=4,eg(n,e,t,i)}finally{vt=r,Da.transition=s}}function eg(n,e,t,i){if(Pf){var r=wp(n,e,t,i);if(r===null)rh(n,e,i,Lf,t),N_(n,i);else if(vT(r,n,e,t,i))i.stopPropagation();else if(N_(n,i),e&4&&-1<_T.indexOf(n)){for(;r!==null;){var s=Wu(r);if(s!==null&&Cy(s),s=wp(n,e,t,i),s===null&&rh(n,e,i,Lf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else rh(n,e,i,null,t)}}var Lf=null;function wp(n,e,t,i){if(Lf=null,n=Km(i),n=lo(n),n!==null)if(e=Bo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=xy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Lf=n,null}function Dy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lT()){case Zm:return 1;case Ey:return 4;case Rf:case uT:return 16;case Ty:return 536870912;default:return 16}default:return 16}}var hs=null,tg=null,of=null;function Uy(){if(of)return of;var n,e=tg,t=e.length,i,r="value"in hs?hs.value:hs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return of=r.slice(n,1<i?1-i:void 0)}function af(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ac(){return!0}function O_(){return!1}function Ni(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ac:O_,this.isPropagationStopped=O_,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),e}var ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ng=Ni(ul),Gu=zt({},ul,{view:0,detail:0}),MT=Ni(Gu),$d,Kd,xl,md=zt({},Gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ig,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xl&&(xl&&n.type==="mousemove"?($d=n.screenX-xl.screenX,Kd=n.screenY-xl.screenY):Kd=$d=0,xl=n),$d)},movementY:function(n){return"movementY"in n?n.movementY:Kd}}),F_=Ni(md),ET=zt({},md,{dataTransfer:0}),TT=Ni(ET),wT=zt({},Gu,{relatedTarget:0}),Zd=Ni(wT),AT=zt({},ul,{animationName:0,elapsedTime:0,pseudoElement:0}),CT=Ni(AT),RT=zt({},ul,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),bT=Ni(RT),PT=zt({},ul,{data:0}),k_=Ni(PT),LT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=UT[n])?!!e[n]:!1}function ig(){return NT}var IT=zt({},Gu,{key:function(n){if(n.key){var e=LT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=af(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?DT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ig,charCode:function(n){return n.type==="keypress"?af(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?af(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),OT=Ni(IT),FT=zt({},md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),z_=Ni(FT),kT=zt({},Gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ig}),zT=Ni(kT),BT=zt({},ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),HT=Ni(BT),VT=zt({},md,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),GT=Ni(VT),WT=[9,13,27,32],rg=Yr&&"CompositionEvent"in window,Xl=null;Yr&&"documentMode"in document&&(Xl=document.documentMode);var XT=Yr&&"TextEvent"in window&&!Xl,Ny=Yr&&(!rg||Xl&&8<Xl&&11>=Xl),B_=" ",H_=!1;function Iy(n,e){switch(n){case"keyup":return WT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var pa=!1;function YT(n,e){switch(n){case"compositionend":return Oy(e);case"keypress":return e.which!==32?null:(H_=!0,B_);case"textInput":return n=e.data,n===B_&&H_?null:n;default:return null}}function jT(n,e){if(pa)return n==="compositionend"||!rg&&Iy(n,e)?(n=Uy(),of=tg=hs=null,pa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ny&&e.locale!=="ko"?null:e.data;default:return null}}var qT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function V_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!qT[n.type]:e==="textarea"}function Fy(n,e,t,i){py(i),e=Df(e,"onChange"),0<e.length&&(t=new ng("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Yl=null,vu=null;function $T(n){qy(n,0)}function gd(n){var e=_a(n);if(ay(e))return n}function KT(n,e){if(n==="change")return e}var ky=!1;if(Yr){var Qd;if(Yr){var Jd="oninput"in document;if(!Jd){var G_=document.createElement("div");G_.setAttribute("oninput","return;"),Jd=typeof G_.oninput=="function"}Qd=Jd}else Qd=!1;ky=Qd&&(!document.documentMode||9<document.documentMode)}function W_(){Yl&&(Yl.detachEvent("onpropertychange",zy),vu=Yl=null)}function zy(n){if(n.propertyName==="value"&&gd(vu)){var e=[];Fy(e,vu,n,Km(n)),vy($T,e)}}function ZT(n,e,t){n==="focusin"?(W_(),Yl=e,vu=t,Yl.attachEvent("onpropertychange",zy)):n==="focusout"&&W_()}function QT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return gd(vu)}function JT(n,e){if(n==="click")return gd(e)}function ew(n,e){if(n==="input"||n==="change")return gd(e)}function tw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var hr=typeof Object.is=="function"?Object.is:tw;function xu(n,e){if(hr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ap.call(e,r)||!hr(n[r],e[r]))return!1}return!0}function X_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Y_(n,e){var t=X_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=X_(t)}}function By(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?By(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Hy(){for(var n=window,e=wf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=wf(n.document)}return e}function sg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function nw(n){var e=Hy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&By(t.ownerDocument.documentElement,t)){if(i!==null&&sg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Y_(t,s);var o=Y_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var iw=Yr&&"documentMode"in document&&11>=document.documentMode,ma=null,Ap=null,jl=null,Cp=!1;function j_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Cp||ma==null||ma!==wf(i)||(i=ma,"selectionStart"in i&&sg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jl&&xu(jl,i)||(jl=i,i=Df(Ap,"onSelect"),0<i.length&&(e=new ng("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ma)))}function lc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ga={animationend:lc("Animation","AnimationEnd"),animationiteration:lc("Animation","AnimationIteration"),animationstart:lc("Animation","AnimationStart"),transitionend:lc("Transition","TransitionEnd")},eh={},Vy={};Yr&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function _d(n){if(eh[n])return eh[n];if(!ga[n])return n;var e=ga[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Vy)return eh[n]=e[t];return n}var Gy=_d("animationend"),Wy=_d("animationiteration"),Xy=_d("animationstart"),Yy=_d("transitionend"),jy=new Map,q_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(n,e){jy.set(n,e),zo(e,[n])}for(var th=0;th<q_.length;th++){var nh=q_[th],rw=nh.toLowerCase(),sw=nh[0].toUpperCase()+nh.slice(1);Vs(rw,"on"+sw)}Vs(Gy,"onAnimationEnd");Vs(Wy,"onAnimationIteration");Vs(Xy,"onAnimationStart");Vs("dblclick","onDoubleClick");Vs("focusin","onFocus");Vs("focusout","onBlur");Vs(Yy,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);zo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zo("onBeforeInput",["compositionend","keypress","textInput","paste"]);zo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(Il));function $_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,rT(i,e,void 0,n),n.currentTarget=null}function qy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;$_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;$_(r,a,u),s=l}}}if(Cf)throw n=Mp,Cf=!1,Mp=null,n}function Ct(n,e){var t=e[Dp];t===void 0&&(t=e[Dp]=new Set);var i=n+"__bubble";t.has(i)||($y(e,n,2,!1),t.add(i))}function ih(n,e,t){var i=0;e&&(i|=4),$y(t,n,i,e)}var uc="_reactListening"+Math.random().toString(36).slice(2);function yu(n){if(!n[uc]){n[uc]=!0,ny.forEach(function(t){t!=="selectionchange"&&(ow.has(t)||ih(t,!1,n),ih(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[uc]||(e[uc]=!0,ih("selectionchange",!1,e))}}function $y(n,e,t,i){switch(Dy(e)){case 1:var r=yT;break;case 4:r=ST;break;default:r=eg}t=r.bind(null,e,t,n),r=void 0,!Sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function rh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=lo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}vy(function(){var u=s,c=Km(t),d=[];e:{var h=jy.get(n);if(h!==void 0){var p=ng,_=n;switch(n){case"keypress":if(af(t)===0)break e;case"keydown":case"keyup":p=OT;break;case"focusin":_="focus",p=Zd;break;case"focusout":_="blur",p=Zd;break;case"beforeblur":case"afterblur":p=Zd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=F_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=TT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zT;break;case Gy:case Wy:case Xy:p=CT;break;case Yy:p=HT;break;case"scroll":p=MT;break;case"wheel":p=GT;break;case"copy":case"cut":case"paste":p=bT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=z_}var g=(e&4)!==0,m=!g&&n==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,f!==null&&(y=pu(v,f),y!=null&&g.push(Su(v,y,x)))),m)break;v=v.return}0<g.length&&(h=new p(h,_,null,t,c),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==xp&&(_=t.relatedTarget||t.fromElement)&&(lo(_)||_[jr]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?lo(_):null,_!==null&&(m=Bo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=F_,y="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=z_,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?h:_a(p),x=_==null?h:_a(_),h=new g(y,v+"leave",p,t,c),h.target=m,h.relatedTarget=x,y=null,lo(c)===u&&(g=new g(f,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,f=_,v=0,x=g;x;x=Vo(x))v++;for(x=0,y=f;y;y=Vo(y))x++;for(;0<v-x;)g=Vo(g),v--;for(;0<x-v;)f=Vo(f),x--;for(;v--;){if(g===f||f!==null&&g===f.alternate)break t;g=Vo(g),f=Vo(f)}g=null}else g=null;p!==null&&K_(d,h,p,g,!1),_!==null&&m!==null&&K_(d,m,_,g,!0)}}e:{if(h=u?_a(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=KT;else if(V_(h))if(ky)T=ew;else{T=QT;var w=ZT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=JT);if(T&&(T=T(n,u))){Fy(d,T,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&pp(h,"number",h.value)}switch(w=u?_a(u):window,n){case"focusin":(V_(w)||w.contentEditable==="true")&&(ma=w,Ap=u,jl=null);break;case"focusout":jl=Ap=ma=null;break;case"mousedown":Cp=!0;break;case"contextmenu":case"mouseup":case"dragend":Cp=!1,j_(d,t,c);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":j_(d,t,c)}var M;if(rg)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pa?Iy(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Ny&&t.locale!=="ko"&&(pa||P!=="onCompositionStart"?P==="onCompositionEnd"&&pa&&(M=Uy()):(hs=c,tg="value"in hs?hs.value:hs.textContent,pa=!0)),w=Df(u,P),0<w.length&&(P=new k_(P,n,null,t,c),d.push({event:P,listeners:w}),M?P.data=M:(M=Oy(t),M!==null&&(P.data=M)))),(M=XT?YT(n,t):jT(n,t))&&(u=Df(u,"onBeforeInput"),0<u.length&&(c=new k_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}qy(d,e)})}function Su(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Df(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pu(n,t),s!=null&&i.unshift(Su(n,s,r)),s=pu(n,e),s!=null&&i.push(Su(n,s,r))),n=n.return}return i}function Vo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function K_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=pu(t,s),l!=null&&o.unshift(Su(t,l,a))):r||(l=pu(t,s),l!=null&&o.push(Su(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var aw=/\r\n?/g,lw=/\u0000|\uFFFD/g;function Z_(n){return(typeof n=="string"?n:""+n).replace(aw,`
`).replace(lw,"")}function cc(n,e,t){if(e=Z_(e),Z_(n)!==e&&t)throw Error(re(425))}function Uf(){}var Rp=null,bp=null;function Pp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lp=typeof setTimeout=="function"?setTimeout:void 0,uw=typeof clearTimeout=="function"?clearTimeout:void 0,Q_=typeof Promise=="function"?Promise:void 0,cw=typeof queueMicrotask=="function"?queueMicrotask:typeof Q_<"u"?function(n){return Q_.resolve(null).then(n).catch(fw)}:Lp;function fw(n){setTimeout(function(){throw n})}function sh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),_u(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);_u(e)}function ws(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function J_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var cl=Math.random().toString(36).slice(2),xr="__reactFiber$"+cl,Mu="__reactProps$"+cl,jr="__reactContainer$"+cl,Dp="__reactEvents$"+cl,dw="__reactListeners$"+cl,hw="__reactHandles$"+cl;function lo(n){var e=n[xr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[jr]||t[xr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=J_(n);n!==null;){if(t=n[xr])return t;n=J_(n)}return e}n=t,t=n.parentNode}return null}function Wu(n){return n=n[xr]||n[jr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _a(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(re(33))}function vd(n){return n[Mu]||null}var Up=[],va=-1;function Gs(n){return{current:n}}function bt(n){0>va||(n.current=Up[va],Up[va]=null,va--)}function wt(n,e){va++,Up[va]=n.current,n.current=e}var Os={},Ln=Gs(Os),ei=Gs(!1),Po=Os;function Xa(n,e){var t=n.type.contextTypes;if(!t)return Os;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ti(n){return n=n.childContextTypes,n!=null}function Nf(){bt(ei),bt(Ln)}function e0(n,e,t){if(Ln.current!==Os)throw Error(re(168));wt(Ln,e),wt(ei,t)}function Ky(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,Z1(n)||"Unknown",r));return zt({},t,i)}function If(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Os,Po=Ln.current,wt(Ln,n),wt(ei,ei.current),!0}function t0(n,e,t){var i=n.stateNode;if(!i)throw Error(re(169));t?(n=Ky(n,e,Po),i.__reactInternalMemoizedMergedChildContext=n,bt(ei),bt(Ln),wt(Ln,n)):bt(ei),wt(ei,t)}var Fr=null,xd=!1,oh=!1;function Zy(n){Fr===null?Fr=[n]:Fr.push(n)}function pw(n){xd=!0,Zy(n)}function Ws(){if(!oh&&Fr!==null){oh=!0;var n=0,e=vt;try{var t=Fr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Fr=null,xd=!1}catch(r){throw Fr!==null&&(Fr=Fr.slice(n+1)),My(Zm,Ws),r}finally{vt=e,oh=!1}}return null}var xa=[],ya=0,Of=null,Ff=0,ki=[],zi=0,Lo=null,Br=1,Hr="";function eo(n,e){xa[ya++]=Ff,xa[ya++]=Of,Of=n,Ff=e}function Qy(n,e,t){ki[zi++]=Br,ki[zi++]=Hr,ki[zi++]=Lo,Lo=n;var i=Br;n=Hr;var r=32-ur(i)-1;i&=~(1<<r),t+=1;var s=32-ur(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Br=1<<32-ur(e)+r|t<<r|i,Hr=s+n}else Br=1<<s|t<<r|i,Hr=n}function og(n){n.return!==null&&(eo(n,1),Qy(n,1,0))}function ag(n){for(;n===Of;)Of=xa[--ya],xa[ya]=null,Ff=xa[--ya],xa[ya]=null;for(;n===Lo;)Lo=ki[--zi],ki[zi]=null,Hr=ki[--zi],ki[zi]=null,Br=ki[--zi],ki[zi]=null}var wi=null,Si=null,Lt=!1,or=null;function Jy(n,e){var t=Yi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function n0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,wi=n,Si=ws(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,wi=n,Si=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lo!==null?{id:Br,overflow:Hr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Yi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,wi=n,Si=null,!0):!1;default:return!1}}function Np(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ip(n){if(Lt){var e=Si;if(e){var t=e;if(!n0(n,e)){if(Np(n))throw Error(re(418));e=ws(t.nextSibling);var i=wi;e&&n0(n,e)?Jy(i,t):(n.flags=n.flags&-4097|2,Lt=!1,wi=n)}}else{if(Np(n))throw Error(re(418));n.flags=n.flags&-4097|2,Lt=!1,wi=n}}}function i0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;wi=n}function fc(n){if(n!==wi)return!1;if(!Lt)return i0(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Pp(n.type,n.memoizedProps)),e&&(e=Si)){if(Np(n))throw eS(),Error(re(418));for(;e;)Jy(n,e),e=ws(e.nextSibling)}if(i0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(re(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Si=ws(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Si=null}}else Si=wi?ws(n.stateNode.nextSibling):null;return!0}function eS(){for(var n=Si;n;)n=ws(n.nextSibling)}function Ya(){Si=wi=null,Lt=!1}function lg(n){or===null?or=[n]:or.push(n)}var mw=Jr.ReactCurrentBatchConfig;function yl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(re(309));var i=t.stateNode}if(!i)throw Error(re(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(re(284));if(!t._owner)throw Error(re(290,n))}return n}function dc(n,e){throw n=Object.prototype.toString.call(e),Error(re(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function r0(n){var e=n._init;return e(n._payload)}function tS(n){function e(f,v){if(n){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=bs(f,v),f.index=0,f.sibling=null,f}function s(f,v,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,x,y){return v===null||v.tag!==6?(v=hh(x,f.mode,y),v.return=f,v):(v=r(v,x),v.return=f,v)}function l(f,v,x,y){var T=x.type;return T===ha?c(f,v,x.props.children,y,x.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===as&&r0(T)===v.type)?(y=r(v,x.props),y.ref=yl(f,v,x),y.return=f,y):(y=pf(x.type,x.key,x.props,null,f.mode,y),y.ref=yl(f,v,x),y.return=f,y)}function u(f,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=ph(x,f.mode,y),v.return=f,v):(v=r(v,x.children||[]),v.return=f,v)}function c(f,v,x,y,T){return v===null||v.tag!==7?(v=vo(x,f.mode,y,T),v.return=f,v):(v=r(v,x),v.return=f,v)}function d(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=hh(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case tc:return x=pf(v.type,v.key,v.props,null,f.mode,x),x.ref=yl(f,null,v),x.return=f,x;case da:return v=ph(v,f.mode,x),v.return=f,v;case as:var y=v._init;return d(f,y(v._payload),x)}if(Ul(v)||ml(v))return v=vo(v,f.mode,x,null),v.return=f,v;dc(f,v)}return null}function h(f,v,x,y){var T=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(f,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tc:return x.key===T?l(f,v,x,y):null;case da:return x.key===T?u(f,v,x,y):null;case as:return T=x._init,h(f,v,T(x._payload),y)}if(Ul(x)||ml(x))return T!==null?null:c(f,v,x,y,null);dc(f,x)}return null}function p(f,v,x,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(x)||null,a(v,f,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case tc:return f=f.get(y.key===null?x:y.key)||null,l(v,f,y,T);case da:return f=f.get(y.key===null?x:y.key)||null,u(v,f,y,T);case as:var w=y._init;return p(f,v,x,w(y._payload),T)}if(Ul(y)||ml(y))return f=f.get(x)||null,c(v,f,y,T,null);dc(v,y)}return null}function _(f,v,x,y){for(var T=null,w=null,M=v,P=v=0,S=null;M!==null&&P<x.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=h(f,M,x[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(f,M),v=s(E,v,P),w===null?T=E:w.sibling=E,w=E,M=S}if(P===x.length)return t(f,M),Lt&&eo(f,P),T;if(M===null){for(;P<x.length;P++)M=d(f,x[P],y),M!==null&&(v=s(M,v,P),w===null?T=M:w.sibling=M,w=M);return Lt&&eo(f,P),T}for(M=i(f,M);P<x.length;P++)S=p(M,f,P,x[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?T=S:w.sibling=S,w=S);return n&&M.forEach(function(I){return e(f,I)}),Lt&&eo(f,P),T}function g(f,v,x,y){var T=ml(x);if(typeof T!="function")throw Error(re(150));if(x=T.call(x),x==null)throw Error(re(151));for(var w=T=null,M=v,P=v=0,S=null,E=x.next();M!==null&&!E.done;P++,E=x.next()){M.index>P?(S=M,M=null):S=M.sibling;var I=h(f,M,E.value,y);if(I===null){M===null&&(M=S);break}n&&M&&I.alternate===null&&e(f,M),v=s(I,v,P),w===null?T=I:w.sibling=I,w=I,M=S}if(E.done)return t(f,M),Lt&&eo(f,P),T;if(M===null){for(;!E.done;P++,E=x.next())E=d(f,E.value,y),E!==null&&(v=s(E,v,P),w===null?T=E:w.sibling=E,w=E);return Lt&&eo(f,P),T}for(M=i(f,M);!E.done;P++,E=x.next())E=p(M,f,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),v=s(E,v,P),w===null?T=E:w.sibling=E,w=E);return n&&M.forEach(function(N){return e(f,N)}),Lt&&eo(f,P),T}function m(f,v,x,y){if(typeof x=="object"&&x!==null&&x.type===ha&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case tc:e:{for(var T=x.key,w=v;w!==null;){if(w.key===T){if(T=x.type,T===ha){if(w.tag===7){t(f,w.sibling),v=r(w,x.props.children),v.return=f,f=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===as&&r0(T)===w.type){t(f,w.sibling),v=r(w,x.props),v.ref=yl(f,w,x),v.return=f,f=v;break e}t(f,w);break}else e(f,w);w=w.sibling}x.type===ha?(v=vo(x.props.children,f.mode,y,x.key),v.return=f,f=v):(y=pf(x.type,x.key,x.props,null,f.mode,y),y.ref=yl(f,v,x),y.return=f,f=y)}return o(f);case da:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(f,v.sibling),v=r(v,x.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=ph(x,f.mode,y),v.return=f,f=v}return o(f);case as:return w=x._init,m(f,v,w(x._payload),y)}if(Ul(x))return _(f,v,x,y);if(ml(x))return g(f,v,x,y);dc(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,x),v.return=f,f=v):(t(f,v),v=hh(x,f.mode,y),v.return=f,f=v),o(f)):t(f,v)}return m}var ja=tS(!0),nS=tS(!1),kf=Gs(null),zf=null,Sa=null,ug=null;function cg(){ug=Sa=zf=null}function fg(n){var e=kf.current;bt(kf),n._currentValue=e}function Op(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ua(n,e){zf=n,ug=Sa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(ug!==n)if(n={context:n,memoizedValue:e,next:null},Sa===null){if(zf===null)throw Error(re(308));Sa=n,zf.dependencies={lanes:0,firstContext:n}}else Sa=Sa.next=n;return e}var uo=null;function dg(n){uo===null?uo=[n]:uo.push(n)}function iS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,dg(e)):(t.next=r.next,r.next=t),e.interleaved=t,qr(n,i)}function qr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ls=!1;function hg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function As(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qr(n,t)}return r=i.interleaved,r===null?(e.next=e,dg(i)):(e.next=r.next,r.next=e),i.interleaved=e,qr(n,t)}function lf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qm(n,t)}}function s0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Bf(n,e,t,i){var r=n.updateQueue;ls=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(h=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=zt({},d,h);break e;case 2:ls=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Uo|=o,n.lanes=o,n.memoizedState=d}}function o0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Xu={},wr=Gs(Xu),Eu=Gs(Xu),Tu=Gs(Xu);function co(n){if(n===Xu)throw Error(re(174));return n}function pg(n,e){switch(wt(Tu,e),wt(Eu,n),wt(wr,Xu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=gp(e,n)}bt(wr),wt(wr,e)}function qa(){bt(wr),bt(Eu),bt(Tu)}function sS(n){co(Tu.current);var e=co(wr.current),t=gp(e,n.type);e!==t&&(wt(Eu,n),wt(wr,t))}function mg(n){Eu.current===n&&(bt(wr),bt(Eu))}var It=Gs(0);function Hf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function gg(){for(var n=0;n<ah.length;n++)ah[n]._workInProgressVersionPrimary=null;ah.length=0}var uf=Jr.ReactCurrentDispatcher,lh=Jr.ReactCurrentBatchConfig,Do=0,kt=null,Jt=null,ln=null,Vf=!1,ql=!1,wu=0,gw=0;function Sn(){throw Error(re(321))}function _g(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!hr(n[t],e[t]))return!1;return!0}function vg(n,e,t,i,r,s){if(Do=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uf.current=n===null||n.memoizedState===null?yw:Sw,n=t(i,r),ql){s=0;do{if(ql=!1,wu=0,25<=s)throw Error(re(301));s+=1,ln=Jt=null,e.updateQueue=null,uf.current=Mw,n=t(i,r)}while(ql)}if(uf.current=Gf,e=Jt!==null&&Jt.next!==null,Do=0,ln=Jt=kt=null,Vf=!1,e)throw Error(re(300));return n}function xg(){var n=wu!==0;return wu=0,n}function mr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?kt.memoizedState=ln=n:ln=ln.next=n,ln}function Qi(){if(Jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var e=ln===null?kt.memoizedState:ln.next;if(e!==null)ln=e,Jt=n;else{if(n===null)throw Error(re(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},ln===null?kt.memoizedState=ln=n:ln=ln.next=n}return ln}function Au(n,e){return typeof e=="function"?e(n):e}function uh(n){var e=Qi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=Jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Do&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,kt.lanes|=c,Uo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,hr(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,kt.lanes|=s,Uo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ch(n){var e=Qi(),t=e.queue;if(t===null)throw Error(re(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);hr(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function oS(){}function aS(n,e){var t=kt,i=Qi(),r=e(),s=!hr(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,yg(cS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ln!==null&&ln.memoizedState.tag&1){if(t.flags|=2048,Cu(9,uS.bind(null,t,i,r,e),void 0,null),un===null)throw Error(re(349));Do&30||lS(t,e,r)}return r}function lS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function uS(n,e,t,i){e.value=t,e.getSnapshot=i,fS(e)&&dS(n)}function cS(n,e,t){return t(function(){fS(e)&&dS(n)})}function fS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!hr(n,t)}catch{return!0}}function dS(n){var e=qr(n,1);e!==null&&cr(e,n,1,-1)}function a0(n){var e=mr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Au,lastRenderedState:n},e.queue=n,n=n.dispatch=xw.bind(null,kt,n),[e.memoizedState,n]}function Cu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function hS(){return Qi().memoizedState}function cf(n,e,t,i){var r=mr();kt.flags|=n,r.memoizedState=Cu(1|e,t,void 0,i===void 0?null:i)}function yd(n,e,t,i){var r=Qi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&_g(i,o.deps)){r.memoizedState=Cu(e,t,s,i);return}}kt.flags|=n,r.memoizedState=Cu(1|e,t,s,i)}function l0(n,e){return cf(8390656,8,n,e)}function yg(n,e){return yd(2048,8,n,e)}function pS(n,e){return yd(4,2,n,e)}function mS(n,e){return yd(4,4,n,e)}function gS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function _S(n,e,t){return t=t!=null?t.concat([n]):null,yd(4,4,gS.bind(null,e,n),t)}function Sg(){}function vS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&_g(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function xS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&_g(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function yS(n,e,t){return Do&21?(hr(t,e)||(t=wy(),kt.lanes|=t,Uo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function _w(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=lh.transition;lh.transition={};try{n(!1),e()}finally{vt=t,lh.transition=i}}function SS(){return Qi().memoizedState}function vw(n,e,t){var i=Rs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},MS(n))ES(e,t);else if(t=iS(n,e,t,i),t!==null){var r=Vn();cr(t,n,i,r),TS(t,e,i)}}function xw(n,e,t){var i=Rs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(MS(n))ES(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,hr(a,o)){var l=e.interleaved;l===null?(r.next=r,dg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=iS(n,e,r,i),t!==null&&(r=Vn(),cr(t,n,i,r),TS(t,e,i))}}function MS(n){var e=n.alternate;return n===kt||e!==null&&e===kt}function ES(n,e){ql=Vf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function TS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Qm(n,t)}}var Gf={readContext:Zi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},yw={readContext:Zi,useCallback:function(n,e){return mr().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:l0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,cf(4194308,4,gS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return cf(4194308,4,n,e)},useInsertionEffect:function(n,e){return cf(4,2,n,e)},useMemo:function(n,e){var t=mr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=mr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=vw.bind(null,kt,n),[i.memoizedState,n]},useRef:function(n){var e=mr();return n={current:n},e.memoizedState=n},useState:a0,useDebugValue:Sg,useDeferredValue:function(n){return mr().memoizedState=n},useTransition:function(){var n=a0(!1),e=n[0];return n=_w.bind(null,n[1]),mr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=kt,r=mr();if(Lt){if(t===void 0)throw Error(re(407));t=t()}else{if(t=e(),un===null)throw Error(re(349));Do&30||lS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,l0(cS.bind(null,i,s,n),[n]),i.flags|=2048,Cu(9,uS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=mr(),e=un.identifierPrefix;if(Lt){var t=Hr,i=Br;t=(i&~(1<<32-ur(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=wu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=gw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Sw={readContext:Zi,useCallback:vS,useContext:Zi,useEffect:yg,useImperativeHandle:_S,useInsertionEffect:pS,useLayoutEffect:mS,useMemo:xS,useReducer:uh,useRef:hS,useState:function(){return uh(Au)},useDebugValue:Sg,useDeferredValue:function(n){var e=Qi();return yS(e,Jt.memoizedState,n)},useTransition:function(){var n=uh(Au)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:oS,useSyncExternalStore:aS,useId:SS,unstable_isNewReconciler:!1},Mw={readContext:Zi,useCallback:vS,useContext:Zi,useEffect:yg,useImperativeHandle:_S,useInsertionEffect:pS,useLayoutEffect:mS,useMemo:xS,useReducer:ch,useRef:hS,useState:function(){return ch(Au)},useDebugValue:Sg,useDeferredValue:function(n){var e=Qi();return Jt===null?e.memoizedState=n:yS(e,Jt.memoizedState,n)},useTransition:function(){var n=ch(Au)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:oS,useSyncExternalStore:aS,useId:SS,unstable_isNewReconciler:!1};function rr(n,e){if(n&&n.defaultProps){e=zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Fp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Sd={isMounted:function(n){return(n=n._reactInternals)?Bo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Rs(n),s=Wr(i,r);s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(cr(e,n,r,i),lf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Rs(n),s=Wr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(cr(e,n,r,i),lf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=Rs(n),r=Wr(t,i);r.tag=2,e!=null&&(r.callback=e),e=As(n,r,i),e!==null&&(cr(e,n,i,t),lf(e,n,i))}};function u0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xu(t,i)||!xu(r,s):!0}function wS(n,e,t){var i=!1,r=Os,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=ti(e)?Po:Ln.current,i=e.contextTypes,s=(i=i!=null)?Xa(n,r):Os),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function c0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Sd.enqueueReplaceState(e,e.state,null)}function kp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},hg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=ti(e)?Po:Ln.current,r.context=Xa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Fp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sd.enqueueReplaceState(r,r.state,null),Bf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function $a(n,e){try{var t="",i=e;do t+=K1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function fh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function zp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Ew=typeof WeakMap=="function"?WeakMap:Map;function AS(n,e,t){t=Wr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Xf||(Xf=!0,$p=i),zp(n,e)},t}function CS(n,e,t){t=Wr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){zp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){zp(n,e),typeof i!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function f0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Ew;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Fw.bind(null,n,e,t),e.then(n,n))}function d0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function h0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Wr(-1,1),e.tag=2,As(t,e,1))),t.lanes|=1),n)}var Tw=Jr.ReactCurrentOwner,Qn=!1;function Fn(n,e,t,i){e.child=n===null?nS(e,null,t,i):ja(e,n.child,t,i)}function p0(n,e,t,i,r){t=t.render;var s=e.ref;return Ua(e,r),i=vg(n,e,t,i,s,r),t=xg(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$r(n,e,r)):(Lt&&t&&og(e),e.flags|=1,Fn(n,e,i,r),e.child)}function m0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!bg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,RS(n,e,s,i,r)):(n=pf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:xu,t(o,i)&&n.ref===e.ref)return $r(n,e,r)}return e.flags|=1,n=bs(s,i),n.ref=e.ref,n.return=e,e.child=n}function RS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(xu(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,$r(n,e,r)}return Bp(n,e,t,i,r)}function bS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Ea,mi),mi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(Ea,mi),mi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(Ea,mi),mi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(Ea,mi),mi|=i;return Fn(n,e,r,t),e.child}function PS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Bp(n,e,t,i,r){var s=ti(t)?Po:Ln.current;return s=Xa(e,s),Ua(e,r),t=vg(n,e,t,i,s,r),i=xg(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$r(n,e,r)):(Lt&&i&&og(e),e.flags|=1,Fn(n,e,t,r),e.child)}function g0(n,e,t,i,r){if(ti(t)){var s=!0;If(e)}else s=!1;if(Ua(e,r),e.stateNode===null)ff(n,e),wS(e,t,i),kp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=ti(t)?Po:Ln.current,u=Xa(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&c0(e,o,i,u),ls=!1;var h=e.memoizedState;o.state=h,Bf(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ei.current||ls?(typeof c=="function"&&(Fp(e,t,c,i),l=e.memoizedState),(a=ls||u0(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,rS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:rr(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=ti(t)?Po:Ln.current,l=Xa(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&c0(e,o,i,l),ls=!1,h=e.memoizedState,o.state=h,Bf(e,i,o,r);var _=e.memoizedState;a!==d||h!==_||ei.current||ls?(typeof p=="function"&&(Fp(e,t,p,i),_=e.memoizedState),(u=ls||u0(e,t,u,i,h,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Hp(n,e,t,i,s,r)}function Hp(n,e,t,i,r,s){PS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&t0(e,t,!1),$r(n,e,s);i=e.stateNode,Tw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ja(e,n.child,null,s),e.child=ja(e,null,a,s)):Fn(n,e,a,s),e.memoizedState=i.state,r&&t0(e,t,!0),e.child}function LS(n){var e=n.stateNode;e.pendingContext?e0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&e0(n,e.context,!1),pg(n,e.containerInfo)}function _0(n,e,t,i,r){return Ya(),lg(r),e.flags|=256,Fn(n,e,t,i),e.child}var Vp={dehydrated:null,treeContext:null,retryLane:0};function Gp(n){return{baseLanes:n,cachePool:null,transitions:null}}function DS(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(It,r&1),n===null)return Ip(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Td(o,i,0,null),n=vo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Gp(t),e.memoizedState=Vp,n):Mg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ww(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=bs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=bs(a,s):(s=vo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Gp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Vp,i}return s=n.child,n=s.sibling,i=bs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Mg(n,e){return e=Td({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function hc(n,e,t,i){return i!==null&&lg(i),ja(e,n.child,null,t),n=Mg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ww(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=fh(Error(re(422))),hc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Td({mode:"visible",children:i.children},r,0,null),s=vo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ja(e,n.child,null,o),e.child.memoizedState=Gp(o),e.memoizedState=Vp,s);if(!(e.mode&1))return hc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=fh(s,i,void 0),hc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qr(n,r),cr(i,n,r,-1))}return Rg(),i=fh(Error(re(421))),hc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=kw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Si=ws(r.nextSibling),wi=e,Lt=!0,or=null,n!==null&&(ki[zi++]=Br,ki[zi++]=Hr,ki[zi++]=Lo,Br=n.id,Hr=n.overflow,Lo=e),e=Mg(e,i.children),e.flags|=4096,e)}function v0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Op(n.return,e,t)}function dh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function US(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Fn(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&v0(n,t,e);else if(n.tag===19)v0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Hf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),dh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Hf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}dh(e,!0,t,null,s);break;case"together":dh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ff(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function $r(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Uo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(re(153));if(e.child!==null){for(n=e.child,t=bs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=bs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Aw(n,e,t){switch(e.tag){case 3:LS(e),Ya();break;case 5:sS(e);break;case 1:ti(e.type)&&If(e);break;case 4:pg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(kf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?DS(n,e,t):(wt(It,It.current&1),n=$r(n,e,t),n!==null?n.sibling:null);wt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return US(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,bS(n,e,t)}return $r(n,e,t)}var NS,Wp,IS,OS;NS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Wp=function(){};IS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,co(wr.current);var s=null;switch(t){case"input":r=dp(n,r),i=dp(n,i),s=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),s=[];break;case"textarea":r=mp(n,r),i=mp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Uf)}_p(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(du.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(du.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};OS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Sl(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Cw(n,e,t){var i=e.pendingProps;switch(ag(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return ti(e.type)&&Nf(),Mn(e),null;case 3:return i=e.stateNode,qa(),bt(ei),bt(Ln),gg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(fc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,or!==null&&(Qp(or),or=null))),Wp(n,e),Mn(e),null;case 5:mg(e);var r=co(Tu.current);if(t=e.type,n!==null&&e.stateNode!=null)IS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Mn(e),null}if(n=co(wr.current),fc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[xr]=e,i[Mu]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Il.length;r++)Ct(Il[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":C_(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":b_(i,s),Ct("invalid",i)}_p(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cc(i.textContent,a,n),r=["children",""+a]):du.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":nc(i),R_(i,s,!0);break;case"textarea":nc(i),P_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Uf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=cy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[xr]=e,n[Mu]=i,NS(n,e,!1,!1),e.stateNode=n;e:{switch(o=vp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Il.length;r++)Ct(Il[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":C_(n,i),r=dp(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":b_(n,i),r=mp(n,i),Ct("invalid",n);break;default:r=i}_p(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&hu(n,l):typeof l=="number"&&hu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(du.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Ym(n,s,l,o))}switch(t){case"input":nc(n),R_(n,i,!1);break;case"textarea":nc(n),P_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Is(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ba(n,!!i.multiple,s,!1):i.defaultValue!=null&&ba(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Uf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)OS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(t=co(Tu.current),co(wr.current),fc(e)){if(i=e.stateNode,t=e.memoizedProps,i[xr]=e,(s=i.nodeValue!==t)&&(n=wi,n!==null))switch(n.tag){case 3:cc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[xr]=e,e.stateNode=i}return Mn(e),null;case 13:if(bt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&Si!==null&&e.mode&1&&!(e.flags&128))eS(),Ya(),e.flags|=98560,s=!1;else if(s=fc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[xr]=e}else Ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else or!==null&&(Qp(or),or=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?tn===0&&(tn=3):Rg())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return qa(),Wp(n,e),n===null&&yu(e.stateNode.containerInfo),Mn(e),null;case 10:return fg(e.type._context),Mn(e),null;case 17:return ti(e.type)&&Nf(),Mn(e),null;case 19:if(bt(It),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Sl(s,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Hf(n),o!==null){for(e.flags|=128,Sl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>Ka&&(e.flags|=128,i=!0,Sl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Hf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Sl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Mn(e),null}else 2*Wt()-s.renderingStartTime>Ka&&t!==1073741824&&(e.flags|=128,i=!0,Sl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=It.current,wt(It,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return Cg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mi&1073741824&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Rw(n,e){switch(ag(e),e.tag){case 1:return ti(e.type)&&Nf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return qa(),bt(ei),bt(Ln),gg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return mg(e),null;case 13:if(bt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ya()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(It),null;case 4:return qa(),null;case 10:return fg(e.type._context),null;case 22:case 23:return Cg(),null;case 24:return null;default:return null}}var pc=!1,Cn=!1,bw=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Ma(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function Xp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var x0=!1;function Pw(n,e){if(Rp=Pf,n=Hy(),sg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(bp={focusedElem:n,selectionRange:t},Pf=!1,Me=e;Me!==null;)if(e=Me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Me=n;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:rr(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(y){Ht(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}return _=x0,x0=!1,_}function $l(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xp(e,t,s)}r=r.next}while(r!==i)}}function Md(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Yp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function FS(n){var e=n.alternate;e!==null&&(n.alternate=null,FS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[xr],delete e[Mu],delete e[Dp],delete e[dw],delete e[hw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kS(n){return n.tag===5||n.tag===3||n.tag===4}function y0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function jp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Uf));else if(i!==4&&(n=n.child,n!==null))for(jp(n,e,t),n=n.sibling;n!==null;)jp(n,e,t),n=n.sibling}function qp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(qp(n,e,t),n=n.sibling;n!==null;)qp(n,e,t),n=n.sibling}var dn=null,sr=!1;function es(n,e,t){for(t=t.child;t!==null;)zS(n,e,t),t=t.sibling}function zS(n,e,t){if(Tr&&typeof Tr.onCommitFiberUnmount=="function")try{Tr.onCommitFiberUnmount(pd,t)}catch{}switch(t.tag){case 5:Cn||Ma(t,e);case 6:var i=dn,r=sr;dn=null,es(n,e,t),dn=i,sr=r,dn!==null&&(sr?(n=dn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):dn.removeChild(t.stateNode));break;case 18:dn!==null&&(sr?(n=dn,t=t.stateNode,n.nodeType===8?sh(n.parentNode,t):n.nodeType===1&&sh(n,t),_u(n)):sh(dn,t.stateNode));break;case 4:i=dn,r=sr,dn=t.stateNode.containerInfo,sr=!0,es(n,e,t),dn=i,sr=r;break;case 0:case 11:case 14:case 15:if(!Cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xp(t,e,o),r=r.next}while(r!==i)}es(n,e,t);break;case 1:if(!Cn&&(Ma(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}es(n,e,t);break;case 21:es(n,e,t);break;case 22:t.mode&1?(Cn=(i=Cn)||t.memoizedState!==null,es(n,e,t),Cn=i):es(n,e,t);break;default:es(n,e,t)}}function S0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new bw),e.forEach(function(i){var r=zw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ji(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dn=a.stateNode,sr=!1;break e;case 3:dn=a.stateNode.containerInfo,sr=!0;break e;case 4:dn=a.stateNode.containerInfo,sr=!0;break e}a=a.return}if(dn===null)throw Error(re(160));zS(s,o,r),dn=null,sr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)BS(e,n),e=e.sibling}function BS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ji(e,n),pr(n),i&4){try{$l(3,n,n.return),Md(3,n)}catch(g){Ht(n,n.return,g)}try{$l(5,n,n.return)}catch(g){Ht(n,n.return,g)}}break;case 1:Ji(e,n),pr(n),i&512&&t!==null&&Ma(t,t.return);break;case 5:if(Ji(e,n),pr(n),i&512&&t!==null&&Ma(t,t.return),n.flags&32){var r=n.stateNode;try{hu(r,"")}catch(g){Ht(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ly(r,s),vp(a,o);var u=vp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?hy(r,d):c==="dangerouslySetInnerHTML"?fy(r,d):c==="children"?hu(r,d):Ym(r,c,d,u)}switch(a){case"input":hp(r,s);break;case"textarea":uy(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ba(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ba(r,!!s.multiple,s.defaultValue,!0):ba(r,!!s.multiple,s.multiple?[]:"",!1))}r[Mu]=s}catch(g){Ht(n,n.return,g)}}break;case 6:if(Ji(e,n),pr(n),i&4){if(n.stateNode===null)throw Error(re(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Ht(n,n.return,g)}}break;case 3:if(Ji(e,n),pr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{_u(e.containerInfo)}catch(g){Ht(n,n.return,g)}break;case 4:Ji(e,n),pr(n);break;case 13:Ji(e,n),pr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(wg=Wt())),i&4&&S0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Cn=(u=Cn)||c,Ji(e,n),Cn=u):Ji(e,n),pr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Me=n,c=n.child;c!==null;){for(d=Me=c;Me!==null;){switch(h=Me,p=h.child,h.tag){case 0:case 11:case 14:case 15:$l(4,h,h.return);break;case 1:Ma(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Ht(i,t,g)}}break;case 5:Ma(h,h.return);break;case 22:if(h.memoizedState!==null){E0(d);continue}}p!==null?(p.return=h,Me=p):E0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dy("display",o))}catch(g){Ht(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Ht(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ji(e,n),pr(n),i&4&&S0(n);break;case 21:break;default:Ji(e,n),pr(n)}}function pr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(kS(t)){var i=t;break e}t=t.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(hu(r,""),i.flags&=-33);var s=y0(n);qp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=y0(n);jp(n,a,o);break;default:throw Error(re(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Lw(n,e,t){Me=n,HS(n)}function HS(n,e,t){for(var i=(n.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Cn;a=pc;var u=Cn;if(pc=o,(Cn=l)&&!u)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?T0(r):l!==null?(l.return=o,Me=l):T0(r);for(;s!==null;)Me=s,HS(s),s=s.sibling;Me=r,pc=a,Cn=u}M0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):M0(n)}}function M0(n){for(;Me!==null;){var e=Me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Cn||Md(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:rr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&o0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}o0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&_u(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Cn||e.flags&512&&Yp(e)}catch(h){Ht(e,e.return,h)}}if(e===n){Me=null;break}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}}function E0(n){for(;Me!==null;){var e=Me;if(e===n){Me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Me=t;break}Me=e.return}}function T0(n){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Md(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{Yp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{Yp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var Dw=Math.ceil,Wf=Jr.ReactCurrentDispatcher,Eg=Jr.ReactCurrentOwner,$i=Jr.ReactCurrentBatchConfig,ft=0,un=null,$t=null,_n=0,mi=0,Ea=Gs(0),tn=0,Ru=null,Uo=0,Ed=0,Tg=0,Kl=null,qn=null,wg=0,Ka=1/0,Ir=null,Xf=!1,$p=null,Cs=null,mc=!1,ps=null,Yf=0,Zl=0,Kp=null,df=-1,hf=0;function Vn(){return ft&6?Wt():df!==-1?df:df=Wt()}function Rs(n){return n.mode&1?ft&2&&_n!==0?_n&-_n:mw.transition!==null?(hf===0&&(hf=wy()),hf):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Dy(n.type)),n):1}function cr(n,e,t,i){if(50<Zl)throw Zl=0,Kp=null,Error(re(185));Vu(n,t,i),(!(ft&2)||n!==un)&&(n===un&&(!(ft&2)&&(Ed|=t),tn===4&&fs(n,_n)),ni(n,i),t===1&&ft===0&&!(e.mode&1)&&(Ka=Wt()+500,xd&&Ws()))}function ni(n,e){var t=n.callbackNode;mT(n,e);var i=bf(n,n===un?_n:0);if(i===0)t!==null&&U_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&U_(t),e===1)n.tag===0?pw(w0.bind(null,n)):Zy(w0.bind(null,n)),cw(function(){!(ft&6)&&Ws()}),t=null;else{switch(Ay(i)){case 1:t=Zm;break;case 4:t=Ey;break;case 16:t=Rf;break;case 536870912:t=Ty;break;default:t=Rf}t=$S(t,VS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function VS(n,e){if(df=-1,hf=0,ft&6)throw Error(re(327));var t=n.callbackNode;if(Na()&&n.callbackNode!==t)return null;var i=bf(n,n===un?_n:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=jf(n,i);else{e=i;var r=ft;ft|=2;var s=WS();(un!==n||_n!==e)&&(Ir=null,Ka=Wt()+500,_o(n,e));do try{Iw();break}catch(a){GS(n,a)}while(!0);cg(),Wf.current=s,ft=r,$t!==null?e=0:(un=null,_n=0,e=tn)}if(e!==0){if(e===2&&(r=Ep(n),r!==0&&(i=r,e=Zp(n,r))),e===1)throw t=Ru,_o(n,0),fs(n,i),ni(n,Wt()),t;if(e===6)fs(n,i);else{if(r=n.current.alternate,!(i&30)&&!Uw(r)&&(e=jf(n,i),e===2&&(s=Ep(n),s!==0&&(i=s,e=Zp(n,s))),e===1))throw t=Ru,_o(n,0),fs(n,i),ni(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:to(n,qn,Ir);break;case 3:if(fs(n,i),(i&130023424)===i&&(e=wg+500-Wt(),10<e)){if(bf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Lp(to.bind(null,n,qn,Ir),e);break}to(n,qn,Ir);break;case 4:if(fs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ur(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dw(i/1960))-i,10<i){n.timeoutHandle=Lp(to.bind(null,n,qn,Ir),i);break}to(n,qn,Ir);break;case 5:to(n,qn,Ir);break;default:throw Error(re(329))}}}return ni(n,Wt()),n.callbackNode===t?VS.bind(null,n):null}function Zp(n,e){var t=Kl;return n.current.memoizedState.isDehydrated&&(_o(n,e).flags|=256),n=jf(n,e),n!==2&&(e=qn,qn=t,e!==null&&Qp(e)),n}function Qp(n){qn===null?qn=n:qn.push.apply(qn,n)}function Uw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!hr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fs(n,e){for(e&=~Tg,e&=~Ed,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ur(e),i=1<<t;n[t]=-1,e&=~i}}function w0(n){if(ft&6)throw Error(re(327));Na();var e=bf(n,0);if(!(e&1))return ni(n,Wt()),null;var t=jf(n,e);if(n.tag!==0&&t===2){var i=Ep(n);i!==0&&(e=i,t=Zp(n,i))}if(t===1)throw t=Ru,_o(n,0),fs(n,e),ni(n,Wt()),t;if(t===6)throw Error(re(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,to(n,qn,Ir),ni(n,Wt()),null}function Ag(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Ka=Wt()+500,xd&&Ws())}}function No(n){ps!==null&&ps.tag===0&&!(ft&6)&&Na();var e=ft;ft|=1;var t=$i.transition,i=vt;try{if($i.transition=null,vt=1,n)return n()}finally{vt=i,$i.transition=t,ft=e,!(ft&6)&&Ws()}}function Cg(){mi=Ea.current,bt(Ea)}function _o(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,uw(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(ag(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nf();break;case 3:qa(),bt(ei),bt(Ln),gg();break;case 5:mg(i);break;case 4:qa();break;case 13:bt(It);break;case 19:bt(It);break;case 10:fg(i.type._context);break;case 22:case 23:Cg()}t=t.return}if(un=n,$t=n=bs(n.current,null),_n=mi=e,tn=0,Ru=null,Tg=Ed=Uo=0,qn=Kl=null,uo!==null){for(e=0;e<uo.length;e++)if(t=uo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}uo=null}return n}function GS(n,e){do{var t=$t;try{if(cg(),uf.current=Gf,Vf){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vf=!1}if(Do=0,ln=Jt=kt=null,ql=!1,wu=0,Eg.current=null,t===null||t.return===null){tn=1,Ru=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=d0(o);if(p!==null){p.flags&=-257,h0(p,o,a,s,e),p.mode&1&&f0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){f0(s,u,e),Rg();break e}l=Error(re(426))}}else if(Lt&&a.mode&1){var m=d0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),h0(m,o,a,s,e),lg($a(l,a));break e}}s=l=$a(l,a),tn!==4&&(tn=2),Kl===null?Kl=[s]:Kl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=AS(s,l,e);s0(s,f);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cs===null||!Cs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=CS(s,a,e);s0(s,y);break e}}s=s.return}while(s!==null)}YS(t)}catch(T){e=T,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function WS(){var n=Wf.current;return Wf.current=Gf,n===null?Gf:n}function Rg(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||!(Uo&268435455)&&!(Ed&268435455)||fs(un,_n)}function jf(n,e){var t=ft;ft|=2;var i=WS();(un!==n||_n!==e)&&(Ir=null,_o(n,e));do try{Nw();break}catch(r){GS(n,r)}while(!0);if(cg(),ft=t,Wf.current=i,$t!==null)throw Error(re(261));return un=null,_n=0,tn}function Nw(){for(;$t!==null;)XS($t)}function Iw(){for(;$t!==null&&!oT();)XS($t)}function XS(n){var e=qS(n.alternate,n,mi);n.memoizedProps=n.pendingProps,e===null?YS(n):$t=e,Eg.current=null}function YS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Rw(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}else if(t=Cw(t,e,mi),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);tn===0&&(tn=5)}function to(n,e,t){var i=vt,r=$i.transition;try{$i.transition=null,vt=1,Ow(n,e,t,i)}finally{$i.transition=r,vt=i}return null}function Ow(n,e,t,i){do Na();while(ps!==null);if(ft&6)throw Error(re(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(re(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(gT(n,s),n===un&&($t=un=null,_n=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||mc||(mc=!0,$S(Rf,function(){return Na(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=$i.transition,$i.transition=null;var o=vt;vt=1;var a=ft;ft|=4,Eg.current=null,Pw(n,t),BS(t,n),nw(bp),Pf=!!Rp,bp=Rp=null,n.current=t,Lw(t),aT(),ft=a,vt=o,$i.transition=s}else n.current=t;if(mc&&(mc=!1,ps=n,Yf=r),s=n.pendingLanes,s===0&&(Cs=null),cT(t.stateNode),ni(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xf)throw Xf=!1,n=$p,$p=null,n;return Yf&1&&n.tag!==0&&Na(),s=n.pendingLanes,s&1?n===Kp?Zl++:(Zl=0,Kp=n):Zl=0,Ws(),null}function Na(){if(ps!==null){var n=Ay(Yf),e=$i.transition,t=vt;try{if($i.transition=null,vt=16>n?16:n,ps===null)var i=!1;else{if(n=ps,ps=null,Yf=0,ft&6)throw Error(re(331));var r=ft;for(ft|=4,Me=n.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:$l(8,c,s)}var d=c.child;if(d!==null)d.return=c,Me=d;else for(;Me!==null;){c=Me;var h=c.sibling,p=c.return;if(FS(c),c===u){Me=null;break}if(h!==null){h.return=p,Me=h;break}Me=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$l(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Me=f;break e}Me=s.return}}var v=n.current;for(Me=v;Me!==null;){o=Me;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Me=x;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Md(9,a)}}catch(T){Ht(a,a.return,T)}if(a===o){Me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Me=y;break e}Me=a.return}}if(ft=r,Ws(),Tr&&typeof Tr.onPostCommitFiberRoot=="function")try{Tr.onPostCommitFiberRoot(pd,n)}catch{}i=!0}return i}finally{vt=t,$i.transition=e}}return!1}function A0(n,e,t){e=$a(t,e),e=AS(n,e,1),n=As(n,e,1),e=Vn(),n!==null&&(Vu(n,1,e),ni(n,e))}function Ht(n,e,t){if(n.tag===3)A0(n,n,t);else for(;e!==null;){if(e.tag===3){A0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cs===null||!Cs.has(i))){n=$a(t,n),n=CS(e,n,1),e=As(e,n,1),n=Vn(),e!==null&&(Vu(e,1,n),ni(e,n));break}}e=e.return}}function Fw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,un===n&&(_n&t)===t&&(tn===4||tn===3&&(_n&130023424)===_n&&500>Wt()-wg?_o(n,0):Tg|=t),ni(n,e)}function jS(n,e){e===0&&(n.mode&1?(e=sc,sc<<=1,!(sc&130023424)&&(sc=4194304)):e=1);var t=Vn();n=qr(n,e),n!==null&&(Vu(n,e,t),ni(n,t))}function kw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),jS(n,t)}function zw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),jS(n,t)}var qS;qS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ei.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,Aw(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Lt&&e.flags&1048576&&Qy(e,Ff,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ff(n,e),n=e.pendingProps;var r=Xa(e,Ln.current);Ua(e,t),r=vg(null,e,i,n,r,t);var s=xg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ti(i)?(s=!0,If(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hg(e),r.updater=Sd,e.stateNode=r,r._reactInternals=e,kp(e,i,n,t),e=Hp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&og(e),Fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ff(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hw(i),n=rr(i,n),r){case 0:e=Bp(null,e,i,n,t);break e;case 1:e=g0(null,e,i,n,t);break e;case 11:e=p0(null,e,i,n,t);break e;case 14:e=m0(null,e,i,rr(i.type,n),t);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),Bp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),g0(n,e,i,r,t);case 3:e:{if(LS(e),n===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,rS(n,e),Bf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=$a(Error(re(423)),e),e=_0(n,e,i,t,r);break e}else if(i!==r){r=$a(Error(re(424)),e),e=_0(n,e,i,t,r);break e}else for(Si=ws(e.stateNode.containerInfo.firstChild),wi=e,Lt=!0,or=null,t=nS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ya(),i===r){e=$r(n,e,t);break e}Fn(n,e,i,t)}e=e.child}return e;case 5:return sS(e),n===null&&Ip(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Pp(i,r)?o=null:s!==null&&Pp(i,s)&&(e.flags|=32),PS(n,e),Fn(n,e,o,t),e.child;case 6:return n===null&&Ip(e),null;case 13:return DS(n,e,t);case 4:return pg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ja(e,null,i,t):Fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),p0(n,e,i,r,t);case 7:return Fn(n,e,e.pendingProps,t),e.child;case 8:return Fn(n,e,e.pendingProps.children,t),e.child;case 12:return Fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(kf,i._currentValue),i._currentValue=o,s!==null)if(hr(s.value,o)){if(s.children===r.children&&!ei.current){e=$r(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Op(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Op(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ua(e,t),r=Zi(r),i=i(r),e.flags|=1,Fn(n,e,i,t),e.child;case 14:return i=e.type,r=rr(i,e.pendingProps),r=rr(i.type,r),m0(n,e,i,r,t);case 15:return RS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:rr(i,r),ff(n,e),e.tag=1,ti(i)?(n=!0,If(e)):n=!1,Ua(e,t),wS(e,i,r),kp(e,i,r,t),Hp(null,e,i,!0,n,t);case 19:return US(n,e,t);case 22:return bS(n,e,t)}throw Error(re(156,e.tag))};function $S(n,e){return My(n,e)}function Bw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yi(n,e,t,i){return new Bw(n,e,t,i)}function bg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Hw(n){if(typeof n=="function")return bg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===qm)return 11;if(n===$m)return 14}return 2}function bs(n,e){var t=n.alternate;return t===null?(t=Yi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function pf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")bg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ha:return vo(t.children,r,s,e);case jm:o=8,r|=8;break;case lp:return n=Yi(12,t,e,r|2),n.elementType=lp,n.lanes=s,n;case up:return n=Yi(13,t,e,r),n.elementType=up,n.lanes=s,n;case cp:return n=Yi(19,t,e,r),n.elementType=cp,n.lanes=s,n;case sy:return Td(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case iy:o=10;break e;case ry:o=9;break e;case qm:o=11;break e;case $m:o=14;break e;case as:o=16,i=null;break e}throw Error(re(130,n==null?n:typeof n,""))}return e=Yi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function vo(n,e,t,i){return n=Yi(7,n,i,e),n.lanes=t,n}function Td(n,e,t,i){return n=Yi(22,n,i,e),n.elementType=sy,n.lanes=t,n.stateNode={isHidden:!1},n}function hh(n,e,t){return n=Yi(6,n,null,e),n.lanes=t,n}function ph(n,e,t){return e=Yi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Vw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qd(0),this.expirationTimes=qd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pg(n,e,t,i,r,s,o,a,l){return n=new Vw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Yi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hg(s),n}function Gw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:da,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function KS(n){if(!n)return Os;n=n._reactInternals;e:{if(Bo(n)!==n||n.tag!==1)throw Error(re(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ti(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(n.tag===1){var t=n.type;if(ti(t))return Ky(n,t,e)}return e}function ZS(n,e,t,i,r,s,o,a,l){return n=Pg(t,i,!0,n,r,s,o,a,l),n.context=KS(null),t=n.current,i=Vn(),r=Rs(t),s=Wr(i,r),s.callback=e??null,As(t,s,r),n.current.lanes=r,Vu(n,r,i),ni(n,i),n}function wd(n,e,t,i){var r=e.current,s=Vn(),o=Rs(r);return t=KS(t),e.context===null?e.context=t:e.pendingContext=t,e=Wr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=As(r,e,o),n!==null&&(cr(n,r,o,s),lf(n,r,o)),o}function qf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function C0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Lg(n,e){C0(n,e),(n=n.alternate)&&C0(n,e)}function Ww(){return null}var QS=typeof reportError=="function"?reportError:function(n){console.error(n)};function Dg(n){this._internalRoot=n}Ad.prototype.render=Dg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(re(409));wd(n,e,null,null)};Ad.prototype.unmount=Dg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;No(function(){wd(null,n,null,null)}),e[jr]=null}};function Ad(n){this._internalRoot=n}Ad.prototype.unstable_scheduleHydration=function(n){if(n){var e=by();n={blockedOn:null,target:n,priority:e};for(var t=0;t<cs.length&&e!==0&&e<cs[t].priority;t++);cs.splice(t,0,n),t===0&&Ly(n)}};function Ug(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function R0(){}function Xw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=qf(o);s.call(u)}}var o=ZS(e,i,n,0,null,!1,!1,"",R0);return n._reactRootContainer=o,n[jr]=o.current,yu(n.nodeType===8?n.parentNode:n),No(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=qf(l);a.call(u)}}var l=Pg(n,0,!1,null,null,!1,!1,"",R0);return n._reactRootContainer=l,n[jr]=l.current,yu(n.nodeType===8?n.parentNode:n),No(function(){wd(e,l,t,i)}),l}function Rd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qf(o);a.call(l)}}wd(e,o,n,r)}else o=Xw(t,e,n,r,i);return qf(o)}Cy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Nl(e.pendingLanes);t!==0&&(Qm(e,t|1),ni(e,Wt()),!(ft&6)&&(Ka=Wt()+500,Ws()))}break;case 13:No(function(){var i=qr(n,1);if(i!==null){var r=Vn();cr(i,n,1,r)}}),Lg(n,1)}};Jm=function(n){if(n.tag===13){var e=qr(n,134217728);if(e!==null){var t=Vn();cr(e,n,134217728,t)}Lg(n,134217728)}};Ry=function(n){if(n.tag===13){var e=Rs(n),t=qr(n,e);if(t!==null){var i=Vn();cr(t,n,e,i)}Lg(n,e)}};by=function(){return vt};Py=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};yp=function(n,e,t){switch(e){case"input":if(hp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=vd(i);if(!r)throw Error(re(90));ay(i),hp(i,r)}}}break;case"textarea":uy(n,t);break;case"select":e=t.value,e!=null&&ba(n,!!t.multiple,e,!1)}};gy=Ag;_y=No;var Yw={usingClientEntryPoint:!1,Events:[Wu,_a,vd,py,my,Ag]},Ml={findFiberByHostInstance:lo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jw={bundleType:Ml.bundleType,version:Ml.version,rendererPackageName:Ml.rendererPackageName,rendererConfig:Ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=yy(n),n===null?null:n.stateNode},findFiberByHostInstance:Ml.findFiberByHostInstance||Ww,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{pd=gc.inject(jw),Tr=gc}catch{}}Ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw;Ui.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ug(e))throw Error(re(200));return Gw(n,e,null,t)};Ui.createRoot=function(n,e){if(!Ug(n))throw Error(re(299));var t=!1,i="",r=QS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pg(n,1,!1,null,null,t,!1,i,r),n[jr]=e.current,yu(n.nodeType===8?n.parentNode:n),new Dg(e)};Ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(re(188)):(n=Object.keys(n).join(","),Error(re(268,n)));return n=yy(e),n=n===null?null:n.stateNode,n};Ui.flushSync=function(n){return No(n)};Ui.hydrate=function(n,e,t){if(!Cd(e))throw Error(re(200));return Rd(null,n,e,!0,t)};Ui.hydrateRoot=function(n,e,t){if(!Ug(n))throw Error(re(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=QS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ZS(e,null,n,1,t??null,r,!1,s,o),n[jr]=e.current,yu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ad(e)};Ui.render=function(n,e,t){if(!Cd(e))throw Error(re(200));return Rd(null,n,e,!1,t)};Ui.unmountComponentAtNode=function(n){if(!Cd(n))throw Error(re(40));return n._reactRootContainer?(No(function(){Rd(null,null,n,!1,function(){n._reactRootContainer=null,n[jr]=null})}),!0):!1};Ui.unstable_batchedUpdates=Ag;Ui.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Cd(t))throw Error(re(200));if(n==null||n._reactInternals===void 0)throw Error(re(38));return Rd(n,e,t,!1,i)};Ui.version="18.3.1-next-f1338f8080-20240426";function JS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(JS)}catch(n){console.error(n)}}JS(),Jx.exports=Ui;var qw=Jx.exports,b0=qw;op.createRoot=b0.createRoot,op.hydrateRoot=b0.hydrateRoot;function Or(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function eM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bu={duration:.5,overwrite:!1,delay:0},Ng,vn,Dt,ji=1e8,Mt=1/ji,Jp=Math.PI*2,$w=Jp/4,Kw=0,tM=Math.sqrt,Zw=Math.cos,Qw=Math.sin,fn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},Kr=function(e){return typeof e=="number"},Ig=function(e){return typeof e>"u"},Rr=function(e){return typeof e=="object"},ii=function(e){return e!==!1},Og=function(){return typeof window<"u"},_c=function(e){return Vt(e)||fn(e)},nM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,Jw=/random\([^)]+\)/g,eA=/,\s*/g,P0=/(?:-?\.?\d|\.)+/gi,iM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ta=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rM=/[+-]=-?[.\d]+/,tA=/[^,'"\[\]\s]+/gi,nA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,gr,em,Fg,Pi={},$f={},sM,oM=function(e){return($f=Za(e,Pi))&&ci},kg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pu=function(e,t){return!t&&console.warn(e)},aM=function(e,t){return e&&(Pi[e]=t)&&$f&&($f[e]=t)||Pi},Lu=function(){return 0},iA={suppressEvents:!0,isStart:!0,kill:!1},mf={suppressEvents:!0,kill:!1},rA={suppressEvents:!0},zg={},Ps=[],tm={},lM,_i={},gh={},L0=30,gf=[],Bg="",Hg=function(e){var t=e[0],i,r;if(Rr(t)||Vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=gf.length;r--&&!gf[r].targetTest(t););i=gf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new PM(e[r],i)))||e.splice(r,1);return e},xo=function(e){return e._gsap||Hg(qi(e))[0]._gsap},uM=function(e,t,i){return(i=e[t])&&Vt(i)?e[t]():Ig(i)&&e.getAttribute&&e.getAttribute(t)||i},ri=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Ia=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},sA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Kf=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(tm={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Vg=function(e){return!!(e._initted||e._startAt||e.add)},cM=function(e,t,i,r){Ps.length&&!vn&&Kf(),e.render(t,i,!!(vn&&t<0&&Vg(e))),Ps.length&&!vn&&Kf()},fM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(tA).length<2?t:fn(e)?e.trim():e},dM=function(e){return e},Li=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},oA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Za=function(e,t){for(var i in t)e[i]=t[i];return e},D0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Rr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Zf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ql=function(e){var t=e.parent||Ot,i=e.keyframes?oA(Pn(e.keyframes)):Li;if(ii(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},aA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},hM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},bd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Fs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},lA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nm=function(e,t,i,r){return e._startAt&&(vn?e._startAt.revert(mf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},uA=function n(e){return!e||e._ts&&n(e.parent)},U0=function(e){return e._repeat?Qa(e._tTime,e=e.duration()+e._rDelay)*e:0},Qa=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},Qf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pd=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Ld=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pd(e),i._dirty||yo(i,e)),e},pM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qf(e.rawTime(),t),(!t._dur||Yu(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),yo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},yr=function(e,t,i,r){return t.parent&&Fs(t),t._start=Nt((Kr(i)?i:i||e!==Ot?Fi(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),hM(e,t,"_first","_last",e._sort?"_start":0),im(t)||(e._recent=t),r||pM(e,t),e._ts<0&&Ld(e,e._tTime),e},mM=function(e,t){return(Pi.ScrollTrigger||kg("scrollTrigger",t))&&Pi.ScrollTrigger.create(t,e)},gM=function(e,t,i,r,s){if(Wg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&lM!==xi.frame)return Ps.push(e),e._lazy=[s,r],1},cA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},im=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},fA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&cA(e)&&!(!e._initted&&im(e))||(e._ts<0||e._dp._ts<0)&&!im(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Yu(0,e._tDur,t),c=Qa(l,a),e._yoyo&&c&1&&(o=1-o),c!==Qa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||vn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&gM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&nm(e,t,i,!0),e._onUpdate&&!i&&Mi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fs(e,1),!i&&!vn&&(Mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ja=function(e,t,i,r){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ld(e,e._tTime=e._tDur*a),e.parent&&Pd(e),i||yo(e.parent,e),e},N0=function(e){return e instanceof Zn?yo(e):Ja(e,e._dur)},hA={_start:0,endTime:Lu,totalDuration:Lu},Fi=function n(e,t,i){var r=e.labels,s=e._recent||hA,o=e.duration()>=ji?s.endTime(!1):e._dur,a,l,u;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Pn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Jl=function(e,t,i){var r=Kr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ii(l.vars.inherit)&&l.parent;o.immediateRender=ii(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},Xs=function(e,t){return e||e===0?t(e):t},Yu=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!fn(e)||!(t=nA.exec(e))?"":t[1]},pA=function(e,t,i){return Xs(i,function(r){return Yu(e,t,r)})},rm=[].slice,_M=function(e,t){return e&&Rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Rr(e[0]))&&!e.nodeType&&e!==gr},mA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return fn(r)&&!t||_M(r,1)?(s=i).push.apply(s,qi(r)):i.push(r)})||i},qi=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):fn(e)&&!i&&(em||!el())?rm.call((t||Fg).querySelectorAll(e),0):Pn(e)?mA(e,i):_M(e)?rm.call(e,0):e?[e]:[]},sm=function(e){return e=qi(e)[0]||Pu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return qi(t,i.querySelectorAll?i:i===e?Pu("Invalid scope")||Fg.createElement("div"):e)}},vM=function(e){return e.sort(function(){return .5-Math.random()})},xM=function(e){if(Vt(e))return e;var t=Rr(e)?e:{each:e},i=So(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return fn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,_){var g=(_||t).length,m=o[g],f,v,x,y,T,w,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,ji])[1],!S){for(M=-ji;M<(M=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],f=l?Math.min(S,g)*c-.5:r%S,v=S===ji?0:l?g*d/S-.5:r/S|0,M=0,P=ji,w=0;w<g;w++)x=w%S-f,y=v-(w/S|0),m[w]=T=u?Math.abs(u==="y"?y:x):tM(x*x+y*y),T>M&&(M=T),T<P&&(P=T);r==="random"&&vM(m),m.max=M-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Rn(t.amount||t.each)||0,i=i&&g<0?RA(i):i}return g=(m[h]-m.min)/m.max||0,Nt(m.b+(i?i(g):g)*m.v)+m.u}},om=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Kr(i)?0:Rn(i))}},yM=function(e,t){var i=Pn(e),r,s;return!i&&Rr(e)&&(r=i=e.radius||ji,e.values?(e=qi(e.values),(s=!Kr(e[0]))&&(r*=r)):e=om(e.increment)),Xs(t,i?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ji,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Kr(o)?c:c+Rn(o)}:om(e))},SM=function(e,t,i,r){return Xs(Pn(e)?!t:i===!0?!!(i=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},gA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},_A=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},vA=function(e,t,i){return EM(e,t,0,1,i)},MM=function(e,t,i){return Xs(i,function(r){return e[~~t(r)]})},xA=function n(e,t,i){var r=t-e;return Pn(e)?MM(e,n(0,e.length),t):Xs(i,function(s){return(r+(s-e)%r)%r+e})},yA=function n(e,t,i){var r=t-e,s=r*2;return Pn(e)?MM(e,n(0,e.length-1),t):Xs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Du=function(e){return e.replace(Jw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(eA);return SM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},EM=function(e,t,i,r,s){var o=t-e,a=r-i;return Xs(s,function(l){return i+((l-e)/o*a||0)})},SA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=fn(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return c[g](_-g)},i=t}else r||(e=Za(Pn(e)?[]:{},e));if(!c){for(l in t)Gg.call(a,e,l,"get",t[l]);s=function(_){return jg(_,a)||(o?e.p:e)}}}return Xs(i,s)},I0=function(e,t,i){var r=e.labels,s=ji,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mi=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ps.length&&Kf(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},Ol=function(e){return Fs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&Mi(e,"onInterrupt"),e},wa,TM=[],wM=function(e){if(e)if(e=!e.name&&e.default||e,Og()||e.headless){var t=e.name,i=Vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Lu,render:jg,add:Gg,kill:kA,modifier:FA,rawVars:0},o={targetTest:0,get:0,getSetter:Yg,aliases:{},register:0};if(el(),e!==r){if(_i[t])return;Li(r,Li(Zf(e,s),o)),Za(r.prototype,Za(s,Zf(e,o))),_i[r.prop=t]=r,e.targetTest&&(gf.push(r),zg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}aM(t,r),e.register&&e.register(ci,r,si)}else TM.push(e)},St=255,Fl={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},_h=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},AM=function(e,t,i){var r=e?Kr(e)?[e>>16,e>>8&St,e&St]:0:Fl.black,s,o,a,l,u,c,d,h,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fl[e])r=Fl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(P0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=_h(l+1/3,s,o),r[1]=_h(l,s,o),r[2]=_h(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(iM),i&&r.length<4&&(r[3]=1),r}else r=e.match(P0)||Fl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},CM=function(e){var t=[],i=[],r=-1;return e.split(Ls).forEach(function(s){var o=s.match(Ta)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},O0=function(e,t,i){var r="",s=(e+r).match(Ls),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=AM(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=CM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ls,"1").split(Ta),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ls),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ls=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),MA=/hsl[a]?\(/,RM=function(e){var t=e.join(" "),i;if(Ls.lastIndex=0,Ls.test(t))return i=MA.test(t),e[1]=O0(e[1],i),e[0]=O0(e[0],i,CM(e[1])),!0},Uu,xi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,_=function g(m){var f=n()-r,v=m===!0,x,y,T,w;if((f>e||f<0)&&(i+=f-t),r+=f,T=r-i,x=T-o,(x>0||v)&&(w=++d.frame,h=T-d.time*1e3,d.time=T=T/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](T,h,w,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){sM&&(!em&&Og()&&(gr=em=window,Fg=gr.document||{},Pi.gsap=ci,(gr.gsapVersions||(gr.gsapVersions=[])).push(ci.version),oM($f||gr.GreenSockGlobals||!gr.gsap&&gr||{}),TM.forEach(wM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Uu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Uu=0,u=Lu},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,v){var x=f?function(y,T,w,M){m(y,T,w,M),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),el(),x},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),el=function(){return!Uu&&xi.wake()},ct={},EA=/^[\d.\-M][\d.\-,\s]/,TA=/["']/g,wA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(TA,"").trim():+u,r=l.substr(a+1).trim();return t},AA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},CA=function(e){var t=(e+"").split("("),i=ct[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[wA(t[1])]:AA(e).split(",").map(fM)):ct._CE&&EA.test(e)?ct._CE("",e):i},RA=function(e){return function(t){return 1-e(1-t)}},So=function(e,t){return e&&(Vt(e)?e:ct[e]||CA(e))||t},Ho=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ri(e,function(a){ct[a]=Pi[a]=s,ct[o=a.toLowerCase()]=i;for(var l in s)ct[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ct[a+"."+l]=s[l]}),s},bM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Jp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Qw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:bM(a);return s=Jp/s,l.config=function(u,c){return n(e,u,c)},l},xh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:bM(i);return r.config=function(s){return n(e,s)},r};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ho(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ct.Linear.easeNone=ct.none=ct.Linear.easeIn;Ho("Elastic",vh("in"),vh("out"),vh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ho("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ho("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Ho("Circ",function(n){return-(tM(1-n*n)-1)});Ho("Sine",function(n){return n===1?1:-Zw(n*$w)+1});Ho("Back",xh("in"),xh("out"),xh());ct.SteppedEase=ct.steps=Pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Yu(0,o,a)|0)+s)*i}}};bu.ease=ct["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Bg+=n+","+n+"Params,"});var PM=function(e,t){this.id=Kw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:uM,this.set=t?t.getSetter:Yg},Nu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ja(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Uu||xi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ja(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(el(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ld(this,i),!s._dp||s.parent||pM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&yr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),cM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+U0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+U0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Qa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Qf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Yu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Pd(this),lA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(el(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&yr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ii(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=rA);var r=vn;return vn=i,Vg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),vn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,N0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,N0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Fi(this,i),ii(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ii(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Vt(i)?i:dM,l=function(){var c=r.then;r.then=null,s&&s(),Vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ol(this)},n}();Li(Nu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Zn=function(n){eM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ii(i.sortChildren),Ot&&yr(i.parent||Ot,Or(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&mM(Or(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Jl(0,arguments,this),this},t.from=function(r,s,o){return Jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,Fi(this,o),1),this},t.call=function(r,s,o){return yr(this,qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new qt(r,o,Fi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ql(o).immediateRender=ii(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Ql(a).immediateRender=ii(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Nt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,_,g,m,f,v,x,y,T,w,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,f=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Nt(c%m),c===l?(g=this._repeat,h=u):(T=Nt(c/m),g=~~T,g&&g===T&&(h=u,g--),h>u&&(h=u)),T=Qa(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),w&&g&1&&(h=u-h,M=1),g!==T&&!this._lock){var P=w&&T&1,S=P===(w&&g&1);if(g<T&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Nt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=dA(this,Nt(a),Nt(h)),v&&(c-=h-(h=v._start))),this._tTime=c,this._time=h,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(Mi(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){v=0,_&&(c+=this._zTime=-Mt);break}}p=_}else{p=this._last;for(var E=r<0?r:h;p;){if(_=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||vn&&Vg(p)),h!==this._time||!this._ts&&!f){v=0,_&&(c+=this._zTime=E?-Mt:Mt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(h>=a?0:-Mt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Pd(this),this.render(r,s,o);this._onUpdate&&!s&&Mi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Fs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Mi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Kr(s)||(s=Fi(this,s,r)),!(r instanceof Nu)){if(Pn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(fn(r))return this.addLabel(r,s);if(Vt(r))r=qt.delayedCall(0,r);else return this}return this!==r?yr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ji);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return fn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&bd(this,r),r===this._recent&&(this._recent=this._last),yo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Fi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=qt.delayedCall(0,s||Lu,o);return a.data="isPause",this._hasPause=1,yr(this,a,Fi(this,r))},t.removePause=function(r){var s=this._first;for(r=Fi(this,r);s;)s._start===r&&s.data==="isPause"&&Fs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ms!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=qi(r),l=this._first,u=Kr(s),c;l;)l instanceof qt?sA(l._targets,a)&&(u?(!ms||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Fi(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,_=qt.to(o,Li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&Ja(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Li({startAt:{time:Fi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),I0(this,Fi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),I0(this,Fi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Nt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return yo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),yo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ji,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,yr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Nt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ja(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(cM(Ot,Qf(r,Ot)),lM=xi.frame),xi.frame>=L0){L0+=Ai.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&Ai.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e}(Nu);Li(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bA=function(e,t,i,r,s,o,a){var l=new si(this._pt,e,t,0,1,OM,null,s),u=0,c=0,d,h,p,_,g,m,f,v;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Du(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),h=i.match(mh)||[];d=mh.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Ia(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=mh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(rM.test(r)||f)&&(l.e=0),this._pt=l,l},Gg=function(e,t,i,r,s,o,a,l,u,c){Vt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:Vt(d)?u?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Vt(d)?u?NA:NM:Xg,_;if(fn(r)&&(~r.indexOf("random(")&&(r=Du(r)),r.charAt(1)==="="&&(_=Ia(h,r)+(Rn(h)||0),(_||_===0)&&(r=_))),!c||h!==r||am)return!isNaN(h*r)&&r!==""?(_=new si(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?OA:IM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&kg(t,r),bA.call(this,e,t,h,r,p,l||Ai.stringFilter,u))},PA=function(e,t,i,r,s){if(Vt(e)&&(e=eu(e,s,t,i,r)),!Rr(e)||e.style&&e.nodeType||Pn(e)||nM(e))return fn(e)?eu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=eu(e[a],s,t,i,r);return o},LM=function(e,t,i,r,s,o){var a,l,u,c;if(_i[e]&&(a=new _i[e]).init(s,a.rawVars?t[e]:PA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new si(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==wa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ms,am,Wg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:m,x=e._overwrite==="auto"&&!Ng,y=e.timeline,T=r.easeReverse||d,w,M,P,S,E,I,N,Z,L,F,B,H,D;if(y&&(!h||!s)&&(s="none"),e._ease=So(s,bu.ease),e._rEase=T&&(So(T)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||h&&!r.stagger){if(Z=m[0]?xo(m[0]).harness:0,H=Z&&r[Z.prop],w=Zf(r,zg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?mf:iA),g._lazy=0),o){if(Fs(e._startAt=qt.set(m,Li({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&ii(l),startAt:null,delay:0,onUpdate:u&&function(){return Mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!a&&!p)&&e._startAt.revert(mf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),P=Li({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ii(l),immediateRender:a,stagger:0,parent:f},w),H&&(P[Z.prop]=H),Fs(e._startAt=qt.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(mf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ii(l)||l&&!_,M=0;M<m.length;M++){if(E=m[M],N=E._gsap||Hg(m)[M]._gsap,e._ptLookup[M]=F={},tm[N.id]&&Ps.length&&Kf(),B=v===m?M:v.indexOf(E),Z&&(L=new Z).init(E,H||w,e,B,v)!==!1&&(e._pt=S=new si(e._pt,E,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(k){F[k]=S}),L.priority&&(I=1)),!Z||H)for(P in w)_i[P]&&(L=LM(P,w,e,B,E,v))?L.priority&&(I=1):F[P]=S=Gg.call(e,E,P,"get",w[P],B,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(E,e._op[M]),x&&e._pt&&(ms=e,Ot.killTweensOf(E,F,e.globalTime(t)),D=!e.parent,ms=0),e._pt&&l&&(tm[N.id]=1)}I&&FM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!D,h&&t<=0&&y.render(ji,!0,!0)},LA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return am=1,e.vars[t]="+=0",Wg(e,a),am=0,l?Pu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Gt(i)+Rn(d.e)),d.b&&(d.b=c.s+Rn(d.b))},DA=function(e,t){var i=e[0]?xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Za({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},UA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Pn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},eu=function(e,t,i,r,s){return Vt(e)?e.call(t,i,r,s):fn(e)&&~e.indexOf("random(")?Du(e):e},DM=Bg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",UM={};ri(DM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return UM[n]=1});var qt=function(n){eM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=r.parent||Ot,v=(Pn(i)||nM(i)?Kr(i[0]):"length"in r)?[i]:qi(i),x,y,T,w,M,P,S,E;if(a._targets=v.length?Hg(v):Pu("GSAP target "+i+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||h||_c(u)||_c(c)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Zn({data:"nested",defaults:g||{},targets:f&&f.data==="nested"?f.vars.targets:v}),x.kill(),x.parent=x._dp=Or(a),x._start=0,h||_c(u)||_c(c)){if(w=v.length,S=h&&xM(h),Rr(h))for(M in h)~DM.indexOf(M)&&(E||(E={}),E[M]=h[M]);for(y=0;y<w;y++)T=Zf(r,UM),T.stagger=0,I&&(T.easeReverse=I),E&&Za(T,E),P=v[y],T.duration=+eu(u,Or(a),y,P,v),T.delay=(+eu(c,Or(a),y,P,v)||0)-a._delay,!h&&w===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),x.to(P,T,S?S(y,P,v):0),x._ease=ct.none;x.duration()?u=c=0:a.timeline=0}else if(_){Ql(Li(x.vars.defaults,{ease:"none"})),x._ease=So(_.ease||r.ease||"none");var N=0,Z,L,F;if(Pn(_))_.forEach(function(B){return x.to(v,B,">")}),x.duration();else{T={};for(M in _)M==="ease"||M==="easeEach"||UA(M,_[M],T,_.easeEach);for(M in T)for(Z=T[M].sort(function(B,H){return B.t-H.t}),N=0,y=0;y<Z.length;y++)L=Z[y],F={ease:L.e,duration:(L.t-(y?Z[y-1].t:0))/100*u},F[M]=L.v,x.to(v,F,N),N+=F.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!Ng&&(ms=Or(a),Ot.killTweensOf(v),ms=0),yr(f,Or(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===Nt(f._time)&&ii(d)&&uA(Or(a))&&f.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),m&&mM(Or(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Mt&&!c?l:r<Mt?0:r,h,p,_,g,m,f,v,x;if(!u)fA(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=Nt(d%g),d===l?(_=this._repeat,h=u):(m=Nt(d/g),_=~~m,_&&_===m?(h=u,_--):h>u&&(h=u)),f=this._yoyo&&_&1,f&&(h=u-h),m=Qa(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Nt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(gM(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var T=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Mi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&nm(this,r,s,o),Mi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Mi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&nm(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fs(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Mi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Uu||xi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wg(this,u),c=this._ease(u/this._dur),LA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Ld(this,0),this.parent||hM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ol(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ms&&ms.vars.overwrite!==!0)._first||Ol(this),this.parent&&o!==this.timeline.totalDuration()&&Ja(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?qi(r):a,u=this._ptLookup,c=this._pt,d,h,p,_,g,m,f;if((!s||s==="all")&&aA(a,l))return s==="all"&&(this._pt=0),Ol(this);for(d=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},ri(s,function(v){return g[v]=1}),s=g),s=DA(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,_=h,p={}):(p=d[f]=d[f]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&bd(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Ol(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Nu);Li(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Zn,t=rm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Xg=function(e,t,i){return e[t]=i},NM=function(e,t,i){return e[t](i)},NA=function(e,t,i,r){return e[t](r.fp,i)},IA=function(e,t,i){return e.setAttribute(t,i)},Yg=function(e,t){return Vt(e[t])?NM:Ig(e[t])&&e.setAttribute?IA:Xg},IM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},OA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},OM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},jg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},FA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},kA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?bd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},zA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},FM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},si=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||IM,this.d=l||this,this.set=u||Xg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=zA,this.m=i,this.mt=s,this.tween=r},n}();ri(Bg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return zg[n]=1});Pi.TweenMax=Pi.TweenLite=qt;Pi.TimelineLite=Pi.TimelineMax=Zn;Ot=new Zn({sortChildren:!1,defaults:bu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=RM;var Mo=[],_f={},BA=[],F0=0,HA=0,yh=function(e){return(_f[e]||BA).map(function(t){return t()})},lm=function(){var e=Date.now(),t=[];e-F0>2&&(yh("matchMediaInit"),Mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=gr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),yh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),F0=e,yh("matchMedia"))},kM=function(){function n(t,i){this.selector=i&&sm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=HA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Vt(i)&&(s=r,r=i,i=Vt);var o=this,a=function(){var u=Dt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=sm(s)),Dt=o,d=r.apply(o,arguments),Vt(d)&&o._r.push(d),Dt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Zn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Mo.length;o--;)Mo[o].id===this.id&&Mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),VA=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Rr(i)||(i={matches:i});var o=new kM(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=gr.matchMedia(i[u]),l&&(Mo.indexOf(o)<0&&Mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(lm):l.addEventListener("change",lm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Jf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return wM(r)})},timeline:function(e){return new Zn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){fn(e)&&(e=qi(e)[0]);var s=xo(e||{}).get,o=i?dM:fM;return i==="native"&&(i=""),e&&(t?o((_i[t]&&_i[t].get||s)(e,t,i,r)):function(a,l,u){return o((_i[a]&&_i[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=qi(e),e.length>1){var r=e.map(function(c){return ci.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=_i[t],a=xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;wa._pt=0,d.init(e,i?c+i:c,wa,0,[e]),d.render(1,d),wa._pt&&jg(1,wa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ci.to(e,Li((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=So(e.ease,bu.ease)),D0(bu,e||{})},config:function(e){return D0(Ai,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!_i[a]&&!Pi[a]&&Pu(t+" effect requires "+a+" plugin.")}),gh[t]=function(a,l,u){return i(qi(a),Li(l||{},s),u)},o&&(Zn.prototype[t]=function(a,l,u){return this.add(gh[t](a,Rr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ct[e]=So(t)},parseEase:function(e,t){return arguments.length?So(e,t):ct},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Zn(e),r,s;for(i.smoothChildTiming=ii(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&yr(i,r,r._start-r._delay),r=s;return yr(Ot,i,0),i},context:function(e,t){return e?new kM(e,t):Dt},matchMedia:function(e){return new VA(e)},matchMediaRefresh:function(){return Mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||lm()},addEventListener:function(e,t){var i=_f[e]||(_f[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=_f[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:xA,wrapYoyo:yA,distribute:xM,random:SM,snap:yM,normalize:vA,getUnit:Rn,clamp:pA,splitColor:AM,toArray:qi,selector:sm,mapRange:EM,pipe:gA,unitize:_A,interpolate:SA,shuffle:vM},install:oM,effects:gh,ticker:xi,updateRoot:Zn.updateRoot,plugins:_i,globalTimeline:Ot,core:{PropTween:si,globals:aM,Tween:qt,Timeline:Zn,Animation:Nu,getCache:xo,_removeLinkedListItem:bd,reverting:function(){return vn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return Ng=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Jf[n]=qt[n]});xi.add(Zn.updateRoot);wa=Jf.to({},{duration:0});var GA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},WA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=GA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Sh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(fn(s)&&(l={},ri(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}WA(a,s)}}}},ci=Jf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)vn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Sh("roundProps",om),Sh("modifiers"),Sh("snap",yM))||Jf;qt.version=Zn.version=ci.version="3.15.0";sM=1;Og()&&el();ct.Power0;ct.Power1;ct.Power2;ct.Power3;ct.Power4;ct.Linear;ct.Quad;ct.Cubic;ct.Quart;ct.Quint;ct.Strong;ct.Elastic;ct.Back;ct.SteppedEase;ct.Bounce;ct.Sine;ct.Expo;ct.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var k0,gs,Oa,qg,fo,z0,$g,XA=function(){return typeof window<"u"},Zr={},no=180/Math.PI,Fa=Math.PI/180,Go=Math.atan2,B0=1e8,Kg=/([A-Z])/g,YA=/(left|right|width|margin|padding|x)/i,jA=/[\s,\(]\S/,Sr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},um=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$A=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},zM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},BM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},QA=function(e,t,i){return e.style[t]=i},JA=function(e,t,i){return e.style.setProperty(t,i)},eC=function(e,t,i){return e._gsap[t]=i},tC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},nC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},iC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",oi=Ft+"Origin",rC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Zr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Sr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=kr(r,a)}):this.tfm[e]=o.x?o[e]:kr(r,e),e===oi&&(this.tfm.zOrigin=o.zOrigin);else return Sr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},HM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$g(),(!s||!s.isStart)&&!i[Ft]&&(HM(i),r.zOrigin&&i[oi]&&(i[oi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},VM=function(e,t){var i={target:e,props:[],revert:sC,save:rC};return e._gsap||ci.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},GM,cm=function(e,t){var i=gs.createElementNS?gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gs.createElement(e);return i&&i.style?i:gs.createElement(e)},Ei=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Kg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,tl(t)||t,1)||""},H0="O,Moz,ms,Ms,Webkit".split(","),tl=function(e,t,i){var r=t||fo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(H0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?H0[o]:"")+e},fm=function(){XA()&&window.document&&(k0=window,gs=k0.document,Oa=gs.documentElement,fo=cm("div")||{style:{}},cm("div"),Ft=tl(Ft),oi=Ft+"Origin",fo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",GM=!!tl("perspective"),$g=ci.core.reverting,qg=1)},V0=function(e){var t=e.ownerSVGElement,i=cm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Oa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Oa.removeChild(i),s},G0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},WM=function(e){var t,i;try{t=e.getBBox()}catch{t=V0(e),i=1}return t&&(t.width||t.height)||i||(t=V0(e)),t&&!t.width&&!t.x&&!t.y?{x:+G0(e,["x","cx","x1"])||0,y:+G0(e,["y","cy","y1"])||0,width:0,height:0}:t},XM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&WM(e))},ks=function(e,t){if(t){var i=e.style,r;t in Zr&&t!==oi&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Kg,"-$1").toLowerCase())):i.removeAttribute(t)}},_s=function(e,t,i,r,s,o){var a=new si(e._pt,t,i,0,1,o?BM:zM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},W0={deg:1,rad:1,turn:1},oC={grid:1,flex:1},zs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=fo.style,l=YA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",_,g,m,f;if(r===o||!s||W0[r]||W0[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&XM(e),(p||o==="%")&&(Zr[t]||~t.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[c],Gt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===gs||!g.appendChild)&&(g=gs.body),m=g._gsap,m&&p&&m.width&&l&&m.time===xi.time&&!m.uncache)return Gt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:ks(e,t)}else(p||o==="%")&&!oC[Ei(g,"display")]&&(a.position=Ei(e,"position")),g===e&&(a.position="static"),g.appendChild(fo),_=fo[c],g.removeChild(fo),a.position="absolute";return l&&p&&(m=xo(g),m.time=xi.time,m.width=g[c]),Gt(h?_*s/d:_&&s?d/_*s:0)},kr=function(e,t,i,r){var s;return qg||fm(),t in Sr&&t!=="transform"&&(t=Sr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zr[t]&&t!=="transform"?(s=Ou(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:td(Ei(e,oi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ed[t]&&ed[t](e,t,i)||Ei(e,t)||uM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zs(e,t,s,i)+i:s},aC=function(e,t,i,r){if(!i||i==="none"){var s=tl(t,e,1),o=s&&Ei(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ei(e,"borderTopColor"))}var a=new si(this._pt,e.style,t,0,1,OM),l=0,u=0,c,d,h,p,_,g,m,f,v,x,y,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ei(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Ei(e,t)||r,g?e.style[t]=g:ks(e,t)),c=[i,r],RM(c),i=c[0],r=c[1],h=i.match(Ta)||[],T=r.match(Ta)||[],T.length){for(;d=Ta.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ia(p,m)+y),f=parseFloat(m),x=m.substr((f+"").length),l=Ta.lastIndex-x.length,x||(x=x||Ai.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=zs(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:f-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?BM:zM;return rM.test(r)&&(a.e=0),this._pt=a,a},X0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=X0[i]||i,t[1]=X0[r]||r,t.join(" ")},uC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Zr[a]&&(l=1,a=a==="transformOrigin"?oi:Ft),ks(i,a);l&&(ks(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ou(i,1),o.uncache=1,HM(r)))}},ed={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new si(e._pt,t,i,0,0,uC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Iu=[1,0,0,1,0,0],YM={},jM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Y0=function(e){var t=Ei(e,Ft);return jM(t)?Iu:t.substr(7).match(iM).map(Gt)},Zg=function(e,t){var i=e._gsap||xo(e),r=e.style,s=Y0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Iu:s):(s===Iu&&!e.offsetParent&&e!==Oa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Oa.appendChild(e)),s=Y0(e),l?r.display=l:ks(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Oa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dm=function(e,t,i,r,s,o){var a=e._gsap,l=s||Zg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,T=parseFloat(x[1])||0,w,M,P,S;i?l!==Iu&&(M=p*m-_*g)&&(P=y*(m/M)+T*(-g/M)+(g*v-m*f)/M,S=y*(-_/M)+T*(p/M)-(p*v-_*f)/M,y=P,T=S):(w=WM(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(x[1]||x[0]).indexOf("%")?T/100*w.height:T)),r||r!==!1&&a.smooth?(f=y-u,v=T-c,a.xOffset=d+(f*p+v*g)-f,a.yOffset=h+(f*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[oi]="0px 0px",o&&(_s(o,a,"xOrigin",u,y),_s(o,a,"yOrigin",c,T),_s(o,a,"xOffset",d,a.xOffset),_s(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Ou=function(e,t){var i=e._gsap||new PM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ei(e,oi)||"0",c,d,h,p,_,g,m,f,v,x,y,T,w,M,P,S,E,I,N,Z,L,F,B,H,D,k,R,$,Q,q,K,ie;return c=d=h=g=m=f=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&XM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=Zg(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),dm(e,H||u,!!H||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,w=i.yOrigin||0,M!==Iu&&(I=M[0],N=M[1],Z=M[2],L=M[3],c=F=M[4],d=B=M[5],M.length===6?(p=Math.sqrt(I*I+N*N),_=Math.sqrt(L*L+Z*Z),g=I||N?Go(N,I)*no:0,v=Z||L?Go(Z,L)*no+g:0,v&&(_*=Math.abs(Math.cos(v*Fa))),i.svg&&(c-=T-(T*I+w*Z),d-=w-(T*N+w*L))):(ie=M[6],q=M[7],R=M[8],$=M[9],Q=M[10],K=M[11],c=M[12],d=M[13],h=M[14],P=Go(ie,Q),m=P*no,P&&(S=Math.cos(-P),E=Math.sin(-P),H=F*S+R*E,D=B*S+$*E,k=ie*S+Q*E,R=F*-E+R*S,$=B*-E+$*S,Q=ie*-E+Q*S,K=q*-E+K*S,F=H,B=D,ie=k),P=Go(-Z,Q),f=P*no,P&&(S=Math.cos(-P),E=Math.sin(-P),H=I*S-R*E,D=N*S-$*E,k=Z*S-Q*E,K=L*E+K*S,I=H,N=D,Z=k),P=Go(N,I),g=P*no,P&&(S=Math.cos(P),E=Math.sin(P),H=I*S+N*E,D=F*S+B*E,N=N*S-I*E,B=B*S-F*E,I=H,F=D),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=Gt(Math.sqrt(I*I+N*N+Z*Z)),_=Gt(Math.sqrt(B*B+ie*ie)),P=Go(F,B),v=Math.abs(P)>2e-4?P*no:0,y=K?1/(K<0?-K:K):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!jM(Ei(e,Ft)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Gt(p),i.scaleY=Gt(_),i.rotation=Gt(g)+a,i.rotationX=Gt(m)+a,i.rotationY=Gt(f)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[oi]=td(u)),i.xOffset=i.yOffset=0,i.force3D=Ai.force3D,i.renderTransform=i.svg?fC:GM?qM:cC,i.uncache=0,i},td=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mh=function(e,t,i){var r=Rn(t);return Gt(parseFloat(t)+parseFloat(zs(e,"x",i+"px",r)))+r},cC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,qM(e,t)},qs="0deg",El="0px",$s=") ",qM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,v=i.target,x=i.zOrigin,y="",T=f==="auto"&&e&&e!==1||f===!0;if(x&&(d!==qs||c!==qs)){var w=parseFloat(c)*Fa,M=Math.sin(w),P=Math.cos(w),S;w=parseFloat(d)*Fa,S=Math.cos(w),o=Mh(v,o,M*S*-x),a=Mh(v,a,-Math.sin(w)*-x),l=Mh(v,l,P*S*-x+x)}m!==El&&(y+="perspective("+m+$s),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==El||a!==El||l!==El)&&(y+=l!==El||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+$s),u!==qs&&(y+="rotate("+u+$s),c!==qs&&(y+="rotateY("+c+$s),d!==qs&&(y+="rotateX("+d+$s),(h!==qs||p!==qs)&&(y+="skew("+h+", "+p+$s),(_!==1||g!==1)&&(y+="scale("+_+", "+g+$s),v.style[Ft]=y||"translate(0, 0)"},fC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),T,w,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Fa,u*=Fa,T=Math.cos(l)*d,w=Math.sin(l)*d,M=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Fa,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),T*=S,w*=S)),T=Gt(T),w=Gt(w),M=Gt(M),P=Gt(P)):(T=d,P=h,w=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=zs(p,"x",o,"px"),y=zs(p,"y",a,"px")),(_||g||m||f)&&(x=Gt(x+_-(_*T+g*M)+m),y=Gt(y+g-(_*w+g*P)+f)),(r||s)&&(S=p.getBBox(),x=Gt(x+r/100*S.width),y=Gt(y+s/100*S.height)),S="matrix("+T+","+w+","+M+","+P+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Ft]=S)},dC=function(e,t,i,r,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?no:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*B0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*B0)%o-~~(u/o)*o)),e._pt=h=new si(e._pt,t,i,r,u,qA),h.e=c,h.u="deg",e._props.push(i),h},j0=function(e,t){for(var i in t)e[i]=t[i];return e},hC=function(e,t,i){var r=j0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Ou(i,1),ks(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Ou(i,1),o[Ft]=u);for(l in Zr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Rn(u),_=Rn(c),d=p!==_?zs(i,l,u,_):parseFloat(u),h=parseFloat(c),e._pt=new si(e._pt,a,l,d,h-d,um),e._pt.u=_||0,e._props.push(l));j0(a,r)};ri("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ed[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(_){return kr(a,_,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,d)}});var $M={name:"css",register:fm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,_,g,m,f,v,x,y,T,w,M,P,S;qg||fm(),this.styles=this.styles||VM(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(_i[g]&&LM(g,t,i,r,e,s)))){if(p=typeof c,_=ed[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Du(c)),_)_(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ls.lastIndex=0,Ls.test(u)||(m=Rn(u),f=Rn(c),f?m!==f&&(u=zs(e,g,u,f)+f):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],fn(u)&&~u.indexOf("random(")&&(u=Du(u)),Rn(u+"")||u==="auto"||(u+=Ai.units[g]||Rn(kr(e,g))||""),(u+"").charAt(1)==="="&&(u=kr(e,g))):u=kr(e,g),h=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in Sr&&(g==="autoAlpha"&&(h===1&&kr(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),_s(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Sr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in Zr,x){if(this.styles.save(g),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Ei(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=Ei(e,"perspective"),E?e.style.perspective=E:ks(e,"perspective")}d=parseFloat(c)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Ou(e,t.parseTransform),w=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new si(this._pt,a,Ft,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new si(this._pt,T,"scaleY",T.scaleY,(v?Ia(T.scaleY,v+d):d)-T.scaleY||0,um),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(oi,0,a[oi]),c=lC(c),T.svg?dm(e,c,0,w,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==T.zOrigin&&_s(this,T,"zOrigin",T.zOrigin,f),_s(this,a,g,td(u),td(c)));continue}else if(g==="svgOrigin"){dm(e,c,1,w,0,this);continue}else if(g in YM){dC(this,T,g,h,v?Ia(h,v+c):c);continue}else if(g==="smoothOrigin"){_s(this,T,"smooth",T.smooth,c);continue}else if(g==="force3D"){T[g]=c;continue}else if(g==="transform"){hC(this,c,e);continue}}else g in a||(g=tl(g)||g);if(x||(d||d===0)&&(h||h===0)&&!jA.test(c)&&g in a)m=(u+"").substr((h+"").length),d||(d=0),f=Rn(c)||(g in Ai.units?Ai.units[g]:m),m!==f&&(h=zs(e,g,u,f)),this._pt=new si(this._pt,x?T:a,g,h,(v?Ia(h,v+d):d)-h,!x&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?ZA:um),this._pt.u=f||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=KA):m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=$A);else if(g in a)aC.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){kg(g,c);continue}x||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,u||e[g])),o.push(g)}}M&&FM(this)},render:function(e,t){if(t.tween._time||!$g())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:kr,aliases:Sr,getSetter:function(e,t,i){var r=Sr[t];return r&&r.indexOf(",")<0&&(t=r),t in Zr&&t!==oi&&(e._gsap.x||kr(e,"x"))?i&&z0===i?t==="scale"?tC:eC:(z0=i||{})&&(t==="scale"?nC:iC):e.style&&!Ig(e.style[t])?QA:~t.indexOf("-")?JA:Yg(e,t)},core:{_removeProperty:ks,_getMatrix:Zg}};ci.utils.checkPrefix=tl;ci.core.getStyleSaver=VM;(function(n,e,t,i){var r=ri(n+","+e+","+t,function(s){Zr[s]=1});ri(e,function(s){Ai.units[s]="deg",YM[s]=1}),Sr[r[13]]=n+","+e,ri(i,function(s){var o=s.split(":");Sr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ai.units[n]="px"});ci.registerPlugin($M);var ju=ci.registerPlugin($M)||ci;ju.core.Tween;function pC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function mC(n,e,t){return e&&pC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn,vf,yi,vs,xs,ka,KM,io,za,ZM,Vr,ir,QM,JM=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},eE=1,Aa=[],ot=[],Ar=[],tu=Date.now,hm=function(e,t){return t},gC=function(){var e=za.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ot),r.push.apply(r,Ar),ot=i,Ar=r,hm=function(o,a){return t[o](a)}},Ds=function(e,t){return~Ar.indexOf(e)&&Ar[Ar.indexOf(e)+1][t]},nu=function(e){return!!~ZM.indexOf(e)},Nn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},vc="scrollLeft",xc="scrollTop",pm=function(){return Vr&&Vr.isPressed||ot.cache++},nd=function(e,t){var i=function r(s){if(s||s===0){eE&&(yi.history.scrollRestoration="manual");var o=Vr&&Vr.isPressed;s=r.v=Math.round(s)||(Vr&&Vr.iOS?1:0),e(s),r.cacheID=ot.cache,o&&hm("ss",s)}else(t||ot.cache!==r.cacheID||hm("ref"))&&(r.cacheID=ot.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:vc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nd(function(n){return arguments.length?yi.scrollTo(n,en.sc()):yi.pageXOffset||vs[vc]||xs[vc]||ka[vc]||0})},en={s:xc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:nd(function(n){return arguments.length?yi.scrollTo(Hn.sc(),n):yi.pageYOffset||vs[xc]||xs[xc]||ka[xc]||0})},jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},_C=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;nu(e)&&(e=vs.scrollingElement||xs);var s=ot.indexOf(e),o=r===en.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+o]||Nn(e,"scroll",pm);var a=ot[s+o],l=a||(ot[s+o]=nd(Ds(e,i),!0)||(nu(e)?r:nd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},mm=function(e,t,i){var r=e,s=e,o=tu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=tu();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},h=function(_){var g=a,m=s,f=tu();return(_||_===0)&&_!==r&&c(_),o===a||f-a>u?0:(r+(i?m:-m))/((i?f:o)-g)*1e3};return{update:c,reset:d,getVelocity:h}},Tl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},q0=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},tE=function(){za=mn.core.globals().ScrollTrigger,za&&za.core&&gC()},nE=function(e){return mn=e||JM(),!vf&&mn&&typeof document<"u"&&document.body&&(yi=window,vs=document,xs=vs.documentElement,ka=vs.body,ZM=[yi,vs,xs,ka],mn.utils.clamp,QM=mn.core.context||function(){},io="onpointerenter"in ka?"pointer":"mouse",KM=Xt.isTouch=yi.matchMedia&&yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ir=Xt.eventTypes=("ontouchstart"in xs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return eE=0},500),vf=1),za||tE(),vf};Hn.op=en;ot.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){vf||nE(mn)||console.warn("Please gsap.registerPlugin(Observer)"),za||tE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,h=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,f=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,T=i.onRight,w=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,I=i.onChange,N=i.onToggleX,Z=i.onToggleY,L=i.onHover,F=i.onHoverEnd,B=i.onMove,H=i.ignoreCheck,D=i.isNormalizer,k=i.onGestureStart,R=i.onGestureEnd,$=i.onWheel,Q=i.onEnable,q=i.onDisable,K=i.onClick,ie=i.scrollSpeed,de=i.capture,he=i.allowClicks,Ee=i.lockAxis,De=i.onLockAxis;this.target=a=jn(a)||xs,this.vars=i,p&&(p=mn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,ie=ie||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(yi.getComputedStyle(ka).lineHeight)||22);var Ce,Xe,V,Ye,xe,Ue,ye,G=this,ke=0,C=0,A=i.passive||!c&&i.passive!==!1,O=Bs(a,Hn),J=Bs(a,en),te=O(),ne=J(),_e=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ir[0]==="pointerdown",ce=nu(a),ue=a.ownerDocument||vs,Pe=[0,0,0],ze=[0,0,0],ee=0,qe=function(){return ee=tu()},Re=function(Te,Fe){return(G.event=Te)&&p&&_C(Te.target,p)||Fe&&_e&&Te.pointerType!=="touch"||H&&H(Te,Fe)},pe=function(){G._vx.reset(),G._vy.reset(),Xe.pause(),d&&d(G)},Se=function(){var Te=G.deltaX=q0(Pe),Fe=G.deltaY=q0(ze),le=Math.abs(Te)>=r,Ve=Math.abs(Fe)>=r;I&&(le||Ve)&&I(G,Te,Fe,Pe,ze),le&&(T&&G.deltaX>0&&T(G),w&&G.deltaX<0&&w(G),S&&S(G),N&&G.deltaX<0!=ke<0&&N(G),ke=G.deltaX,Pe[0]=Pe[1]=Pe[2]=0),Ve&&(P&&G.deltaY>0&&P(G),M&&G.deltaY<0&&M(G),E&&E(G),Z&&G.deltaY<0!=C<0&&Z(G),C=G.deltaY,ze[0]=ze[1]=ze[2]=0),(Ye||V)&&(B&&B(G),V&&(m&&V===1&&m(G),v&&v(G),V=0),Ye=!1),Ue&&!(Ue=!1)&&De&&De(G),xe&&($(G),xe=!1),Ce=0},ve=function(Te,Fe,le){Pe[le]+=Te,ze[le]+=Fe,G._vx.update(Te),G._vy.update(Fe),u?Ce||(Ce=requestAnimationFrame(Se)):Se()},He=function(Te,Fe){Ee&&!ye&&(G.axis=ye=Math.abs(Te)>Math.abs(Fe)?"x":"y",Ue=!0),ye!=="y"&&(Pe[2]+=Te,G._vx.update(Te,!0)),ye!=="x"&&(ze[2]+=Fe,G._vy.update(Fe,!0)),u?Ce||(Ce=requestAnimationFrame(Se)):Se()},Ze=function(Te){if(!Re(Te,1)){Te=Tl(Te,c);var Fe=Te.clientX,le=Te.clientY,Ve=Fe-G.x,Be=le-G.y,$e=G.isDragging;G.x=Fe,G.y=le,($e||(Ve||Be)&&(Math.abs(G.startX-Fe)>=s||Math.abs(G.startY-le)>=s))&&(V||(V=$e?2:1),$e||(G.isDragging=!0),He(Ve,Be))}},lt=G.onPress=function(Le){Re(Le,1)||Le&&Le.button||(G.axis=ye=null,Xe.pause(),G.isPressed=!0,Le=Tl(Le),ke=C=0,G.startX=G.x=Le.clientX,G.startY=G.y=Le.clientY,G._vx.reset(),G._vy.reset(),Nn(D?a:ue,ir[1],Ze,A,!0),G.deltaX=G.deltaY=0,x&&x(G))},me=G.onRelease=function(Le){if(!Re(Le,1)){Un(D?a:ue,ir[1],Ze,!0);var Te=!isNaN(G.y-G.startY),Fe=G.isDragging,le=Fe&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ve=Tl(Le);!le&&Te&&(G._vx.reset(),G._vy.reset(),c&&he&&mn.delayedCall(.08,function(){if(tu()-ee>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(ue.createEvent){var Be=ue.createEvent("MouseEvents");Be.initMouseEvent("click",!0,!0,yi,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(Be)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,d&&Fe&&!D&&Xe.restart(!0),V&&Se(),f&&Fe&&f(G),y&&y(G,le)}},se=function(Te){return Te.touches&&Te.touches.length>1&&(G.isGesturing=!0)&&k(Te,G.isDragging)},U=function(){return(G.isGesturing=!1)||R(G)},oe=function(Te){if(!Re(Te)){var Fe=O(),le=J();ve((Fe-te)*ie,(le-ne)*ie,1),te=Fe,ne=le,d&&Xe.restart(!0)}},ae=function(Te){if(!Re(Te)){Te=Tl(Te,c),$&&(xe=!0);var Fe=(Te.deltaMode===1?l:Te.deltaMode===2?yi.innerHeight:1)*_;ve(Te.deltaX*Fe,Te.deltaY*Fe,0),d&&!D&&Xe.restart(!0)}},Oe=function(Te){if(!Re(Te)){var Fe=Te.clientX,le=Te.clientY,Ve=Fe-G.x,Be=le-G.y;G.x=Fe,G.y=le,Ye=!0,d&&Xe.restart(!0),(Ve||Be)&&He(Ve,Be)}},Ne=function(Te){G.event=Te,L(G)},tt=function(Te){G.event=Te,F(G)},dt=function(Te){return Re(Te)||Tl(Te,c)&&K(G)};Xe=G._dc=mn.delayedCall(h||.25,pe).pause(),G.deltaX=G.deltaY=0,G._vx=mm(0,50,!0),G._vy=mm(0,50,!0),G.scrollX=O,G.scrollY=J,G.isDragging=G.isGesturing=G.isPressed=!1,QM(this),G.enable=function(Le){return G.isEnabled||(Nn(ce?ue:a,"scroll",pm),o.indexOf("scroll")>=0&&Nn(ce?ue:a,"scroll",oe,A,de),o.indexOf("wheel")>=0&&Nn(a,"wheel",ae,A,de),(o.indexOf("touch")>=0&&KM||o.indexOf("pointer")>=0)&&(Nn(a,ir[0],lt,A,de),Nn(ue,ir[2],me),Nn(ue,ir[3],me),he&&Nn(a,"click",qe,!0,!0),K&&Nn(a,"click",dt),k&&Nn(ue,"gesturestart",se),R&&Nn(ue,"gestureend",U),L&&Nn(a,io+"enter",Ne),F&&Nn(a,io+"leave",tt),B&&Nn(a,io+"move",Oe)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Ye=V=!1,G._vx.reset(),G._vy.reset(),te=O(),ne=J(),Le&&Le.type&&lt(Le),Q&&Q(G)),G},G.disable=function(){G.isEnabled&&(Aa.filter(function(Le){return Le!==G&&nu(Le.target)}).length||Un(ce?ue:a,"scroll",pm),G.isPressed&&(G._vx.reset(),G._vy.reset(),Un(D?a:ue,ir[1],Ze,!0)),Un(ce?ue:a,"scroll",oe,de),Un(a,"wheel",ae,de),Un(a,ir[0],lt,de),Un(ue,ir[2],me),Un(ue,ir[3],me),Un(a,"click",qe,!0),Un(a,"click",dt),Un(ue,"gesturestart",se),Un(ue,"gestureend",U),Un(a,io+"enter",Ne),Un(a,io+"leave",tt),Un(a,io+"move",Oe),G.isEnabled=G.isPressed=G.isDragging=!1,q&&q(G))},G.kill=G.revert=function(){G.disable();var Le=Aa.indexOf(G);Le>=0&&Aa.splice(Le,1),Vr===G&&(Vr=0)},Aa.push(G),D&&nu(a)&&(Vr=G),G.enable(g)},mC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.15.0";Xt.create=function(n){return new Xt(n)};Xt.register=nE;Xt.getAll=function(){return Aa.slice()};Xt.getById=function(n){return Aa.filter(function(e){return e.vars.id===n})[0]};JM()&&mn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,ca,rt,_t,vi,pt,Qg,id,Fu,iu,kl,yc,wn,Dd,gm,kn,$0,K0,fa,iE,Eh,rE,On,_m,sE,oE,os,vm,Jg,Ba,e_,ru,xm,Th,Sc=1,An=Date.now,wh=An(),Ki=0,zl=0,Z0=function(e,t,i){var r=gi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Q0=function(e,t){return t&&(!gi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},vC=function n(){return zl&&requestAnimationFrame(n)},J0=function(){return Dd=1},ev=function(){return Dd=0},_r=function(e){return e},Bl=function(e){return Math.round(e*1e5)/1e5||0},aE=function(){return typeof window<"u"},lE=function(){return we||aE()&&(we=window.gsap)&&we.registerPlugin&&we},Io=function(e){return!!~Qg.indexOf(e)},uE=function(e){return(e==="Height"?e_:rt["inner"+e])||vi["client"+e]||pt["client"+e]},cE=function(e){return Ds(e,"getBoundingClientRect")||(Io(e)?function(){return Ef.width=rt.innerWidth,Ef.height=e_,Ef}:function(){return zr(e)})},xC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ds(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?uE(s):e["client"+s])||0}},yC=function(e,t){return!t||~Ar.indexOf(e)?cE(e):function(){return Ef}},Mr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ds(e,i))?o()-cE(e)()[s]:Io(e)?(vi[i]||pt[i])-uE(r):e[i]-e["offset"+r])},Mc=function(e,t){for(var i=0;i<fa.length;i+=3)(!t||~t.indexOf(fa[i+1]))&&e(fa[i],fa[i+1],fa[i+2])},gi=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},Hl=function(e){return typeof e=="number"},ro=function(e){return typeof e=="object"},wl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Wo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Xo=Math.abs,fE="left",dE="top",t_="right",n_="bottom",Eo="width",To="height",su="Right",ou="Left",au="Top",lu="Bottom",jt="padding",Bi="margin",nl="Width",i_="Height",Qt="px",Hi=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},SC=function(e){var t=Hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},tv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},zr=function(e,t){var i=t&&Hi(e)[gm]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},rd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},hE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},MC=function(e){return function(t){return we.utils.snap(hE(e),t)}},r_=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},EC=function(e){return function(t,i){return r_(hE(e))(t,i.direction)}},Ec=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},an=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},on=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Tc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},nv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},wc={toggleActions:"play",anticipatePin:0},sd={top:0,left:0,center:.5,bottom:1,right:1},xf=function(e,t){if(gi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in sd?sd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ac=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,h=s.indent,p=s.fontWeight,_=_t.createElement("div"),g=Io(i)||Ds(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,f=g?pt:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===en?t_:n_)+":"+(o+parseFloat(h))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,f.children[0]?f.insertBefore(_,f.children[0]):f.appendChild(_),_._offset=_["offset"+r.op.d2],yf(_,0,r,v),_},yf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+nl]=1,s["border"+a+nl]=0,s[i.p]=t+"px",we.set(e,s)},nt=[],ym={},ku,iv=function(){return An()-Ki>34&&(ku||(ku=requestAnimationFrame(Xr)))},Yo=function(){(!On||!On.isPressed||On.startX>pt.clientWidth)&&(ot.cache++,On?ku||(ku=requestAnimationFrame(Xr)):Xr(),Ki||Fo("scrollStart"),Ki=An())},Ah=function(){oE=rt.innerWidth,sE=rt.innerHeight},Vl=function(e){ot.cache++,(e===!0||!wn&&!rE&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!_m||oE!==rt.innerWidth||Math.abs(rt.innerHeight-sE)>rt.innerHeight*.25))&&id.restart(!0)},Oo={},TC=[],pE=function n(){return on(Je,"scrollEnd",n)||ho(!0)},Fo=function(e){return Oo[e]&&Oo[e].map(function(t){return t()})||TC},pi=[],mE=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},gE=function(){return ot.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},s_=function(e,t){var i;for(kn=0;kn<nt.length;kn++)i=nt[kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));ru=!0,t&&mE(t),t||Fo("revert")},_E=function(e,t){ot.cache++,(t||!zn)&&ot.forEach(function(i){return bn(i)&&i.cacheID++&&(i.rec=0)}),gi(e)&&(rt.history.scrollRestoration=Jg=e)},zn,wo=0,rv,wC=function(){if(rv!==wo){var e=rv=wo;requestAnimationFrame(function(){return e===wo&&ho(!0)})}},vE=function(){pt.appendChild(Ba),e_=!On&&Ba.offsetHeight||rt.innerHeight,pt.removeChild(Ba)},sv=function(e){return Fu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ho=function(e,t){if(vi=_t.documentElement,pt=_t.body,Qg=[rt,_t,vi,pt],Ki&&!e&&!ru){an(Je,"scrollEnd",pE);return}vE(),zn=Je.isRefreshing=!0,ru||gE();var i=Fo("refreshInit");iE&&Je.sort(),t||s_(),ot.forEach(function(r){bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),ru=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),xm=1,sv(!0),nt.forEach(function(r){var s=Mr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),sv(!1),xm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ot.forEach(function(r){bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),_E(Jg,1),id.pause(),wo++,zn=2,Xr(2),nt.forEach(function(r){return bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=Je.isRefreshing=!1,Fo("refresh")},Sm=0,Sf=1,uu,Xr=function(e){if(e===2||!zn&&!ru){Je.isUpdating=!0,uu&&uu.update(0);var t=nt.length,i=An(),r=i-wh>=50,s=t&&nt[0].scroll();if(Sf=Sm>s?-1:1,zn||(Sm=s),r&&(Ki&&!Dd&&i-Ki>200&&(Ki=0,Fo("scrollEnd")),kl=wh,wh=i),Sf<0){for(kn=t;kn-- >0;)nt[kn]&&nt[kn].update(0,r);Sf=1}else for(kn=0;kn<t;kn++)nt[kn]&&nt[kn].update(0,r);Je.isUpdating=!1}ku=0},Mm=[fE,dE,n_,t_,Bi+lu,Bi+su,Bi+au,Bi+ou,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Mf=Mm.concat([Eo,To,"boxSizing","max"+nl,"max"+i_,"position",Bi,jt,jt+au,jt+su,jt+lu,jt+ou]),AC=function(e,t,i){Ha(i);var r=e._gsap;if(r.spacerIsNative)Ha(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ch=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Mm.length,o=t.style,a=e.style,l;s--;)l=Mm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[n_]=a[t_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Eo]=rd(e,Hn)+Qt,o[To]=rd(e,en)+Qt,o[jt]=a[Bi]=a[dE]=a[fE]="0",Ha(r),a[Eo]=a["max"+nl]=i[Eo],a[To]=a["max"+i_]=i[To],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},CC=/([A-Z])/g,Ha=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(CC,"-$1").toLowerCase())}},Cc=function(e){for(var t=Mf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Mf[s],i[Mf[s]]);return r.t=e,r},RC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Ef={left:0,top:0},ov=function(e,t,i,r,s,o,a,l,u,c,d,h,p,_){bn(e)&&(e=e(l)),gi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?xf("0"+e.substr(3),i):0));var g=p?p.time():0,m,f,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Hl(e))p&&(e=we.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,h,e)),a&&yf(a,i,r,!0);else{bn(t)&&(t=t(l));var x=(e||"0").split(" "),y,T,w,M;v=jn(t,l)||pt,y=zr(v)||{},(!y||!y.left&&!y.top)&&Hi(v).display==="none"&&(M=v.style.display,v.style.display="block",y=zr(v),M?v.style.display=M:v.style.removeProperty("display")),T=xf(x[0],y[r.d]),w=xf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+T+s-w,a&&yf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,yf(o,P,r,S&&P>20||!S&&(d?Math.max(pt[m],vi[m]):o.parentNode[m])<=P+1),d&&(u=zr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Qt))}return p&&v&&(m=zr(v),p.seek(h),f=zr(v),p._caScrollDist=m[r.p]-f[r.p],e=e/p._caScrollDist*h),p&&p.seek(g),p?e:Math.round(e)},bC=/(webkit|moz|length|cssText|inset)/i,av=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===pt){e._stOrig=s.cssText,a=Hi(e);for(o in a)!+o&&!bC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},xE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Rc=function(e,t,i){var r={};r[t.p]="+="+i,we.set(e,r)},lv=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var h=o.tween,p=l.onComplete,_={};u=u||i();var g=xE(i,u,function(){h.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ot.cache++,o.tween&&Xr()},l.onComplete=function(){o.tween=0,p&&p.call(h)},h=o.tween=we.to(e,l),h};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",i.wheelHandler),Je.isTouch&&an(e,"touchmove",i.wheelHandler),s},Je=function(){function n(t,i){ca||n.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!zl){this.update=this.refresh=this.kill=_r;return}i=tv(gi(i)||Hl(i)||i.nodeType?{trigger:i}:i,wc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,h=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,f=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:en,I=!d&&d!==0,N=jn(i.scroller||rt),Z=we.core.getCache(N),L=Io(N),F=("pinType"in i?i.pinType:Ds(N,"pinType")||L&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],H=I&&i.toggleActions.split(" "),D="markers"in i?i.markers:wc.markers,k=L?0:parseFloat(Hi(N)["border"+E.p2+nl])||0,R=this,$=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Q=xC(N,L,E),q=yC(N,L),K=0,ie=0,de=0,he=Bs(N,E),Ee,De,Ce,Xe,V,Ye,xe,Ue,ye,G,ke,C,A,O,J,te,ne,_e,ce,ue,Pe,ze,ee,qe,Re,pe,Se,ve,He,Ze,lt,me,se,U,oe,ae,Oe,Ne,tt;if(R._startClamp=R._endClamp=!1,R._dir=E,m*=45,R.scroller=N,R.scroll=M?M.time.bind(M):he,Xe=he(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(iE=1,i.refreshPriority===-9999&&(uu=R)),Z.tweenScroll=Z.tweenScroll||{top:lv(N,en),left:lv(N,Hn)},R.tweenTo=Ee=Z.tweenScroll[E.p],R.scrubDuration=function(le){se=Hl(le)&&le,se?me?me.duration(le):me=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:se,paused:!0,onComplete:function(){return f&&f(R)}}):(me&&me.progress(1).kill(),me=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),Ze=0,l||(l=r.vars.id)),y&&((!ro(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in pt.style&&we.set(L?[pt,vi]:N,{scrollBehavior:"auto"}),ot.forEach(function(le){return bn(le)&&le.target===(L?_t.scrollingElement||vi:N)&&(le.smooth=!1)}),Ce=bn(y.snapTo)?y.snapTo:y.snapTo==="labels"?MC(r):y.snapTo==="labelsDirectional"?EC(r):y.directional!==!1?function(le,Ve){return r_(y.snapTo)(le,An()-ie<500?0:Ve.direction)}:we.utils.snap(y.snapTo),U=y.duration||{min:.1,max:2},U=ro(U)?iu(U.min,U.max):iu(U,U),oe=we.delayedCall(y.delay||se/2||.1,function(){var le=he(),Ve=An()-ie<500,Be=Ee.tween;if((Ve||Math.abs(R.getVelocity())<10)&&!Be&&!Dd&&K!==le){var $e=(le-Ye)/O,Ut=r&&!I?r.totalProgress():$e,it=Ve?0:(Ut-lt)/(An()-kl)*1e3||0,Et=we.utils.clamp(-$e,1-$e,Xo(it/2)*it/.185),Kt=$e+(y.inertia===!1?0:Et),At,Tt,mt=y,fi=mt.onStart,b=mt.onInterrupt,z=mt.onComplete;if(At=Ce(Kt,R),Hl(At)||(At=Kt),Tt=Math.max(0,Math.round(Ye+At*O)),le<=xe&&le>=Ye&&Tt!==le){if(Be&&!Be._initted&&Be.data<=Xo(Tt-le))return;y.inertia===!1&&(Et=At-$e),Ee(Tt,{duration:U(Xo(Math.max(Xo(Kt-Ut),Xo(At-Ut))*.185/it/.05||0)),ease:y.ease||"power3",data:Xo(Tt-le),onInterrupt:function(){return oe.restart(!0)&&b&&Wo(R,b)},onComplete:function(){R.update(),K=he(),r&&!I&&(me?me.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),Ze=lt=r&&!I?r.totalProgress():R.progress,v&&v(R),z&&Wo(R,z)}},le,Et*O,Tt-le-Et*O),fi&&Wo(R,fi,Ee.tween)}}else R.isActive&&K!==le&&oe.restart(!0)}).pause()),l&&(ym[l]=R),h=R.trigger=jn(h||p!==!0&&p),tt=h&&h._gsap&&h._gsap.stRevert,tt&&(tt=tt(R)),p=p===!0?h:jn(p),gi(a)&&(a={targets:h,className:a}),p&&(_===!1||_===Bi||(_=!_&&p.parentNode&&p.parentNode.style&&Hi(p.parentNode).display==="flex"?!1:jt),R.pin=p,De=we.core.getCache(p),De.spacer?J=De.pinState:(w&&(w=jn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),De.spacerIsNative=!!w,w&&(De.spacerState=Cc(w))),De.spacer=_e=w||_t.createElement("div"),_e.classList.add("pin-spacer"),l&&_e.classList.add("pin-spacer-"+l),De.pinState=J=Cc(p)),i.force3D!==!1&&we.set(p,{force3D:!0}),R.spacer=_e=De.spacer,He=Hi(p),qe=He[_+E.os2],ue=we.getProperty(p),Pe=we.quickSetter(p,E.a,Qt),Ch(p,_e,He),ne=Cc(p)),D){C=ro(D)?tv(D,nv):nv,G=Ac("scroller-start",l,N,E,C,0),ke=Ac("scroller-end",l,N,E,C,0,G),ce=G["offset"+E.op.d2];var dt=jn(Ds(N,"content")||N);Ue=this.markerStart=Ac("start",l,dt,E,C,ce,0,M),ye=this.markerEnd=Ac("end",l,dt,E,C,ce,0,M),M&&(Ne=we.quickSetter([Ue,ye],E.a,Qt)),!F&&!(Ar.length&&Ds(N,"fixedMarkers")===!0)&&(SC(L?pt:N),we.set([G,ke],{force3D:!0}),pe=we.quickSetter(G,E.a,Qt),ve=we.quickSetter(ke,E.a,Qt))}if(M){var Le=M.vars.onUpdate,Te=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Le&&Le.apply(M,Te||[])})}if(R.previous=function(){return nt[nt.indexOf(R)-1]},R.next=function(){return nt[nt.indexOf(R)+1]},R.revert=function(le,Ve){if(!Ve)return R.kill(!0);var Be=le!==!1||!R.enabled,$e=wn;Be!==R.isReverted&&(Be&&(ae=Math.max(he(),R.scroll.rec||0),de=R.progress,Oe=r&&r.progress()),Ue&&[Ue,ye,G,ke].forEach(function(Ut){return Ut.style.display=Be?"none":"block"}),Be&&(wn=R,R.update(Be)),p&&(!T||!R.isActive)&&(Be?AC(p,_e,J):Ch(p,_e,Hi(p),Re)),Be||R.update(Be),wn=$e,R.isReverted=Be)},R.refresh=function(le,Ve,Be,$e){if(!((wn||!R.enabled)&&!Ve)){if(p&&le&&Ki){an(n,"scrollEnd",pE);return}!zn&&$&&$(R),wn=R,Ee.tween&&!Be&&(Ee.tween.kill(),Ee.tween=0),me&&me.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(je){return je.vars.immediateRender&&je.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ut=Q(),it=q(),Et=M?M.duration():Mr(N,E),Kt=O<=.01||!O,At=0,Tt=$e||0,mt=ro(Be)?Be.end:i.end,fi=i.endTrigger||h,b=ro(Be)?Be.start:i.start||(i.start===0||!h?0:p?"0 0":"0 100%"),z=R.pinnedContainer=i.pinnedContainer&&jn(i.pinnedContainer,R),j=h&&Math.max(0,nt.indexOf(R))||0,Y=j,W,fe,Ae,Ge,be,Ie,We,Ke,Pt,Zt,gt,Dn,xt;for(D&&ro(Be)&&(Dn=we.getProperty(G,E.p),xt=we.getProperty(ke,E.p));Y-- >0;)Ie=nt[Y],Ie.end||Ie.refresh(0,1)||(wn=R),We=Ie.pin,We&&(We===h||We===p||We===z)&&!Ie.isReverted&&(Zt||(Zt=[]),Zt.unshift(Ie),Ie.revert(!0,!0)),Ie!==nt[Y]&&(j--,Y--);for(bn(b)&&(b=b(R)),b=Z0(b,"start",R),Ye=ov(b,h,Ut,E,he(),Ue,G,R,it,k,F,Et,M,R._startClamp&&"_startClamp")||(p?-.001:0),bn(mt)&&(mt=mt(R)),gi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(gi(b)?b.split(" ")[0]:"")+mt:(At=xf(mt.substr(2),Ut),mt=gi(b)?b:(M?we.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Ye):Ye)+At,fi=h)),mt=Z0(mt,"end",R),xe=Math.max(Ye,ov(mt||(fi?"100% 0":Et),fi,Ut,E,he()+At,ye,ke,R,it,k,F,Et,M,R._endClamp&&"_endClamp"))||-.001,At=0,Y=j;Y--;)Ie=nt[Y]||{},We=Ie.pin,We&&Ie.start-Ie._pinPush<=Ye&&!M&&Ie.end>0&&(W=Ie.end-(R._startClamp?Math.max(0,Ie.start):Ie.start),(We===h&&Ie.start-Ie._pinPush<Ye||We===z)&&isNaN(b)&&(At+=W*(1-Ie.progress)),We===p&&(Tt+=W));if(Ye+=At,xe+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!zn&&(R._endClamp=xe||-.001,xe=Math.min(xe,Mr(N,E))),O=xe-Ye||(Ye-=.01)&&.001,Kt&&(de=we.utils.clamp(0,1,we.utils.normalize(Ye,xe,ae))),R._pinPush=Tt,Ue&&At&&(W={},W[E.a]="+="+At,z&&(W[E.p]="-="+he()),we.set([Ue,ye],W)),p&&!(xm&&R.end>=Mr(N,E)))W=Hi(p),Ge=E===en,Ae=he(),ze=parseFloat(ue(E.a))+Tt,!Et&&xe>1&&(gt=(L?_t.scrollingElement||vi:N).style,gt={style:gt,value:gt["overflow"+E.a.toUpperCase()]},L&&Hi(pt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(gt.style["overflow"+E.a.toUpperCase()]="scroll")),Ch(p,_e,W),ne=Cc(p),fe=zr(p,!0),Ke=F&&Bs(N,Ge?Hn:en)(),_?(Re=[_+E.os2,O+Tt+Qt],Re.t=_e,Y=_===jt?rd(p,E)+O+Tt:0,Y&&(Re.push(E.d,Y+Qt),_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=Y+Qt)),Ha(Re),z&&nt.forEach(function(je){je.pin===z&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),F&&he(ae)):(Y=rd(p,E),Y&&_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=Y+Qt)),F&&(be={top:fe.top+(Ge?Ae-Ye:Ke)+Qt,left:fe.left+(Ge?Ke:Ae-Ye)+Qt,boxSizing:"border-box",position:"fixed"},be[Eo]=be["max"+nl]=Math.ceil(fe.width)+Qt,be[To]=be["max"+i_]=Math.ceil(fe.height)+Qt,be[Bi]=be[Bi+au]=be[Bi+su]=be[Bi+lu]=be[Bi+ou]="0",be[jt]=W[jt],be[jt+au]=W[jt+au],be[jt+su]=W[jt+su],be[jt+lu]=W[jt+lu],be[jt+ou]=W[jt+ou],te=RC(J,be,T),zn&&he(0)),r?(Pt=r._initted,Eh(1),r.render(r.duration(),!0,!0),ee=ue(E.a)-ze+O+Tt,Se=Math.abs(O-ee)>1,F&&Se&&te.splice(te.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Eh(0)):ee=O,gt&&(gt.value?gt.style["overflow"+E.a.toUpperCase()]=gt.value:gt.style.removeProperty("overflow-"+E.a));else if(h&&he()&&!M)for(fe=h.parentNode;fe&&fe!==pt;)fe._pinOffset&&(Ye-=fe._pinOffset,xe-=fe._pinOffset),fe=fe.parentNode;Zt&&Zt.forEach(function(je){return je.revert(!1,!0)}),R.start=Ye,R.end=xe,Xe=V=zn?ae:he(),!M&&!zn&&(Xe<ae&&he(ae),R.scroll.rec=0),R.revert(!1,!0),ie=An(),oe&&(K=-1,oe.restart(!0)),wn=0,r&&I&&(r._initted||Oe)&&r.progress()!==Oe&&r.progress(Oe||0,!0).render(r.time(),!0,!0),(Kt||de!==R.progress||M||g||r&&!r._initted)&&(r&&!I&&(r._initted||de||r.vars.immediateRender!==!1)&&r.totalProgress(M&&Ye<-.001&&!de?we.utils.normalize(Ye,xe,0):de,!0),R.progress=Kt||(Xe-Ye)/O===de?0:de),p&&_&&(_e._pinOffset=Math.round(R.progress*ee)),me&&me.invalidate(),isNaN(Dn)||(Dn-=we.getProperty(G,E.p),xt-=we.getProperty(ke,E.p),Rc(G,E,Dn),Rc(Ue,E,Dn-($e||0)),Rc(ke,E,xt),Rc(ye,E,xt-($e||0))),Kt&&!zn&&R.update(),c&&!zn&&!A&&(A=!0,c(R),A=!1)}},R.getVelocity=function(){return(he()-V)/(An()-kl)*1e3||0},R.endAnimation=function(){wl(R.callbackAnimation),r&&(me?me.progress(1):r.paused()?I||wl(r,R.direction<0,1):wl(r,r.reversed()))},R.labelToScroll=function(le){return r&&r.labels&&(Ye||R.refresh()||Ye)+r.labels[le]/r.duration()*O||0},R.getTrailing=function(le){var Ve=nt.indexOf(R),Be=R.direction>0?nt.slice(0,Ve).reverse():nt.slice(Ve+1);return(gi(le)?Be.filter(function($e){return $e.vars.preventOverlaps===le}):Be).filter(function($e){return R.direction>0?$e.end<=Ye:$e.start>=xe})},R.update=function(le,Ve,Be){if(!(M&&!Be&&!le)){var $e=zn===!0?ae:R.scroll(),Ut=le?0:($e-Ye)/O,it=Ut<0?0:Ut>1?1:Ut||0,Et=R.progress,Kt,At,Tt,mt,fi,b,z,j;if(Ve&&(V=Xe,Xe=M?he():$e,y&&(lt=Ze,Ze=r&&!I?r.totalProgress():it)),m&&p&&!wn&&!Sc&&Ki&&(!it&&Ye<$e+($e-V)/(An()-kl)*m?it=1e-4:it===1&&xe>$e+($e-V)/(An()-kl)*m&&(it=.9999)),it!==Et&&R.enabled){if(Kt=R.isActive=!!it&&it<1,At=!!Et&&Et<1,b=Kt!==At,fi=b||!!it!=!!Et,R.direction=it>Et?1:-1,R.progress=it,fi&&!wn&&(Tt=it&&!Et?0:it===1?1:Et===1?2:3,I&&(mt=!b&&H[Tt+1]!=="none"&&H[Tt+1]||H[Tt],j=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(b||j)&&(j||d||!r)&&(bn(S)?S(R):R.getTrailing(S).forEach(function(Ae){return Ae.endAnimation()})),I||(me&&!wn&&!Sc?(me._dp._time-me._start!==me._time&&me.render(me._dp._time-me._start),me.resetTo?me.resetTo("totalProgress",it,r._tTime/r._tDur):(me.vars.totalProgress=it,me.invalidate().restart())):r&&r.totalProgress(it,!!(wn&&(ie||le)))),p){if(le&&_&&(_e.style[_+E.os2]=qe),!F)Pe(Bl(ze+ee*it));else if(fi){if(z=!le&&it>Et&&xe+1>$e&&$e+1>=Mr(N,E),T)if(!le&&(Kt||z)){var Y=zr(p,!0),W=$e-Ye;av(p,pt,Y.top+(E===en?W:0)+Qt,Y.left+(E===en?0:W)+Qt)}else av(p,_e);Ha(Kt||z?te:ne),Se&&it<1&&Kt||Pe(ze+(it===1&&!z?ee:0))}}y&&!Ee.tween&&!wn&&!Sc&&oe.restart(!0),a&&(b||x&&it&&(it<1||!Th))&&Fu(a.targets).forEach(function(Ae){return Ae.classList[Kt||x?"add":"remove"](a.className)}),o&&!I&&!le&&o(R),fi&&!wn?(I&&(j&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(R)),(b||!Th)&&(u&&b&&Wo(R,u),B[Tt]&&Wo(R,B[Tt]),x&&(it===1?R.kill(!1,1):B[Tt]=0),b||(Tt=it===1?1:3,B[Tt]&&Wo(R,B[Tt]))),P&&!Kt&&Math.abs(R.getVelocity())>(Hl(P)?P:2500)&&(wl(R.callbackAnimation),me?me.progress(1):wl(r,mt==="reverse"?1:!it,1))):I&&o&&!wn&&o(R)}if(ve){var fe=M?$e/M.duration()*(M._caScrollDist||0):$e;pe(fe+(G._isFlipped?1:0)),ve(fe)}Ne&&Ne(-$e/M.duration()*(M._caScrollDist||0))}},R.enable=function(le,Ve){R.enabled||(R.enabled=!0,an(N,"resize",Vl),L||an(N,"scroll",Yo),$&&an(n,"refreshInit",$),le!==!1&&(R.progress=de=0,Xe=V=K=he()),Ve!==!1&&R.refresh())},R.getTween=function(le){return le&&Ee?Ee.tween:me},R.setPositions=function(le,Ve,Be,$e){if(M){var Ut=M.scrollTrigger,it=M.duration(),Et=Ut.end-Ut.start;le=Ut.start+Et*le/it,Ve=Ut.start+Et*Ve/it}R.refresh(!1,!1,{start:Q0(le,Be&&!!R._startClamp),end:Q0(Ve,Be&&!!R._endClamp)},$e),R.update()},R.adjustPinSpacing=function(le){if(Re&&le){var Ve=Re.indexOf(E.d)+1;Re[Ve]=parseFloat(Re[Ve])+le+Qt,Re[1]=parseFloat(Re[1])+le+Qt,Ha(Re)}},R.disable=function(le,Ve){if(le!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ve||me&&me.pause(),ae=0,De&&(De.uncache=1),$&&on(n,"refreshInit",$),oe&&(oe.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!L)){for(var Be=nt.length;Be--;)if(nt[Be].scroller===N&&nt[Be]!==R)return;on(N,"resize",Vl),L||on(N,"scroll",Yo)}},R.kill=function(le,Ve){R.disable(le,Ve),me&&!Ve&&me.kill(),l&&delete ym[l];var Be=nt.indexOf(R);Be>=0&&nt.splice(Be,1),Be===kn&&Sf>0&&kn--,Be=0,nt.forEach(function($e){return $e.scroller===R.scroller&&(Be=1)}),Be||zn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,le&&r.revert({kill:!1}),Ve||r.kill()),Ue&&[Ue,ye,G,ke].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),uu===R&&(uu=0),p&&(De&&(De.uncache=1),Be=0,nt.forEach(function($e){return $e.pin===p&&Be++}),Be||(De.spacer=0)),i.onKill&&i.onKill(R)},nt.push(R),R.enable(!1,!1),tt&&tt(R),r&&r.add&&!O){var Fe=R.update;R.update=function(){R.update=Fe,ot.cache++,Ye||xe||R.refresh()},we.delayedCall(.01,R.update),O=.01,Ye=xe=0}else R.refresh();p&&wC()},n.register=function(i){return ca||(we=i||lE(),aE()&&window.document&&n.enable(),ca=zl),ca},n.defaults=function(i){if(i)for(var r in i)wc[r]=i[r];return wc},n.disable=function(i,r){zl=0,nt.forEach(function(o){return o[r?"kill":"disable"](i)}),on(rt,"wheel",Yo),on(_t,"scroll",Yo),clearInterval(yc),on(_t,"touchcancel",_r),on(pt,"touchstart",_r),Ec(on,_t,"pointerdown,touchstart,mousedown",J0),Ec(on,_t,"pointerup,touchend,mouseup",ev),id.kill(),Mc(on);for(var s=0;s<ot.length;s+=3)Tc(on,ot[s],ot[s+1]),Tc(on,ot[s],ot[s+2])},n.enable=function(){if(rt=window,_t=document,vi=_t.documentElement,pt=_t.body,we){if(Fu=we.utils.toArray,iu=we.utils.clamp,vm=we.core.context||_r,Eh=we.core.suppressOverwrites||_r,Jg=rt.history.scrollRestoration||"auto",Sm=rt.pageYOffset||0,we.core.globals("ScrollTrigger",n),pt){zl=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",vE(),vC(),Xt.register(we),n.isTouch=Xt.isTouch,os=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_m=Xt.isTouch===1,an(rt,"wheel",Yo),Qg=[rt,_t,vi,pt],we.matchMedia?(n.matchMedia=function(c){var d=we.matchMedia(),h;for(h in c)d.add(h,c[h]);return d},we.addEventListener("matchMediaInit",function(){gE(),s_()}),we.addEventListener("matchMediaRevert",function(){return mE()}),we.addEventListener("matchMedia",function(){ho(0,1),Fo("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return Ah(),Ah})):console.warn("Requires GSAP 3.11.0 or later"),Ah(),an(_t,"scroll",Yo);var i=pt.hasAttribute("style"),r=pt.style,s=r.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=zr(pt),en.m=Math.round(a.top+en.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(pt.setAttribute("style",""),pt.removeAttribute("style")),yc=setInterval(iv,250),we.delayedCall(.5,function(){return Sc=0}),an(_t,"touchcancel",_r),an(pt,"touchstart",_r),Ec(an,_t,"pointerdown,touchstart,mousedown",J0),Ec(an,_t,"pointerup,touchend,mouseup",ev),gm=we.utils.checkPrefix("transform"),Mf.push(gm),ca=An(),id=we.delayedCall(.2,ho).pause(),fa=[_t,"visibilitychange",function(){var c=rt.innerWidth,d=rt.innerHeight;_t.hidden?($0=c,K0=d):($0!==c||K0!==d)&&Vl()},_t,"DOMContentLoaded",ho,rt,"load",ho,rt,"resize",Vl],Mc(an),nt.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)Tc(on,ot[l],ot[l+1]),Tc(on,ot[l],ot[l+2])}else if(_t){var u=function c(){n.enable(),_t.removeEventListener("DOMContentLoaded",c)};_t.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Th=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(yc)||(yc=r)&&setInterval(iv,r),"ignoreMobileResize"in i&&(_m=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Mc(on)||Mc(an,i.autoRefreshEvents||"none"),rE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=jn(i),o=ot.indexOf(s),a=Io(s);~o&&ot.splice(o,a?6:2),r&&(a?Ar.unshift(rt,r,pt,r,vi,r):Ar.unshift(s,r))},n.clearMatchMedia=function(i){nt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(gi(i)?jn(i):i).getBoundingClientRect(),a=o[s?Eo:To]*r||0;return s?o.right-a>0&&o.left+a<rt.innerWidth:o.bottom-a>0&&o.top+a<rt.innerHeight},n.positionInViewport=function(i,r,s){gi(i)&&(i=jn(i));var o=i.getBoundingClientRect(),a=o[s?Eo:To],l=r==null?a/2:r in sd?sd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/rt.innerWidth:(o.top+l)/rt.innerHeight},n.killAll=function(i){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Oo.killAll||[];Oo={},r.forEach(function(s){return s()})}},n}();Je.version="3.15.0";Je.saveStyles=function(n){return n?Fu(n).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),vm())}}):pi};Je.revert=function(n,e){return s_(!n,e)};Je.create=function(n,e){return new Je(n,e)};Je.refresh=function(n){return n?Vl(!0):(ca||Je.register())&&ho(!0)};Je.update=function(n){return++ot.cache&&Xr(n===!0?2:0)};Je.clearScrollMemory=_E;Je.maxScroll=function(n,e){return Mr(n,e?Hn:en)};Je.getScrollFunc=function(n,e){return Bs(jn(n),e?Hn:en)};Je.getById=function(n){return ym[n]};Je.getAll=function(){return nt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!Ki};Je.snapDirectional=r_;Je.addEventListener=function(n,e){var t=Oo[n]||(Oo[n]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(n,e){var t=Oo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Je.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],h=[],p=we.delayedCall(r,function(){c(d,h),d=[],h=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),an(Je,"refresh",function(){return s=e.batchMax()})),Fu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Je.create(u))}),t};var uv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Rh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===vi&&n(pt,t)},bc={auto:1,scroll:1},PC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==pt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(bc[(l=Hi(s)).overflowY]||bc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Io(s)&&(bc[(l=Hi(s)).overflowY]||bc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},yE=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&PC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&an(_t,Xt.eventTypes[0],fv,!1,!0)},onDisable:function(){return on(_t,Xt.eventTypes[0],fv,!0)}})},LC=/(input|label|select|textarea)/i,cv,fv=function(e){var t=LC.test(e.target.tagName);(t||cv)&&(e._gsapAllow=!0,cv=t)},DC=function(e){ro(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=jn(e.target)||vi,c=we.core.globals().ScrollSmoother,d=c&&c.get(),h=os&&(e.content&&jn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Bs(u,en),_=Bs(u,Hn),g=1,m=(Xt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,f=0,v=bn(r)?function(){return r(a)}:function(){return r||2.8},x,y,T=yE(u,e.type,!0,s),w=function(){return y=!1},M=_r,P=_r,S=function(){l=Mr(u,en),P=iu(os?1:0,l),i&&(M=iu(0,Mr(u,Hn))),x=wo},E=function(){h._gsap.y=Bl(parseFloat(h._gsap.y)+p.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(y){requestAnimationFrame(w);var D=Bl(a.deltaY/2),k=P(p.v-D);if(h&&k!==p.v+p.offset){p.offset=k-p.v;var R=Bl((parseFloat(h&&h._gsap.y)||0)-p.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",p.cacheID=ot.cache,Xr()}return!0}p.offset&&E(),y=!0},N,Z,L,F,B=function(){S(),N.isActive()&&N.vars.scrollY>l&&(p()>l?N.progress(1)&&p(l):N.resetTo("scrollY",l))};return h&&we.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return os&&H.type==="touchmove"&&I()||g>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){y=!1;var H=g;g=Bl((rt.visualViewport&&rt.visualViewport.scale||1)/m),N.pause(),H!==g&&Rh(u,g>1.01?!0:i?!1:"x"),Z=_(),L=p(),S(),x=wo},e.onRelease=e.onGestureStart=function(H,D){if(p.offset&&E(),!D)F.restart(!0);else{ot.cache++;var k=v(),R,$;i&&(R=_(),$=R+k*.05*-H.velocityX/.227,k*=uv(_,R,$,Mr(u,Hn)),N.vars.scrollX=M($)),R=p(),$=R+k*.05*-H.velocityY/.227,k*=uv(p,R,$,Mr(u,en)),N.vars.scrollY=P($),N.invalidate().duration(k).play(.01),(os&&N.vars.scrollY>=l||R>=l-1)&&we.to({},{onUpdate:B,duration:k})}o&&o(H)},e.onWheel=function(){N._ts&&N.pause(),An()-f>1e3&&(x=0,f=An())},e.onChange=function(H,D,k,R,$){if(wo!==x&&S(),D&&i&&_(M(R[2]===D?Z+(H.startX-H.x):_()+D-R[1])),k){p.offset&&E();var Q=$[2]===k,q=Q?L+H.startY-H.y:p()+k-$[1],K=P(q);Q&&q!==K&&(L+=K-q),p(K)}(k||D)&&Xr()},e.onEnable=function(){Rh(u,i?!1:"x"),Je.addEventListener("refresh",B),an(rt,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),T.enable()},e.onDisable=function(){Rh(u,!0),on(rt,"resize",B),Je.removeEventListener("refresh",B),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=os,os&&!p()&&p(1),os&&we.ticker.add(_r),F=a._dc,N=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xE(p,p(),function(){return N.pause()})},onUpdate:Xr,onComplete:F.vars.onComplete}),a};Je.sort=function(n){if(bn(n))return nt.sort(n);var e=rt.pageYOffset||0;return Je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),nt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Je.observe=function(n){return new Xt(n)};Je.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof Xt?n:DC(n);return On&&On.target===e.target&&On.kill(),Io(e.target)&&(On=e),e};Je.core={_getVelocityProp:mm,_inputObserver:yE,_scrollers:ot,_proxies:Ar,bridge:{ss:function(){Ki||Fo("scrollStart"),Ki=An()},ref:function(){return wn}}};lE()&&we.registerPlugin(Je);(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function UC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function dv(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function hv(n,e,t){return e&&dv(n.prototype,e),t&&dv(n,t),n}function NC(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function pv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function mv(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?pv(Object(t),!0).forEach(function(i){NC(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):pv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function SE(n,e){return OC(n)||kC(n,e)||ME(n,e)||BC()}function Bn(n){return IC(n)||FC(n)||ME(n)||zC()}function IC(n){if(Array.isArray(n))return Em(n)}function OC(n){if(Array.isArray(n))return n}function FC(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function kC(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function ME(n,e){if(n){if(typeof n=="string")return Em(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Em(n,e)}}function Em(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function zC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function BC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function po(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function qu(n){return typeof n=="string"}function o_(n){return Array.isArray(n)}function Pc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=po(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(qu(t)||o_(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function a_(n){var e=qu(n)||o_(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Ud(n){return n!==null&&typeof n=="object"}function HC(n){return Ud(n)&&/^(1|3|11)$/.test(n.nodeType)}function VC(n){return typeof n=="number"&&n>-1&&n%1===0}function GC(n){return Ud(n)&&VC(n.length)}function ko(n){return o_(n)?n:n==null?[]:GC(n)?Array.prototype.slice.call(n):[n]}function gv(n){var e=n;return qu(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),ko(e).reduce(function(t,i){return[].concat(Bn(t),Bn(ko(i).filter(HC)))},[])}var WC=Object.entries,od="_splittype",fr={},XC=0;function Er(n,e,t){if(!Ud(n))return console.warn("[data.set] owner is not an object"),null;var i=n[od]||(n[od]=++XC),r=fr[i]||(fr[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(fr[i]=mv(mv({},r),e)):e!==void 0&&(r[e]=t),t}function mo(n,e){var t=Ud(n)?n[od]:null,i=t&&fr[t]||{};return i}function EE(n){var e=n&&n[od];e&&(delete n[e],delete fr[e])}function YC(){Object.keys(fr).forEach(function(n){delete fr[n]})}function jC(){WC(fr).forEach(function(n){var e=SE(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(fr[t]=null,delete fr[t])})}function qC(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var l_="\\ud800-\\udfff",TE="\\u0300-\\u036f\\ufe20-\\ufe23",wE="\\u20d0-\\u20f0",AE="\\ufe0e\\ufe0f",$C="[".concat(l_,"]"),Tm="[".concat(TE).concat(wE,"]"),wm="\\ud83c[\\udffb-\\udfff]",KC="(?:".concat(Tm,"|").concat(wm,")"),CE="[^".concat(l_,"]"),RE="(?:\\ud83c[\\udde6-\\uddff]){2}",bE="[\\ud800-\\udbff][\\udc00-\\udfff]",PE="\\u200d",LE="".concat(KC,"?"),DE="[".concat(AE,"]?"),ZC="(?:"+PE+"(?:"+[CE,RE,bE].join("|")+")"+DE+LE+")*",QC=DE+LE+ZC,JC="(?:".concat(["".concat(CE).concat(Tm,"?"),Tm,RE,bE,$C].join("|"),`
)`),eR=RegExp("".concat(wm,"(?=").concat(wm,")|").concat(JC).concat(QC),"g"),tR=[PE,l_,TE,wE,AE],nR=RegExp("[".concat(tR.join(""),"]"));function iR(n){return n.split("")}function UE(n){return nR.test(n)}function rR(n){return n.match(eR)||[]}function sR(n){return UE(n)?rR(n):iR(n)}function oR(n){return n==null?"":String(n)}function aR(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=oR(n),n&&qu(n)&&!e&&UE(n)?sR(n):n.split(e)}function Am(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=qu(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,Bn(ko(s))):t.setAttribute(i,s))}),t}var u_={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function lR(n,e){e=po(u_,e);var t=a_(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=qC(r).reduce(function(l,u,c,d){var h,p;return t.chars&&(p=aR(u).map(function(_){var g=Am(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return Er(g,"isChar",!0),a=[].concat(Bn(a),[g]),g})),t.words||t.lines?(h=Am(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),Er(h,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(h)):p.forEach(function(_){s.appendChild(_)}),c<d.length-1&&s.append(" "),t.words?l.concat(h):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function NE(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return lR(n,e);var r=ko(n.childNodes);if(r.length&&(Er(n,"isSplit",!0),!mo(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";Er(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,d){var h=NE(d,e),p=h.words,_=h.chars;return{words:[].concat(Bn(c.words),Bn(p)),chars:[].concat(Bn(c.chars),Bn(_))}},i)}function uR(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=SE(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var d=n.getBoundingClientRect(),h=d.width,p=d.height,_=d.x,g=d.y,m=g+a-u,f=_+o-l;return{width:h,height:p,top:m,left:f}}function IE(n){mo(n).isWord?(EE(n),n.replaceWith.apply(n,Bn(n.childNodes))):ko(n.children).forEach(function(e){return IE(e)})}var cR=function(){return document.createDocumentFragment()};function fR(n,e,t){var i=a_(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,d,h=[],p=n.parentElement,_=n.nextElementSibling,g=cR(),m=window.getComputedStyle(n),f=m.textAlign,v=parseFloat(m.fontSize),x=v*.2;return e.absolute&&(d={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,Er(n,{cssWidth:n.style.width,cssHeight:n.style.height})),ko(s).forEach(function(y){var T=y.parentElement===n,w=uR(y,T,e,t),M=w.width,P=w.height,S=w.top,E=w.left;/^br$/i.test(y.nodeName)||(i.lines&&T&&((l===null||S-l>=x)&&(l=S,o.push(a=[])),a.push(y)),e.absolute&&Er(y,{top:S,left:E,width:M,height:P}))}),p&&p.removeChild(n),i.lines&&(h=o.map(function(y){var T=Am(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(f,"; width: 100%;")});Er(T,"isLine",!0);var w={height:0,top:1e4};return g.appendChild(T),y.forEach(function(M,P,S){var E=mo(M),I=E.isWordEnd,N=E.top,Z=E.height,L=S[P+1];w.height=Math.max(w.height,Z),w.top=Math.min(w.top,N),T.appendChild(M),I&&mo(L).isWordStart&&T.append(" ")}),e.absolute&&Er(T,{height:w.height,top:w.top}),T}),i.words||IE(g),n.replaceChildren(g)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),ko(s).forEach(function(y){var T=mo(y),w=T.isLine,M=T.top,P=T.left,S=T.width,E=T.height,I=mo(y.parentElement),N=!w&&I.isLine;y.style.top="".concat(N?M-I.top:M,"px"),y.style.left=w?"".concat(d.left,"px"):"".concat(P-(N?d.left:0),"px"),y.style.height="".concat(E,"px"),y.style.width=w?"".concat(d.width,"px"):"".concat(S,"px"),y.style.position="absolute"})),p&&(_?p.insertBefore(n,_):p.appendChild(n)),h}var jo=po(u_,{}),dR=function(){hv(n,null,[{key:"clearData",value:function(){YC()}},{key:"setDefaults",value:function(t){return jo=po(jo,Pc(t)),u_}},{key:"revert",value:function(t){gv(t).forEach(function(i){var r=mo(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",EE(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return fr}},{key:"defaults",get:function(){return jo},set:function(t){jo=po(jo,Pc(t))}}]);function n(e,t){UC(this,n),this.isSplit=!1,this.settings=po(jo,Pc(t)),this.elements=gv(e),this.split()}return hv(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){Er(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=po(this.settings,Pc(t)));var s=a_(this.settings.types);s.none||(this.elements.forEach(function(o){Er(o,"isRoot",!0);var a=NE(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(Bn(i.words),Bn(l)),i.chars=[].concat(Bn(i.chars),Bn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=fR(o,i.settings,r);i.lines=[].concat(Bn(i.lines),Bn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),jC())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const c_="160",hR=0,_v=1,pR=2,OE=1,mR=2,Nr=3,Hs=0,ai=1,Gi=2,Cr=0,Va=1,ds=2,vv=3,xv=4,gR=5,oo=100,_R=101,vR=102,yv=103,Sv=104,xR=200,yR=201,SR=202,MR=203,Cm=204,Rm=205,ER=206,TR=207,wR=208,AR=209,CR=210,RR=211,bR=212,PR=213,LR=214,DR=0,UR=1,NR=2,ad=3,IR=4,OR=5,FR=6,kR=7,FE=0,zR=1,BR=2,Us=0,HR=1,VR=2,GR=3,kE=4,WR=5,XR=6,zE=300,il=301,rl=302,bm=303,Pm=304,Nd=306,Lm=1e3,lr=1001,Dm=1002,hn=1003,Mv=1004,bh=1005,$n=1006,YR=1007,zu=1008,Ns=1009,jR=1010,qR=1011,f_=1012,BE=1013,ys=1014,Ss=1015,dr=1016,HE=1017,VE=1018,Ao=1020,$R=1021,Wi=1023,KR=1024,ZR=1025,Co=1026,sl=1027,QR=1028,GE=1029,JR=1030,WE=1031,XE=1033,Ph=33776,Lh=33777,Dh=33778,Uh=33779,Ev=35840,Tv=35841,wv=35842,Av=35843,YE=36196,Cv=37492,Rv=37496,bv=37808,Pv=37809,Lv=37810,Dv=37811,Uv=37812,Nv=37813,Iv=37814,Ov=37815,Fv=37816,kv=37817,zv=37818,Bv=37819,Hv=37820,Vv=37821,Nh=36492,Gv=36494,Wv=36495,eb=36283,Xv=36284,Yv=36285,jv=36286,jE=3e3,Ro=3001,tb=3200,qE=3201,nb=0,ib=1,Xi="",pn="srgb",Qr="srgb-linear",d_="display-p3",Id="display-p3-linear",ld="linear",Rt="srgb",ud="rec709",cd="p3",qo=7680,qv=519,rb=512,sb=513,ob=514,$E=515,ab=516,lb=517,ub=518,cb=519,$v=35044,Kv="300 es",Um=1035,Gr=2e3,fd=2001;class fl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ih=Math.PI/180,Nm=180/Math.PI;function $u(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function Kn(n,e,t){return Math.max(e,Math.min(t,n))}function fb(n,e){return(n%e+e)%e}function Oh(n,e,t){return(1-t)*n+t*e}function Zv(n){return(n&n-1)===0&&n!==0}function Im(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Al(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,r,s,o,a,l,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],_=i[8],g=r[0],m=r[3],f=r[6],v=r[1],x=r[4],y=r[7],T=r[2],w=r[5],M=r[8];return s[0]=o*g+a*v+l*T,s[3]=o*m+a*x+l*w,s[6]=o*f+a*y+l*M,s[1]=u*g+c*v+d*T,s[4]=u*m+c*x+d*w,s[7]=u*f+c*y+d*M,s[2]=h*g+p*v+_*T,s[5]=h*m+p*x+_*w,s[8]=h*f+p*y+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,_=t*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fh.makeScale(e,t)),this}rotate(e){return this.premultiply(Fh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fh=new st;function KE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function db(){const n=dd("canvas");return n.style.display="block",n}const Qv={};function cu(n){n in Qv||(Qv[n]=!0,console.warn(n))}const Jv=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ex=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lc={[Qr]:{transfer:ld,primaries:ud,toReference:n=>n,fromReference:n=>n},[pn]:{transfer:Rt,primaries:ud,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Id]:{transfer:ld,primaries:cd,toReference:n=>n.applyMatrix3(ex),fromReference:n=>n.applyMatrix3(Jv)},[d_]:{transfer:Rt,primaries:cd,toReference:n=>n.convertSRGBToLinear().applyMatrix3(ex),fromReference:n=>n.applyMatrix3(Jv).convertLinearToSRGB()}},hb=new Set([Qr,Id]),yt={enabled:!0,_workingColorSpace:Qr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Lc[e].toReference,r=Lc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Lc[n].primaries},getTransfer:function(n){return n===Xi?ld:Lc[n].transfer}};function Ga(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $o;class ZE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$o===void 0&&($o=dd("canvas")),$o.width=e.width,$o.height=e.height;const i=$o.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$o}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ga(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ga(t[i]/255)*255):t[i]=Ga(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pb=0;class QE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=$u(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zh(r[o].image)):s.push(zh(r[o]))}else s=zh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function zh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ZE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mb=0;class li extends fl{constructor(e=li.DEFAULT_IMAGE,t=li.DEFAULT_MAPPING,i=lr,r=lr,s=$n,o=zu,a=Wi,l=Ns,u=li.DEFAULT_ANISOTROPY,c=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=$u(),this.name="",this.source=new QE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(cu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ro?pn:Xi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lm:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Dm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lm:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Dm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pn?Ro:jE}set encoding(e){cu("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ro?pn:Xi}}li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=zE;li.DEFAULT_ANISOTROPY=1;class gn{constructor(e=0,t=0,i=0,r=1){gn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,T=(f+1)/2,w=(c+h)/4,M=(d+g)/4,P=(_+m)/4;return x>y&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gb extends fl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(cu("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ro?pn:Xi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new li(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new QE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends gb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class JE extends li{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _b extends li{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=hn,this.minFilter=hn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ku{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==h||u!==p||c!==_){let m=1-a;const f=l*h+u*p+c*_+d*g,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),w=Math.atan2(T,f*v);m=Math.sin(m*w)/T,a=Math.sin(a*w)/T}const y=a*v;if(l=l*m+h*y,u=u*m+p*y,c=c*m+_*y,d=d*m+g*y,m===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=T,u*=T,c*=T,d*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*h,e[t+1]=l*_+c*h+u*d-a*p,e[t+2]=u*_+c*p+a*h-l*d,e[t+3]=c*_-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d-h*p*_;break;case"YXZ":this._x=h*c*d+u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d+h*p*_;break;case"ZXY":this._x=h*c*d-u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d-h*p*_;break;case"ZYX":this._x=h*c*d-u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d+h*p*_;break;case"YZX":this._x=h*c*d+u*p*_,this._y=u*p*d+h*c*_,this._z=u*c*_-h*p*d,this._w=u*c*d-h*p*_;break;case"XZY":this._x=h*c*d-u*p*_,this._y=u*p*d-h*c*_,this._z=u*c*_+h*p*d,this._w=u*c*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bh.copy(this).projectOnVector(e),this.sub(Bh)}reflect(e){return this.sub(Bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new X,tx=new Ku;class Zu{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,er):er.fromBufferAttribute(s,o),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),Uc.subVectors(this.max,Cl),Ko.subVectors(e.a,Cl),Zo.subVectors(e.b,Cl),Qo.subVectors(e.c,Cl),ts.subVectors(Zo,Ko),ns.subVectors(Qo,Zo),Ks.subVectors(Ko,Qo);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ks.z,Ks.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ks.z,0,-Ks.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ks.y,Ks.x,0];return!Hh(t,Ko,Zo,Qo,Uc)||(t=[1,0,0,0,1,0,0,0,1],!Hh(t,Ko,Zo,Qo,Uc))?!1:(Nc.crossVectors(ts,ns),t=[Nc.x,Nc.y,Nc.z],Hh(t,Ko,Zo,Qo,Uc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const br=[new X,new X,new X,new X,new X,new X,new X,new X],er=new X,Dc=new Zu,Ko=new X,Zo=new X,Qo=new X,ts=new X,ns=new X,Ks=new X,Cl=new X,Uc=new X,Nc=new X,Zs=new X;function Hh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),u=t.dot(Zs),c=i.dot(Zs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const vb=new Zu,Rl=new X,Vh=new X;class Od{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rl.subVectors(e,this.center);const t=Rl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Rl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rl.copy(e.center).add(Vh)),this.expandByPoint(Rl.copy(e.center).sub(Vh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pr=new X,Gh=new X,Ic=new X,is=new X,Wh=new X,Oc=new X,Xh=new X;class h_{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pr.copy(this.origin).addScaledVector(this.direction,t),Pr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gh.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Gh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ic),a=is.dot(this.direction),l=-is.dot(Ic),u=is.lengthSq(),c=Math.abs(1-o*o);let d,h,p,_;if(c>0)if(d=o*l-a,h=o*a-l,_=s*c,d>=0)if(h>=-_)if(h<=_){const g=1/c;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gh).addScaledVector(Ic,h),p}intersectSphere(e,t){Pr.subVectors(e.center,this.origin);const i=Pr.dot(this.direction),r=Pr.dot(Pr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Pr)!==null}intersectTriangle(e,t,i,r,s){Wh.subVectors(t,e),Oc.subVectors(i,e),Xh.crossVectors(Wh,Oc);let o=this.direction.dot(Xh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;is.subVectors(this.origin,e);const l=a*this.direction.dot(Oc.crossVectors(is,Oc));if(l<0)return null;const u=a*this.direction.dot(Wh.cross(is));if(u<0||l+u>o)return null;const c=-a*is.dot(Xh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,_,g,m){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,_,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Jo.setFromMatrixColumn(e,0).length(),s=1/Jo.setFromMatrixColumn(e,1).length(),o=1/Jo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,_=u*c,g=u*d;t[0]=h+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,_=u*c,g=u*d;t[0]=h-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+g,t[1]=l*d,t[5]=g*u+h,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-h*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xb,e,yb)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),rs.crossVectors(i,di),rs.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),rs.crossVectors(i,di)),rs.normalize(),Fc.crossVectors(di,rs),r[0]=rs.x,r[4]=Fc.x,r[8]=di.x,r[1]=rs.y,r[5]=Fc.y,r[9]=di.y,r[2]=rs.z,r[6]=Fc.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],_=i[2],g=i[6],m=i[10],f=i[14],v=i[3],x=i[7],y=i[11],T=i[15],w=r[0],M=r[4],P=r[8],S=r[12],E=r[1],I=r[5],N=r[9],Z=r[13],L=r[2],F=r[6],B=r[10],H=r[14],D=r[3],k=r[7],R=r[11],$=r[15];return s[0]=o*w+a*E+l*L+u*D,s[4]=o*M+a*I+l*F+u*k,s[8]=o*P+a*N+l*B+u*R,s[12]=o*S+a*Z+l*H+u*$,s[1]=c*w+d*E+h*L+p*D,s[5]=c*M+d*I+h*F+p*k,s[9]=c*P+d*N+h*B+p*R,s[13]=c*S+d*Z+h*H+p*$,s[2]=_*w+g*E+m*L+f*D,s[6]=_*M+g*I+m*F+f*k,s[10]=_*P+g*N+m*B+f*R,s[14]=_*S+g*Z+m*H+f*$,s[3]=v*w+x*E+y*L+T*D,s[7]=v*M+x*I+y*F+T*k,s[11]=v*P+x*N+y*B+T*R,s[15]=v*S+x*Z+y*H+T*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],_=e[3],g=e[7],m=e[11],f=e[15];return _*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],_=e[12],g=e[13],m=e[14],f=e[15],v=d*m*u-g*h*u+g*l*p-a*m*p-d*l*f+a*h*f,x=_*h*u-c*m*u-_*l*p+o*m*p+c*l*f-o*h*f,y=c*g*u-_*d*u+_*a*p-o*g*p-c*a*f+o*d*f,T=_*d*l-c*g*l-_*a*h+o*g*h+c*a*m-o*d*m,w=t*v+i*x+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*f-i*h*f)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*f+i*l*f)*M,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-_*h*s+_*r*p-t*m*p-c*r*f+t*h*f)*M,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*f-t*l*f)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*f-t*d*f)*M,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=T*M,e[13]=(c*g*r-_*d*r+_*i*h-t*g*h-c*i*m+t*d*m)*M,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,_=s*d,g=o*c,m=o*d,f=a*d,v=l*u,x=l*c,y=l*d,T=i.x,w=i.y,M=i.z;return r[0]=(1-(g+f))*T,r[1]=(p+y)*T,r[2]=(_-x)*T,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+f))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+x)*M,r[9]=(m-v)*M,r[10]=(1-(h+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Jo.set(r[0],r[1],r[2]).length();const o=Jo.set(r[4],r[5],r[6]).length(),a=Jo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tr.copy(this);const u=1/s,c=1/o,d=1/a;return tr.elements[0]*=u,tr.elements[1]*=u,tr.elements[2]*=u,tr.elements[4]*=c,tr.elements[5]*=c,tr.elements[6]*=c,tr.elements[8]*=d,tr.elements[9]*=d,tr.elements[10]*=d,t.setFromRotationMatrix(tr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Gr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===fd)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let _,g;if(a===Gr)_=(o+s)*d,g=-2*d;else if(a===fd)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Jo=new X,tr=new cn,xb=new X(0,0,0),yb=new X(1,1,1),rs=new X,Fc=new X,di=new X,nx=new cn,ix=new Ku;class Fd{constructor(e=0,t=0,i=0,r=Fd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return nx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nx,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ix.setFromEuler(this),this.setFromQuaternion(ix,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fd.DEFAULT_ORDER="XYZ";class p_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sb=0;const rx=new X,ea=new Ku,Lr=new cn,kc=new X,bl=new X,Mb=new X,Eb=new Ku,sx=new X(1,0,0),ox=new X(0,1,0),ax=new X(0,0,1),Tb={type:"added"},wb={type:"removed"};class ui extends fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=$u(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new X,t=new Fd,i=new Ku,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new st}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new p_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(sx,e)}rotateY(e){return this.rotateOnAxis(ox,e)}rotateZ(e){return this.rotateOnAxis(ax,e)}translateOnAxis(e,t){return rx.copy(e).applyQuaternion(this.quaternion),this.position.add(rx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sx,e)}translateY(e){return this.translateOnAxis(ox,e)}translateZ(e){return this.translateOnAxis(ax,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kc.copy(e):kc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Lr.lookAt(bl,kc,this.up):Lr.lookAt(kc,bl,this.up),this.quaternion.setFromRotationMatrix(Lr),r&&(Lr.extractRotation(r.matrixWorld),ea.setFromRotationMatrix(Lr),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Tb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Lr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,Mb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,Eb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ui.DEFAULT_UP=new X(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nr=new X,Dr=new X,Yh=new X,Ur=new X,ta=new X,na=new X,lx=new X,jh=new X,qh=new X,$h=new X;let zc=!1;class ar{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nr.subVectors(e,t),r.cross(nr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nr.subVectors(r,t),Dr.subVectors(i,t),Yh.subVectors(e,t);const o=nr.dot(nr),a=nr.dot(Dr),l=nr.dot(Yh),u=Dr.dot(Dr),c=Dr.dot(Yh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,_=(o*c-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ur)===null?!1:Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getUV(e,t,i,r,s,o,a,l){return zc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ur)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ur.x),l.addScaledVector(o,Ur.y),l.addScaledVector(a,Ur.z),l)}static isFrontFacing(e,t,i,r){return nr.subVectors(i,t),Dr.subVectors(e,t),nr.cross(Dr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nr.subVectors(this.c,this.b),Dr.subVectors(this.a,this.b),nr.cross(Dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ar.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ar.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return zc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zc=!0),ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ar.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ar.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ar.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ta.subVectors(r,i),na.subVectors(s,i),jh.subVectors(e,i);const l=ta.dot(jh),u=na.dot(jh);if(l<=0&&u<=0)return t.copy(i);qh.subVectors(e,r);const c=ta.dot(qh),d=na.dot(qh);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ta,o);$h.subVectors(e,s);const p=ta.dot($h),_=na.dot($h);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(na,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return lx.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(lx,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(ta,o).addScaledVector(na,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function Kh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class at{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=fb(e,1),t=Kn(t,0,1),i=Kn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Kh(o,s,e+1/3),this.g=Kh(o,s,e),this.b=Kh(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=e1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=kh(e.r),this.g=kh(e.g),this.b=kh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return yt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Kn(Tn.r*255,0,255))*65536+Math.round(Kn(Tn.g*255,0,255))*256+Math.round(Kn(Tn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=pn){yt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Bc);const i=Oh(ss.h,Bc.h,t),r=Oh(ss.s,Bc.s,t),s=Oh(ss.l,Bc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new at;at.NAMES=e1;let Ab=0;class Qu extends fl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=$u(),this.name="",this.type="Material",this.blending=Va,this.side=Hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cm,this.blendDst=Rm,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ad,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Va&&(i.blending=this.blending),this.side!==Hs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cm&&(i.blendSrc=this.blendSrc),this.blendDst!==Rm&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ad&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class go extends Qu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=FE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new X,Hc=new Qe;class Ri{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$v,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ss,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hc.fromBufferAttribute(this,t),Hc.applyMatrix3(e),this.setXY(t,Hc.x,Hc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Al(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Al(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Al(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Al(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Al(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$v&&(e.usage=this.usage),e}}class t1 extends Ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class n1 extends Ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gn extends Ri{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cb=0;const Oi=new cn,Zh=new ui,ia=new X,hi=new Zu,Pl=new Zu,sn=new X;class Di extends fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=$u(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KE(e)?n1:t1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new st().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return Zh.lookAt(e),Zh.updateMatrix(),this.applyMatrix4(Zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ia).negate(),this.translate(ia.x,ia.y,ia.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Od);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pl.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(hi.min,Pl.min),hi.expandByPoint(sn),sn.addVectors(hi.max,Pl.max),hi.expandByPoint(sn)):(hi.expandByPoint(Pl.min),hi.expandByPoint(Pl.max))}hi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)sn.fromBufferAttribute(a,u),l&&(ia.fromBufferAttribute(e,u),sn.add(ia)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new X,c[E]=new X;const d=new X,h=new X,p=new X,_=new Qe,g=new Qe,m=new Qe,f=new X,v=new X;function x(E,I,N){d.fromArray(r,E*3),h.fromArray(r,I*3),p.fromArray(r,N*3),_.fromArray(o,E*2),g.fromArray(o,I*2),m.fromArray(o,N*2),h.sub(d),p.sub(d),g.sub(_),m.sub(_);const Z=1/(g.x*m.y-m.x*g.y);isFinite(Z)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(Z),v.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(Z),u[E].add(f),u[I].add(f),u[N].add(f),c[E].add(v),c[I].add(v),c[N].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,I=y.length;E<I;++E){const N=y[E],Z=N.start,L=N.count;for(let F=Z,B=Z+L;F<B;F+=3)x(i[F+0],i[F+1],i[F+2])}const T=new X,w=new X,M=new X,P=new X;function S(E){M.fromArray(s,E*3),P.copy(M);const I=u[E];T.copy(I),T.sub(M.multiplyScalar(M.dot(I))).normalize(),w.crossVectors(P,I);const Z=w.dot(c[E])<0?-1:1;l[E*4]=T.x,l[E*4+1]=T.y,l[E*4+2]=T.z,l[E*4+3]=Z}for(let E=0,I=y.length;E<I;++E){const N=y[E],Z=N.start,L=N.count;for(let F=Z,B=Z+L;F<B;F+=3)S(i[F+0]),S(i[F+1]),S(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,d=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let f=0;f<c;f++)h[_++]=u[p++]}return new Ri(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ux=new cn,Qs=new h_,Vc=new Od,cx=new X,ra=new X,sa=new X,oa=new X,Qh=new X,Gc=new X,Wc=new Qe,Xc=new Qe,Yc=new Qe,fx=new X,dx=new X,hx=new X,jc=new X,qc=new X;class Ti extends ui{constructor(e=new Di,t=new go){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Qh.fromBufferAttribute(d,e),o?Gc.addScaledVector(Qh,c):Gc.addScaledVector(Qh.sub(t),c))}t.add(Gc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(Vc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(Vc,cx)===null||Qs.origin.distanceToSquared(cx)>(e.far-e.near)**2))&&(ux.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(ux),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=$c(this,f,e,i,u,c,d,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=$c(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const m=h[_],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,T=x;y<T;y+=3){const w=y,M=y+1,P=y+2;r=$c(this,f,e,i,u,c,d,w,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){const v=m,x=m+1,y=m+2;r=$c(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Rb(n,e,t,i,r,s,o,a){let l;if(e.side===ai?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hs,a),l===null)return null;qc.copy(a),qc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(qc);return u<t.near||u>t.far?null:{distance:u,point:qc.clone(),object:n}}function $c(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ra),n.getVertexPosition(l,sa),n.getVertexPosition(u,oa);const c=Rb(n,e,t,i,ra,sa,oa,jc);if(c){r&&(Wc.fromBufferAttribute(r,a),Xc.fromBufferAttribute(r,l),Yc.fromBufferAttribute(r,u),c.uv=ar.getInterpolation(jc,ra,sa,oa,Wc,Xc,Yc,new Qe)),s&&(Wc.fromBufferAttribute(s,a),Xc.fromBufferAttribute(s,l),Yc.fromBufferAttribute(s,u),c.uv1=ar.getInterpolation(jc,ra,sa,oa,Wc,Xc,Yc,new Qe),c.uv2=c.uv1),o&&(fx.fromBufferAttribute(o,a),dx.fromBufferAttribute(o,l),hx.fromBufferAttribute(o,u),c.normal=ar.getInterpolation(jc,ra,sa,oa,fx,dx,hx,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new X,materialIndex:0};ar.getNormal(ra,sa,oa,d.normal),c.face=d}return c}class Ju extends Di{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gn(u,3)),this.setAttribute("normal",new Gn(c,3)),this.setAttribute("uv",new Gn(d,2));function _(g,m,f,v,x,y,T,w,M,P,S){const E=y/M,I=T/P,N=y/2,Z=T/2,L=w/2,F=M+1,B=P+1;let H=0,D=0;const k=new X;for(let R=0;R<B;R++){const $=R*I-Z;for(let Q=0;Q<F;Q++){const q=Q*E-N;k[g]=q*v,k[m]=$*x,k[f]=L,u.push(k.x,k.y,k.z),k[g]=0,k[m]=0,k[f]=w>0?1:-1,c.push(k.x,k.y,k.z),d.push(Q/M),d.push(1-R/P),H+=1}}for(let R=0;R<P;R++)for(let $=0;$<M;$++){const Q=h+$+F*R,q=h+$+F*(R+1),K=h+($+1)+F*(R+1),ie=h+($+1)+F*R;l.push(Q,q,ie),l.push(q,K,ie),D+=6}a.addGroup(p,D,S),p+=D,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ol(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const i=ol(n[t]);for(const r in i)e[r]=i[r]}return e}function bb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function i1(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const Bu={clone:ol,merge:In};var Pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Qu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pb,this.fragmentShader=Lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ol(e.uniforms),this.uniformsGroups=bb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class r1 extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vi extends r1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ih*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nm*2*Math.atan(Math.tan(Ih*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ih*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const aa=-90,la=1;class Db extends ui{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vi(aa,la,e,t);r.layers=this.layers,this.add(r);const s=new Vi(aa,la,e,t);s.layers=this.layers,this.add(s);const o=new Vi(aa,la,e,t);o.layers=this.layers,this.add(o);const a=new Vi(aa,la,e,t);a.layers=this.layers,this.add(a);const l=new Vi(aa,la,e,t);l.layers=this.layers,this.add(l);const u=new Vi(aa,la,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Gr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class s1 extends li{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:il,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ub extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(cu("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ro?pn:Xi),this.texture=new s1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ju(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:ol(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:Cr});s.uniforms.tEquirect.value=t;const o=new Ti(r,s),a=t.minFilter;return t.minFilter===zu&&(t.minFilter=$n),new Db(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Jh=new X,Nb=new X,Ib=new st;class us{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Jh.subVectors(i,t).cross(Nb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Jh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ib.getNormalMatrix(e),r=this.coplanarPoint(Jh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new Od,Kc=new X;class o1{constructor(e=new us,t=new us,i=new us,r=new us,s=new us,o=new us){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],_=r[9],g=r[10],m=r[11],f=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+_,y+v).normalize(),i[3].setComponents(l-o,h-c,m-_,y-v).normalize(),i[4].setComponents(l-a,h-d,m-g,y-x).normalize(),t===Gr)i[5].setComponents(l+a,h+d,m+g,y+x).normalize();else if(t===fd)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Kc.x=r.normal.x>0?e.max.x:e.min.x,Kc.y=r.normal.y>0?e.max.y:e.min.y,Kc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function a1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ob(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,d,h),u.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&_.length===0&&n.bufferSubData(d,0,h),_.length!==0){for(let g=0,m=_.length;g<m;g++){const f=_[g];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class m_ extends Di{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],_=[],g=[],m=[];for(let f=0;f<c;f++){const v=f*h-o;for(let x=0;x<u;x++){const y=x*d-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+u*f,y=v+u*(f+1),T=v+1+u*(f+1),w=v+1+u*f;p.push(x,y,w),p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new m_(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gb=`#ifdef USE_AOMAP
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
#endif`,Wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xb=`#ifdef USE_BATCHING
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
#endif`,Yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$b=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Zb=`#ifdef USE_BUMPMAP
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,s2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,o2=`#define PI 3.141592653589793
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
} // validated`,a2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l2=`vec3 transformedNormal = objectNormal;
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
#endif`,u2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,h2="gl_FragColor = linearToOutputTexel( gl_FragColor );",p2=`
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
}`,m2=`#ifdef USE_ENVMAP
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
#endif`,g2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_2=`#ifdef USE_ENVMAP
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
#endif`,v2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x2=`#ifdef USE_ENVMAP
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
#endif`,y2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T2=`#ifdef USE_GRADIENTMAP
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
}`,w2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b2=`uniform bool receiveShadow;
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
#endif`,P2=`#ifdef USE_ENVMAP
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
#endif`,L2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I2=`PhysicalMaterial material;
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
#endif`,O2=`struct PhysicalMaterial {
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
}`,F2=`
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
#endif`,k2=`#if defined( RE_IndirectDiffuse )
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
#endif`,z2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,G2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,W2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j2=`#if defined( USE_POINTS_UV )
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
#endif`,q2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,K2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z2=`#ifdef USE_MORPHNORMALS
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
#endif`,Q2=`#ifdef USE_MORPHTARGETS
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
#endif`,J2=`#ifdef USE_MORPHTARGETS
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
#endif`,eP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sP=`#ifdef USE_NORMALMAP
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
#endif`,oP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_P=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SP=`float getShadowMask() {
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
}`,MP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EP=`#ifdef USE_SKINNING
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
#endif`,TP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wP=`#ifdef USE_SKINNING
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
#endif`,AP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bP=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PP=`#ifdef USE_TRANSMISSION
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
#endif`,LP=`#ifdef USE_TRANSMISSION
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
#endif`,DP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FP=`uniform sampler2D t2D;
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
}`,kP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zP=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VP=`#include <common>
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
}`,GP=`#if DEPTH_PACKING == 3200
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
}`,WP=`#define DISTANCE
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
}`,XP=`#define DISTANCE
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
}`,YP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qP=`uniform float scale;
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
}`,$P=`uniform vec3 diffuse;
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
}`,KP=`#include <common>
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
}`,ZP=`uniform vec3 diffuse;
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
}`,QP=`#define LAMBERT
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
}`,JP=`#define LAMBERT
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
}`,eL=`#define MATCAP
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
}`,tL=`#define MATCAP
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
}`,nL=`#define NORMAL
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
}`,iL=`#define NORMAL
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
}`,rL=`#define PHONG
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
}`,sL=`#define PHONG
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
}`,oL=`#define STANDARD
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
}`,aL=`#define STANDARD
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
}`,lL=`#define TOON
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
}`,uL=`#define TOON
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
}`,cL=`uniform float size;
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
}`,fL=`uniform vec3 diffuse;
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
}`,dL=`#include <common>
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
}`,hL=`uniform vec3 color;
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
}`,pL=`uniform float rotation;
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
}`,mL=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Fb,alphahash_pars_fragment:kb,alphamap_fragment:zb,alphamap_pars_fragment:Bb,alphatest_fragment:Hb,alphatest_pars_fragment:Vb,aomap_fragment:Gb,aomap_pars_fragment:Wb,batching_pars_vertex:Xb,batching_vertex:Yb,begin_vertex:jb,beginnormal_vertex:qb,bsdfs:$b,iridescence_fragment:Kb,bumpmap_pars_fragment:Zb,clipping_planes_fragment:Qb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:e2,clipping_planes_vertex:t2,color_fragment:n2,color_pars_fragment:i2,color_pars_vertex:r2,color_vertex:s2,common:o2,cube_uv_reflection_fragment:a2,defaultnormal_vertex:l2,displacementmap_pars_vertex:u2,displacementmap_vertex:c2,emissivemap_fragment:f2,emissivemap_pars_fragment:d2,colorspace_fragment:h2,colorspace_pars_fragment:p2,envmap_fragment:m2,envmap_common_pars_fragment:g2,envmap_pars_fragment:_2,envmap_pars_vertex:v2,envmap_physical_pars_fragment:P2,envmap_vertex:x2,fog_vertex:y2,fog_pars_vertex:S2,fog_fragment:M2,fog_pars_fragment:E2,gradientmap_pars_fragment:T2,lightmap_fragment:w2,lightmap_pars_fragment:A2,lights_lambert_fragment:C2,lights_lambert_pars_fragment:R2,lights_pars_begin:b2,lights_toon_fragment:L2,lights_toon_pars_fragment:D2,lights_phong_fragment:U2,lights_phong_pars_fragment:N2,lights_physical_fragment:I2,lights_physical_pars_fragment:O2,lights_fragment_begin:F2,lights_fragment_maps:k2,lights_fragment_end:z2,logdepthbuf_fragment:B2,logdepthbuf_pars_fragment:H2,logdepthbuf_pars_vertex:V2,logdepthbuf_vertex:G2,map_fragment:W2,map_pars_fragment:X2,map_particle_fragment:Y2,map_particle_pars_fragment:j2,metalnessmap_fragment:q2,metalnessmap_pars_fragment:$2,morphcolor_vertex:K2,morphnormal_vertex:Z2,morphtarget_pars_vertex:Q2,morphtarget_vertex:J2,normal_fragment_begin:eP,normal_fragment_maps:tP,normal_pars_fragment:nP,normal_pars_vertex:iP,normal_vertex:rP,normalmap_pars_fragment:sP,clearcoat_normal_fragment_begin:oP,clearcoat_normal_fragment_maps:aP,clearcoat_pars_fragment:lP,iridescence_pars_fragment:uP,opaque_fragment:cP,packing:fP,premultiplied_alpha_fragment:dP,project_vertex:hP,dithering_fragment:pP,dithering_pars_fragment:mP,roughnessmap_fragment:gP,roughnessmap_pars_fragment:_P,shadowmap_pars_fragment:vP,shadowmap_pars_vertex:xP,shadowmap_vertex:yP,shadowmask_pars_fragment:SP,skinbase_vertex:MP,skinning_pars_vertex:EP,skinning_vertex:TP,skinnormal_vertex:wP,specularmap_fragment:AP,specularmap_pars_fragment:CP,tonemapping_fragment:RP,tonemapping_pars_fragment:bP,transmission_fragment:PP,transmission_pars_fragment:LP,uv_pars_fragment:DP,uv_pars_vertex:UP,uv_vertex:NP,worldpos_vertex:IP,background_vert:OP,background_frag:FP,backgroundCube_vert:kP,backgroundCube_frag:zP,cube_vert:BP,cube_frag:HP,depth_vert:VP,depth_frag:GP,distanceRGBA_vert:WP,distanceRGBA_frag:XP,equirect_vert:YP,equirect_frag:jP,linedashed_vert:qP,linedashed_frag:$P,meshbasic_vert:KP,meshbasic_frag:ZP,meshlambert_vert:QP,meshlambert_frag:JP,meshmatcap_vert:eL,meshmatcap_frag:tL,meshnormal_vert:nL,meshnormal_frag:iL,meshphong_vert:rL,meshphong_frag:sL,meshphysical_vert:oL,meshphysical_frag:aL,meshtoon_vert:lL,meshtoon_frag:uL,points_vert:cL,points_frag:fL,shadow_vert:dL,shadow_frag:hL,sprite_vert:pL,sprite_frag:mL},ge={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},vr={basic:{uniforms:In([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:In([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new at(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:In([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:In([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:In([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new at(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:In([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:In([ge.points,ge.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:In([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:In([ge.common,ge.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:In([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:In([ge.sprite,ge.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:In([ge.common,ge.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:In([ge.lights,ge.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};vr.physical={uniforms:In([vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Zc={r:0,b:0,g:0};function gL(n,e,t,i,r,s,o){const a=new at(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function _(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Nd)?(c===void 0&&(c=new Ti(new Ju(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ol(vr.backgroundCube.uniforms),vertexShader:vr.backgroundCube.vertexShader,fragmentShader:vr.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Ti(new m_(2,2),new Jn({name:"BackgroundMaterial",uniforms:ol(vr.background.uniforms),vertexShader:vr.background.vertexShader,fragmentShader:vr.background.fragmentShader,side:Hs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(Zc,i1(n)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function _L(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(L,F,B,H,D){let k=!1;if(o){const R=g(H,B,F);u!==R&&(u=R,p(u.object)),k=f(L,H,B,D),k&&v(L,H,B,D)}else{const R=F.wireframe===!0;(u.geometry!==H.id||u.program!==B.id||u.wireframe!==R)&&(u.geometry=H.id,u.program=B.id,u.wireframe=R,k=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(k||c)&&(c=!1,P(L,F,B,H),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,F,B){const H=B.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let k=D[F.id];k===void 0&&(k={},D[F.id]=k);let R=k[H];return R===void 0&&(R=m(h()),k[H]=R),R}function m(L){const F=[],B=[],H=[];for(let D=0;D<r;D++)F[D]=0,B[D]=0,H[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:H,object:L,attributes:{},index:null}}function f(L,F,B,H){const D=u.attributes,k=F.attributes;let R=0;const $=B.getAttributes();for(const Q in $)if($[Q].location>=0){const K=D[Q];let ie=k[Q];if(ie===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),K===void 0||K.attribute!==ie||ie&&K.data!==ie.data)return!0;R++}return u.attributesNum!==R||u.index!==H}function v(L,F,B,H){const D={},k=F.attributes;let R=0;const $=B.getAttributes();for(const Q in $)if($[Q].location>=0){let K=k[Q];K===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ie={};ie.attribute=K,K&&K.data&&(ie.data=K.data),D[Q]=ie,R++}u.attributes=D,u.attributesNum=R,u.index=H}function x(){const L=u.newAttributes;for(let F=0,B=L.length;F<B;F++)L[F]=0}function y(L){T(L,0)}function T(L,F){const B=u.newAttributes,H=u.enabledAttributes,D=u.attributeDivisors;B[L]=1,H[L]===0&&(n.enableVertexAttribArray(L),H[L]=1),D[L]!==F&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),D[L]=F)}function w(){const L=u.newAttributes,F=u.enabledAttributes;for(let B=0,H=F.length;B<H;B++)F[B]!==L[B]&&(n.disableVertexAttribArray(B),F[B]=0)}function M(L,F,B,H,D,k,R){R===!0?n.vertexAttribIPointer(L,F,B,D,k):n.vertexAttribPointer(L,F,B,H,D,k)}function P(L,F,B,H){if(i.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=H.attributes,k=B.getAttributes(),R=F.defaultAttributeValues;for(const $ in k){const Q=k[$];if(Q.location>=0){let q=D[$];if(q===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const K=q.normalized,ie=q.itemSize,de=t.get(q);if(de===void 0)continue;const he=de.buffer,Ee=de.type,De=de.bytesPerElement,Ce=i.isWebGL2===!0&&(Ee===n.INT||Ee===n.UNSIGNED_INT||q.gpuType===BE);if(q.isInterleavedBufferAttribute){const Xe=q.data,V=Xe.stride,Ye=q.offset;if(Xe.isInstancedInterleavedBuffer){for(let xe=0;xe<Q.locationSize;xe++)T(Q.location+xe,Xe.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let xe=0;xe<Q.locationSize;xe++)y(Q.location+xe);n.bindBuffer(n.ARRAY_BUFFER,he);for(let xe=0;xe<Q.locationSize;xe++)M(Q.location+xe,ie/Q.locationSize,Ee,K,V*De,(Ye+ie/Q.locationSize*xe)*De,Ce)}else{if(q.isInstancedBufferAttribute){for(let Xe=0;Xe<Q.locationSize;Xe++)T(Q.location+Xe,q.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Xe=0;Xe<Q.locationSize;Xe++)y(Q.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,he);for(let Xe=0;Xe<Q.locationSize;Xe++)M(Q.location+Xe,ie/Q.locationSize,Ee,K,ie*De,ie/Q.locationSize*Xe*De,Ce)}}else if(R!==void 0){const K=R[$];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Q.location,K);break;case 3:n.vertexAttrib3fv(Q.location,K);break;case 4:n.vertexAttrib4fv(Q.location,K);break;default:n.vertexAttrib1fv(Q.location,K)}}}}w()}function S(){N();for(const L in a){const F=a[L];for(const B in F){const H=F[B];for(const D in H)_(H[D].object),delete H[D];delete F[B]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const B in F){const H=F[B];for(const D in H)_(H[D].object),delete H[D];delete F[B]}delete a[L.id]}function I(L){for(const F in a){const B=a[F];if(B[L.id]===void 0)continue;const H=B[L.id];for(const D in H)_(H[D].object),delete H[D];delete B[L.id]}}function N(){Z(),c=!0,u!==l&&(u=l,p(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:w}}function vL(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,d,h),t.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],d[_]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=d[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function xL(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),T=x&&y,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:w}}function yL(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new us,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=f.clippingState||null;l.value=y,y=c(_,h,x,p);for(let T=0;T!==x;++T)y[T]=t[T];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const f=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function SL(n){let e=new WeakMap;function t(o,a){return a===bm?o.mapping=il:a===Pm&&(o.mapping=rl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bm||a===Pm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Ub(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class l1 extends r1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ca=4,px=[.125,.215,.35,.446,.526,.582],ao=20,ep=new l1,mx=new at;let tp=null,np=0,ip=0;const so=(1+Math.sqrt(5))/2,ua=1/so,gx=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,so,ua),new X(0,so,-ua),new X(ua,0,so),new X(-ua,0,so),new X(so,ua,0),new X(-so,ua,0)];class _x{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tp,np,ip),e.scissorTest=!1,Qc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===il||e.mapping===rl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:dr,format:Wi,colorSpace:Qr,depthBuffer:!1},r=vx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vx(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ML(s)),this._blurMaterial=EL(s,e,t)}return r}_compileMaterial(e){const t=new Ti(this._lodPlanes[0],e);this._renderer.compile(t,ep)}_sceneToCubeUV(e,t,i,r){const a=new Vi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(mx),c.toneMapping=Us,c.autoClear=!1;const p=new go({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),_=new Ti(new Ju,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(mx),g=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;Qc(r,v*x,f>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===il||e.mapping===rl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ti(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Qc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ep)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gx[(r-1)%gx.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ti(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ao-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):ao;m>ao&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ao}`);const f=[];let v=0;for(let M=0;M<ao;++M){const P=M/g,S=Math.exp(-P*P/2);f.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const y=this._sizeLods[r],T=3*y*(r>x-Ca?r-x+Ca:0),w=4*(this._cubeSize-y);Qc(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(d,ep)}}function ML(n){const e=[],t=[],i=[];let r=n;const s=n-Ca+1+px.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ca?l=px[o-n+Ca-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,f=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(f*_*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,P=w>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,g*_*w),x.set(h,m*_*w);const E=[w,w,w,w,w,w];y.set(E,f*_*w)}const T=new Di;T.setAttribute("position",new Ri(v,g)),T.setAttribute("uv",new Ri(x,m)),T.setAttribute("faceIndex",new Ri(y,f)),e.push(T),r>Ca&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vx(n,e,t){const i=new Ci(n,e,t);return i.texture.mapping=Nd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function EL(n,e,t){const i=new Float32Array(ao),r=new X(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:ao,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:g_(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function xx(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:g_(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function yx(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:g_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function g_(){return`

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
	`}function TL(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===bm||l===Pm,c=l===il||l===rl;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new _x(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new _x(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function AL(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const T=v[x+0],w=v[x+1],M=v[x+2];h.push(T,w,w,M,M,T)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const T=x+0,w=x+1,M=x+2;h.push(T,w,w,M,M,T)}}else return;const m=new(KE(h)?n1:t1)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function CL(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function d(p,_,g){if(g===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,_,a,p*l,g),t.update(_,s,g)}function h(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,_[f]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let f=0;for(let v=0;v<g;v++)f+=_[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function RL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function bL(n,e){return n[0]-e[0]}function PL(n,e){return Math.abs(e[1])-Math.abs(n[1])}function LL(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new gn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let F=function(){Z.dispose(),s.delete(c),c.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let E=c.attributes.position.count*S,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*I*4*g),Z=new JE(N,E,I,g);Z.type=Ss,Z.needsUpdate=!0;const L=S*4;for(let B=0;B<g;B++){const H=w[B],D=M[B],k=P[B],R=E*I*4*B;for(let $=0;$<H.count;$++){const Q=$*L;x===!0&&(o.fromBufferAttribute(H,$),N[R+Q+0]=o.x,N[R+Q+1]=o.y,N[R+Q+2]=o.z,N[R+Q+3]=0),y===!0&&(o.fromBufferAttribute(D,$),N[R+Q+4]=o.x,N[R+Q+5]=o.y,N[R+Q+6]=o.z,N[R+Q+7]=0),T===!0&&(o.fromBufferAttribute(k,$),N[R+Q+8]=o.x,N[R+Q+9]=o.y,N[R+Q+10]=o.z,N[R+Q+11]=k.itemSize===4?o.w:1)}}m={count:g,texture:Z,size:new Qe(E,I)},s.set(c,m),c.addEventListener("dispose",F)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];const v=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=i[c.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<_;y++){const T=g[y];T[0]=y,T[1]=h[y]}g.sort(PL);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(bL);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const T=a[y],w=T[0],M=T[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[w]&&c.setAttribute("morphTarget"+y,m[w]),f&&c.getAttribute("morphNormal"+y)!==f[w]&&c.setAttribute("morphNormal"+y,f[w]),r[y]=M,v+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function DL(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class u1 extends li{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Co,c!==Co&&c!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Co&&(i=ys),i===void 0&&c===sl&&(i=Ao),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const c1=new li,f1=new u1(1,1);f1.compareFunction=$E;const d1=new JE,h1=new _b,p1=new s1,Sx=[],Mx=[],Ex=new Float32Array(16),Tx=new Float32Array(9),wx=new Float32Array(4);function dl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sx[r];if(s===void 0&&(s=new Float32Array(r),Sx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function kd(n,e){let t=Mx[e];t===void 0&&(t=new Int32Array(e),Mx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function UL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function NL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function IL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function OL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function FL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;wx.set(i),n.uniformMatrix2fv(this.addr,!1,wx),rn(t,i)}}function kL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Tx.set(i),n.uniformMatrix3fv(this.addr,!1,Tx),rn(t,i)}}function zL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Ex.set(i),n.uniformMatrix4fv(this.addr,!1,Ex),rn(t,i)}}function BL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function HL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function VL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function GL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function WL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function XL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function YL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function jL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function qL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?f1:c1;t.setTexture2D(e||s,r)}function $L(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||h1,r)}function KL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||p1,r)}function ZL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||d1,r)}function QL(n){switch(n){case 5126:return UL;case 35664:return NL;case 35665:return IL;case 35666:return OL;case 35674:return FL;case 35675:return kL;case 35676:return zL;case 5124:case 35670:return BL;case 35667:case 35671:return HL;case 35668:case 35672:return VL;case 35669:case 35673:return GL;case 5125:return WL;case 36294:return XL;case 36295:return YL;case 36296:return jL;case 35678:case 36198:case 36298:case 36306:case 35682:return qL;case 35679:case 36299:case 36307:return $L;case 35680:case 36300:case 36308:case 36293:return KL;case 36289:case 36303:case 36311:case 36292:return ZL}}function JL(n,e){n.uniform1fv(this.addr,e)}function eD(n,e){const t=dl(e,this.size,2);n.uniform2fv(this.addr,t)}function tD(n,e){const t=dl(e,this.size,3);n.uniform3fv(this.addr,t)}function nD(n,e){const t=dl(e,this.size,4);n.uniform4fv(this.addr,t)}function iD(n,e){const t=dl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function rD(n,e){const t=dl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function sD(n,e){const t=dl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oD(n,e){n.uniform1iv(this.addr,e)}function aD(n,e){n.uniform2iv(this.addr,e)}function lD(n,e){n.uniform3iv(this.addr,e)}function uD(n,e){n.uniform4iv(this.addr,e)}function cD(n,e){n.uniform1uiv(this.addr,e)}function fD(n,e){n.uniform2uiv(this.addr,e)}function dD(n,e){n.uniform3uiv(this.addr,e)}function hD(n,e){n.uniform4uiv(this.addr,e)}function pD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||c1,s[o])}function mD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||h1,s[o])}function gD(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||p1,s[o])}function _D(n,e,t){const i=this.cache,r=e.length,s=kd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||d1,s[o])}function vD(n){switch(n){case 5126:return JL;case 35664:return eD;case 35665:return tD;case 35666:return nD;case 35674:return iD;case 35675:return rD;case 35676:return sD;case 5124:case 35670:return oD;case 35667:case 35671:return aD;case 35668:case 35672:return lD;case 35669:case 35673:return uD;case 5125:return cD;case 36294:return fD;case 36295:return dD;case 36296:return hD;case 35678:case 36198:case 36298:case 36306:case 35682:return pD;case 35679:case 36299:case 36307:return mD;case 35680:case 36300:case 36308:case 36293:return gD;case 36289:case 36303:case 36311:case 36292:return _D}}class xD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=QL(t.type)}}class yD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vD(t.type)}}class SD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const rp=/(\w+)(\])?(\[|\.)?/g;function Ax(n,e){n.seq.push(e),n.map[e.id]=e}function MD(n,e,t){const i=n.name,r=i.length;for(rp.lastIndex=0;;){const s=rp.exec(i),o=rp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ax(t,u===void 0?new xD(a,n,e):new yD(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new SD(a),Ax(t,d)),t=d}}}class Tf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);MD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Cx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ED=37297;let TD=0;function wD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function AD(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===cd&&t===ud?i="LinearDisplayP3ToLinearSRGB":e===ud&&t===cd&&(i="LinearSRGBToLinearDisplayP3"),n){case Qr:case Id:return[i,"LinearTransferOETF"];case pn:case d_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rx(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wD(n.getShaderSource(e),o)}else return r}function CD(n,e){const t=AD(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RD(n,e){let t;switch(e){case HR:t="Linear";break;case VR:t="Reinhard";break;case GR:t="OptimizedCineon";break;case kE:t="ACESFilmic";break;case XR:t="AgX";break;case WR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bD(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ra).join(`
`)}function PD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ra).join(`
`)}function LD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ra(n){return n!==""}function bx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Px(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Om(n){return n.replace(UD,ID)}const ND=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ID(n,e){let t=et[e];if(t===void 0){const i=ND.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Om(t)}const OD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lx(n){return n.replace(OD,FD)}function FD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===OE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mR?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nr&&(e="SHADOWMAP_TYPE_VSM"),e}function zD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case il:case rl:e="ENVMAP_TYPE_CUBE";break;case Nd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rl:e="ENVMAP_MODE_REFRACTION";break}return e}function HD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case FE:e="ENVMAP_BLENDING_MULTIPLY";break;case zR:e="ENVMAP_BLENDING_MIX";break;case BR:e="ENVMAP_BLENDING_ADD";break}return e}function VD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function GD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=kD(t),u=zD(t),c=BD(t),d=HD(t),h=VD(t),p=t.isWebGL2?"":bD(t),_=PD(t),g=LD(s),m=r.createProgram();let f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),v.length>0&&(v+=`
`)):(f=[Dx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),v=[p,Dx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Us?"#define TONE_MAPPING":"",t.toneMapping!==Us?et.tonemapping_pars_fragment:"",t.toneMapping!==Us?RD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,CD("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),o=Om(o),o=bx(o,t),o=Px(o,t),a=Om(a),a=bx(a,t),a=Px(a,t),o=Lx(o),a=Lx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+f+o,T=x+v+a,w=Cx(r,r.VERTEX_SHADER,y),M=Cx(r,r.FRAGMENT_SHADER,T);r.attachShader(m,w),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(N){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(w).trim(),F=r.getShaderInfoLog(M).trim();let B=!0,H=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,w,M);else{const D=Rx(r,w,"vertex"),k=Rx(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+D+`
`+k)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||F==="")&&(H=!1);H&&(N.diagnostics={runnable:B,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:F,prefix:v}})}r.deleteShader(w),r.deleteShader(M),S=new Tf(r,m),E=DD(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,ED)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=w,this.fragmentShader=M,this}let WD=0;class XD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new YD(e),t.set(e,i)),i}}class YD{constructor(e){this.id=WD++,this.code=e,this.usedTimes=0}}function jD(n,e,t,i,r,s,o){const a=new p_,l=new XD,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,E,I,N,Z){const L=N.fog,F=Z.geometry,B=S.isMeshStandardMaterial?N.environment:null,H=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),D=H&&H.mapping===Nd?H.image.height:null,k=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const R=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$=R!==void 0?R.length:0;let Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let q,K,ie,de;if(k){const Te=vr[k];q=Te.vertexShader,K=Te.fragmentShader}else q=S.vertexShader,K=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const he=n.getRenderTarget(),Ee=Z.isInstancedMesh===!0,De=Z.isBatchedMesh===!0,Ce=!!S.map,Xe=!!S.matcap,V=!!H,Ye=!!S.aoMap,xe=!!S.lightMap,Ue=!!S.bumpMap,ye=!!S.normalMap,G=!!S.displacementMap,ke=!!S.emissiveMap,C=!!S.metalnessMap,A=!!S.roughnessMap,O=S.anisotropy>0,J=S.clearcoat>0,te=S.iridescence>0,ne=S.sheen>0,_e=S.transmission>0,ce=O&&!!S.anisotropyMap,ue=J&&!!S.clearcoatMap,Pe=J&&!!S.clearcoatNormalMap,ze=J&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,qe=te&&!!S.iridescenceThicknessMap,Re=ne&&!!S.sheenColorMap,pe=ne&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ve=!!S.specularColorMap,He=!!S.specularIntensityMap,Ze=_e&&!!S.transmissionMap,lt=_e&&!!S.thicknessMap,me=!!S.gradientMap,se=!!S.alphaMap,U=S.alphaTest>0,oe=!!S.alphaHash,ae=!!S.extensions,Oe=!!F.attributes.uv1,Ne=!!F.attributes.uv2,tt=!!F.attributes.uv3;let dt=Us;return S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(dt=n.toneMapping),{isWebGL2:c,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:K,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,instancing:Ee,instancingColor:Ee&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Qr,map:Ce,matcap:Xe,envMap:V,envMapMode:V&&H.mapping,envMapCubeUVHeight:D,aoMap:Ye,lightMap:xe,bumpMap:Ue,normalMap:ye,displacementMap:h&&G,emissiveMap:ke,normalMapObjectSpace:ye&&S.normalMapType===ib,normalMapTangentSpace:ye&&S.normalMapType===nb,metalnessMap:C,roughnessMap:A,anisotropy:O,anisotropyMap:ce,clearcoat:J,clearcoatMap:ue,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ze,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:qe,sheen:ne,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:Se,specularColorMap:ve,specularIntensityMap:He,transmission:_e,transmissionMap:Ze,thicknessMap:lt,gradientMap:me,opaque:S.transparent===!1&&S.blending===Va,alphaMap:se,alphaTest:U,alphaHash:oe,combine:S.combine,mapUv:Ce&&g(S.map.channel),aoMapUv:Ye&&g(S.aoMap.channel),lightMapUv:xe&&g(S.lightMap.channel),bumpMapUv:Ue&&g(S.bumpMap.channel),normalMapUv:ye&&g(S.normalMap.channel),displacementMapUv:G&&g(S.displacementMap.channel),emissiveMapUv:ke&&g(S.emissiveMap.channel),metalnessMapUv:C&&g(S.metalnessMap.channel),roughnessMapUv:A&&g(S.roughnessMap.channel),anisotropyMapUv:ce&&g(S.anisotropyMap.channel),clearcoatMapUv:ue&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(S.sheenRoughnessMap.channel),specularMapUv:Se&&g(S.specularMap.channel),specularColorMapUv:ve&&g(S.specularColorMap.channel),specularIntensityMapUv:He&&g(S.specularIntensityMap.channel),transmissionMapUv:Ze&&g(S.transmissionMap.channel),thicknessMapUv:lt&&g(S.thicknessMap.channel),alphaMapUv:se&&g(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ye||O),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ne,vertexUv3s:tt,pointsUvs:Z.isPoints===!0&&!!F.attributes.uv&&(Ce||se),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gi,flipSided:S.side===ai,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ae&&S.extensions.derivatives===!0,extensionFragDepth:ae&&S.extensions.fragDepth===!0,extensionDrawBuffers:ae&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=_[S.type];let I;if(E){const N=vr[E];I=Bu.clone(N.uniforms)}else I=S.uniforms;return I}function T(S,E){let I;for(let N=0,Z=u.length;N<Z;N++){const L=u[N];if(L.cacheKey===E){I=L,++I.usedTimes;break}}return I===void 0&&(I=new GD(n,E,S,s),u.push(I)),I}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:M,programs:u,dispose:P}}function qD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function $D(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ux(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,_,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,_,g,m){const f=o(d,h,p,_,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||$D),i.length>1&&i.sort(h||Ux),r.length>1&&r.sort(h||Ux)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function KD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Nx,n.set(i,[o])):r>=s.length?(o=new Nx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new at};break;case"SpotLight":t={position:new X,direction:new X,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function QD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let JD=0;function e3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function t3(n,e){const t=new ZD,i=QD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new X);const s=new X,o=new cn,a=new cn;function l(c,d){let h=0,p=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let g=0,m=0,f=0,v=0,x=0,y=0,T=0,w=0,M=0,P=0,S=0;c.sort(e3);const E=d===!0?Math.PI:1;for(let N=0,Z=c.length;N<Z;N++){const L=c[N],F=L.color,B=L.intensity,H=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*B*E,p+=F.g*B*E,_+=F.b*B*E;else if(L.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(L.sh.coefficients[k],B);S++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.directionalShadow[g]=$,r.directionalShadowMap[g]=D,r.directionalShadowMatrix[g]=L.shadow.matrix,y++}r.directional[g]=k,g++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(F).multiplyScalar(B*E),k.distance=H,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,r.spot[f]=k;const R=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,R.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=R.matrix,L.castShadow){const $=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=D,w++}f++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(F).multiplyScalar(B),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=k,v++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*E),k.distance=L.distance,k.decay=L.decay,L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=L.shadow.matrix,T++}r.point[m]=k,m++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(B*E),k.groundColor.copy(L.groundColor).multiplyScalar(B*E),r.hemi[x]=k,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==g||I.pointLength!==m||I.spotLength!==f||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==T||I.numSpotShadows!==w||I.numSpotMaps!==M||I.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=w+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,I.directionalLength=g,I.pointLength=m,I.spotLength=f,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=T,I.numSpotShadows=w,I.numSpotMaps=M,I.numLightProbes=S,r.version=JD++)}function u(c,d){let h=0,p=0,_=0,g=0,m=0;const f=d.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),h++}else if(y.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),_++}else if(y.isRectAreaLight){const T=r.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Ix(n,e){const t=new t3(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function n3(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ix(n,e),t.set(s,[l])):o>=a.length?(l=new Ix(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class m1 extends Qu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i3 extends Qu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s3=`uniform sampler2D shadow_pass;
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
}`;function o3(n,e,t){let i=new o1;const r=new Qe,s=new Qe,o=new gn,a=new m1({depthPacking:qE}),l=new i3,u={},c=t.maxTextureSize,d={[Hs]:ai,[ai]:Hs,[Gi]:Gi},h=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:r3,fragmentShader:s3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Di;_.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ti(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=OE;let f=this.type;this.render=function(w,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Cr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Z=f!==Nr&&this.type===Nr,L=f===Nr&&this.type!==Nr;for(let F=0,B=w.length;F<B;F++){const H=w[F],D=H.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const k=D.getFrameExtents();if(r.multiply(k),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/k.x),r.x=s.x*k.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/k.y),r.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null||Z===!0||L===!0){const $=this.type!==Nr?{minFilter:hn,magFilter:hn}:{};D.map!==null&&D.map.dispose(),D.map=new Ci(r.x,r.y,$),D.map.texture.name=H.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const R=D.getViewportCount();for(let $=0;$<R;$++){const Q=D.getViewport($);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),N.viewport(o),D.updateMatrices(H,$),i=D.getFrustum(),y(M,P,D.camera,H,this.type)}D.isPointLightShadow!==!0&&this.type===Nr&&v(D,P),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,I)};function v(w,M){const P=e.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ci(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,P,h,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,P,p,g,null)}function x(w,M,P,S){let E=null;const I=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)E=I;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=E.uuid,Z=M.uuid;let L=u[N];L===void 0&&(L={},u[N]=L);let F=L[Z];F===void 0&&(F=E.clone(),L[Z]=F,M.addEventListener("dispose",T)),E=F}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Nr?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:d[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=n.properties.get(E);N.light=P}return E}function y(w,M,P,S,E){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Nr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const Z=e.update(w),L=w.material;if(Array.isArray(L)){const F=Z.groups;for(let B=0,H=F.length;B<H;B++){const D=F[B],k=L[D.materialIndex];if(k&&k.visible){const R=x(w,k,S,E);w.onBeforeShadow(n,w,M,P,Z,R,D),n.renderBufferDirect(P,null,Z,R,w,D),w.onAfterShadow(n,w,M,P,Z,R,D)}}}else if(L.visible){const F=x(w,L,S,E);w.onBeforeShadow(n,w,M,P,Z,F,null),n.renderBufferDirect(P,null,Z,F,w,null),w.onAfterShadow(n,w,M,P,Z,F,null)}}const N=w.children;for(let Z=0,L=N.length;Z<L;Z++)y(N[Z],M,P,S,E)}function T(w){w.target.removeEventListener("dispose",T);for(const P in u){const S=u[P],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function a3(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const oe=new gn;let ae=null;const Oe=new gn(0,0,0,0);return{setMask:function(Ne){ae!==Ne&&!U&&(n.colorMask(Ne,Ne,Ne,Ne),ae=Ne)},setLocked:function(Ne){U=Ne},setClear:function(Ne,tt,dt,Le,Te){Te===!0&&(Ne*=Le,tt*=Le,dt*=Le),oe.set(Ne,tt,dt,Le),Oe.equals(oe)===!1&&(n.clearColor(Ne,tt,dt,Le),Oe.copy(oe))},reset:function(){U=!1,ae=null,Oe.set(-1,0,0,0)}}}function s(){let U=!1,oe=null,ae=null,Oe=null;return{setTest:function(Ne){Ne?De(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Ne){oe!==Ne&&!U&&(n.depthMask(Ne),oe=Ne)},setFunc:function(Ne){if(ae!==Ne){switch(Ne){case DR:n.depthFunc(n.NEVER);break;case UR:n.depthFunc(n.ALWAYS);break;case NR:n.depthFunc(n.LESS);break;case ad:n.depthFunc(n.LEQUAL);break;case IR:n.depthFunc(n.EQUAL);break;case OR:n.depthFunc(n.GEQUAL);break;case FR:n.depthFunc(n.GREATER);break;case kR:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Ne}},setLocked:function(Ne){U=Ne},setClear:function(Ne){Oe!==Ne&&(n.clearDepth(Ne),Oe=Ne)},reset:function(){U=!1,oe=null,ae=null,Oe=null}}}function o(){let U=!1,oe=null,ae=null,Oe=null,Ne=null,tt=null,dt=null,Le=null,Te=null;return{setTest:function(Fe){U||(Fe?De(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(Fe){oe!==Fe&&!U&&(n.stencilMask(Fe),oe=Fe)},setFunc:function(Fe,le,Ve){(ae!==Fe||Oe!==le||Ne!==Ve)&&(n.stencilFunc(Fe,le,Ve),ae=Fe,Oe=le,Ne=Ve)},setOp:function(Fe,le,Ve){(tt!==Fe||dt!==le||Le!==Ve)&&(n.stencilOp(Fe,le,Ve),tt=Fe,dt=le,Le=Ve)},setLocked:function(Fe){U=Fe},setClear:function(Fe){Te!==Fe&&(n.clearStencil(Fe),Te=Fe)},reset:function(){U=!1,oe=null,ae=null,Oe=null,Ne=null,tt=null,dt=null,Le=null,Te=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,y=null,T=null,w=null,M=null,P=null,S=new at(0,0,0),E=0,I=!1,N=null,Z=null,L=null,F=null,B=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,k=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(R)[1]),D=k>=1):R.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),D=k>=2);let $=null,Q={};const q=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),ie=new gn().fromArray(q),de=new gn().fromArray(K);function he(U,oe,ae,Oe){const Ne=new Uint8Array(4),tt=n.createTexture();n.bindTexture(U,tt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<ae;dt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(oe,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(oe+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return tt}const Ee={};Ee[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(n.DEPTH_TEST),l.setFunc(ad),ke(!1),C(_v),De(n.CULL_FACE),ye(Cr);function De(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Ce(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Xe(U,oe){return p[U]!==oe?(n.bindFramebuffer(U,oe),p[U]=oe,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=oe),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=oe)),!0):!1}function V(U,oe){let ae=g,Oe=!1;if(U)if(ae=_.get(oe),ae===void 0&&(ae=[],_.set(oe,ae)),U.isWebGLMultipleRenderTargets){const Ne=U.texture;if(ae.length!==Ne.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,dt=Ne.length;tt<dt;tt++)ae[tt]=n.COLOR_ATTACHMENT0+tt;ae.length=Ne.length,Oe=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,Oe=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Ye(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const xe={[oo]:n.FUNC_ADD,[_R]:n.FUNC_SUBTRACT,[vR]:n.FUNC_REVERSE_SUBTRACT};if(i)xe[yv]=n.MIN,xe[Sv]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(xe[yv]=U.MIN_EXT,xe[Sv]=U.MAX_EXT)}const Ue={[xR]:n.ZERO,[yR]:n.ONE,[SR]:n.SRC_COLOR,[Cm]:n.SRC_ALPHA,[CR]:n.SRC_ALPHA_SATURATE,[wR]:n.DST_COLOR,[ER]:n.DST_ALPHA,[MR]:n.ONE_MINUS_SRC_COLOR,[Rm]:n.ONE_MINUS_SRC_ALPHA,[AR]:n.ONE_MINUS_DST_COLOR,[TR]:n.ONE_MINUS_DST_ALPHA,[RR]:n.CONSTANT_COLOR,[bR]:n.ONE_MINUS_CONSTANT_COLOR,[PR]:n.CONSTANT_ALPHA,[LR]:n.ONE_MINUS_CONSTANT_ALPHA};function ye(U,oe,ae,Oe,Ne,tt,dt,Le,Te,Fe){if(U===Cr){f===!0&&(Ce(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),U!==gR){if(U!==v||Fe!==I){if((x!==oo||w!==oo)&&(n.blendEquation(n.FUNC_ADD),x=oo,w=oo),Fe)switch(U){case Va:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.ONE,n.ONE);break;case vv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Va:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ds:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,T=null,M=null,P=null,S.set(0,0,0),E=0,v=U,I=Fe}return}Ne=Ne||oe,tt=tt||ae,dt=dt||Oe,(oe!==x||Ne!==w)&&(n.blendEquationSeparate(xe[oe],xe[Ne]),x=oe,w=Ne),(ae!==y||Oe!==T||tt!==M||dt!==P)&&(n.blendFuncSeparate(Ue[ae],Ue[Oe],Ue[tt],Ue[dt]),y=ae,T=Oe,M=tt,P=dt),(Le.equals(S)===!1||Te!==E)&&(n.blendColor(Le.r,Le.g,Le.b,Te),S.copy(Le),E=Te),v=U,I=!1}function G(U,oe){U.side===Gi?Ce(n.CULL_FACE):De(n.CULL_FACE);let ae=U.side===ai;oe&&(ae=!ae),ke(ae),U.blending===Va&&U.transparent===!1?ye(Cr):ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Oe=U.stencilWrite;u.setTest(Oe),Oe&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),O(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(U){N!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),N=U)}function C(U){U!==hR?(De(n.CULL_FACE),U!==Z&&(U===_v?n.cullFace(n.BACK):U===pR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),Z=U}function A(U){U!==L&&(D&&n.lineWidth(U),L=U)}function O(U,oe,ae){U?(De(n.POLYGON_OFFSET_FILL),(F!==oe||B!==ae)&&(n.polygonOffset(oe,ae),F=oe,B=ae)):Ce(n.POLYGON_OFFSET_FILL)}function J(U){U?De(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function te(U){U===void 0&&(U=n.TEXTURE0+H-1),$!==U&&(n.activeTexture(U),$=U)}function ne(U,oe,ae){ae===void 0&&($===null?ae=n.TEXTURE0+H-1:ae=$);let Oe=Q[ae];Oe===void 0&&(Oe={type:void 0,texture:void 0},Q[ae]=Oe),(Oe.type!==U||Oe.texture!==oe)&&($!==ae&&(n.activeTexture(ae),$=ae),n.bindTexture(U,oe||Ee[U]),Oe.type=U,Oe.texture=oe)}function _e(){const U=Q[$];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(U){ie.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ie.copy(U))}function Ze(U){de.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),de.copy(U))}function lt(U,oe){let ae=d.get(oe);ae===void 0&&(ae=new WeakMap,d.set(oe,ae));let Oe=ae.get(U);Oe===void 0&&(Oe=n.getUniformBlockIndex(oe,U.name),ae.set(U,Oe))}function me(U,oe){const Oe=d.get(oe).get(U);c.get(oe)!==Oe&&(n.uniformBlockBinding(oe,Oe,U.__bindingPointIndex),c.set(oe,Oe))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,Q={},p={},_=new WeakMap,g=[],m=null,f=!1,v=null,x=null,y=null,T=null,w=null,M=null,P=null,S=new at(0,0,0),E=0,I=!1,N=null,Z=null,L=null,F=null,B=null,ie.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:Ce,bindFramebuffer:Xe,drawBuffers:V,useProgram:Ye,setBlending:ye,setMaterial:G,setFlipSided:ke,setCullFace:C,setLineWidth:A,setPolygonOffset:O,setScissorTest:J,activeTexture:te,bindTexture:ne,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:ue,texImage2D:Se,texImage3D:ve,updateUBOMapping:lt,uniformBlockBinding:me,texStorage2D:Re,texStorage3D:pe,texSubImage2D:Pe,texSubImage3D:ze,compressedTexSubImage2D:ee,compressedTexSubImage3D:qe,scissor:He,viewport:Ze,reset:se}}function l3(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,A){return p?new OffscreenCanvas(C,A):dd("canvas")}function g(C,A,O,J){let te=1;if((C.width>J||C.height>J)&&(te=J/Math.max(C.width,C.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ne=A?Im:Math.floor,_e=ne(te*C.width),ce=ne(te*C.height);d===void 0&&(d=_(_e,ce));const ue=O?_(_e,ce):d;return ue.width=_e,ue.height=ce,ue.getContext("2d").drawImage(C,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+ce+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Zv(C.width)&&Zv(C.height)}function f(C){return a?!1:C.wrapS!==lr||C.wrapT!==lr||C.minFilter!==hn&&C.minFilter!==$n}function v(C,A){return C.generateMipmaps&&A&&C.minFilter!==hn&&C.minFilter!==$n}function x(C){n.generateMipmap(C)}function y(C,A,O,J,te=!1){if(a===!1)return A;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=A;if(A===n.RED&&(O===n.FLOAT&&(ne=n.R32F),O===n.HALF_FLOAT&&(ne=n.R16F),O===n.UNSIGNED_BYTE&&(ne=n.R8)),A===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(ne=n.R8UI),O===n.UNSIGNED_SHORT&&(ne=n.R16UI),O===n.UNSIGNED_INT&&(ne=n.R32UI),O===n.BYTE&&(ne=n.R8I),O===n.SHORT&&(ne=n.R16I),O===n.INT&&(ne=n.R32I)),A===n.RG&&(O===n.FLOAT&&(ne=n.RG32F),O===n.HALF_FLOAT&&(ne=n.RG16F),O===n.UNSIGNED_BYTE&&(ne=n.RG8)),A===n.RGBA){const _e=te?ld:yt.getTransfer(J);O===n.FLOAT&&(ne=n.RGBA32F),O===n.HALF_FLOAT&&(ne=n.RGBA16F),O===n.UNSIGNED_BYTE&&(ne=_e===Rt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(C,A,O){return v(C,O)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==$n?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function w(C){return C===hn||C===Mv||C===bh?n.NEAREST:n.LINEAR}function M(C){const A=C.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function P(C){const A=C.target;A.removeEventListener("dispose",P),I(A)}function S(C){const A=i.get(C);if(A.__webglInit===void 0)return;const O=C.source,J=h.get(O);if(J){const te=J[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(C),Object.keys(J).length===0&&h.delete(O)}i.remove(C)}function E(C){const A=i.get(C);n.deleteTexture(A.__webglTexture);const O=C.source,J=h.get(O);delete J[A.__cacheKey],o.memory.textures--}function I(C){const A=C.texture,O=i.get(C),J=i.get(A);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(O.__webglFramebuffer[te]))for(let ne=0;ne<O.__webglFramebuffer[te].length;ne++)n.deleteFramebuffer(O.__webglFramebuffer[te][ne]);else n.deleteFramebuffer(O.__webglFramebuffer[te]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[te])}else{if(Array.isArray(O.__webglFramebuffer))for(let te=0;te<O.__webglFramebuffer.length;te++)n.deleteFramebuffer(O.__webglFramebuffer[te]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let te=0;te<O.__webglColorRenderbuffer.length;te++)O.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[te]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let te=0,ne=A.length;te<ne;te++){const _e=i.get(A[te]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(C)}let N=0;function Z(){N=0}function L(){const C=N;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),N+=1,C}function F(C){const A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function B(C,A){const O=i.get(C);if(C.isVideoTexture&&G(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(O,C,A);return}}t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+A)}function H(C,A){const O=i.get(C);if(C.version>0&&O.__version!==C.version){ie(O,C,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+A)}function D(C,A){const O=i.get(C);if(C.version>0&&O.__version!==C.version){ie(O,C,A);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+A)}function k(C,A){const O=i.get(C);if(C.version>0&&O.__version!==C.version){de(O,C,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+A)}const R={[Lm]:n.REPEAT,[lr]:n.CLAMP_TO_EDGE,[Dm]:n.MIRRORED_REPEAT},$={[hn]:n.NEAREST,[Mv]:n.NEAREST_MIPMAP_NEAREST,[bh]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[YR]:n.LINEAR_MIPMAP_NEAREST,[zu]:n.LINEAR_MIPMAP_LINEAR},Q={[rb]:n.NEVER,[cb]:n.ALWAYS,[sb]:n.LESS,[$E]:n.LEQUAL,[ob]:n.EQUAL,[ub]:n.GEQUAL,[ab]:n.GREATER,[lb]:n.NOTEQUAL};function q(C,A,O){if(O?(n.texParameteri(C,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,R[A.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,$[A.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,$[A.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==lr||A.wrapT!==lr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,w(A.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,w(A.minFilter)),A.minFilter!==hn&&A.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===hn||A.minFilter!==bh&&A.minFilter!==zu||A.type===Ss&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===dr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(C,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function K(C,A){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",M));const J=A.source;let te=h.get(J);te===void 0&&(te={},h.set(J,te));const ne=F(A);if(ne!==C.__cacheKey){te[ne]===void 0&&(te[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[ne].usedTimes++;const _e=te[C.__cacheKey];_e!==void 0&&(te[C.__cacheKey].usedTimes--,_e.usedTimes===0&&E(A)),C.__cacheKey=ne,C.__webglTexture=te[ne].texture}return O}function ie(C,A,O){let J=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=n.TEXTURE_3D);const te=K(C,A),ne=A.source;t.bindTexture(J,C.__webglTexture,n.TEXTURE0+O);const _e=i.get(ne);if(ne.version!==_e.__version||te===!0){t.activeTexture(n.TEXTURE0+O);const ce=yt.getPrimaries(yt.workingColorSpace),ue=A.colorSpace===Xi?null:yt.getPrimaries(A.colorSpace),Pe=A.colorSpace===Xi||ce===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ze=f(A)&&m(A.image)===!1;let ee=g(A.image,ze,!1,r.maxTextureSize);ee=ke(A,ee);const qe=m(ee)||a,Re=s.convert(A.format,A.colorSpace);let pe=s.convert(A.type),Se=y(A.internalFormat,Re,pe,A.colorSpace,A.isVideoTexture);q(J,A,qe);let ve;const He=A.mipmaps,Ze=a&&A.isVideoTexture!==!0&&Se!==YE,lt=_e.__version===void 0||te===!0,me=T(A,ee,qe);if(A.isDepthTexture)Se=n.DEPTH_COMPONENT,a?A.type===Ss?Se=n.DEPTH_COMPONENT32F:A.type===ys?Se=n.DEPTH_COMPONENT24:A.type===Ao?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:A.type===Ss&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Co&&Se===n.DEPTH_COMPONENT&&A.type!==f_&&A.type!==ys&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ys,pe=s.convert(A.type)),A.format===sl&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,A.type!==Ao&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ao,pe=s.convert(A.type))),lt&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Se,ee.width,ee.height,0,Re,pe,null));else if(A.isDataTexture)if(He.length>0&&qe){Ze&&lt&&t.texStorage2D(n.TEXTURE_2D,me,Se,He[0].width,He[0].height);for(let se=0,U=He.length;se<U;se++)ve=He[se],Ze?t.texSubImage2D(n.TEXTURE_2D,se,0,0,ve.width,ve.height,Re,pe,ve.data):t.texImage2D(n.TEXTURE_2D,se,Se,ve.width,ve.height,0,Re,pe,ve.data);A.generateMipmaps=!1}else Ze?(lt&&t.texStorage2D(n.TEXTURE_2D,me,Se,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Re,pe,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Se,ee.width,ee.height,0,Re,pe,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ze&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Se,He[0].width,He[0].height,ee.depth);for(let se=0,U=He.length;se<U;se++)ve=He[se],A.format!==Wi?Re!==null?Ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,ee.depth,Re,ve.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,Se,ve.width,ve.height,ee.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ve.width,ve.height,ee.depth,Re,pe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,Se,ve.width,ve.height,ee.depth,0,Re,pe,ve.data)}else{Ze&&lt&&t.texStorage2D(n.TEXTURE_2D,me,Se,He[0].width,He[0].height);for(let se=0,U=He.length;se<U;se++)ve=He[se],A.format!==Wi?Re!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,se,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(n.TEXTURE_2D,se,0,0,ve.width,ve.height,Re,pe,ve.data):t.texImage2D(n.TEXTURE_2D,se,Se,ve.width,ve.height,0,Re,pe,ve.data)}else if(A.isDataArrayTexture)Ze?(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Se,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Re,pe,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,Re,pe,ee.data);else if(A.isData3DTexture)Ze?(lt&&t.texStorage3D(n.TEXTURE_3D,me,Se,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Re,pe,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,Re,pe,ee.data);else if(A.isFramebufferTexture){if(lt)if(Ze)t.texStorage2D(n.TEXTURE_2D,me,Se,ee.width,ee.height);else{let se=ee.width,U=ee.height;for(let oe=0;oe<me;oe++)t.texImage2D(n.TEXTURE_2D,oe,Se,se,U,0,Re,pe,null),se>>=1,U>>=1}}else if(He.length>0&&qe){Ze&&lt&&t.texStorage2D(n.TEXTURE_2D,me,Se,He[0].width,He[0].height);for(let se=0,U=He.length;se<U;se++)ve=He[se],Ze?t.texSubImage2D(n.TEXTURE_2D,se,0,0,Re,pe,ve):t.texImage2D(n.TEXTURE_2D,se,Se,Re,pe,ve);A.generateMipmaps=!1}else Ze?(lt&&t.texStorage2D(n.TEXTURE_2D,me,Se,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,pe,ee)):t.texImage2D(n.TEXTURE_2D,0,Se,Re,pe,ee);v(A,qe)&&x(J),_e.__version=ne.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function de(C,A,O){if(A.image.length!==6)return;const J=K(C,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+O);const ne=i.get(te);if(te.version!==ne.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const _e=yt.getPrimaries(yt.workingColorSpace),ce=A.colorSpace===Xi?null:yt.getPrimaries(A.colorSpace),ue=A.colorSpace===Xi||_e===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Pe=A.isCompressedTexture||A.image[0].isCompressedTexture,ze=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let se=0;se<6;se++)!Pe&&!ze?ee[se]=g(A.image[se],!1,!0,r.maxCubemapSize):ee[se]=ze?A.image[se].image:A.image[se],ee[se]=ke(A,ee[se]);const qe=ee[0],Re=m(qe)||a,pe=s.convert(A.format,A.colorSpace),Se=s.convert(A.type),ve=y(A.internalFormat,pe,Se,A.colorSpace),He=a&&A.isVideoTexture!==!0,Ze=ne.__version===void 0||J===!0;let lt=T(A,qe,Re);q(n.TEXTURE_CUBE_MAP,A,Re);let me;if(Pe){He&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,ve,qe.width,qe.height);for(let se=0;se<6;se++){me=ee[se].mipmaps;for(let U=0;U<me.length;U++){const oe=me[U];A.format!==Wi?pe!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,0,0,oe.width,oe.height,pe,oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,ve,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,0,0,oe.width,oe.height,pe,Se,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,ve,oe.width,oe.height,0,pe,Se,oe.data)}}}else{me=A.mipmaps,He&&Ze&&(me.length>0&&lt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,ve,ee[0].width,ee[0].height));for(let se=0;se<6;se++)if(ze){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ee[se].width,ee[se].height,pe,Se,ee[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ve,ee[se].width,ee[se].height,0,pe,Se,ee[se].data);for(let U=0;U<me.length;U++){const ae=me[U].image[se].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,0,0,ae.width,ae.height,pe,Se,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,ve,ae.width,ae.height,0,pe,Se,ae.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe,Se,ee[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ve,pe,Se,ee[se]);for(let U=0;U<me.length;U++){const oe=me[U];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,0,0,pe,Se,oe.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,ve,pe,Se,oe.image[se])}}}v(A,Re)&&x(n.TEXTURE_CUBE_MAP),ne.__version=te.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function he(C,A,O,J,te,ne){const _e=s.convert(O.format,O.colorSpace),ce=s.convert(O.type),ue=y(O.internalFormat,_e,ce,O.colorSpace);if(!i.get(A).__hasExternalTextures){const ze=Math.max(1,A.width>>ne),ee=Math.max(1,A.height>>ne);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,ue,ze,ee,A.depth,0,_e,ce,null):t.texImage2D(te,ne,ue,ze,ee,0,_e,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ye(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,te,i.get(O).__webglTexture,0,Ue(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,te,i.get(O).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(C,A,O){if(n.bindRenderbuffer(n.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||ye(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===Ss?J=n.DEPTH_COMPONENT32F:te.type===ys&&(J=n.DEPTH_COMPONENT24));const ne=Ue(A);ye(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,J,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,J,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){const J=Ue(A);O&&ye(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,A.width,A.height):ye(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const J=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<J.length;te++){const ne=J[te],_e=s.convert(ne.format,ne.colorSpace),ce=s.convert(ne.type),ue=y(ne.internalFormat,_e,ce,ne.colorSpace),Pe=Ue(A);O&&ye(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ue,A.width,A.height):ye(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,ue,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,ue,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const J=i.get(A.depthTexture).__webglTexture,te=Ue(A);if(A.depthTexture.format===Co)ye(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(A.depthTexture.format===sl)ye(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const A=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");De(A.__webglFramebuffer,C)}else if(O){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]=n.createRenderbuffer(),Ee(A.__webglDepthbuffer[J],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Ee(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(C,A,O){const J=i.get(C);A!==void 0&&he(J.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ce(C)}function V(C){const A=C.texture,O=i.get(C),J=i.get(A);C.addEventListener("dispose",P),C.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=A.version,o.memory.textures++);const te=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,_e=m(C)||a;if(te){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ue=0;ue<A.mipmaps.length;ue++)O.__webglFramebuffer[ce][ue]=n.createFramebuffer()}else O.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)O.__webglFramebuffer[ce]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const ce=C.texture;for(let ue=0,Pe=ce.length;ue<Pe;ue++){const ze=i.get(ce[ue]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ye(C)===!1){const ce=ne?A:[A];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<ce.length;ue++){const Pe=ce[ue];O.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const ze=s.convert(Pe.format,Pe.colorSpace),ee=s.convert(Pe.type),qe=y(Pe.internalFormat,ze,ee,Pe.colorSpace,C.isXRRenderTarget===!0),Re=Ue(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,qe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),q(n.TEXTURE_CUBE_MAP,A,_e);for(let ce=0;ce<6;ce++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)he(O.__webglFramebuffer[ce][ue],C,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ue);else he(O.__webglFramebuffer[ce],C,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);v(A,_e)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ce=C.texture;for(let ue=0,Pe=ce.length;ue<Pe;ue++){const ze=ce[ue],ee=i.get(ze);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),q(n.TEXTURE_2D,ze,_e),he(O.__webglFramebuffer,C,ze,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),v(ze,_e)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ce=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,J.__webglTexture),q(ce,A,_e),a&&A.mipmaps&&A.mipmaps.length>0)for(let ue=0;ue<A.mipmaps.length;ue++)he(O.__webglFramebuffer[ue],C,A,n.COLOR_ATTACHMENT0,ce,ue);else he(O.__webglFramebuffer,C,A,n.COLOR_ATTACHMENT0,ce,0);v(A,_e)&&x(ce),t.unbindTexture()}C.depthBuffer&&Ce(C)}function Ye(C){const A=m(C)||a,O=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let J=0,te=O.length;J<te;J++){const ne=O[J];if(v(ne,A)){const _e=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ce=i.get(ne).__webglTexture;t.bindTexture(_e,ce),x(_e),t.unbindTexture()}}}function xe(C){if(a&&C.samples>0&&ye(C)===!1){const A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],O=C.width,J=C.height;let te=n.COLOR_BUFFER_BIT;const ne=[],_e=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(C),ue=C.isWebGLMultipleRenderTargets===!0;if(ue)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){ne.push(n.COLOR_ATTACHMENT0+Pe),C.depthBuffer&&ne.push(_e);const ze=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(ze===!1&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Pe]),ze===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),ue){const ee=i.get(A[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,ce.__webglColorRenderbuffer[Pe]);const ze=i.get(A[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function Ue(C){return Math.min(r.maxSamples,C.samples)}function ye(C){const A=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function G(C){const A=o.render.frame;c.get(C)!==A&&(c.set(C,A),C.update())}function ke(C,A){const O=C.colorSpace,J=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Um||O!==Qr&&O!==Xi&&(yt.getTransfer(O)===Rt?a===!1?e.has("EXT_sRGB")===!0&&J===Wi?(C.format=Um,C.minFilter=$n,C.generateMipmaps=!1):A=ZE.sRGBToLinear(A):(J!==Wi||te!==Ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),A}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=D,this.setTextureCube=k,this.rebindTextures=Xe,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ye}function u3(n,e,t){const i=t.isWebGL2;function r(s,o=Xi){let a;const l=yt.getTransfer(o);if(s===Ns)return n.UNSIGNED_BYTE;if(s===HE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===VE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===jR)return n.BYTE;if(s===qR)return n.SHORT;if(s===f_)return n.UNSIGNED_SHORT;if(s===BE)return n.INT;if(s===ys)return n.UNSIGNED_INT;if(s===Ss)return n.FLOAT;if(s===dr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$R)return n.ALPHA;if(s===Wi)return n.RGBA;if(s===KR)return n.LUMINANCE;if(s===ZR)return n.LUMINANCE_ALPHA;if(s===Co)return n.DEPTH_COMPONENT;if(s===sl)return n.DEPTH_STENCIL;if(s===Um)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===QR)return n.RED;if(s===GE)return n.RED_INTEGER;if(s===JR)return n.RG;if(s===WE)return n.RG_INTEGER;if(s===XE)return n.RGBA_INTEGER;if(s===Ph||s===Lh||s===Dh||s===Uh)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ph)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Dh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ph)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Dh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ev||s===Tv||s===wv||s===Av)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ev)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Tv)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Av)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===YE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Cv||s===Rv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Cv)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Rv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bv||s===Pv||s===Lv||s===Dv||s===Uv||s===Nv||s===Iv||s===Ov||s===Fv||s===kv||s===zv||s===Bv||s===Hv||s===Vv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Pv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Uv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Nv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Iv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ov)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Fv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vv)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nh||s===Gv||s===Wv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Nh)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===eb||s===Xv||s===Yv||s===jv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Nh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Xv)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ao?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class c3 extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jc extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f3={type:"move"};class sp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class d3 extends fl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,_=null;const g=t.getContextAttributes();let m=null,f=null;const v=[],x=[],y=new Qe;let T=null;const w=new Vi;w.layers.enable(1),w.viewport=new gn;const M=new Vi;M.layers.enable(2),M.viewport=new gn;const P=[w,M],S=new c3;S.layers.enable(1),S.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=v[q];return K===void 0&&(K=new sp,v[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=v[q];return K===void 0&&(K=new sp,v[q]=K),K.getGripSpace()},this.getHand=function(q){let K=v[q];return K===void 0&&(K=new sp,v[q]=K),K.getHandSpace()};function N(q){const K=x.indexOf(q.inputSource);if(K===-1)return;const ie=v[K];ie!==void 0&&(ie.update(q.inputSource,q.frame,u||o),ie.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let q=0;q<v.length;q++){const K=x[q];K!==null&&(x[q]=null,v[q].disconnect(K))}E=null,I=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ci(p.framebufferWidth,p.framebufferHeight,{format:Wi,type:Ns,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,ie=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?sl:Co,ie=g.stencil?Ao:ys);const he={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(he),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Ci(h.textureWidth,h.textureHeight,{format:Wi,type:Ns,depthTexture:new u1(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ee=e.properties.get(f);Ee.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let K=0;K<q.removed.length;K++){const ie=q.removed[K],de=x.indexOf(ie);de>=0&&(x[de]=null,v[de].disconnect(ie))}for(let K=0;K<q.added.length;K++){const ie=q.added[K];let de=x.indexOf(ie);if(de===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=x.length){x.push(ie),de=Ee;break}else if(x[Ee]===null){x[Ee]=ie,de=Ee;break}if(de===-1)break}const he=v[de];he&&he.connect(ie)}}const F=new X,B=new X;function H(q,K,ie){F.setFromMatrixPosition(K.matrixWorld),B.setFromMatrixPosition(ie.matrixWorld);const de=F.distanceTo(B),he=K.projectionMatrix.elements,Ee=ie.projectionMatrix.elements,De=he[14]/(he[10]-1),Ce=he[14]/(he[10]+1),Xe=(he[9]+1)/he[5],V=(he[9]-1)/he[5],Ye=(he[8]-1)/he[0],xe=(Ee[8]+1)/Ee[0],Ue=De*Ye,ye=De*xe,G=de/(-Ye+xe),ke=G*-Ye;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ke),q.translateZ(G),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const C=De+G,A=Ce+G,O=Ue-ke,J=ye+(de-ke),te=Xe*Ce/A*C,ne=V*Ce/A*C;q.projectionMatrix.makePerspective(O,J,te,ne,C,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function D(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=M.near=w.near=q.near,S.far=M.far=w.far=q.far,(E!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,I=S.far);const K=q.parent,ie=S.cameras;D(S,K);for(let de=0;de<ie.length;de++)D(ie[de],K);ie.length===2?H(S,w,M):S.projectionMatrix.copy(w.projectionMatrix),k(q,S,K)};function k(q,K,ie){ie===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ie.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Nm*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let R=null;function $(q,K){if(c=K.getViewerPose(u||o),_=K,c!==null){const ie=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let de=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let he=0;he<ie.length;he++){const Ee=ie[he];let De=null;if(p!==null)De=p.getViewport(Ee);else{const Xe=d.getViewSubImage(h,Ee);De=Xe.viewport,he===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let Ce=P[he];Ce===void 0&&(Ce=new Vi,Ce.layers.enable(he),Ce.viewport=new gn,P[he]=Ce),Ce.matrix.fromArray(Ee.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ee.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(De.x,De.y,De.width,De.height),he===0&&(S.matrix.copy(Ce.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(Ce)}}for(let ie=0;ie<v.length;ie++){const de=x[ie],he=v[ie];de!==null&&he!==void 0&&he.update(de,K,u||o)}R&&R(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Q=new a1;Q.setAnimationLoop($),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}}function h3(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,i1(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ai&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ai&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ai&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function p3(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const T=x.program;i.updateUBOMapping(v,T);const w=e.render.frame;s[v.id]!==w&&(h(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),T=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const x=r[v.id],y=v.uniforms,T=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=y.length;w<M;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,E=P.length;S<E;S++){const I=P[S];if(p(I,w,S,T)===!0){const N=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let F=0;F<Z.length;F++){const B=Z[F],H=g(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+L,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,T){const w=v.value,M=x+"_"+y;if(T[M]===void 0)return typeof w=="number"||typeof w=="boolean"?T[M]=w:T[M]=w.clone(),!0;{const P=T[M];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return T[M]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function _(v){const x=v.uniforms;let y=0;const T=16;for(let M=0,P=x.length;M<P;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,I=S.length;E<I;E++){const N=S[E],Z=Array.isArray(N.value)?N.value:[N.value];for(let L=0,F=Z.length;L<F;L++){const B=Z[L],H=g(B),D=y%T;D!==0&&T-D<H.boundary&&(y+=T-D),N.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=H.storage}}}const w=y%T;return w>0&&(y+=T-w),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class g1{constructor(e={}){const{canvas:t=db(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this._useLegacyLights=!1,this.toneMapping=Us,this.toneMappingExposure=1;const x=this;let y=!1,T=0,w=0,M=null,P=-1,S=null;const E=new gn,I=new gn;let N=null;const Z=new at(0);let L=0,F=t.width,B=t.height,H=1,D=null,k=null;const R=new gn(0,0,F,B),$=new gn(0,0,F,B);let Q=!1;const q=new o1;let K=!1,ie=!1,de=null;const he=new cn,Ee=new Qe,De=new X,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xe(){return M===null?H:1}let V=i;function Ye(b,z){for(let j=0;j<b.length;j++){const Y=b[j],W=t.getContext(Y,z);if(W!==null)return W}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${c_}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",oe,!1),V===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),V=Ye(z,b),V===null)throw Ye(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xe,Ue,ye,G,ke,C,A,O,J,te,ne,_e,ce,ue,Pe,ze,ee,qe,Re,pe,Se,ve,He,Ze;function lt(){xe=new wL(V),Ue=new xL(V,xe,e),xe.init(Ue),ve=new u3(V,xe,Ue),ye=new a3(V,xe,Ue),G=new RL(V),ke=new qD,C=new l3(V,xe,ye,ke,Ue,ve,G),A=new SL(x),O=new TL(x),J=new Ob(V,Ue),He=new _L(V,xe,J,Ue),te=new AL(V,J,G,He),ne=new DL(V,te,J,G),Re=new LL(V,Ue,C),ze=new yL(ke),_e=new jD(x,A,O,xe,Ue,He,ze),ce=new h3(x,ke),ue=new KD,Pe=new n3(xe,Ue),qe=new gL(x,A,O,ye,ne,h,l),ee=new o3(x,ne,Ue),Ze=new p3(V,G,Ue,ye),pe=new vL(V,xe,G,Ue),Se=new CL(V,xe,G,Ue),G.programs=_e.programs,x.capabilities=Ue,x.extensions=xe,x.properties=ke,x.renderLists=ue,x.shadowMap=ee,x.state=ye,x.info=G}lt();const me=new d3(x,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(F,B,!1))},this.getSize=function(b){return b.set(F,B)},this.setSize=function(b,z,j=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,B=z,t.width=Math.floor(b*H),t.height=Math.floor(z*H),j===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(F*H,B*H).floor()},this.setDrawingBufferSize=function(b,z,j){F=b,B=z,H=j,t.width=Math.floor(b*j),t.height=Math.floor(z*j),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(R)},this.setViewport=function(b,z,j,Y){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,z,j,Y),ye.viewport(E.copy(R).multiplyScalar(H).floor())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,z,j,Y){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,z,j,Y),ye.scissor(I.copy($).multiplyScalar(H).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){ye.setScissorTest(Q=b)},this.setOpaqueSort=function(b){D=b},this.setTransparentSort=function(b){k=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(b=!0,z=!0,j=!0){let Y=0;if(b){let W=!1;if(M!==null){const fe=M.texture.format;W=fe===XE||fe===WE||fe===GE}if(W){const fe=M.texture.type,Ae=fe===Ns||fe===ys||fe===f_||fe===Ao||fe===HE||fe===VE,Ge=qe.getClearColor(),be=qe.getClearAlpha(),Ie=Ge.r,We=Ge.g,Ke=Ge.b;Ae?(p[0]=Ie,p[1]=We,p[2]=Ke,p[3]=be,V.clearBufferuiv(V.COLOR,0,p)):(_[0]=Ie,_[1]=We,_[2]=Ke,_[3]=be,V.clearBufferiv(V.COLOR,0,_))}else Y|=V.COLOR_BUFFER_BIT}z&&(Y|=V.DEPTH_BUFFER_BIT),j&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ue.dispose(),Pe.dispose(),ke.dispose(),A.dispose(),O.dispose(),ne.dispose(),He.dispose(),Ze.dispose(),_e.dispose(),me.dispose(),me.removeEventListener("sessionstart",Te),me.removeEventListener("sessionend",Fe),de&&(de.dispose(),de=null),le.stop()};function se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=G.autoReset,z=ee.enabled,j=ee.autoUpdate,Y=ee.needsUpdate,W=ee.type;lt(),G.autoReset=b,ee.enabled=z,ee.autoUpdate=j,ee.needsUpdate=Y,ee.type=W}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){const z=b.target;z.removeEventListener("dispose",ae),Oe(z)}function Oe(b){Ne(b),ke.remove(b)}function Ne(b){const z=ke.get(b).programs;z!==void 0&&(z.forEach(function(j){_e.releaseProgram(j)}),b.isShaderMaterial&&_e.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,j,Y,W,fe){z===null&&(z=Ce);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,Ge=Tt(b,z,j,Y,W);ye.setMaterial(Y,Ae);let be=j.index,Ie=1;if(Y.wireframe===!0){if(be=te.getWireframeAttribute(j),be===void 0)return;Ie=2}const We=j.drawRange,Ke=j.attributes.position;let Pt=We.start*Ie,Zt=(We.start+We.count)*Ie;fe!==null&&(Pt=Math.max(Pt,fe.start*Ie),Zt=Math.min(Zt,(fe.start+fe.count)*Ie)),be!==null?(Pt=Math.max(Pt,0),Zt=Math.min(Zt,be.count)):Ke!=null&&(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Ke.count));const gt=Zt-Pt;if(gt<0||gt===1/0)return;He.setup(W,Y,Ge,j,be);let Dn,xt=pe;if(be!==null&&(Dn=J.get(be),xt=Se,xt.setIndex(Dn)),W.isMesh)Y.wireframe===!0?(ye.setLineWidth(Y.wireframeLinewidth*Xe()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(W.isLine){let je=Y.linewidth;je===void 0&&(je=1),ye.setLineWidth(je*Xe()),W.isLineSegments?xt.setMode(V.LINES):W.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else W.isPoints?xt.setMode(V.POINTS):W.isSprite&&xt.setMode(V.TRIANGLES);if(W.isBatchedMesh)xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)xt.renderInstances(Pt,gt,W.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,zd=Math.min(j.instanceCount,je);xt.renderInstances(Pt,gt,zd)}else xt.render(Pt,gt)};function tt(b,z,j){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=ai,b.needsUpdate=!0,Et(b,z,j),b.side=Hs,b.needsUpdate=!0,Et(b,z,j),b.side=Gi):Et(b,z,j)}this.compile=function(b,z,j=null){j===null&&(j=b),m=Pe.get(j),m.init(),v.push(m),j.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),b!==j&&b.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);const Y=new Set;return b.traverse(function(W){const fe=W.material;if(fe)if(Array.isArray(fe))for(let Ae=0;Ae<fe.length;Ae++){const Ge=fe[Ae];tt(Ge,j,W),Y.add(Ge)}else tt(fe,j,W),Y.add(fe)}),v.pop(),m=null,Y},this.compileAsync=function(b,z,j=null){const Y=this.compile(b,z,j);return new Promise(W=>{function fe(){if(Y.forEach(function(Ae){ke.get(Ae).currentProgram.isReady()&&Y.delete(Ae)}),Y.size===0){W(b);return}setTimeout(fe,10)}xe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let dt=null;function Le(b){dt&&dt(b)}function Te(){le.stop()}function Fe(){le.start()}const le=new a1;le.setAnimationLoop(Le),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(b){dt=b,me.setAnimationLoop(b),b===null?le.stop():le.start()},me.addEventListener("sessionstart",Te),me.addEventListener("sessionend",Fe),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(z),z=me.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,z,M),m=Pe.get(b,v.length),m.init(),v.push(m),he.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(he),ie=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ie),g=ue.get(b,f.length),g.init(),f.push(g),Ve(b,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(D,k),this.info.render.frame++,K===!0&&ze.beginShadows();const j=m.state.shadowsArray;if(ee.render(j,b,z),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(g,b),m.setupLights(x._useLegacyLights),z.isArrayCamera){const Y=z.cameras;for(let W=0,fe=Y.length;W<fe;W++){const Ae=Y[W];Be(g,b,Ae,Ae.viewport)}}else Be(g,b,z);M!==null&&(C.updateMultisampleRenderTarget(M),C.updateRenderTargetMipmap(M)),b.isScene===!0&&b.onAfterRender(x,b,z),He.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function Ve(b,z,j,Y){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){Y&&De.setFromMatrixPosition(b.matrixWorld).applyMatrix4(he);const Ae=ne.update(b),Ge=b.material;Ge.visible&&g.push(b,Ae,Ge,j,De.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const Ae=ne.update(b),Ge=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),De.copy(b.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),De.copy(Ae.boundingSphere.center)),De.applyMatrix4(b.matrixWorld).applyMatrix4(he)),Array.isArray(Ge)){const be=Ae.groups;for(let Ie=0,We=be.length;Ie<We;Ie++){const Ke=be[Ie],Pt=Ge[Ke.materialIndex];Pt&&Pt.visible&&g.push(b,Ae,Pt,j,De.z,Ke)}}else Ge.visible&&g.push(b,Ae,Ge,j,De.z,null)}}const fe=b.children;for(let Ae=0,Ge=fe.length;Ae<Ge;Ae++)Ve(fe[Ae],z,j,Y)}function Be(b,z,j,Y){const W=b.opaque,fe=b.transmissive,Ae=b.transparent;m.setupLightsView(j),K===!0&&ze.setGlobalState(x.clippingPlanes,j),fe.length>0&&$e(W,fe,z,j),Y&&ye.viewport(E.copy(Y)),W.length>0&&Ut(W,z,j),fe.length>0&&Ut(fe,z,j),Ae.length>0&&Ut(Ae,z,j),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function $e(b,z,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const fe=Ue.isWebGL2;de===null&&(de=new Ci(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?dr:Ns,minFilter:zu,samples:fe?4:0})),x.getDrawingBufferSize(Ee),fe?de.setSize(Ee.x,Ee.y):de.setSize(Im(Ee.x),Im(Ee.y));const Ae=x.getRenderTarget();x.setRenderTarget(de),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ge=x.toneMapping;x.toneMapping=Us,Ut(b,j,Y),C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de);let be=!1;for(let Ie=0,We=z.length;Ie<We;Ie++){const Ke=z[Ie],Pt=Ke.object,Zt=Ke.geometry,gt=Ke.material,Dn=Ke.group;if(gt.side===Gi&&Pt.layers.test(Y.layers)){const xt=gt.side;gt.side=ai,gt.needsUpdate=!0,it(Pt,j,Y,Zt,gt,Dn),gt.side=xt,gt.needsUpdate=!0,be=!0}}be===!0&&(C.updateMultisampleRenderTarget(de),C.updateRenderTargetMipmap(de)),x.setRenderTarget(Ae),x.setClearColor(Z,L),x.toneMapping=Ge}function Ut(b,z,j){const Y=z.isScene===!0?z.overrideMaterial:null;for(let W=0,fe=b.length;W<fe;W++){const Ae=b[W],Ge=Ae.object,be=Ae.geometry,Ie=Y===null?Ae.material:Y,We=Ae.group;Ge.layers.test(j.layers)&&it(Ge,z,j,be,Ie,We)}}function it(b,z,j,Y,W,fe){b.onBeforeRender(x,z,j,Y,W,fe),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(x,z,j,Y,b,fe),W.transparent===!0&&W.side===Gi&&W.forceSinglePass===!1?(W.side=ai,W.needsUpdate=!0,x.renderBufferDirect(j,z,Y,W,b,fe),W.side=Hs,W.needsUpdate=!0,x.renderBufferDirect(j,z,Y,W,b,fe),W.side=Gi):x.renderBufferDirect(j,z,Y,W,b,fe),b.onAfterRender(x,z,j,Y,W,fe)}function Et(b,z,j){z.isScene!==!0&&(z=Ce);const Y=ke.get(b),W=m.state.lights,fe=m.state.shadowsArray,Ae=W.state.version,Ge=_e.getParameters(b,W.state,fe,z,j),be=_e.getProgramCacheKey(Ge);let Ie=Y.programs;Y.environment=b.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(b.isMeshStandardMaterial?O:A).get(b.envMap||Y.environment),Ie===void 0&&(b.addEventListener("dispose",ae),Ie=new Map,Y.programs=Ie);let We=Ie.get(be);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===Ae)return At(b,Ge),We}else Ge.uniforms=_e.getUniforms(b),b.onBuild(j,Ge,x),b.onBeforeCompile(Ge,x),We=_e.acquireProgram(Ge,be),Ie.set(be,We),Y.uniforms=Ge.uniforms;const Ke=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=ze.uniform),At(b,Ge),Y.needsLights=fi(b),Y.lightsStateVersion=Ae,Y.needsLights&&(Ke.ambientLightColor.value=W.state.ambient,Ke.lightProbe.value=W.state.probe,Ke.directionalLights.value=W.state.directional,Ke.directionalLightShadows.value=W.state.directionalShadow,Ke.spotLights.value=W.state.spot,Ke.spotLightShadows.value=W.state.spotShadow,Ke.rectAreaLights.value=W.state.rectArea,Ke.ltc_1.value=W.state.rectAreaLTC1,Ke.ltc_2.value=W.state.rectAreaLTC2,Ke.pointLights.value=W.state.point,Ke.pointLightShadows.value=W.state.pointShadow,Ke.hemisphereLights.value=W.state.hemi,Ke.directionalShadowMap.value=W.state.directionalShadowMap,Ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ke.spotShadowMap.value=W.state.spotShadowMap,Ke.spotLightMatrix.value=W.state.spotLightMatrix,Ke.spotLightMap.value=W.state.spotLightMap,Ke.pointShadowMap.value=W.state.pointShadowMap,Ke.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=We,Y.uniformsList=null,We}function Kt(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Tf.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function At(b,z){const j=ke.get(b);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Tt(b,z,j,Y,W){z.isScene!==!0&&(z=Ce),C.resetTextureUnits();const fe=z.fog,Ae=Y.isMeshStandardMaterial?z.environment:null,Ge=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Qr,be=(Y.isMeshStandardMaterial?O:A).get(Y.envMap||Ae),Ie=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,We=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ke=!!j.morphAttributes.position,Pt=!!j.morphAttributes.normal,Zt=!!j.morphAttributes.color;let gt=Us;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(gt=x.toneMapping);const Dn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=Dn!==void 0?Dn.length:0,je=ke.get(Y),zd=m.state.lights;if(K===!0&&(ie===!0||b!==S)){const Ii=b===S&&Y.id===P;ze.setState(Y,b,Ii)}let Bt=!1;Y.version===je.__version?(je.needsLights&&je.lightsStateVersion!==zd.state.version||je.outputColorSpace!==Ge||W.isBatchedMesh&&je.batching===!1||!W.isBatchedMesh&&je.batching===!0||W.isInstancedMesh&&je.instancing===!1||!W.isInstancedMesh&&je.instancing===!0||W.isSkinnedMesh&&je.skinning===!1||!W.isSkinnedMesh&&je.skinning===!0||W.isInstancedMesh&&je.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&je.instancingColor===!1&&W.instanceColor!==null||je.envMap!==be||Y.fog===!0&&je.fog!==fe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ze.numPlanes||je.numIntersection!==ze.numIntersection)||je.vertexAlphas!==Ie||je.vertexTangents!==We||je.morphTargets!==Ke||je.morphNormals!==Pt||je.morphColors!==Zt||je.toneMapping!==gt||Ue.isWebGL2===!0&&je.morphTargetsCount!==xt)&&(Bt=!0):(Bt=!0,je.__version=Y.version);let Ys=je.currentProgram;Bt===!0&&(Ys=Et(Y,z,W));let x_=!1,pl=!1,Bd=!1;const yn=Ys.getUniforms(),js=je.uniforms;if(ye.useProgram(Ys.program)&&(x_=!0,pl=!0,Bd=!0),Y.id!==P&&(P=Y.id,pl=!0),x_||S!==b){yn.setValue(V,"projectionMatrix",b.projectionMatrix),yn.setValue(V,"viewMatrix",b.matrixWorldInverse);const Ii=yn.map.cameraPosition;Ii!==void 0&&Ii.setValue(V,De.setFromMatrixPosition(b.matrixWorld)),Ue.logarithmicDepthBuffer&&yn.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yn.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,pl=!0,Bd=!0)}if(W.isSkinnedMesh){yn.setOptional(V,W,"bindMatrix"),yn.setOptional(V,W,"bindMatrixInverse");const Ii=W.skeleton;Ii&&(Ue.floatVertexTextures?(Ii.boneTexture===null&&Ii.computeBoneTexture(),yn.setValue(V,"boneTexture",Ii.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(yn.setOptional(V,W,"batchingTexture"),yn.setValue(V,"batchingTexture",W._matricesTexture,C));const Hd=j.morphAttributes;if((Hd.position!==void 0||Hd.normal!==void 0||Hd.color!==void 0&&Ue.isWebGL2===!0)&&Re.update(W,j,Ys),(pl||je.receiveShadow!==W.receiveShadow)&&(je.receiveShadow=W.receiveShadow,yn.setValue(V,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(js.envMap.value=be,js.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),pl&&(yn.setValue(V,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&mt(js,Bd),fe&&Y.fog===!0&&ce.refreshFogUniforms(js,fe),ce.refreshMaterialUniforms(js,Y,H,B,de),Tf.upload(V,Kt(je),js,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Tf.upload(V,Kt(je),js,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yn.setValue(V,"center",W.center),yn.setValue(V,"modelViewMatrix",W.modelViewMatrix),yn.setValue(V,"normalMatrix",W.normalMatrix),yn.setValue(V,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ii=Y.uniformsGroups;for(let Vd=0,y1=Ii.length;Vd<y1;Vd++)if(Ue.isWebGL2){const y_=Ii[Vd];Ze.update(y_,Ys),Ze.bind(y_,Ys)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ys}function mt(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function fi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(b,z,j){ke.get(b.texture).__webglTexture=z,ke.get(b.depthTexture).__webglTexture=j;const Y=ke.get(b);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const j=ke.get(b);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,j=0){M=b,T=z,w=j;let Y=!0,W=null,fe=!1,Ae=!1;if(b){const be=ke.get(b);be.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(V.FRAMEBUFFER,null),Y=!1):be.__webglFramebuffer===void 0?C.setupRenderTarget(b):be.__hasExternalTextures&&C.rebindTextures(b,ke.get(b.texture).__webglTexture,ke.get(b.depthTexture).__webglTexture);const Ie=b.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ae=!0);const We=ke.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[z])?W=We[z][j]:W=We[z],fe=!0):Ue.isWebGL2&&b.samples>0&&C.useMultisampledRTT(b)===!1?W=ke.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?W=We[j]:W=We,E.copy(b.viewport),I.copy(b.scissor),N=b.scissorTest}else E.copy(R).multiplyScalar(H).floor(),I.copy($).multiplyScalar(H).floor(),N=Q;if(ye.bindFramebuffer(V.FRAMEBUFFER,W)&&Ue.drawBuffers&&Y&&ye.drawBuffers(b,W),ye.viewport(E),ye.scissor(I),ye.setScissorTest(N),fe){const be=ke.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,j)}else if(Ae){const be=ke.get(b.texture),Ie=z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,be.__webglTexture,j||0,Ie)}P=-1},this.readRenderTargetPixels=function(b,z,j,Y,W,fe,Ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ke.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ge=Ge[Ae]),Ge){ye.bindFramebuffer(V.FRAMEBUFFER,Ge);try{const be=b.texture,Ie=be.format,We=be.type;if(Ie!==Wi&&ve.convert(Ie)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=We===dr&&(xe.has("EXT_color_buffer_half_float")||Ue.isWebGL2&&xe.has("EXT_color_buffer_float"));if(We!==Ns&&ve.convert(We)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===Ss&&(Ue.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-Y&&j>=0&&j<=b.height-W&&V.readPixels(z,j,Y,W,ve.convert(Ie),ve.convert(We),fe)}finally{const be=M!==null?ke.get(M).__webglFramebuffer:null;ye.bindFramebuffer(V.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(b,z,j=0){const Y=Math.pow(2,-j),W=Math.floor(z.image.width*Y),fe=Math.floor(z.image.height*Y);C.setTexture2D(z,0),V.copyTexSubImage2D(V.TEXTURE_2D,j,0,0,b.x,b.y,W,fe),ye.unbindTexture()},this.copyTextureToTexture=function(b,z,j,Y=0){const W=z.image.width,fe=z.image.height,Ae=ve.convert(j.format),Ge=ve.convert(j.type);C.setTexture2D(j,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment),z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Y,b.x,b.y,W,fe,Ae,Ge,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Y,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Ae,z.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,Y,b.x,b.y,Ae,Ge,z.image),Y===0&&j.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(b,z,j,Y,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=b.max.x-b.min.x+1,Ae=b.max.y-b.min.y+1,Ge=b.max.z-b.min.z+1,be=ve.convert(Y.format),Ie=ve.convert(Y.type);let We;if(Y.isData3DTexture)C.setTexture3D(Y,0),We=V.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)C.setTexture2DArray(Y,0),We=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ke=V.getParameter(V.UNPACK_ROW_LENGTH),Pt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Zt=V.getParameter(V.UNPACK_SKIP_PIXELS),gt=V.getParameter(V.UNPACK_SKIP_ROWS),Dn=V.getParameter(V.UNPACK_SKIP_IMAGES),xt=j.isCompressedTexture?j.mipmaps[W]:j.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,xt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,b.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,b.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,b.min.z),j.isDataTexture||j.isData3DTexture?V.texSubImage3D(We,W,z.x,z.y,z.z,fe,Ae,Ge,be,Ie,xt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(We,W,z.x,z.y,z.z,fe,Ae,Ge,be,xt.data)):V.texSubImage3D(We,W,z.x,z.y,z.z,fe,Ae,Ge,be,Ie,xt),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ke),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Pt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Zt),V.pixelStorei(V.UNPACK_SKIP_ROWS,gt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Dn),W===0&&Y.generateMipmaps&&V.generateMipmap(We),ye.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),ye.unbindTexture()},this.resetState=function(){T=0,w=0,M=null,ye.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===d_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Id?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pn?Ro:jE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ro?pn:Qr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class m3 extends g1{}m3.prototype.isWebGL1Renderer=!0;class g3 extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Fm extends Qu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ox=new cn,km=new h_,ef=new Od,tf=new X;class Fx extends ui{constructor(e=new Di,t=new Fm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ef.copy(i.boundingSphere),ef.applyMatrix4(r),ef.radius+=s,e.ray.intersectsSphere(ef)===!1)return;Ox.copy(r).invert(),km.copy(e.ray).applyMatrix4(Ox);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=h,g=p;_<g;_++){const m=u.getX(_);tf.fromBufferAttribute(d,m),kx(tf,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=h,g=p;_<g;_++)tf.fromBufferAttribute(d,_),kx(tf,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kx(n,e,t,i,r,s,o){const a=km.distanceSqToPoint(n);if(a<t){const l=new X;km.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class _3 extends li{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fu extends Di{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let d=e;const h=(t-e)/r,p=new X,_=new Qe;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,c.push(_.x,_.y)}d+=h}for(let g=0;g<r;g++){const m=g*(i+1);for(let f=0;f<i;f++){const v=f+m,x=v,y=v+i+1,T=v+i+2,w=v+1;a.push(x,y,w),a.push(y,T,w)}}this.setIndex(a),this.setAttribute("position",new Gn(l,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class __ extends Di{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new X,h=new X,p=[],_=[],g=[],m=[];for(let f=0;f<=i;f++){const v=[],x=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const w=T/t;d.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(w+y,1-x),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const x=c[f][v+1],y=c[f][v],T=c[f+1][v],w=c[f+1][v+1];(f!==0||o>0)&&p.push(x,y,w),(f!==i-1||l<Math.PI)&&p.push(y,T,w)}this.setIndex(p),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new __(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zx();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zx(){return(typeof performance>"u"?Date:performance).now()}class v3{constructor(e,t,i=0,r=1/0){this.ray=new h_(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new p_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return zm(e,this,i,t),i.sort(Bx),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)zm(e[r],this,i,t);return i.sort(Bx),i}}function Bx(n,e){return n.distance-e.distance}function zm(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)zm(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:c_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=c_);const v1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hl{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const x3=new l1(-1,1,1,-1,0,1);class y3 extends Di{constructor(){super(),this.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gn([0,2,0,0,2,0],2))}}const S3=new y3;class v_{constructor(e){this._mesh=new Ti(S3,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,x3)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class x1 extends hl{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Jn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bu.clone(e.uniforms),this.material=new Jn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new v_(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hx extends hl{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class M3 extends hl{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class E3{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Qe);this._width=i.width,this._height=i.height,t=new Ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new x1(v1),this.copyPass.material.blending=Cr,this.clock=new _1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Hx!==void 0&&(o instanceof Hx?i=!0:o instanceof M3&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class T3 extends hl{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new at}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const w3={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class al extends hl{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Qe(e.x,e.y):new Qe(256,256),this.clearColor=new at(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ci(s,o,{type:dr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Ci(s,o,{type:dr});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const p=new Ci(s,o,{type:dr});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=w3;this.highPassUniforms=Bu.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Qe(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=v1;this.copyUniforms=Bu.clone(c.uniforms),this.blendMaterial=new Jn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:ds,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new at,this.oldClearAlpha=1,this.basic=new go,this.fsQuad=new v_(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Qe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=al.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=al.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Jn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Qe(.5,.5)},direction:{value:new Qe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Jn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}al.BlurDirectionX=new Qe(1,0);al.BlurDirectionY=new Qe(0,1);const A3={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class C3 extends hl{constructor(e,t,i){super(),this.scene=e,this.camera=t;const r=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,o=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Ci(1,1,{minFilter:hn,magFilter:hn,type:dr}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new m1,this.materialDepth.depthPacking=qE,this.materialDepth.blending=Cr;const a=A3,l=Bu.clone(a.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=t.aspect,l.aperture.value=s,l.maxblur.value=o,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new Jn({defines:Object.assign({},a.defines),uniforms:l,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=l,this.fsQuad=new v_(this.materialBokeh),this._oldClearColor=new at}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}ju.registerPlugin(Je);function R3(){const n=bo.useRef(null);return bo.useEffect(()=>{const e=n.current;if(!e)return;function t(){const C=document.createElement("canvas");C.width=64,C.height=64;const A=C.getContext("2d"),O=A.createRadialGradient(32,32,0,32,32,32);O.addColorStop(0,"rgba(255, 255, 255, 1.0)"),O.addColorStop(.2,"rgba(255, 235, 170, 0.95)"),O.addColorStop(.5,"rgba(255, 130, 30, 0.5)"),O.addColorStop(.8,"rgba(220, 50, 0, 0.15)"),O.addColorStop(1,"rgba(0, 0, 0, 0)"),A.fillStyle=O,A.beginPath(),A.arc(32,32,32,0,Math.PI*2),A.fill();const J=new _3(C);return J.generateMipmaps=!1,J.minFilter=$n,J.magFilter=$n,J.needsUpdate=!0,J}const i=t(),r=7,s=new X(r,0,0),o=new g3,a=new Vi(45,window.innerWidth/window.innerHeight,.1,1e3),l=new g1({canvas:e,antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),l.toneMapping=kE,l.toneMappingExposure=1.2,l.setClearColor(0,0);const u=new Ci(window.innerWidth,window.innerHeight,{type:dr,format:Wi,samples:4}),c=new E3(l,u);c.addPass(new T3(o,a));const d=new al(new Qe(window.innerWidth,window.innerHeight),.85,.55,.15);c.addPass(d);const h=new C3(o,a,{focus:15,aperture:1e-5,maxblur:.008,width:window.innerWidth,height:window.innerHeight});c.addPass(h);const p={uniforms:{tDiffuse:{value:null},bhPos:{value:new Qe(.5,.5)},radius:{value:.25},strength:{value:.08}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform vec2 bhPos;
        uniform float radius;
        uniform float strength;
        varying vec2 vUv;

        void main() {
          vec2 dir = vUv - bhPos;
          // Compensate for aspect ratio roughly if needed, assuming 16:9 for distance
          // dir.x *= 1.77; 
          float dist = length(dir);
          vec2 warpedUv = vUv;
          
          float eh = 0.06; // Event horizon radius in screen space
          
          if (dist > eh && dist < radius) {
            // Inverse square falloff for gravitational warping
            float warp = strength / (dist * dist);
            warp = clamp(warp, 0.0, 0.5); // Prevent extreme tearing
            warpedUv -= normalize(dir) * warp;
            gl_FragColor = texture2D(tDiffuse, warpedUv);
          } else if (dist <= eh) {
            // Ensure the inside of the event horizon is pitch black
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
          } else {
            gl_FragColor = texture2D(tDiffuse, vUv);
          }
        }
      `},_=new x1(p);c.addPass(_);const g=new Ti(new __(1.65,64,64),new go({color:0}));g.position.copy(s),o.add(g);const m=new Ti(new fu(1.65,2.05,80),new go({color:16752704,side:Gi,transparent:!0,opacity:.75,blending:ds}));m.position.copy(s),m.rotation.x=Math.PI/2,o.add(m);const f=new Ti(new fu(2.05,2.35,80),new go({color:16733440,side:Gi,transparent:!0,opacity:.4,blending:ds}));f.position.copy(s),f.rotation.x=Math.PI/2,o.add(f);const v=new Ti(new fu(1.65,1.95,80),new go({color:16755264,side:Gi,transparent:!0,opacity:.65,blending:ds}));v.position.copy(s),v.rotation.y=.15,o.add(v);const x=14e3,y=new Di,T=new Float32Array(x*3),w=new Float32Array(x*3),M=new Float32Array(x),P=new Float32Array(x),S=new Float32Array(x),E=new at(16775406),I=new at(16737792),N=new at(7798784),Z=new at;for(let C=0;C<x;C++){const A=Math.pow(Math.random(),1.35),O=1.85+A*12.5,J=Math.random()*Math.PI*2;P[C]=O,M[C]=J,S[C]=.07/Math.sqrt(O),T[C*3]=r+Math.cos(J)*O,T[C*3+1]=(Math.random()-.5)*(.15+A*.3),T[C*3+2]=Math.sin(J)*O,A<.22?Z.copy(E).lerp(I,A/.22):Z.copy(I).lerp(N,(A-.22)/.78),w[C*3]=Z.r,w[C*3+1]=Z.g,w[C*3+2]=Z.b}y.setAttribute("position",new Ri(T,3)),y.setAttribute("color",new Ri(w,3));const L=new Fx(y,new Fm({size:.075,map:i,vertexColors:!0,transparent:!0,opacity:.85,blending:ds,depthWrite:!1}));o.add(L);const F=300,B=new Di,H=new Float32Array(F*3),D=new Float32Array(F*3);for(let C=0;C<F;C++)H[C*3]=r+(Math.random()-.5)*60,H[C*3+1]=(Math.random()-.5)*50,H[C*3+2]=Math.random()*30+5;B.setAttribute("position",new Ri(H,3));const k=new Fx(B,new Fm({color:16764040,size:.1,map:i,transparent:!0,opacity:.4,blending:ds,depthWrite:!1}));o.add(k);const R={camZ:20,camY:3.2,camX:0,lookX:0,lookY:0,lookZ:0,baseSpeed:1};let $=new Qe(0,0),Q=new Qe(0,0),q=!1,K=!1,ie=null;const de=new v3,he=new us(new X(0,1,0),0),Ee=new X(9999,0,9999),De=new X;let Ce=0;const Xe=C=>{$.x=C.clientX/window.innerWidth*2-1,$.y=-(C.clientY/window.innerHeight)*2+1,q=!0},V=()=>{q=!1},Ye=()=>{K=!0,ie&&clearTimeout(ie),ie=setTimeout(()=>{K=!1},120)},xe=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",Xe),window.addEventListener("mouseleave",V),window.addEventListener("scroll",Ye,{passive:!0}),window.addEventListener("resize",xe);const Ue=new _1;let ye;function G(){ye=requestAnimationFrame(G);const C=Math.min(Ue.getDelta(),.05),A=Ue.getElapsedTime(),O=K?3:5;Q.x+=($.x-Q.x)*(1-Math.exp(-O*C)),Q.y+=($.y-Q.y)*(1-Math.exp(-O*C));const J=R.camX+Q.x*1.5,te=R.camY+Q.y*1.5;a.position.x+=(J-a.position.x)*(1-Math.exp(-3*C)),a.position.y+=(te-a.position.y)*(1-Math.exp(-3*C)),a.position.z+=(R.camZ-a.position.z)*(1-Math.exp(-3*C)),a.lookAt(R.lookX,R.lookY,R.lookZ),Ce+=((q&&!K?1:0)-Ce)*(1-Math.exp(-8*C)),q&&Ce>.01?(de.setFromCamera(Q,a),de.ray.intersectPlane(he,De)&&Ee.copy(De)):Ee.set(9999,0,9999);const _e=R.baseSpeed,ce=L.geometry.attributes.position.array,ue=.65,Pe=ue*ue,ze=Ce>.02&&Ee.x<9e3,ee=ze?Math.hypot(Ee.x-r,Ee.z):-1;for(let pe=0;pe<x;pe++){const Se=P[pe];M[pe]-=S[pe]*C*_e*60;const ve=r+Math.cos(M[pe])*Se,He=Math.sin(M[pe])*Se;let Ze=0,lt=0,me=0;if(ze&&Math.abs(Se-ee)<ue){const U=ve-Ee.x,oe=He-Ee.z,ae=U*U+oe*oe;if(ae<Pe&&ae>1e-4){const Oe=Math.sqrt(ae),Ne=Oe/ue,tt=Math.cos(Ne*Math.PI*.5)*.35*Ce;Ze=U/Oe*tt,lt=oe/Oe*tt,me=(1-Ne)*.24*Math.sin(A*5)*Ce}}const se=Math.sin(A*3.5+M[pe]*2.5+Se*1.6)*.35;ce[pe*3]=ve+Ze,ce[pe*3+1]=se+me,ce[pe*3+2]=He+lt}L.geometry.attributes.position.needsUpdate=!0;const qe=k.geometry.attributes.position.array;for(let pe=0;pe<F;pe++){const Se=r-qe[pe*3],ve=-qe[pe*3+1],He=-qe[pe*3+2],Ze=Se*Se+ve*ve+He*He,lt=Math.min(20/(Ze+1),1.4);D[pe*3]+=Se*2e-4*lt,D[pe*3+1]+=ve*2e-4*lt,D[pe*3+2]+=He*2e-4*lt,qe[pe*3]+=D[pe*3],qe[pe*3+1]+=D[pe*3+1],qe[pe*3+2]+=D[pe*3+2],(Ze<3.5||qe[pe*3+2]<-10)&&(qe[pe*3]=r+(Math.random()-.5)*60,qe[pe*3+1]=(Math.random()-.5)*50,qe[pe*3+2]=Math.random()*30+10,D[pe*3]=0,D[pe*3+1]=0,D[pe*3+2]=0)}k.geometry.attributes.position.needsUpdate=!0,m.scale.setScalar(1+Math.sin(A*1.8)*.015),f.scale.setScalar(1+Math.cos(A*1.5)*.015),v.scale.setScalar(1+Math.sin(A*1.2)*.012);const Re=new X(r,0,0);Re.project(a),_.uniforms.bhPos.value.set(Re.x*.5+.5,Re.y*.5+.5),c.render()}a.position.set(R.camX,R.camY,R.camZ),G();const ke=ju.timeline({scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:1.2}});return ke.to(R,{camZ:17,camY:3.8,camX:3,lookX:3,duration:.5,ease:"power1.inOut"}),ke.to(R,{camY:4.4,camX:r*.5,lookX:r*.5,camZ:14,duration:.5,ease:"power2.inOut"}),window.__getBHScreenCoord=()=>{const C=new X(r,0,0).project(a);return{x:(C.x*.5+.5)*window.innerWidth,y:(-C.y*.5+.5)*window.innerHeight}},()=>{cancelAnimationFrame(ye),window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseleave",V),window.removeEventListener("scroll",Ye),window.removeEventListener("resize",xe),ke.kill(),c.dispose(),l.dispose()}},[]),ht.jsx("canvas",{id:"blackhole-canvas",ref:n})}const Ll={firstName:"Maheswar",lastName:"Praveen",title:"BUILDER • ROBOTICS & AI ENGINEER",github:"https://github.com/MaheswarPraveen",linkedin:"https://www.linkedin.com/in/maheswarpraveen"},b3=[{id:"00",category:"PROFILE",title:"Autonomous Systems Builder",description:"Developing end-to-end robotics systems across ROS 2, bare-metal firmware, and edge AI accelerators. Focused on real-time motor control, kinematic trajectories, and hardware deployment.",tags:["ROS 2","Edge AI","Embedded Systems"]},{id:"01",category:"ROBOTICS",title:"SpotMicro Quadruped",description:"12-DOF quadruped robot powered by 12× DS3218 servos and an Arduino UNO Q running Zephyr RTOS for ~200Hz analytical inverse kinematics and quintic spline gaits. Custom 6.8V high-current busbar rail off a 3S LiPo to handle 20A transient bursts without brownouts.",tags:["Zephyr RTOS","Arduino UNO Q","200Hz IK","3S LiPo Busbar"]},{id:"02",category:"FIELD AI",title:"Autonomous Skid-Steer Rover",description:"Field farming rover equipped with a 4-DOF robotic manipulator for precision weed removal. Powered by ROS 2 and an edge Hailo-8L NPU executing real-time YOLO vision guidance for field deployment.",tags:["ROS 2","Hailo-8L NPU","YOLO","4-DOF Arm"]},{id:"03",category:"DRIVER ARCHITECTURE",title:"RoArm M2-S PlayMotion",description:"High-precision trajectory recording and autonomous playback driver featuring dual-mode teaching (physical freedrive & keyboard jogging). Streams 25Hz quintic polynomial splines for zero-jerk motion with serial noise filtering. Officially adopted into the Waveshare Wiki.",tags:["Quintic Splines","Python Driver","Waveshare Wiki"]},{id:"04",category:"TELEMETRY BRIDGE",title:"ArduROSPI Bridge",description:"Zero-dependency ROS 2 ↔ MAVLink translation layer built with pymavlink, replacing heavy MAVROS on resource-constrained Raspberry Pi rovers. Implements 10Hz IMU streaming, automatic serial reconnect, and mission mode switching.",tags:["pymavlink","ROS 2","ArduPilot"]},{id:"05",category:"INTERACTIVE SYSTEMS",title:"Kalkii Genesis",description:"Cyberpunk 2.5D action title solo-engineered in Godot 4. Custom hierarchical combat state machines, frame-accurate animation cancelling, dynamic 2D lighting, and responsive platformer physics controllers.",tags:["Godot 4","Combat State Machines","GDScript"]},{id:"06",category:"EMBEDDED VISION",title:"Plant Disease Detection CNN",description:"End-to-end computer vision pipeline for agricultural crop leaf pathology. Implements OpenCV preprocessing, custom convolutional neural network (CNN) architectures in TensorFlow, achieving 80% test accuracy on unseen diseased foliage datasets.",tags:["TensorFlow","OpenCV","80% Test Accuracy"]}],P3=[{label:"Languages & AI",value:"Python, C/C++, GDScript, PyTorch, TensorFlow, YOLO, OpenCV"},{label:"Robotics & Protocols",value:"ROS 2 (Humble/Jazzy), MAVLink, CAN, UART, I2C, SPI, MQTT"},{label:"Hardware & Engineering",value:"Hailo-8L NPU, Arduino UNO Q, Raspberry Pi, Zephyr RTOS, Fusion 360"}];ju.registerPlugin(Je);function L3(){const n=bo.useRef(null);return bo.useEffect(()=>{const e=n.current;if(!e)return;const t=Array.from(e.querySelectorAll(".card")),i=[];return t.forEach((r,s)=>{const o=s===0,a=s===t.length-1;let l=".section-title, .tag, .project-index, .section-desc";o?l=".name-line, .hero-subtitle, .clean-link":a&&(l=".section-title, .project-index, .stack-label, .stack-val");const u=new dR(r.querySelectorAll(l),{types:"chars"});i.push(u);const c=Array.from(r.querySelectorAll(".char")),d=Array.from(r.querySelectorAll(".tag, .section-title, .clean-link, .stack-col")),h=c.length,p=c.map(f=>{f.dataset.orig=f.textContent,f._swallowState=0,f._lastFlip=Math.random()*100;const v=f.getBoundingClientRect();return{x:v.left+window.scrollX,y:v.top+window.scrollY}}),_={phase:0},g=ju.timeline({paused:!0});let m=null;g.eventCallback("onStart",()=>{m=window.__getBHScreenCoord?window.__getBHScreenCoord():{x:window.innerWidth*.72,y:window.innerHeight*.5}}),g.to(_,{phase:1,duration:1.4,ease:"power1.inOut",onUpdate:()=>{const f=_.phase,v=m||(window.__getBHScreenCoord?window.__getBHScreenCoord():{x:window.innerWidth*.72,y:window.innerHeight*.5}),x=performance.now();for(let y=0;y<h;y++){const T=c[y];if(f===0)T._swallowState!==0&&(T.textContent=T.dataset.orig,T.style.color="",T.style.opacity="1",T.style.transform="none",T.style.textShadow="none",T._swallowState=0);else if(f>0&&f<.25)x-T._lastFlip>40+y%7*15&&(T.textContent=Math.random()>.5?"1":"0",T._lastFlip=x),T._swallowState!==1&&(T.style.color="#ffaa20",T.style.textShadow="0 0 12px rgba(255, 170, 32, 0.8)",T.style.opacity="1",T.style.transform="none",T._swallowState=1);else{const w=(f-.25)/.75,M=y/h*.2,P=Math.max(0,Math.min(1,(w-M)/.8)),S=Math.pow(P,2.2),E=p[y],I=E.x-window.scrollX,N=E.y-window.scrollY,Z=v.x-I,L=v.y-N,F=y*.15+S*4,B=Math.sin(F)*30*(1-S),H=Math.cos(F)*20*(1-S),D=Z*S+B,k=L*S+H,R=-S*600,$=1+S*.5,Q=Math.max(.05,1-S*.9),q=S*60,K=-S*20,ie=Math.max(0,1-Math.pow(P,2.5));T._swallowState!==3&&(T.textContent=Math.random()>.5?"1":"0"),T.style.transform=`translate3d(${D.toFixed(1)}px, ${k.toFixed(1)}px, ${R.toFixed(0)}px) rotateX(${q.toFixed(0)}deg) rotateZ(${K.toFixed(0)}deg) scale(${$.toFixed(2)}, ${Q.toFixed(2)})`;const de=Math.round((1-S)*4)/4;T.style.color=S<.6?"#ff9010":"#ff2000",T.style.textShadow=`0 0 ${Math.max(2,15*de).toFixed(0)}px rgba(255, 120, 20, 0.9)`,T.style.opacity=ie.toFixed(2),T._swallowState=3}}if(f<.25)d.forEach(y=>y.style.opacity="1"),r.style.opacity="1";else{const y=(f-.25)/.75,T=Math.max(0,1-Math.pow(y,1.5));d.forEach(w=>w.style.opacity=T.toFixed(2)),r.style.opacity=Math.max(0,1-Math.pow(y,2.5)).toFixed(2)}}}),Je.create({trigger:r,start:"center 55%",onEnter:()=>g.play(),onEnterBack:()=>g.reverse(),onLeave:()=>{},onLeaveBack:()=>g.reverse()})}),Je.create({trigger:".scroll-end-trigger",start:"top 70%",end:"bottom bottom",scrub:1,onUpdate:r=>{const s=document.getElementById("flash-overlay");s&&(r.progress<.5?(s.style.backgroundColor="#ffffff",s.style.opacity=(r.progress/.5).toFixed(2)):(s.style.backgroundColor="#000000",s.style.opacity=((r.progress-.5)/.5).toFixed(2)))}}),()=>{i.forEach(r=>r.revert()),Je.getAll().forEach(r=>r.kill())}},[]),ht.jsxs(ht.Fragment,{children:[ht.jsx("div",{id:"flash-overlay"}),ht.jsx(R3,{}),ht.jsxs("main",{id:"ui-container",ref:n,children:[ht.jsxs("header",{className:"card hero-card",children:[ht.jsxs("h1",{className:"name-title",children:[ht.jsx("span",{className:"name-line",children:Ll.firstName}),ht.jsx("span",{className:"name-line",children:Ll.lastName})]}),ht.jsx("p",{className:"hero-subtitle",children:Ll.title}),ht.jsxs("div",{className:"hero-links",children:[ht.jsx("a",{href:Ll.github,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"GitHub"}),ht.jsx("a",{href:Ll.linkedin,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"LinkedIn"})]})]}),b3.map(e=>ht.jsxs("section",{className:"card content-card",children:[ht.jsxs("span",{className:"project-index",children:[e.id," // ",e.category]}),ht.jsx("h2",{className:"section-title",children:e.title}),ht.jsx("p",{className:"section-desc",children:e.description}),ht.jsx("div",{className:"tag-cloud",children:e.tags.map((t,i)=>ht.jsx("span",{className:"tag",children:t},i))})]},e.id)),ht.jsxs("section",{className:"card content-card",children:[ht.jsx("span",{className:"project-index",children:"07 // STACK"}),ht.jsx("h2",{className:"section-title",children:"Technical Capabilities"}),ht.jsx("div",{className:"stack-grid",children:P3.map((e,t)=>ht.jsxs("div",{className:"stack-col",children:[ht.jsx("span",{className:"stack-label",children:e.label}),ht.jsx("span",{className:"stack-val",children:e.value})]},t))})]})]}),ht.jsx("div",{className:"scroll-end-trigger"})]})}op.createRoot(document.getElementById("root")).render(ht.jsx(F1.StrictMode,{children:ht.jsx(L3,{})}));
