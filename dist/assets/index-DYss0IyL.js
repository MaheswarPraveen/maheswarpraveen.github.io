(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function c1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Fx={exports:{}},cd={},kx={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu=Symbol.for("react.element"),f1=Symbol.for("react.portal"),d1=Symbol.for("react.fragment"),h1=Symbol.for("react.strict_mode"),p1=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),_1=Symbol.for("react.context"),g1=Symbol.for("react.forward_ref"),v1=Symbol.for("react.suspense"),x1=Symbol.for("react.memo"),y1=Symbol.for("react.lazy"),gg=Symbol.iterator;function S1(n){return n===null||typeof n!="object"?null:(n=gg&&n[gg]||n["@@iterator"],typeof n=="function"?n:null)}var zx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bx=Object.assign,Hx={};function ol(n,e,t){this.props=n,this.context=e,this.refs=Hx,this.updater=t||zx}ol.prototype.isReactComponent={};ol.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ol.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Gx(){}Gx.prototype=ol.prototype;function Fm(n,e,t){this.props=n,this.context=e,this.refs=Hx,this.updater=t||zx}var km=Fm.prototype=new Gx;km.constructor=Fm;Bx(km,ol.prototype);km.isPureReactComponent=!0;var vg=Array.isArray,Vx=Object.prototype.hasOwnProperty,zm={current:null},Wx={key:!0,ref:!0,__self:!0,__source:!0};function Xx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vx.call(e,i)&&!Wx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fu,type:n,key:s,ref:o,props:r,_owner:zm.current}}function M1(n,e){return{$$typeof:Fu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Bm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Fu}function E1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var xg=/\/+/g;function Bd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?E1(""+n.key):e.toString(36)}function Jc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Fu:case f1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Bd(o,0):i,vg(r)?(t="",n!=null&&(t=n.replace(xg,"$&/")+"/"),Jc(r,e,t,"",function(u){return u})):r!=null&&(Bm(r)&&(r=M1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(xg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",vg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Bd(s,a);o+=Jc(s,e,t,l,r)}else if(l=S1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Bd(s,a++),o+=Jc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ku(n,e,t){if(n==null)return n;var i=[],r=0;return Jc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function T1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Vn={current:null},ef={transition:null},w1={ReactCurrentDispatcher:Vn,ReactCurrentBatchConfig:ef,ReactCurrentOwner:zm};function Yx(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Ku,forEach:function(n,e,t){Ku(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ku(n,function(){e++}),e},toArray:function(n){return Ku(n,function(e){return e})||[]},only:function(n){if(!Bm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=ol;st.Fragment=d1;st.Profiler=p1;st.PureComponent=Fm;st.StrictMode=h1;st.Suspense=v1;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;st.act=Yx;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Bx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Vx.call(e,l)&&!Wx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Fu,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:_1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:m1,_context:n},n.Consumer=n};st.createElement=Xx;st.createFactory=function(n){var e=Xx.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:g1,render:n}};st.isValidElement=Bm;st.lazy=function(n){return{$$typeof:y1,_payload:{_status:-1,_result:n},_init:T1}};st.memo=function(n,e){return{$$typeof:x1,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=ef.transition;ef.transition={};try{n()}finally{ef.transition=e}};st.unstable_act=Yx;st.useCallback=function(n,e){return Vn.current.useCallback(n,e)};st.useContext=function(n){return Vn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return Vn.current.useDeferredValue(n)};st.useEffect=function(n,e){return Vn.current.useEffect(n,e)};st.useId=function(){return Vn.current.useId()};st.useImperativeHandle=function(n,e,t){return Vn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return Vn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return Vn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return Vn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return Vn.current.useReducer(n,e,t)};st.useRef=function(n){return Vn.current.useRef(n)};st.useState=function(n){return Vn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return Vn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return Vn.current.useTransition()};st.version="18.3.1";kx.exports=st;var Tr=kx.exports;const A1=c1(Tr);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1=Tr,R1=Symbol.for("react.element"),b1=Symbol.for("react.fragment"),P1=Object.prototype.hasOwnProperty,L1=C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D1={key:!0,ref:!0,__self:!0,__source:!0};function jx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)P1.call(e,i)&&!D1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:R1,type:n,key:s,ref:o,props:r,_owner:L1.current}}cd.Fragment=b1;cd.jsx=jx;cd.jsxs=jx;Fx.exports=cd;var pt=Fx.exports,ip={},qx={exports:{}},bi={},$x={exports:{}},Kx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,F){var R=D.length;D.push(F);e:for(;0<R;){var $=R-1>>>1,Q=D[$];if(0<r(Q,F))D[$]=F,D[R]=Q,R=$;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],R=D.pop();if(R!==F){D[0]=R;e:for(var $=0,Q=D.length,q=Q>>>1;$<q;){var K=2*($+1)-1,re=D[K],ge=K+1,me=D[ge];if(0>r(re,R))ge<Q&&0>r(me,re)?(D[$]=me,D[ge]=R,$=ge):(D[$]=re,D[K]=R,$=K);else if(ge<Q&&0>r(me,R))D[$]=me,D[ge]=R,$=ge;else break e}}return F}function r(D,F){var R=D.sortIndex-F.sortIndex;return R!==0?R:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var F=t(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=D)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(u)}}function y(D){if(_=!1,x(D),!g)if(t(l)!==null)g=!0,B(w);else{var F=t(u);F!==null&&G(y,F.startTime-D)}}function w(D,F){g=!1,_&&(_=!1,f(P),P=-1),p=!0;var R=d;try{for(x(F),h=t(l);h!==null&&(!(h.expirationTime>F)||D&&!I());){var $=h.callback;if(typeof $=="function"){h.callback=null,d=h.priorityLevel;var Q=$(h.expirationTime<=F);F=n.unstable_now(),typeof Q=="function"?h.callback=Q:h===t(l)&&i(l),x(F)}else i(l);h=t(l)}if(h!==null)var q=!0;else{var K=t(u);K!==null&&G(y,K.startTime-F),q=!1}return q}finally{h=null,d=R,p=!1}}var T=!1,M=null,P=-1,S=5,E=-1;function I(){return!(n.unstable_now()-E<S)}function N(){if(M!==null){var D=n.unstable_now();E=D;var F=!0;try{F=M(!0,D)}finally{F?Z():(T=!1,M=null)}}else T=!1}var Z;if(typeof v=="function")Z=function(){v(N)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,O=L.port2;L.port1.onmessage=N,Z=function(){O.postMessage(null)}}else Z=function(){m(N,0)};function B(D){M=D,T||(T=!0,Z())}function G(D,F){P=m(function(){D(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,B(w))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var R=d;d=F;try{return D()}finally{d=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var R=d;d=D;try{return F()}finally{d=R}},n.unstable_scheduleCallback=function(D,F,R){var $=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?$+R:$):R=$,D){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=R+Q,D={id:c++,callback:F,priorityLevel:D,startTime:R,expirationTime:Q,sortIndex:-1},R>$?(D.sortIndex=R,e(u,D),t(l)===null&&D===t(u)&&(_?(f(P),P=-1):_=!0,G(y,R-$))):(D.sortIndex=Q,e(l,D),g||p||(g=!0,B(w))),D},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(D){var F=d;return function(){var R=d;d=F;try{return D.apply(this,arguments)}finally{d=R}}}})(Kx);$x.exports=Kx;var U1=$x.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N1=Tr,Ai=U1;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zx=new Set,lu={};function Fo(n,e){Va(n,e),Va(n+"Capture",e)}function Va(n,e){for(lu[n]=e,n=0;n<e.length;n++)Zx.add(e[n])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rp=Object.prototype.hasOwnProperty,I1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yg={},Sg={};function O1(n){return rp.call(Sg,n)?!0:rp.call(yg,n)?!1:I1.test(n)?Sg[n]=!0:(yg[n]=!0,!1)}function F1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function k1(n,e,t,i){if(e===null||typeof e>"u"||F1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var vn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){vn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];vn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){vn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){vn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){vn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){vn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){vn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){vn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){vn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Hm=/[\-:]([a-z])/g;function Gm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Hm,Gm);vn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Hm,Gm);vn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Hm,Gm);vn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){vn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});vn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){vn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Vm(n,e,t,i){var r=vn.hasOwnProperty(e)?vn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k1(e,t,r,i)&&(t=null),i||r===null?O1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Kr=N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zu=Symbol.for("react.element"),ca=Symbol.for("react.portal"),fa=Symbol.for("react.fragment"),Wm=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),Qx=Symbol.for("react.provider"),Jx=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),ap=Symbol.for("react.suspense_list"),Ym=Symbol.for("react.memo"),rs=Symbol.for("react.lazy"),ey=Symbol.for("react.offscreen"),Mg=Symbol.iterator;function dl(n){return n===null||typeof n!="object"?null:(n=Mg&&n[Mg]||n["@@iterator"],typeof n=="function"?n:null)}var zt=Object.assign,Hd;function Rl(n){if(Hd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hd=e&&e[1]||""}return`
`+Hd+n}var Gd=!1;function Vd(n,e){if(!n||Gd)return"";Gd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Gd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Rl(n):""}function z1(n){switch(n.tag){case 5:return Rl(n.type);case 16:return Rl("Lazy");case 13:return Rl("Suspense");case 19:return Rl("SuspenseList");case 0:case 2:case 15:return n=Vd(n.type,!1),n;case 11:return n=Vd(n.type.render,!1),n;case 1:return n=Vd(n.type,!0),n;default:return""}}function lp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case fa:return"Fragment";case ca:return"Portal";case sp:return"Profiler";case Wm:return"StrictMode";case op:return"Suspense";case ap:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Jx:return(n.displayName||"Context")+".Consumer";case Qx:return(n._context.displayName||"Context")+".Provider";case Xm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ym:return e=n.displayName||null,e!==null?e:lp(n.type)||"Memo";case rs:e=n._payload,n=n._init;try{return lp(n(e))}catch{}}return null}function B1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lp(e);case 8:return e===Wm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ds(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ty(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H1(n){var e=ty(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Qu(n){n._valueTracker||(n._valueTracker=H1(n))}function ny(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=ty(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Mf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function up(n,e){var t=e.checked;return zt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Eg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ds(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iy(n,e){e=e.checked,e!=null&&Vm(n,"checked",e,!1)}function cp(n,e){iy(n,e);var t=Ds(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?fp(n,e.type,t):e.hasOwnProperty("defaultValue")&&fp(n,e.type,Ds(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Tg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function fp(n,e,t){(e!=="number"||Mf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var bl=Array.isArray;function Ra(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ds(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function dp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return zt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function wg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(bl(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ds(t)}}function ry(n,e){var t=Ds(e.value),i=Ds(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Ag(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function sy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?sy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ju,oy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ju=Ju||document.createElement("div"),Ju.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ju.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function uu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var zl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G1=["Webkit","ms","Moz","O"];Object.keys(zl).forEach(function(n){G1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),zl[e]=zl[n]})});function ay(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||zl.hasOwnProperty(n)&&zl[n]?(""+e).trim():e+"px"}function ly(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=ay(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var V1=zt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pp(n,e){if(e){if(V1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function mp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _p=null;function jm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gp=null,ba=null,Pa=null;function Cg(n){if(n=Bu(n)){if(typeof gp!="function")throw Error(se(280));var e=n.stateNode;e&&(e=md(e),gp(n.stateNode,n.type,e))}}function uy(n){ba?Pa?Pa.push(n):Pa=[n]:ba=n}function cy(){if(ba){var n=ba,e=Pa;if(Pa=ba=null,Cg(n),e)for(n=0;n<e.length;n++)Cg(e[n])}}function fy(n,e){return n(e)}function dy(){}var Wd=!1;function hy(n,e,t){if(Wd)return n(e,t);Wd=!0;try{return fy(n,e,t)}finally{Wd=!1,(ba!==null||Pa!==null)&&(dy(),cy())}}function cu(n,e){var t=n.stateNode;if(t===null)return null;var i=md(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var vp=!1;if(Vr)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){vp=!0}}),window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{vp=!1}function W1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Bl=!1,Ef=null,Tf=!1,xp=null,X1={onError:function(n){Bl=!0,Ef=n}};function Y1(n,e,t,i,r,s,o,a,l){Bl=!1,Ef=null,W1.apply(X1,arguments)}function j1(n,e,t,i,r,s,o,a,l){if(Y1.apply(this,arguments),Bl){if(Bl){var u=Ef;Bl=!1,Ef=null}else throw Error(se(198));Tf||(Tf=!0,xp=u)}}function ko(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function py(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Rg(n){if(ko(n)!==n)throw Error(se(188))}function q1(n){var e=n.alternate;if(!e){if(e=ko(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Rg(r),n;if(s===i)return Rg(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function my(n){return n=q1(n),n!==null?_y(n):null}function _y(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=_y(n);if(e!==null)return e;n=n.sibling}return null}var gy=Ai.unstable_scheduleCallback,bg=Ai.unstable_cancelCallback,$1=Ai.unstable_shouldYield,K1=Ai.unstable_requestPaint,Wt=Ai.unstable_now,Z1=Ai.unstable_getCurrentPriorityLevel,qm=Ai.unstable_ImmediatePriority,vy=Ai.unstable_UserBlockingPriority,wf=Ai.unstable_NormalPriority,Q1=Ai.unstable_LowPriority,xy=Ai.unstable_IdlePriority,fd=null,Sr=null;function J1(n){if(Sr&&typeof Sr.onCommitFiberRoot=="function")try{Sr.onCommitFiberRoot(fd,n,void 0,(n.current.flags&128)===128)}catch{}}var ar=Math.clz32?Math.clz32:nT,eT=Math.log,tT=Math.LN2;function nT(n){return n>>>=0,n===0?32:31-(eT(n)/tT|0)|0}var ec=64,tc=4194304;function Pl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Af(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Pl(a):(s&=o,s!==0&&(i=Pl(s)))}else o=t&~r,o!==0?i=Pl(o):s!==0&&(i=Pl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ar(e),r=1<<t,i|=n[t],e&=~r;return i}function iT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rT(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ar(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=iT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function yp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yy(){var n=ec;return ec<<=1,!(ec&4194240)&&(ec=64),n}function Xd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ku(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ar(e),n[e]=t}function sT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ar(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function $m(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ar(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function Sy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var My,Km,Ey,Ty,wy,Sp=!1,nc=[],vs=null,xs=null,ys=null,fu=new Map,du=new Map,as=[],oT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(n,e){switch(n){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":fu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(e.pointerId)}}function pl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Bu(e),e!==null&&Km(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function aT(n,e,t,i,r){switch(e){case"focusin":return vs=pl(vs,n,e,t,i,r),!0;case"dragenter":return xs=pl(xs,n,e,t,i,r),!0;case"mouseover":return ys=pl(ys,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return fu.set(s,pl(fu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,du.set(s,pl(du.get(s)||null,n,e,t,i,r)),!0}return!1}function Ay(n){var e=oo(n.target);if(e!==null){var t=ko(e);if(t!==null){if(e=t.tag,e===13){if(e=py(t),e!==null){n.blockedOn=e,wy(n.priority,function(){Ey(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function tf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Mp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);_p=i,t.target.dispatchEvent(i),_p=null}else return e=Bu(t),e!==null&&Km(e),n.blockedOn=t,!1;e.shift()}return!0}function Lg(n,e,t){tf(n)&&t.delete(e)}function lT(){Sp=!1,vs!==null&&tf(vs)&&(vs=null),xs!==null&&tf(xs)&&(xs=null),ys!==null&&tf(ys)&&(ys=null),fu.forEach(Lg),du.forEach(Lg)}function ml(n,e){n.blockedOn===e&&(n.blockedOn=null,Sp||(Sp=!0,Ai.unstable_scheduleCallback(Ai.unstable_NormalPriority,lT)))}function hu(n){function e(r){return ml(r,n)}if(0<nc.length){ml(nc[0],n);for(var t=1;t<nc.length;t++){var i=nc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vs!==null&&ml(vs,n),xs!==null&&ml(xs,n),ys!==null&&ml(ys,n),fu.forEach(e),du.forEach(e),t=0;t<as.length;t++)i=as[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<as.length&&(t=as[0],t.blockedOn===null);)Ay(t),t.blockedOn===null&&as.shift()}var La=Kr.ReactCurrentBatchConfig,Cf=!0;function uT(n,e,t,i){var r=vt,s=La.transition;La.transition=null;try{vt=1,Zm(n,e,t,i)}finally{vt=r,La.transition=s}}function cT(n,e,t,i){var r=vt,s=La.transition;La.transition=null;try{vt=4,Zm(n,e,t,i)}finally{vt=r,La.transition=s}}function Zm(n,e,t,i){if(Cf){var r=Mp(n,e,t,i);if(r===null)th(n,e,i,Rf,t),Pg(n,i);else if(aT(r,n,e,t,i))i.stopPropagation();else if(Pg(n,i),e&4&&-1<oT.indexOf(n)){for(;r!==null;){var s=Bu(r);if(s!==null&&My(s),s=Mp(n,e,t,i),s===null&&th(n,e,i,Rf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else th(n,e,i,null,t)}}var Rf=null;function Mp(n,e,t,i){if(Rf=null,n=jm(i),n=oo(n),n!==null)if(e=ko(n),e===null)n=null;else if(t=e.tag,t===13){if(n=py(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Rf=n,null}function Cy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Z1()){case qm:return 1;case vy:return 4;case wf:case Q1:return 16;case xy:return 536870912;default:return 16}default:return 16}}var us=null,Qm=null,nf=null;function Ry(){if(nf)return nf;var n,e=Qm,t=e.length,i,r="value"in us?us.value:us.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return nf=r.slice(n,1<i?1-i:void 0)}function rf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ic(){return!0}function Dg(){return!1}function Pi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:Dg,this.isPropagationStopped=Dg,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var al={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jm=Pi(al),zu=zt({},al,{view:0,detail:0}),fT=Pi(zu),Yd,jd,_l,dd=zt({},zu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:e_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_l&&(_l&&n.type==="mousemove"?(Yd=n.screenX-_l.screenX,jd=n.screenY-_l.screenY):jd=Yd=0,_l=n),Yd)},movementY:function(n){return"movementY"in n?n.movementY:jd}}),Ug=Pi(dd),dT=zt({},dd,{dataTransfer:0}),hT=Pi(dT),pT=zt({},zu,{relatedTarget:0}),qd=Pi(pT),mT=zt({},al,{animationName:0,elapsedTime:0,pseudoElement:0}),_T=Pi(mT),gT=zt({},al,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vT=Pi(gT),xT=zt({},al,{data:0}),Ng=Pi(xT),yT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ST={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ET(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=MT[n])?!!e[n]:!1}function e_(){return ET}var TT=zt({},zu,{key:function(n){if(n.key){var e=yT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=rf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ST[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:e_,charCode:function(n){return n.type==="keypress"?rf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),wT=Pi(TT),AT=zt({},dd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ig=Pi(AT),CT=zt({},zu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:e_}),RT=Pi(CT),bT=zt({},al,{propertyName:0,elapsedTime:0,pseudoElement:0}),PT=Pi(bT),LT=zt({},dd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),DT=Pi(LT),UT=[9,13,27,32],t_=Vr&&"CompositionEvent"in window,Hl=null;Vr&&"documentMode"in document&&(Hl=document.documentMode);var NT=Vr&&"TextEvent"in window&&!Hl,by=Vr&&(!t_||Hl&&8<Hl&&11>=Hl),Og=" ",Fg=!1;function Py(n,e){switch(n){case"keyup":return UT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ly(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var da=!1;function IT(n,e){switch(n){case"compositionend":return Ly(e);case"keypress":return e.which!==32?null:(Fg=!0,Og);case"textInput":return n=e.data,n===Og&&Fg?null:n;default:return null}}function OT(n,e){if(da)return n==="compositionend"||!t_&&Py(n,e)?(n=Ry(),nf=Qm=us=null,da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return by&&e.locale!=="ko"?null:e.data;default:return null}}var FT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!FT[n.type]:e==="textarea"}function Dy(n,e,t,i){uy(i),e=bf(e,"onChange"),0<e.length&&(t=new Jm("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Gl=null,pu=null;function kT(n){Vy(n,0)}function hd(n){var e=ma(n);if(ny(e))return n}function zT(n,e){if(n==="change")return e}var Uy=!1;if(Vr){var $d;if(Vr){var Kd="oninput"in document;if(!Kd){var zg=document.createElement("div");zg.setAttribute("oninput","return;"),Kd=typeof zg.oninput=="function"}$d=Kd}else $d=!1;Uy=$d&&(!document.documentMode||9<document.documentMode)}function Bg(){Gl&&(Gl.detachEvent("onpropertychange",Ny),pu=Gl=null)}function Ny(n){if(n.propertyName==="value"&&hd(pu)){var e=[];Dy(e,pu,n,jm(n)),hy(kT,e)}}function BT(n,e,t){n==="focusin"?(Bg(),Gl=e,pu=t,Gl.attachEvent("onpropertychange",Ny)):n==="focusout"&&Bg()}function HT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hd(pu)}function GT(n,e){if(n==="click")return hd(e)}function VT(n,e){if(n==="input"||n==="change")return hd(e)}function WT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var cr=typeof Object.is=="function"?Object.is:WT;function mu(n,e){if(cr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!rp.call(e,r)||!cr(n[r],e[r]))return!1}return!0}function Hg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gg(n,e){var t=Hg(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Hg(t)}}function Iy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Iy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Oy(){for(var n=window,e=Mf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Mf(n.document)}return e}function n_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function XT(n){var e=Oy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Iy(t.ownerDocument.documentElement,t)){if(i!==null&&n_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Gg(t,s);var o=Gg(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var YT=Vr&&"documentMode"in document&&11>=document.documentMode,ha=null,Ep=null,Vl=null,Tp=!1;function Vg(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Tp||ha==null||ha!==Mf(i)||(i=ha,"selectionStart"in i&&n_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vl&&mu(Vl,i)||(Vl=i,i=bf(Ep,"onSelect"),0<i.length&&(e=new Jm("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ha)))}function rc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var pa={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Zd={},Fy={};Vr&&(Fy=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function pd(n){if(Zd[n])return Zd[n];if(!pa[n])return n;var e=pa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Fy)return Zd[n]=e[t];return n}var ky=pd("animationend"),zy=pd("animationiteration"),By=pd("animationstart"),Hy=pd("transitionend"),Gy=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zs(n,e){Gy.set(n,e),Fo(e,[n])}for(var Qd=0;Qd<Wg.length;Qd++){var Jd=Wg[Qd],jT=Jd.toLowerCase(),qT=Jd[0].toUpperCase()+Jd.slice(1);zs(jT,"on"+qT)}zs(ky,"onAnimationEnd");zs(zy,"onAnimationIteration");zs(By,"onAnimationStart");zs("dblclick","onDoubleClick");zs("focusin","onFocus");zs("focusout","onBlur");zs(Hy,"onTransitionEnd");Va("onMouseEnter",["mouseout","mouseover"]);Va("onMouseLeave",["mouseout","mouseover"]);Va("onPointerEnter",["pointerout","pointerover"]);Va("onPointerLeave",["pointerout","pointerover"]);Fo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$T=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ll));function Xg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,j1(i,e,void 0,n),n.currentTarget=null}function Vy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Xg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Xg(r,a,u),s=l}}}if(Tf)throw n=xp,Tf=!1,xp=null,n}function Ct(n,e){var t=e[bp];t===void 0&&(t=e[bp]=new Set);var i=n+"__bubble";t.has(i)||(Wy(e,n,2,!1),t.add(i))}function eh(n,e,t){var i=0;e&&(i|=4),Wy(t,n,i,e)}var sc="_reactListening"+Math.random().toString(36).slice(2);function _u(n){if(!n[sc]){n[sc]=!0,Zx.forEach(function(t){t!=="selectionchange"&&($T.has(t)||eh(t,!1,n),eh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[sc]||(e[sc]=!0,eh("selectionchange",!1,e))}}function Wy(n,e,t,i){switch(Cy(e)){case 1:var r=uT;break;case 4:r=cT;break;default:r=Zm}t=r.bind(null,e,t,n),r=void 0,!vp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function th(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=oo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}hy(function(){var u=s,c=jm(t),h=[];e:{var d=Gy.get(n);if(d!==void 0){var p=Jm,g=n;switch(n){case"keypress":if(rf(t)===0)break e;case"keydown":case"keyup":p=wT;break;case"focusin":g="focus",p=qd;break;case"focusout":g="blur",p=qd;break;case"beforeblur":case"afterblur":p=qd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=RT;break;case ky:case zy:case By:p=_T;break;case Hy:p=PT;break;case"scroll":p=fT;break;case"wheel":p=DT;break;case"copy":case"cut":case"paste":p=vT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ig}var _=(e&4)!==0,m=!_&&n==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,f!==null&&(y=cu(v,f),y!=null&&_.push(gu(v,y,x)))),m)break;v=v.return}0<_.length&&(d=new p(d,g,null,t,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==_p&&(g=t.relatedTarget||t.fromElement)&&(oo(g)||g[Wr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?oo(g):null,g!==null&&(m=ko(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=Ug,y="onMouseLeave",f="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Ig,y="onPointerLeave",f="onPointerEnter",v="pointer"),m=p==null?d:ma(p),x=g==null?d:ma(g),d=new _(y,v+"leave",p,t,c),d.target=m,d.relatedTarget=x,y=null,oo(c)===u&&(_=new _(f,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,f=g,v=0,x=_;x;x=Bo(x))v++;for(x=0,y=f;y;y=Bo(y))x++;for(;0<v-x;)_=Bo(_),v--;for(;0<x-v;)f=Bo(f),x--;for(;v--;){if(_===f||f!==null&&_===f.alternate)break t;_=Bo(_),f=Bo(f)}_=null}else _=null;p!==null&&Yg(h,d,p,_,!1),g!==null&&m!==null&&Yg(h,m,g,_,!0)}}e:{if(d=u?ma(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=zT;else if(kg(d))if(Uy)w=VT;else{w=HT;var T=BT}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=GT);if(w&&(w=w(n,u))){Dy(h,w,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&fp(d,"number",d.value)}switch(T=u?ma(u):window,n){case"focusin":(kg(T)||T.contentEditable==="true")&&(ha=T,Ep=u,Vl=null);break;case"focusout":Vl=Ep=ha=null;break;case"mousedown":Tp=!0;break;case"contextmenu":case"mouseup":case"dragend":Tp=!1,Vg(h,t,c);break;case"selectionchange":if(YT)break;case"keydown":case"keyup":Vg(h,t,c)}var M;if(t_)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else da?Py(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(by&&t.locale!=="ko"&&(da||P!=="onCompositionStart"?P==="onCompositionEnd"&&da&&(M=Ry()):(us=c,Qm="value"in us?us.value:us.textContent,da=!0)),T=bf(u,P),0<T.length&&(P=new Ng(P,n,null,t,c),h.push({event:P,listeners:T}),M?P.data=M:(M=Ly(t),M!==null&&(P.data=M)))),(M=NT?IT(n,t):OT(n,t))&&(u=bf(u,"onBeforeInput"),0<u.length&&(c=new Ng("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=M))}Vy(h,e)})}function gu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function bf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=cu(n,t),s!=null&&i.unshift(gu(n,s,r)),s=cu(n,e),s!=null&&i.push(gu(n,s,r))),n=n.return}return i}function Bo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=cu(t,s),l!=null&&o.unshift(gu(t,l,a))):r||(l=cu(t,s),l!=null&&o.push(gu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var KT=/\r\n?/g,ZT=/\u0000|\uFFFD/g;function jg(n){return(typeof n=="string"?n:""+n).replace(KT,`
`).replace(ZT,"")}function oc(n,e,t){if(e=jg(e),jg(n)!==e&&t)throw Error(se(425))}function Pf(){}var wp=null,Ap=null;function Cp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rp=typeof setTimeout=="function"?setTimeout:void 0,QT=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,JT=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(n){return qg.resolve(null).then(n).catch(ew)}:Rp;function ew(n){setTimeout(function(){throw n})}function nh(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),hu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);hu(e)}function Ss(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function $g(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ll=Math.random().toString(36).slice(2),_r="__reactFiber$"+ll,vu="__reactProps$"+ll,Wr="__reactContainer$"+ll,bp="__reactEvents$"+ll,tw="__reactListeners$"+ll,nw="__reactHandles$"+ll;function oo(n){var e=n[_r];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Wr]||t[_r]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=$g(n);n!==null;){if(t=n[_r])return t;n=$g(n)}return e}n=t,t=n.parentNode}return null}function Bu(n){return n=n[_r]||n[Wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ma(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function md(n){return n[vu]||null}var Pp=[],_a=-1;function Bs(n){return{current:n}}function bt(n){0>_a||(n.current=Pp[_a],Pp[_a]=null,_a--)}function wt(n,e){_a++,Pp[_a]=n.current,n.current=e}var Us={},Pn=Bs(Us),Qn=Bs(!1),Ao=Us;function Wa(n,e){var t=n.type.contextTypes;if(!t)return Us;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Jn(n){return n=n.childContextTypes,n!=null}function Lf(){bt(Qn),bt(Pn)}function Kg(n,e,t){if(Pn.current!==Us)throw Error(se(168));wt(Pn,e),wt(Qn,t)}function Xy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,B1(n)||"Unknown",r));return zt({},t,i)}function Df(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Us,Ao=Pn.current,wt(Pn,n),wt(Qn,Qn.current),!0}function Zg(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=Xy(n,e,Ao),i.__reactInternalMemoizedMergedChildContext=n,bt(Qn),bt(Pn),wt(Pn,n)):bt(Qn),wt(Qn,t)}var Nr=null,_d=!1,ih=!1;function Yy(n){Nr===null?Nr=[n]:Nr.push(n)}function iw(n){_d=!0,Yy(n)}function Hs(){if(!ih&&Nr!==null){ih=!0;var n=0,e=vt;try{var t=Nr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Nr=null,_d=!1}catch(r){throw Nr!==null&&(Nr=Nr.slice(n+1)),gy(qm,Hs),r}finally{vt=e,ih=!1}}return null}var ga=[],va=0,Uf=null,Nf=0,Ni=[],Ii=0,Co=null,Fr=1,kr="";function Zs(n,e){ga[va++]=Nf,ga[va++]=Uf,Uf=n,Nf=e}function jy(n,e,t){Ni[Ii++]=Fr,Ni[Ii++]=kr,Ni[Ii++]=Co,Co=n;var i=Fr;n=kr;var r=32-ar(i)-1;i&=~(1<<r),t+=1;var s=32-ar(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fr=1<<32-ar(e)+r|t<<r|i,kr=s+n}else Fr=1<<s|t<<r|i,kr=n}function i_(n){n.return!==null&&(Zs(n,1),jy(n,1,0))}function r_(n){for(;n===Uf;)Uf=ga[--va],ga[va]=null,Nf=ga[--va],ga[va]=null;for(;n===Co;)Co=Ni[--Ii],Ni[Ii]=null,kr=Ni[--Ii],Ni[Ii]=null,Fr=Ni[--Ii],Ni[Ii]=null}var Mi=null,xi=null,Lt=!1,ir=null;function qy(n,e){var t=Hi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Qg(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Mi=n,xi=Ss(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Mi=n,xi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Co!==null?{id:Fr,overflow:kr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Mi=n,xi=null,!0):!1;default:return!1}}function Lp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Dp(n){if(Lt){var e=xi;if(e){var t=e;if(!Qg(n,e)){if(Lp(n))throw Error(se(418));e=Ss(t.nextSibling);var i=Mi;e&&Qg(n,e)?qy(i,t):(n.flags=n.flags&-4097|2,Lt=!1,Mi=n)}}else{if(Lp(n))throw Error(se(418));n.flags=n.flags&-4097|2,Lt=!1,Mi=n}}}function Jg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Mi=n}function ac(n){if(n!==Mi)return!1;if(!Lt)return Jg(n),Lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Cp(n.type,n.memoizedProps)),e&&(e=xi)){if(Lp(n))throw $y(),Error(se(418));for(;e;)qy(n,e),e=Ss(e.nextSibling)}if(Jg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){xi=Ss(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}xi=null}}else xi=Mi?Ss(n.stateNode.nextSibling):null;return!0}function $y(){for(var n=xi;n;)n=Ss(n.nextSibling)}function Xa(){xi=Mi=null,Lt=!1}function s_(n){ir===null?ir=[n]:ir.push(n)}var rw=Kr.ReactCurrentBatchConfig;function gl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function lc(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function e0(n){var e=n._init;return e(n._payload)}function Ky(n){function e(f,v){if(n){var x=f.deletions;x===null?(f.deletions=[v],f.flags|=16):x.push(v)}}function t(f,v){if(!n)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=ws(f,v),f.index=0,f.sibling=null,f}function s(f,v,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<v?(f.flags|=2,v):x):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,v,x,y){return v===null||v.tag!==6?(v=ch(x,f.mode,y),v.return=f,v):(v=r(v,x),v.return=f,v)}function l(f,v,x,y){var w=x.type;return w===fa?c(f,v,x.props.children,y,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rs&&e0(w)===v.type)?(y=r(v,x.props),y.ref=gl(f,v,x),y.return=f,y):(y=ff(x.type,x.key,x.props,null,f.mode,y),y.ref=gl(f,v,x),y.return=f,y)}function u(f,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=fh(x,f.mode,y),v.return=f,v):(v=r(v,x.children||[]),v.return=f,v)}function c(f,v,x,y,w){return v===null||v.tag!==7?(v=mo(x,f.mode,y,w),v.return=f,v):(v=r(v,x),v.return=f,v)}function h(f,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ch(""+v,f.mode,x),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Zu:return x=ff(v.type,v.key,v.props,null,f.mode,x),x.ref=gl(f,null,v),x.return=f,x;case ca:return v=fh(v,f.mode,x),v.return=f,v;case rs:var y=v._init;return h(f,y(v._payload),x)}if(bl(v)||dl(v))return v=mo(v,f.mode,x,null),v.return=f,v;lc(f,v)}return null}function d(f,v,x,y){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(f,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zu:return x.key===w?l(f,v,x,y):null;case ca:return x.key===w?u(f,v,x,y):null;case rs:return w=x._init,d(f,v,w(x._payload),y)}if(bl(x)||dl(x))return w!==null?null:c(f,v,x,y,null);lc(f,x)}return null}function p(f,v,x,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(x)||null,a(v,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zu:return f=f.get(y.key===null?x:y.key)||null,l(v,f,y,w);case ca:return f=f.get(y.key===null?x:y.key)||null,u(v,f,y,w);case rs:var T=y._init;return p(f,v,x,T(y._payload),w)}if(bl(y)||dl(y))return f=f.get(x)||null,c(v,f,y,w,null);lc(v,y)}return null}function g(f,v,x,y){for(var w=null,T=null,M=v,P=v=0,S=null;M!==null&&P<x.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var E=d(f,M,x[P],y);if(E===null){M===null&&(M=S);break}n&&M&&E.alternate===null&&e(f,M),v=s(E,v,P),T===null?w=E:T.sibling=E,T=E,M=S}if(P===x.length)return t(f,M),Lt&&Zs(f,P),w;if(M===null){for(;P<x.length;P++)M=h(f,x[P],y),M!==null&&(v=s(M,v,P),T===null?w=M:T.sibling=M,T=M);return Lt&&Zs(f,P),w}for(M=i(f,M);P<x.length;P++)S=p(M,f,P,x[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),T===null?w=S:T.sibling=S,T=S);return n&&M.forEach(function(I){return e(f,I)}),Lt&&Zs(f,P),w}function _(f,v,x,y){var w=dl(x);if(typeof w!="function")throw Error(se(150));if(x=w.call(x),x==null)throw Error(se(151));for(var T=w=null,M=v,P=v=0,S=null,E=x.next();M!==null&&!E.done;P++,E=x.next()){M.index>P?(S=M,M=null):S=M.sibling;var I=d(f,M,E.value,y);if(I===null){M===null&&(M=S);break}n&&M&&I.alternate===null&&e(f,M),v=s(I,v,P),T===null?w=I:T.sibling=I,T=I,M=S}if(E.done)return t(f,M),Lt&&Zs(f,P),w;if(M===null){for(;!E.done;P++,E=x.next())E=h(f,E.value,y),E!==null&&(v=s(E,v,P),T===null?w=E:T.sibling=E,T=E);return Lt&&Zs(f,P),w}for(M=i(f,M);!E.done;P++,E=x.next())E=p(M,f,P,E.value,y),E!==null&&(n&&E.alternate!==null&&M.delete(E.key===null?P:E.key),v=s(E,v,P),T===null?w=E:T.sibling=E,T=E);return n&&M.forEach(function(N){return e(f,N)}),Lt&&Zs(f,P),w}function m(f,v,x,y){if(typeof x=="object"&&x!==null&&x.type===fa&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Zu:e:{for(var w=x.key,T=v;T!==null;){if(T.key===w){if(w=x.type,w===fa){if(T.tag===7){t(f,T.sibling),v=r(T,x.props.children),v.return=f,f=v;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===rs&&e0(w)===T.type){t(f,T.sibling),v=r(T,x.props),v.ref=gl(f,T,x),v.return=f,f=v;break e}t(f,T);break}else e(f,T);T=T.sibling}x.type===fa?(v=mo(x.props.children,f.mode,y,x.key),v.return=f,f=v):(y=ff(x.type,x.key,x.props,null,f.mode,y),y.ref=gl(f,v,x),y.return=f,f=y)}return o(f);case ca:e:{for(T=x.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(f,v.sibling),v=r(v,x.children||[]),v.return=f,f=v;break e}else{t(f,v);break}else e(f,v);v=v.sibling}v=fh(x,f.mode,y),v.return=f,f=v}return o(f);case rs:return T=x._init,m(f,v,T(x._payload),y)}if(bl(x))return g(f,v,x,y);if(dl(x))return _(f,v,x,y);lc(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(f,v.sibling),v=r(v,x),v.return=f,f=v):(t(f,v),v=ch(x,f.mode,y),v.return=f,f=v),o(f)):t(f,v)}return m}var Ya=Ky(!0),Zy=Ky(!1),If=Bs(null),Of=null,xa=null,o_=null;function a_(){o_=xa=Of=null}function l_(n){var e=If.current;bt(If),n._currentValue=e}function Up(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Da(n,e){Of=n,o_=xa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Zn=!0),n.firstContext=null)}function ji(n){var e=n._currentValue;if(o_!==n)if(n={context:n,memoizedValue:e,next:null},xa===null){if(Of===null)throw Error(se(308));xa=n,Of.dependencies={lanes:0,firstContext:n}}else xa=xa.next=n;return e}var ao=null;function u_(n){ao===null?ao=[n]:ao.push(n)}function Qy(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,u_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xr(n,i)}function Xr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ss=!1;function c_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ms(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xr(n,t)}return r=i.interleaved,r===null?(e.next=e,u_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xr(n,t)}function sf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,$m(n,t)}}function t0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ff(n,e,t,i){var r=n.updateQueue;ss=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(d=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=zt({},h,d);break e;case 2:ss=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);bo|=o,n.lanes=o,n.memoizedState=h}}function n0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Hu={},Mr=Bs(Hu),xu=Bs(Hu),yu=Bs(Hu);function lo(n){if(n===Hu)throw Error(se(174));return n}function f_(n,e){switch(wt(yu,e),wt(xu,n),wt(Mr,Hu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=hp(e,n)}bt(Mr),wt(Mr,e)}function ja(){bt(Mr),bt(xu),bt(yu)}function eS(n){lo(yu.current);var e=lo(Mr.current),t=hp(e,n.type);e!==t&&(wt(xu,n),wt(Mr,t))}function d_(n){xu.current===n&&(bt(Mr),bt(xu))}var It=Bs(0);function kf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rh=[];function h_(){for(var n=0;n<rh.length;n++)rh[n]._workInProgressVersionPrimary=null;rh.length=0}var of=Kr.ReactCurrentDispatcher,sh=Kr.ReactCurrentBatchConfig,Ro=0,kt=null,Jt=null,ln=null,zf=!1,Wl=!1,Su=0,sw=0;function yn(){throw Error(se(321))}function p_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!cr(n[t],e[t]))return!1;return!0}function m_(n,e,t,i,r,s){if(Ro=s,kt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,of.current=n===null||n.memoizedState===null?uw:cw,n=t(i,r),Wl){s=0;do{if(Wl=!1,Su=0,25<=s)throw Error(se(301));s+=1,ln=Jt=null,e.updateQueue=null,of.current=fw,n=t(i,r)}while(Wl)}if(of.current=Bf,e=Jt!==null&&Jt.next!==null,Ro=0,ln=Jt=kt=null,zf=!1,e)throw Error(se(300));return n}function __(){var n=Su!==0;return Su=0,n}function dr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?kt.memoizedState=ln=n:ln=ln.next=n,ln}function qi(){if(Jt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var e=ln===null?kt.memoizedState:ln.next;if(e!==null)ln=e,Jt=n;else{if(n===null)throw Error(se(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},ln===null?kt.memoizedState=ln=n:ln=ln.next=n}return ln}function Mu(n,e){return typeof e=="function"?e(n):e}function oh(n){var e=qi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=Jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ro&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,kt.lanes|=c,bo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,cr(i,e.memoizedState)||(Zn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,kt.lanes|=s,bo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ah(n){var e=qi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);cr(s,e.memoizedState)||(Zn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function tS(){}function nS(n,e){var t=kt,i=qi(),r=e(),s=!cr(i.memoizedState,r);if(s&&(i.memoizedState=r,Zn=!0),i=i.queue,g_(sS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ln!==null&&ln.memoizedState.tag&1){if(t.flags|=2048,Eu(9,rS.bind(null,t,i,r,e),void 0,null),un===null)throw Error(se(349));Ro&30||iS(t,e,r)}return r}function iS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function rS(n,e,t,i){e.value=t,e.getSnapshot=i,oS(e)&&aS(n)}function sS(n,e,t){return t(function(){oS(e)&&aS(n)})}function oS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!cr(n,t)}catch{return!0}}function aS(n){var e=Xr(n,1);e!==null&&lr(e,n,1,-1)}function i0(n){var e=dr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mu,lastRenderedState:n},e.queue=n,n=n.dispatch=lw.bind(null,kt,n),[e.memoizedState,n]}function Eu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=kt.updateQueue,e===null?(e={lastEffect:null,stores:null},kt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function lS(){return qi().memoizedState}function af(n,e,t,i){var r=dr();kt.flags|=n,r.memoizedState=Eu(1|e,t,void 0,i===void 0?null:i)}function gd(n,e,t,i){var r=qi();i=i===void 0?null:i;var s=void 0;if(Jt!==null){var o=Jt.memoizedState;if(s=o.destroy,i!==null&&p_(i,o.deps)){r.memoizedState=Eu(e,t,s,i);return}}kt.flags|=n,r.memoizedState=Eu(1|e,t,s,i)}function r0(n,e){return af(8390656,8,n,e)}function g_(n,e){return gd(2048,8,n,e)}function uS(n,e){return gd(4,2,n,e)}function cS(n,e){return gd(4,4,n,e)}function fS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function dS(n,e,t){return t=t!=null?t.concat([n]):null,gd(4,4,fS.bind(null,e,n),t)}function v_(){}function hS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&p_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function pS(n,e){var t=qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&p_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function mS(n,e,t){return Ro&21?(cr(t,e)||(t=yy(),kt.lanes|=t,bo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=t)}function ow(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=sh.transition;sh.transition={};try{n(!1),e()}finally{vt=t,sh.transition=i}}function _S(){return qi().memoizedState}function aw(n,e,t){var i=Ts(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},gS(n))vS(e,t);else if(t=Qy(n,e,t,i),t!==null){var r=Gn();lr(t,n,i,r),xS(t,e,i)}}function lw(n,e,t){var i=Ts(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(gS(n))vS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,cr(a,o)){var l=e.interleaved;l===null?(r.next=r,u_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Qy(n,e,r,i),t!==null&&(r=Gn(),lr(t,n,i,r),xS(t,e,i))}}function gS(n){var e=n.alternate;return n===kt||e!==null&&e===kt}function vS(n,e){Wl=zf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function xS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,$m(n,t)}}var Bf={readContext:ji,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},uw={readContext:ji,useCallback:function(n,e){return dr().memoizedState=[n,e===void 0?null:e],n},useContext:ji,useEffect:r0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,af(4194308,4,fS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return af(4194308,4,n,e)},useInsertionEffect:function(n,e){return af(4,2,n,e)},useMemo:function(n,e){var t=dr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=dr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=aw.bind(null,kt,n),[i.memoizedState,n]},useRef:function(n){var e=dr();return n={current:n},e.memoizedState=n},useState:i0,useDebugValue:v_,useDeferredValue:function(n){return dr().memoizedState=n},useTransition:function(){var n=i0(!1),e=n[0];return n=ow.bind(null,n[1]),dr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=kt,r=dr();if(Lt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),un===null)throw Error(se(349));Ro&30||iS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,r0(sS.bind(null,i,s,n),[n]),i.flags|=2048,Eu(9,rS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=dr(),e=un.identifierPrefix;if(Lt){var t=kr,i=Fr;t=(i&~(1<<32-ar(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Su++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=sw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},cw={readContext:ji,useCallback:hS,useContext:ji,useEffect:g_,useImperativeHandle:dS,useInsertionEffect:uS,useLayoutEffect:cS,useMemo:pS,useReducer:oh,useRef:lS,useState:function(){return oh(Mu)},useDebugValue:v_,useDeferredValue:function(n){var e=qi();return mS(e,Jt.memoizedState,n)},useTransition:function(){var n=oh(Mu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:tS,useSyncExternalStore:nS,useId:_S,unstable_isNewReconciler:!1},fw={readContext:ji,useCallback:hS,useContext:ji,useEffect:g_,useImperativeHandle:dS,useInsertionEffect:uS,useLayoutEffect:cS,useMemo:pS,useReducer:ah,useRef:lS,useState:function(){return ah(Mu)},useDebugValue:v_,useDeferredValue:function(n){var e=qi();return Jt===null?e.memoizedState=n:mS(e,Jt.memoizedState,n)},useTransition:function(){var n=ah(Mu)[0],e=qi().memoizedState;return[n,e]},useMutableSource:tS,useSyncExternalStore:nS,useId:_S,unstable_isNewReconciler:!1};function tr(n,e){if(n&&n.defaultProps){e=zt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Np(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:zt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var vd={isMounted:function(n){return(n=n._reactInternals)?ko(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=Ts(n),s=Hr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ms(n,s,r),e!==null&&(lr(e,n,r,i),sf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=Ts(n),s=Hr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ms(n,s,r),e!==null&&(lr(e,n,r,i),sf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Gn(),i=Ts(n),r=Hr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ms(n,r,i),e!==null&&(lr(e,n,i,t),sf(e,n,i))}};function s0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mu(t,i)||!mu(r,s):!0}function yS(n,e,t){var i=!1,r=Us,s=e.contextType;return typeof s=="object"&&s!==null?s=ji(s):(r=Jn(e)?Ao:Pn.current,i=e.contextTypes,s=(i=i!=null)?Wa(n,r):Us),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function o0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&vd.enqueueReplaceState(e,e.state,null)}function Ip(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},c_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ji(s):(s=Jn(e)?Ao:Pn.current,r.context=Wa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Np(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vd.enqueueReplaceState(r,r.state,null),Ff(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function qa(n,e){try{var t="",i=e;do t+=z1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function lh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Op(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var dw=typeof WeakMap=="function"?WeakMap:Map;function SS(n,e,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Gf||(Gf=!0,Yp=i),Op(n,e)},t}function MS(n,e,t){t=Hr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Op(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Op(n,e),typeof i!="function"&&(Es===null?Es=new Set([this]):Es.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function a0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new dw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Aw.bind(null,n,e,t),e.then(n,n))}function l0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function u0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hr(-1,1),e.tag=2,Ms(t,e,1))),t.lanes|=1),n)}var hw=Kr.ReactCurrentOwner,Zn=!1;function On(n,e,t,i){e.child=n===null?Zy(e,null,t,i):Ya(e,n.child,t,i)}function c0(n,e,t,i,r){t=t.render;var s=e.ref;return Da(e,r),i=m_(n,e,t,i,s,r),t=__(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(Lt&&t&&i_(e),e.flags|=1,On(n,e,i,r),e.child)}function f0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!A_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,ES(n,e,s,i,r)):(n=ff(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:mu,t(o,i)&&n.ref===e.ref)return Yr(n,e,r)}return e.flags|=1,n=ws(s,i),n.ref=e.ref,n.return=e,e.child=n}function ES(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(mu(s,i)&&n.ref===e.ref)if(Zn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Zn=!0);else return e.lanes=n.lanes,Yr(n,e,r)}return Fp(n,e,t,i,r)}function TS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Sa,hi),hi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(Sa,hi),hi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(Sa,hi),hi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(Sa,hi),hi|=i;return On(n,e,r,t),e.child}function wS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Fp(n,e,t,i,r){var s=Jn(t)?Ao:Pn.current;return s=Wa(e,s),Da(e,r),t=m_(n,e,t,i,s,r),i=__(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yr(n,e,r)):(Lt&&i&&i_(e),e.flags|=1,On(n,e,t,r),e.child)}function d0(n,e,t,i,r){if(Jn(t)){var s=!0;Df(e)}else s=!1;if(Da(e,r),e.stateNode===null)lf(n,e),yS(e,t,i),Ip(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ji(u):(u=Jn(t)?Ao:Pn.current,u=Wa(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&o0(e,o,i,u),ss=!1;var d=e.memoizedState;o.state=d,Ff(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Qn.current||ss?(typeof c=="function"&&(Np(e,t,c,i),l=e.memoizedState),(a=ss||s0(e,t,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Jy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:tr(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ji(l):(l=Jn(t)?Ao:Pn.current,l=Wa(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&o0(e,o,i,l),ss=!1,d=e.memoizedState,o.state=d,Ff(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||Qn.current||ss?(typeof p=="function"&&(Np(e,t,p,i),g=e.memoizedState),(u=ss||s0(e,t,u,i,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return kp(n,e,t,i,s,r)}function kp(n,e,t,i,r,s){wS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zg(e,t,!1),Yr(n,e,s);i=e.stateNode,hw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ya(e,n.child,null,s),e.child=Ya(e,null,a,s)):On(n,e,a,s),e.memoizedState=i.state,r&&Zg(e,t,!0),e.child}function AS(n){var e=n.stateNode;e.pendingContext?Kg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Kg(n,e.context,!1),f_(n,e.containerInfo)}function h0(n,e,t,i,r){return Xa(),s_(r),e.flags|=256,On(n,e,t,i),e.child}var zp={dehydrated:null,treeContext:null,retryLane:0};function Bp(n){return{baseLanes:n,cachePool:null,transitions:null}}function CS(n,e,t){var i=e.pendingProps,r=It.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(It,r&1),n===null)return Dp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sd(o,i,0,null),n=mo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Bp(t),e.memoizedState=zp,n):x_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return pw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ws(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ws(a,s):(s=mo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Bp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=zp,i}return s=n.child,n=s.sibling,i=ws(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function x_(n,e){return e=Sd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function uc(n,e,t,i){return i!==null&&s_(i),Ya(e,n.child,null,t),n=x_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function pw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=lh(Error(se(422))),uc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sd({mode:"visible",children:i.children},r,0,null),s=mo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ya(e,n.child,null,o),e.child.memoizedState=Bp(o),e.memoizedState=zp,s);if(!(e.mode&1))return uc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=lh(s,i,void 0),uc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Zn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xr(n,r),lr(i,n,r,-1))}return w_(),i=lh(Error(se(421))),uc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Cw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,xi=Ss(r.nextSibling),Mi=e,Lt=!0,ir=null,n!==null&&(Ni[Ii++]=Fr,Ni[Ii++]=kr,Ni[Ii++]=Co,Fr=n.id,kr=n.overflow,Co=e),e=x_(e,i.children),e.flags|=4096,e)}function p0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Up(n.return,e,t)}function uh(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function RS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(On(n,e,i.children,t),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&p0(n,t,e);else if(n.tag===19)p0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(It,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&kf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),uh(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&kf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}uh(e,!0,t,null,s);break;case"together":uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),bo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=ws(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ws(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function mw(n,e,t){switch(e.tag){case 3:AS(e),Xa();break;case 5:eS(e);break;case 1:Jn(e.type)&&Df(e);break;case 4:f_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(If,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(It,It.current&1),e.flags|=128,null):t&e.child.childLanes?CS(n,e,t):(wt(It,It.current&1),n=Yr(n,e,t),n!==null?n.sibling:null);wt(It,It.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return RS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,TS(n,e,t)}return Yr(n,e,t)}var bS,Hp,PS,LS;bS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hp=function(){};PS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,lo(Mr.current);var s=null;switch(t){case"input":r=up(n,r),i=up(n,i),s=[];break;case"select":r=zt({},r,{value:void 0}),i=zt({},i,{value:void 0}),s=[];break;case"textarea":r=dp(n,r),i=dp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Pf)}pp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};LS=function(n,e,t,i){t!==i&&(e.flags|=4)};function vl(n,e){if(!Lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Sn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function _w(n,e,t){var i=e.pendingProps;switch(r_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return Jn(e.type)&&Lf(),Sn(e),null;case 3:return i=e.stateNode,ja(),bt(Qn),bt(Pn),h_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ac(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ir!==null&&($p(ir),ir=null))),Hp(n,e),Sn(e),null;case 5:d_(e);var r=lo(yu.current);if(t=e.type,n!==null&&e.stateNode!=null)PS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Sn(e),null}if(n=lo(Mr.current),ac(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[_r]=e,i[vu]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<Ll.length;r++)Ct(Ll[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Eg(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":wg(i,s),Ct("invalid",i)}pp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&oc(i.textContent,a,n),r=["children",""+a]):lu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":Qu(i),Tg(i,s,!0);break;case"textarea":Qu(i),Ag(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=sy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[_r]=e,n[vu]=i,bS(n,e,!1,!1),e.stateNode=n;e:{switch(o=mp(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ll.length;r++)Ct(Ll[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":Eg(n,i),r=up(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=zt({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":wg(n,i),r=dp(n,i),Ct("invalid",n);break;default:r=i}pp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ly(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&oy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&uu(n,l):typeof l=="number"&&uu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Vm(n,s,l,o))}switch(t){case"input":Qu(n),Tg(n,i,!1);break;case"textarea":Qu(n),Ag(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ds(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ra(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ra(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Pf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(n&&e.stateNode!=null)LS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=lo(yu.current),lo(Mr.current),ac(e)){if(i=e.stateNode,t=e.memoizedProps,i[_r]=e,(s=i.nodeValue!==t)&&(n=Mi,n!==null))switch(n.tag){case 3:oc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&oc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[_r]=e,e.stateNode=i}return Sn(e),null;case 13:if(bt(It),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Lt&&xi!==null&&e.mode&1&&!(e.flags&128))$y(),Xa(),e.flags|=98560,s=!1;else if(s=ac(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[_r]=e}else Xa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else ir!==null&&($p(ir),ir=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||It.current&1?tn===0&&(tn=3):w_())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return ja(),Hp(n,e),n===null&&_u(e.stateNode.containerInfo),Sn(e),null;case 10:return l_(e.type._context),Sn(e),null;case 17:return Jn(e.type)&&Lf(),Sn(e),null;case 19:if(bt(It),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vl(s,!1);else{if(tn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=kf(n),o!==null){for(e.flags|=128,vl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(It,It.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>$a&&(e.flags|=128,i=!0,vl(s,!1),e.lanes=4194304)}else{if(!i)if(n=kf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),vl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Sn(e),null}else 2*Wt()-s.renderingStartTime>$a&&t!==1073741824&&(e.flags|=128,i=!0,vl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=It.current,wt(It,i?t&1|2:t&1),e):(Sn(e),null);case 22:case 23:return T_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hi&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function gw(n,e){switch(r_(e),e.tag){case 1:return Jn(e.type)&&Lf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ja(),bt(Qn),bt(Pn),h_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return d_(e),null;case 13:if(bt(It),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Xa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(It),null;case 4:return ja(),null;case 10:return l_(e.type._context),null;case 22:case 23:return T_(),null;case 24:return null;default:return null}}var cc=!1,An=!1,vw=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ya(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function Gp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var m0=!1;function xw(n,e){if(wp=Cf,n=Oy(),n_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,d=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ap={focusedElem:n,selectionRange:t},Cf=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:tr(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){Ht(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return g=m0,m0=!1,g}function Xl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Gp(e,t,s)}r=r.next}while(r!==i)}}function xd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Vp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function DS(n){var e=n.alternate;e!==null&&(n.alternate=null,DS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[_r],delete e[vu],delete e[bp],delete e[tw],delete e[nw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function US(n){return n.tag===5||n.tag===3||n.tag===4}function _0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||US(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Pf));else if(i!==4&&(n=n.child,n!==null))for(Wp(n,e,t),n=n.sibling;n!==null;)Wp(n,e,t),n=n.sibling}function Xp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Xp(n,e,t),n=n.sibling;n!==null;)Xp(n,e,t),n=n.sibling}var dn=null,nr=!1;function Zr(n,e,t){for(t=t.child;t!==null;)NS(n,e,t),t=t.sibling}function NS(n,e,t){if(Sr&&typeof Sr.onCommitFiberUnmount=="function")try{Sr.onCommitFiberUnmount(fd,t)}catch{}switch(t.tag){case 5:An||ya(t,e);case 6:var i=dn,r=nr;dn=null,Zr(n,e,t),dn=i,nr=r,dn!==null&&(nr?(n=dn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):dn.removeChild(t.stateNode));break;case 18:dn!==null&&(nr?(n=dn,t=t.stateNode,n.nodeType===8?nh(n.parentNode,t):n.nodeType===1&&nh(n,t),hu(n)):nh(dn,t.stateNode));break;case 4:i=dn,r=nr,dn=t.stateNode.containerInfo,nr=!0,Zr(n,e,t),dn=i,nr=r;break;case 0:case 11:case 14:case 15:if(!An&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gp(t,e,o),r=r.next}while(r!==i)}Zr(n,e,t);break;case 1:if(!An&&(ya(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}Zr(n,e,t);break;case 21:Zr(n,e,t);break;case 22:t.mode&1?(An=(i=An)||t.memoizedState!==null,Zr(n,e,t),An=i):Zr(n,e,t);break;default:Zr(n,e,t)}}function g0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new vw),e.forEach(function(i){var r=Rw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Ki(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:dn=a.stateNode,nr=!1;break e;case 3:dn=a.stateNode.containerInfo,nr=!0;break e;case 4:dn=a.stateNode.containerInfo,nr=!0;break e}a=a.return}if(dn===null)throw Error(se(160));NS(s,o,r),dn=null,nr=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)IS(e,n),e=e.sibling}function IS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ki(e,n),fr(n),i&4){try{Xl(3,n,n.return),xd(3,n)}catch(_){Ht(n,n.return,_)}try{Xl(5,n,n.return)}catch(_){Ht(n,n.return,_)}}break;case 1:Ki(e,n),fr(n),i&512&&t!==null&&ya(t,t.return);break;case 5:if(Ki(e,n),fr(n),i&512&&t!==null&&ya(t,t.return),n.flags&32){var r=n.stateNode;try{uu(r,"")}catch(_){Ht(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iy(r,s),mp(a,o);var u=mp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ly(r,h):c==="dangerouslySetInnerHTML"?oy(r,h):c==="children"?uu(r,h):Vm(r,c,h,u)}switch(a){case"input":cp(r,s);break;case"textarea":ry(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ra(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ra(r,!!s.multiple,s.defaultValue,!0):Ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[vu]=s}catch(_){Ht(n,n.return,_)}}break;case 6:if(Ki(e,n),fr(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Ht(n,n.return,_)}}break;case 3:if(Ki(e,n),fr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{hu(e.containerInfo)}catch(_){Ht(n,n.return,_)}break;case 4:Ki(e,n),fr(n);break;case 13:Ki(e,n),fr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(M_=Wt())),i&4&&g0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(An=(u=An)||c,Ki(e,n),An=u):Ki(e,n),fr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(h=Ee=c;Ee!==null;){switch(d=Ee,p=d.child,d.tag){case 0:case 11:case 14:case 15:Xl(4,d,d.return);break;case 1:ya(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Ht(i,t,_)}}break;case 5:ya(d,d.return);break;case 22:if(d.memoizedState!==null){x0(h);continue}}p!==null?(p.return=d,Ee=p):x0(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ay("display",o))}catch(_){Ht(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Ht(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ki(e,n),fr(n),i&4&&g0(n);break;case 21:break;default:Ki(e,n),fr(n)}}function fr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(US(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(uu(r,""),i.flags&=-33);var s=_0(n);Xp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=_0(n);Wp(n,a,o);break;default:throw Error(se(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function yw(n,e,t){Ee=n,OS(n)}function OS(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||cc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||An;a=cc;var u=An;if(cc=o,(An=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?y0(r):l!==null?(l.return=o,Ee=l):y0(r);for(;s!==null;)Ee=s,OS(s),s=s.sibling;Ee=r,cc=a,An=u}v0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):v0(n)}}function v0(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:An||xd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!An)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:tr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&n0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}n0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&hu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}An||e.flags&512&&Vp(e)}catch(d){Ht(e,e.return,d)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function x0(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function y0(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{xd(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{Vp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{Vp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var Sw=Math.ceil,Hf=Kr.ReactCurrentDispatcher,y_=Kr.ReactCurrentOwner,Xi=Kr.ReactCurrentBatchConfig,ct=0,un=null,$t=null,_n=0,hi=0,Sa=Bs(0),tn=0,Tu=null,bo=0,yd=0,S_=0,Yl=null,jn=null,M_=0,$a=1/0,Dr=null,Gf=!1,Yp=null,Es=null,fc=!1,cs=null,Vf=0,jl=0,jp=null,uf=-1,cf=0;function Gn(){return ct&6?Wt():uf!==-1?uf:uf=Wt()}function Ts(n){return n.mode&1?ct&2&&_n!==0?_n&-_n:rw.transition!==null?(cf===0&&(cf=yy()),cf):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Cy(n.type)),n):1}function lr(n,e,t,i){if(50<jl)throw jl=0,jp=null,Error(se(185));ku(n,t,i),(!(ct&2)||n!==un)&&(n===un&&(!(ct&2)&&(yd|=t),tn===4&&ls(n,_n)),ei(n,i),t===1&&ct===0&&!(e.mode&1)&&($a=Wt()+500,_d&&Hs()))}function ei(n,e){var t=n.callbackNode;rT(n,e);var i=Af(n,n===un?_n:0);if(i===0)t!==null&&bg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&bg(t),e===1)n.tag===0?iw(S0.bind(null,n)):Yy(S0.bind(null,n)),JT(function(){!(ct&6)&&Hs()}),t=null;else{switch(Sy(i)){case 1:t=qm;break;case 4:t=vy;break;case 16:t=wf;break;case 536870912:t=xy;break;default:t=wf}t=WS(t,FS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function FS(n,e){if(uf=-1,cf=0,ct&6)throw Error(se(327));var t=n.callbackNode;if(Ua()&&n.callbackNode!==t)return null;var i=Af(n,n===un?_n:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Wf(n,i);else{e=i;var r=ct;ct|=2;var s=zS();(un!==n||_n!==e)&&(Dr=null,$a=Wt()+500,po(n,e));do try{Tw();break}catch(a){kS(n,a)}while(!0);a_(),Hf.current=s,ct=r,$t!==null?e=0:(un=null,_n=0,e=tn)}if(e!==0){if(e===2&&(r=yp(n),r!==0&&(i=r,e=qp(n,r))),e===1)throw t=Tu,po(n,0),ls(n,i),ei(n,Wt()),t;if(e===6)ls(n,i);else{if(r=n.current.alternate,!(i&30)&&!Mw(r)&&(e=Wf(n,i),e===2&&(s=yp(n),s!==0&&(i=s,e=qp(n,s))),e===1))throw t=Tu,po(n,0),ls(n,i),ei(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Qs(n,jn,Dr);break;case 3:if(ls(n,i),(i&130023424)===i&&(e=M_+500-Wt(),10<e)){if(Af(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Gn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Rp(Qs.bind(null,n,jn,Dr),e);break}Qs(n,jn,Dr);break;case 4:if(ls(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ar(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Sw(i/1960))-i,10<i){n.timeoutHandle=Rp(Qs.bind(null,n,jn,Dr),i);break}Qs(n,jn,Dr);break;case 5:Qs(n,jn,Dr);break;default:throw Error(se(329))}}}return ei(n,Wt()),n.callbackNode===t?FS.bind(null,n):null}function qp(n,e){var t=Yl;return n.current.memoizedState.isDehydrated&&(po(n,e).flags|=256),n=Wf(n,e),n!==2&&(e=jn,jn=t,e!==null&&$p(e)),n}function $p(n){jn===null?jn=n:jn.push.apply(jn,n)}function Mw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!cr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ls(n,e){for(e&=~S_,e&=~yd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ar(e),i=1<<t;n[t]=-1,e&=~i}}function S0(n){if(ct&6)throw Error(se(327));Ua();var e=Af(n,0);if(!(e&1))return ei(n,Wt()),null;var t=Wf(n,e);if(n.tag!==0&&t===2){var i=yp(n);i!==0&&(e=i,t=qp(n,i))}if(t===1)throw t=Tu,po(n,0),ls(n,e),ei(n,Wt()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qs(n,jn,Dr),ei(n,Wt()),null}function E_(n,e){var t=ct;ct|=1;try{return n(e)}finally{ct=t,ct===0&&($a=Wt()+500,_d&&Hs())}}function Po(n){cs!==null&&cs.tag===0&&!(ct&6)&&Ua();var e=ct;ct|=1;var t=Xi.transition,i=vt;try{if(Xi.transition=null,vt=1,n)return n()}finally{vt=i,Xi.transition=t,ct=e,!(ct&6)&&Hs()}}function T_(){hi=Sa.current,bt(Sa)}function po(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,QT(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(r_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Lf();break;case 3:ja(),bt(Qn),bt(Pn),h_();break;case 5:d_(i);break;case 4:ja();break;case 13:bt(It);break;case 19:bt(It);break;case 10:l_(i.type._context);break;case 22:case 23:T_()}t=t.return}if(un=n,$t=n=ws(n.current,null),_n=hi=e,tn=0,Tu=null,S_=yd=bo=0,jn=Yl=null,ao!==null){for(e=0;e<ao.length;e++)if(t=ao[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ao=null}return n}function kS(n,e){do{var t=$t;try{if(a_(),of.current=Bf,zf){for(var i=kt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zf=!1}if(Ro=0,ln=Jt=kt=null,Wl=!1,Su=0,y_.current=null,t===null||t.return===null){tn=1,Tu=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=l0(o);if(p!==null){p.flags&=-257,u0(p,o,a,s,e),p.mode&1&&a0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){a0(s,u,e),w_();break e}l=Error(se(426))}}else if(Lt&&a.mode&1){var m=l0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),u0(m,o,a,s,e),s_(qa(l,a));break e}}s=l=qa(l,a),tn!==4&&(tn=2),Yl===null?Yl=[s]:Yl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=SS(s,l,e);t0(s,f);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Es===null||!Es.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=MS(s,a,e);t0(s,y);break e}}s=s.return}while(s!==null)}HS(t)}catch(w){e=w,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function zS(){var n=Hf.current;return Hf.current=Bf,n===null?Bf:n}function w_(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||!(bo&268435455)&&!(yd&268435455)||ls(un,_n)}function Wf(n,e){var t=ct;ct|=2;var i=zS();(un!==n||_n!==e)&&(Dr=null,po(n,e));do try{Ew();break}catch(r){kS(n,r)}while(!0);if(a_(),ct=t,Hf.current=i,$t!==null)throw Error(se(261));return un=null,_n=0,tn}function Ew(){for(;$t!==null;)BS($t)}function Tw(){for(;$t!==null&&!$1();)BS($t)}function BS(n){var e=VS(n.alternate,n,hi);n.memoizedProps=n.pendingProps,e===null?HS(n):$t=e,y_.current=null}function HS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=gw(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,$t=null;return}}else if(t=_w(t,e,hi),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);tn===0&&(tn=5)}function Qs(n,e,t){var i=vt,r=Xi.transition;try{Xi.transition=null,vt=1,ww(n,e,t,i)}finally{Xi.transition=r,vt=i}return null}function ww(n,e,t,i){do Ua();while(cs!==null);if(ct&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(sT(n,s),n===un&&($t=un=null,_n=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||fc||(fc=!0,WS(wf,function(){return Ua(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Xi.transition,Xi.transition=null;var o=vt;vt=1;var a=ct;ct|=4,y_.current=null,xw(n,t),IS(t,n),XT(Ap),Cf=!!wp,Ap=wp=null,n.current=t,yw(t),K1(),ct=a,vt=o,Xi.transition=s}else n.current=t;if(fc&&(fc=!1,cs=n,Vf=r),s=n.pendingLanes,s===0&&(Es=null),J1(t.stateNode),ei(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gf)throw Gf=!1,n=Yp,Yp=null,n;return Vf&1&&n.tag!==0&&Ua(),s=n.pendingLanes,s&1?n===jp?jl++:(jl=0,jp=n):jl=0,Hs(),null}function Ua(){if(cs!==null){var n=Sy(Vf),e=Xi.transition,t=vt;try{if(Xi.transition=null,vt=16>n?16:n,cs===null)var i=!1;else{if(n=cs,cs=null,Vf=0,ct&6)throw Error(se(331));var r=ct;for(ct|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Xl(8,c,s)}var h=c.child;if(h!==null)h.return=c,Ee=h;else for(;Ee!==null;){c=Ee;var d=c.sibling,p=c.return;if(DS(c),c===u){Ee=null;break}if(d!==null){d.return=p,Ee=d;break}Ee=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xl(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Ee=f;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xd(9,a)}}catch(w){Ht(a,a.return,w)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(ct=r,Hs(),Sr&&typeof Sr.onPostCommitFiberRoot=="function")try{Sr.onPostCommitFiberRoot(fd,n)}catch{}i=!0}return i}finally{vt=t,Xi.transition=e}}return!1}function M0(n,e,t){e=qa(t,e),e=SS(n,e,1),n=Ms(n,e,1),e=Gn(),n!==null&&(ku(n,1,e),ei(n,e))}function Ht(n,e,t){if(n.tag===3)M0(n,n,t);else for(;e!==null;){if(e.tag===3){M0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Es===null||!Es.has(i))){n=qa(t,n),n=MS(e,n,1),e=Ms(e,n,1),n=Gn(),e!==null&&(ku(e,1,n),ei(e,n));break}}e=e.return}}function Aw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Gn(),n.pingedLanes|=n.suspendedLanes&t,un===n&&(_n&t)===t&&(tn===4||tn===3&&(_n&130023424)===_n&&500>Wt()-M_?po(n,0):S_|=t),ei(n,e)}function GS(n,e){e===0&&(n.mode&1?(e=tc,tc<<=1,!(tc&130023424)&&(tc=4194304)):e=1);var t=Gn();n=Xr(n,e),n!==null&&(ku(n,e,t),ei(n,t))}function Cw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),GS(n,t)}function Rw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),GS(n,t)}var VS;VS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Qn.current)Zn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Zn=!1,mw(n,e,t);Zn=!!(n.flags&131072)}else Zn=!1,Lt&&e.flags&1048576&&jy(e,Nf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;lf(n,e),n=e.pendingProps;var r=Wa(e,Pn.current);Da(e,t),r=m_(null,e,i,n,r,t);var s=__();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Jn(i)?(s=!0,Df(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,c_(e),r.updater=vd,e.stateNode=r,r._reactInternals=e,Ip(e,i,n,t),e=kp(null,e,i,!0,s,t)):(e.tag=0,Lt&&s&&i_(e),On(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(lf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Pw(i),n=tr(i,n),r){case 0:e=Fp(null,e,i,n,t);break e;case 1:e=d0(null,e,i,n,t);break e;case 11:e=c0(null,e,i,n,t);break e;case 14:e=f0(null,e,i,tr(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),Fp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),d0(n,e,i,r,t);case 3:e:{if(AS(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Jy(n,e),Ff(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qa(Error(se(423)),e),e=h0(n,e,i,t,r);break e}else if(i!==r){r=qa(Error(se(424)),e),e=h0(n,e,i,t,r);break e}else for(xi=Ss(e.stateNode.containerInfo.firstChild),Mi=e,Lt=!0,ir=null,t=Zy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xa(),i===r){e=Yr(n,e,t);break e}On(n,e,i,t)}e=e.child}return e;case 5:return eS(e),n===null&&Dp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Cp(i,r)?o=null:s!==null&&Cp(i,s)&&(e.flags|=32),wS(n,e),On(n,e,o,t),e.child;case 6:return n===null&&Dp(e),null;case 13:return CS(n,e,t);case 4:return f_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ya(e,null,i,t):On(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),c0(n,e,i,r,t);case 7:return On(n,e,e.pendingProps,t),e.child;case 8:return On(n,e,e.pendingProps.children,t),e.child;case 12:return On(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(If,i._currentValue),i._currentValue=o,s!==null)if(cr(s.value,o)){if(s.children===r.children&&!Qn.current){e=Yr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Up(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Up(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}On(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Da(e,t),r=ji(r),i=i(r),e.flags|=1,On(n,e,i,t),e.child;case 14:return i=e.type,r=tr(i,e.pendingProps),r=tr(i.type,r),f0(n,e,i,r,t);case 15:return ES(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:tr(i,r),lf(n,e),e.tag=1,Jn(i)?(n=!0,Df(e)):n=!1,Da(e,t),yS(e,i,r),Ip(e,i,r,t),kp(null,e,i,!0,n,t);case 19:return RS(n,e,t);case 22:return TS(n,e,t)}throw Error(se(156,e.tag))};function WS(n,e){return gy(n,e)}function bw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hi(n,e,t,i){return new bw(n,e,t,i)}function A_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pw(n){if(typeof n=="function")return A_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Xm)return 11;if(n===Ym)return 14}return 2}function ws(n,e){var t=n.alternate;return t===null?(t=Hi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ff(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")A_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case fa:return mo(t.children,r,s,e);case Wm:o=8,r|=8;break;case sp:return n=Hi(12,t,e,r|2),n.elementType=sp,n.lanes=s,n;case op:return n=Hi(13,t,e,r),n.elementType=op,n.lanes=s,n;case ap:return n=Hi(19,t,e,r),n.elementType=ap,n.lanes=s,n;case ey:return Sd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Qx:o=10;break e;case Jx:o=9;break e;case Xm:o=11;break e;case Ym:o=14;break e;case rs:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Hi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function mo(n,e,t,i){return n=Hi(7,n,i,e),n.lanes=t,n}function Sd(n,e,t,i){return n=Hi(22,n,i,e),n.elementType=ey,n.lanes=t,n.stateNode={isHidden:!1},n}function ch(n,e,t){return n=Hi(6,n,null,e),n.lanes=t,n}function fh(n,e,t){return e=Hi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Lw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xd(0),this.expirationTimes=Xd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function C_(n,e,t,i,r,s,o,a,l){return n=new Lw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},c_(s),n}function Dw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ca,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function XS(n){if(!n)return Us;n=n._reactInternals;e:{if(ko(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Jn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(Jn(t))return Xy(n,t,e)}return e}function YS(n,e,t,i,r,s,o,a,l){return n=C_(t,i,!0,n,r,s,o,a,l),n.context=XS(null),t=n.current,i=Gn(),r=Ts(t),s=Hr(i,r),s.callback=e??null,Ms(t,s,r),n.current.lanes=r,ku(n,r,i),ei(n,i),n}function Md(n,e,t,i){var r=e.current,s=Gn(),o=Ts(r);return t=XS(t),e.context===null?e.context=t:e.pendingContext=t,e=Hr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ms(r,e,o),n!==null&&(lr(n,r,o,s),sf(n,r,o)),o}function Xf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function E0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function R_(n,e){E0(n,e),(n=n.alternate)&&E0(n,e)}function Uw(){return null}var jS=typeof reportError=="function"?reportError:function(n){console.error(n)};function b_(n){this._internalRoot=n}Ed.prototype.render=b_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));Md(n,e,null,null)};Ed.prototype.unmount=b_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Po(function(){Md(null,n,null,null)}),e[Wr]=null}};function Ed(n){this._internalRoot=n}Ed.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ty();n={blockedOn:null,target:n,priority:e};for(var t=0;t<as.length&&e!==0&&e<as[t].priority;t++);as.splice(t,0,n),t===0&&Ay(n)}};function P_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function T0(){}function Nw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Xf(o);s.call(u)}}var o=YS(e,i,n,0,null,!1,!1,"",T0);return n._reactRootContainer=o,n[Wr]=o.current,_u(n.nodeType===8?n.parentNode:n),Po(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Xf(l);a.call(u)}}var l=C_(n,0,!1,null,null,!1,!1,"",T0);return n._reactRootContainer=l,n[Wr]=l.current,_u(n.nodeType===8?n.parentNode:n),Po(function(){Md(e,l,t,i)}),l}function wd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xf(o);a.call(l)}}Md(e,o,n,r)}else o=Nw(t,e,n,r,i);return Xf(o)}My=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Pl(e.pendingLanes);t!==0&&($m(e,t|1),ei(e,Wt()),!(ct&6)&&($a=Wt()+500,Hs()))}break;case 13:Po(function(){var i=Xr(n,1);if(i!==null){var r=Gn();lr(i,n,1,r)}}),R_(n,1)}};Km=function(n){if(n.tag===13){var e=Xr(n,134217728);if(e!==null){var t=Gn();lr(e,n,134217728,t)}R_(n,134217728)}};Ey=function(n){if(n.tag===13){var e=Ts(n),t=Xr(n,e);if(t!==null){var i=Gn();lr(t,n,e,i)}R_(n,e)}};Ty=function(){return vt};wy=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};gp=function(n,e,t){switch(e){case"input":if(cp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=md(i);if(!r)throw Error(se(90));ny(i),cp(i,r)}}}break;case"textarea":ry(n,t);break;case"select":e=t.value,e!=null&&Ra(n,!!t.multiple,e,!1)}};fy=E_;dy=Po;var Iw={usingClientEntryPoint:!1,Events:[Bu,ma,md,uy,cy,E_]},xl={findFiberByHostInstance:oo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ow={bundleType:xl.bundleType,version:xl.version,rendererPackageName:xl.rendererPackageName,rendererConfig:xl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=my(n),n===null?null:n.stateNode},findFiberByHostInstance:xl.findFiberByHostInstance||Uw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{fd=dc.inject(Ow),Sr=dc}catch{}}bi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iw;bi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!P_(e))throw Error(se(200));return Dw(n,e,null,t)};bi.createRoot=function(n,e){if(!P_(n))throw Error(se(299));var t=!1,i="",r=jS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=C_(n,1,!1,null,null,t,!1,i,r),n[Wr]=e.current,_u(n.nodeType===8?n.parentNode:n),new b_(e)};bi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=my(e),n=n===null?null:n.stateNode,n};bi.flushSync=function(n){return Po(n)};bi.hydrate=function(n,e,t){if(!Td(e))throw Error(se(200));return wd(null,n,e,!0,t)};bi.hydrateRoot=function(n,e,t){if(!P_(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=jS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=YS(e,null,n,1,t??null,r,!1,s,o),n[Wr]=e.current,_u(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ed(e)};bi.render=function(n,e,t){if(!Td(e))throw Error(se(200));return wd(null,n,e,!1,t)};bi.unmountComponentAtNode=function(n){if(!Td(n))throw Error(se(40));return n._reactRootContainer?(Po(function(){wd(null,null,n,!1,function(){n._reactRootContainer=null,n[Wr]=null})}),!0):!1};bi.unstable_batchedUpdates=E_;bi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Td(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return wd(n,e,t,!1,i)};bi.version="18.3.1-next-f1338f8080-20240426";function qS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qS)}catch(n){console.error(n)}}qS(),qx.exports=bi;var Fw=qx.exports,w0=Fw;ip.createRoot=w0.createRoot,ip.hydrateRoot=w0.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const L_="160",kw=0,A0=1,zw=2,$S=1,Bw=2,Lr=3,Ns=0,ti=1,zi=2,As=0,Na=1,io=2,C0=3,R0=4,Hw=5,ro=100,Gw=101,Vw=102,b0=103,P0=104,Ww=200,Xw=201,Yw=202,jw=203,Kp=204,Zp=205,qw=206,$w=207,Kw=208,Zw=209,Qw=210,Jw=211,eA=212,tA=213,nA=214,iA=0,rA=1,sA=2,Yf=3,oA=4,aA=5,lA=6,uA=7,KS=0,cA=1,fA=2,Cs=0,dA=1,hA=2,pA=3,mA=4,_A=5,gA=6,ZS=300,Ka=301,Za=302,Qp=303,Jp=304,Ad=306,em=1e3,sr=1001,tm=1002,zn=1003,L0=1004,dh=1005,qn=1006,vA=1007,wu=1008,Rs=1009,xA=1010,yA=1011,D_=1012,QS=1013,fs=1014,ds=1015,Au=1016,JS=1017,eM=1018,_o=1020,SA=1021,or=1023,MA=1024,EA=1025,go=1026,Qa=1027,TA=1028,tM=1029,wA=1030,nM=1031,iM=1033,hh=33776,ph=33777,mh=33778,_h=33779,D0=35840,U0=35841,N0=35842,I0=35843,rM=36196,O0=37492,F0=37496,k0=37808,z0=37809,B0=37810,H0=37811,G0=37812,V0=37813,W0=37814,X0=37815,Y0=37816,j0=37817,q0=37818,$0=37819,K0=37820,Z0=37821,gh=36492,Q0=36494,J0=36495,AA=36283,ev=36284,tv=36285,nv=36286,sM=3e3,vo=3001,CA=3200,RA=3201,bA=0,PA=1,Bi="",hn="srgb",jr="srgb-linear",U_="display-p3",Cd="display-p3-linear",jf="linear",Rt="srgb",qf="rec709",$f="p3",Ho=7680,iv=519,LA=512,DA=513,UA=514,oM=515,NA=516,IA=517,OA=518,FA=519,rv=35044,sv="300 es",nm=1035,zr=2e3,Kf=2001;class ul{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=Math.PI/180,im=180/Math.PI;function Gu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function $n(n,e,t){return Math.max(e,Math.min(t,n))}function kA(n,e){return(n%e+e)%e}function xh(n,e,t){return(1-t)*n+t*e}function ov(n){return(n&n-1)===0&&n!==0}function rm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,i,r,s,o,a,l,u){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],f=r[6],v=r[1],x=r[4],y=r[7],w=r[2],T=r[5],M=r[8];return s[0]=o*_+a*v+l*w,s[3]=o*m+a*x+l*T,s[6]=o*f+a*y+l*M,s[1]=u*_+c*v+h*w,s[4]=u*m+c*x+h*T,s[7]=u*f+c*y+h*M,s[2]=d*_+p*v+g*w,s[5]=d*m+p*x+g*T,s[8]=d*f+p*y+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,g=t*h+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yh.makeScale(e,t)),this}rotate(e){return this.premultiply(yh.makeRotation(-e)),this}translate(e,t){return this.premultiply(yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yh=new it;function aM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zA(){const n=Zf("canvas");return n.style.display="block",n}const av={};function ql(n){n in av||(av[n]=!0,console.warn(n))}const lv=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uv=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hc={[jr]:{transfer:jf,primaries:qf,toReference:n=>n,fromReference:n=>n},[hn]:{transfer:Rt,primaries:qf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cd]:{transfer:jf,primaries:$f,toReference:n=>n.applyMatrix3(uv),fromReference:n=>n.applyMatrix3(lv)},[U_]:{transfer:Rt,primaries:$f,toReference:n=>n.convertSRGBToLinear().applyMatrix3(uv),fromReference:n=>n.applyMatrix3(lv).convertLinearToSRGB()}},BA=new Set([jr,Cd]),yt={enabled:!0,_workingColorSpace:jr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!BA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=hc[e].toReference,r=hc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return hc[n].primaries},getTransfer:function(n){return n===Bi?jf:hc[n].transfer}};function Ia(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Go;class lM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Go===void 0&&(Go=Zf("canvas")),Go.width=e.width,Go.height=e.height;const i=Go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Go}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ia(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ia(t[i]/255)*255):t[i]=Ia(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HA=0;class uM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=Gu(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Mh(r[o].image)):s.push(Mh(r[o]))}else s=Mh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Mh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GA=0;class ni extends ul{constructor(e=ni.DEFAULT_IMAGE,t=ni.DEFAULT_MAPPING,i=sr,r=sr,s=qn,o=wu,a=or,l=Rs,u=ni.DEFAULT_ANISOTROPY,c=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Gu(),this.name="",this.source=new uM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ql("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===vo?hn:Bi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ZS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case em:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case tm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case em:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case tm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ql("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===hn?vo:sM}set encoding(e){ql("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vo?hn:Bi}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=ZS;ni.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,t=0,i=0,r=1){pn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,w=(f+1)/2,T=(c+d)/4,M=(h+_)/4,P=(g+m)/4;return x>y&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=M/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VA extends ul{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ql("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vo?hn:Bi),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ni(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends VA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cM extends ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WA extends ni{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||u!==p||c!==g){let m=1-a;const f=l*d+u*p+c*g+h*_,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const w=Math.sqrt(x),T=Math.atan2(w,f*v);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*v;if(l=l*m+d*y,u=u*m+p*y,c=c*m+g*y,h=h*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=w,u*=w,c*=w,h*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*p-u*d,e[t+1]=l*g+c*d+u*h-a*p,e[t+2]=u*g+c*p+a*d-l*h,e[t+3]=c*g-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"YXZ":this._x=d*c*h+u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"ZXY":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h-d*p*g;break;case"ZYX":this._x=d*c*h-u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h+d*p*g;break;case"YZX":this._x=d*c*h+u*p*g,this._y=u*p*h+d*c*g,this._z=u*c*g-d*p*h,this._w=u*c*h-d*p*g;break;case"XZY":this._x=d*c*h-u*p*g,this._y=u*p*h-d*c*g,this._z=u*c*g+d*p*h,this._w=u*c*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Eh.copy(this).projectOnVector(e),this.sub(Eh)}reflect(e){return this.sub(Eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($n(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eh=new j,cv=new Vu;class Wu{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zi):Zi.fromBufferAttribute(s,o),Zi.applyMatrix4(e.matrixWorld),this.expandByPoint(Zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zi),Zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sl),mc.subVectors(this.max,Sl),Vo.subVectors(e.a,Sl),Wo.subVectors(e.b,Sl),Xo.subVectors(e.c,Sl),Qr.subVectors(Wo,Vo),Jr.subVectors(Xo,Wo),Xs.subVectors(Vo,Xo);let t=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-Xs.z,Xs.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,Xs.z,0,-Xs.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-Xs.y,Xs.x,0];return!Th(t,Vo,Wo,Xo,mc)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,Vo,Wo,Xo,mc))?!1:(_c.crossVectors(Qr,Jr),t=[_c.x,_c.y,_c.z],Th(t,Vo,Wo,Xo,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ar=[new j,new j,new j,new j,new j,new j,new j,new j],Zi=new j,pc=new Wu,Vo=new j,Wo=new j,Xo=new j,Qr=new j,Jr=new j,Xs=new j,Sl=new j,mc=new j,_c=new j,Ys=new j;function Th(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ys.fromArray(n,s);const a=r.x*Math.abs(Ys.x)+r.y*Math.abs(Ys.y)+r.z*Math.abs(Ys.z),l=e.dot(Ys),u=t.dot(Ys),c=i.dot(Ys);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const XA=new Wu,Ml=new j,wh=new j;class Rd{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):XA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ml.subVectors(e,this.center);const t=Ml.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ml,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ml.copy(e.center).add(wh)),this.expandByPoint(Ml.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cr=new j,Ah=new j,gc=new j,es=new j,Ch=new j,vc=new j,Rh=new j;class N_{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ah.copy(e).add(t).multiplyScalar(.5),gc.copy(t).sub(e).normalize(),es.copy(this.origin).sub(Ah);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gc),a=es.dot(this.direction),l=-es.dot(gc),u=es.lengthSq(),c=Math.abs(1-o*o);let h,d,p,g;if(c>0)if(h=o*l-a,d=o*a-l,g=s*c,h>=0)if(d>=-g)if(d<=g){const _=1/c;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ah).addScaledVector(gc,d),p}intersectSphere(e,t){Cr.subVectors(e.center,this.origin);const i=Cr.dot(this.direction),r=Cr.dot(Cr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,i,r,s){Ch.subVectors(t,e),vc.subVectors(i,e),Rh.crossVectors(Ch,vc);let o=this.direction.dot(Rh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);const l=a*this.direction.dot(vc.crossVectors(es,vc));if(l<0)return null;const u=a*this.direction.dot(Ch.cross(es));if(u<0||l+u>o)return null;const c=-a*es.dot(Rh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,t,i,r,s,o,a,l,u,c,h,d,p,g,_,m){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,d,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yo.setFromMatrixColumn(e,0).length(),s=1/Yo.setFromMatrixColumn(e,1).length(),o=1/Yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=d-_*u,t[9]=-a*l,t[2]=_-d*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,g=u*c,_=u*h;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,g=u*c,_=u*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-p,t[8]=d*u+_,t[1]=l*h,t[5]=_*u+d,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+_,t[5]=o*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*c,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YA,e,jA)}lookAt(e,t,i){const r=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),ts.crossVectors(i,ci),ts.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),ts.crossVectors(i,ci)),ts.normalize(),xc.crossVectors(ci,ts),r[0]=ts.x,r[4]=xc.x,r[8]=ci.x,r[1]=ts.y,r[5]=xc.y,r[9]=ci.y,r[2]=ts.z,r[6]=xc.z,r[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],v=i[3],x=i[7],y=i[11],w=i[15],T=r[0],M=r[4],P=r[8],S=r[12],E=r[1],I=r[5],N=r[9],Z=r[13],L=r[2],O=r[6],B=r[10],G=r[14],D=r[3],F=r[7],R=r[11],$=r[15];return s[0]=o*T+a*E+l*L+u*D,s[4]=o*M+a*I+l*O+u*F,s[8]=o*P+a*N+l*B+u*R,s[12]=o*S+a*Z+l*G+u*$,s[1]=c*T+h*E+d*L+p*D,s[5]=c*M+h*I+d*O+p*F,s[9]=c*P+h*N+d*B+p*R,s[13]=c*S+h*Z+d*G+p*$,s[2]=g*T+_*E+m*L+f*D,s[6]=g*M+_*I+m*O+f*F,s[10]=g*P+_*N+m*B+f*R,s[14]=g*S+_*Z+m*G+f*$,s[3]=v*T+x*E+y*L+w*D,s[7]=v*M+x*I+y*O+w*F,s[11]=v*P+x*N+y*B+w*R,s[15]=v*S+x*Z+y*G+w*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+_*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*h+t*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=h*m*u-_*d*u+_*l*p-a*m*p-h*l*f+a*d*f,x=g*d*u-c*m*u-g*l*p+o*m*p+c*l*f-o*d*f,y=c*_*u-g*h*u+g*a*p-o*_*p-c*a*f+o*h*f,w=g*h*l-c*_*l-g*a*d+o*_*d+c*a*m-o*h*m,T=t*v+i*x+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=v*M,e[1]=(_*d*s-h*m*s-_*r*p+i*m*p+h*r*f-i*d*f)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*f+i*l*f)*M,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*d*s+g*r*p-t*m*p-c*r*f+t*d*f)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*f-t*l*f)*M,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(g*h*s-c*_*s-g*i*p+t*_*p+c*i*f-t*h*f)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*p-t*a*p)*M,e[12]=w*M,e[13]=(c*_*r-g*h*r+g*i*d-t*_*d-c*i*m+t*h*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,g=s*h,_=o*c,m=o*h,f=a*h,v=l*u,x=l*c,y=l*h,w=i.x,T=i.y,M=i.z;return r[0]=(1-(_+f))*w,r[1]=(p+y)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(d+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yo.set(r[0],r[1],r[2]).length();const o=Yo.set(r[4],r[5],r[6]).length(),a=Yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qi.copy(this);const u=1/s,c=1/o,h=1/a;return Qi.elements[0]*=u,Qi.elements[1]*=u,Qi.elements[2]*=u,Qi.elements[4]*=c,Qi.elements[5]*=c,Qi.elements[6]*=c,Qi.elements[8]*=h,Qi.elements[9]*=h,Qi.elements[10]*=h,t.setFromRotationMatrix(Qi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let p,g;if(a===zr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Kf)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zr){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),d=(t+e)*u,p=(i+r)*c;let g,_;if(a===zr)g=(o+s)*h,_=-2*h;else if(a===Kf)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yo=new j,Qi=new cn,YA=new j(0,0,0),jA=new j(1,1,1),ts=new j,xc=new j,ci=new j,fv=new cn,dv=new Vu;class bd{constructor(e=0,t=0,i=0,r=bd.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dv.setFromEuler(this),this.setFromQuaternion(dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bd.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qA=0;const hv=new j,jo=new Vu,Rr=new cn,yc=new j,El=new j,$A=new j,KA=new Vu,pv=new j(1,0,0),mv=new j(0,1,0),_v=new j(0,0,1),ZA={type:"added"},QA={type:"removed"};class ii extends ul{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=Gu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new j,t=new bd,i=new Vu,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new cn},normalMatrix:{value:new it}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jo.setFromAxisAngle(e,t),this.quaternion.multiply(jo),this}rotateOnWorldAxis(e,t){return jo.setFromAxisAngle(e,t),this.quaternion.premultiply(jo),this}rotateX(e){return this.rotateOnAxis(pv,e)}rotateY(e){return this.rotateOnAxis(mv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,t){return hv.copy(e).applyQuaternion(this.quaternion),this.position.add(hv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pv,e)}translateY(e){return this.translateOnAxis(mv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yc.copy(e):yc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(El,yc,this.up):Rr.lookAt(yc,El,this.up),this.quaternion.setFromRotationMatrix(Rr),r&&(Rr.extractRotation(r.matrixWorld),jo.setFromRotationMatrix(Rr),this.quaternion.premultiply(jo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ZA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QA)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,e,$A),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,KA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ii.DEFAULT_UP=new j(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new j,br=new j,bh=new j,Pr=new j,qo=new j,$o=new j,gv=new j,Ph=new j,Lh=new j,Dh=new j;let Sc=!1;class rr{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ji.subVectors(e,t),r.cross(Ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ji.subVectors(r,t),br.subVectors(i,t),bh.subVectors(e,t);const o=Ji.dot(Ji),a=Ji.dot(br),l=Ji.dot(bh),u=br.dot(br),c=br.dot(bh),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,g=(o*c-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getUV(e,t,i,r,s,o,a,l){return Sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sc=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pr.x),l.addScaledVector(o,Pr.y),l.addScaledVector(a,Pr.z),l)}static isFrontFacing(e,t,i,r){return Ji.subVectors(i,t),br.subVectors(e,t),Ji.cross(br).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Ji.cross(br).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Sc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sc=!0),rr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return rr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qo.subVectors(r,i),$o.subVectors(s,i),Ph.subVectors(e,i);const l=qo.dot(Ph),u=$o.dot(Ph);if(l<=0&&u<=0)return t.copy(i);Lh.subVectors(e,r);const c=qo.dot(Lh),h=$o.dot(Lh);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(qo,o);Dh.subVectors(e,s);const p=qo.dot(Dh),g=$o.dot(Dh);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector($o,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return gv.subVectors(s,r),a=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(gv,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(i).addScaledVector(qo,o).addScaledVector($o,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Uh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=i,yt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=yt.workingColorSpace){if(e=kA(e,1),t=$n(t,0,1),i=$n(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Uh(o,s,e+1/3),this.g=Uh(o,s,e),this.b=Uh(o,s,e-1/3)}return yt.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=fM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=Sh(e.r),this.g=Sh(e.g),this.b=Sh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return yt.fromWorkingColorSpace(En.copy(this),e),Math.round($n(En.r*255,0,255))*65536+Math.round($n(En.g*255,0,255))*256+Math.round($n(En.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(En.copy(this),t);const i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(En.copy(this),t),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=hn){yt.fromWorkingColorSpace(En.copy(this),e);const t=En.r,i=En.g,r=En.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Mc);const i=xh(ns.h,Mc.h,t),r=xh(ns.s,Mc.s,t),s=xh(ns.l,Mc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ut;ut.NAMES=fM;let JA=0;class Xu extends ul{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=Gu(),this.name="",this.type="Material",this.blending=Na,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kp,this.blendDst=Zp,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Yf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==Ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kp&&(i.blendSrc=this.blendSrc),this.blendDst!==Zp&&(i.blendDst=this.blendDst),this.blendEquation!==ro&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ho&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ho&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ho&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ma extends Xu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=KS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new j,Ec=new dt;class Ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=rv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ds,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=yl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rv&&(e.usage=this.usage),e}}class dM extends Ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hM extends Ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ti extends Ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let eC=0;const Di=new cn,Nh=new ii,Ko=new j,fi=new Wu,Tl=new Wu,sn=new j;class $i extends ul{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eC++}),this.uuid=Gu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aM(e)?hM:dM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new it().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return Nh.lookAt(e),Nh.updateMatrix(),this.applyMatrix4(Nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ko).negate(),this.translate(Ko.x,Ko.y,Ko.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];fi.setFromBufferAttribute(s),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tl.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(fi.min,Tl.min),fi.expandByPoint(sn),sn.addVectors(fi.max,Tl.max),fi.expandByPoint(sn)):(fi.expandByPoint(Tl.min),fi.expandByPoint(Tl.max))}fi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)sn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(sn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)sn.fromBufferAttribute(a,u),l&&(Ko.fromBufferAttribute(e,u),sn.add(Ko)),r=Math.max(r,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new j,c[E]=new j;const h=new j,d=new j,p=new j,g=new dt,_=new dt,m=new dt,f=new j,v=new j;function x(E,I,N){h.fromArray(r,E*3),d.fromArray(r,I*3),p.fromArray(r,N*3),g.fromArray(o,E*2),_.fromArray(o,I*2),m.fromArray(o,N*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Z),v.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(Z),u[E].add(f),u[I].add(f),u[N].add(f),c[E].add(v),c[I].add(v),c[N].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let E=0,I=y.length;E<I;++E){const N=y[E],Z=N.start,L=N.count;for(let O=Z,B=Z+L;O<B;O+=3)x(i[O+0],i[O+1],i[O+2])}const w=new j,T=new j,M=new j,P=new j;function S(E){M.fromArray(s,E*3),P.copy(M);const I=u[E];w.copy(I),w.sub(M.multiplyScalar(M.dot(I))).normalize(),T.crossVectors(P,I);const Z=T.dot(c[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=Z}for(let E=0,I=y.length;E<I;++E){const N=y[E],Z=N.start,L=N.count;for(let O=Z,B=Z+L;O<B;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,u=new j,c=new j,h=new j;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let f=0;f<c;f++)d[g++]=u[p++]}return new Ei(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vv=new cn,js=new N_,Tc=new Rd,xv=new j,Zo=new j,Qo=new j,Jo=new j,Ih=new j,wc=new j,Ac=new dt,Cc=new dt,Rc=new dt,yv=new j,Sv=new j,Mv=new j,bc=new j,Pc=new j;class Gi extends ii{constructor(e=new $i,t=new Ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){wc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Ih.fromBufferAttribute(h,e),o?wc.addScaledVector(Ih,c):wc.addScaledVector(Ih.sub(t),c))}t.add(wc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),js.copy(e.ray).recast(e.near),!(Tc.containsPoint(js.origin)===!1&&(js.intersectSphere(Tc,xv)===null||js.origin.distanceToSquared(xv)>(e.far-e.near)**2))&&(vv.copy(s).invert(),js.copy(e.ray).applyMatrix4(vv),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=x;y<w;y+=3){const T=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=Lc(this,f,e,i,u,c,h,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Lc(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,w=x;y<w;y+=3){const T=y,M=y+1,P=y+2;r=Lc(this,f,e,i,u,c,h,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,x=m+1,y=m+2;r=Lc(this,o,e,i,u,c,h,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function tC(n,e,t,i,r,s,o,a){let l;if(e.side===ti?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ns,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Pc);return u<t.near||u>t.far?null:{distance:u,point:Pc.clone(),object:n}}function Lc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Zo),n.getVertexPosition(l,Qo),n.getVertexPosition(u,Jo);const c=tC(n,e,t,i,Zo,Qo,Jo,bc);if(c){r&&(Ac.fromBufferAttribute(r,a),Cc.fromBufferAttribute(r,l),Rc.fromBufferAttribute(r,u),c.uv=rr.getInterpolation(bc,Zo,Qo,Jo,Ac,Cc,Rc,new dt)),s&&(Ac.fromBufferAttribute(s,a),Cc.fromBufferAttribute(s,l),Rc.fromBufferAttribute(s,u),c.uv1=rr.getInterpolation(bc,Zo,Qo,Jo,Ac,Cc,Rc,new dt),c.uv2=c.uv1),o&&(yv.fromBufferAttribute(o,a),Sv.fromBufferAttribute(o,l),Mv.fromBufferAttribute(o,u),c.normal=rr.getInterpolation(bc,Zo,Qo,Jo,yv,Sv,Mv,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new j,materialIndex:0};rr.getNormal(Zo,Qo,Jo,h.normal),c.face=h}return c}class Yu extends $i{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ti(u,3)),this.setAttribute("normal",new Ti(c,3)),this.setAttribute("uv",new Ti(h,2));function g(_,m,f,v,x,y,w,T,M,P,S){const E=y/M,I=w/P,N=y/2,Z=w/2,L=T/2,O=M+1,B=P+1;let G=0,D=0;const F=new j;for(let R=0;R<B;R++){const $=R*I-Z;for(let Q=0;Q<O;Q++){const q=Q*E-N;F[_]=q*v,F[m]=$*x,F[f]=L,u.push(F.x,F.y,F.z),F[_]=0,F[m]=0,F[f]=T>0?1:-1,c.push(F.x,F.y,F.z),h.push(Q/M),h.push(1-R/P),G+=1}}for(let R=0;R<P;R++)for(let $=0;$<M;$++){const Q=d+$+O*R,q=d+$+O*(R+1),K=d+($+1)+O*(R+1),re=d+($+1)+O*R;l.push(Q,q,re),l.push(q,K,re),D+=6}a.addGroup(p,D,S),p+=D,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ja(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const i=Ja(n[t]);for(const r in i)e[r]=i[r]}return e}function nC(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function pM(n){return n.getRenderTarget()===null?n.outputColorSpace:yt.workingColorSpace}const iC={clone:Ja,merge:Nn};var rC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Do extends Xu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rC,this.fragmentShader=sC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ja(e.uniforms),this.uniformsGroups=nC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mM extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=zr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oi extends mM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=im*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return im*2*Math.atan(Math.tan(vh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class oC extends ii{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Oi(ea,ta,e,t);r.layers=this.layers,this.add(r);const s=new Oi(ea,ta,e,t);s.layers=this.layers,this.add(s);const o=new Oi(ea,ta,e,t);o.layers=this.layers,this.add(o);const a=new Oi(ea,ta,e,t);a.layers=this.layers,this.add(a);const l=new Oi(ea,ta,e,t);l.layers=this.layers,this.add(l);const u=new Oi(ea,ta,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class _M extends ni{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ka,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aC extends Lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ql("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vo?hn:Bi),this.texture=new _M(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yu(5,5,5),s=new Do({name:"CubemapFromEquirect",uniforms:Ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:As});s.uniforms.tEquirect.value=t;const o=new Gi(r,s),a=t.minFilter;return t.minFilter===wu&&(t.minFilter=qn),new oC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Oh=new j,lC=new j,uC=new it;class os{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Oh.subVectors(i,t).cross(lC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uC.getNormalMatrix(e),r=this.coplanarPoint(Oh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Rd,Dc=new j;class gM{constructor(e=new os,t=new os,i=new os,r=new os,s=new os,o=new os){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-f).normalize(),i[1].setComponents(l+s,d+u,m+p,y+f).normalize(),i[2].setComponents(l+o,d+c,m+g,y+v).normalize(),i[3].setComponents(l-o,d-c,m-g,y-v).normalize(),i[4].setComponents(l-a,d-h,m-_,y-x).normalize(),t===zr)i[5].setComponents(l+a,d+h,m+_,y+x).normalize();else if(t===Kf)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Dc.x=r.normal.x>0?e.max.x:e.min.x,Dc.y=r.normal.y>0?e.max.y:e.min.y,Dc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function cC(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const h=u.array,d=u.usage,p=h.byteLength,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,h,d),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,h){const d=c.array,p=c._updateRange,g=c.updateRanges;if(n.bindBuffer(h,u),p.count===-1&&g.length===0&&n.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const f=g[_];t?n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):n.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,c),h.version=u.version}}return{get:o,remove:a,update:l}}class O_ extends $i{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<c;f++){const v=f*d-o;for(let x=0;x<u;x++){const y=x*h-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const x=v+u*f,y=v+u*(f+1),w=v+1+u*(f+1),T=v+1+u*f;p.push(x,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new Ti(g,3)),this.setAttribute("normal",new Ti(_,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new O_(e.width,e.height,e.widthSegments,e.heightSegments)}}var fC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dC=`#ifdef USE_ALPHAHASH
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
#endif`,hC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_C=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gC=`#ifdef USE_AOMAP
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
#endif`,vC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xC=`#ifdef USE_BATCHING
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
#endif`,yC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,SC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TC=`#ifdef USE_IRIDESCENCE
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
#endif`,wC=`#ifdef USE_BUMPMAP
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
#endif`,AC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,UC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NC=`#define PI 3.141592653589793
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
} // validated`,IC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OC=`vec3 transformedNormal = objectNormal;
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
#endif`,FC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HC="gl_FragColor = linearToOutputTexel( gl_FragColor );",GC=`
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
}`,VC=`#ifdef USE_ENVMAP
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
#endif`,WC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XC=`#ifdef USE_ENVMAP
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
#endif`,YC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jC=`#ifdef USE_ENVMAP
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
#endif`,qC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$C=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QC=`#ifdef USE_GRADIENTMAP
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
}`,JC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iR=`uniform bool receiveShadow;
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
#endif`,rR=`#ifdef USE_ENVMAP
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
#endif`,sR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uR=`PhysicalMaterial material;
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
#endif`,cR=`struct PhysicalMaterial {
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
}`,fR=`
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
#endif`,dR=`#if defined( RE_IndirectDiffuse )
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
#endif`,hR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_R=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SR=`#if defined( USE_POINTS_UV )
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
#endif`,MR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ER=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wR=`#ifdef USE_MORPHNORMALS
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
#endif`,AR=`#ifdef USE_MORPHTARGETS
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
#endif`,CR=`#ifdef USE_MORPHTARGETS
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
#endif`,RR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UR=`#ifdef USE_NORMALMAP
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
#endif`,NR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$R=`float getShadowMask() {
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
}`,KR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZR=`#ifdef USE_SKINNING
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
#endif`,QR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JR=`#ifdef USE_SKINNING
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
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ib=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fb=`uniform sampler2D t2D;
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`#include <common>
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
}`,gb=`#if DEPTH_PACKING == 3200
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
}`,vb=`#define DISTANCE
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
}`,xb=`#define DISTANCE
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,wb=`uniform vec3 diffuse;
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
}`,Ab=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,Rb=`#define MATCAP
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
}`,bb=`#define MATCAP
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
}`,Pb=`#define NORMAL
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
}`,Lb=`#define NORMAL
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
}`,Db=`#define PHONG
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
}`,Ub=`#define PHONG
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
}`,Nb=`#define STANDARD
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
}`,Ib=`#define STANDARD
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
}`,Ob=`#define TOON
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
}`,Fb=`#define TOON
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
}`,kb=`uniform float size;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Hb=`uniform vec3 color;
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
}`,Gb=`uniform float rotation;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:fC,alphahash_pars_fragment:dC,alphamap_fragment:hC,alphamap_pars_fragment:pC,alphatest_fragment:mC,alphatest_pars_fragment:_C,aomap_fragment:gC,aomap_pars_fragment:vC,batching_pars_vertex:xC,batching_vertex:yC,begin_vertex:SC,beginnormal_vertex:MC,bsdfs:EC,iridescence_fragment:TC,bumpmap_pars_fragment:wC,clipping_planes_fragment:AC,clipping_planes_pars_fragment:CC,clipping_planes_pars_vertex:RC,clipping_planes_vertex:bC,color_fragment:PC,color_pars_fragment:LC,color_pars_vertex:DC,color_vertex:UC,common:NC,cube_uv_reflection_fragment:IC,defaultnormal_vertex:OC,displacementmap_pars_vertex:FC,displacementmap_vertex:kC,emissivemap_fragment:zC,emissivemap_pars_fragment:BC,colorspace_fragment:HC,colorspace_pars_fragment:GC,envmap_fragment:VC,envmap_common_pars_fragment:WC,envmap_pars_fragment:XC,envmap_pars_vertex:YC,envmap_physical_pars_fragment:rR,envmap_vertex:jC,fog_vertex:qC,fog_pars_vertex:$C,fog_fragment:KC,fog_pars_fragment:ZC,gradientmap_pars_fragment:QC,lightmap_fragment:JC,lightmap_pars_fragment:eR,lights_lambert_fragment:tR,lights_lambert_pars_fragment:nR,lights_pars_begin:iR,lights_toon_fragment:sR,lights_toon_pars_fragment:oR,lights_phong_fragment:aR,lights_phong_pars_fragment:lR,lights_physical_fragment:uR,lights_physical_pars_fragment:cR,lights_fragment_begin:fR,lights_fragment_maps:dR,lights_fragment_end:hR,logdepthbuf_fragment:pR,logdepthbuf_pars_fragment:mR,logdepthbuf_pars_vertex:_R,logdepthbuf_vertex:gR,map_fragment:vR,map_pars_fragment:xR,map_particle_fragment:yR,map_particle_pars_fragment:SR,metalnessmap_fragment:MR,metalnessmap_pars_fragment:ER,morphcolor_vertex:TR,morphnormal_vertex:wR,morphtarget_pars_vertex:AR,morphtarget_vertex:CR,normal_fragment_begin:RR,normal_fragment_maps:bR,normal_pars_fragment:PR,normal_pars_vertex:LR,normal_vertex:DR,normalmap_pars_fragment:UR,clearcoat_normal_fragment_begin:NR,clearcoat_normal_fragment_maps:IR,clearcoat_pars_fragment:OR,iridescence_pars_fragment:FR,opaque_fragment:kR,packing:zR,premultiplied_alpha_fragment:BR,project_vertex:HR,dithering_fragment:GR,dithering_pars_fragment:VR,roughnessmap_fragment:WR,roughnessmap_pars_fragment:XR,shadowmap_pars_fragment:YR,shadowmap_pars_vertex:jR,shadowmap_vertex:qR,shadowmask_pars_fragment:$R,skinbase_vertex:KR,skinning_pars_vertex:ZR,skinning_vertex:QR,skinnormal_vertex:JR,specularmap_fragment:eb,specularmap_pars_fragment:tb,tonemapping_fragment:nb,tonemapping_pars_fragment:ib,transmission_fragment:rb,transmission_pars_fragment:sb,uv_pars_fragment:ob,uv_pars_vertex:ab,uv_vertex:lb,worldpos_vertex:ub,background_vert:cb,background_frag:fb,backgroundCube_vert:db,backgroundCube_frag:hb,cube_vert:pb,cube_frag:mb,depth_vert:_b,depth_frag:gb,distanceRGBA_vert:vb,distanceRGBA_frag:xb,equirect_vert:yb,equirect_frag:Sb,linedashed_vert:Mb,linedashed_frag:Eb,meshbasic_vert:Tb,meshbasic_frag:wb,meshlambert_vert:Ab,meshlambert_frag:Cb,meshmatcap_vert:Rb,meshmatcap_frag:bb,meshnormal_vert:Pb,meshnormal_frag:Lb,meshphong_vert:Db,meshphong_frag:Ub,meshphysical_vert:Nb,meshphysical_frag:Ib,meshtoon_vert:Ob,meshtoon_frag:Fb,points_vert:kb,points_frag:zb,shadow_vert:Bb,shadow_frag:Hb,sprite_vert:Gb,sprite_frag:Vb},xe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},mr={basic:{uniforms:Nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ut(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Nn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Nn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Nn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new ut(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Nn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Nn([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Nn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Nn([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Nn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Nn([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Nn([xe.common,xe.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Nn([xe.lights,xe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};mr.physical={uniforms:Nn([mr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Uc={r:0,b:0,g:0};function Wb(n,e,t,i,r,s,o){const a=new ut(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function g(m,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ad)?(c===void 0&&(c=new Gi(new Yu(1,1,1),new Do({name:"BackgroundCubeMaterial",uniforms:Ja(mr.backgroundCube.uniforms),vertexShader:mr.backgroundCube.vertexShader,fragmentShader:mr.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,(h!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Gi(new O_(2,2),new Do({name:"BackgroundMaterial",uniforms:Ja(mr.background.uniforms),vertexShader:mr.background.vertexShader,fragmentShader:mr.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=yt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,f){m.getRGB(Uc,pM(n)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Xb(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function h(L,O,B,G,D){let F=!1;if(o){const R=_(G,B,O);u!==R&&(u=R,p(u.object)),F=f(L,G,B,D),F&&v(L,G,B,D)}else{const R=O.wireframe===!0;(u.geometry!==G.id||u.program!==B.id||u.wireframe!==R)&&(u.geometry=G.id,u.program=B.id,u.wireframe=R,F=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,P(L,O,B,G),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,O,B){const G=B.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let F=D[O.id];F===void 0&&(F={},D[O.id]=F);let R=F[G];return R===void 0&&(R=m(d()),F[G]=R),R}function m(L){const O=[],B=[],G=[];for(let D=0;D<r;D++)O[D]=0,B[D]=0,G[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:G,object:L,attributes:{},index:null}}function f(L,O,B,G){const D=u.attributes,F=O.attributes;let R=0;const $=B.getAttributes();for(const Q in $)if($[Q].location>=0){const K=D[Q];let re=F[Q];if(re===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;R++}return u.attributesNum!==R||u.index!==G}function v(L,O,B,G){const D={},F=O.attributes;let R=0;const $=B.getAttributes();for(const Q in $)if($[Q].location>=0){let K=F[Q];K===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),D[Q]=re,R++}u.attributes=D,u.attributesNum=R,u.index=G}function x(){const L=u.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function y(L){w(L,0)}function w(L,O){const B=u.newAttributes,G=u.enabledAttributes,D=u.attributeDivisors;B[L]=1,G[L]===0&&(n.enableVertexAttribArray(L),G[L]=1),D[L]!==O&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),D[L]=O)}function T(){const L=u.newAttributes,O=u.enabledAttributes;for(let B=0,G=O.length;B<G;B++)O[B]!==L[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function M(L,O,B,G,D,F,R){R===!0?n.vertexAttribIPointer(L,O,B,D,F):n.vertexAttribPointer(L,O,B,G,D,F)}function P(L,O,B,G){if(i.isWebGL2===!1&&(L.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=G.attributes,F=B.getAttributes(),R=O.defaultAttributeValues;for(const $ in F){const Q=F[$];if(Q.location>=0){let q=D[$];if(q===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const K=q.normalized,re=q.itemSize,ge=t.get(q);if(ge===void 0)continue;const me=ge.buffer,Le=ge.type,De=ge.bytesPerElement,Ie=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||q.gpuType===QS);if(q.isInterleavedBufferAttribute){const We=q.data,H=We.stride,ce=q.offset;if(We.isInstancedInterleavedBuffer){for(let ae=0;ae<Q.locationSize;ae++)w(Q.location+ae,We.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ae=0;ae<Q.locationSize;ae++)y(Q.location+ae);n.bindBuffer(n.ARRAY_BUFFER,me);for(let ae=0;ae<Q.locationSize;ae++)M(Q.location+ae,re/Q.locationSize,Le,K,H*De,(ce+re/Q.locationSize*ae)*De,Ie)}else{if(q.isInstancedBufferAttribute){for(let We=0;We<Q.locationSize;We++)w(Q.location+We,q.meshPerAttribute);L.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let We=0;We<Q.locationSize;We++)y(Q.location+We);n.bindBuffer(n.ARRAY_BUFFER,me);for(let We=0;We<Q.locationSize;We++)M(Q.location+We,re/Q.locationSize,Le,K,re*De,re/Q.locationSize*We*De,Ie)}}else if(R!==void 0){const K=R[$];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(Q.location,K);break;case 3:n.vertexAttrib3fv(Q.location,K);break;case 4:n.vertexAttrib4fv(Q.location,K);break;default:n.vertexAttrib1fv(Q.location,K)}}}}T()}function S(){N();for(const L in a){const O=a[L];for(const B in O){const G=O[B];for(const D in G)g(G[D].object),delete G[D];delete O[B]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;const O=a[L.id];for(const B in O){const G=O[B];for(const D in G)g(G[D].object),delete G[D];delete O[B]}delete a[L.id]}function I(L){for(const O in a){const B=a[O];if(B[L.id]===void 0)continue;const G=B[L.id];for(const D in G)g(G[D].object),delete G[D];delete B[L.id]}}function N(){Z(),c=!0,u!==l&&(u=l,p(u.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:T}}function Yb(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,h){n.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let p,g;if(r)p=n,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,h,d),t.update(h,s,d)}function u(c,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(c[g],h[g]);else{p.multiDrawArraysWEBGL(s,c,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function jb(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),w=x&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function qb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new os,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=f.clippingState||null;l.value=y,y=c(g,d,x,p);for(let w=0;w!==x;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function $b(n){let e=new WeakMap;function t(o,a){return a===Qp?o.mapping=Ka:a===Jp&&(o.mapping=Za),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qp||a===Jp)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new aC(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Kb extends mM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ea=4,Ev=[.125,.215,.35,.446,.526,.582],so=20,Fh=new Kb,Tv=new ut;let kh=null,zh=0,Bh=0;const Js=(1+Math.sqrt(5))/2,na=1/Js,wv=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Js,na),new j(0,Js,-na),new j(na,0,Js),new j(-na,0,Js),new j(Js,na,0),new j(-Js,na,0)];class Av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,zh,Bh),e.scissorTest=!1,Nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ka||e.mapping===Za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Au,format:or,colorSpace:jr,depthBuffer:!1},r=Cv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zb(s)),this._blurMaterial=Qb(s,e,t)}return r}_compileMaterial(e){const t=new Gi(this._lodPlanes[0],e);this._renderer.compile(t,Fh)}_sceneToCubeUV(e,t,i,r){const a=new Oi(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Tv),c.toneMapping=Cs,c.autoClear=!1;const p=new Ma({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),g=new Gi(new Yu,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Tv),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;Nc(r,v*x,f>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ka||e.mapping===Za;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Gi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Nc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wv[(r-1)%wv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Gi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*so-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):so;m>so&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${so}`);const f=[];let v=0;for(let M=0;M<so;++M){const P=M/_,S=Math.exp(-P*P/2);f.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const y=this._sizeLods[r],w=3*y*(r>x-Ea?r-x+Ea:0),T=4*(this._cubeSize-y);Nc(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Fh)}}function Zb(n){const e=[],t=[],i=[];let r=n;const s=n-Ea+1+Ev.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ea?l=Ev[o-n+Ea-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,P=T>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,_*g*T),x.set(d,m*g*T);const E=[T,T,T,T,T,T];y.set(E,f*g*T)}const w=new $i;w.setAttribute("position",new Ei(v,_)),w.setAttribute("uv",new Ei(x,m)),w.setAttribute("faceIndex",new Ei(y,f)),e.push(w),r>Ea&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cv(n,e,t){const i=new Lo(n,e,t);return i.texture.mapping=Ad,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Qb(n,e,t){const i=new Float32Array(so),r=new j(0,1,0);return new Do({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:F_(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function Rv(){return new Do({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:F_(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function bv(){return new Do({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:F_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function F_(){return`

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
	`}function Jb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Qp||l===Jp,c=l===Ka||l===Za;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Av(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||c&&h&&r(h)){t===null&&(t=new Av(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function eP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tP(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const w=v[x+0],T=v[x+1],M=v[x+2];d.push(w,T,T,M,M,w)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const w=x+0,T=x+1,M=x+2;d.push(w,T,T,M,M,w)}}else return;const m=new(aM(d)?hM:dM)(d,1);m.version=_;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function nP(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,g){n.drawElements(s,g,a,p*l),t.update(g,s,1)}function h(p,g,_){if(_===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,g,a,p*l,_),t.update(g,s,_)}function d(p,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,g[f]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let f=0;for(let v=0;v<_;v++)f+=g[v];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function iP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rP(n,e){return n[0]-e[0]}function sP(n,e){return Math.abs(e[1])-Math.abs(n[1])}function oP(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new pn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let O=function(){Z.dispose(),s.delete(c),c.removeEventListener("dispose",O)};var p=O;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),w===!0&&(S=3);let E=c.attributes.position.count*S,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*I*4*_),Z=new cM(N,E,I,_);Z.type=ds,Z.needsUpdate=!0;const L=S*4;for(let B=0;B<_;B++){const G=T[B],D=M[B],F=P[B],R=E*I*4*B;for(let $=0;$<G.count;$++){const Q=$*L;x===!0&&(o.fromBufferAttribute(G,$),N[R+Q+0]=o.x,N[R+Q+1]=o.y,N[R+Q+2]=o.z,N[R+Q+3]=0),y===!0&&(o.fromBufferAttribute(D,$),N[R+Q+4]=o.x,N[R+Q+5]=o.y,N[R+Q+6]=o.z,N[R+Q+7]=0),w===!0&&(o.fromBufferAttribute(F,$),N[R+Q+8]=o.x,N[R+Q+9]=o.y,N[R+Q+10]=o.z,N[R+Q+11]=F.itemSize===4?o.w:1)}}m={count:_,texture:Z,size:new dt(E,I)},s.set(c,m),c.addEventListener("dispose",O)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const v=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",d),h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[c.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<g;y++){const w=_[y];w[0]=y,w[1]=d[y]}_.sort(sP);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(rP);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],M=w[1];T!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),f&&c.getAttribute("morphNormal"+y)!==f[T]&&c.setAttribute("morphNormal"+y,f[T]),r[y]=M,v+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",x),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function aP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class xM extends ni{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:go,c!==go&&c!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===go&&(i=fs),i===void 0&&c===Qa&&(i=_o),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yM=new ni,SM=new xM(1,1);SM.compareFunction=oM;const MM=new cM,EM=new WA,TM=new _M,Pv=[],Lv=[],Dv=new Float32Array(16),Uv=new Float32Array(9),Nv=new Float32Array(4);function cl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Pv[r];if(s===void 0&&(s=new Float32Array(r),Pv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function nn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pd(n,e){let t=Lv[e];t===void 0&&(t=new Int32Array(e),Lv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function dP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Nv.set(i),n.uniformMatrix2fv(this.addr,!1,Nv),rn(t,i)}}function hP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Uv.set(i),n.uniformMatrix3fv(this.addr,!1,Uv),rn(t,i)}}function pP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(nn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,i))return;Dv.set(i),n.uniformMatrix4fv(this.addr,!1,Dv),rn(t,i)}}function mP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _P(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function gP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function vP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function xP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function SP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function MP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function EP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?SM:yM;t.setTexture2D(e||s,r)}function TP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||EM,r)}function wP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||TM,r)}function AP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||MM,r)}function CP(n){switch(n){case 5126:return lP;case 35664:return uP;case 35665:return cP;case 35666:return fP;case 35674:return dP;case 35675:return hP;case 35676:return pP;case 5124:case 35670:return mP;case 35667:case 35671:return _P;case 35668:case 35672:return gP;case 35669:case 35673:return vP;case 5125:return xP;case 36294:return yP;case 36295:return SP;case 36296:return MP;case 35678:case 36198:case 36298:case 36306:case 35682:return EP;case 35679:case 36299:case 36307:return TP;case 35680:case 36300:case 36308:case 36293:return wP;case 36289:case 36303:case 36311:case 36292:return AP}}function RP(n,e){n.uniform1fv(this.addr,e)}function bP(n,e){const t=cl(e,this.size,2);n.uniform2fv(this.addr,t)}function PP(n,e){const t=cl(e,this.size,3);n.uniform3fv(this.addr,t)}function LP(n,e){const t=cl(e,this.size,4);n.uniform4fv(this.addr,t)}function DP(n,e){const t=cl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function UP(n,e){const t=cl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NP(n,e){const t=cl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IP(n,e){n.uniform1iv(this.addr,e)}function OP(n,e){n.uniform2iv(this.addr,e)}function FP(n,e){n.uniform3iv(this.addr,e)}function kP(n,e){n.uniform4iv(this.addr,e)}function zP(n,e){n.uniform1uiv(this.addr,e)}function BP(n,e){n.uniform2uiv(this.addr,e)}function HP(n,e){n.uniform3uiv(this.addr,e)}function GP(n,e){n.uniform4uiv(this.addr,e)}function VP(n,e,t){const i=this.cache,r=e.length,s=Pd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||yM,s[o])}function WP(n,e,t){const i=this.cache,r=e.length,s=Pd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||EM,s[o])}function XP(n,e,t){const i=this.cache,r=e.length,s=Pd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||TM,s[o])}function YP(n,e,t){const i=this.cache,r=e.length,s=Pd(t,r);nn(i,s)||(n.uniform1iv(this.addr,s),rn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||MM,s[o])}function jP(n){switch(n){case 5126:return RP;case 35664:return bP;case 35665:return PP;case 35666:return LP;case 35674:return DP;case 35675:return UP;case 35676:return NP;case 5124:case 35670:return IP;case 35667:case 35671:return OP;case 35668:case 35672:return FP;case 35669:case 35673:return kP;case 5125:return zP;case 36294:return BP;case 36295:return HP;case 36296:return GP;case 35678:case 36198:case 36298:case 36306:case 35682:return VP;case 35679:case 36299:case 36307:return WP;case 35680:case 36300:case 36308:case 36293:return XP;case 36289:case 36303:case 36311:case 36292:return YP}}class qP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CP(t.type)}}class $P{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jP(t.type)}}class KP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Hh=/(\w+)(\])?(\[|\.)?/g;function Iv(n,e){n.seq.push(e),n.map[e.id]=e}function ZP(n,e,t){const i=n.name,r=i.length;for(Hh.lastIndex=0;;){const s=Hh.exec(i),o=Hh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Iv(t,u===void 0?new qP(a,n,e):new $P(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new KP(a),Iv(t,h)),t=h}}}class df{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ZP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ov(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QP=37297;let JP=0;function e2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function t2(n){const e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(n);let i;switch(e===t?i="":e===$f&&t===qf?i="LinearDisplayP3ToLinearSRGB":e===qf&&t===$f&&(i="LinearSRGBToLinearDisplayP3"),n){case jr:case Cd:return[i,"LinearTransferOETF"];case hn:case U_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Fv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+e2(n.getShaderSource(e),o)}else return r}function n2(n,e){const t=t2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function i2(n,e){let t;switch(e){case dA:t="Linear";break;case hA:t="Reinhard";break;case pA:t="OptimizedCineon";break;case mA:t="ACESFilmic";break;case gA:t="AgX";break;case _A:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r2(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ta).join(`
`)}function s2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ta).join(`
`)}function o2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ta(n){return n!==""}function kv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l2=/^[ \t]*#include +<([\w\d./]+)>/gm;function sm(n){return n.replace(l2,c2)}const u2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function c2(n,e){let t=Je[e];if(t===void 0){const i=u2.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sm(t)}const f2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bv(n){return n.replace(f2,d2)}function d2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hv(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===$S?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Bw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Lr&&(e="SHADOWMAP_TYPE_VSM"),e}function p2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ka:case Za:e="ENVMAP_TYPE_CUBE";break;case Ad:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Za:e="ENVMAP_MODE_REFRACTION";break}return e}function _2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case KS:e="ENVMAP_BLENDING_MULTIPLY";break;case cA:e="ENVMAP_BLENDING_MIX";break;case fA:e="ENVMAP_BLENDING_ADD";break}return e}function g2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function v2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=h2(t),u=p2(t),c=m2(t),h=_2(t),d=g2(t),p=t.isWebGL2?"":r2(t),g=s2(t),_=o2(s),m=r.createProgram();let f,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ta).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ta).join(`
`),v.length>0&&(v+=`
`)):(f=[Hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),v=[p,Hv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?Je.tonemapping_pars_fragment:"",t.toneMapping!==Cs?i2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,n2("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=sm(o),o=kv(o,t),o=zv(o,t),a=sm(a),a=kv(a,t),a=zv(a,t),o=Bv(o),a=Bv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=x+f+o,w=x+v+a,T=Ov(r,r.VERTEX_SHADER,y),M=Ov(r,r.FRAGMENT_SHADER,w);r.attachShader(m,T),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(N){if(n.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(T).trim(),O=r.getShaderInfoLog(M).trim();let B=!0,G=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,M);else{const D=Fv(r,T,"vertex"),F=Fv(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+D+`
`+F)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(L===""||O==="")&&(G=!1);G&&(N.diagnostics={runnable:B,programLog:Z,vertexShader:{log:L,prefix:f},fragmentShader:{log:O,prefix:v}})}r.deleteShader(T),r.deleteShader(M),S=new df(r,m),E=a2(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,QP)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JP++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=M,this}let x2=0;class y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new S2(e),t.set(e,i)),i}}class S2{constructor(e){this.id=x2++,this.code=e,this.usedTimes=0}}function M2(n,e,t,i,r,s,o){const a=new I_,l=new y2,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,E,I,N,Z){const L=N.fog,O=Z.geometry,B=S.isMeshStandardMaterial?N.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),D=G&&G.mapping===Ad?G.image.height:null,F=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const R=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$=R!==void 0?R.length:0;let Q=0;O.morphAttributes.position!==void 0&&(Q=1),O.morphAttributes.normal!==void 0&&(Q=2),O.morphAttributes.color!==void 0&&(Q=3);let q,K,re,ge;if(F){const we=mr[F];q=we.vertexShader,K=we.fragmentShader}else q=S.vertexShader,K=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const me=n.getRenderTarget(),Le=Z.isInstancedMesh===!0,De=Z.isBatchedMesh===!0,Ie=!!S.map,We=!!S.matcap,H=!!G,ce=!!S.aoMap,ae=!!S.lightMap,ye=!!S.bumpMap,_e=!!S.normalMap,W=!!S.displacementMap,ze=!!S.emissiveMap,b=!!S.metalnessMap,A=!!S.roughnessMap,z=S.anisotropy>0,ne=S.clearcoat>0,te=S.iridescence>0,ie=S.sheen>0,fe=S.transmission>0,J=z&&!!S.anisotropyMap,oe=ne&&!!S.clearcoatMap,Me=ne&&!!S.clearcoatNormalMap,Ue=ne&&!!S.clearcoatRoughnessMap,ee=te&&!!S.iridescenceMap,Qe=te&&!!S.iridescenceThicknessMap,be=ie&&!!S.sheenColorMap,Ye=ie&&!!S.sheenRoughnessMap,Te=!!S.specularMap,Se=!!S.specularColorMap,Xe=!!S.specularIntensityMap,Ke=fe&&!!S.transmissionMap,lt=fe&&!!S.thicknessMap,ve=!!S.gradientMap,ue=!!S.alphaMap,U=S.alphaTest>0,de=!!S.alphaHash,he=!!S.extensions,Be=!!O.attributes.uv1,Fe=!!O.attributes.uv2,ot=!!O.attributes.uv3;let ft=Cs;return S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ft=n.toneMapping),{isWebGL2:c,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:q,fragmentShader:K,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,instancing:Le,instancingColor:Le&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:jr,map:Ie,matcap:We,envMap:H,envMapMode:H&&G.mapping,envMapCubeUVHeight:D,aoMap:ce,lightMap:ae,bumpMap:ye,normalMap:_e,displacementMap:d&&W,emissiveMap:ze,normalMapObjectSpace:_e&&S.normalMapType===PA,normalMapTangentSpace:_e&&S.normalMapType===bA,metalnessMap:b,roughnessMap:A,anisotropy:z,anisotropyMap:J,clearcoat:ne,clearcoatMap:oe,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ue,iridescence:te,iridescenceMap:ee,iridescenceThicknessMap:Qe,sheen:ie,sheenColorMap:be,sheenRoughnessMap:Ye,specularMap:Te,specularColorMap:Se,specularIntensityMap:Xe,transmission:fe,transmissionMap:Ke,thicknessMap:lt,gradientMap:ve,opaque:S.transparent===!1&&S.blending===Na,alphaMap:ue,alphaTest:U,alphaHash:de,combine:S.combine,mapUv:Ie&&_(S.map.channel),aoMapUv:ce&&_(S.aoMap.channel),lightMapUv:ae&&_(S.lightMap.channel),bumpMapUv:ye&&_(S.bumpMap.channel),normalMapUv:_e&&_(S.normalMap.channel),displacementMapUv:W&&_(S.displacementMap.channel),emissiveMapUv:ze&&_(S.emissiveMap.channel),metalnessMapUv:b&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:J&&_(S.anisotropyMap.channel),clearcoatMapUv:oe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(S.sheenRoughnessMap.channel),specularMapUv:Te&&_(S.specularMap.channel),specularColorMapUv:Se&&_(S.specularColorMap.channel),specularIntensityMapUv:Xe&&_(S.specularIntensityMap.channel),transmissionMapUv:Ke&&_(S.transmissionMap.channel),thicknessMapUv:lt&&_(S.thicknessMap.channel),alphaMapUv:ue&&_(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_e||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:Fe,vertexUv3s:ot,pointsUvs:Z.isPoints===!0&&!!O.attributes.uv&&(Ie||ue),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:ft,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&yt.getTransfer(S.map.colorSpace)===Rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zi,flipSided:S.side===ti,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:he&&S.extensions.derivatives===!0,extensionFragDepth:he&&S.extensions.fragDepth===!0,extensionDrawBuffers:he&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)E.push(I),E.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const E=g[S.type];let I;if(E){const N=mr[E];I=iC.clone(N.uniforms)}else I=S.uniforms;return I}function w(S,E){let I;for(let N=0,Z=u.length;N<Z;N++){const L=u[N];if(L.cacheKey===E){I=L,++I.usedTimes;break}}return I===void 0&&(I=new v2(n,E,S,s),u.push(I)),I}function T(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:M,programs:u,dispose:P}}function E2(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function T2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,p,g,_,m){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(h,d){t.length>1&&t.sort(h||T2),i.length>1&&i.sort(d||Gv),r.length>1&&r.sort(d||Gv)}function c(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function w2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vv,n.set(i,[o])):r>=s.length?(o=new Vv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function A2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ut};break;case"SpotLight":t={position:new j,direction:new j,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function C2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let R2=0;function b2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function P2(n,e){const t=new A2,i=C2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new j);const s=new j,o=new cn,a=new cn;function l(c,h){let d=0,p=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let _=0,m=0,f=0,v=0,x=0,y=0,w=0,T=0,M=0,P=0,S=0;c.sort(b2);const E=h===!0?Math.PI:1;for(let N=0,Z=c.length;N<Z;N++){const L=c[N],O=L.color,B=L.intensity,G=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=O.r*B*E,p+=O.g*B*E,g+=O.b*B*E;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],B);S++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.directionalShadow[_]=$,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=F,_++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(O).multiplyScalar(B*E),F.distance=G,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[f]=F;const R=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,R.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=R.matrix,L.castShadow){const $=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=D,T++}f++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(O).multiplyScalar(B),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=F,v++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*E),F.distance=L.distance,F.decay=L.decay,L.castShadow){const R=L.shadow,$=i.get(L);$.shadowBias=R.bias,$.shadowNormalBias=R.normalBias,$.shadowRadius=R.radius,$.shadowMapSize=R.mapSize,$.shadowCameraNear=R.camera.near,$.shadowCameraFar=R.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=L.shadow.matrix,w++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(B*E),F.groundColor.copy(L.groundColor).multiplyScalar(B*E),r.hemi[x]=F,x++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_FLOAT_1,r.rectAreaLTC2=xe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=xe.LTC_HALF_1,r.rectAreaLTC2=xe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const I=r.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==f||I.rectAreaLength!==v||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==w||I.numSpotShadows!==T||I.numSpotMaps!==M||I.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,I.directionalLength=_,I.pointLength=m,I.spotLength=f,I.rectAreaLength=v,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=w,I.numSpotShadows=T,I.numSpotMaps=M,I.numLightProbes=S,r.version=R2++)}function u(c,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const y=c[v];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),d++}else if(y.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function Wv(n,e){const t=new P2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function u(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function L2(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Wv(n,e),t.set(s,[l])):o>=a.length?(l=new Wv(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class D2 extends Xu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U2 extends Xu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const N2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I2=`uniform sampler2D shadow_pass;
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
}`;function O2(n,e,t){let i=new gM;const r=new dt,s=new dt,o=new pn,a=new D2({depthPacking:RA}),l=new U2,u={},c=t.maxTextureSize,h={[Ns]:ti,[ti]:Ns,[zi]:zi},d=new Do({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:N2,fragmentShader:I2}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new $i;g.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$S;let f=this.type;this.render=function(T,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(As),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const Z=f!==Lr&&this.type===Lr,L=f===Lr&&this.type!==Lr;for(let O=0,B=T.length;O<B;O++){const G=T[O],D=G.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||Z===!0||L===!0){const $=this.type!==Lr?{minFilter:zn,magFilter:zn}:{};D.map!==null&&D.map.dispose(),D.map=new Lo(r.x,r.y,$),D.map.texture.name=G.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const R=D.getViewportCount();for(let $=0;$<R;$++){const Q=D.getViewport($);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),N.viewport(o),D.updateMatrices(G,$),i=D.getFrustum(),y(M,P,D.camera,G,this.type)}D.isPointLightShadow!==!0&&this.type===Lr&&v(D,P),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,I)};function v(T,M){const P=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Lo(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(M,null,P,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(M,null,P,p,_,null)}function x(T,M,P,S){let E=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)E=I;else if(E=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const N=E.uuid,Z=M.uuid;let L=u[N];L===void 0&&(L={},u[N]=L);let O=L[Z];O===void 0&&(O=E.clone(),L[Z]=O,M.addEventListener("dispose",w)),E=O}if(E.visible=M.visible,E.wireframe=M.wireframe,S===Lr?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:h[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=n.properties.get(E);N.light=P}return E}function y(T,M,P,S,E){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Lr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const Z=e.update(T),L=T.material;if(Array.isArray(L)){const O=Z.groups;for(let B=0,G=O.length;B<G;B++){const D=O[B],F=L[D.materialIndex];if(F&&F.visible){const R=x(T,F,S,E);T.onBeforeShadow(n,T,M,P,Z,R,D),n.renderBufferDirect(P,null,Z,R,T,D),T.onAfterShadow(n,T,M,P,Z,R,D)}}}else if(L.visible){const O=x(T,L,S,E);T.onBeforeShadow(n,T,M,P,Z,O,null),n.renderBufferDirect(P,null,Z,O,T,null),T.onAfterShadow(n,T,M,P,Z,O,null)}}const N=T.children;for(let Z=0,L=N.length;Z<L;Z++)y(N[Z],M,P,S,E)}function w(T){T.target.removeEventListener("dispose",w);for(const P in u){const S=u[P],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function F2(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const de=new pn;let he=null;const Be=new pn(0,0,0,0);return{setMask:function(Fe){he!==Fe&&!U&&(n.colorMask(Fe,Fe,Fe,Fe),he=Fe)},setLocked:function(Fe){U=Fe},setClear:function(Fe,ot,ft,Pe,we){we===!0&&(Fe*=Pe,ot*=Pe,ft*=Pe),de.set(Fe,ot,ft,Pe),Be.equals(de)===!1&&(n.clearColor(Fe,ot,ft,Pe),Be.copy(de))},reset:function(){U=!1,he=null,Be.set(-1,0,0,0)}}}function s(){let U=!1,de=null,he=null,Be=null;return{setTest:function(Fe){Fe?De(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(Fe){de!==Fe&&!U&&(n.depthMask(Fe),de=Fe)},setFunc:function(Fe){if(he!==Fe){switch(Fe){case iA:n.depthFunc(n.NEVER);break;case rA:n.depthFunc(n.ALWAYS);break;case sA:n.depthFunc(n.LESS);break;case Yf:n.depthFunc(n.LEQUAL);break;case oA:n.depthFunc(n.EQUAL);break;case aA:n.depthFunc(n.GEQUAL);break;case lA:n.depthFunc(n.GREATER);break;case uA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Fe}},setLocked:function(Fe){U=Fe},setClear:function(Fe){Be!==Fe&&(n.clearDepth(Fe),Be=Fe)},reset:function(){U=!1,de=null,he=null,Be=null}}}function o(){let U=!1,de=null,he=null,Be=null,Fe=null,ot=null,ft=null,Pe=null,we=null;return{setTest:function(Oe){U||(Oe?De(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Oe){de!==Oe&&!U&&(n.stencilMask(Oe),de=Oe)},setFunc:function(Oe,le,He){(he!==Oe||Be!==le||Fe!==He)&&(n.stencilFunc(Oe,le,He),he=Oe,Be=le,Fe=He)},setOp:function(Oe,le,He){(ot!==Oe||ft!==le||Pe!==He)&&(n.stencilOp(Oe,le,He),ot=Oe,ft=le,Pe=He)},setLocked:function(Oe){U=Oe},setClear:function(Oe){we!==Oe&&(n.clearStencil(Oe),we=Oe)},reset:function(){U=!1,de=null,he=null,Be=null,Fe=null,ot=null,ft=null,Pe=null,we=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,y=null,w=null,T=null,M=null,P=null,S=new ut(0,0,0),E=0,I=!1,N=null,Z=null,L=null,O=null,B=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const R=n.getParameter(n.VERSION);R.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(R)[1]),D=F>=1):R.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),D=F>=2);let $=null,Q={};const q=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),re=new pn().fromArray(q),ge=new pn().fromArray(K);function me(U,de,he,Be){const Fe=new Uint8Array(4),ot=n.createTexture();n.bindTexture(U,ot),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<he;ft++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(de,0,n.RGBA,1,1,Be,0,n.RGBA,n.UNSIGNED_BYTE,Fe):n.texImage2D(de+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Fe);return ot}const Le={};Le[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(n.DEPTH_TEST),l.setFunc(Yf),ze(!1),b(A0),De(n.CULL_FACE),_e(As);function De(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function Ie(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function We(U,de){return p[U]!==de?(n.bindFramebuffer(U,de),p[U]=de,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=de),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=de)),!0):!1}function H(U,de){let he=_,Be=!1;if(U)if(he=g.get(de),he===void 0&&(he=[],g.set(de,he)),U.isWebGLMultipleRenderTargets){const Fe=U.texture;if(he.length!==Fe.length||he[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,ft=Fe.length;ot<ft;ot++)he[ot]=n.COLOR_ATTACHMENT0+ot;he.length=Fe.length,Be=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,Be=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,Be=!0);Be&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function ce(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const ae={[ro]:n.FUNC_ADD,[Gw]:n.FUNC_SUBTRACT,[Vw]:n.FUNC_REVERSE_SUBTRACT};if(i)ae[b0]=n.MIN,ae[P0]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ae[b0]=U.MIN_EXT,ae[P0]=U.MAX_EXT)}const ye={[Ww]:n.ZERO,[Xw]:n.ONE,[Yw]:n.SRC_COLOR,[Kp]:n.SRC_ALPHA,[Qw]:n.SRC_ALPHA_SATURATE,[Kw]:n.DST_COLOR,[qw]:n.DST_ALPHA,[jw]:n.ONE_MINUS_SRC_COLOR,[Zp]:n.ONE_MINUS_SRC_ALPHA,[Zw]:n.ONE_MINUS_DST_COLOR,[$w]:n.ONE_MINUS_DST_ALPHA,[Jw]:n.CONSTANT_COLOR,[eA]:n.ONE_MINUS_CONSTANT_COLOR,[tA]:n.CONSTANT_ALPHA,[nA]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(U,de,he,Be,Fe,ot,ft,Pe,we,Oe){if(U===As){f===!0&&(Ie(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),U!==Hw){if(U!==v||Oe!==I){if((x!==ro||T!==ro)&&(n.blendEquation(n.FUNC_ADD),x=ro,T=ro),Oe)switch(U){case Na:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case io:n.blendFunc(n.ONE,n.ONE);break;case C0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case R0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Na:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case io:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case C0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case R0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,w=null,M=null,P=null,S.set(0,0,0),E=0,v=U,I=Oe}return}Fe=Fe||de,ot=ot||he,ft=ft||Be,(de!==x||Fe!==T)&&(n.blendEquationSeparate(ae[de],ae[Fe]),x=de,T=Fe),(he!==y||Be!==w||ot!==M||ft!==P)&&(n.blendFuncSeparate(ye[he],ye[Be],ye[ot],ye[ft]),y=he,w=Be,M=ot,P=ft),(Pe.equals(S)===!1||we!==E)&&(n.blendColor(Pe.r,Pe.g,Pe.b,we),S.copy(Pe),E=we),v=U,I=!1}function W(U,de){U.side===zi?Ie(n.CULL_FACE):De(n.CULL_FACE);let he=U.side===ti;de&&(he=!he),ze(he),U.blending===Na&&U.transparent===!1?_e(As):_e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const Be=U.stencilWrite;u.setTest(Be),Be&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){N!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),N=U)}function b(U){U!==kw?(De(n.CULL_FACE),U!==Z&&(U===A0?n.cullFace(n.BACK):U===zw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),Z=U}function A(U){U!==L&&(D&&n.lineWidth(U),L=U)}function z(U,de,he){U?(De(n.POLYGON_OFFSET_FILL),(O!==de||B!==he)&&(n.polygonOffset(de,he),O=de,B=he)):Ie(n.POLYGON_OFFSET_FILL)}function ne(U){U?De(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function te(U){U===void 0&&(U=n.TEXTURE0+G-1),$!==U&&(n.activeTexture(U),$=U)}function ie(U,de,he){he===void 0&&($===null?he=n.TEXTURE0+G-1:he=$);let Be=Q[he];Be===void 0&&(Be={type:void 0,texture:void 0},Q[he]=Be),(Be.type!==U||Be.texture!==de)&&($!==he&&(n.activeTexture(he),$=he),n.bindTexture(U,de||Le[U]),Be.type=U,Be.texture=de)}function fe(){const U=Q[$];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(U){re.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),re.copy(U))}function Ke(U){ge.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ge.copy(U))}function lt(U,de){let he=h.get(de);he===void 0&&(he=new WeakMap,h.set(de,he));let Be=he.get(U);Be===void 0&&(Be=n.getUniformBlockIndex(de,U.name),he.set(U,Be))}function ve(U,de){const Be=h.get(de).get(U);c.get(de)!==Be&&(n.uniformBlockBinding(de,Be,U.__bindingPointIndex),c.set(de,Be))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},$=null,Q={},p={},g=new WeakMap,_=[],m=null,f=!1,v=null,x=null,y=null,w=null,T=null,M=null,P=null,S=new ut(0,0,0),E=0,I=!1,N=null,Z=null,L=null,O=null,B=null,re.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:Ie,bindFramebuffer:We,drawBuffers:H,useProgram:ce,setBlending:_e,setMaterial:W,setFlipSided:ze,setCullFace:b,setLineWidth:A,setPolygonOffset:z,setScissorTest:ne,activeTexture:te,bindTexture:ie,unbindTexture:fe,compressedTexImage2D:J,compressedTexImage3D:oe,texImage2D:Te,texImage3D:Se,updateUBOMapping:lt,uniformBlockBinding:ve,texStorage2D:be,texStorage3D:Ye,texSubImage2D:Me,texSubImage3D:Ue,compressedTexSubImage2D:ee,compressedTexSubImage3D:Qe,scissor:Xe,viewport:Ke,reset:ue}}function k2(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,A){return p?new OffscreenCanvas(b,A):Zf("canvas")}function _(b,A,z,ne){let te=1;if((b.width>ne||b.height>ne)&&(te=ne/Math.max(b.width,b.height)),te<1||A===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=A?rm:Math.floor,fe=ie(te*b.width),J=ie(te*b.height);h===void 0&&(h=g(fe,J));const oe=z?g(fe,J):h;return oe.width=fe,oe.height=J,oe.getContext("2d").drawImage(b,0,0,fe,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+J+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ov(b.width)&&ov(b.height)}function f(b){return a?!1:b.wrapS!==sr||b.wrapT!==sr||b.minFilter!==zn&&b.minFilter!==qn}function v(b,A){return b.generateMipmaps&&A&&b.minFilter!==zn&&b.minFilter!==qn}function x(b){n.generateMipmap(b)}function y(b,A,z,ne,te=!1){if(a===!1)return A;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=A;if(A===n.RED&&(z===n.FLOAT&&(ie=n.R32F),z===n.HALF_FLOAT&&(ie=n.R16F),z===n.UNSIGNED_BYTE&&(ie=n.R8)),A===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ie=n.R8UI),z===n.UNSIGNED_SHORT&&(ie=n.R16UI),z===n.UNSIGNED_INT&&(ie=n.R32UI),z===n.BYTE&&(ie=n.R8I),z===n.SHORT&&(ie=n.R16I),z===n.INT&&(ie=n.R32I)),A===n.RG&&(z===n.FLOAT&&(ie=n.RG32F),z===n.HALF_FLOAT&&(ie=n.RG16F),z===n.UNSIGNED_BYTE&&(ie=n.RG8)),A===n.RGBA){const fe=te?jf:yt.getTransfer(ne);z===n.FLOAT&&(ie=n.RGBA32F),z===n.HALF_FLOAT&&(ie=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ie=fe===Rt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function w(b,A,z){return v(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==zn&&b.minFilter!==qn?Math.log2(Math.max(A.width,A.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?A.mipmaps.length:1}function T(b){return b===zn||b===L0||b===dh?n.NEAREST:n.LINEAR}function M(b){const A=b.target;A.removeEventListener("dispose",M),S(A),A.isVideoTexture&&c.delete(A)}function P(b){const A=b.target;A.removeEventListener("dispose",P),I(A)}function S(b){const A=i.get(b);if(A.__webglInit===void 0)return;const z=b.source,ne=d.get(z);if(ne){const te=ne[A.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(b),Object.keys(ne).length===0&&d.delete(z)}i.remove(b)}function E(b){const A=i.get(b);n.deleteTexture(A.__webglTexture);const z=b.source,ne=d.get(z);delete ne[A.__cacheKey],o.memory.textures--}function I(b){const A=b.texture,z=i.get(b),ne=i.get(A);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(z.__webglFramebuffer[te]))for(let ie=0;ie<z.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(z.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(z.__webglFramebuffer[te]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[te])}else{if(Array.isArray(z.__webglFramebuffer))for(let te=0;te<z.__webglFramebuffer.length;te++)n.deleteFramebuffer(z.__webglFramebuffer[te]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let te=0;te<z.__webglColorRenderbuffer.length;te++)z.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[te]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,ie=A.length;te<ie;te++){const fe=i.get(A[te]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),o.memory.textures--),i.remove(A[te])}i.remove(A),i.remove(b)}let N=0;function Z(){N=0}function L(){const b=N;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),N+=1,b}function O(b){const A=[];return A.push(b.wrapS),A.push(b.wrapT),A.push(b.wrapR||0),A.push(b.magFilter),A.push(b.minFilter),A.push(b.anisotropy),A.push(b.internalFormat),A.push(b.format),A.push(b.type),A.push(b.generateMipmaps),A.push(b.premultiplyAlpha),A.push(b.flipY),A.push(b.unpackAlignment),A.push(b.colorSpace),A.join()}function B(b,A){const z=i.get(b);if(b.isVideoTexture&&W(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(z,b,A);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+A)}function G(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){re(z,b,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+A)}function D(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){re(z,b,A);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+A)}function F(b,A){const z=i.get(b);if(b.version>0&&z.__version!==b.version){ge(z,b,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+A)}const R={[em]:n.REPEAT,[sr]:n.CLAMP_TO_EDGE,[tm]:n.MIRRORED_REPEAT},$={[zn]:n.NEAREST,[L0]:n.NEAREST_MIPMAP_NEAREST,[dh]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[vA]:n.LINEAR_MIPMAP_NEAREST,[wu]:n.LINEAR_MIPMAP_LINEAR},Q={[LA]:n.NEVER,[FA]:n.ALWAYS,[DA]:n.LESS,[oM]:n.LEQUAL,[UA]:n.EQUAL,[OA]:n.GEQUAL,[NA]:n.GREATER,[IA]:n.NOTEQUAL};function q(b,A,z){if(z?(n.texParameteri(b,n.TEXTURE_WRAP_S,R[A.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,R[A.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,R[A.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,$[A.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,$[A.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==sr||A.wrapT!==sr)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(A.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(A.minFilter)),A.minFilter!==zn&&A.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Q[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===zn||A.minFilter!==dh&&A.minFilter!==wu||A.type===ds&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Au&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function K(b,A){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,A.addEventListener("dispose",M));const ne=A.source;let te=d.get(ne);te===void 0&&(te={},d.set(ne,te));const ie=O(A);if(ie!==b.__cacheKey){te[ie]===void 0&&(te[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[ie].usedTimes++;const fe=te[b.__cacheKey];fe!==void 0&&(te[b.__cacheKey].usedTimes--,fe.usedTimes===0&&E(A)),b.__cacheKey=ie,b.__webglTexture=te[ie].texture}return z}function re(b,A,z){let ne=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=n.TEXTURE_3D);const te=K(b,A),ie=A.source;t.bindTexture(ne,b.__webglTexture,n.TEXTURE0+z);const fe=i.get(ie);if(ie.version!==fe.__version||te===!0){t.activeTexture(n.TEXTURE0+z);const J=yt.getPrimaries(yt.workingColorSpace),oe=A.colorSpace===Bi?null:yt.getPrimaries(A.colorSpace),Me=A.colorSpace===Bi||J===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ue=f(A)&&m(A.image)===!1;let ee=_(A.image,Ue,!1,r.maxTextureSize);ee=ze(A,ee);const Qe=m(ee)||a,be=s.convert(A.format,A.colorSpace);let Ye=s.convert(A.type),Te=y(A.internalFormat,be,Ye,A.colorSpace,A.isVideoTexture);q(ne,A,Qe);let Se;const Xe=A.mipmaps,Ke=a&&A.isVideoTexture!==!0&&Te!==rM,lt=fe.__version===void 0||te===!0,ve=w(A,ee,Qe);if(A.isDepthTexture)Te=n.DEPTH_COMPONENT,a?A.type===ds?Te=n.DEPTH_COMPONENT32F:A.type===fs?Te=n.DEPTH_COMPONENT24:A.type===_o?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:A.type===ds&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===go&&Te===n.DEPTH_COMPONENT&&A.type!==D_&&A.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=fs,Ye=s.convert(A.type)),A.format===Qa&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,A.type!==_o&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=_o,Ye=s.convert(A.type))),lt&&(Ke?t.texStorage2D(n.TEXTURE_2D,1,Te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,be,Ye,null));else if(A.isDataTexture)if(Xe.length>0&&Qe){Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,ve,Te,Xe[0].width,Xe[0].height);for(let ue=0,U=Xe.length;ue<U;ue++)Se=Xe[ue],Ke?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Se.width,Se.height,be,Ye,Se.data):t.texImage2D(n.TEXTURE_2D,ue,Te,Se.width,Se.height,0,be,Ye,Se.data);A.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(n.TEXTURE_2D,ve,Te,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,be,Ye,ee.data)):t.texImage2D(n.TEXTURE_2D,0,Te,ee.width,ee.height,0,be,Ye,ee.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ke&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Te,Xe[0].width,Xe[0].height,ee.depth);for(let ue=0,U=Xe.length;ue<U;ue++)Se=Xe[ue],A.format!==or?be!==null?Ke?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,ee.depth,be,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Te,Se.width,Se.height,ee.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,Se.width,Se.height,ee.depth,be,Ye,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Te,Se.width,Se.height,ee.depth,0,be,Ye,Se.data)}else{Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,ve,Te,Xe[0].width,Xe[0].height);for(let ue=0,U=Xe.length;ue<U;ue++)Se=Xe[ue],A.format!==or?be!==null?Ke?t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,Se.width,Se.height,be,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Te,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,Se.width,Se.height,be,Ye,Se.data):t.texImage2D(n.TEXTURE_2D,ue,Te,Se.width,Se.height,0,be,Ye,Se.data)}else if(A.isDataArrayTexture)Ke?(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,be,Ye,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,be,Ye,ee.data);else if(A.isData3DTexture)Ke?(lt&&t.texStorage3D(n.TEXTURE_3D,ve,Te,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,be,Ye,ee.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,be,Ye,ee.data);else if(A.isFramebufferTexture){if(lt)if(Ke)t.texStorage2D(n.TEXTURE_2D,ve,Te,ee.width,ee.height);else{let ue=ee.width,U=ee.height;for(let de=0;de<ve;de++)t.texImage2D(n.TEXTURE_2D,de,Te,ue,U,0,be,Ye,null),ue>>=1,U>>=1}}else if(Xe.length>0&&Qe){Ke&&lt&&t.texStorage2D(n.TEXTURE_2D,ve,Te,Xe[0].width,Xe[0].height);for(let ue=0,U=Xe.length;ue<U;ue++)Se=Xe[ue],Ke?t.texSubImage2D(n.TEXTURE_2D,ue,0,0,be,Ye,Se):t.texImage2D(n.TEXTURE_2D,ue,Te,be,Ye,Se);A.generateMipmaps=!1}else Ke?(lt&&t.texStorage2D(n.TEXTURE_2D,ve,Te,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ye,ee)):t.texImage2D(n.TEXTURE_2D,0,Te,be,Ye,ee);v(A,Qe)&&x(ne),fe.__version=ie.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function ge(b,A,z){if(A.image.length!==6)return;const ne=K(b,A),te=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+z);const ie=i.get(te);if(te.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+z);const fe=yt.getPrimaries(yt.workingColorSpace),J=A.colorSpace===Bi?null:yt.getPrimaries(A.colorSpace),oe=A.colorSpace===Bi||fe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Me=A.isCompressedTexture||A.image[0].isCompressedTexture,Ue=A.image[0]&&A.image[0].isDataTexture,ee=[];for(let ue=0;ue<6;ue++)!Me&&!Ue?ee[ue]=_(A.image[ue],!1,!0,r.maxCubemapSize):ee[ue]=Ue?A.image[ue].image:A.image[ue],ee[ue]=ze(A,ee[ue]);const Qe=ee[0],be=m(Qe)||a,Ye=s.convert(A.format,A.colorSpace),Te=s.convert(A.type),Se=y(A.internalFormat,Ye,Te,A.colorSpace),Xe=a&&A.isVideoTexture!==!0,Ke=ie.__version===void 0||ne===!0;let lt=w(A,Qe,be);q(n.TEXTURE_CUBE_MAP,A,be);let ve;if(Me){Xe&&Ke&&t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Se,Qe.width,Qe.height);for(let ue=0;ue<6;ue++){ve=ee[ue].mipmaps;for(let U=0;U<ve.length;U++){const de=ve[U];A.format!==or?Ye!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,0,0,de.width,de.height,Ye,de.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,Se,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,0,0,de.width,de.height,Ye,Te,de.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U,Se,de.width,de.height,0,Ye,Te,de.data)}}}else{ve=A.mipmaps,Xe&&Ke&&(ve.length>0&&lt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,lt,Se,ee[0].width,ee[0].height));for(let ue=0;ue<6;ue++)if(Ue){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ee[ue].width,ee[ue].height,Ye,Te,ee[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Se,ee[ue].width,ee[ue].height,0,Ye,Te,ee[ue].data);for(let U=0;U<ve.length;U++){const he=ve[U].image[ue].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,0,0,he.width,he.height,Ye,Te,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,Se,he.width,he.height,0,Ye,Te,he.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ye,Te,ee[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Se,Ye,Te,ee[ue]);for(let U=0;U<ve.length;U++){const de=ve[U];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,0,0,Ye,Te,de.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,U+1,Se,Ye,Te,de.image[ue])}}}v(A,be)&&x(n.TEXTURE_CUBE_MAP),ie.__version=te.version,A.onUpdate&&A.onUpdate(A)}b.__version=A.version}function me(b,A,z,ne,te,ie){const fe=s.convert(z.format,z.colorSpace),J=s.convert(z.type),oe=y(z.internalFormat,fe,J,z.colorSpace);if(!i.get(A).__hasExternalTextures){const Ue=Math.max(1,A.width>>ie),ee=Math.max(1,A.height>>ie);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ie,oe,Ue,ee,A.depth,0,fe,J,null):t.texImage2D(te,ie,oe,Ue,ee,0,fe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),_e(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,0,ye(A)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,te,i.get(z).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(b,A,z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),A.depthBuffer&&!A.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||_e(A)){const te=A.depthTexture;te&&te.isDepthTexture&&(te.type===ds?ne=n.DEPTH_COMPONENT32F:te.type===fs&&(ne=n.DEPTH_COMPONENT24));const ie=ye(A);_e(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(A.depthBuffer&&A.stencilBuffer){const ne=ye(A);z&&_e(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):_e(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0;te<ne.length;te++){const ie=ne[te],fe=s.convert(ie.format,ie.colorSpace),J=s.convert(ie.type),oe=y(ie.internalFormat,fe,J,ie.colorSpace),Me=ye(A);z&&_e(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,oe,A.width,A.height):_e(A)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,oe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,oe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(b,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),B(A.depthTexture,0);const ne=i.get(A.depthTexture).__webglTexture,te=ye(A);if(A.depthTexture.format===go)_e(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(A.depthTexture.format===Qa)_e(A)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ie(b){const A=i.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!A.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");De(A.__webglFramebuffer,b)}else if(z){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=n.createRenderbuffer(),Le(A.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),Le(A.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(b,A,z){const ne=i.get(b);A!==void 0&&me(ne.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Ie(b)}function H(b){const A=b.texture,z=i.get(b),ne=i.get(A);b.addEventListener("dispose",P),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=A.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,fe=m(b)||a;if(te){z.__webglFramebuffer=[];for(let J=0;J<6;J++)if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer[J]=[];for(let oe=0;oe<A.mipmaps.length;oe++)z.__webglFramebuffer[J][oe]=n.createFramebuffer()}else z.__webglFramebuffer[J]=n.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){z.__webglFramebuffer=[];for(let J=0;J<A.mipmaps.length;J++)z.__webglFramebuffer[J]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const J=b.texture;for(let oe=0,Me=J.length;oe<Me;oe++){const Ue=i.get(J[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&_e(b)===!1){const J=ie?A:[A];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const Me=J[oe];z.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);const Ue=s.convert(Me.format,Me.colorSpace),ee=s.convert(Me.type),Qe=y(Me.internalFormat,Ue,ee,Me.colorSpace,b.isXRRenderTarget===!0),be=ye(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Qe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),q(n.TEXTURE_CUBE_MAP,A,fe);for(let J=0;J<6;J++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let oe=0;oe<A.mipmaps.length;oe++)me(z.__webglFramebuffer[J][oe],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,oe);else me(z.__webglFramebuffer[J],b,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);v(A,fe)&&x(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const J=b.texture;for(let oe=0,Me=J.length;oe<Me;oe++){const Ue=J[oe],ee=i.get(Ue);t.bindTexture(n.TEXTURE_2D,ee.__webglTexture),q(n.TEXTURE_2D,Ue,fe),me(z.__webglFramebuffer,b,Ue,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),v(Ue,fe)&&x(n.TEXTURE_2D)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?J=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,ne.__webglTexture),q(J,A,fe),a&&A.mipmaps&&A.mipmaps.length>0)for(let oe=0;oe<A.mipmaps.length;oe++)me(z.__webglFramebuffer[oe],b,A,n.COLOR_ATTACHMENT0,J,oe);else me(z.__webglFramebuffer,b,A,n.COLOR_ATTACHMENT0,J,0);v(A,fe)&&x(J),t.unbindTexture()}b.depthBuffer&&Ie(b)}function ce(b){const A=m(b)||a,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,te=z.length;ne<te;ne++){const ie=z[ne];if(v(ie,A)){const fe=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,J=i.get(ie).__webglTexture;t.bindTexture(fe,J),x(fe),t.unbindTexture()}}}function ae(b){if(a&&b.samples>0&&_e(b)===!1){const A=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,ne=b.height;let te=n.COLOR_BUFFER_BIT;const ie=[],fe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=i.get(b),oe=b.isWebGLMultipleRenderTargets===!0;if(oe)for(let Me=0;Me<A.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let Me=0;Me<A.length;Me++){ie.push(n.COLOR_ATTACHMENT0+Me),b.depthBuffer&&ie.push(fe);const Ue=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(Ue===!1&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),oe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,J.__webglColorRenderbuffer[Me]),Ue===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[fe])),oe){const ee=i.get(A[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,z,ne,0,0,z,ne,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<A.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,J.__webglColorRenderbuffer[Me]);const Ue=i.get(A[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,J.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function ye(b){return Math.min(r.maxSamples,b.samples)}function _e(b){const A=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function W(b){const A=o.render.frame;c.get(b)!==A&&(c.set(b,A),b.update())}function ze(b,A){const z=b.colorSpace,ne=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===nm||z!==jr&&z!==Bi&&(yt.getTransfer(z)===Rt?a===!1?e.has("EXT_sRGB")===!0&&ne===or?(b.format=nm,b.minFilter=qn,b.generateMipmaps=!1):A=lM.sRGBToLinear(A):(ne!==or||te!==Rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),A}this.allocateTextureUnit=L,this.resetTextureUnits=Z,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=We,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function z2(n,e,t){const i=t.isWebGL2;function r(s,o=Bi){let a;const l=yt.getTransfer(o);if(s===Rs)return n.UNSIGNED_BYTE;if(s===JS)return n.UNSIGNED_SHORT_4_4_4_4;if(s===eM)return n.UNSIGNED_SHORT_5_5_5_1;if(s===xA)return n.BYTE;if(s===yA)return n.SHORT;if(s===D_)return n.UNSIGNED_SHORT;if(s===QS)return n.INT;if(s===fs)return n.UNSIGNED_INT;if(s===ds)return n.FLOAT;if(s===Au)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===SA)return n.ALPHA;if(s===or)return n.RGBA;if(s===MA)return n.LUMINANCE;if(s===EA)return n.LUMINANCE_ALPHA;if(s===go)return n.DEPTH_COMPONENT;if(s===Qa)return n.DEPTH_STENCIL;if(s===nm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===TA)return n.RED;if(s===tM)return n.RED_INTEGER;if(s===wA)return n.RG;if(s===nM)return n.RG_INTEGER;if(s===iM)return n.RGBA_INTEGER;if(s===hh||s===ph||s===mh||s===_h)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ph)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ph)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_h)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===D0||s===U0||s===N0||s===I0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===D0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===U0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===N0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===I0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===O0||s===F0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===O0)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===F0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===k0||s===z0||s===B0||s===H0||s===G0||s===V0||s===W0||s===X0||s===Y0||s===j0||s===q0||s===$0||s===K0||s===Z0)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===k0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===z0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===B0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===H0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===G0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===V0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===W0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===X0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Y0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===j0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===q0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===K0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Z0)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gh||s===Q0||s===J0)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gh)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Q0)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===J0)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===AA||s===ev||s===tv||s===nv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ev)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===tv)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===nv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_o?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class B2 extends Oi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ic extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H2={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&d>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ic;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class G2 extends ul{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const v=[],x=[],y=new dt;let w=null;const T=new Oi;T.layers.enable(1),T.viewport=new pn;const M=new Oi;M.layers.enable(2),M.viewport=new pn;const P=[T,M],S=new B2;S.layers.enable(1),S.layers.enable(2);let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=v[q];return K===void 0&&(K=new Gh,v[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=v[q];return K===void 0&&(K=new Gh,v[q]=K),K.getGripSpace()},this.getHand=function(q){let K=v[q];return K===void 0&&(K=new Gh,v[q]=K),K.getHandSpace()};function N(q){const K=x.indexOf(q.inputSource);if(K===-1)return;const re=v[K];re!==void 0&&(re.update(q.inputSource,q.frame,u||o),re.dispatchEvent({type:q.type,data:q.inputSource}))}function Z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",L);for(let q=0;q<v.length;q++){const K=x[q];K!==null&&(x[q]=null,v[q].disconnect(K))}E=null,I=null,e.setRenderTarget(m),p=null,d=null,h=null,r=null,f=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Lo(p.framebufferWidth,p.framebufferHeight,{format:or,type:Rs,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,re=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?Qa:go,re=_.stencil?_o:fs);const me={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Lo(d.textureWidth,d.textureHeight,{format:or,type:Rs,depthTexture:new xM(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Le=e.properties.get(f);Le.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let K=0;K<q.removed.length;K++){const re=q.removed[K],ge=x.indexOf(re);ge>=0&&(x[ge]=null,v[ge].disconnect(re))}for(let K=0;K<q.added.length;K++){const re=q.added[K];let ge=x.indexOf(re);if(ge===-1){for(let Le=0;Le<v.length;Le++)if(Le>=x.length){x.push(re),ge=Le;break}else if(x[Le]===null){x[Le]=re,ge=Le;break}if(ge===-1)break}const me=v[ge];me&&me.connect(re)}}const O=new j,B=new j;function G(q,K,re){O.setFromMatrixPosition(K.matrixWorld),B.setFromMatrixPosition(re.matrixWorld);const ge=O.distanceTo(B),me=K.projectionMatrix.elements,Le=re.projectionMatrix.elements,De=me[14]/(me[10]-1),Ie=me[14]/(me[10]+1),We=(me[9]+1)/me[5],H=(me[9]-1)/me[5],ce=(me[8]-1)/me[0],ae=(Le[8]+1)/Le[0],ye=De*ce,_e=De*ae,W=ge/(-ce+ae),ze=W*-ce;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ze),q.translateZ(W),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=De+W,A=Ie+W,z=ye-ze,ne=_e+(ge-ze),te=We*Ie/A*b,ie=H*Ie/A*b;q.projectionMatrix.makePerspective(z,ne,te,ie,b,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function D(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;S.near=M.near=T.near=q.near,S.far=M.far=T.far=q.far,(E!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,I=S.far);const K=q.parent,re=S.cameras;D(S,K);for(let ge=0;ge<re.length;ge++)D(re[ge],K);re.length===2?G(S,T,M):S.projectionMatrix.copy(T.projectionMatrix),F(q,S,K)};function F(q,K,re){re===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(re.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=im*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let R=null;function $(q,K){if(c=K.getViewerPose(u||o),g=K,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ge=!1;re.length!==S.cameras.length&&(S.cameras.length=0,ge=!0);for(let me=0;me<re.length;me++){const Le=re[me];let De=null;if(p!==null)De=p.getViewport(Le);else{const We=h.getViewSubImage(d,Le);De=We.viewport,me===0&&(e.setRenderTargetTextures(f,We.colorTexture,d.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Ie=P[me];Ie===void 0&&(Ie=new Oi,Ie.layers.enable(me),Ie.viewport=new pn,P[me]=Ie),Ie.matrix.fromArray(Le.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Le.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(De.x,De.y,De.width,De.height),me===0&&(S.matrix.copy(Ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ge===!0&&S.cameras.push(Ie)}}for(let re=0;re<v.length;re++){const ge=x[re],me=v[re];ge!==null&&me!==void 0&&me.update(ge,K,u||o)}R&&R(q,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const Q=new vM;Q.setAnimationLoop($),this.setAnimationLoop=function(q){R=q},this.dispose=function(){}}}function V2(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,pM(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ti&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ti&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ti&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W2(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(g(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const w=x.program;i.updateUBOMapping(v,w);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function c(v){const x=h();v.__bindingPointIndex=x;const y=n.createBuffer(),w=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],y=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,M=y.length;T<M;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,E=P.length;S<E;S++){const I=P[S];if(p(I,T,S,w)===!0){const N=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let O=0;O<Z.length;O++){const B=Z[O],G=_(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+L,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,L),L+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,w){const T=v.value,M=x+"_"+y;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const P=w[M];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[M]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const x=v.uniforms;let y=0;const w=16;for(let M=0,P=x.length;M<P;M++){const S=Array.isArray(x[M])?x[M]:[x[M]];for(let E=0,I=S.length;E<I;E++){const N=S[E],Z=Array.isArray(N.value)?N.value:[N.value];for(let L=0,O=Z.length;L<O;L++){const B=Z[L],G=_(B),D=y%w;D!==0&&w-D<G.boundary&&(y+=w-D),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=G.storage}}}const T=y%w;return T>0&&(y+=w-T),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class wM{constructor(e={}){const{canvas:t=zA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this._useLegacyLights=!1,this.toneMapping=Cs,this.toneMappingExposure=1;const x=this;let y=!1,w=0,T=0,M=null,P=-1,S=null;const E=new pn,I=new pn;let N=null;const Z=new ut(0);let L=0,O=t.width,B=t.height,G=1,D=null,F=null;const R=new pn(0,0,O,B),$=new pn(0,0,O,B);let Q=!1;const q=new gM;let K=!1,re=!1,ge=null;const me=new cn,Le=new dt,De=new j,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?G:1}let H=i;function ce(C,k){for(let Y=0;Y<C.length;Y++){const X=C[Y],V=t.getContext(X,k);if(V!==null)return V}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${L_}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",de,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),H=ce(k,C),H===null)throw ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,ye,_e,W,ze,b,A,z,ne,te,ie,fe,J,oe,Me,Ue,ee,Qe,be,Ye,Te,Se,Xe,Ke;function lt(){ae=new eP(H),ye=new jb(H,ae,e),ae.init(ye),Se=new z2(H,ae,ye),_e=new F2(H,ae,ye),W=new iP(H),ze=new E2,b=new k2(H,ae,_e,ze,ye,Se,W),A=new $b(x),z=new Jb(x),ne=new cC(H,ye),Xe=new Xb(H,ae,ne,ye),te=new tP(H,ne,W,Xe),ie=new aP(H,te,ne,W),be=new oP(H,ye,b),Ue=new qb(ze),fe=new M2(x,A,z,ae,ye,Xe,Ue),J=new V2(x,ze),oe=new w2,Me=new L2(ae,ye),Qe=new Wb(x,A,z,_e,ie,d,l),ee=new O2(x,ie,ye),Ke=new W2(H,W,ye,_e),Ye=new Yb(H,ae,W,ye),Te=new nP(H,ae,W,ye),W.programs=fe.programs,x.capabilities=ye,x.extensions=ae,x.properties=ze,x.renderLists=oe,x.shadowMap=ee,x.state=_e,x.info=W}lt();const ve=new G2(x,H);this.xr=ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(C){C!==void 0&&(G=C,this.setSize(O,B,!1))},this.getSize=function(C){return C.set(O,B)},this.setSize=function(C,k,Y=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,B=k,t.width=Math.floor(C*G),t.height=Math.floor(k*G),Y===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(O*G,B*G).floor()},this.setDrawingBufferSize=function(C,k,Y){O=C,B=k,G=Y,t.width=Math.floor(C*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(E)},this.getViewport=function(C){return C.copy(R)},this.setViewport=function(C,k,Y,X){C.isVector4?R.set(C.x,C.y,C.z,C.w):R.set(C,k,Y,X),_e.viewport(E.copy(R).multiplyScalar(G).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,k,Y,X){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,k,Y,X),_e.scissor(I.copy($).multiplyScalar(G).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){_e.setScissorTest(Q=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(C=!0,k=!0,Y=!0){let X=0;if(C){let V=!1;if(M!==null){const pe=M.texture.format;V=pe===iM||pe===nM||pe===tM}if(V){const pe=M.texture.type,Ce=pe===Rs||pe===fs||pe===D_||pe===_o||pe===JS||pe===eM,Ge=Qe.getClearColor(),Re=Qe.getClearAlpha(),Ne=Ge.r,Ve=Ge.g,$e=Ge.b;Ce?(p[0]=Ne,p[1]=Ve,p[2]=$e,p[3]=Re,H.clearBufferuiv(H.COLOR,0,p)):(g[0]=Ne,g[1]=Ve,g[2]=$e,g[3]=Re,H.clearBufferiv(H.COLOR,0,g))}else X|=H.COLOR_BUFFER_BIT}k&&(X|=H.DEPTH_BUFFER_BIT),Y&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",de,!1),oe.dispose(),Me.dispose(),ze.dispose(),A.dispose(),z.dispose(),ie.dispose(),Xe.dispose(),Ke.dispose(),fe.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",we),ve.removeEventListener("sessionend",Oe),ge&&(ge.dispose(),ge=null),le.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=W.autoReset,k=ee.enabled,Y=ee.autoUpdate,X=ee.needsUpdate,V=ee.type;lt(),W.autoReset=C,ee.enabled=k,ee.autoUpdate=Y,ee.needsUpdate=X,ee.type=V}function de(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function he(C){const k=C.target;k.removeEventListener("dispose",he),Be(k)}function Be(C){Fe(C),ze.remove(C)}function Fe(C){const k=ze.get(C).programs;k!==void 0&&(k.forEach(function(Y){fe.releaseProgram(Y)}),C.isShaderMaterial&&fe.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,X,V,pe){k===null&&(k=Ie);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,Ge=Tt(C,k,Y,X,V);_e.setMaterial(X,Ce);let Re=Y.index,Ne=1;if(X.wireframe===!0){if(Re=te.getWireframeAttribute(Y),Re===void 0)return;Ne=2}const Ve=Y.drawRange,$e=Y.attributes.position;let Pt=Ve.start*Ne,Zt=(Ve.start+Ve.count)*Ne;pe!==null&&(Pt=Math.max(Pt,pe.start*Ne),Zt=Math.min(Zt,(pe.start+pe.count)*Ne)),Re!==null?(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Re.count)):$e!=null&&(Pt=Math.max(Pt,0),Zt=Math.min(Zt,$e.count));const _t=Zt-Pt;if(_t<0||_t===1/0)return;Xe.setup(V,X,Ge,Y,Re);let Ln,xt=Ye;if(Re!==null&&(Ln=ne.get(Re),xt=Te,xt.setIndex(Ln)),V.isMesh)X.wireframe===!0?(_e.setLineWidth(X.wireframeLinewidth*We()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(V.isLine){let je=X.linewidth;je===void 0&&(je=1),_e.setLineWidth(je*We()),V.isLineSegments?xt.setMode(H.LINES):V.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else V.isPoints?xt.setMode(H.POINTS):V.isSprite&&xt.setMode(H.TRIANGLES);if(V.isBatchedMesh)xt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)xt.renderInstances(Pt,_t,V.count);else if(Y.isInstancedBufferGeometry){const je=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Od=Math.min(Y.instanceCount,je);xt.renderInstances(Pt,_t,Od)}else xt.render(Pt,_t)};function ot(C,k,Y){C.transparent===!0&&C.side===zi&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Et(C,k,Y),C.side=Ns,C.needsUpdate=!0,Et(C,k,Y),C.side=zi):Et(C,k,Y)}this.compile=function(C,k,Y=null){Y===null&&(Y=C),m=Me.get(Y),m.init(),v.push(m),Y.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),C!==Y&&C.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);const X=new Set;return C.traverse(function(V){const pe=V.material;if(pe)if(Array.isArray(pe))for(let Ce=0;Ce<pe.length;Ce++){const Ge=pe[Ce];ot(Ge,Y,V),X.add(Ge)}else ot(pe,Y,V),X.add(pe)}),v.pop(),m=null,X},this.compileAsync=function(C,k,Y=null){const X=this.compile(C,k,Y);return new Promise(V=>{function pe(){if(X.forEach(function(Ce){ze.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){V(C);return}setTimeout(pe,10)}ae.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ft=null;function Pe(C){ft&&ft(C)}function we(){le.stop()}function Oe(){le.start()}const le=new vM;le.setAnimationLoop(Pe),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(C){ft=C,ve.setAnimationLoop(C),C===null?le.stop():le.start()},ve.addEventListener("sessionstart",we),ve.addEventListener("sessionend",Oe),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(k),k=ve.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,M),m=Me.get(C,v.length),m.init(),v.push(m),me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(me),re=this.localClippingEnabled,K=Ue.init(this.clippingPlanes,re),_=oe.get(C,f.length),_.init(),f.push(_),He(C,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,F),this.info.render.frame++,K===!0&&Ue.beginShadows();const Y=m.state.shadowsArray;if(ee.render(Y,C,k),K===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(_,C),m.setupLights(x._useLegacyLights),k.isArrayCamera){const X=k.cameras;for(let V=0,pe=X.length;V<pe;V++){const Ce=X[V];ke(_,C,Ce,Ce.viewport)}}else ke(_,C,k);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(x,C,k),Xe.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function He(C,k,Y,X){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){X&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const Ce=ie.update(C),Ge=C.material;Ge.visible&&_.push(C,Ce,Ge,Y,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||q.intersectsObject(C))){const Ce=ie.update(C),Ge=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Ge)){const Re=Ce.groups;for(let Ne=0,Ve=Re.length;Ne<Ve;Ne++){const $e=Re[Ne],Pt=Ge[$e.materialIndex];Pt&&Pt.visible&&_.push(C,Ce,Pt,Y,De.z,$e)}}else Ge.visible&&_.push(C,Ce,Ge,Y,De.z,null)}}const pe=C.children;for(let Ce=0,Ge=pe.length;Ce<Ge;Ce++)He(pe[Ce],k,Y,X)}function ke(C,k,Y,X){const V=C.opaque,pe=C.transmissive,Ce=C.transparent;m.setupLightsView(Y),K===!0&&Ue.setGlobalState(x.clippingPlanes,Y),pe.length>0&&qe(V,pe,k,Y),X&&_e.viewport(E.copy(X)),V.length>0&&Ut(V,k,Y),pe.length>0&&Ut(pe,k,Y),Ce.length>0&&Ut(Ce,k,Y),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function qe(C,k,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const pe=ye.isWebGL2;ge===null&&(ge=new Lo(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?Au:Rs,minFilter:wu,samples:pe?4:0})),x.getDrawingBufferSize(Le),pe?ge.setSize(Le.x,Le.y):ge.setSize(rm(Le.x),rm(Le.y));const Ce=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(Z),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ge=x.toneMapping;x.toneMapping=Cs,Ut(C,Y,X),b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge);let Re=!1;for(let Ne=0,Ve=k.length;Ne<Ve;Ne++){const $e=k[Ne],Pt=$e.object,Zt=$e.geometry,_t=$e.material,Ln=$e.group;if(_t.side===zi&&Pt.layers.test(X.layers)){const xt=_t.side;_t.side=ti,_t.needsUpdate=!0,tt(Pt,Y,X,Zt,_t,Ln),_t.side=xt,_t.needsUpdate=!0,Re=!0}}Re===!0&&(b.updateMultisampleRenderTarget(ge),b.updateRenderTargetMipmap(ge)),x.setRenderTarget(Ce),x.setClearColor(Z,L),x.toneMapping=Ge}function Ut(C,k,Y){const X=k.isScene===!0?k.overrideMaterial:null;for(let V=0,pe=C.length;V<pe;V++){const Ce=C[V],Ge=Ce.object,Re=Ce.geometry,Ne=X===null?Ce.material:X,Ve=Ce.group;Ge.layers.test(Y.layers)&&tt(Ge,k,Y,Re,Ne,Ve)}}function tt(C,k,Y,X,V,pe){C.onBeforeRender(x,k,Y,X,V,pe),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(x,k,Y,X,C,pe),V.transparent===!0&&V.side===zi&&V.forceSinglePass===!1?(V.side=ti,V.needsUpdate=!0,x.renderBufferDirect(Y,k,X,V,C,pe),V.side=Ns,V.needsUpdate=!0,x.renderBufferDirect(Y,k,X,V,C,pe),V.side=zi):x.renderBufferDirect(Y,k,X,V,C,pe),C.onAfterRender(x,k,Y,X,V,pe)}function Et(C,k,Y){k.isScene!==!0&&(k=Ie);const X=ze.get(C),V=m.state.lights,pe=m.state.shadowsArray,Ce=V.state.version,Ge=fe.getParameters(C,V.state,pe,k,Y),Re=fe.getProgramCacheKey(Ge);let Ne=X.programs;X.environment=C.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(C.isMeshStandardMaterial?z:A).get(C.envMap||X.environment),Ne===void 0&&(C.addEventListener("dispose",he),Ne=new Map,X.programs=Ne);let Ve=Ne.get(Re);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===Ce)return At(C,Ge),Ve}else Ge.uniforms=fe.getUniforms(C),C.onBuild(Y,Ge,x),C.onBeforeCompile(Ge,x),Ve=fe.acquireProgram(Ge,Re),Ne.set(Re,Ve),X.uniforms=Ge.uniforms;const $e=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=Ue.uniform),At(C,Ge),X.needsLights=ui(C),X.lightsStateVersion=Ce,X.needsLights&&($e.ambientLightColor.value=V.state.ambient,$e.lightProbe.value=V.state.probe,$e.directionalLights.value=V.state.directional,$e.directionalLightShadows.value=V.state.directionalShadow,$e.spotLights.value=V.state.spot,$e.spotLightShadows.value=V.state.spotShadow,$e.rectAreaLights.value=V.state.rectArea,$e.ltc_1.value=V.state.rectAreaLTC1,$e.ltc_2.value=V.state.rectAreaLTC2,$e.pointLights.value=V.state.point,$e.pointLightShadows.value=V.state.pointShadow,$e.hemisphereLights.value=V.state.hemi,$e.directionalShadowMap.value=V.state.directionalShadowMap,$e.directionalShadowMatrix.value=V.state.directionalShadowMatrix,$e.spotShadowMap.value=V.state.spotShadowMap,$e.spotLightMatrix.value=V.state.spotLightMatrix,$e.spotLightMap.value=V.state.spotLightMap,$e.pointShadowMap.value=V.state.pointShadowMap,$e.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function Kt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=df.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function At(C,k){const Y=ze.get(C);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Tt(C,k,Y,X,V){k.isScene!==!0&&(k=Ie),b.resetTextureUnits();const pe=k.fog,Ce=X.isMeshStandardMaterial?k.environment:null,Ge=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:jr,Re=(X.isMeshStandardMaterial?z:A).get(X.envMap||Ce),Ne=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ve=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),$e=!!Y.morphAttributes.position,Pt=!!Y.morphAttributes.normal,Zt=!!Y.morphAttributes.color;let _t=Cs;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Ln=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xt=Ln!==void 0?Ln.length:0,je=ze.get(X),Od=m.state.lights;if(K===!0&&(re===!0||C!==S)){const Li=C===S&&X.id===P;Ue.setState(X,C,Li)}let Bt=!1;X.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Od.state.version||je.outputColorSpace!==Ge||V.isBatchedMesh&&je.batching===!1||!V.isBatchedMesh&&je.batching===!0||V.isInstancedMesh&&je.instancing===!1||!V.isInstancedMesh&&je.instancing===!0||V.isSkinnedMesh&&je.skinning===!1||!V.isSkinnedMesh&&je.skinning===!0||V.isInstancedMesh&&je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&je.instancingColor===!1&&V.instanceColor!==null||je.envMap!==Re||X.fog===!0&&je.fog!==pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ue.numPlanes||je.numIntersection!==Ue.numIntersection)||je.vertexAlphas!==Ne||je.vertexTangents!==Ve||je.morphTargets!==$e||je.morphNormals!==Pt||je.morphColors!==Zt||je.toneMapping!==_t||ye.isWebGL2===!0&&je.morphTargetsCount!==xt)&&(Bt=!0):(Bt=!0,je.__version=X.version);let Vs=je.currentProgram;Bt===!0&&(Vs=Et(X,k,V));let mg=!1,fl=!1,Fd=!1;const xn=Vs.getUniforms(),Ws=je.uniforms;if(_e.useProgram(Vs.program)&&(mg=!0,fl=!0,Fd=!0),X.id!==P&&(P=X.id,fl=!0),mg||S!==C){xn.setValue(H,"projectionMatrix",C.projectionMatrix),xn.setValue(H,"viewMatrix",C.matrixWorldInverse);const Li=xn.map.cameraPosition;Li!==void 0&&Li.setValue(H,De.setFromMatrixPosition(C.matrixWorld)),ye.logarithmicDepthBuffer&&xn.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xn.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,fl=!0,Fd=!0)}if(V.isSkinnedMesh){xn.setOptional(H,V,"bindMatrix"),xn.setOptional(H,V,"bindMatrixInverse");const Li=V.skeleton;Li&&(ye.floatVertexTextures?(Li.boneTexture===null&&Li.computeBoneTexture(),xn.setValue(H,"boneTexture",Li.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(xn.setOptional(H,V,"batchingTexture"),xn.setValue(H,"batchingTexture",V._matricesTexture,b));const kd=Y.morphAttributes;if((kd.position!==void 0||kd.normal!==void 0||kd.color!==void 0&&ye.isWebGL2===!0)&&be.update(V,Y,Vs),(fl||je.receiveShadow!==V.receiveShadow)&&(je.receiveShadow=V.receiveShadow,xn.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ws.envMap.value=Re,Ws.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),fl&&(xn.setValue(H,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&mt(Ws,Fd),pe&&X.fog===!0&&J.refreshFogUniforms(Ws,pe),J.refreshMaterialUniforms(Ws,X,G,B,ge),df.upload(H,Kt(je),Ws,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(df.upload(H,Kt(je),Ws,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xn.setValue(H,"center",V.center),xn.setValue(H,"modelViewMatrix",V.modelViewMatrix),xn.setValue(H,"normalMatrix",V.normalMatrix),xn.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Li=X.uniformsGroups;for(let zd=0,u1=Li.length;zd<u1;zd++)if(ye.isWebGL2){const _g=Li[zd];Ke.update(_g,Vs),Ke.bind(_g,Vs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vs}function mt(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function ui(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,k,Y){ze.get(C.texture).__webglTexture=k,ze.get(C.depthTexture).__webglTexture=Y;const X=ze.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,k){const Y=ze.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,Y=0){M=C,w=k,T=Y;let X=!0,V=null,pe=!1,Ce=!1;if(C){const Re=ze.get(C);Re.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Re.__webglFramebuffer===void 0?b.setupRenderTarget(C):Re.__hasExternalTextures&&b.rebindTextures(C,ze.get(C.texture).__webglTexture,ze.get(C.depthTexture).__webglTexture);const Ne=C.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ce=!0);const Ve=ze.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?V=Ve[k][Y]:V=Ve[k],pe=!0):ye.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?V=ze.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[Y]:V=Ve,E.copy(C.viewport),I.copy(C.scissor),N=C.scissorTest}else E.copy(R).multiplyScalar(G).floor(),I.copy($).multiplyScalar(G).floor(),N=Q;if(_e.bindFramebuffer(H.FRAMEBUFFER,V)&&ye.drawBuffers&&X&&_e.drawBuffers(C,V),_e.viewport(E),_e.scissor(I),_e.setScissorTest(N),pe){const Re=ze.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,Y)}else if(Ce){const Re=ze.get(C.texture),Ne=k||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.__webglTexture,Y||0,Ne)}P=-1},this.readRenderTargetPixels=function(C,k,Y,X,V,pe,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=ze.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ge=Ge[Ce]),Ge){_e.bindFramebuffer(H.FRAMEBUFFER,Ge);try{const Re=C.texture,Ne=Re.format,Ve=Re.type;if(Ne!==or&&Se.convert(Ne)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $e=Ve===Au&&(ae.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ae.has("EXT_color_buffer_float"));if(Ve!==Rs&&Se.convert(Ve)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===ds&&(ye.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-X&&Y>=0&&Y<=C.height-V&&H.readPixels(k,Y,X,V,Se.convert(Ne),Se.convert(Ve),pe)}finally{const Re=M!==null?ze.get(M).__webglFramebuffer:null;_e.bindFramebuffer(H.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(C,k,Y=0){const X=Math.pow(2,-Y),V=Math.floor(k.image.width*X),pe=Math.floor(k.image.height*X);b.setTexture2D(k,0),H.copyTexSubImage2D(H.TEXTURE_2D,Y,0,0,C.x,C.y,V,pe),_e.unbindTexture()},this.copyTextureToTexture=function(C,k,Y,X=0){const V=k.image.width,pe=k.image.height,Ce=Se.convert(Y.format),Ge=Se.convert(Y.type);b.setTexture2D(Y,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment),k.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,C.x,C.y,V,pe,Ce,Ge,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,C.x,C.y,k.mipmaps[0].width,k.mipmaps[0].height,Ce,k.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,C.x,C.y,Ce,Ge,k.image),X===0&&Y.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(C,k,Y,X,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,Ge=C.max.z-C.min.z+1,Re=Se.convert(X.format),Ne=Se.convert(X.type);let Ve;if(X.isData3DTexture)b.setTexture3D(X,0),Ve=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),Ve=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const $e=H.getParameter(H.UNPACK_ROW_LENGTH),Pt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Zt=H.getParameter(H.UNPACK_SKIP_PIXELS),_t=H.getParameter(H.UNPACK_SKIP_ROWS),Ln=H.getParameter(H.UNPACK_SKIP_IMAGES),xt=Y.isCompressedTexture?Y.mipmaps[V]:Y.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,xt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),Y.isDataTexture||Y.isData3DTexture?H.texSubImage3D(Ve,V,k.x,k.y,k.z,pe,Ce,Ge,Re,Ne,xt.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,V,k.x,k.y,k.z,pe,Ce,Ge,Re,xt.data)):H.texSubImage3D(Ve,V,k.x,k.y,k.z,pe,Ce,Ge,Re,Ne,xt),H.pixelStorei(H.UNPACK_ROW_LENGTH,$e),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Zt),H.pixelStorei(H.UNPACK_SKIP_ROWS,_t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ln),V===0&&X.generateMipmaps&&H.generateMipmap(Ve),_e.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,_e.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===U_?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===Cd?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===hn?vo:sM}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vo?hn:jr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class X2 extends wM{}X2.prototype.isWebGL1Renderer=!0;class Y2 extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class om extends Xu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xv=new cn,am=new N_,Oc=new Rd,Fc=new j;class Yv extends ii{constructor(e=new $i,t=new om){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(r),Oc.radius+=s,e.ray.intersectsSphere(Oc)===!1)return;Xv.copy(r).invert(),am.copy(e.ray).applyMatrix4(Xv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=u.getX(g);Fc.fromBufferAttribute(h,m),jv(Fc,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Fc.fromBufferAttribute(h,g),jv(Fc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jv(n,e,t,i,r,s,o){const a=am.distanceSqToPoint(n);if(a<t){const l=new j;am.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class j2 extends ni{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $l extends $i{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let h=e;const d=(t-e)/r,p=new j,g=new dt;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,c.push(g.x,g.y)}h+=d}for(let _=0;_<r;_++){const m=_*(i+1);for(let f=0;f<i;f++){const v=f+m,x=v,y=v+i+1,w=v+i+2,T=v+1;a.push(x,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new Ti(l,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class k_ extends $i{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new j,d=new j,p=[],g=[],_=[],m=[];for(let f=0;f<=i;f++){const v=[],x=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(r+T*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+T*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-x),v.push(u++)}c.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){const x=c[f][v+1],y=c[f][v],w=c[f+1][v],T=c[f+1][v+1];(f!==0||o>0)&&p.push(x,y,T),(f!==i-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new Ti(g,3)),this.setAttribute("normal",new Ti(_,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new k_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class q2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qv(){return(typeof performance>"u"?Date:performance).now()}class $2{constructor(e,t,i=0,r=1/0){this.ray=new N_(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new I_,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return lm(e,this,i,t),i.sort($v),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)lm(e[r],this,i,t);return i.sort($v),i}}function $v(n,e){return n.distance-e.distance}function lm(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)lm(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:L_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=L_);function Ur(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function AM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cu={duration:.5,overwrite:!1,delay:0},z_,gn,Dt,Vi=1e8,Mt=1/Vi,um=Math.PI*2,K2=um/4,Z2=0,CM=Math.sqrt,Q2=Math.cos,J2=Math.sin,fn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},qr=function(e){return typeof e=="number"},B_=function(e){return typeof e>"u"},wr=function(e){return typeof e=="object"},ri=function(e){return e!==!1},H_=function(){return typeof window<"u"},kc=function(e){return Gt(e)||fn(e)},RM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,eL=/random\([^)]+\)/g,tL=/,\s*/g,Kv=/(?:-?\.?\d|\.)+/gi,bM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,PM=/[+-]=-?[.\d]+/,nL=/[^,'"\[\]\s]+/gi,iL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,hr,cm,G_,Ci={},Qf={},LM,DM=function(e){return(Qf=el(e,Ci))&&li},V_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ru=function(e,t){return!t&&console.warn(e)},UM=function(e,t){return e&&(Ci[e]=t)&&Qf&&(Qf[e]=t)||Ci},bu=function(){return 0},rL={suppressEvents:!0,isStart:!0,kill:!1},hf={suppressEvents:!0,kill:!1},sL={suppressEvents:!0},W_={},bs=[],fm={},NM,mi={},Wh={},Zv=30,pf=[],X_="",Y_=function(e){var t=e[0],i,r;if(wr(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=pf.length;r--&&!pf[r].targetTest(t););i=pf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new nE(e[r],i)))||e.splice(r,1);return e},xo=function(e){return e._gsap||Y_(Wi(e))[0]._gsap},IM=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():B_(i)&&e.getAttribute&&e.getAttribute(t)||i},si=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Oa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},oL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Jf=function(){var e=bs.length,t=bs.slice(0),i,r;for(fm={},bs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},j_=function(e){return!!(e._initted||e._startAt||e.add)},OM=function(e,t,i,r){bs.length&&!gn&&Jf(),e.render(t,i,!!(gn&&t<0&&j_(e))),bs.length&&!gn&&Jf()},FM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(nL).length<2?t:fn(e)?e.trim():e},kM=function(e){return e},Ri=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},aL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},el=function(e,t){for(var i in t)e[i]=t[i];return e},Qv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=wr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ed=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Kl=function(e){var t=e.parent||Ot,i=e.keyframes?aL(bn(e.keyframes)):Ri;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},zM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Ld=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Is=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},uL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dm=function(e,t,i,r){return e._startAt&&(gn?e._startAt.revert(hf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cL=function n(e){return!e||e._ts&&n(e.parent)},Jv=function(e){return e._repeat?tl(e._tTime,e=e.duration()+e._rDelay)*e:0},tl=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},td=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Dd=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Ud=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Dd(e),i._dirty||yo(i,e)),e},BM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=td(e.rawTime(),t),(!t._dur||ju(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),yo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},gr=function(e,t,i,r){return t.parent&&Is(t),t._start=Nt((qr(i)?i:i||e!==Ot?Ui(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),zM(e,t,"_first","_last",e._sort?"_start":0),hm(t)||(e._recent=t),r||BM(e,t),e._ts<0&&Ud(e,e._tTime),e},HM=function(e,t){return(Ci.ScrollTrigger||V_("scrollTrigger",t))&&Ci.ScrollTrigger.create(t,e)},GM=function(e,t,i,r,s){if($_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&NM!==gi.frame)return bs.push(e),e._lazy=[s,r],1},fL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},hm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&fL(e)&&!(!e._initted&&hm(e))||(e._ts<0||e._dp._ts<0)&&!hm(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=ju(0,e._tDur,t),c=tl(l,a),e._yoyo&&c&1&&(o=1-o),c!==tl(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&GM(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&dm(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Is(e,1),!i&&!gn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},hL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},nl=function(e,t,i,r){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ud(e,e._tTime=e._tDur*a),e.parent&&Dd(e),i||yo(e.parent,e),e},ex=function(e){return e instanceof Kn?yo(e):nl(e,e._dur)},pL={_start:0,endTime:bu,totalDuration:bu},Ui=function n(e,t,i){var r=e.labels,s=e._recent||pL,o=e.duration()>=Vi?s.endTime(!1):e._dur,a,l,u;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(bn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Zl=function(e,t,i){var r=qr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},Gs=function(e,t){return e||e===0?t(e):t},ju=function(e,t,i){return i<e?e:i>t?t:i},Cn=function(e,t){return!fn(e)||!(t=iL.exec(e))?"":t[1]},mL=function(e,t,i){return Gs(i,function(r){return ju(e,t,r)})},pm=[].slice,VM=function(e,t){return e&&wr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&wr(e[0]))&&!e.nodeType&&e!==hr},_L=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return fn(r)&&!t||VM(r,1)?(s=i).push.apply(s,Wi(r)):i.push(r)})||i},Wi=function(e,t,i){return Dt&&!t&&Dt.selector?Dt.selector(e):fn(e)&&!i&&(cm||!il())?pm.call((t||G_).querySelectorAll(e),0):bn(e)?_L(e,i):VM(e)?pm.call(e,0):e?[e]:[]},mm=function(e){return e=Wi(e)[0]||Ru("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Wi(t,i.querySelectorAll?i:i===e?Ru("Invalid scope")||G_.createElement("div"):e)}},WM=function(e){return e.sort(function(){return .5-Math.random()})},XM=function(e){if(Gt(e))return e;var t=wr(e)?e:{each:e},i=So(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return fn(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(d,p,g){var _=(g||t).length,m=o[_],f,v,x,y,w,T,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Vi])[1],!S){for(M=-Vi;M<(M=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],f=l?Math.min(S,_)*c-.5:r%S,v=S===Vi?0:l?_*h/S-.5:r/S|0,M=0,P=Vi,T=0;T<_;T++)x=T%S-f,y=v-(T/S|0),m[T]=w=u?Math.abs(u==="y"?y:x):CM(x*x+y*y),w>M&&(M=w),w<P&&(P=w);r==="random"&&WM(m),m.max=M-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Cn(t.amount||t.each)||0,i=i&&_<0?bL(i):i}return _=(m[d]-m.min)/m.max||0,Nt(m.b+(i?i(_):_)*m.v)+m.u}},_m=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(qr(i)?0:Cn(i))}},YM=function(e,t){var i=bn(e),r,s;return!i&&wr(e)&&(r=i=e.radius||Vi,e.values?(e=Wi(e.values),(s=!qr(e[0]))&&(r*=r)):e=_m(e.increment)),Gs(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Vi,c=0,h=e.length,d,p;h--;)s?(d=e[h].x-a,p=e[h].y-l,d=d*d+p*p):d=Math.abs(e[h]-a),d<u&&(u=d,c=h);return c=!r||u<=r?e[c]:o,s||c===o||qr(o)?c:c+Cn(o)}:_m(e))},jM=function(e,t,i,r){return Gs(bn(e)?!t:i===!0?!!(i=0):!r,function(){return bn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},gL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},vL=function(e,t){return function(i){return e(parseFloat(i))+(t||Cn(i))}},xL=function(e,t,i){return $M(e,t,0,1,i)},qM=function(e,t,i){return Gs(i,function(r){return e[~~t(r)]})},yL=function n(e,t,i){var r=t-e;return bn(e)?qM(e,n(0,e.length),t):Gs(i,function(s){return(r+(s-e)%r)%r+e})},SL=function n(e,t,i){var r=t-e,s=r*2;return bn(e)?qM(e,n(0,e.length-1),t):Gs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Pu=function(e){return e.replace(eL,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(tL);return jM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},$M=function(e,t,i,r,s){var o=t-e,a=r-i;return Gs(s,function(l){return i+((l-e)/o*a||0)})},ML=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=fn(e),a={},l,u,c,h,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(c=[],h=e.length,d=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return c[_](g-_)},i=t}else r||(e=el(bn(e)?[]:{},e));if(!c){for(l in t)q_.call(a,e,l,"get",t[l]);s=function(g){return Q_(g,a)||(o?e.p:e)}}}return Gs(i,s)},tx=function(e,t,i){var r=e.labels,s=Vi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,i){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&bs.length&&Jf(),a&&(Dt=a),c=l?s.apply(u,l):s.call(u),Dt=o,c},Dl=function(e){return Is(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&yi(e,"onInterrupt"),e},Aa,KM=[],ZM=function(e){if(e)if(e=!e.name&&e.default||e,H_()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:bu,render:Q_,add:q_,kill:zL,modifier:kL,rawVars:0},o={targetTest:0,get:0,getSetter:Z_,aliases:{},register:0};if(il(),e!==r){if(mi[t])return;Ri(r,Ri(ed(e,s),o)),el(r.prototype,el(s,ed(e,o))),mi[r.prop=t]=r,e.targetTest&&(pf.push(r),W_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}UM(t,r),e.register&&e.register(li,r,oi)}else KM.push(e)},St=255,Ul={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Xh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*St+.5|0},QM=function(e,t,i){var r=e?qr(e)?[e>>16,e>>8&St,e&St]:0:Ul.black,s,o,a,l,u,c,h,d,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ul[e])r=Ul[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&St,r&St,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&St,e&St]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Kv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Xh(l+1/3,s,o),r[1]=Xh(l,s,o),r[2]=Xh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(bM),i&&r.length<4&&(r[3]=1),r}else r=e.match(Kv)||Ul.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/St,o=r[1]/St,a=r[2]/St,h=Math.max(s,o,a),d=Math.min(s,o,a),c=(h+d)/2,h===d?l=u=0:(p=h-d,u=c>.5?p/(2-h-d):p/(h+d),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},JM=function(e){var t=[],i=[],r=-1;return e.split(Ps).forEach(function(s){var o=s.match(wa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},nx=function(e,t,i){var r="",s=(e+r).match(Ps),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(d){return(d=QM(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=JM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ps,"1").split(wa),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ps),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},Ps=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ul)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),EL=/hsl[a]?\(/,eE=function(e){var t=e.join(" "),i;if(Ps.lastIndex=0,Ps.test(t))return i=EL.test(t),e[1]=nx(e[1],i),e[0]=nx(e[0],i,JM(e[1])),!0},Lu,gi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,d,p,g=function _(m){var f=n()-r,v=m===!0,x,y,w,T;if((f>e||f<0)&&(i+=f-t),r+=f,w=r-i,x=w-o,(x>0||v)&&(T=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](w,d,T,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){LM&&(!cm&&H_()&&(hr=cm=window,G_=hr.document||{},Ci.gsap=li,(hr.gsapVersions||(hr.gsapVersions=[])).push(li.version),DM(Qf||hr.GreenSockGlobals||!hr.gsap&&hr||{}),KM.forEach(ZM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Lu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Lu=0,u=bu},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,f,v){var x=f?function(y,w,T,M){m(y,w,T,M),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),il(),x},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},h}(),il=function(){return!Lu&&gi.wake()},at={},TL=/^[\d.\-M][\d.\-,\s]/,wL=/["']/g,AL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(wL,"").trim():+u,r=l.substr(a+1).trim();return t},CL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},RL=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[AL(t[1])]:CL(e).split(",").map(FM)):at._CE&&TL.test(e)?at._CE("",e):i},bL=function(e){return function(t){return 1-e(1-t)}},So=function(e,t){return e&&(Gt(e)?e:at[e]||RL(e))||t},zo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return si(e,function(a){at[a]=Ci[a]=s,at[o=a.toLowerCase()]=i;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},tE=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/um*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*J2((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:tE(a);return s=um/s,l.config=function(u,c){return n(e,u,c)},l},jh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:tE(i);return r.config=function(s){return n(e,s)},r};si("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;zo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;zo("Elastic",Yh("in"),Yh("out"),Yh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};zo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);zo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});zo("Circ",function(n){return-(CM(1-n*n)-1)});zo("Sine",function(n){return n===1?1:-Q2(n*K2)+1});zo("Back",jh("in"),jh("out"),jh());at.SteppedEase=at.steps=Ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*ju(0,o,a)|0)+s)*i}}};Cu.ease=at["quad.out"];si("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return X_+=n+","+n+"Params,"});var nE=function(e,t){this.id=Z2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:IM,this.set=t?t.getSetter:Z_},Du=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,nl(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),Lu||gi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,nl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(il(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ud(this,i),!s._dp||s.parent||BM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),OM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Jv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Jv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?tl(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?td(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(ju(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Dd(this),uL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(il(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?td(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sL);var r=gn;return gn=i,j_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),gn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ex(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ex(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Ui(this,i),ri(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ri(r)),this._dur||(this._zTime=-Mt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:kM,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Dl(this)},n}();Ri(Du.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Kn=function(n){AM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),Ot&&gr(i.parent||Ot,Ur(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&HM(Ur(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Zl(0,arguments,this),this},t.from=function(r,s,o){return Zl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Zl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Kl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,Ui(this,o),1),this},t.call=function(r,s,o){return gr(this,qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new qt(r,o,Ui(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Kl(o).immediateRender=ri(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,Kl(a).immediateRender=ri(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Nt(r),h=this._zTime<0!=r<0&&(this._initted||!u),d,p,g,_,m,f,v,x,y,w,T,M;if(this!==Ot&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,x=this._ts,f=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Nt(c%m),c===l?(_=this._repeat,d=u):(w=Nt(c/m),_=~~w,_&&_===w&&(d=u,_--),d>u&&(d=u)),w=tl(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),T&&_&1&&(d=u-d,M=1),_!==w&&!this._lock){var P=T&&w&1,S=P===(T&&_&1);if(_<w&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Nt(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=hL(this,Nt(a),Nt(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!w&&(yi(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!f){v=0,g&&(c+=this._zTime=-Mt);break}}p=g}else{p=this._last;for(var E=r<0?r:d;p;){if(g=p._prev,(p._act||E<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||gn&&j_(p)),d!==this._time||!this._ts&&!f){v=0,g&&(c+=this._zTime=E?-Mt:Mt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Dd(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Is(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(yi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(qr(s)||(s=Ui(this,s,r)),!(r instanceof Du)){if(bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(fn(r))return this.addLabel(r,s);if(Gt(r))r=qt.delayedCall(0,r);else return this}return this!==r?gr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return fn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&Ld(this,r),r===this._recent&&(this._recent=this._last),yo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(gi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Ui(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=qt.delayedCall(0,s||bu,o);return a.data="isPause",this._hasPause=1,gr(this,a,Ui(this,r))},t.removePause=function(r){var s=this._first;for(r=Ui(this,r);s;)s._start===r&&s.data==="isPause"&&Is(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)hs!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Wi(r),l=this._first,u=qr(s),c;l;)l instanceof qt?oL(l._targets,a)&&(u?(!hs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Ui(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=qt.to(o,Ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&nl(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ri({startAt:{time:Ui(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),tx(this,Ui(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),tx(this,Ui(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Nt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return yo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),yo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vi,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Nt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;nl(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(OM(Ot,td(r,Ot)),NM=gi.frame),gi.frame>=Zv){Zv+=wi.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&wi.autoSleep&&gi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||gi.sleep()}}},e}(Du);Ri(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var PL=function(e,t,i,r,s,o,a){var l=new oi(this._pt,e,t,0,1,lE,null,s),u=0,c=0,h,d,p,g,_,m,f,v;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Pu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(Vh)||[];h=Vh.exec(r);)g=h[0],_=r.substring(u,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Oa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=Vh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(PM.test(r)||f)&&(l.e=0),this._pt=l,l},q_=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var h=e[t],d=i!=="get"?i:Gt(h)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=Gt(h)?u?IL:oE:K_,g;if(fn(r)&&(~r.indexOf("random(")&&(r=Pu(r)),r.charAt(1)==="="&&(g=Oa(d,r)+(Cn(d)||0),(g||g===0)&&(r=g))),!c||d!==r||gm)return!isNaN(d*r)&&r!==""?(g=new oi(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?FL:aE,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&V_(t,r),PL.call(this,e,t,d,r,p,l||wi.stringFilter,u))},LL=function(e,t,i,r,s){if(Gt(e)&&(e=Ql(e,s,t,i,r)),!wr(e)||e.style&&e.nodeType||bn(e)||RM(e))return fn(e)?Ql(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ql(e[a],s,t,i,r);return o},iE=function(e,t,i,r,s,o){var a,l,u,c;if(mi[e]&&(a=new mi[e]).init(s,a.rawVars?t[e]:LL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new oi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Aa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},hs,gm,$_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,d=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,f=e.parent,v=f&&f.data==="nested"?f.vars.targets:m,x=e._overwrite==="auto"&&!z_,y=e.timeline,w=r.easeReverse||h,T,M,P,S,E,I,N,Z,L,O,B,G,D;if(y&&(!d||!s)&&(s="none"),e._ease=So(s,Cu.ease),e._rEase=w&&(So(w)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||d&&!r.stagger){if(Z=m[0]?xo(m[0]).harness:0,G=Z&&r[Z.prop],T=ed(r,W_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?hf:rL),_._lazy=0),o){if(Is(e._startAt=qt.set(m,Ri({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&ri(l),startAt:null,delay:0,onUpdate:u&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!p)&&e._startAt.revert(hf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),P=Ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ri(l),immediateRender:a,stagger:0,parent:f},T),G&&(P[Z.prop]=G),Is(e._startAt=qt.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(hf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ri(l)||l&&!g,M=0;M<m.length;M++){if(E=m[M],N=E._gsap||Y_(m)[M]._gsap,e._ptLookup[M]=O={},fm[N.id]&&bs.length&&Jf(),B=v===m?M:v.indexOf(E),Z&&(L=new Z).init(E,G||T,e,B,v)!==!1&&(e._pt=S=new oi(e._pt,E,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(F){O[F]=S}),L.priority&&(I=1)),!Z||G)for(P in T)mi[P]&&(L=iE(P,T,e,B,E,v))?L.priority&&(I=1):O[P]=S=q_.call(e,E,P,"get",T[P],B,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(E,e._op[M]),x&&e._pt&&(hs=e,Ot.killTweensOf(E,O,e.globalTime(t)),D=!e.parent,hs=0),e._pt&&l&&(fm[N.id]=1)}I&&uE(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!D,d&&t<=0&&y.render(Vi,!0,!0)},DL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return gm=1,e.vars[t]="+=0",$_(e,a),gm=0,l?Ru(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=Vt(i)+Cn(h.e)),h.b&&(h.b=c.s+Cn(h.b))},UL=function(e,t){var i=e[0]?xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=el({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},NL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(bn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ql=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):fn(e)&&~e.indexOf("random(")?Pu(e):e},rE=X_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",sE={};si(rE+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return sE[n]=1});var qt=function(n){AM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Kl(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=r.parent||Ot,v=(bn(i)||RM(i)?qr(i[0]):"length"in r)?[i]:Wi(i),x,y,w,T,M,P,S,E;if(a._targets=v.length?Y_(v):Ru("GSAP target "+i+" not found. https://gsap.com",!wi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||kc(u)||kc(c)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(x=a.timeline=new Kn({data:"nested",defaults:_||{},targets:f&&f.data==="nested"?f.vars.targets:v}),x.kill(),x.parent=x._dp=Ur(a),x._start=0,d||kc(u)||kc(c)){if(T=v.length,S=d&&XM(d),wr(d))for(M in d)~rE.indexOf(M)&&(E||(E={}),E[M]=d[M]);for(y=0;y<T;y++)w=ed(r,sE),w.stagger=0,I&&(w.easeReverse=I),E&&el(w,E),P=v[y],w.duration=+Ql(u,Ur(a),y,P,v),w.delay=(+Ql(c,Ur(a),y,P,v)||0)-a._delay,!d&&T===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),x.to(P,w,S?S(y,P,v):0),x._ease=at.none;x.duration()?u=c=0:a.timeline=0}else if(g){Kl(Ri(x.vars.defaults,{ease:"none"})),x._ease=So(g.ease||r.ease||"none");var N=0,Z,L,O;if(bn(g))g.forEach(function(B){return x.to(v,B,">")}),x.duration();else{w={};for(M in g)M==="ease"||M==="easeEach"||NL(M,g[M],w,g.easeEach);for(M in w)for(Z=w[M].sort(function(B,G){return B.t-G.t}),N=0,y=0;y<Z.length;y++)L=Z[y],O={ease:L.e,duration:(L.t-(y?Z[y-1].t:0))/100*u},O[M]=L.v,x.to(v,O,N),N+=O.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!z_&&(hs=Ur(a),Ot.killTweensOf(v),hs=0),gr(f,Ur(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!g&&a._start===Nt(f._time)&&ri(h)&&cL(Ur(a))&&f.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),m&&HM(Ur(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-Mt&&!c?l:r<Mt?0:r,d,p,g,_,m,f,v,x;if(!u)dL(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(d=Nt(h%_),h===l?(g=this._repeat,d=u):(m=Nt(h/_),g=~~m,g&&g===m?(d=u,g--):d>u&&(d=u)),f=this._yoyo&&g&1,f&&(d=u-d),m=tl(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Nt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(GM(this,c?r:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var w=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(y?-1:1)/w:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(d/u);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(yi(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&dm(this,r,s,o),yi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&dm(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Is(this,1),!s&&!(c&&!a)&&(h||a||f)&&(yi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Lu||gi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||$_(this,u),c=this._ease(u/this._dur),DL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Ud(this,0),this.parent||zM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Dl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,hs&&hs.vars.overwrite!==!0)._first||Dl(this),this.parent&&o!==this.timeline.totalDuration()&&nl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Wi(r):a,u=this._ptLookup,c=this._pt,h,d,p,g,_,m,f;if((!s||s==="all")&&lL(a,l))return s==="all"&&(this._pt=0),Dl(this);for(h=this._op=this._op||[],s!=="all"&&(fn(s)&&(_={},si(s,function(v){return _[v]=1}),s=_),s=UL(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=u[f],s==="all"?(h[f]=s,g=d,p={}):(p=h[f]=h[f]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ld(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Dl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Zl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Zl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e}(Du);Ri(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});si("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Kn,t=pm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var K_=function(e,t,i){return e[t]=i},oE=function(e,t,i){return e[t](i)},IL=function(e,t,i,r){return e[t](r.fp,i)},OL=function(e,t,i){return e.setAttribute(t,i)},Z_=function(e,t){return Gt(e[t])?oE:B_(e[t])&&e.setAttribute?OL:K_},aE=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},FL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lE=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Q_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},kL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},zL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ld(this,t,"_pt"):t.dep||(i=1),t=r;return!i},BL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},uE=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},oi=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||aE,this.d=l||this,this.set=u||K_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=BL,this.m=i,this.mt=s,this.tween=r},n}();si(X_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return W_[n]=1});Ci.TweenMax=Ci.TweenLite=qt;Ci.TimelineLite=Ci.TimelineMax=Kn;Ot=new Kn({sortChildren:!1,defaults:Cu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=eE;var Mo=[],mf={},HL=[],ix=0,GL=0,qh=function(e){return(mf[e]||HL).map(function(t){return t()})},vm=function(){var e=Date.now(),t=[];e-ix>2&&(qh("matchMediaInit"),Mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=hr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),qh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),ix=e,qh("matchMedia"))},cE=function(){function n(t,i){this.selector=i&&mm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=GL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Dt,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=mm(s)),Dt=o,h=r.apply(o,arguments),Gt(h)&&o._r.push(h),Dt=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Dt;Dt=null,i(this),Dt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Kn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Mo.length;o--;)Mo[o].id===this.id&&Mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),VL=function(){function n(t){this.contexts=[],this.scope=t,Dt&&Dt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){wr(i)||(i={matches:i});var o=new cE(0,s||this.scope),a=o.conditions={},l,u,c;Dt&&!o.selector&&(o.selector=Dt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=hr.matchMedia(i[u]),l&&(Mo.indexOf(o)<0&&Mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(vm):l.addEventListener("change",vm)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),nd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ZM(r)})},timeline:function(e){return new Kn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,i,r){fn(e)&&(e=Wi(e)[0]);var s=xo(e||{}).get,o=i?kM:FM;return i==="native"&&(i=""),e&&(t?o((mi[t]&&mi[t].get||s)(e,t,i,r)):function(a,l,u){return o((mi[a]&&mi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Wi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=mi[t],a=xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Aa._pt=0,h.init(e,i?c+i:c,Aa,0,[e]),h.render(1,h),Aa._pt&&Q_(1,Aa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Ri((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=So(e.ease,Cu.ease)),Qv(Cu,e||{})},config:function(e){return Qv(wi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!mi[a]&&!Ci[a]&&Ru(t+" effect requires "+a+" plugin.")}),Wh[t]=function(a,l,u){return i(Wi(a),Ri(l||{},s),u)},o&&(Kn.prototype[t]=function(a,l,u){return this.add(Wh[t](a,wr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){at[e]=So(t)},parseEase:function(e,t){return arguments.length?So(e,t):at},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Kn(e),r,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),Ot.remove(i),i._dp=0,i._time=i._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&gr(i,r,r._start-r._delay),r=s;return gr(Ot,i,0),i},context:function(e,t){return e?new cE(e,t):Dt},matchMedia:function(e){return new VL(e)},matchMediaRefresh:function(){return Mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||vm()},addEventListener:function(e,t){var i=mf[e]||(mf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=mf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:yL,wrapYoyo:SL,distribute:XM,random:jM,snap:YM,normalize:xL,getUnit:Cn,clamp:mL,splitColor:QM,toArray:Wi,selector:mm,mapRange:$M,pipe:gL,unitize:vL,interpolate:ML,shuffle:WM},install:DM,effects:Wh,ticker:gi,updateRoot:Kn.updateRoot,plugins:mi,globalTimeline:Ot,core:{PropTween:oi,globals:UM,Tween:qt,Timeline:Kn,Animation:Du,getCache:xo,_removeLinkedListItem:Ld,reverting:function(){return gn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return z_=e}}};si("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return nd[n]=qt[n]});gi.add(Kn.updateRoot);Aa=nd.to({},{duration:0});var WL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},XL=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=WL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},$h=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(fn(s)&&(l={},si(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}XL(a,s)}}}},li=nd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)gn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},$h("roundProps",_m),$h("modifiers"),$h("snap",YM))||nd;qt.version=Kn.version=li.version="3.15.0";LM=1;H_()&&il();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rx,ps,Fa,J_,uo,sx,eg,YL=function(){return typeof window<"u"},$r={},eo=180/Math.PI,ka=Math.PI/180,ia=Math.atan2,ox=1e8,tg=/([A-Z])/g,jL=/(left|right|width|margin|padding|x)/i,qL=/[\s,\(]\S/,vr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$L=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},KL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZL=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},QL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},fE=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},dE=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},JL=function(e,t,i){return e.style[t]=i},eD=function(e,t,i){return e.style.setProperty(t,i)},tD=function(e,t,i){return e._gsap[t]=i},nD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},iD=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},rD=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Ft="transform",ai=Ft+"Origin",sD=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in $r&&s){if(this.tfm=this.tfm||{},e!=="transform")e=vr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Ir(r,a)}):this.tfm[e]=o.x?o[e]:Ir(r,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return vr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Ft)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=Ft}(s||t)&&this.props.push(e,t,s[e])},hE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},oD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(tg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=eg(),(!s||!s.isStart)&&!i[Ft]&&(hE(i),r.zOrigin&&i[ai]&&(i[ai]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},pE=function(e,t){var i={target:e,props:[],revert:oD,save:sD};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},mE,ym=function(e,t){var i=ps.createElementNS?ps.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ps.createElement(e);return i&&i.style?i:ps.createElement(e)},Si=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(tg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,rl(t)||t,1)||""},ax="O,Moz,ms,Ms,Webkit".split(","),rl=function(e,t,i){var r=t||uo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ax[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ax[o]:"")+e},Sm=function(){YL()&&window.document&&(rx=window,ps=rx.document,Fa=ps.documentElement,uo=ym("div")||{style:{}},ym("div"),Ft=rl(Ft),ai=Ft+"Origin",uo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mE=!!rl("perspective"),eg=li.core.reverting,J_=1)},lx=function(e){var t=e.ownerSVGElement,i=ym("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Fa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Fa.removeChild(i),s},ux=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},_E=function(e){var t,i;try{t=e.getBBox()}catch{t=lx(e),i=1}return t&&(t.width||t.height)||i||(t=lx(e)),t&&!t.width&&!t.x&&!t.y?{x:+ux(e,["x","cx","x1"])||0,y:+ux(e,["y","cy","y1"])||0,width:0,height:0}:t},gE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_E(e))},Os=function(e,t){if(t){var i=e.style,r;t in $r&&t!==ai&&(t=Ft),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(tg,"-$1").toLowerCase())):i.removeAttribute(t)}},ms=function(e,t,i,r,s,o){var a=new oi(e._pt,t,i,0,1,o?dE:fE);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},cx={deg:1,rad:1,turn:1},aD={grid:1,flex:1},Fs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=uo.style,l=jL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",p=r==="%",g,_,m,f;if(r===o||!s||cx[r]||cx[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),f=e.getCTM&&gE(e),(p||o==="%")&&($r[t]||~t.indexOf("adius")))return g=f?e.getBBox()[l?"width":"height"]:e[c],Vt(p?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ps||!_.appendChild)&&(_=ps.body),m=_._gsap,m&&p&&m.width&&l&&m.time===gi.time&&!m.uncache)return Vt(s/m.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,g=e[c],v?e.style[t]=v:Os(e,t)}else(p||o==="%")&&!aD[Si(_,"display")]&&(a.position=Si(e,"position")),_===e&&(a.position="static"),_.appendChild(uo),g=uo[c],_.removeChild(uo),a.position="absolute";return l&&p&&(m=xo(_),m.time=gi.time,m.width=_[c]),Vt(d?g*s/h:g&&s?h/g*s:0)},Ir=function(e,t,i,r){var s;return J_||Sm(),t in vr&&t!=="transform"&&(t=vr[t],~t.indexOf(",")&&(t=t.split(",")[0])),$r[t]&&t!=="transform"?(s=Nu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rd(Si(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=id[t]&&id[t](e,t,i)||Si(e,t)||IM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fs(e,t,s,i)+i:s},lD=function(e,t,i,r){if(!i||i==="none"){var s=rl(t,e,1),o=s&&Si(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Si(e,"borderTopColor"))}var a=new oi(this._pt,e.style,t,0,1,lE),l=0,u=0,c,h,d,p,g,_,m,f,v,x,y,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Si(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Si(e,t)||r,_?e.style[t]=_:Os(e,t)),c=[i,r],eE(c),i=c[0],r=c[1],d=i.match(wa)||[],w=r.match(wa)||[],w.length){for(;h=wa.exec(r);)m=h[0],v=r.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=d[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Oa(p,m)+y),f=parseFloat(m),x=m.substr((f+"").length),l=wa.lastIndex-x.length,x||(x=x||wi.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Fs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:f-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?dE:fE;return PM.test(r)&&(a.e=0),this._pt=a,a},fx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=fx[i]||i,t[1]=fx[r]||r,t.join(" ")},cD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],$r[a]&&(l=1,a=a==="transformOrigin"?ai:Ft),Os(i,a);l&&(Os(i,Ft),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Nu(i,1),o.uncache=1,hE(r)))}},id={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new oi(e._pt,t,i,0,0,cD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Uu=[1,0,0,1,0,0],vE={},xE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dx=function(e){var t=Si(e,Ft);return xE(t)?Uu:t.substr(7).match(bM).map(Vt)},ng=function(e,t){var i=e._gsap||xo(e),r=e.style,s=dx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Uu:s):(s===Uu&&!e.offsetParent&&e!==Fa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Fa.appendChild(e)),s=dx(e),l?r.display=l:Os(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Mm=function(e,t,i,r,s,o){var a=e._gsap,l=s||ng(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],f=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,T,M,P,S;i?l!==Uu&&(M=p*m-g*_)&&(P=y*(m/M)+w*(-_/M)+(_*v-m*f)/M,S=y*(-g/M)+w*(p/M)-(p*v-g*f)/M,y=P,w=S):(T=_E(e),y=T.x+(~x[0].indexOf("%")?y/100*T.width:y),w=T.y+(~(x[1]||x[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(f=y-u,v=w-c,a.xOffset=h+(f*p+v*_)-f,a.yOffset=d+(f*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(ms(o,a,"xOrigin",u,y),ms(o,a,"yOrigin",c,w),ms(o,a,"xOffset",h,a.xOffset),ms(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Nu=function(e,t){var i=e._gsap||new nE(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Si(e,ai)||"0",c,h,d,p,g,_,m,f,v,x,y,w,T,M,P,S,E,I,N,Z,L,O,B,G,D,F,R,$,Q,q,K,re;return c=h=d=_=m=f=v=x=y=0,p=g=1,i.svg=!!(e.getCTM&&gE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ft]!=="none"?l[Ft]:"")),r.scale=r.rotate=r.translate="none"),M=ng(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Mm(e,G||u,!!G||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,T=i.yOrigin||0,M!==Uu&&(I=M[0],N=M[1],Z=M[2],L=M[3],c=O=M[4],h=B=M[5],M.length===6?(p=Math.sqrt(I*I+N*N),g=Math.sqrt(L*L+Z*Z),_=I||N?ia(N,I)*eo:0,v=Z||L?ia(Z,L)*eo+_:0,v&&(g*=Math.abs(Math.cos(v*ka))),i.svg&&(c-=w-(w*I+T*Z),h-=T-(w*N+T*L))):(re=M[6],q=M[7],R=M[8],$=M[9],Q=M[10],K=M[11],c=M[12],h=M[13],d=M[14],P=ia(re,Q),m=P*eo,P&&(S=Math.cos(-P),E=Math.sin(-P),G=O*S+R*E,D=B*S+$*E,F=re*S+Q*E,R=O*-E+R*S,$=B*-E+$*S,Q=re*-E+Q*S,K=q*-E+K*S,O=G,B=D,re=F),P=ia(-Z,Q),f=P*eo,P&&(S=Math.cos(-P),E=Math.sin(-P),G=I*S-R*E,D=N*S-$*E,F=Z*S-Q*E,K=L*E+K*S,I=G,N=D,Z=F),P=ia(N,I),_=P*eo,P&&(S=Math.cos(P),E=Math.sin(P),G=I*S+N*E,D=O*S+B*E,N=N*S-I*E,B=B*S-O*E,I=G,O=D),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Vt(Math.sqrt(I*I+N*N+Z*Z)),g=Vt(Math.sqrt(B*B+re*re)),P=ia(O,B),v=Math.abs(P)>2e-4?P*eo:0,y=K?1/(K<0?-K:K):0),i.svg&&(G=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!xE(Si(e,Ft)),G&&e.setAttribute("transform",G))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Vt(p),i.scaleY=Vt(g),i.rotation=Vt(_)+a,i.rotationX=Vt(m)+a,i.rotationY=Vt(f)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ai]=rd(u)),i.xOffset=i.yOffset=0,i.force3D=wi.force3D,i.renderTransform=i.svg?dD:mE?yE:fD,i.uncache=0,i},rd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kh=function(e,t,i){var r=Cn(t);return Vt(parseFloat(t)+parseFloat(Fs(e,"x",i+"px",r)))+r},fD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,yE(e,t)},$s="0deg",wl="0px",Ks=") ",yE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,d=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,f=i.force3D,v=i.target,x=i.zOrigin,y="",w=f==="auto"&&e&&e!==1||f===!0;if(x&&(h!==$s||c!==$s)){var T=parseFloat(c)*ka,M=Math.sin(T),P=Math.cos(T),S;T=parseFloat(h)*ka,S=Math.cos(T),o=Kh(v,o,M*S*-x),a=Kh(v,a,-Math.sin(T)*-x),l=Kh(v,l,P*S*-x+x)}m!==wl&&(y+="perspective("+m+Ks),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==wl||a!==wl||l!==wl)&&(y+=l!==wl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ks),u!==$s&&(y+="rotate("+u+Ks),c!==$s&&(y+="rotateY("+c+Ks),h!==$s&&(y+="rotateX("+h+Ks),(d!==$s||p!==$s)&&(y+="skew("+d+", "+p+Ks),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ks),v.style[Ft]=y||"translate(0, 0)"},dD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,d=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,f=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),w,T,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ka,u*=ka,w=Math.cos(l)*h,T=Math.sin(l)*h,M=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=ka,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),w*=S,T*=S)),w=Vt(w),T=Vt(T),M=Vt(M),P=Vt(P)):(w=h,P=d,T=M=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Fs(p,"x",o,"px"),y=Fs(p,"y",a,"px")),(g||_||m||f)&&(x=Vt(x+g-(g*w+_*M)+m),y=Vt(y+_-(g*T+_*P)+f)),(r||s)&&(S=p.getBBox(),x=Vt(x+r/100*S.width),y=Vt(y+s/100*S.height)),S="matrix("+w+","+T+","+M+","+P+","+x+","+y+")",p.setAttribute("transform",S),v&&(p.style[Ft]=S)},hD=function(e,t,i,r,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?eo:1),u=l-r,c=r+u+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*ox)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*ox)%o-~~(u/o)*o)),e._pt=d=new oi(e._pt,t,i,r,u,$L),d.e=c,d.u="deg",e._props.push(i),d},hx=function(e,t){for(var i in t)e[i]=t[i];return e},pD=function(e,t,i){var r=hx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,d,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ft]=t,a=Nu(i,1),Os(i,Ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Ft],o[Ft]=t,a=Nu(i,1),o[Ft]=u);for(l in $r)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Cn(u),g=Cn(c),h=p!==g?Fs(i,l,u,g):parseFloat(u),d=parseFloat(c),e._pt=new oi(e._pt,a,l,h,d-h,xm),e._pt.u=g||0,e._props.push(l));hx(a,r)};si("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});id[e>1?"border"+n:n]=function(a,l,u,c,h){var d,p;if(arguments.length<4)return d=o.map(function(g){return Ir(a,g,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,p,h)}});var SE={name:"css",register:Sm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,d,p,g,_,m,f,v,x,y,w,T,M,P,S;J_||Sm(),this.styles=this.styles||pE(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(mi[_]&&iE(_,t,i,r,e,s)))){if(p=typeof c,g=id[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Pu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Ps.lastIndex=0,Ps.test(u)||(m=Cn(u),f=Cn(c),f?m!==f&&(u=Fs(e,_,u,f)+f):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],fn(u)&&~u.indexOf("random(")&&(u=Pu(u)),Cn(u+"")||u==="auto"||(u+=wi.units[_]||Cn(Ir(e,_))||""),(u+"").charAt(1)==="="&&(u=Ir(e,_))):u=Ir(e,_),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in vr&&(_==="autoAlpha"&&(d===1&&Ir(e,"visibility")==="hidden"&&h&&(d=0),P.push("visibility",0,a.visibility),ms(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=vr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in $r,x){if(this.styles.save(_),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Si(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=c,c=Si(e,"perspective"),E?e.style.perspective=E:Os(e,"perspective")}h=parseFloat(c)}if(y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Nu(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new oi(this._pt,a,Ft,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new oi(this._pt,w,"scaleY",w.scaleY,(v?Oa(w.scaleY,v+h):h)-w.scaleY||0,xm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(ai,0,a[ai]),c=uD(c),w.svg?Mm(e,c,0,T,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==w.zOrigin&&ms(this,w,"zOrigin",w.zOrigin,f),ms(this,a,_,rd(u),rd(c)));continue}else if(_==="svgOrigin"){Mm(e,c,1,T,0,this);continue}else if(_ in vE){hD(this,w,_,d,v?Oa(d,v+c):c);continue}else if(_==="smoothOrigin"){ms(this,w,"smooth",w.smooth,c);continue}else if(_==="force3D"){w[_]=c;continue}else if(_==="transform"){pD(this,c,e);continue}}else _ in a||(_=rl(_)||_);if(x||(h||h===0)&&(d||d===0)&&!qL.test(c)&&_ in a)m=(u+"").substr((d+"").length),h||(h=0),f=Cn(c)||(_ in wi.units?wi.units[_]:m),m!==f&&(d=Fs(e,_,u,f)),this._pt=new oi(this._pt,x?w:a,_,d,(v?Oa(d,v+h):h)-d,!x&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?QL:xm),this._pt.u=f||0,x&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=ZL):m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=KL);else if(_ in a)lD.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){V_(_,c);continue}x||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,u||e[_])),o.push(_)}}M&&uE(this)},render:function(e,t){if(t.tween._time||!eg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Ir,aliases:vr,getSetter:function(e,t,i){var r=vr[t];return r&&r.indexOf(",")<0&&(t=r),t in $r&&t!==ai&&(e._gsap.x||Ir(e,"x"))?i&&sx===i?t==="scale"?nD:tD:(sx=i||{})&&(t==="scale"?iD:rD):e.style&&!B_(e.style[t])?JL:~t.indexOf("-")?eD:Z_(e,t)},core:{_removeProperty:Os,_getMatrix:ng}};li.utils.checkPrefix=rl;li.core.getStyleSaver=pE;(function(n,e,t,i){var r=si(n+","+e+","+t,function(s){$r[s]=1});si(e,function(s){wi.units[s]="deg",vE[s]=1}),vr[r[13]]=n+","+e,si(i,function(s){var o=s.split(":");vr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");si("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wi.units[n]="px"});li.registerPlugin(SE);var qu=li.registerPlugin(SE)||li;qu.core.Tween;function mD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _D(n,e,t){return e&&mD(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn,_f,vi,_s,gs,za,ME,to,Ba,EE,Br,er,TE,wE=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},AE=1,Ca=[],rt=[],Er=[],Jl=Date.now,Em=function(e,t){return t},gD=function(){var e=Ba.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,Er),rt=i,Er=r,Em=function(o,a){return t[o](a)}},Ls=function(e,t){return~Er.indexOf(e)&&Er[Er.indexOf(e)+1][t]},eu=function(e){return!!~EE.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Dn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc="scrollLeft",Bc="scrollTop",Tm=function(){return Br&&Br.isPressed||rt.cache++},sd=function(e,t){var i=function r(s){if(s||s===0){AE&&(vi.history.scrollRestoration="manual");var o=Br&&Br.isPressed;s=r.v=Math.round(s)||(Br&&Br.iOS?1:0),e(s),r.cacheID=rt.cache,o&&Em("ss",s)}else(t||rt.cache!==r.cacheID||Em("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:zc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sd(function(n){return arguments.length?vi.scrollTo(n,en.sc()):vi.pageXOffset||_s[zc]||gs[zc]||za[zc]||0})},en={s:Bc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:sd(function(n){return arguments.length?vi.scrollTo(Hn.sc(),n):vi.pageYOffset||_s[Bc]||gs[Bc]||za[Bc]||0})},Yn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},vD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},ks=function(e,t){var i=t.s,r=t.sc;eu(e)&&(e=_s.scrollingElement||gs);var s=rt.indexOf(e),o=r===en.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Un(e,"scroll",Tm);var a=rt[s+o],l=a||(rt[s+o]=sd(Ls(e,i),!0)||(eu(e)?r:sd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},wm=function(e,t,i){var r=e,s=e,o=Jl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=Jl();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},d=function(g){var _=a,m=s,f=Jl();return(g||g===0)&&g!==r&&c(g),o===a||f-a>u?0:(r+(i?m:-m))/((i?f:o)-_)*1e3};return{update:c,reset:h,getVelocity:d}},Al=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},px=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},CE=function(){Ba=mn.core.globals().ScrollTrigger,Ba&&Ba.core&&gD()},RE=function(e){return mn=e||wE(),!_f&&mn&&typeof document<"u"&&document.body&&(vi=window,_s=document,gs=_s.documentElement,za=_s.body,EE=[vi,_s,gs,za],mn.utils.clamp,TE=mn.core.context||function(){},to="onpointerenter"in za?"pointer":"mouse",ME=Xt.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,er=Xt.eventTypes=("ontouchstart"in gs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in gs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return AE=0},500),_f=1),Ba||CE(),_f};Hn.op=en;rt.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){_f||RE(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Ba||CE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,d=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,f=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,w=i.onRight,T=i.onLeft,M=i.onUp,P=i.onDown,S=i.onChangeX,E=i.onChangeY,I=i.onChange,N=i.onToggleX,Z=i.onToggleY,L=i.onHover,O=i.onHoverEnd,B=i.onMove,G=i.ignoreCheck,D=i.isNormalizer,F=i.onGestureStart,R=i.onGestureEnd,$=i.onWheel,Q=i.onEnable,q=i.onDisable,K=i.onClick,re=i.scrollSpeed,ge=i.capture,me=i.allowClicks,Le=i.lockAxis,De=i.onLockAxis;this.target=a=Yn(a)||gs,this.vars=i,p&&(p=mn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,re=re||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(vi.getComputedStyle(za).lineHeight)||22);var Ie,We,H,ce,ae,ye,_e,W=this,ze=0,b=0,A=i.passive||!c&&i.passive!==!1,z=ks(a,Hn),ne=ks(a,en),te=z(),ie=ne(),fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&er[0]==="pointerdown",J=eu(a),oe=a.ownerDocument||_s,Me=[0,0,0],Ue=[0,0,0],ee=0,Qe=function(){return ee=Jl()},be=function(we,Oe){return(W.event=we)&&p&&vD(we.target,p)||Oe&&fe&&we.pointerType!=="touch"||G&&G(we,Oe)},Ye=function(){W._vx.reset(),W._vy.reset(),We.pause(),h&&h(W)},Te=function(){var we=W.deltaX=px(Me),Oe=W.deltaY=px(Ue),le=Math.abs(we)>=r,He=Math.abs(Oe)>=r;I&&(le||He)&&I(W,we,Oe,Me,Ue),le&&(w&&W.deltaX>0&&w(W),T&&W.deltaX<0&&T(W),S&&S(W),N&&W.deltaX<0!=ze<0&&N(W),ze=W.deltaX,Me[0]=Me[1]=Me[2]=0),He&&(P&&W.deltaY>0&&P(W),M&&W.deltaY<0&&M(W),E&&E(W),Z&&W.deltaY<0!=b<0&&Z(W),b=W.deltaY,Ue[0]=Ue[1]=Ue[2]=0),(ce||H)&&(B&&B(W),H&&(m&&H===1&&m(W),v&&v(W),H=0),ce=!1),ye&&!(ye=!1)&&De&&De(W),ae&&($(W),ae=!1),Ie=0},Se=function(we,Oe,le){Me[le]+=we,Ue[le]+=Oe,W._vx.update(we),W._vy.update(Oe),u?Ie||(Ie=requestAnimationFrame(Te)):Te()},Xe=function(we,Oe){Le&&!_e&&(W.axis=_e=Math.abs(we)>Math.abs(Oe)?"x":"y",ye=!0),_e!=="y"&&(Me[2]+=we,W._vx.update(we,!0)),_e!=="x"&&(Ue[2]+=Oe,W._vy.update(Oe,!0)),u?Ie||(Ie=requestAnimationFrame(Te)):Te()},Ke=function(we){if(!be(we,1)){we=Al(we,c);var Oe=we.clientX,le=we.clientY,He=Oe-W.x,ke=le-W.y,qe=W.isDragging;W.x=Oe,W.y=le,(qe||(He||ke)&&(Math.abs(W.startX-Oe)>=s||Math.abs(W.startY-le)>=s))&&(H||(H=qe?2:1),qe||(W.isDragging=!0),Xe(He,ke))}},lt=W.onPress=function(Pe){be(Pe,1)||Pe&&Pe.button||(W.axis=_e=null,We.pause(),W.isPressed=!0,Pe=Al(Pe),ze=b=0,W.startX=W.x=Pe.clientX,W.startY=W.y=Pe.clientY,W._vx.reset(),W._vy.reset(),Un(D?a:oe,er[1],Ke,A,!0),W.deltaX=W.deltaY=0,x&&x(W))},ve=W.onRelease=function(Pe){if(!be(Pe,1)){Dn(D?a:oe,er[1],Ke,!0);var we=!isNaN(W.y-W.startY),Oe=W.isDragging,le=Oe&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),He=Al(Pe);!le&&we&&(W._vx.reset(),W._vy.reset(),c&&me&&mn.delayedCall(.08,function(){if(Jl()-ee>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(oe.createEvent){var ke=oe.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,vi,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(ke)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&Oe&&!D&&We.restart(!0),H&&Te(),f&&Oe&&f(W),y&&y(W,le)}},ue=function(we){return we.touches&&we.touches.length>1&&(W.isGesturing=!0)&&F(we,W.isDragging)},U=function(){return(W.isGesturing=!1)||R(W)},de=function(we){if(!be(we)){var Oe=z(),le=ne();Se((Oe-te)*re,(le-ie)*re,1),te=Oe,ie=le,h&&We.restart(!0)}},he=function(we){if(!be(we)){we=Al(we,c),$&&(ae=!0);var Oe=(we.deltaMode===1?l:we.deltaMode===2?vi.innerHeight:1)*g;Se(we.deltaX*Oe,we.deltaY*Oe,0),h&&!D&&We.restart(!0)}},Be=function(we){if(!be(we)){var Oe=we.clientX,le=we.clientY,He=Oe-W.x,ke=le-W.y;W.x=Oe,W.y=le,ce=!0,h&&We.restart(!0),(He||ke)&&Xe(He,ke)}},Fe=function(we){W.event=we,L(W)},ot=function(we){W.event=we,O(W)},ft=function(we){return be(we)||Al(we,c)&&K(W)};We=W._dc=mn.delayedCall(d||.25,Ye).pause(),W.deltaX=W.deltaY=0,W._vx=wm(0,50,!0),W._vy=wm(0,50,!0),W.scrollX=z,W.scrollY=ne,W.isDragging=W.isGesturing=W.isPressed=!1,TE(this),W.enable=function(Pe){return W.isEnabled||(Un(J?oe:a,"scroll",Tm),o.indexOf("scroll")>=0&&Un(J?oe:a,"scroll",de,A,ge),o.indexOf("wheel")>=0&&Un(a,"wheel",he,A,ge),(o.indexOf("touch")>=0&&ME||o.indexOf("pointer")>=0)&&(Un(a,er[0],lt,A,ge),Un(oe,er[2],ve),Un(oe,er[3],ve),me&&Un(a,"click",Qe,!0,!0),K&&Un(a,"click",ft),F&&Un(oe,"gesturestart",ue),R&&Un(oe,"gestureend",U),L&&Un(a,to+"enter",Fe),O&&Un(a,to+"leave",ot),B&&Un(a,to+"move",Be)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=ce=H=!1,W._vx.reset(),W._vy.reset(),te=z(),ie=ne(),Pe&&Pe.type&&lt(Pe),Q&&Q(W)),W},W.disable=function(){W.isEnabled&&(Ca.filter(function(Pe){return Pe!==W&&eu(Pe.target)}).length||Dn(J?oe:a,"scroll",Tm),W.isPressed&&(W._vx.reset(),W._vy.reset(),Dn(D?a:oe,er[1],Ke,!0)),Dn(J?oe:a,"scroll",de,ge),Dn(a,"wheel",he,ge),Dn(a,er[0],lt,ge),Dn(oe,er[2],ve),Dn(oe,er[3],ve),Dn(a,"click",Qe,!0),Dn(a,"click",ft),Dn(oe,"gesturestart",ue),Dn(oe,"gestureend",U),Dn(a,to+"enter",Fe),Dn(a,to+"leave",ot),Dn(a,to+"move",Be),W.isEnabled=W.isPressed=W.isDragging=!1,q&&q(W))},W.kill=W.revert=function(){W.disable();var Pe=Ca.indexOf(W);Pe>=0&&Ca.splice(Pe,1),Br===W&&(Br=0)},Ca.push(W),D&&eu(a)&&(Br=W),W.enable(_)},_D(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.15.0";Xt.create=function(n){return new Xt(n)};Xt.register=RE;Xt.getAll=function(){return Ca.slice()};Xt.getById=function(n){return Ca.filter(function(e){return e.vars.id===n})[0]};wE()&&mn.registerPlugin(Xt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ae,la,nt,gt,_i,ht,ig,od,Iu,tu,Nl,Hc,Tn,Nd,Am,Fn,mx,_x,ua,bE,Zh,PE,In,Cm,LE,DE,is,Rm,rg,Ha,sg,nu,bm,Qh,Gc=1,wn=Date.now,Jh=wn(),Yi=0,Il=0,gx=function(e,t,i){var r=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},vx=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},xD=function n(){return Il&&requestAnimationFrame(n)},xx=function(){return Nd=1},yx=function(){return Nd=0},pr=function(e){return e},Ol=function(e){return Math.round(e*1e5)/1e5||0},UE=function(){return typeof window<"u"},NE=function(){return Ae||UE()&&(Ae=window.gsap)&&Ae.registerPlugin&&Ae},Uo=function(e){return!!~ig.indexOf(e)},IE=function(e){return(e==="Height"?sg:nt["inner"+e])||_i["client"+e]||ht["client"+e]},OE=function(e){return Ls(e,"getBoundingClientRect")||(Uo(e)?function(){return Sf.width=nt.innerWidth,Sf.height=sg,Sf}:function(){return Or(e)})},yD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?IE(s):e["client"+s])||0}},SD=function(e,t){return!t||~Er.indexOf(e)?OE(e):function(){return Sf}},xr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ls(e,i))?o()-OE(e)()[s]:Uo(e)?(_i[i]||ht[i])-IE(r):e[i]-e["offset"+r])},Vc=function(e,t){for(var i=0;i<ua.length;i+=3)(!t||~t.indexOf(ua[i+1]))&&e(ua[i],ua[i+1],ua[i+2])},pi=function(e){return typeof e=="string"},Rn=function(e){return typeof e=="function"},Fl=function(e){return typeof e=="number"},no=function(e){return typeof e=="object"},Cl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},ra=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},sa=Math.abs,FE="left",kE="top",og="right",ag="bottom",Eo="width",To="height",iu="Right",ru="Left",su="Top",ou="Bottom",jt="padding",Fi="margin",sl="Width",lg="Height",Qt="px",ki=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},MD=function(e){var t=ki(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Sx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Or=function(e,t){var i=t&&ki(e)[Am]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ae.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},ad=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},zE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},ED=function(e){return function(t){return Ae.utils.snap(zE(e),t)}},ug=function(e){var t=Ae.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},TD=function(e){return function(t,i){return ug(zE(e))(t,i.direction)}},Wc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},an=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},on=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Xc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Mx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Yc={toggleActions:"play",anticipatePin:0},ld={top:0,left:0,center:.5,bottom:1,right:1},gf=function(e,t){if(pi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ld?ld[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},jc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,d=s.indent,p=s.fontWeight,g=gt.createElement("div"),_=Uo(i)||Ls(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,f=_?ht:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(r===en?og:ag)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,f.children[0]?f.insertBefore(g,f.children[0]):f.appendChild(g),g._offset=g["offset"+r.op.d2],vf(g,0,r,v),g},vf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+sl]=1,s["border"+a+sl]=0,s[i.p]=t+"px",Ae.set(e,s)},et=[],Pm={},Ou,Ex=function(){return wn()-Yi>34&&(Ou||(Ou=requestAnimationFrame(Gr)))},oa=function(){(!In||!In.isPressed||In.startX>ht.clientWidth)&&(rt.cache++,In?Ou||(Ou=requestAnimationFrame(Gr)):Gr(),Yi||Io("scrollStart"),Yi=wn())},ep=function(){DE=nt.innerWidth,LE=nt.innerHeight},kl=function(e){rt.cache++,(e===!0||!Tn&&!PE&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!Cm||DE!==nt.innerWidth||Math.abs(nt.innerHeight-LE)>nt.innerHeight*.25))&&od.restart(!0)},No={},wD=[],BE=function n(){return on(Ze,"scrollEnd",n)||co(!0)},Io=function(e){return No[e]&&No[e].map(function(t){return t()})||wD},di=[],HE=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},GE=function(){return rt.forEach(function(e){return Rn(e)&&++e.cacheID&&(e.rec=e())})},cg=function(e,t){var i;for(Fn=0;Fn<et.length;Fn++)i=et[Fn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));nu=!0,t&&HE(t),t||Io("revert")},VE=function(e,t){rt.cache++,(t||!kn)&&rt.forEach(function(i){return Rn(i)&&i.cacheID++&&(i.rec=0)}),pi(e)&&(nt.history.scrollRestoration=rg=e)},kn,wo=0,Tx,AD=function(){if(Tx!==wo){var e=Tx=wo;requestAnimationFrame(function(){return e===wo&&co(!0)})}},WE=function(){ht.appendChild(Ha),sg=!In&&Ha.offsetHeight||nt.innerHeight,ht.removeChild(Ha)},wx=function(e){return Iu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},co=function(e,t){if(_i=gt.documentElement,ht=gt.body,ig=[nt,gt,_i,ht],Yi&&!e&&!nu){an(Ze,"scrollEnd",BE);return}WE(),kn=Ze.isRefreshing=!0,nu||GE();var i=Io("refreshInit");bE&&Ze.sort(),t||cg(),rt.forEach(function(r){Rn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),et.slice(0).forEach(function(r){return r.refresh()}),nu=!1,et.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),bm=1,wx(!0),et.forEach(function(r){var s=xr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),wx(!1),bm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Rn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),VE(rg,1),od.pause(),wo++,kn=2,Gr(2),et.forEach(function(r){return Rn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=Ze.isRefreshing=!1,Io("refresh")},Lm=0,xf=1,au,Gr=function(e){if(e===2||!kn&&!nu){Ze.isUpdating=!0,au&&au.update(0);var t=et.length,i=wn(),r=i-Jh>=50,s=t&&et[0].scroll();if(xf=Lm>s?-1:1,kn||(Lm=s),r&&(Yi&&!Nd&&i-Yi>200&&(Yi=0,Io("scrollEnd")),Nl=Jh,Jh=i),xf<0){for(Fn=t;Fn-- >0;)et[Fn]&&et[Fn].update(0,r);xf=1}else for(Fn=0;Fn<t;Fn++)et[Fn]&&et[Fn].update(0,r);Ze.isUpdating=!1}Ou=0},Dm=[FE,kE,ag,og,Fi+ou,Fi+iu,Fi+su,Fi+ru,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yf=Dm.concat([Eo,To,"boxSizing","max"+sl,"max"+lg,"position",Fi,jt,jt+su,jt+iu,jt+ou,jt+ru]),CD=function(e,t,i){Ga(i);var r=e._gsap;if(r.spacerIsNative)Ga(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},tp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Dm.length,o=t.style,a=e.style,l;s--;)l=Dm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[ag]=a[og]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Eo]=ad(e,Hn)+Qt,o[To]=ad(e,en)+Qt,o[jt]=a[Fi]=a[kE]=a[FE]="0",Ga(r),a[Eo]=a["max"+sl]=i[Eo],a[To]=a["max"+lg]=i[To],a[jt]=i[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},RD=/([A-Z])/g,Ga=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ae.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(RD,"-$1").toLowerCase())}},qc=function(e){for(var t=yf.length,i=e.style,r=[],s=0;s<t;s++)r.push(yf[s],i[yf[s]]);return r.t=e,r},bD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Sf={left:0,top:0},Ax=function(e,t,i,r,s,o,a,l,u,c,h,d,p,g){Rn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?gf("0"+e.substr(3),i):0));var _=p?p.time():0,m,f,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Fl(e))p&&(e=Ae.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&vf(a,i,r,!0);else{Rn(t)&&(t=t(l));var x=(e||"0").split(" "),y,w,T,M;v=Yn(t,l)||ht,y=Or(v)||{},(!y||!y.left&&!y.top)&&ki(v).display==="none"&&(M=v.style.display,v.style.display="block",y=Or(v),M?v.style.display=M:v.style.removeProperty("display")),w=gf(x[0],y[r.d]),T=gf(x[1]||"0",i),e=y[r.p]-u[r.p]-c+w+s-T,a&&vf(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+i,S=o._isStart;m="scroll"+r.d2,vf(o,P,r,S&&P>20||!S&&(h?Math.max(ht[m],_i[m]):o.parentNode[m])<=P+1),h&&(u=Or(a),h&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+Qt))}return p&&v&&(m=Or(v),p.seek(d),f=Or(v),p._caScrollDist=m[r.p]-f[r.p],e=e/p._caScrollDist*d),p&&p.seek(_),p?e:Math.round(e)},PD=/(webkit|moz|length|cssText|inset)/i,Cx=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===ht){e._stOrig=s.cssText,a=ki(e);for(o in a)!+o&&!PD.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ae.core.getCache(e).uncache=1,t.appendChild(e)}},XE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},$c=function(e,t,i){var r={};r[t.p]="+="+i,Ae.set(e,r)},Rx=function(e,t){var i=ks(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,h){var d=o.tween,p=l.onComplete,g={};u=u||i();var _=XE(i,u,function(){d.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Gr()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=Ae.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},an(e,"wheel",i.wheelHandler),Ze.isTouch&&an(e,"touchmove",i.wheelHandler),s},Ze=function(){function n(t,i){la||n.register(Ae)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Rm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Il){this.update=this.refresh=this.kill=pr;return}i=Sx(pi(i)||Fl(i)||i.nodeType?{trigger:i}:i,Yc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,d=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,f=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,w=s.pinReparent,T=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,S=s.preventOverlaps,E=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:en,I=!h&&h!==0,N=Yn(i.scroller||nt),Z=Ae.core.getCache(N),L=Uo(N),O=("pinType"in i?i.pinType:Ls(N,"pinType")||L&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],G=I&&i.toggleActions.split(" "),D="markers"in i?i.markers:Yc.markers,F=L?0:parseFloat(ki(N)["border"+E.p2+sl])||0,R=this,$=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Q=yD(N,L,E),q=SD(N,L),K=0,re=0,ge=0,me=ks(N,E),Le,De,Ie,We,H,ce,ae,ye,_e,W,ze,b,A,z,ne,te,ie,fe,J,oe,Me,Ue,ee,Qe,be,Ye,Te,Se,Xe,Ke,lt,ve,ue,U,de,he,Be,Fe,ot;if(R._startClamp=R._endClamp=!1,R._dir=E,m*=45,R.scroller=N,R.scroll=M?M.time.bind(M):me,We=me(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(bE=1,i.refreshPriority===-9999&&(au=R)),Z.tweenScroll=Z.tweenScroll||{top:Rx(N,en),left:Rx(N,Hn)},R.tweenTo=Le=Z.tweenScroll[E.p],R.scrubDuration=function(le){ue=Fl(le)&&le,ue?ve?ve.duration(le):ve=Ae.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return f&&f(R)}}):(ve&&ve.progress(1).kill(),ve=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(h),Ke=0,l||(l=r.vars.id)),y&&((!no(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ht.style&&Ae.set(L?[ht,_i]:N,{scrollBehavior:"auto"}),rt.forEach(function(le){return Rn(le)&&le.target===(L?gt.scrollingElement||_i:N)&&(le.smooth=!1)}),Ie=Rn(y.snapTo)?y.snapTo:y.snapTo==="labels"?ED(r):y.snapTo==="labelsDirectional"?TD(r):y.directional!==!1?function(le,He){return ug(y.snapTo)(le,wn()-re<500?0:He.direction)}:Ae.utils.snap(y.snapTo),U=y.duration||{min:.1,max:2},U=no(U)?tu(U.min,U.max):tu(U,U),de=Ae.delayedCall(y.delay||ue/2||.1,function(){var le=me(),He=wn()-re<500,ke=Le.tween;if((He||Math.abs(R.getVelocity())<10)&&!ke&&!Nd&&K!==le){var qe=(le-ce)/z,Ut=r&&!I?r.totalProgress():qe,tt=He?0:(Ut-lt)/(wn()-Nl)*1e3||0,Et=Ae.utils.clamp(-qe,1-qe,sa(tt/2)*tt/.185),Kt=qe+(y.inertia===!1?0:Et),At,Tt,mt=y,ui=mt.onStart,C=mt.onInterrupt,k=mt.onComplete;if(At=Ie(Kt,R),Fl(At)||(At=Kt),Tt=Math.max(0,Math.round(ce+At*z)),le<=ae&&le>=ce&&Tt!==le){if(ke&&!ke._initted&&ke.data<=sa(Tt-le))return;y.inertia===!1&&(Et=At-qe),Le(Tt,{duration:U(sa(Math.max(sa(Kt-Ut),sa(At-Ut))*.185/tt/.05||0)),ease:y.ease||"power3",data:sa(Tt-le),onInterrupt:function(){return de.restart(!0)&&C&&ra(R,C)},onComplete:function(){R.update(),K=me(),r&&!I&&(ve?ve.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),Ke=lt=r&&!I?r.totalProgress():R.progress,v&&v(R),k&&ra(R,k)}},le,Et*z,Tt-le-Et*z),ui&&ra(R,ui,Le.tween)}}else R.isActive&&K!==le&&de.restart(!0)}).pause()),l&&(Pm[l]=R),d=R.trigger=Yn(d||p!==!0&&p),ot=d&&d._gsap&&d._gsap.stRevert,ot&&(ot=ot(R)),p=p===!0?d:Yn(p),pi(a)&&(a={targets:d,className:a}),p&&(g===!1||g===Fi||(g=!g&&p.parentNode&&p.parentNode.style&&ki(p.parentNode).display==="flex"?!1:jt),R.pin=p,De=Ae.core.getCache(p),De.spacer?ne=De.pinState:(T&&(T=Yn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),De.spacerIsNative=!!T,T&&(De.spacerState=qc(T))),De.spacer=fe=T||gt.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),De.pinState=ne=qc(p)),i.force3D!==!1&&Ae.set(p,{force3D:!0}),R.spacer=fe=De.spacer,Xe=ki(p),Qe=Xe[g+E.os2],oe=Ae.getProperty(p),Me=Ae.quickSetter(p,E.a,Qt),tp(p,fe,Xe),ie=qc(p)),D){b=no(D)?Sx(D,Mx):Mx,W=jc("scroller-start",l,N,E,b,0),ze=jc("scroller-end",l,N,E,b,0,W),J=W["offset"+E.op.d2];var ft=Yn(Ls(N,"content")||N);ye=this.markerStart=jc("start",l,ft,E,b,J,0,M),_e=this.markerEnd=jc("end",l,ft,E,b,J,0,M),M&&(Fe=Ae.quickSetter([ye,_e],E.a,Qt)),!O&&!(Er.length&&Ls(N,"fixedMarkers")===!0)&&(MD(L?ht:N),Ae.set([W,ze],{force3D:!0}),Ye=Ae.quickSetter(W,E.a,Qt),Se=Ae.quickSetter(ze,E.a,Qt))}if(M){var Pe=M.vars.onUpdate,we=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){R.update(0,0,1),Pe&&Pe.apply(M,we||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(le,He){if(!He)return R.kill(!0);var ke=le!==!1||!R.enabled,qe=Tn;ke!==R.isReverted&&(ke&&(he=Math.max(me(),R.scroll.rec||0),ge=R.progress,Be=r&&r.progress()),ye&&[ye,_e,W,ze].forEach(function(Ut){return Ut.style.display=ke?"none":"block"}),ke&&(Tn=R,R.update(ke)),p&&(!w||!R.isActive)&&(ke?CD(p,fe,ne):tp(p,fe,ki(p),be)),ke||R.update(ke),Tn=qe,R.isReverted=ke)},R.refresh=function(le,He,ke,qe){if(!((Tn||!R.enabled)&&!He)){if(p&&le&&Yi){an(n,"scrollEnd",BE);return}!kn&&$&&$(R),Tn=R,Le.tween&&!ke&&(Le.tween.kill(),Le.tween=0),ve&&ve.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(je){return je.vars.immediateRender&&je.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ut=Q(),tt=q(),Et=M?M.duration():xr(N,E),Kt=z<=.01||!z,At=0,Tt=qe||0,mt=no(ke)?ke.end:i.end,ui=i.endTrigger||d,C=no(ke)?ke.start:i.start||(i.start===0||!d?0:p?"0 0":"0 100%"),k=R.pinnedContainer=i.pinnedContainer&&Yn(i.pinnedContainer,R),Y=d&&Math.max(0,et.indexOf(R))||0,X=Y,V,pe,Ce,Ge,Re,Ne,Ve,$e,Pt,Zt,_t,Ln,xt;for(D&&no(ke)&&(Ln=Ae.getProperty(W,E.p),xt=Ae.getProperty(ze,E.p));X-- >0;)Ne=et[X],Ne.end||Ne.refresh(0,1)||(Tn=R),Ve=Ne.pin,Ve&&(Ve===d||Ve===p||Ve===k)&&!Ne.isReverted&&(Zt||(Zt=[]),Zt.unshift(Ne),Ne.revert(!0,!0)),Ne!==et[X]&&(Y--,X--);for(Rn(C)&&(C=C(R)),C=gx(C,"start",R),ce=Ax(C,d,Ut,E,me(),ye,W,R,tt,F,O,Et,M,R._startClamp&&"_startClamp")||(p?-.001:0),Rn(mt)&&(mt=mt(R)),pi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(pi(C)?C.split(" ")[0]:"")+mt:(At=gf(mt.substr(2),Ut),mt=pi(C)?C:(M?Ae.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,ce):ce)+At,ui=d)),mt=gx(mt,"end",R),ae=Math.max(ce,Ax(mt||(ui?"100% 0":Et),ui,Ut,E,me()+At,_e,ze,R,tt,F,O,Et,M,R._endClamp&&"_endClamp"))||-.001,At=0,X=Y;X--;)Ne=et[X]||{},Ve=Ne.pin,Ve&&Ne.start-Ne._pinPush<=ce&&!M&&Ne.end>0&&(V=Ne.end-(R._startClamp?Math.max(0,Ne.start):Ne.start),(Ve===d&&Ne.start-Ne._pinPush<ce||Ve===k)&&isNaN(C)&&(At+=V*(1-Ne.progress)),Ve===p&&(Tt+=V));if(ce+=At,ae+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!kn&&(R._endClamp=ae||-.001,ae=Math.min(ae,xr(N,E))),z=ae-ce||(ce-=.01)&&.001,Kt&&(ge=Ae.utils.clamp(0,1,Ae.utils.normalize(ce,ae,he))),R._pinPush=Tt,ye&&At&&(V={},V[E.a]="+="+At,k&&(V[E.p]="-="+me()),Ae.set([ye,_e],V)),p&&!(bm&&R.end>=xr(N,E)))V=ki(p),Ge=E===en,Ce=me(),Ue=parseFloat(oe(E.a))+Tt,!Et&&ae>1&&(_t=(L?gt.scrollingElement||_i:N).style,_t={style:_t,value:_t["overflow"+E.a.toUpperCase()]},L&&ki(ht)["overflow"+E.a.toUpperCase()]!=="scroll"&&(_t.style["overflow"+E.a.toUpperCase()]="scroll")),tp(p,fe,V),ie=qc(p),pe=Or(p,!0),$e=O&&ks(N,Ge?Hn:en)(),g?(be=[g+E.os2,z+Tt+Qt],be.t=fe,X=g===jt?ad(p,E)+z+Tt:0,X&&(be.push(E.d,X+Qt),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=X+Qt)),Ga(be),k&&et.forEach(function(je){je.pin===k&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),O&&me(he)):(X=ad(p,E),X&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=X+Qt)),O&&(Re={top:pe.top+(Ge?Ce-ce:$e)+Qt,left:pe.left+(Ge?$e:Ce-ce)+Qt,boxSizing:"border-box",position:"fixed"},Re[Eo]=Re["max"+sl]=Math.ceil(pe.width)+Qt,Re[To]=Re["max"+lg]=Math.ceil(pe.height)+Qt,Re[Fi]=Re[Fi+su]=Re[Fi+iu]=Re[Fi+ou]=Re[Fi+ru]="0",Re[jt]=V[jt],Re[jt+su]=V[jt+su],Re[jt+iu]=V[jt+iu],Re[jt+ou]=V[jt+ou],Re[jt+ru]=V[jt+ru],te=bD(ne,Re,w),kn&&me(0)),r?(Pt=r._initted,Zh(1),r.render(r.duration(),!0,!0),ee=oe(E.a)-Ue+z+Tt,Te=Math.abs(z-ee)>1,O&&Te&&te.splice(te.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Zh(0)):ee=z,_t&&(_t.value?_t.style["overflow"+E.a.toUpperCase()]=_t.value:_t.style.removeProperty("overflow-"+E.a));else if(d&&me()&&!M)for(pe=d.parentNode;pe&&pe!==ht;)pe._pinOffset&&(ce-=pe._pinOffset,ae-=pe._pinOffset),pe=pe.parentNode;Zt&&Zt.forEach(function(je){return je.revert(!1,!0)}),R.start=ce,R.end=ae,We=H=kn?he:me(),!M&&!kn&&(We<he&&me(he),R.scroll.rec=0),R.revert(!1,!0),re=wn(),de&&(K=-1,de.restart(!0)),Tn=0,r&&I&&(r._initted||Be)&&r.progress()!==Be&&r.progress(Be||0,!0).render(r.time(),!0,!0),(Kt||ge!==R.progress||M||_||r&&!r._initted)&&(r&&!I&&(r._initted||ge||r.vars.immediateRender!==!1)&&r.totalProgress(M&&ce<-.001&&!ge?Ae.utils.normalize(ce,ae,0):ge,!0),R.progress=Kt||(We-ce)/z===ge?0:ge),p&&g&&(fe._pinOffset=Math.round(R.progress*ee)),ve&&ve.invalidate(),isNaN(Ln)||(Ln-=Ae.getProperty(W,E.p),xt-=Ae.getProperty(ze,E.p),$c(W,E,Ln),$c(ye,E,Ln-(qe||0)),$c(ze,E,xt),$c(_e,E,xt-(qe||0))),Kt&&!kn&&R.update(),c&&!kn&&!A&&(A=!0,c(R),A=!1)}},R.getVelocity=function(){return(me()-H)/(wn()-Nl)*1e3||0},R.endAnimation=function(){Cl(R.callbackAnimation),r&&(ve?ve.progress(1):r.paused()?I||Cl(r,R.direction<0,1):Cl(r,r.reversed()))},R.labelToScroll=function(le){return r&&r.labels&&(ce||R.refresh()||ce)+r.labels[le]/r.duration()*z||0},R.getTrailing=function(le){var He=et.indexOf(R),ke=R.direction>0?et.slice(0,He).reverse():et.slice(He+1);return(pi(le)?ke.filter(function(qe){return qe.vars.preventOverlaps===le}):ke).filter(function(qe){return R.direction>0?qe.end<=ce:qe.start>=ae})},R.update=function(le,He,ke){if(!(M&&!ke&&!le)){var qe=kn===!0?he:R.scroll(),Ut=le?0:(qe-ce)/z,tt=Ut<0?0:Ut>1?1:Ut||0,Et=R.progress,Kt,At,Tt,mt,ui,C,k,Y;if(He&&(H=We,We=M?me():qe,y&&(lt=Ke,Ke=r&&!I?r.totalProgress():tt)),m&&p&&!Tn&&!Gc&&Yi&&(!tt&&ce<qe+(qe-H)/(wn()-Nl)*m?tt=1e-4:tt===1&&ae>qe+(qe-H)/(wn()-Nl)*m&&(tt=.9999)),tt!==Et&&R.enabled){if(Kt=R.isActive=!!tt&&tt<1,At=!!Et&&Et<1,C=Kt!==At,ui=C||!!tt!=!!Et,R.direction=tt>Et?1:-1,R.progress=tt,ui&&!Tn&&(Tt=tt&&!Et?0:tt===1?1:Et===1?2:3,I&&(mt=!C&&G[Tt+1]!=="none"&&G[Tt+1]||G[Tt],Y=r&&(mt==="complete"||mt==="reset"||mt in r))),S&&(C||Y)&&(Y||h||!r)&&(Rn(S)?S(R):R.getTrailing(S).forEach(function(Ce){return Ce.endAnimation()})),I||(ve&&!Tn&&!Gc?(ve._dp._time-ve._start!==ve._time&&ve.render(ve._dp._time-ve._start),ve.resetTo?ve.resetTo("totalProgress",tt,r._tTime/r._tDur):(ve.vars.totalProgress=tt,ve.invalidate().restart())):r&&r.totalProgress(tt,!!(Tn&&(re||le)))),p){if(le&&g&&(fe.style[g+E.os2]=Qe),!O)Me(Ol(Ue+ee*tt));else if(ui){if(k=!le&&tt>Et&&ae+1>qe&&qe+1>=xr(N,E),w)if(!le&&(Kt||k)){var X=Or(p,!0),V=qe-ce;Cx(p,ht,X.top+(E===en?V:0)+Qt,X.left+(E===en?0:V)+Qt)}else Cx(p,fe);Ga(Kt||k?te:ie),Te&&tt<1&&Kt||Me(Ue+(tt===1&&!k?ee:0))}}y&&!Le.tween&&!Tn&&!Gc&&de.restart(!0),a&&(C||x&&tt&&(tt<1||!Qh))&&Iu(a.targets).forEach(function(Ce){return Ce.classList[Kt||x?"add":"remove"](a.className)}),o&&!I&&!le&&o(R),ui&&!Tn?(I&&(Y&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(R)),(C||!Qh)&&(u&&C&&ra(R,u),B[Tt]&&ra(R,B[Tt]),x&&(tt===1?R.kill(!1,1):B[Tt]=0),C||(Tt=tt===1?1:3,B[Tt]&&ra(R,B[Tt]))),P&&!Kt&&Math.abs(R.getVelocity())>(Fl(P)?P:2500)&&(Cl(R.callbackAnimation),ve?ve.progress(1):Cl(r,mt==="reverse"?1:!tt,1))):I&&o&&!Tn&&o(R)}if(Se){var pe=M?qe/M.duration()*(M._caScrollDist||0):qe;Ye(pe+(W._isFlipped?1:0)),Se(pe)}Fe&&Fe(-qe/M.duration()*(M._caScrollDist||0))}},R.enable=function(le,He){R.enabled||(R.enabled=!0,an(N,"resize",kl),L||an(N,"scroll",oa),$&&an(n,"refreshInit",$),le!==!1&&(R.progress=ge=0,We=H=K=me()),He!==!1&&R.refresh())},R.getTween=function(le){return le&&Le?Le.tween:ve},R.setPositions=function(le,He,ke,qe){if(M){var Ut=M.scrollTrigger,tt=M.duration(),Et=Ut.end-Ut.start;le=Ut.start+Et*le/tt,He=Ut.start+Et*He/tt}R.refresh(!1,!1,{start:vx(le,ke&&!!R._startClamp),end:vx(He,ke&&!!R._endClamp)},qe),R.update()},R.adjustPinSpacing=function(le){if(be&&le){var He=be.indexOf(E.d)+1;be[He]=parseFloat(be[He])+le+Qt,be[1]=parseFloat(be[1])+le+Qt,Ga(be)}},R.disable=function(le,He){if(le!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,He||ve&&ve.pause(),he=0,De&&(De.uncache=1),$&&on(n,"refreshInit",$),de&&(de.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!L)){for(var ke=et.length;ke--;)if(et[ke].scroller===N&&et[ke]!==R)return;on(N,"resize",kl),L||on(N,"scroll",oa)}},R.kill=function(le,He){R.disable(le,He),ve&&!He&&ve.kill(),l&&delete Pm[l];var ke=et.indexOf(R);ke>=0&&et.splice(ke,1),ke===Fn&&xf>0&&Fn--,ke=0,et.forEach(function(qe){return qe.scroller===R.scroller&&(ke=1)}),ke||kn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,le&&r.revert({kill:!1}),He||r.kill()),ye&&[ye,_e,W,ze].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),au===R&&(au=0),p&&(De&&(De.uncache=1),ke=0,et.forEach(function(qe){return qe.pin===p&&ke++}),ke||(De.spacer=0)),i.onKill&&i.onKill(R)},et.push(R),R.enable(!1,!1),ot&&ot(R),r&&r.add&&!z){var Oe=R.update;R.update=function(){R.update=Oe,rt.cache++,ce||ae||R.refresh()},Ae.delayedCall(.01,R.update),z=.01,ce=ae=0}else R.refresh();p&&AD()},n.register=function(i){return la||(Ae=i||NE(),UE()&&window.document&&n.enable(),la=Il),la},n.defaults=function(i){if(i)for(var r in i)Yc[r]=i[r];return Yc},n.disable=function(i,r){Il=0,et.forEach(function(o){return o[r?"kill":"disable"](i)}),on(nt,"wheel",oa),on(gt,"scroll",oa),clearInterval(Hc),on(gt,"touchcancel",pr),on(ht,"touchstart",pr),Wc(on,gt,"pointerdown,touchstart,mousedown",xx),Wc(on,gt,"pointerup,touchend,mouseup",yx),od.kill(),Vc(on);for(var s=0;s<rt.length;s+=3)Xc(on,rt[s],rt[s+1]),Xc(on,rt[s],rt[s+2])},n.enable=function(){if(nt=window,gt=document,_i=gt.documentElement,ht=gt.body,Ae){if(Iu=Ae.utils.toArray,tu=Ae.utils.clamp,Rm=Ae.core.context||pr,Zh=Ae.core.suppressOverwrites||pr,rg=nt.history.scrollRestoration||"auto",Lm=nt.pageYOffset||0,Ae.core.globals("ScrollTrigger",n),ht){Il=1,Ha=document.createElement("div"),Ha.style.height="100vh",Ha.style.position="absolute",WE(),xD(),Xt.register(Ae),n.isTouch=Xt.isTouch,is=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Cm=Xt.isTouch===1,an(nt,"wheel",oa),ig=[nt,gt,_i,ht],Ae.matchMedia?(n.matchMedia=function(c){var h=Ae.matchMedia(),d;for(d in c)h.add(d,c[d]);return h},Ae.addEventListener("matchMediaInit",function(){GE(),cg()}),Ae.addEventListener("matchMediaRevert",function(){return HE()}),Ae.addEventListener("matchMedia",function(){co(0,1),Io("matchMedia")}),Ae.matchMedia().add("(orientation: portrait)",function(){return ep(),ep})):console.warn("Requires GSAP 3.11.0 or later"),ep(),an(gt,"scroll",oa);var i=ht.hasAttribute("style"),r=ht.style,s=r.borderTopStyle,o=Ae.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Or(ht),en.m=Math.round(a.top+en.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(ht.setAttribute("style",""),ht.removeAttribute("style")),Hc=setInterval(Ex,250),Ae.delayedCall(.5,function(){return Gc=0}),an(gt,"touchcancel",pr),an(ht,"touchstart",pr),Wc(an,gt,"pointerdown,touchstart,mousedown",xx),Wc(an,gt,"pointerup,touchend,mouseup",yx),Am=Ae.utils.checkPrefix("transform"),yf.push(Am),la=wn(),od=Ae.delayedCall(.2,co).pause(),ua=[gt,"visibilitychange",function(){var c=nt.innerWidth,h=nt.innerHeight;gt.hidden?(mx=c,_x=h):(mx!==c||_x!==h)&&kl()},gt,"DOMContentLoaded",co,nt,"load",co,nt,"resize",kl],Vc(an),et.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)Xc(on,rt[l],rt[l+1]),Xc(on,rt[l],rt[l+2])}else if(gt){var u=function c(){n.enable(),gt.removeEventListener("DOMContentLoaded",c)};gt.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Qh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Hc)||(Hc=r)&&setInterval(Ex,r),"ignoreMobileResize"in i&&(Cm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Vc(on)||Vc(an,i.autoRefreshEvents||"none"),PE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Yn(i),o=rt.indexOf(s),a=Uo(s);~o&&rt.splice(o,a?6:2),r&&(a?Er.unshift(nt,r,ht,r,_i,r):Er.unshift(s,r))},n.clearMatchMedia=function(i){et.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(pi(i)?Yn(i):i).getBoundingClientRect(),a=o[s?Eo:To]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){pi(i)&&(i=Yn(i));var o=i.getBoundingClientRect(),a=o[s?Eo:To],l=r==null?a/2:r in ld?ld[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=No.killAll||[];No={},r.forEach(function(s){return s()})}},n}();Ze.version="3.15.0";Ze.saveStyles=function(n){return n?Iu(n).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ae.core.getCache(e),Rm())}}):di};Ze.revert=function(n,e){return cg(!n,e)};Ze.create=function(n,e){return new Ze(n,e)};Ze.refresh=function(n){return n?kl(!0):(la||Ze.register())&&co(!0)};Ze.update=function(n){return++rt.cache&&Gr(n===!0?2:0)};Ze.clearScrollMemory=VE;Ze.maxScroll=function(n,e){return xr(n,e?Hn:en)};Ze.getScrollFunc=function(n,e){return ks(Yn(n),e?Hn:en)};Ze.getById=function(n){return Pm[n]};Ze.getAll=function(){return et.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Ze.isScrolling=function(){return!!Yi};Ze.snapDirectional=ug;Ze.addEventListener=function(n,e){var t=No[n]||(No[n]=[]);~t.indexOf(e)||t.push(e)};Ze.removeEventListener=function(n,e){var t=No[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ze.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],d=[],p=Ae.delayedCall(r,function(){c(h,d),h=[],d=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Rn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Rn(s)&&(s=s(),an(Ze,"refresh",function(){return s=e.batchMax()})),Iu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Ze.create(u))}),t};var bx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},np=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===_i&&n(ht,t)},Kc={auto:1,scroll:1},LD=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ae.core.getCache(s),a=wn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ht&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Kc[(l=ki(s)).overflowY]||Kc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Uo(s)&&(Kc[(l=ki(s)).overflowY]||Kc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},YE=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&LD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&an(gt,Xt.eventTypes[0],Lx,!1,!0)},onDisable:function(){return on(gt,Xt.eventTypes[0],Lx,!0)}})},DD=/(input|label|select|textarea)/i,Px,Lx=function(e){var t=DD.test(e.target.tagName);(t||Px)&&(e._gsapAllow=!0,Px=t)},UD=function(e){no(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Yn(e.target)||_i,c=Ae.core.globals().ScrollSmoother,h=c&&c.get(),d=is&&(e.content&&Yn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=ks(u,en),g=ks(u,Hn),_=1,m=(Xt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,f=0,v=Rn(r)?function(){return r(a)}:function(){return r||2.8},x,y,w=YE(u,e.type,!0,s),T=function(){return y=!1},M=pr,P=pr,S=function(){l=xr(u,en),P=tu(is?1:0,l),i&&(M=tu(0,xr(u,Hn))),x=wo},E=function(){d._gsap.y=Ol(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(y){requestAnimationFrame(T);var D=Ol(a.deltaY/2),F=P(p.v-D);if(d&&F!==p.v+p.offset){p.offset=F-p.v;var R=Ol((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",p.cacheID=rt.cache,Gr()}return!0}p.offset&&E(),y=!0},N,Z,L,O,B=function(){S(),N.isActive()&&N.vars.scrollY>l&&(p()>l?N.progress(1)&&p(l):N.resetTo("scrollY",l))};return d&&Ae.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return is&&G.type==="touchmove"&&I()||_>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){y=!1;var G=_;_=Ol((nt.visualViewport&&nt.visualViewport.scale||1)/m),N.pause(),G!==_&&np(u,_>1.01?!0:i?!1:"x"),Z=g(),L=p(),S(),x=wo},e.onRelease=e.onGestureStart=function(G,D){if(p.offset&&E(),!D)O.restart(!0);else{rt.cache++;var F=v(),R,$;i&&(R=g(),$=R+F*.05*-G.velocityX/.227,F*=bx(g,R,$,xr(u,Hn)),N.vars.scrollX=M($)),R=p(),$=R+F*.05*-G.velocityY/.227,F*=bx(p,R,$,xr(u,en)),N.vars.scrollY=P($),N.invalidate().duration(F).play(.01),(is&&N.vars.scrollY>=l||R>=l-1)&&Ae.to({},{onUpdate:B,duration:F})}o&&o(G)},e.onWheel=function(){N._ts&&N.pause(),wn()-f>1e3&&(x=0,f=wn())},e.onChange=function(G,D,F,R,$){if(wo!==x&&S(),D&&i&&g(M(R[2]===D?Z+(G.startX-G.x):g()+D-R[1])),F){p.offset&&E();var Q=$[2]===F,q=Q?L+G.startY-G.y:p()+F-$[1],K=P(q);Q&&q!==K&&(L+=K-q),p(K)}(F||D)&&Gr()},e.onEnable=function(){np(u,i?!1:"x"),Ze.addEventListener("refresh",B),an(nt,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){np(u,!0),on(nt,"resize",B),Ze.removeEventListener("refresh",B),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=is,is&&!p()&&p(1),is&&Ae.ticker.add(pr),O=a._dc,N=Ae.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:XE(p,p(),function(){return N.pause()})},onUpdate:Gr,onComplete:O.vars.onComplete}),a};Ze.sort=function(n){if(Rn(n))return et.sort(n);var e=nt.pageYOffset||0;return Ze.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),et.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ze.observe=function(n){return new Xt(n)};Ze.normalizeScroll=function(n){if(typeof n>"u")return In;if(n===!0&&In)return In.enable();if(n===!1){In&&In.kill(),In=n;return}var e=n instanceof Xt?n:UD(n);return In&&In.target===e.target&&In.kill(),Uo(e.target)&&(In=e),e};Ze.core={_getVelocityProp:wm,_inputObserver:YE,_scrollers:rt,_proxies:Er,bridge:{ss:function(){Yi||Io("scrollStart"),Yi=wn()},ref:function(){return Tn}}};NE()&&Ae.registerPlugin(Ze);qu.registerPlugin(Ze);function ND(){const n=Tr.useRef(null);return Tr.useEffect(()=>{const e=n.current;if(!e)return;function t(){const ce=document.createElement("canvas");ce.width=64,ce.height=64;const ae=ce.getContext("2d"),ye=ae.createRadialGradient(32,32,0,32,32,32);ye.addColorStop(0,"rgba(255, 255, 255, 1.0)"),ye.addColorStop(.2,"rgba(255, 235, 170, 0.95)"),ye.addColorStop(.5,"rgba(255, 130, 30, 0.5)"),ye.addColorStop(.8,"rgba(220, 50, 0, 0.15)"),ye.addColorStop(1,"rgba(0, 0, 0, 0)"),ae.fillStyle=ye,ae.beginPath(),ae.arc(32,32,32,0,Math.PI*2),ae.fill();const _e=new j2(ce);return _e.generateMipmaps=!1,_e.minFilter=qn,_e.magFilter=qn,_e.needsUpdate=!0,_e}const i=t(),r=7,s=new j(r,0,0),o=new Y2,a=new Oi(45,window.innerWidth/window.innerHeight,.1,1e3),l=new wM({canvas:e,antialias:!0,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const u=new Gi(new k_(1.65,64,64),new Ma({color:0}));u.position.copy(s),o.add(u);const c=new Gi(new $l(1.65,2.05,80),new Ma({color:16752704,side:zi,transparent:!0,opacity:.75,blending:io}));c.position.copy(s),c.rotation.x=Math.PI/2,o.add(c);const h=new Gi(new $l(2.05,2.35,80),new Ma({color:16733440,side:zi,transparent:!0,opacity:.4,blending:io}));h.position.copy(s),h.rotation.x=Math.PI/2,o.add(h);const d=new Gi(new $l(1.65,1.95,80),new Ma({color:16755264,side:zi,transparent:!0,opacity:.65,blending:io}));d.position.copy(s),d.rotation.y=.15,o.add(d);const p=24e3,g=new $i,_=new Float32Array(p*3),m=new Float32Array(p*3),f=new Float32Array(p),v=new Float32Array(p),x=new Float32Array(p),y=new ut(16775406),w=new ut(16737792),T=new ut(7798784),M=new ut;for(let ce=0;ce<p;ce++){const ae=Math.pow(Math.random(),1.35),ye=1.85+ae*12.5,_e=Math.random()*Math.PI*2;v[ce]=ye,f[ce]=_e,x[ce]=.34/Math.sqrt(ye),_[ce*3]=r+Math.cos(_e)*ye,_[ce*3+1]=(Math.random()-.5)*(.2+ae*.4),_[ce*3+2]=Math.sin(_e)*ye,ae<.22?M.copy(y).lerp(w,ae/.22):M.copy(w).lerp(T,(ae-.22)/.78),m[ce*3]=M.r,m[ce*3+1]=M.g,m[ce*3+2]=M.b}g.setAttribute("position",new Ei(_,3)),g.setAttribute("color",new Ei(m,3));const P=new Yv(g,new om({size:.07,map:i,vertexColors:!0,transparent:!0,opacity:.85,blending:io,depthWrite:!1}));o.add(P);const S=300,E=new $i,I=new Float32Array(S*3),N=new Float32Array(S*3);for(let ce=0;ce<S;ce++)I[ce*3]=r+(Math.random()-.5)*60,I[ce*3+1]=(Math.random()-.5)*50,I[ce*3+2]=Math.random()*30+5;E.setAttribute("position",new Ei(I,3));const Z=new Yv(E,new om({color:16764040,size:.1,map:i,transparent:!0,opacity:.4,blending:io,depthWrite:!1}));o.add(Z);const L={camZ:21,camY:2.5,camX:0,lookX:0,lookY:0,lookZ:0,baseSpeed:4.8};let O=new dt(0,0),B=new dt(0,0),G=!1,D=!1,F=null;const R=new $2,$=new os(new j(0,1,0),0),Q=new j(9999,0,9999),q=new j;let K=0;const re=ce=>{O.x=ce.clientX/window.innerWidth*2-1,O.y=-(ce.clientY/window.innerHeight)*2+1,G=!0},ge=()=>{G=!1},me=()=>{D=!0,F&&clearTimeout(F),F=setTimeout(()=>{D=!1},120)},Le=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("mousemove",re),window.addEventListener("mouseleave",ge),window.addEventListener("scroll",me,{passive:!0}),window.addEventListener("resize",Le);const De=new q2;let Ie;function We(){Ie=requestAnimationFrame(We);const ce=Math.min(De.getDelta(),.05),ae=De.getElapsedTime(),ye=D?4:6;B.x+=(O.x-B.x)*(1-Math.exp(-ye*ce)),B.y+=(O.y-B.y)*(1-Math.exp(-ye*ce));const _e=L.camX+B.x*1.6,W=L.camY+B.y*1.6;a.position.x+=(_e-a.position.x)*(1-Math.exp(-6*ce)),a.position.y+=(W-a.position.y)*(1-Math.exp(-6*ce)),a.position.z+=(L.camZ-a.position.z)*(1-Math.exp(-6*ce)),a.lookAt(L.lookX,L.lookY,L.lookZ),K+=((G&&!D?1:0)-K)*(1-Math.exp(-8*ce)),G&&K>.01?(R.setFromCamera(B,a),R.ray.intersectPlane($,q)&&Q.copy(q)):Q.set(9999,0,9999);const b=L.baseSpeed,A=P.geometry.attributes.position.array,z=.55,ne=z*z,te=K>.02&&Q.x<9e3,ie=te?Math.hypot(Q.x-r,Q.z):-1;for(let J=0;J<p;J++){const oe=v[J];f[J]-=x[J]*ce*b*60;const Me=r+Math.cos(f[J])*oe,Ue=Math.sin(f[J])*oe;let ee=0,Qe=0,be=0;if(te&&Math.abs(oe-ie)<z){const Te=Me-Q.x,Se=Ue-Q.z,Xe=Te*Te+Se*Se;if(Xe<ne&&Xe>1e-4){const Ke=Math.sqrt(Xe),lt=Ke/z,ve=Math.cos(lt*Math.PI*.5)*.35*K;ee=Te/Ke*ve,Qe=Se/Ke*ve,be=(1-lt)*.22*Math.sin(ae*5)*K}}const Ye=Math.sin(ae*2.2+f[J]*2.5+oe*1.6)*.18;A[J*3]=Me+ee,A[J*3+1]=Ye+be,A[J*3+2]=Ue+Qe}P.geometry.attributes.position.needsUpdate=!0;const fe=Z.geometry.attributes.position.array;for(let J=0;J<S;J++){const oe=r-fe[J*3],Me=-fe[J*3+1],Ue=-fe[J*3+2],ee=oe*oe+Me*Me+Ue*Ue,Qe=Math.min(20/(ee+1),1.4);N[J*3]+=oe*3e-4*Qe,N[J*3+1]+=Me*3e-4*Qe,N[J*3+2]+=Ue*3e-4*Qe,fe[J*3]+=N[J*3],fe[J*3+1]+=N[J*3+1],fe[J*3+2]+=N[J*3+2],(ee<3.5||fe[J*3+2]<-10)&&(fe[J*3]=r+(Math.random()-.5)*60,fe[J*3+1]=(Math.random()-.5)*50,fe[J*3+2]=Math.random()*30+10,N[J*3]=0,N[J*3+1]=0,N[J*3+2]=0)}Z.geometry.attributes.position.needsUpdate=!0,c.scale.setScalar(1+Math.sin(ae*2.5)*.018),h.scale.setScalar(1+Math.cos(ae*2)*.018),d.scale.setScalar(1+Math.sin(ae*1.8)*.015),l.render(o,a)}a.position.set(L.camX,L.camY,L.camZ),We();const H=qu.timeline({scrollTrigger:{trigger:document.body,start:"top top",end:"bottom bottom",scrub:1.2}});return H.to(L,{camZ:14,camY:7.5,camX:3.5,lookX:3.5,baseSpeed:4.8,duration:.5,ease:"power1.inOut"}),H.to(L,{camY:17.5,camX:r,lookX:r,camZ:.2,baseSpeed:5.5,duration:.5,ease:"power2.inOut"}),window.__getBHScreenCoord=()=>{const ce=new j(r,0,0).project(a);return{x:(ce.x*.5+.5)*window.innerWidth,y:(-ce.y*.5+.5)*window.innerHeight}},()=>{cancelAnimationFrame(Ie),window.removeEventListener("mousemove",re),window.removeEventListener("mouseleave",ge),window.removeEventListener("scroll",me),window.removeEventListener("resize",Le),H.kill(),l.dispose()}},[]),pt.jsx("canvas",{id:"blackhole-canvas",ref:n})}const Zc={name:"Maheswar N P",title:"BUILDER • ROBOTICS & AI ENGINEER",github:"https://github.com/MaheswarPraveen",linkedin:"https://www.linkedin.com/in/maheswarpraveen"},ID=[{id:"00",category:"PROFILE",title:"Autonomous Systems Builder",description:"Developing end-to-end robotics systems across ROS 2, bare-metal firmware, and edge AI accelerators. Focused on real-time motor control, kinematic trajectories, and hardware deployment.",tags:["ROS 2","Edge AI","Embedded Systems"]},{id:"01",category:"ROBOTICS",title:"SpotMicro Quadruped",description:"12-DOF quadruped robot powered by 12× DS3218 servos and an Arduino UNO Q running Zephyr RTOS for ~200Hz analytical inverse kinematics and quintic spline gaits. Custom 6.8V high-current busbar rail off a 3S LiPo to handle 20A transient bursts without brownouts.",tags:["Zephyr RTOS","Arduino UNO Q","200Hz IK","3S LiPo Busbar"]},{id:"02",category:"FIELD AI",title:"Autonomous Skid-Steer Rover",description:"Field farming rover equipped with a 4-DOF robotic manipulator for precision weed removal. Powered by ROS 2 and an edge Hailo-8L NPU executing real-time YOLO vision guidance for field deployment.",tags:["ROS 2","Hailo-8L NPU","YOLO","4-DOF Arm"]},{id:"03",category:"DRIVER ARCHITECTURE",title:"RoArm M2-S PlayMotion",description:"High-precision trajectory recording and autonomous playback driver featuring dual-mode teaching (physical freedrive & keyboard jogging). Streams 25Hz quintic polynomial splines for zero-jerk motion with serial noise filtering. Officially adopted into the Waveshare Wiki.",tags:["Quintic Splines","Python Driver","Waveshare Wiki"]},{id:"04",category:"TELEMETRY BRIDGE",title:"ArduROSPI Bridge",description:"Zero-dependency ROS 2 ↔ MAVLink translation layer built with pymavlink, replacing heavy MAVROS on resource-constrained Raspberry Pi rovers. Implements 10Hz IMU streaming, automatic serial reconnect, and mission mode switching.",tags:["pymavlink","ROS 2","ArduPilot"]},{id:"05",category:"INTERACTIVE SYSTEMS",title:"Kalkii Genesis",description:"Cyberpunk 2.5D action title solo-engineered in Godot 4. Custom hierarchical combat state machines, frame-accurate animation cancelling, dynamic 2D lighting, and responsive platformer physics controllers.",tags:["Godot 4","Combat State Machines","GDScript"]},{id:"06",category:"EMBEDDED VISION",title:"Plant Disease Detection CNN",description:"End-to-end computer vision pipeline for agricultural crop leaf pathology. Implements OpenCV preprocessing, custom convolutional neural network (CNN) architectures in TensorFlow, achieving 80% test accuracy on unseen diseased foliage datasets.",tags:["TensorFlow","OpenCV","80% Test Accuracy"]}],OD=[{label:"Languages & AI",value:"Python, C/C++, GDScript, PyTorch, TensorFlow, YOLO, OpenCV"},{label:"Robotics & Protocols",value:"ROS 2 (Humble/Jazzy), MAVLink, CAN, UART, I2C, SPI, MQTT"},{label:"Hardware & Engineering",value:"Hailo-8L NPU, Arduino UNO Q, Raspberry Pi, Zephyr RTOS, Fusion 360"}];(function(){function n(){for(var i=arguments.length,r=0;r<i;r++){var s=r<0||arguments.length<=r?void 0:arguments[r];s.nodeType===1||s.nodeType===11?this.appendChild(s):this.appendChild(document.createTextNode(String(s)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function t(){for(var i=this.parentNode,r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];var a=s.length;if(i)for(a||i.removeChild(this);a--;){var l=s[a];typeof l!="object"?l=this.ownerDocument.createTextNode(l):l.parentNode&&l.parentNode.removeChild(l),a?i.insertBefore(this.previousSibling,l):i.replaceChild(l,this)}}typeof Element<"u"&&(Element.prototype.append||(Element.prototype.append=n,DocumentFragment.prototype.append=n),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=t,DocumentFragment.prototype.replaceWith=t))})();function FD(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Dx(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Ux(n,e,t){return e&&Dx(n.prototype,e),t&&Dx(n,t),n}function kD(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Nx(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ix(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Nx(Object(t),!0).forEach(function(i){kD(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Nx(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function jE(n,e){return BD(n)||GD(n,e)||qE(n,e)||WD()}function Bn(n){return zD(n)||HD(n)||qE(n)||VD()}function zD(n){if(Array.isArray(n))return Um(n)}function BD(n){if(Array.isArray(n))return n}function HD(n){if(typeof Symbol<"u"&&Symbol.iterator in Object(n))return Array.from(n)}function GD(n,e){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(n)))){var t=[],i=!0,r=!1,s=void 0;try{for(var o=n[Symbol.iterator](),a;!(i=(a=o.next()).done)&&(t.push(a.value),!(e&&t.length===e));i=!0);}catch(l){r=!0,s=l}finally{try{!i&&o.return!=null&&o.return()}finally{if(r)throw s}}return t}}function qE(n,e){if(n){if(typeof n=="string")return Um(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Um(n,e)}}function Um(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function VD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fo(n,e){return Object.getOwnPropertyNames(Object(n)).reduce(function(t,i){var r=Object.getOwnPropertyDescriptor(Object(n),i),s=Object.getOwnPropertyDescriptor(Object(e),i);return Object.defineProperty(t,i,s||r)},{})}function $u(n){return typeof n=="string"}function fg(n){return Array.isArray(n)}function Qc(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=fo(n),t;return e.types!==void 0?t=e.types:e.split!==void 0&&(t=e.split),t!==void 0&&(e.types=($u(t)||fg(t)?String(t):"").split(",").map(function(i){return String(i).trim()}).filter(function(i){return/((line)|(word)|(char))/i.test(i)})),(e.absolute||e.position)&&(e.absolute=e.absolute||/absolute/.test(n.position)),e}function dg(n){var e=$u(n)||fg(n)?String(n):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function Id(n){return n!==null&&typeof n=="object"}function XD(n){return Id(n)&&/^(1|3|11)$/.test(n.nodeType)}function YD(n){return typeof n=="number"&&n>-1&&n%1===0}function jD(n){return Id(n)&&YD(n.length)}function Oo(n){return fg(n)?n:n==null?[]:jD(n)?Array.prototype.slice.call(n):[n]}function Ox(n){var e=n;return $u(n)&&(/^(#[a-z]\w+)$/.test(n.trim())?e=document.getElementById(n.trim().slice(1)):e=document.querySelectorAll(n)),Oo(e).reduce(function(t,i){return[].concat(Bn(t),Bn(Oo(i).filter(XD)))},[])}var qD=Object.entries,ud="_splittype",ur={},$D=0;function yr(n,e,t){if(!Id(n))return console.warn("[data.set] owner is not an object"),null;var i=n[ud]||(n[ud]=++$D),r=ur[i]||(ur[i]={});return t===void 0?e&&Object.getPrototypeOf(e)===Object.prototype&&(ur[i]=Ix(Ix({},r),e)):e!==void 0&&(r[e]=t),t}function ho(n,e){var t=Id(n)?n[ud]:null,i=t&&ur[t]||{};return i}function $E(n){var e=n&&n[ud];e&&(delete n[e],delete ur[e])}function KD(){Object.keys(ur).forEach(function(n){delete ur[n]})}function ZD(){qD(ur).forEach(function(n){var e=jE(n,2),t=e[0],i=e[1],r=i.isRoot,s=i.isSplit;(!r||!s)&&(ur[t]=null,delete ur[t])})}function QD(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:" ",t=n?String(n):"";return t.trim().replace(/\s+/g," ").split(e)}var hg="\\ud800-\\udfff",KE="\\u0300-\\u036f\\ufe20-\\ufe23",ZE="\\u20d0-\\u20f0",QE="\\ufe0e\\ufe0f",JD="[".concat(hg,"]"),Nm="[".concat(KE).concat(ZE,"]"),Im="\\ud83c[\\udffb-\\udfff]",e3="(?:".concat(Nm,"|").concat(Im,")"),JE="[^".concat(hg,"]"),e1="(?:\\ud83c[\\udde6-\\uddff]){2}",t1="[\\ud800-\\udbff][\\udc00-\\udfff]",n1="\\u200d",i1="".concat(e3,"?"),r1="[".concat(QE,"]?"),t3="(?:"+n1+"(?:"+[JE,e1,t1].join("|")+")"+r1+i1+")*",n3=r1+i1+t3,i3="(?:".concat(["".concat(JE).concat(Nm,"?"),Nm,e1,t1,JD].join("|"),`
)`),r3=RegExp("".concat(Im,"(?=").concat(Im,")|").concat(i3).concat(n3),"g"),s3=[n1,hg,KE,ZE,QE],o3=RegExp("[".concat(s3.join(""),"]"));function a3(n){return n.split("")}function s1(n){return o3.test(n)}function l3(n){return n.match(r3)||[]}function u3(n){return s1(n)?l3(n):a3(n)}function c3(n){return n==null?"":String(n)}function f3(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return n=c3(n),n&&$u(n)&&!e&&s1(n)?u3(n):n.split(e)}function Om(n,e){var t=document.createElement(n);return e&&Object.keys(e).forEach(function(i){var r=e[i],s=$u(r)?r.trim():r;s===null||s===""||(i==="children"?t.append.apply(t,Bn(Oo(s))):t.setAttribute(i,s))}),t}var pg={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"};function d3(n,e){e=fo(pg,e);var t=dg(e.types),i=e.tagName,r=n.nodeValue,s=document.createDocumentFragment(),o=[],a=[];return/^\s/.test(r)&&s.append(" "),o=QD(r).reduce(function(l,u,c,h){var d,p;return t.chars&&(p=f3(u).map(function(g){var _=Om(i,{class:"".concat(e.splitClass," ").concat(e.charClass),style:"display: inline-block;",children:g});return yr(_,"isChar",!0),a=[].concat(Bn(a),[_]),_})),t.words||t.lines?(d=Om(i,{class:"".concat(e.wordClass," ").concat(e.splitClass),style:"display: inline-block; ".concat(t.words&&e.absolute?"position: relative;":""),children:t.chars?p:u}),yr(d,{isWord:!0,isWordStart:!0,isWordEnd:!0}),s.appendChild(d)):p.forEach(function(g){s.appendChild(g)}),c<h.length-1&&s.append(" "),t.words?l.concat(d):l},[]),/\s$/.test(r)&&s.append(" "),n.replaceWith(s),{words:o,chars:a}}function o1(n,e){var t=n.nodeType,i={words:[],chars:[]};if(!/(1|3|11)/.test(t))return i;if(t===3&&/\S/.test(n.nodeValue))return d3(n,e);var r=Oo(n.childNodes);if(r.length&&(yr(n,"isSplit",!0),!ho(n).isRoot)){n.style.display="inline-block",n.style.position="relative";var s=n.nextSibling,o=n.previousSibling,a=n.textContent||"",l=s?s.textContent:" ",u=o?o.textContent:" ";yr(n,{isWordEnd:/\s$/.test(a)||/^\s/.test(l),isWordStart:/^\s/.test(a)||/\s$/.test(u)})}return r.reduce(function(c,h){var d=o1(h,e),p=d.words,g=d.chars;return{words:[].concat(Bn(c.words),Bn(p)),chars:[].concat(Bn(c.chars),Bn(g))}},i)}function h3(n,e,t,i){if(!t.absolute)return{top:e?n.offsetTop:null};var r=n.offsetParent,s=jE(i,2),o=s[0],a=s[1],l=0,u=0;if(r&&r!==document.body){var c=r.getBoundingClientRect();l=c.x+o,u=c.y+a}var h=n.getBoundingClientRect(),d=h.width,p=h.height,g=h.x,_=h.y,m=_+a-u,f=g+o-l;return{width:d,height:p,top:m,left:f}}function a1(n){ho(n).isWord?($E(n),n.replaceWith.apply(n,Bn(n.childNodes))):Oo(n.children).forEach(function(e){return a1(e)})}var p3=function(){return document.createDocumentFragment()};function m3(n,e,t){var i=dg(e.types),r=e.tagName,s=n.getElementsByTagName("*"),o=[],a=[],l=null,u,c,h,d=[],p=n.parentElement,g=n.nextElementSibling,_=p3(),m=window.getComputedStyle(n),f=m.textAlign,v=parseFloat(m.fontSize),x=v*.2;return e.absolute&&(h={left:n.offsetLeft,top:n.offsetTop,width:n.offsetWidth},c=n.offsetWidth,u=n.offsetHeight,yr(n,{cssWidth:n.style.width,cssHeight:n.style.height})),Oo(s).forEach(function(y){var w=y.parentElement===n,T=h3(y,w,e,t),M=T.width,P=T.height,S=T.top,E=T.left;/^br$/i.test(y.nodeName)||(i.lines&&w&&((l===null||S-l>=x)&&(l=S,o.push(a=[])),a.push(y)),e.absolute&&yr(y,{top:S,left:E,width:M,height:P}))}),p&&p.removeChild(n),i.lines&&(d=o.map(function(y){var w=Om(r,{class:"".concat(e.splitClass," ").concat(e.lineClass),style:"display: block; text-align: ".concat(f,"; width: 100%;")});yr(w,"isLine",!0);var T={height:0,top:1e4};return _.appendChild(w),y.forEach(function(M,P,S){var E=ho(M),I=E.isWordEnd,N=E.top,Z=E.height,L=S[P+1];T.height=Math.max(T.height,Z),T.top=Math.min(T.top,N),w.appendChild(M),I&&ho(L).isWordStart&&w.append(" ")}),e.absolute&&yr(w,{height:T.height,top:T.top}),w}),i.words||a1(_),n.replaceChildren(_)),e.absolute&&(n.style.width="".concat(n.style.width||c,"px"),n.style.height="".concat(u,"px"),Oo(s).forEach(function(y){var w=ho(y),T=w.isLine,M=w.top,P=w.left,S=w.width,E=w.height,I=ho(y.parentElement),N=!T&&I.isLine;y.style.top="".concat(N?M-I.top:M,"px"),y.style.left=T?"".concat(h.left,"px"):"".concat(P-(N?h.left:0),"px"),y.style.height="".concat(E,"px"),y.style.width=T?"".concat(h.width,"px"):"".concat(S,"px"),y.style.position="absolute"})),p&&(g?p.insertBefore(n,g):p.appendChild(n)),d}var aa=fo(pg,{}),_3=function(){Ux(n,null,[{key:"clearData",value:function(){KD()}},{key:"setDefaults",value:function(t){return aa=fo(aa,Qc(t)),pg}},{key:"revert",value:function(t){Ox(t).forEach(function(i){var r=ho(i),s=r.isSplit,o=r.html,a=r.cssWidth,l=r.cssHeight;s&&(i.innerHTML=o,i.style.width=a||"",i.style.height=l||"",$E(i))})}},{key:"create",value:function(t,i){return new n(t,i)}},{key:"data",get:function(){return ur}},{key:"defaults",get:function(){return aa},set:function(t){aa=fo(aa,Qc(t))}}]);function n(e,t){FD(this,n),this.isSplit=!1,this.settings=fo(aa,Qc(t)),this.elements=Ox(e),this.split()}return Ux(n,[{key:"split",value:function(t){var i=this;this.revert(),this.elements.forEach(function(o){yr(o,"html",o.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var r=[window.pageXOffset,window.pageYOffset];t!==void 0&&(this.settings=fo(this.settings,Qc(t)));var s=dg(this.settings.types);s.none||(this.elements.forEach(function(o){yr(o,"isRoot",!0);var a=o1(o,i.settings),l=a.words,u=a.chars;i.words=[].concat(Bn(i.words),Bn(l)),i.chars=[].concat(Bn(i.chars),Bn(u))}),this.elements.forEach(function(o){if(s.lines||i.settings.absolute){var a=m3(o,i.settings,r);i.lines=[].concat(Bn(i.lines),Bn(a))}}),this.isSplit=!0,window.scrollTo(r[0],r[1]),ZD())}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),n.revert(this.elements)}}]),n}();qu.registerPlugin(Ze);function l1(n,{isHero:e=!1}={}){Tr.useEffect(()=>{const t=n.current;if(!t)return;const i=e?".name-title, .hero-subtitle, .clean-link":".section-title, .tag, .project-index, .section-desc",r=new _3(t.querySelectorAll(i),{types:"chars"}),s=Array.from(t.querySelectorAll(".char")),o=Array.from(t.querySelectorAll(".tag, .section-title, .hero-links, .clean-link")),a=s.length;s.forEach(d=>{d.dataset.orig=d.textContent});let l=[];function u(){l=s.map(d=>{const p=d.getBoundingClientRect();return{x:p.left,y:p.top}})}u();let c=null;e||(c=Ze.create({trigger:t,start:"top 90%",end:"top 10%",scrub:1,onUpdate:d=>{if(d.progress<1){const p=Math.min(1,d.progress*1.4),g=.95+.05*d.progress;t.style.opacity=p.toFixed(2),t.style.transform=`scale(${g.toFixed(3)})`}}}));const h=Ze.create({trigger:t,start:"top top",end:e?"+=80%":"+=115%",pin:!0,pinSpacing:!0,scrub:1.2,onEnter:()=>u(),onEnterBack:()=>u(),onUpdate:d=>{const p=d.progress;if(p<=.1){s.forEach(f=>{f.textContent!==f.dataset.orig&&(f.textContent=f.dataset.orig),f.style.color="",f.style.opacity="1",f.style.transform="",f.style.textShadow=""}),t.style.opacity="1",t.style.transform="",o.forEach(f=>{f.style.opacity="1",f.style.borderColor=""});return}l.length!==a&&u();const g=window.__getBHScreenCoord?window.__getBHScreenCoord():{x:window.innerWidth*.72,y:window.innerHeight*.5};s.forEach((f,v)=>{const x=.1+v/a*.3,y=.16,w=.14;if(p<x){f.textContent!==f.dataset.orig&&(f.textContent=f.dataset.orig),f.style.color="",f.style.opacity="1",f.style.transform="",f.style.textShadow="";return}const T=p-x;if(T<y)f.textContent=Math.random()>.5?"1":"0",f.style.color=Math.random()>.3?"#ffb030":"#ffe480",f.style.textShadow="0 0 8px rgba(255, 176, 48, 0.6)",f.style.opacity="1",f.style.transform="";else if(T<y+w)f.textContent="0",f.style.color="#ffa020",f.style.textShadow="0 0 10px rgba(255, 160, 32, 0.7)",f.style.opacity="1",f.style.transform="";else{f.textContent="0";const M=Math.min(1,(T-y-w)/.32),P=Math.pow(M,2.2),S=l[v]||{x:window.innerWidth*.25,y:window.innerHeight*.5},E=g.x-S.x,I=g.y-S.y,N=v*.12+P*3.5,Z=Math.sin(N)*25*(1-P),L=Math.cos(N)*18*(1-P),O=E*P+Z,B=I*P+L,G=-P*550,D=1+P*.4,F=Math.max(.1,1-P*.8),R=P*55,$=-P*18,Q=Math.max(0,1-Math.pow(M,2.5));f.style.transform=`translate3d(${O}px, ${B}px, ${G}px) rotateX(${R}deg) rotateZ(${$}deg) scale(${D}, ${F})`,f.style.color=P<.5?"#ff9010":"#dd3000",f.style.textShadow=`0 0 ${Math.max(2,12*(1-P))}px rgba(255, 120, 20, 0.8)`,f.style.opacity=Q}});const _=Math.max(0,(p-.48)/.42),m=Math.max(0,1-_*1.3);t.style.opacity=m,o.forEach(f=>{f.style.opacity=m,f.style.borderColor=`rgba(255, 255, 255, ${.12*m})`})},onLeave:()=>{s.forEach(d=>{d.textContent="0",d.style.opacity="0"}),t.style.opacity="0"},onLeaveBack:()=>{s.forEach(d=>{d.textContent=d.dataset.orig,d.style.color="",d.style.opacity="1",d.style.transform="",d.style.textShadow=""}),t.style.opacity="1",t.style.transform="",o.forEach(d=>{d.style.borderColor="",d.style.opacity="1"})}});return()=>{c&&c.kill(),h.kill(),r.revert()}},[e])}function g3(){const n=Tr.useRef(null);return l1(n,{isHero:!0}),pt.jsxs("header",{className:"card hero-card",ref:n,"data-offset":"0",children:[pt.jsx("h1",{className:"name-title",children:Zc.name}),pt.jsx("p",{className:"hero-subtitle",children:Zc.title}),pt.jsxs("div",{className:"hero-links",children:[pt.jsx("a",{href:Zc.github,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"GitHub"}),pt.jsx("a",{href:Zc.linkedin,target:"_blank",rel:"noopener noreferrer",className:"clean-link",children:"LinkedIn"})]})]})}function v3({project:n,index:e}){const t=Tr.useRef(null);return l1(t,{isHero:!1}),pt.jsxs("section",{className:"card content-card",ref:t,"data-offset":e+1,children:[pt.jsxs("span",{className:"project-index",children:[n.id," // ",n.category]}),pt.jsx("h2",{className:"section-title",children:n.title}),pt.jsx("p",{className:"section-desc",children:n.description}),pt.jsx("div",{className:"tag-cloud",children:n.tags.map((i,r)=>pt.jsx("span",{className:"tag",children:i},r))})]})}qu.registerPlugin(Ze);function x3(){const n=Tr.useRef(null);return Tr.useEffect(()=>{const e=n.current;if(!e)return;const t=Ze.create({trigger:e,start:"top top",end:"+=100%",pin:!0,pinSpacing:!0,scrub:1});return()=>t.kill()},[]),pt.jsxs("section",{className:"card content-card",ref:n,"data-offset":"8",children:[pt.jsx("span",{className:"project-index",children:"07 // STACK"}),pt.jsx("h2",{className:"section-title",children:"Technical Capabilities"}),pt.jsx("div",{className:"stack-grid",children:OD.map((e,t)=>pt.jsxs("div",{className:"stack-col",children:[pt.jsx("span",{className:"stack-label",children:e.label}),pt.jsx("span",{className:"stack-val",children:e.value})]},t))})]})}function y3(){return pt.jsxs(pt.Fragment,{children:[pt.jsx(ND,{}),pt.jsxs("main",{id:"ui-container",children:[pt.jsx(g3,{}),ID.map((n,e)=>pt.jsx(v3,{project:n,index:e},n.id)),pt.jsx(x3,{})]}),pt.jsx("div",{className:"scroll-end-trigger"})]})}ip.createRoot(document.getElementById("root")).render(pt.jsx(A1.StrictMode,{children:pt.jsx(y3,{})}));
