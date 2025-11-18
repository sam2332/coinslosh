/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mi="160",Ha=2,$o=0,el=1,tl=2,nl=100,il=101,rl=102,al=200,sl=201,ol=202,ll=203,cl=204,hl=205,ul=206,dl=207,pl=208,fl=209,ml=210,gl=211,_l=212,vl=213,xl=214,Ml=301,Sl=302,El=306,yl=1e3,Tl=1001,bl=1002,Al=1003,wl=1004,Rl=1005,Cl=1006,Ll=1007,Pl=1008,Ul=1009,Dl=1012,Nl=1013,Il=1014,Ol=1015,Fl=1016,Bl=1020,zl=1023,Hl=1026,Gl=1027,Vl=33776,kl=33777,Wl=33778,Xl=33779,jl=36492,ql=3001,vt="",ke="srgb",Et="srgb-linear",Si="display-p3",Fn="display-p3-linear",Bn="linear",Ne="srgb",zn="rec709",Hn="p3",Yl=7680,Kl=512,Zl=513,Jl=514,Ql=515,$l=516,ec=517,tc=518,nc=519,Mr="300 es",ic=1035,rc=2e3,ac=2001;class Zt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ei=Math.PI/180,yi=180/Math.PI;function xn(){const r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(qe[255&r]+qe[r>>8&255]+qe[r>>16&255]+qe[r>>24&255]+"-"+qe[255&e]+qe[e>>8&255]+"-"+qe[e>>16&15|64]+qe[e>>24&255]+"-"+qe[63&t|128]+qe[t>>8&255]+"-"+qe[t>>16&255]+qe[t>>24&255]+qe[255&n]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function $e(r,e,t){return Math.max(e,Math.min(t,r))}function Ti(r,e,t){return(1-t)*r+t*e}function Sr(r){return!(r&r-1)&&r!==0}function bi(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Se{constructor(e,t,n,i,a,s,l,h,o){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,l,h,o)}set(e,t,n,i,a,s,l,h,o){const c=this.elements;return c[0]=e,c[1]=i,c[2]=l,c[3]=t,c[4]=a,c[5]=h,c[6]=n,c[7]=s,c[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],l=n[3],h=n[6],o=n[1],c=n[4],d=n[7],u=n[2],f=n[5],v=n[8],_=i[0],p=i[3],y=i[6],m=i[1],g=i[4],P=i[7],U=i[2],w=i[5],b=i[8];return a[0]=s*_+l*m+h*U,a[3]=s*p+l*g+h*w,a[6]=s*y+l*P+h*b,a[1]=o*_+c*m+d*U,a[4]=o*p+c*g+d*w,a[7]=o*y+c*P+d*b,a[2]=u*_+f*m+v*U,a[5]=u*p+f*g+v*w,a[8]=u*y+f*P+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],h=e[6],o=e[7],c=e[8];return t*s*c-t*l*o-n*a*c+n*l*h+i*a*o-i*s*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],h=e[6],o=e[7],c=e[8],d=c*s-l*o,u=l*h-c*a,f=o*a-s*h,v=t*d+n*u+i*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(i*o-c*n)*_,e[2]=(l*n-i*s)*_,e[3]=u*_,e[4]=(c*t-i*h)*_,e[5]=(i*a-l*t)*_,e[6]=f*_,e[7]=(n*h-o*t)*_,e[8]=(s*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,l){const h=Math.cos(a),o=Math.sin(a);return this.set(n*h,n*o,-n*(h*s+o*l)+s+e,-i*o,i*h,-i*(-o*s+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Ai.makeScale(e,t)),this}rotate(e){return this.premultiply(Ai.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ai.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ai=new Se;function Er(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gn(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ga(){const r=Gn("canvas");return r.style.display="block",r}const yr={};function Sn(r){r in yr||(yr[r]=!0,console.warn(r))}const Tr=new Se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),br=new Se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vn={[Et]:{transfer:Bn,primaries:zn,toReference:r=>r,fromReference:r=>r},[ke]:{transfer:Ne,primaries:zn,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fn]:{transfer:Bn,primaries:Hn,toReference:r=>r.applyMatrix3(br),fromReference:r=>r.applyMatrix3(Tr)},[Si]:{transfer:Ne,primaries:Hn,toReference:r=>r.convertSRGBToLinear().applyMatrix3(br),fromReference:r=>r.applyMatrix3(Tr).convertLinearToSRGB()}},Va=new Set([Et,Fn]),De={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Va.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Vn[e].toReference;return(0,Vn[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Vn[r].primaries},getTransfer:function(r){return r===vt?Bn:Vn[r].transfer}};function Jt(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function wi(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}let Qt;class Ar{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qt===void 0&&(Qt=Gn("canvas")),Qt.width=e.width,Qt.height=e.height;const n=Qt.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qt}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gn("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=255*Jt(a[s]/255);return n.putImageData(i,0,0),t}if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Jt(t[n]/255)):t[n]=Jt(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ka=0;class wr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ka++}),this.uuid=xn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,l=i.length;s<l;s++)i[s].isDataTexture?a.push(Ri(i[s].image)):a.push(Ri(i[s]))}else a=Ri(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ri(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ar.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wa=0;class tt extends Zt{constructor(e=tt.DEFAULT_IMAGE,t=tt.DEFAULT_MAPPING,n=1001,i=1001,a=1006,s=1008,l=1023,h=1009,o=tt.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wa++}),this.uuid=xn(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=h,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Sn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===3001?ke:vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?3001:3e3}set encoding(e){Sn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===3001?ke:vt}}tt.DEFAULT_IMAGE=null,tt.DEFAULT_MAPPING=300,tt.DEFAULT_ANISOTROPY=1;class Ie{constructor(e=0,t=0,n=0,i=1){Ie.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const h=e.elements,o=h[0],c=h[4],d=h[8],u=h[1],f=h[5],v=h[9],_=h[2],p=h[6],y=h[10];if(Math.abs(c-u)<.01&&Math.abs(d-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+_)<.1&&Math.abs(v+p)<.1&&Math.abs(o+f+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(o+1)/2,P=(f+1)/2,U=(y+1)/2,w=(c+u)/4,b=(d+_)/4,k=(v+p)/4;return g>P&&g>U?g<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(g),i=w/n,a=b/n):P>U?P<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(P),n=w/i,a=k/i):U<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(U),n=b/a,i=k/a),this.set(n,i,a,t),this}let m=Math.sqrt((p-v)*(p-v)+(d-_)*(d-_)+(u-c)*(u-c));return Math.abs(m)<.001&&(m=1),this.x=(p-v)/m,this.y=(d-_)/m,this.z=(u-c)/m,this.w=Math.acos((o+f+y-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xa extends Zt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ie(0,0,e,t),this.scissorTest=!1,this.viewport=new Ie(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Sn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===3001?ke:vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){this.width===e&&this.height===t&&this.depth===n||(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bt extends Xa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rr extends tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ja extends tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class En{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,s,l){let h=n[i+0],o=n[i+1],c=n[i+2],d=n[i+3];const u=a[s+0],f=a[s+1],v=a[s+2],_=a[s+3];if(l===0)return e[t+0]=h,e[t+1]=o,e[t+2]=c,void(e[t+3]=d);if(l===1)return e[t+0]=u,e[t+1]=f,e[t+2]=v,void(e[t+3]=_);if(d!==_||h!==u||o!==f||c!==v){let p=1-l;const y=h*u+o*f+c*v+d*_,m=y>=0?1:-1,g=1-y*y;if(g>Number.EPSILON){const U=Math.sqrt(g),w=Math.atan2(U,y*m);p=Math.sin(p*w)/U,l=Math.sin(l*w)/U}const P=l*m;if(h=h*p+u*P,o=o*p+f*P,c=c*p+v*P,d=d*p+_*P,p===1-l){const U=1/Math.sqrt(h*h+o*o+c*c+d*d);h*=U,o*=U,c*=U,d*=U}}e[t]=h,e[t+1]=o,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,a,s){const l=n[i],h=n[i+1],o=n[i+2],c=n[i+3],d=a[s],u=a[s+1],f=a[s+2],v=a[s+3];return e[t]=l*v+c*d+h*f-o*u,e[t+1]=h*v+c*u+o*d-l*f,e[t+2]=o*v+c*f+l*u-h*d,e[t+3]=c*v-l*d-h*u-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,s=e._order,l=Math.cos,h=Math.sin,o=l(n/2),c=l(i/2),d=l(a/2),u=h(n/2),f=h(i/2),v=h(a/2);switch(s){case"XYZ":this._x=u*c*d+o*f*v,this._y=o*f*d-u*c*v,this._z=o*c*v+u*f*d,this._w=o*c*d-u*f*v;break;case"YXZ":this._x=u*c*d+o*f*v,this._y=o*f*d-u*c*v,this._z=o*c*v-u*f*d,this._w=o*c*d+u*f*v;break;case"ZXY":this._x=u*c*d-o*f*v,this._y=o*f*d+u*c*v,this._z=o*c*v+u*f*d,this._w=o*c*d-u*f*v;break;case"ZYX":this._x=u*c*d-o*f*v,this._y=o*f*d+u*c*v,this._z=o*c*v-u*f*d,this._w=o*c*d+u*f*v;break;case"YZX":this._x=u*c*d+o*f*v,this._y=o*f*d+u*c*v,this._z=o*c*v-u*f*d,this._w=o*c*d-u*f*v;break;case"XZY":this._x=u*c*d-o*f*v,this._y=o*f*d-u*c*v,this._z=o*c*v+u*f*d,this._w=o*c*d+u*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],l=t[5],h=t[9],o=t[2],c=t[6],d=t[10],u=n+l+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-h)*f,this._y=(a-o)*f,this._z=(s-i)*f}else if(n>l&&n>d){const f=2*Math.sqrt(1+n-l-d);this._w=(c-h)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(a+o)/f}else if(l>d){const f=2*Math.sqrt(1+l-n-d);this._w=(a-o)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(h+c)/f}else{const f=2*Math.sqrt(1+d-n-l);this._w=(s-i)/f,this._x=(a+o)/f,this._y=(h+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,s=e._w,l=t._x,h=t._y,o=t._z,c=t._w;return this._x=n*c+s*l+i*o-a*h,this._y=i*c+s*h+a*l-n*o,this._z=a*c+s*o+n*h-i*l,this._w=s*c-n*l-i*h-a*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,s=this._w;let l=s*e._w+n*e._x+i*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;const h=1-l*l;if(h<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const o=Math.sqrt(h),c=Math.atan2(o,l),d=Math.sin((1-t)*c)/o,u=Math.sin(t*c)/o;return this._w=s*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(a),n*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,l=e.z,h=e.w,o=2*(s*i-l*n),c=2*(l*t-a*i),d=2*(a*n-s*t);return this.x=t+h*o+s*d-l*c,this.y=n+h*c+l*o-a*d,this.z=i+h*d+a*c-s*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,s=t.x,l=t.y,h=t.z;return this.x=i*h-a*l,this.y=a*s-n*h,this.z=n*l-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ci.copy(this).projectOnVector(e),this.sub(Ci)}reflect(e){return this.sub(Ci.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ci=new R,Cr=new En;class yn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=a.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,pt):pt.fromBufferAttribute(a,s),pt.applyMatrix4(e.matrixWorld),this.expandByPoint(pt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kn.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kn.copy(n.boundingBox)),kn.applyMatrix4(e.matrixWorld),this.union(kn)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pt),pt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tn),Wn.subVectors(this.max,Tn),$t.subVectors(e.a,Tn),en.subVectors(e.b,Tn),tn.subVectors(e.c,Tn),Rt.subVectors(en,$t),Ct.subVectors(tn,en),zt.subVectors($t,tn);let t=[0,-Rt.z,Rt.y,0,-Ct.z,Ct.y,0,-zt.z,zt.y,Rt.z,0,-Rt.x,Ct.z,0,-Ct.x,zt.z,0,-zt.x,-Rt.y,Rt.x,0,-Ct.y,Ct.x,0,-zt.y,zt.x,0];return!!Li(t,$t,en,tn,Wn)&&(t=[1,0,0,0,1,0,0,0,1],!!Li(t,$t,en,tn,Wn)&&(Xn.crossVectors(Rt,Ct),t=[Xn.x,Xn.y,Xn.z],Li(t,$t,en,tn,Wn)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(pt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(yt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yt=[new R,new R,new R,new R,new R,new R,new R,new R],pt=new R,kn=new yn,$t=new R,en=new R,tn=new R,Rt=new R,Ct=new R,zt=new R,Tn=new R,Wn=new R,Xn=new R,Ht=new R;function Li(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){Ht.fromArray(r,a);const l=i.x*Math.abs(Ht.x)+i.y*Math.abs(Ht.y)+i.z*Math.abs(Ht.z),h=e.dot(Ht),o=t.dot(Ht),c=n.dot(Ht);if(Math.max(-Math.max(h,o,c),Math.min(h,o,c))>l)return!1}return!0}const qa=new yn,bn=new R,Pi=new R;class Ui{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qa.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bn.subVectors(e,this.center);const t=bn.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(bn,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bn.copy(e.center).add(Pi)),this.expandByPoint(bn.copy(e.center).sub(Pi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tt=new R,Di=new R,jn=new R,Lt=new R,Ni=new R,qn=new R,Ii=new R;class Ya{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tt.copy(this.origin).addScaledVector(this.direction,t),Tt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Di.copy(e).add(t).multiplyScalar(.5),jn.copy(t).sub(e).normalize(),Lt.copy(this.origin).sub(Di);const a=.5*e.distanceTo(t),s=-this.direction.dot(jn),l=Lt.dot(this.direction),h=-Lt.dot(jn),o=Lt.lengthSq(),c=Math.abs(1-s*s);let d,u,f,v;if(c>0)if(d=s*h-l,u=s*l-h,v=a*c,d>=0)if(u>=-v)if(u<=v){const _=1/c;d*=_,u*=_,f=d*(d+s*u+2*l)+u*(s*d+u+2*h)+o}else u=a,d=Math.max(0,-(s*u+l)),f=-d*d+u*(u+2*h)+o;else u=-a,d=Math.max(0,-(s*u+l)),f=-d*d+u*(u+2*h)+o;else u<=-v?(d=Math.max(0,-(-s*a+l)),u=d>0?-a:Math.min(Math.max(-a,-h),a),f=-d*d+u*(u+2*h)+o):u<=v?(d=0,u=Math.min(Math.max(-a,-h),a),f=u*(u+2*h)+o):(d=Math.max(0,-(s*a+l)),u=d>0?a:Math.min(Math.max(-a,-h),a),f=-d*d+u*(u+2*h)+o);else u=s>0?-a:a,d=Math.max(0,-(s*u+l)),f=-d*d+u*(u+2*h)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Di).addScaledVector(jn,u),f}intersectSphere(e,t){Tt.subVectors(e.center,this.origin);const n=Tt.dot(this.direction),i=Tt.dot(Tt)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),l=n-s,h=n+s;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,l,h;const o=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return o>=0?(n=(e.min.x-u.x)*o,i=(e.max.x-u.x)*o):(n=(e.max.x-u.x)*o,i=(e.min.x-u.x)*o),c>=0?(a=(e.min.y-u.y)*c,s=(e.max.y-u.y)*c):(a=(e.max.y-u.y)*c,s=(e.min.y-u.y)*c),n>s||a>i?null:((a>n||isNaN(n))&&(n=a),(s<i||isNaN(i))&&(i=s),d>=0?(l=(e.min.z-u.z)*d,h=(e.max.z-u.z)*d):(l=(e.max.z-u.z)*d,h=(e.min.z-u.z)*d),n>h||l>i?null:((l>n||n!=n)&&(n=l),(h<i||i!=i)&&(i=h),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Tt)!==null}intersectTriangle(e,t,n,i,a){Ni.subVectors(t,e),qn.subVectors(n,e),Ii.crossVectors(Ni,qn);let s,l=this.direction.dot(Ii);if(l>0){if(i)return null;s=1}else{if(!(l<0))return null;s=-1,l=-l}Lt.subVectors(this.origin,e);const h=s*this.direction.dot(qn.crossVectors(Lt,qn));if(h<0)return null;const o=s*this.direction.dot(Ni.cross(Lt));if(o<0||h+o>l)return null;const c=-s*Lt.dot(Ii);return c<0?null:this.at(c/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,a,s,l,h,o,c,d,u,f,v,_,p){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,l,h,o,c,d,u,f,v,_,p)}set(e,t,n,i,a,s,l,h,o,c,d,u,f,v,_,p){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=a,y[5]=s,y[9]=l,y[13]=h,y[2]=o,y[6]=c,y[10]=d,y[14]=u,y[3]=f,y[7]=v,y[11]=_,y[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/nn.setFromMatrixColumn(e,0).length(),a=1/nn.setFromMatrixColumn(e,1).length(),s=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),l=Math.sin(n),h=Math.cos(i),o=Math.sin(i),c=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=s*c,f=s*d,v=l*c,_=l*d;t[0]=h*c,t[4]=-h*d,t[8]=o,t[1]=f+v*o,t[5]=u-_*o,t[9]=-l*h,t[2]=_-u*o,t[6]=v+f*o,t[10]=s*h}else if(e.order==="YXZ"){const u=h*c,f=h*d,v=o*c,_=o*d;t[0]=u+_*l,t[4]=v*l-f,t[8]=s*o,t[1]=s*d,t[5]=s*c,t[9]=-l,t[2]=f*l-v,t[6]=_+u*l,t[10]=s*h}else if(e.order==="ZXY"){const u=h*c,f=h*d,v=o*c,_=o*d;t[0]=u-_*l,t[4]=-s*d,t[8]=v+f*l,t[1]=f+v*l,t[5]=s*c,t[9]=_-u*l,t[2]=-s*o,t[6]=l,t[10]=s*h}else if(e.order==="ZYX"){const u=s*c,f=s*d,v=l*c,_=l*d;t[0]=h*c,t[4]=v*o-f,t[8]=u*o+_,t[1]=h*d,t[5]=_*o+u,t[9]=f*o-v,t[2]=-o,t[6]=l*h,t[10]=s*h}else if(e.order==="YZX"){const u=s*h,f=s*o,v=l*h,_=l*o;t[0]=h*c,t[4]=_-u*d,t[8]=v*d+f,t[1]=d,t[5]=s*c,t[9]=-l*c,t[2]=-o*c,t[6]=f*d+v,t[10]=u-_*d}else if(e.order==="XZY"){const u=s*h,f=s*o,v=l*h,_=l*o;t[0]=h*c,t[4]=-d,t[8]=o*c,t[1]=u*d+_,t[5]=s*c,t[9]=f*d-v,t[2]=v*d-f,t[6]=l*c,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ka,e,Za)}lookAt(e,t,n){const i=this.elements;return it.subVectors(e,t),it.lengthSq()===0&&(it.z=1),it.normalize(),Pt.crossVectors(n,it),Pt.lengthSq()===0&&(Math.abs(n.z)===1?it.x+=1e-4:it.z+=1e-4,it.normalize(),Pt.crossVectors(n,it)),Pt.normalize(),Yn.crossVectors(it,Pt),i[0]=Pt.x,i[4]=Yn.x,i[8]=it.x,i[1]=Pt.y,i[5]=Yn.y,i[9]=it.y,i[2]=Pt.z,i[6]=Yn.z,i[10]=it.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],l=n[4],h=n[8],o=n[12],c=n[1],d=n[5],u=n[9],f=n[13],v=n[2],_=n[6],p=n[10],y=n[14],m=n[3],g=n[7],P=n[11],U=n[15],w=i[0],b=i[4],k=i[8],C=i[12],O=i[1],ee=i[5],T=i[9],q=i[13],z=i[2],te=i[6],he=i[10],K=i[14],W=i[3],Y=i[7],N=i[11],X=i[15];return a[0]=s*w+l*O+h*z+o*W,a[4]=s*b+l*ee+h*te+o*Y,a[8]=s*k+l*T+h*he+o*N,a[12]=s*C+l*q+h*K+o*X,a[1]=c*w+d*O+u*z+f*W,a[5]=c*b+d*ee+u*te+f*Y,a[9]=c*k+d*T+u*he+f*N,a[13]=c*C+d*q+u*K+f*X,a[2]=v*w+_*O+p*z+y*W,a[6]=v*b+_*ee+p*te+y*Y,a[10]=v*k+_*T+p*he+y*N,a[14]=v*C+_*q+p*K+y*X,a[3]=m*w+g*O+P*z+U*W,a[7]=m*b+g*ee+P*te+U*Y,a[11]=m*k+g*T+P*he+U*N,a[15]=m*C+g*q+P*K+U*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],l=e[5],h=e[9],o=e[13],c=e[2],d=e[6],u=e[10],f=e[14];return e[3]*(+a*h*d-i*o*d-a*l*u+n*o*u+i*l*f-n*h*f)+e[7]*(+t*h*f-t*o*u+a*s*u-i*s*f+i*o*c-a*h*c)+e[11]*(+t*o*d-t*l*f-a*s*d+n*s*f+a*l*c-n*o*c)+e[15]*(-i*l*c-t*h*d+t*l*u+i*s*d-n*s*u+n*h*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],h=e[6],o=e[7],c=e[8],d=e[9],u=e[10],f=e[11],v=e[12],_=e[13],p=e[14],y=e[15],m=d*p*o-_*u*o+_*h*f-l*p*f-d*h*y+l*u*y,g=v*u*o-c*p*o-v*h*f+s*p*f+c*h*y-s*u*y,P=c*_*o-v*d*o+v*l*f-s*_*f-c*l*y+s*d*y,U=v*d*h-c*_*h-v*l*u+s*_*u+c*l*p-s*d*p,w=t*m+n*g+i*P+a*U;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=m*b,e[1]=(_*u*a-d*p*a-_*i*f+n*p*f+d*i*y-n*u*y)*b,e[2]=(l*p*a-_*h*a+_*i*o-n*p*o-l*i*y+n*h*y)*b,e[3]=(d*h*a-l*u*a-d*i*o+n*u*o+l*i*f-n*h*f)*b,e[4]=g*b,e[5]=(c*p*a-v*u*a+v*i*f-t*p*f-c*i*y+t*u*y)*b,e[6]=(v*h*a-s*p*a-v*i*o+t*p*o+s*i*y-t*h*y)*b,e[7]=(s*u*a-c*h*a+c*i*o-t*u*o-s*i*f+t*h*f)*b,e[8]=P*b,e[9]=(v*d*a-c*_*a-v*n*f+t*_*f+c*n*y-t*d*y)*b,e[10]=(s*_*a-v*l*a+v*n*o-t*_*o-s*n*y+t*l*y)*b,e[11]=(c*l*a-s*d*a-c*n*o+t*d*o+s*n*f-t*l*f)*b,e[12]=U*b,e[13]=(c*_*i-v*d*i+v*n*u-t*_*u-c*n*p+t*d*p)*b,e[14]=(v*l*i-s*_*i-v*n*h+t*_*h+s*n*p-t*l*p)*b,e[15]=(s*d*i-c*l*i+c*n*h-t*d*h-s*n*u+t*l*u)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,l=e.y,h=e.z,o=a*s,c=a*l;return this.set(o*s+n,o*l-i*h,o*h+i*l,0,o*l+i*h,c*l+n,c*h-i*s,0,o*h-i*l,c*h+i*s,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,s=t._y,l=t._z,h=t._w,o=a+a,c=s+s,d=l+l,u=a*o,f=a*c,v=a*d,_=s*c,p=s*d,y=l*d,m=h*o,g=h*c,P=h*d,U=n.x,w=n.y,b=n.z;return i[0]=(1-(_+y))*U,i[1]=(f+P)*U,i[2]=(v-g)*U,i[3]=0,i[4]=(f-P)*w,i[5]=(1-(u+y))*w,i[6]=(p+m)*w,i[7]=0,i[8]=(v+g)*b,i[9]=(p-m)*b,i[10]=(1-(u+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=nn.set(i[0],i[1],i[2]).length();const s=nn.set(i[4],i[5],i[6]).length(),l=nn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],ft.copy(this);const h=1/a,o=1/s,c=1/l;return ft.elements[0]*=h,ft.elements[1]*=h,ft.elements[2]*=h,ft.elements[4]*=o,ft.elements[5]*=o,ft.elements[6]*=o,ft.elements[8]*=c,ft.elements[9]*=c,ft.elements[10]*=c,t.setFromRotationMatrix(ft),n.x=a,n.y=s,n.z=l,this}makePerspective(e,t,n,i,a,s,l=2e3){const h=this.elements,o=2*a/(t-e),c=2*a/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,v;if(l===2e3)f=-(s+a)/(s-a),v=-2*s*a/(s-a);else{if(l!==2001)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);f=-s/(s-a),v=-s*a/(s-a)}return h[0]=o,h[4]=0,h[8]=d,h[12]=0,h[1]=0,h[5]=c,h[9]=u,h[13]=0,h[2]=0,h[6]=0,h[10]=f,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,a,s,l=2e3){const h=this.elements,o=1/(t-e),c=1/(n-i),d=1/(s-a),u=(t+e)*o,f=(n+i)*c;let v,_;if(l===2e3)v=(s+a)*d,_=-2*d;else{if(l!==2001)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);v=a*d,_=-1*d}return h[0]=2*o,h[4]=0,h[8]=0,h[12]=-u,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-f,h[2]=0,h[6]=0,h[10]=_,h[14]=-v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const nn=new R,ft=new ze,Ka=new R(0,0,0),Za=new R(1,1,1),Pt=new R,Yn=new R,it=new R,Lr=new ze,Pr=new En;class fi{constructor(e=0,t=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],l=i[8],h=i[1],o=i[5],c=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(h,o)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,o),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pr.setFromEuler(this),this.setFromQuaternion(Pr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Ur{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}}let Ja=0;const Dr=new R,rn=new En,bt=new ze,Kn=new R,An=new R,Qa=new R,$a=new En,Nr=new R(1,0,0),Ir=new R(0,1,0),Or=new R(0,0,1),es={type:"added"},ts={type:"removed"};class Ke extends Zt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ja++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const e=new R,t=new fi,n=new En,i=new R(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Se}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rn.setFromAxisAngle(e,t),this.quaternion.multiply(rn),this}rotateOnWorldAxis(e,t){return rn.setFromAxisAngle(e,t),this.quaternion.premultiply(rn),this}rotateX(e){return this.rotateOnAxis(Nr,e)}rotateY(e){return this.rotateOnAxis(Ir,e)}rotateZ(e){return this.rotateOnAxis(Or,e)}translateOnAxis(e,t){return Dr.copy(e).applyQuaternion(this.quaternion),this.position.add(Dr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nr,e)}translateY(e){return this.translateOnAxis(Ir,e)}translateZ(e){return this.translateOnAxis(Or,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kn.copy(e):Kn.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),An.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bt.lookAt(An,Kn,this.up):bt.lookAt(Kn,An,this.up),this.quaternion.setFromRotationMatrix(bt),i&&(bt.extractRotation(i.matrixWorld),rn.setFromRotationMatrix(bt),this.quaternion.premultiply(rn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(es)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ts)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bt.multiply(e.parent.matrixWorld)),e.applyMatrix4(bt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,e,Qa),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,$a,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];a.matrixWorldAutoUpdate!==!0&&e!==!0||a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const l=i[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let o=0,c=h.length;o<c;o++){const d=h[o];a(e.shapes,d)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,o=this.material.length;h<o;h++)l.push(a(e.materials,this.material[h]));i.material=l}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];i.animations.push(a(e.animations,h))}}if(t){const l=s(e.geometries),h=s(e.materials),o=s(e.textures),c=s(e.images),d=s(e.shapes),u=s(e.skeletons),f=s(e.animations),v=s(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),o.length>0&&(n.textures=o),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=i,n;function s(l){const h=[];for(const o in l){const c=l[o];delete c.metadata,h.push(c)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ke.DEFAULT_UP=new R(0,1,0),Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mt=new R,At=new R,Oi=new R,wt=new R,an=new R,sn=new R,Fr=new R,Fi=new R,Bi=new R,zi=new R;let Zn=!1;class gt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mt.subVectors(e,t),i.cross(mt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){mt.subVectors(i,t),At.subVectors(n,t),Oi.subVectors(e,t);const s=mt.dot(mt),l=mt.dot(At),h=mt.dot(Oi),o=At.dot(At),c=At.dot(Oi),d=s*o-l*l;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(o*h-l*c)*u,v=(s*c-l*h)*u;return a.set(1-f-v,v,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wt)!==null&&wt.x>=0&&wt.y>=0&&wt.x+wt.y<=1}static getUV(e,t,n,i,a,s,l,h){return Zn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zn=!0),this.getInterpolation(e,t,n,i,a,s,l,h)}static getInterpolation(e,t,n,i,a,s,l,h){return this.getBarycoord(e,t,n,i,wt)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,wt.x),h.addScaledVector(s,wt.y),h.addScaledVector(l,wt.z),h)}static isFrontFacing(e,t,n,i){return mt.subVectors(n,t),At.subVectors(e,t),mt.cross(At).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mt.subVectors(this.c,this.b),At.subVectors(this.a,this.b),.5*mt.cross(At).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,a){return Zn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zn=!0),gt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}getInterpolation(e,t,n,i,a){return gt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let s,l;an.subVectors(i,n),sn.subVectors(a,n),Fi.subVectors(e,n);const h=an.dot(Fi),o=sn.dot(Fi);if(h<=0&&o<=0)return t.copy(n);Bi.subVectors(e,i);const c=an.dot(Bi),d=sn.dot(Bi);if(c>=0&&d<=c)return t.copy(i);const u=h*d-c*o;if(u<=0&&h>=0&&c<=0)return s=h/(h-c),t.copy(n).addScaledVector(an,s);zi.subVectors(e,a);const f=an.dot(zi),v=sn.dot(zi);if(v>=0&&f<=v)return t.copy(a);const _=f*o-h*v;if(_<=0&&o>=0&&v<=0)return l=o/(o-v),t.copy(n).addScaledVector(sn,l);const p=c*v-f*d;if(p<=0&&d-c>=0&&f-v>=0)return Fr.subVectors(a,i),l=(d-c)/(d-c+(f-v)),t.copy(i).addScaledVector(Fr,l);const y=1/(p+_+u);return s=_*y,l=u*y,t.copy(n).addScaledVector(an,s).addScaledVector(sn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Br={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ut={h:0,s:0,l:0},Jn={h:0,s:0,l:0};function Hi(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,De.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=De.workingColorSpace){return this.r=e,this.g=t,this.b=n,De.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=De.workingColorSpace){var a;if(e=(e%(a=1)+a)%a,t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=Hi(l,s,e+1/3),this.g=Hi(l,s,e),this.b=Hi(l,s,e-1/3)}return De.toWorkingColorSpace(this,i),this}setStyle(e,t=ke){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],l=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ke){const n=Br[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jt(e.r),this.g=Jt(e.g),this.b=Jt(e.b),this}copyLinearToSRGB(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ke){return De.fromWorkingColorSpace(Ye.copy(this),e),65536*Math.round($e(255*Ye.r,0,255))+256*Math.round($e(255*Ye.g,0,255))+Math.round($e(255*Ye.b,0,255))}getHexString(e=ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=De.workingColorSpace){De.fromWorkingColorSpace(Ye.copy(this),t);const n=Ye.r,i=Ye.g,a=Ye.b,s=Math.max(n,i,a),l=Math.min(n,i,a);let h,o;const c=(l+s)/2;if(l===s)h=0,o=0;else{const d=s-l;switch(o=c<=.5?d/(s+l):d/(2-s-l),s){case n:h=(i-a)/d+(i<a?6:0);break;case i:h=(a-n)/d+2;break;case a:h=(n-i)/d+4}h/=6}return e.h=h,e.s=o,e.l=c,e}getRGB(e,t=De.workingColorSpace){return De.fromWorkingColorSpace(Ye.copy(this),t),e.r=Ye.r,e.g=Ye.g,e.b=Ye.b,e}getStyle(e=ke){De.fromWorkingColorSpace(Ye.copy(this),e);const t=Ye.r,n=Ye.g,i=Ye.b;return e!==ke?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Ut),this.setHSL(Ut.h+e,Ut.s+t,Ut.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ut),e.getHSL(Jn);const n=Ti(Ut.h,Jn.h,t),i=Ti(Ut.s,Jn.s,t),a=Ti(Ut.l,Jn.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Pe;Pe.NAMES=Br;let ns=0;class Qn extends Zt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ns++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(a){const s=[];for(const l in a){const h=a[l];delete h.metadata,s.push(h)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zr extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Be=new R,$n=new Ue;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXY(t,$n.x,$n.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix3(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyMatrix4(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.applyNormalMatrix(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Be.fromBufferAttribute(this,t),Be.transformDirection(e),this.setXYZ(t,Be.x,Be.y,Be.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),a=et(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Hr extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gr extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let is=0;const ct=new ze,Gi=new Ke,on=new R,rt=new yn,wn=new yn,We=new R;class qt extends Zt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:is++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Er(e)?Gr:Hr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Se().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ct.makeRotationFromQuaternion(e),this.applyMatrix4(ct),this}rotateX(e){return ct.makeRotationX(e),this.applyMatrix4(ct),this}rotateY(e){return ct.makeRotationY(e),this.applyMatrix4(ct),this}rotateZ(e){return ct.makeRotationZ(e),this.applyMatrix4(ct),this}translate(e,t,n){return ct.makeTranslation(e,t,n),this.applyMatrix4(ct),this}scale(e,t,n){return ct.makeScale(e,t,n),this.applyMatrix4(ct),this}lookAt(e){return Gi.lookAt(e),Gi.updateMatrix(),this.applyMatrix4(Gi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(on).negate(),this.translate(on.x,on.y,on.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];rt.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,rt.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,rt.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(rt.min),this.boundingBox.expandByPoint(rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new R,1/0);if(e){const n=this.boundingSphere.center;if(rt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];wn.setFromBufferAttribute(l),this.morphTargetsRelative?(We.addVectors(rt.min,wn.min),rt.expandByPoint(We),We.addVectors(rt.max,wn.max),rt.expandByPoint(We)):(rt.expandByPoint(wn.min),rt.expandByPoint(wn.max))}rt.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)We.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(We));if(t)for(let a=0,s=t.length;a<s;a++){const l=t[a],h=this.morphTargetsRelative;for(let o=0,c=l.count;o<c;o++)We.fromBufferAttribute(l,o),h&&(on.fromBufferAttribute(e,o),We.add(on)),i=Math.max(i,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const n=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,l=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*l),4));const h=this.getAttribute("tangent").array,o=[],c=[];for(let O=0;O<l;O++)o[O]=new R,c[O]=new R;const d=new R,u=new R,f=new R,v=new Ue,_=new Ue,p=new Ue,y=new R,m=new R;function g(O,ee,T){d.fromArray(i,3*O),u.fromArray(i,3*ee),f.fromArray(i,3*T),v.fromArray(s,2*O),_.fromArray(s,2*ee),p.fromArray(s,2*T),u.sub(d),f.sub(d),_.sub(v),p.sub(v);const q=1/(_.x*p.y-p.x*_.y);isFinite(q)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(f,-_.y).multiplyScalar(q),m.copy(f).multiplyScalar(_.x).addScaledVector(u,-p.x).multiplyScalar(q),o[O].add(y),o[ee].add(y),o[T].add(y),c[O].add(m),c[ee].add(m),c[T].add(m))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let O=0,ee=P.length;O<ee;++O){const T=P[O],q=T.start;for(let z=q,te=q+T.count;z<te;z+=3)g(n[z+0],n[z+1],n[z+2])}const U=new R,w=new R,b=new R,k=new R;function C(O){b.fromArray(a,3*O),k.copy(b);const ee=o[O];U.copy(ee),U.sub(b.multiplyScalar(b.dot(ee))).normalize(),w.crossVectors(k,ee);const T=w.dot(c[O])<0?-1:1;h[4*O]=U.x,h[4*O+1]=U.y,h[4*O+2]=U.z,h[4*O+3]=T}for(let O=0,ee=P.length;O<ee;++O){const T=P[O],q=T.start;for(let z=q,te=q+T.count;z<te;z+=3)C(n[z+0]),C(n[z+1]),C(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,a=new R,s=new R,l=new R,h=new R,o=new R,c=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){const v=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,v),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),c.subVectors(s,a),d.subVectors(i,a),c.cross(d),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),l.add(c),h.add(c),o.add(c),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(p,o.x,o.y,o.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),c.subVectors(s,a),d.subVectors(i,a),c.cross(d),n.setXYZ(u+0,c.x,c.y,c.z),n.setXYZ(u+1,c.x,c.y,c.z),n.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)We.fromBufferAttribute(e,t),We.normalize(),e.setXYZ(t,We.x,We.y,We.z)}toNonIndexed(){function e(l,h){const o=l.array,c=l.itemSize,d=l.normalized,u=new o.constructor(h.length*c);let f=0,v=0;for(let _=0,p=h.length;_<p;_++){f=l.isInterleavedBufferAttribute?h[_]*l.data.stride+l.offset:h[_]*c;for(let y=0;y<c;y++)u[v++]=o[f++]}return new xt(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const l in i){const h=e(i[l],n);t.setAttribute(l,h)}const a=this.morphAttributes;for(const l in a){const h=[],o=a[l];for(let c=0,d=o.length;c<d;c++){const u=e(o[c],n);h.push(u)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,h=s.length;l<h;l++){const o=s[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const o in h)h[o]!==void 0&&(e[o]=h[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const o=n[h];e.data.attributes[h]=o.toJSON(e.data)}const i={};let a=!1;for(const h in this.morphAttributes){const o=this.morphAttributes[h],c=[];for(let d=0,u=o.length;d<u;d++){const f=o[d];c.push(f.toJSON(e.data))}c.length>0&&(i[h]=c,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const o in i){const c=i[o];this.setAttribute(o,c.clone(t))}const a=e.morphAttributes;for(const o in a){const c=[],d=a[o];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[o]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let o=0,c=s.length;o<c;o++){const d=s[o];this.addGroup(d.start,d.count,d.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vr=new ze,Vt=new Ya,ei=new Ui,kr=new R,ln=new R,cn=new R,hn=new R,Vi=new R,ti=new R,ni=new Ue,ii=new Ue,ri=new Ue,Wr=new R,Xr=new R,jr=new R,ai=new R,si=new R;class Dt extends Ke{constructor(e=new qt,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(a&&l){ti.set(0,0,0);for(let h=0,o=a.length;h<o;h++){const c=l[h],d=a[h];c!==0&&(Vi.fromBufferAttribute(d,e),s?ti.addScaledVector(Vi,c):ti.addScaledVector(Vi.sub(t),c))}t.add(ti)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ei.copy(n.boundingSphere),ei.applyMatrix4(a),Vt.copy(e.ray).recast(e.near),ei.containsPoint(Vt.origin)===!1&&(Vt.intersectSphere(ei,kr)===null||Vt.origin.distanceToSquared(kr)>(e.far-e.near)**2))return;Vr.copy(a).invert(),Vt.copy(e.ray).applyMatrix4(Vr),n.boundingBox!==null&&Vt.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Vt)}}_computeIntersections(e,t,n){let i;const a=this.geometry,s=this.material,l=a.index,h=a.attributes.position,o=a.attributes.uv,c=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(l!==null)if(Array.isArray(s))for(let v=0,_=u.length;v<_;v++){const p=u[v],y=s[p.materialIndex];for(let m=Math.max(p.start,f.start),g=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));m<g;m+=3)i=oi(this,y,e,n,o,c,d,l.getX(m),l.getX(m+1),l.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=p.materialIndex,t.push(i))}else for(let v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);v<_;v+=3)i=oi(this,s,e,n,o,c,d,l.getX(v),l.getX(v+1),l.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),t.push(i));else if(h!==void 0)if(Array.isArray(s))for(let v=0,_=u.length;v<_;v++){const p=u[v],y=s[p.materialIndex];for(let m=Math.max(p.start,f.start),g=Math.min(h.count,Math.min(p.start+p.count,f.start+f.count));m<g;m+=3)i=oi(this,y,e,n,o,c,d,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),i.face.materialIndex=p.materialIndex,t.push(i))}else for(let v=Math.max(0,f.start),_=Math.min(h.count,f.start+f.count);v<_;v+=3)i=oi(this,s,e,n,o,c,d,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}function oi(r,e,t,n,i,a,s,l,h,o){r.getVertexPosition(l,ln),r.getVertexPosition(h,cn),r.getVertexPosition(o,hn);const c=function(d,u,f,v,_,p,y,m){let g;if(g=u.side===1?v.intersectTriangle(y,p,_,!0,m):v.intersectTriangle(_,p,y,u.side===0,m),g===null)return null;si.copy(m),si.applyMatrix4(d.matrixWorld);const P=f.ray.origin.distanceTo(si);return P<f.near||P>f.far?null:{distance:P,point:si.clone(),object:d}}(r,e,t,n,ln,cn,hn,ai);if(c){i&&(ni.fromBufferAttribute(i,l),ii.fromBufferAttribute(i,h),ri.fromBufferAttribute(i,o),c.uv=gt.getInterpolation(ai,ln,cn,hn,ni,ii,ri,new Ue)),a&&(ni.fromBufferAttribute(a,l),ii.fromBufferAttribute(a,h),ri.fromBufferAttribute(a,o),c.uv1=gt.getInterpolation(ai,ln,cn,hn,ni,ii,ri,new Ue),c.uv2=c.uv1),s&&(Wr.fromBufferAttribute(s,l),Xr.fromBufferAttribute(s,h),jr.fromBufferAttribute(s,o),c.normal=gt.getInterpolation(ai,ln,cn,hn,Wr,Xr,jr,new R),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a:l,b:h,c:o,normal:new R,materialIndex:0};gt.getNormal(ln,cn,hn,d.normal),c.face=d}return c}class Ln extends qt{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const l=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const h=[],o=[],c=[],d=[];let u=0,f=0;function v(_,p,y,m,g,P,U,w,b,k,C){const O=P/b,ee=U/k,T=P/2,q=U/2,z=w/2,te=b+1,he=k+1;let K=0,W=0;const Y=new R;for(let N=0;N<he;N++){const X=N*ee-q;for(let se=0;se<te;se++){const x=se*O-T;Y[_]=x*m,Y[p]=X*g,Y[y]=z,o.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[y]=w>0?1:-1,c.push(Y.x,Y.y,Y.z),d.push(se/b),d.push(1-N/k),K+=1}}for(let N=0;N<k;N++)for(let X=0;X<b;X++){const se=u+X+te*N,x=u+X+te*(N+1),M=u+(X+1)+te*(N+1),L=u+(X+1)+te*N;h.push(se,x,L),h.push(x,M,L),W+=6}l.addGroup(f,W,C),f+=W,u+=K}v("z","y","x",-1,-1,n,t,e,s,a,0),v("z","y","x",1,-1,n,t,-e,s,a,1),v("x","z","y",1,1,e,n,t,i,s,2),v("x","z","y",1,-1,e,n,-t,i,s,3),v("x","y","z",1,-1,e,t,n,i,a,4),v("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(h),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function un(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Je(r){const e={};for(let t=0;t<r.length;t++){const n=un(r[t]);for(const i in n)e[i]=n[i]}return e}function qr(r){return r.getRenderTarget()===null?r.outputColorSpace:De.workingColorSpace}const rs={clone:un,merge:Je};class kt extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=un(e.uniforms),this.uniformsGroups=function(t){const n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yr extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class at extends Yr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*yi*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*Ei*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*yi*Math.atan(Math.tan(.5*Ei*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*Ei*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const h=s.fullWidth,o=s.fullHeight;a+=s.offsetX*i/h,t-=s.offsetY*n/o,i*=s.width/h,n*=s.height/o}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dn=-90;class as extends Ke{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new at(dn,1,e,t);i.layers=this.layers,this.add(i);const a=new at(dn,1,e,t);a.layers=this.layers,this.add(a);const s=new at(dn,1,e,t);s.layers=this.layers,this.add(s);const l=new at(dn,1,e,t);l.layers=this.layers,this.add(l);const h=new at(dn,1,e,t);h.layers=this.layers,this.add(h);const o=new at(dn,1,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,s,l,h]=t;for(const o of t)this.remove(o);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else{if(e!==2001)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1)}for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,l,h,o,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,h),e.setRenderTarget(n,4,i),e.render(t,o),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(d,u,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Kr extends tt{constructor(e,t,n,i,a,s,l,h,o,c){super(e=e!==void 0?e:[],t=t!==void 0?t:301,n,i,a,s,l,h,o,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ss extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Sn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===3001?ke:vt),this.texture=new Kr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ln(5,5,5),a=new kt({name:"CubemapFromEquirect",uniforms:un(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;const s=new Dt(i,a),l=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new as(1,10,this).update(e,s),t.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}}const ki=new R,os=new R,ls=new Se;class Wt{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ki.subVectors(n,t).cross(os.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ki),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ls.getNormalMatrix(e),i=this.coplanarPoint(ki).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xt=new Ui,li=new R;class Wi{constructor(e=new Wt,t=new Wt,n=new Wt,i=new Wt,a=new Wt,s=new Wt){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(a),l[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,i=e.elements,a=i[0],s=i[1],l=i[2],h=i[3],o=i[4],c=i[5],d=i[6],u=i[7],f=i[8],v=i[9],_=i[10],p=i[11],y=i[12],m=i[13],g=i[14],P=i[15];if(n[0].setComponents(h-a,u-o,p-f,P-y).normalize(),n[1].setComponents(h+a,u+o,p+f,P+y).normalize(),n[2].setComponents(h+s,u+c,p+v,P+m).normalize(),n[3].setComponents(h-s,u-c,p-v,P-m).normalize(),n[4].setComponents(h-l,u-d,p-_,P-g).normalize(),t===2e3)n[5].setComponents(h+l,u+d,p+_,P+g).normalize();else{if(t!==2001)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(l,d,_,g).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xt.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xt.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xt)}intersectsSprite(e){return Xt.center.set(0,0,0),Xt.radius=.7071067811865476,Xt.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xt)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(li.x=i.normal.x>0?e.max.x:e.min.x,li.y=i.normal.y>0?e.max.y:e.min.y,li.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(li)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zr(){let r=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function cs(r,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const a=n.get(i);a&&(r.deleteBuffer(a.buffer),n.delete(i))},update:function(i,a){if(i.isGLBufferAttribute){const l=n.get(i);return void((!l||l.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const s=n.get(i);if(s===void 0)n.set(i,function(l,h){const o=l.array,c=l.usage,d=o.byteLength,u=r.createBuffer();let f;if(r.bindBuffer(h,u),r.bufferData(h,o,c),l.onUploadCallback(),o instanceof Float32Array)f=r.FLOAT;else if(o instanceof Uint16Array)if(l.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");f=r.HALF_FLOAT}else f=r.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=r.SHORT;else if(o instanceof Uint32Array)f=r.UNSIGNED_INT;else if(o instanceof Int32Array)f=r.INT;else if(o instanceof Int8Array)f=r.BYTE;else if(o instanceof Uint8Array)f=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);f=r.UNSIGNED_BYTE}return{buffer:u,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:d}}(i,a));else if(s.version<i.version){if(s.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(l,h,o){const c=h.array,d=h._updateRange,u=h.updateRanges;if(r.bindBuffer(o,l),d.count===-1&&u.length===0&&r.bufferSubData(o,0,c),u.length!==0){for(let f=0,v=u.length;f<v;f++){const _=u[f];t?r.bufferSubData(o,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count):r.bufferSubData(o,_.start*c.BYTES_PER_ELEMENT,c.subarray(_.start,_.start+_.count))}h.clearUpdateRanges()}d.count!==-1&&(t?r.bufferSubData(o,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):r.bufferSubData(o,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()})(s.buffer,i,a),s.version=i.version}}}}class nr extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,s=t/2,l=Math.floor(n),h=Math.floor(i),o=l+1,c=h+1,d=e/l,u=t/h,f=[],v=[],_=[],p=[];for(let y=0;y<c;y++){const m=y*u-s;for(let g=0;g<o;g++){const P=g*d-a;v.push(P,-m,0),_.push(0,0,1),p.push(g/l),p.push(1-y/h)}}for(let y=0;y<h;y++)for(let m=0;m<l;m++){const g=m+o*y,P=m+o*(y+1),U=m+1+o*(y+1),w=m+1+o*y;f.push(g,P,w),f.push(P,U,w)}this.setIndex(f),this.setAttribute("position",new Gt(v,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.widthSegments,e.heightSegments)}}const xe={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
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
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
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
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},ie={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Mt={basic:{uniforms:Je([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Je([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Je([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Je([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Je([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Je([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Je([ie.points,ie.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Je([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Je([ie.common,ie.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Je([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Je([ie.sprite,ie.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Je([ie.common,ie.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Je([ie.lights,ie.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Mt.physical={uniforms:Je([Mt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const ci={r:0,b:0,g:0};function hs(r,e,t,n,i,a,s){const l=new Pe(0);let h,o,c=a===!0?0:1,d=null,u=0,f=null;function v(_,p){_.getRGB(ci,qr(r)),n.buffers.color.setClear(ci.r,ci.g,ci.b,p,s)}return{getClearColor:function(){return l},setClearColor:function(_,p=1){l.set(_),c=p,v(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,v(l,c)},render:function(_,p){let y=!1,m=p.isScene===!0?p.background:null;m&&m.isTexture&&(m=(p.backgroundBlurriness>0?t:e).get(m)),m===null?v(l,c):m&&m.isColor&&(v(m,1),y=!0);const g=r.xr.getEnvironmentBlendMode();g==="additive"?n.buffers.color.setClear(0,0,0,1,s):g==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===306)?(o===void 0&&(o=new Dt(new Ln(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:un(Mt.backgroundCube.uniforms),vertexShader:Mt.backgroundCube.vertexShader,fragmentShader:Mt.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(P,U,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=m,o.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,o.material.toneMapped=De.getTransfer(m.colorSpace)!==Ne,d===m&&u===m.version&&f===r.toneMapping||(o.material.needsUpdate=!0,d=m,u=m.version,f=r.toneMapping),o.layers.enableAll(),_.unshift(o,o.geometry,o.material,0,0,null)):m&&m.isTexture&&(h===void 0&&(h=new Dt(new nr(2,2),new kt({name:"BackgroundMaterial",uniforms:un(Mt.background.uniforms),vertexShader:Mt.background.vertexShader,fragmentShader:Mt.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=m,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=De.getTransfer(m.colorSpace)!==Ne,m.matrixAutoUpdate===!0&&m.updateMatrix(),h.material.uniforms.uvTransform.value.copy(m.matrix),d===m&&u===m.version&&f===r.toneMapping||(h.material.needsUpdate=!0,d=m,u=m.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}}}function us(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,l={},h=f(null);let o=h,c=!1;function d(U){return n.isWebGL2?r.bindVertexArray(U):a.bindVertexArrayOES(U)}function u(U){return n.isWebGL2?r.deleteVertexArray(U):a.deleteVertexArrayOES(U)}function f(U){const w=[],b=[],k=[];for(let C=0;C<i;C++)w[C]=0,b[C]=0,k[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:b,attributeDivisors:k,object:U,attributes:{},index:null}}function v(){const U=o.newAttributes;for(let w=0,b=U.length;w<b;w++)U[w]=0}function _(U){p(U,0)}function p(U,w){const b=o.newAttributes,k=o.enabledAttributes,C=o.attributeDivisors;b[U]=1,k[U]===0&&(r.enableVertexAttribArray(U),k[U]=1),C[U]!==w&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,w),C[U]=w)}function y(){const U=o.newAttributes,w=o.enabledAttributes;for(let b=0,k=w.length;b<k;b++)w[b]!==U[b]&&(r.disableVertexAttribArray(b),w[b]=0)}function m(U,w,b,k,C,O,ee){ee===!0?r.vertexAttribIPointer(U,w,b,C,O):r.vertexAttribPointer(U,w,b,k,C,O)}function g(){P(),c=!0,o!==h&&(o=h,d(o.object))}function P(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:function(U,w,b,k,C){let O=!1;if(s){const ee=function(T,q,z){const te=z.wireframe===!0;let he=l[T.id];he===void 0&&(he={},l[T.id]=he);let K=he[q.id];K===void 0&&(K={},he[q.id]=K);let W=K[te];return W===void 0&&(W=f(n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()),K[te]=W),W}(k,b,w);o!==ee&&(o=ee,d(o.object)),O=function(T,q,z,te){const he=o.attributes,K=q.attributes;let W=0;const Y=z.getAttributes();for(const N in Y)if(Y[N].location>=0){const X=he[N];let se=K[N];if(se===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(se=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(se=T.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;W++}return o.attributesNum!==W||o.index!==te}(U,k,b,C),O&&function(T,q,z,te){const he={},K=q.attributes;let W=0;const Y=z.getAttributes();for(const N in Y)if(Y[N].location>=0){let X=K[N];X===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(X=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(X=T.instanceColor));const se={};se.attribute=X,X&&X.data&&(se.data=X.data),he[N]=se,W++}o.attributes=he,o.attributesNum=W,o.index=te}(U,k,b,C)}else{const ee=w.wireframe===!0;o.geometry===k.id&&o.program===b.id&&o.wireframe===ee||(o.geometry=k.id,o.program=b.id,o.wireframe=ee,O=!0)}C!==null&&t.update(C,r.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,function(ee,T,q,z){if(n.isWebGL2===!1&&(ee.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const te=z.attributes,he=q.getAttributes(),K=T.defaultAttributeValues;for(const W in he){const Y=he[W];if(Y.location>=0){let N=te[W];if(N===void 0&&(W==="instanceMatrix"&&ee.instanceMatrix&&(N=ee.instanceMatrix),W==="instanceColor"&&ee.instanceColor&&(N=ee.instanceColor)),N!==void 0){const X=N.normalized,se=N.itemSize,x=t.get(N);if(x===void 0)continue;const M=x.buffer,L=x.type,H=x.bytesPerElement,A=n.isWebGL2===!0&&(L===r.INT||L===r.UNSIGNED_INT||N.gpuType===1013);if(N.isInterleavedBufferAttribute){const G=N.data,J=G.stride,Z=N.offset;if(G.isInstancedInterleavedBuffer){for(let ne=0;ne<Y.locationSize;ne++)p(Y.location+ne,G.meshPerAttribute);ee.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ne=0;ne<Y.locationSize;ne++)_(Y.location+ne);r.bindBuffer(r.ARRAY_BUFFER,M);for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne,se/Y.locationSize,L,X,J*H,(Z+se/Y.locationSize*ne)*H,A)}else{if(N.isInstancedBufferAttribute){for(let G=0;G<Y.locationSize;G++)p(Y.location+G,N.meshPerAttribute);ee.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let G=0;G<Y.locationSize;G++)_(Y.location+G);r.bindBuffer(r.ARRAY_BUFFER,M);for(let G=0;G<Y.locationSize;G++)m(Y.location+G,se/Y.locationSize,L,X,se*H,se/Y.locationSize*G*H,A)}}else if(K!==void 0){const X=K[W];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(Y.location,X);break;case 3:r.vertexAttrib3fv(Y.location,X);break;case 4:r.vertexAttrib4fv(Y.location,X);break;default:r.vertexAttrib1fv(Y.location,X)}}}}y()}(U,w,b,k),C!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))},reset:g,resetDefaultState:P,dispose:function(){g();for(const U in l){const w=l[U];for(const b in w){const k=w[b];for(const C in k)u(k[C].object),delete k[C];delete w[b]}delete l[U]}},releaseStatesOfGeometry:function(U){if(l[U.id]===void 0)return;const w=l[U.id];for(const b in w){const k=w[b];for(const C in k)u(k[C].object),delete k[C];delete w[b]}delete l[U.id]},releaseStatesOfProgram:function(U){for(const w in l){const b=l[w];if(b[U.id]===void 0)continue;const k=b[U.id];for(const C in k)u(k[C].object),delete k[C];delete b[U.id]}},initAttributes:v,enableAttribute:_,disableUnusedAttributes:y}}function ds(r,e,t,n){const i=n.isWebGL2;let a;this.setMode=function(s){a=s},this.render=function(s,l){r.drawArrays(a,s,l),t.update(l,a,1)},this.renderInstances=function(s,l,h){if(h===0)return;let o,c;if(i)o=r,c="drawArraysInstanced";else if(o=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",o===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");o[c](a,s,l,h),t.update(l,a,h)},this.renderMultiDraw=function(s,l,h){if(h===0)return;const o=e.get("WEBGL_multi_draw");if(o===null)for(let c=0;c<h;c++)this.render(s[c],l[c]);else{o.multiDrawArraysWEBGL(a,s,0,l,0,h);let c=0;for(let d=0;d<h;d++)c+=l[d];t.update(c,a,1)}}}function ps(r,e,t){let n;function i(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=i(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const h=a||e.has("WEBGL_draw_buffers"),o=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_TEXTURE_SIZE),f=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,g=a||e.has("OES_texture_float");return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:s,logarithmicDepthBuffer:o,maxTextures:c,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:f,maxAttributes:v,maxVertexUniforms:_,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:m,floatFragmentTextures:g,floatVertexTextures:m&&g,maxSamples:a?r.getParameter(r.MAX_SAMPLES):0}}function fs(r){const e=this;let t=null,n=0,i=!1,a=!1;const s=new Wt,l=new Se,h={value:null,needsUpdate:!1};function o(c,d,u,f){const v=c!==null?c.length:0;let _=null;if(v!==0){if(_=h.value,f!==!0||_===null){const p=u+4*v,y=d.matrixWorldInverse;l.getNormalMatrix(y),(_===null||_.length<p)&&(_=new Float32Array(p));for(let m=0,g=u;m!==v;++m,g+=4)s.copy(c[m]).applyMatrix4(y,l),s.normal.toArray(_,g),_[g+3]=s.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,_}this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const u=c.length!==0||d||n!==0||i;return i=d,n=c.length,u},this.beginShadows=function(){a=!0,o(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(c,d){t=o(c,d,0)},this.setState=function(c,d,u){const f=c.clippingPlanes,v=c.clipIntersection,_=c.clipShadows,p=r.get(c);if(!i||f===null||f.length===0||a&&!_)a?o(null):function(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{const y=a?0:n,m=4*y;let g=p.clippingState||null;h.value=g,g=o(f,d,m,u);for(let P=0;P!==m;++P)g[P]=t[P];p.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}}}function ms(r){let e=new WeakMap;function t(i,a){return a===303?i.mapping=301:a===304&&(i.mapping=302),i}function n(i){const a=i.target;a.removeEventListener("dispose",n);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(i){if(i&&i.isTexture){const a=i.mapping;if(a===303||a===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{const s=i.image;if(s&&s.height>0){const l=new ss(s.height/2);return l.fromEquirectangularTexture(r,i),e.set(i,l),i.addEventListener("dispose",n),t(l.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}class Jr extends Yr{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,l=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=o*this.view.offsetX,s=a+o*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(a,s,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=[.125,.215,.35,.446,.526,.582],Rn=20,Xi=new Jr,$r=new Pe;let ji=null,qi=0,Yi=0;const jt=(1+Math.sqrt(5))/2,pn=1/jt,ea=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,jt,pn),new R(0,jt,-pn),new R(pn,0,jt),new R(-pn,0,jt),new R(jt,pn,0),new R(-jt,pn,0)];class ta{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ji=this._renderer.getRenderTarget(),qi=this._renderer.getActiveCubeFace(),Yi=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ji,qi,Yi),e.scissorTest=!1,hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ji=this._renderer.getRenderTarget(),qi=this._renderer.getActiveCubeFace(),Yi=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:Et,depthBuffer:!1},i=na(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){const l=[],h=[],o=[];let c=s;const d=s-4+1+Qr.length;for(let u=0;u<d;u++){const f=Math.pow(2,c);h.push(f);let v=1/f;u>s-4?v=Qr[u-s+4-1]:u===0&&(v=0),o.push(v);const _=1/(f-2),p=-_,y=1+_,m=[p,p,y,p,y,y,p,p,y,y,p,y],g=6,P=6,U=3,w=2,b=1,k=new Float32Array(U*P*g),C=new Float32Array(w*P*g),O=new Float32Array(b*P*g);for(let T=0;T<g;T++){const q=T%3*2/3-1,z=T>2?0:-1,te=[q,z,0,q+2/3,z,0,q+2/3,z+1,0,q,z,0,q+2/3,z+1,0,q,z+1,0];k.set(te,U*P*T),C.set(m,w*P*T);const he=[T,T,T,T,T,T];O.set(he,b*P*T)}const ee=new qt;ee.setAttribute("position",new xt(k,U)),ee.setAttribute("uv",new xt(C,w)),ee.setAttribute("faceIndex",new xt(O,b)),l.push(ee),c>4&&c--}return{lodPlanes:l,sizeLods:h,sigmas:o}}(a)),this._blurMaterial=function(s,l,h){const o=new Float32Array(Rn),c=new R(0,1,0);return new kt({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/h,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Ki(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(a,e,t)}return i}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Xi)}_sceneToCubeUV(e,t,n,i){const a=new at(90,1,t,n),s=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,o=h.autoClear,c=h.toneMapping;h.getClearColor($r),h.toneMapping=0,h.autoClear=!1;const d=new zr({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new Dt(new Ln,d);let f=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,f=!0):(d.color.copy($r),f=!0);for(let _=0;_<6;_++){const p=_%3;p===0?(a.up.set(0,s[_],0),a.lookAt(l[_],0,0)):p===1?(a.up.set(0,0,s[_]),a.lookAt(0,l[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,l[_]));const y=this._cubeSize;hi(i,p*y,_>2?y:0,y,y),h.setRenderTarget(i),f&&h.render(u,a),h.render(e,a)}u.geometry.dispose(),u.material.dispose(),h.toneMapping=c,h.autoClear=o,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===301||e.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ia());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new Dt(this._lodPlanes[0],a);a.uniforms.envMap.value=e;const l=this._cubeSize;hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Xi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=ea[(i-1)%ea.length];this._blur(e,i-1,i,a,s)}t.autoClear=n}_blur(e,t,n,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",a),this._halfBlur(s,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,s,l){const h=this._renderer,o=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=new Dt(this._lodPlanes[i],o),d=o.uniforms,u=this._sizeLods[n]-1,f=isFinite(a)?Math.PI/(2*u):2*Math.PI/39,v=a/f,_=isFinite(a)?1+Math.floor(3*v):Rn;_>Rn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);const p=[];let y=0;for(let P=0;P<Rn;++P){const U=P/v,w=Math.exp(-U*U/2);p.push(w),P===0?y+=w:P<_&&(y+=2*w)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=s==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:m}=this;d.dTheta.value=f,d.mipInt.value=m-n;const g=this._sizeLods[i];hi(t,3*g*(i>m-4?i-m+4:0),4*(this._cubeSize-g),3*g,2*g),h.setRenderTarget(t),h.render(c,Xi)}}function na(r,e,t){const n=new Bt(r,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hi(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ia(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ki(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ra(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ki(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ki(){return`

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
	`}function gs(r){let e=new WeakMap,t=null;function n(i){const a=i.target;a.removeEventListener("dispose",n);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(i){if(i&&i.isTexture){const a=i.mapping,s=a===303||a===304,l=a===301||a===302;if(s||l){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let h=e.get(i);return t===null&&(t=new ta(r)),h=s?t.fromEquirectangular(i,h):t.fromCubemap(i,h),e.set(i,h),h.texture}if(e.has(i))return e.get(i).texture;{const h=i.image;if(s&&h&&h.height>0||l&&h&&function(o){let c=0;const d=6;for(let u=0;u<d;u++)o[u]!==void 0&&c++;return c===d}(h)){t===null&&(t=new ta(r));const o=s?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,o),i.addEventListener("dispose",n),o.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function _s(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vs(r,e,t,n){const i={},a=new WeakMap;function s(h){const o=h.target;o.index!==null&&e.remove(o.index);for(const d in o.attributes)e.remove(o.attributes[d]);for(const d in o.morphAttributes){const u=o.morphAttributes[d];for(let f=0,v=u.length;f<v;f++)e.remove(u[f])}o.removeEventListener("dispose",s),delete i[o.id];const c=a.get(o);c&&(e.remove(c),a.delete(o)),n.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,t.memory.geometries--}function l(h){const o=[],c=h.index,d=h.attributes.position;let u=0;if(c!==null){const _=c.array;u=c.version;for(let p=0,y=_.length;p<y;p+=3){const m=_[p+0],g=_[p+1],P=_[p+2];o.push(m,g,g,P,P,m)}}else{if(d===void 0)return;{const _=d.array;u=d.version;for(let p=0,y=_.length/3-1;p<y;p+=3){const m=p+0,g=p+1,P=p+2;o.push(m,g,g,P,P,m)}}}const f=new(Er(o)?Gr:Hr)(o,1);f.version=u;const v=a.get(h);v&&e.remove(v),a.set(h,f)}return{get:function(h,o){return i[o.id]===!0||(o.addEventListener("dispose",s),i[o.id]=!0,t.memory.geometries++),o},update:function(h){const o=h.attributes;for(const d in o)e.update(o[d],r.ARRAY_BUFFER);const c=h.morphAttributes;for(const d in c){const u=c[d];for(let f=0,v=u.length;f<v;f++)e.update(u[f],r.ARRAY_BUFFER)}},getWireframeAttribute:function(h){const o=a.get(h);if(o){const c=h.index;c!==null&&o.version<c.version&&l(h)}else l(h);return a.get(h)}}}function xs(r,e,t,n){const i=n.isWebGL2;let a,s,l;this.setMode=function(h){a=h},this.setIndex=function(h){s=h.type,l=h.bytesPerElement},this.render=function(h,o){r.drawElements(a,o,s,h*l),t.update(o,a,1)},this.renderInstances=function(h,o,c){if(c===0)return;let d,u;if(i)d=r,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](a,o,s,h*l,c),t.update(o,a,c)},this.renderMultiDraw=function(h,o,c){if(c===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<c;u++)this.render(h[u]/l,o[u]);else{d.multiDrawElementsWEBGL(a,o,0,s,h,0,c);let u=0;for(let f=0;f<c;f++)u+=o[f];t.update(u,a,1)}}}function Ms(r){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Ss(r,e){return r[0]-e[0]}function Es(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ys(r,e,t){const n={},i=new Float32Array(8),a=new WeakMap,s=new Ie,l=[];for(let h=0;h<8;h++)l[h]=[h,0];return{update:function(h,o,c){const d=h.morphTargetInfluences;if(e.isWebGL2===!0){const u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let v=a.get(o);if(v===void 0||v.count!==f){let q=function(){ee.dispose(),a.delete(o),o.removeEventListener("dispose",q)};v!==void 0&&v.texture.dispose();const y=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,P=o.morphAttributes.position||[],U=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let b=0;y===!0&&(b=1),m===!0&&(b=2),g===!0&&(b=3);let k=o.attributes.position.count*b,C=1;k>e.maxTextureSize&&(C=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const O=new Float32Array(k*C*4*f),ee=new Rr(O,k,C,f);ee.type=1015,ee.needsUpdate=!0;const T=4*b;for(let z=0;z<f;z++){const te=P[z],he=U[z],K=w[z],W=k*C*4*z;for(let Y=0;Y<te.count;Y++){const N=Y*T;y===!0&&(s.fromBufferAttribute(te,Y),O[W+N+0]=s.x,O[W+N+1]=s.y,O[W+N+2]=s.z,O[W+N+3]=0),m===!0&&(s.fromBufferAttribute(he,Y),O[W+N+4]=s.x,O[W+N+5]=s.y,O[W+N+6]=s.z,O[W+N+7]=0),g===!0&&(s.fromBufferAttribute(K,Y),O[W+N+8]=s.x,O[W+N+9]=s.y,O[W+N+10]=s.z,O[W+N+11]=K.itemSize===4?s.w:1)}}v={count:f,texture:ee,size:new Ue(k,C)},a.set(o,v),o.addEventListener("dispose",q)}let _=0;for(let y=0;y<d.length;y++)_+=d[y];const p=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(r,"morphTargetBaseInfluence",p),c.getUniforms().setValue(r,"morphTargetInfluences",d),c.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const u=d===void 0?0:d.length;let f=n[o.id];if(f===void 0||f.length!==u){f=[];for(let m=0;m<u;m++)f[m]=[m,0];n[o.id]=f}for(let m=0;m<u;m++){const g=f[m];g[0]=m,g[1]=d[m]}f.sort(Es);for(let m=0;m<8;m++)m<u&&f[m][1]?(l[m][0]=f[m][0],l[m][1]=f[m][1]):(l[m][0]=Number.MAX_SAFE_INTEGER,l[m][1]=0);l.sort(Ss);const v=o.morphAttributes.position,_=o.morphAttributes.normal;let p=0;for(let m=0;m<8;m++){const g=l[m],P=g[0],U=g[1];P!==Number.MAX_SAFE_INTEGER&&U?(v&&o.getAttribute("morphTarget"+m)!==v[P]&&o.setAttribute("morphTarget"+m,v[P]),_&&o.getAttribute("morphNormal"+m)!==_[P]&&o.setAttribute("morphNormal"+m,_[P]),i[m]=U,p+=U):(v&&o.hasAttribute("morphTarget"+m)===!0&&o.deleteAttribute("morphTarget"+m),_&&o.hasAttribute("morphNormal"+m)===!0&&o.deleteAttribute("morphNormal"+m),i[m]=0)}const y=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",y),c.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Ts(r,e,t,n){let i=new WeakMap;function a(s){const l=s.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(s){const l=n.render.frame,h=s.geometry,o=e.get(s,h);if(i.get(o)!==l&&(e.update(o),i.set(o,l)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),i.get(s)!==l&&(t.update(s.instanceMatrix,r.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,r.ARRAY_BUFFER),i.set(s,l))),s.isSkinnedMesh){const c=s.skeleton;i.get(c)!==l&&(c.update(),i.set(c,l))}return o},dispose:function(){i=new WeakMap}}}class aa extends tt{constructor(e,t,n,i,a,s,l,h,o,c){if((c=c!==void 0?c:1026)!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===1026&&(n=1014),n===void 0&&c===1027&&(n=1020),super(null,i,a,s,l,h,c,n,o),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:1003,this.minFilter=h!==void 0?h:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sa=new tt,oa=new aa(1,1);oa.compareFunction=515;const la=new Rr,ca=new ja,ha=new Kr,ua=[],da=[],pa=new Float32Array(16),fa=new Float32Array(9),ma=new Float32Array(4);function fn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let a=ua[i];if(a===void 0&&(a=new Float32Array(i),ua[i]=a),e!==0){n.toArray(a,0);for(let s=1,l=0;s!==e;++s)l+=t,r[s].toArray(a,l)}return a}function Ge(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ve(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ui(r,e){let t=da[e];t===void 0&&(t=new Int32Array(e),da[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function bs(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function As(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ge(t,e))return;r.uniform2fv(this.addr,e),Ve(t,e)}}function ws(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ge(t,e))return;r.uniform3fv(this.addr,e),Ve(t,e)}}function Rs(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ge(t,e))return;r.uniform4fv(this.addr,e),Ve(t,e)}}function Cs(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ge(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ve(t,e)}else{if(Ge(t,n))return;ma.set(n),r.uniformMatrix2fv(this.addr,!1,ma),Ve(t,n)}}function Ls(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ge(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ve(t,e)}else{if(Ge(t,n))return;fa.set(n),r.uniformMatrix3fv(this.addr,!1,fa),Ve(t,n)}}function Ps(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ge(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ve(t,e)}else{if(Ge(t,n))return;pa.set(n),r.uniformMatrix4fv(this.addr,!1,pa),Ve(t,n)}}function Us(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Ds(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ge(t,e))return;r.uniform2iv(this.addr,e),Ve(t,e)}}function Ns(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ge(t,e))return;r.uniform3iv(this.addr,e),Ve(t,e)}}function Is(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ge(t,e))return;r.uniform4iv(this.addr,e),Ve(t,e)}}function Os(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Fs(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ge(t,e))return;r.uniform2uiv(this.addr,e),Ve(t,e)}}function Bs(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ge(t,e))return;r.uniform3uiv(this.addr,e),Ve(t,e)}}function zs(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ge(t,e))return;r.uniform4uiv(this.addr,e),Ve(t,e)}}function Hs(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const a=this.type===r.SAMPLER_2D_SHADOW?oa:sa;t.setTexture2D(e||a,i)}function Gs(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ca,i)}function Vs(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ha,i)}function ks(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||la,i)}function Ws(r,e){r.uniform1fv(this.addr,e)}function Xs(r,e){const t=fn(e,this.size,2);r.uniform2fv(this.addr,t)}function js(r,e){const t=fn(e,this.size,3);r.uniform3fv(this.addr,t)}function qs(r,e){const t=fn(e,this.size,4);r.uniform4fv(this.addr,t)}function Ys(r,e){const t=fn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ks(r,e){const t=fn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Zs(r,e){const t=fn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Js(r,e){r.uniform1iv(this.addr,e)}function Qs(r,e){r.uniform2iv(this.addr,e)}function $s(r,e){r.uniform3iv(this.addr,e)}function eo(r,e){r.uniform4iv(this.addr,e)}function to(r,e){r.uniform1uiv(this.addr,e)}function no(r,e){r.uniform2uiv(this.addr,e)}function io(r,e){r.uniform3uiv(this.addr,e)}function ro(r,e){r.uniform4uiv(this.addr,e)}function ao(r,e,t){const n=this.cache,i=e.length,a=ui(t,i);Ge(n,a)||(r.uniform1iv(this.addr,a),Ve(n,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||sa,a[s])}function so(r,e,t){const n=this.cache,i=e.length,a=ui(t,i);Ge(n,a)||(r.uniform1iv(this.addr,a),Ve(n,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||ca,a[s])}function oo(r,e,t){const n=this.cache,i=e.length,a=ui(t,i);Ge(n,a)||(r.uniform1iv(this.addr,a),Ve(n,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||ha,a[s])}function lo(r,e,t){const n=this.cache,i=e.length,a=ui(t,i);Ge(n,a)||(r.uniform1iv(this.addr,a),Ve(n,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||la,a[s])}class co{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return bs;case 35664:return As;case 35665:return ws;case 35666:return Rs;case 35674:return Cs;case 35675:return Ls;case 35676:return Ps;case 5124:case 35670:return Us;case 35667:case 35671:return Ds;case 35668:case 35672:return Ns;case 35669:case 35673:return Is;case 5125:return Os;case 36294:return Fs;case 36295:return Bs;case 36296:return zs;case 35678:case 36198:case 36298:case 36306:case 35682:return Hs;case 35679:case 36299:case 36307:return Gs;case 35680:case 36300:case 36308:case 36293:return Vs;case 36289:case 36303:case 36311:case 36292:return ks}}(t.type)}}class ho{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return Ws;case 35664:return Xs;case 35665:return js;case 35666:return qs;case 35674:return Ys;case 35675:return Ks;case 35676:return Zs;case 5124:case 35670:return Js;case 35667:case 35671:return Qs;case 35668:case 35672:return $s;case 35669:case 35673:return eo;case 5125:return to;case 36294:return no;case 36295:return io;case 36296:return ro;case 35678:case 36198:case 36298:case 36306:case 35682:return ao;case 35679:case 36299:case 36307:return so;case 35680:case 36300:case 36308:case 36293:return oo;case 36289:case 36303:case 36311:case 36292:return lo}}(t.type)}}class uo{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const l=i[a];l.setValue(e,t[l.id],n)}}}const Zi=/(\w+)(\])?(\[|\.)?/g;function ga(r,e){r.seq.push(e),r.map[e.id]=e}function po(r,e,t){const n=r.name,i=n.length;for(Zi.lastIndex=0;;){const a=Zi.exec(n),s=Zi.lastIndex;let l=a[1];const h=a[2]==="]",o=a[3];if(h&&(l|=0),o===void 0||o==="["&&s+2===i){ga(t,o===void 0?new co(l,r,e):new ho(l,r,e));break}{let c=t.map[l];c===void 0&&(c=new uo(l),ga(t,c)),t=c}}}class di{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i);po(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,s=t.length;a!==s;++a){const l=t[a],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function _a(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let fo=0;function va(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+function(l,h){const o=l.split(`
`),c=[],d=Math.max(h-6,0),u=Math.min(h+6,o.length);for(let f=d;f<u;f++){const v=f+1;c.push(`${v===h?">":" "} ${v}: ${o[f]}`)}return c.join(`
`)}(r.getShaderSource(e),s)}return i}function mo(r,e){const t=function(n){const i=De.getPrimaries(De.workingColorSpace),a=De.getPrimaries(n);let s;switch(i===a?s="":i===Hn&&a===zn?s="LinearDisplayP3ToLinearSRGB":i===zn&&a===Hn&&(s="LinearSRGBToLinearDisplayP3"),n){case Et:case Fn:return[s,"LinearTransferOETF"];case ke:case Si:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[s,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function go(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mn(r){return r!==""}function xa(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ma(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _o=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ji(r){return r.replace(_o,xo)}const vo=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xo(r,e){let t=xe[e];if(t===void 0){const n=vo.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ji(t)}const Mo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sa(r){return r.replace(Mo,So)}function So(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Ea(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eo(r,e,t,n){const i=r.getContext(),a=t.defines;let s=t.vertexShader,l=t.fragmentShader;const h=function(T){let q="SHADOWMAP_TYPE_BASIC";return T.shadowMapType===1?q="SHADOWMAP_TYPE_PCF":T.shadowMapType===2?q="SHADOWMAP_TYPE_PCF_SOFT":T.shadowMapType===3&&(q="SHADOWMAP_TYPE_VSM"),q}(t),o=function(T){let q="ENVMAP_TYPE_CUBE";if(T.envMap)switch(T.envMapMode){case 301:case 302:q="ENVMAP_TYPE_CUBE";break;case 306:q="ENVMAP_TYPE_CUBE_UV"}return q}(t),c=function(T){let q="ENVMAP_MODE_REFLECTION";return T.envMap&&T.envMapMode===302&&(q="ENVMAP_MODE_REFRACTION"),q}(t),d=function(T){let q="ENVMAP_BLENDING_NONE";if(T.envMap)switch(T.combine){case 0:q="ENVMAP_BLENDING_MULTIPLY";break;case 1:q="ENVMAP_BLENDING_MIX";break;case 2:q="ENVMAP_BLENDING_ADD"}return q}(t),u=function(T){const q=T.envMapCubeUVHeight;if(q===null)return null;const z=Math.log2(q)-2,te=1/q;return{texelWidth:1/(3*Math.max(Math.pow(2,z),112)),texelHeight:te,maxMip:z}}(t),f=t.isWebGL2?"":function(T){return[T.extensionDerivatives||T.envMapCubeUVHeight||T.bumpMap||T.normalMapTangentSpace||T.clearcoatNormalMap||T.flatShading||T.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(T.extensionFragDepth||T.logarithmicDepthBuffer)&&T.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",T.extensionDrawBuffers&&T.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(T.extensionShaderTextureLOD||T.envMap||T.transmission)&&T.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mn).join(`
`)}(t),v=function(T){return[T.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(mn).join(`
`)}(t),_=function(T){const q=[];for(const z in T){const te=T[z];te!==!1&&q.push("#define "+z+" "+te)}return q.join(`
`)}(a),p=i.createProgram();let y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mn).join(`
`),y.length>0&&(y+=`
`),m=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(mn).join(`
`),m.length>0&&(m+=`
`)):(y=[Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mn).join(`
`),m=[f,Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?xe.tonemapping_pars_fragment:"",t.toneMapping!==0?go("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,mo("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mn).join(`
`)),s=Ji(s),s=xa(s,t),s=Ma(s,t),l=Ji(l),l=xa(l,t),l=Ma(l,t),s=Sa(s),l=Sa(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=g+y+s,U=g+m+l,w=_a(i,i.VERTEX_SHADER,P),b=_a(i,i.FRAGMENT_SHADER,U);function k(T){if(r.debug.checkShaderErrors){const q=i.getProgramInfoLog(p).trim(),z=i.getShaderInfoLog(w).trim(),te=i.getShaderInfoLog(b).trim();let he=!0,K=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,w,b);else{const W=va(i,w,"vertex"),Y=va(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+W+`
`+Y)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):z!==""&&te!==""||(K=!1);K&&(T.diagnostics={runnable:he,programLog:q,vertexShader:{log:z,prefix:y},fragmentShader:{log:te,prefix:m}})}i.deleteShader(w),i.deleteShader(b),C=new di(i,p),O=function(q,z){const te={},he=q.getProgramParameter(z,q.ACTIVE_ATTRIBUTES);for(let K=0;K<he;K++){const W=q.getActiveAttrib(z,K),Y=W.name;let N=1;W.type===q.FLOAT_MAT2&&(N=2),W.type===q.FLOAT_MAT3&&(N=3),W.type===q.FLOAT_MAT4&&(N=4),te[Y]={type:W.type,location:q.getAttribLocation(z,Y),locationSize:N}}return te}(i,p)}let C,O;i.attachShader(p,w),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),this.getUniforms=function(){return C===void 0&&k(this),C},this.getAttributes=function(){return O===void 0&&k(this),O};let ee=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ee===!1&&(ee=i.getProgramParameter(p,37297)),ee},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fo++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=b,this}let yo=0;class To{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bo(e),t.set(e,n)),n}}class bo{constructor(e){this.id=yo++,this.code=e,this.usedTimes=0}}function Ao(r,e,t,n,i,a,s){const l=new Ur,h=new To,o=[],c=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(p){return p===0?"uv":`uv${p}`}return{getParameters:function(p,y,m,g,P){const U=g.fog,w=P.geometry,b=p.isMeshStandardMaterial?g.environment:null,k=(p.isMeshStandardMaterial?t:e).get(p.envMap||b),C=k&&k.mapping===306?k.image.height:null,O=v[p.type];p.precision!==null&&(f=i.getMaxPrecision(p.precision),f!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",f,"instead."));const ee=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,T=ee!==void 0?ee.length:0;let q,z,te,he,K=0;if(w.morphAttributes.position!==void 0&&(K=1),w.morphAttributes.normal!==void 0&&(K=2),w.morphAttributes.color!==void 0&&(K=3),O){const Xe=Mt[O];q=Xe.vertexShader,z=Xe.fragmentShader}else q=p.vertexShader,z=p.fragmentShader,h.update(p),te=h.getVertexShaderID(p),he=h.getFragmentShaderID(p);const W=r.getRenderTarget(),Y=P.isInstancedMesh===!0,N=P.isBatchedMesh===!0,X=!!p.map,se=!!p.matcap,x=!!k,M=!!p.aoMap,L=!!p.lightMap,H=!!p.bumpMap,A=!!p.normalMap,G=!!p.displacementMap,J=!!p.emissiveMap,Z=!!p.metalnessMap,ne=!!p.roughnessMap,oe=p.anisotropy>0,ue=p.clearcoat>0,S=p.iridescence>0,re=p.sheen>0,V=p.transmission>0,F=oe&&!!p.anisotropyMap,$=ue&&!!p.clearcoatMap,le=ue&&!!p.clearcoatNormalMap,ce=ue&&!!p.clearcoatRoughnessMap,fe=S&&!!p.iridescenceMap,ve=S&&!!p.iridescenceThicknessMap,de=re&&!!p.sheenColorMap,pe=re&&!!p.sheenRoughnessMap,ye=!!p.specularMap,Ze=!!p.specularColorMap,me=!!p.specularIntensityMap,Re=V&&!!p.transmissionMap,Te=V&&!!p.thicknessMap,Pn=!!p.gradientMap,Yt=!!p.alphaMap,Un=p.alphaTest>0,st=!!p.alphaHash,nt=!!p.extensions,Kt=!!w.attributes.uv1,I=!!w.attributes.uv2,Dn=!!w.attributes.uv3;let gn=0;return p.toneMapped&&(W!==null&&W.isXRRenderTarget!==!0||(gn=r.toneMapping)),{isWebGL2:c,shaderID:O,shaderType:p.type,shaderName:p.name,vertexShader:q,fragmentShader:z,defines:p.defines,customVertexShaderID:te,customFragmentShaderID:he,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:f,batching:N,instancing:Y,instancingColor:Y&&P.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:W===null?r.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Et,map:X,matcap:se,envMap:x,envMapMode:x&&k.mapping,envMapCubeUVHeight:C,aoMap:M,lightMap:L,bumpMap:H,normalMap:A,displacementMap:u&&G,emissiveMap:J,normalMapObjectSpace:A&&p.normalMapType===1,normalMapTangentSpace:A&&p.normalMapType===0,metalnessMap:Z,roughnessMap:ne,anisotropy:oe,anisotropyMap:F,clearcoat:ue,clearcoatMap:$,clearcoatNormalMap:le,clearcoatRoughnessMap:ce,iridescence:S,iridescenceMap:fe,iridescenceThicknessMap:ve,sheen:re,sheenColorMap:de,sheenRoughnessMap:pe,specularMap:ye,specularColorMap:Ze,specularIntensityMap:me,transmission:V,transmissionMap:Re,thicknessMap:Te,gradientMap:Pn,opaque:p.transparent===!1&&p.blending===1,alphaMap:Yt,alphaTest:Un,alphaHash:st,combine:p.combine,mapUv:X&&_(p.map.channel),aoMapUv:M&&_(p.aoMap.channel),lightMapUv:L&&_(p.lightMap.channel),bumpMapUv:H&&_(p.bumpMap.channel),normalMapUv:A&&_(p.normalMap.channel),displacementMapUv:G&&_(p.displacementMap.channel),emissiveMapUv:J&&_(p.emissiveMap.channel),metalnessMapUv:Z&&_(p.metalnessMap.channel),roughnessMapUv:ne&&_(p.roughnessMap.channel),anisotropyMapUv:F&&_(p.anisotropyMap.channel),clearcoatMapUv:$&&_(p.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(p.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(p.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(p.iridescenceThicknessMap.channel),sheenColorMapUv:de&&_(p.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(p.sheenRoughnessMap.channel),specularMapUv:ye&&_(p.specularMap.channel),specularColorMapUv:Ze&&_(p.specularColorMap.channel),specularIntensityMapUv:me&&_(p.specularIntensityMap.channel),transmissionMapUv:Re&&_(p.transmissionMap.channel),thicknessMapUv:Te&&_(p.thicknessMap.channel),alphaMapUv:Yt&&_(p.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(A||oe),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:Kt,vertexUv2s:I,vertexUv3s:Dn,pointsUvs:P.isPoints===!0&&!!w.attributes.uv&&(X||Yt),fog:!!U,useFog:p.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:P.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:K,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:p.dithering,shadowMapEnabled:r.shadowMap.enabled&&m.length>0,shadowMapType:r.shadowMap.type,toneMapping:gn,useLegacyLights:r._useLegacyLights,decodeVideoTexture:X&&p.map.isVideoTexture===!0&&De.getTransfer(p.map.colorSpace)===Ne,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===2,flipSided:p.side===1,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionDerivatives:nt&&p.extensions.derivatives===!0,extensionFragDepth:nt&&p.extensions.fragDepth===!0,extensionDrawBuffers:nt&&p.extensions.drawBuffers===!0,extensionShaderTextureLOD:nt&&p.extensions.shaderTextureLOD===!0,extensionClipCullDistance:nt&&p.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()}},getProgramCacheKey:function(p){const y=[];if(p.shaderID?y.push(p.shaderID):(y.push(p.customVertexShaderID),y.push(p.customFragmentShaderID)),p.defines!==void 0)for(const m in p.defines)y.push(m),y.push(p.defines[m]);return p.isRawShaderMaterial===!1&&(function(m,g){m.push(g.precision),m.push(g.outputColorSpace),m.push(g.envMapMode),m.push(g.envMapCubeUVHeight),m.push(g.mapUv),m.push(g.alphaMapUv),m.push(g.lightMapUv),m.push(g.aoMapUv),m.push(g.bumpMapUv),m.push(g.normalMapUv),m.push(g.displacementMapUv),m.push(g.emissiveMapUv),m.push(g.metalnessMapUv),m.push(g.roughnessMapUv),m.push(g.anisotropyMapUv),m.push(g.clearcoatMapUv),m.push(g.clearcoatNormalMapUv),m.push(g.clearcoatRoughnessMapUv),m.push(g.iridescenceMapUv),m.push(g.iridescenceThicknessMapUv),m.push(g.sheenColorMapUv),m.push(g.sheenRoughnessMapUv),m.push(g.specularMapUv),m.push(g.specularColorMapUv),m.push(g.specularIntensityMapUv),m.push(g.transmissionMapUv),m.push(g.thicknessMapUv),m.push(g.combine),m.push(g.fogExp2),m.push(g.sizeAttenuation),m.push(g.morphTargetsCount),m.push(g.morphAttributeCount),m.push(g.numDirLights),m.push(g.numPointLights),m.push(g.numSpotLights),m.push(g.numSpotLightMaps),m.push(g.numHemiLights),m.push(g.numRectAreaLights),m.push(g.numDirLightShadows),m.push(g.numPointLightShadows),m.push(g.numSpotLightShadows),m.push(g.numSpotLightShadowsWithMaps),m.push(g.numLightProbes),m.push(g.shadowMapType),m.push(g.toneMapping),m.push(g.numClippingPlanes),m.push(g.numClipIntersection),m.push(g.depthPacking)}(y,p),function(m,g){l.disableAll(),g.isWebGL2&&l.enable(0),g.supportsVertexTextures&&l.enable(1),g.instancing&&l.enable(2),g.instancingColor&&l.enable(3),g.matcap&&l.enable(4),g.envMap&&l.enable(5),g.normalMapObjectSpace&&l.enable(6),g.normalMapTangentSpace&&l.enable(7),g.clearcoat&&l.enable(8),g.iridescence&&l.enable(9),g.alphaTest&&l.enable(10),g.vertexColors&&l.enable(11),g.vertexAlphas&&l.enable(12),g.vertexUv1s&&l.enable(13),g.vertexUv2s&&l.enable(14),g.vertexUv3s&&l.enable(15),g.vertexTangents&&l.enable(16),g.anisotropy&&l.enable(17),g.alphaHash&&l.enable(18),g.batching&&l.enable(19),m.push(l.mask),l.disableAll(),g.fog&&l.enable(0),g.useFog&&l.enable(1),g.flatShading&&l.enable(2),g.logarithmicDepthBuffer&&l.enable(3),g.skinning&&l.enable(4),g.morphTargets&&l.enable(5),g.morphNormals&&l.enable(6),g.morphColors&&l.enable(7),g.premultipliedAlpha&&l.enable(8),g.shadowMapEnabled&&l.enable(9),g.useLegacyLights&&l.enable(10),g.doubleSided&&l.enable(11),g.flipSided&&l.enable(12),g.useDepthPacking&&l.enable(13),g.dithering&&l.enable(14),g.transmission&&l.enable(15),g.sheen&&l.enable(16),g.opaque&&l.enable(17),g.pointsUvs&&l.enable(18),g.decodeVideoTexture&&l.enable(19),m.push(l.mask)}(y,p),y.push(r.outputColorSpace)),y.push(p.customProgramCacheKey),y.join()},getUniforms:function(p){const y=v[p.type];let m;if(y){const g=Mt[y];m=rs.clone(g.uniforms)}else m=p.uniforms;return m},acquireProgram:function(p,y){let m;for(let g=0,P=o.length;g<P;g++){const U=o[g];if(U.cacheKey===y){m=U,++m.usedTimes;break}}return m===void 0&&(m=new Eo(r,y,p,a),o.push(m)),m},releaseProgram:function(p){if(--p.usedTimes===0){const y=o.indexOf(p);o[y]=o[o.length-1],o.pop(),p.destroy()}},releaseShaderCache:function(p){h.remove(p)},programs:o,dispose:function(){h.dispose()}}}function wo(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Ro(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ya(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ta(){const r=[];let e=0;const t=[],n=[],i=[];function a(s,l,h,o,c,d){let u=r[e];return u===void 0?(u={id:s.id,object:s,geometry:l,material:h,groupOrder:o,renderOrder:s.renderOrder,z:c,group:d},r[e]=u):(u.id=s.id,u.object=s,u.geometry=l,u.material=h,u.groupOrder=o,u.renderOrder=s.renderOrder,u.z=c,u.group=d),e++,u}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(s,l,h,o,c,d){const u=a(s,l,h,o,c,d);h.transmission>0?n.push(u):h.transparent===!0?i.push(u):t.push(u)},unshift:function(s,l,h,o,c,d){const u=a(s,l,h,o,c,d);h.transmission>0?n.unshift(u):h.transparent===!0?i.unshift(u):t.unshift(u)},finish:function(){for(let s=e,l=r.length;s<l;s++){const h=r[s];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}},sort:function(s,l){t.length>1&&t.sort(s||Ro),n.length>1&&n.sort(l||ya),i.length>1&&i.sort(l||ya)}}}function Co(){let r=new WeakMap;return{get:function(e,t){const n=r.get(e);let i;return n===void 0?(i=new Ta,r.set(e,[i])):t>=n.length?(i=new Ta,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Lo(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Pe};break;case"SpotLight":t={position:new R,direction:new R,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new R,halfWidth:new R,halfHeight:new R}}return r[e.id]=t,t}}}let Po=0;function Uo(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Do(r,e){const t=new Lo,n=function(){const h={};return{get:function(o){if(h[o.id]!==void 0)return h[o.id];let c;switch(o.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3}}return h[o.id]=c,c}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new R);const a=new R,s=new ze,l=new ze;return{setup:function(h,o){let c=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,v=0,_=0,p=0,y=0,m=0,g=0,P=0,U=0,w=0,b=0;h.sort(Uo);const k=o===!0?Math.PI:1;for(let O=0,ee=h.length;O<ee;O++){const T=h[O],q=T.color,z=T.intensity,te=T.distance,he=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=q.r*z*k,d+=q.g*z*k,u+=q.b*z*k;else if(T.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(T.sh.coefficients[K],z);b++}else if(T.isDirectionalLight){const K=t.get(T);if(K.color.copy(T.color).multiplyScalar(T.intensity*k),T.castShadow){const W=T.shadow,Y=n.get(T);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=he,i.directionalShadowMatrix[f]=T.shadow.matrix,m++}i.directional[f]=K,f++}else if(T.isSpotLight){const K=t.get(T);K.position.setFromMatrixPosition(T.matrixWorld),K.color.copy(q).multiplyScalar(z*k),K.distance=te,K.coneCos=Math.cos(T.angle),K.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),K.decay=T.decay,i.spot[_]=K;const W=T.shadow;if(T.map&&(i.spotLightMap[U]=T.map,U++,W.updateMatrices(T),T.castShadow&&w++),i.spotLightMatrix[_]=W.matrix,T.castShadow){const Y=n.get(T);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=he,P++}_++}else if(T.isRectAreaLight){const K=t.get(T);K.color.copy(q).multiplyScalar(z),K.halfWidth.set(.5*T.width,0,0),K.halfHeight.set(0,.5*T.height,0),i.rectArea[p]=K,p++}else if(T.isPointLight){const K=t.get(T);if(K.color.copy(T.color).multiplyScalar(T.intensity*k),K.distance=T.distance,K.decay=T.decay,T.castShadow){const W=T.shadow,Y=n.get(T);Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[v]=Y,i.pointShadowMap[v]=he,i.pointShadowMatrix[v]=T.shadow.matrix,g++}i.point[v]=K,v++}else if(T.isHemisphereLight){const K=t.get(T);K.skyColor.copy(T.color).multiplyScalar(z*k),K.groundColor.copy(T.groundColor).multiplyScalar(z*k),i.hemi[y]=K,y++}}p>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;const C=i.hash;C.directionalLength===f&&C.pointLength===v&&C.spotLength===_&&C.rectAreaLength===p&&C.hemiLength===y&&C.numDirectionalShadows===m&&C.numPointShadows===g&&C.numSpotShadows===P&&C.numSpotMaps===U&&C.numLightProbes===b||(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=v,i.hemi.length=y,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=P+U-w,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=b,C.directionalLength=f,C.pointLength=v,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=y,C.numDirectionalShadows=m,C.numPointShadows=g,C.numSpotShadows=P,C.numSpotMaps=U,C.numLightProbes=b,i.version=Po++)},setupView:function(h,o){let c=0,d=0,u=0,f=0,v=0;const _=o.matrixWorldInverse;for(let p=0,y=h.length;p<y;p++){const m=h[p];if(m.isDirectionalLight){const g=i.directional[c];g.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),g.direction.sub(a),g.direction.transformDirection(_),c++}else if(m.isSpotLight){const g=i.spot[u];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(_),g.direction.setFromMatrixPosition(m.matrixWorld),a.setFromMatrixPosition(m.target.matrixWorld),g.direction.sub(a),g.direction.transformDirection(_),u++}else if(m.isRectAreaLight){const g=i.rectArea[f];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(_),l.identity(),s.copy(m.matrixWorld),s.premultiply(_),l.extractRotation(s),g.halfWidth.set(.5*m.width,0,0),g.halfHeight.set(0,.5*m.height,0),g.halfWidth.applyMatrix4(l),g.halfHeight.applyMatrix4(l),f++}else if(m.isPointLight){const g=i.point[d];g.position.setFromMatrixPosition(m.matrixWorld),g.position.applyMatrix4(_),d++}else if(m.isHemisphereLight){const g=i.hemi[v];g.direction.setFromMatrixPosition(m.matrixWorld),g.direction.transformDirection(_),v++}}},state:i}}function ba(r,e){const t=new Do(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(a){t.setup(n,a)},setupLightsView:function(a){t.setupView(n,a)},pushLight:function(a){n.push(a)},pushShadow:function(a){i.push(a)}}}function No(r,e){let t=new WeakMap;return{get:function(n,i=0){const a=t.get(n);let s;return a===void 0?(s=new ba(r,e),t.set(n,[s])):i>=a.length?(s=new ba(r,e),a.push(s)):s=a[i],s},dispose:function(){t=new WeakMap}}}class Io extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oo extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Fo(r,e,t){let n=new Wi;const i=new Ue,a=new Ue,s=new Ie,l=new Io({depthPacking:3201}),h=new Oo,o={},c=t.maxTextureSize,d={0:1,1:0,2:2},u=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const v=new qt;v.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(v,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;function m(w,b){const k=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bt(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,k,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,k,f,_,null)}function g(w,b,k,C){let O=null;const ee=k.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(ee!==void 0)O=ee;else if(O=k.isPointLight===!0?h:l,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const T=O.uuid,q=b.uuid;let z=o[T];z===void 0&&(z={},o[T]=z);let te=z[q];te===void 0&&(te=O.clone(),z[q]=te,b.addEventListener("dispose",U)),O=te}return O.visible=b.visible,O.wireframe=b.wireframe,O.side=C===3?b.shadowSide!==null?b.shadowSide:b.side:b.shadowSide!==null?b.shadowSide:d[b.side],O.alphaMap=b.alphaMap,O.alphaTest=b.alphaTest,O.map=b.map,O.clipShadows=b.clipShadows,O.clippingPlanes=b.clippingPlanes,O.clipIntersection=b.clipIntersection,O.displacementMap=b.displacementMap,O.displacementScale=b.displacementScale,O.displacementBias=b.displacementBias,O.wireframeLinewidth=b.wireframeLinewidth,O.linewidth=b.linewidth,k.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(r.properties.get(O).light=k),O}function P(w,b,k,C,O){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===3)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld);const T=e.update(w),q=w.material;if(Array.isArray(q)){const z=T.groups;for(let te=0,he=z.length;te<he;te++){const K=z[te],W=q[K.materialIndex];if(W&&W.visible){const Y=g(w,W,C,O);w.onBeforeShadow(r,w,b,k,T,Y,K),r.renderBufferDirect(k,null,T,Y,w,K),w.onAfterShadow(r,w,b,k,T,Y,K)}}}else if(q.visible){const z=g(w,q,C,O);w.onBeforeShadow(r,w,b,k,T,z,null),r.renderBufferDirect(k,null,T,z,w,null),w.onAfterShadow(r,w,b,k,T,z,null)}}const ee=w.children;for(let T=0,q=ee.length;T<q;T++)P(ee[T],b,k,C,O)}function U(w){w.target.removeEventListener("dispose",U);for(const b in o){const k=o[b],C=w.target.uuid;C in k&&(k[C].dispose(),delete k[C])}}this.render=function(w,b,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const C=r.getRenderTarget(),O=r.getActiveCubeFace(),ee=r.getActiveMipmapLevel(),T=r.state;T.setBlending(0),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const q=y!==3&&this.type===3,z=y===3&&this.type!==3;for(let te=0,he=w.length;te<he;te++){const K=w[te],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Y=W.getFrameExtents();if(i.multiply(Y),a.copy(W.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(a.x=Math.floor(c/Y.x),i.x=a.x*Y.x,W.mapSize.x=a.x),i.y>c&&(a.y=Math.floor(c/Y.y),i.y=a.y*Y.y,W.mapSize.y=a.y)),W.map===null||q===!0||z===!0){const X=this.type!==3?{minFilter:1003,magFilter:1003}:{};W.map!==null&&W.map.dispose(),W.map=new Bt(i.x,i.y,X),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const N=W.getViewportCount();for(let X=0;X<N;X++){const se=W.getViewport(X);s.set(a.x*se.x,a.y*se.y,a.x*se.z,a.y*se.w),T.viewport(s),W.updateMatrices(K,X),n=W.getFrustum(),P(b,k,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===3&&m(W,k),W.needsUpdate=!1}y=this.type,p.needsUpdate=!1,r.setRenderTarget(C,O,ee)}}function Bo(r,e,t){const n=t.isWebGL2,i=new function(){let S=!1;const re=new Ie;let V=null;const F=new Ie(0,0,0,0);return{setMask:function($){V===$||S||(r.colorMask($,$,$,$),V=$)},setLocked:function($){S=$},setClear:function($,le,ce,fe,ve){ve===!0&&($*=fe,le*=fe,ce*=fe),re.set($,le,ce,fe),F.equals(re)===!1&&(r.clearColor($,le,ce,fe),F.copy(re))},reset:function(){S=!1,V=null,F.set(-1,0,0,0)}}},a=new function(){let S=!1,re=null,V=null,F=null;return{setTest:function($){$?H(r.DEPTH_TEST):A(r.DEPTH_TEST)},setMask:function($){re===$||S||(r.depthMask($),re=$)},setFunc:function($){if(V!==$){switch($){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}V=$}},setLocked:function($){S=$},setClear:function($){F!==$&&(r.clearDepth($),F=$)},reset:function(){S=!1,re=null,V=null,F=null}}},s=new function(){let S=!1,re=null,V=null,F=null,$=null,le=null,ce=null,fe=null,ve=null;return{setTest:function(de){S||(de?H(r.STENCIL_TEST):A(r.STENCIL_TEST))},setMask:function(de){re===de||S||(r.stencilMask(de),re=de)},setFunc:function(de,pe,ye){V===de&&F===pe&&$===ye||(r.stencilFunc(de,pe,ye),V=de,F=pe,$=ye)},setOp:function(de,pe,ye){le===de&&ce===pe&&fe===ye||(r.stencilOp(de,pe,ye),le=de,ce=pe,fe=ye)},setLocked:function(de){S=de},setClear:function(de){ve!==de&&(r.clearStencil(de),ve=de)},reset:function(){S=!1,re=null,V=null,F=null,$=null,le=null,ce=null,fe=null,ve=null}}},l=new WeakMap,h=new WeakMap;let o={},c={},d=new WeakMap,u=[],f=null,v=!1,_=null,p=null,y=null,m=null,g=null,P=null,U=null,w=new Pe(0,0,0),b=0,k=!1,C=null,O=null,ee=null,T=null,q=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,he=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),te=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),te=he>=2);let W=null,Y={};const N=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),se=new Ie().fromArray(N),x=new Ie().fromArray(X);function M(S,re,V,F){const $=new Uint8Array(4),le=r.createTexture();r.bindTexture(S,le),r.texParameteri(S,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(S,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<V;ce++)!n||S!==r.TEXTURE_3D&&S!==r.TEXTURE_2D_ARRAY?r.texImage2D(re+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage3D(re,0,r.RGBA,1,1,F,0,r.RGBA,r.UNSIGNED_BYTE,$);return le}const L={};function H(S){o[S]!==!0&&(r.enable(S),o[S]=!0)}function A(S){o[S]!==!1&&(r.disable(S),o[S]=!1)}L[r.TEXTURE_2D]=M(r.TEXTURE_2D,r.TEXTURE_2D,1),L[r.TEXTURE_CUBE_MAP]=M(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(L[r.TEXTURE_2D_ARRAY]=M(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),L[r.TEXTURE_3D]=M(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),a.setClear(1),s.setClear(0),H(r.DEPTH_TEST),a.setFunc(3),ne(!1),oe(1),H(r.CULL_FACE),Z(0);const G={100:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)G[103]=r.MIN,G[104]=r.MAX;else{const S=e.get("EXT_blend_minmax");S!==null&&(G[103]=S.MIN_EXT,G[104]=S.MAX_EXT)}const J={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function Z(S,re,V,F,$,le,ce,fe,ve,de){if(S!==0){if(v===!1&&(H(r.BLEND),v=!0),S===5)$=$||re,le=le||V,ce=ce||F,re===p&&$===g||(r.blendEquationSeparate(G[re],G[$]),p=re,g=$),V===y&&F===m&&le===P&&ce===U||(r.blendFuncSeparate(J[V],J[F],J[le],J[ce]),y=V,m=F,P=le,U=ce),fe.equals(w)!==!1&&ve===b||(r.blendColor(fe.r,fe.g,fe.b,ve),w.copy(fe),b=ve),_=S,k=!1;else if(S!==_||de!==k){if(p===100&&g===100||(r.blendEquation(r.FUNC_ADD),p=100,g=100),de)switch(S){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}y=null,m=null,P=null,U=null,w.set(0,0,0),b=0,_=S,k=de}}else v===!0&&(A(r.BLEND),v=!1)}function ne(S){C!==S&&(S?r.frontFace(r.CW):r.frontFace(r.CCW),C=S)}function oe(S){S!==0?(H(r.CULL_FACE),S!==O&&(S===1?r.cullFace(r.BACK):S===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):A(r.CULL_FACE),O=S}function ue(S,re,V){S?(H(r.POLYGON_OFFSET_FILL),T===re&&q===V||(r.polygonOffset(re,V),T=re,q=V)):A(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:a,stencil:s},enable:H,disable:A,bindFramebuffer:function(S,re){return c[S]!==re&&(r.bindFramebuffer(S,re),c[S]=re,n&&(S===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=re),S===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=re)),!0)},drawBuffers:function(S,re){let V=u,F=!1;if(S)if(V=d.get(re),V===void 0&&(V=[],d.set(re,V)),S.isWebGLMultipleRenderTargets){const $=S.texture;if(V.length!==$.length||V[0]!==r.COLOR_ATTACHMENT0){for(let le=0,ce=$.length;le<ce;le++)V[le]=r.COLOR_ATTACHMENT0+le;V.length=$.length,F=!0}}else V[0]!==r.COLOR_ATTACHMENT0&&(V[0]=r.COLOR_ATTACHMENT0,F=!0);else V[0]!==r.BACK&&(V[0]=r.BACK,F=!0);F&&(t.isWebGL2?r.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))},useProgram:function(S){return f!==S&&(r.useProgram(S),f=S,!0)},setBlending:Z,setMaterial:function(S,re){S.side===2?A(r.CULL_FACE):H(r.CULL_FACE);let V=S.side===1;re&&(V=!V),ne(V),S.blending===1&&S.transparent===!1?Z(0):Z(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),a.setFunc(S.depthFunc),a.setTest(S.depthTest),a.setMask(S.depthWrite),i.setMask(S.colorWrite);const F=S.stencilWrite;s.setTest(F),F&&(s.setMask(S.stencilWriteMask),s.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),s.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),ue(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?H(r.SAMPLE_ALPHA_TO_COVERAGE):A(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:ne,setCullFace:oe,setLineWidth:function(S){S!==ee&&(te&&r.lineWidth(S),ee=S)},setPolygonOffset:ue,setScissorTest:function(S){S?H(r.SCISSOR_TEST):A(r.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=r.TEXTURE0+z-1),W!==S&&(r.activeTexture(S),W=S)},bindTexture:function(S,re,V){V===void 0&&(V=W===null?r.TEXTURE0+z-1:W);let F=Y[V];F===void 0&&(F={type:void 0,texture:void 0},Y[V]=F),F.type===S&&F.texture===re||(W!==V&&(r.activeTexture(V),W=V),r.bindTexture(S,re||L[S]),F.type=S,F.texture=re)},unbindTexture:function(){const S=Y[W];S!==void 0&&S.type!==void 0&&(r.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,re){let V=h.get(re);V===void 0&&(V=new WeakMap,h.set(re,V));let F=V.get(S);F===void 0&&(F=r.getUniformBlockIndex(re,S.name),V.set(S,F))},uniformBlockBinding:function(S,re){const V=h.get(re).get(S);l.get(re)!==V&&(r.uniformBlockBinding(re,V,S.__bindingPointIndex),l.set(re,V))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){se.equals(S)===!1&&(r.scissor(S.x,S.y,S.z,S.w),se.copy(S))},viewport:function(S){x.equals(S)===!1&&(r.viewport(S.x,S.y,S.z,S.w),x.copy(S))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},W=null,Y={},c={},d=new WeakMap,u=[],f=null,v=!1,_=null,p=null,y=null,m=null,g=null,P=null,U=null,w=new Pe(0,0,0),b=0,k=!1,C=null,O=null,ee=null,T=null,q=null,se.set(0,0,r.canvas.width,r.canvas.height),x.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),s.reset()}}}function zo(r,e,t,n,i,a,s){const l=i.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,M){return f?new OffscreenCanvas(x,M):Gn("canvas")}function _(x,M,L,H){let A=1;if((x.width>H||x.height>H)&&(A=H/Math.max(x.width,x.height)),A<1||M===!0){if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const G=M?bi:Math.floor,J=G(A*x.width),Z=G(A*x.height);d===void 0&&(d=v(J,Z));const ne=L?v(J,Z):d;return ne.width=J,ne.height=Z,ne.getContext("2d").drawImage(x,0,0,J,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+J+"x"+Z+")."),ne}return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x}return x}function p(x){return Sr(x.width)&&Sr(x.height)}function y(x,M){return x.generateMipmaps&&M&&x.minFilter!==1003&&x.minFilter!==1006}function m(x){r.generateMipmap(x)}function g(x,M,L,H,A=!1){if(l===!1)return M;if(x!==null){if(r[x]!==void 0)return r[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let G=M;if(M===r.RED&&(L===r.FLOAT&&(G=r.R32F),L===r.HALF_FLOAT&&(G=r.R16F),L===r.UNSIGNED_BYTE&&(G=r.R8)),M===r.RED_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.R8UI),L===r.UNSIGNED_SHORT&&(G=r.R16UI),L===r.UNSIGNED_INT&&(G=r.R32UI),L===r.BYTE&&(G=r.R8I),L===r.SHORT&&(G=r.R16I),L===r.INT&&(G=r.R32I)),M===r.RG&&(L===r.FLOAT&&(G=r.RG32F),L===r.HALF_FLOAT&&(G=r.RG16F),L===r.UNSIGNED_BYTE&&(G=r.RG8)),M===r.RGBA){const J=A?Bn:De.getTransfer(H);L===r.FLOAT&&(G=r.RGBA32F),L===r.HALF_FLOAT&&(G=r.RGBA16F),L===r.UNSIGNED_BYTE&&(G=J===Ne?r.SRGB8_ALPHA8:r.RGBA8),L===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),L===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return G!==r.R16F&&G!==r.R32F&&G!==r.RG16F&&G!==r.RG32F&&G!==r.RGBA16F&&G!==r.RGBA32F||e.get("EXT_color_buffer_float"),G}function P(x,M,L){return y(x,L)===!0||x.isFramebufferTexture&&x.minFilter!==1003&&x.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function U(x){return x===1003||x===1004||x===1005?r.NEAREST:r.LINEAR}function w(x){const M=x.target;M.removeEventListener("dispose",w),function(L){const H=n.get(L);if(H.__webglInit===void 0)return;const A=L.source,G=u.get(A);if(G){const J=G[H.__cacheKey];J.usedTimes--,J.usedTimes===0&&k(L),Object.keys(G).length===0&&u.delete(A)}n.remove(L)}(M),M.isVideoTexture&&c.delete(M)}function b(x){const M=x.target;M.removeEventListener("dispose",b),function(L){const H=L.texture,A=n.get(L),G=n.get(H);if(G.__webglTexture!==void 0&&(r.deleteTexture(G.__webglTexture),s.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let Z=0;Z<A.__webglFramebuffer[J].length;Z++)r.deleteFramebuffer(A.__webglFramebuffer[J][Z]);else r.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)r.deleteFramebuffer(A.__webglFramebuffer[J]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let J=0,Z=H.length;J<Z;J++){const ne=n.get(H[J]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),s.memory.textures--),n.remove(H[J])}n.remove(H),n.remove(L)}(M)}function k(x){const M=n.get(x);r.deleteTexture(M.__webglTexture);const L=x.source;delete u.get(L)[M.__cacheKey],s.memory.textures--}let C=0;function O(x,M){const L=n.get(x);if(x.isVideoTexture&&function(H){const A=s.render.frame;c.get(H)!==A&&(c.set(H,A),H.update())}(x),x.isRenderTargetTexture===!1&&x.version>0&&L.__version!==x.version){const H=x.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(H.complete!==!1)return void he(L,x,M);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,L.__webglTexture,r.TEXTURE0+M)}const ee={1e3:r.REPEAT,1001:r.CLAMP_TO_EDGE,1002:r.MIRRORED_REPEAT},T={1003:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,1005:r.NEAREST_MIPMAP_LINEAR,1006:r.LINEAR,1007:r.LINEAR_MIPMAP_NEAREST,1008:r.LINEAR_MIPMAP_LINEAR},q={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function z(x,M,L){if(L?(r.texParameteri(x,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(x,r.TEXTURE_WRAP_T,ee[M.wrapT]),x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY||r.texParameteri(x,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(x,r.TEXTURE_MAG_FILTER,T[M.magFilter]),r.texParameteri(x,r.TEXTURE_MIN_FILTER,T[M.minFilter])):(r.texParameteri(x,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(x,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),x!==r.TEXTURE_3D&&x!==r.TEXTURE_2D_ARRAY||r.texParameteri(x,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),M.wrapS===1001&&M.wrapT===1001||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(x,r.TEXTURE_MAG_FILTER,U(M.magFilter)),r.texParameteri(x,r.TEXTURE_MIN_FILTER,U(M.minFilter)),M.minFilter!==1003&&M.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(r.texParameteri(x,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(x,r.TEXTURE_COMPARE_FUNC,q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&e.has("OES_texture_float_linear")===!1||l===!1&&M.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(x,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function te(x,M){let L=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",w));const H=M.source;let A=u.get(H);A===void 0&&(A={},u.set(H,A));const G=function(J){const Z=[];return Z.push(J.wrapS),Z.push(J.wrapT),Z.push(J.wrapR||0),Z.push(J.magFilter),Z.push(J.minFilter),Z.push(J.anisotropy),Z.push(J.internalFormat),Z.push(J.format),Z.push(J.type),Z.push(J.generateMipmaps),Z.push(J.premultiplyAlpha),Z.push(J.flipY),Z.push(J.unpackAlignment),Z.push(J.colorSpace),Z.join()}(M);if(G!==x.__cacheKey){A[G]===void 0&&(A[G]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,L=!0),A[G].usedTimes++;const J=A[x.__cacheKey];J!==void 0&&(A[x.__cacheKey].usedTimes--,J.usedTimes===0&&k(M)),x.__cacheKey=G,x.__webglTexture=A[G].texture}return L}function he(x,M,L){let H=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=r.TEXTURE_3D);const A=te(x,M),G=M.source;t.bindTexture(H,x.__webglTexture,r.TEXTURE0+L);const J=n.get(G);if(G.version!==J.__version||A===!0){t.activeTexture(r.TEXTURE0+L);const Z=De.getPrimaries(De.workingColorSpace),ne=M.colorSpace===vt?null:De.getPrimaries(M.colorSpace),oe=M.colorSpace===vt||Z===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const ue=function(pe){return!l&&(pe.wrapS!==1001||pe.wrapT!==1001||pe.minFilter!==1003&&pe.minFilter!==1006)}(M)&&p(M.image)===!1;let S=_(M.image,ue,!1,i.maxTextureSize);S=se(M,S);const re=p(S)||l,V=a.convert(M.format,M.colorSpace);let F,$=a.convert(M.type),le=g(M.internalFormat,V,$,M.colorSpace,M.isVideoTexture);z(H,M,re);const ce=M.mipmaps,fe=l&&M.isVideoTexture!==!0&&le!==36196,ve=J.__version===void 0||A===!0,de=P(M,S,re);if(M.isDepthTexture)le=r.DEPTH_COMPONENT,l?le=M.type===1015?r.DEPTH_COMPONENT32F:M.type===1014?r.DEPTH_COMPONENT24:M.type===1020?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:M.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===1026&&le===r.DEPTH_COMPONENT&&M.type!==1012&&M.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=1014,$=a.convert(M.type)),M.format===1027&&le===r.DEPTH_COMPONENT&&(le=r.DEPTH_STENCIL,M.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=1020,$=a.convert(M.type))),ve&&(fe?t.texStorage2D(r.TEXTURE_2D,1,le,S.width,S.height):t.texImage2D(r.TEXTURE_2D,0,le,S.width,S.height,0,V,$,null));else if(M.isDataTexture)if(ce.length>0&&re){fe&&ve&&t.texStorage2D(r.TEXTURE_2D,de,le,ce[0].width,ce[0].height);for(let pe=0,ye=ce.length;pe<ye;pe++)F=ce[pe],fe?t.texSubImage2D(r.TEXTURE_2D,pe,0,0,F.width,F.height,V,$,F.data):t.texImage2D(r.TEXTURE_2D,pe,le,F.width,F.height,0,V,$,F.data);M.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(r.TEXTURE_2D,de,le,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,V,$,S.data)):t.texImage2D(r.TEXTURE_2D,0,le,S.width,S.height,0,V,$,S.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,le,ce[0].width,ce[0].height,S.depth);for(let pe=0,ye=ce.length;pe<ye;pe++)F=ce[pe],M.format!==1023?V!==null?fe?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,F.width,F.height,S.depth,V,F.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,le,F.width,F.height,S.depth,0,F.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,F.width,F.height,S.depth,V,$,F.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,le,F.width,F.height,S.depth,0,V,$,F.data)}else{fe&&ve&&t.texStorage2D(r.TEXTURE_2D,de,le,ce[0].width,ce[0].height);for(let pe=0,ye=ce.length;pe<ye;pe++)F=ce[pe],M.format!==1023?V!==null?fe?t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,F.width,F.height,V,F.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,le,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?t.texSubImage2D(r.TEXTURE_2D,pe,0,0,F.width,F.height,V,$,F.data):t.texImage2D(r.TEXTURE_2D,pe,le,F.width,F.height,0,V,$,F.data)}else if(M.isDataArrayTexture)fe?(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,le,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,V,$,S.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,le,S.width,S.height,S.depth,0,V,$,S.data);else if(M.isData3DTexture)fe?(ve&&t.texStorage3D(r.TEXTURE_3D,de,le,S.width,S.height,S.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,V,$,S.data)):t.texImage3D(r.TEXTURE_3D,0,le,S.width,S.height,S.depth,0,V,$,S.data);else if(M.isFramebufferTexture){if(ve)if(fe)t.texStorage2D(r.TEXTURE_2D,de,le,S.width,S.height);else{let pe=S.width,ye=S.height;for(let Ze=0;Ze<de;Ze++)t.texImage2D(r.TEXTURE_2D,Ze,le,pe,ye,0,V,$,null),pe>>=1,ye>>=1}}else if(ce.length>0&&re){fe&&ve&&t.texStorage2D(r.TEXTURE_2D,de,le,ce[0].width,ce[0].height);for(let pe=0,ye=ce.length;pe<ye;pe++)F=ce[pe],fe?t.texSubImage2D(r.TEXTURE_2D,pe,0,0,V,$,F):t.texImage2D(r.TEXTURE_2D,pe,le,V,$,F);M.generateMipmaps=!1}else fe?(ve&&t.texStorage2D(r.TEXTURE_2D,de,le,S.width,S.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,V,$,S)):t.texImage2D(r.TEXTURE_2D,0,le,V,$,S);y(M,re)&&m(H),J.__version=G.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function K(x,M,L,H,A,G){const J=a.convert(L.format,L.colorSpace),Z=a.convert(L.type),ne=g(L.internalFormat,J,Z,L.colorSpace);if(!n.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>G),ue=Math.max(1,M.height>>G);A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY?t.texImage3D(A,G,ne,oe,ue,M.depth,0,J,Z,null):t.texImage2D(A,G,ne,oe,ue,0,J,Z,null)}t.bindFramebuffer(r.FRAMEBUFFER,x),X(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,A,n.get(L).__webglTexture,0,N(M)):(A===r.TEXTURE_2D||A>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,A,n.get(L).__webglTexture,G),t.bindFramebuffer(r.FRAMEBUFFER,null)}function W(x,M,L){if(r.bindRenderbuffer(r.RENDERBUFFER,x),M.depthBuffer&&!M.stencilBuffer){let H=l===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(L||X(M)){const A=M.depthTexture;A&&A.isDepthTexture&&(A.type===1015?H=r.DEPTH_COMPONENT32F:A.type===1014&&(H=r.DEPTH_COMPONENT24));const G=N(M);X(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G,H,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,G,H,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,H,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,x)}else if(M.depthBuffer&&M.stencilBuffer){const H=N(M);L&&X(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,H,r.DEPTH24_STENCIL8,M.width,M.height):X(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,x)}else{const H=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let A=0;A<H.length;A++){const G=H[A],J=a.convert(G.format,G.colorSpace),Z=a.convert(G.type),ne=g(G.internalFormat,J,Z,G.colorSpace),oe=N(M);L&&X(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,ne,M.width,M.height):X(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,ne,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,ne,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Y(x){const M=n.get(x),L=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");(function(H,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,H),!A.depthTexture||!A.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(A.depthTexture).__webglTexture&&A.depthTexture.image.width===A.width&&A.depthTexture.image.height===A.height||(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),O(A.depthTexture,0);const G=n.get(A.depthTexture).__webglTexture,J=N(A);if(A.depthTexture.format===1026)X(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0);else{if(A.depthTexture.format!==1027)throw new Error("Unknown depthTexture format");X(A)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0)}})(M.__webglFramebuffer,x)}else if(L){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]=r.createRenderbuffer(),W(M.__webglDepthbuffer[H],x,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),W(M.__webglDepthbuffer,x,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function N(x){return Math.min(i.maxSamples,x.samples)}function X(x){const M=n.get(x);return l&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function se(x,M){const L=x.colorSpace,H=x.format,A=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===1035||L!==Et&&L!==vt&&(De.getTransfer(L)===Ne?l===!1?e.has("EXT_sRGB")===!0&&H===1023?(x.format=1035,x.minFilter=1006,x.generateMipmaps=!1):M=Ar.sRGBToLinear(M):H===1023&&A===1009||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),M}this.allocateTextureUnit=function(){const x=C;return x>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+i.maxTextures),C+=1,x},this.resetTextureUnits=function(){C=0},this.setTexture2D=O,this.setTexture2DArray=function(x,M){const L=n.get(x);x.version>0&&L.__version!==x.version?he(L,x,M):t.bindTexture(r.TEXTURE_2D_ARRAY,L.__webglTexture,r.TEXTURE0+M)},this.setTexture3D=function(x,M){const L=n.get(x);x.version>0&&L.__version!==x.version?he(L,x,M):t.bindTexture(r.TEXTURE_3D,L.__webglTexture,r.TEXTURE0+M)},this.setTextureCube=function(x,M){const L=n.get(x);x.version>0&&L.__version!==x.version?function(H,A,G){if(A.image.length!==6)return;const J=te(H,A),Z=A.source;t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+G);const ne=n.get(Z);if(Z.version!==ne.__version||J===!0){t.activeTexture(r.TEXTURE0+G);const oe=De.getPrimaries(De.workingColorSpace),ue=A.colorSpace===vt?null:De.getPrimaries(A.colorSpace),S=A.colorSpace===vt||oe===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);const re=A.isCompressedTexture||A.image[0].isCompressedTexture,V=A.image[0]&&A.image[0].isDataTexture,F=[];for(let me=0;me<6;me++)F[me]=re||V?V?A.image[me].image:A.image[me]:_(A.image[me],!1,!0,i.maxCubemapSize),F[me]=se(A,F[me]);const $=F[0],le=p($)||l,ce=a.convert(A.format,A.colorSpace),fe=a.convert(A.type),ve=g(A.internalFormat,ce,fe,A.colorSpace),de=l&&A.isVideoTexture!==!0,pe=ne.__version===void 0||J===!0;let ye,Ze=P(A,$,le);if(z(r.TEXTURE_CUBE_MAP,A,le),re){de&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ze,ve,$.width,$.height);for(let me=0;me<6;me++){ye=F[me].mipmaps;for(let Re=0;Re<ye.length;Re++){const Te=ye[Re];A.format!==1023?ce!==null?de?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Te.width,Te.height,ce,Te.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ve,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Te.width,Te.height,ce,fe,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ve,Te.width,Te.height,0,ce,fe,Te.data)}}}else{ye=A.mipmaps,de&&pe&&(ye.length>0&&Ze++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Ze,ve,F[0].width,F[0].height));for(let me=0;me<6;me++)if(V){de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,F[me].width,F[me].height,ce,fe,F[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,F[me].width,F[me].height,0,ce,fe,F[me].data);for(let Re=0;Re<ye.length;Re++){const Te=ye[Re].image[me].image;de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,Te.width,Te.height,ce,fe,Te.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ve,Te.width,Te.height,0,ce,fe,Te.data)}}else{de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,ce,fe,F[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,ce,fe,F[me]);for(let Re=0;Re<ye.length;Re++){const Te=ye[Re];de?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,ce,fe,Te.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ve,ce,fe,Te.image[me])}}}y(A,le)&&m(r.TEXTURE_CUBE_MAP),ne.__version=Z.version,A.onUpdate&&A.onUpdate(A)}H.__version=A.version}(L,x,M):t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+M)},this.rebindTextures=function(x,M,L){const H=n.get(x);M!==void 0&&K(H.__webglFramebuffer,x,x.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),L!==void 0&&Y(x)},this.setupRenderTarget=function(x){const M=x.texture,L=n.get(x),H=n.get(M);x.addEventListener("dispose",b),x.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=M.version,s.memory.textures++);const A=x.isWebGLCubeRenderTarget===!0,G=x.isWebGLMultipleRenderTargets===!0,J=p(x)||l;if(A){L.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(l&&M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer[Z]=[];for(let ne=0;ne<M.mipmaps.length;ne++)L.__webglFramebuffer[Z][ne]=r.createFramebuffer()}else L.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(l&&M.mipmaps&&M.mipmaps.length>0){L.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)L.__webglFramebuffer[Z]=r.createFramebuffer()}else L.__webglFramebuffer=r.createFramebuffer();if(G)if(i.drawBuffers){const Z=x.texture;for(let ne=0,oe=Z.length;ne<oe;ne++){const ue=n.get(Z[ne]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&x.samples>0&&X(x)===!1){const Z=G?M:[M];L.__webglMultisampledFramebuffer=r.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const oe=Z[ne];L.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,L.__webglColorRenderbuffer[ne]);const ue=a.convert(oe.format,oe.colorSpace),S=a.convert(oe.type),re=g(oe.internalFormat,ue,S,oe.colorSpace,x.isXRRenderTarget===!0),V=N(x);r.renderbufferStorageMultisample(r.RENDERBUFFER,V,re,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,L.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),x.depthBuffer&&(L.__webglDepthRenderbuffer=r.createRenderbuffer(),W(L.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(A){t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),z(r.TEXTURE_CUBE_MAP,M,J);for(let Z=0;Z<6;Z++)if(l&&M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)K(L.__webglFramebuffer[Z][ne],x,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne);else K(L.__webglFramebuffer[Z],x,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);y(M,J)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){const Z=x.texture;for(let ne=0,oe=Z.length;ne<oe;ne++){const ue=Z[ne],S=n.get(ue);t.bindTexture(r.TEXTURE_2D,S.__webglTexture),z(r.TEXTURE_2D,ue,J),K(L.__webglFramebuffer,x,ue,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),y(ue,J)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let Z=r.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(l?Z=x.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Z,H.__webglTexture),z(Z,M,J),l&&M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)K(L.__webglFramebuffer[ne],x,M,r.COLOR_ATTACHMENT0,Z,ne);else K(L.__webglFramebuffer,x,M,r.COLOR_ATTACHMENT0,Z,0);y(M,J)&&m(Z),t.unbindTexture()}x.depthBuffer&&Y(x)},this.updateRenderTargetMipmap=function(x){const M=p(x)||l,L=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let H=0,A=L.length;H<A;H++){const G=L[H];if(y(G,M)){const J=x.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Z=n.get(G).__webglTexture;t.bindTexture(J,Z),m(J),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(x){if(l&&x.samples>0&&X(x)===!1){const M=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],L=x.width,H=x.height;let A=r.COLOR_BUFFER_BIT;const G=[],J=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=n.get(x),ne=x.isWebGLMultipleRenderTargets===!0;if(ne)for(let oe=0;oe<M.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let oe=0;oe<M.length;oe++){G.push(r.COLOR_ATTACHMENT0+oe),x.depthBuffer&&G.push(J);const ue=Z.__ignoreDepthValues!==void 0&&Z.__ignoreDepthValues;if(ue===!1&&(x.depthBuffer&&(A|=r.DEPTH_BUFFER_BIT),x.stencilBuffer&&(A|=r.STENCIL_BUFFER_BIT)),ne&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]),ue===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[J]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[J])),ne){const S=n.get(M[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,S,0)}r.blitFramebuffer(0,0,L,H,0,0,L,H,A,r.NEAREST),o&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,G)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let oe=0;oe<M.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);const ue=n.get(M[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=K,this.useMultisampledRTT=X}function Ho(r,e,t){const n=t.isWebGL2;return{convert:function(i,a=""){let s;const l=De.getTransfer(a);if(i===1009)return r.UNSIGNED_BYTE;if(i===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===1012)return r.UNSIGNED_SHORT;if(i===1013)return r.INT;if(i===1014)return r.UNSIGNED_INT;if(i===1015)return r.FLOAT;if(i===1016)return n?r.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===1023)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===1026)return r.DEPTH_COMPONENT;if(i===1027)return r.DEPTH_STENCIL;if(i===1035)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===1029)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===1031)return r.RG_INTEGER;if(i===1033)return r.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(l===Ne){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===35840||i===35841||i===35842||i===35843){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===36196)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===37492||i===37496){if(s=e.get("WEBGL_compressed_texture_etc"),s===null)return null;if(i===37492)return l===Ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821){if(s=e.get("WEBGL_compressed_texture_astc"),s===null)return null;if(i===37808)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return l===Ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===36492||i===36494||i===36495){if(s=e.get("EXT_texture_compression_bptc"),s===null)return null;if(i===36492)return l===Ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===36284||i===36285||i===36286){if(s=e.get("EXT_texture_compression_rgtc"),s===null)return null;if(i===36492)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===1020?n?r.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}class Go extends at{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pi extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vo={type:"move"};class Qi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null;const l=this._targetRay,h=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),y=this._getHandJoint(o,_);p!==null&&(y.matrix.fromArray(p.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=p.radius),y.visible=p!==null}const c=o.joints["index-finger-tip"],d=o.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,v=.005;o.inputState.pinching&&u>f+v?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&u<=f-v&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Vo)))}return l!==null&&(l.visible=i!==null),h!==null&&(h.visible=a!==null),o!==null&&(o.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ko extends Zt{constructor(e,t){super();const n=this;let i=null,a=1,s=null,l="local-floor",h=1,o=null,c=null,d=null,u=null,f=null,v=null;const _=t.getContextAttributes();let p=null,y=null;const m=[],g=[],P=new Ue;let U=null;const w=new at;w.layers.enable(1),w.viewport=new Ie;const b=new at;b.layers.enable(2),b.viewport=new Ie;const k=[w,b],C=new Go;C.layers.enable(1),C.layers.enable(2);let O=null,ee=null;function T(N){const X=g.indexOf(N.inputSource);if(X===-1)return;const se=m[X];se!==void 0&&(se.update(N.inputSource,N.frame,o||s),se.dispatchEvent({type:N.type,data:N.inputSource}))}function q(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",z);for(let N=0;N<m.length;N++){const X=g[N];X!==null&&(g[N]=null,m[N].disconnect(X))}O=null,ee=null,e.setRenderTarget(p),f=null,u=null,d=null,i=null,y=null,Y.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}function z(N){for(let X=0;X<N.removed.length;X++){const se=N.removed[X],x=g.indexOf(se);x>=0&&(g[x]=null,m[x].disconnect(se))}for(let X=0;X<N.added.length;X++){const se=N.added[X];let x=g.indexOf(se);if(x===-1){for(let L=0;L<m.length;L++){if(L>=g.length){g.push(se),x=L;break}if(g[L]===null){g[L]=se,x=L;break}}if(x===-1)break}const M=m[x];M&&M.connect(se)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let X=m[N];return X===void 0&&(X=new Qi,m[N]=X),X.getTargetRaySpace()},this.getControllerGrip=function(N){let X=m[N];return X===void 0&&(X=new Qi,m[N]=X),X.getGripSpace()},this.getHand=function(N){let X=m[N];return X===void 0&&(X=new Qi,m[N]=X),X.getHandSpace()},this.setFramebufferScaleFactor=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){l=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(N){o=N},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",q),i.addEventListener("inputsourceschange",z),_.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers!==void 0||_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bt(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let X=null,se=null,x=null;_.depth&&(x=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=_.stencil?1027:1026,se=_.stencil?1020:1014);const M={colorFormat:t.RGBA8,depthFormat:x,scaleFactor:a};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(M),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Bt(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new aa(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0}),e.properties.get(y).__ignoreDepthValues=u.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(h),o=null,s=await i.requestReferenceSpace(l),Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};const te=new R,he=new R;function K(N,X){X===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(X.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;C.near=b.near=w.near=N.near,C.far=b.far=w.far=N.far,O===C.near&&ee===C.far||(i.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,ee=C.far);const X=N.parent,se=C.cameras;K(C,X);for(let x=0;x<se.length;x++)K(se[x],X);se.length===2?function(x,M,L){te.setFromMatrixPosition(M.matrixWorld),he.setFromMatrixPosition(L.matrixWorld);const H=te.distanceTo(he),A=M.projectionMatrix.elements,G=L.projectionMatrix.elements,J=A[14]/(A[10]-1),Z=A[14]/(A[10]+1),ne=(A[9]+1)/A[5],oe=(A[9]-1)/A[5],ue=(A[8]-1)/A[0],S=(G[8]+1)/G[0],re=J*ue,V=J*S,F=H/(-ue+S),$=F*-ue;M.matrixWorld.decompose(x.position,x.quaternion,x.scale),x.translateX($),x.translateZ(F),x.matrixWorld.compose(x.position,x.quaternion,x.scale),x.matrixWorldInverse.copy(x.matrixWorld).invert();const le=J+F,ce=Z+F,fe=re-$,ve=V+(H-$),de=ne*Z/ce*le,pe=oe*Z/ce*le;x.projectionMatrix.makePerspective(fe,ve,de,pe,le,ce),x.projectionMatrixInverse.copy(x.projectionMatrix).invert()}(C,w,b):C.projectionMatrix.copy(w.projectionMatrix),function(x,M,L){L===null?x.matrix.copy(M.matrixWorld):(x.matrix.copy(L.matrixWorld),x.matrix.invert(),x.matrix.multiply(M.matrixWorld)),x.matrix.decompose(x.position,x.quaternion,x.scale),x.updateMatrixWorld(!0),x.projectionMatrix.copy(M.projectionMatrix),x.projectionMatrixInverse.copy(M.projectionMatrixInverse),x.isPerspectiveCamera&&(x.fov=2*yi*Math.atan(1/x.projectionMatrix.elements[5]),x.zoom=1)}(N,C,X)},this.getCamera=function(){return C},this.getFoveation=function(){if(u!==null||f!==null)return h},this.setFoveation=function(N){h=N,u!==null&&(u.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)};let W=null;const Y=new Zr;Y.setAnimationLoop(function(N,X){if(c=X.getViewerPose(o||s),v=X,c!==null){const se=c.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let x=!1;se.length!==C.cameras.length&&(C.cameras.length=0,x=!0);for(let M=0;M<se.length;M++){const L=se[M];let H=null;if(f!==null)H=f.getViewport(L);else{const G=d.getViewSubImage(u,L);H=G.viewport,M===0&&(e.setRenderTargetTextures(y,G.colorTexture,u.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(y))}let A=k[M];A===void 0&&(A=new at,A.layers.enable(M),A.viewport=new Ie,k[M]=A),A.matrix.fromArray(L.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(L.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(H.x,H.y,H.width,H.height),M===0&&(C.matrix.copy(A.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),x===!0&&C.cameras.push(A)}}for(let se=0;se<m.length;se++){const x=g[se],M=m[se];x!==null&&M!==void 0&&M.update(x,X,o||s)}W&&W(N,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),v=null}),this.setAnimationLoop=function(N){W=N},this.dispose=function(){}}}function Wo(r,e){function t(i,a){i.matrixAutoUpdate===!0&&i.updateMatrix(),a.value.copy(i.matrix)}function n(i,a){i.opacity.value=a.opacity,a.color&&i.diffuse.value.copy(a.color),a.emissive&&i.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(i.map.value=a.map,t(a.map,i.mapTransform)),a.alphaMap&&(i.alphaMap.value=a.alphaMap,t(a.alphaMap,i.alphaMapTransform)),a.bumpMap&&(i.bumpMap.value=a.bumpMap,t(a.bumpMap,i.bumpMapTransform),i.bumpScale.value=a.bumpScale,a.side===1&&(i.bumpScale.value*=-1)),a.normalMap&&(i.normalMap.value=a.normalMap,t(a.normalMap,i.normalMapTransform),i.normalScale.value.copy(a.normalScale),a.side===1&&i.normalScale.value.negate()),a.displacementMap&&(i.displacementMap.value=a.displacementMap,t(a.displacementMap,i.displacementMapTransform),i.displacementScale.value=a.displacementScale,i.displacementBias.value=a.displacementBias),a.emissiveMap&&(i.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,i.emissiveMapTransform)),a.specularMap&&(i.specularMap.value=a.specularMap,t(a.specularMap,i.specularMapTransform)),a.alphaTest>0&&(i.alphaTest.value=a.alphaTest);const s=e.get(a).envMap;if(s&&(i.envMap.value=s,i.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=a.reflectivity,i.ior.value=a.ior,i.refractionRatio.value=a.refractionRatio),a.lightMap){i.lightMap.value=a.lightMap;const l=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=a.lightMapIntensity*l,t(a.lightMap,i.lightMapTransform)}a.aoMap&&(i.aoMap.value=a.aoMap,i.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,a){a.color.getRGB(i.fogColor.value,qr(r)),a.isFog?(i.fogNear.value=a.near,i.fogFar.value=a.far):a.isFogExp2&&(i.fogDensity.value=a.density)},refreshMaterialUniforms:function(i,a,s,l,h){a.isMeshBasicMaterial||a.isMeshLambertMaterial?n(i,a):a.isMeshToonMaterial?(n(i,a),function(o,c){c.gradientMap&&(o.gradientMap.value=c.gradientMap)}(i,a)):a.isMeshPhongMaterial?(n(i,a),function(o,c){o.specular.value.copy(c.specular),o.shininess.value=Math.max(c.shininess,1e-4)}(i,a)):a.isMeshStandardMaterial?(n(i,a),function(o,c){o.metalness.value=c.metalness,c.metalnessMap&&(o.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,o.metalnessMapTransform)),o.roughness.value=c.roughness,c.roughnessMap&&(o.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,o.roughnessMapTransform)),e.get(c).envMap&&(o.envMapIntensity.value=c.envMapIntensity)}(i,a),a.isMeshPhysicalMaterial&&function(o,c,d){o.ior.value=c.ior,c.sheen>0&&(o.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),o.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(o.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,o.sheenColorMapTransform)),c.sheenRoughnessMap&&(o.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,o.sheenRoughnessMapTransform))),c.clearcoat>0&&(o.clearcoat.value=c.clearcoat,o.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(o.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,o.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(o.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,o.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(o.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,o.clearcoatNormalMapTransform),o.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===1&&o.clearcoatNormalScale.value.negate())),c.iridescence>0&&(o.iridescence.value=c.iridescence,o.iridescenceIOR.value=c.iridescenceIOR,o.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(o.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,o.iridescenceMapTransform)),c.iridescenceThicknessMap&&(o.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,o.iridescenceThicknessMapTransform))),c.transmission>0&&(o.transmission.value=c.transmission,o.transmissionSamplerMap.value=d.texture,o.transmissionSamplerSize.value.set(d.width,d.height),c.transmissionMap&&(o.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,o.transmissionMapTransform)),o.thickness.value=c.thickness,c.thicknessMap&&(o.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,o.thicknessMapTransform)),o.attenuationDistance.value=c.attenuationDistance,o.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(o.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(o.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,o.anisotropyMapTransform))),o.specularIntensity.value=c.specularIntensity,o.specularColor.value.copy(c.specularColor),c.specularColorMap&&(o.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,o.specularColorMapTransform)),c.specularIntensityMap&&(o.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,o.specularIntensityMapTransform))}(i,a,h)):a.isMeshMatcapMaterial?(n(i,a),function(o,c){c.matcap&&(o.matcap.value=c.matcap)}(i,a)):a.isMeshDepthMaterial?n(i,a):a.isMeshDistanceMaterial?(n(i,a),function(o,c){const d=e.get(c).light;o.referencePosition.value.setFromMatrixPosition(d.matrixWorld),o.nearDistance.value=d.shadow.camera.near,o.farDistance.value=d.shadow.camera.far}(i,a)):a.isMeshNormalMaterial?n(i,a):a.isLineBasicMaterial?(function(o,c){o.diffuse.value.copy(c.color),o.opacity.value=c.opacity,c.map&&(o.map.value=c.map,t(c.map,o.mapTransform))}(i,a),a.isLineDashedMaterial&&function(o,c){o.dashSize.value=c.dashSize,o.totalSize.value=c.dashSize+c.gapSize,o.scale.value=c.scale}(i,a)):a.isPointsMaterial?function(o,c,d,u){o.diffuse.value.copy(c.color),o.opacity.value=c.opacity,o.size.value=c.size*d,o.scale.value=.5*u,c.map&&(o.map.value=c.map,t(c.map,o.uvTransform)),c.alphaMap&&(o.alphaMap.value=c.alphaMap,t(c.alphaMap,o.alphaMapTransform)),c.alphaTest>0&&(o.alphaTest.value=c.alphaTest)}(i,a,s,l):a.isSpriteMaterial?function(o,c){o.diffuse.value.copy(c.color),o.opacity.value=c.opacity,o.rotation.value=c.rotation,c.map&&(o.map.value=c.map,t(c.map,o.mapTransform)),c.alphaMap&&(o.alphaMap.value=c.alphaMap,t(c.alphaMap,o.alphaMapTransform)),c.alphaTest>0&&(o.alphaTest.value=c.alphaTest)}(i,a):a.isShadowMaterial?(i.color.value.copy(a.color),i.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function Xo(r,e,t,n){let i={},a={},s=[];const l=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(d,u,f,v){const _=d.value,p=u+"_"+f;if(v[p]===void 0)return v[p]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{const y=v[p];if(typeof _=="number"||typeof _=="boolean"){if(y!==_)return v[p]=_,!0}else if(y.equals(_)===!1)return y.copy(_),!0}return!1}function o(d){const u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function c(d){const u=d.target;u.removeEventListener("dispose",c);const f=s.indexOf(u.__bindingPointIndex);s.splice(f,1),r.deleteBuffer(i[u.id]),delete i[u.id],delete a[u.id]}return{bind:function(d,u){const f=u.program;n.uniformBlockBinding(d,f)},update:function(d,u){let f=i[d.id];f===void 0&&(function(p){const y=p.uniforms;let m=0;const g=16;for(let U=0,w=y.length;U<w;U++){const b=Array.isArray(y[U])?y[U]:[y[U]];for(let k=0,C=b.length;k<C;k++){const O=b[k],ee=Array.isArray(O.value)?O.value:[O.value];for(let T=0,q=ee.length;T<q;T++){const z=o(ee[T]),te=m%g;te!==0&&g-te<z.boundary&&(m+=g-te),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=m,m+=z.storage}}}const P=m%g;P>0&&(m+=g-P),p.__size=m,p.__cache={}}(d),f=function(p){const y=function(){for(let U=0;U<l;U++)if(s.indexOf(U)===-1)return s.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();p.__bindingPointIndex=y;const m=r.createBuffer(),g=p.__size,P=p.usage;return r.bindBuffer(r.UNIFORM_BUFFER,m),r.bufferData(r.UNIFORM_BUFFER,g,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,m),m}(d),i[d.id]=f,d.addEventListener("dispose",c));const v=u.program;n.updateUBOMapping(d,v);const _=e.render.frame;a[d.id]!==_&&(function(p){const y=i[p.id],m=p.uniforms,g=p.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let P=0,U=m.length;P<U;P++){const w=Array.isArray(m[P])?m[P]:[m[P]];for(let b=0,k=w.length;b<k;b++){const C=w[b];if(h(C,P,b,g)===!0){const O=C.__offset,ee=Array.isArray(C.value)?C.value:[C.value];let T=0;for(let q=0;q<ee.length;q++){const z=ee[q],te=o(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,O+T,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,T),T+=te.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(d),a[d.id]=_)},dispose:function(){for(const d in i)r.deleteBuffer(i[d]);s=[],i={},a={}}}}class Aa{constructor(e={}){const{canvas:t=Ga(),context:n=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:o=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;let u;this.isWebGLRenderer=!0,u=n!==null?n.getContextAttributes().alpha:s;const f=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const y=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const g=this;let P=!1,U=0,w=0,b=null,k=-1,C=null;const O=new Ie,ee=new Ie;let T=null;const q=new Pe(0);let z=0,te=t.width,he=t.height,K=1,W=null,Y=null;const N=new Ie(0,0,te,he),X=new Ie(0,0,te,he);let se=!1;const x=new Wi;let M=!1,L=!1,H=null;const A=new ze,G=new Ue,J=new R,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return b===null?K:1}let oe,ue,S,re,V,F,$,le,ce,fe,ve,de,pe,ye,Ze,me,Re,Te,Pn,Yt,Un,st,nt,Kt,I=n;function Dn(E,D){for(let B=0;B<E.length;B++){const Q=E[B],j=t.getContext(Q,D);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mi}`),t.addEventListener("webglcontextlost",rr,!1),t.addEventListener("webglcontextrestored",ar,!1),t.addEventListener("webglcontextcreationerror",sr,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&D.shift(),I=Dn(D,E),I===null)throw Dn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function gn(){oe=new _s(I),ue=new ps(I,oe,e),oe.init(ue),st=new Ho(I,oe,ue),S=new Bo(I,oe,ue),re=new Ms(I),V=new wo,F=new zo(I,oe,S,V,ue,st,re),$=new ms(g),le=new gs(g),ce=new cs(I,ue),nt=new us(I,oe,ce,ue),fe=new vs(I,ce,re,nt),ve=new Ts(I,fe,ce,re),Pn=new ys(I,ue,F),me=new fs(V),de=new Ao(g,$,le,oe,ue,nt,me),pe=new Wo(g,V),ye=new Co,Ze=new No(oe,ue),Te=new hs(g,$,le,S,ve,u,h),Re=new Fo(g,ve,ue),Kt=new Xo(I,re,ue,S),Yt=new ds(I,oe,re,ue),Un=new xs(I,oe,re,ue),re.programs=de.programs,g.capabilities=ue,g.extensions=oe,g.properties=V,g.renderLists=ye,g.shadowMap=Re,g.state=S,g.info=re}gn();const Xe=new ko(g,I);function rr(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ar(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=re.autoReset,D=Re.enabled,B=Re.autoUpdate,Q=Re.needsUpdate,j=Re.type;gn(),re.autoReset=E,Re.enabled=D,Re.autoUpdate=B,Re.needsUpdate=Q,Re.type=j}function sr(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function or(E){const D=E.target;D.removeEventListener("dispose",or),function(B){(function(Q){const j=V.get(Q).programs;j!==void 0&&(j.forEach(function(ae){de.releaseProgram(ae)}),Q.isShaderMaterial&&de.releaseShaderCache(Q))})(B),V.remove(B)}(D)}function lr(E,D,B){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,In(E,D,B),E.side=0,E.needsUpdate=!0,In(E,D,B),E.side=2):In(E,D,B)}this.xr=Xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=oe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=oe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(te,he,!1))},this.getSize=function(E){return E.set(te,he)},this.setSize=function(E,D,B=!0){Xe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(te=E,he=D,t.width=Math.floor(E*K),t.height=Math.floor(D*K),B===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D))},this.getDrawingBufferSize=function(E){return E.set(te*K,he*K).floor()},this.setDrawingBufferSize=function(E,D,B){te=E,he=D,K=B,t.width=Math.floor(E*B),t.height=Math.floor(D*B),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(N)},this.setViewport=function(E,D,B,Q){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,D,B,Q),S.viewport(O.copy(N).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,D,B,Q){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,D,B,Q),S.scissor(ee.copy(X).multiplyScalar(K).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){S.setScissorTest(se=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(E=!0,D=!0,B=!0){let Q=0;if(E){let j=!1;if(b!==null){const ae=b.texture.format;j=ae===1033||ae===1031||ae===1029}if(j){const ae=b.texture.type,ge=ae===1009||ae===1014||ae===1012||ae===1020||ae===1017||ae===1018,_e=Te.getClearColor(),Me=Te.getClearAlpha(),Ee=_e.r,be=_e.g,Ae=_e.b;ge?(f[0]=Ee,f[1]=be,f[2]=Ae,f[3]=Me,I.clearBufferuiv(I.COLOR,0,f)):(v[0]=Ee,v[1]=be,v[2]=Ae,v[3]=Me,I.clearBufferiv(I.COLOR,0,v))}else Q|=I.COLOR_BUFFER_BIT}D&&(Q|=I.DEPTH_BUFFER_BIT),B&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",rr,!1),t.removeEventListener("webglcontextrestored",ar,!1),t.removeEventListener("webglcontextcreationerror",sr,!1),ye.dispose(),Ze.dispose(),V.dispose(),$.dispose(),le.dispose(),ve.dispose(),nt.dispose(),Kt.dispose(),de.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",cr),Xe.removeEventListener("sessionend",hr),H&&(H.dispose(),H=null),Nt.stop()},this.renderBufferDirect=function(E,D,B,Q,j,ae){D===null&&(D=Z);const ge=j.isMesh&&j.matrixWorld.determinant()<0,_e=function(He,ot,Qe,we,Ce){ot.isScene!==!0&&(ot=Z),F.resetTextureUnits();const _n=ot.fog,gi=we.isMeshStandardMaterial?ot.environment:null,Pa=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Et,On=(we.isMeshStandardMaterial?le:$).get(we.envMap||gi),Ua=we.vertexColors===!0&&!!Qe.attributes.color&&Qe.attributes.color.itemSize===4,Da=!!Qe.attributes.tangent&&(!!we.normalMap||we.anisotropy>0),Na=!!Qe.morphAttributes.position,Ia=!!Qe.morphAttributes.normal,Oa=!!Qe.morphAttributes.color;let gr=0;we.toneMapped&&(b!==null&&b.isXRRenderTarget!==!0||(gr=g.toneMapping));const _r=Qe.morphAttributes.position||Qe.morphAttributes.normal||Qe.morphAttributes.color,Fa=_r!==void 0?_r.length:0,Le=V.get(we),Ba=p.state.lights;if(M===!0&&(L===!0||He!==C)){const lt=He===C&&we.id===k;me.setState(we,He,lt)}let ut=!1;we.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==Ba.state.version||Le.outputColorSpace!==Pa||Ce.isBatchedMesh&&Le.batching===!1?ut=!0:Ce.isBatchedMesh||Le.batching!==!0?Ce.isInstancedMesh&&Le.instancing===!1?ut=!0:Ce.isInstancedMesh||Le.instancing!==!0?Ce.isSkinnedMesh&&Le.skinning===!1?ut=!0:Ce.isSkinnedMesh||Le.skinning!==!0?Ce.isInstancedMesh&&Le.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&Le.instancingColor===!1&&Ce.instanceColor!==null||Le.envMap!==On||we.fog===!0&&Le.fog!==_n?ut=!0:Le.numClippingPlanes===void 0||Le.numClippingPlanes===me.numPlanes&&Le.numIntersection===me.numIntersection?(Le.vertexAlphas!==Ua||Le.vertexTangents!==Da||Le.morphTargets!==Na||Le.morphNormals!==Ia||Le.morphColors!==Oa||Le.toneMapping!==gr||ue.isWebGL2===!0&&Le.morphTargetsCount!==Fa)&&(ut=!0):ut=!0:ut=!0:ut=!0:ut=!0:(ut=!0,Le.__version=we.version);let Ot=Le.currentProgram;ut===!0&&(Ot=In(we,ot,Ce));let vr=!1,vn=!1,_i=!1;const je=Ot.getUniforms(),Ft=Le.uniforms;if(S.useProgram(Ot.program)&&(vr=!0,vn=!0,_i=!0),we.id!==k&&(k=we.id,vn=!0),vr||C!==He){je.setValue(I,"projectionMatrix",He.projectionMatrix),je.setValue(I,"viewMatrix",He.matrixWorldInverse);const lt=je.map.cameraPosition;lt!==void 0&&lt.setValue(I,J.setFromMatrixPosition(He.matrixWorld)),ue.logarithmicDepthBuffer&&je.setValue(I,"logDepthBufFC",2/(Math.log(He.far+1)/Math.LN2)),(we.isMeshPhongMaterial||we.isMeshToonMaterial||we.isMeshLambertMaterial||we.isMeshBasicMaterial||we.isMeshStandardMaterial||we.isShaderMaterial)&&je.setValue(I,"isOrthographic",He.isOrthographicCamera===!0),C!==He&&(C=He,vn=!0,_i=!0)}if(Ce.isSkinnedMesh){je.setOptional(I,Ce,"bindMatrix"),je.setOptional(I,Ce,"bindMatrixInverse");const lt=Ce.skeleton;lt&&(ue.floatVertexTextures?(lt.boneTexture===null&&lt.computeBoneTexture(),je.setValue(I,"boneTexture",lt.boneTexture,F)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Ce.isBatchedMesh&&(je.setOptional(I,Ce,"batchingTexture"),je.setValue(I,"batchingTexture",Ce._matricesTexture,F));const vi=Qe.morphAttributes;(vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0&&ue.isWebGL2===!0)&&Pn.update(Ce,Qe,Ot),(vn||Le.receiveShadow!==Ce.receiveShadow)&&(Le.receiveShadow=Ce.receiveShadow,je.setValue(I,"receiveShadow",Ce.receiveShadow)),we.isMeshGouraudMaterial&&we.envMap!==null&&(Ft.envMap.value=On,Ft.flipEnvMap.value=On.isCubeTexture&&On.isRenderTargetTexture===!1?-1:1),vn&&(je.setValue(I,"toneMappingExposure",g.toneMappingExposure),Le.needsLights&&(dt=_i,(_t=Ft).ambientLightColor.needsUpdate=dt,_t.lightProbe.needsUpdate=dt,_t.directionalLights.needsUpdate=dt,_t.directionalLightShadows.needsUpdate=dt,_t.pointLights.needsUpdate=dt,_t.pointLightShadows.needsUpdate=dt,_t.spotLights.needsUpdate=dt,_t.spotLightShadows.needsUpdate=dt,_t.rectAreaLights.needsUpdate=dt,_t.hemisphereLights.needsUpdate=dt),_n&&we.fog===!0&&pe.refreshFogUniforms(Ft,_n),pe.refreshMaterialUniforms(Ft,we,K,he,H),di.upload(I,fr(Le),Ft,F));var _t,dt;if(we.isShaderMaterial&&we.uniformsNeedUpdate===!0&&(di.upload(I,fr(Le),Ft,F),we.uniformsNeedUpdate=!1),we.isSpriteMaterial&&je.setValue(I,"center",Ce.center),je.setValue(I,"modelViewMatrix",Ce.modelViewMatrix),je.setValue(I,"normalMatrix",Ce.normalMatrix),je.setValue(I,"modelMatrix",Ce.matrixWorld),we.isShaderMaterial||we.isRawShaderMaterial){const lt=we.uniformsGroups;for(let xi=0,za=lt.length;xi<za;xi++)if(ue.isWebGL2){const xr=lt[xi];Kt.update(xr,Ot),Kt.bind(xr,Ot)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ot}(E,D,B,Q,j);S.setMaterial(Q,ge);let Me=B.index,Ee=1;if(Q.wireframe===!0){if(Me=fe.getWireframeAttribute(B),Me===void 0)return;Ee=2}const be=B.drawRange,Ae=B.attributes.position;let Oe=be.start*Ee,ht=(be.start+be.count)*Ee;ae!==null&&(Oe=Math.max(Oe,ae.start*Ee),ht=Math.min(ht,(ae.start+ae.count)*Ee)),Me!==null?(Oe=Math.max(Oe,0),ht=Math.min(ht,Me.count)):Ae!=null&&(Oe=Math.max(Oe,0),ht=Math.min(ht,Ae.count));const St=ht-Oe;if(St<0||St===1/0)return;let It;nt.setup(j,Q,_e,B,Me);let Fe=Yt;if(Me!==null&&(It=ce.get(Me),Fe=Un,Fe.setIndex(It)),j.isMesh)Q.wireframe===!0?(S.setLineWidth(Q.wireframeLinewidth*ne()),Fe.setMode(I.LINES)):Fe.setMode(I.TRIANGLES);else if(j.isLine){let He=Q.linewidth;He===void 0&&(He=1),S.setLineWidth(He*ne()),j.isLineSegments?Fe.setMode(I.LINES):j.isLineLoop?Fe.setMode(I.LINE_LOOP):Fe.setMode(I.LINE_STRIP)}else j.isPoints?Fe.setMode(I.POINTS):j.isSprite&&Fe.setMode(I.TRIANGLES);if(j.isBatchedMesh)Fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)Fe.renderInstances(Oe,St,j.count);else if(B.isInstancedBufferGeometry){const He=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ot=Math.min(B.instanceCount,He);Fe.renderInstances(Oe,St,ot)}else Fe.render(Oe,St)},this.compile=function(E,D,B=null){B===null&&(B=E),p=Ze.get(B),p.init(),m.push(p),B.traverseVisible(function(j){j.isLight&&j.layers.test(D.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),E!==B&&E.traverseVisible(function(j){j.isLight&&j.layers.test(D.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(g._useLegacyLights);const Q=new Set;return E.traverse(function(j){const ae=j.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const _e=ae[ge];lr(_e,B,j),Q.add(_e)}else lr(ae,B,j),Q.add(ae)}),m.pop(),p=null,Q},this.compileAsync=function(E,D,B=null){const Q=this.compile(E,D,B);return new Promise(j=>{function ae(){Q.forEach(function(ge){V.get(ge).currentProgram.isReady()&&Q.delete(ge)}),Q.size!==0?setTimeout(ae,10):j(E)}oe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let mi=null;function cr(){Nt.stop()}function hr(){Nt.start()}const Nt=new Zr;function ur(E,D,B,Q){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||x.intersectsSprite(E)){Q&&J.setFromMatrixPosition(E.matrixWorld).applyMatrix4(A);const ae=ve.update(E),ge=E.material;ge.visible&&_.push(E,ae,ge,B,J.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||x.intersectsObject(E))){const ae=ve.update(E),ge=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),J.copy(E.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),J.copy(ae.boundingSphere.center)),J.applyMatrix4(E.matrixWorld).applyMatrix4(A)),Array.isArray(ge)){const _e=ae.groups;for(let Me=0,Ee=_e.length;Me<Ee;Me++){const be=_e[Me],Ae=ge[be.materialIndex];Ae&&Ae.visible&&_.push(E,ae,Ae,B,J.z,be)}}else ge.visible&&_.push(E,ae,ge,B,J.z,null)}}const j=E.children;for(let ae=0,ge=j.length;ae<ge;ae++)ur(j[ae],D,B,Q)}function dr(E,D,B,Q){const j=E.opaque,ae=E.transmissive,ge=E.transparent;p.setupLightsView(B),M===!0&&me.setGlobalState(g.clippingPlanes,B),ae.length>0&&function(_e,Me,Ee,be){if((Ee.isScene===!0?Ee.overrideMaterial:null)!==null)return;const Oe=ue.isWebGL2;H===null&&(H=new Bt(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:Oe?4:0})),g.getDrawingBufferSize(G),Oe?H.setSize(G.x,G.y):H.setSize(bi(G.x),bi(G.y));const ht=g.getRenderTarget();g.setRenderTarget(H),g.getClearColor(q),z=g.getClearAlpha(),z<1&&g.setClearColor(16777215,.5),g.clear();const St=g.toneMapping;g.toneMapping=0,Nn(_e,Ee,be),F.updateMultisampleRenderTarget(H),F.updateRenderTargetMipmap(H);let It=!1;for(let Fe=0,He=Me.length;Fe<He;Fe++){const ot=Me[Fe],Qe=ot.object,we=ot.geometry,Ce=ot.material,_n=ot.group;if(Ce.side===2&&Qe.layers.test(be.layers)){const gi=Ce.side;Ce.side=1,Ce.needsUpdate=!0,pr(Qe,Ee,be,we,Ce,_n),Ce.side=gi,Ce.needsUpdate=!0,It=!0}}It===!0&&(F.updateMultisampleRenderTarget(H),F.updateRenderTargetMipmap(H)),g.setRenderTarget(ht),g.setClearColor(q,z),g.toneMapping=St}(j,ae,D,B),Q&&S.viewport(O.copy(Q)),j.length>0&&Nn(j,D,B),ae.length>0&&Nn(ae,D,B),ge.length>0&&Nn(ge,D,B),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Nn(E,D,B){const Q=D.isScene===!0?D.overrideMaterial:null;for(let j=0,ae=E.length;j<ae;j++){const ge=E[j],_e=ge.object,Me=ge.geometry,Ee=Q===null?ge.material:Q,be=ge.group;_e.layers.test(B.layers)&&pr(_e,D,B,Me,Ee,be)}}function pr(E,D,B,Q,j,ae){E.onBeforeRender(g,D,B,Q,j,ae),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(g,D,B,Q,E,ae),j.transparent===!0&&j.side===2&&j.forceSinglePass===!1?(j.side=1,j.needsUpdate=!0,g.renderBufferDirect(B,D,Q,j,E,ae),j.side=0,j.needsUpdate=!0,g.renderBufferDirect(B,D,Q,j,E,ae),j.side=2):g.renderBufferDirect(B,D,Q,j,E,ae),E.onAfterRender(g,D,B,Q,j,ae)}function In(E,D,B){D.isScene!==!0&&(D=Z);const Q=V.get(E),j=p.state.lights,ae=p.state.shadowsArray,ge=j.state.version,_e=de.getParameters(E,j.state,ae,D,B),Me=de.getProgramCacheKey(_e);let Ee=Q.programs;Q.environment=E.isMeshStandardMaterial?D.environment:null,Q.fog=D.fog,Q.envMap=(E.isMeshStandardMaterial?le:$).get(E.envMap||Q.environment),Ee===void 0&&(E.addEventListener("dispose",or),Ee=new Map,Q.programs=Ee);let be=Ee.get(Me);if(be!==void 0){if(Q.currentProgram===be&&Q.lightsStateVersion===ge)return mr(E,_e),be}else _e.uniforms=de.getUniforms(E),E.onBuild(B,_e,g),E.onBeforeCompile(_e,g),be=de.acquireProgram(_e,Me),Ee.set(Me,be),Q.uniforms=_e.uniforms;const Ae=Q.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Ae.clippingPlanes=me.uniform),mr(E,_e),Q.needsLights=function(Oe){return Oe.isMeshLambertMaterial||Oe.isMeshToonMaterial||Oe.isMeshPhongMaterial||Oe.isMeshStandardMaterial||Oe.isShadowMaterial||Oe.isShaderMaterial&&Oe.lights===!0}(E),Q.lightsStateVersion=ge,Q.needsLights&&(Ae.ambientLightColor.value=j.state.ambient,Ae.lightProbe.value=j.state.probe,Ae.directionalLights.value=j.state.directional,Ae.directionalLightShadows.value=j.state.directionalShadow,Ae.spotLights.value=j.state.spot,Ae.spotLightShadows.value=j.state.spotShadow,Ae.rectAreaLights.value=j.state.rectArea,Ae.ltc_1.value=j.state.rectAreaLTC1,Ae.ltc_2.value=j.state.rectAreaLTC2,Ae.pointLights.value=j.state.point,Ae.pointLightShadows.value=j.state.pointShadow,Ae.hemisphereLights.value=j.state.hemi,Ae.directionalShadowMap.value=j.state.directionalShadowMap,Ae.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ae.spotShadowMap.value=j.state.spotShadowMap,Ae.spotLightMatrix.value=j.state.spotLightMatrix,Ae.spotLightMap.value=j.state.spotLightMap,Ae.pointShadowMap.value=j.state.pointShadowMap,Ae.pointShadowMatrix.value=j.state.pointShadowMatrix),Q.currentProgram=be,Q.uniformsList=null,be}function fr(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=di.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function mr(E,D){const B=V.get(E);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}Nt.setAnimationLoop(function(E){mi&&mi(E)}),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(E){mi=E,Xe.setAnimationLoop(E),E===null?Nt.stop():Nt.start()},Xe.addEventListener("sessionstart",cr),Xe.addEventListener("sessionend",hr),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(P===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(D),D=Xe.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,D,b),p=Ze.get(E,m.length),p.init(),m.push(p),A.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),x.setFromProjectionMatrix(A),L=this.localClippingEnabled,M=me.init(this.clippingPlanes,L),_=ye.get(E,y.length),_.init(),y.push(_),ur(E,D,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(W,Y),this.info.render.frame++,M===!0&&me.beginShadows();const B=p.state.shadowsArray;if(Re.render(B,E,D),M===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Te.render(_,E),p.setupLights(g._useLegacyLights),D.isArrayCamera){const Q=D.cameras;for(let j=0,ae=Q.length;j<ae;j++){const ge=Q[j];dr(_,E,ge,ge.viewport)}}else dr(_,E,D);b!==null&&(F.updateMultisampleRenderTarget(b),F.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(g,E,D),nt.resetDefaultState(),k=-1,C=null,m.pop(),p=m.length>0?m[m.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,D,B){V.get(E.texture).__webglTexture=D,V.get(E.depthTexture).__webglTexture=B;const Q=V.get(E);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=B===void 0,Q.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const B=V.get(E);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,B=0){b=E,U=D,w=B;let Q=!0,j=null,ae=!1,ge=!1;if(E){const _e=V.get(E);_e.__useDefaultFramebuffer!==void 0?(S.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1):_e.__webglFramebuffer===void 0?F.setupRenderTarget(E):_e.__hasExternalTextures&&F.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ge=!0);const Ee=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=Array.isArray(Ee[D])?Ee[D][B]:Ee[D],ae=!0):j=ue.isWebGL2&&E.samples>0&&F.useMultisampledRTT(E)===!1?V.get(E).__webglMultisampledFramebuffer:Array.isArray(Ee)?Ee[B]:Ee,O.copy(E.viewport),ee.copy(E.scissor),T=E.scissorTest}else O.copy(N).multiplyScalar(K).floor(),ee.copy(X).multiplyScalar(K).floor(),T=se;if(S.bindFramebuffer(I.FRAMEBUFFER,j)&&ue.drawBuffers&&Q&&S.drawBuffers(E,j),S.viewport(O),S.scissor(ee),S.setScissorTest(T),ae){const _e=V.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,B)}else if(ge){const _e=V.get(E.texture),Me=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_e.__webglTexture,B||0,Me)}k=-1},this.readRenderTargetPixels=function(E,D,B,Q,j,ae,ge){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e){S.bindFramebuffer(I.FRAMEBUFFER,_e);try{const Me=E.texture,Ee=Me.format,be=Me.type;if(Ee!==1023&&st.convert(Ee)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");const Ae=be===1016&&(oe.has("EXT_color_buffer_half_float")||ue.isWebGL2&&oe.has("EXT_color_buffer_float"));if(!(be===1009||st.convert(be)===I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)||be===1015&&(ue.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float"))||Ae))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");D>=0&&D<=E.width-Q&&B>=0&&B<=E.height-j&&I.readPixels(D,B,Q,j,st.convert(Ee),st.convert(be),ae)}finally{const Me=b!==null?V.get(b).__webglFramebuffer:null;S.bindFramebuffer(I.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(E,D,B=0){const Q=Math.pow(2,-B),j=Math.floor(D.image.width*Q),ae=Math.floor(D.image.height*Q);F.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,E.x,E.y,j,ae),S.unbindTexture()},this.copyTextureToTexture=function(E,D,B,Q=0){const j=D.image.width,ae=D.image.height,ge=st.convert(B.format),_e=st.convert(B.type);F.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,E.x,E.y,j,ae,ge,_e,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,ge,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,Q,E.x,E.y,ge,_e,D.image),Q===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),S.unbindTexture()},this.copyTextureToTexture3D=function(E,D,B,Q,j=0){if(g.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");const ae=E.max.x-E.min.x+1,ge=E.max.y-E.min.y+1,_e=E.max.z-E.min.z+1,Me=st.convert(Q.format),Ee=st.convert(Q.type);let be;if(Q.isData3DTexture)F.setTexture3D(Q,0),be=I.TEXTURE_3D;else{if(!Q.isDataArrayTexture&&!Q.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");F.setTexture2DArray(Q,0),be=I.TEXTURE_2D_ARRAY}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ae=I.getParameter(I.UNPACK_ROW_LENGTH),Oe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ht=I.getParameter(I.UNPACK_SKIP_PIXELS),St=I.getParameter(I.UNPACK_SKIP_ROWS),It=I.getParameter(I.UNPACK_SKIP_IMAGES),Fe=B.isCompressedTexture?B.mipmaps[j]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(be,j,D.x,D.y,D.z,ae,ge,_e,Me,Ee,Fe.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(be,j,D.x,D.y,D.z,ae,ge,_e,Me,Fe.data)):I.texSubImage3D(be,j,D.x,D.y,D.z,ae,ge,_e,Me,Ee,Fe),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ae),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Oe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ht),I.pixelStorei(I.UNPACK_SKIP_ROWS,St),I.pixelStorei(I.UNPACK_SKIP_IMAGES,It),j===0&&Q.generateMipmaps&&I.generateMipmap(be),S.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?F.setTextureCube(E,0):E.isData3DTexture?F.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?F.setTexture2DArray(E,0):F.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){U=0,w=0,b=null,S.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Si?"display-p3":"srgb",t.unpackColorSpace=De.workingColorSpace===Fn?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?3001:3e3}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===3001?ke:Et}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}(class extends Aa{}).prototype.isWebGL1Renderer=!0;class ir{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new ir(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jo extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class qo extends tt{constructor(e,t,n,i,a,s,l,h,o){super(e,t,n,i,a,s,l,h,o),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $i extends Ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const er=new ze,wa=new R,Ra=new R;class Ca{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(wa),Ra.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ra),t.updateMatrixWorld(),er.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(er),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(er)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const La=new ze,Cn=new R,tr=new R;class Yo extends Ca{constructor(){super(new at(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Ie(2,1,1,1),new Ie(0,1,1,1),new Ie(3,1,1,1),new Ie(1,1,1,1),new Ie(3,0,1,1),new Ie(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Cn.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cn),tr.copy(n.position),tr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(tr),n.updateMatrixWorld(),i.makeTranslation(-Cn.x,-Cn.y,-Cn.z),La.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La)}}class Ko extends $i{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yo}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zo extends Ca{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jo extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Zo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qo extends $i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mi}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mi);export{Qo as A,qo as C,Jo as D,ir as F,at as P,jo as S,Aa as W,Ha as a,ke as b,Ko as c};
