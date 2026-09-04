var JE=Object.defineProperty;var ew=(n,e,t)=>e in n?JE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Lr=(n,e,t)=>ew(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function tw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _x={exports:{}},Uh={},vx={exports:{}},mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc=Symbol.for("react.element"),nw=Symbol.for("react.portal"),iw=Symbol.for("react.fragment"),rw=Symbol.for("react.strict_mode"),sw=Symbol.for("react.profiler"),ow=Symbol.for("react.provider"),aw=Symbol.for("react.context"),lw=Symbol.for("react.forward_ref"),uw=Symbol.for("react.suspense"),cw=Symbol.for("react.memo"),fw=Symbol.for("react.lazy"),W_=Symbol.iterator;function hw(n){return n===null||typeof n!="object"?null:(n=W_&&n[W_]||n["@@iterator"],typeof n=="function"?n:null)}var yx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xx=Object.assign,Sx={};function xl(n,e,t){this.props=n,this.context=e,this.refs=Sx,this.updater=t||yx}xl.prototype.isReactComponent={};xl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Mx(){}Mx.prototype=xl.prototype;function cg(n,e,t){this.props=n,this.context=e,this.refs=Sx,this.updater=t||yx}var fg=cg.prototype=new Mx;fg.constructor=cg;xx(fg,xl.prototype);fg.isPureReactComponent=!0;var X_=Array.isArray,Ex=Object.prototype.hasOwnProperty,hg={current:null},wx={key:!0,ref:!0,__self:!0,__source:!0};function Tx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ex.call(e,i)&&!wx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:nc,type:n,key:s,ref:o,props:r,_owner:hg.current}}function dw(n,e){return{$$typeof:nc,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function dg(n){return typeof n=="object"&&n!==null&&n.$$typeof===nc}function pw(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Y_=/\/+/g;function ud(n,e){return typeof n=="object"&&n!==null&&n.key!=null?pw(""+n.key):e.toString(36)}function xf(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case nc:case nw:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+ud(o,0):i,X_(r)?(t="",n!=null&&(t=n.replace(Y_,"$&/")+"/"),xf(r,e,t,"",function(u){return u})):r!=null&&(dg(r)&&(r=dw(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Y_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",X_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+ud(s,a);o+=xf(s,e,t,l,r)}else if(l=hw(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+ud(s,a++),o+=xf(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dc(n,e,t){if(n==null)return n;var i=[],r=0;return xf(n,i,"","",function(s){return e.call(t,s,r++)}),i}function mw(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Jn={current:null},Sf={transition:null},gw={ReactCurrentDispatcher:Jn,ReactCurrentBatchConfig:Sf,ReactCurrentOwner:hg};function Ax(){throw Error("act(...) is not supported in production builds of React.")}mt.Children={map:dc,forEach:function(n,e,t){dc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return dc(n,function(){e++}),e},toArray:function(n){return dc(n,function(e){return e})||[]},only:function(n){if(!dg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};mt.Component=xl;mt.Fragment=iw;mt.Profiler=sw;mt.PureComponent=cg;mt.StrictMode=rw;mt.Suspense=uw;mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;mt.act=Ax;mt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=xx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Ex.call(e,l)&&!wx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:nc,type:n.type,key:r,ref:s,props:i,_owner:o}};mt.createContext=function(n){return n={$$typeof:aw,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ow,_context:n},n.Consumer=n};mt.createElement=Tx;mt.createFactory=function(n){var e=Tx.bind(null,n);return e.type=n,e};mt.createRef=function(){return{current:null}};mt.forwardRef=function(n){return{$$typeof:lw,render:n}};mt.isValidElement=dg;mt.lazy=function(n){return{$$typeof:fw,_payload:{_status:-1,_result:n},_init:mw}};mt.memo=function(n,e){return{$$typeof:cw,type:n,compare:e===void 0?null:e}};mt.startTransition=function(n){var e=Sf.transition;Sf.transition={};try{n()}finally{Sf.transition=e}};mt.unstable_act=Ax;mt.useCallback=function(n,e){return Jn.current.useCallback(n,e)};mt.useContext=function(n){return Jn.current.useContext(n)};mt.useDebugValue=function(){};mt.useDeferredValue=function(n){return Jn.current.useDeferredValue(n)};mt.useEffect=function(n,e){return Jn.current.useEffect(n,e)};mt.useId=function(){return Jn.current.useId()};mt.useImperativeHandle=function(n,e,t){return Jn.current.useImperativeHandle(n,e,t)};mt.useInsertionEffect=function(n,e){return Jn.current.useInsertionEffect(n,e)};mt.useLayoutEffect=function(n,e){return Jn.current.useLayoutEffect(n,e)};mt.useMemo=function(n,e){return Jn.current.useMemo(n,e)};mt.useReducer=function(n,e,t){return Jn.current.useReducer(n,e,t)};mt.useRef=function(n){return Jn.current.useRef(n)};mt.useState=function(n){return Jn.current.useState(n)};mt.useSyncExternalStore=function(n,e,t){return Jn.current.useSyncExternalStore(n,e,t)};mt.useTransition=function(){return Jn.current.useTransition()};mt.version="18.3.1";vx.exports=mt;var No=vx.exports;const _w=tw(No);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vw=No,yw=Symbol.for("react.element"),xw=Symbol.for("react.fragment"),Sw=Object.prototype.hasOwnProperty,Mw=vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ew={key:!0,ref:!0,__self:!0,__source:!0};function Cx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Sw.call(e,i)&&!Ew.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:yw,type:n,key:s,ref:o,props:r,_owner:Mw.current}}Uh.Fragment=xw;Uh.jsx=Cx;Uh.jsxs=Cx;_x.exports=Uh;var vt=_x.exports,Pp={},bx={exports:{}},Ii={},Rx={exports:{}},Px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,B){var b=U.length;U.push(B);e:for(;0<b;){var ee=b-1>>>1,Q=U[ee];if(0<r(Q,B))U[ee]=B,U[b]=Q,b=ee;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var B=U[0],b=U.pop();if(b!==B){U[0]=b;e:for(var ee=0,Q=U.length,F=Q>>>1;ee<F;){var $=2*(ee+1)-1,J=U[$],he=$+1,ce=U[he];if(0>r(J,b))he<Q&&0>r(ce,J)?(U[ee]=ce,U[he]=b,ee=he):(U[ee]=J,U[$]=b,ee=$);else if(he<Q&&0>r(ce,b))U[ee]=ce,U[he]=b,ee=he;else break e}}return B}function r(U,B){var b=U.sortIndex-B.sortIndex;return b!==0?b:U.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(U){for(var B=t(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=U)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=t(u)}}function x(U){if(g=!1,y(U),!_)if(t(l)!==null)_=!0,W(w);else{var B=t(u);B!==null&&X(x,B.startTime-U)}}function w(U,B){_=!1,g&&(g=!1,d(P),P=-1),p=!0;var b=f;try{for(y(B),h=t(l);h!==null&&(!(h.expirationTime>B)||U&&!k());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,f=h.priorityLevel;var Q=ee(h.expirationTime<=B);B=n.unstable_now(),typeof Q=="function"?h.callback=Q:h===t(l)&&i(l),y(B)}else i(l);h=t(l)}if(h!==null)var F=!0;else{var $=t(u);$!==null&&X(x,$.startTime-B),F=!1}return F}finally{h=null,f=b,p=!1}}var T=!1,E=null,P=-1,S=5,M=-1;function k(){return!(n.unstable_now()-M<S)}function O(){if(E!==null){var U=n.unstable_now();M=U;var B=!0;try{B=E(!0,U)}finally{B?te():(T=!1,E=null)}}else T=!1}var te;if(typeof v=="function")te=function(){v(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,z=L.port2;L.port1.onmessage=O,te=function(){z.postMessage(null)}}else te=function(){m(O,0)};function W(U){E=U,T||(T=!0,te())}function X(U,B){P=m(function(){U(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,W(w))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var b=f;f=B;try{return U()}finally{f=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var b=f;f=U;try{return B()}finally{f=b}},n.unstable_scheduleCallback=function(U,B,b){var ee=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ee+b:ee):b=ee,U){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=b+Q,U={id:c++,callback:B,priorityLevel:U,startTime:b,expirationTime:Q,sortIndex:-1},b>ee?(U.sortIndex=b,e(u,U),t(l)===null&&U===t(u)&&(g?(d(P),P=-1):g=!0,X(x,b-ee))):(U.sortIndex=Q,e(l,U),_||p||(_=!0,W(w))),U},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(U){var B=f;return function(){var b=f;f=B;try{return U.apply(this,arguments)}finally{f=b}}}})(Px);Rx.exports=Px;var ww=Rx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tw=No,Li=ww;function ue(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lx=new Set,bu={};function Xo(n,e){nl(n,e),nl(n+"Capture",e)}function nl(n,e){for(bu[n]=e,n=0;n<e.length;n++)Lx.add(e[n])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lp=Object.prototype.hasOwnProperty,Aw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j_={},q_={};function Cw(n){return Lp.call(q_,n)?!0:Lp.call(j_,n)?!1:Aw.test(n)?q_[n]=!0:(j_[n]=!0,!1)}function bw(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Rw(n,e,t,i){if(e===null||typeof e>"u"||bw(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ei(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var En={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){En[n]=new ei(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];En[e]=new ei(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){En[n]=new ei(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){En[n]=new ei(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){En[n]=new ei(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){En[n]=new ei(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){En[n]=new ei(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){En[n]=new ei(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){En[n]=new ei(n,5,!1,n.toLowerCase(),null,!1,!1)});var pg=/[\-:]([a-z])/g;function mg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(pg,mg);En[e]=new ei(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(pg,mg);En[e]=new ei(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(pg,mg);En[e]=new ei(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){En[n]=new ei(n,1,!1,n.toLowerCase(),null,!1,!1)});En.xlinkHref=new ei("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){En[n]=new ei(n,1,!1,n.toLowerCase(),null,!0,!0)});function gg(n,e,t,i){var r=En.hasOwnProperty(e)?En[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rw(e,t,r,i)&&(t=null),i||r===null?Cw(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var rs=Tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pc=Symbol.for("react.element"),wa=Symbol.for("react.portal"),Ta=Symbol.for("react.fragment"),_g=Symbol.for("react.strict_mode"),Dp=Symbol.for("react.profiler"),Dx=Symbol.for("react.provider"),Ux=Symbol.for("react.context"),vg=Symbol.for("react.forward_ref"),Up=Symbol.for("react.suspense"),Ip=Symbol.for("react.suspense_list"),yg=Symbol.for("react.memo"),hs=Symbol.for("react.lazy"),Ix=Symbol.for("react.offscreen"),$_=Symbol.iterator;function Al(n){return n===null||typeof n!="object"?null:(n=$_&&n[$_]||n["@@iterator"],typeof n=="function"?n:null)}var Wt=Object.assign,cd;function Yl(n){if(cd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);cd=e&&e[1]||""}return`
`+cd+n}var fd=!1;function hd(n,e){if(!n||fd)return"";fd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{fd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Yl(n):""}function Pw(n){switch(n.tag){case 5:return Yl(n.type);case 16:return Yl("Lazy");case 13:return Yl("Suspense");case 19:return Yl("SuspenseList");case 0:case 2:case 15:return n=hd(n.type,!1),n;case 11:return n=hd(n.type.render,!1),n;case 1:return n=hd(n.type,!0),n;default:return""}}function Np(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ta:return"Fragment";case wa:return"Portal";case Dp:return"Profiler";case _g:return"StrictMode";case Up:return"Suspense";case Ip:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ux:return(n.displayName||"Context")+".Consumer";case Dx:return(n._context.displayName||"Context")+".Provider";case vg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case yg:return e=n.displayName||null,e!==null?e:Np(n.type)||"Memo";case hs:e=n._payload,n=n._init;try{return Np(n(e))}catch{}}return null}function Lw(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Np(e);case 8:return e===_g?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Nx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Dw(n){var e=Nx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function mc(n){n._valueTracker||(n._valueTracker=Dw(n))}function Ox(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Nx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Vf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Op(n,e){var t=e.checked;return Wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function K_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Vs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fx(n,e){e=e.checked,e!=null&&gg(n,"checked",e,!1)}function Fp(n,e){Fx(n,e);var t=Vs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?kp(n,e.type,t):e.hasOwnProperty("defaultValue")&&kp(n,e.type,Vs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Z_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function kp(n,e,t){(e!=="number"||Vf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var jl=Array.isArray;function Ha(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Vs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function zp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ue(92));if(jl(t)){if(1<t.length)throw Error(ue(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Vs(t)}}function kx(n,e){var t=Vs(e.value),i=Vs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function J_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function zx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?zx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gc,Bx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(gc=gc||document.createElement("div"),gc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ru(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var su={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uw=["Webkit","ms","Moz","O"];Object.keys(su).forEach(function(n){Uw.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),su[e]=su[n]})});function Hx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||su.hasOwnProperty(n)&&su[n]?(""+e).trim():e+"px"}function Vx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Hx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Iw=Wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hp(n,e){if(e){if(Iw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Vp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gp=null;function xg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Wp=null,Va=null,Ga=null;function e0(n){if(n=sc(n)){if(typeof Wp!="function")throw Error(ue(280));var e=n.stateNode;e&&(e=kh(e),Wp(n.stateNode,n.type,e))}}function Gx(n){Va?Ga?Ga.push(n):Ga=[n]:Va=n}function Wx(){if(Va){var n=Va,e=Ga;if(Ga=Va=null,e0(n),e)for(n=0;n<e.length;n++)e0(e[n])}}function Xx(n,e){return n(e)}function Yx(){}var dd=!1;function jx(n,e,t){if(dd)return n(e,t);dd=!0;try{return Xx(n,e,t)}finally{dd=!1,(Va!==null||Ga!==null)&&(Yx(),Wx())}}function Pu(n,e){var t=n.stateNode;if(t===null)return null;var i=kh(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ue(231,e,typeof t));return t}var Xp=!1;if(Zr)try{var Cl={};Object.defineProperty(Cl,"passive",{get:function(){Xp=!0}}),window.addEventListener("test",Cl,Cl),window.removeEventListener("test",Cl,Cl)}catch{Xp=!1}function Nw(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ou=!1,Gf=null,Wf=!1,Yp=null,Ow={onError:function(n){ou=!0,Gf=n}};function Fw(n,e,t,i,r,s,o,a,l){ou=!1,Gf=null,Nw.apply(Ow,arguments)}function kw(n,e,t,i,r,s,o,a,l){if(Fw.apply(this,arguments),ou){if(ou){var u=Gf;ou=!1,Gf=null}else throw Error(ue(198));Wf||(Wf=!0,Yp=u)}}function Yo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function qx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function t0(n){if(Yo(n)!==n)throw Error(ue(188))}function zw(n){var e=n.alternate;if(!e){if(e=Yo(n),e===null)throw Error(ue(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return t0(r),n;if(s===i)return t0(r),e;s=s.sibling}throw Error(ue(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(t.alternate!==i)throw Error(ue(190))}if(t.tag!==3)throw Error(ue(188));return t.stateNode.current===t?n:e}function $x(n){return n=zw(n),n!==null?Kx(n):null}function Kx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Kx(n);if(e!==null)return e;n=n.sibling}return null}var Zx=Li.unstable_scheduleCallback,n0=Li.unstable_cancelCallback,Bw=Li.unstable_shouldYield,Hw=Li.unstable_requestPaint,Kt=Li.unstable_now,Vw=Li.unstable_getCurrentPriorityLevel,Sg=Li.unstable_ImmediatePriority,Qx=Li.unstable_UserBlockingPriority,Xf=Li.unstable_NormalPriority,Gw=Li.unstable_LowPriority,Jx=Li.unstable_IdlePriority,Ih=null,Ar=null;function Ww(n){if(Ar&&typeof Ar.onCommitFiberRoot=="function")try{Ar.onCommitFiberRoot(Ih,n,void 0,(n.current.flags&128)===128)}catch{}}var hr=Math.clz32?Math.clz32:jw,Xw=Math.log,Yw=Math.LN2;function jw(n){return n>>>=0,n===0?32:31-(Xw(n)/Yw|0)|0}var _c=64,vc=4194304;function ql(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ql(a):(s&=o,s!==0&&(i=ql(s)))}else o=t&~r,o!==0?i=ql(o):s!==0&&(i=ql(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hr(e),r=1<<t,i|=n[t],e&=~r;return i}function qw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $w(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-hr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=qw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function jp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function eS(){var n=_c;return _c<<=1,!(_c&4194240)&&(_c=64),n}function pd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ic(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hr(e),n[e]=t}function Kw(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Mg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var wt=0;function tS(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var nS,Eg,iS,rS,sS,qp=!1,yc=[],bs=null,Rs=null,Ps=null,Lu=new Map,Du=new Map,gs=[],Zw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function i0(n,e){switch(n){case"focusin":case"focusout":bs=null;break;case"dragenter":case"dragleave":Rs=null;break;case"mouseover":case"mouseout":Ps=null;break;case"pointerover":case"pointerout":Lu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Du.delete(e.pointerId)}}function bl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sc(e),e!==null&&Eg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Qw(n,e,t,i,r){switch(e){case"focusin":return bs=bl(bs,n,e,t,i,r),!0;case"dragenter":return Rs=bl(Rs,n,e,t,i,r),!0;case"mouseover":return Ps=bl(Ps,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Lu.set(s,bl(Lu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Du.set(s,bl(Du.get(s)||null,n,e,t,i,r)),!0}return!1}function oS(n){var e=go(n.target);if(e!==null){var t=Yo(e);if(t!==null){if(e=t.tag,e===13){if(e=qx(t),e!==null){n.blockedOn=e,sS(n.priority,function(){iS(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=$p(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Gp=i,t.target.dispatchEvent(i),Gp=null}else return e=sc(t),e!==null&&Eg(e),n.blockedOn=t,!1;e.shift()}return!0}function r0(n,e,t){Mf(n)&&t.delete(e)}function Jw(){qp=!1,bs!==null&&Mf(bs)&&(bs=null),Rs!==null&&Mf(Rs)&&(Rs=null),Ps!==null&&Mf(Ps)&&(Ps=null),Lu.forEach(r0),Du.forEach(r0)}function Rl(n,e){n.blockedOn===e&&(n.blockedOn=null,qp||(qp=!0,Li.unstable_scheduleCallback(Li.unstable_NormalPriority,Jw)))}function Uu(n){function e(r){return Rl(r,n)}if(0<yc.length){Rl(yc[0],n);for(var t=1;t<yc.length;t++){var i=yc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(bs!==null&&Rl(bs,n),Rs!==null&&Rl(Rs,n),Ps!==null&&Rl(Ps,n),Lu.forEach(e),Du.forEach(e),t=0;t<gs.length;t++)i=gs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<gs.length&&(t=gs[0],t.blockedOn===null);)oS(t),t.blockedOn===null&&gs.shift()}var Wa=rs.ReactCurrentBatchConfig,jf=!0;function eT(n,e,t,i){var r=wt,s=Wa.transition;Wa.transition=null;try{wt=1,wg(n,e,t,i)}finally{wt=r,Wa.transition=s}}function tT(n,e,t,i){var r=wt,s=Wa.transition;Wa.transition=null;try{wt=4,wg(n,e,t,i)}finally{wt=r,Wa.transition=s}}function wg(n,e,t,i){if(jf){var r=$p(n,e,t,i);if(r===null)wd(n,e,i,qf,t),i0(n,i);else if(Qw(r,n,e,t,i))i.stopPropagation();else if(i0(n,i),e&4&&-1<Zw.indexOf(n)){for(;r!==null;){var s=sc(r);if(s!==null&&nS(s),s=$p(n,e,t,i),s===null&&wd(n,e,i,qf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else wd(n,e,i,null,t)}}var qf=null;function $p(n,e,t,i){if(qf=null,n=xg(i),n=go(n),n!==null)if(e=Yo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=qx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return qf=n,null}function aS(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vw()){case Sg:return 1;case Qx:return 4;case Xf:case Gw:return 16;case Jx:return 536870912;default:return 16}default:return 16}}var ys=null,Tg=null,Ef=null;function lS(){if(Ef)return Ef;var n,e=Tg,t=e.length,i,r="value"in ys?ys.value:ys.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ef=r.slice(n,1<i?1-i:void 0)}function wf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function xc(){return!0}function s0(){return!1}function Ni(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xc:s0,this.isPropagationStopped=s0,this}return Wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),e}var Sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ag=Ni(Sl),rc=Wt({},Sl,{view:0,detail:0}),nT=Ni(rc),md,gd,Pl,Nh=Wt({},rc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pl&&(Pl&&n.type==="mousemove"?(md=n.screenX-Pl.screenX,gd=n.screenY-Pl.screenY):gd=md=0,Pl=n),md)},movementY:function(n){return"movementY"in n?n.movementY:gd}}),o0=Ni(Nh),iT=Wt({},Nh,{dataTransfer:0}),rT=Ni(iT),sT=Wt({},rc,{relatedTarget:0}),_d=Ni(sT),oT=Wt({},Sl,{animationName:0,elapsedTime:0,pseudoElement:0}),aT=Ni(oT),lT=Wt({},Sl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uT=Ni(lT),cT=Wt({},Sl,{data:0}),a0=Ni(cT),fT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=dT[n])?!!e[n]:!1}function Cg(){return pT}var mT=Wt({},rc,{key:function(n){if(n.key){var e=fT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=wf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cg,charCode:function(n){return n.type==="keypress"?wf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),gT=Ni(mT),_T=Wt({},Nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l0=Ni(_T),vT=Wt({},rc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cg}),yT=Ni(vT),xT=Wt({},Sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),ST=Ni(xT),MT=Wt({},Nh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ET=Ni(MT),wT=[9,13,27,32],bg=Zr&&"CompositionEvent"in window,au=null;Zr&&"documentMode"in document&&(au=document.documentMode);var TT=Zr&&"TextEvent"in window&&!au,uS=Zr&&(!bg||au&&8<au&&11>=au),u0=" ",c0=!1;function cS(n,e){switch(n){case"keyup":return wT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fS(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Aa=!1;function AT(n,e){switch(n){case"compositionend":return fS(e);case"keypress":return e.which!==32?null:(c0=!0,u0);case"textInput":return n=e.data,n===u0&&c0?null:n;default:return null}}function CT(n,e){if(Aa)return n==="compositionend"||!bg&&cS(n,e)?(n=lS(),Ef=Tg=ys=null,Aa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uS&&e.locale!=="ko"?null:e.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function f0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!bT[n.type]:e==="textarea"}function hS(n,e,t,i){Gx(i),e=$f(e,"onChange"),0<e.length&&(t=new Ag("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var lu=null,Iu=null;function RT(n){ES(n,0)}function Oh(n){var e=Ra(n);if(Ox(e))return n}function PT(n,e){if(n==="change")return e}var dS=!1;if(Zr){var vd;if(Zr){var yd="oninput"in document;if(!yd){var h0=document.createElement("div");h0.setAttribute("oninput","return;"),yd=typeof h0.oninput=="function"}vd=yd}else vd=!1;dS=vd&&(!document.documentMode||9<document.documentMode)}function d0(){lu&&(lu.detachEvent("onpropertychange",pS),Iu=lu=null)}function pS(n){if(n.propertyName==="value"&&Oh(Iu)){var e=[];hS(e,Iu,n,xg(n)),jx(RT,e)}}function LT(n,e,t){n==="focusin"?(d0(),lu=e,Iu=t,lu.attachEvent("onpropertychange",pS)):n==="focusout"&&d0()}function DT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oh(Iu)}function UT(n,e){if(n==="click")return Oh(e)}function IT(n,e){if(n==="input"||n==="change")return Oh(e)}function NT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mr=typeof Object.is=="function"?Object.is:NT;function Nu(n,e){if(mr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Lp.call(e,r)||!mr(n[r],e[r]))return!1}return!0}function p0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function m0(n,e){var t=p0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=p0(t)}}function mS(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?mS(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function gS(){for(var n=window,e=Vf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Vf(n.document)}return e}function Rg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function OT(n){var e=gS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&mS(t.ownerDocument.documentElement,t)){if(i!==null&&Rg(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=m0(t,s);var o=m0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var FT=Zr&&"documentMode"in document&&11>=document.documentMode,Ca=null,Kp=null,uu=null,Zp=!1;function g0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Zp||Ca==null||Ca!==Vf(i)||(i=Ca,"selectionStart"in i&&Rg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),uu&&Nu(uu,i)||(uu=i,i=$f(Kp,"onSelect"),0<i.length&&(e=new Ag("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ca)))}function Sc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ba={animationend:Sc("Animation","AnimationEnd"),animationiteration:Sc("Animation","AnimationIteration"),animationstart:Sc("Animation","AnimationStart"),transitionend:Sc("Transition","TransitionEnd")},xd={},_S={};Zr&&(_S=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function Fh(n){if(xd[n])return xd[n];if(!ba[n])return n;var e=ba[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in _S)return xd[n]=e[t];return n}var vS=Fh("animationend"),yS=Fh("animationiteration"),xS=Fh("animationstart"),SS=Fh("transitionend"),MS=new Map,_0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $s(n,e){MS.set(n,e),Xo(e,[n])}for(var Sd=0;Sd<_0.length;Sd++){var Md=_0[Sd],kT=Md.toLowerCase(),zT=Md[0].toUpperCase()+Md.slice(1);$s(kT,"on"+zT)}$s(vS,"onAnimationEnd");$s(yS,"onAnimationIteration");$s(xS,"onAnimationStart");$s("dblclick","onDoubleClick");$s("focusin","onFocus");$s("focusout","onBlur");$s(SS,"onTransitionEnd");nl("onMouseEnter",["mouseout","mouseover"]);nl("onMouseLeave",["mouseout","mouseover"]);nl("onPointerEnter",["pointerout","pointerover"]);nl("onPointerLeave",["pointerout","pointerover"]);Xo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),BT=new Set("cancel close invalid load scroll toggle".split(" ").concat($l));function v0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,kw(i,e,void 0,n),n.currentTarget=null}function ES(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;v0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;v0(r,a,u),s=l}}}if(Wf)throw n=Yp,Wf=!1,Yp=null,n}function Lt(n,e){var t=e[nm];t===void 0&&(t=e[nm]=new Set);var i=n+"__bubble";t.has(i)||(wS(e,n,2,!1),t.add(i))}function Ed(n,e,t){var i=0;e&&(i|=4),wS(t,n,i,e)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function Ou(n){if(!n[Mc]){n[Mc]=!0,Lx.forEach(function(t){t!=="selectionchange"&&(BT.has(t)||Ed(t,!1,n),Ed(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Mc]||(e[Mc]=!0,Ed("selectionchange",!1,e))}}function wS(n,e,t,i){switch(aS(e)){case 1:var r=eT;break;case 4:r=tT;break;default:r=wg}t=r.bind(null,e,t,n),r=void 0,!Xp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function wd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=go(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}jx(function(){var u=s,c=xg(t),h=[];e:{var f=MS.get(n);if(f!==void 0){var p=Ag,_=n;switch(n){case"keypress":if(wf(t)===0)break e;case"keydown":case"keyup":p=gT;break;case"focusin":_="focus",p=_d;break;case"focusout":_="blur",p=_d;break;case"beforeblur":case"afterblur":p=_d;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=o0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=yT;break;case vS:case yS:case xS:p=aT;break;case SS:p=ST;break;case"scroll":p=nT;break;case"wheel":p=ET;break;case"copy":case"cut":case"paste":p=uT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=l0}var g=(e&4)!==0,m=!g&&n==="scroll",d=g?f!==null?f+"Capture":null:f;g=[];for(var v=u,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,d!==null&&(x=Pu(v,d),x!=null&&g.push(Fu(v,x,y)))),m)break;v=v.return}0<g.length&&(f=new p(f,_,null,t,c),h.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Gp&&(_=t.relatedTarget||t.fromElement)&&(go(_)||_[Qr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?go(_):null,_!==null&&(m=Yo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=o0,x="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=l0,x="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?f:Ra(p),y=_==null?f:Ra(_),f=new g(x,v+"leave",p,t,c),f.target=m,f.relatedTarget=y,x=null,go(c)===u&&(g=new g(d,v+"enter",_,t,c),g.target=y,g.relatedTarget=m,x=g),m=x,p&&_)t:{for(g=p,d=_,v=0,y=g;y;y=$o(y))v++;for(y=0,x=d;x;x=$o(x))y++;for(;0<v-y;)g=$o(g),v--;for(;0<y-v;)d=$o(d),y--;for(;v--;){if(g===d||d!==null&&g===d.alternate)break t;g=$o(g),d=$o(d)}g=null}else g=null;p!==null&&y0(h,f,p,g,!1),_!==null&&m!==null&&y0(h,m,_,g,!0)}}e:{if(f=u?Ra(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var w=PT;else if(f0(f))if(dS)w=IT;else{w=DT;var T=LT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=UT);if(w&&(w=w(n,u))){hS(h,w,t,c);break e}T&&T(n,f,u),n==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&kp(f,"number",f.value)}switch(T=u?Ra(u):window,n){case"focusin":(f0(T)||T.contentEditable==="true")&&(Ca=T,Kp=u,uu=null);break;case"focusout":uu=Kp=Ca=null;break;case"mousedown":Zp=!0;break;case"contextmenu":case"mouseup":case"dragend":Zp=!1,g0(h,t,c);break;case"selectionchange":if(FT)break;case"keydown":case"keyup":g0(h,t,c)}var E;if(bg)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Aa?cS(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(uS&&t.locale!=="ko"&&(Aa||P!=="onCompositionStart"?P==="onCompositionEnd"&&Aa&&(E=lS()):(ys=c,Tg="value"in ys?ys.value:ys.textContent,Aa=!0)),T=$f(u,P),0<T.length&&(P=new a0(P,n,null,t,c),h.push({event:P,listeners:T}),E?P.data=E:(E=fS(t),E!==null&&(P.data=E)))),(E=TT?AT(n,t):CT(n,t))&&(u=$f(u,"onBeforeInput"),0<u.length&&(c=new a0("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=E))}ES(h,e)})}function Fu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function $f(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Pu(n,t),s!=null&&i.unshift(Fu(n,s,r)),s=Pu(n,e),s!=null&&i.push(Fu(n,s,r))),n=n.return}return i}function $o(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function y0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Pu(t,s),l!=null&&o.unshift(Fu(t,l,a))):r||(l=Pu(t,s),l!=null&&o.push(Fu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var HT=/\r\n?/g,VT=/\u0000|\uFFFD/g;function x0(n){return(typeof n=="string"?n:""+n).replace(HT,`
`).replace(VT,"")}function Ec(n,e,t){if(e=x0(e),x0(n)!==e&&t)throw Error(ue(425))}function Kf(){}var Qp=null,Jp=null;function em(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tm=typeof setTimeout=="function"?setTimeout:void 0,GT=typeof clearTimeout=="function"?clearTimeout:void 0,S0=typeof Promise=="function"?Promise:void 0,WT=typeof queueMicrotask=="function"?queueMicrotask:typeof S0<"u"?function(n){return S0.resolve(null).then(n).catch(XT)}:tm;function XT(n){setTimeout(function(){throw n})}function Td(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Uu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Uu(e)}function Ls(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function M0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ml=Math.random().toString(36).slice(2),Sr="__reactFiber$"+Ml,ku="__reactProps$"+Ml,Qr="__reactContainer$"+Ml,nm="__reactEvents$"+Ml,YT="__reactListeners$"+Ml,jT="__reactHandles$"+Ml;function go(n){var e=n[Sr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Qr]||t[Sr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=M0(n);n!==null;){if(t=n[Sr])return t;n=M0(n)}return e}n=t,t=n.parentNode}return null}function sc(n){return n=n[Sr]||n[Qr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ra(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ue(33))}function kh(n){return n[ku]||null}var im=[],Pa=-1;function Ks(n){return{current:n}}function Ut(n){0>Pa||(n.current=im[Pa],im[Pa]=null,Pa--)}function Pt(n,e){Pa++,im[Pa]=n.current,n.current=e}var Gs={},On=Ks(Gs),ai=Ks(!1),Oo=Gs;function il(n,e){var t=n.type.contextTypes;if(!t)return Gs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function li(n){return n=n.childContextTypes,n!=null}function Zf(){Ut(ai),Ut(On)}function E0(n,e,t){if(On.current!==Gs)throw Error(ue(168));Pt(On,e),Pt(ai,t)}function TS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,Lw(n)||"Unknown",r));return Wt({},t,i)}function Qf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Gs,Oo=On.current,Pt(On,n),Pt(ai,ai.current),!0}function w0(n,e,t){var i=n.stateNode;if(!i)throw Error(ue(169));t?(n=TS(n,e,Oo),i.__reactInternalMemoizedMergedChildContext=n,Ut(ai),Ut(On),Pt(On,n)):Ut(ai),Pt(ai,t)}var Br=null,zh=!1,Ad=!1;function AS(n){Br===null?Br=[n]:Br.push(n)}function qT(n){zh=!0,AS(n)}function Zs(){if(!Ad&&Br!==null){Ad=!0;var n=0,e=wt;try{var t=Br;for(wt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Br=null,zh=!1}catch(r){throw Br!==null&&(Br=Br.slice(n+1)),Zx(Sg,Zs),r}finally{wt=e,Ad=!1}}return null}var La=[],Da=0,Jf=null,eh=0,Bi=[],Hi=0,Fo=null,Wr=1,Xr="";function ao(n,e){La[Da++]=eh,La[Da++]=Jf,Jf=n,eh=e}function CS(n,e,t){Bi[Hi++]=Wr,Bi[Hi++]=Xr,Bi[Hi++]=Fo,Fo=n;var i=Wr;n=Xr;var r=32-hr(i)-1;i&=~(1<<r),t+=1;var s=32-hr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wr=1<<32-hr(e)+r|t<<r|i,Xr=s+n}else Wr=1<<s|t<<r|i,Xr=n}function Pg(n){n.return!==null&&(ao(n,1),CS(n,1,0))}function Lg(n){for(;n===Jf;)Jf=La[--Da],La[Da]=null,eh=La[--Da],La[Da]=null;for(;n===Fo;)Fo=Bi[--Hi],Bi[Hi]=null,Xr=Bi[--Hi],Bi[Hi]=null,Wr=Bi[--Hi],Bi[Hi]=null}var Ri=null,Ai=null,Ot=!1,fr=null;function bS(n,e){var t=$i(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function T0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ri=n,Ai=Ls(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ri=n,Ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Fo!==null?{id:Wr,overflow:Xr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=$i(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ri=n,Ai=null,!0):!1;default:return!1}}function rm(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sm(n){if(Ot){var e=Ai;if(e){var t=e;if(!T0(n,e)){if(rm(n))throw Error(ue(418));e=Ls(t.nextSibling);var i=Ri;e&&T0(n,e)?bS(i,t):(n.flags=n.flags&-4097|2,Ot=!1,Ri=n)}}else{if(rm(n))throw Error(ue(418));n.flags=n.flags&-4097|2,Ot=!1,Ri=n}}}function A0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ri=n}function wc(n){if(n!==Ri)return!1;if(!Ot)return A0(n),Ot=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!em(n.type,n.memoizedProps)),e&&(e=Ai)){if(rm(n))throw RS(),Error(ue(418));for(;e;)bS(n,e),e=Ls(e.nextSibling)}if(A0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ue(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ai=Ls(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ai=null}}else Ai=Ri?Ls(n.stateNode.nextSibling):null;return!0}function RS(){for(var n=Ai;n;)n=Ls(n.nextSibling)}function rl(){Ai=Ri=null,Ot=!1}function Dg(n){fr===null?fr=[n]:fr.push(n)}var $T=rs.ReactCurrentBatchConfig;function Ll(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ue(309));var i=t.stateNode}if(!i)throw Error(ue(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ue(284));if(!t._owner)throw Error(ue(290,n))}return n}function Tc(n,e){throw n=Object.prototype.toString.call(e),Error(ue(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function C0(n){var e=n._init;return e(n._payload)}function PS(n){function e(d,v){if(n){var y=d.deletions;y===null?(d.deletions=[v],d.flags|=16):y.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Ns(d,v),d.index=0,d.sibling=null,d}function s(d,v,y){return d.index=y,n?(y=d.alternate,y!==null?(y=y.index,y<v?(d.flags|=2,v):y):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,y,x){return v===null||v.tag!==6?(v=Ud(y,d.mode,x),v.return=d,v):(v=r(v,y),v.return=d,v)}function l(d,v,y,x){var w=y.type;return w===Ta?c(d,v,y.props.children,x,y.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===hs&&C0(w)===v.type)?(x=r(v,y.props),x.ref=Ll(d,v,y),x.return=d,x):(x=Lf(y.type,y.key,y.props,null,d.mode,x),x.ref=Ll(d,v,y),x.return=d,x)}function u(d,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Id(y,d.mode,x),v.return=d,v):(v=r(v,y.children||[]),v.return=d,v)}function c(d,v,y,x,w){return v===null||v.tag!==7?(v=wo(y,d.mode,x,w),v.return=d,v):(v=r(v,y),v.return=d,v)}function h(d,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ud(""+v,d.mode,y),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pc:return y=Lf(v.type,v.key,v.props,null,d.mode,y),y.ref=Ll(d,null,v),y.return=d,y;case wa:return v=Id(v,d.mode,y),v.return=d,v;case hs:var x=v._init;return h(d,x(v._payload),y)}if(jl(v)||Al(v))return v=wo(v,d.mode,y,null),v.return=d,v;Tc(d,v)}return null}function f(d,v,y,x){var w=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return w!==null?null:a(d,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pc:return y.key===w?l(d,v,y,x):null;case wa:return y.key===w?u(d,v,y,x):null;case hs:return w=y._init,f(d,v,w(y._payload),x)}if(jl(y)||Al(y))return w!==null?null:c(d,v,y,x,null);Tc(d,y)}return null}function p(d,v,y,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(y)||null,a(v,d,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pc:return d=d.get(x.key===null?y:x.key)||null,l(v,d,x,w);case wa:return d=d.get(x.key===null?y:x.key)||null,u(v,d,x,w);case hs:var T=x._init;return p(d,v,y,T(x._payload),w)}if(jl(x)||Al(x))return d=d.get(y)||null,c(v,d,x,w,null);Tc(v,x)}return null}function _(d,v,y,x){for(var w=null,T=null,E=v,P=v=0,S=null;E!==null&&P<y.length;P++){E.index>P?(S=E,E=null):S=E.sibling;var M=f(d,E,y[P],x);if(M===null){E===null&&(E=S);break}n&&E&&M.alternate===null&&e(d,E),v=s(M,v,P),T===null?w=M:T.sibling=M,T=M,E=S}if(P===y.length)return t(d,E),Ot&&ao(d,P),w;if(E===null){for(;P<y.length;P++)E=h(d,y[P],x),E!==null&&(v=s(E,v,P),T===null?w=E:T.sibling=E,T=E);return Ot&&ao(d,P),w}for(E=i(d,E);P<y.length;P++)S=p(E,d,P,y[P],x),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?P:S.key),v=s(S,v,P),T===null?w=S:T.sibling=S,T=S);return n&&E.forEach(function(k){return e(d,k)}),Ot&&ao(d,P),w}function g(d,v,y,x){var w=Al(y);if(typeof w!="function")throw Error(ue(150));if(y=w.call(y),y==null)throw Error(ue(151));for(var T=w=null,E=v,P=v=0,S=null,M=y.next();E!==null&&!M.done;P++,M=y.next()){E.index>P?(S=E,E=null):S=E.sibling;var k=f(d,E,M.value,x);if(k===null){E===null&&(E=S);break}n&&E&&k.alternate===null&&e(d,E),v=s(k,v,P),T===null?w=k:T.sibling=k,T=k,E=S}if(M.done)return t(d,E),Ot&&ao(d,P),w;if(E===null){for(;!M.done;P++,M=y.next())M=h(d,M.value,x),M!==null&&(v=s(M,v,P),T===null?w=M:T.sibling=M,T=M);return Ot&&ao(d,P),w}for(E=i(d,E);!M.done;P++,M=y.next())M=p(E,d,P,M.value,x),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?P:M.key),v=s(M,v,P),T===null?w=M:T.sibling=M,T=M);return n&&E.forEach(function(O){return e(d,O)}),Ot&&ao(d,P),w}function m(d,v,y,x){if(typeof y=="object"&&y!==null&&y.type===Ta&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pc:e:{for(var w=y.key,T=v;T!==null;){if(T.key===w){if(w=y.type,w===Ta){if(T.tag===7){t(d,T.sibling),v=r(T,y.props.children),v.return=d,d=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===hs&&C0(w)===T.type){t(d,T.sibling),v=r(T,y.props),v.ref=Ll(d,T,y),v.return=d,d=v;break e}t(d,T);break}else e(d,T);T=T.sibling}y.type===Ta?(v=wo(y.props.children,d.mode,x,y.key),v.return=d,d=v):(x=Lf(y.type,y.key,y.props,null,d.mode,x),x.ref=Ll(d,v,y),x.return=d,d=x)}return o(d);case wa:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(d,v.sibling),v=r(v,y.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=Id(y,d.mode,x),v.return=d,d=v}return o(d);case hs:return T=y._init,m(d,v,T(y._payload),x)}if(jl(y))return _(d,v,y,x);if(Al(y))return g(d,v,y,x);Tc(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,y),v.return=d,d=v):(t(d,v),v=Ud(y,d.mode,x),v.return=d,d=v),o(d)):t(d,v)}return m}var sl=PS(!0),LS=PS(!1),th=Ks(null),nh=null,Ua=null,Ug=null;function Ig(){Ug=Ua=nh=null}function Ng(n){var e=th.current;Ut(th),n._currentValue=e}function om(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Xa(n,e){nh=n,Ug=Ua=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(oi=!0),n.firstContext=null)}function tr(n){var e=n._currentValue;if(Ug!==n)if(n={context:n,memoizedValue:e,next:null},Ua===null){if(nh===null)throw Error(ue(308));Ua=n,nh.dependencies={lanes:0,firstContext:n}}else Ua=Ua.next=n;return e}var _o=null;function Og(n){_o===null?_o=[n]:_o.push(n)}function DS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Og(e)):(t.next=r.next,r.next=t),e.interleaved=t,Jr(n,i)}function Jr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ds=!1;function Fg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function US(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function qr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ds(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,yt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Jr(n,t)}return r=i.interleaved,r===null?(e.next=e,Og(i)):(e.next=r.next,r.next=e),i.interleaved=e,Jr(n,t)}function Tf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Mg(n,t)}}function b0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ih(n,e,t,i){var r=n.updateQueue;ds=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){h=_.call(p,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,h,f):_,f==null)break e;h=Wt({},h,f);break e;case 2:ds=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zo|=o,n.lanes=o,n.memoizedState=h}}function R0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var oc={},Cr=Ks(oc),zu=Ks(oc),Bu=Ks(oc);function vo(n){if(n===oc)throw Error(ue(174));return n}function kg(n,e){switch(Pt(Bu,e),Pt(zu,n),Pt(Cr,oc),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Bp(e,n)}Ut(Cr),Pt(Cr,e)}function ol(){Ut(Cr),Ut(zu),Ut(Bu)}function IS(n){vo(Bu.current);var e=vo(Cr.current),t=Bp(e,n.type);e!==t&&(Pt(zu,n),Pt(Cr,t))}function zg(n){zu.current===n&&(Ut(Cr),Ut(zu))}var Bt=Ks(0);function rh(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cd=[];function Bg(){for(var n=0;n<Cd.length;n++)Cd[n]._workInProgressVersionPrimary=null;Cd.length=0}var Af=rs.ReactCurrentDispatcher,bd=rs.ReactCurrentBatchConfig,ko=0,Gt=null,sn=null,pn=null,sh=!1,cu=!1,Hu=0,KT=0;function Tn(){throw Error(ue(321))}function Hg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mr(n[t],e[t]))return!1;return!0}function Vg(n,e,t,i,r,s){if(ko=s,Gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Af.current=n===null||n.memoizedState===null?eA:tA,n=t(i,r),cu){s=0;do{if(cu=!1,Hu=0,25<=s)throw Error(ue(301));s+=1,pn=sn=null,e.updateQueue=null,Af.current=nA,n=t(i,r)}while(cu)}if(Af.current=oh,e=sn!==null&&sn.next!==null,ko=0,pn=sn=Gt=null,sh=!1,e)throw Error(ue(300));return n}function Gg(){var n=Hu!==0;return Hu=0,n}function _r(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Gt.memoizedState=pn=n:pn=pn.next=n,pn}function nr(){if(sn===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var e=pn===null?Gt.memoizedState:pn.next;if(e!==null)pn=e,sn=n;else{if(n===null)throw Error(ue(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},pn===null?Gt.memoizedState=pn=n:pn=pn.next=n}return pn}function Vu(n,e){return typeof e=="function"?e(n):e}function Rd(n){var e=nr(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=sn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ko&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Gt.lanes|=c,zo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,mr(i,e.memoizedState)||(oi=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Gt.lanes|=s,zo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Pd(n){var e=nr(),t=e.queue;if(t===null)throw Error(ue(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);mr(s,e.memoizedState)||(oi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function NS(){}function OS(n,e){var t=Gt,i=nr(),r=e(),s=!mr(i.memoizedState,r);if(s&&(i.memoizedState=r,oi=!0),i=i.queue,Wg(zS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||pn!==null&&pn.memoizedState.tag&1){if(t.flags|=2048,Gu(9,kS.bind(null,t,i,r,e),void 0,null),gn===null)throw Error(ue(349));ko&30||FS(t,e,r)}return r}function FS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Gt.updateQueue,e===null?(e={lastEffect:null,stores:null},Gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function kS(n,e,t,i){e.value=t,e.getSnapshot=i,BS(e)&&HS(n)}function zS(n,e,t){return t(function(){BS(e)&&HS(n)})}function BS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mr(n,t)}catch{return!0}}function HS(n){var e=Jr(n,1);e!==null&&dr(e,n,1,-1)}function P0(n){var e=_r();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vu,lastRenderedState:n},e.queue=n,n=n.dispatch=JT.bind(null,Gt,n),[e.memoizedState,n]}function Gu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Gt.updateQueue,e===null?(e={lastEffect:null,stores:null},Gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function VS(){return nr().memoizedState}function Cf(n,e,t,i){var r=_r();Gt.flags|=n,r.memoizedState=Gu(1|e,t,void 0,i===void 0?null:i)}function Bh(n,e,t,i){var r=nr();i=i===void 0?null:i;var s=void 0;if(sn!==null){var o=sn.memoizedState;if(s=o.destroy,i!==null&&Hg(i,o.deps)){r.memoizedState=Gu(e,t,s,i);return}}Gt.flags|=n,r.memoizedState=Gu(1|e,t,s,i)}function L0(n,e){return Cf(8390656,8,n,e)}function Wg(n,e){return Bh(2048,8,n,e)}function GS(n,e){return Bh(4,2,n,e)}function WS(n,e){return Bh(4,4,n,e)}function XS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function YS(n,e,t){return t=t!=null?t.concat([n]):null,Bh(4,4,XS.bind(null,e,n),t)}function Xg(){}function jS(n,e){var t=nr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Hg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function qS(n,e){var t=nr();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Hg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function $S(n,e,t){return ko&21?(mr(t,e)||(t=eS(),Gt.lanes|=t,zo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,oi=!0),n.memoizedState=t)}function ZT(n,e){var t=wt;wt=t!==0&&4>t?t:4,n(!0);var i=bd.transition;bd.transition={};try{n(!1),e()}finally{wt=t,bd.transition=i}}function KS(){return nr().memoizedState}function QT(n,e,t){var i=Is(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ZS(n))QS(e,t);else if(t=DS(n,e,t,i),t!==null){var r=Kn();dr(t,n,i,r),JS(t,e,i)}}function JT(n,e,t){var i=Is(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ZS(n))QS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,mr(a,o)){var l=e.interleaved;l===null?(r.next=r,Og(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=DS(n,e,r,i),t!==null&&(r=Kn(),dr(t,n,i,r),JS(t,e,i))}}function ZS(n){var e=n.alternate;return n===Gt||e!==null&&e===Gt}function QS(n,e){cu=sh=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function JS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Mg(n,t)}}var oh={readContext:tr,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},eA={readContext:tr,useCallback:function(n,e){return _r().memoizedState=[n,e===void 0?null:e],n},useContext:tr,useEffect:L0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Cf(4194308,4,XS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Cf(4194308,4,n,e)},useInsertionEffect:function(n,e){return Cf(4,2,n,e)},useMemo:function(n,e){var t=_r();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=_r();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=QT.bind(null,Gt,n),[i.memoizedState,n]},useRef:function(n){var e=_r();return n={current:n},e.memoizedState=n},useState:P0,useDebugValue:Xg,useDeferredValue:function(n){return _r().memoizedState=n},useTransition:function(){var n=P0(!1),e=n[0];return n=ZT.bind(null,n[1]),_r().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Gt,r=_r();if(Ot){if(t===void 0)throw Error(ue(407));t=t()}else{if(t=e(),gn===null)throw Error(ue(349));ko&30||FS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,L0(zS.bind(null,i,s,n),[n]),i.flags|=2048,Gu(9,kS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=_r(),e=gn.identifierPrefix;if(Ot){var t=Xr,i=Wr;t=(i&~(1<<32-hr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Hu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=KT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},tA={readContext:tr,useCallback:jS,useContext:tr,useEffect:Wg,useImperativeHandle:YS,useInsertionEffect:GS,useLayoutEffect:WS,useMemo:qS,useReducer:Rd,useRef:VS,useState:function(){return Rd(Vu)},useDebugValue:Xg,useDeferredValue:function(n){var e=nr();return $S(e,sn.memoizedState,n)},useTransition:function(){var n=Rd(Vu)[0],e=nr().memoizedState;return[n,e]},useMutableSource:NS,useSyncExternalStore:OS,useId:KS,unstable_isNewReconciler:!1},nA={readContext:tr,useCallback:jS,useContext:tr,useEffect:Wg,useImperativeHandle:YS,useInsertionEffect:GS,useLayoutEffect:WS,useMemo:qS,useReducer:Pd,useRef:VS,useState:function(){return Pd(Vu)},useDebugValue:Xg,useDeferredValue:function(n){var e=nr();return sn===null?e.memoizedState=n:$S(e,sn.memoizedState,n)},useTransition:function(){var n=Pd(Vu)[0],e=nr().memoizedState;return[n,e]},useMutableSource:NS,useSyncExternalStore:OS,useId:KS,unstable_isNewReconciler:!1};function lr(n,e){if(n&&n.defaultProps){e=Wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function am(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Hh={isMounted:function(n){return(n=n._reactInternals)?Yo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Kn(),r=Is(n),s=qr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ds(n,s,r),e!==null&&(dr(e,n,r,i),Tf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Kn(),r=Is(n),s=qr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ds(n,s,r),e!==null&&(dr(e,n,r,i),Tf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Kn(),i=Is(n),r=qr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ds(n,r,i),e!==null&&(dr(e,n,i,t),Tf(e,n,i))}};function D0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Nu(t,i)||!Nu(r,s):!0}function eM(n,e,t){var i=!1,r=Gs,s=e.contextType;return typeof s=="object"&&s!==null?s=tr(s):(r=li(e)?Oo:On.current,i=e.contextTypes,s=(i=i!=null)?il(n,r):Gs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function U0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Hh.enqueueReplaceState(e,e.state,null)}function lm(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Fg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=tr(s):(s=li(e)?Oo:On.current,r.context=il(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(am(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hh.enqueueReplaceState(r,r.state,null),ih(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function al(n,e){try{var t="",i=e;do t+=Pw(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ld(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function um(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var iA=typeof WeakMap=="function"?WeakMap:Map;function tM(n,e,t){t=qr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){lh||(lh=!0,ym=i),um(n,e)},t}function nM(n,e,t){t=qr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){um(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){um(n,e),typeof i!="function"&&(Us===null?Us=new Set([this]):Us.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function I0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new iA;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=_A.bind(null,n,e,t),e.then(n,n))}function N0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function O0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=qr(-1,1),e.tag=2,Ds(t,e,1))),t.lanes|=1),n)}var rA=rs.ReactCurrentOwner,oi=!1;function Gn(n,e,t,i){e.child=n===null?LS(e,null,t,i):sl(e,n.child,t,i)}function F0(n,e,t,i,r){t=t.render;var s=e.ref;return Xa(e,r),i=Vg(n,e,t,i,s,r),t=Gg(),n!==null&&!oi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,es(n,e,r)):(Ot&&t&&Pg(e),e.flags|=1,Gn(n,e,i,r),e.child)}function k0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Jg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,iM(n,e,s,i,r)):(n=Lf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Nu,t(o,i)&&n.ref===e.ref)return es(n,e,r)}return e.flags|=1,n=Ns(s,i),n.ref=e.ref,n.return=e,e.child=n}function iM(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Nu(s,i)&&n.ref===e.ref)if(oi=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(oi=!0);else return e.lanes=n.lanes,es(n,e,r)}return cm(n,e,t,i,r)}function rM(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(Na,yi),yi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Pt(Na,yi),yi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Pt(Na,yi),yi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Pt(Na,yi),yi|=i;return Gn(n,e,r,t),e.child}function sM(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function cm(n,e,t,i,r){var s=li(t)?Oo:On.current;return s=il(e,s),Xa(e,r),t=Vg(n,e,t,i,s,r),i=Gg(),n!==null&&!oi?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,es(n,e,r)):(Ot&&i&&Pg(e),e.flags|=1,Gn(n,e,t,r),e.child)}function z0(n,e,t,i,r){if(li(t)){var s=!0;Qf(e)}else s=!1;if(Xa(e,r),e.stateNode===null)bf(n,e),eM(e,t,i),lm(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=tr(u):(u=li(t)?Oo:On.current,u=il(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&U0(e,o,i,u),ds=!1;var f=e.memoizedState;o.state=f,ih(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ai.current||ds?(typeof c=="function"&&(am(e,t,c,i),l=e.memoizedState),(a=ds||D0(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,US(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:lr(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=tr(l):(l=li(t)?Oo:On.current,l=il(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&U0(e,o,i,l),ds=!1,f=e.memoizedState,o.state=f,ih(e,i,o,r);var _=e.memoizedState;a!==h||f!==_||ai.current||ds?(typeof p=="function"&&(am(e,t,p,i),_=e.memoizedState),(u=ds||D0(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return fm(n,e,t,i,s,r)}function fm(n,e,t,i,r,s){sM(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&w0(e,t,!1),es(n,e,s);i=e.stateNode,rA.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=sl(e,n.child,null,s),e.child=sl(e,null,a,s)):Gn(n,e,a,s),e.memoizedState=i.state,r&&w0(e,t,!0),e.child}function oM(n){var e=n.stateNode;e.pendingContext?E0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&E0(n,e.context,!1),kg(n,e.containerInfo)}function B0(n,e,t,i,r){return rl(),Dg(r),e.flags|=256,Gn(n,e,t,i),e.child}var hm={dehydrated:null,treeContext:null,retryLane:0};function dm(n){return{baseLanes:n,cachePool:null,transitions:null}}function aM(n,e,t){var i=e.pendingProps,r=Bt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Pt(Bt,r&1),n===null)return sm(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wh(o,i,0,null),n=wo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=dm(t),e.memoizedState=hm,n):Yg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return sA(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ns(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ns(a,s):(s=wo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?dm(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=hm,i}return s=n.child,n=s.sibling,i=Ns(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Yg(n,e){return e=Wh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ac(n,e,t,i){return i!==null&&Dg(i),sl(e,n.child,null,t),n=Yg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function sA(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Ld(Error(ue(422))),Ac(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wh({mode:"visible",children:i.children},r,0,null),s=wo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&sl(e,n.child,null,o),e.child.memoizedState=dm(o),e.memoizedState=hm,s);if(!(e.mode&1))return Ac(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=Ld(s,i,void 0),Ac(n,e,o,i)}if(a=(o&n.childLanes)!==0,oi||a){if(i=gn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Jr(n,r),dr(i,n,r,-1))}return Qg(),i=Ld(Error(ue(421))),Ac(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=vA.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ai=Ls(r.nextSibling),Ri=e,Ot=!0,fr=null,n!==null&&(Bi[Hi++]=Wr,Bi[Hi++]=Xr,Bi[Hi++]=Fo,Wr=n.id,Xr=n.overflow,Fo=e),e=Yg(e,i.children),e.flags|=4096,e)}function H0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),om(n.return,e,t)}function Dd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function lM(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Gn(n,e,i.children,t),i=Bt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&H0(n,t,e);else if(n.tag===19)H0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Pt(Bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&rh(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Dd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&rh(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Dd(e,!0,t,null,s);break;case"together":Dd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function es(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),zo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ue(153));if(e.child!==null){for(n=e.child,t=Ns(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ns(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function oA(n,e,t){switch(e.tag){case 3:oM(e),rl();break;case 5:IS(e);break;case 1:li(e.type)&&Qf(e);break;case 4:kg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Pt(th,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Pt(Bt,Bt.current&1),e.flags|=128,null):t&e.child.childLanes?aM(n,e,t):(Pt(Bt,Bt.current&1),n=es(n,e,t),n!==null?n.sibling:null);Pt(Bt,Bt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return lM(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Pt(Bt,Bt.current),i)break;return null;case 22:case 23:return e.lanes=0,rM(n,e,t)}return es(n,e,t)}var uM,pm,cM,fM;uM=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};pm=function(){};cM=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,vo(Cr.current);var s=null;switch(t){case"input":r=Op(n,r),i=Op(n,i),s=[];break;case"select":r=Wt({},r,{value:void 0}),i=Wt({},i,{value:void 0}),s=[];break;case"textarea":r=zp(n,r),i=zp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Kf)}Hp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Lt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};fM=function(n,e,t,i){t!==i&&(e.flags|=4)};function Dl(n,e){if(!Ot)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function An(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function aA(n,e,t){var i=e.pendingProps;switch(Lg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(e),null;case 1:return li(e.type)&&Zf(),An(e),null;case 3:return i=e.stateNode,ol(),Ut(ai),Ut(On),Bg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(wc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fr!==null&&(Mm(fr),fr=null))),pm(n,e),An(e),null;case 5:zg(e);var r=vo(Bu.current);if(t=e.type,n!==null&&e.stateNode!=null)cM(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return An(e),null}if(n=vo(Cr.current),wc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Sr]=e,i[ku]=s,n=(e.mode&1)!==0,t){case"dialog":Lt("cancel",i),Lt("close",i);break;case"iframe":case"object":case"embed":Lt("load",i);break;case"video":case"audio":for(r=0;r<$l.length;r++)Lt($l[r],i);break;case"source":Lt("error",i);break;case"img":case"image":case"link":Lt("error",i),Lt("load",i);break;case"details":Lt("toggle",i);break;case"input":K_(i,s),Lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Lt("invalid",i);break;case"textarea":Q_(i,s),Lt("invalid",i)}Hp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ec(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ec(i.textContent,a,n),r=["children",""+a]):bu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Lt("scroll",i)}switch(t){case"input":mc(i),Z_(i,s,!0);break;case"textarea":mc(i),J_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Kf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=zx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Sr]=e,n[ku]=i,uM(n,e,!1,!1),e.stateNode=n;e:{switch(o=Vp(t,i),t){case"dialog":Lt("cancel",n),Lt("close",n),r=i;break;case"iframe":case"object":case"embed":Lt("load",n),r=i;break;case"video":case"audio":for(r=0;r<$l.length;r++)Lt($l[r],n);r=i;break;case"source":Lt("error",n),r=i;break;case"img":case"image":case"link":Lt("error",n),Lt("load",n),r=i;break;case"details":Lt("toggle",n),r=i;break;case"input":K_(n,i),r=Op(n,i),Lt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Wt({},i,{value:void 0}),Lt("invalid",n);break;case"textarea":Q_(n,i),r=zp(n,i),Lt("invalid",n);break;default:r=i}Hp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Vx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Bx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ru(n,l):typeof l=="number"&&Ru(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Lt("scroll",n):l!=null&&gg(n,s,l,o))}switch(t){case"input":mc(n),Z_(n,i,!1);break;case"textarea":mc(n),J_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Vs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ha(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ha(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Kf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return An(e),null;case 6:if(n&&e.stateNode!=null)fM(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(t=vo(Bu.current),vo(Cr.current),wc(e)){if(i=e.stateNode,t=e.memoizedProps,i[Sr]=e,(s=i.nodeValue!==t)&&(n=Ri,n!==null))switch(n.tag){case 3:Ec(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ec(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Sr]=e,e.stateNode=i}return An(e),null;case 13:if(Ut(Bt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ot&&Ai!==null&&e.mode&1&&!(e.flags&128))RS(),rl(),e.flags|=98560,s=!1;else if(s=wc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[Sr]=e}else rl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;An(e),s=!1}else fr!==null&&(Mm(fr),fr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Bt.current&1?an===0&&(an=3):Qg())),e.updateQueue!==null&&(e.flags|=4),An(e),null);case 4:return ol(),pm(n,e),n===null&&Ou(e.stateNode.containerInfo),An(e),null;case 10:return Ng(e.type._context),An(e),null;case 17:return li(e.type)&&Zf(),An(e),null;case 19:if(Ut(Bt),s=e.memoizedState,s===null)return An(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Dl(s,!1);else{if(an!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=rh(n),o!==null){for(e.flags|=128,Dl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Pt(Bt,Bt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Kt()>ll&&(e.flags|=128,i=!0,Dl(s,!1),e.lanes=4194304)}else{if(!i)if(n=rh(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Dl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ot)return An(e),null}else 2*Kt()-s.renderingStartTime>ll&&t!==1073741824&&(e.flags|=128,i=!0,Dl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Kt(),e.sibling=null,t=Bt.current,Pt(Bt,i?t&1|2:t&1),e):(An(e),null);case 22:case 23:return Zg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yi&1073741824&&(An(e),e.subtreeFlags&6&&(e.flags|=8192)):An(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function lA(n,e){switch(Lg(e),e.tag){case 1:return li(e.type)&&Zf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ol(),Ut(ai),Ut(On),Bg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return zg(e),null;case 13:if(Ut(Bt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));rl()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ut(Bt),null;case 4:return ol(),null;case 10:return Ng(e.type._context),null;case 22:case 23:return Zg(),null;case 24:return null;default:return null}}var Cc=!1,Ln=!1,uA=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Ia(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Yt(n,e,i)}else t.current=null}function mm(n,e,t){try{t()}catch(i){Yt(n,e,i)}}var V0=!1;function cA(n,e){if(Qp=jf,n=gS(),Rg(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Jp={focusedElem:n,selectionRange:t},jf=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?g:lr(e.type,g),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(x){Yt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return _=V0,V0=!1,_}function fu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&mm(e,t,s)}r=r.next}while(r!==i)}}function Vh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function gm(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function hM(n){var e=n.alternate;e!==null&&(n.alternate=null,hM(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Sr],delete e[ku],delete e[nm],delete e[YT],delete e[jT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function dM(n){return n.tag===5||n.tag===3||n.tag===4}function G0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||dM(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _m(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Kf));else if(i!==4&&(n=n.child,n!==null))for(_m(n,e,t),n=n.sibling;n!==null;)_m(n,e,t),n=n.sibling}function vm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(vm(n,e,t),n=n.sibling;n!==null;)vm(n,e,t),n=n.sibling}var vn=null,ur=!1;function ss(n,e,t){for(t=t.child;t!==null;)pM(n,e,t),t=t.sibling}function pM(n,e,t){if(Ar&&typeof Ar.onCommitFiberUnmount=="function")try{Ar.onCommitFiberUnmount(Ih,t)}catch{}switch(t.tag){case 5:Ln||Ia(t,e);case 6:var i=vn,r=ur;vn=null,ss(n,e,t),vn=i,ur=r,vn!==null&&(ur?(n=vn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):vn.removeChild(t.stateNode));break;case 18:vn!==null&&(ur?(n=vn,t=t.stateNode,n.nodeType===8?Td(n.parentNode,t):n.nodeType===1&&Td(n,t),Uu(n)):Td(vn,t.stateNode));break;case 4:i=vn,r=ur,vn=t.stateNode.containerInfo,ur=!0,ss(n,e,t),vn=i,ur=r;break;case 0:case 11:case 14:case 15:if(!Ln&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mm(t,e,o),r=r.next}while(r!==i)}ss(n,e,t);break;case 1:if(!Ln&&(Ia(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Yt(t,e,a)}ss(n,e,t);break;case 21:ss(n,e,t);break;case 22:t.mode&1?(Ln=(i=Ln)||t.memoizedState!==null,ss(n,e,t),Ln=i):ss(n,e,t);break;default:ss(n,e,t)}}function W0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new uA),e.forEach(function(i){var r=yA.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ir(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:vn=a.stateNode,ur=!1;break e;case 3:vn=a.stateNode.containerInfo,ur=!0;break e;case 4:vn=a.stateNode.containerInfo,ur=!0;break e}a=a.return}if(vn===null)throw Error(ue(160));pM(s,o,r),vn=null,ur=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mM(e,n),e=e.sibling}function mM(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ir(e,n),gr(n),i&4){try{fu(3,n,n.return),Vh(3,n)}catch(g){Yt(n,n.return,g)}try{fu(5,n,n.return)}catch(g){Yt(n,n.return,g)}}break;case 1:ir(e,n),gr(n),i&512&&t!==null&&Ia(t,t.return);break;case 5:if(ir(e,n),gr(n),i&512&&t!==null&&Ia(t,t.return),n.flags&32){var r=n.stateNode;try{Ru(r,"")}catch(g){Yt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Fx(r,s),Vp(a,o);var u=Vp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Vx(r,h):c==="dangerouslySetInnerHTML"?Bx(r,h):c==="children"?Ru(r,h):gg(r,c,h,u)}switch(a){case"input":Fp(r,s);break;case"textarea":kx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ha(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ha(r,!!s.multiple,s.defaultValue,!0):Ha(r,!!s.multiple,s.multiple?[]:"",!1))}r[ku]=s}catch(g){Yt(n,n.return,g)}}break;case 6:if(ir(e,n),gr(n),i&4){if(n.stateNode===null)throw Error(ue(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Yt(n,n.return,g)}}break;case 3:if(ir(e,n),gr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Uu(e.containerInfo)}catch(g){Yt(n,n.return,g)}break;case 4:ir(e,n),gr(n);break;case 13:ir(e,n),gr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($g=Kt())),i&4&&W0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Ln=(u=Ln)||c,ir(e,n),Ln=u):ir(e,n),gr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Pe=n,c=n.child;c!==null;){for(h=Pe=c;Pe!==null;){switch(f=Pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:fu(4,f,f.return);break;case 1:Ia(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Yt(i,t,g)}}break;case 5:Ia(f,f.return);break;case 22:if(f.memoizedState!==null){Y0(h);continue}}p!==null?(p.return=f,Pe=p):Y0(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hx("display",o))}catch(g){Yt(n,n.return,g)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(g){Yt(n,n.return,g)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ir(e,n),gr(n),i&4&&W0(n);break;case 21:break;default:ir(e,n),gr(n)}}function gr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(dM(t)){var i=t;break e}t=t.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ru(r,""),i.flags&=-33);var s=G0(n);vm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=G0(n);_m(n,a,o);break;default:throw Error(ue(161))}}catch(l){Yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function fA(n,e,t){Pe=n,gM(n)}function gM(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Cc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ln;a=Cc;var u=Ln;if(Cc=o,(Ln=l)&&!u)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?j0(r):l!==null?(l.return=o,Pe=l):j0(r);for(;s!==null;)Pe=s,gM(s),s=s.sibling;Pe=r,Cc=a,Ln=u}X0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):X0(n)}}function X0(n){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ln||Vh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ln)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:lr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&R0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}R0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Uu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Ln||e.flags&512&&gm(e)}catch(f){Yt(e,e.return,f)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function Y0(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function j0(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Vh(4,e)}catch(l){Yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Yt(e,r,l)}}var s=e.return;try{gm(e)}catch(l){Yt(e,s,l)}break;case 5:var o=e.return;try{gm(e)}catch(l){Yt(e,o,l)}}}catch(l){Yt(e,e.return,l)}if(e===n){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var hA=Math.ceil,ah=rs.ReactCurrentDispatcher,jg=rs.ReactCurrentOwner,Qi=rs.ReactCurrentBatchConfig,yt=0,gn=null,tn=null,Sn=0,yi=0,Na=Ks(0),an=0,Wu=null,zo=0,Gh=0,qg=0,hu=null,ni=null,$g=0,ll=1/0,kr=null,lh=!1,ym=null,Us=null,bc=!1,xs=null,uh=0,du=0,xm=null,Rf=-1,Pf=0;function Kn(){return yt&6?Kt():Rf!==-1?Rf:Rf=Kt()}function Is(n){return n.mode&1?yt&2&&Sn!==0?Sn&-Sn:$T.transition!==null?(Pf===0&&(Pf=eS()),Pf):(n=wt,n!==0||(n=window.event,n=n===void 0?16:aS(n.type)),n):1}function dr(n,e,t,i){if(50<du)throw du=0,xm=null,Error(ue(185));ic(n,t,i),(!(yt&2)||n!==gn)&&(n===gn&&(!(yt&2)&&(Gh|=t),an===4&&_s(n,Sn)),ui(n,i),t===1&&yt===0&&!(e.mode&1)&&(ll=Kt()+500,zh&&Zs()))}function ui(n,e){var t=n.callbackNode;$w(n,e);var i=Yf(n,n===gn?Sn:0);if(i===0)t!==null&&n0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&n0(t),e===1)n.tag===0?qT(q0.bind(null,n)):AS(q0.bind(null,n)),WT(function(){!(yt&6)&&Zs()}),t=null;else{switch(tS(i)){case 1:t=Sg;break;case 4:t=Qx;break;case 16:t=Xf;break;case 536870912:t=Jx;break;default:t=Xf}t=wM(t,_M.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function _M(n,e){if(Rf=-1,Pf=0,yt&6)throw Error(ue(327));var t=n.callbackNode;if(Ya()&&n.callbackNode!==t)return null;var i=Yf(n,n===gn?Sn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ch(n,i);else{e=i;var r=yt;yt|=2;var s=yM();(gn!==n||Sn!==e)&&(kr=null,ll=Kt()+500,Eo(n,e));do try{mA();break}catch(a){vM(n,a)}while(!0);Ig(),ah.current=s,yt=r,tn!==null?e=0:(gn=null,Sn=0,e=an)}if(e!==0){if(e===2&&(r=jp(n),r!==0&&(i=r,e=Sm(n,r))),e===1)throw t=Wu,Eo(n,0),_s(n,i),ui(n,Kt()),t;if(e===6)_s(n,i);else{if(r=n.current.alternate,!(i&30)&&!dA(r)&&(e=ch(n,i),e===2&&(s=jp(n),s!==0&&(i=s,e=Sm(n,s))),e===1))throw t=Wu,Eo(n,0),_s(n,i),ui(n,Kt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:lo(n,ni,kr);break;case 3:if(_s(n,i),(i&130023424)===i&&(e=$g+500-Kt(),10<e)){if(Yf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Kn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=tm(lo.bind(null,n,ni,kr),e);break}lo(n,ni,kr);break;case 4:if(_s(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-hr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*hA(i/1960))-i,10<i){n.timeoutHandle=tm(lo.bind(null,n,ni,kr),i);break}lo(n,ni,kr);break;case 5:lo(n,ni,kr);break;default:throw Error(ue(329))}}}return ui(n,Kt()),n.callbackNode===t?_M.bind(null,n):null}function Sm(n,e){var t=hu;return n.current.memoizedState.isDehydrated&&(Eo(n,e).flags|=256),n=ch(n,e),n!==2&&(e=ni,ni=t,e!==null&&Mm(e)),n}function Mm(n){ni===null?ni=n:ni.push.apply(ni,n)}function dA(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!mr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _s(n,e){for(e&=~qg,e&=~Gh,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hr(e),i=1<<t;n[t]=-1,e&=~i}}function q0(n){if(yt&6)throw Error(ue(327));Ya();var e=Yf(n,0);if(!(e&1))return ui(n,Kt()),null;var t=ch(n,e);if(n.tag!==0&&t===2){var i=jp(n);i!==0&&(e=i,t=Sm(n,i))}if(t===1)throw t=Wu,Eo(n,0),_s(n,e),ui(n,Kt()),t;if(t===6)throw Error(ue(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,lo(n,ni,kr),ui(n,Kt()),null}function Kg(n,e){var t=yt;yt|=1;try{return n(e)}finally{yt=t,yt===0&&(ll=Kt()+500,zh&&Zs())}}function Bo(n){xs!==null&&xs.tag===0&&!(yt&6)&&Ya();var e=yt;yt|=1;var t=Qi.transition,i=wt;try{if(Qi.transition=null,wt=1,n)return n()}finally{wt=i,Qi.transition=t,yt=e,!(yt&6)&&Zs()}}function Zg(){yi=Na.current,Ut(Na)}function Eo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,GT(t)),tn!==null)for(t=tn.return;t!==null;){var i=t;switch(Lg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zf();break;case 3:ol(),Ut(ai),Ut(On),Bg();break;case 5:zg(i);break;case 4:ol();break;case 13:Ut(Bt);break;case 19:Ut(Bt);break;case 10:Ng(i.type._context);break;case 22:case 23:Zg()}t=t.return}if(gn=n,tn=n=Ns(n.current,null),Sn=yi=e,an=0,Wu=null,qg=Gh=zo=0,ni=hu=null,_o!==null){for(e=0;e<_o.length;e++)if(t=_o[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}_o=null}return n}function vM(n,e){do{var t=tn;try{if(Ig(),Af.current=oh,sh){for(var i=Gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sh=!1}if(ko=0,pn=sn=Gt=null,cu=!1,Hu=0,jg.current=null,t===null||t.return===null){an=1,Wu=e,tn=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Sn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=N0(o);if(p!==null){p.flags&=-257,O0(p,o,a,s,e),p.mode&1&&I0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){I0(s,u,e),Qg();break e}l=Error(ue(426))}}else if(Ot&&a.mode&1){var m=N0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),O0(m,o,a,s,e),Dg(al(l,a));break e}}s=l=al(l,a),an!==4&&(an=2),hu===null?hu=[s]:hu.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=tM(s,l,e);b0(s,d);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Us===null||!Us.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=nM(s,a,e);b0(s,x);break e}}s=s.return}while(s!==null)}SM(t)}catch(w){e=w,tn===t&&t!==null&&(tn=t=t.return);continue}break}while(!0)}function yM(){var n=ah.current;return ah.current=oh,n===null?oh:n}function Qg(){(an===0||an===3||an===2)&&(an=4),gn===null||!(zo&268435455)&&!(Gh&268435455)||_s(gn,Sn)}function ch(n,e){var t=yt;yt|=2;var i=yM();(gn!==n||Sn!==e)&&(kr=null,Eo(n,e));do try{pA();break}catch(r){vM(n,r)}while(!0);if(Ig(),yt=t,ah.current=i,tn!==null)throw Error(ue(261));return gn=null,Sn=0,an}function pA(){for(;tn!==null;)xM(tn)}function mA(){for(;tn!==null&&!Bw();)xM(tn)}function xM(n){var e=EM(n.alternate,n,yi);n.memoizedProps=n.pendingProps,e===null?SM(n):tn=e,jg.current=null}function SM(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=lA(t,e),t!==null){t.flags&=32767,tn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,tn=null;return}}else if(t=aA(t,e,yi),t!==null){tn=t;return}if(e=e.sibling,e!==null){tn=e;return}tn=e=n}while(e!==null);an===0&&(an=5)}function lo(n,e,t){var i=wt,r=Qi.transition;try{Qi.transition=null,wt=1,gA(n,e,t,i)}finally{Qi.transition=r,wt=i}return null}function gA(n,e,t,i){do Ya();while(xs!==null);if(yt&6)throw Error(ue(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ue(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Kw(n,s),n===gn&&(tn=gn=null,Sn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||bc||(bc=!0,wM(Xf,function(){return Ya(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Qi.transition,Qi.transition=null;var o=wt;wt=1;var a=yt;yt|=4,jg.current=null,cA(n,t),mM(t,n),OT(Jp),jf=!!Qp,Jp=Qp=null,n.current=t,fA(t),Hw(),yt=a,wt=o,Qi.transition=s}else n.current=t;if(bc&&(bc=!1,xs=n,uh=r),s=n.pendingLanes,s===0&&(Us=null),Ww(t.stateNode),ui(n,Kt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(lh)throw lh=!1,n=ym,ym=null,n;return uh&1&&n.tag!==0&&Ya(),s=n.pendingLanes,s&1?n===xm?du++:(du=0,xm=n):du=0,Zs(),null}function Ya(){if(xs!==null){var n=tS(uh),e=Qi.transition,t=wt;try{if(Qi.transition=null,wt=16>n?16:n,xs===null)var i=!1;else{if(n=xs,xs=null,uh=0,yt&6)throw Error(ue(331));var r=yt;for(yt|=4,Pe=n.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Pe=u;Pe!==null;){var c=Pe;switch(c.tag){case 0:case 11:case 15:fu(8,c,s)}var h=c.child;if(h!==null)h.return=c,Pe=h;else for(;Pe!==null;){c=Pe;var f=c.sibling,p=c.return;if(hM(c),c===u){Pe=null;break}if(f!==null){f.return=p,Pe=f;break}Pe=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fu(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Pe=d;break e}Pe=s.return}}var v=n.current;for(Pe=v;Pe!==null;){o=Pe;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Pe=y;else e:for(o=v;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vh(9,a)}}catch(w){Yt(a,a.return,w)}if(a===o){Pe=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Pe=x;break e}Pe=a.return}}if(yt=r,Zs(),Ar&&typeof Ar.onPostCommitFiberRoot=="function")try{Ar.onPostCommitFiberRoot(Ih,n)}catch{}i=!0}return i}finally{wt=t,Qi.transition=e}}return!1}function $0(n,e,t){e=al(t,e),e=tM(n,e,1),n=Ds(n,e,1),e=Kn(),n!==null&&(ic(n,1,e),ui(n,e))}function Yt(n,e,t){if(n.tag===3)$0(n,n,t);else for(;e!==null;){if(e.tag===3){$0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Us===null||!Us.has(i))){n=al(t,n),n=nM(e,n,1),e=Ds(e,n,1),n=Kn(),e!==null&&(ic(e,1,n),ui(e,n));break}}e=e.return}}function _A(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Kn(),n.pingedLanes|=n.suspendedLanes&t,gn===n&&(Sn&t)===t&&(an===4||an===3&&(Sn&130023424)===Sn&&500>Kt()-$g?Eo(n,0):qg|=t),ui(n,e)}function MM(n,e){e===0&&(n.mode&1?(e=vc,vc<<=1,!(vc&130023424)&&(vc=4194304)):e=1);var t=Kn();n=Jr(n,e),n!==null&&(ic(n,e,t),ui(n,t))}function vA(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),MM(n,t)}function yA(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),MM(n,t)}var EM;EM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ai.current)oi=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return oi=!1,oA(n,e,t);oi=!!(n.flags&131072)}else oi=!1,Ot&&e.flags&1048576&&CS(e,eh,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bf(n,e),n=e.pendingProps;var r=il(e,On.current);Xa(e,t),r=Vg(null,e,i,n,r,t);var s=Gg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,li(i)?(s=!0,Qf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fg(e),r.updater=Hh,e.stateNode=r,r._reactInternals=e,lm(e,i,n,t),e=fm(null,e,i,!0,s,t)):(e.tag=0,Ot&&s&&Pg(e),Gn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(bf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=SA(i),n=lr(i,n),r){case 0:e=cm(null,e,i,n,t);break e;case 1:e=z0(null,e,i,n,t);break e;case 11:e=F0(null,e,i,n,t);break e;case 14:e=k0(null,e,i,lr(i.type,n),t);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:lr(i,r),cm(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:lr(i,r),z0(n,e,i,r,t);case 3:e:{if(oM(e),n===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,US(n,e),ih(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=al(Error(ue(423)),e),e=B0(n,e,i,t,r);break e}else if(i!==r){r=al(Error(ue(424)),e),e=B0(n,e,i,t,r);break e}else for(Ai=Ls(e.stateNode.containerInfo.firstChild),Ri=e,Ot=!0,fr=null,t=LS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(rl(),i===r){e=es(n,e,t);break e}Gn(n,e,i,t)}e=e.child}return e;case 5:return IS(e),n===null&&sm(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,em(i,r)?o=null:s!==null&&em(i,s)&&(e.flags|=32),sM(n,e),Gn(n,e,o,t),e.child;case 6:return n===null&&sm(e),null;case 13:return aM(n,e,t);case 4:return kg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=sl(e,null,i,t):Gn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:lr(i,r),F0(n,e,i,r,t);case 7:return Gn(n,e,e.pendingProps,t),e.child;case 8:return Gn(n,e,e.pendingProps.children,t),e.child;case 12:return Gn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Pt(th,i._currentValue),i._currentValue=o,s!==null)if(mr(s.value,o)){if(s.children===r.children&&!ai.current){e=es(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=qr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),om(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),om(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Gn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xa(e,t),r=tr(r),i=i(r),e.flags|=1,Gn(n,e,i,t),e.child;case 14:return i=e.type,r=lr(i,e.pendingProps),r=lr(i.type,r),k0(n,e,i,r,t);case 15:return iM(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:lr(i,r),bf(n,e),e.tag=1,li(i)?(n=!0,Qf(e)):n=!1,Xa(e,t),eM(e,i,r),lm(e,i,r,t),fm(null,e,i,!0,n,t);case 19:return lM(n,e,t);case 22:return rM(n,e,t)}throw Error(ue(156,e.tag))};function wM(n,e){return Zx(n,e)}function xA(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $i(n,e,t,i){return new xA(n,e,t,i)}function Jg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function SA(n){if(typeof n=="function")return Jg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===vg)return 11;if(n===yg)return 14}return 2}function Ns(n,e){var t=n.alternate;return t===null?(t=$i(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Lf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Jg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ta:return wo(t.children,r,s,e);case _g:o=8,r|=8;break;case Dp:return n=$i(12,t,e,r|2),n.elementType=Dp,n.lanes=s,n;case Up:return n=$i(13,t,e,r),n.elementType=Up,n.lanes=s,n;case Ip:return n=$i(19,t,e,r),n.elementType=Ip,n.lanes=s,n;case Ix:return Wh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Dx:o=10;break e;case Ux:o=9;break e;case vg:o=11;break e;case yg:o=14;break e;case hs:o=16,i=null;break e}throw Error(ue(130,n==null?n:typeof n,""))}return e=$i(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function wo(n,e,t,i){return n=$i(7,n,i,e),n.lanes=t,n}function Wh(n,e,t,i){return n=$i(22,n,i,e),n.elementType=Ix,n.lanes=t,n.stateNode={isHidden:!1},n}function Ud(n,e,t){return n=$i(6,n,null,e),n.lanes=t,n}function Id(n,e,t){return e=$i(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function MA(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pd(0),this.expirationTimes=pd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function e_(n,e,t,i,r,s,o,a,l){return n=new MA(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$i(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fg(s),n}function EA(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function TM(n){if(!n)return Gs;n=n._reactInternals;e:{if(Yo(n)!==n||n.tag!==1)throw Error(ue(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(li(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(n.tag===1){var t=n.type;if(li(t))return TS(n,t,e)}return e}function AM(n,e,t,i,r,s,o,a,l){return n=e_(t,i,!0,n,r,s,o,a,l),n.context=TM(null),t=n.current,i=Kn(),r=Is(t),s=qr(i,r),s.callback=e??null,Ds(t,s,r),n.current.lanes=r,ic(n,r,i),ui(n,i),n}function Xh(n,e,t,i){var r=e.current,s=Kn(),o=Is(r);return t=TM(t),e.context===null?e.context=t:e.pendingContext=t,e=qr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ds(r,e,o),n!==null&&(dr(n,r,o,s),Tf(n,r,o)),o}function fh(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function K0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function t_(n,e){K0(n,e),(n=n.alternate)&&K0(n,e)}function wA(){return null}var CM=typeof reportError=="function"?reportError:function(n){console.error(n)};function n_(n){this._internalRoot=n}Yh.prototype.render=n_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ue(409));Xh(n,e,null,null)};Yh.prototype.unmount=n_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Bo(function(){Xh(null,n,null,null)}),e[Qr]=null}};function Yh(n){this._internalRoot=n}Yh.prototype.unstable_scheduleHydration=function(n){if(n){var e=rS();n={blockedOn:null,target:n,priority:e};for(var t=0;t<gs.length&&e!==0&&e<gs[t].priority;t++);gs.splice(t,0,n),t===0&&oS(n)}};function i_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Z0(){}function TA(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=fh(o);s.call(u)}}var o=AM(e,i,n,0,null,!1,!1,"",Z0);return n._reactRootContainer=o,n[Qr]=o.current,Ou(n.nodeType===8?n.parentNode:n),Bo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=fh(l);a.call(u)}}var l=e_(n,0,!1,null,null,!1,!1,"",Z0);return n._reactRootContainer=l,n[Qr]=l.current,Ou(n.nodeType===8?n.parentNode:n),Bo(function(){Xh(e,l,t,i)}),l}function qh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=fh(o);a.call(l)}}Xh(e,o,n,r)}else o=TA(t,e,n,r,i);return fh(o)}nS=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ql(e.pendingLanes);t!==0&&(Mg(e,t|1),ui(e,Kt()),!(yt&6)&&(ll=Kt()+500,Zs()))}break;case 13:Bo(function(){var i=Jr(n,1);if(i!==null){var r=Kn();dr(i,n,1,r)}}),t_(n,1)}};Eg=function(n){if(n.tag===13){var e=Jr(n,134217728);if(e!==null){var t=Kn();dr(e,n,134217728,t)}t_(n,134217728)}};iS=function(n){if(n.tag===13){var e=Is(n),t=Jr(n,e);if(t!==null){var i=Kn();dr(t,n,e,i)}t_(n,e)}};rS=function(){return wt};sS=function(n,e){var t=wt;try{return wt=n,e()}finally{wt=t}};Wp=function(n,e,t){switch(e){case"input":if(Fp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=kh(i);if(!r)throw Error(ue(90));Ox(i),Fp(i,r)}}}break;case"textarea":kx(n,t);break;case"select":e=t.value,e!=null&&Ha(n,!!t.multiple,e,!1)}};Xx=Kg;Yx=Bo;var AA={usingClientEntryPoint:!1,Events:[sc,Ra,kh,Gx,Wx,Kg]},Ul={findFiberByHostInstance:go,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CA={bundleType:Ul.bundleType,version:Ul.version,rendererPackageName:Ul.rendererPackageName,rendererConfig:Ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rs.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=$x(n),n===null?null:n.stateNode},findFiberByHostInstance:Ul.findFiberByHostInstance||wA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rc.isDisabled&&Rc.supportsFiber)try{Ih=Rc.inject(CA),Ar=Rc}catch{}}Ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AA;Ii.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!i_(e))throw Error(ue(200));return EA(n,e,null,t)};Ii.createRoot=function(n,e){if(!i_(n))throw Error(ue(299));var t=!1,i="",r=CM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=e_(n,1,!1,null,null,t,!1,i,r),n[Qr]=e.current,Ou(n.nodeType===8?n.parentNode:n),new n_(e)};Ii.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ue(188)):(n=Object.keys(n).join(","),Error(ue(268,n)));return n=$x(e),n=n===null?null:n.stateNode,n};Ii.flushSync=function(n){return Bo(n)};Ii.hydrate=function(n,e,t){if(!jh(e))throw Error(ue(200));return qh(null,n,e,!0,t)};Ii.hydrateRoot=function(n,e,t){if(!i_(n))throw Error(ue(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=CM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=AM(e,null,n,1,t??null,r,!1,s,o),n[Qr]=e.current,Ou(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Yh(e)};Ii.render=function(n,e,t){if(!jh(e))throw Error(ue(200));return qh(null,n,e,!1,t)};Ii.unmountComponentAtNode=function(n){if(!jh(n))throw Error(ue(40));return n._reactRootContainer?(Bo(function(){qh(null,null,n,!1,function(){n._reactRootContainer=null,n[Qr]=null})}),!0):!1};Ii.unstable_batchedUpdates=Kg;Ii.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!jh(t))throw Error(ue(200));if(n==null||n._reactInternals===void 0)throw Error(ue(38));return qh(n,e,t,!1,i)};Ii.version="18.3.1-next-f1338f8080-20240426";function bM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bM)}catch(n){console.error(n)}}bM(),bx.exports=Ii;var bA=bx.exports,Q0=bA;Pp.createRoot=Q0.createRoot,Pp.hydrateRoot=Q0.hydrateRoot;function zr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function RM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xu={duration:.5,overwrite:!1,delay:0},r_,Mn,Ft,Ki=1e8,Rt=1/Ki,Em=Math.PI*2,RA=Em/4,PA=0,PM=Math.sqrt,LA=Math.cos,DA=Math.sin,_n=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},ts=function(e){return typeof e=="number"},s_=function(e){return typeof e>"u"},Pr=function(e){return typeof e=="object"},ci=function(e){return e!==!1},o_=function(){return typeof window<"u"},Pc=function(e){return jt(e)||_n(e)},LM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,UA=/random\([^)]+\)/g,IA=/,\s*/g,J0=/(?:-?\.?\d|\.)+/gi,DM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Oa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,UM=/[+-]=-?[.\d]+/,NA=/[^,'"\[\]\s]+/gi,OA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,vr,wm,a_,Di={},hh={},IM,NM=function(e){return(hh=ul(e,Di))&&mi},l_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Yu=function(e,t){return!t&&console.warn(e)},OM=function(e,t){return e&&(Di[e]=t)&&hh&&(hh[e]=t)||Di},ju=function(){return 0},FA={suppressEvents:!0,isStart:!0,kill:!1},Df={suppressEvents:!0,kill:!1},kA={suppressEvents:!0},u_={},Os=[],Tm={},FM,Si={},Od={},ev=30,Uf=[],c_="",f_=function(e){var t=e[0],i,r;if(Pr(t)||jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Uf.length;r--&&!Uf[r].targetTest(t););i=Uf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new s1(e[r],i)))||e.splice(r,1);return e},To=function(e){return e._gsap||f_(Zi(e))[0]._gsap},kM=function(e,t,i){return(i=e[t])&&jt(i)?e[t]():s_(i)&&e.getAttribute&&e.getAttribute(t)||i},fi=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},ja=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},zA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},dh=function(){var e=Os.length,t=Os.slice(0),i,r;for(Tm={},Os.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},h_=function(e){return!!(e._initted||e._startAt||e.add)},zM=function(e,t,i,r){Os.length&&!Mn&&dh(),e.render(t,i,!!(Mn&&t<0&&h_(e))),Os.length&&!Mn&&dh()},BM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(NA).length<2?t:_n(e)?e.trim():e},HM=function(e){return e},Ui=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},BA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ul=function(e,t){for(var i in t)e[i]=t[i];return e},tv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Pr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ph=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},pu=function(e){var t=e.parent||Ht,i=e.keyframes?BA(In(e.keyframes)):Ui;if(ci(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},HA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},VM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},$h=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ws=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ao=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},VA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Am=function(e,t,i,r){return e._startAt&&(Mn?e._startAt.revert(Df):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},GA=function n(e){return!e||e._ts&&n(e.parent)},nv=function(e){return e._repeat?cl(e._tTime,e=e.duration()+e._rDelay)*e:0},cl=function(e,t){var i=Math.floor(e=zt(e/t));return e&&i===e?i-1:i},mh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Kh=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},Zh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=zt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Kh(e),i._dirty||Ao(i,e)),e},GM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=mh(e.rawTime(),t),(!t._dur||ac(0,t.totalDuration(),i)-t._tTime>Rt)&&t.render(i,!0)),Ao(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Rt}},Mr=function(e,t,i,r){return t.parent&&Ws(t),t._start=zt((ts(i)?i:i||e!==Ht?ki(e,i,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),VM(e,t,"_first","_last",e._sort?"_start":0),Cm(t)||(e._recent=t),r||GM(e,t),e._ts<0&&Zh(e,e._tTime),e},WM=function(e,t){return(Di.ScrollTrigger||l_("scrollTrigger",t))&&Di.ScrollTrigger.create(t,e)},XM=function(e,t,i,r,s){if(p_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&FM!==wi.frame)return Os.push(e),e._lazy=[s,r],1},WA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Cm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},XA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&WA(e)&&!(!e._initted&&Cm(e))||(e._ts<0||e._dp._ts<0)&&!Cm(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=ac(0,e._tDur,t),c=cl(l,a),e._yoyo&&c&1&&(o=1-o),c!==cl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||r||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&XM(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?Rt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Am(e,t,i,!0),e._onUpdate&&!i&&Ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ws(e,1),!i&&!Mn&&(Ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},YA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},fl=function(e,t,i,r){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Zh(e,e._tTime=e._tDur*a),e.parent&&Kh(e),i||Ao(e.parent,e),e},iv=function(e){return e instanceof si?Ao(e):fl(e,e._dur)},jA={_start:0,endTime:ju,totalDuration:ju},ki=function n(e,t,i){var r=e.labels,s=e._recent||jA,o=e.duration()>=Ki?s.endTime(!1):e._dur,a,l,u;return _n(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(In(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},mu=function(e,t,i){var r=ts(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;o.immediateRender=ci(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new en(t[0],o,t[s+1])},Qs=function(e,t){return e||e===0?t(e):t},ac=function(e,t,i){return i<e?e:i>t?t:i},Dn=function(e,t){return!_n(e)||!(t=OA.exec(e))?"":t[1]},qA=function(e,t,i){return Qs(i,function(r){return ac(e,t,r)})},bm=[].slice,YM=function(e,t){return e&&Pr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pr(e[0]))&&!e.nodeType&&e!==vr},$A=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return _n(r)&&!t||YM(r,1)?(s=i).push.apply(s,Zi(r)):i.push(r)})||i},Zi=function(e,t,i){return Ft&&!t&&Ft.selector?Ft.selector(e):_n(e)&&!i&&(wm||!hl())?bm.call((t||a_).querySelectorAll(e),0):In(e)?$A(e,i):YM(e)?bm.call(e,0):e?[e]:[]},Rm=function(e){return e=Zi(e)[0]||Yu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Zi(t,i.querySelectorAll?i:i===e?Yu("Invalid scope")||a_.createElement("div"):e)}},jM=function(e){return e.sort(function(){return .5-Math.random()})},qM=function(e){if(jt(e))return e;var t=Pr(e)?e:{each:e},i=Co(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return _n(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],d,v,y,x,w,T,E,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Ki])[1],!S){for(E=-Ki;E<(E=_[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(m=o[g]=[],d=l?Math.min(S,g)*c-.5:r%S,v=S===Ki?0:l?g*h/S-.5:r/S|0,E=0,P=Ki,T=0;T<g;T++)y=T%S-d,x=v-(T/S|0),m[T]=w=u?Math.abs(u==="y"?x:y):PM(y*y+x*x),w>E&&(E=w),w<P&&(P=w);r==="random"&&jM(m),m.max=E-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Dn(t.amount||t.each)||0,i=i&&g<0?lC(i):i}return g=(m[f]-m.min)/m.max||0,zt(m.b+(i?i(g):g)*m.v)+m.u}},Pm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=zt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ts(i)?0:Dn(i))}},$M=function(e,t){var i=In(e),r,s;return!i&&Pr(e)&&(r=i=e.radius||Ki,e.values?(e=Zi(e.values),(s=!ts(e[0]))&&(r*=r)):e=Pm(e.increment)),Qs(t,i?jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Ki,c=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:o,s||c===o||ts(o)?c:c+Dn(o)}:Pm(e))},KM=function(e,t,i,r){return Qs(In(e)?!t:i===!0?!!(i=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},KA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ZA=function(e,t){return function(i){return e(parseFloat(i))+(t||Dn(i))}},QA=function(e,t,i){return QM(e,t,0,1,i)},ZM=function(e,t,i){return Qs(i,function(r){return e[~~t(r)]})},JA=function n(e,t,i){var r=t-e;return In(e)?ZM(e,n(0,e.length),t):Qs(i,function(s){return(r+(s-e)%r)%r+e})},eC=function n(e,t,i){var r=t-e,s=r*2;return In(e)?ZM(e,n(0,e.length-1),t):Qs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},qu=function(e){return e.replace(UA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(IA);return KM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},QM=function(e,t,i,r,s){var o=t-e,a=r-i;return Qs(s,function(l){return i+((l-e)/o*a||0)})},tC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=_n(e),a={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=ul(In(e)?[]:{},e));if(!c){for(l in t)d_.call(a,e,l,"get",t[l]);s=function(_){return __(_,a)||(o?e.p:e)}}}return Qs(i,s)},rv=function(e,t,i){var r=e.labels,s=Ki,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ci=function(e,t,i){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Os.length&&dh(),a&&(Ft=a),c=l?s.apply(u,l):s.call(u),Ft=o,c},Kl=function(e){return Ws(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&Ci(e,"onInterrupt"),e},Fa,JM=[],e1=function(e){if(e)if(e=!e.name&&e.default||e,o_()||e.headless){var t=e.name,i=jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ju,render:__,add:d_,kill:vC,modifier:_C,rawVars:0},o={targetTest:0,get:0,getSetter:g_,aliases:{},register:0};if(hl(),e!==r){if(Si[t])return;Ui(r,Ui(ph(e,s),o)),ul(r.prototype,ul(s,ph(e,o))),Si[r.prop=t]=r,e.targetTest&&(Uf.push(r),u_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}OM(t,r),e.register&&e.register(mi,r,hi)}else JM.push(e)},Ct=255,Zl={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Fd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ct+.5|0},t1=function(e,t,i){var r=e?ts(e)?[e>>16,e>>8&Ct,e&Ct]:0:Zl.black,s,o,a,l,u,c,h,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Zl[e])r=Zl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ct,r&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(J0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Fd(l+1/3,s,o),r[1]=Fd(l,s,o),r[2]=Fd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(DM),i&&r.length<4&&(r[3]=1),r}else r=e.match(J0)||Zl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Ct,o=r[1]/Ct,a=r[2]/Ct,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},n1=function(e){var t=[],i=[],r=-1;return e.split(Fs).forEach(function(s){var o=s.match(Oa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},sv=function(e,t,i){var r="",s=(e+r).match(Fs),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=t1(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=n1(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Fs,"1").split(Oa),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Fs),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},Fs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Zl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),nC=/hsl[a]?\(/,i1=function(e){var t=e.join(" "),i;if(Fs.lastIndex=0,Fs.test(t))return i=nC.test(t),e[1]=sv(e[1],i),e[0]=sv(e[0],i,n1(e[1])),!0},$u,wi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,f,p,_=function g(m){var d=n()-r,v=m===!0,y,x,w,T;if((d>e||d<0)&&(i+=d-t),r+=d,w=r-i,y=w-o,(y>0||v)&&(T=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=y+(y>=s?4:s-y),x=1),v||(l=u(g)),x)for(p=0;p<a.length;p++)a[p](w,f,T,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){IM&&(!wm&&o_()&&(vr=wm=window,a_=vr.document||{},Di.gsap=mi,(vr.gsapVersions||(vr.gsapVersions=[])).push(mi.version),NM(hh||vr.GreenSockGlobals||!vr.gsap&&vr||{}),JM.forEach(e1)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},$u=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),$u=0,u=ju},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,d,v){var y=d?function(x,w,T,E){m(x,w,T,E),h.remove(y)}:m;return h.remove(m),a[v?"unshift":"push"](y),hl(),y},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),hl=function(){return!$u&&wi.wake()},_t={},iC=/^[\d.\-M][\d.\-,\s]/,rC=/["']/g,sC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(rC,"").trim():+u,r=l.substr(a+1).trim();return t},oC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},aC=function(e){var t=(e+"").split("("),i=_t[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[sC(t[1])]:oC(e).split(",").map(BM)):_t._CE&&iC.test(e)?_t._CE("",e):i},lC=function(e){return function(t){return 1-e(1-t)}},Co=function(e,t){return e&&(jt(e)?e:_t[e]||aC(e))||t},jo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return fi(e,function(a){_t[a]=Di[a]=s,_t[o=a.toLowerCase()]=i;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},r1=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},kd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Em*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*DA((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:r1(a);return s=Em/s,l.config=function(u,c){return n(e,u,c)},l},zd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:r1(i);return r.config=function(s){return n(e,s)},r};fi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;jo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;jo("Elastic",kd("in"),kd("out"),kd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};jo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);jo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});jo("Circ",function(n){return-(PM(1-n*n)-1)});jo("Sine",function(n){return n===1?1:-LA(n*RA)+1});jo("Back",zd("in"),zd("out"),zd());_t.SteppedEase=_t.steps=Di.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Rt;return function(a){return((r*ac(0,o,a)|0)+s)*i}}};Xu.ease=_t["quad.out"];fi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return c_+=n+","+n+"Params,"});var s1=function(e,t){this.id=PA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:kM,this.set=t?t.getSetter:g_},Ku=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fl(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),$u||wi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,fl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(hl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Zh(this,i),!s._dp||s.parent||GM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Rt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+nv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+nv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?cl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?mh(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Rt?0:this._rts,this.totalTime(ac(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Kh(this),VA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Rt&&(this._tTime-=Rt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=zt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ci(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mh(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=kA);var r=Mn;return Mn=i,h_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Mn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,iv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,iv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(ki(this,i),ci(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ci(r)),this._dur||(this._zTime=-Rt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Rt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=jt(i)?i:HM,l=function(){var c=r.then;r.then=null,s&&s(),jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Kl(this)},n}();Ui(Ku.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var si=function(n){RM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ci(i.sortChildren),Ht&&Mr(i.parent||Ht,zr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&WM(zr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return mu(0,arguments,this),this},t.from=function(r,s,o){return mu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return mu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,pu(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(r,s,ki(this,o),1),this},t.call=function(r,s,o){return Mr(this,en.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new en(r,o,ki(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,pu(o).immediateRender=ci(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,pu(a).immediateRender=ci(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:zt(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,d,v,y,x,w,T,E;if(this!==Ht&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,x=this._start,y=this._ts,d=!y,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=zt(c%m),c===l?(g=this._repeat,f=u):(w=zt(c/m),g=~~w,g&&g===w&&(f=u,g--),f>u&&(f=u)),w=cl(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),T&&g&1&&(f=u-f,E=1),g!==w&&!this._lock){var P=T&&w&1,S=P===(T&&g&1);if(g<w&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(E?0:zt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,w=g),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=YA(this,zt(a),zt(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(Ci(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=-Rt);break}}p=_}else{p=this._last;for(var M=r<0?r:f;p;){if(_=p._prev,(p._act||M<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(M-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(M-p._start)*p._ts,s,o||Mn&&h_(p)),f!==this._time||!this._ts&&!d){v=0,_&&(c+=this._zTime=M?-Rt:Rt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Rt)._zTime=f>=a?1:-1,this._ts))return this._start=x,Kh(this),this.render(r,s,o);this._onUpdate&&!s&&Ci(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ws(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ci(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ts(s)||(s=ki(this,s,r)),!(r instanceof Ku)){if(In(r))return r.forEach(function(a){return o.add(a,s)}),this;if(_n(r))return this.addLabel(r,s);if(jt(r))r=en.delayedCall(0,r);else return this}return this!==r?Mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ki);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof en?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return _n(r)?this.removeLabel(r):jt(r)?this.killTweensOf(r):(r.parent===this&&$h(this,r),r===this._recent&&(this._recent=this._last),Ao(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(wi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=ki(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=en.delayedCall(0,s||ju,o);return a.data="isPause",this._hasPause=1,Mr(this,a,ki(this,r))},t.removePause=function(r){var s=this._first;for(r=ki(this,r);s;)s._start===r&&s.data==="isPause"&&Ws(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Ss!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Zi(r),l=this._first,u=ts(s),c;l;)l instanceof en?zA(l._targets,a)&&(u?(!Ss||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=ki(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,p,_=en.to(o,Ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Rt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&fl(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ui({startAt:{time:ki(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),rv(this,ki(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),rv(this,ki(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=zt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Ao(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ao(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ki,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=zt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;fl(o,o===Ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ht._ts&&(zM(Ht,mh(r,Ht)),FM=wi.frame),wi.frame>=ev){ev+=Pi.autoSleep||120;var s=Ht._first;if((!s||!s._ts)&&Pi.autoSleep&&wi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wi.sleep()}}},e}(Ku);Ui(si.prototype,{_lock:0,_hasPause:0,_forcing:0});var uC=function(e,t,i,r,s,o,a){var l=new hi(this._pt,e,t,0,1,f1,null,s),u=0,c=0,h,f,p,_,g,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=qu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Nd)||[];h=Nd.exec(r);)_=h[0],g=r.substring(u,h.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?ja(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=Nd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(UM.test(r)||d)&&(l.e=0),this._pt=l,l},d_=function(e,t,i,r,s,o,a,l,u,c){jt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:jt(h)?u?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=jt(h)?u?pC:u1:m_,_;if(_n(r)&&(~r.indexOf("random(")&&(r=qu(r)),r.charAt(1)==="="&&(_=ja(f,r)+(Dn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Lm)return!isNaN(f*r)&&r!==""?(_=new hi(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?gC:c1,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&l_(t,r),uC.call(this,e,t,f,r,p,l||Pi.stringFilter,u))},cC=function(e,t,i,r,s){if(jt(e)&&(e=gu(e,s,t,i,r)),!Pr(e)||e.style&&e.nodeType||In(e)||LM(e))return _n(e)?gu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=gu(e[a],s,t,i,r);return o},o1=function(e,t,i,r,s,o){var a,l,u,c;if(Si[e]&&(a=new Si[e]).init(s,a.rawVars?t[e]:cC(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new hi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Fa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Ss,Lm,p_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,y=e._overwrite==="auto"&&!r_,x=e.timeline,w=r.easeReverse||h,T,E,P,S,M,k,O,te,L,z,W,X,U;if(x&&(!f||!s)&&(s="none"),e._ease=Co(s,Xu.ease),e._rEase=w&&(Co(w)||e._ease),e._from=!x&&!!r.runBackwards,e._from&&(e.ratio=1),!x||f&&!r.stagger){if(te=m[0]?To(m[0]).harness:0,X=te&&r[te.prop],T=ph(r,u_),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?Df:FA),g._lazy=0),o){if(Ws(e._startAt=en.set(m,Ui({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!g&&ci(l),startAt:null,delay:0,onUpdate:u&&function(){return Ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!p)&&e._startAt.revert(Df),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),P=Ui({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ci(l),immediateRender:a,stagger:0,parent:d},T),X&&(P[te.prop]=X),Ws(e._startAt=en.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Df):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ci(l)||l&&!_,E=0;E<m.length;E++){if(M=m[E],O=M._gsap||f_(m)[E]._gsap,e._ptLookup[E]=z={},Tm[O.id]&&Os.length&&dh(),W=v===m?E:v.indexOf(M),te&&(L=new te).init(M,X||T,e,W,v)!==!1&&(e._pt=S=new hi(e._pt,M,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(B){z[B]=S}),L.priority&&(k=1)),!te||X)for(P in T)Si[P]&&(L=o1(P,T,e,W,M,v))?L.priority&&(k=1):z[P]=S=d_.call(e,M,P,"get",T[P],W,v,0,r.stringFilter);e._op&&e._op[E]&&e.kill(M,e._op[E]),y&&e._pt&&(Ss=e,Ht.killTweensOf(M,z,e.globalTime(t)),U=!e.parent,Ss=0),e._pt&&l&&(Tm[O.id]=1)}k&&h1(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!U,f&&t<=0&&x.render(Ki,!0,!0)},fC=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Lm=1,e.vars[t]="+=0",p_(e,a),Lm=0,l?Yu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=$t(i)+Dn(h.e)),h.b&&(h.b=c.s+Dn(h.b))},hC=function(e,t){var i=e[0]?To(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ul({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},dC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(In(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},gu=function(e,t,i,r,s){return jt(e)?e.call(t,i,r,s):_n(e)&&~e.indexOf("random(")?qu(e):e},a1=c_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",l1={};fi(a1+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return l1[n]=1});var en=function(n){RM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:pu(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,d=r.parent||Ht,v=(In(i)||LM(i)?ts(i[0]):"length"in r)?[i]:Zi(i),y,x,w,T,E,P,S,M;if(a._targets=v.length?f_(v):Yu("GSAP target "+i+" not found. https://gsap.com",!Pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||Pc(u)||Pc(c)){r=a.vars;var k=r.easeReverse||r.yoyoEase;if(y=a.timeline=new si({data:"nested",defaults:g||{},targets:d&&d.data==="nested"?d.vars.targets:v}),y.kill(),y.parent=y._dp=zr(a),y._start=0,f||Pc(u)||Pc(c)){if(T=v.length,S=f&&qM(f),Pr(f))for(E in f)~a1.indexOf(E)&&(M||(M={}),M[E]=f[E]);for(x=0;x<T;x++)w=ph(r,l1),w.stagger=0,k&&(w.easeReverse=k),M&&ul(w,M),P=v[x],w.duration=+gu(u,zr(a),x,P,v),w.delay=(+gu(c,zr(a),x,P,v)||0)-a._delay,!f&&T===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(P,w,S?S(x,P,v):0),y._ease=_t.none;y.duration()?u=c=0:a.timeline=0}else if(_){pu(Ui(y.vars.defaults,{ease:"none"})),y._ease=Co(_.ease||r.ease||"none");var O=0,te,L,z;if(In(_))_.forEach(function(W){return y.to(v,W,">")}),y.duration();else{w={};for(E in _)E==="ease"||E==="easeEach"||dC(E,_[E],w,_.easeEach);for(E in w)for(te=w[E].sort(function(W,X){return W.t-X.t}),O=0,x=0;x<te.length;x++)L=te[x],z={ease:L.e,duration:(L.t-(x?te[x-1].t:0))/100*u},z[E]=L.v,y.to(v,z,O),O+=z.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!r_&&(Ss=zr(a),Ht.killTweensOf(v),Ss=0),Mr(d,zr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!_&&a._start===zt(d._time)&&ci(h)&&GA(zr(a))&&d.data!=="nested")&&(a._tTime=-Rt,a.render(Math.max(0,-c)||0)),m&&WM(zr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-Rt&&!c?l:r<Rt?0:r,f,p,_,g,m,d,v,y;if(!u)XA(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,y=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=zt(h%g),h===l?(_=this._repeat,f=u):(m=zt(h/g),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),d=this._yoyo&&_&1,d&&(f=u-f),m=cl(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!d&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(zt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(XM(this,c?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var w=x?a:u-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(x?-1:1)/w:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Ci(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Am(this,r,s,o),Ci(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Ci(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&Am(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ws(this,1),!s&&!(c&&!a)&&(h||a||d)&&(Ci(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){$u||wi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||p_(this,u),c=this._ease(u/this._dur),fC(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Zh(this,0),this.parent||VM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Kl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ss&&Ss.vars.overwrite!==!0)._first||Kl(this),this.parent&&o!==this.timeline.totalDuration()&&fl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Zi(r):a,u=this._ptLookup,c=this._pt,h,f,p,_,g,m,d;if((!s||s==="all")&&HA(a,l))return s==="all"&&(this._pt=0),Kl(this);for(h=this._op=this._op||[],s!=="all"&&(_n(s)&&(g={},fi(s,function(v){return g[v]=1}),s=g),s=hC(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=u[d],s==="all"?(h[d]=s,_=f,p={}):(p=h[d]=h[d]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&$h(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Kl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return mu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return mu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ht.killTweensOf(r,s,o)},e}(Ku);Ui(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});fi("staggerTo,staggerFrom,staggerFromTo",function(n){en[n]=function(){var e=new si,t=bm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var m_=function(e,t,i){return e[t]=i},u1=function(e,t,i){return e[t](i)},pC=function(e,t,i,r){return e[t](r.fp,i)},mC=function(e,t,i){return e.setAttribute(t,i)},g_=function(e,t){return jt(e[t])?u1:s_(e[t])&&e.setAttribute?mC:m_},c1=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},f1=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},__=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},_C=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},vC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?$h(this,t,"_pt"):t.dep||(i=1),t=r;return!i},yC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},h1=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},hi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||c1,this.d=l||this,this.set=u||m_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=yC,this.m=i,this.mt=s,this.tween=r},n}();fi(c_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return u_[n]=1});Di.TweenMax=Di.TweenLite=en;Di.TimelineLite=Di.TimelineMax=si;Ht=new si({sortChildren:!1,defaults:Xu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pi.stringFilter=i1;var bo=[],If={},xC=[],ov=0,SC=0,Bd=function(e){return(If[e]||xC).map(function(t){return t()})},Dm=function(){var e=Date.now(),t=[];e-ov>2&&(Bd("matchMediaInit"),bo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=vr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Bd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),ov=e,Bd("matchMedia"))},d1=function(){function n(t,i){this.selector=i&&Rm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=SC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){jt(i)&&(s=r,r=i,i=jt);var o=this,a=function(){var u=Ft,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=Rm(s)),Ft=o,h=r.apply(o,arguments),jt(h)&&o._r.push(h),Ft=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ft;Ft=null,i(this),Ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof en&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof si?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof en)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=bo.length;o--;)bo[o].id===this.id&&bo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),MC=function(){function n(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Pr(i)||(i={matches:i});var o=new d1(0,s||this.scope),a=o.conditions={},l,u,c;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=vr.matchMedia(i[u]),l&&(bo.indexOf(o)<0&&bo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Dm):l.addEventListener("change",Dm)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),gh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return e1(r)})},timeline:function(e){return new si(e)},getTweensOf:function(e,t){return Ht.getTweensOf(e,t)},getProperty:function(e,t,i,r){_n(e)&&(e=Zi(e)[0]);var s=To(e||{}).get,o=i?HM:BM;return i==="native"&&(i=""),e&&(t?o((Si[t]&&Si[t].get||s)(e,t,i,r)):function(a,l,u){return o((Si[a]&&Si[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Zi(e),e.length>1){var r=e.map(function(c){return mi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=Si[t],a=To(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Fa._pt=0,h.init(e,i?c+i:c,Fa,0,[e]),h.render(1,h),Fa._pt&&__(1,Fa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=mi.to(e,Ui((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Co(e.ease,Xu.ease)),tv(Xu,e||{})},config:function(e){return tv(Pi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Si[a]&&!Di[a]&&Yu(t+" effect requires "+a+" plugin.")}),Od[t]=function(a,l,u){return i(Zi(a),Ui(l||{},s),u)},o&&(si.prototype[t]=function(a,l,u){return this.add(Od[t](a,Pr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){_t[e]=Co(t)},parseEase:function(e,t){return arguments.length?Co(e,t):_t},getById:function(e){return Ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new si(e),r,s;for(i.smoothChildTiming=ci(e.smoothChildTiming),Ht.remove(i),i._dp=0,i._time=i._tTime=Ht._time,r=Ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof en&&r.vars.onComplete===r._targets[0]))&&Mr(i,r,r._start-r._delay),r=s;return Mr(Ht,i,0),i},context:function(e,t){return e?new d1(e,t):Ft},matchMedia:function(e){return new MC(e)},matchMediaRefresh:function(){return bo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Dm()},addEventListener:function(e,t){var i=If[e]||(If[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=If[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:JA,wrapYoyo:eC,distribute:qM,random:KM,snap:$M,normalize:QA,getUnit:Dn,clamp:qA,splitColor:t1,toArray:Zi,selector:Rm,mapRange:QM,pipe:KA,unitize:ZA,interpolate:tC,shuffle:jM},install:NM,effects:Od,ticker:wi,updateRoot:si.updateRoot,plugins:Si,globalTimeline:Ht,core:{PropTween:hi,globals:OM,Tween:en,Timeline:si,Animation:Ku,getCache:To,_removeLinkedListItem:$h,reverting:function(){return Mn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return r_=e}}};fi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return gh[n]=en[n]});wi.add(si.updateRoot);Fa=gh.to({},{duration:0});var EC=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},wC=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=EC(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Hd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(_n(s)&&(l={},fi(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}wC(a,s)}}}},mi=gh.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Mn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Hd("roundProps",Pm),Hd("modifiers"),Hd("snap",$M))||gh;en.version=si.version=mi.version="3.15.0";IM=1;o_()&&hl();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var av,Ms,qa,v_,yo,lv,y_,TC=function(){return typeof window<"u"},ns={},uo=180/Math.PI,$a=Math.PI/180,Ko=Math.atan2,uv=1e8,x_=/([A-Z])/g,AC=/(left|right|width|margin|padding|x)/i,CC=/[\s,\(]\S/,Er={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Um=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},RC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},PC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},LC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},p1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},m1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},DC=function(e,t,i){return e.style[t]=i},UC=function(e,t,i){return e.style.setProperty(t,i)},IC=function(e,t,i){return e._gsap[t]=i},NC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},OC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},FC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Vt="transform",di=Vt+"Origin",kC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ns&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Er[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Hr(r,a)}):this.tfm[e]=o.x?o[e]:Hr(r,e),e===di&&(this.tfm.zOrigin=o.zOrigin);else return Er.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Vt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(di,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},g1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},zC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(x_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=y_(),(!s||!s.isStart)&&!i[Vt]&&(g1(i),r.zOrigin&&i[di]&&(i[di]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},_1=function(e,t){var i={target:e,props:[],revert:zC,save:kC};return e._gsap||mi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},v1,Im=function(e,t){var i=Ms.createElementNS?Ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ms.createElement(e);return i&&i.style?i:Ms.createElement(e)},bi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(x_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,dl(t)||t,1)||""},cv="O,Moz,ms,Ms,Webkit".split(","),dl=function(e,t,i){var r=t||yo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(cv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?cv[o]:"")+e},Nm=function(){TC()&&window.document&&(av=window,Ms=av.document,qa=Ms.documentElement,yo=Im("div")||{style:{}},Im("div"),Vt=dl(Vt),di=Vt+"Origin",yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",v1=!!dl("perspective"),y_=mi.core.reverting,v_=1)},fv=function(e){var t=e.ownerSVGElement,i=Im("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),qa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),qa.removeChild(i),s},hv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},y1=function(e){var t,i;try{t=e.getBBox()}catch{t=fv(e),i=1}return t&&(t.width||t.height)||i||(t=fv(e)),t&&!t.width&&!t.x&&!t.y?{x:+hv(e,["x","cx","x1"])||0,y:+hv(e,["y","cy","y1"])||0,width:0,height:0}:t},x1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&y1(e))},Xs=function(e,t){if(t){var i=e.style,r;t in ns&&t!==di&&(t=Vt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(x_,"-$1").toLowerCase())):i.removeAttribute(t)}},Es=function(e,t,i,r,s,o){var a=new hi(e._pt,t,i,0,1,o?m1:p1);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},dv={deg:1,rad:1,turn:1},BC={grid:1,flex:1},Ys=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=yo.style,l=AC.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",_,g,m,d;if(r===o||!s||dv[r]||dv[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&x1(e),(p||o==="%")&&(ns[t]||~t.indexOf("adius")))return _=d?e.getBBox()[l?"width":"height"]:e[c],$t(p?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ms||!g.appendChild)&&(g=Ms.body),m=g._gsap,m&&p&&m.width&&l&&m.time===wi.time&&!m.uncache)return $t(s/m.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,_=e[c],v?e.style[t]=v:Xs(e,t)}else(p||o==="%")&&!BC[bi(g,"display")]&&(a.position=bi(e,"position")),g===e&&(a.position="static"),g.appendChild(yo),_=yo[c],g.removeChild(yo),a.position="absolute";return l&&p&&(m=To(g),m.time=wi.time,m.width=g[c]),$t(f?_*s/h:_&&s?h/_*s:0)},Hr=function(e,t,i,r){var s;return v_||Nm(),t in Er&&t!=="transform"&&(t=Er[t],~t.indexOf(",")&&(t=t.split(",")[0])),ns[t]&&t!=="transform"?(s=Qu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:vh(bi(e,di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=_h[t]&&_h[t](e,t,i)||bi(e,t)||kM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ys(e,t,s,i)+i:s},HC=function(e,t,i,r){if(!i||i==="none"){var s=dl(t,e,1),o=s&&bi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=bi(e,"borderTopColor"))}var a=new hi(this._pt,e.style,t,0,1,f1),l=0,u=0,c,h,f,p,_,g,m,d,v,y,x,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=bi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=bi(e,t)||r,g?e.style[t]=g:Xs(e,t)),c=[i,r],i1(c),i=c[0],r=c[1],f=i.match(Oa)||[],w=r.match(Oa)||[],w.length){for(;h=Oa.exec(r);)m=h[0],v=r.substring(l,h.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=ja(p,m)+x),d=parseFloat(m),y=m.substr((d+"").length),l=Oa.lastIndex-y.length,y||(y=y||Pi.units[t]||x,l===r.length&&(r+=y,a.e+=y)),x!==y&&(p=Ys(e,t,g,y)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?m1:p1;return UM.test(r)&&(a.e=0),this._pt=a,a},pv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=pv[i]||i,t[1]=pv[r]||r,t.join(" ")},GC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ns[a]&&(l=1,a=a==="transformOrigin"?di:Vt),Xs(i,a);l&&(Xs(i,Vt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Qu(i,1),o.uncache=1,g1(r)))}},_h={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new hi(e._pt,t,i,0,0,GC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Zu=[1,0,0,1,0,0],S1={},M1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},mv=function(e){var t=bi(e,Vt);return M1(t)?Zu:t.substr(7).match(DM).map($t)},S_=function(e,t){var i=e._gsap||To(e),r=e.style,s=mv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zu:s):(s===Zu&&!e.offsetParent&&e!==qa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,qa.appendChild(e)),s=mv(e),l?r.display=l:Xs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Om=function(e,t,i,r,s,o){var a=e._gsap,l=s||S_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],d=l[4],v=l[5],y=t.split(" "),x=parseFloat(y[0])||0,w=parseFloat(y[1])||0,T,E,P,S;i?l!==Zu&&(E=p*m-_*g)&&(P=x*(m/E)+w*(-g/E)+(g*v-m*d)/E,S=x*(-_/E)+w*(p/E)-(p*v-_*d)/E,x=P,w=S):(T=y1(e),x=T.x+(~y[0].indexOf("%")?x/100*T.width:x),w=T.y+(~(y[1]||y[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(d=x-u,v=w-c,a.xOffset=h+(d*p+v*g)-d,a.yOffset=f+(d*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[di]="0px 0px",o&&(Es(o,a,"xOrigin",u,x),Es(o,a,"yOrigin",c,w),Es(o,a,"xOffset",h,a.xOffset),Es(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},Qu=function(e,t){var i=e._gsap||new s1(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=bi(e,di)||"0",c,h,f,p,_,g,m,d,v,y,x,w,T,E,P,S,M,k,O,te,L,z,W,X,U,B,b,ee,Q,F,$,J;return c=h=f=g=m=d=v=y=x=0,p=_=1,i.svg=!!(e.getCTM&&x1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Vt]!=="none"?l[Vt]:"")),r.scale=r.rotate=r.translate="none"),E=S_(e,i.svg),i.svg&&(i.uncache?(U=e.getBBox(),u=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Om(e,X||u,!!X||i.originIsAbsolute,i.smooth!==!1,E)),w=i.xOrigin||0,T=i.yOrigin||0,E!==Zu&&(k=E[0],O=E[1],te=E[2],L=E[3],c=z=E[4],h=W=E[5],E.length===6?(p=Math.sqrt(k*k+O*O),_=Math.sqrt(L*L+te*te),g=k||O?Ko(O,k)*uo:0,v=te||L?Ko(te,L)*uo+g:0,v&&(_*=Math.abs(Math.cos(v*$a))),i.svg&&(c-=w-(w*k+T*te),h-=T-(w*O+T*L))):(J=E[6],F=E[7],b=E[8],ee=E[9],Q=E[10],$=E[11],c=E[12],h=E[13],f=E[14],P=Ko(J,Q),m=P*uo,P&&(S=Math.cos(-P),M=Math.sin(-P),X=z*S+b*M,U=W*S+ee*M,B=J*S+Q*M,b=z*-M+b*S,ee=W*-M+ee*S,Q=J*-M+Q*S,$=F*-M+$*S,z=X,W=U,J=B),P=Ko(-te,Q),d=P*uo,P&&(S=Math.cos(-P),M=Math.sin(-P),X=k*S-b*M,U=O*S-ee*M,B=te*S-Q*M,$=L*M+$*S,k=X,O=U,te=B),P=Ko(O,k),g=P*uo,P&&(S=Math.cos(P),M=Math.sin(P),X=k*S+O*M,U=z*S+W*M,O=O*S-k*M,W=W*S-z*M,k=X,z=U),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=$t(Math.sqrt(k*k+O*O+te*te)),_=$t(Math.sqrt(W*W+J*J)),P=Ko(z,W),v=Math.abs(P)>2e-4?P*uo:0,x=$?1/($<0?-$:$):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!M1(bi(e,Vt)),X&&e.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=$t(p),i.scaleY=$t(_),i.rotation=$t(g)+a,i.rotationX=$t(m)+a,i.rotationY=$t(d)+a,i.skewX=v+a,i.skewY=y+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[di]=vh(u)),i.xOffset=i.yOffset=0,i.force3D=Pi.force3D,i.renderTransform=i.svg?XC:v1?E1:WC,i.uncache=0,i},vh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Vd=function(e,t,i){var r=Dn(t);return $t(parseFloat(t)+parseFloat(Ys(e,"x",i+"px",r)))+r},WC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,E1(e,t)},to="0deg",Il="0px",no=") ",E1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,y=i.zOrigin,x="",w=d==="auto"&&e&&e!==1||d===!0;if(y&&(h!==to||c!==to)){var T=parseFloat(c)*$a,E=Math.sin(T),P=Math.cos(T),S;T=parseFloat(h)*$a,S=Math.cos(T),o=Vd(v,o,E*S*-y),a=Vd(v,a,-Math.sin(T)*-y),l=Vd(v,l,P*S*-y+y)}m!==Il&&(x+="perspective("+m+no),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(w||o!==Il||a!==Il||l!==Il)&&(x+=l!==Il||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+no),u!==to&&(x+="rotate("+u+no),c!==to&&(x+="rotateY("+c+no),h!==to&&(x+="rotateX("+h+no),(f!==to||p!==to)&&(x+="skew("+f+", "+p+no),(_!==1||g!==1)&&(x+="scale("+_+", "+g+no),v.style[Vt]=x||"translate(0, 0)"},XC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,y=parseFloat(o),x=parseFloat(a),w,T,E,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=$a,u*=$a,w=Math.cos(l)*h,T=Math.sin(l)*h,E=Math.sin(l-u)*-f,P=Math.cos(l-u)*f,u&&(c*=$a,S=Math.tan(u-c),S=Math.sqrt(1+S*S),E*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),w*=S,T*=S)),w=$t(w),T=$t(T),E=$t(E),P=$t(P)):(w=h,P=f,T=E=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=Ys(p,"x",o,"px"),x=Ys(p,"y",a,"px")),(_||g||m||d)&&(y=$t(y+_-(_*w+g*E)+m),x=$t(x+g-(_*T+g*P)+d)),(r||s)&&(S=p.getBBox(),y=$t(y+r/100*S.width),x=$t(x+s/100*S.height)),S="matrix("+w+","+T+","+E+","+P+","+y+","+x+")",p.setAttribute("transform",S),v&&(p.style[Vt]=S)},YC=function(e,t,i,r,s){var o=360,a=_n(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?uo:1),u=l-r,c=r+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*uv)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*uv)%o-~~(u/o)*o)),e._pt=f=new hi(e._pt,t,i,r,u,bC),f.e=c,f.u="deg",e._props.push(i),f},gv=function(e,t){for(var i in t)e[i]=t[i];return e},jC=function(e,t,i){var r=gv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Vt]=t,a=Qu(i,1),Xs(i,Vt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Vt],o[Vt]=t,a=Qu(i,1),o[Vt]=u);for(l in ns)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Dn(u),_=Dn(c),h=p!==_?Ys(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new hi(e._pt,a,l,h,f-h,Um),e._pt.u=_||0,e._props.push(l));gv(a,r)};fi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});_h[e>1?"border"+n:n]=function(a,l,u,c,h){var f,p;if(arguments.length<4)return f=o.map(function(_){return Hr(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,h)}});var w1={name:"css",register:Nm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,p,_,g,m,d,v,y,x,w,T,E,P,S;v_||Nm(),this.styles=this.styles||_1(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Si[g]&&o1(g,t,i,r,e,s)))){if(p=typeof c,_=_h[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=qu(c)),_)_(this,e,g,c,i)&&(E=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Fs.lastIndex=0,Fs.test(u)||(m=Dn(u),d=Dn(c),d?m!==d&&(u=Ys(e,g,u,d)+d):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],_n(u)&&~u.indexOf("random(")&&(u=qu(u)),Dn(u+"")||u==="auto"||(u+=Pi.units[g]||Dn(Hr(e,g))||""),(u+"").charAt(1)==="="&&(u=Hr(e,g))):u=Hr(e,g),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),g in Er&&(g==="autoAlpha"&&(f===1&&Hr(e,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),Es(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Er[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in ns,y){if(this.styles.save(g),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=bi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var M=e.style.perspective;e.style.perspective=c,c=bi(e,"perspective"),M?e.style.perspective=M:Xs(e,"perspective")}h=parseFloat(c)}if(x||(w=e._gsap,w.renderTransform&&!t.parseTransform||Qu(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new hi(this._pt,a,Vt,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new hi(this._pt,w,"scaleY",w.scaleY,(v?ja(w.scaleY,v+h):h)-w.scaleY||0,Um),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(di,0,a[di]),c=VC(c),w.svg?Om(e,c,0,T,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==w.zOrigin&&Es(this,w,"zOrigin",w.zOrigin,d),Es(this,a,g,vh(u),vh(c)));continue}else if(g==="svgOrigin"){Om(e,c,1,T,0,this);continue}else if(g in S1){YC(this,w,g,f,v?ja(f,v+c):c);continue}else if(g==="smoothOrigin"){Es(this,w,"smooth",w.smooth,c);continue}else if(g==="force3D"){w[g]=c;continue}else if(g==="transform"){jC(this,c,e);continue}}else g in a||(g=dl(g)||g);if(y||(h||h===0)&&(f||f===0)&&!CC.test(c)&&g in a)m=(u+"").substr((f+"").length),h||(h=0),d=Dn(c)||(g in Pi.units?Pi.units[g]:m),m!==d&&(f=Ys(e,g,u,d)),this._pt=new hi(this._pt,y?w:a,g,f,(v?ja(f,v+h):h)-f,!y&&(d==="px"||g==="zIndex")&&t.autoRound!==!1?LC:Um),this._pt.u=d||0,y&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=PC):m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=RC);else if(g in a)HC.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){l_(g,c);continue}y||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,u||e[g])),o.push(g)}}E&&h1(this)},render:function(e,t){if(t.tween._time||!y_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Hr,aliases:Er,getSetter:function(e,t,i){var r=Er[t];return r&&r.indexOf(",")<0&&(t=r),t in ns&&t!==di&&(e._gsap.x||Hr(e,"x"))?i&&lv===i?t==="scale"?NC:IC:(lv=i||{})&&(t==="scale"?OC:FC):e.style&&!s_(e.style[t])?DC:~t.indexOf("-")?UC:g_(e,t)},core:{_removeProperty:Xs,_getMatrix:S_}};mi.utils.checkPrefix=dl;mi.core.getStyleSaver=_1;(function(n,e,t,i){var r=fi(n+","+e+","+t,function(s){ns[s]=1});fi(e,function(s){Pi.units[s]="deg",S1[s]=1}),Er[r[13]]=n+","+e,fi(i,function(s){var o=s.split(":");Er[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");fi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pi.units[n]="px"});mi.registerPlugin(w1);var cr=mi.registerPlugin(w1)||mi;cr.core.Tween;function qC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function $C(n,e,t){return e&&qC(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,Nf,Ti,ws,Ts,Ka,T1,co,Za,A1,Yr,ar,C1,b1=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},R1=1,ka=[],dt=[],br=[],_u=Date.now,Fm=function(e,t){return t},KC=function(){var e=Za.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,dt),r.push.apply(r,br),dt=i,br=r,Fm=function(o,a){return t[o](a)}},ks=function(e,t){return~br.indexOf(e)&&br[br.indexOf(e)+1][t]},vu=function(e){return!!~A1.indexOf(e)},Bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},kn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Lc="scrollLeft",Dc="scrollTop",km=function(){return Yr&&Yr.isPressed||dt.cache++},yh=function(e,t){var i=function r(s){if(s||s===0){R1&&(Ti.history.scrollRestoration="manual");var o=Yr&&Yr.isPressed;s=r.v=Math.round(s)||(Yr&&Yr.iOS?1:0),e(s),r.cacheID=dt.cache,o&&Fm("ss",s)}else(t||dt.cache!==r.cacheID||Fm("ref"))&&(r.cacheID=dt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},qn={s:Lc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yh(function(n){return arguments.length?Ti.scrollTo(n,on.sc()):Ti.pageXOffset||ws[Lc]||Ts[Lc]||Ka[Lc]||0})},on={s:Dc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:qn,sc:yh(function(n){return arguments.length?Ti.scrollTo(qn.sc(),n):Ti.pageYOffset||ws[Dc]||Ts[Dc]||Ka[Dc]||0})},ti=function(e,t){return(t&&t._ctx&&t._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ZC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},js=function(e,t){var i=t.s,r=t.sc;vu(e)&&(e=ws.scrollingElement||Ts);var s=dt.indexOf(e),o=r===on.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Bn(e,"scroll",km);var a=dt[s+o],l=a||(dt[s+o]=yh(ks(e,i),!0)||(vu(e)?r:yh(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),l},zm=function(e,t,i){var r=e,s=e,o=_u(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=_u();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,d=_u();return(_||_===0)&&_!==r&&c(_),o===a||d-a>u?0:(r+(i?m:-m))/((i?d:o)-g)*1e3};return{update:c,reset:h,getVelocity:f}},Nl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},_v=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},P1=function(){Za=xn.core.globals().ScrollTrigger,Za&&Za.core&&KC()},L1=function(e){return xn=e||b1(),!Nf&&xn&&typeof document<"u"&&document.body&&(Ti=window,ws=document,Ts=ws.documentElement,Ka=ws.body,A1=[Ti,ws,Ts,Ka],xn.utils.clamp,C1=xn.core.context||function(){},co="onpointerenter"in Ka?"pointer":"mouse",T1=Zt.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ar=Zt.eventTypes=("ontouchstart"in Ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return R1=0},500),Nf=1),Za||P1(),Nf};qn.op=on;dt.cache=0;var Zt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Nf||L1(xn)||console.warn("Please gsap.registerPlugin(Observer)"),Za||P1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,d=i.onDragEnd,v=i.onDrag,y=i.onPress,x=i.onRelease,w=i.onRight,T=i.onLeft,E=i.onUp,P=i.onDown,S=i.onChangeX,M=i.onChangeY,k=i.onChange,O=i.onToggleX,te=i.onToggleY,L=i.onHover,z=i.onHoverEnd,W=i.onMove,X=i.ignoreCheck,U=i.isNormalizer,B=i.onGestureStart,b=i.onGestureEnd,ee=i.onWheel,Q=i.onEnable,F=i.onDisable,$=i.onClick,J=i.scrollSpeed,he=i.capture,ce=i.allowClicks,we=i.lockAxis,Me=i.onLockAxis;this.target=a=ti(a)||Ts,this.vars=i,p&&(p=xn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,J=J||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ti.getComputedStyle(Ka).lineHeight)||22);var He,Qe,q,je,Ee,ke,xe,j=this,Ve=0,R=0,C=i.passive||!c&&i.passive!==!1,G=js(a,qn),se=js(a,on),ne=G(),oe=se(),Se=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ar[0]==="pointerdown",ve=vu(a),pe=a.ownerDocument||ws,Ie=[0,0,0],Xe=[0,0,0],ie=0,pt=function(){return ie=_u()},Oe=function(be,Ne){return(j.event=be)&&p&&ZC(be.target,p)||Ne&&Se&&be.pointerType!=="touch"||X&&X(be,Ne)},Le=function(){j._vx.reset(),j._vy.reset(),Qe.pause(),h&&h(j)},Ce=function(){var be=j.deltaX=_v(Ie),Ne=j.deltaY=_v(Xe),fe=Math.abs(be)>=r,Ye=Math.abs(Ne)>=r;k&&(fe||Ye)&&k(j,be,Ne,Ie,Xe),fe&&(w&&j.deltaX>0&&w(j),T&&j.deltaX<0&&T(j),S&&S(j),O&&j.deltaX<0!=Ve<0&&O(j),Ve=j.deltaX,Ie[0]=Ie[1]=Ie[2]=0),Ye&&(P&&j.deltaY>0&&P(j),E&&j.deltaY<0&&E(j),M&&M(j),te&&j.deltaY<0!=R<0&&te(j),R=j.deltaY,Xe[0]=Xe[1]=Xe[2]=0),(je||q)&&(W&&W(j),q&&(m&&q===1&&m(j),v&&v(j),q=0),je=!1),ke&&!(ke=!1)&&Me&&Me(j),Ee&&(ee(j),Ee=!1),He=0},ae=function(be,Ne,fe){Ie[fe]+=be,Xe[fe]+=Ne,j._vx.update(be),j._vy.update(Ne),u?He||(He=requestAnimationFrame(Ce)):Ce()},Ze=function(be,Ne){we&&!xe&&(j.axis=xe=Math.abs(be)>Math.abs(Ne)?"x":"y",ke=!0),xe!=="y"&&(Ie[2]+=be,j._vx.update(be,!0)),xe!=="x"&&(Xe[2]+=Ne,j._vy.update(Ne,!0)),u?He||(He=requestAnimationFrame(Ce)):Ce()},tt=function(be){if(!Oe(be,1)){be=Nl(be,c);var Ne=be.clientX,fe=be.clientY,Ye=Ne-j.x,We=fe-j.y,Je=j.isDragging;j.x=Ne,j.y=fe,(Je||(Ye||We)&&(Math.abs(j.startX-Ne)>=s||Math.abs(j.startY-fe)>=s))&&(q||(q=Je?2:1),Je||(j.isDragging=!0),Ze(Ye,We))}},ct=j.onPress=function(Ue){Oe(Ue,1)||Ue&&Ue.button||(j.axis=xe=null,Qe.pause(),j.isPressed=!0,Ue=Nl(Ue),Ve=R=0,j.startX=j.x=Ue.clientX,j.startY=j.y=Ue.clientY,j._vx.reset(),j._vy.reset(),Bn(U?a:pe,ar[1],tt,C,!0),j.deltaX=j.deltaY=0,y&&y(j))},ge=j.onRelease=function(Ue){if(!Oe(Ue,1)){kn(U?a:pe,ar[1],tt,!0);var be=!isNaN(j.y-j.startY),Ne=j.isDragging,fe=Ne&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Ye=Nl(Ue);!fe&&be&&(j._vx.reset(),j._vy.reset(),c&&ce&&xn.delayedCall(.08,function(){if(_u()-ie>300&&!Ue.defaultPrevented){if(Ue.target.click)Ue.target.click();else if(pe.createEvent){var We=pe.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,Ti,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),Ue.target.dispatchEvent(We)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,h&&Ne&&!U&&Qe.restart(!0),q&&Ce(),d&&Ne&&d(j),x&&x(j,fe)}},le=function(be){return be.touches&&be.touches.length>1&&(j.isGesturing=!0)&&B(be,j.isDragging)},D=function(){return(j.isGesturing=!1)||b(j)},de=function(be){if(!Oe(be)){var Ne=G(),fe=se();ae((Ne-ne)*J,(fe-oe)*J,1),ne=Ne,oe=fe,h&&Qe.restart(!0)}},me=function(be){if(!Oe(be)){be=Nl(be,c),ee&&(Ee=!0);var Ne=(be.deltaMode===1?l:be.deltaMode===2?Ti.innerHeight:1)*_;ae(be.deltaX*Ne,be.deltaY*Ne,0),h&&!U&&Qe.restart(!0)}},Ge=function(be){if(!Oe(be)){var Ne=be.clientX,fe=be.clientY,Ye=Ne-j.x,We=fe-j.y;j.x=Ne,j.y=fe,je=!0,h&&Qe.restart(!0),(Ye||We)&&Ze(Ye,We)}},ze=function(be){j.event=be,L(j)},st=function(be){j.event=be,z(j)},gt=function(be){return Oe(be)||Nl(be,c)&&$(j)};Qe=j._dc=xn.delayedCall(f||.25,Le).pause(),j.deltaX=j.deltaY=0,j._vx=zm(0,50,!0),j._vy=zm(0,50,!0),j.scrollX=G,j.scrollY=se,j.isDragging=j.isGesturing=j.isPressed=!1,C1(this),j.enable=function(Ue){return j.isEnabled||(Bn(ve?pe:a,"scroll",km),o.indexOf("scroll")>=0&&Bn(ve?pe:a,"scroll",de,C,he),o.indexOf("wheel")>=0&&Bn(a,"wheel",me,C,he),(o.indexOf("touch")>=0&&T1||o.indexOf("pointer")>=0)&&(Bn(a,ar[0],ct,C,he),Bn(pe,ar[2],ge),Bn(pe,ar[3],ge),ce&&Bn(a,"click",pt,!0,!0),$&&Bn(a,"click",gt),B&&Bn(pe,"gesturestart",le),b&&Bn(pe,"gestureend",D),L&&Bn(a,co+"enter",ze),z&&Bn(a,co+"leave",st),W&&Bn(a,co+"move",Ge)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=je=q=!1,j._vx.reset(),j._vy.reset(),ne=G(),oe=se(),Ue&&Ue.type&&ct(Ue),Q&&Q(j)),j},j.disable=function(){j.isEnabled&&(ka.filter(function(Ue){return Ue!==j&&vu(Ue.target)}).length||kn(ve?pe:a,"scroll",km),j.isPressed&&(j._vx.reset(),j._vy.reset(),kn(U?a:pe,ar[1],tt,!0)),kn(ve?pe:a,"scroll",de,he),kn(a,"wheel",me,he),kn(a,ar[0],ct,he),kn(pe,ar[2],ge),kn(pe,ar[3],ge),kn(a,"click",pt,!0),kn(a,"click",gt),kn(pe,"gesturestart",le),kn(pe,"gestureend",D),kn(a,co+"enter",ze),kn(a,co+"leave",st),kn(a,co+"move",Ge),j.isEnabled=j.isPressed=j.isDragging=!1,F&&F(j))},j.kill=j.revert=function(){j.disable();var Ue=ka.indexOf(j);Ue>=0&&ka.splice(Ue,1),Yr===j&&(Yr=0)},ka.push(j),U&&vu(a)&&(Yr=j),j.enable(g)},$C(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Zt.version="3.15.0";Zt.create=function(n){return new Zt(n)};Zt.register=L1;Zt.getAll=function(){return ka.slice()};Zt.getById=function(n){return ka.filter(function(e){return e.vars.id===n})[0]};b1()&&xn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,Ma,ft,Et,Mi,St,M_,xh,Ju,yu,Ql,Uc,Rn,Qh,Bm,Wn,vv,yv,Ea,D1,Gd,U1,Vn,Hm,I1,N1,fs,Vm,E_,Qa,w_,xu,Gm,Wd,Ic=1,Pn=Date.now,Xd=Pn(),Ji=0,Jl=0,xv=function(e,t,i){var r=xi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Sv=function(e,t){return t&&(!xi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},QC=function n(){return Jl&&requestAnimationFrame(n)},Mv=function(){return Qh=1},Ev=function(){return Qh=0},yr=function(e){return e},eu=function(e){return Math.round(e*1e5)/1e5||0},O1=function(){return typeof window<"u"},F1=function(){return De||O1()&&(De=window.gsap)&&De.registerPlugin&&De},Ho=function(e){return!!~M_.indexOf(e)},k1=function(e){return(e==="Height"?w_:ft["inner"+e])||Mi["client"+e]||St["client"+e]},z1=function(e){return ks(e,"getBoundingClientRect")||(Ho(e)?function(){return Bf.width=ft.innerWidth,Bf.height=w_,Bf}:function(){return Vr(e)})},JC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=ks(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?k1(s):e["client"+s])||0}},eb=function(e,t){return!t||~br.indexOf(e)?z1(e):function(){return Bf}},wr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=ks(e,i))?o()-z1(e)()[s]:Ho(e)?(Mi[i]||St[i])-k1(r):e[i]-e["offset"+r])},Nc=function(e,t){for(var i=0;i<Ea.length;i+=3)(!t||~t.indexOf(Ea[i+1]))&&e(Ea[i],Ea[i+1],Ea[i+2])},xi=function(e){return typeof e=="string"},Un=function(e){return typeof e=="function"},tu=function(e){return typeof e=="number"},fo=function(e){return typeof e=="object"},Ol=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Zo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Qo=Math.abs,B1="left",H1="top",T_="right",A_="bottom",Ro="width",Po="height",Su="Right",Mu="Left",Eu="Top",wu="Bottom",Jt="padding",Vi="margin",pl="Width",C_="Height",rn="px",Gi=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},tb=function(e){var t=Gi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},wv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Vr=function(e,t){var i=t&&Gi(e)[Bm]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Sh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},V1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},nb=function(e){return function(t){return De.utils.snap(V1(e),t)}},b_=function(e){var t=De.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},ib=function(e){return function(t,i){return b_(V1(e))(t,i.direction)}},Oc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},hn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},fn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Fc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Tv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},kc={toggleActions:"play",anticipatePin:0},Mh={top:0,left:0,center:.5,bottom:1,right:1},Of=function(e,t){if(xi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Mh?Mh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},zc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,_=Et.createElement("div"),g=Ho(i)||ks(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,d=g?St:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,y=v?u:c,x="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(r===on?T_:A_)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(_,d.children[0]):d.appendChild(_),_._offset=_["offset"+r.op.d2],Ff(_,0,r,v),_},Ff=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+pl]=1,s["border"+a+pl]=0,s[i.p]=t+"px",De.set(e,s)},ut=[],Wm={},ec,Av=function(){return Pn()-Ji>34&&(ec||(ec=requestAnimationFrame($r)))},Jo=function(){(!Vn||!Vn.isPressed||Vn.startX>St.clientWidth)&&(dt.cache++,Vn?ec||(ec=requestAnimationFrame($r)):$r(),Ji||Go("scrollStart"),Ji=Pn())},Yd=function(){N1=ft.innerWidth,I1=ft.innerHeight},nu=function(e){dt.cache++,(e===!0||!Rn&&!U1&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!Hm||N1!==ft.innerWidth||Math.abs(ft.innerHeight-I1)>ft.innerHeight*.25))&&xh.restart(!0)},Vo={},rb=[],G1=function n(){return fn(rt,"scrollEnd",n)||xo(!0)},Go=function(e){return Vo[e]&&Vo[e].map(function(t){return t()})||rb},vi=[],W1=function(e){for(var t=0;t<vi.length;t+=5)(!e||vi[t+4]&&vi[t+4].query===e)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},X1=function(){return dt.forEach(function(e){return Un(e)&&++e.cacheID&&(e.rec=e())})},R_=function(e,t){var i;for(Wn=0;Wn<ut.length;Wn++)i=ut[Wn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));xu=!0,t&&W1(t),t||Go("revert")},Y1=function(e,t){dt.cache++,(t||!Xn)&&dt.forEach(function(i){return Un(i)&&i.cacheID++&&(i.rec=0)}),xi(e)&&(ft.history.scrollRestoration=E_=e)},Xn,Lo=0,Cv,sb=function(){if(Cv!==Lo){var e=Cv=Lo;requestAnimationFrame(function(){return e===Lo&&xo(!0)})}},j1=function(){St.appendChild(Qa),w_=!Vn&&Qa.offsetHeight||ft.innerHeight,St.removeChild(Qa)},bv=function(e){return Ju(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},xo=function(e,t){if(Mi=Et.documentElement,St=Et.body,M_=[ft,Et,Mi,St],Ji&&!e&&!xu){hn(rt,"scrollEnd",G1);return}j1(),Xn=rt.isRefreshing=!0,xu||X1();var i=Go("refreshInit");D1&&rt.sort(),t||R_(),dt.forEach(function(r){Un(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ut.slice(0).forEach(function(r){return r.refresh()}),xu=!1,ut.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Gm=1,bv(!0),ut.forEach(function(r){var s=wr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),bv(!1),Gm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),dt.forEach(function(r){Un(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Y1(E_,1),xh.pause(),Lo++,Xn=2,$r(2),ut.forEach(function(r){return Un(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Xn=rt.isRefreshing=!1,Go("refresh")},Xm=0,kf=1,Tu,$r=function(e){if(e===2||!Xn&&!xu){rt.isUpdating=!0,Tu&&Tu.update(0);var t=ut.length,i=Pn(),r=i-Xd>=50,s=t&&ut[0].scroll();if(kf=Xm>s?-1:1,Xn||(Xm=s),r&&(Ji&&!Qh&&i-Ji>200&&(Ji=0,Go("scrollEnd")),Ql=Xd,Xd=i),kf<0){for(Wn=t;Wn-- >0;)ut[Wn]&&ut[Wn].update(0,r);kf=1}else for(Wn=0;Wn<t;Wn++)ut[Wn]&&ut[Wn].update(0,r);rt.isUpdating=!1}ec=0},Ym=[B1,H1,A_,T_,Vi+wu,Vi+Su,Vi+Eu,Vi+Mu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zf=Ym.concat([Ro,Po,"boxSizing","max"+pl,"max"+C_,"position",Vi,Jt,Jt+Eu,Jt+Su,Jt+wu,Jt+Mu]),ob=function(e,t,i){Ja(i);var r=e._gsap;if(r.spacerIsNative)Ja(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},jd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Ym.length,o=t.style,a=e.style,l;s--;)l=Ym[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[A_]=a[T_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ro]=Sh(e,qn)+rn,o[Po]=Sh(e,on)+rn,o[Jt]=a[Vi]=a[H1]=a[B1]="0",Ja(r),a[Ro]=a["max"+pl]=i[Ro],a[Po]=a["max"+C_]=i[Po],a[Jt]=i[Jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ab=/([A-Z])/g,Ja=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(ab,"-$1").toLowerCase())}},Bc=function(e){for(var t=zf.length,i=e.style,r=[],s=0;s<t;s++)r.push(zf[s],i[zf[s]]);return r.t=e,r},lb=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Bf={left:0,top:0},Rv=function(e,t,i,r,s,o,a,l,u,c,h,f,p,_){Un(e)&&(e=e(l)),xi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Of("0"+e.substr(3),i):0));var g=p?p.time():0,m,d,v;if(p&&p.seek(0),isNaN(e)||(e=+e),tu(e))p&&(e=De.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Ff(a,i,r,!0);else{Un(t)&&(t=t(l));var y=(e||"0").split(" "),x,w,T,E;v=ti(t,l)||St,x=Vr(v)||{},(!x||!x.left&&!x.top)&&Gi(v).display==="none"&&(E=v.style.display,v.style.display="block",x=Vr(v),E?v.style.display=E:v.style.removeProperty("display")),w=Of(y[0],x[r.d]),T=Of(y[1]||"0",i),e=x[r.p]-u[r.p]-c+w+s-T,a&&Ff(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,Ff(o,P,r,S&&P>20||!S&&(h?Math.max(St[m],Mi[m]):o.parentNode[m])<=P+1),h&&(u=Vr(a),h&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+rn))}return p&&v&&(m=Vr(v),p.seek(f),d=Vr(v),p._caScrollDist=m[r.p]-d[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},ub=/(webkit|moz|length|cssText|inset)/i,Pv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Gi(e);for(o in a)!+o&&!ub.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},q1=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Hc=function(e,t,i){var r={};r[t.p]="+="+i,De.set(e,r)},Lv=function(e,t){var i=js(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,h){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=q1(i,u,function(){f.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&$r()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=De.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(e,"wheel",i.wheelHandler),rt.isTouch&&hn(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){Ma||n.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jl){this.update=this.refresh=this.kill=yr;return}i=wv(xi(i)||tu(i)||i.nodeType?{trigger:i}:i,kc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,d=s.onScrubComplete,v=s.onSnapComplete,y=s.once,x=s.snap,w=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,M=i.horizontal||i.containerAnimation&&i.horizontal!==!1?qn:on,k=!h&&h!==0,O=ti(i.scroller||ft),te=De.core.getCache(O),L=Ho(O),z=("pinType"in i?i.pinType:ks(O,"pinType")||L&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=k&&i.toggleActions.split(" "),U="markers"in i?i.markers:kc.markers,B=L?0:parseFloat(Gi(O)["border"+M.p2+pl])||0,b=this,ee=i.onRefreshInit&&function(){return i.onRefreshInit(b)},Q=JC(O,L,M),F=eb(O,L),$=0,J=0,he=0,ce=js(O,M),we,Me,He,Qe,q,je,Ee,ke,xe,j,Ve,R,C,G,se,ne,oe,Se,ve,pe,Ie,Xe,ie,pt,Oe,Le,Ce,ae,Ze,tt,ct,ge,le,D,de,me,Ge,ze,st;if(b._startClamp=b._endClamp=!1,b._dir=M,m*=45,b.scroller=O,b.scroll=E?E.time.bind(E):ce,Qe=ce(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(D1=1,i.refreshPriority===-9999&&(Tu=b)),te.tweenScroll=te.tweenScroll||{top:Lv(O,on),left:Lv(O,qn)},b.tweenTo=we=te.tweenScroll[M.p],b.scrubDuration=function(fe){le=tu(fe)&&fe,le?ge?ge.duration(fe):ge=De.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return d&&d(b)}}):(ge&&ge.progress(1).kill(),ge=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(h),tt=0,l||(l=r.vars.id)),x&&((!fo(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in St.style&&De.set(L?[St,Mi]:O,{scrollBehavior:"auto"}),dt.forEach(function(fe){return Un(fe)&&fe.target===(L?Et.scrollingElement||Mi:O)&&(fe.smooth=!1)}),He=Un(x.snapTo)?x.snapTo:x.snapTo==="labels"?nb(r):x.snapTo==="labelsDirectional"?ib(r):x.directional!==!1?function(fe,Ye){return b_(x.snapTo)(fe,Pn()-J<500?0:Ye.direction)}:De.utils.snap(x.snapTo),D=x.duration||{min:.1,max:2},D=fo(D)?yu(D.min,D.max):yu(D,D),de=De.delayedCall(x.delay||le/2||.1,function(){var fe=ce(),Ye=Pn()-J<500,We=we.tween;if((Ye||Math.abs(b.getVelocity())<10)&&!We&&!Qh&&$!==fe){var Je=(fe-je)/G,xt=r&&!k?r.totalProgress():Je,ot=Ye?0:(xt-ct)/(Pn()-Ql)*1e3||0,Z=De.utils.clamp(-Je,1-Je,Qo(ot/2)*ot/.185),Ae=Je+(x.inertia===!1?0:Z),K,qe,_e=x,at=_e.onStart,A=_e.onInterrupt,N=_e.onComplete;if(K=He(Ae,b),tu(K)||(K=Ae),qe=Math.max(0,Math.round(je+K*G)),fe<=Ee&&fe>=je&&qe!==fe){if(We&&!We._initted&&We.data<=Qo(qe-fe))return;x.inertia===!1&&(Z=K-Je),we(qe,{duration:D(Qo(Math.max(Qo(Ae-xt),Qo(K-xt))*.185/ot/.05||0)),ease:x.ease||"power3",data:Qo(qe-fe),onInterrupt:function(){return de.restart(!0)&&A&&Zo(b,A)},onComplete:function(){b.update(),$=ce(),r&&!k&&(ge?ge.resetTo("totalProgress",K,r._tTime/r._tDur):r.progress(K)),tt=ct=r&&!k?r.totalProgress():b.progress,v&&v(b),N&&Zo(b,N)}},fe,Z*G,qe-fe-Z*G),at&&Zo(b,at,we.tween)}}else b.isActive&&$!==fe&&de.restart(!0)}).pause()),l&&(Wm[l]=b),f=b.trigger=ti(f||p!==!0&&p),st=f&&f._gsap&&f._gsap.stRevert,st&&(st=st(b)),p=p===!0?f:ti(p),xi(a)&&(a={targets:f,className:a}),p&&(_===!1||_===Vi||(_=!_&&p.parentNode&&p.parentNode.style&&Gi(p.parentNode).display==="flex"?!1:Jt),b.pin=p,Me=De.core.getCache(p),Me.spacer?se=Me.pinState:(T&&(T=ti(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Me.spacerIsNative=!!T,T&&(Me.spacerState=Bc(T))),Me.spacer=Se=T||Et.createElement("div"),Se.classList.add("pin-spacer"),l&&Se.classList.add("pin-spacer-"+l),Me.pinState=se=Bc(p)),i.force3D!==!1&&De.set(p,{force3D:!0}),b.spacer=Se=Me.spacer,Ze=Gi(p),pt=Ze[_+M.os2],pe=De.getProperty(p),Ie=De.quickSetter(p,M.a,rn),jd(p,Se,Ze),oe=Bc(p)),U){R=fo(U)?wv(U,Tv):Tv,j=zc("scroller-start",l,O,M,R,0),Ve=zc("scroller-end",l,O,M,R,0,j),ve=j["offset"+M.op.d2];var gt=ti(ks(O,"content")||O);ke=this.markerStart=zc("start",l,gt,M,R,ve,0,E),xe=this.markerEnd=zc("end",l,gt,M,R,ve,0,E),E&&(ze=De.quickSetter([ke,xe],M.a,rn)),!z&&!(br.length&&ks(O,"fixedMarkers")===!0)&&(tb(L?St:O),De.set([j,Ve],{force3D:!0}),Le=De.quickSetter(j,M.a,rn),ae=De.quickSetter(Ve,M.a,rn))}if(E){var Ue=E.vars.onUpdate,be=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){b.update(0,0,1),Ue&&Ue.apply(E,be||[])})}if(b.previous=function(){return ut[ut.indexOf(b)-1]},b.next=function(){return ut[ut.indexOf(b)+1]},b.revert=function(fe,Ye){if(!Ye)return b.kill(!0);var We=fe!==!1||!b.enabled,Je=Rn;We!==b.isReverted&&(We&&(me=Math.max(ce(),b.scroll.rec||0),he=b.progress,Ge=r&&r.progress()),ke&&[ke,xe,j,Ve].forEach(function(xt){return xt.style.display=We?"none":"block"}),We&&(Rn=b,b.update(We)),p&&(!w||!b.isActive)&&(We?ob(p,Se,se):jd(p,Se,Gi(p),Oe)),We||b.update(We),Rn=Je,b.isReverted=We)},b.refresh=function(fe,Ye,We,Je){if(!((Rn||!b.enabled)&&!Ye)){if(p&&fe&&Ji){hn(n,"scrollEnd",G1);return}!Xn&&ee&&ee(b),Rn=b,we.tween&&!We&&(we.tween.kill(),we.tween=0),ge&&ge.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(et){return et.vars.immediateRender&&et.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var xt=Q(),ot=F(),Z=E?E.duration():wr(O,M),Ae=G<=.01||!G,K=0,qe=Je||0,_e=fo(We)?We.end:i.end,at=i.endTrigger||f,A=fo(We)?We.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),N=b.pinnedContainer=i.pinnedContainer&&ti(i.pinnedContainer,b),Y=f&&Math.max(0,ut.indexOf(b))||0,I=Y,V,re,Te,Fe,Re,Be,Ke,it,It,nn,Mt,Fn,Tt;for(U&&fo(We)&&(Fn=De.getProperty(j,M.p),Tt=De.getProperty(Ve,M.p));I-- >0;)Be=ut[I],Be.end||Be.refresh(0,1)||(Rn=b),Ke=Be.pin,Ke&&(Ke===f||Ke===p||Ke===N)&&!Be.isReverted&&(nn||(nn=[]),nn.unshift(Be),Be.revert(!0,!0)),Be!==ut[I]&&(Y--,I--);for(Un(A)&&(A=A(b)),A=xv(A,"start",b),je=Rv(A,f,xt,M,ce(),ke,j,b,ot,B,z,Z,E,b._startClamp&&"_startClamp")||(p?-.001:0),Un(_e)&&(_e=_e(b)),xi(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(xi(A)?A.split(" ")[0]:"")+_e:(K=Of(_e.substr(2),xt),_e=xi(A)?A:(E?De.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,je):je)+K,at=f)),_e=xv(_e,"end",b),Ee=Math.max(je,Rv(_e||(at?"100% 0":Z),at,xt,M,ce()+K,xe,Ve,b,ot,B,z,Z,E,b._endClamp&&"_endClamp"))||-.001,K=0,I=Y;I--;)Be=ut[I]||{},Ke=Be.pin,Ke&&Be.start-Be._pinPush<=je&&!E&&Be.end>0&&(V=Be.end-(b._startClamp?Math.max(0,Be.start):Be.start),(Ke===f&&Be.start-Be._pinPush<je||Ke===N)&&isNaN(A)&&(K+=V*(1-Be.progress)),Ke===p&&(qe+=V));if(je+=K,Ee+=K,b._startClamp&&(b._startClamp+=K),b._endClamp&&!Xn&&(b._endClamp=Ee||-.001,Ee=Math.min(Ee,wr(O,M))),G=Ee-je||(je-=.01)&&.001,Ae&&(he=De.utils.clamp(0,1,De.utils.normalize(je,Ee,me))),b._pinPush=qe,ke&&K&&(V={},V[M.a]="+="+K,N&&(V[M.p]="-="+ce()),De.set([ke,xe],V)),p&&!(Gm&&b.end>=wr(O,M)))V=Gi(p),Fe=M===on,Te=ce(),Xe=parseFloat(pe(M.a))+qe,!Z&&Ee>1&&(Mt=(L?Et.scrollingElement||Mi:O).style,Mt={style:Mt,value:Mt["overflow"+M.a.toUpperCase()]},L&&Gi(St)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Mt.style["overflow"+M.a.toUpperCase()]="scroll")),jd(p,Se,V),oe=Bc(p),re=Vr(p,!0),it=z&&js(O,Fe?qn:on)(),_?(Oe=[_+M.os2,G+qe+rn],Oe.t=Se,I=_===Jt?Sh(p,M)+G+qe:0,I&&(Oe.push(M.d,I+rn),Se.style.flexBasis!=="auto"&&(Se.style.flexBasis=I+rn)),Ja(Oe),N&&ut.forEach(function(et){et.pin===N&&et.vars.pinSpacing!==!1&&(et._subPinOffset=!0)}),z&&ce(me)):(I=Sh(p,M),I&&Se.style.flexBasis!=="auto"&&(Se.style.flexBasis=I+rn)),z&&(Re={top:re.top+(Fe?Te-je:it)+rn,left:re.left+(Fe?it:Te-je)+rn,boxSizing:"border-box",position:"fixed"},Re[Ro]=Re["max"+pl]=Math.ceil(re.width)+rn,Re[Po]=Re["max"+C_]=Math.ceil(re.height)+rn,Re[Vi]=Re[Vi+Eu]=Re[Vi+Su]=Re[Vi+wu]=Re[Vi+Mu]="0",Re[Jt]=V[Jt],Re[Jt+Eu]=V[Jt+Eu],Re[Jt+Su]=V[Jt+Su],Re[Jt+wu]=V[Jt+wu],Re[Jt+Mu]=V[Jt+Mu],ne=lb(se,Re,w),Xn&&ce(0)),r?(It=r._initted,Gd(1),r.render(r.duration(),!0,!0),ie=pe(M.a)-Xe+G+qe,Ce=Math.abs(G-ie)>1,z&&Ce&&ne.splice(ne.length-2,2),r.render(0,!0,!0),It||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Gd(0)):ie=G,Mt&&(Mt.value?Mt.style["overflow"+M.a.toUpperCase()]=Mt.value:Mt.style.removeProperty("overflow-"+M.a));else if(f&&ce()&&!E)for(re=f.parentNode;re&&re!==St;)re._pinOffset&&(je-=re._pinOffset,Ee-=re._pinOffset),re=re.parentNode;nn&&nn.forEach(function(et){return et.revert(!1,!0)}),b.start=je,b.end=Ee,Qe=q=Xn?me:ce(),!E&&!Xn&&(Qe<me&&ce(me),b.scroll.rec=0),b.revert(!1,!0),J=Pn(),de&&($=-1,de.restart(!0)),Rn=0,r&&k&&(r._initted||Ge)&&r.progress()!==Ge&&r.progress(Ge||0,!0).render(r.time(),!0,!0),(Ae||he!==b.progress||E||g||r&&!r._initted)&&(r&&!k&&(r._initted||he||r.vars.immediateRender!==!1)&&r.totalProgress(E&&je<-.001&&!he?De.utils.normalize(je,Ee,0):he,!0),b.progress=Ae||(Qe-je)/G===he?0:he),p&&_&&(Se._pinOffset=Math.round(b.progress*ie)),ge&&ge.invalidate(),isNaN(Fn)||(Fn-=De.getProperty(j,M.p),Tt-=De.getProperty(Ve,M.p),Hc(j,M,Fn),Hc(ke,M,Fn-(Je||0)),Hc(Ve,M,Tt),Hc(xe,M,Tt-(Je||0))),Ae&&!Xn&&b.update(),c&&!Xn&&!C&&(C=!0,c(b),C=!1)}},b.getVelocity=function(){return(ce()-q)/(Pn()-Ql)*1e3||0},b.endAnimation=function(){Ol(b.callbackAnimation),r&&(ge?ge.progress(1):r.paused()?k||Ol(r,b.direction<0,1):Ol(r,r.reversed()))},b.labelToScroll=function(fe){return r&&r.labels&&(je||b.refresh()||je)+r.labels[fe]/r.duration()*G||0},b.getTrailing=function(fe){var Ye=ut.indexOf(b),We=b.direction>0?ut.slice(0,Ye).reverse():ut.slice(Ye+1);return(xi(fe)?We.filter(function(Je){return Je.vars.preventOverlaps===fe}):We).filter(function(Je){return b.direction>0?Je.end<=je:Je.start>=Ee})},b.update=function(fe,Ye,We){if(!(E&&!We&&!fe)){var Je=Xn===!0?me:b.scroll(),xt=fe?0:(Je-je)/G,ot=xt<0?0:xt>1?1:xt||0,Z=b.progress,Ae,K,qe,_e,at,A,N,Y;if(Ye&&(q=Qe,Qe=E?ce():Je,x&&(ct=tt,tt=r&&!k?r.totalProgress():ot)),m&&p&&!Rn&&!Ic&&Ji&&(!ot&&je<Je+(Je-q)/(Pn()-Ql)*m?ot=1e-4:ot===1&&Ee>Je+(Je-q)/(Pn()-Ql)*m&&(ot=.9999)),ot!==Z&&b.enabled){if(Ae=b.isActive=!!ot&&ot<1,K=!!Z&&Z<1,A=Ae!==K,at=A||!!ot!=!!Z,b.direction=ot>Z?1:-1,b.progress=ot,at&&!Rn&&(qe=ot&&!Z?0:ot===1?1:Z===1?2:3,k&&(_e=!A&&X[qe+1]!=="none"&&X[qe+1]||X[qe],Y=r&&(_e==="complete"||_e==="reset"||_e in r))),S&&(A||Y)&&(Y||h||!r)&&(Un(S)?S(b):b.getTrailing(S).forEach(function(Te){return Te.endAnimation()})),k||(ge&&!Rn&&!Ic?(ge._dp._time-ge._start!==ge._time&&ge.render(ge._dp._time-ge._start),ge.resetTo?ge.resetTo("totalProgress",ot,r._tTime/r._tDur):(ge.vars.totalProgress=ot,ge.invalidate().restart())):r&&r.totalProgress(ot,!!(Rn&&(J||fe)))),p){if(fe&&_&&(Se.style[_+M.os2]=pt),!z)Ie(eu(Xe+ie*ot));else if(at){if(N=!fe&&ot>Z&&Ee+1>Je&&Je+1>=wr(O,M),w)if(!fe&&(Ae||N)){var I=Vr(p,!0),V=Je-je;Pv(p,St,I.top+(M===on?V:0)+rn,I.left+(M===on?0:V)+rn)}else Pv(p,Se);Ja(Ae||N?ne:oe),Ce&&ot<1&&Ae||Ie(Xe+(ot===1&&!N?ie:0))}}x&&!we.tween&&!Rn&&!Ic&&de.restart(!0),a&&(A||y&&ot&&(ot<1||!Wd))&&Ju(a.targets).forEach(function(Te){return Te.classList[Ae||y?"add":"remove"](a.className)}),o&&!k&&!fe&&o(b),at&&!Rn?(k&&(Y&&(_e==="complete"?r.pause().totalProgress(1):_e==="reset"?r.restart(!0).pause():_e==="restart"?r.restart(!0):r[_e]()),o&&o(b)),(A||!Wd)&&(u&&A&&Zo(b,u),W[qe]&&Zo(b,W[qe]),y&&(ot===1?b.kill(!1,1):W[qe]=0),A||(qe=ot===1?1:3,W[qe]&&Zo(b,W[qe]))),P&&!Ae&&Math.abs(b.getVelocity())>(tu(P)?P:2500)&&(Ol(b.callbackAnimation),ge?ge.progress(1):Ol(r,_e==="reverse"?1:!ot,1))):k&&o&&!Rn&&o(b)}if(ae){var re=E?Je/E.duration()*(E._caScrollDist||0):Je;Le(re+(j._isFlipped?1:0)),ae(re)}ze&&ze(-Je/E.duration()*(E._caScrollDist||0))}},b.enable=function(fe,Ye){b.enabled||(b.enabled=!0,hn(O,"resize",nu),L||hn(O,"scroll",Jo),ee&&hn(n,"refreshInit",ee),fe!==!1&&(b.progress=he=0,Qe=q=$=ce()),Ye!==!1&&b.refresh())},b.getTween=function(fe){return fe&&we?we.tween:ge},b.setPositions=function(fe,Ye,We,Je){if(E){var xt=E.scrollTrigger,ot=E.duration(),Z=xt.end-xt.start;fe=xt.start+Z*fe/ot,Ye=xt.start+Z*Ye/ot}b.refresh(!1,!1,{start:Sv(fe,We&&!!b._startClamp),end:Sv(Ye,We&&!!b._endClamp)},Je),b.update()},b.adjustPinSpacing=function(fe){if(Oe&&fe){var Ye=Oe.indexOf(M.d)+1;Oe[Ye]=parseFloat(Oe[Ye])+fe+rn,Oe[1]=parseFloat(Oe[1])+fe+rn,Ja(Oe)}},b.disable=function(fe,Ye){if(fe!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,Ye||ge&&ge.pause(),me=0,Me&&(Me.uncache=1),ee&&fn(n,"refreshInit",ee),de&&(de.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!L)){for(var We=ut.length;We--;)if(ut[We].scroller===O&&ut[We]!==b)return;fn(O,"resize",nu),L||fn(O,"scroll",Jo)}},b.kill=function(fe,Ye){b.disable(fe,Ye),ge&&!Ye&&ge.kill(),l&&delete Wm[l];var We=ut.indexOf(b);We>=0&&ut.splice(We,1),We===Wn&&kf>0&&Wn--,We=0,ut.forEach(function(Je){return Je.scroller===b.scroller&&(We=1)}),We||Xn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,fe&&r.revert({kill:!1}),Ye||r.kill()),ke&&[ke,xe,j,Ve].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),Tu===b&&(Tu=0),p&&(Me&&(Me.uncache=1),We=0,ut.forEach(function(Je){return Je.pin===p&&We++}),We||(Me.spacer=0)),i.onKill&&i.onKill(b)},ut.push(b),b.enable(!1,!1),st&&st(b),r&&r.add&&!G){var Ne=b.update;b.update=function(){b.update=Ne,dt.cache++,je||Ee||b.refresh()},De.delayedCall(.01,b.update),G=.01,je=Ee=0}else b.refresh();p&&sb()},n.register=function(i){return Ma||(De=i||F1(),O1()&&window.document&&n.enable(),Ma=Jl),Ma},n.defaults=function(i){if(i)for(var r in i)kc[r]=i[r];return kc},n.disable=function(i,r){Jl=0,ut.forEach(function(o){return o[r?"kill":"disable"](i)}),fn(ft,"wheel",Jo),fn(Et,"scroll",Jo),clearInterval(Uc),fn(Et,"touchcancel",yr),fn(St,"touchstart",yr),Oc(fn,Et,"pointerdown,touchstart,mousedown",Mv),Oc(fn,Et,"pointerup,touchend,mouseup",Ev),xh.kill(),Nc(fn);for(var s=0;s<dt.length;s+=3)Fc(fn,dt[s],dt[s+1]),Fc(fn,dt[s],dt[s+2])},n.enable=function(){if(ft=window,Et=document,Mi=Et.documentElement,St=Et.body,De){if(Ju=De.utils.toArray,yu=De.utils.clamp,Vm=De.core.context||yr,Gd=De.core.suppressOverwrites||yr,E_=ft.history.scrollRestoration||"auto",Xm=ft.pageYOffset||0,De.core.globals("ScrollTrigger",n),St){Jl=1,Qa=document.createElement("div"),Qa.style.height="100vh",Qa.style.position="absolute",j1(),QC(),Zt.register(De),n.isTouch=Zt.isTouch,fs=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Hm=Zt.isTouch===1,hn(ft,"wheel",Jo),M_=[ft,Et,Mi,St],De.matchMedia?(n.matchMedia=function(c){var h=De.matchMedia(),f;for(f in c)h.add(f,c[f]);return h},De.addEventListener("matchMediaInit",function(){X1(),R_()}),De.addEventListener("matchMediaRevert",function(){return W1()}),De.addEventListener("matchMedia",function(){xo(0,1),Go("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return Yd(),Yd})):console.warn("Requires GSAP 3.11.0 or later"),Yd(),hn(Et,"scroll",Jo);var i=St.hasAttribute("style"),r=St.style,s=r.borderTopStyle,o=De.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Vr(St),on.m=Math.round(a.top+on.sc())||0,qn.m=Math.round(a.left+qn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(St.setAttribute("style",""),St.removeAttribute("style")),Uc=setInterval(Av,250),De.delayedCall(.5,function(){return Ic=0}),hn(Et,"touchcancel",yr),hn(St,"touchstart",yr),Oc(hn,Et,"pointerdown,touchstart,mousedown",Mv),Oc(hn,Et,"pointerup,touchend,mouseup",Ev),Bm=De.utils.checkPrefix("transform"),zf.push(Bm),Ma=Pn(),xh=De.delayedCall(.2,xo).pause(),Ea=[Et,"visibilitychange",function(){var c=ft.innerWidth,h=ft.innerHeight;Et.hidden?(vv=c,yv=h):(vv!==c||yv!==h)&&nu()},Et,"DOMContentLoaded",xo,ft,"load",xo,ft,"resize",nu],Nc(hn),ut.forEach(function(c){return c.enable(0,1)}),l=0;l<dt.length;l+=3)Fc(fn,dt[l],dt[l+1]),Fc(fn,dt[l],dt[l+2])}else if(Et){var u=function c(){n.enable(),Et.removeEventListener("DOMContentLoaded",c)};Et.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Wd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Uc)||(Uc=r)&&setInterval(Av,r),"ignoreMobileResize"in i&&(Hm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Nc(fn)||Nc(hn,i.autoRefreshEvents||"none"),U1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ti(i),o=dt.indexOf(s),a=Ho(s);~o&&dt.splice(o,a?6:2),r&&(a?br.unshift(ft,r,St,r,Mi,r):br.unshift(s,r))},n.clearMatchMedia=function(i){ut.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(xi(i)?ti(i):i).getBoundingClientRect(),a=o[s?Ro:Po]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},n.positionInViewport=function(i,r,s){xi(i)&&(i=ti(i));var o=i.getBoundingClientRect(),a=o[s?Ro:Po],l=r==null?a/2:r in Mh?Mh[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},n.killAll=function(i){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Vo.killAll||[];Vo={},r.forEach(function(s){return s()})}},n}();rt.version="3.15.0";rt.saveStyles=function(n){return n?Ju(n).forEach(function(e){if(e&&e.style){var t=vi.indexOf(e);t>=0&&vi.splice(t,5),vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),Vm())}}):vi};rt.revert=function(n,e){return R_(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?nu(!0):(Ma||rt.register())&&xo(!0)};rt.update=function(n){return++dt.cache&&$r(n===!0?2:0)};rt.clearScrollMemory=Y1;rt.maxScroll=function(n,e){return wr(n,e?qn:on)};rt.getScrollFunc=function(n,e){return js(ti(n),e?qn:on)};rt.getById=function(n){return Wm[n]};rt.getAll=function(){return ut.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Ji};rt.snapDirectional=b_;rt.addEventListener=function(n,e){var t=Vo[n]||(Vo[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=Vo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],f=[],p=De.delayedCall(r,function(){c(h,f),h=[],f=[]}).pause();return function(_){h.length||p.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Un(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Un(s)&&(s=s(),hn(rt,"refresh",function(){return s=e.batchMax()})),Ju(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(rt.create(u))}),t};var Dv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},qd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===Mi&&n(St,t)},Vc={auto:1,scroll:1},cb=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||De.core.getCache(s),a=Pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Vc[(l=Gi(s)).overflowY]||Vc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ho(s)&&(Vc[(l=Gi(s)).overflowY]||Vc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},$1=function(e,t,i,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&cb,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&hn(Et,Zt.eventTypes[0],Iv,!1,!0)},onDisable:function(){return fn(Et,Zt.eventTypes[0],Iv,!0)}})},fb=/(input|label|select|textarea)/i,Uv,Iv=function(e){var t=fb.test(e.target.tagName);(t||Uv)&&(e._gsapAllow=!0,Uv=t)},hb=function(e){fo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ti(e.target)||Mi,c=De.core.globals().ScrollSmoother,h=c&&c.get(),f=fs&&(e.content&&ti(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=js(u,on),_=js(u,qn),g=1,m=(Zt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,d=0,v=Un(r)?function(){return r(a)}:function(){return r||2.8},y,x,w=$1(u,e.type,!0,s),T=function(){return x=!1},E=yr,P=yr,S=function(){l=wr(u,on),P=yu(fs?1:0,l),i&&(E=yu(0,wr(u,qn))),y=Lo},M=function(){f._gsap.y=eu(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},k=function(){if(x){requestAnimationFrame(T);var U=eu(a.deltaY/2),B=P(p.v-U);if(f&&B!==p.v+p.offset){p.offset=B-p.v;var b=eu((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",f._gsap.y=b+"px",p.cacheID=dt.cache,$r()}return!0}p.offset&&M(),x=!0},O,te,L,z,W=function(){S(),O.isActive()&&O.vars.scrollY>l&&(p()>l?O.progress(1)&&p(l):O.resetTo("scrollY",l))};return f&&De.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return fs&&X.type==="touchmove"&&k()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){x=!1;var X=g;g=eu((ft.visualViewport&&ft.visualViewport.scale||1)/m),O.pause(),X!==g&&qd(u,g>1.01?!0:i?!1:"x"),te=_(),L=p(),S(),y=Lo},e.onRelease=e.onGestureStart=function(X,U){if(p.offset&&M(),!U)z.restart(!0);else{dt.cache++;var B=v(),b,ee;i&&(b=_(),ee=b+B*.05*-X.velocityX/.227,B*=Dv(_,b,ee,wr(u,qn)),O.vars.scrollX=E(ee)),b=p(),ee=b+B*.05*-X.velocityY/.227,B*=Dv(p,b,ee,wr(u,on)),O.vars.scrollY=P(ee),O.invalidate().duration(B).play(.01),(fs&&O.vars.scrollY>=l||b>=l-1)&&De.to({},{onUpdate:W,duration:B})}o&&o(X)},e.onWheel=function(){O._ts&&O.pause(),Pn()-d>1e3&&(y=0,d=Pn())},e.onChange=function(X,U,B,b,ee){if(Lo!==y&&S(),U&&i&&_(E(b[2]===U?te+(X.startX-X.x):_()+U-b[1])),B){p.offset&&M();var Q=ee[2]===B,F=Q?L+X.startY-X.y:p()+B-ee[1],$=P(F);Q&&F!==$&&(L+=$-F),p($)}(B||U)&&$r()},e.onEnable=function(){qd(u,i?!1:"x"),rt.addEventListener("refresh",W),hn(ft,"resize",W),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){qd(u,!0),fn(ft,"resize",W),rt.removeEventListener("refresh",W),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=fs,fs&&!p()&&p(1),fs&&De.ticker.add(yr),z=a._dc,O=De.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:q1(p,p(),function(){return O.pause()})},onUpdate:$r,onComplete:z.vars.onComplete}),a};rt.sort=function(n){if(Un(n))return ut.sort(n);var e=ft.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ut.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new Zt(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return Vn;if(n===!0&&Vn)return Vn.enable();if(n===!1){Vn&&Vn.kill(),Vn=n;return}var e=n instanceof Zt?n:hb(n);return Vn&&Vn.target===e.target&&Vn.kill(),Ho(e.target)&&(Vn=e),e};rt.core={_getVelocityProp:zm,_inputObserver:$1,_scrollers:dt,_proxies:br,bridge:{ss:function(){Ji||Go("scrollStart"),Ji=Pn()},ref:function(){return Rn}}};F1()&&De.registerPlugin(rt);(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function db(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Nv(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Ov(n,e,t){return e&&Nv(n.prototype,e),t&&Nv(n,t),n}function pb(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Fv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function kv(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Fv(Object(t),!0).forEach(function(i){pb(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Fv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function K1(n,e){return gb(n)||vb(n,e)||Z1(n,e)||xb()}function jn(n){return mb(n)||_b(n)||Z1(n)||yb()}function mb(n){if(Array.isArray(n))return jm(n)}function gb(n){if(Array.isArray(n))return n}function _b(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function vb(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function Z1(n,e){if(n){if(typeof n=="string")return jm(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return jm(n,e)}}function jm(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function yb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function So(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function lc(n){return typeof n=="string"}function P_(n){return Array.isArray(n)}function Gc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=So(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=(lc(t)||P_(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function L_(n){var e=lc(n)||P_(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Jh(n){return n!==null&&typeof n=="object"}function Sb(n){return Jh(n)&&/^(1|3|11)$/.test(n.nodeType)}function Mb(n){return typeof n=="number"&&n>-1&&n%1===0}function Eb(n){return Jh(n)&&Mb(n.length)}function Wo(n){return P_(n)?n:n==null?[]:Eb(n)?Array.prototype.slice.call(n):[n]}function zv(n){var e=n;return lc(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),Wo(e).reduce(function(t,i){return[].concat(jn(t),jn(Wo(i).filter(Sb)))},[])}var wb=Object.entries,Eh="_splittype",pr={},Tb=0;function Tr(n,e,t){if(!Jh(n))return console.warn("[data.set] owner is not an object"),null;var i=n[Eh]||(n[Eh]=++Tb),r=pr[i]||(pr[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(pr[i]=kv(kv({},r),e)):e!==void 0&&(r[e]=t),t}function Mo(n,e){var t=Jh(n)?n[Eh]:null,i=t&&pr[t]||{};return i}function Q1(n){var e=n&&n[Eh];e&&(delete n[e],delete pr[e])}function Ab(){Object.keys(pr).forEach(function(n){delete pr[n]})}function Cb(){wb(pr).forEach(function(n){var e=K1(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(pr[t]=null,delete pr[t])})}function bb(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var D_="\\ud800-\\udfff",J1="\\u0300-\\u036f\\ufe20-\\ufe23",eE="\\u20d0-\\u20f0",tE="\\ufe0e\\ufe0f",Rb="[".concat(D_,"]"),qm="[".concat(J1).concat(eE,"]"),$m="\\ud83c[\\udffb-\\udfff]",Pb="(?:".concat(qm,"|").concat($m,")"),nE="[^".concat(D_,"]"),iE="(?:\\ud83c[\\udde6-\\uddff]){2}",rE="[\\ud800-\\udbff][\\udc00-\\udfff]",sE="\\u200d",oE="".concat(Pb,"?"),aE="[".concat(tE,"]?"),Lb="(?:"+sE+"(?:"+[nE,iE,rE].join("|")+")"+aE+oE+")*",Db=aE+oE+Lb,Ub="(?:".concat(["".concat(nE).concat(qm,"?"),qm,iE,rE,Rb].join("|"),`
)`),Ib=RegExp("".concat($m,"(?=").concat($m,")|").concat(Ub).concat(Db),"g"),Nb=[sE,D_,J1,eE,tE],Ob=RegExp("[".concat(Nb.join(""),"]"));function Fb(n){return n.split("")}function lE(n){return Ob.test(n)}function kb(n){return n.match(Ib)||[]}function zb(n){return lE(n)?kb(n):Fb(n)}function Bb(n){return n==null?"":String(n)}function Hb(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=Bb(n),n&&lc(n)&&!e&&lE(n)?zb(n):n.split(e)}function Km(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=lc(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,jn(Wo(s))):t.setAttribute(i,s))}),t}var U_={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function Vb(n,e){e=So(U_,e);var t=L_(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=bb(r).reduce(function(l,u,c,h){var f,p;return t.chars&&(p=Hb(u).map(function(_){var g=Km(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:_});return Tr(g,"isChar",!0),a=[].concat(jn(a),[g]),g})),t.words||t.lines?(f=Km(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),Tr(f,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(f)):p.forEach(function(_){s.appendChild(_)}),c<h.length-1&&s.append(" "),t.words?l.concat(f):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function uE(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return Vb(n,e);var r=Wo(n.childNodes);if(r.length&&(Tr(n,"isSplit",!0),!Mo(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";Tr(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,h){var f=uE(h,e),p=f.words,_=f.chars;return{words:[].concat(jn(c.words),jn(p)),chars:[].concat(jn(c.chars),jn(_))}},i)}function Gb(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=K1(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var h=n.getBoundingClientRect(),f=h.width,p=h.height,_=h.x,g=h.y,m=g+a-u,d=_+o-l;return{width:f,height:p,top:m,left:d}}function cE(n){Mo(n).isWord?(Q1(n),n.replaceWith.apply(n,jn(n.childNodes))):Wo(n.children).forEach(function(e){return cE(e)})}var Wb=function(){return document.createDocumentFragment()};function Xb(n,e,t){var i=L_(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,h,f=[],p=n.parentElement,_=n.nextElementSibling,g=Wb(),m=window.getComputedStyle(n),d=m.textAlign,v=parseFloat(m.fontSize),y=v*.2;return e.absolute&&(h={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,Tr(n,{cssWidth:n.style.width,cssHeight:n.style.height})),Wo(s).forEach(function(x){var w=x.parentElement===n,T=Gb(x,w,e,t),E=T.width,P=T.height,S=T.top,M=T.left;/^br$/i.test(x.nodeName)||(i.lines&&w&&((l===null||S-l>=y)&&(l=S,o.push(a=[])),a.push(x)),e.absolute&&Tr(x,{top:S,left:M,width:E,height:P}))}),p&&p.removeChild(n),i.lines&&(f=o.map(function(x){var w=Km(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(d,"; width: 100%;")});Tr(w,"isLine",!0);var T={height:0,top:1e4};return g.appendChild(w),x.forEach(function(E,P,S){var M=Mo(E),k=M.isWordEnd,O=M.top,te=M.height,L=S[P+1];T.height=Math.max(T.height,te),T.top=Math.min(T.top,O),w.appendChild(E),k&&Mo(L).isWordStart&&w.append(" ")}),e.absolute&&Tr(w,{height:T.height,top:T.top}),w}),i.words||cE(g),n.replaceChildren(g)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),Wo(s).forEach(function(x){var w=Mo(x),T=w.isLine,E=w.top,P=w.left,S=w.width,M=w.height,k=Mo(x.parentElement),O=!T&&k.isLine;x.style.top="".concat(O?E-k.top:E,"px"),x.style.left=T?"".concat(h.left,"px"):"".concat(P-(O?h.left:0),"px"),x.style.height="".concat(M,"px"),x.style.width=T?"".concat(h.width,"px"):"".concat(S,"px"),x.style.position="absolute"})),p&&(_?p.insertBefore(n,_):p.appendChild(n)),f}var ea=So(U_,{}),Bv=function(){Ov(n,null,[{key:"clearData",value:function(){Ab()}},{key:"setDefaults",value:function(t){return ea=So(ea,Gc(t)),U_}},{key:"revert",value:function(t){zv(t).forEach(function(i){var r=Mo(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",Q1(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return pr}},{key:"defaults",get:function(){return ea},set:function(t){ea=So(ea,Gc(t))}}]);function n(e,t){db(this,n),this.isSplit=!1,this.settings=So(ea,Gc(t)),this.elements=zv(e),this.split()}return Ov(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){Tr(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=So(this.settings,Gc(t)));var s=L_(this.settings.types);s.none||(this.elements.forEach(function(o){Tr(o,"isRoot",!0);var a=uE(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(jn(i.words),jn(l)),i.chars=[].concat(jn(i.chars),jn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=Xb(o,i.settings,r);i.lines=[].concat(jn(i.lines),jn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),Cb())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();function fE(n,e,t){return Math.max(n,Math.min(e,t))}class Yb{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=e,function(l,u,c){return(1-c)*l+c*u}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=fE(0,this.currentTime/this.duration,1);t=l>=1;const u=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*u}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class jb{constructor({wrapper:e,content:t,autoResize:i=!0,debounce:r=250}={}){Lr(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Lr(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Lr(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,u=this;clearTimeout(a),a=setTimeout(function(){s.apply(u,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class hE{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)}on(e,t){var i;return(i=this.events[e])!=null&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>t!==s)}}off(e,t){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>t!==r)}destroy(){this.events={}}}const Hv=100/6;class qb{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=1}){Lr(this,"onTouchStart",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Lr(this,"onTouchMove",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});Lr(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Lr(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:r}=e;t*=r===1?Hv:r===2?this.windowWidth:1,i*=r===1?Hv:r===2?this.windowHeight:1,t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});Lr(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new hE,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class $b{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:i=e,eventsTarget:r=i,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:u,easing:c=y=>Math.min(1,1.001-Math.pow(2,-10*y)),lerp:h=!u&&.1,infinite:f=!1,orientation:p="vertical",gestureOrientation:_="vertical",touchMultiplier:g=1,wheelMultiplier:m=1,autoResize:d=!0,__experimental__naiveDimensions:v=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:y,deltaY:x,event:w})=>{if(w.ctrlKey)return;const T=w.type.includes("touch"),E=w.type.includes("wheel");if(this.options.syncTouch&&T&&w.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const P=y===0&&x===0,S=this.options.gestureOrientation==="vertical"&&x===0||this.options.gestureOrientation==="horizontal"&&y===0;if(P||S)return;let M=w.composedPath();if(M=M.slice(0,M.indexOf(this.rootElement)),M.find(L=>{var z,W,X,U,B;return((z=L.hasAttribute)===null||z===void 0?void 0:z.call(L,"data-lenis-prevent"))||T&&((W=L.hasAttribute)===null||W===void 0?void 0:W.call(L,"data-lenis-prevent-touch"))||E&&((X=L.hasAttribute)===null||X===void 0?void 0:X.call(L,"data-lenis-prevent-wheel"))||((U=L.classList)===null||U===void 0?void 0:U.contains("lenis"))&&!(!((B=L.classList)===null||B===void 0)&&B.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void w.preventDefault();if(this.isSmooth=this.options.syncTouch&&T||this.options.smoothWheel&&E,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();w.preventDefault();let k=x;this.options.gestureOrientation==="both"?k=Math.abs(x)>Math.abs(y)?x:y:this.options.gestureOrientation==="horizontal"&&(k=y);const O=T&&this.options.syncTouch,te=T&&w.type==="touchend"&&Math.abs(k)>5;te&&(k=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+k,Object.assign({programmatic:!1},O?{lerp:te?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const y=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-y),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:i,eventsTarget:r,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:u,easing:c,lerp:h,infinite:f,gestureOrientation:_,orientation:p,touchMultiplier:g,wheelMultiplier:m,autoResize:d,__experimental__naiveDimensions:v},this.animate=new Yb,this.emitter=new hE,this.dimensions=new jb({wrapper:e,content:t,autoResize:d}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new qb(r,{touchMultiplier:g,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:i=!1,lock:r=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:u=!1,programmatic:c=!0}={}){if(!this.isStopped&&!this.isLocked||u){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let h;if(typeof e=="string"?h=document.querySelector(e):e!=null&&e.nodeType&&(h=e),h){if(this.options.wrapper!==window){const p=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?p.left:p.top}const f=h.getBoundingClientRect();e=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=fE(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!c){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(h,f)=>{this.isScrolling=!0,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),c&&(this.targetScroll=h),f||this.emit(),f&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const I_="160",Kb=0,Vv=1,Zb=2,dE=1,Qb=2,Fr=3,qs=0,Zn=1,Xi=2,Kr=0,el=1,zi=2,Gv=3,Wv=4,Jb=5,po=100,eR=101,tR=102,Xv=103,Yv=104,nR=200,iR=201,rR=202,sR=203,Zm=204,Qm=205,oR=206,aR=207,lR=208,uR=209,cR=210,fR=211,hR=212,dR=213,pR=214,mR=0,gR=1,_R=2,wh=3,vR=4,yR=5,xR=6,SR=7,pE=0,MR=1,ER=2,zs=0,wR=1,TR=2,AR=3,mE=4,CR=5,bR=6,gE=300,ml=301,gl=302,Jm=303,eg=304,ed=306,Th=1e3,Yi=1001,tg=1002,Yn=1003,jv=1004,$d=1005,ii=1006,RR=1007,tc=1008,Bs=1009,PR=1010,LR=1011,N_=1012,_E=1013,As=1014,Cs=1015,Rr=1016,vE=1017,yE=1018,Do=1020,DR=1021,ji=1023,UR=1024,IR=1025,Uo=1026,_l=1027,NR=1028,xE=1029,OR=1030,SE=1031,ME=1033,Kd=33776,Zd=33777,Qd=33778,Jd=33779,qv=35840,$v=35841,Kv=35842,Zv=35843,EE=36196,Qv=37492,Jv=37496,ey=37808,ty=37809,ny=37810,iy=37811,ry=37812,sy=37813,oy=37814,ay=37815,ly=37816,uy=37817,cy=37818,fy=37819,hy=37820,dy=37821,ep=36492,py=36494,my=36495,FR=36283,gy=36284,_y=36285,vy=36286,wE=3e3,Io=3001,kR=3200,zR=3201,TE=0,BR=1,qi="",yn="srgb",is="srgb-linear",O_="display-p3",td="display-p3-linear",Ah="linear",Dt="srgb",Ch="rec709",bh="p3",ta=7680,yy=519,HR=512,VR=513,GR=514,AE=515,WR=516,XR=517,YR=518,jR=519,ng=35044,xy="300 es",ig=1035,jr=2e3,Rh=2001;class El{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tp=Math.PI/180,rg=180/Math.PI;function Hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function ri(n,e,t){return Math.max(e,Math.min(t,n))}function qR(n,e){return(n%e+e)%e}function np(n,e,t){return(1-t)*n+t*e}function Sy(n){return(n&n-1)===0&&n!==0}function sg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ri(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,i,r,s,o,a,l,u){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],d=r[6],v=r[1],y=r[4],x=r[7],w=r[2],T=r[5],E=r[8];return s[0]=o*g+a*v+l*w,s[3]=o*m+a*y+l*T,s[6]=o*d+a*x+l*E,s[1]=u*g+c*v+h*w,s[4]=u*m+c*y+h*T,s[7]=u*d+c*x+h*E,s[2]=f*g+p*v+_*w,s[5]=f*m+p*y+_*T,s[8]=f*d+p*x+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*h+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ip.makeScale(e,t)),this}rotate(e){return this.premultiply(ip.makeRotation(-e)),this}translate(e,t){return this.premultiply(ip.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ip=new ht;function CE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ph(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $R(){const n=Ph("canvas");return n.style.display="block",n}const My={};function Au(n){n in My||(My[n]=!0,console.warn(n))}const Ey=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wy=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wc={[is]:{transfer:Ah,primaries:Ch,toReference:n=>n,fromReference:n=>n},[yn]:{transfer:Dt,primaries:Ch,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[td]:{transfer:Ah,primaries:bh,toReference:n=>n.applyMatrix3(wy),fromReference:n=>n.applyMatrix3(Ey)},[O_]:{transfer:Dt,primaries:bh,toReference:n=>n.convertSRGBToLinear().applyMatrix3(wy),fromReference:n=>n.applyMatrix3(Ey).convertLinearToSRGB()}},KR=new Set([is,td]),At={enabled:!0,_workingColorSpace:is,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!KR.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Wc[e].toReference,r=Wc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Wc[n].primaries},getTransfer:function(n){return n===qi?Ah:Wc[n].transfer}};function tl(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rp(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let na;class bE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{na===void 0&&(na=Ph("canvas")),na.width=e.width,na.height=e.height;const i=na.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=na}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ph("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=tl(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tl(t[i]/255)*255):t[i]=tl(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZR=0;class RE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZR++}),this.uuid=Hs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sp(r[o].image)):s.push(sp(r[o]))}else s=sp(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function sp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QR=0;class pi extends El{constructor(e=pi.DEFAULT_IMAGE,t=pi.DEFAULT_MAPPING,i=Yi,r=Yi,s=ii,o=tc,a=ji,l=Bs,u=pi.DEFAULT_ANISOTROPY,c=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QR++}),this.uuid=Hs(),this.name="",this.source=new RE(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Au("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Io?yn:qi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case tg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case tg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Au("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yn?Io:wE}set encoding(e){Au("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Io?yn:qi}}pi.DEFAULT_IMAGE=null;pi.DEFAULT_MAPPING=gE;pi.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(u+1)/2,x=(p+1)/2,w=(d+1)/2,T=(c+f)/4,E=(h+g)/4,P=(_+m)/4;return y>x&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=E/i):x>w?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=T/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=E/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(h-g)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JR extends El{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Au("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Io?yn:qi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new pi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new RE(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends JR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class PE extends pi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class e2 extends pi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||u!==p||c!==_){let m=1-a;const d=l*f+u*p+c*_+h*g,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const w=Math.sqrt(y),T=Math.atan2(w,d*v);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const x=a*v;if(l=l*m+f*x,u=u*m+p*x,c=c*m+_*x,h=h*m+g*x,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=w,u*=w,c*=w,h*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*h+l*p-u*f,e[t+1]=l*_+c*f+u*h-a*p,e[t+2]=u*_+c*p+a*f-l*h,e[t+3]=c*_-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*_,this._y=u*p*h-f*c*_,this._z=u*c*_+f*p*h,this._w=u*c*h-f*p*_;break;case"YXZ":this._x=f*c*h+u*p*_,this._y=u*p*h-f*c*_,this._z=u*c*_-f*p*h,this._w=u*c*h+f*p*_;break;case"ZXY":this._x=f*c*h-u*p*_,this._y=u*p*h+f*c*_,this._z=u*c*_+f*p*h,this._w=u*c*h-f*p*_;break;case"ZYX":this._x=f*c*h-u*p*_,this._y=u*p*h+f*c*_,this._z=u*c*_-f*p*h,this._w=u*c*h+f*p*_;break;case"YZX":this._x=f*c*h+u*p*_,this._y=u*p*h+f*c*_,this._z=u*c*_-f*p*h,this._w=u*c*h-f*p*_;break;case"XZY":this._x=f*c*h-u*p*_,this._y=u*p*h-f*c*_,this._z=u*c*_+f*p*h,this._w=u*c*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ri(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ty.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ty.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return op.copy(this).projectOnVector(e),this.sub(op)}reflect(e){return this.sub(op.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ri(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const op=new H,Ty=new uc;class cc{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rr):rr.fromBufferAttribute(s,o),rr.applyMatrix4(e.matrixWorld),this.expandByPoint(rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xc.copy(i.boundingBox)),Xc.applyMatrix4(e.matrixWorld),this.union(Xc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rr),rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fl),Yc.subVectors(this.max,Fl),ia.subVectors(e.a,Fl),ra.subVectors(e.b,Fl),sa.subVectors(e.c,Fl),os.subVectors(ra,ia),as.subVectors(sa,ra),io.subVectors(ia,sa);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-io.z,io.y,os.z,0,-os.x,as.z,0,-as.x,io.z,0,-io.x,-os.y,os.x,0,-as.y,as.x,0,-io.y,io.x,0];return!ap(t,ia,ra,sa,Yc)||(t=[1,0,0,0,1,0,0,0,1],!ap(t,ia,ra,sa,Yc))?!1:(jc.crossVectors(os,as),t=[jc.x,jc.y,jc.z],ap(t,ia,ra,sa,Yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Dr=[new H,new H,new H,new H,new H,new H,new H,new H],rr=new H,Xc=new cc,ia=new H,ra=new H,sa=new H,os=new H,as=new H,io=new H,Fl=new H,Yc=new H,jc=new H,ro=new H;function ap(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ro.fromArray(n,s);const a=r.x*Math.abs(ro.x)+r.y*Math.abs(ro.y)+r.z*Math.abs(ro.z),l=e.dot(ro),u=t.dot(ro),c=i.dot(ro);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const t2=new cc,kl=new H,lp=new H;class nd{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):t2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kl.subVectors(e,this.center);const t=kl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kl.copy(e.center).add(lp)),this.expandByPoint(kl.copy(e.center).sub(lp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ur=new H,up=new H,qc=new H,ls=new H,cp=new H,$c=new H,fp=new H;class F_{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ur.copy(this.origin).addScaledVector(this.direction,t),Ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){up.copy(e).add(t).multiplyScalar(.5),qc.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(up);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qc),a=ls.dot(this.direction),l=-ls.dot(qc),u=ls.lengthSq(),c=Math.abs(1-o*o);let h,f,p,_;if(c>0)if(h=o*l-a,f=o*a-l,_=s*c,h>=0)if(f>=-_)if(f<=_){const g=1/c;h*=g,f*=g,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(up).addScaledVector(qc,f),p}intersectSphere(e,t){Ur.subVectors(e.center,this.origin);const i=Ur.dot(this.direction),r=Ur.dot(Ur)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ur)!==null}intersectTriangle(e,t,i,r,s){cp.subVectors(t,e),$c.subVectors(i,e),fp.crossVectors(cp,$c);let o=this.direction.dot(fp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);const l=a*this.direction.dot($c.crossVectors(ls,$c));if(l<0)return null;const u=a*this.direction.dot(cp.cross(ls));if(u<0||l+u>o)return null;const c=-a*ls.dot(fp);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,i,r,s,o,a,l,u,c,h,f,p,_,g,m){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,h,f,p,_,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/oa.setFromMatrixColumn(e,0).length(),s=1/oa.setFromMatrixColumn(e,1).length(),o=1/oa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,_=a*c,g=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,_=u*c,g=u*h;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,_=u*c,g=u*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,_=a*c,g=a*h;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*h,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+g,t[5]=o*c,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*c,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n2,e,i2)}lookAt(e,t,i){const r=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),us.crossVectors(i,gi),us.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),us.crossVectors(i,gi)),us.normalize(),Kc.crossVectors(gi,us),r[0]=us.x,r[4]=Kc.x,r[8]=gi.x,r[1]=us.y,r[5]=Kc.y,r[9]=gi.y,r[2]=us.z,r[6]=Kc.z,r[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],d=i[14],v=i[3],y=i[7],x=i[11],w=i[15],T=r[0],E=r[4],P=r[8],S=r[12],M=r[1],k=r[5],O=r[9],te=r[13],L=r[2],z=r[6],W=r[10],X=r[14],U=r[3],B=r[7],b=r[11],ee=r[15];return s[0]=o*T+a*M+l*L+u*U,s[4]=o*E+a*k+l*z+u*B,s[8]=o*P+a*O+l*W+u*b,s[12]=o*S+a*te+l*X+u*ee,s[1]=c*T+h*M+f*L+p*U,s[5]=c*E+h*k+f*z+p*B,s[9]=c*P+h*O+f*W+p*b,s[13]=c*S+h*te+f*X+p*ee,s[2]=_*T+g*M+m*L+d*U,s[6]=_*E+g*k+m*z+d*B,s[10]=_*P+g*O+m*W+d*b,s[14]=_*S+g*te+m*X+d*ee,s[3]=v*T+y*M+x*L+w*U,s[7]=v*E+y*k+x*z+w*B,s[11]=v*P+y*O+x*W+w*b,s[15]=v*S+y*te+x*X+w*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],d=e[15];return _*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],d=e[15],v=h*m*u-g*f*u+g*l*p-a*m*p-h*l*d+a*f*d,y=_*f*u-c*m*u-_*l*p+o*m*p+c*l*d-o*f*d,x=c*g*u-_*h*u+_*a*p-o*g*p-c*a*d+o*h*d,w=_*h*l-c*g*l-_*a*f+o*g*f+c*a*m-o*h*m,T=t*v+i*y+r*x+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(g*f*s-h*m*s-g*r*p+i*m*p+h*r*d-i*f*d)*E,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*d+i*l*d)*E,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*E,e[4]=y*E,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*d+t*f*d)*E,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*d-t*l*d)*E,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*E,e[8]=x*E,e[9]=(_*h*s-c*g*s-_*i*p+t*g*p+c*i*d-t*h*d)*E,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*d+t*a*d)*E,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*p-t*a*p)*E,e[12]=w*E,e[13]=(c*g*r-_*h*r+_*i*f-t*g*f-c*i*m+t*h*m)*E,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*E,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,_=s*h,g=o*c,m=o*h,d=a*h,v=l*u,y=l*c,x=l*h,w=i.x,T=i.y,E=i.z;return r[0]=(1-(g+d))*w,r[1]=(p+x)*w,r[2]=(_-y)*w,r[3]=0,r[4]=(p-x)*T,r[5]=(1-(f+d))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(_+y)*E,r[9]=(m-v)*E,r[10]=(1-(f+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=oa.set(r[0],r[1],r[2]).length();const o=oa.set(r[4],r[5],r[6]).length(),a=oa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sr.copy(this);const u=1/s,c=1/o,h=1/a;return sr.elements[0]*=u,sr.elements[1]*=u,sr.elements[2]*=u,sr.elements[4]*=c,sr.elements[5]*=c,sr.elements[6]*=c,sr.elements[8]*=h,sr.elements[9]*=h,sr.elements[10]*=h,t.setFromRotationMatrix(sr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=jr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===jr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Rh)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=jr){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===jr)_=(o+s)*h,g=-2*h;else if(a===Rh)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oa=new H,sr=new qt,n2=new H(0,0,0),i2=new H(1,1,1),us=new H,Kc=new H,gi=new H,Ay=new qt,Cy=new uc;class id{constructor(e=0,t=0,i=0,r=id.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ri(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ri(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ri(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ri(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ri(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ri(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ay.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ay,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cy.setFromEuler(this),this.setFromQuaternion(Cy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}id.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let r2=0;const by=new H,aa=new uc,Ir=new qt,Zc=new H,zl=new H,s2=new H,o2=new uc,Ry=new H(1,0,0),Py=new H(0,1,0),Ly=new H(0,0,1),a2={type:"added"},l2={type:"removed"};class Nn extends El{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new H,t=new id,i=new uc,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qt},normalMatrix:{value:new ht}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.multiply(aa),this}rotateOnWorldAxis(e,t){return aa.setFromAxisAngle(e,t),this.quaternion.premultiply(aa),this}rotateX(e){return this.rotateOnAxis(Ry,e)}rotateY(e){return this.rotateOnAxis(Py,e)}rotateZ(e){return this.rotateOnAxis(Ly,e)}translateOnAxis(e,t){return by.copy(e).applyQuaternion(this.quaternion),this.position.add(by.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ry,e)}translateY(e){return this.translateOnAxis(Py,e)}translateZ(e){return this.translateOnAxis(Ly,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ir.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zc.copy(e):Zc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ir.lookAt(zl,Zc,this.up):Ir.lookAt(Zc,zl,this.up),this.quaternion.setFromRotationMatrix(Ir),r&&(Ir.extractRotation(r.matrixWorld),aa.setFromRotationMatrix(Ir),this.quaternion.premultiply(aa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(a2)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l2)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ir),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,e,s2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,o2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new H(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const or=new H,Nr=new H,hp=new H,Or=new H,la=new H,ua=new H,Dy=new H,dp=new H,pp=new H,mp=new H;let Qc=!1;class Wi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),or.subVectors(e,t),r.cross(or);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){or.subVectors(r,t),Nr.subVectors(i,t),hp.subVectors(e,t);const o=or.dot(or),a=or.dot(Nr),l=or.dot(hp),u=Nr.dot(Nr),c=Nr.dot(hp),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Or)===null?!1:Or.x>=0&&Or.y>=0&&Or.x+Or.y<=1}static getUV(e,t,i,r,s,o,a,l){return Qc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Or)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Or.x),l.addScaledVector(o,Or.y),l.addScaledVector(a,Or.z),l)}static isFrontFacing(e,t,i,r){return or.subVectors(i,t),Nr.subVectors(e,t),or.cross(Nr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return or.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),or.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Qc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qc=!0),Wi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Wi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;la.subVectors(r,i),ua.subVectors(s,i),dp.subVectors(e,i);const l=la.dot(dp),u=ua.dot(dp);if(l<=0&&u<=0)return t.copy(i);pp.subVectors(e,r);const c=la.dot(pp),h=ua.dot(pp);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(la,o);mp.subVectors(e,s);const p=la.dot(mp),_=ua.dot(mp);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(ua,a);const m=c*_-p*h;if(m<=0&&h-c>=0&&p-_>=0)return Dy.subVectors(s,r),a=(h-c)/(h-c+(p-_)),t.copy(r).addScaledVector(Dy,a);const d=1/(m+g+f);return o=g*d,a=f*d,t.copy(i).addScaledVector(la,o).addScaledVector(ua,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const LE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Jc={h:0,s:0,l:0};function gp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=At.workingColorSpace){if(e=qR(e,1),t=ri(t,0,1),i=ri(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=gp(o,s,e+1/3),this.g=gp(o,s,e),this.b=gp(o,s,e-1/3)}return At.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=LE[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tl(e.r),this.g=tl(e.g),this.b=tl(e.b),this}copyLinearToSRGB(e){return this.r=rp(e.r),this.g=rp(e.g),this.b=rp(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return At.fromWorkingColorSpace(bn.copy(this),e),Math.round(ri(bn.r*255,0,255))*65536+Math.round(ri(bn.g*255,0,255))*256+Math.round(ri(bn.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=yn){At.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,r=bn.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(Jc);const i=np(cs.h,Jc.h,t),r=np(cs.s,Jc.s,t),s=np(cs.l,Jc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new nt;nt.NAMES=LE;let u2=0;class qo extends El{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u2++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=el,this.side=qs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zm,this.blendDst=Qm,this.blendEquation=po,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=wh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==el&&(i.blending=this.blending),this.side!==qs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zm&&(i.blendSrc=this.blendSrc),this.blendDst!==Qm&&(i.blendDst=this.blendDst),this.blendEquation!==po&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wh&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ta&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ta&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ta&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class vs extends qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=pE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new H,ef=new $e;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ng,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ef.fromBufferAttribute(this,t),ef.applyMatrix3(e),this.setXY(t,ef.x,ef.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ng&&(e.usage=this.usage),e}}class DE extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class UE extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qn extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let c2=0;const Fi=new qt,_p=new Nn,ca=new H,_i=new cc,Bl=new cc,cn=new H;class mn extends El{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:c2++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(CE(e)?UE:DE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,i){return Fi.makeTranslation(e,t,i),this.applyMatrix4(Fi),this}scale(e,t,i){return Fi.makeScale(e,t,i),this.applyMatrix4(Fi),this}lookAt(e){return _p.lookAt(e),_p.updateMatrix(),this.applyMatrix4(_p.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ca).negate(),this.translate(ca.x,ca.y,ca.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bl.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(_i.min,Bl.min),_i.expandByPoint(cn),cn.addVectors(_i.max,Bl.max),_i.expandByPoint(cn)):(_i.expandByPoint(Bl.min),_i.expandByPoint(Bl.max))}_i.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)cn.fromBufferAttribute(a,u),l&&(ca.fromBufferAttribute(e,u),cn.add(ca)),r=Math.max(r,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let M=0;M<a;M++)u[M]=new H,c[M]=new H;const h=new H,f=new H,p=new H,_=new $e,g=new $e,m=new $e,d=new H,v=new H;function y(M,k,O){h.fromArray(r,M*3),f.fromArray(r,k*3),p.fromArray(r,O*3),_.fromArray(o,M*2),g.fromArray(o,k*2),m.fromArray(o,O*2),f.sub(h),p.sub(h),g.sub(_),m.sub(_);const te=1/(g.x*m.y-m.x*g.y);isFinite(te)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(te),v.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(te),u[M].add(d),u[k].add(d),u[O].add(d),c[M].add(v),c[k].add(v),c[O].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let M=0,k=x.length;M<k;++M){const O=x[M],te=O.start,L=O.count;for(let z=te,W=te+L;z<W;z+=3)y(i[z+0],i[z+1],i[z+2])}const w=new H,T=new H,E=new H,P=new H;function S(M){E.fromArray(s,M*3),P.copy(E);const k=u[M];w.copy(k),w.sub(E.multiplyScalar(E.dot(k))).normalize(),T.crossVectors(P,k);const te=T.dot(c[M])<0?-1:1;l[M*4]=w.x,l[M*4+1]=w.y,l[M*4+2]=w.z,l[M*4+3]=te}for(let M=0,k=x.length;M<k;++M){const O=x[M],te=O.start,L=O.count;for(let z=te,W=te+L;z<W;z+=3)S(i[z+0]),S(i[z+1]),S(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,u=new H,c=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let d=0;d<c;d++)f[_++]=u[p++]}return new Nt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uy=new qt,so=new F_,tf=new nd,Iy=new H,fa=new H,ha=new H,da=new H,vp=new H,nf=new H,rf=new $e,sf=new $e,of=new $e,Ny=new H,Oy=new H,Fy=new H,af=new H,lf=new H;class dn extends Nn{constructor(e=new mn,t=new vs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nf.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(vp.fromBufferAttribute(h,e),o?nf.addScaledVector(vp,c):nf.addScaledVector(vp.sub(t),c))}t.add(nf)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tf.copy(i.boundingSphere),tf.applyMatrix4(s),so.copy(e.ray).recast(e.near),!(tf.containsPoint(so.origin)===!1&&(so.intersectSphere(tf,Iy)===null||so.origin.distanceToSquared(Iy)>(e.far-e.near)**2))&&(Uy.copy(s).invert(),so.copy(e.ray).applyMatrix4(Uy),!(i.boundingBox!==null&&so.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,so)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=y;x<w;x+=3){const T=a.getX(x),E=a.getX(x+1),P=a.getX(x+2);r=uf(this,d,e,i,u,c,h,T,E,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=uf(this,o,e,i,u,c,h,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,w=y;x<w;x+=3){const T=x,E=x+1,P=x+2;r=uf(this,d,e,i,u,c,h,T,E,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=m,y=m+1,x=m+2;r=uf(this,o,e,i,u,c,h,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function f2(n,e,t,i,r,s,o,a){let l;if(e.side===Zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qs,a),l===null)return null;lf.copy(a),lf.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(lf);return u<t.near||u>t.far?null:{distance:u,point:lf.clone(),object:n}}function uf(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,fa),n.getVertexPosition(l,ha),n.getVertexPosition(u,da);const c=f2(n,e,t,i,fa,ha,da,af);if(c){r&&(rf.fromBufferAttribute(r,a),sf.fromBufferAttribute(r,l),of.fromBufferAttribute(r,u),c.uv=Wi.getInterpolation(af,fa,ha,da,rf,sf,of,new $e)),s&&(rf.fromBufferAttribute(s,a),sf.fromBufferAttribute(s,l),of.fromBufferAttribute(s,u),c.uv1=Wi.getInterpolation(af,fa,ha,da,rf,sf,of,new $e),c.uv2=c.uv1),o&&(Ny.fromBufferAttribute(o,a),Oy.fromBufferAttribute(o,l),Fy.fromBufferAttribute(o,u),c.normal=Wi.getInterpolation(af,fa,ha,da,Ny,Oy,Fy,new H),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new H,materialIndex:0};Wi.getNormal(fa,ha,da,h.normal),c.face=h}return c}class fc extends mn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qn(u,3)),this.setAttribute("normal",new Qn(c,3)),this.setAttribute("uv",new Qn(h,2));function _(g,m,d,v,y,x,w,T,E,P,S){const M=x/E,k=w/P,O=x/2,te=w/2,L=T/2,z=E+1,W=P+1;let X=0,U=0;const B=new H;for(let b=0;b<W;b++){const ee=b*k-te;for(let Q=0;Q<z;Q++){const F=Q*M-O;B[g]=F*v,B[m]=ee*y,B[d]=L,u.push(B.x,B.y,B.z),B[g]=0,B[m]=0,B[d]=T>0?1:-1,c.push(B.x,B.y,B.z),h.push(Q/E),h.push(1-b/P),X+=1}}for(let b=0;b<P;b++)for(let ee=0;ee<E;ee++){const Q=f+ee+z*b,F=f+ee+z*(b+1),$=f+(ee+1)+z*(b+1),J=f+(ee+1)+z*b;l.push(Q,F,J),l.push(F,$,J),U+=6}a.addGroup(p,U,S),p+=U,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Hn(n){const e={};for(let t=0;t<n.length;t++){const i=vl(n[t]);for(const r in i)e[r]=i[r]}return e}function h2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function IE(n){return n.getRenderTarget()===null?n.outputColorSpace:At.workingColorSpace}const Lh={clone:vl,merge:Hn};var d2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d2,this.fragmentShader=p2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vl(e.uniforms),this.uniformsGroups=h2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class NE extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=jr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ei extends NE{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rg*2*Math.atan(Math.tan(tp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tp*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pa=-90,ma=1;class m2 extends Nn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ei(pa,ma,e,t);r.layers=this.layers,this.add(r);const s=new Ei(pa,ma,e,t);s.layers=this.layers,this.add(s);const o=new Ei(pa,ma,e,t);o.layers=this.layers,this.add(o);const a=new Ei(pa,ma,e,t);a.layers=this.layers,this.add(a);const l=new Ei(pa,ma,e,t);l.layers=this.layers,this.add(l);const u=new Ei(pa,ma,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===jr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class OE extends pi{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ml,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g2 extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Au("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Io?yn:qi),this.texture=new OE(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fc(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:vl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Kr});s.uniforms.tEquirect.value=t;const o=new dn(r,s),a=t.minFilter;return t.minFilter===tc&&(t.minFilter=ii),new m2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const yp=new H,_2=new H,v2=new ht;class ps{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=yp.subVectors(i,t).cross(_2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(yp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||v2.getNormalMatrix(e),r=this.coplanarPoint(yp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oo=new nd,cf=new H;class z_{constructor(e=new ps,t=new ps,i=new ps,r=new ps,s=new ps,o=new ps){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=jr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],d=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,f-u,m-p,x-d).normalize(),i[1].setComponents(l+s,f+u,m+p,x+d).normalize(),i[2].setComponents(l+o,f+c,m+_,x+v).normalize(),i[3].setComponents(l-o,f-c,m-_,x-v).normalize(),i[4].setComponents(l-a,f-h,m-g,x-y).normalize(),t===jr)i[5].setComponents(l+a,f+h,m+g,x+y).normalize();else if(t===Rh)i[5].setComponents(a,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(e){return oo.center.set(0,0,0),oo.radius=.7071067811865476,oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(cf.x=r.normal.x>0?e.max.x:e.min.x,cf.y=r.normal.y>0?e.max.y:e.min.y,cf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function FE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function y2(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,f=u.usage,p=h.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,h,f),u.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,h){const f=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(h,u),p.count===-1&&_.length===0&&n.bufferSubData(h,0,f),_.length!==0){for(let g=0,m=_.length;g<m;g++){const d=_[g];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class B_ extends mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let d=0;d<c;d++){const v=d*f-o;for(let y=0;y<u;y++){const x=y*h-s;_.push(x,-v,0),g.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const y=v+u*d,x=v+u*(d+1),w=v+1+u*(d+1),T=v+1+u*d;p.push(y,x,T),p.push(x,w,T)}this.setIndex(p),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(g,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new B_(e.width,e.height,e.widthSegments,e.heightSegments)}}var x2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S2=`#ifdef USE_ALPHAHASH
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
#endif`,M2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,T2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A2=`#ifdef USE_AOMAP
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
#endif`,C2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b2=`#ifdef USE_BATCHING
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
#endif`,R2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,P2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U2=`#ifdef USE_IRIDESCENCE
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
#endif`,I2=`#ifdef USE_BUMPMAP
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
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,O2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,V2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,G2=`#define PI 3.141592653589793
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
} // validated`,W2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X2=`vec3 transformedNormal = objectNormal;
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
#endif`,Y2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K2="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z2=`
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
}`,Q2=`#ifdef USE_ENVMAP
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
#endif`,J2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eP=`#ifdef USE_ENVMAP
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
#endif`,tP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nP=`#ifdef USE_ENVMAP
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
#endif`,iP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aP=`#ifdef USE_GRADIENTMAP
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
}`,lP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,uP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hP=`uniform bool receiveShadow;
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
#endif`,dP=`#ifdef USE_ENVMAP
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
#endif`,pP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_P=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vP=`PhysicalMaterial material;
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
#endif`,yP=`struct PhysicalMaterial {
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
}`,xP=`
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
#endif`,SP=`#if defined( RE_IndirectDiffuse )
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
#endif`,MP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,CP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PP=`#if defined( USE_POINTS_UV )
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
#endif`,LP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IP=`#ifdef USE_MORPHNORMALS
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
#endif`,NP=`#ifdef USE_MORPHTARGETS
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
#endif`,OP=`#ifdef USE_MORPHTARGETS
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
#endif`,FP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VP=`#ifdef USE_NORMALMAP
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
#endif`,GP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$P=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rL=`float getShadowMask() {
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
}`,sL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oL=`#ifdef USE_SKINNING
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
#endif`,aL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lL=`#ifdef USE_SKINNING
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
#endif`,uL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dL=`#ifdef USE_TRANSMISSION
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
#endif`,pL=`#ifdef USE_TRANSMISSION
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
#endif`,mL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_L=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xL=`uniform sampler2D t2D;
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
}`,SL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ML=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TL=`#include <common>
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
}`,AL=`#if DEPTH_PACKING == 3200
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
}`,CL=`#define DISTANCE
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
}`,bL=`#define DISTANCE
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
}`,RL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LL=`uniform float scale;
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
}`,DL=`uniform vec3 diffuse;
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
}`,UL=`#include <common>
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
}`,IL=`uniform vec3 diffuse;
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
}`,NL=`#define LAMBERT
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
}`,OL=`#define LAMBERT
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
}`,FL=`#define MATCAP
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
}`,kL=`#define MATCAP
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
}`,zL=`#define NORMAL
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
}`,BL=`#define NORMAL
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
}`,HL=`#define PHONG
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
}`,VL=`#define PHONG
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
}`,GL=`#define STANDARD
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
}`,WL=`#define STANDARD
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
}`,XL=`#define TOON
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
}`,YL=`#define TOON
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
}`,jL=`uniform float size;
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
}`,qL=`uniform vec3 diffuse;
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
}`,$L=`#include <common>
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
}`,KL=`uniform vec3 color;
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
}`,ZL=`uniform float rotation;
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
}`,QL=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:x2,alphahash_pars_fragment:S2,alphamap_fragment:M2,alphamap_pars_fragment:E2,alphatest_fragment:w2,alphatest_pars_fragment:T2,aomap_fragment:A2,aomap_pars_fragment:C2,batching_pars_vertex:b2,batching_vertex:R2,begin_vertex:P2,beginnormal_vertex:L2,bsdfs:D2,iridescence_fragment:U2,bumpmap_pars_fragment:I2,clipping_planes_fragment:N2,clipping_planes_pars_fragment:O2,clipping_planes_pars_vertex:F2,clipping_planes_vertex:k2,color_fragment:z2,color_pars_fragment:B2,color_pars_vertex:H2,color_vertex:V2,common:G2,cube_uv_reflection_fragment:W2,defaultnormal_vertex:X2,displacementmap_pars_vertex:Y2,displacementmap_vertex:j2,emissivemap_fragment:q2,emissivemap_pars_fragment:$2,colorspace_fragment:K2,colorspace_pars_fragment:Z2,envmap_fragment:Q2,envmap_common_pars_fragment:J2,envmap_pars_fragment:eP,envmap_pars_vertex:tP,envmap_physical_pars_fragment:dP,envmap_vertex:nP,fog_vertex:iP,fog_pars_vertex:rP,fog_fragment:sP,fog_pars_fragment:oP,gradientmap_pars_fragment:aP,lightmap_fragment:lP,lightmap_pars_fragment:uP,lights_lambert_fragment:cP,lights_lambert_pars_fragment:fP,lights_pars_begin:hP,lights_toon_fragment:pP,lights_toon_pars_fragment:mP,lights_phong_fragment:gP,lights_phong_pars_fragment:_P,lights_physical_fragment:vP,lights_physical_pars_fragment:yP,lights_fragment_begin:xP,lights_fragment_maps:SP,lights_fragment_end:MP,logdepthbuf_fragment:EP,logdepthbuf_pars_fragment:wP,logdepthbuf_pars_vertex:TP,logdepthbuf_vertex:AP,map_fragment:CP,map_pars_fragment:bP,map_particle_fragment:RP,map_particle_pars_fragment:PP,metalnessmap_fragment:LP,metalnessmap_pars_fragment:DP,morphcolor_vertex:UP,morphnormal_vertex:IP,morphtarget_pars_vertex:NP,morphtarget_vertex:OP,normal_fragment_begin:FP,normal_fragment_maps:kP,normal_pars_fragment:zP,normal_pars_vertex:BP,normal_vertex:HP,normalmap_pars_fragment:VP,clearcoat_normal_fragment_begin:GP,clearcoat_normal_fragment_maps:WP,clearcoat_pars_fragment:XP,iridescence_pars_fragment:YP,opaque_fragment:jP,packing:qP,premultiplied_alpha_fragment:$P,project_vertex:KP,dithering_fragment:ZP,dithering_pars_fragment:QP,roughnessmap_fragment:JP,roughnessmap_pars_fragment:eL,shadowmap_pars_fragment:tL,shadowmap_pars_vertex:nL,shadowmap_vertex:iL,shadowmask_pars_fragment:rL,skinbase_vertex:sL,skinning_pars_vertex:oL,skinning_vertex:aL,skinnormal_vertex:lL,specularmap_fragment:uL,specularmap_pars_fragment:cL,tonemapping_fragment:fL,tonemapping_pars_fragment:hL,transmission_fragment:dL,transmission_pars_fragment:pL,uv_pars_fragment:mL,uv_pars_vertex:gL,uv_vertex:_L,worldpos_vertex:vL,background_vert:yL,background_frag:xL,backgroundCube_vert:SL,backgroundCube_frag:ML,cube_vert:EL,cube_frag:wL,depth_vert:TL,depth_frag:AL,distanceRGBA_vert:CL,distanceRGBA_frag:bL,equirect_vert:RL,equirect_frag:PL,linedashed_vert:LL,linedashed_frag:DL,meshbasic_vert:UL,meshbasic_frag:IL,meshlambert_vert:NL,meshlambert_frag:OL,meshmatcap_vert:FL,meshmatcap_frag:kL,meshnormal_vert:zL,meshnormal_frag:BL,meshphong_vert:HL,meshphong_frag:VL,meshphysical_vert:GL,meshphysical_frag:WL,meshtoon_vert:XL,meshtoon_frag:YL,points_vert:jL,points_frag:qL,shadow_vert:$L,shadow_frag:KL,sprite_vert:ZL,sprite_frag:QL},ye={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},xr={basic:{uniforms:Hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Hn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Hn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Hn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Hn([ye.points,ye.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Hn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Hn([ye.common,ye.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Hn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Hn([ye.sprite,ye.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Hn([ye.common,ye.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Hn([ye.lights,ye.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};xr.physical={uniforms:Hn([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const ff={r:0,b:0,g:0};function JL(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function _(m,d){let v=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?g(a,l):y&&y.isColor&&(g(y,1),v=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ed)?(c===void 0&&(c=new dn(new fc(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:vl(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=At.getTransfer(y.colorSpace)!==Dt,(h!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new dn(new B_(2,2),new $n({name:"BackgroundMaterial",uniforms:vl(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:qs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=At.getTransfer(y.colorSpace)!==Dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,d){m.getRGB(ff,IE(n)),i.buffers.color.setClear(ff.r,ff.g,ff.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function e3(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function h(L,z,W,X,U){let B=!1;if(o){const b=g(X,W,z);u!==b&&(u=b,p(u.object)),B=d(L,X,W,U),B&&v(L,X,W,U)}else{const b=z.wireframe===!0;(u.geometry!==X.id||u.program!==W.id||u.wireframe!==b)&&(u.geometry=X.id,u.program=W.id,u.wireframe=b,B=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,P(L,z,W,X),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,z,W){const X=W.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let B=U[z.id];B===void 0&&(B={},U[z.id]=B);let b=B[X];return b===void 0&&(b=m(f()),B[X]=b),b}function m(L){const z=[],W=[],X=[];for(let U=0;U<r;U++)z[U]=0,W[U]=0,X[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:X,object:L,attributes:{},index:null}}function d(L,z,W,X){const U=u.attributes,B=z.attributes;let b=0;const ee=W.getAttributes();for(const Q in ee)if(ee[Q].location>=0){const $=U[Q];let J=B[Q];if(J===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(J=L.instanceColor)),$===void 0||$.attribute!==J||J&&$.data!==J.data)return!0;b++}return u.attributesNum!==b||u.index!==X}function v(L,z,W,X){const U={},B=z.attributes;let b=0;const ee=W.getAttributes();for(const Q in ee)if(ee[Q].location>=0){let $=B[Q];$===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const J={};J.attribute=$,$&&$.data&&(J.data=$.data),U[Q]=J,b++}u.attributes=U,u.attributesNum=b,u.index=X}function y(){const L=u.newAttributes;for(let z=0,W=L.length;z<W;z++)L[z]=0}function x(L){w(L,0)}function w(L,z){const W=u.newAttributes,X=u.enabledAttributes,U=u.attributeDivisors;W[L]=1,X[L]===0&&(n.enableVertexAttribArray(L),X[L]=1),U[L]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),U[L]=z)}function T(){const L=u.newAttributes,z=u.enabledAttributes;for(let W=0,X=z.length;W<X;W++)z[W]!==L[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function E(L,z,W,X,U,B,b){b===!0?n.vertexAttribIPointer(L,z,W,U,B):n.vertexAttribPointer(L,z,W,X,U,B)}function P(L,z,W,X){if(i.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const U=X.attributes,B=W.getAttributes(),b=z.defaultAttributeValues;for(const ee in B){const Q=B[ee];if(Q.location>=0){let F=U[ee];if(F===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),F!==void 0){const $=F.normalized,J=F.itemSize,he=t.get(F);if(he===void 0)continue;const ce=he.buffer,we=he.type,Me=he.bytesPerElement,He=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||F.gpuType===_E);if(F.isInterleavedBufferAttribute){const Qe=F.data,q=Qe.stride,je=F.offset;if(Qe.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Q.locationSize;Ee++)w(Q.location+Ee,Qe.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let Ee=0;Ee<Q.locationSize;Ee++)x(Q.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Ee=0;Ee<Q.locationSize;Ee++)E(Q.location+Ee,J/Q.locationSize,we,$,q*Me,(je+J/Q.locationSize*Ee)*Me,He)}else{if(F.isInstancedBufferAttribute){for(let Qe=0;Qe<Q.locationSize;Qe++)w(Q.location+Qe,F.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Qe=0;Qe<Q.locationSize;Qe++)x(Q.location+Qe);n.bindBuffer(n.ARRAY_BUFFER,ce);for(let Qe=0;Qe<Q.locationSize;Qe++)E(Q.location+Qe,J/Q.locationSize,we,$,J*Me,J/Q.locationSize*Qe*Me,He)}}else if(b!==void 0){const $=b[ee];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(Q.location,$);break;case 3:n.vertexAttrib3fv(Q.location,$);break;case 4:n.vertexAttrib4fv(Q.location,$);break;default:n.vertexAttrib1fv(Q.location,$)}}}}T()}function S(){O();for(const L in a){const z=a[L];for(const W in z){const X=z[W];for(const U in X)_(X[U].object),delete X[U];delete z[W]}delete a[L]}}function M(L){if(a[L.id]===void 0)return;const z=a[L.id];for(const W in z){const X=z[W];for(const U in X)_(X[U].object),delete X[U];delete z[W]}delete a[L.id]}function k(L){for(const z in a){const W=a[z];if(W[L.id]===void 0)continue;const X=W[L.id];for(const U in X)_(X[U].object),delete X[U];delete W[L.id]}}function O(){te(),c=!0,u!==l&&(u=l,p(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:te,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:k,initAttributes:y,enableAttribute:x,disableUnusedAttributes:T}}function t3(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,f){if(f===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,h,f),t.update(h,s,f)}function u(c,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<f;_++)this.render(c[_],h[_]);else{p.multiDrawArraysWEBGL(s,c,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function n3(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,x=o||e.has("OES_texture_float"),w=y&&x,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:T}}function i3(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ps,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,y=v*4;let x=d.clippingState||null;l.value=x,x=c(_,f,y,p);for(let w=0;w!==y;++w)x[w]=t[w];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const d=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==g;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function r3(n){let e=new WeakMap;function t(o,a){return a===Jm?o.mapping=ml:a===eg&&(o.mapping=gl),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jm||a===eg)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new g2(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class kE extends NE{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const za=4,ky=[.125,.215,.35,.446,.526,.582],mo=20,xp=new kE,zy=new nt;let Sp=null,Mp=0,Ep=0;const ho=(1+Math.sqrt(5))/2,ga=1/ho,By=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,ho,ga),new H(0,ho,-ga),new H(ga,0,ho),new H(-ga,0,ho),new H(ho,ga,0),new H(-ho,ga,0)];class Hy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sp,Mp,Ep),e.scissorTest=!1,hf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ml||e.mapping===gl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sp=this._renderer.getRenderTarget(),Mp=this._renderer.getActiveCubeFace(),Ep=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Rr,format:ji,colorSpace:is,depthBuffer:!1},r=Vy(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vy(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s3(s)),this._blurMaterial=o3(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,xp)}_sceneToCubeUV(e,t,i,r){const a=new Ei(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(zy),c.toneMapping=zs,c.autoClear=!1;const p=new vs({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),_=new dn(new fc,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(zy),g=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const y=this._cubeSize;hf(r,v*y,d>2?y:0,y,y),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ml||e.mapping===gl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gy());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hf(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xp)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=By[(r-1)%By.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new dn(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mo-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):mo;m>mo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mo}`);const d=[];let v=0;for(let E=0;E<mo;++E){const P=E/g,S=Math.exp(-P*P/2);d.push(S),E===0?v+=S:E<m&&(v+=2*S)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-i;const x=this._sizeLods[r],w=3*x*(r>y-za?r-y+za:0),T=4*(this._cubeSize-x);hf(t,w,T,3*x,2*x),l.setRenderTarget(t),l.render(h,xp)}}function s3(n){const e=[],t=[],i=[];let r=n;const s=n-za+1+ky.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-za?l=ky[o-n+za-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,_=6,g=3,m=2,d=1,v=new Float32Array(g*_*p),y=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,P=T>2?0:-1,S=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(S,g*_*T),y.set(f,m*_*T);const M=[T,T,T,T,T,T];x.set(M,d*_*T)}const w=new mn;w.setAttribute("position",new Nt(v,g)),w.setAttribute("uv",new Nt(y,m)),w.setAttribute("faceIndex",new Nt(x,d)),e.push(w),r>za&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vy(n,e,t){const i=new er(n,e,t);return i.texture.mapping=ed,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function o3(n,e,t){const i=new Float32Array(mo),r=new H(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:H_(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function Gy(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:H_(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function Wy(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:H_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function H_(){return`

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
	`}function a3(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Jm||l===eg,c=l===ml||l===gl;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Hy(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){t===null&&(t=new Hy(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function l3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function u3(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,_=h.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let y=0,x=v.length;y<x;y+=3){const w=v[y+0],T=v[y+1],E=v[y+2];f.push(w,T,T,E,E,w)}}else if(_!==void 0){const v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const w=y+0,T=y+1,E=y+2;f.push(w,T,T,E,E,w)}}else return;const m=new(CE(f)?UE:DE)(f,1);m.version=g;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function c3(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,a,p*l),t.update(_,s,1)}function h(p,_,g){if(g===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,a,p*l,g),t.update(_,s,g)}function f(p,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let d=0;for(let v=0;v<g;v++)d+=_[v];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function f3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function h3(n,e){return n[0]-e[0]}function d3(n,e){return Math.abs(e[1])-Math.abs(n[1])}function p3(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new kt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let z=function(){te.dispose(),s.delete(c),c.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const y=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;y===!0&&(S=1),x===!0&&(S=2),w===!0&&(S=3);let M=c.attributes.position.count*S,k=1;M>e.maxTextureSize&&(k=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const O=new Float32Array(M*k*4*g),te=new PE(O,M,k,g);te.type=Cs,te.needsUpdate=!0;const L=S*4;for(let W=0;W<g;W++){const X=T[W],U=E[W],B=P[W],b=M*k*4*W;for(let ee=0;ee<X.count;ee++){const Q=ee*L;y===!0&&(o.fromBufferAttribute(X,ee),O[b+Q+0]=o.x,O[b+Q+1]=o.y,O[b+Q+2]=o.z,O[b+Q+3]=0),x===!0&&(o.fromBufferAttribute(U,ee),O[b+Q+4]=o.x,O[b+Q+5]=o.y,O[b+Q+6]=o.z,O[b+Q+7]=0),w===!0&&(o.fromBufferAttribute(B,ee),O[b+Q+8]=o.x,O[b+Q+9]=o.y,O[b+Q+10]=o.z,O[b+Q+11]=B.itemSize===4?o.w:1)}}m={count:g,texture:te,size:new $e(M,k)},s.set(c,m),c.addEventListener("dispose",z)}let d=0;for(let y=0;y<f.length;y++)d+=f[y];const v=c.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=f===void 0?0:f.length;let g=i[c.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];i[c.id]=g}for(let x=0;x<_;x++){const w=g[x];w[0]=x,w[1]=f[x]}g.sort(d3);for(let x=0;x<8;x++)x<_&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(h3);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const w=a[x],T=w[0],E=w[1];T!==Number.MAX_SAFE_INTEGER&&E?(m&&c.getAttribute("morphTarget"+x)!==m[T]&&c.setAttribute("morphTarget"+x,m[T]),d&&c.getAttribute("morphNormal"+x)!==d[T]&&c.setAttribute("morphNormal"+x,d[T]),r[x]=E,v+=E):(m&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),d&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const y=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function m3(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class zE extends pi{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Uo,c!==Uo&&c!==_l)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Uo&&(i=As),i===void 0&&c===_l&&(i=Do),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const BE=new pi,HE=new zE(1,1);HE.compareFunction=AE;const VE=new PE,GE=new e2,WE=new OE,Xy=[],Yy=[],jy=new Float32Array(16),qy=new Float32Array(9),$y=new Float32Array(4);function wl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Xy[r];if(s===void 0&&(s=new Float32Array(r),Xy[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rd(n,e){let t=Yy[e];t===void 0&&(t=new Int32Array(e),Yy[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function g3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function v3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function x3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;$y.set(i),n.uniformMatrix2fv(this.addr,!1,$y),un(t,i)}}function S3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;qy.set(i),n.uniformMatrix3fv(this.addr,!1,qy),un(t,i)}}function M3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;jy.set(i),n.uniformMatrix4fv(this.addr,!1,jy),un(t,i)}}function E3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function w3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function T3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function A3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function C3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function b3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function R3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function P3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function L3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?HE:BE;t.setTexture2D(e||s,r)}function D3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||GE,r)}function U3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||WE,r)}function I3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||VE,r)}function N3(n){switch(n){case 5126:return g3;case 35664:return _3;case 35665:return v3;case 35666:return y3;case 35674:return x3;case 35675:return S3;case 35676:return M3;case 5124:case 35670:return E3;case 35667:case 35671:return w3;case 35668:case 35672:return T3;case 35669:case 35673:return A3;case 5125:return C3;case 36294:return b3;case 36295:return R3;case 36296:return P3;case 35678:case 36198:case 36298:case 36306:case 35682:return L3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return U3;case 36289:case 36303:case 36311:case 36292:return I3}}function O3(n,e){n.uniform1fv(this.addr,e)}function F3(n,e){const t=wl(e,this.size,2);n.uniform2fv(this.addr,t)}function k3(n,e){const t=wl(e,this.size,3);n.uniform3fv(this.addr,t)}function z3(n,e){const t=wl(e,this.size,4);n.uniform4fv(this.addr,t)}function B3(n,e){const t=wl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function H3(n,e){const t=wl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function V3(n,e){const t=wl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function G3(n,e){n.uniform1iv(this.addr,e)}function W3(n,e){n.uniform2iv(this.addr,e)}function X3(n,e){n.uniform3iv(this.addr,e)}function Y3(n,e){n.uniform4iv(this.addr,e)}function j3(n,e){n.uniform1uiv(this.addr,e)}function q3(n,e){n.uniform2uiv(this.addr,e)}function $3(n,e){n.uniform3uiv(this.addr,e)}function K3(n,e){n.uniform4uiv(this.addr,e)}function Z3(n,e,t){const i=this.cache,r=e.length,s=rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||BE,s[o])}function Q3(n,e,t){const i=this.cache,r=e.length,s=rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||GE,s[o])}function J3(n,e,t){const i=this.cache,r=e.length,s=rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||WE,s[o])}function eD(n,e,t){const i=this.cache,r=e.length,s=rd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||VE,s[o])}function tD(n){switch(n){case 5126:return O3;case 35664:return F3;case 35665:return k3;case 35666:return z3;case 35674:return B3;case 35675:return H3;case 35676:return V3;case 5124:case 35670:return G3;case 35667:case 35671:return W3;case 35668:case 35672:return X3;case 35669:case 35673:return Y3;case 5125:return j3;case 36294:return q3;case 36295:return $3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return Z3;case 35679:case 36299:case 36307:return Q3;case 35680:case 36300:case 36308:case 36293:return J3;case 36289:case 36303:case 36311:case 36292:return eD}}class nD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=N3(t.type)}}class iD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tD(t.type)}}class rD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const wp=/(\w+)(\])?(\[|\.)?/g;function Ky(n,e){n.seq.push(e),n.map[e.id]=e}function sD(n,e,t){const i=n.name,r=i.length;for(wp.lastIndex=0;;){const s=wp.exec(i),o=wp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ky(t,u===void 0?new nD(a,n,e):new iD(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new rD(a),Ky(t,h)),t=h}}}class Hf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Zy(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const oD=37297;let aD=0;function lD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function uD(n){const e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(n);let i;switch(e===t?i="":e===bh&&t===Ch?i="LinearDisplayP3ToLinearSRGB":e===Ch&&t===bh&&(i="LinearSRGBToLinearDisplayP3"),n){case is:case td:return[i,"LinearTransferOETF"];case yn:case O_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Qy(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lD(n.getShaderSource(e),o)}else return r}function cD(n,e){const t=uD(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fD(n,e){let t;switch(e){case wR:t="Linear";break;case TR:t="Reinhard";break;case AR:t="OptimizedCineon";break;case mE:t="ACESFilmic";break;case bR:t="AgX";break;case CR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hD(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ba).join(`
`)}function dD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ba).join(`
`)}function pD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ba(n){return n!==""}function Jy(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ex(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gD=/^[ \t]*#include +<([\w\d./]+)>/gm;function og(n){return n.replace(gD,vD)}const _D=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vD(n,e){let t=lt[e];if(t===void 0){const i=_D.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return og(t)}const yD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(n){return n.replace(yD,xD)}function xD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Qb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fr&&(e="SHADOWMAP_TYPE_VSM"),e}function MD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ml:case gl:e="ENVMAP_TYPE_CUBE";break;case ed:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ED(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gl:e="ENVMAP_MODE_REFRACTION";break}return e}function wD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pE:e="ENVMAP_BLENDING_MULTIPLY";break;case MR:e="ENVMAP_BLENDING_MIX";break;case ER:e="ENVMAP_BLENDING_ADD";break}return e}function TD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=SD(t),u=MD(t),c=ED(t),h=wD(t),f=TD(t),p=t.isWebGL2?"":hD(t),_=dD(t),g=pD(s),m=r.createProgram();let d,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ba).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ba).join(`
`),v.length>0&&(v+=`
`)):(d=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),v=[p,nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zs?"#define TONE_MAPPING":"",t.toneMapping!==zs?lt.tonemapping_pars_fragment:"",t.toneMapping!==zs?fD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,cD("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),o=og(o),o=Jy(o,t),o=ex(o,t),a=og(a),a=Jy(a,t),a=ex(a,t),o=tx(o),a=tx(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=y+d+o,w=y+v+a,T=Zy(r,r.VERTEX_SHADER,x),E=Zy(r,r.FRAGMENT_SHADER,w);r.attachShader(m,T),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(O){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(T).trim(),z=r.getShaderInfoLog(E).trim();let W=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,E);else{const U=Qy(r,T,"vertex"),B=Qy(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+U+`
`+B)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(L===""||z==="")&&(X=!1);X&&(O.diagnostics={runnable:W,programLog:te,vertexShader:{log:L,prefix:d},fragmentShader:{log:z,prefix:v}})}r.deleteShader(T),r.deleteShader(E),S=new Hf(r,m),M=mD(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(m,oD)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aD++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}let CD=0;class bD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new RD(e),t.set(e,i)),i}}class RD{constructor(e){this.id=CD++,this.code=e,this.usedTimes=0}}function PD(n,e,t,i,r,s,o){const a=new k_,l=new bD,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,M,k,O,te){const L=O.fog,z=te.geometry,W=S.isMeshStandardMaterial?O.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),U=X&&X.mapping===ed?X.image.height:null,B=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const b=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=b!==void 0?b.length:0;let Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let F,$,J,he;if(B){const be=xr[B];F=be.vertexShader,$=be.fragmentShader}else F=S.vertexShader,$=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),he=l.getFragmentShaderID(S);const ce=n.getRenderTarget(),we=te.isInstancedMesh===!0,Me=te.isBatchedMesh===!0,He=!!S.map,Qe=!!S.matcap,q=!!X,je=!!S.aoMap,Ee=!!S.lightMap,ke=!!S.bumpMap,xe=!!S.normalMap,j=!!S.displacementMap,Ve=!!S.emissiveMap,R=!!S.metalnessMap,C=!!S.roughnessMap,G=S.anisotropy>0,se=S.clearcoat>0,ne=S.iridescence>0,oe=S.sheen>0,Se=S.transmission>0,ve=G&&!!S.anisotropyMap,pe=se&&!!S.clearcoatMap,Ie=se&&!!S.clearcoatNormalMap,Xe=se&&!!S.clearcoatRoughnessMap,ie=ne&&!!S.iridescenceMap,pt=ne&&!!S.iridescenceThicknessMap,Oe=oe&&!!S.sheenColorMap,Le=oe&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,ae=!!S.specularColorMap,Ze=!!S.specularIntensityMap,tt=Se&&!!S.transmissionMap,ct=Se&&!!S.thicknessMap,ge=!!S.gradientMap,le=!!S.alphaMap,D=S.alphaTest>0,de=!!S.alphaHash,me=!!S.extensions,Ge=!!z.attributes.uv1,ze=!!z.attributes.uv2,st=!!z.attributes.uv3;let gt=zs;return S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(gt=n.toneMapping),{isWebGL2:c,shaderID:B,shaderType:S.type,shaderName:S.name,vertexShader:F,fragmentShader:$,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:he,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Me,instancing:we,instancingColor:we&&te.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:is,map:He,matcap:Qe,envMap:q,envMapMode:q&&X.mapping,envMapCubeUVHeight:U,aoMap:je,lightMap:Ee,bumpMap:ke,normalMap:xe,displacementMap:f&&j,emissiveMap:Ve,normalMapObjectSpace:xe&&S.normalMapType===BR,normalMapTangentSpace:xe&&S.normalMapType===TE,metalnessMap:R,roughnessMap:C,anisotropy:G,anisotropyMap:ve,clearcoat:se,clearcoatMap:pe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Xe,iridescence:ne,iridescenceMap:ie,iridescenceThicknessMap:pt,sheen:oe,sheenColorMap:Oe,sheenRoughnessMap:Le,specularMap:Ce,specularColorMap:ae,specularIntensityMap:Ze,transmission:Se,transmissionMap:tt,thicknessMap:ct,gradientMap:ge,opaque:S.transparent===!1&&S.blending===el,alphaMap:le,alphaTest:D,alphaHash:de,combine:S.combine,mapUv:He&&g(S.map.channel),aoMapUv:je&&g(S.aoMap.channel),lightMapUv:Ee&&g(S.lightMap.channel),bumpMapUv:ke&&g(S.bumpMap.channel),normalMapUv:xe&&g(S.normalMap.channel),displacementMapUv:j&&g(S.displacementMap.channel),emissiveMapUv:Ve&&g(S.emissiveMap.channel),metalnessMapUv:R&&g(S.metalnessMap.channel),roughnessMapUv:C&&g(S.roughnessMap.channel),anisotropyMapUv:ve&&g(S.anisotropyMap.channel),clearcoatMapUv:pe&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(S.sheenRoughnessMap.channel),specularMapUv:Ce&&g(S.specularMap.channel),specularColorMapUv:ae&&g(S.specularColorMap.channel),specularIntensityMapUv:Ze&&g(S.specularIntensityMap.channel),transmissionMapUv:tt&&g(S.transmissionMap.channel),thicknessMapUv:ct&&g(S.thicknessMap.channel),alphaMapUv:le&&g(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:ze,vertexUv3s:st,pointsUvs:te.isPoints===!0&&!!z.attributes.uv&&(He||le),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:te.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:He&&S.map.isVideoTexture===!0&&At.getTransfer(S.map.colorSpace)===Dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xi,flipSided:S.side===Zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)M.push(k),M.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const M=_[S.type];let k;if(M){const O=xr[M];k=Lh.clone(O.uniforms)}else k=S.uniforms;return k}function w(S,M){let k;for(let O=0,te=u.length;O<te;O++){const L=u[O];if(L.cacheKey===M){k=L,++k.usedTimes;break}}return k===void 0&&(k=new AD(n,M,S,s),u.push(k)),k}function T(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:P}}function LD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function DD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,_,g,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=m),e++,d}function a(h,f,p,_,g,m){const d=o(h,f,p,_,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,_,g,m){const d=o(h,f,p,_,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(h,f){t.length>1&&t.sort(h||DD),i.length>1&&i.sort(f||ix),r.length>1&&r.sort(f||ix)}function c(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function UD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new rx,n.set(i,[o])):r>=s.length?(o=new rx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ID(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new nt};break;case"SpotLight":t={position:new H,direction:new H,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function ND(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OD=0;function FD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kD(n,e){const t=new ID,i=ND(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new H);const s=new H,o=new qt,a=new qt;function l(c,h){let f=0,p=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let g=0,m=0,d=0,v=0,y=0,x=0,w=0,T=0,E=0,P=0,S=0;c.sort(FD);const M=h===!0?Math.PI:1;for(let O=0,te=c.length;O<te;O++){const L=c[O],z=L.color,W=L.intensity,X=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=z.r*W*M,p+=z.g*W*M,_+=z.b*W*M;else if(L.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(L.sh.coefficients[B],W);S++}else if(L.isDirectionalLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const b=L.shadow,ee=i.get(L);ee.shadowBias=b.bias,ee.shadowNormalBias=b.normalBias,ee.shadowRadius=b.radius,ee.shadowMapSize=b.mapSize,r.directionalShadow[g]=ee,r.directionalShadowMap[g]=U,r.directionalShadowMatrix[g]=L.shadow.matrix,x++}r.directional[g]=B,g++}else if(L.isSpotLight){const B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(z).multiplyScalar(W*M),B.distance=X,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,r.spot[d]=B;const b=L.shadow;if(L.map&&(r.spotLightMap[E]=L.map,E++,b.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[d]=b.matrix,L.castShadow){const ee=i.get(L);ee.shadowBias=b.bias,ee.shadowNormalBias=b.normalBias,ee.shadowRadius=b.radius,ee.shadowMapSize=b.mapSize,r.spotShadow[d]=ee,r.spotShadowMap[d]=U,T++}d++}else if(L.isRectAreaLight){const B=t.get(L);B.color.copy(z).multiplyScalar(W),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=B,v++}else if(L.isPointLight){const B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*M),B.distance=L.distance,B.decay=L.decay,L.castShadow){const b=L.shadow,ee=i.get(L);ee.shadowBias=b.bias,ee.shadowNormalBias=b.normalBias,ee.shadowRadius=b.radius,ee.shadowMapSize=b.mapSize,ee.shadowCameraNear=b.camera.near,ee.shadowCameraFar=b.camera.far,r.pointShadow[m]=ee,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=L.shadow.matrix,w++}r.point[m]=B,m++}else if(L.isHemisphereLight){const B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(W*M),B.groundColor.copy(L.groundColor).multiplyScalar(W*M),r.hemi[y]=B,y++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==g||k.pointLength!==m||k.spotLength!==d||k.rectAreaLength!==v||k.hemiLength!==y||k.numDirectionalShadows!==x||k.numPointShadows!==w||k.numSpotShadows!==T||k.numSpotMaps!==E||k.numLightProbes!==S)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,k.directionalLength=g,k.pointLength=m,k.spotLength=d,k.rectAreaLength=v,k.hemiLength=y,k.numDirectionalShadows=x,k.numPointShadows=w,k.numSpotShadows=T,k.numSpotMaps=E,k.numLightProbes=S,r.version=OD++)}function u(c,h){let f=0,p=0,_=0,g=0,m=0;const d=h.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const x=c[v];if(x.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(x.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),_++}else if(x.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(x.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function sx(n,e){const t=new kD(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function zD(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new sx(n,e),t.set(s,[l])):o>=a.length?(l=new sx(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class BD extends qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HD extends qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GD=`uniform sampler2D shadow_pass;
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
}`;function WD(n,e,t){let i=new z_;const r=new $e,s=new $e,o=new kt,a=new BD({depthPacking:zR}),l=new HD,u={},c=t.maxTextureSize,h={[qs]:Zn,[Zn]:qs,[Xi]:Xi},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:VD,fragmentShader:GD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new mn;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new dn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dE;let d=this.type;this.render=function(T,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Kr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const te=d!==Fr&&this.type===Fr,L=d===Fr&&this.type!==Fr;for(let z=0,W=T.length;z<W;z++){const X=T[z],U=X.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const B=U.getFrameExtents();if(r.multiply(B),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/B.x),r.x=s.x*B.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/B.y),r.y=s.y*B.y,U.mapSize.y=s.y)),U.map===null||te===!0||L===!0){const ee=this.type!==Fr?{minFilter:Yn,magFilter:Yn}:{};U.map!==null&&U.map.dispose(),U.map=new er(r.x,r.y,ee),U.map.texture.name=X.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const b=U.getViewportCount();for(let ee=0;ee<b;ee++){const Q=U.getViewport(ee);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),O.viewport(o),U.updateMatrices(X,ee),i=U.getFrustum(),x(E,P,U.camera,X,this.type)}U.isPointLightShadow!==!0&&this.type===Fr&&v(U,P),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,k)};function v(T,E){const P=e.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new er(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,P,p,g,null)}function y(T,E,P,S){let M=null;const k=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)M=k;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=M.uuid,te=E.uuid;let L=u[O];L===void 0&&(L={},u[O]=L);let z=L[te];z===void 0&&(z=M.clone(),L[te]=z,E.addEventListener("dispose",w)),M=z}if(M.visible=E.visible,M.wireframe=E.wireframe,S===Fr?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=P}return M}function x(T,E,P,S,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Fr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const te=e.update(T),L=T.material;if(Array.isArray(L)){const z=te.groups;for(let W=0,X=z.length;W<X;W++){const U=z[W],B=L[U.materialIndex];if(B&&B.visible){const b=y(T,B,S,M);T.onBeforeShadow(n,T,E,P,te,b,U),n.renderBufferDirect(P,null,te,b,T,U),T.onAfterShadow(n,T,E,P,te,b,U)}}}else if(L.visible){const z=y(T,L,S,M);T.onBeforeShadow(n,T,E,P,te,z,null),n.renderBufferDirect(P,null,te,z,T,null),T.onAfterShadow(n,T,E,P,te,z,null)}}const O=T.children;for(let te=0,L=O.length;te<L;te++)x(O[te],E,P,S,M)}function w(T){T.target.removeEventListener("dispose",w);for(const P in u){const S=u[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function XD(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const de=new kt;let me=null;const Ge=new kt(0,0,0,0);return{setMask:function(ze){me!==ze&&!D&&(n.colorMask(ze,ze,ze,ze),me=ze)},setLocked:function(ze){D=ze},setClear:function(ze,st,gt,Ue,be){be===!0&&(ze*=Ue,st*=Ue,gt*=Ue),de.set(ze,st,gt,Ue),Ge.equals(de)===!1&&(n.clearColor(ze,st,gt,Ue),Ge.copy(de))},reset:function(){D=!1,me=null,Ge.set(-1,0,0,0)}}}function s(){let D=!1,de=null,me=null,Ge=null;return{setTest:function(ze){ze?Me(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(ze){de!==ze&&!D&&(n.depthMask(ze),de=ze)},setFunc:function(ze){if(me!==ze){switch(ze){case mR:n.depthFunc(n.NEVER);break;case gR:n.depthFunc(n.ALWAYS);break;case _R:n.depthFunc(n.LESS);break;case wh:n.depthFunc(n.LEQUAL);break;case vR:n.depthFunc(n.EQUAL);break;case yR:n.depthFunc(n.GEQUAL);break;case xR:n.depthFunc(n.GREATER);break;case SR:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=ze}},setLocked:function(ze){D=ze},setClear:function(ze){Ge!==ze&&(n.clearDepth(ze),Ge=ze)},reset:function(){D=!1,de=null,me=null,Ge=null}}}function o(){let D=!1,de=null,me=null,Ge=null,ze=null,st=null,gt=null,Ue=null,be=null;return{setTest:function(Ne){D||(Ne?Me(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(Ne){de!==Ne&&!D&&(n.stencilMask(Ne),de=Ne)},setFunc:function(Ne,fe,Ye){(me!==Ne||Ge!==fe||ze!==Ye)&&(n.stencilFunc(Ne,fe,Ye),me=Ne,Ge=fe,ze=Ye)},setOp:function(Ne,fe,Ye){(st!==Ne||gt!==fe||Ue!==Ye)&&(n.stencilOp(Ne,fe,Ye),st=Ne,gt=fe,Ue=Ye)},setLocked:function(Ne){D=Ne},setClear:function(Ne){be!==Ne&&(n.clearStencil(Ne),be=Ne)},reset:function(){D=!1,de=null,me=null,Ge=null,ze=null,st=null,gt=null,Ue=null,be=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let f={},p={},_=new WeakMap,g=[],m=null,d=!1,v=null,y=null,x=null,w=null,T=null,E=null,P=null,S=new nt(0,0,0),M=0,k=!1,O=null,te=null,L=null,z=null,W=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const b=n.getParameter(n.VERSION);b.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(b)[1]),U=B>=1):b.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),U=B>=2);let ee=null,Q={};const F=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),J=new kt().fromArray(F),he=new kt().fromArray($);function ce(D,de,me,Ge){const ze=new Uint8Array(4),st=n.createTexture();n.bindTexture(D,st),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<me;gt++)i&&(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,Ge,0,n.RGBA,n.UNSIGNED_BYTE,ze):n.texImage2D(de+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ze);return st}const we={};we[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(n.DEPTH_TEST),l.setFunc(wh),Ve(!1),R(Vv),Me(n.CULL_FACE),xe(Kr);function Me(D){f[D]!==!0&&(n.enable(D),f[D]=!0)}function He(D){f[D]!==!1&&(n.disable(D),f[D]=!1)}function Qe(D,de){return p[D]!==de?(n.bindFramebuffer(D,de),p[D]=de,i&&(D===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),D===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function q(D,de){let me=g,Ge=!1;if(D)if(me=_.get(de),me===void 0&&(me=[],_.set(de,me)),D.isWebGLMultipleRenderTargets){const ze=D.texture;if(me.length!==ze.length||me[0]!==n.COLOR_ATTACHMENT0){for(let st=0,gt=ze.length;st<gt;st++)me[st]=n.COLOR_ATTACHMENT0+st;me.length=ze.length,Ge=!0}}else me[0]!==n.COLOR_ATTACHMENT0&&(me[0]=n.COLOR_ATTACHMENT0,Ge=!0);else me[0]!==n.BACK&&(me[0]=n.BACK,Ge=!0);Ge&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function je(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Ee={[po]:n.FUNC_ADD,[eR]:n.FUNC_SUBTRACT,[tR]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Xv]=n.MIN,Ee[Yv]=n.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ee[Xv]=D.MIN_EXT,Ee[Yv]=D.MAX_EXT)}const ke={[nR]:n.ZERO,[iR]:n.ONE,[rR]:n.SRC_COLOR,[Zm]:n.SRC_ALPHA,[cR]:n.SRC_ALPHA_SATURATE,[lR]:n.DST_COLOR,[oR]:n.DST_ALPHA,[sR]:n.ONE_MINUS_SRC_COLOR,[Qm]:n.ONE_MINUS_SRC_ALPHA,[uR]:n.ONE_MINUS_DST_COLOR,[aR]:n.ONE_MINUS_DST_ALPHA,[fR]:n.CONSTANT_COLOR,[hR]:n.ONE_MINUS_CONSTANT_COLOR,[dR]:n.CONSTANT_ALPHA,[pR]:n.ONE_MINUS_CONSTANT_ALPHA};function xe(D,de,me,Ge,ze,st,gt,Ue,be,Ne){if(D===Kr){d===!0&&(He(n.BLEND),d=!1);return}if(d===!1&&(Me(n.BLEND),d=!0),D!==Jb){if(D!==v||Ne!==k){if((y!==po||T!==po)&&(n.blendEquation(n.FUNC_ADD),y=po,T=po),Ne)switch(D){case el:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zi:n.blendFunc(n.ONE,n.ONE);break;case Gv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case el:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,w=null,E=null,P=null,S.set(0,0,0),M=0,v=D,k=Ne}return}ze=ze||de,st=st||me,gt=gt||Ge,(de!==y||ze!==T)&&(n.blendEquationSeparate(Ee[de],Ee[ze]),y=de,T=ze),(me!==x||Ge!==w||st!==E||gt!==P)&&(n.blendFuncSeparate(ke[me],ke[Ge],ke[st],ke[gt]),x=me,w=Ge,E=st,P=gt),(Ue.equals(S)===!1||be!==M)&&(n.blendColor(Ue.r,Ue.g,Ue.b,be),S.copy(Ue),M=be),v=D,k=!1}function j(D,de){D.side===Xi?He(n.CULL_FACE):Me(n.CULL_FACE);let me=D.side===Zn;de&&(me=!me),Ve(me),D.blending===el&&D.transparent===!1?xe(Kr):xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ge=D.stencilWrite;u.setTest(Ge),Ge&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),G(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){O!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),O=D)}function R(D){D!==Kb?(Me(n.CULL_FACE),D!==te&&(D===Vv?n.cullFace(n.BACK):D===Zb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),te=D}function C(D){D!==L&&(U&&n.lineWidth(D),L=D)}function G(D,de,me){D?(Me(n.POLYGON_OFFSET_FILL),(z!==de||W!==me)&&(n.polygonOffset(de,me),z=de,W=me)):He(n.POLYGON_OFFSET_FILL)}function se(D){D?Me(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function ne(D){D===void 0&&(D=n.TEXTURE0+X-1),ee!==D&&(n.activeTexture(D),ee=D)}function oe(D,de,me){me===void 0&&(ee===null?me=n.TEXTURE0+X-1:me=ee);let Ge=Q[me];Ge===void 0&&(Ge={type:void 0,texture:void 0},Q[me]=Ge),(Ge.type!==D||Ge.texture!==de)&&(ee!==me&&(n.activeTexture(me),ee=me),n.bindTexture(D,de||we[D]),Ge.type=D,Ge.texture=de)}function Se(){const D=Q[ee];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ve(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ze(D){J.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function tt(D){he.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function ct(D,de){let me=h.get(de);me===void 0&&(me=new WeakMap,h.set(de,me));let Ge=me.get(D);Ge===void 0&&(Ge=n.getUniformBlockIndex(de,D.name),me.set(D,Ge))}function ge(D,de){const Ge=h.get(de).get(D);c.get(de)!==Ge&&(n.uniformBlockBinding(de,Ge,D.__bindingPointIndex),c.set(de,Ge))}function le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ee=null,Q={},p={},_=new WeakMap,g=[],m=null,d=!1,v=null,y=null,x=null,w=null,T=null,E=null,P=null,S=new nt(0,0,0),M=0,k=!1,O=null,te=null,L=null,z=null,W=null,J.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:He,bindFramebuffer:Qe,drawBuffers:q,useProgram:je,setBlending:xe,setMaterial:j,setFlipSided:Ve,setCullFace:R,setLineWidth:C,setPolygonOffset:G,setScissorTest:se,activeTexture:ne,bindTexture:oe,unbindTexture:Se,compressedTexImage2D:ve,compressedTexImage3D:pe,texImage2D:Ce,texImage3D:ae,updateUBOMapping:ct,uniformBlockBinding:ge,texStorage2D:Oe,texStorage3D:Le,texSubImage2D:Ie,texSubImage3D:Xe,compressedTexSubImage2D:ie,compressedTexSubImage3D:pt,scissor:Ze,viewport:tt,reset:le}}function YD(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,C){return p?new OffscreenCanvas(R,C):Ph("canvas")}function g(R,C,G,se){let ne=1;if((R.width>se||R.height>se)&&(ne=se/Math.max(R.width,R.height)),ne<1||C===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const oe=C?sg:Math.floor,Se=oe(ne*R.width),ve=oe(ne*R.height);h===void 0&&(h=_(Se,ve));const pe=G?_(Se,ve):h;return pe.width=Se,pe.height=ve,pe.getContext("2d").drawImage(R,0,0,Se,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Se+"x"+ve+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Sy(R.width)&&Sy(R.height)}function d(R){return a?!1:R.wrapS!==Yi||R.wrapT!==Yi||R.minFilter!==Yn&&R.minFilter!==ii}function v(R,C){return R.generateMipmaps&&C&&R.minFilter!==Yn&&R.minFilter!==ii}function y(R){n.generateMipmap(R)}function x(R,C,G,se,ne=!1){if(a===!1)return C;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=C;if(C===n.RED&&(G===n.FLOAT&&(oe=n.R32F),G===n.HALF_FLOAT&&(oe=n.R16F),G===n.UNSIGNED_BYTE&&(oe=n.R8)),C===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.R8UI),G===n.UNSIGNED_SHORT&&(oe=n.R16UI),G===n.UNSIGNED_INT&&(oe=n.R32UI),G===n.BYTE&&(oe=n.R8I),G===n.SHORT&&(oe=n.R16I),G===n.INT&&(oe=n.R32I)),C===n.RG&&(G===n.FLOAT&&(oe=n.RG32F),G===n.HALF_FLOAT&&(oe=n.RG16F),G===n.UNSIGNED_BYTE&&(oe=n.RG8)),C===n.RGBA){const Se=ne?Ah:At.getTransfer(se);G===n.FLOAT&&(oe=n.RGBA32F),G===n.HALF_FLOAT&&(oe=n.RGBA16F),G===n.UNSIGNED_BYTE&&(oe=Se===Dt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(R,C,G){return v(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==Yn&&R.minFilter!==ii?Math.log2(Math.max(C.width,C.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?C.mipmaps.length:1}function T(R){return R===Yn||R===jv||R===$d?n.NEAREST:n.LINEAR}function E(R){const C=R.target;C.removeEventListener("dispose",E),S(C),C.isVideoTexture&&c.delete(C)}function P(R){const C=R.target;C.removeEventListener("dispose",P),k(C)}function S(R){const C=i.get(R);if(C.__webglInit===void 0)return;const G=R.source,se=f.get(G);if(se){const ne=se[C.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(R),Object.keys(se).length===0&&f.delete(G)}i.remove(R)}function M(R){const C=i.get(R);n.deleteTexture(C.__webglTexture);const G=R.source,se=f.get(G);delete se[C.__cacheKey],o.memory.textures--}function k(R){const C=R.texture,G=i.get(R),se=i.get(C);if(se.__webglTexture!==void 0&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let oe=0;oe<G.__webglFramebuffer[ne].length;oe++)n.deleteFramebuffer(G.__webglFramebuffer[ne][oe]);else n.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)n.deleteFramebuffer(G.__webglFramebuffer[ne]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,oe=C.length;ne<oe;ne++){const Se=i.get(C[ne]);Se.__webglTexture&&(n.deleteTexture(Se.__webglTexture),o.memory.textures--),i.remove(C[ne])}i.remove(C),i.remove(R)}let O=0;function te(){O=0}function L(){const R=O;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function z(R){const C=[];return C.push(R.wrapS),C.push(R.wrapT),C.push(R.wrapR||0),C.push(R.magFilter),C.push(R.minFilter),C.push(R.anisotropy),C.push(R.internalFormat),C.push(R.format),C.push(R.type),C.push(R.generateMipmaps),C.push(R.premultiplyAlpha),C.push(R.flipY),C.push(R.unpackAlignment),C.push(R.colorSpace),C.join()}function W(R,C){const G=i.get(R);if(R.isVideoTexture&&j(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,R,C);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+C)}function X(R,C){const G=i.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+C)}function U(R,C){const G=i.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,C);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+C)}function B(R,C){const G=i.get(R);if(R.version>0&&G.__version!==R.version){he(G,R,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+C)}const b={[Th]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[tg]:n.MIRRORED_REPEAT},ee={[Yn]:n.NEAREST,[jv]:n.NEAREST_MIPMAP_NEAREST,[$d]:n.NEAREST_MIPMAP_LINEAR,[ii]:n.LINEAR,[RR]:n.LINEAR_MIPMAP_NEAREST,[tc]:n.LINEAR_MIPMAP_LINEAR},Q={[HR]:n.NEVER,[jR]:n.ALWAYS,[VR]:n.LESS,[AE]:n.LEQUAL,[GR]:n.EQUAL,[YR]:n.GEQUAL,[WR]:n.GREATER,[XR]:n.NOTEQUAL};function F(R,C,G){if(G?(n.texParameteri(R,n.TEXTURE_WRAP_S,b[C.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,b[C.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,b[C.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ee[C.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ee[C.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(C.wrapS!==Yi||C.wrapT!==Yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,T(C.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,T(C.minFilter)),C.minFilter!==Yn&&C.minFilter!==ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Yn||C.minFilter!==$d&&C.minFilter!==tc||C.type===Cs&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===Rr&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(n.texParameterf(R,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function $(R,C){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,C.addEventListener("dispose",E));const se=C.source;let ne=f.get(se);ne===void 0&&(ne={},f.set(se,ne));const oe=z(C);if(oe!==R.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[oe].usedTimes++;const Se=ne[R.__cacheKey];Se!==void 0&&(ne[R.__cacheKey].usedTimes--,Se.usedTimes===0&&M(C)),R.__cacheKey=oe,R.__webglTexture=ne[oe].texture}return G}function J(R,C,G){let se=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(se=n.TEXTURE_3D);const ne=$(R,C),oe=C.source;t.bindTexture(se,R.__webglTexture,n.TEXTURE0+G);const Se=i.get(oe);if(oe.version!==Se.__version||ne===!0){t.activeTexture(n.TEXTURE0+G);const ve=At.getPrimaries(At.workingColorSpace),pe=C.colorSpace===qi?null:At.getPrimaries(C.colorSpace),Ie=C.colorSpace===qi||ve===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Xe=d(C)&&m(C.image)===!1;let ie=g(C.image,Xe,!1,r.maxTextureSize);ie=Ve(C,ie);const pt=m(ie)||a,Oe=s.convert(C.format,C.colorSpace);let Le=s.convert(C.type),Ce=x(C.internalFormat,Oe,Le,C.colorSpace,C.isVideoTexture);F(se,C,pt);let ae;const Ze=C.mipmaps,tt=a&&C.isVideoTexture!==!0&&Ce!==EE,ct=Se.__version===void 0||ne===!0,ge=w(C,ie,pt);if(C.isDepthTexture)Ce=n.DEPTH_COMPONENT,a?C.type===Cs?Ce=n.DEPTH_COMPONENT32F:C.type===As?Ce=n.DEPTH_COMPONENT24:C.type===Do?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:C.type===Cs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===Uo&&Ce===n.DEPTH_COMPONENT&&C.type!==N_&&C.type!==As&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=As,Le=s.convert(C.type)),C.format===_l&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,C.type!==Do&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Do,Le=s.convert(C.type))),ct&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,Oe,Le,null));else if(C.isDataTexture)if(Ze.length>0&&pt){tt&&ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ce,Ze[0].width,Ze[0].height);for(let le=0,D=Ze.length;le<D;le++)ae=Ze[le],tt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,ae.width,ae.height,Oe,Le,ae.data):t.texImage2D(n.TEXTURE_2D,le,Ce,ae.width,ae.height,0,Oe,Le,ae.data);C.generateMipmaps=!1}else tt?(ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ce,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,Oe,Le,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,ie.width,ie.height,0,Oe,Le,ie.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){tt&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ce,Ze[0].width,Ze[0].height,ie.depth);for(let le=0,D=Ze.length;le<D;le++)ae=Ze[le],C.format!==ji?Oe!==null?tt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ae.width,ae.height,ie.depth,Oe,ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ce,ae.width,ae.height,ie.depth,0,ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,ae.width,ae.height,ie.depth,Oe,Le,ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ce,ae.width,ae.height,ie.depth,0,Oe,Le,ae.data)}else{tt&&ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ce,Ze[0].width,Ze[0].height);for(let le=0,D=Ze.length;le<D;le++)ae=Ze[le],C.format!==ji?Oe!==null?tt?t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,ae.width,ae.height,Oe,ae.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ce,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,ae.width,ae.height,Oe,Le,ae.data):t.texImage2D(n.TEXTURE_2D,le,Ce,ae.width,ae.height,0,Oe,Le,ae.data)}else if(C.isDataArrayTexture)tt?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Ce,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Oe,Le,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,Oe,Le,ie.data);else if(C.isData3DTexture)tt?(ct&&t.texStorage3D(n.TEXTURE_3D,ge,Ce,ie.width,ie.height,ie.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Oe,Le,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,Oe,Le,ie.data);else if(C.isFramebufferTexture){if(ct)if(tt)t.texStorage2D(n.TEXTURE_2D,ge,Ce,ie.width,ie.height);else{let le=ie.width,D=ie.height;for(let de=0;de<ge;de++)t.texImage2D(n.TEXTURE_2D,de,Ce,le,D,0,Oe,Le,null),le>>=1,D>>=1}}else if(Ze.length>0&&pt){tt&&ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ce,Ze[0].width,Ze[0].height);for(let le=0,D=Ze.length;le<D;le++)ae=Ze[le],tt?t.texSubImage2D(n.TEXTURE_2D,le,0,0,Oe,Le,ae):t.texImage2D(n.TEXTURE_2D,le,Ce,Oe,Le,ae);C.generateMipmaps=!1}else tt?(ct&&t.texStorage2D(n.TEXTURE_2D,ge,Ce,ie.width,ie.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,Le,ie)):t.texImage2D(n.TEXTURE_2D,0,Ce,Oe,Le,ie);v(C,pt)&&y(se),Se.__version=oe.version,C.onUpdate&&C.onUpdate(C)}R.__version=C.version}function he(R,C,G){if(C.image.length!==6)return;const se=$(R,C),ne=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);const oe=i.get(ne);if(ne.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+G);const Se=At.getPrimaries(At.workingColorSpace),ve=C.colorSpace===qi?null:At.getPrimaries(C.colorSpace),pe=C.colorSpace===qi||Se===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ie=C.isCompressedTexture||C.image[0].isCompressedTexture,Xe=C.image[0]&&C.image[0].isDataTexture,ie=[];for(let le=0;le<6;le++)!Ie&&!Xe?ie[le]=g(C.image[le],!1,!0,r.maxCubemapSize):ie[le]=Xe?C.image[le].image:C.image[le],ie[le]=Ve(C,ie[le]);const pt=ie[0],Oe=m(pt)||a,Le=s.convert(C.format,C.colorSpace),Ce=s.convert(C.type),ae=x(C.internalFormat,Le,Ce,C.colorSpace),Ze=a&&C.isVideoTexture!==!0,tt=oe.__version===void 0||se===!0;let ct=w(C,pt,Oe);F(n.TEXTURE_CUBE_MAP,C,Oe);let ge;if(Ie){Ze&&tt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ae,pt.width,pt.height);for(let le=0;le<6;le++){ge=ie[le].mipmaps;for(let D=0;D<ge.length;D++){const de=ge[D];C.format!==ji?Le!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D,0,0,de.width,de.height,Le,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D,ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D,0,0,de.width,de.height,Le,Ce,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D,ae,de.width,de.height,0,Le,Ce,de.data)}}}else{ge=C.mipmaps,Ze&&tt&&(ge.length>0&&ct++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ct,ae,ie[0].width,ie[0].height));for(let le=0;le<6;le++)if(Xe){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ie[le].width,ie[le].height,Le,Ce,ie[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ae,ie[le].width,ie[le].height,0,Le,Ce,ie[le].data);for(let D=0;D<ge.length;D++){const me=ge[D].image[le].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D+1,0,0,me.width,me.height,Le,Ce,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D+1,ae,me.width,me.height,0,Le,Ce,me.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Le,Ce,ie[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ae,Le,Ce,ie[le]);for(let D=0;D<ge.length;D++){const de=ge[D];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D+1,0,0,Le,Ce,de.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,D+1,ae,Le,Ce,de.image[le])}}}v(C,Oe)&&y(n.TEXTURE_CUBE_MAP),oe.__version=ne.version,C.onUpdate&&C.onUpdate(C)}R.__version=C.version}function ce(R,C,G,se,ne,oe){const Se=s.convert(G.format,G.colorSpace),ve=s.convert(G.type),pe=x(G.internalFormat,Se,ve,G.colorSpace);if(!i.get(C).__hasExternalTextures){const Xe=Math.max(1,C.width>>oe),ie=Math.max(1,C.height>>oe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,pe,Xe,ie,C.depth,0,Se,ve,null):t.texImage2D(ne,oe,pe,Xe,ie,0,Se,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),xe(C)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,0,ke(C)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(R,C,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),C.depthBuffer&&!C.stencilBuffer){let se=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||xe(C)){const ne=C.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Cs?se=n.DEPTH_COMPONENT32F:ne.type===As&&(se=n.DEPTH_COMPONENT24));const oe=ke(C);xe(C)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,se,C.width,C.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,se,C.width,C.height)}else n.renderbufferStorage(n.RENDERBUFFER,se,C.width,C.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(C.depthBuffer&&C.stencilBuffer){const se=ke(C);G&&xe(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,C.width,C.height):xe(C)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,n.DEPTH24_STENCIL8,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const se=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0;ne<se.length;ne++){const oe=se[ne],Se=s.convert(oe.format,oe.colorSpace),ve=s.convert(oe.type),pe=x(oe.internalFormat,Se,ve,oe.colorSpace),Ie=ke(C);G&&xe(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,pe,C.width,C.height):xe(C)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,pe,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,pe,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(R,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),W(C.depthTexture,0);const se=i.get(C.depthTexture).__webglTexture,ne=ke(C);if(C.depthTexture.format===Uo)xe(C)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(C.depthTexture.format===_l)xe(C)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function He(R){const C=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Me(C.__webglFramebuffer,R)}else if(G){C.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[se]),C.__webglDepthbuffer[se]=n.createRenderbuffer(),we(C.__webglDepthbuffer[se],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=n.createRenderbuffer(),we(C.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(R,C,G){const se=i.get(R);C!==void 0&&ce(se.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&He(R)}function q(R){const C=R.texture,G=i.get(R),se=i.get(C);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=C.version,o.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,oe=R.isWebGLMultipleRenderTargets===!0,Se=m(R)||a;if(ne){G.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(a&&C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[ve]=[];for(let pe=0;pe<C.mipmaps.length;pe++)G.__webglFramebuffer[ve][pe]=n.createFramebuffer()}else G.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(a&&C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let ve=0;ve<C.mipmaps.length;ve++)G.__webglFramebuffer[ve]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(oe)if(r.drawBuffers){const ve=R.texture;for(let pe=0,Ie=ve.length;pe<Ie;pe++){const Xe=i.get(ve[pe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&xe(R)===!1){const ve=oe?C:[C];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let pe=0;pe<ve.length;pe++){const Ie=ve[pe];G.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[pe]);const Xe=s.convert(Ie.format,Ie.colorSpace),ie=s.convert(Ie.type),pt=x(Ie.internalFormat,Xe,ie,Ie.colorSpace,R.isXRRenderTarget===!0),Oe=ke(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,pt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,G.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),we(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),F(n.TEXTURE_CUBE_MAP,C,Se);for(let ve=0;ve<6;ve++)if(a&&C.mipmaps&&C.mipmaps.length>0)for(let pe=0;pe<C.mipmaps.length;pe++)ce(G.__webglFramebuffer[ve][pe],R,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,pe);else ce(G.__webglFramebuffer[ve],R,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);v(C,Se)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const ve=R.texture;for(let pe=0,Ie=ve.length;pe<Ie;pe++){const Xe=ve[pe],ie=i.get(Xe);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),F(n.TEXTURE_2D,Xe,Se),ce(G.__webglFramebuffer,R,Xe,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),v(Xe,Se)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ve=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,se.__webglTexture),F(ve,C,Se),a&&C.mipmaps&&C.mipmaps.length>0)for(let pe=0;pe<C.mipmaps.length;pe++)ce(G.__webglFramebuffer[pe],R,C,n.COLOR_ATTACHMENT0,ve,pe);else ce(G.__webglFramebuffer,R,C,n.COLOR_ATTACHMENT0,ve,0);v(C,Se)&&y(ve),t.unbindTexture()}R.depthBuffer&&He(R)}function je(R){const C=m(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let se=0,ne=G.length;se<ne;se++){const oe=G[se];if(v(oe,C)){const Se=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(oe).__webglTexture;t.bindTexture(Se,ve),y(Se),t.unbindTexture()}}}function Ee(R){if(a&&R.samples>0&&xe(R)===!1){const C=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,se=R.height;let ne=n.COLOR_BUFFER_BIT;const oe=[],Se=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(R),pe=R.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ie=0;Ie<C.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ie=0;Ie<C.length;Ie++){oe.push(n.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&oe.push(Se);const Xe=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Xe===!1&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ie]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Se]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Se])),pe){const ie=i.get(C[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,G,se,0,0,G,se,ne,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ie=0;Ie<C.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ie]);const Xe=i.get(C[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function ke(R){return Math.min(r.maxSamples,R.samples)}function xe(R){const C=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function j(R){const C=o.render.frame;c.get(R)!==C&&(c.set(R,C),R.update())}function Ve(R,C){const G=R.colorSpace,se=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===ig||G!==is&&G!==qi&&(At.getTransfer(G)===Dt?a===!1?e.has("EXT_sRGB")===!0&&se===ji?(R.format=ig,R.minFilter=ii,R.generateMipmaps=!1):C=bE.sRGBToLinear(C):(se!==ji||ne!==Bs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),C}this.allocateTextureUnit=L,this.resetTextureUnits=te,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=Qe,this.setupRenderTarget=q,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=xe}function jD(n,e,t){const i=t.isWebGL2;function r(s,o=qi){let a;const l=At.getTransfer(o);if(s===Bs)return n.UNSIGNED_BYTE;if(s===vE)return n.UNSIGNED_SHORT_4_4_4_4;if(s===yE)return n.UNSIGNED_SHORT_5_5_5_1;if(s===PR)return n.BYTE;if(s===LR)return n.SHORT;if(s===N_)return n.UNSIGNED_SHORT;if(s===_E)return n.INT;if(s===As)return n.UNSIGNED_INT;if(s===Cs)return n.FLOAT;if(s===Rr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===DR)return n.ALPHA;if(s===ji)return n.RGBA;if(s===UR)return n.LUMINANCE;if(s===IR)return n.LUMINANCE_ALPHA;if(s===Uo)return n.DEPTH_COMPONENT;if(s===_l)return n.DEPTH_STENCIL;if(s===ig)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===NR)return n.RED;if(s===xE)return n.RED_INTEGER;if(s===OR)return n.RG;if(s===SE)return n.RG_INTEGER;if(s===ME)return n.RGBA_INTEGER;if(s===Kd||s===Zd||s===Qd||s===Jd)if(l===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Kd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Jd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Kd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Jd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qv||s===$v||s===Kv||s===Zv)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qv)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$v)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kv)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zv)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===EE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qv||s===Jv)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qv)return l===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jv)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ey||s===ty||s===ny||s===iy||s===ry||s===sy||s===oy||s===ay||s===ly||s===uy||s===cy||s===fy||s===hy||s===dy)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ey)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ty)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ny)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===iy)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ry)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sy)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oy)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ay)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ly)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===uy)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cy)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fy)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hy)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dy)return l===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ep||s===py||s===my)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ep)return l===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===py)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===my)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===FR||s===gy||s===_y||s===vy)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ep)return a.COMPRESSED_RED_RGTC1_EXT;if(s===gy)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_y)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vy)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Do?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class qD extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class iu extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $D={type:"move"};class Tp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),d=this._getHandJoint(u,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($D)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new iu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class KD extends El{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,_=null;const g=t.getContextAttributes();let m=null,d=null;const v=[],y=[],x=new $e;let w=null;const T=new Ei;T.layers.enable(1),T.viewport=new kt;const E=new Ei;E.layers.enable(2),E.viewport=new kt;const P=[T,E],S=new qD;S.layers.enable(1),S.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=v[F];return $===void 0&&($=new Tp,v[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=v[F];return $===void 0&&($=new Tp,v[F]=$),$.getGripSpace()},this.getHand=function(F){let $=v[F];return $===void 0&&($=new Tp,v[F]=$),$.getHandSpace()};function O(F){const $=y.indexOf(F.inputSource);if($===-1)return;const J=v[$];J!==void 0&&(J.update(F.inputSource,F.frame,u||o),J.dispatchEvent({type:F.type,data:F.inputSource}))}function te(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",L);for(let F=0;F<v.length;F++){const $=y[F];$!==null&&(y[F]=null,v[F].disconnect($))}M=null,k=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",te),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new er(p.framebufferWidth,p.framebufferHeight,{format:ji,type:Bs,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let $=null,J=null,he=null;g.depth&&(he=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=g.stencil?_l:Uo,J=g.stencil?Do:As);const ce={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new er(f.textureWidth,f.textureHeight,{format:ji,type:Bs,depthTexture:new zE(f.textureWidth,f.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const we=e.properties.get(d);we.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(F){for(let $=0;$<F.removed.length;$++){const J=F.removed[$],he=y.indexOf(J);he>=0&&(y[he]=null,v[he].disconnect(J))}for(let $=0;$<F.added.length;$++){const J=F.added[$];let he=y.indexOf(J);if(he===-1){for(let we=0;we<v.length;we++)if(we>=y.length){y.push(J),he=we;break}else if(y[we]===null){y[we]=J,he=we;break}if(he===-1)break}const ce=v[he];ce&&ce.connect(J)}}const z=new H,W=new H;function X(F,$,J){z.setFromMatrixPosition($.matrixWorld),W.setFromMatrixPosition(J.matrixWorld);const he=z.distanceTo(W),ce=$.projectionMatrix.elements,we=J.projectionMatrix.elements,Me=ce[14]/(ce[10]-1),He=ce[14]/(ce[10]+1),Qe=(ce[9]+1)/ce[5],q=(ce[9]-1)/ce[5],je=(ce[8]-1)/ce[0],Ee=(we[8]+1)/we[0],ke=Me*je,xe=Me*Ee,j=he/(-je+Ee),Ve=j*-je;$.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ve),F.translateZ(j),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const R=Me+j,C=He+j,G=ke-Ve,se=xe+(he-Ve),ne=Qe*He/C*R,oe=q*He/C*R;F.projectionMatrix.makePerspective(G,se,ne,oe,R,C),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function U(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;S.near=E.near=T.near=F.near,S.far=E.far=T.far=F.far,(M!==S.near||k!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,k=S.far);const $=F.parent,J=S.cameras;U(S,$);for(let he=0;he<J.length;he++)U(J[he],$);J.length===2?X(S,T,E):S.projectionMatrix.copy(T.projectionMatrix),B(F,S,$)};function B(F,$,J){J===null?F.matrix.copy($.matrixWorld):(F.matrix.copy(J.matrixWorld),F.matrix.invert(),F.matrix.multiply($.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy($.projectionMatrix),F.projectionMatrixInverse.copy($.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=rg*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let b=null;function ee(F,$){if(c=$.getViewerPose(u||o),_=$,c!==null){const J=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let he=!1;J.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let ce=0;ce<J.length;ce++){const we=J[ce];let Me=null;if(p!==null)Me=p.getViewport(we);else{const Qe=h.getViewSubImage(f,we);Me=Qe.viewport,ce===0&&(e.setRenderTargetTextures(d,Qe.colorTexture,f.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(d))}let He=P[ce];He===void 0&&(He=new Ei,He.layers.enable(ce),He.viewport=new kt,P[ce]=He),He.matrix.fromArray(we.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(we.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Me.x,Me.y,Me.width,Me.height),ce===0&&(S.matrix.copy(He.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(He)}}for(let J=0;J<v.length;J++){const he=y[J],ce=v[J];he!==null&&ce!==void 0&&ce.update(he,$,u||o)}b&&b(F,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}const Q=new FE;Q.setAnimationLoop(ee),this.setAnimationLoop=function(F){b=F},this.dispose=function(){}}}function ZD(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,IE(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Zn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Zn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Zn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function QD(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function u(v,y){let x=r[v.id];x===void 0&&(_(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",m));const w=y.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(f(v),s[v.id]=T)}function c(v){const y=h();v.__bindingPointIndex=y;const x=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],x=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,E=x.length;T<E;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=P.length;S<M;S++){const k=P[S];if(p(k,T,S,w)===!0){const O=k.__offset,te=Array.isArray(k.value)?k.value:[k.value];let L=0;for(let z=0;z<te.length;z++){const W=te[z],X=g(W);typeof W=="number"||typeof W=="boolean"?(k.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+L,k.__data)):W.isMatrix3?(k.__data[0]=W.elements[0],k.__data[1]=W.elements[1],k.__data[2]=W.elements[2],k.__data[3]=0,k.__data[4]=W.elements[3],k.__data[5]=W.elements[4],k.__data[6]=W.elements[5],k.__data[7]=0,k.__data[8]=W.elements[6],k.__data[9]=W.elements[7],k.__data[10]=W.elements[8],k.__data[11]=0):(W.toArray(k.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,w){const T=v.value,E=y+"_"+x;if(w[E]===void 0)return typeof T=="number"||typeof T=="boolean"?w[E]=T:w[E]=T.clone(),!0;{const P=w[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function _(v){const y=v.uniforms;let x=0;const w=16;for(let E=0,P=y.length;E<P;E++){const S=Array.isArray(y[E])?y[E]:[y[E]];for(let M=0,k=S.length;M<k;M++){const O=S[M],te=Array.isArray(O.value)?O.value:[O.value];for(let L=0,z=te.length;L<z;L++){const W=te[L],X=g(W),U=x%w;U!==0&&w-U<X.boundary&&(x+=w-U),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=X.storage}}}const T=x%w;return T>0&&(x+=w-T),v.__size=x,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class XE{constructor(e={}){const{canvas:t=$R(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this._useLegacyLights=!1,this.toneMapping=zs,this.toneMappingExposure=1;const y=this;let x=!1,w=0,T=0,E=null,P=-1,S=null;const M=new kt,k=new kt;let O=null;const te=new nt(0);let L=0,z=t.width,W=t.height,X=1,U=null,B=null;const b=new kt(0,0,z,W),ee=new kt(0,0,z,W);let Q=!1;const F=new z_;let $=!1,J=!1,he=null;const ce=new qt,we=new $e,Me=new H,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return E===null?X:1}let q=i;function je(A,N){for(let Y=0;Y<A.length;Y++){const I=A[Y],V=t.getContext(I,N);if(V!==null)return V}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${I_}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",de,!1),q===null){const N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),q=je(N,A),q===null)throw je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,ke,xe,j,Ve,R,C,G,se,ne,oe,Se,ve,pe,Ie,Xe,ie,pt,Oe,Le,Ce,ae,Ze,tt;function ct(){Ee=new l3(q),ke=new n3(q,Ee,e),Ee.init(ke),ae=new jD(q,Ee,ke),xe=new XD(q,Ee,ke),j=new f3(q),Ve=new LD,R=new YD(q,Ee,xe,Ve,ke,ae,j),C=new r3(y),G=new a3(y),se=new y2(q,ke),Ze=new e3(q,Ee,se,ke),ne=new u3(q,se,j,Ze),oe=new m3(q,ne,se,j),Oe=new p3(q,ke,R),Xe=new i3(Ve),Se=new PD(y,C,G,Ee,ke,Ze,Xe),ve=new ZD(y,Ve),pe=new UD,Ie=new zD(Ee,ke),pt=new JL(y,C,G,xe,oe,f,l),ie=new WD(y,oe,ke),tt=new QD(q,j,ke,xe),Le=new t3(q,Ee,j,ke),Ce=new c3(q,Ee,j,ke),j.programs=Se.programs,y.capabilities=ke,y.extensions=Ee,y.properties=Ve,y.renderLists=pe,y.shadowMap=ie,y.state=xe,y.info=j}ct();const ge=new KD(y,q);this.xr=ge,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(z,W,!1))},this.getSize=function(A){return A.set(z,W)},this.setSize=function(A,N,Y=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,W=N,t.width=Math.floor(A*X),t.height=Math.floor(N*X),Y===!0&&(t.style.width=A+"px",t.style.height=N+"px"),this.setViewport(0,0,A,N)},this.getDrawingBufferSize=function(A){return A.set(z*X,W*X).floor()},this.setDrawingBufferSize=function(A,N,Y){z=A,W=N,X=Y,t.width=Math.floor(A*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,A,N)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(b)},this.setViewport=function(A,N,Y,I){A.isVector4?b.set(A.x,A.y,A.z,A.w):b.set(A,N,Y,I),xe.viewport(M.copy(b).multiplyScalar(X).floor())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,N,Y,I){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,N,Y,I),xe.scissor(k.copy(ee).multiplyScalar(X).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){xe.setScissorTest(Q=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(A=!0,N=!0,Y=!0){let I=0;if(A){let V=!1;if(E!==null){const re=E.texture.format;V=re===ME||re===SE||re===xE}if(V){const re=E.texture.type,Te=re===Bs||re===As||re===N_||re===Do||re===vE||re===yE,Fe=pt.getClearColor(),Re=pt.getClearAlpha(),Be=Fe.r,Ke=Fe.g,it=Fe.b;Te?(p[0]=Be,p[1]=Ke,p[2]=it,p[3]=Re,q.clearBufferuiv(q.COLOR,0,p)):(_[0]=Be,_[1]=Ke,_[2]=it,_[3]=Re,q.clearBufferiv(q.COLOR,0,_))}else I|=q.COLOR_BUFFER_BIT}N&&(I|=q.DEPTH_BUFFER_BIT),Y&&(I|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",de,!1),pe.dispose(),Ie.dispose(),Ve.dispose(),C.dispose(),G.dispose(),oe.dispose(),Ze.dispose(),tt.dispose(),Se.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",be),ge.removeEventListener("sessionend",Ne),he&&(he.dispose(),he=null),fe.stop()};function le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=j.autoReset,N=ie.enabled,Y=ie.autoUpdate,I=ie.needsUpdate,V=ie.type;ct(),j.autoReset=A,ie.enabled=N,ie.autoUpdate=Y,ie.needsUpdate=I,ie.type=V}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){const N=A.target;N.removeEventListener("dispose",me),Ge(N)}function Ge(A){ze(A),Ve.remove(A)}function ze(A){const N=Ve.get(A).programs;N!==void 0&&(N.forEach(function(Y){Se.releaseProgram(Y)}),A.isShaderMaterial&&Se.releaseShaderCache(A))}this.renderBufferDirect=function(A,N,Y,I,V,re){N===null&&(N=He);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Fe=qe(A,N,Y,I,V);xe.setMaterial(I,Te);let Re=Y.index,Be=1;if(I.wireframe===!0){if(Re=ne.getWireframeAttribute(Y),Re===void 0)return;Be=2}const Ke=Y.drawRange,it=Y.attributes.position;let It=Ke.start*Be,nn=(Ke.start+Ke.count)*Be;re!==null&&(It=Math.max(It,re.start*Be),nn=Math.min(nn,(re.start+re.count)*Be)),Re!==null?(It=Math.max(It,0),nn=Math.min(nn,Re.count)):it!=null&&(It=Math.max(It,0),nn=Math.min(nn,it.count));const Mt=nn-It;if(Mt<0||Mt===1/0)return;Ze.setup(V,I,Fe,Y,Re);let Fn,Tt=Le;if(Re!==null&&(Fn=se.get(Re),Tt=Ce,Tt.setIndex(Fn)),V.isMesh)I.wireframe===!0?(xe.setLineWidth(I.wireframeLinewidth*Qe()),Tt.setMode(q.LINES)):Tt.setMode(q.TRIANGLES);else if(V.isLine){let et=I.linewidth;et===void 0&&(et=1),xe.setLineWidth(et*Qe()),V.isLineSegments?Tt.setMode(q.LINES):V.isLineLoop?Tt.setMode(q.LINE_LOOP):Tt.setMode(q.LINE_STRIP)}else V.isPoints?Tt.setMode(q.POINTS):V.isSprite&&Tt.setMode(q.TRIANGLES);if(V.isBatchedMesh)Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Tt.renderInstances(It,Mt,V.count);else if(Y.isInstancedBufferGeometry){const et=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,sd=Math.min(Y.instanceCount,et);Tt.renderInstances(It,Mt,sd)}else Tt.render(It,Mt)};function st(A,N,Y){A.transparent===!0&&A.side===Xi&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Z(A,N,Y),A.side=qs,A.needsUpdate=!0,Z(A,N,Y),A.side=Xi):Z(A,N,Y)}this.compile=function(A,N,Y=null){Y===null&&(Y=A),m=Ie.get(Y),m.init(),v.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==Y&&A.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(y._useLegacyLights);const I=new Set;return A.traverse(function(V){const re=V.material;if(re)if(Array.isArray(re))for(let Te=0;Te<re.length;Te++){const Fe=re[Te];st(Fe,Y,V),I.add(Fe)}else st(re,Y,V),I.add(re)}),v.pop(),m=null,I},this.compileAsync=function(A,N,Y=null){const I=this.compile(A,N,Y);return new Promise(V=>{function re(){if(I.forEach(function(Te){Ve.get(Te).currentProgram.isReady()&&I.delete(Te)}),I.size===0){V(A);return}setTimeout(re,10)}Ee.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let gt=null;function Ue(A){gt&&gt(A)}function be(){fe.stop()}function Ne(){fe.start()}const fe=new FE;fe.setAnimationLoop(Ue),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(A){gt=A,ge.setAnimationLoop(A),A===null?fe.stop():fe.start()},ge.addEventListener("sessionstart",be),ge.addEventListener("sessionend",Ne),this.render=function(A,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(N),N=ge.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,N,E),m=Ie.get(A,v.length),m.init(),v.push(m),ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),F.setFromProjectionMatrix(ce),J=this.localClippingEnabled,$=Xe.init(this.clippingPlanes,J),g=pe.get(A,d.length),g.init(),d.push(g),Ye(A,N,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(U,B),this.info.render.frame++,$===!0&&Xe.beginShadows();const Y=m.state.shadowsArray;if(ie.render(Y,A,N),$===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(g,A),m.setupLights(y._useLegacyLights),N.isArrayCamera){const I=N.cameras;for(let V=0,re=I.length;V<re;V++){const Te=I[V];We(g,A,Te,Te.viewport)}}else We(g,A,N);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(y,A,N),Ze.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Ye(A,N,Y,I){if(A.visible===!1)return;if(A.layers.test(N.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(N);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){I&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const Te=oe.update(A),Fe=A.material;Fe.visible&&g.push(A,Te,Fe,Y,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){const Te=oe.update(A),Fe=A.material;if(I&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Me.copy(Te.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Fe)){const Re=Te.groups;for(let Be=0,Ke=Re.length;Be<Ke;Be++){const it=Re[Be],It=Fe[it.materialIndex];It&&It.visible&&g.push(A,Te,It,Y,Me.z,it)}}else Fe.visible&&g.push(A,Te,Fe,Y,Me.z,null)}}const re=A.children;for(let Te=0,Fe=re.length;Te<Fe;Te++)Ye(re[Te],N,Y,I)}function We(A,N,Y,I){const V=A.opaque,re=A.transmissive,Te=A.transparent;m.setupLightsView(Y),$===!0&&Xe.setGlobalState(y.clippingPlanes,Y),re.length>0&&Je(V,re,N,Y),I&&xe.viewport(M.copy(I)),V.length>0&&xt(V,N,Y),re.length>0&&xt(re,N,Y),Te.length>0&&xt(Te,N,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Je(A,N,Y,I){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const re=ke.isWebGL2;he===null&&(he=new er(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Rr:Bs,minFilter:tc,samples:re?4:0})),y.getDrawingBufferSize(we),re?he.setSize(we.x,we.y):he.setSize(sg(we.x),sg(we.y));const Te=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(te),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();const Fe=y.toneMapping;y.toneMapping=zs,xt(A,Y,I),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he);let Re=!1;for(let Be=0,Ke=N.length;Be<Ke;Be++){const it=N[Be],It=it.object,nn=it.geometry,Mt=it.material,Fn=it.group;if(Mt.side===Xi&&It.layers.test(I.layers)){const Tt=Mt.side;Mt.side=Zn,Mt.needsUpdate=!0,ot(It,Y,I,nn,Mt,Fn),Mt.side=Tt,Mt.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he)),y.setRenderTarget(Te),y.setClearColor(te,L),y.toneMapping=Fe}function xt(A,N,Y){const I=N.isScene===!0?N.overrideMaterial:null;for(let V=0,re=A.length;V<re;V++){const Te=A[V],Fe=Te.object,Re=Te.geometry,Be=I===null?Te.material:I,Ke=Te.group;Fe.layers.test(Y.layers)&&ot(Fe,N,Y,Re,Be,Ke)}}function ot(A,N,Y,I,V,re){A.onBeforeRender(y,N,Y,I,V,re),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(y,N,Y,I,A,re),V.transparent===!0&&V.side===Xi&&V.forceSinglePass===!1?(V.side=Zn,V.needsUpdate=!0,y.renderBufferDirect(Y,N,I,V,A,re),V.side=qs,V.needsUpdate=!0,y.renderBufferDirect(Y,N,I,V,A,re),V.side=Xi):y.renderBufferDirect(Y,N,I,V,A,re),A.onAfterRender(y,N,Y,I,V,re)}function Z(A,N,Y){N.isScene!==!0&&(N=He);const I=Ve.get(A),V=m.state.lights,re=m.state.shadowsArray,Te=V.state.version,Fe=Se.getParameters(A,V.state,re,N,Y),Re=Se.getProgramCacheKey(Fe);let Be=I.programs;I.environment=A.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(A.isMeshStandardMaterial?G:C).get(A.envMap||I.environment),Be===void 0&&(A.addEventListener("dispose",me),Be=new Map,I.programs=Be);let Ke=Be.get(Re);if(Ke!==void 0){if(I.currentProgram===Ke&&I.lightsStateVersion===Te)return K(A,Fe),Ke}else Fe.uniforms=Se.getUniforms(A),A.onBuild(Y,Fe,y),A.onBeforeCompile(Fe,y),Ke=Se.acquireProgram(Fe,Re),Be.set(Re,Ke),I.uniforms=Fe.uniforms;const it=I.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(it.clippingPlanes=Xe.uniform),K(A,Fe),I.needsLights=at(A),I.lightsStateVersion=Te,I.needsLights&&(it.ambientLightColor.value=V.state.ambient,it.lightProbe.value=V.state.probe,it.directionalLights.value=V.state.directional,it.directionalLightShadows.value=V.state.directionalShadow,it.spotLights.value=V.state.spot,it.spotLightShadows.value=V.state.spotShadow,it.rectAreaLights.value=V.state.rectArea,it.ltc_1.value=V.state.rectAreaLTC1,it.ltc_2.value=V.state.rectAreaLTC2,it.pointLights.value=V.state.point,it.pointLightShadows.value=V.state.pointShadow,it.hemisphereLights.value=V.state.hemi,it.directionalShadowMap.value=V.state.directionalShadowMap,it.directionalShadowMatrix.value=V.state.directionalShadowMatrix,it.spotShadowMap.value=V.state.spotShadowMap,it.spotLightMatrix.value=V.state.spotLightMatrix,it.spotLightMap.value=V.state.spotLightMap,it.pointShadowMap.value=V.state.pointShadowMap,it.pointShadowMatrix.value=V.state.pointShadowMatrix),I.currentProgram=Ke,I.uniformsList=null,Ke}function Ae(A){if(A.uniformsList===null){const N=A.currentProgram.getUniforms();A.uniformsList=Hf.seqWithValue(N.seq,A.uniforms)}return A.uniformsList}function K(A,N){const Y=Ve.get(A);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function qe(A,N,Y,I,V){N.isScene!==!0&&(N=He),R.resetTextureUnits();const re=N.fog,Te=I.isMeshStandardMaterial?N.environment:null,Fe=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:is,Re=(I.isMeshStandardMaterial?G:C).get(I.envMap||Te),Be=I.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ke=!!Y.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),it=!!Y.morphAttributes.position,It=!!Y.morphAttributes.normal,nn=!!Y.morphAttributes.color;let Mt=zs;I.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const Fn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Tt=Fn!==void 0?Fn.length:0,et=Ve.get(I),sd=m.state.lights;if($===!0&&(J===!0||A!==S)){const Oi=A===S&&I.id===P;Xe.setState(I,A,Oi)}let Xt=!1;I.version===et.__version?(et.needsLights&&et.lightsStateVersion!==sd.state.version||et.outputColorSpace!==Fe||V.isBatchedMesh&&et.batching===!1||!V.isBatchedMesh&&et.batching===!0||V.isInstancedMesh&&et.instancing===!1||!V.isInstancedMesh&&et.instancing===!0||V.isSkinnedMesh&&et.skinning===!1||!V.isSkinnedMesh&&et.skinning===!0||V.isInstancedMesh&&et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&et.instancingColor===!1&&V.instanceColor!==null||et.envMap!==Re||I.fog===!0&&et.fog!==re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Xe.numPlanes||et.numIntersection!==Xe.numIntersection)||et.vertexAlphas!==Be||et.vertexTangents!==Ke||et.morphTargets!==it||et.morphNormals!==It||et.morphColors!==nn||et.toneMapping!==Mt||ke.isWebGL2===!0&&et.morphTargetsCount!==Tt)&&(Xt=!0):(Xt=!0,et.__version=I.version);let Js=et.currentProgram;Xt===!0&&(Js=Z(I,N,V));let V_=!1,Tl=!1,od=!1;const wn=Js.getUniforms(),eo=et.uniforms;if(xe.useProgram(Js.program)&&(V_=!0,Tl=!0,od=!0),I.id!==P&&(P=I.id,Tl=!0),V_||S!==A){wn.setValue(q,"projectionMatrix",A.projectionMatrix),wn.setValue(q,"viewMatrix",A.matrixWorldInverse);const Oi=wn.map.cameraPosition;Oi!==void 0&&Oi.setValue(q,Me.setFromMatrixPosition(A.matrixWorld)),ke.logarithmicDepthBuffer&&wn.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&wn.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Tl=!0,od=!0)}if(V.isSkinnedMesh){wn.setOptional(q,V,"bindMatrix"),wn.setOptional(q,V,"bindMatrixInverse");const Oi=V.skeleton;Oi&&(ke.floatVertexTextures?(Oi.boneTexture===null&&Oi.computeBoneTexture(),wn.setValue(q,"boneTexture",Oi.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(wn.setOptional(q,V,"batchingTexture"),wn.setValue(q,"batchingTexture",V._matricesTexture,R));const ad=Y.morphAttributes;if((ad.position!==void 0||ad.normal!==void 0||ad.color!==void 0&&ke.isWebGL2===!0)&&Oe.update(V,Y,Js),(Tl||et.receiveShadow!==V.receiveShadow)&&(et.receiveShadow=V.receiveShadow,wn.setValue(q,"receiveShadow",V.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(eo.envMap.value=Re,eo.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Tl&&(wn.setValue(q,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&_e(eo,od),re&&I.fog===!0&&ve.refreshFogUniforms(eo,re),ve.refreshMaterialUniforms(eo,I,X,W,he),Hf.upload(q,Ae(et),eo,R)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Hf.upload(q,Ae(et),eo,R),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&wn.setValue(q,"center",V.center),wn.setValue(q,"modelViewMatrix",V.modelViewMatrix),wn.setValue(q,"normalMatrix",V.normalMatrix),wn.setValue(q,"modelMatrix",V.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Oi=I.uniformsGroups;for(let ld=0,QE=Oi.length;ld<QE;ld++)if(ke.isWebGL2){const G_=Oi[ld];tt.update(G_,Js),tt.bind(G_,Js)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Js}function _e(A,N){A.ambientLightColor.needsUpdate=N,A.lightProbe.needsUpdate=N,A.directionalLights.needsUpdate=N,A.directionalLightShadows.needsUpdate=N,A.pointLights.needsUpdate=N,A.pointLightShadows.needsUpdate=N,A.spotLights.needsUpdate=N,A.spotLightShadows.needsUpdate=N,A.rectAreaLights.needsUpdate=N,A.hemisphereLights.needsUpdate=N}function at(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,N,Y){Ve.get(A.texture).__webglTexture=N,Ve.get(A.depthTexture).__webglTexture=Y;const I=Ve.get(A);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=Y===void 0,I.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,N){const Y=Ve.get(A);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(A,N=0,Y=0){E=A,w=N,T=Y;let I=!0,V=null,re=!1,Te=!1;if(A){const Re=Ve.get(A);Re.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(q.FRAMEBUFFER,null),I=!1):Re.__webglFramebuffer===void 0?R.setupRenderTarget(A):Re.__hasExternalTextures&&R.rebindTextures(A,Ve.get(A.texture).__webglTexture,Ve.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Te=!0);const Ke=Ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[N])?V=Ke[N][Y]:V=Ke[N],re=!0):ke.isWebGL2&&A.samples>0&&R.useMultisampledRTT(A)===!1?V=Ve.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?V=Ke[Y]:V=Ke,M.copy(A.viewport),k.copy(A.scissor),O=A.scissorTest}else M.copy(b).multiplyScalar(X).floor(),k.copy(ee).multiplyScalar(X).floor(),O=Q;if(xe.bindFramebuffer(q.FRAMEBUFFER,V)&&ke.drawBuffers&&I&&xe.drawBuffers(A,V),xe.viewport(M),xe.scissor(k),xe.setScissorTest(O),re){const Re=Ve.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,Y)}else if(Te){const Re=Ve.get(A.texture),Be=N||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,Be)}P=-1},this.readRenderTargetPixels=function(A,N,Y,I,V,re,Te){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Fe=Fe[Te]),Fe){xe.bindFramebuffer(q.FRAMEBUFFER,Fe);try{const Re=A.texture,Be=Re.format,Ke=Re.type;if(Be!==ji&&ae.convert(Be)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=Ke===Rr&&(Ee.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ke!==Bs&&ae.convert(Ke)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ke===Cs&&(ke.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=A.width-I&&Y>=0&&Y<=A.height-V&&q.readPixels(N,Y,I,V,ae.convert(Be),ae.convert(Ke),re)}finally{const Re=E!==null?Ve.get(E).__webglFramebuffer:null;xe.bindFramebuffer(q.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,N,Y=0){const I=Math.pow(2,-Y),V=Math.floor(N.image.width*I),re=Math.floor(N.image.height*I);R.setTexture2D(N,0),q.copyTexSubImage2D(q.TEXTURE_2D,Y,0,0,A.x,A.y,V,re),xe.unbindTexture()},this.copyTextureToTexture=function(A,N,Y,I=0){const V=N.image.width,re=N.image.height,Te=ae.convert(Y.format),Fe=ae.convert(Y.type);R.setTexture2D(Y,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment),N.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,I,A.x,A.y,V,re,Te,Fe,N.image.data):N.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,I,A.x,A.y,N.mipmaps[0].width,N.mipmaps[0].height,Te,N.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,I,A.x,A.y,Te,Fe,N.image),I===0&&Y.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(A,N,Y,I,V=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const re=A.max.x-A.min.x+1,Te=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,Re=ae.convert(I.format),Be=ae.convert(I.type);let Ke;if(I.isData3DTexture)R.setTexture3D(I,0),Ke=q.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)R.setTexture2DArray(I,0),Ke=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,I.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,I.unpackAlignment);const it=q.getParameter(q.UNPACK_ROW_LENGTH),It=q.getParameter(q.UNPACK_IMAGE_HEIGHT),nn=q.getParameter(q.UNPACK_SKIP_PIXELS),Mt=q.getParameter(q.UNPACK_SKIP_ROWS),Fn=q.getParameter(q.UNPACK_SKIP_IMAGES),Tt=Y.isCompressedTexture?Y.mipmaps[V]:Y.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Tt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,A.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,A.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,A.min.z),Y.isDataTexture||Y.isData3DTexture?q.texSubImage3D(Ke,V,N.x,N.y,N.z,re,Te,Fe,Re,Be,Tt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ke,V,N.x,N.y,N.z,re,Te,Fe,Re,Tt.data)):q.texSubImage3D(Ke,V,N.x,N.y,N.z,re,Te,Fe,Re,Be,Tt),q.pixelStorei(q.UNPACK_ROW_LENGTH,it),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,It),q.pixelStorei(q.UNPACK_SKIP_PIXELS,nn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Mt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Fn),V===0&&I.generateMipmaps&&q.generateMipmap(Ke),xe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,xe.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===O_?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===td?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yn?Io:wE}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Io?yn:is}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class JD extends XE{}JD.prototype.isWebGL1Renderer=!0;class eU extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class tU{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ng,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new H;class Dh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ag extends qo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _a;const Hl=new H,va=new H,ya=new H,xa=new $e,Vl=new $e,YE=new qt,df=new H,Gl=new H,pf=new H,ox=new $e,Ap=new $e,ax=new $e;class lx extends Nn{constructor(e=new ag){if(super(),this.isSprite=!0,this.type="Sprite",_a===void 0){_a=new mn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new tU(t,5);_a.setIndex([0,1,2,0,2,3]),_a.setAttribute("position",new Dh(i,3,0,!1)),_a.setAttribute("uv",new Dh(i,2,3,!1))}this.geometry=_a,this.material=e,this.center=new $e(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),va.setFromMatrixScale(this.matrixWorld),YE.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ya.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&va.multiplyScalar(-ya.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;mf(df.set(-.5,-.5,0),ya,o,va,r,s),mf(Gl.set(.5,-.5,0),ya,o,va,r,s),mf(pf.set(.5,.5,0),ya,o,va,r,s),ox.set(0,0),Ap.set(1,0),ax.set(1,1);let a=e.ray.intersectTriangle(df,Gl,pf,!1,Hl);if(a===null&&(mf(Gl.set(-.5,.5,0),ya,o,va,r,s),Ap.set(0,1),a=e.ray.intersectTriangle(df,pf,Gl,!1,Hl),a===null))return;const l=e.ray.origin.distanceTo(Hl);l<e.near||l>e.far||t.push({distance:l,point:Hl.clone(),uv:Wi.getInterpolation(Hl,df,Gl,pf,ox,Ap,ax,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mf(n,e,t,i,r,s){xa.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Vl.x=s*xa.x-r*xa.y,Vl.y=r*xa.x+s*xa.y):Vl.copy(xa),n.copy(e),n.x+=Vl.x,n.y+=Vl.y,n.applyMatrix4(YE)}class ru extends qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ux=new qt,lg=new F_,gf=new nd,_f=new H;class Sa extends Nn{constructor(e=new mn,t=new ru){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gf.copy(i.boundingSphere),gf.applyMatrix4(r),gf.radius+=s,e.ray.intersectsSphere(gf)===!1)return;ux.copy(r).invert(),lg.copy(e.ray).applyMatrix4(ux);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p;_<g;_++){const m=u.getX(_);_f.fromBufferAttribute(h,m),cx(_f,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p;_<g;_++)_f.fromBufferAttribute(h,_),cx(_f,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function cx(n,e,t,i,r,s,o){const a=lg.distanceSqToPoint(n);if(a<t){const l=new H;lg.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class vf extends pi{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cu extends mn{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let h=e;const f=(t-e)/r,p=new H,_=new $e;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,c.push(_.x,_.y)}h+=f}for(let g=0;g<r;g++){const m=g*(i+1);for(let d=0;d<i;d++){const v=d+m,y=v,x=v+i+1,w=v+i+2,T=v+1;a.push(y,x,T),a.push(x,w,T)}}this.setIndex(a),this.setAttribute("position",new Qn(l,3)),this.setAttribute("normal",new Qn(u,3)),this.setAttribute("uv",new Qn(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ms extends mn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new H,f=new H,p=[],_=[],g=[],m=[];for(let d=0;d<=i;d++){const v=[],y=d/i;let x=0;d===0&&o===0?x=.5/t:d===i&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(T+x,1-y),v.push(u++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const y=c[d][v+1],x=c[d][v],w=c[d+1][v],T=c[d+1][v+1];(d!==0||o>0)&&p.push(y,x,T),(d!==i-1||l<Math.PI)&&p.push(x,w,T)}this.setIndex(p),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(g,3)),this.setAttribute("uv",new Qn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yf extends qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TE,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jE extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Cp=new qt,fx=new H,hx=new H;class nU{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new z_,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fx.setFromMatrixPosition(e.matrixWorld),t.position.copy(fx),hx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hx),t.updateMatrixWorld(),Cp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dx=new qt,Wl=new H,bp=new H;class iU extends nU{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wl.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wl),bp.copy(i.position),bp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bp),i.updateMatrixWorld(),r.makeTranslation(-Wl.x,-Wl.y,-Wl.z),dx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dx)}}class rU extends jE{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new iU}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sU extends jE{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=px(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=px();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function px(){return(typeof performance>"u"?Date:performance).now()}class oU{constructor(e,t,i=0,r=1/0){this.ray=new F_(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new k_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ug(e,this,i,t),i.sort(mx),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ug(e[r],this,i,t);return i.sort(mx),i}}function mx(n,e){return n.distance-e.distance}function ug(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)ug(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:I_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=I_);const $E={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class hc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aU=new kE(-1,1,1,-1,0,1);class lU extends mn{constructor(){super(),this.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qn([0,2,0,0,2,0],2))}}const uU=new lU;class KE{constructor(e){this._mesh=new dn(uU,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aU)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ZE extends hc{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof $n?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lh.clone(e.uniforms),this.material=new $n({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new KE(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class gx extends hc{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class cU extends hc{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fU{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new $e);this._width=i.width,this._height=i.height,t=new er(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ZE($E),this.copyPass.material.blending=Kr,this.clock=new qE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}gx!==void 0&&(o instanceof gx?i=!0:o instanceof cU&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hU extends hc{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new nt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const dU={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new nt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class yl extends hc{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new er(s,o,{type:Rr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new er(s,o,{type:Rr});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new er(s,o,{type:Rr});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=dU;this.highPassUniforms=Lh.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $n({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new $e(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=$E;this.copyUniforms=Lh.clone(c.uniforms),this.blendMaterial=new $n({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:zi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new nt,this.oldClearAlpha=1,this.basic=new vs,this.fsQuad=new KE(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new $e(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=yl.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=yl.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new $n({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new $n({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}yl.BlurDirectionX=new $e(1,0);yl.BlurDirectionY=new $e(0,1);cr.registerPlugin(rt);function pU(){const n=No.useRef(null);return No.useEffect(()=>{const e=n.current;if(!e)return;function t(){const Z=document.createElement("canvas");Z.width=64,Z.height=64;const Ae=Z.getContext("2d"),K=Ae.createRadialGradient(32,32,0,32,32,32);K.addColorStop(0,"rgba(255, 255, 255, 1.0)"),K.addColorStop(.2,"rgba(255, 235, 170, 0.95)"),K.addColorStop(.5,"rgba(255, 130, 30, 0.5)"),K.addColorStop(.8,"rgba(220, 50, 0, 0.15)"),K.addColorStop(1,"rgba(0, 0, 0, 0)"),Ae.fillStyle=K,Ae.beginPath(),Ae.arc(32,32,32,0,Math.PI*2),Ae.fill();const qe=new vf(Z);return qe.generateMipmaps=!1,qe.minFilter=ii,qe.magFilter=ii,qe.needsUpdate=!0,qe}const i=t(),r=7,s=new H(r,0,0),o=new eU,a=new Ei(45,window.innerWidth/window.innerHeight,.1,1e3),l=new XE({canvas:e,antialias:!1,alpha:!0,stencil:!1,powerPreference:"high-performance"});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,1)),l.toneMapping=mE,l.toneMappingExposure=1.2,l.setClearColor(0,0);const u=new er(window.innerWidth,window.innerHeight,{type:Rr,format:ji}),c=new fU(l,u);c.addPass(new hU(o,a));const h=new yl(new $e(window.innerWidth/2,window.innerHeight/2),.7,.35,.15);c.addPass(h);const f={uniforms:{tDiffuse:{value:null},bhPos:{value:new $e(.5,.5)},uLensFade:{value:1},strength:{value:18e-5}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform vec2 bhPos;
        uniform float strength;
        uniform float uLensFade;
        varying vec2 vUv;

        void main() {
          vec2 dir = vUv - bhPos;
          // Compensate for aspect ratio roughly if needed, assuming 16:9 for distance
          dir.x *= 1.77; 
          float dist = length(dir);
          vec2 warpedUv = vUv;
          
          float eh = 0.085; // Small pure-black dot, a touch bigger than reference
          
          // Inverse square falloff for gravitational warping (outside only)
          float warp = strength / (dist * dist + 0.001);
          warp = clamp(warp, 0.0, 0.05); // strict clamp to prevent tearing

          // Tight warp bubble: distortion hugs the hole instead of bending
          // half the screen. (Black disc stays matched to the mesh — it must
          // cover the geometry face or bloom bleeds grey back in.)
          float edgeFade = smoothstep(0.15, 0.055, dist);
          warp *= edgeFade;

          // Warp towards the black hole
          vec2 trueDir = vUv - bhPos;
          warpedUv -= normalize(trueDir + vec2(1e-5)) * warp * uLensFade;

          vec4 warped = texture2D(tDiffuse, warpedUv);
          // Soft-edged void: covers bloom bleed; feathered wider so the very
          // edge is a touch more transparent/accurate, not a hard cutout.
          float disc = (1.0 - smoothstep(eh * 0.78, eh * 1.06, dist)) * uLensFade;
          gl_FragColor = mix(warped, vec4(0.0, 0.0, 0.0, 1.0), disc);
        }
      `},p=new ZE(f);c.addPass(p);const _=new dn(new ms(1.65,64,64),new vs({color:0}));_.position.copy(s),_.scale.setScalar(1.1),o.add(_);const g=18e3,m=new mn,d=new Float32Array(g*3),v=new Float32Array(g*3),y=new Float32Array(g),x=new Float32Array(g),w=new Float32Array(g),T=new nt(16775406),E=new nt(16737792),P=new nt(7798784),S=new nt;for(let Z=0;Z<g;Z++){const Ae=Math.pow(Math.random(),2),K=1.85+Ae*10;x[Z]=K,w[Z]=.007/Math.sqrt(K);const qe=Math.random()*Math.PI*2;y[Z]=qe,d[Z*3]=r+Math.cos(qe)*K,d[Z*3+1]=(Math.random()-.5)*(.15+Ae*.3),d[Z*3+2]=Math.sin(qe)*K,S.lerpColors(T,E,Math.min(1,K/8)),S.lerp(P,Math.max(0,(K-8)/20)),S.toArray(v,Z*3)}m.setAttribute("position",new Nt(d,3)),m.setAttribute("customColor",new Nt(v,3)),m.setAttribute("angle",new Nt(y,1)),m.setAttribute("radius",new Nt(x,1)),m.setAttribute("speed",new Nt(w,1));const M={uTime:{value:0},uSpeed:{value:1},uIgnite:{value:.25},uFade:{value:1},uAnchor:{value:new H(r,0,0)},uMouseTarget:{value:new H(9999,0,9999)},uHoverStrength:{value:0}},k=new $n({uniforms:M,vertexShader:`
        uniform float uTime;
        uniform float uSpeed;
        uniform float uIgnite;
        uniform vec3 uAnchor;
        uniform vec3 uMouseTarget;
        uniform float uHoverStrength;
        
        attribute float angle;
        attribute float radius;
        attribute float speed;
        attribute vec3 customColor;
        
        varying vec3 vColor;
        varying float vRadius;

        void main() {
          vColor = customColor;
          
          float currentAngle = angle - speed * uTime * 60.0 * uSpeed;
          
          float bx = uAnchor.x + cos(currentAngle) * radius;
          float bz = sin(currentAngle) * radius;
          
          // Cinematic ripple: concentric waves traveling OUTWARD from the hole,
          // like ripples on water — smooth phase in radius, gentle angular
          // breathing so it stays organic, never lumpy or sloshing.
          float ripplePhase = radius * 2.0 - uTime * 2.4;
          float spiralWave = sin(ripplePhase + currentAngle * 1.0) * 0.42;
          float radialWave = sin(ripplePhase * 0.9 + 1.2) * 0.12;
          float brightnessWave = sin(ripplePhase + currentAngle * 1.0 + 0.6) * 0.20;
          vRadius = radius;
          // Relativistic-beaming look (EHT-style): one side of the ring burns
          // brighter as particles orbit through a fixed bright sector, plus a
          // hot rim hugging the shadow so infalling light wraps the dot.
          // Both scale with uIgnite: calm ember at load, full ring at top.
          // The whole disk also breathes with ignition so the opening frame
          // is genuinely dim, not just less boosted.
          float beam = 1.0 + (0.55 * uIgnite) * cos(currentAngle - 2.2);
          float inner = exp(-max(radius - 2.0, 0.0) / 1.8);
          vColor = customColor * (1.0 + brightnessWave * 0.35) * beam * (1.0 + inner * (0.15 + 0.95 * uIgnite)) * mix(0.5, 1.1, uIgnite);
          
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
          
           vec3 pos = vec3(bx + rx + cos(currentAngle) * radialWave, spiralWave + ry, bz + rz + sin(currentAngle) * radialWave);
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          
           gl_PointSize = (64.0 * (1.0 + sin(angle * 5.0)*0.25)) / -mvPosition.z;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vRadius;
        uniform float uFade;
        void main() {
          // Soft radial falloff so points read as plasma waves, not grains.
          vec2 coord = gl_PointCoord - vec2(0.5);
          float d = length(coord);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.05, d);
          // Dome: present like the reference, but airy — far-field fades so
          // it reads translucent instead of a solid red wall.
          float far = 1.0 - smoothstep(8.0, 15.0, vRadius);
          gl_FragColor = vec4(vColor * a, a * 0.9 * (0.6 + 0.4 * far) * uFade);
        }
      `,transparent:!0,blending:zi,depthWrite:!1}),O=new Sa(m,k);o.add(O);const te=2e3,L=new mn,z=new Float32Array(te*3),W=new Float32Array(te);for(let Z=0;Z<te;Z++)z[Z*3]=-14+Math.random()*(r-3+14),z[Z*3+1]=(Math.random()-.5)*14,z[Z*3+2]=Math.random()*10,W[Z]=Math.random();L.setAttribute("position",new Nt(z,3)),L.setAttribute("seed",new Nt(W,1));const X={uTime:M.uTime,uFade:M.uFade,uCenter:{value:new H(r,0,0)}},U=new $n({uniforms:X,vertexShader:`
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
        uniform float uFade;
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
          gl_FragColor = vec4(col * a, a * fade * 0.85 * uFade);
        }
      `,transparent:!0,blending:zi,depthWrite:!1}),B=new Sa(L,U);o.add(B);const b=300,ee=new mn,Q=new Float32Array(b*3),F=new Float32Array(b*3);for(let Z=0;Z<b;Z++)Q[Z*3]=r+(Math.random()-.5)*60,Q[Z*3+1]=(Math.random()-.5)*50,Q[Z*3+2]=Math.random()*30+5;ee.setAttribute("position",new Nt(Q,3));const $=new Sa(ee,new ru({color:16764040,size:.1,map:i,transparent:!0,opacity:.4,blending:zi,depthWrite:!1}));o.add($);function J(Z){const Ae=document.createElement("canvas");Ae.width=512,Ae.height=256;const K=Ae.getContext("2d");if(Z==="lava"){K.fillStyle="#140e0b",K.fillRect(0,0,512,256);for(let _e=0;_e<350;_e++)K.fillStyle=Math.random()>.5?"#1f1510":"#0a0806",K.fillRect(Math.random()*512,Math.random()*256,4+Math.random()*8,4+Math.random()*8);K.lineWidth=2.4;for(let _e=0;_e<24;_e++){K.strokeStyle=_e%3===0?"#ff3800":_e%3===1?"#ff7300":"#ffa200",K.shadowColor="#ff2000",K.shadowBlur=8,K.beginPath();let at=Math.random()*512,A=15+Math.random()*226;K.moveTo(at,A);for(let N=0;N<7;N++)at+=(Math.random()-.5)*70,A+=(Math.random()-.5)*35,K.lineTo(at,A);K.stroke()}}else if(Z==="habitable"){const _e=K.createLinearGradient(0,0,0,256);_e.addColorStop(0,"#061730"),_e.addColorStop(.5,"#0b2f5c"),_e.addColorStop(1,"#051429"),K.fillStyle=_e,K.fillRect(0,0,512,256),K.fillStyle="#1b4d2e";for(let at=0;at<18;at++){K.beginPath();const A=Math.random()*512,N=40+Math.random()*176;K.arc(A,N,20+Math.random()*38,0,Math.PI*2),K.fill()}K.fillStyle="rgba(28, 120, 130, 0.4)";for(let at=0;at<18;at++){K.beginPath();const A=Math.random()*512,N=40+Math.random()*176;K.arc(A,N,28+Math.random()*45,0,Math.PI*2),K.fill()}K.fillStyle="rgba(255, 255, 255, 0.38)";for(let at=0;at<12;at++){K.beginPath();const A=35+Math.random()*186;K.ellipse(256,A,256,8+Math.random()*16,(Math.random()-.5)*.1,0,Math.PI*2),K.fill()}}else if(Z==="ocean"){const _e=K.createLinearGradient(0,0,0,256);_e.addColorStop(0,"#030914"),_e.addColorStop(.5,"#071b38"),_e.addColorStop(1,"#030a17"),K.fillStyle=_e,K.fillRect(0,0,512,256),K.fillStyle="rgba(0, 220, 255, 0.35)",K.shadowColor="#00f0ff",K.shadowBlur=10;for(let at=0;at<38;at++)K.beginPath(),K.arc(Math.random()*512,30+Math.random()*196,3+Math.random()*13,0,Math.PI*2),K.fill();K.fillStyle="rgba(0, 255, 180, 0.2)",K.fillRect(0,0,512,35),K.fillRect(0,221,512,35)}else if(Z==="gas_giant"){const _e=K.createLinearGradient(0,0,0,256);_e.addColorStop(0,"#2d180c"),_e.addColorStop(.12,"#5e3518"),_e.addColorStop(.24,"#24140a"),_e.addColorStop(.38,"#94582b"),_e.addColorStop(.5,"#4a2812"),_e.addColorStop(.64,"#7a4520"),_e.addColorStop(.78,"#331b0e"),_e.addColorStop(.9,"#593217"),_e.addColorStop(1,"#1a0d06"),K.fillStyle=_e,K.fillRect(0,0,512,256),K.fillStyle="#1c0c05",K.shadowColor="#000000",K.shadowBlur=8,K.beginPath(),K.ellipse(330,150,48,22,.04,0,Math.PI*2),K.fill(),K.strokeStyle="#b87038",K.lineWidth=2,K.stroke()}else if(Z==="ice_giant"){const _e=K.createLinearGradient(0,0,0,256);_e.addColorStop(0,"#0c1a2e"),_e.addColorStop(.3,"#21476b"),_e.addColorStop(.5,"#153352"),_e.addColorStop(.7,"#2b5880"),_e.addColorStop(1,"#0a1626"),K.fillStyle=_e,K.fillRect(0,0,512,256),K.fillStyle="rgba(160, 225, 255, 0.18)",K.fillRect(0,0,512,45),K.fillRect(0,211,512,45)}else if(Z==="shattered"){K.fillStyle="#15171d",K.fillRect(0,0,512,256),K.fillStyle="#0e1014";for(let _e=0;_e<45;_e++)K.beginPath(),K.arc(Math.random()*512,Math.random()*256,3+Math.random()*16,0,Math.PI*2),K.fill();K.strokeStyle="#323745",K.lineWidth=1.5;for(let _e=0;_e<15;_e++)K.beginPath(),K.moveTo(Math.random()*512,Math.random()*256),K.lineTo(Math.random()*512,Math.random()*256),K.stroke()}const qe=new vf(Ae);return qe.wrapS=Th,qe.wrapT=Yi,qe}function he(){const Z=document.createElement("canvas");Z.width=256,Z.height=1;const Ae=Z.getContext("2d"),K=Ae.createLinearGradient(0,0,256,0);return K.addColorStop(0,"rgba(140, 105, 75, 0.0)"),K.addColorStop(.12,"rgba(190, 150, 110, 0.85)"),K.addColorStop(.44,"rgba(160, 125, 90, 0.7)"),K.addColorStop(.48,"rgba(0, 0, 0, 0.05)"),K.addColorStop(.54,"rgba(0, 0, 0, 0.05)"),K.addColorStop(.65,"rgba(145, 115, 80, 0.65)"),K.addColorStop(.88,"rgba(120, 95, 65, 0.35)"),K.addColorStop(1,"rgba(80, 60, 40, 0.0)"),Ae.fillStyle=K,Ae.fillRect(0,0,256,1),new vf(Z)}function ce(){const Z=document.createElement("canvas");Z.width=256,Z.height=1;const Ae=Z.getContext("2d"),K=Ae.createLinearGradient(0,0,256,0);return K.addColorStop(0,"rgba(100, 190, 230, 0.0)"),K.addColorStop(.3,"rgba(140, 215, 255, 0.6)"),K.addColorStop(.7,"rgba(120, 200, 240, 0.5)"),K.addColorStop(1,"rgba(80, 160, 200, 0.0)"),Ae.fillStyle=K,Ae.fillRect(0,0,256,1),new vf(Z)}const we=new H(r,0,0),Me=new iu;Me.visible=!1,o.add(Me);const He=new rU(14676223,6,110,1.2);He.position.copy(we),Me.add(He);const Qe=new sU(660516,.4);Me.add(Qe);const q=new dn(new ms(2.1,32,32),new vs({color:15923455}));q.position.copy(we),Me.add(q);const je=new lx(new ag({map:i,color:5089023,transparent:!0,opacity:.85,blending:zi,depthWrite:!1}));je.position.copy(we),je.scale.setScalar(12),Me.add(je);const Ee=new lx(new ag({map:i,color:16777215,transparent:!0,opacity:.9,blending:zi,depthWrite:!1}));Ee.position.copy(we),Ee.scale.setScalar(6.5),Me.add(Ee);const ke=[{name:"PYROCLAST-9",type:"CHTHONIAN LAVA WORLD",desc:"Tidally locked • 1,420 K • Active magma rifts",texType:"lava",size:.65,dist:4.8,inc:.14,speed:.48,roughness:.75,metalness:.25,emissiveColor:16726784,emissiveIntensity:.2},{name:"AURELIA PRIME",type:"HABITABLE SUPER-EARTH",desc:"1.24 R⊕ • N2-O2 atmosphere • 288 K",texType:"habitable",size:.98,dist:7.2,inc:.02,speed:.36,roughness:.45,metalness:.1,atmoColor:5089023,moon:{size:.22,dist:1.65,speed:2.4,color:11057356}},{name:"THALASSA-IV",type:"ABYSSAL OCEAN WORLD",desc:"Deep marine mantle • Bioluminescent trenches",texType:"ocean",size:.86,dist:9.8,inc:.065,speed:.28,roughness:.3,metalness:.3,emissiveColor:54015,emissiveIntensity:.14,atmoColor:57855},{name:"ZEPHYRUS HYPERION",type:"STRATIFIED GAS GIANT",desc:"4.8 MJ • Great Dark Vortex • Dual ring system",texType:"gas_giant",size:2.25,dist:13.8,inc:.038,speed:.18,roughness:.5,metalness:.1,ring:!0,atmoColor:14596231,moon:{size:.26,dist:3.4,speed:1.6,color:12890777}},{name:"VALKYRIE-7",type:"CRYOGENIC ICE GIANT",desc:"Methane upper clouds • Perpendicular dust ring",texType:"ice_giant",size:1.35,dist:18.2,inc:.075,speed:.12,roughness:.4,metalness:.1,polarRing:!0,atmoColor:8119551},{name:"OBLIVION CORE",type:"SHATTERED PROTO-PLANET",desc:"Iron-silicate core remnant • Micro-debris swarm",texType:"shattered",size:.76,dist:22,inc:.045,speed:.08,roughness:.9,metalness:.45,hasDebris:!0}],xe=[];let j=null,Ve=Math.random()*Math.PI*2,R=null,C=Math.random()*Math.PI*2;for(const Z of ke){const Ae=J(Z.texType),K=new dn(new ms(Z.size,32,32),new yf({map:Ae,roughness:Z.roughness,metalness:Z.metalness,emissive:Z.emissiveColor?new nt(Z.emissiveColor):new nt(0),emissiveIntensity:Z.emissiveIntensity||0}));if(K.userData.name=Z.name,K.userData.type=Z.type,K.userData.desc=Z.desc,K.userData.size=Z.size,Z.atmoColor){const at=new dn(new ms(Z.size*1.035,32,32),new vs({color:Z.atmoColor,transparent:!0,opacity:.28,side:Zn,blending:zi,depthWrite:!1}));K.add(at)}if(Z.ring){const at=he(),A=new dn(new Cu(Z.size*1.35,Z.size*2.55,64),new yf({map:at,side:Xi,transparent:!0,opacity:.92,roughness:.6,metalness:.1}));A.rotation.x=Math.PI/2+.38,A.rotation.z=.22,K.add(A)}if(Z.polarRing){const at=ce(),A=new dn(new Cu(Z.size*1.3,Z.size*2.1,64),new vs({map:at,side:Xi,transparent:!0,opacity:.65,blending:zi}));A.rotation.y=Math.PI/2+.2,A.rotation.z=.15,K.add(A)}if(Z.hasDebris){const A=new mn,N=new Float32Array(140*3);for(let I=0;I<140;I++){const V=Z.size*1.4+Math.random()*(Z.size*1.1),re=Math.random()*Math.PI*2;N[I*3]=Math.cos(re)*V,N[I*3+1]=(Math.random()-.5)*.4,N[I*3+2]=Math.sin(re)*V}A.setAttribute("position",new Nt(N,3));const Y=new Sa(A,new ru({size:.1,color:8952760,transparent:!0,opacity:.75}));K.add(Y)}const qe=Math.random()*Math.PI*2;K.position.set(we.x+Math.cos(qe)*Z.dist,we.y+Math.sin(qe)*Z.dist*Math.sin(Z.inc),we.z+Math.sin(qe)*Z.dist*Math.cos(Z.inc)),Me.add(K),xe.push({...Z,mesh:K,angle:qe}),Z.name==="AURELIA PRIME"?(j=new dn(new ms(Z.moon.size,16,16),new yf({color:Z.moon.color,roughness:.7})),Me.add(j)):Z.name==="ZEPHYRUS HYPERION"&&(R=new dn(new ms(Z.moon.size,16,16),new yf({color:Z.moon.color,roughness:.7})),Me.add(R));const _e=new dn(new Cu(Z.dist-.02,Z.dist+.02,128),new vs({color:4026531,side:Xi,transparent:!0,opacity:.18}));_e.position.copy(we),_e.rotation.x=Math.PI/2,_e.rotation.y=Z.inc,Me.add(_e)}const G=1500,se=new mn,ne=new Float32Array(G*3),oe=new Float32Array(G*3),Se=new nt;for(let Z=0;Z<G;Z++){const Ae=55+Math.random()*95,K=Math.random()*Math.PI*2,qe=Math.acos(2*Math.random()-1);ne[Z*3]=we.x+Ae*Math.sin(qe)*Math.cos(K),ne[Z*3+1]=Ae*Math.sin(qe)*Math.sin(K)*.6,ne[Z*3+2]=Ae*Math.cos(qe);const _e=Math.random();Se.set(_e<.6?16777215:_e<.8?12440831:16769208).multiplyScalar(.5+Math.random()*.5),Se.toArray(oe,Z*3)}se.setAttribute("position",new Nt(ne,3)),se.setAttribute("color",new Nt(oe,3));const ve=new Sa(se,new ru({size:.6,map:i,vertexColors:!0,transparent:!0,opacity:.9,blending:zi,depthWrite:!1}));Me.add(ve);const pe=1200,Ie=new mn,Xe=new Float32Array(pe*3),ie=new Float32Array(pe*3),pt=new nt;for(let Z=0;Z<pe;Z++){const Ae=11.4+Math.random()*1.5,K=Math.random()*Math.PI*2;Xe[Z*3]=we.x+Math.cos(K)*Ae,Xe[Z*3+1]=(Math.random()-.5)*.5,Xe[Z*3+2]=Math.sin(K)*Ae,pt.set(7377080).multiplyScalar(.25+Math.random()*.45),pt.toArray(ie,Z*3)}Ie.setAttribute("position",new Nt(Xe,3)),Ie.setAttribute("color",new Nt(ie,3));const Oe=new Sa(Ie,new ru({size:.16,map:i,vertexColors:!0,transparent:!0,opacity:.8,blending:zi,depthWrite:!1}));Me.add(Oe);const Le=document.createElement("div");Le.id="planet-tip",Le.style.cssText="position:fixed;z-index:60;pointer-events:none;display:none;transform:translate(-50%,-160%);font-family:SFMono-Regular,Consolas,monospace;background:rgba(8,14,24,0.90);backdrop-filter:blur(10px);border:1px solid rgba(80,180,255,0.4);box-shadow:0 0 20px rgba(0,140,255,0.25);padding:7px 14px;border-radius:6px;white-space:nowrap;line-height:1.35;text-align:left;",document.body.appendChild(Le);const Ce=new H;new nt(16777215);const ae={camZ:20,camY:3.2,camX:0,lookX:0,lookY:0,lookZ:0,baseSpeed:1};let Ze=new $e(0,0),tt={x:-9999,y:-9999},ct=new $e(0,0),ge=!1,le=!1,D=null;const de=new oU,me=new ps(new H(0,1,0),0),Ge=new H(9999,0,9999),ze=new H;let st=0;const gt=Z=>{Ze.x=Z.clientX/window.innerWidth*2-1,Ze.y=-(Z.clientY/window.innerHeight)*2+1,tt.x=Z.clientX,tt.y=Z.clientY,ge=!0},Ue=()=>{ge=!1},be=()=>{le=!0,D&&clearTimeout(D),D=setTimeout(()=>{le=!1},120)},Ne=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",gt),window.addEventListener("mouseleave",Ue),window.addEventListener("scroll",be,{passive:!0}),window.addEventListener("resize",Ne);const fe=new qE;let Ye;function We(){Ye=requestAnimationFrame(We);const Z=Math.min(fe.getDelta(),.05),Ae=fe.getElapsedTime();le||(ct.x+=(Ze.x-ct.x)*(1-Math.exp(-5*Z)),ct.y+=(Ze.y-ct.y)*(1-Math.exp(-5*Z)));const K=ae.camX+ct.x*(Me.visible?6:1.5),qe=ae.camY+ct.y*(Me.visible?4.5:1.5);a.position.x+=(K-a.position.x)*(1-Math.exp(-9*Z)),a.position.y+=(qe-a.position.y)*(1-Math.exp(-9*Z)),a.position.z+=(ae.camZ-a.position.z)*(1-Math.exp(-9*Z)),a.lookAt(ae.lookX,ae.lookY,ae.lookZ),st+=((!le&&ge?1:0)-st)*(1-Math.exp(-(le?14:8)*Z)),ge&&st>.01?(de.setFromCamera(ct,a),de.ray.intersectPlane(me,ze)&&Ge.copy(ze)):Ge.set(9999,0,9999);const at=ae.baseSpeed;M.uTime.value=Ae,M.uSpeed.value=at,M.uHoverStrength.value=st,M.uMouseTarget.value.copy(Ge);const A=Math.min(1,Math.max(0,(ae.camY-4)/16));M.uIgnite.value=.25+.75*A;const N=$.geometry.attributes.position.array;for(let I=0;I<b;I++){const V=r-N[I*3],re=-N[I*3+1],Te=-N[I*3+2],Fe=V*V+re*re+Te*Te,Re=Math.min(20/(Fe+1),1.4);F[I*3]+=V*2e-4*Re,F[I*3+1]+=re*2e-4*Re,F[I*3+2]+=Te*2e-4*Re,N[I*3]+=F[I*3],N[I*3+1]+=F[I*3+1],N[I*3+2]+=F[I*3+2],(Fe<3.5||N[I*3+2]<-10)&&(N[I*3]=r+(Math.random()-.5)*60,N[I*3+1]=(Math.random()-.5)*50,N[I*3+2]=Math.random()*30+10,F[I*3]=0,F[I*3+1]=0,F[I*3+2]=0)}if($.geometry.attributes.position.needsUpdate=!0,h.strength=.55+A*.35,Me.visible){for(const I of xe)I.angle+=Z*I.speed,I.mesh.position.set(we.x+Math.cos(I.angle)*I.dist,we.y+Math.sin(I.angle)*I.dist*Math.sin(I.inc),we.z+Math.sin(I.angle)*I.dist*Math.cos(I.inc)),I.mesh.rotation.y+=Z*1.2;if(j){Ve+=Z*2.4;const I=xe.find(V=>V.name==="AURELIA PRIME");I&&j.position.set(I.mesh.position.x+Math.cos(Ve)*1.65,I.mesh.position.y+Math.sin(Ve)*.35,I.mesh.position.z+Math.sin(Ve)*1.65)}if(R){C+=Z*1.6;const I=xe.find(V=>V.name==="ZEPHYRUS HYPERION");I&&R.position.set(I.mesh.position.x+Math.cos(C)*3.4,I.mesh.position.y+Math.sin(C)*.6,I.mesh.position.z+Math.sin(C)*3.4)}if(je.scale.setScalar(12+Math.sin(Ae*1.8)*.5),Ee.scale.setScalar(6.5+Math.cos(Ae*2.2)*.25),ge&&tt.x>-9998){let I=null,V=1e9;for(const re of xe){if(Ce.copy(re.mesh.position).project(a),Ce.z>1){re._sx=-9999,re._sy=-9999;continue}re._sx=(Ce.x*.5+.5)*window.innerWidth,re._sy=(-Ce.y*.5+.5)*window.innerHeight;const Te=Math.hypot(re._sx-tt.x,re._sy-tt.y),Fe=36+re.mesh.scale.x*re.size*32;Te<Fe&&Te<V&&(V=Te,I=re)}for(const re of xe){const Te=re===I?1.25:1,Fe=re.mesh.scale.x+(Te-re.mesh.scale.x)*(1-Math.exp(-10*Z));re.mesh.scale.setScalar(Fe)}I?(Le.style.display="block",Le.innerHTML=`
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">
                <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:#00e1ff;box-shadow:0 0 8px #00e1ff;"></span>
                <span style="font-size:0.74rem;font-weight:700;letter-spacing:0.14em;color:#e6f5ff;">${I.mesh.userData.name}</span>
              </div>
              <div style="font-size:0.60rem;font-weight:600;letter-spacing:0.08em;color:#00d2ff;opacity:0.92;">${I.mesh.userData.type}</div>
              <div style="font-size:0.56rem;color:#7e9fb8;margin-top:2px;">${I.mesh.userData.desc}</div>
            `,Le.style.left=I._sx+"px",Le.style.top=I._sy+"px"):Le.style.display="none"}else Le.style.display!=="none"&&(Le.style.display="none")}else Le.style.display!=="none"&&(Le.style.display="none");const Y=new H(r,0,0);Y.project(a),p.uniforms.bhPos.value.set(Y.x*.5+.5,Y.y*.5+.5),c.render()}a.position.set(ae.camX,ae.camY,ae.camZ),We();const Je=cr.timeline({scrollTrigger:{trigger:document.body,start:"top top",end:()=>document.documentElement.scrollHeight-window.innerHeight-window.innerHeight*2.6,scrub:.5,invalidateOnRefresh:!0}});Je.to(ae,{camZ:17,camY:3.8,camX:3,lookX:3,duration:.4,ease:"power1.inOut"}),Je.to(ae,{camY:4.4,camX:r*.5,lookX:r*.5,camZ:14,duration:.35,ease:"power2.inOut"}),Je.to(ae,{camY:26,camZ:.5,camX:r,lookX:r,duration:.9,ease:"power2.inOut"});const xt=(Z,Ae,K)=>Math.min(1,Math.max(0,(K-Z)/(Ae-Z))),ot=rt.create({trigger:".scroll-end-trigger",start:"top bottom",end:"bottom bottom",scrub:.8,onUpdate:Z=>{const Ae=Z.progress;if(Ae<.48){const N=xt(0,.4,Ae),Y=N*N*(3-2*N);ae.camX=r+1.2*(1-Y),ae.camY=26-24.5*Y,ae.camZ=.5+4.5*(1-Y),ae.lookX=r,ae.lookY=0,ae.lookZ=0,M.uFade.value=1-xt(.18,.4,Ae),p.uniforms.uLensFade.value=1-xt(.24,.44,Ae)}else{const N=xt(.52,1,Ae),Y=N*N*(3-2*N);ae.camX=r-7.5+3.5*Y,ae.camY=11-3*Y,ae.camZ=25-5*Y,ae.lookX=r,ae.lookY=0,ae.lookZ=0}const K=Ae<.48;O.visible=K,B.visible=K,_.visible=K,$.visible=K,Me.visible=!K;const qe=Ae>.32?"0":"1",_e=document.getElementById("deck-counter"),at=document.getElementById("deck-progress");_e&&(_e.style.opacity=qe),at&&(at.style.opacity=qe);const A=document.getElementById("flash-overlay");A&&(Ae<.34?(A.style.backgroundColor="#000000",A.style.opacity=xt(.1,.32,Ae).toFixed(3)):Ae<.5?(A.style.backgroundColor="#f2f8ff",A.style.opacity=xt(.34,.5,Ae).toFixed(3)):Ae<.58?(A.style.backgroundColor="#f2f8ff",A.style.opacity="1"):(A.style.backgroundColor="#f2f8ff",A.style.opacity=(1-xt(.58,.85,Ae)).toFixed(3)))}});return window.__getBHScreenCoord=()=>{const Z=new H(r,0,0).project(a);return{x:(Z.x*.5+.5)*window.innerWidth,y:(-Z.y*.5+.5)*window.innerHeight}},window.__solarDebug=()=>({visible:Me.visible,present:ge,mouse:{x:tt.x,y:tt.y},planets:xe.map(Z=>(Ce.copy(Z.mesh.position).project(a),{name:Z.mesh.userData.name,sx:Math.round((Ce.x*.5+.5)*window.innerWidth),sy:Math.round((-Ce.y*.5+.5)*window.innerHeight)}))}),()=>{cancelAnimationFrame(Ye),window.removeEventListener("mousemove",gt),window.removeEventListener("mouseleave",Ue),window.removeEventListener("scroll",be),window.removeEventListener("resize",Ne),Je.kill(),ot&&ot.kill(),Le&&Le.parentNode&&Le.parentNode.removeChild(Le),c.dispose(),l.dispose()}},[]),vt.jsx("canvas",{id:"blackhole-canvas",ref:n})}const Xl={firstName:"Maheswar",lastName:"Praveen",title:"BUILDER • ROBOTICS & AI ENGINEER",github:"https://github.com/MaheswarPraveen",linkedin:"https://www.linkedin.com/in/maheswarpraveen"},Rp=[{id:"00",category:"PROFILE",title:"Autonomous Systems Builder",description:"Developing end-to-end robotics systems across ROS 2, bare-metal firmware, and edge AI accelerators. Focused on real-time motor control, kinematic trajectories, and hardware deployment.",tags:["ROS 2","Edge AI","Embedded Systems"]},{id:"01",category:"ROBOTICS",title:"SpotMicro Quadruped",description:"12-DOF quadruped robot powered by 12× DS3218 servos and an Arduino UNO Q running Zephyr RTOS for ~200Hz analytical inverse kinematics and quintic spline gaits. Custom 6.8V high-current busbar rail off a 3S LiPo to handle 20A transient bursts without brownouts.",tags:["Zephyr RTOS","Arduino UNO Q","200Hz IK","3S LiPo Busbar"]},{id:"02",category:"FIELD AI",title:"Autonomous Skid-Steer Rover",description:"Field farming rover equipped with a 4-DOF robotic manipulator for precision weed removal. Powered by ROS 2 and an edge Hailo-8L NPU executing real-time YOLO vision guidance for field deployment.",tags:["ROS 2","Hailo-8L NPU","YOLO","4-DOF Arm"]},{id:"03",category:"DRIVER ARCHITECTURE",title:"RoArm M2-S PlayMotion",description:"High-precision trajectory recording and autonomous playback driver featuring dual-mode teaching (physical freedrive & keyboard jogging). Streams 25Hz quintic polynomial splines for zero-jerk motion with serial noise filtering. Officially adopted into the Waveshare Wiki.",tags:["Quintic Splines","Python Driver","Waveshare Wiki"]},{id:"04",category:"TELEMETRY BRIDGE",title:"ArduROSPI Bridge",description:"Zero-dependency ROS 2 ↔ MAVLink translation layer built with pymavlink, replacing heavy MAVROS on resource-constrained Raspberry Pi rovers. Implements 10Hz IMU streaming, automatic serial reconnect, and mission mode switching.",tags:["pymavlink","ROS 2","ArduPilot"]},{id:"05",category:"INTERACTIVE SYSTEMS",title:"Kalkii Genesis",description:"Cyberpunk 2.5D action title solo-engineered in Godot 4. Custom hierarchical combat state machines, frame-accurate animation cancelling, dynamic 2D lighting, and responsive platformer physics controllers.",tags:["Godot 4","Combat State Machines","GDScript"]},{id:"06",category:"EMBEDDED VISION",title:"Plant Disease Detection CNN",description:"End-to-end computer vision pipeline for agricultural crop leaf pathology. Implements OpenCV preprocessing, custom convolutional neural network (CNN) architectures in TensorFlow, achieving 80% test accuracy on unseen diseased foliage datasets.",tags:["TensorFlow","OpenCV","80% Test Accuracy"]}],mU=[{label:"Languages & AI",value:"Python, C/C++, GDScript, PyTorch, TensorFlow, YOLO, OpenCV"},{label:"Robotics & Protocols",value:"ROS 2 (Humble/Jazzy), MAVLink, CAN, UART, I2C, SPI, MQTT"},{label:"Hardware & Engineering",value:"Hailo-8L NPU, Arduino UNO Q, Raspberry Pi, Zephyr RTOS, Fusion 360"}];cr.registerPlugin(rt);function gU(){const n=No.useRef(null);return No.useEffect(()=>{const e=n.current;if(!e)return;const t=new $b({duration:1.1,easing:c=>Math.min(1,1.001-Math.pow(2,-10*c)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.6});t.on("scroll",rt.update);let i=null,r=!1,s=0;t.on("scroll",()=>{r=!1,i&&clearTimeout(i),i=setTimeout(()=>{if(r&&performance.now()-s<2e3||(r=!1,Math.abs(t.velocity||0)>1))return;const c=window.innerHeight,h=document.documentElement.scrollHeight-c,f=window.scrollY;if(f<8)return;const p=Array.from(e.querySelectorAll(".card"));if(!p.length)return;const _=p.map(y=>Math.max(0,Math.min(h,y.offsetTop-(c-y.offsetHeight)/2))),m=f>h-c*2.6?[_[_.length-1],h]:_;let d=m[0],v=1e9;for(const y of m){const x=Math.abs(y-f);x<v&&(v=x,d=y)}v<8||(r=!0,s=performance.now(),t.scrollTo(d,{duration:.9,easing:y=>1-Math.pow(1-y,3),onComplete:()=>{r=!1}}))},350)});const o=c=>{t.raf(c*1e3)};cr.ticker.add(o),cr.ticker.lagSmoothing(0);const a=[],l=[],u=[];return document.fonts.ready.then(()=>{const c=Array.from(e.querySelectorAll(".card"));c.forEach((f,p)=>{const _=f.classList.contains("hero-card"),g=f.querySelector(".stack-grid");let m=".project-index, .tag";_?m=".name-line, .hero-subtitle, .clean-link":g&&(m=".project-index, .stack-label, .stack-val");const d=new Bv(f.querySelectorAll(m),{types:"chars"});a.push(d);let v=".section-title, .section-desc";if(g?v=".section-title":_&&(v=""),v){const Q=f.querySelectorAll(v);if(Q.length>0){const F=new Bv(Q,{types:"lines, words, chars"});a.push(F);const $=cr.fromTo(F.lines,{y:70,opacity:0,clipPath:"inset(0 0 100% 0)"},{y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:1.3,stagger:.14,ease:"power3.out",scrollTrigger:{trigger:f,start:"top 85%",toggleActions:"play none none none"}});$.scrollTrigger&&l.push($.scrollTrigger)}}const y=Array.from(f.querySelectorAll(".char")),x=Array.from(f.querySelectorAll(".tag, .clean-link, .stack-col")),w=y.length,T=.62,E=.74,P=.1,S=_?"1":"0";y.forEach((Q,F)=>{Q.dataset.orig=Q.textContent,Q._swallowState=0,Q._lastFlip=Math.random()*100;const $=Math.sin(F*12.9898)*43758.5453,J=Math.sin(F*78.233)*12543.1234,he=$-Math.floor($),ce=J-Math.floor(J);Q._driftX=(he-.5)*26,Q._driftY=-(10+ce*24)});const M=()=>{for(let Q=0;Q<w;Q++){const F=y[Q];F.dataset&&F.dataset.orig!==void 0&&(F.textContent=F.dataset.orig),F.style.color="",F.style.opacity="",F.style.transform="",F.style.textShadow="",F.style.willChange="",F.style.filter="",F._swallowState=0}x.forEach(Q=>{Q.style.opacity="",Q.style.transform=""}),f.style.opacity=""},k=Q=>{const F=performance.now();for(let $=0;$<w;$++){const J=y[$],he=T+$/w*P;Q<he?J._swallowState!==0&&(J.dataset&&J.dataset.orig!==void 0&&(J.textContent=J.dataset.orig),J.style.color="",J.style.opacity="",J.style.transform="",J.style.textShadow="",J.style.willChange="",J._swallowState=0):J._swallowState!==1?(F-J._lastFlip>110&&(J.textContent=Math.random()>.5?"1":"0",J._lastFlip=F),J.style.color="#ff6600",J.style.textShadow="0 0 12px rgba(255, 102, 0, 0.8)",J.style.opacity="1",J.style.transform="",J._swallowState=1):F-J._lastFlip>110&&(J.textContent=Math.random()>.5?"1":"0",J._lastFlip=F)}x.forEach($=>$.style.opacity=""),f.style.opacity=""},O=Q=>{const F=1-Math.min(1,Math.max(0,(Q-.8)/.15));f.style.opacity=F<1?F.toFixed(3):"",x.forEach($=>{$.style.opacity=F<1?F.toFixed(3):""});for(let $=0;$<w;$++){const J=y[$],he=E+$/w*.1;if(Q<he){J._swallowState!==1&&(J.textContent=S,J.style.color="#ff6600",J.style.textShadow="0 0 12px rgba(255, 102, 0, 0.8)",J.style.opacity="1",J.style.transform="",J._swallowState=1);continue}const ce=Math.min(1,(Q-he)/.08);J._swallowState!==2&&(J.textContent=S,J._swallowState=2);const we=ce*ce;J.style.opacity=(1-ce).toFixed(3),J.style.transform=`translate3d(${(J._driftX*we).toFixed(1)}px, ${(J._driftY*we).toFixed(1)}px, 0) scale(${(1-.4*we).toFixed(3)})`,J.style.color="#ff6600",J.style.textShadow=`0 0 ${(12*(1-ce)).toFixed(1)}px rgba(255, 102, 0, ${(.8*(1-ce)).toFixed(2)})`}},te=.001,L="none";let z=!1;const W={t:0},X=cr.timeline({paused:!0});X.eventCallback("onStart",()=>{X.progress()===0&&!z&&(z=!0)}),X.to(W,{t:1,duration:te,ease:L,onUpdate:()=>{}}),X.eventCallback("onReverseComplete",M);const U=rt.create({trigger:f,start:_?"top top":"top 30%",end:_?"+=70%":"+=100%",onUpdate:Q=>{const F=Q.progress;if(F<T){F<=.03?M():k(F);return}if(F<E){k(F);return}O(F)},onLeave:()=>O(1),onLeaveBack:()=>M()});l.push(U),u.push({st:U,card:f,lastP:0,stableSince:0,resetChars:M,renderScramble:k,renderPowder:O});const B=cr.fromTo(f,{y:40},{y:-40,ease:"none",scrollTrigger:{trigger:f,start:"top bottom",end:"bottom top",scrub:!0}});l.push(B),B.scrollTrigger&&l.push(B.scrollTrigger);const b=document.getElementById("deck-counter");if(b){const Q=String(1+Rp.length+1).padStart(2,"0");b.textContent=`01 / ${Q}`,c.forEach((F,$)=>{const J=String($+1).padStart(2,"0"),he=rt.create({trigger:F,start:"top center",end:"bottom center",onToggle:ce=>{ce.isActive&&b&&(b.textContent=`${J} / ${Q}`)}});l.push(he)})}const ee=cr.fromTo("#deck-progress-bar",{scaleX:0},{scaleX:1,ease:"none",scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:.3}});l.push(ee),ee.scrollTrigger&&l.push(ee.scrollTrigger)});const h=setInterval(()=>{const f=performance.now(),p=e.querySelectorAll(".char");for(let _=0;_<p.length;_++){const g=p[_];g._swallowState===1&&f-g._lastFlip>110&&(g.textContent=Math.random()>.5?"1":"0",g._lastFlip=f)}},120);rt.refresh();for(const f of u){const p=f.st.progress;p<.62?f.resetChars():p<.74?f.renderScramble(p):f.renderPowder(p)}e._watchdog=h}),()=>{i&&clearTimeout(i),e._watchdog&&clearInterval(e._watchdog),a.forEach(c=>c.revert()),l.forEach(c=>c.kill()),cr.ticker.remove(o),t.destroy()}},[]),vt.jsxs(vt.Fragment,{children:[vt.jsx("div",{id:"flash-overlay"}),vt.jsx("div",{id:"deck-progress",children:vt.jsx("div",{id:"deck-progress-bar"})}),vt.jsx("div",{id:"deck-counter",children:`01 / ${String(1+Rp.length+1).padStart(2,"0")}`}),vt.jsx(pU,{}),vt.jsxs("main",{id:"ui-container",ref:n,children:[vt.jsxs("header",{className:"card hero-card",children:[vt.jsxs("h1",{className:"name-title",children:[vt.jsx("span",{className:"name-line",children:Xl.firstName}),vt.jsx("span",{className:"name-line",children:Xl.lastName})]}),vt.jsx("p",{className:"hero-subtitle",children:Xl.title}),vt.jsxs("div",{className:"hero-links",children:[vt.jsx("a",{href:Xl.github,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"GitHub"}),vt.jsx("a",{href:Xl.linkedin,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"LinkedIn"})]})]}),Rp.map(e=>vt.jsxs("section",{className:"card content-card",children:[vt.jsxs("span",{className:"project-index",children:[e.id," // ",e.category]}),vt.jsx("h2",{className:"section-title",children:e.title}),vt.jsx("p",{className:"section-desc",children:e.description}),vt.jsx("div",{className:"tag-cloud",children:e.tags.map((t,i)=>vt.jsx("span",{className:"tag",children:t},i))})]},e.id)),vt.jsxs("section",{className:"card content-card",children:[vt.jsx("span",{className:"project-index",children:"07 // STACK"}),vt.jsx("h2",{className:"section-title",children:"Technical Capabilities"}),vt.jsx("div",{className:"stack-grid",children:mU.map((e,t)=>vt.jsxs("div",{className:"stack-col",children:[vt.jsx("span",{className:"stack-label",children:e.label}),vt.jsx("span",{className:"stack-val",children:e.value})]},t))})]})]}),vt.jsx("div",{className:"scroll-end-trigger",style:{height:"260vh",width:"100%"}})]})}Pp.createRoot(document.getElementById("root")).render(vt.jsx(_w.StrictMode,{children:vt.jsx(gU,{})}));
